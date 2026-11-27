// CAE Lab service worker: aplikace funguje offline z uložené kopie.
// Nové verze se stahují ručně tlačítkem „Zkontrolovat aktualizace“ v nastavení
// (stejně jako v Kazetě). Při změně číslo CACHE zvednout spolu s VERSION v index.html.
const CACHE = 'caelab-v7';
const CORE = ['./', './index.html', './data.js', './texts.js', './writing.js', './manifest.json', './icon-180.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.all(CORE.map(u => fetch(u, { cache: 'no-store' }).then(r => r.ok && c.put(u, r)).catch(() => {}))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  // Ruční kontrola aktualizací chce vždy čerstvou verzi ze sítě.
  if (req.cache === 'no-store' || req.cache === 'reload') { e.respondWith(fetch(req)); return; }
  // Vše ze uložené kopie; jen když tam něco chybí, stáhne se to ze sítě.
  const key = /\/(index\.html)?$/.test(url.pathname) ? './index.html' : req;
  e.respondWith(caches.match(key, { ignoreSearch: true }).then(hit => hit || fetch(req).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(key, copy)); }
    return r;
  })));
});
