const config = require('config')

let configureWebpack = {}

if (config.get('env') === 'prod') {
  configureWebpack = require('./vue.prod')
} else {
  configureWebpack = require('./vue.dev')
}

module.exports = {
  configureWebpack,
  outputDir: './dist',
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/dist'
    : '.'
}
