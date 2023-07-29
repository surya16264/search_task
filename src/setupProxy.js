const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api-r1.tagalys.com/v1/search?q=tops&page=1',
      changeOrigin: true,
    })
  );
};