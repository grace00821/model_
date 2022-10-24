<template>
  <v-row style="margin: 15px; justify-content: end"
    ><v-card elevation="3" shaped @click="getAnswer(1)"
      ><v-card-title>Message</v-card-title></v-card
    ></v-row
  >
  <v-row v-show="answer1" style="margin: 15px; justify-content: start"
    ><v-card elevation="3" shaped :loading="loading1"
      ><v-card-title>......</v-card-title></v-card
    ></v-row
  >
  <v-row style="margin: 15px; justify-content: end"
    ><v-card elevation="3" shaped @click="getAnswer(2)"
      ><v-card-title>Message</v-card-title></v-card
    ></v-row
  >
  <v-row v-show="answer2" style="margin: 15px; justify-content: start"
    ><v-card elevation="3" shaped :loading="loading2"
      ><v-card-title>......</v-card-title></v-card
    ></v-row
  >
  <v-row style="margin: 15px; justify-content: end"
    ><v-card elevation="3" shaped @click="getAnswer(3)"
      ><v-card-title>Message</v-card-title></v-card
    ></v-row
  >
  <v-row v-show="answer3" style="margin: 15px; justify-content: start">
    <v-card elevation="3" shaped :loading="loading3"
      ><v-card-title>......</v-card-title></v-card
    ></v-row
  >
</template>

<script>
import { register } from "vue-advanced-chat";
register();
export default {
  data() {
    return {
      answer1: false,
      answer2: false,
      answer3: false,
      loading1: false,
      loading2: false,
      loading3: false,
    };
  },
  name: "LogContent",
  methods: {
    getAnswer(index) {
      if (index === 1) {
        this.loading1 = true;
        this.answer1 = true;
      } else if (index === 2) {
        this.loading2 = true;
        this.answer2 = true;
      } else {
        this.loading3 = true;
        this.answer3 = true;
      }
      setTimeout(() => {
        this.loading1 = false;
        this.loading2 = false;
        this.loading3 = false;
      }, 1500);
    },
  },
};
</script>

<style scoped></style>
