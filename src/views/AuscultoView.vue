<template>
  <TopTitle title="ausculto" :return-arrow="true" />
  <v-container>
    <v-btn block @click="startRecord">Record</v-btn>
    <PlaceHolder />
    <v-btn block @click="stopRecord">Stop</v-btn>
    <PlaceHolder />
    <div id="audioPlayer"></div>
  </v-container>
</template>

<script>
import Recorder from "recorder-js";
import PlaceHolder from "@/components/PlaceHolder";
import TopTitle from "@/components/TopTitle";
import * as tf from "@tensorflow/tfjs";
const MODEL_R_PATH = "/models/recognition/model.json";

let recorder;
let gumStream;
let downloadUrl;
let audioDom;
let audioContext;

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

      await navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (stream) {
          recorder.init(stream);
          gumStream = stream;
        })
        .catch((err) => {
          console.log("Uh oh... unable to get stream...", err);
        });

      await recorder.start().then(() => {
        this.timer = setInterval(() => this.pauseAndStartListening(), 1000);
      });
    },
    async pauseAndStartListening() {
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
          const heartDetectArray = this.cropAndPad(downSampledArray);
          this.doPrediction(heartDetectArray).then((res) => {
            // The prediction is printed out here.
            console.log(res.arraySync()[0]);
          });
        })
        .then(await recorder.start());
    },
    startRecord() {
      console.log("Start Recording");
      this.initMic();
    },
    async stopRecord() {
      document.getElementById("audioPlayer").appendChild(audioDom);
      console.log("Stop Recording");
      await recorder.stop().then(({ blob, buffer }) => {
        downloadUrl = URL.createObjectURL(blob);
        console.log(downloadUrl);
        audioDom.controls = true;
        audioDom.src = URL.createObjectURL(blob);
        console.log(blob);
        console.log(buffer);
      });
      gumStream.getAudioTracks()[0].stop();
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
      return result;
    },
    cropAndPad(array, sr = 1000) {
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
  },
};
</script>

<style scoped></style>
