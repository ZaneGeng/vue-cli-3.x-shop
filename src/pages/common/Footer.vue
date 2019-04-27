<template>
    <!--底部-->
    <div>
        <ul class="footer">
            <router-link
                    tag="li"
                    class="footer-item"
                    :to="'/'"
            >
                首页
            </router-link>
            <router-link
                    tag="li"
                    to="/category"
                    class="footer-item"
            >
               分类
            </router-link>
            <li class="footer-item">购物车</li>
            <li class="footer-item">个人中心</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'commonFooter'
}
</script>

<style lang="scss">
    .footer{
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
    }
</style>
