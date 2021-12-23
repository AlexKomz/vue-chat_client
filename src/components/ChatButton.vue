<template>
  <button class="submit-button" @click="clickHandler">
    <slot />
  </button>
</template>

<script>
export default {
  name: "ChatButton",
  methods: {
    clickHandler() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.submit-button {
  border: none;
  border-radius: 10px;

  font: inherit;
  color: var(--main-color);

  background-color: var(--message-bg-color);

  cursor: pointer;
}

.submit-button:hover,
.submit-button:focus {
  background-color: var(--button-bg-focus-color);
}

.submit-button:focus {
  outline-color: #dcdfe4;
}

.submit-button:active {
  background-color: var(--button-bg-active-color);
}

.submit-button:disabled {
  background-color: var(--button-bg-active-color);
}
</style>
