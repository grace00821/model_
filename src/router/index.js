import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/chat",
    name: "chat",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ChatView"),
  },
  {
    path: "/tool",
    name: "tool",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ToolView"),
  },
  {
    path: "/setting",
    name: "setting",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SettingView"),
  },
  {
    path: "/ausculto",
    name: "ausculto",
    component: () => import("../views/AuscultoView"),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/inchat",
    name: "inchat",
    component: () => import("../views/InChatView"),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/wound",
    name: "wound",
    component: () => import("../views/WoundView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
