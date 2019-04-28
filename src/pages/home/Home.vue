<!--首页-->
<template>
    <div class="home">
        <!--顶部-->
        <common-header></common-header>
        <!--轮播图-->
        <div class="swiper">
            <home-swiper :swiperList="swiperList"></home-swiper>
        </div>
        <!--icon导航轮播-->
        <div class="iconSwiper">
            <home-icons :iconList="iconList"></home-icons>
        </div>
        <!--热门推荐-->
        <div class="hot">
            <home-hot :hotList="hotList"></home-hot>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <!--底部-->
        <div class="footer">
            <common-footer :footerActive="footerActive"></common-footer>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CommonFooter from "../common/Footer";
import CommonHeader from "../common/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeHot from "./components/Hot";

export default {
    name: 'Home',
    data () {
        return {
            /* 配合Tabbar 标签栏确定footer图标高亮 */
            footerActive: 0,
            /* 轮播图数据 */
            swiperList: [],
            /* icons导航数据，数组类型[] */
            iconList: [],
            /* 热门推荐数据，数组类型[] */
            hotList:[]
        }
    },
    components: {HomeHot, HomeIcons, HomeSwiper, CommonHeader, CommonFooter},
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json')
                .then((response) => {
                    let res = response.data
                    if (res.ret && res.data != null) {
                        /* 轮播数据，数组类型[] */
                        this.swiperList = res.data.swiperList
                        /* icons导航数据，数组类型[] */
                        this.iconList = res.data.iconList
                        /* 热门推荐数据，数组类型[] */
                        this.hotList = res.data.recommendList
                        console.log(res.data.swiperList)
                    }
                })
                .catch(function (error) {
                    console.error(error)
                })
        }
    },
    /* vue实例生命周期，页面渲染输出后执行 */
    mounted () {
        this.getHomeInfo()
    },
}
</script>

<style lang="scss" scoped>
    .home{
        padding-top: .7rem;
    }
</style>
