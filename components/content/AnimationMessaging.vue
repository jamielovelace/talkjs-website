<template>
  <div class="max-w-sm js-messaging">
    <ChatboxItem
      :avatar="require('@/assets/images/avatar-1.jpg')"
      type="other"
      data-aos="fade"
      data-aos-once="true"
      data-aos-delay="300"
      data-aos-anchor=".js-messaging"
    >
      Hello
    </ChatboxItem>
    <ChatboxItem
      :avatar="require('@/assets/images/avatar-2.jpg')"
      type="other"
      data-aos="fade"
      data-aos-once="true"
      data-aos-delay="500"
      data-aos-anchor=".js-messaging"
    >
      hey!
    </ChatboxItem>
    <ChatboxItem
      data-aos="fade"
      data-aos-once="true"
      data-aos-delay="700"
      data-aos-anchor=".js-messaging"
      :avatar="require('@/assets/images/avatar-3.jpg')"
    >
      Could you send me those photos over please?
    </ChatboxItem>
    <ChatboxItem
      :avatar="require('@/assets/images/avatar-2.jpg')"
      type="other"
      data-aos="fade"
      data-aos-once="true"
      data-aos-delay="900"
      data-aos-anchor=".js-messaging"
    >
      sure thing!
    </ChatboxItem>
    <ChatboxItem
      :avatar="require('@/assets/images/avatar-2.jpg')"
      type="other"
      data-aos="fade"
      data-aos-once="true"
      data-aos-delay="1100"
      data-aos-anchor=".js-messaging"
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
