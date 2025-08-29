self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('ppl-cache-v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/script.js',
        '/assets/android-chrome-192x192.png',
        '/assets/android-chrome-512x512.png',
        '/offline.html'
      ]);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== 'ppl-cache-v1') {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).catch(() => caches.match('/offline.html'));
    })
  );
});