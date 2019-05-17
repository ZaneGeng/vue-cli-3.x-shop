<template>
    <div>
        <!--頂部-->
        <van-nav-bar  title="产品详情" left-text="返回"  @click-left="onClickLeft" left-arrow fixed/>

        <div class="detail">
            <div  class="detail-title-img">
                <img :src="productDetail.imgUrl" />
            </div>
            <div class="detail-content">
                名称：{{productDetail.title}}
                <br />
                详情：{{productDetail.content}}
                <br />
                金额：{{productDetail.money}}
            </div>
        </div>

        <div class="goodsAction">
            <van-goods-action>
                <van-goods-action-mini-btn
                        icon="chat-o"
                        text="客服"
                        @click="onClickMiniBtn"
                />
                <van-goods-action-mini-btn
                        icon="cart-o"
                        info="5"
                        text="购物车"
                        @click="onClickMiniBtn"
                />
                <van-goods-action-big-btn
                        text="加入购物车"
                        @click="onClickBigBtn"
                />
                <van-goods-action-big-btn
                        primary
                        text="立即购买"
                        @click="onClickBigBtn"
                />
            </van-goods-action>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import URL from "../../service.config.js";
export default {
    name:'Detail',
    data(){
        return {
            productDetail:{}
        }
    },
    methods:{
        /*返回*/
        onClickLeft(){
            this.$router.go(-1);
        },
        /*点击购物车*/
        onClickMiniBtn(){
            this.$router.push("/cart");
        }
    },

    created(){
        console.log(this.$route.params.id);
        /*获取产品详情，用index.json凑合使用*/
        axios.get(URL.getIndexInfo)
            .then((response) => {
                let res = response.data
                if (res.ret && res.data.recommendList.length != 0) {
                    /* 产品对象，对象类型{} */
                    this.productDetail =res.data.recommendList[0];
                    console.log(this.productDetail);

                }
            })
            .catch(function (error) {
                console.error(error)
            })
    }
}
</script>

<style lang="scss" scoped>
.detail{


    &-title-img{
        overflow : hidden;
        width:100%;
        height:0;
        padding-bottom:60%;

        img{
            width:100%;
        }
    }
    &-content{
        overflow : hidden;
        box-sizing: border-box;
        width:100%;
        height:100%;
        padding:.3rem;
        background: yellow;
    }

    .goodsAction{
        width:100%;
    }

}
</style>