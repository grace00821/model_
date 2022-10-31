<template>
  <v-card
    variant="outlined"
    style="background-color: white; border-color: white"
  >
    <v-card-title>
      <h4 style="font-weight: bolder">{{ title }}</h4>
    </v-card-title>
    <v-card-text
      ><v-row v-if="img"
        ><v-col><v-img :src="img"></v-img></v-col
      ></v-row>
      <v-row v-if="audio"
        ><v-col
          ><audio
            style="width: 100%; margin-top: 10px"
            controls
            :src="audio"
          ></audio></v-col
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
            :to="destination"
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
            :disabled="sharedisable"
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
  props: ["title", "info", "destination", "img", "audio", "sharedisable"],
};
</script>

<style scoped></style>
