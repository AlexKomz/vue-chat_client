<template>
  <BackgroundWrapper>
    <nav :class="headerMobileClass" class="header">
      <ButtonWithIcon
        v-if="!isMenuPath"
        class="header__exit"
        @click.native="exitClickHandler"
      >
        <ArrowSVG class="arrow__icon" />
      </ButtonWithIcon>
      <div :class="wrapperMobileClass" class="header__wrapper">
        <span class="header__dark">Simple</span>
        <span class="header__light">Chat</span>
      </div>
      <ButtonWithIcon
        v-if="isMenuPath"
        class="header__settings"
        @click.native="settingsClickHandler"
      >
        <SettingsSVG class="settings__icon" />
      </ButtonWithIcon>
    </nav>
  </BackgroundWrapper>
</template>

<script>
import VueRouter from "vue-router";
const { isNavigationFailure, NavigationFailureType } = VueRouter;

import BackgroundWrapper from "@/wrappers/BackgroundWrapper";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import SettingsSVG from "@/assets/settings-icon.svg";
import ArrowSVG from "@/assets/arrow-icon.svg";

import { ROOT, SETTINGS } from "@/router/pathes";

export default {
  name: "ChatHeader",
  components: { BackgroundWrapper, ButtonWithIcon, SettingsSVG, ArrowSVG },
  data: () => ({
    to: { path: location.pathname },
    from: null,
  }),
  created() {
    if (this.to.path !== ROOT) {
      this.$router.push(ROOT);
    }
  },
  computed: {
    isMenuPath() {
      return this.to.path === ROOT;
    },
    headerMobileClass() {
      return { header_mobile: !this.isMenuPath };
    },
    wrapperMobileClass() {
      return { header__wrapper_mobile: !this.isMenuPath };
    },
  },
  watch: {
    $route(to, from) {
      this.to = to;
      this.from = from;
    },
  },
  methods: {
    exitClickHandler() {
      this.$router.replace(ROOT).catch((failure) => {
        if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
          return null;
        }
      });
    },
    settingsClickHandler() {
      this.$router.push(SETTINGS);
    },
  },
};
</script>

<style scoped>
.header {
  position: relative;

  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: height 0.4s;
}

.header__wrapper {
  font-size: 76px;
  font-weight: bold;
  user-select: none;

  transition: font-size 0.4s;
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

  fill: var(--message-bg-color);
}

.header__exit {
  position: absolute;
  top: 6px;
  left: 6px;
}

.arrow__icon {
  width: 20px;
  height: 20px;

  fill: var(--companion-message-bg-color);

  transform: rotate(180deg);
}

@media (max-width: 426px) {
  .header__wrapper {
    font-size: 50px;
  }
}

.header_mobile {
  height: 32px;
}

.header__wrapper_mobile {
  font-size: 24px;
}
</style>
