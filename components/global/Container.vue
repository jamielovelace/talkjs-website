<template>
  <div class="w-full mx-auto px-6" :class="sizeClass">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: null,
    },
  },
  computed: {
    sizeClass() {
      if (this.size === 'small') {
        return 'max-w-3xl'
      } else {
        return 'max-w-5xl'
      }
    },
  },
}
</script>
