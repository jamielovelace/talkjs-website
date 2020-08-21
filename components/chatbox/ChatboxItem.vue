<template>
  <div class="c-chatbox__item mb-4">
    <div class="flex items-center" :class="{ 'pl-8': type === 'me' }">
      <div v-if="avatar" class="flex-shrink mr-2 self-start">
        <img class="w-12 h-12 rounded-full" :src="avatar" />
      </div>
      <div :class="type === 'me' ? 'ml-auto' : 'flex-1'">
        <div
          class="py-2 px-4 inline-block c-chatbox__message leading-tight max-w-sm"
          :class="
            type === 'me'
              ? 'bg-primary text-white'
              : 'bg-white border-grey border-solid border'
          "
        >
          <slot />
        </div>
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
}
</style>
