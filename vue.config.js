let configureWebpack = {}

if (process.env.NODE_ENV === 'production') {
  configureWebpack = require('./vue.prod')
} else {
  configureWebpack = require('./vue.dev')
}

module.exports = {
  configureWebpack,
  outputDir: './dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist'
    : '.'
}
