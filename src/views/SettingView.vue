<template>
  <v-container>
    <v-toolbar color="teal">
      <v-toolbar-title>Settings</v-toolbar-title>
    </v-toolbar>

    <v-list>
      <v-list-item>
        <v-btn block color="teal" variant="outlined" @click="clearLocalDB">
          Clear Local Database
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn block color="teal" variant="outlined" @click="reloadDummyData">
          Reload Dummy Data
        </v-btn>
      </v-list-item>
    </v-list>

    <!--      <v-divider></v-divider>-->
  </v-container>
</template>

<script>
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
};
</script>

<style scoped></style>
