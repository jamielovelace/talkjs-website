<template>
  <div class="mb-2">
    <div class="flex items-center" :class="{ 'pl-8': type === 'me' }">
      <div v-if="avatar && type !== 'me'" class="flex-shrink-0 mr-2 self-start">
        <img class="w-12 h-12 rounded-full" :src="avatar" />
      </div>
      <div class="flex" :class="type === 'me' ? 'ml-auto' : 'flex-grow-1'">
        <div
          class="relative c-chatbox__message inline-block leading-tight max-w-sm"
          :class="
            type === 'me'
              ? 'bg-primary text-white'
              : 'bg-white border-grey border-solid border'
          "
        >
          <img v-if="image" :src="image" class="w-full max-w-sm" />
          <div class="inline-flex items-end py-2 px-4">
            <slot />
            <div class="whitespace-no-wrap text-xs ml-2 mb-1 leading-none">
              Just now
            </div>
          </div>
        </div>
      </div>
      <div v-if="avatar && type === 'me'" class="flex-shrink-0 ml-2 self-start">
        <img class="w-12 h-12 rounded-full" :src="avatar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'me',
    },
  },
}
</script>

<style>
.c-chatbox__message {
  border-radius: 20px;
  overflow: hidden;
}
</style>
