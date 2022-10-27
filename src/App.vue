<template>
  <v-app style="background-color: #f0f0f0" class="application">
    <v-main>
      <router-view />
      <navbar></navbar>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Plus+Jakarta+Sans");

.application {
  font-family: "Plus Jakarta Sans";
}
</style>
