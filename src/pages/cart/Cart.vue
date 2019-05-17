<!--购物车-->
<template>
    <div class="cart">
        <!--頂部-->
        <van-nav-bar  title="购物车" left-text="返回"  @click-left="onClickLeft" left-arrow fixed />

        <div class="cardList">

            <van-card
                    v-for="item of productList"
                    :key="item.id"
                    num="2"
                    tag="标签"
                    :price="item.money"
                    :desc="item.content"
                    :title="item.title"
                    :thumb="item.imgUrl"
                    origin-price="10.00"
            >
                <div slot="footer">
                    <van-button size="mini">按钮</van-button>
                    <van-button size="mini">删除</van-button>
                </div>
            </van-card>



            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <div class="submit">
                <van-submit-bar
                        :price="totalPrice"
                        button-text="提交订单"
                        @submit="onSubmit"
                />
            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios';
import URL from "../../service.config.js";
export default {
    name: 'Cart',
    data(){
        return {
            imageURL:'http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg',
            productList:[]
        }
    },
    methods:{
        /*返回*/
        onClickLeft(){
            this.$router.go(-1);
        },
        /*提交*/
        onSubmit(){
            alert("提交");
        }
    },
    /*计算属性，自动计算总金额，默认显示的是分*/
    computed:{
        totalPrice(){
            return this.productList.reduce((sum,item)=>{
                sum+=item.money;
                return sum;
            },0) *100;/*SubmitBar默认显示的金额是分，所以元=分*100*/
        }
    },
    created(){
        /*获取数据*/
        axios.get(URL.getIndexInfo)
        .then((response) => {
            let res = response.data
            if (res.ret && res.data.recommendList.length != 0) {
                /* 产品列表，数组类型[] */
                this.productList =res.data.recommendList;
                console.log(this.productList);
            }
        })
        .catch(function (error) {
            console.error(error)
        })
    }
}
</script>

<style lang="scss" scoped>
.cart{

    .cardList{
        overflow: hidden;
        margin-top:1rem;
    }

}
</style>