<template>
  <!--  <v-expand-transition>-->
  <!--    <v-container v-show="showLog">-->
  <!--      <v-toolbar :elevation="4" density="compact">-->
  <!--        <v-app-bar-nav-icon @click="exitSystem"-->
  <!--          ><v-icon>mdi-close</v-icon></v-app-bar-nav-icon-->
  <!--        >-->
  <!--        <v-toolbar-title>Health Log</v-toolbar-title>-->
  <!--      </v-toolbar>-->
  <!--      <log-content></log-content>-->
  <!--    </v-container>-->
  <!--  </v-expand-transition>-->
  <v-container>
    <v-text-field
      label="Ask or Note down ... "
      variant="outlined"
      v-model="inputData"
    >
      <template v-slot:append-inner>
        <v-icon>mdi-camera-outline</v-icon>
        <v-icon>mdi-microphone-outline</v-icon>
      </template>
    </v-text-field>
    <v-row>
      <v-col
        ><v-btn
          block
          variant="tonal"
          prepend-icon="mdi-message-outline"
          style="background-color: #59c5be; font-weight: bolder; color: white"
          @click="enterChat(true)"
        >
          Ask Mobo
        </v-btn></v-col
      >
      <v-col
        ><v-btn
          block
          variant="tonal"
          prepend-icon="mdi-clipboard-outline"
          style="background-color: #daedec; font-weight: bolder"
          @click="enterChat(false)"
        >
          Record
        </v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LogSystem",
  components: {},
  onMounted() {
    // this.showLog = false;
  },
  data() {
    return {
      inputData: "",
    };
  },
  methods: {
    enterChat(questionFlag) {
      let upcomingNewRecord = {};
      upcomingNewRecord.timestamp = Date.now();
      upcomingNewRecord.inputData = this.inputData;
      if (questionFlag) {
        upcomingNewRecord.datatype = "conversation";
      } else {
        upcomingNewRecord.datatype = "textlog";
      }
      window.localStorage.setItem(
        "upcomingNewRecord",
        JSON.stringify(upcomingNewRecord)
      );
      this.$router.push("/inchat");
    },
    enterSystem() {
      this.showLog = true;
    },
    exitSystem() {
      this.showLog = false;
    },
    sendMessage() {},
  },
};
</script>

<style scoped></style>
