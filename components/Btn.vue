<template>
  <component
    :is="type"
    :href="href"
    :to="to"
    class="rounded-full inline-flex items-center py-2 px-6 font-bold transition-colors duration-150 focus:outline-none focus:shadow-outline"
    :class="classes"
  >
    <slot />
    <Icon v-if="icon" class="ml-1" />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
  },
  computed: {
    classes() {
      const classList = []
      // Colours
      switch (this.color) {
        case 'white':
          classList.push('bg-white', 'text-primary', 'hover:text-primary-light')
          break
        case 'secondary':
          classList.push('bg-secondary', 'text-dark')
          break
        default:
          classList.push('bg-primary', 'text-white', 'hover:bg-primary-light')
          break
      }
      return classList
    },
    type() {
      if (this.href) {
        return 'a'
      } else if (this.to) {
        return 'nuxt-link'
      } else {
        return 'button'
      }
    },
  },
}
</script>

<style></style>
