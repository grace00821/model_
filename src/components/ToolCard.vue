<template>
  <v-card>
    <v-card-title
      ><h4 style="font-weight: bolder">{{ title }}</h4></v-card-title
    >
    <v-card-text>
      {{ content }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ToolCard",
  props: ["title", "content"],
};
</script>

<style scoped></style>
