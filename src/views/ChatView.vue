<template>
  <div class="chat-view">
    <ChatWindow
      class="chat-view__window"
      :messages="messages"
      :isPrinting="isPrinting"
    >
      <template #popup>
        <MiniPopup
          :type="popupType"
          :isShow="!!errorMessage || !!successMessage"
          isSelfClose
          @popupClose="clearSuccess"
        >
          {{ errorMessage || successMessage }}
        </MiniPopup>
      </template>
    </ChatWindow>
    <MessageArea
      :disabled="!!errorMessage"
      :message.sync="message"
      @submit="submitHandler"
    />
    <ChatButton
      class="chat-view__submit-button"
      :disabled="!!errorMessage"
      @click="submitHandler"
    >
      &#10149;
    </ChatButton>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import MiniPopup from "@/components/MiniPopup";
import ChatWindow from "@/components/ChatWindow";
import MessageArea from "@/components/MessageArea";
import ChatButton from "@/components/ChatButton";

import api from "@/api";

import { ROOT, SEARCH } from "@/router/pathes";

export default {
  name: "ChatView",
  components: { MiniPopup, ChatButton, MessageArea, ChatWindow },
  data: () => ({
    message: "",
    isPrinting: false,
    isOut: false,
  }),
  props: {
    successMessage: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
    popupType: {
      type: String,
      default: "",
    },
  },
  beforeRouteEnter(to, from, next) {
    if (from.path !== SEARCH) next(ROOT);
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (!this.isOut && !this.errorMessage) {
      const MESSAGE =
        "Do you really want to leave? Changes made may not be saved!";
      this.isOut = window.confirm(MESSAGE);
    } else if (this.errorMessage) {
      this.isOut = true;
    }

    if (this.isOut) {
      this.clearMessages();

      if (this.errorMessage) {
        this.clearAlert();
      }
    }

    next(this.isOut);
  },
  created() {
    this.$emit("setSuccess", "The companion has joined you!");
  },
  destroyed() {
    if (!this.errorMessage) {
      api.chatStop();
    }
  },
  computed: {
    ...mapState({ messages: (state) => state.conversation.messages }),
  },
  methods: {
    ...mapMutations(["clearMessages"]),
    ...mapActions(["sendMessage"]),

    submitHandler() {
      if (!this.message.trim()) return;
      this.sendMessage(this.message);
      this.message = "";
    },

    clearSuccess() {
      this.$emit("clearSuccess");
    },

    clearAlert() {
      this.$emit("clearAlert");
    },
  },
};
</script>

<style scoped>
.chat-view {
  display: grid;
  grid-template: 1fr 100px / 1fr 70px;
  gap: 10px;
}

.chat-view__window {
  grid-column: span 2;
}

.chat-view__submit-button {
  font-size: 30px;

  transform: scale(-1, 1);
}

@media (max-width: 426px) {
  .chat-view {
    grid-template: 1fr 70px / 1fr 50px;
  }

  .chat-view__submit-button {
    font-size: 24px;
  }
}
</style>
