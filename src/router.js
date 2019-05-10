import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '首页',
            component: () => import('@/pages/home/Home.vue')
        },
        {
            path: '/category',
            name: '分类',
            component: () => import('@/pages/category/Category.vue')
        },
        {
            path: '/regist',
            name: '注册',
            component: () => import('@/pages/regist_login/Regist_Login.vue')
        }
    ],

})
