<!--icon图标导航vue单文件组件-->
<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="pages.length>0"><!--使用了轮播vue-awesome-swiper插件，参考icons.vue-->
      <!--axios读取json数据，-->
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.key">
          <div class="icon-img-div">
            <img class="icon-img-self" :src="item.imgUrl" />
          </div>
          <p class="icon-p">{{item.content}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data(){
      return {
          /* 循环vue-awesome-swiper插件配置 */
          swiperOption: {
              /* 自动播放
              autoplay: {
                  delay: 2000,
                  disableOnInteraction: false
              },*/
              /* 循环翻页 */
              loop: true,
              /* 样式 */
              pagination: {
                  el: '.swiper-pagination'
              },
              /* 循环自我刷新次，避免点击显示后出现轮播显示错误  */
              observeParents: true,
              observer: true

          }
      }
  },

    /* computed计算属性，有缓存效果，提升性能 */
    computed: {
        /* 自动计算需要循环的轮播页 ，并返回pages这个二维数组 */
        pages: function () {
            /* pages是一个二维数组，第一维度是<swiper-slide>，第二维度是<swiper-slide>里的 <div  */
            var pages = []
            /* 循环iconList，item这里是上面的对象 */
            this.iconList.forEach(function (item, index) {
                /* 取整，index=8时page为1，其余为0 */
                var page = Math.floor(index / 8)
                /* 如果pages[0]不存在就建立，如果pages[1]不存在就建立一个 */
                if (!pages[page]) {
                    pages[page] = []
                }
                /* 二维数组形成，page[0]=['1','2'],page[1]=['1','2']  */
                pages[page].push(item)
            })

            return pages
            /* 二维数组
            * pages:Array[2]
                  0:Array[8]
                  0:Object
                  1:Object
                  2:Object
                  3:Object
                  4:Object
                  5:Object
                  6:Object
                  7:Object
                  1:Array[2]
                  0:Object
                  1:Object
            * */
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/selfCss.scss";
.icons{
  width: 100%;
  height: 0;
  padding-bottom: 40%;
  margin-top:.2rem;
  /*background-color lightgray*/

  .icon{
    position : relative;
    overflow : hidden;
    float: left;
    width: 25%;
    height : 0;
    padding-bottom: 20%;
    /* background-color : red */

    .icon-img-div{
      position : absolute;
      top: 0;
      left: 0;
      right : 0;
      bottom: .44rem;
      width: 100%;
      /* background-color yellow */
      .icon-img-self{
        display: block;
        height: 90%;
        margin: 5% auto;
      }
    }
    .icon-p{
      position : absolute;
      bottom: 0;
      left: 0;
      width:100%;
      height:.44rem;
      line-height: .44rem;
      text-align : center;
      /* 超过可显示长度用...代替，封装了css效果，调用selfCss.styl */
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
