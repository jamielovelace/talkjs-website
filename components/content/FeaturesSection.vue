<template>
  <Container>
    <FeatureBlock
      v-for="(item, $index) in items"
      :key="item.icon"
      class="mb-20"
      :reverse="$index % 2 ? true : false"
    >
      <template v-slot:content>
        <Feature :icon="item.icon" icon-size="lg">
          <h2
            class="text-2xl sm:text-3xl md:text-2xl lg:text-3xl mt-2 md:mt-3 mb-4 font-bold text-dark leading-tight"
          >
            {{ item.title }}
          </h2>
          <div class="prose sm:prose-lg" v-html="item.content"></div>
        </Feature>
      </template>
      <template v-slot:images>
        <AnimationMessaging v-if="item.customAnimation === 'messaging'" />
        <div v-else></div>
      </template>
    </FeatureBlock>
  </Container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Real-time messaging',
          icon: 'chat-bubbles',
          content: `
            <p>
              TalkJS turns your platform into a real-time messaging app, much
              like WhatsApp or Facebook Messenger. Complete with features you
              need like file transfer, location sharing, emoji, and more.
              Desktop notifications and mobile push notifications let users
              respond quickly while doing other things.
            </p>
          `,
          images: [],
          customAnimation: 'messaging',
        },

        {
          title: 'Email and SMS fallback',
          icon: 'mail-unread',
          content: `
            <p>
              Always keep your users in the loop. If a user is sent a message
              while offline, TalkJS sends an email or SMS (or both, depending on
              your configuration). Our battle-tested infrastructure ensures
              direct and speedy delivery.
            </p>
            <p>
              Users can reply to the mail directly or jump back in to your
              platform - either way, their response will safely reach its
              destination.
            </p>
            <p>
              Of course, you can fully customize the email and SMS message body.
            </p>
          `,
          images: [],
        },

        {
          title: 'Full conversation history',
          icon: 'albums',
          content: `
            <p>Let your users get back to a conversation whenever they want. TalkJS stores all messages safely and securely so you don't have to.</p>
            <p>The TalkJS Inbox View shows your users a history of all conversations and lets them respond in any of them, all inside a familiar and well-designed interface.</p>
          `,
          images: [],
        },

        {
          title: 'Chat pop-up',
          icon: 'chatbox-ellipsis',
          content: `
            <p>Bring a single conversation into focus from anywhere on your platform with our chat pop-up. You can actually test this one live from this website to chat with us :)</p>
            <p>Stay in full control over who can talk to who, with just a few lines of code.</p>
          `,
          images: [],
        },

        {
          title: 'Responsive cross-browser UX',
          icon: 'phone',
          content: `
            <p>Years of sweat and tears went into making the TalkJS messaging UI fast, fun, and easy to use. Fully responsive, TalkJS works great on nearly all mobile phones and computers.</p>
            <p>We frequently test TalkJS on the last 2 desktop and mobile versions of Chrome, Safari, Firefox, Edge and Opera, as well as Internet Explorer 9 and up.</p>
          `,
          images: [],
        },

        {
          title: 'Multi-Language User Interface',
          icon: 'language',
          content: `
            <p>TalkJS has built-in localization features that allow you to display the text (e.g. "Send") of the interfaces to the user in their own language.</p>
            <p>There are two ways to set the language in TalkJS. You can change the default language in the Dashboard for all of your platform's users. If you need to support multiple languages for different, you can set a language per User Configuration.</p>
          `,
          images: [],
        },

        {
          title: 'Channels, groups, and topics',
          icon: 'people',
          content: `
            <p>In TalkJS, you can shape conversations any way you like. Create a private one-on-one conversation or engage multiple users in a channel, topic, group, or chat room. It's all about shaping a TalkJS conversation to fit your use case. You can add users to an existing conversation or create a multi-user chat from scratch.</p>
            <p>With TalkJS, it's easy to create a place where meaningful conversations thrive.</p>
          `,
          images: [],
        },

        {
          title: 'Customizable design',
          icon: 'palette',
          content: `
            <p>Pick one of our expertly designed TalkJS Themes and customize it to perfectly fit your brand.</p>
            <p>A theme is simply a CSS file that gives you control over the most important parts of the interface. Stay in control of the look and feel but leave the heavy lifting of building a real-time messenger to TalkJS.</p>
          `,
          images: [],
        },

        {
          title: 'Activity history & dashboard',
          icon: 'time',
          content: `
            <p>See who talks to who and monitor their messages in the TalkJS Dashboard. This lets you stay in full control of communication so you can jump in when necessary.</p>
          `,
          images: [],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
