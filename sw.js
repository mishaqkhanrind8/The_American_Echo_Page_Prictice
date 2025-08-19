self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('ppl-cache-v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        '/styles.css',
        '/scripts.js',
        '/assets/favicon192.png',
        '/assets/favicon512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});