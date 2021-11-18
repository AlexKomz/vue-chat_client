<template>
  <nav class="header">
    <a href="#" class="header__wrapper">
      <span class="header__dark">Super</span>
      <span class="header__light">Chat</span>
    </a>
  </nav>
</template>

<script>
export default {
  name: "ChatHeader",
};
</script>

<style scoped>
.header {
  min-height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  grid-area: header;

  border-radius: 10px;

  background-color: var(--side-bg-color);
  box-shadow: 0 0 6px 0 var(--black-color);
}

.header__wrapper {
  text-decoration: none;
  font-size: 76px;
  font-weight: bold;
}

.header__dark {
  color: var(--green-color);
}

.header__light {
  color: var(--light-green-color);
}
</style>
