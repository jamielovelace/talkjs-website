<template>
  <ul
    class="c-navbar-dropdown lap:bg-white lap:rounded-lg lap:absolute left-0 lap:top-full lap:py-3 px-4 lap:shadow-lg"
  >
    <li v-for="item in items" :key="item.location">
      <a
        :href="item.location"
        :title="item.title"
        class="block my-1 text-body text-base hover:text-primary-light"
      >
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>

<style>
.c-navbar-dropdown {
  width: 175px;
}
</style>
