const _version = 'v1';
const cacheName = 'v2';
const cacheList = [
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

const { assets } = self.serviceWorkerOption
let assetsToCache = [...assets, './'].concat(cacheList)
assetsToCache = assetsToCache.map(path => {
  return new URL(path, self.location).toString()
})

self.addEventListener('install', event => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache)
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