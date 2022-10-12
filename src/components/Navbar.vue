<template>
  <v-bottom-navigation :value="value" color="teal" grow>
    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-home-account</v-icon>
    </v-btn>

    <v-btn to="/chat">
      <span>Chat</span>
      <v-badge color="pink" dot>
        <v-icon>mdi-forum</v-icon>
      </v-badge>
    </v-btn>

    <v-btn to="/tool">
      <span>Tool</span>
      <v-icon>mdi-stethoscope</v-icon>
    </v-btn>

    <v-btn to="/setting">
      <span>Setting</span>
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
};
</script>

<style scoped></style>
