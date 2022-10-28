<template>
  <LogoComp />
  <LogSystem />
  <!--  <UserInfo />-->
  <v-container>
    <h2 style="font-size: 22px; font-weight: bolder">Shortcut</h2>
    <v-row dense>
      <v-col cols="12">
        <ShortcutCard
          title="Heart sound"
          img="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          destination="/"
          info="No Previous data."
        ></ShortcutCard>
        <PlaceHolder />
        <ShortcutCard
          title="Lung sound"
          img="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          destination="/"
          info="No Previous data."
        ></ShortcutCard>
        <PlaceHolder />
        <ShortcutCard
          title="Wound care"
          img="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          destination="/"
          info="No Previous data."
        ></ShortcutCard>
      </v-col>
    </v-row>
    <div style="width: 100%; height: 40px"></div>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

// Components
// import UserInfo from "../components/UserInfo.vue";
import LogoComp from "@/components/LogoComp";
import LogSystem from "@/components/LogSystem";
import ShortcutCard from "@/components/ShortcutCard";
import PlaceHolder from "@/components/PlaceHolder";

export default defineComponent({
  name: "HomeView",

  components: {
    LogSystem,
    LogoComp,
    ShortcutCard,
    PlaceHolder,
    // UserInfo,
  },
});
</script>
