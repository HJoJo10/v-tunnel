export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const url = new URL(req.url);
  const targetUrl = 'https://Faz.jojeyenaz.ir:2095' + url.pathname + url.search;

  const res = await fetch(targetUrl, {
    method: req.method,
    headers: req.headers,
    body: req.body,
    redirect: 'manual'
  });

  return res;
}
