<template>
  <li
    class="chat-item"
    :key="message.id"
    :class="{ 'chat-item_self': message.isSelf }"
  >
    <span v-for="(line, index) of textSplitIntoLines" :key="`${line}_${index}`">
      {{ line }}
    </span>
  </li>
</template>

<script>
export default {
  name: "ChatMessage",
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  computed: {
    textSplitIntoLines() {
      return this.message.text.split("\n");
    },
  },
};
</script>

<style scoped>
.chat-item {
  position: relative;

  display: flex;
  flex-direction: column;

  padding: 10px;

  max-width: 80%;

  border-radius: 10px;

  background-color: var(--companion-message-bg-color);
  color: var(--main-color);
}

.chat-item:before {
  content: "";

  position: absolute;

  top: -2px;

  display: block;

  width: 10px;
  height: 10px;

  background-color: inherit;
}

.chat-item:not(.chat-item_self):before {
  left: 4px;

  transform: rotate(30deg);
}

.chat-item_self {
  align-self: flex-end;

  background-color: var(--message-bg-color);
}

.chat-item_self:before {
  right: 4px;

  transform: rotate(60deg);
}
</style>
