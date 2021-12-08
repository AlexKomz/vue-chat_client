<template>
  <button class="submit-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "ChatButton",
};
</script>

<style scoped>
.submit-button {
  border: none;
  border-radius: 10px;

  font: inherit;
  color: var(--main-color);

  background-color: var(--send-button-bg-color);

  cursor: pointer;
}

.submit-button:hover,
.submit-button:focus {
  background-color: var(--send-button-bg-focus-color);
}

.submit-button:focus {
  outline-color: #dcdfe4;
}

.submit-button:active {
  background-color: var(--send-button-bg-active-color);
}
</style>
