<template>
  <BackgroundWrapper>
    <div class="menu">
      <ChatButton
        :disabled="!!errorMessage"
        class="menu__start-button"
        @click="clickHandler"
      >
        Start chatting!
      </ChatButton>

      <MiniPopup type="alert" :isShow="!!errorMessage">
        {{ errorMessage }}
      </MiniPopup>
    </div>
  </BackgroundWrapper>
</template>

<script>
import BackgroundWrapper from "@/wrappers/BackgroundWrapper";
import ChatButton from "@/components/ChatButton";
import MiniPopup from "@/components/MiniPopup";

import api from "@/api";

import { SEARCH } from "@/router/pathes";

export default {
  name: "MenuView",
  components: { ChatButton, BackgroundWrapper, MiniPopup },
  props: {
    errorMessage: {
      type: String,
      default: "",
    },
  },
  async created() {
    await api.connect();
  },
  methods: {
    clickHandler() {
      this.$router.push(SEARCH);
    },
  },
};
</script>

<style scoped>
.menu {
  position: relative;

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
