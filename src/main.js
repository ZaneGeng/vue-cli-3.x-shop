import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* 基础css样式 */
import '@/assets/style/base.css'
/* 设定基础font-size值，供rem使用 */
import '@/assets/js/rem.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
