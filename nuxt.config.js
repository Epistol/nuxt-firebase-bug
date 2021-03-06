import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  srcDir: 'src/',

  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/composition',
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
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/proxy',
    '@nuxtjs/firebase'

  ],

  firebase: {
    config: {
      apiKey: process.env.FIREBASE_KEY,
      authDomain: "triplan-io.firebaseapp.com",
      databaseURL: "https://triplan-io.firebaseio.com",
      projectId: "triplan-io",
      storageBucket: "triplan-io.appspot.com",
      messagingSenderId: "893952973599",
      appId: "1:893952973599:web:c8543264963b7eaa74ae2a",
      measurementId: "G-E9HGZ2Y0EG"
    },
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedMutation: "SET_AUTH_USER",
          onAuthStateChangedAction: null,
        },
        ssr: {
          // !! NEVER deploy a service account file to github or to a publicly accessible folder on your server !!
          credential: '~/assets/firebase/serviceAccount.json',
          // Experimental Feature, use with caution.
          serverLogin: {
            sessionLifetime: 60 * 60 * 1000, // one hour
            loginDelay: 50 // minimal recommended delay
          }
        }
      },
      firestore: {
        memoryOnly: false // default
      },
      functions: {
        location: 'us-central1', // Default
        emulatorPort: 12345
      },
      storage: true,
      realtimeDb: true,
      performance: true,
      analytics: true,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000, // Default
          minimumFetchIntervalMillis: 43200000 // Default
        },
        defaultConfig: {
          welcome_message: "Welcome"
        }
      },
      messaging: {
        createServiceWorker: true,
        actions: [
          {
            action: '<randomName>',
            url: '<randomUrl>'
          }
        ],
        fcmPublicVapidKey: '<publicVapidKey>' // OPTIONAL : Sets vapid key for FCM after initialization
      }
    }
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },

  router: {
    base: '/',
  },

  generate: {
    dir: 'public',
  },
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    defaultAssets: { icons: 'fa' }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
