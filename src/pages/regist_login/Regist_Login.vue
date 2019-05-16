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
            this.$toast.loading({
                mask: true,
                message: '加载中...'
            });
            axios({
                url:URL.getMemberByPhone+ this.username   ,
                method: 'get'
            }).then(res=>{
                //登录成功
                if(res.data.code==200){
                    setTimeout(()=>{
                        //提醒
                        this.$toast.success("登陆成功！");
                        //用户信息存入vuex
                        this.changeLogin(res.data.data);
                        //跳转
                        this.$router.push("/");
                    },1000);

                }else{
                    //登陆失败
                    this.$toast.fail(res.data.msg);
                }

            }).catch(err=>{
                console.log(err);
            })
            // axios.get('http://localhost:5300/getMemberByPhone/'+ this.username)
            //     .then((response) => {
            //
            //             console.log(response)
            //
            //     })
        }
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
