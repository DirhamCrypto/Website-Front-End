import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: 3000, // default: 3000
    host: 'localhost', // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Dirham Crypto',
    title: 'Dirham Crypto',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/styles.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/plugins",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    // customProperties: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#FFEA94',
          accent: '#0F2732',
          secondary: '#DBF4FF',
          info: '#FFF9E0',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: '#09232E',
          background: '#0F2732'
        },
        light: {
          primary: '#FFEA94',
          accent: '#0F2732',
          secondary: '#DBF4FF',
          info: '#FFF9E0',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: '#09232E',
          background: '#0F2732'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
