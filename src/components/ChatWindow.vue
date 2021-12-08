<template>
  <BackgroundWrapper>
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
  </BackgroundWrapper>
</template>

<script>
import BackgroundWrapper from "@/wrappers/BackgroundWrapper";
import ChatMessage from "@/components/ChatMessage";

export default {
  name: "ChatWindow",
  components: { BackgroundWrapper, ChatMessage },
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

  padding: 25px;
}

.chat-window_print:after {
  content: "Собеседник печатает...";

  position: absolute;
  bottom: 2px;

  color: var(--black-color);

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

  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  padding: 6px 6px 6px 0;
  margin: 0;

  list-style: none;
}
</style>
