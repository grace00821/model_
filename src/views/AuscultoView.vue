<template>
  <TopTitle title="ausculto" :return-arrow="true" />
  <v-container>
    <v-btn block @click="startRecord">Record</v-btn>
    <PlaceHolder />
    <v-btn block @click="stopRecord">Stop</v-btn>
    <PlaceHolder />
    <div id="audioPlayer"></div>
    <v-btn block @click="shareAudio">Share</v-btn>
    <PlaceHolder />
  </v-container>
</template>

<script>
import Recorder from "recorder-js";
import PlaceHolder from "@/components/PlaceHolder";
import TopTitle from "@/components/TopTitle";
import * as tf from "@tensorflow/tfjs";
import Denoiser from "@/Denoiser";
import Despiker from "@/Despiker";
import { resample } from "wave-resampler";
import bufferToWav from "audiobuffer-to-wav";

const MODEL_R_PATH = "/models/recognition/model.json";

let recorder;
let recorder2;
let gumStream;
let gumStream2;
let downloadUrl;
let audioDom;
let audioContext;
let audioBlob;

// recorder: null,
//     gumStream: null,
//     downloadUrl: null,
//     audioDom: null,

export default {
  name: "AuscultoView",
  components: { TopTitle, PlaceHolder },
  data() {
    return {
      timer: null,
      sampleRate: null,
      // for heart beat detection
      heartDetectArray: null,
      prediction: null,
      // for length
      hsRecording: null,
      hsBlobs: null,
    };
  },
  async mounted() {},
  methods: {
    navigateBack() {
      history.back();
    },
    async initMic() {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();

      this.sampleRate = audioContext.sampleRate;

      audioDom = document.createElement("audio");

      let source = audioContext.createMediaElementSource(audioDom);
      let gainNode = audioContext.createGain();
      gainNode.gain.value = 10;
      source.connect(gainNode);
      gainNode.connect(audioContext.destination);

      recorder = new Recorder(audioContext, {
        numChannels: 1,
      });
      recorder2 = new Recorder(audioContext, {
        numChannels: 1,
      });

      await navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (stream) {
          recorder.init(stream);
          recorder2.init(stream);
          gumStream = stream;
          gumStream2 = stream;
        })
        .catch((err) => {
          console.log("Uh oh... unable to get stream...", err);
        });
      await recorder2.start();
      await recorder.start().then(() => {
        this.timer = setInterval(() => this.pauseAndStartListening(), 1000);
      });
    },
    async pauseAndStartListening() {
      console.log("pause&start");
      await recorder
        .stop()
        .then(({ blob, buffer }) => {
          console.log(blob);
          const downSampledArray = this.downSample(
            tf
              .buffer([buffer[0].length], "float32", buffer[0])
              .toTensor()
              .arraySync(),
            1000
          );
          this.heartDetectArray = this.cropAndPad(downSampledArray);
          this.doPrediction(this.heartDetectArray).then((res) => {
            // The prediction is printed out here.
            console.log(res.arraySync()[0]);
          });
          this.hsRecording.push(...this.heartDetectArray);
          this.hsBlobs.push(blob);
        })
        .then(await recorder.start());
    },
    startRecord() {
      console.log("Start Recording");
      this.initMic();
    },
    async stopRecord() {
      await clearInterval(this.timer);
      console.log("Stop Recording");
      // await recorder.stop();
      await recorder.stop().then(({ blob, buffer }) => {
        document.getElementById("audioPlayer").appendChild(audioDom);

        const originalArray = tf
          .buffer([buffer[0].length], "float32", buffer[0])
          .toTensor()
          .arraySync();
        const cropAndPadArray = this.cropAndPad(
          originalArray,
          audioContext.sampleRate * 10
        );

        let denoiser = new Denoiser(cropAndPadArray);
        const denoised = denoiser.dwtDenoise();
        console.log("denoised");
        console.log(denoised);

        let despiker = new Despiker(denoised[0]);
        const despiked = despiker.despike();
        console.log("despiked");
        console.log(despiked);

        let upsampled = resample(despiked, 10000, audioContext.sampleRate, {
          method: "sinc",
        });
        console.log("upsampled");
        console.log(upsampled);
        console.log("sampleRate");
        console.log(audioContext.sampleRate);

        let audioBuffer = audioContext.createBuffer(
          1,
          upsampled.length,
          audioContext.sampleRate
        );

        let wav = bufferToWav(audioBuffer);
        let newblob = new window.Blob([new DataView(wav)], {
          type: "audio/wav",
        });

        blob = newblob;

        downloadUrl = URL.createObjectURL(blob);
        audioBlob = blob;
        audioDom.controls = true;
        audioDom.src = downloadUrl;
      });
      gumStream.getAudioTracks()[0].stop();
      console.log("gumStream stop");
      gumStream2.getAudioTracks()[0].stop();
      console.log("gumStream2 stop");
    },
    downSample(array, sr) {
      const sampleRate = this.sampleRate;
      const mod = Math.round(sampleRate / sr);
      let result = [];
      for (let i = 0; i < array.length; i++) {
        if (i % mod === 0) {
          result.push(array[i]);
        }
      }
      console.log("downSample ran");
      return result;
    },
    cropAndPad(array, sr = 1000) {
      console.log("cropAndPad ran");
      if (array.length === sr) {
        return array;
      } else if (array.length < sr) {
        while (array.length < sr) array.push(0);
        return array;
      } else {
        return array.slice(0, sr);
      }
    },
    async doPrediction(tensor) {
      const min = Math.min(...tensor);
      const max = Math.max(...tensor);

      if (min === 0 && max === 0) {
        console.log("The mic is not available, no sound recorded");
        return tf.tensor([0]);
      } else {
        let standardTensor = this.minmaxScale(tensor);
        standardTensor = tf.tensor(standardTensor);
        standardTensor = standardTensor.reshape([
          1,
          standardTensor.shape[0],
          1,
        ]);
        let output = "";
        await tf.loadLayersModel(MODEL_R_PATH).then((res) => {
          output = res.predict(standardTensor);
        });
        // output.print();
        return new Promise((resolve) => {
          resolve(output);
        });
      }
    },
    minmaxScale(row) {
      let scaledRow = [];
      const min = Math.min(...row);
      const dif = Math.max(...row) - min;
      row.forEach((element) => {
        scaledRow.push((element - min) / dif);
      });
      return scaledRow;
    },
    shareAudio() {
      let audioFile = new File([audioBlob], "audio.wav", {
        type: "audio/wav",
      });
      let filesArray = [audioFile];
      if (
        navigator.canShare &&
        this.navigator.canShare({ files: filesArray })
      ) {
        navigator
          .share({
            files: filesArray,
          })
          .then(() => console.log("Share was successful."))
          .catch((error) => console.log("Sharing failed", error));
      } else {
        console.log("Your system doesn't support sharing files.");
      }
    },
  },
};
</script>

<style scoped></style>
