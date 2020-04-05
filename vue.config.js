module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  pwa: {
    appleMobileWebAppCapable: 'yes',
    iconPaths: {
      favicon32: 'favicon.png',
      favicon16: 'favicon.png',
      appleTouchIcon: 'favicon.png',
      maskIcon: 'favicon.png',
      msTileImage: 'favicon.png'
    },
    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
        // cleanupOutdatedCaches: true,
        skipWaiting: true
    }
  }
}
