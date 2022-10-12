<template>
  <UserInfo />
  <TodayFocus />
</template>

<script>
import { defineComponent } from "vue";

// Components
import UserInfo from "../components/UserInfo.vue";
import TodayFocus from "@/components/TodayFocus";

export default defineComponent({
  name: "HomeView",

  components: {
    UserInfo,
    TodayFocus,
  },
});
</script>
