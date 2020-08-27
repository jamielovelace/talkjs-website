<template>
  <div :id="anchor" class="relative" :class="gridSize">
    <div
      v-for="(img, $childIndex) in images"
      :key="$id('image-grid-item') + $childIndex"
      v-lazy-container="{ selector: 'img' }"
      data-aos="fade-up"
      :data-aos-anchor="anchor ? '#' + anchor : ''"
      :data-aos-delay="($childIndex + 1) * 150 + 100"
      class="absolute max-h-full"
      :class="[
        imageClasses(img),
        {
          'shadow-xl rounded-lg c-feature-image overflow-hidden': !img.plain,
        },
      ]"
      :style="{
        left: (img.position_x || 0) + '%',
        top: (img.position_y || 0) + '%',
        width: (img.size || 100) + '%',
      }"
    >
      <ResponsiveImage
        v-if="img.image"
        :image="img.image"
        :alt="img.image.alt"
      />
      <!-- <img
        v-else
        class="max-w-full max-h-full w-auto"
        :data-loading="img.image.lqip"
        :data-srcset="
          img.image.tablet.url + ' 600w, ' + img.image.desktop.url + ' 900w'
        "
        :data-src="img.image.url"
        :alt="img.image.alt"
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    size: {
      type: String,
      default: 'large',
    },
    anchor: {
      type: String,
      default: '',
    },
  },
  computed: {
    gridSize() {
      let classes = 'pb-10/12'

      switch (this.size) {
        case 'small':
          classes = 'pb-2/5'
          break
        case 'medium':
          classes = 'pb-2/3'
          break
        case 'large':
          classes = 'pb-10/12'
          break
        default:
          break
      }
      return classes
    },
  },
  methods: {
    imageClasses: (item) => {
      const size = item.size || ''
      const classes = []

      switch (size) {
        case 'xs':
          classes.push('w-1/4')
          break
        case 'sm':
          classes.push('w-2/5')
          break
        case 'md':
          classes.push('w-1/2')
          break
        case 'lg':
          classes.push('w-3/5')
          break
        case 'xl':
          classes.push('w-3/4')
          break
        case 'full':
          classes.push('w-full')
          break
        default:
          break
      }
      return classes
    },
  },
}
</script>

<style scoped>
.c-feature-image {
  backdrop-filter: blur(5px);
}
.c-feature-image--shadow {
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1));
}
</style>
