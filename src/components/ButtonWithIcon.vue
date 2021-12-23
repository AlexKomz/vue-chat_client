<template>
  <button class="button" @click="clickHandler">
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonWithIcon",
  methods: {
    clickHandler() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.button {
  display: flex;
  padding: 0;

  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
}

.button:hover,
.button:focus {
  opacity: 0.6;
}

.button:active {
  opacity: 0.3;
}
</style>
