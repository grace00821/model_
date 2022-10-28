<template>
  <v-card
    variant="outlined"
    style="background-color: white; border-color: white"
  >
    <v-card-title style="font-weight: bolder"> {{ title }} </v-card-title>
    <v-card-text
      ><v-row
        ><v-col><v-img :src="img"></v-img></v-col
      ></v-row>
      <v-row>
        <v-col style="color: #a4b2b2"
          >Last record
          <p style="color: black; font-weight: bold">
            {{ info }}
          </p></v-col
        >
      </v-row>
      <v-row>
        <v-col
          ><v-btn
            block
            variant="tonal"
            prepend-icon="mdi-plus-box-outline"
            style="background-color: #59c5be; font-weight: bolder; color: white"
          >
            Add data
          </v-btn></v-col
        >
        <v-col
          ><v-btn
            block
            variant="tonal"
            prepend-icon="mdi-share"
            style="background-color: #daedec; font-weight: bolder"
          >
            Share
          </v-btn></v-col
        >
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ShortcutCard",
  props: ["title", "info", "destination", "img"],
};
</script>

<style scoped></style>
