import api from "@/api";

export const conversation = {
  namespace: true,

  state: () => ({
    messages: [],
  }),
  getters: {},
  mutations: {
    addMessage(state, payload) {
      state.messages = [...state.messages, payload];
    },
    clearMessages(state) {
      state.messages = [];
    },
  },
  actions: {
    startConversation({ commit }) {
      api.onMessageCame(({ message }) => {
        commit("addMessage", {
          id: Date.now(),
          text: message,
        });
      });
    },
    sendMessage({ commit }, message) {
      api.sendMessage(message);
      commit("addMessage", {
        id: Date.now(),
        isSelf: true,
        text: message,
      });
    },
  },
};
