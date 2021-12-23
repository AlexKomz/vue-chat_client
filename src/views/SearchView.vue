<template>
  <BackgroundWrapper>
    <div class="search">
      <LoaderIcon />
      <div class="search__title">Companion searching...</div>
    </div>
  </BackgroundWrapper>
</template>

<script>
import { mapActions } from "vuex";

import BackgroundWrapper from "@/wrappers/BackgroundWrapper";
import LoaderIcon from "@/components/LoaderIcon";

import api from "@/api";

import { ROOT, CHAT } from "@/router/pathes";

export default {
  name: "SearchView",
  components: { LoaderIcon, BackgroundWrapper },
  beforeRouteEnter(to, from, next) {
    if (from.path !== ROOT) next(ROOT);
    next();
  },
  beforeRouteLeave(to, from, next) {
    api.searchStop();
    next();
  },
  async created() {
    api.search();

    await api.onChatStart(() => {
      this.startConversation();
      this.$router.push(CHAT);
    });
  },
  destroyed() {
    api.searchStop();
  },
  methods: { ...mapActions(["startConversation"]) },
};
</script>

<style scoped>
.search {
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.search__title {
  margin-left: 18px;

  font-size: 20px;
  font-weight: bold;
  color: var(--companion-message-bg-color);
}
</style>
