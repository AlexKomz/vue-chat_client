const beforeLeaveMixin = {
  data: () => ({ isOut: false }),
  created() {
    window.onbeforeunload = () => "";
  },
  beforeRouteLeave(to, from, next) {
    let answer = this.isOut;

    if (!this.isOut) {
      const MESSAGE =
        "Do you really want to leave? Changes made may not be saved!";
      answer = window.confirm(MESSAGE);
      this.isOut = answer;
    }

    next(answer);
  },
  destroyed() {
    window.onbeforeunload = null;
  },
};

export default beforeLeaveMixin;
