export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const url = new URL(req.url);
  const targetUrl = 'https://Faz.jojeyenaz.ir:2095' + url.pathname + url.search;

  try {
    const res = await fetch(targetUrl, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? await req.blob() : null,
      redirect: 'manual'
    });
    return res;
  } catch (e) {
    return new Response('Proxy Error: ' + e.message, { status: 500 });
  }
}
