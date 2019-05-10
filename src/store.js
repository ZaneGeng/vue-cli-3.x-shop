import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /*==仓库==*/
  state: {

    /*用户对象*/
    memberInfo:{
      /*默认值*/
      phone: '未登录'
    }
  },
  /*==仅支持同步操作（不支持异步，需要异步时，使用actions进行操作），操控state仓库==*/
  mutations: {
    changeLogin(state,status){
      //获取到的参数status应该就是用户对象，直接赋格state仓库中的memberInfo对象
      state.memberInfo=status;
    }

  },
  /*==支持异步操作，操作mutations进而操作state仓库==*/
  actions: {

  }
})
