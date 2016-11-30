import queryString from 'query-string';
import debug from 'debug';

const log = debug('request');

export async function request(url, { method, data, headers = {}, ...options }) {
  if (!(headers instanceof Headers)) {
    headers = new Headers(headers);
  }
  if (data && typeof data !== 'string') {
    if (method === 'GET') {
      url = `${url}?${queryString.stringify(data)}`;
    } else {
      headers.set('Content-Type', 'application/json');
      options.body = JSON.stringify(data);
    }
  }
  options = { ...options, method, headers };
  log({ url, options });
  return await (await fetch(url, options)).text();
}

function make(method) {
  return async (url, options) => await request(url, { ...options, method })
}

export const get = make('GET');
export const post = make('POST');
export const put = make('PUT');
export const del = make('DELETE');
