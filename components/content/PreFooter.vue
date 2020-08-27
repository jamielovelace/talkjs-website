<template>
  <div class="bg-primary pb-16 md:pb-24 mt-16 md:mt-24 relative text-white">
    <Decorator
      :type="2"
      class="hidden md:block text-white opacity-25 max-w-sm absolute right-0 mr-40 mt-12"
    />
    <Container>
      <Triangle />
      <div class="-mt-4 md:-mt-8 md:-ml-8 md:flex items-center relative z-10">
        <div class="flex-1 md:pl-8 mb-8">
          <h3 class="mt-12 font-bold text-4xl mb-2 leading-tight">
            {{ title }}
          </h3>
          <prismic-rich-text
            class="prose sm:prose-lg text-white"
            :field="body"
          />
          <p class="mt-6">
            <Btn href="/" icon="arrow-right" color="secondary" class="mr-2"
              >Try for free</Btn
            >
            <Btn href="/" color="primary" class="mr-2">Live demo</Btn>
          </p>
        </div>
        <div class="flex-1 md:pl-8 mb-8">
          <ImageGrid :images="images" anchor="footer" />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
    body: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
