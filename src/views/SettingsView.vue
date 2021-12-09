<template>
  <BackgroundWrapper>
    <div class="settings">
      <span>Settings menu in progress</span>
    </div>
  </BackgroundWrapper>
</template>

<script>
import BackgroundWrapper from "../wrappers/BackgroundWrapper";
export default {
  name: "SettingsView",
  components: { BackgroundWrapper },
};
</script>

<style scoped>
.settings {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
