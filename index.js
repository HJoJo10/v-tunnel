export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const url = new URL(req.url);
  const targetUrl = 'http://Faz.jojeyenaz.ir:2095' + url.pathname + url.search;

  const newRequest = new Request(targetUrl, {
    method: req.method,
    headers: req.headers,
    body: req.body,
    redirect: 'follow'
  });

  try {
    return await fetch(newRequest);
  } catch (e) {
    return new Response('Error: ' + e.message, { status: 500 });
  }
}
