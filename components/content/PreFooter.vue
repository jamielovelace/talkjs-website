<template>
  <div class="bg-primary pb-16 md:pb-24 mt-16 md:mt-24 relative text-white">
    <Container>
      <Triangle />
      <div class="-mt-4 md:-mt-8 md:-ml-8 md:flex items-center">
        <div class="flex-1 md:pl-8 mb-8">
          <h3 class="mt-12 font-bold text-4xl mb-2 leading-tight">
            {{ title }}
          </h3>
          <div class="prose md:prose-lg text-white" v-html="body"></div>
          <p class="mt-6">
            <Btn href="/" icon="arrow-right" color="secondary" class="mr-2"
              >Try for free</Btn
            >
            <Btn href="/" color="primary" class="mr-2">Live demo</Btn>
          </p>
        </div>
        <div class="flex-1 md:pl-8 mb-8">
          <ImageGrid :images="images" />
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
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
