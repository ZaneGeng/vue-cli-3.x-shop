<!--购物车-->
<template>
    <div class="cart">
        <!--頂部-->
        <van-nav-bar  title="购物车" left-text="返回"  @click-left="onClickLeft" left-arrow fixed />

        <div class="cardList">
            全选/不选 ：<input type="checkbox"    @click="selectAll" :checked="checkItem.length==productList.length" />
            <p style="color:red">这里没有做复选框对于金额的操作，如果需要复选框需要进行修改。参考：https://v.youku.com/v_show/id_XMzAwOTY4MTg5Mg==.html?refer=seo_operation.liuxiao.liux_00003303_3000_Qzu6ve_19042900</p>
            <van-card
                    v-for="(item,index) of productList"
                    :key="item.id"
                    tag="标签"
                    :price="item.money"
                    :desc="item.content"
                    :title="item.title"
                    :thumb="item.imgUrl"
                    origin-price="10.00"
            >

                <div slot="footer">
                    <!--复选框-->
                    <input type="checkbox" class="check" name="vehicle" :value="item"  v-model="checkItem" />
                    <!--加号，传入vuex中购物车cart数组的序号-->
                    <van-button size="mini"  @click="addNum(index)"><span class="iconfont">&#xeaf3;</span> </van-button>
                    <!--数量-->
                    <input class="cartNum" type="text" :value="item.count" />
                    <!--减号-->
                    <van-button size="mini" @click="reduceNum(index)"><span class="iconfont">&#xeaf5;</span> </van-button>
                    <!--删除-->
                    <van-button size="mini" @click="deleteHandler(item.id,index)">删除</van-button>
                </div>
            </van-card>

{{checkItem}}
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
            /*购物车列表，这个数组是所有操作的核心，都是再操作它*/
            productList:[],
            /*复选框选中数组，vue自带复选框写法*/
            checkItem:[]
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
        },
        /*删除*/
        deleteHandler(id,index){
            this.productList.splice(index,1);
            this.$notify({
                message: '删除成功',
                duration: 1000,
                background: '#1989fa'
            })
            //数据库操作，略
        },
        /*购物车加1*/
        addNum(index){
            //修改vuex中购物车cart的值
            this.$store.commit("addNum",index);
        },
        /*购物车减1*/
        reduceNum(index){

            //修改vuex中购物车cart的值
            this.$store.commit("reduceNum",index);
        },
        /*全选*/
        selectAll(){
            // if(this.checkItem.length>0){
            if(!event.currentTarget.checked){
                //取消全选
                this.checkItem=[]
            }else{
                //全选
                this.productList.forEach((item,index)=>{
                    this.checkItem.push(item);
                })
                console.log(this.checkItem);
            }

        }
    },
    /*计算属性，自动计算总金额，默认显示的是分*/
    computed:{
        /*总金额*/
        totalPrice(){
            return this.productList.reduce((sum,item)=>{
                sum+=item.money * item.count;
                return sum;
            },0) *100;/*SubmitBar默认显示的金额是分，所以元=分*100*/
        }
    },
    /*生命周期钩子，进入本组件，先执行这里*/
    created(){
        /*获取数据*/
        // axios.get(URL.getIndexInfo)
        // .then((response) => {
        //     let res = response.data
        //     if (res.ret && res.data.recommendList.length != 0) {
        //         /* 产品列表，数组类型[] */
        //         this.productList =res.data.recommendList;
        //         console.log(this.productList);
        //     }
        // })
        // .catch(function (error) {
        //     console.error(error)
        // })

        //读取vuex中的购物车数据
        this.productList=this.$store.state.cart;
    }
}
</script>

<style lang="scss" scoped>
.cart {

    .cardList {
        box-sizing: border-box;
        overflow: hidden;
        margin-top: 1rem;
        padding-left:.2rem;
        position:relative;


        .cartNum {
            width: .9rem;
            height: .35rem;
            border: none;
            text-align: center;
            position: relative;
            left:0.05rem;
            top:-0.03rem;
        }
        .check{
            width:1rem;
            position:absolute;
            left:-.5rem;
            top:.7rem;
        }
    }


}
</style>