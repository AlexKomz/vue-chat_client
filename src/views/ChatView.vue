<template>
  <div class="chat-view">
    <ChatWindow :messages="messages" :isPrinting="isPrinting" />
    <MessageArea :message.sync="message" @submit="submitHandler" />
    <SubmitButton @click.native="submitHandler" />
  </div>
</template>

<script>
import ChatWindow from "@/components/ChatWindow";
import MessageArea from "@/components/MessageArea";
import SubmitButton from "@/components/SubmitButton";

const mock = {
  messages: [
    {
      id: "0",
      isSelf: true,
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      id: "1",
      isSelf: false,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, necessitatibus?",
    },
    {
      id: "2",
      isSelf: true,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, necessitatibus?",
    },
    {
      id: "3",
      isSelf: false,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, necessitatibus?",
    },
    {
      id: "4",
      isSelf: true,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, necessitatibus?",
    },
    {
      id: "5",
      isSelf: false,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, necessitatibus?",
    },
    {
      id: "6",
      isSelf: true,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, necessitatibus?",
    },
    {
      id: "7",
      isSelf: false,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, necessitatibus?",
    },
    {
      id: "8",
      isSelf: true,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, necessitatibus?",
    },
    {
      id: "9",
      isSelf: false,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, necessitatibus?",
    },
  ],
};

export default {
  name: "ChatView",
  components: { SubmitButton, MessageArea, ChatWindow },
  data: () => ({
    message: "",
    isPrinting: false,
    messages: [],
  }),
  created() {
    this.messages = mock.messages;
  },
  methods: {
    submitHandler() {
      if (!this.message) return;
      console.log(this.message);
      // this.messages.push({
      //   id: Date.now(),
      //   isSelf: true,
      //   text: this.message,
      // });
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
  grid-template-areas: "window window";
  gap: 10px;
}
</style>
