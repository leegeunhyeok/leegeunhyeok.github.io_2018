'use strict'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ImageLoader from './image-loader.js'

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-console */
console.log('Hello, world!')
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(() => {
    console.log('Service Worker Registered')
  })
}

ImageLoader()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
