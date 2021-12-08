<template>
  <BackgroundWrapper>
    <div class="menu">
      <ChatButton class="menu__start-button" @click.native="clickHandler">
        Start chatting!
      </ChatButton>
    </div>
  </BackgroundWrapper>
</template>

<script>
import BackgroundWrapper from "@/wrappers/BackgroundWrapper";
import ChatButton from "@/components/ChatButton";

import { SEARCH } from "@/router/pathes";

export default {
  name: "MenuView",
  components: { ChatButton, BackgroundWrapper },
  methods: {
    clickHandler() {
      this.$router.push(SEARCH);
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu__start-button {
  padding: 16px 20px;

  font-size: 24px;
  font-weight: bold;
  line-height: 26px;
  text-transform: uppercase;
}
</style>
