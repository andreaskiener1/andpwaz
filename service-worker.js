const cacheName = 'pingpong-v1';


const staticAssets = [ 
  './',
  './index.html'
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skiptWaiting();
});

self.addEventListener('acitvate', e => {
  self.clients.claim();
});
/*
'use strict';
var currentCache = {
  offline: 'pingpong-v2'
};

const offlineUrl = 'index.html';

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache.offline).then(function(cache) {
      return cache.addAll([
         // './icons/icon.svg',
          offlineUrl
      ]);
    })
  );
});
*/
