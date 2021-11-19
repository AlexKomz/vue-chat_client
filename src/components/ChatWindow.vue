<template>
  <div class="chat-window" :class="{ 'chat-window_print': isPrinting }">
    <div class="chat-window__wrapper">
      <ul v-if="messages.length" class="chat-window__list" ref="window">
        <ChatMessage
          v-for="message of messages"
          :key="message.id"
          :message="message"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import ChatMessage from "@/components/ChatMessage";
export default {
  name: "ChatWindow",
  components: { ChatMessage },
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
    isPrinting: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scrollIntoBottom();
  },
  updated() {
    this.scrollIntoBottom();
  },
  methods: {
    scrollIntoBottom() {
      if (!this.$refs.window) return;
      this.$refs.window.scrollIntoView(false);
    },
  },
};
</script>

<style scoped>
.chat-window {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  grid-area: window;

  padding: 25px;

  border-radius: 10px;

  background-color: var(--side-bg-color);
  box-shadow: 0 0 6px 0 var(--black-color);
}

.chat-window_print:after {
  content: "Собеседник печатает...";

  position: absolute;
  bottom: 2px;

  color: var(--dark-green-color);

  font-size: 14px;
}

.chat-window__wrapper {
  align-self: normal;

  position: relative;

  height: 100%;

  overflow: auto;
}

.chat-window__list {
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  padding: 6px 0 0 0;
  margin: 0;

  list-style: none;
}
</style>
