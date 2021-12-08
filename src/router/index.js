import Vue from "vue";
import Router from "vue-router";

import ChatView from "../views/ChatView";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/chat",
      component: ChatView,
    },
  ],
});
