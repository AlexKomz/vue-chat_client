const beforeLeaveMixin = {
  created() {
    window.onbeforeunload = () => "";
  },
  beforeRouteLeave(to, from, next) {
    const MESSAGE =
      "Do you really want to leave? Changes made may not be saved!";
    const answer = window.confirm(MESSAGE);
    next(answer);
  },
  destroyed() {
    window.onbeforeunload = null;
  },
};

export default beforeLeaveMixin;
