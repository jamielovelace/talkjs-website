<template>
  <div
    class="c-chatbox p-6 h-full w-full max-w-sm bg-white bg-opacity-75 rounded-lg shadow-xl"
  >
    <ChatboxItem :avatar="require('@/assets/images/avatar-1.jpg')" type="other">
      Hello
    </ChatboxItem>
    <ChatboxItem :avatar="require('@/assets/images/avatar-1.jpg')" type="other">
      Are you looking to book soon?
    </ChatboxItem>
    <ChatboxItem>
      yes! 5-21 November? how many people can you fit?
    </ChatboxItem>
    <ChatboxItem>
      it’s on this street correct? (contact information was hidden)
    </ChatboxItem>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
