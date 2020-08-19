<template>
  <ul
    class="c-navbar-dropdown bg-white rounded-lg bg-opacity-75 absolute left-0 top-full py-3 px-4 shadow-lg"
  >
    <li v-for="item in items" :key="item.location">
      <a
        :href="item.location"
        :title="item.title"
        class="block my-2 text-dark text-base hover:text-primary-light"
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
  backdrop-filter: blur(8px);
  width: 175px;
}
</style>
