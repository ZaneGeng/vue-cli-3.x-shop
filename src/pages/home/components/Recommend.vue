<!--推荐-->
<template>
  <div class="recommend">
    <p class="title">推荐地区</p>
    <ul v-if="recommend.length>0">
      <li  v-for="(item,index) of recommend" :key="index" >
          <img :src="item.imgUrl" />
          <p>{{item.title}}</p>
          <p class="content">{{item.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props:{
    recommend:Array
  }
}
</script>

<style lang="scss" scoped>
.recommend{
  width:100%;
  margin-top:.2rem;
  background: white;

  .title{
    font-size: .25rem;
    box-sizing: border-box;
    height:.6rem;
    line-height: .6rem;
    padding-left:.2rem;
  }

  ul{
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    box-sizing: border-box;
  }
  li{
    width: 50%;
    height:3rem;
    text-align: center;

    img{
      width:95%;
      height:2rem;
    }
    p{
      font-size: .22rem;
      /* 超过可显示长度用...代替，封装了css效果，调用selfCss.styl */
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .content{
      color:grey;
    }
  }

}
</style>
