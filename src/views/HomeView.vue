<template>
  <LogoComp />
  <LogSystem />
  <!--  <UserInfo />-->
  <v-container>
    <h4 style="font-weight: bolder">Shortcut</h4>
    <v-row dense>
      <v-col cols="12">
        <div v-for="item in this.shortcards" :key="item.title">
          <ShortcutCard
            :title="item.title"
            :img="item.img"
            :audio="item.audio"
            :destination="item.destination"
            :info="item.info"
            :sharedisable="item.sharedisable"
          ></ShortcutCard>
          <PlaceHolder />
        </div>
      </v-col>
    </v-row>
    <div style="width: 100%; height: 40px"></div>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
import { getDatabase } from "../api/indexedDBService";

// Components
// import UserInfo from "../components/UserInfo.vue";
import LogoComp from "@/components/LogoComp";
import LogSystem from "@/components/LogSystem";
import ShortcutCard from "@/components/ShortcutCard";
import PlaceHolder from "@/components/PlaceHolder";

export default defineComponent({
  data() {
    return {
      shortcards: [
        {
          title: "Heart sound",
          destination: "/ausculto",
        },
        {
          title: "Lung sound",
          destination: "/ausculto",
        },
        {
          title: "Wound care",
          destination: "/wound",
        },
      ],
    };
  },
  name: "HomeView",
  components: {
    LogSystem,
    LogoComp,
    ShortcutCard,
    PlaceHolder,
    // UserInfo,
  },
  created() {
    // Fetch the latest record from indexedDB
    console.log("created");
    this.shortcards.forEach((item) => {
      console.log(item.title);
      getDatabase("LocalDatabase", "shortcut", item.title).then((res) => {
        item.img = res.img;
        item.audio = res.audio;
        item.info = res.info;
        item.sharedisable = res.sharedisable;
      });
    });
    console.log(this.shortcards);
  },
  methods: {},
});
</script>
