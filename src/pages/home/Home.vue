<!--首页-->
<template>
    <div class="home">
        <!--顶部-->
        <common-header></common-header>
        <!--内容-->
        <van-button type="info">信息按钮</van-button>1111
        <!--底部-->
        <div class="footer">
            <common-footer :footerActive="footerActive"></common-footer>
        </div>
    </div>
</template>

<script>
import CommonFooter from "../common/Footer";
import CommonHeader from "../common/Header";
export default {
    name: 'Home',
    data () {
        return {
            /* 配合Tabbar 标签栏确定footer图标高亮 */
            footerActive: 0
        }
    },
    components: {CommonHeader, CommonFooter}
}
</script>

<style lang="scss">
    .home{
        padding-top: .8rem;
    }
</style>
