<template>
  <div class="flex items-center">
    <div
      v-if="icon"
      class="flex-shrink rounded-full self-start"
      :class="[
        iconSize === 'sm' ? 'mr-1' : 'mr-3',
        { 'bg-secondary-light': circled, 'p-2': !flush },
      ]"
    >
      <svg-icon
        v-if="icon"
        class="text-primary"
        :class="sizeClass"
        :name="icon"
      />
    </div>
    <div class="flex-grow">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null,
    },
    iconSize: {
      type: String,
      default: null,
    },
    circled: {
      type: Boolean,
      default: true,
    },
    flush: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    sizeClass() {
      if (this.iconSize === 'lg') {
        return 'w-12 h-12'
      } else if (this.iconSize === 'sm') {
        return 'w-5 h-5'
      }
      return 'w-8 h-8'
    },
  },
}
</script>

<style lang="scss" scoped></style>
