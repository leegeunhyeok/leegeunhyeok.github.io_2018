const config = require('config')
const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      '$VERSION$': `'${config.get('version')}'`,
      '$BUILD$': `'${config.get('build')}'`
    })
  ]
}
