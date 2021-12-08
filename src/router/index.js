import Vue from "vue";
import Router from "vue-router";

import { ROOT, SEARCH, CHAT, OTHER } from "./pathes";

import MenuView from "@/views/MenuView";
import ChatView from "@/views/ChatView";
import SearchView from "@/views/SearchView";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: ROOT,
      component: MenuView,
    },
    {
      path: SEARCH,
      component: SearchView,
    },
    {
      path: CHAT,
      component: ChatView,
    },
    {
      path: OTHER,
      redirect: ROOT,
    },
  ],
});
