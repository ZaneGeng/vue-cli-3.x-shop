<!--入口页-->
<template>
  <div id="app">

    <!--显示当前路由地址所对应的内容-->
      <!--<keep-alive v-if="$route.meta.keepAlive">-->
          <!--<router-view/>-->
      <!--</keep-alive>-->
      <!--<router-view v-if="!$route.meta.keepAlive" ></router-view>-->
      <router-view  v-wechat-title="$route.meta.title"></router-view>

  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">

</style>
