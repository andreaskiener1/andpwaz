const cacheName = 'pingpong-v1';
const staticAssets = [ './'];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skriptWaiting();
});

self.addEventListener('acitvate', e => {
  self.clients.claim();
});
