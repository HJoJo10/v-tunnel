const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = async (req, res) => {
  const targetUrl = 'https://Faz.jojeyenaz.ir:2095' + req.url;
  
  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : null,
      redirect: 'manual'
    });

    res.status(response.status);
    for (let [key, value] of response.headers.entries()) {
      res.setHeader(key, value);
    }
    
    const data = await response.buffer();
    res.send(data);
  } catch (e) {
    res.status(500).send('Error: ' + e.message);
  }
};
