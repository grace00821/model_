<template>
  <v-app-bar :elevation="0" style="background-color: #f0f0f0">
    <v-app-bar-nav-icon v-if="returnArrow" @click="navigateBack"
      ><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon
    >
    <v-app-bar-title
      ><h4 style="font-weight: bolder; text-align: center">
        {{ title }}
      </h4></v-app-bar-title
    >
  </v-app-bar>
</template>

<script>
export default {
  name: "TopTitle",
  props: {
    returnArrow: Boolean,
    title: String,
  },
  methods: {
    navigateBack() {
      history.back();
    },
  },
};
</script>

<style scoped></style>
