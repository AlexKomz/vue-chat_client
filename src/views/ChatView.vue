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

export default {
  name: "ChatView",
  components: { ChatButton, MessageArea, ChatWindow },
  data: () => ({
    message: "",
    isPrinting: false,
    messages: [],
    companionID: null,
  }),
  beforeRouteLeave(to, from, next) {
    const MESSAGE = "Do you really want to leave? The chat may be interrupted!";
    this.beforeTabChange(MESSAGE, next);
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
    beforeTabChange(message, next) {
      const answer = window.confirm(message);
      if (answer) {
        next();
      } else {
        next(false);
      }
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
</style>
