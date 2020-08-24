<template>
  <div class="max-w-sm">
    <ChatboxItem
      :avatar="require('@/assets/images/avatar-1.jpg')"
      type="other"
      class=""
    >
      Hello
    </ChatboxItem>
    <ChatboxItem
      :avatar="require('@/assets/images/avatar-2.jpg')"
      type="other"
      class=""
    >
      hey!
    </ChatboxItem>
    <ChatboxItem class="" :avatar="require('@/assets/images/avatar-3.jpg')">
      Could you send me those photos over please?
    </ChatboxItem>
    <ChatboxItem
      :avatar="require('@/assets/images/avatar-2.jpg')"
      type="other"
      class=""
    >
      sure thing!
    </ChatboxItem>
    <ChatboxItem
      :avatar="require('@/assets/images/avatar-2.jpg')"
      type="other"
      class=""
    >
      <div class="flex items-center">
        <svg-icon name="document" class="w-4 h-4 text-primary mr-2" />
        <span class="text-primary underline mr-1">latest-photo-shoot.zip</span>
        <span class="text-xs text-body">(2 MB)</span>
      </div>
    </ChatboxItem>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
