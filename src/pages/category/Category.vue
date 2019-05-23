<!--分类-->
<template>
    <div>
        <!--頂部-->
        <van-nav-bar  title="产品分类" left-text="返回"  @click-left="onClickLeft"  />

        <!--分类-->
        <div class="category">
            <van-row>
                <van-col span="7" class="nav">
                    <!--类别导航-->
                    <van-badge-group :active-key="activeKey" @change="onChangeBadge">
                        <!--模板样式-->
                    <!--    <van-badge title="标签名称"   />
                        <van-badge title="标签名称" info="8" />
                        <van-badge title="标签名称" info="99" />
                        <van-badge title="标签名称" info="99+" />-->
                        <!--正式循环-->
                        <van-badge v-for="item of categoryNavList" :key="item.id" :title="item.title" :info="item.info" @click="clickNavHandler(item.id)" />

                    </van-badge-group>
                </van-col>

                <van-col span="17" class="container" style="background-color: yellow">
                    <!--详情list-->
                    <van-pull-refresh v-model="refreshLoading" @refresh="onRefresh"> <!--下拉刷新-->
                       <van-list
                                v-model="loading"
                                :finished="finished"
                                finished-text="没有更多了"
                                @load="onLoadProductListMore"
                        >

                           <div >
                               <ul>
                                   <li class="container-item" v-for="item of productList" :key="item.id">
                                       <van-row  type="flex" tag="div" >
                                           <van-col class="vanImg" span="15" >
                                               <img :src="item.imgUrl"  @click="clickDetailHandler(item.id)" />
                                           </van-col>
                                           <van-col class="vanTitle" span="9">{{item.content}}</van-col>
                                       </van-row>
                                   </li>
                               </ul>
                           </div>
                       </van-list>
                    </van-pull-refresh>
                </van-col>
            </van-row>

        </div>

        <div class="footer">
            <common-footer :footerActive="footerActive"></common-footer>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import URL from "../../service.config.js";
import CommonFooter from "../common/Footer";
export default {
    name: 'Category',
    data () {
        return {
            /* 配合Tabbar 标签栏确定footer图标高亮 */
            footerActive: 1,
            /*Badge 徽章切换使用*/
            activeKey: 0,
            /*类别导航list数据*/
            categoryNavList:[],
            /*产品列表*/
            productList:[],
            /*list组件加载和完成*/
            loading: false,
            finished: false,
            /*下拉刷新组件加载和完成*/
            refreshLoading:false

        }
    },
    components: {CommonFooter},
    methods:{
        /*返回*/
        onClickLeft(){
            this.$router.go(-1);
        },
        onChangeBadge(key) {
            this.activeKey = key;

        },
        /*点击导航事件*/
        clickNavHandler(typeId){
            // console.log( this.categoryNavList);
           // this.getProductList(typeId);
            this.productList=[];/*置空数据*/
            this.getProductList(typeId);
        },
        /*加载数据,滚动条与底部距离小于 offset 时触发（异步加载，自动支持分页查询）*/
        onLoadProductListMore(){
            alert("读取数据库分页获取产品数据");
            this.loading = true;/*显示加载*/
            this.getProductList(0);
           },
        onRefresh() {
            alert("下拉刷新获取数据");
            this.refreshLoading=true;/*显示加载提醒*/
            this.productList=[];/*置空数据*/
            this.getProductList(0);
        },
        /*获取产品列表*/
        getProductList(typeId) {
            /*模拟通过产品类别typeId来获取产品列表*/
            /* 热门推荐数据，数组类型[] */
            axios.get(URL.getIndexInfo)
                .then((response) => {
                    let res = response.data
                    if (res.ret && res.data.recommendList.length != 0) {
                        /* 产品列表，数组类型[] */
                        this.productList =this.productList.concat(res.data.recommendList);/*数组拼接*/
                        console.log(this.productList);
                        // list和下拉刷新加载状态结束
                        this.loading = false;
                        this.refreshLoading = false;
                    }else{
                        /*全部加载完成*/
                         this.finished = true;
                    }
                })
                .catch(function (error) {
                    console.error(error)
                })

        },
        /*点击产品，进入详情页*/
        clickDetailHandler(id){
            // console.log(id);
            /*路由跳轉*/
            this.$router.push(`/detail/${id}`);
        }
    },
    created () {
        /*获取类别导航list*/
        axios.get(URL.getCategoryInfo)
            .then((response) => {
                let res = response.data
                if (res.ret && res.data != null) {
                    /* 类别导航数据 */
                    this.categoryNavList = res.data.categoryNavList
                    //     /* icons导航数据，数组类型[] */
                    //     this.iconList = res.data.iconList
                    //     /* 热门推荐数据，数组类型[] */
                    //     this.hotList = res.data.recommendList
                    //     /* 推荐数据，数组类型[] */
                    //     this.recommend = res.data.weekendList
                    //     console.log(res.data.swiperList)
                }
            })
            .catch(function (error) {
                console.error(error)
            })
    }
}
</script>

<style lang="scss" scoped>
.category{


    .container{
        /*使右边内容自己滚动，左边nav导航不动*/
        position:fixed;
        top:46px;
        right:0;
        bottom:1rem;
        overflow-y:  scroll;

        &-item{
            margin-bottom:0.1rem;

            .vanImg{
                padding:.2rem;
            }
            .vanImg img{
                width:100%;
            }
            .vanTitle{
                display:flex;
                overflow: hidden;
                align-items: center;
                Justify-content:center;
                padding-right:0.1rem;
                background: red;
            }
        }

    }

}

</style>
