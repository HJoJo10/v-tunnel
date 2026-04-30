const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const proxy = createProxyMiddleware({
    target: 'https://Faz.jojeyenaz.ir:2095',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  });

  return proxy(req, res);
};
