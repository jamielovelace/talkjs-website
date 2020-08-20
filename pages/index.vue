<template>
  <div>
    <div
      class="min-h-80vh flex items-center pt-40 pb-32 bg-grey-light relative"
    >
      <div class="absolute right-0 inset-y-0 w-2/5 bg-secondary">
        <Triangle class="absolute top-full right-0 mr-16 text-secondary" />
      </div>
      <Container class="relative z-10">
        <div class="max-w-md">
          <p class="font-bold text-3xl text-primary leading-none mb-2">
            TalkJS
          </p>
          <h1 class="text-dark text-6xl font-bold leading-none mb-6">
            A first-class messaging experience
          </h1>
          <p class="max-w-sm text-dark text-2xl leading-tight font-light mb-8">
            Power-up your user experience with great messaging features.
          </p>
          <p>
            <Btn href="/" icon="arrow-right" class="mr-2">Try for free</Btn>
            <Btn href="/" color="white" class="mr-2">Live demo</Btn>
          </p>
        </div>
      </Container>
    </div>
    <FeaturesOverview
      pre-title="How it works"
      title="TalkJS has everything you need in a chat app, out of the box."
      :features-large="featuresLarge"
      :features-small="featuresSmall"
    />
    <div class="mt-20">
      <FeaturesSection />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuresLarge: [
        {
          icon: 'chat-bubbles',
          label: 'Real-time messaging',
        },
        {
          icon: 'chatbox-ellipsis',
          label: 'Chat pop-up',
        },
        {
          icon: 'people',
          label: 'Channels, groups & topics',
        },
        {
          icon: 'mail-unread',
          label: 'Email & SMS fallback',
        },
        {
          icon: 'albums',
          label: 'Full conversation history',
        },
        {
          icon: 'palette',
          label: 'Customizable design',
        },
      ],
      featuresSmall: [
        {
          icon: 'phone',
          label: 'Responsive cross-browser UX',
        },
        {
          icon: 'time',
          label: 'Activity history & dashboard',
        },
        {
          icon: 'language',
          label: 'Multi-Language User Interface',
        },
        {
          icon: 'checkmark-done-all',
          label: 'Read indicators',
        },
        {
          icon: 'code',
          label: 'Developer-friendly API',
        },
        {
          icon: 'ellipsis',
          label: 'Typing indicators',
        },
        {
          icon: 'notification',
          label: 'Desktop notifications',
        },
        {
          icon: 'person',
          label: 'Suppress contact information',
        },
        {
          icon: 'chat-bubbles',
          label: 'Unread messages badge',
        },
        {
          icon: 'chatbox-ellipsis',
          label: 'Widget',
        },
      ],
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
