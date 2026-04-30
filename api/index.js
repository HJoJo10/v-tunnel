const https = require('https');

module.exports = (req, res) => {
  const options = {
    hostname: 'Faz.jojeyenaz.ir',
    port: 2095,
    path: req.url,
    method: req.method,
    headers: {
      ...req.headers,
      host: 'Faz.jojeyenaz.ir'
    },
    rejectUnauthorized: false
  };

  const proxyReq = https.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });

  req.pipe(proxyReq);

  proxyReq.on('error', (e) => {
    res.statusCode = 500;
    res.end(e.message);
  });
};
