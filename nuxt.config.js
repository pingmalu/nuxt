import pkg from './package'

export default {
  // router: {
  //   base: '/'
  // },
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '实验室',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: "referrer", content: "no-referrer" }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  // plugins: [
  //   '@/plugins/element-ui'
  // ],

  plugins: [{ src: '@/plugins/element-ui', ssr: true }],


  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    publicPath: '/m',

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // if (!ctx.isDev) {
      //   config.output.publicPath = '/m/'
      // }
      // if (ctx.isClient) {
      // 拓展 webpack 配置
      // config.module.rules.push({
      //   test: require.resolve("three/examples/js/controls/OrbitControls"),
      //   use: "imports-loader?THREE=three"
      // })
      // config.module.rules.push({
      //   test: require.resolve("three/examples/js/controls/OrbitControls"),
      //   use: "exports-loader?THREE.OrbitControls"
      // })

      // config.module.rules.push({
      //   test: require.resolve("./static/js/bas.js"),
      //   use: "imports-loader?THREE=three"
      // })
      // config.module.rules.push({
      //   test: require.resolve("./static/js/bas.js"),
      //   use: "exports-loader?THREE.BAS"
      // })
      // }
    }
  }
}
