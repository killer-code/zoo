import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'

require('./assets/css/style.css')

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
}).$mount('#app')
