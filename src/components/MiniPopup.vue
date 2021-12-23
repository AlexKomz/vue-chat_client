<template>
  <TransitionShiftWrapper>
    <div v-if="isShow" class="popup" :class="typeClass" @click="closeHandler">
      <span><slot /></span>
    </div>
  </TransitionShiftWrapper>
</template>

<script>
import TransitionShiftWrapper from "@/wrappers/TransitionShiftWrapper";
export default {
  name: "MiniPopup",
  components: { TransitionShiftWrapper },
  props: {
    type: {
      type: String,
      default: "default",
      validator: (value) => ["alert", "success", "default"].includes(value),
    },
    isShow: {
      type: Boolean,
      required: true,
    },
    isSelfClose: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 2000,
    },
  },
  created() {
    if (this.isSelfClose) {
      setTimeout(() => {
        this.closeHandler();
      }, this.duration);
    }
  },
  computed: {
    typeClass() {
      switch (this.type) {
        case "alert":
          return { popup_alert: true };
        case "success":
          return { popup_success: true };
      }

      return "default";
    },
  },
  methods: {
    closeHandler() {
      this.$emit("popupClose");
    },
  },
};
</script>

<style scoped>
.popup {
  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 50px;

  color: var(--main-color);
  font-weight: bold;
  font-size: 18px;

  border-radius: 10px;

  background-color: var(--message-bg-color);

  cursor: pointer;
  user-select: none;
}

.popup_alert {
  background-color: var(--alert-bg-color);
}

.popup_success {
  background-color: var(--success-bg-color);
}
</style>
