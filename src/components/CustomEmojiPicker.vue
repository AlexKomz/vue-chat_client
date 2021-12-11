<template>
  <emoji-picker :class="theme" class="emoji-picker" ref="picker" />
</template>

<script>
import "emoji-picker-element";

export default {
  name: "CustomEmojiPicker",
  props: {
    theme: {
      type: String,
      default: "light",
    },
  },
  mounted() {
    this.$refs.picker.addEventListener("emoji-click", this.clickHandler);
    const searchRowEl =
      this.$refs.picker.shadowRoot.querySelector(".search-row");
    if (searchRowEl) {
      searchRowEl.remove();
    }
  },
  methods: {
    clickHandler(event) {
      const { unicode: emoji } = event.detail;
      this.$emit("emojiClick", emoji);
    },
  },
};
</script>

<style scoped>
.emoji-picker {
  --border-color: var(--main-bg-color);
  --category-emoji-size: 1rem;
  --border-size: 2px;

  position: absolute;

  top: -410px;
  right: 0;
}

@media (max-width: 426px) {
  .emoji-picker {
    --num-columns: 6;
    --category-emoji-padding: 0.2rem;
    width: 98%;
  }
}

.emoji-picker::after {
  content: "";

  position: absolute;

  bottom: -8px;
  right: 8px;

  display: block;

  width: 10px;
  height: 10px;

  background-color: var(--side-bg-color);
  clip-path: polygon(50% 25%, 100% 100%, 0 100%);

  transform: rotate(180deg);
}
</style>
