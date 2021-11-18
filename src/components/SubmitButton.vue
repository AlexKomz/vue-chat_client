<template>
  <button class="submit-button">&#10149;</button>
</template>

<script>
export default {
  name: "SubmitButton",
};
</script>

<style scoped>
.submit-button {
  border: none;
  border-radius: 10px;

  font-size: 30px;

  color: var(--main-color);
  background-color: var(--dark-green-color);

  cursor: pointer;

  transform: scale(-1, 1);
}

.submit-button:hover,
.submit-button:focus {
  background-color: rgba(15, 33, 26, 0.75);
}

.submit-button:focus {
  outline-color: #dcdfe4;
}

.submit-button:active {
  background-color: rgba(15, 33, 26, 0.5);
}
</style>
