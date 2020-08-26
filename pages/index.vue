<template>
  <div>
    <HeroBanner />
    <FeaturesOverview
      pre-title="How it works"
      title="TalkJS has everything you need in a chat app, out of the box."
      :features-large="featuresLarge"
      :features-small="featuresSmall"
    />
    <div class="mt-20">
      <FeaturesSection />
    </div>
    <Container>
      <FeatureBlock>
        <template v-slot:content>
          <Feature icon="code" icon-size="lg">
            <h2 class="text-3xl font-bold text-dark mt-3 mb-4 leading-tight">
              Developer-friendly API
            </h2>
            <div class="md:flex -ml-12">
              <div class="prose md:prose-lg pl-12 flex-1 mb-6">
                <p>
                  Our JavaScript API lets you connect your own analytics or UI
                  elements with ease. Events can notify you when new messages
                  are written or received, and when the user navigates between
                  conversations. Connect the user's customer journey with the
                  conversation by injecting system messages.
                </p>
                <p><a href="#">View API Docs</a></p>
              </div>
              <div class="prose md:prose-lg pl-12 flex-1">
                <p>
                  Our REST API allows you to manage your users, conversations
                  and messages. Webhooks notify your backend of events
                  happening: e.g. new messages and new conversations, and many
                  more.
                </p>
                <p><a href="#">View Webhook Docs</a></p>
              </div>
            </div>
          </Feature>
        </template>
      </FeatureBlock>
      <div class="mt-6 flex overflow-hidden rounded-lg shadow-lg">
        <div class="w-64 bg-grey-light"></div>
        <div class="flex-1">
          <Prism lang="js" height="400px">
            console.log('test')
          </Prism>
        </div>
      </div>
    </Container>

    <Container class="mt-16">
      <h2
        class="md:text-center text-3xl md:text-5xl text-dark font-bold mb-8 leading-none"
      >
        And much more...
      </h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
        <div v-for="feature in featuresMore" :key="feature.icon">
          <svg-icon class="text-primary w-10 h-10" :name="feature.icon" />
          <h3 class="text-2xl text-dark font-bold mt-2 mb-2 leading-tight">
            {{ feature.label }}
          </h3>
          <div class="prose md:prose-lg" v-html="feature.body"></div>
        </div>
      </div>
    </Container>

    <PreFooter
      :title="preFooter.title"
      :body="preFooter.body"
      :images="preFooter.images"
    />
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
      featuresMore: [
        {
          icon: 'chat-bubble-unread',
          label: 'Badges',
          body: `<p>Show a "you have new messages!" badge in your header with just a few lines of code.</p>`,
        },
        {
          icon: 'notification',
          label: 'Notifications',
          body: `<p>Desktop notifications on new messages keep your users engaged even when they're not looking.</p>`,
        },
        {
          icon: 'chatbox-ellipsis',
          label: 'Widget',
          body: `<p>TalkJS also ships with a pop-up widget, perfect for ecommerce sites. <strong><a href="#">It looks like this</a></strong></p>`,
        },
        {
          icon: 'checkmark-done-all',
          label: 'Read indicators',
          body: `<p>Let your users know that a message has been delivered to our servers or read by the recipient.</p>`,
        },
        {
          icon: 'ellipsis',
          label: 'Typing indicators',
          body: `<p>Real-time typing indicators help keep your users engaged.</p>`,
        },
        {
          icon: 'person',
          label: 'Suppress contact information',
          body: `<p>Prevent users from exchanging email addresses, phone numbers and website addresses. Configure exceptions in detail.</p>`,
        },
      ],
      preFooter: {
        title: 'Ready to get started?',
        body: `<p>Whether you're building a marketplace, on-demand business, e‑commerce, crowdfunding, travel and events platform, TalkJS is the chat tool for you.</p>`,
        images: [
          {
            posX: 0,
            posY: 0,
            size: 55,
            image: {
              alt: 'face',
              desktop: { url: require('@/assets/images/face.jpg') },
              tablet: { url: require('@/assets/images/face.jpg') },
              url: require('@/assets/images/face.jpg'),
            },
          },
          {
            posX: 15,
            posY: 60,
            size: 60,
            image: {
              alt: 'face',
              desktop: { url: require('@/assets/images/face-3.jpg') },
              tablet: { url: require('@/assets/images/face-3.jpg') },
              url: require('@/assets/images/face-3.jpg'),
            },
          },
          {
            posX: 60,
            posY: 20,
            size: 40,
            image: {
              alt: 'face',
              desktop: { url: require('@/assets/images/face-2.jpg') },
              tablet: { url: require('@/assets/images/face-2.jpg') },
              url: require('@/assets/images/face-2.jpg'),
            },
          },
        ],
      },
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
