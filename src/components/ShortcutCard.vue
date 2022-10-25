<template>
  <v-container>
    <v-card elevation="4" style="width: 240px; height: 176px">
      <v-card-title
        >{{ title
        }}<v-icon style="float: right">mdi-arrow-right</v-icon></v-card-title
      >
      <v-card-text>{{ info }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ShortcutCard",
  props: ["title", "info", "destination", "img"],
};
</script>

<style scoped></style>
