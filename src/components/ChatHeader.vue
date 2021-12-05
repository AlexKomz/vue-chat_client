<template>
  <nav class="header">
    <ButtonWithIcon class="header__settings">
      <SettingsSVG class="settings__icon" />
    </ButtonWithIcon>
    <a href="#" class="header__wrapper">
      <span class="header__dark">Simple</span>
      <span class="header__light">Chat</span>
    </a>
  </nav>
</template>

<script>
import ButtonWithIcon from "@/components/ButtonWithIcon";
import SettingsSVG from "../assets/settings-icon.svg";

export default {
  name: "ChatHeader",
  components: { ButtonWithIcon, SettingsSVG },
};
</script>

<style scoped>
.header {
  position: relative;

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
  user-select: none;
}

.header__dark {
  color: var(--companion-message-bg-color);
}

.header__light {
  color: var(--message-bg-color);
}

.header__settings {
  position: absolute;
  top: 6px;
  right: 6px;

  transition: transform 0.4s;
}

.header__settings:hover,
.header__settings:focus {
  transform: rotate(90deg);
}

.settings__icon {
  width: 20px;
  height: 20px;

  fill: var(--black-color);
}
</style>
