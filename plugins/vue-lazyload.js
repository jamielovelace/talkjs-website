import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  observer: true,
  observerOptions: {
    rootMargin: '200px',
    threshold: 0.1,
  },
})
