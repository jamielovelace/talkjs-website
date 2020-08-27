<template>
  <div class="text-body font-body lg:text-lg">
    <Navbar />
    <Nuxt />
  </div>
</template>

<style></style>

<script>
import AOS from 'aos'
export default {
  mounted() {
    AOS.init()
  },
}
</script>
