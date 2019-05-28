import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


let store= new Vuex.Store({

  /*==仓库==*/
  state: {

    /*用户对象*/
    memberInfo:{
      /*默认值*/
      phone: '未登录'
    },

    /*token，从localStorage读取，没有则空‘’*/
    token:localStorage.token || '',

    /*购物车数组，从localstorage读取后转化格式，没有则=空[]*/
    cart: JSON.parse(localStorage.getItem("cart")) || []
  },

  /*==仅支持同步操作（不支持异步，需要异步时，使用actions进行操作），操控state仓库==*/
  mutations: {
    changeLogin(state,user){
      //获取到的参数status应该就是用户对象，直接赋格state仓库中的memberInfo对象
      state.memberInfo=user;
    },

    /*设置token*/
    setToken(state,token){
      state.token=token;
    },

    /*添加购物车*/
    addCart(state,product){
      //state是仓库，status是传入的数据

      //查找vuex的cart购物车中是否已经有该产品
      let producted=state.cart.find(item=>item.id==product.id);
      if(producted){
          //已有该产品，购物车该产品数量+1
          producted.count+=1;
      }else{
          //产品对象{}存入vuex
          product.count=1;
          state.cart.push(product);
      }

    },

    /*
      购物车数量加1
      index是vuex中购物车cart数组的序号
      */
    addNum(state,index){
      state.cart[index].count++;
    },
    /*
     购物车数量加1
     index是vuex中购物车cart数组的序号
     */
    reduceNum(state,index){
        if(state.cart[index].count>1){
            state.cart[index].count--;
        }else{
          if(window.confirm("确定从购物车删除【"+state.cart[index].title+"】  吗？")){
                state.cart.splice(index,1);
          }
        }

    }

  },
  /*==支持异步操作，操作mutations进而操作state仓库==*/
  actions: {

  },

  //相当于vue的computed计算属性
  getters:{

    cartCountSum:state=>{
      let num =0;
      state.cart.forEach(item=>{
        num+=item.count;
      })
      return num;
    }

  }
})

//监听每次调用mutations时候，都会执行这里的方法，可以将vuex在这里进行统一持久化到localstorage等操作
store.subscribe((mutations,state)=>{
    // 将购物车数据string序列化后存入localstorage
    localStorage.setItem("cart",JSON.stringify(state.cart));

})
export default store;