<template>
  <LogoComp />
  <LogSystem />
  <!--  <UserInfo />-->
  <v-container>
    <h3>Shortcut</h3>
    <v-row dense>
      <v-col cols="12">
        <v-card elevation="3">
          <v-card-title class="text-h5"> Use ausculto Now </v-card-title>

          <v-card-subtitle
            >Listen to your heart sound and lung sound whenever and wherever,
            online and offline.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn variant="text"> Enter </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card elevation="3">
          <v-card-title class="text-h5"> Another app </v-card-title>

          <v-card-subtitle>Use another function.</v-card-subtitle>

          <v-card-actions>
            <v-btn variant="text"> Enter </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <h3 style="margin-top: 15px">Suggestion</h3>
    <v-row dense>
      <v-col cols="12">
        <v-card elevation="3">
          <v-card-title class="text-h5"> Suggestion 1 </v-card-title>

          <v-card-subtitle>Some hint.</v-card-subtitle>

          <v-card-actions>
            <v-btn variant="text"> Enter </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card elevation="3">
          <v-card-title class="text-h5"> Suggestion 2 </v-card-title>

          <v-card-subtitle>Some hint.</v-card-subtitle>

          <v-card-actions>
            <v-btn variant="text"> Enter </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

// Components
// import UserInfo from "../components/UserInfo.vue";
import LogoComp from "@/components/LogoComp";
import LogSystem from "@/components/LogSystem";

export default defineComponent({
  name: "HomeView",

  components: {
    LogSystem,
    LogoComp,
    // UserInfo,
  },
});
</script>
