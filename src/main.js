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

// eslint-disable-next-line no-unused-vars
import { putDatabase, getDatabase } from "./api/indexedDBService";

// import dbHelp from "./storage/idb.js";
//
// dbHelp((help) => {
//   // indexedDB 准备好了
//   console.log("main里面获取 indexedDB 的help", help);
// });

console.log("Debug");

const fakeData = {
  name: "Shichao Ma",
  email: "hzmashichao@163.com",
  avatar: "",
};

// createDatabase().then((r) => console.log(r));
// putDatabase("LocalDatabase", "user", fakeData, fakeData.name).then((res) => {
//   console.log(res);
// });
getDatabase("LocalDatabase", "user", fakeData.name).then((res) => {
  console.log(res);
});

loadFonts();

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(BootstrapVue3);
app.mount("#app");
