/* main是主文件，其他组件公用的内容放入这里 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* 基础css样式 */
import '@/assets/style/base.css'
/* 设定基础font-size值，供rem使用 */
import '@/assets/js/rem.js'
/* 引入vant前端组件库 按需引入*/
import { Button, Icon, NavBar, Tabbar, TabbarItem  } from 'vant';
Vue.use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
