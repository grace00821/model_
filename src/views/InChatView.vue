<template>
  <TopTitle :title="this.title" :return-arrow="true" />
  <v-container>
    <!--    <div-->
    <!--      style="-->
    <!--        position: fixed;-->
    <!--        width: 100%;-->
    <!--        background-color: #f0f0f0;-->
    <!--        z-index: 999;-->
    <!--      "-->
    <!--    >-->
    <!--      <h4 style="font-weight: bolder; text-align: center">-->
    <!--        <v-icon class="float-left" @click="navigateBack">mdi-arrow-left</v-icon>-->
    <!--        {{ this.title }}-->
    <!--      </h4>-->
    <!--      <PlaceHolder />-->
    <!--    </div>-->
    <!--    <v-btn @click="test">TEST</v-btn>-->

    <div id="peekobot-container">
      <div id="peekobot-inner">
        <div id="peekobot"></div>
      </div>
    </div>
    <PlaceHolder />
  </v-container>
</template>

<script>
import PlaceHolder from "@/components/PlaceHolder";
import { chat } from "@/plugins/chatbot/conversation";
import { chatCP } from "@/plugins/chatbot/conversationChestPain";
import { bot } from "@/plugins/chatbot/peekobot";
import TopTitle from "@/components/TopTitle";

export default {
  name: "InChatView",
  components: {
    PlaceHolder,
    TopTitle,
  },
  data() {
    return {
      title: "",
    };
  },
  created() {
    this.title = window.localStorage.getItem("inchatWith");
  },
  mounted() {
    // triggered by ASK + Chest Pain
    bot(chatCP);
  },
  methods: {
    test() {
      console.log(JSON.parse(window.localStorage.getItem("upcomingNewRecord")));
      bot(chat);
    },
    navigateBack() {
      history.back();
    },
  },
};
</script>

<style scoped>
/*@import "../plugins/chatbot/main.css";*/
@import "../plugins/chatbot/peekobot.css";
</style>
