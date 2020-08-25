<template>
  <div
    class="c-chatbox p-6 h-full w-full max-w-sm bg-white bg-opacity-75 rounded-lg shadow-xl"
  >
    <div class="c-chatbox__pane">
      <ChatboxItem
        :avatar="require('@/assets/images/avatar-1.jpg')"
        type="other"
        class="c-chatbox__item c-chatbox__item--1"
      >
        Hello
      </ChatboxItem>
      <ChatboxItem
        :avatar="require('@/assets/images/avatar-1.jpg')"
        type="other"
        class="c-chatbox__item c-chatbox__item--2"
      >
        Are you looking to book soon?
      </ChatboxItem>
      <ChatboxItem class="c-chatbox__item c-chatbox__item--3">
        yes! 5-21 November? how many people can you fit?
      </ChatboxItem>
      <ChatboxItem class="c-chatbox__item c-chatbox__item--4">
        it’s on this street correct? (contact information was hidden)
      </ChatboxItem>
      <ChatboxItem
        class="c-chatbox__item c-chatbox__item--5"
        :image="require('@/assets/images/map.jpg')"
      >
        <span class="break-all"
          >https://www.google.com/maps/place/Southsea,+Portsmouth/@50.7835769,-1.0874084,16.36z/data=!4m13!1m7!3m6!1s0...</span
        >
      </ChatboxItem>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.c-chatbox {
  max-height: 30rem;
  overflow: hidden;
}

.c-chatbox__item {
  animation-name: chatboxItem;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
}
.c-chatbox__item--1 {
  animation-delay: 1s;
}
.c-chatbox__item--2 {
  animation-delay: 2s;
}
.c-chatbox__item--3 {
  animation-delay: 3.25s;
}
.c-chatbox__item--4 {
  animation-delay: 4.5s;
}
.c-chatbox__item--5 {
  animation-delay: 6s;
}

.c-chatbox__pane {
  animation-name: chatboxPane;
  animation-duration: 0.5s;
  animation-delay: 6s;
  animation-fill-mode: both;
  animation-timing-function: ease-out;
}
@keyframes chatboxPane {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-40%);
  }
}
@keyframes chatboxItem {
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
