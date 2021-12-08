import Vue from "vue";
import Router from "vue-router";

import MenuView from "@/views/MenuView";
import ChatView from "@/views/ChatView";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: MenuView,
    },
    {
      path: "/chat",
      component: ChatView,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
