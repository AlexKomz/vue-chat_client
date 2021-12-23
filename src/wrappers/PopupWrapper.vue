<template>
  <div>
    <slot name="header" />
    <slot
      name="main"
      :success="success"
      :alert="alert"
      :popupType="popupType"
      :setSuccess="setSuccess"
      :clearSuccess="clearSuccess"
      :clearAlert="clearAlert"
    />
  </div>
</template>

<script>
import api from "@/api";

import { ROOT } from "@/router/pathes";

export default {
  name: "PopupWrapper",
  data: () => ({
    alert: "",
    success: "",
  }),
  created() {
    api.onReconnect(() => {
      this.clearAlert();
    });
  },
  errorCaptured(error) {
    this.alert = error.message;

    if (error.name === "ConnectionError") {
      this.$router.replace(ROOT);
    }

    return false;
  },
  computed: {
    popupType() {
      if (this.alert) {
        return "alert";
      }

      if (this.success) {
        return "success";
      }

      return null;
    },
  },
  methods: {
    setSuccess(message) {
      this.success = message;
    },
    clearAlert() {
      this.alert = "";
    },
    clearSuccess() {
      this.success = "";
    },
  },
};
</script>
