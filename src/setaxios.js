import axios from 'axios'
import store from './store'
import router from './router'


export default function setaixos() {

    //请求拦截器，在使用axios发送请求到后端时执行。
    axios.interceptors.request.use(
        config=> {
        //从vuex读取token
        const token=store.state.token;
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        if (token) {
            config.headers.Authorization =token;
        }

        return config;
        },error=> {
            // 对请求失败做处理
            return Promise.reject(error);
        });

    //响应拦截器，在使用axios发送请求收到后端响应时执行，每次的请求有返回的，都是先经过这个拦截器的
    axios.interceptors.response.use(response=> {
        // 对响应数据做处理
        console.log("输出status："+response.status);
        console.log("输出："+response.data.data.swiperList);
        console.log("输出data："+response.data.ret);
        //检查登录状态，token是否过期

        //跳转到登录页面
        if(response.status==200){
            const data=response.data;
            if(!data.ret){
                //返回数据报错
            }
        }
        //router.replace({path:'/regist'});
        return response;
    },  error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    //当后端接口返回401 Unauthorized（未授权），让用户重新登录。
                    router.replace({
                        path: 'regist',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

}