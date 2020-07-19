<template>
    <div class="fixde-box">
        <ul>
            <li>
                <span class="icon iconfont icon-qq"></span>

                <p><a href="http://wpa.qq.com/msgrd?v=3&uin=577405209&site=qq&me">客服一</a></p></li>
            <li>
                <span class="icon iconfont icon-qq"></span>

                <p><a href="http://wpa.qq.com/msgrd?v=3&uin=577405209&site=qq&me">客服二</a></p></li>
            <li>
                <span class="icon iconfont icon-qq"></span>

                <p><a href="http://wpa.qq.com/msgrd?v=3&uin=577405209&site=qq&me">技术支持</a></p></li>

        </ul>
    </div>
</template>

<script>


    export default {
        name: "Fixde"
    }
</script>

<style scoped lang="less">
    ul {
        list-style: none;
    }

    .fixde-box {
        position: fixed;
        width: 70px;

        height: 210px;
        /* border: 1px solid blueviolet; */
        right: 20px;
        bottom: 50%;
        border-radius: 5px;
        background-color: #e6f7ff;
        z-index: 20;
    }

    .icon {
        font-size: 34px;
    }

    .fixde-box > ul > li {
        width: 100%;
        height: 70px;
        /* border: 1px solid blueviolet; */
        padding-top:5px ;
        text-align: center;
        color: #00cf8c;
        border-top: 1px solid #e8e8e8;
    }

    .fixde-box > ul > li > p > a {
        color: #00cf8c;
        text-decoration: none;
    }

    /*.qq {*/
    /*    font-size: 34px;*/
    /*    !* color: #1da57a !important; *!*/
    /*    color: #1da57a;*/
    /*    margin-left: -4px;*/
    /*    !* background-color: #00cf8c; *!*/
    /*}*/

    .fixde-box > ul > li:hover {
        background-color: #1da57a;
        color: white;
    }

    /*.p-box > ul > li:hover > .qq {*/
    /*    color: #ffff !important;*/
    /*    !* background-color: white; *!*/
    /*}*/

    /*.p-box > ul > li:hover > p > a {*/
    /*    color: white;*/
    /*}*/
</style>