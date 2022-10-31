<template>
  <v-container>
    <h4 style="font-weight: bolder; text-align: center">Setting</h4>
    <PlaceHolder />
    <p1 style="color: #a4b2b2"
      >*This two buttons are only for demonstration purpose.</p1
    >
    <PlaceHolder />
    <v-btn block color="teal" variant="outlined" @click="clearLocalDB"
      >clear local database</v-btn
    >
    <PlaceHolder />
    <v-btn block color="teal" variant="outlined" @click="reloadDummyData">
      Reload Dummy Data
    </v-btn>
  </v-container>
</template>

<script>
import PlaceHolder from "@/components/PlaceHolder";
export default {
  name: "SettingVue",
  methods: {
    clearLocalDB() {
      console.log("Clear Local DB");
    },
    reloadDummyData() {
      console.log("Reload Dummy Data");
    },
  },
  components: {
    PlaceHolder,
  },
};
</script>

<style scoped></style>
