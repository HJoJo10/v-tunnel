export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const url = new URL(req.url);
  const targetUrl = 'https://Faz.jojeyenaz.ir:2095' + url.pathname + url.search;

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? await req.blob() : null,
      redirect: 'manual'
    });
    return response;
  } catch (e) {
    const httpUrl = targetUrl.replace('https', 'http');
    return fetch(httpUrl, { 
      method: req.method, 
      headers: req.headers, 
      body: req.method !== 'GET' && req.method !== 'HEAD' ? await req.blob() : null,
      redirect: 'manual' 
    });
  }
}
