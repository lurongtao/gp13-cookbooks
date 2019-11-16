const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:8888/',
      secure: false,
      changeOrigin: true
    })
  ),
  app.use(
    '/list',
    proxy({
      target: 'http://localhost:7777/',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/list": ""
      }
    })
  )
}