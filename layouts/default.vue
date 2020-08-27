<template>
  <div class="text-body font-body lg:text-lg">
    <Navbar />
    <Nuxt />
  </div>
</template>

<style>
img[lazy] {
  transition: filter 0.1s ease;
}
img[lazy='loading'] {
  filter: blur(10px);
}
</style>

<script>
import AOS from 'aos'
export default {
  mounted() {
    AOS.init()
  },
}
</script>
