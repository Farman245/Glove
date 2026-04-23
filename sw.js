const CACHE_NAME = 'farman-bros-v1';
const urlsToCache = [
  './pwa.html',
  './manifest.json',
  'icon-192x192.png',
  'icon-512x512.png'
];

// سروس ورکر انسٹال کرنا
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// نیٹ ورک ریکوئسٹس کو ہینڈل کرنا
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
