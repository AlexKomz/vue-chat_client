<template>
  <div class="app">
    <PopupWrapper class="app__wrapper">
      <template #header>
        <ChatHeader />
      </template>
      <template
        #main="{
          success,
          alert,
          popupType,
          setSuccess,
          clearSuccess,
          clearAlert,
        }"
      >
        <RouterView
          class="app_view"
          :successMessage="success"
          :errorMessage="alert"
          :popupType="popupType"
          @setSuccess="setSuccess"
          @clearSuccess="clearSuccess"
          @clearAlert="clearAlert"
        />
      </template>
    </PopupWrapper>
  </div>
</template>

<script>
import PopupWrapper from "@/wrappers/PopupWrapper";
import ChatHeader from "@/components/ChatHeader";

export default {
  name: "App",
  components: { PopupWrapper, ChatHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

:root {
  --main-bg-color: #f3e9e7;
  --side-bg-color: #ffffff;

  --main-color: #ffffff;
  --black-color: rgba(0, 0, 0, 0.6);
  --overview-bg-color: rgba(0, 0, 0, 0.1);

  --companion-message-bg-color: #e76f3d;
  --message-bg-color: #00a7c7;

  --button-bg-focus-color: #008ba7;
  --button-bg-active-color: #9bcfe0;

  --alert-bg-color: rgba(255, 0, 0, 0.5);
  --success-bg-color: rgba(0, 128, 0, 0.5);
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

.app_view {
  flex-grow: 1;
}
</style>
