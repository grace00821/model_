<template>
  <v-bottom-navigation :value="value" grow>
    <v-btn to="/">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/chat">
      <v-badge color="pink" dot>
        <v-icon>mdi-message</v-icon>
      </v-badge>
    </v-btn>

    <v-btn to="/tool">
      <v-icon>mdi-toolbox</v-icon>
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
