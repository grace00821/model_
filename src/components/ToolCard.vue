<template>
  <v-card
    variant="outlined"
    style="background-color: white; border-color: white"
  >
    <v-card-title
      ><v-row>
        <v-col
          ><h4 style="font-weight: bolder">{{ title }}</h4></v-col
        >
        <v-col style="text-align: end"
          ><v-icon v-if="fav" style="color: #59c5be">mdi-star</v-icon>
          <v-icon v-else style="color: #59c5be">mdi-star-outline</v-icon>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text style="color: #5c6867; font-size: 16px">
      {{ content }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ToolCard",
  props: {
    title: String,
    content: String,
    fav: Boolean,
  },
};
</script>

<style scoped></style>
