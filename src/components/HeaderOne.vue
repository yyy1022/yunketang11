<template>
    <div class="header-Bigbox">
        <div class="header-box">
            <div >
                <div class="header-img">
                    <img src="http://course.myhope365.com/img/logo-header.08ec1297.png"/>
                </div>
                <Nav></Nav>
                <Search ></Search>
                <Shopping ></Shopping>
            </div>

        </div>
    </div>
</template>
<script>
    import Nav from "./Nav";
    import Search from "./Search";
    import Shopping from "./Shopping";

    export default {
        name: "HeaderOne",
        components: {
            Nav,
            Search,
            Shopping
        }
    };
</script>
<style lang="less" scoped>
    .header-Bigbox {
        width: 100%;
        border-bottom: 1px solid #f2f2f2;
        overflow: hidden;
    }

    .header-box {
        min-width: 1090px;
        width: 1090px;
        margin: 10px auto ;

        // padding: 20px;
    }

    .header-img {
        float: left;
    }

    // .header-Bigbox:after {
    //   clear: both;
    // }
  /deep/  .header-search{
        margin-left: 300px;
    }
.shopping-box{
    margin-left: 115px;
}
/deep/.el-menu-demo el-menu--horizontal el-menu{
    width: 200px;
    float: left;
}
   /deep/.el-menu{
        /*position:;*/
        /*position: relative;*/
       position:static ;
       float: left;
    }


   /deep/ .header-search[data-v-7cb41050]{
        /*ma*/
        float: left;
       margin: 14px 0 0 79px;
    }
    .shopping-box[data-v-6c6dc4d0] {
        width: 150px;
        height: 35px;
        line-height: 35px;
        margin-top: -28px;
        margin-left: 180px;
        float: right;
    }
</style>
