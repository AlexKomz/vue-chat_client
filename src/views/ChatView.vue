<template>
  <div class="chat-view">
    <ChatWindow
      class="chat-view__window"
      :messages="messages"
      :isPrinting="isPrinting"
    />
    <MessageArea :message.sync="message" @submit="submitHandler" />
    <ChatButton class="chat-view__submit-button" @click.native="submitHandler">
      &#10149;
    </ChatButton>
  </div>
</template>

<script>
import ChatWindow from "@/components/ChatWindow";
import MessageArea from "@/components/MessageArea";
import ChatButton from "@/components/ChatButton";

import { ROOT, SEARCH } from "@/router/pathes";

export default {
  name: "ChatView",
  components: { ChatButton, MessageArea, ChatWindow },
  data: () => ({
    message: "",
    isPrinting: false,
    messages: [],
    isOut: false,
  }),
  beforeRouteEnter(to, from, next) {
    if (from.path !== SEARCH) next(ROOT);
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (this.isOut) {
      next();
    } else {
      const MESSAGE =
        "Do you really want to leave? The chat may be interrupted!";
      const answer = window.confirm(MESSAGE);
      this.isOut = answer;
      next(answer);
    }
  },
  methods: {
    submitHandler() {
      if (!this.message) return;
      this.messages.push({
        id: Date.now(),
        isSelf: true,
        text: this.message,
      });
      this.message = "";
    },
  },
};
</script>

<style scoped>
.chat-view {
  display: grid;
  grid-template: 1fr 100px / 1fr 75px;
  gap: 10px;
}

.chat-view__window {
  grid-column: span 2;
}

.chat-view__submit-button {
  font-size: 30px;

  transform: scale(-1, 1);
}

@media (max-width: 426px) {
  .chat-view {
    grid-template: 1fr 75px / 1fr 50px;
  }
}
</style>
