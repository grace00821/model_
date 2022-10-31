<template>
  <v-container>
    <h4 style="font-weight: bolder; text-align: center">Setting</h4>
    <PlaceHolder />
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
export default {
  name: "SettingVue",
  methods: {
    clearLocalDB() {
      console.log("Clear Local indexedDB");
      clearStorage("LocalDatabase");
    },
    reloadDummyData() {
      console.log("Start to reload Dummy Data");
      createDatabase().then((r) => console.log(r));
      fetch("DummyData/DummyUser.json")
        .then((response) => response.json())
        .then((json) => {
          putDatabase("LocalDatabase", "user", json, json.name);
        });
      fetch("DummyData/DummyLog.json")
        .then((response) => response.json())
        .then((json) => {
          json.forEach((item) => {
            putDatabase("LocalDatabase", "log", item, item.id);
          });
        });
      fetch("DummyData/DummyConversation.json")
        .then((response) => response.json())
        .then((json) => {
          json.forEach((item) => {
            putDatabase("LocalDatabase", "conversation", item, item.object);
          });
        });
      fetch("DummyData/DummyShortcut.json")
        .then((response) => response.json())
        .then((json) => {
          json.forEach((item) => {
            putDatabase("LocalDatabase", "shortcut", item, item.title);
          });
        });
    },
  },
  components: {
    PlaceHolder,
  },
};
</script>

<style scoped></style>
