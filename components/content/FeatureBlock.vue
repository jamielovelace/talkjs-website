<template>
  <div
    class="md:flex -ml-8 items-center"
    :class="{ 'md:flex-row-reverse': reverse }"
  >
    <div class="pl-8 flex-1">
      <slot name="content"> </slot>
    </div>
    <div class="pl-8 flex-1">
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
