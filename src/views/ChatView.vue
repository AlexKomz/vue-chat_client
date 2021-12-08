<template>
  <div class="chat-view">
    <ChatWindow
      class="chat-view__window"
      :messages="messages"
      :isPrinting="isPrinting"
    />
    <MessageArea :message.sync="message" @submit="submitHandler" />
    <SubmitButton @click.native="submitHandler" />
  </div>
</template>

<script>
import ChatWindow from "@/components/ChatWindow";
import MessageArea from "@/components/MessageArea";
import SubmitButton from "@/components/SubmitButton";

export default {
  name: "ChatView",
  components: { SubmitButton, MessageArea, ChatWindow },
  data: () => ({
    message: "",
    isPrinting: false,
    messages: [],
    companionID: null,
  }),
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
  flex-grow: 1;

  height: 100%;

  display: grid;
  grid-template: 1fr 100px / 1fr 75px;
  gap: 10px;
}

.chat-view__window {
  grid-column: span 2;
}
</style>
