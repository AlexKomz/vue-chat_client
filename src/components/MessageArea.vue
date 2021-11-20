<template>
  <div
    class="message-area"
    :class="{ 'message-area_placeholder': hasPlaceholder }"
  >
    <textarea
      class="message-area__text"
      :value="message"
      @input="inputHandler"
      @focus="focusHandler"
      @blur="blurHandler"
      @keypress="keypressHandler"
    />
  </div>
</template>

<script>
export default {
  name: "MessageArea",
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    isFocused: false,
  }),
  computed: {
    hasPlaceholder() {
      return !this.isFocused && !this.message;
    },
  },
  methods: {
    inputHandler(event) {
      this.$emit("update:message", event.target.value.trim());
    },

    focusHandler() {
      this.isFocused = true;
    },

    blurHandler() {
      this.isFocused = false;
    },

    keypressHandler(event) {
      if (!event.shiftKey && event.key === "Enter") {
        event.preventDefault();
        this.$emit("submit");
      }
    },
  },
};
</script>

<style scoped>
.message-area {
  position: relative;

  padding: 10px;

  border-radius: 10px;

  background-color: var(--side-bg-color);
  box-shadow: 0 0 6px 0 var(--black-color);
}

.message-area_placeholder:before {
  position: absolute;

  content: "Сообщение...";

  display: block;

  top: 10px;
  left: 10px;
}

.message-area:after {
  position: absolute;

  content: "shift + enter / enter";

  display: block;

  font-size: 12px;

  bottom: 5px;
  right: 5px;
}

.message-area__text {
  width: 100%;
  height: 100%;

  font-size: 16px;

  resize: none;

  border: none;
  outline: none;
}
</style>
