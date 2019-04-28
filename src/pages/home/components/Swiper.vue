<!--轮播图 -->
<template>
    <div class="swiper">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item
                    v-for="item of swiperList"
                    :key="item.id"
                    class="swiper-item"
            >
               <!-- <img :src="item.imgUrl" />-->
                <img v-lazy="item.imgUrl" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        swiperList: Array
    }
}
</script>

<style lang="scss" scoped>
    .swiper{
        overflow : hidden;
        width: 100%;
        height: 0;
        padding-bottom: 31%;
        background-color : lightgray;

        &-item{
            width: 100%;
        }
    }
</style>