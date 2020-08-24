export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '@/plugins/aos', ssr: false },
    { src: '@/plugins/vue-lazyload', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-font-loader-strategy',
      {
        ignoreLighthouse: true,
        ignoredEffectiveTypes: ['2g', 'slow-2g'],
        fonts: [
          // Font
          {
            fileExtensions: ['woff2', 'woff'],
            fontFamily: 'Freight Sans Pro',
            fontFaces: [
              // Font-Face
              {
                preload: true,
                localSrc: ['Freight Sans Pro', 'FreightSansPro-Regular'],
                src: '@/assets/fonts/FreightSansProMedium-Regular',
                fontWeight: 500,
                fontStyle: 'normal',
              },
              // Font-Face
              {
                localSrc: [
                  'Freight Sans Pro Italic',
                  'FreightSansPro-RegularItalic',
                ],
                src: '@/assets/fonts/FreightSansProMedium-Italic',
                fontWeight: 500,
                fontStyle: 'italic',
              },
              // Font-Face
              {
                preload: true,
                localSrc: ['Freight Sans Pro', 'FreightSansPro-Regular'],
                src: '@/assets/fonts/FreightSansProBold-Regular',
                fontWeight: 'bold',
                fontStyle: 'normal',
              },
              // Font-Face
              {
                localSrc: [
                  'Freight Sans Pro Bold Italic',
                  'FreightSansPro-BoldItalic',
                ],
                src: '@/assets/fonts/FreightSansProBold-Italic',
                fontWeight: 'bold',
                fontStyle: 'italic',
              },
              // Font-Face
              {
                preload: true,
                localSrc: ['Freight Sans Pro Book', 'FreightSansPro-Book'],
                src: '@/assets/fonts/FreightSansProBook-Regular',
                fontWeight: 400,
                fontStyle: 'normal',
              },
              // Font-Face
              {
                localSrc: [
                  'Freight Sans Pro Book Italic',
                  'FreightSansPro-BookItalic',
                ],
                src: '@/assets/fonts/FreightSansProBook-Italic',
                fontWeight: 400,
                fontStyle: 'italic',
              },
            ],
          },
        ],
      },
    ],
    '@nuxtjs/svg-sprite',
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
