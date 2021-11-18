<template>
  <div class="chat-window" :class="{ 'chat-window_print': isPrinting }">
    <div class="chat-window__wrapper">
      <ul class="chat-window__list" ref="window">
        <li
          v-for="message of messages"
          class="chat-window__item"
          :key="message.id"
          :class="{ 'chat-window__item_self': message.isSelf }"
        >
          {{ message.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatWindow",
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

.chat-window__item {
  position: relative;

  padding: 10px;

  max-width: 50%;

  border-radius: 10px;

  background-color: var(--green-color);
  color: var(--main-color);
}

.chat-window__item:before {
  content: "";

  position: absolute;

  top: -4px;

  display: block;

  width: 10px;
  height: 10px;

  background-color: inherit;

  transform: rotate(45deg);
}

.chat-window__item:not(.chat-window__item_self):before {
  left: 8px;
}

.chat-window__item_self {
  align-self: flex-end;

  background-color: var(--light-green-color);
}

.chat-window__item_self:before {
  right: 8px;
}
</style>
