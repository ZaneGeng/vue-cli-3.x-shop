/* main是主文件，其他组件公用的内容放入这里 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* 基础css样式 */
import '@/assets/style/base.css'
/* 设定基础font-size值，供rem使用 */
import '@/assets/js/rem.js'
/* 轮播插件vue-awesome-swiper */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
/* 引入vant前端组件库 按需引入1/2*/
import { Button, Icon, NavBar, Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload,Tab,Tabs,Field,CellGroup,Toast} from 'vant';

Vue.use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(Field).use(CellGroup).use(Toast);/* 启用vant前端组件库2/2 */
Vue.use(VueAwesomeSwiper)/* 轮播插件vue-awesome-swiper */

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
