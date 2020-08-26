<template>
  <ul
    class="c-navbar-dropdown bg-white rounded-lg absolute left-0 top-full py-3 px-4 shadow-lg"
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
