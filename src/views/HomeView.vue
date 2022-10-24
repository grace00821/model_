<template>
  <LogoComp />
  <LogSystem />
  <!--  <UserInfo />-->
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
