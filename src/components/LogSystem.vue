<template>
  <v-expand-transition>
    <v-container v-show="showLog">
      <v-toolbar :elevation="4" density="compact">
        <v-app-bar-nav-icon @click="exitSystem"
          ><v-icon>mdi-close</v-icon></v-app-bar-nav-icon
        >
        <v-toolbar-title>Health Log</v-toolbar-title>
      </v-toolbar>
      <log-content></log-content>
    </v-container>
  </v-expand-transition>
  <v-container>
    <v-text-field
      label="Ask or Note down ... "
      variant="outlined"
      @click="enterSystem"
      append-inner-icon="mdi-send"
      @click:append-inner="sendMessage"
    ></v-text-field>
  </v-container>
</template>

<script>
import LogContent from "@/components/LogContent";
export default {
  name: "LogSystem",
  components: { LogContent },
  onMounted() {
    this.showLog = false;
  },
  data() {
    return {
      showLog: false,
    };
  },
  methods: {
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
