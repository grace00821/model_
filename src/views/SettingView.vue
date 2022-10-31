<template>
  <TopTitle title="Setting" :return-arrow="false"></TopTitle>
  <v-container>
    <p style="color: #a4b2b2">
      *This page are only for the demonstration purpose.
    </p>
    <PlaceHolder />
    <v-btn block color="teal" variant="outlined" @click="reloadDummyData">
      Reload Dummy Data
    </v-btn>
    <PlaceHolder />
    <v-btn block color="red" variant="outlined" @click="clearLocalDB"
      >clear local database</v-btn
    >
  </v-container>
</template>

<script>
import PlaceHolder from "@/components/PlaceHolder";
import {
  clearStorage,
  createDatabase,
  putDatabase,
} from "../api/indexedDBService";
import TopTitle from "@/components/TopTitle";
export default {
  name: "SettingVue",
  methods: {
    clearLocalDB() {
      console.log("Clear Local indexedDB");
      clearStorage("LocalDatabase");
    },
    async reloadDummyData() {
      console.log("Start to reload Dummy Data");
      await createDatabase().then((r) => console.log(r));
      await fetch("DummyData/DummyUser.json")
        .then((response) => response.json())
        .then((json) => {
          putDatabase("LocalDatabase", "user", json, json.name);
        });
      await fetch("DummyData/DummyLog.json")
        .then((response) => response.json())
        .then((json) => {
          json.forEach((item) => {
            putDatabase("LocalDatabase", "log", item, item.id);
          });
        });
      await fetch("DummyData/DummyConversation.json")
        .then((response) => response.json())
        .then((json) => {
          json.forEach((item) => {
            putDatabase("LocalDatabase", "conversation", item, item.object);
          });
        });
      await fetch("DummyData/DummyShortcut.json")
        .then((response) => response.json())
        .then((json) => {
          json.forEach((item) => {
            putDatabase("LocalDatabase", "shortcut", item, item.title);
          });
        });
      return new Promise((resolve) => {
        resolve("all dummy data are reloaded.");
      });
    },
  },
  components: {
    PlaceHolder,
    TopTitle,
  },
};
</script>

<style scoped></style>
