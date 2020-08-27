<template>
  <ul
    class="c-navbar-dropdown lap:bg-white border-l border-grey lap:border-l-0 lap:rounded-lg lap:absolute left-0 lap:top-full lap:py-3 ml-2 lap:ml-0 px-2 lap:px-4 lap:shadow-lg"
  >
    <li v-for="item in items" :key="item.location">
      <a
        :href="item.location"
        :title="item.title"
        class="block my-1 text-body text-sm lap:text-base hover:text-primary-light"
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
