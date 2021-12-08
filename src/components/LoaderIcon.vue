<template>
  <div class="loader">
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "LoaderIcon",
};
</script>

<style scoped>
.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.loader div {
  position: absolute;
  border: 8px solid var(--companion-message-bg-color);
  opacity: 1;
  border-radius: 50%;
  animation: loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loader div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes loader {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
