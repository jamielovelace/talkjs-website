<template>
  <div class="">
    <div
      v-for="(item, $index) in features"
      :key="item.icon"
      class="relative overflow-hidden w-full"
    >
      <Decorator
        v-if="$index === 1"
        :type="1"
        class="absolute top left-0 -ml-20 text-grey-light w-screen-sm"
      />
      <Decorator
        v-if="$index === 4"
        :type="2"
        class="absolute top right-0 -mr-10 text-grey-light w-screen-sm"
      />
      <Decorator
        v-if="$index === 7"
        :type="3"
        class="absolute top left-0 mt-12 -ml-20 text-grey-light w-screen-sm"
      />
      <Container :id="$id('feature')" class="relative z-10">
        <FeatureBlock class="mb-20" :reverse="$index % 2 ? true : false">
          <template v-slot:content>
            <Feature :icon="item.primary.icon" icon-size="lg">
              <h2
                class="text-2xl sm:text-3xl md:text-2xl lg:text-3xl mt-2 md:mt-3 mb-4 font-bold text-dark leading-tight"
              >
                {{ $prismic.asText(item.primary.feature_name) }}
              </h2>
              <prismic-rich-text
                class="prose sm:prose-lg"
                :field="item.primary.content"
              />
            </Feature>
          </template>
          <template v-slot:images>
            <AnimationMessaging
              v-if="item.primary.preset_animation === 'messaging'"
            />
            <ImageGrid v-else-if="item.items" :images="item.items" />
          </template>
        </FeatureBlock>
      </Container>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped></style>
