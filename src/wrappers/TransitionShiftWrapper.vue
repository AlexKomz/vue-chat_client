<template>
  <transition :name="`shift-${direction}`">
    <slot />
  </transition>
</template>

<script>
export default {
  name: "TransitionShiftWrapper",
  props: {
    direction: {
      type: String,
      default: "top",
      validator: (value) => ["top", "right", "bottom", "left"].includes(value),
    },
  },
};
</script>

<style scoped>
.shift-top-enter-active,
.shift-top-leave-active,
.shift-right-enter-active,
.shift-right-leave-active,
.shift-bottom-enter-active,
.shift-bottom-leave-active,
.shift-left-enter-active,
.shift-left-leave-active {
  transition: transform 0.4s;
}

.shift-top-enter,
.shift-top-leave-to {
  transform: translateY(100%);
}

.shift-right-enter,
.shift-right-leave-to {
  transform: translateX(100%);
}

.shift-bottom-enter,
.shift-bottom-leave-to {
  transform: translateY(-100%);
}

.shift-left-enter,
.shift-left-leave-to {
  transform: translateX(-100%);
}
</style>
