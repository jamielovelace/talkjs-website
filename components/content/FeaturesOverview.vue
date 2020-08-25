<template>
  <div>
    <div class="bg-primary-dark pt-24 pb-64">
      <Container>
        <div class="max-w-5xl mx-auto w-full">
          <p class="font-bold text-secondary mb-2">{{ preTitle }}</p>
          <h2 class="text-white text-4xl max-w-md leading-tight">
            {{ title }}
          </h2>
        </div>
      </Container>
    </div>
    <div class="max-w-5xl mx-auto -mt-56">
      <Container>
        <div
          class="js-features-overview w-full p-8 rounded-lg bg-white max-w-3xl"
        >
          <div class="md:grid md:grid-cols-2 md:gap-4 mb-4 md:mb-8">
            <Feature
              v-for="(feature, index) in featuresLarge"
              :key="feature.icon"
              :icon="feature.icon"
              icon-size="md"
              class="mb-2 md:mb-auto"
              data-aos="fade"
              data-aos-once="true"
              :data-aos-delay="100 + index * 100"
              data-aos-anchor=".js-features-overview"
            >
              <div class="text-dark text-xl">{{ feature.label }}</div>
            </Feature>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-4">
            <div
              v-for="(feature, index) in featuresSmall"
              :key="feature.icon"
              data-aos="fade"
              data-aos-once="true"
              :data-aos-delay="500 + index * 100"
              data-aos-anchor=".js-features-overview"
            >
              <Feature :icon="feature.icon" icon-size="sm" :circled="false">
                <div>{{ feature.label }}</div>
              </Feature>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    preTitle: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    featuresLarge: {
      type: Array,
      default: () => [],
    },
    featuresSmall: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
