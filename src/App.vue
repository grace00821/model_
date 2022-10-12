<template>
  <v-app>
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
