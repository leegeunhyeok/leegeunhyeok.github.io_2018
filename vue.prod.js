const config = require('config')
const webpack = require('webpack')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      '$VERSION$': `'${config.get('version')}'`,
      '$BUILD$': `'${config.get('build')}'`
    }),
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
}
