const chacheName = 'pingpong-v1';
const staticAssets = [ './', 'index.html'];

self.addEventListener('install', async e => {
  const cache = await caches.open(chacheName);
  await chache.addAll(staticAssets);
  return self.skriptWaiting();
});

self.addEventListener('acitvate', e => {
  self.clients.claim();
});
