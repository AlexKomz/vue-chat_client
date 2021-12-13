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

import { beforeLeaveMixin } from "@/mixins";

import { ROOT, SEARCH } from "@/router/pathes";

export default {
  name: "ChatView",
  components: { ChatButton, MessageArea, ChatWindow },
  mixins: [beforeLeaveMixin],
  data: () => ({
    message: "",
    isPrinting: false,
    messages: [],
  }),
  beforeRouteEnter(to, from, next) {
    if (from.path !== SEARCH) next(ROOT);
    next();
  },
  methods: {
    submitHandler() {
      if (!this.message.trim()) return;
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
  grid-template: 1fr 100px / 1fr 70px;
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
    grid-template: 1fr 70px / 1fr 50px;
  }

  .chat-view__submit-button {
    font-size: 24px;
  }
}
</style>
