<template>
  <v-bottom-navigation
    grow
    class="rounded-t-xl"
    style="height: 95px"
    elevation="0"
  >
    <v-btn to="/" class="btnStyle">
      <v-icon size="24px">mdi-home-outline</v-icon>
      Home
    </v-btn>

    <v-btn to="/chat" class="btnStyle">
      <v-icon size="24px">mdi-message-outline</v-icon>
      Chat
    </v-btn>

    <v-btn to="/tool" class="btnStyle">
      <v-icon size="24px">mdi-archive-outline</v-icon>
      Tools
    </v-btn>

    <v-btn to="/setting" class="btnStyle">
      <v-icon size="24px">mdi-cog</v-icon>
      Setting
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
};
</script>

<style scoped>
.btnStyle {
  padding-bottom: 20px;
  font-size: 10px;
}
</style>
