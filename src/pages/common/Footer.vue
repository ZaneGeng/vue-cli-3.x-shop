<template>
    <!--底部-->
    <div>
        <van-tabbar v-model="active" :replace="true">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/category" dot>分类</van-tabbar-item>
            <van-tabbar-item icon="friends-o" info="5">购物车</van-tabbar-item>
            <van-tabbar-item icon="setting-o" info="20" to="/regist">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: 'CommonFooter',
    props: {
        footerActive: Number
    },
    data() {
        return {
            /* 配合Tabbar 标签栏确定footer图标高亮 */
            active: this.footerActive
        }
    }
}
</script>

<style lang="scss" scoped>
/*    .footer{
        display: flex;
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: gray;
        &-item{
            flex: 1;
            text-align: center;
        }
    }*/
</style>
