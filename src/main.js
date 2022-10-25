import "@babel/polyfill";
import "mutationobserver-shim";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "./registerServiceWorker";
import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import dbHelp from "./storage/idb.js";

dbHelp((help) => {
  // indexedDB 准备好了
  console.log("main里面获取 indexedDB 的help", help);
});

loadFonts();

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(BootstrapVue3);
app.mount("#app");
