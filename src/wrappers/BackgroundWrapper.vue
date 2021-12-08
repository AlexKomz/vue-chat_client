<template>
  <div class="background-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BackgroundWrapper",
};
</script>

<style scoped>
.background-wrapper {
  display: flex;

  border-radius: 10px;

  box-shadow: 0 0 6px 0 var(--black-color);
  background-color: var(--side-bg-color);
}

.background-wrapper > * {
  flex-grow: 1;
}
</style>
