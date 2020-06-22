const cacheName = 'pingpong-v1';


const staticAssets = [ 
  './',
  './index2.html',
  './manifest.json',
  './service-worker.js'
  
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url);
  
  if(url.origin === location.origin){
    e.respondWith(cacheFirst(req));
  }else{
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req){
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req){
  const cache = await caches.open(cacheName);
  try{
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  }catch(e){
    const cached = await cache.match(req);
    return cached;
  }
}



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
