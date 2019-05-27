<!--注册和登录-->
<template>
    <div id="wrap">
        <!--tabs滑框-->
        <van-tabs v-model="active" swipeable :line-width="150" color="#1989FA">
            <van-tab title="登录" class="login">
                <!--tab表单-->
                <van-cell-group>
                    <van-field
                            v-model="username"
                            size="large"
                            required
                            clearable
                            label="用户名"
                            right-icon="question-o"
                            placeholder="请输入用户名"
                            @click-right-icon="$toast('question')"
                    ></van-field>

                    <van-field
                            v-model="password"
                            size="large"
                            type="password"
                            required
                            clearable
                            label="密码"
                            placeholder="请输入密码"
                    ></van-field>
                </van-cell-group>
                <div class="submitDiv">
                    <van-button type="info"  class="submit"  @click="registHandler"> 确 认 登 陆 </van-button>
                </div>

            </van-tab>
            <van-tab title="注册" class="regist">

            </van-tab>

        </van-tabs>

        <!--底部-->
        <div class="footer">
           <common-footer :footerActive="footerActive"></common-footer>
        </div>
    </div>
</template>

<script>
import CommonFooter from "../common/Footer";
import axios from 'axios';
import URL from "../../service.config.js";
import { mapMutations } from 'vuex'

export default {
    name:'Regist',
    components: { CommonFooter },
    data () {
        return {
            /*登录后返回地址，比如进入分类页，跳转到登录，登录后跳转回登录页*/
            prePath:'',

            username:'',
            password:'',

            /* 配合Tabbar 标签栏确定footer图标高亮 */
            footerActive: 3,
            /* 配合van-tabs显示第几个 */
            active: 0
        }
    },
    methods:{
        ...mapMutations(['changeLogin']),
        registHandler () {

            //模拟直接登录
            //提醒
            this.$toast.success("登陆成功！");
            //用户信息存入vuex
            this.$store.commit("setToken","aaabbbccddd");
            // this.changeLogin(res.data.data);
            //用户信息存入localstorage
            localStorage.setItem("token","aaabbbccddd");
            console.log(localStorage.getItem("token"));
            //跳转
            if(this.prePath){
                //跳转回上个页面
                this.$router.push(this.prePath);
            }else{
                //跳转回首页
                this.$router.push("/");
            }


            // this.$toast.loading({
            //     mask: true,
            //     message: '登录中...'
            // });
            // axios({
            //     url:URL.getMemberByPhone+ this.username,
            //     method: 'get'
            // }).then(res=>{
            //     //登录成功
            //     if(res.data.code==200){
            //
            //         setTimeout(()=>{
            //             //清除提醒
            //             this.$toast.clear();
            //             //用户信息存入vuex
            //             this.$store.commit("setToken","aaabbbccddd");
            //             //用户信息存入localstorage
            //             localStorage.setItem("token","eeeaaabbbccddd");
            //             // console.log(localStorage.getItem("token"));
            //             //跳转
            //             if(this.prePath){
            //                 //跳转回上个页面
            //                 this.$router.push(this.prePath);
            //             }else{
            //                 //跳转回首页
            //                 this.$router.push("/");
            //             }
            //
            //         },1000);
            //
            //     }else{
            //         //登陆失败
            //         this.$toast.clear(); //清除提醒
            //         this.$notify(res.data.msg);
            //     }
            //
            // }).catch(err=>{
            //     this.$notify(err);
            // })

        }
    },
    created(){
        /*从router.js导航守卫跳转过来传递的参数*/
        this.prePath=this.$route.query.redirect;

    }
}
</script>

<style lang="stylus" scoped>
#wrap{
    width:100%;
    bg:red;

    /*登录页*/
    .login{
        box-sizing: border-box;
        padding:0 .1rem;
        background: white;
        width:100%;

        .submitDiv{
            width:100%;

            .submit{
                margin-top:.3rem;
                width:100%;
            }


        }
        /*input文本框*/
        .van-field{
            margin:.1rem 0;
        }


    }

    /*tab导航*/
    /deep/ .van-ellipsis{
        font-size .27rem;
    }


}

</style>
