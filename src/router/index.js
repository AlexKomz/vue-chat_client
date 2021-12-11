import Vue from "vue";
import Router from "vue-router";

import { ROOT, SETTINGS, SEARCH, CHAT, OTHER } from "./pathes";

import MenuView from "@/views/MenuView";
import SettingsView from "@/views/SettingsView";
import ChatView from "@/views/ChatView";
import SearchView from "@/views/SearchView";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: ROOT,
      component: MenuView,
    },
    {
      path: SETTINGS,
      component: SettingsView,
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
