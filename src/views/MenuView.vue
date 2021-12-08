<template>
  <BackgroundWrapper>
    <div class="menu">
      <ChatButton class="menu__start-button">
        <RouterLink class="menu__link" to="/chat" exact>
          Start chatting!
        </RouterLink>
      </ChatButton>
    </div>
  </BackgroundWrapper>
</template>

<script>
import BackgroundWrapper from "@/wrappers/BackgroundWrapper";
import ChatButton from "@/components/ChatButton";

export default {
  name: "MenuView",
  components: { ChatButton, BackgroundWrapper },
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

.menu__link {
  text-decoration: none;
  color: inherit;
  font: inherit;
}
</style>
