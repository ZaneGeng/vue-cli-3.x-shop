<!--热门推荐-->
<template>
  <div class="hot">
    <p class="hot-title">热门推荐</p>
    <!--使用了轮播vue-awesome-swiper插件，参考icons.vue-->
    <swiper
            :options="swiperOption"
            v-if="hotList.length>0"
            class="swiper"
    >
      <swiper-slide v-for="(item,index) of hotList" :key="index">
        <div class="swiper-slide">
          <img class="img" :src="item.imgUrl" />
          <p class="p">{{item.content}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeHot',
  props: {
      hotList: Array
  },
  data () {
      return {
          /* 循环vue-awesome-swiper插件配置 */
          swiperOption: {
              /* 自动播放 */
              autoplay: {
                  delay: 3000,
                  disableOnInteraction: false
              },
              /* 循环翻页 */
              loop: false,
              /* 样式 */
              pagination: {
                  el: '.swiper-pagination'
              },
              /* 每次显示2列，每行显示3个swiper-slide，默认是1 */
              slidesPerView: 3, /* 每行显示3列 */
              slidesPerColumn:2, /* 显示2行 */
              spaceBetween:5, /* swiper-slide间距 */
              slidesPerGroup:3,/*每次翻页数量，这里每行有3列，则设置3一次性翻过去*/

              /* 循环自我刷新次，避免点击显示后出现轮播显示错误  */
              observeParents: true,
              observer: true,

          }
      }
  }

}
</script>

<style lang="scss" scoped>
.hot{
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 95%;
  margin-top:.3rem;
  background: white;

  &-title{
    width:100%;
    height: .6rem;
    line-height: .6rem;
    padding-left: .2rem;

  }
  .swiper{
    text-align: center;
    .swiper-slide{
      width:100%;
      text-align: center;

      img{
        width:100%;
      }
      p{
        /* 超过可显示长度用...代替，封装了css效果，调用selfCss.styl */
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
  }

}
</style>
