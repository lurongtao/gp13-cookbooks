const path = require('path')
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  addWebpackAlias({
    "assets": path.resolve(__dirname, './src/assets/')
  })
)