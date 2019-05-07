<!--注册和登录-->
<template>
    <div id="wrap">
        <van-tabs v-model="active" swipeable line-width="150">
            <van-tab title="登录" class="login">
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
                            type="password"
                            required
                            label="密码"
                            placeholder="请输入密码"
                    ></van-field>
                </van-cell-group>

                <van-button type="primary">主要按钮</van-button>
            </van-tab>
            <van-tab title="注册" class="regist">

            </van-tab>

        </van-tabs>
        <span>ds</span>
        <!--底部-->
        <div class="footer">
           <common-footer :footerActive="footerActive"></common-footer>
        </div>
    </div>
</template>

<script>
import CommonFooter from "../common/Footer";
export default {
    name:'Regist',
    components: {CommonFooter},
    data () {
        return {

            username:'',
            password:'',

            /* 配合Tabbar 标签栏确定footer图标高亮 */
            footerActive: 3,
            /* 配合van-tabs显示第几个 */
            active: 0
        }
    }
}
</script>

<style lang="stylus" scoped>
#wrap{
    bg:red;

    .regist{
        box-sizing: border-box;
        padding:0 .1rem;
        width:100%;
        height:100px;
        background: pink;


    }

    /*tab导航*/
    /deep/ .van-ellipsis{
        font-size .27rem;
    }

}

</style>