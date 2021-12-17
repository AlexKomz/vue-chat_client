const popupMixin = {
  data: () => ({
    popup: {
      isShow: true,
      message: "Собеседник отключился",
    },
  }),
  methods: {
    closePopupHandler() {
      this.popup.isShow = false;
    },
  },
};

export default popupMixin;
