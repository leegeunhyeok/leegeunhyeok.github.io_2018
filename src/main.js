import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ImageLoader from './image-loader.js'

Vue.config.productionTip = false
Vue.config.devtools = true

ImageLoader()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
