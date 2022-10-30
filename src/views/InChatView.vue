<template>
  <v-container>
    <h1>InChat</h1>
    <v-btn @click="test">TEST</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "InChatView",
  methods: {
    test() {
      console.log(JSON.parse(window.localStorage.getItem("upcomingNewRecord")));
    },
  },
};
</script>

<style scoped></style>
