import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)



const router  =new Router({
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
               title:'分类',
               requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
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
               title:'详情',
               requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
           },
           },
           {
               path: '/cart',
               name: '购物车',
               component: () => import('@/pages/cart/Cart.vue'),
           meta:{
               title:'购物车',
               requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
           }
           },
           {
               path:'*',
               name:'统一错误页',
               component: () => import('@/pages/Error.vue')
           }

       ]

   })


// 全局路由守卫
router.beforeEach((to, from, next) => {
    // to: Route: 即将要进入的目标 路由对象
    // from: Route: 当前导航正要离开的路由
    // next: Function: 放行。一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。


    //这里的to的内容对应上面自己写的router
    console.log("to的值："+to);
    console.log("to的url："+to.path);
    console.log("to的name："+to.name);
    console.log("判断该路由是否需要登录权限："+to.meta.requireAuth);


    // 判断该路由是否需要登录权限，在router.js设置
    const token=store.state.token;
    if (to.meta.requireAuth) {

        if (token) {
            //已登录

            next();
        }else {
            //未登录
            next({
                path: '/regist',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }

    //已登录状态；当路由到login时，跳转至home
    if (to.path === '/regist') {
        if (token) {
            router.push('/');
        }
    }

    next();
});


export default router;
