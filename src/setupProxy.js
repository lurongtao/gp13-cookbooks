const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://10.9.47.191:3333/',
      changeOrigin: true,
      // pathRewrite: {
      //   '^/api': ''
      // }
    })
  )
}