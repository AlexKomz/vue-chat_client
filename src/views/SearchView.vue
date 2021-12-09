<template>
  <BackgroundWrapper>
    <div class="search">
      <LoaderIcon />
    </div>
  </BackgroundWrapper>
</template>

<script>
import BackgroundWrapper from "@/wrappers/BackgroundWrapper";
import LoaderIcon from "@/components/LoaderIcon";

import { ROOT, CHAT } from "@/router/pathes";

export default {
  name: "SearchView",
  components: { LoaderIcon, BackgroundWrapper },
  beforeRouteEnter(to, from, next) {
    if (from.path !== ROOT) next(ROOT);
    next();
  },
  created() {
    setTimeout(() => {
      this.$router.push(CHAT);
    }, 1000);
  },
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
