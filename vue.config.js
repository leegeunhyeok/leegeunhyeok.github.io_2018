const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const path = require('path')

module.exports = {
  configureWebpack: {
    plugins: [
      new SWPrecacheWebpackPlugin({
        cacheId: 'v1',
        filepath: './service-worker.js',
        minify: false,
        staticFileGlobs: [
          './img/**/*.{png,jpg,ico}',
          './fonts/*.{eot,ttf,woff}'
        ],
        stripPrefix: '.',
        mergeStaticsConfig: true,
        staticFileGlobsIgnorePatterns: [/\.map$/]
      })
    ]
  },
  outputDir: './dist',
  baseUrl: '/dist'
}
