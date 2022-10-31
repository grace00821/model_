<template>
  <TopTitle title="Chat" :return-arrow="false"></TopTitle>
  <v-container>
    <div v-for="item in this.chatList" :key="item.object">
      <v-row @click="clickToBeInChat(item.object)"
        ><v-col
          cols="2"
          style="display: flex; justify-content: center; align-items: center"
          ><v-avatar :image="item.avatar" size="50px"></v-avatar>
        </v-col>
        <v-col cols="10"
          ><v-row
            ><v-col style="font-size: 18px; font-weight: bolder">
              {{ item.object }}
              <v-icon v-if="item.object == 'Health Log'" style="color: #59c5be"
                >mdi-pin</v-icon
              > </v-col
            ><v-col cols="4" offset="2" style="font-size: 14px; color: #5c6867">
              {{ item.lastMessage.timestamp }}
            </v-col></v-row
          >
          <v-row style="font-size: 14px; color: #5c6867"
            ><v-col
              style="
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              "
              >{{ item.lastMessage.content }}</v-col
            ></v-row
          >
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
  </v-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { getDatabase, getAllKeys } from "@/api/indexedDBService";
import TopTitle from "@/components/TopTitle";

export default {
  name: "ChatView",
  components: {
    TopTitle,
  },
  data() {
    return {
      chatList: [],
    };
  },
  methods: {
    interpretContent(input) {
      if (Array.isArray(input)) {
        return input[0].content;
      } else if (typeof input === "object") {
        return "[Media File with No Text Preview]";
      } else if (typeof input === "string") {
        return input;
      } else {
        return "";
      }
    },
    simplifyTimestamp(input) {
      const splitted = input.split("-");
      const time = splitted[1].split("/");
      return time[0] + ":" + time[1] + ":" + time[2];
    },
    clickToBeInChat(param) {
      window.localStorage.setItem("enterInchatfrom", "chat");
      window.localStorage.setItem("inchatWith", param);
      this.$router.push("/inchat");
    },
  },
  created() {
    // fetch Log + Conversation
    getAllKeys("LocalDatabase", "log").then((res) => {
      getDatabase("LocalDatabase", "log", res.at(-1)).then((res) => {
        const logConv = {
          object: "Health Log",
          avatar: "DummyData/aiAvatar.png",
          lastMessage: {
            timestamp: this.simplifyTimestamp(res.timestamp),
            content: this.interpretContent(res.content),
          },
          unread: 0,
        };
        this.chatList.unshift(logConv);
      });
    });
    // Reverse Chronological order
    getAllKeys("LocalDatabase", "conversation").then((res) => {
      res.forEach((item) => {
        getDatabase("LocalDatabase", "conversation", item).then((res) => {
          const newConv = {
            object: res.object,
            avatar: res.avatar,
            lastMessage: {
              timestamp: this.simplifyTimestamp(res.history[0].timestamp),
              content: res.history[0].content,
            },
            unread: res.unread,
          };
          this.chatList.push(newConv);
        });
      });
    });
  },
};
</script>

<style scoped></style>
