<template>
  <v-expand-transition>
    <log-content v-show="showLog"></log-content>
  </v-expand-transition>
  <v-text-field
    label="Ask or Note down ... "
    variant="outlined"
    @click="enterSystem"
  ></v-text-field>
</template>

<script>
import LogContent from "@/components/LogContent";
export default {
  name: "LogSystem",
  components: { LogContent },
  onMounted() {
    this.showLog = false;
  },
  data() {
    return {
      showLog: false,
    };
  },
  methods: {
    enterSystem() {
      this.showLog = true;
    },
  },
};
</script>

<style scoped></style>
