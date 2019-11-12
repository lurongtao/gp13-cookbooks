const path = require('path')
const cc = require('customize-cra')
let { 
  override, 
  fixBabelImports, 
  addWebpackAlias, 
  addDecoratorsLegacy, 
  setWebpackPublicPath
} = cc

console.log(cc)

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  addWebpackAlias({
    "assets": path.resolve(__dirname, './src/assets/'),
    "components": path.resolve(__dirname, './src/components/'),
    "utils": path.resolve(__dirname, './src/utils/'),
    "pages": path.resolve(__dirname, './src/pages/')
  }),

  addDecoratorsLegacy(),

  setWebpackPublicPath('http://dev.gp13.com:8848/')
)

// const devServer = () => {
//   return (config) => {
//     config.output.publicPath = './',
//     config.devServer = {
//       proxy: {
//         "/api": {
//           target: "http://localhost:9000",
//           changeOrigin: true
//         }
//       }
//     }
//     return config
//   }
// }

// module.exports = {
//   webpack: override(
//     fixBabelImports('import', {
//       libraryName: 'antd-mobile',
//       style: 'css',
//     }),
  
//     addWebpackAlias({
//       "assets": path.resolve(__dirname, './src/assets/'),
//       "components": path.resolve(__dirname, './src/components/'),
//     })
//   ),

//   // devServer: overrideDevServer(
//   //   // dev server plugin
//   //   // devConfig()
//   //   // devServer()
//   //   function(config){
//   //     console.log(config)
//   //   }
//   // ) 
//   devServer: function(configFunction) {
//     return function(proxy, allowedHost) {
//       const config = configFunction(proxy, allowedHost)
//       // console.log(config)

//       // config.devServer = {
//       //   contentBase: path.join(__dirname, 'dist'),
//       //   compress: true,
//       //   port: 9000
//       // }

//       return config
//     }
//   }
// }

// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   // config.devServer = {
//   //   contentBase: path.join(__dirname, 'dist'),
//   //   compress: true,
//   //   port: 9000
//   // }
//   config.resolve.alias = {
//     "assets": path.resolve(__dirname, './src/assets/'),
//     "components": path.resolve(__dirname, './src/components/'),
//   }

//   return config
// };