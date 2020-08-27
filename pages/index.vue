<template>
  <div>
    <HeroBanner
      :title="$prismic.asText(document.main_title)"
      :subtitle="$prismic.asText(document.sub_title)"
    />
    <FeaturesOverview
      :pre-title="$prismic.asText(document.features_overview_pre_title)"
      :title="$prismic.asText(document.features_overview_title)"
      :features-large="document.features_overview_list"
      :features-small="document.features_overview_list_secondary"
    />
    <div class="mt-20">
      <FeaturesSection :features="document.body" />
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
        <div class="w-32 md:w-64 bg-grey-light flex-shrink-0 p-2 md:p-6">
          <div
            v-for="(example, $index) in document.examples"
            :key="$id($index + '-key')"
            class="py-1 px-3 text-primary rounded-md mb-2 hover:bg-grey transition duration-100"
            :class="{
              'bg-primary text-white hover:bg-primary': selectedDocs === $index,
            }"
            @click="selectedDocs = $index"
            v-text="$prismic.asText(example.language)"
          ></div>
        </div>
        <div class="flex-grow-1 overflow-x-auto">
          <div
            v-for="(example, $index) in document.examples"
            v-show="selectedDocs === $index"
            :key="$id($index + '-key')"
          >
            <Prism lang="js" height="400px">{{
              $prismic.asText(example.code)
            }}</Prism>
          </div>
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
        <div v-for="feature in document.features_more" :key="feature.icon">
          <svg-icon class="text-primary w-10 h-10" :name="feature.icon" />
          <h3 class="text-2xl text-dark font-bold mt-2 mb-2 leading-tight">
            {{ $prismic.asText(feature.name) }}
          </h3>
          <prismic-rich-text
            class="prose sm:prose-lg"
            :field="feature.content"
          />
        </div>
      </div>
    </Container>

    <PreFooter
      :title="$prismic.asText(document.pre_footer_title)"
      :body="document.pre_footer_content"
      :images="document.images"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle('features_page')).data
      return {
        document,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      selectedDocs: 0,
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
