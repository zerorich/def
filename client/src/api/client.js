const API_BASE = (import.meta.env.VITE_API_URL || 'http://localhost:4000/api').replace(/\/$/, '');
const STATIC_BASE = API_BASE.replace(/\/api$/, '');

export function resolveAsset(url) {
  if (!url) return '';
  if (/^(https?:|data:|blob:)/i.test(url)) return url;
  return `${STATIC_BASE}${url.startsWith('/') ? '' : '/'}${url}`;
}

async function request(path, { method = 'GET', body, signal } = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    signal,
  });

  const text = await res.text();
  const data = text ? safeParse(text) : null;

  if (!res.ok) {
    const message = data?.error?.message || res.statusText || 'Request failed';
    const error = new Error(message);
    error.status = res.status;
    error.details = data?.error?.details;
    throw error;
  }
  return data;
}

function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export const api = {
  getProjects: (opts) => request('/projects', opts),
  sendMessage: (payload, opts) => request('/messages', { method: 'POST', body: payload, ...opts }),
};

export { API_BASE, STATIC_BASE };
