<template>
  <v-container>
    <h4>UPCOMING</h4>
    <PlaceHolder />
    <v-card elevation="4">
      <v-card-title> Record your heart sound </v-card-title>
      <v-card-text
        >Use <i>ausculto</i> to record your heart sound and send it to Dr
        Wong.</v-card-text
      >
      <v-card-actions class="justify-end">
        <v-btn elevation="0" color="teal"> Enter </v-btn>
      </v-card-actions>
    </v-card>
    <PlaceHolder />
    <h4>SUGGESTION</h4>
    <PlaceHolder />
    <v-card elevation="4">
      <v-card-title> Watch the tutorial video </v-card-title>
      <v-card-text
        >Watch the video about the auscultation sites to facilitate your
        self-recording.</v-card-text
      >
      <v-card-actions class="justify-end">
        <v-btn elevation="0" color="teal"> Watch </v-btn>
      </v-card-actions>
    </v-card>
    <PlaceHolder />
    <v-card elevation="4">
      <v-card-title> Talk with our triaging chatbot </v-card-title>
      <v-card-text
        >Our chatbot will give you triaging suggestion based on your
        situation.</v-card-text
      >
      <v-card-actions class="justify-end">
        <v-btn elevation="0" color="teal"> Start a chat </v-btn>
      </v-card-actions>
    </v-card>
    <PlaceHolder />
  </v-container>
</template>

<script>
import PlaceHolder from "@/components/PlaceHolder";
export default {
  name: "TodayFocus",

  components: {
    PlaceHolder,
  },
};
</script>

<style scoped></style>
