<template>
  <LogoComp />
  <LogSystem />
  <!--  <UserInfo />-->
  <v-container>
    <h2 style="font-size: 22px; font-weight: bolder">Shortcut</h2>
    <v-row dense>
      <v-col cols="12">
        <v-card
          variant="outlined"
          style="background-color: white; border-color: white"
        >
          <v-img
            src="img/heartsignal.png"
            width="35px"
            style="background-color: #20c997"
          ></v-img>
          <v-card-title
            style="font-weight: bolder; background-color: #fd7e14; width: 70%"
          >
            Heart sound</v-card-title
          >
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
