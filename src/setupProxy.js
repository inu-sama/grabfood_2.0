const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/assets',
        createProxyMiddleware({
            target: 'https://subtle-dolphin-e29768.netlify.app',
            changeOrigin: true,
        })
    );
}