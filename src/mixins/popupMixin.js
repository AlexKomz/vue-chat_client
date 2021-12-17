const popupMixin = {
  data: () => ({
    popup: {
      isShow: false,
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
