<template>
    <!--顶部，使用vant组件“NavBar导航栏“实现-->
    <div>
        <!--“NavBar导航栏“插件-->
        <van-nav-bar title="标题" left-text="返回" left-arrow :fixed="true" :z-index='99'>
            <van-icon slot="right" @click="$router.push('/regist')" > {{JSON.stringify(token)==='{}' ? '未登录': token}}</van-icon>
        </van-nav-bar>
    </div>
</template>

<script>
    export default {
        name: 'CommonHeader',
        props:{
            token:String
        }
    }
</script>

<style lang="scss" scoped>

</style>
