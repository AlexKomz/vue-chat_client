import Vue from "vue";
import Vuex from "vuex";

import { conversation } from "@/store/conversation";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    conversation,
  },
});
