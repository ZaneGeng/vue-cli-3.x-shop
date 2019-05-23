import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '首页',
            component: () => import('@/pages/home/Home.vue'),
            meta:{
                title:'首页'
            },
        },
        {
            path: '/category',
            name: '分类',
            component: () => import('@/pages/category/Category.vue'),
            meta:{
                title:'分类'
                /*keepAlive:true //需要被缓存的组件*/
            },
        },
        {
            path: '/regist',
            name: '注册',
            component: () => import('@/pages/regist_login/Regist_Login.vue'),
            meta:{
                title:'注册'
            },
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import('@/pages/detail/Detail.vue'),
            meta:{
                title:'详情'
            },
        },
        {
            path: '/cart',
            name: '购物车',
            component: () => import('@/pages/cart/Cart.vue'),
            meta:{
                title:'购物车'
            }
        },
        {
            path:'*',
            name:'统一错误页',
            component: () => import('@/pages/Error.vue')
        }

    ]

})
