<template>
  <v-container>
    <h4 style="font-weight: bolder; text-align: center">
      <v-icon class="float-left" @click="navigateBack">mdi-arrow-left</v-icon>
      ausculto
    </h4>
    <PlaceHolder />
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
  components: { PlaceHolder },
  data() {
    return {};
  },
  methods: {
    navigateBack() {
      history.back();
    },
    async initMic() {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();

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

      await recorder.start();
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
  },
};
</script>

<style scoped></style>
