<template>
    <div class="detailTop-box">
        <div class="left"><img :src="detail.coverFileUrl"></div>
        <div class="right">
            <div class="right-text">{{detail.courseTitle}}
                <div :class="getLike?'collectOne':'collect'" @click="collect"><i class="el-icon-cloudy"></i>收藏</div>
                <!--                <div class="collect changeCollect"><i class="el-icon-cloudy"></i>收藏</div>-->
            </div>
            <p class="study">累计{{detail.participationsCount}}人学习<i class="el-icon-star-on"></i><i
                    class="el-icon-star-on"></i><i class="el-icon-star-on"></i><i class="el-icon-star-on"></i><i
                    class="el-icon-star-on"></i></p>
            <div v-if="detail.isFree == 1" class="text3">免费<br>
                <router-link :to="'couser/paly/'+detail.courseId">
                    <button class="watch">立即观看</button>
                </router-link>
            </div>
            <div v-if="detail.isFree == 0" style="margin-top: 10px">
                <span class="money">￥{{ detail.discountPrice }}</span>
                <span class="text2">￥{{ detail.coursePrice }}</span>
                <div class="nofress">{{ detail.discountDesc }}</div>
                <button style="background: rgb(255, 128, 0); border: rgb(255, 128, 0);">立即购买</button>
                <button style="color: #fff; background-color: #00cf8c; border-color: #00cf8c;" @click="addShoppingCart">
                    加入购物车
                </button>
            </div>
        </div>

    </div>
</template>

<script>
    import {getDetail, getShoppingCart} from "../../../api/course";
    import loginMixin from "../../../mixin/loginMixin";

    export default {
        name: "detailTop",
        mixins: [loginMixin],
        data() {
            return {
                detail: {},
                getLike: false,
                courseId: ""
            }
        },


        created() {
            // console.log(this.$route.params.courseId)
            getDetail(this.$route.params.courseId).then(res => {
                this.detail = res.data.data
                console.log(res.data.data)
                this.courseId = res.data.data.courseId
            })

        },
        methods: {
            // eslint-disable-next-line vue/no-dupe-keys
            collect() {
                if (this.loginClick()) {
                    // console.log("可以收藏")
                    // console.log(this.isLogin)
                    if (this.getLike){
                        this.getLike = false
                        this.$message('取消收藏');
                    }else {
                        this.getLike = true
                        this.$message('收藏成功');
                    }


                }

            },

            //加入购物车
            addShoppingCart() {
                if (this.loginClick()) {
                    getShoppingCart(this.detail.courseId).then(res => {
                        console.log(res)
                        this.$message('加入购物车成功');
                    })
                }

            }
        }
    }
</script>

<style scoped lang="less">
    .watch {
        color: #fff;
        background-color: #00cf8c;
        border-color: #00cf8c;
        margin-top: 20px
    }

    .detailTop-box {
        width: 1090px;
        min-width: 1090px;
        height: 270px;
        margin: 30px auto;
        background-color: #ffffff;
        overflow: hidden;


    }

    .left {
        width: 350px;
        height: 200px;
        margin: 20px;
        float: left;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .right {
        margin: 20px;
        width: 650px;
        /*border: 1px solid black;*/
        height: 200px;
        float: right;

        .right-text {
            font-size: 24px;
        }
    }

    .collect {
        cursor: pointer;
        /*display: inline-block;*/
        text-align: center;
        width: 110px;
        height: 30px;
        font-size: 16px;
        line-height: 26px;
        border: 1px solid #999;
        float: right;
        color: #999;

    }

    .collectOne {
        cursor: pointer;
        /*display: inline-block;*/
        text-align: center;
        width: 110px;
        height: 30px;
        font-size: 16px;
        line-height: 26px;
        border: 1px solid #999;
        float: right;
        /*color: #999;*/
        color: orange;
        border-color: orange;

    }

    .study {
        font-size: 16px;
        color: #666666;
        margin-top: 10px;

        i {
            color: #fadb14;
            font-size: 20px;
        }
    }

    .text2 {
        text-decoration: line-through;


        color: rgb(255, 79, 35);
        font-size: 14px;
        margin: 0px 10px;
    }

    .text3 {
        font-size: 24px;
        color: #00cf8c;
    }

    .nofress {
        color: #fa8c16;
        background: #fff7e6;
        border-color: #ffd591;
        font-size: 12px;
        width: 50px;
        margin-top: 10px;
        margin-left: 20px;
    }

    button {
        width: 160px;
        height: 45px;
        font-size: 18px;
        margin-left: 10px;
        margin-top: 10px;
        outline: none;
    }

    .money {
        color: black;
        font-size: 22px;
    }

    .changeCollect {
        color: red;
    }

</style>