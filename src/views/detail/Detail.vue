<template>
    <!--    <router-view>1111111</router-view>-->
    <div class="detail-box">
        <p class="detail-text">
            <router-link tag="span" to="/index"><i class="el-icon-s-home"></i>首页</router-link>
            /<span>直播详情</span></p>
        <detail-top></detail-top>
        <detailBottom></detailBottom>
    </div>
</template>

<script>
    import detailTop from "./compontents/detailTop";
    import detailBottom from "./compontents/detailBottom";

    export default {
        name: "Detail",
        components: {
            detailTop,
            detailBottom
        }
    }
</script>

<style scoped lang="less">
    .detail-box {
        background-color: #f2f2f2;
        width: 100%;
        /*height: 1000px;*/
        overflow: hidden;

        .detail-text {
            width: 1090px;
            min-width: 1090px;
            margin: auto;
            color: rgba(0, 0, 0, .45);
            font-size: 16px;
            margin-top: 20px;

            span:hover {
                color: #00cf8c;
            }

        }


    }


</style>