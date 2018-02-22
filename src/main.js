import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
Vue.config.devtools = false;


new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    'App': App 
  }
})
