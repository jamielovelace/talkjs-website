<template>
  <div
    class="md:flex -ml-12 items-center"
    :class="{ 'md:flex-row-reverse': reverse }"
  >
    <div class="pl-12 flex-1">
      <slot name="content"> </slot>
    </div>
    <div v-if="$slots.images" class="pl-12 flex-1">
      <slot name="images"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
