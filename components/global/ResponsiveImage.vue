<template>
  <!-- <img
    class="w-full max-w-full max-h-full"
    :data-loading="lqip"
    :data-srcset="srcSet"
    data-sizes="(min-width: 640px) 50vw, 100vw"
    :data-src="image.url"
    :alt="alt"
  /> -->
  <picture>
    <source v-if="image.sm" media="(min-width: 200px)" :srcset="image.sm.url" />
    <source v-if="image.md" media="(min-width: 640px)" :srcset="image.md.url" />
    <source v-if="image.lg" media="(min-width: 900px)" :srcset="image.lg.url" />
    <img
      class="w-full max-w-full max-h-full"
      :data-loading="lqip"
      :data-src="image.url"
      :alt="alt"
    />
  </picture>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    alt: {
      type: String,
      default: '',
    },
  },
  computed: {
    lqip() {
      const url = this.image.url
      try {
        return url.split('?')[0] + '?w=50&blur=5&q=1'
      } catch (error) {
        return url
      }
    },
    srcSet() {
      const sm = this.image.sm && this.image.sm.url
      const md = this.image.md && this.image.md.url
      const lg = this.image.lg && this.image.lg.url
      const srcs = []

      if (sm) srcs.push(sm + ' 480w')
      if (md) srcs.push(md + ' 640w')
      if (lg) srcs.push(lg + ' 1024w')
      return srcs
    },
  },
}
</script>

<style lang="scss" scoped></style>
