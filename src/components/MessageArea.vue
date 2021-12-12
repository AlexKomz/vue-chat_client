<template>
  <BackgroundWrapper>
    <div
      class="message-area"
      :class="{ 'message-area_placeholder': hasPlaceholder }"
    >
      <textarea
        class="message-area__text"
        :value="message"
        @input="inputHandler"
        @focus="focusHandler"
        @blur="blurHandler"
        @keypress="keypressHandler"
      />

      <ButtonWithIcon
        class="message-area__emoji"
        @click.native="emojiPickerToggleHandler"
      >
        <EmojiSVG class="emoji__icon" />
      </ButtonWithIcon>

      <CustomEmojiPicker
        v-click-outside="emojiPickerHide"
        v-show="isEmojiPickerOpen"
        @emojiClick="emojiClickHandler"
      />
    </div>
  </BackgroundWrapper>
</template>

<script>
import ClickOutside from "vue-click-outside";

import BackgroundWrapper from "@/wrappers/BackgroundWrapper";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import CustomEmojiPicker from "@/components/CustomEmojiPicker";
import EmojiSVG from "@/assets/emoji-icon.svg";

export default {
  name: "MessageArea",
  components: {
    CustomEmojiPicker,
    BackgroundWrapper,
    ButtonWithIcon,
    EmojiSVG,
  },
  directives: {
    ClickOutside,
  },
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.popupItem = this.$el;
  },
  data: () => ({
    isFocused: false,
    isEmojiPickerOpen: false,
  }),
  computed: {
    hasPlaceholder() {
      return !this.isFocused && !this.message;
    },
  },
  methods: {
    inputHandler(event) {
      this.$emit("update:message", event.target.value);
    },

    emojiClickHandler(emoji) {
      this.$emit("update:message", this.message + emoji);
    },

    emojiPickerToggleHandler() {
      this.isEmojiPickerOpen = !this.isEmojiPickerOpen;
    },

    emojiPickerHide() {
      this.isEmojiPickerOpen = false;
    },

    focusHandler() {
      this.isFocused = true;
    },

    blurHandler() {
      this.isFocused = false;
    },

    keypressHandler(event) {
      if (!event.shiftKey && event.key === "Enter") {
        event.preventDefault();
        this.$emit("submit");
      }
    },
  },
};
</script>

<style scoped>
.message-area {
  position: relative;

  padding: 10px;
}

.message-area_placeholder:before {
  position: absolute;

  content: "Сообщение...";

  display: block;

  top: 10px;
  left: 10px;
}

.message-area__text {
  width: 100%;
  height: 100%;

  font-size: 16px;

  resize: none;

  border: none;
  outline: none;
}

.message-area__emoji {
  position: absolute;
  top: 4px;
  right: 4px;
}

.emoji__icon {
  width: 18px;
  height: 18px;

  fill: var(--black-color);
}

@media (min-width: 426px) {
  .message-area:after {
    position: absolute;

    content: "shift + enter / enter";

    display: block;

    font-size: 12px;

    bottom: 5px;
    right: 5px;
  }
}

@media (max-width: 426px) {
  .message-area {
    padding: 4px 18px 4px 4px;
  }

  .message-area_placeholder:before {
    top: 4px;
    left: 4px;
  }
}
</style>
