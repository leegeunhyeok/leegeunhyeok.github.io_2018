const _version = 'v1';
const cacheName = 'v1';
const cacheList = [
  '/',
  '/favicon.ico',
  '/dist/css/app.4ee0896f.css',
  '/dist/img/background.4e9fb0cd.svg',
  '/dist/img/google.29d525f9.png',
  '/dist/img/lgh.4b00864e.png',
  '/dist/img/logo.c2a605fb.png',
  '/dist/img/poweroff.b2f417c1.png',
  '/dist/js/app.da9c5acc.js',
  '/dist/js/app.da9c5acc.js.map',
  '/dist/js/chunk-vendors.2307036b.js',
  '/dist/js/chunk-vendors.2307036b.js.map',
  '/img/project/bit_miner.png',
  '/img/project/coidroid.png',
  '/img/project/gmma.png',
  '/img/project/gmma_kakao.png',
  '/img/project/lotto.png',
  '/img/project/visual-electron.png',
  '/img/shortcut/browser.png',
  '/img/shortcut/email.png',
  '/img/shortcut/folder.png',
  '/img/shortcut/github.png',
  '/img/shortcut/information.png',
  '/img/shortcut/terminal.png'
]

self.addEventListener('install', event => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(cacheList)
    })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== cacheName) {
          return caches.delete(key)
        }
      }))
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request)
    })
  )
})