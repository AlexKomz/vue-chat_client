<template>
  <div class="app">
    <div class="app__wrapper">
      <ChatHeader />
      <ChatView />
    </div>
  </div>
</template>

<script>
import ChatHeader from "@/components/ChatHeader";
import ChatView from "@/views/ChatView";

export default {
  name: "App",
  components: { ChatHeader, ChatView },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

:root {
  --main-bg-color: #dcdfe4;
  --side-bg-color: #ffffff;

  --main-color: #ffffff;
  --black-color: #000000;

  --green-color: #666b3a;
  --light-green-color: #adab76;
  --dark-green-color: #0f211a;
}

body {
  margin: 0;
  font-family: "Lato", sans-serif;
  color: var(--black-color);
}
</style>

<style scoped>
.app {
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--main-bg-color);
}

.app__wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 600px;
  height: 98%;

  margin: 5px;
}
</style>
