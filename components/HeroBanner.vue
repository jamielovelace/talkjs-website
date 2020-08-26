<template>
  <div
    class="md:min-h-80vh flex items-center pt-24 md:pt-40 pb-24 bg-grey-light relative"
  >
    <div class="absolute left-0 bottom-0 w-3/5 bg-white h-32"></div>
    <div class="absolute right-0 inset-y-0 w-2/5 bg-secondary">
      <Triangle class="absolute top-full right-0 mr-16 text-secondary" />
    </div>
    <Container class="relative z-10">
      <div class="sm:flex">
        <div class="sm:max-w-md mb-8 sm:mb-auto">
          <p
            class="font-bold text-xl lg:text-3xl text-primary leading-none mb-2"
          >
            TalkJS
          </p>
          <h1
            class="text-dark text-4xl md:text-6xl lg:text-6xl font-bold leading-none mb-4 md:mb-6"
          >
            A first-class messaging experience
          </h1>
          <p
            class="sm:max-w-sm text-dark text-xl md:text-2xl leading-tight font-light mb-6 md:mb-8"
          >
            Power-up your user experience with great messaging features.
          </p>
          <p>
            <Btn href="/" icon="arrow-right" class="mr-2">Try for free</Btn>
            <Btn href="/" color="white" class="mr-2">Live demo</Btn>
          </p>
        </div>
        <div class="w-full flex sm:justify-center">
          <Chatbox />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {}
</script>

<style>
.c-chatbox {
  backdrop-filter: blur(10px);
  min-height: 450px;
}

.c-chatbox__item {
}
</style>
