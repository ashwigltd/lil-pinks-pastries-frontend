module.exports = {
  transpileDependencies: [
    'vuetify',
    'quasar'
  ],

  publicPath: '/',

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
}
