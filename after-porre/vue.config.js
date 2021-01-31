module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/GGJ2021.io/'
  : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
