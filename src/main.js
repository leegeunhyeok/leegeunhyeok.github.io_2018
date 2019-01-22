'use strict'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import runtime from 'serviceworker-webpack-plugin/lib/runtime'
// import ImageLoader from './image-loader.js'

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-console */
console.log('Hello, world!')
if ('serviceWorker' in navigator) {
  // navigator.serviceWorker.register('/service-worker.js').then(() => {
  //   console.log('Service Worker Registered')
  // })
  runtime.register()
}

// ImageLoader()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
