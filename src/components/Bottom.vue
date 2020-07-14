<template>
    <div class="f-box">

        <div class="f-boxContent" >
            <div class="f-title">友情链接:</div>

               <ul  class="f-nav"><li v-for="(item,index) in list" :key="index">{{item.dictLabel}}</li></ul>

            <hr style="background-color: rgb(84, 84, 84); width: 1000px;margin: auto;  height: 3px; border: none; margin-top: 10px;">
            <div style="text-align: center; margin-top: 5px; margin-bottom: 50px ; font-size: 14px;  color: #999;" >Copyright © 2017-2025 石家庄天亮教育科技有限公司 备案号:冀ICP备17020003号</div>
        </div>
    </div>
</template>

<script>

    import {getBottom} from "../api/course";

    export default {
        name: "Bottom",
        data(){
            return { list:[]}

        },
        created() {
            getBottom().then(res=>{
                this.list=res.data.rows
                // console.log(res.data.rows)
                console.log(this.list)
            })

        }
    }
</script>

<style scoped lang="less">
    ul{list-style: none}

.f-box{
    width: 100%;
    /*height: 300px;*/
    border: 1px solid black;
    background: #444546;
    color: #999;
}
.f-boxContent {
    width: 1090px;
    height: 100%;
    margin:auto;
    min-width: 1090px;
    overflow: hidden;
}
.f-title {
    font-size: 22px;
    margin: 16px 0;
}
.f-nav {
    height: 40px;
    /*border: 1px solid black;*/
    li{
        float: left;
        margin-right: 20px;

    }
    li:hover{color: #00cf8c;}

}
/*.f-nav > a {*/
/*    color: #999;*/
/*    text-decoration: none;*/
/*    font-size: 16px;*/
/*    margin-right: 20px;*/
/*}*/
</style>