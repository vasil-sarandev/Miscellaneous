// eslint-disable-next-line import/no-extraneous-dependencies
const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        aliases: {
          '@shared': './src/shared',
          '@pages': './src/pages',
          '@routes': './src/routes'
        }
      }
    }
  ]
}
