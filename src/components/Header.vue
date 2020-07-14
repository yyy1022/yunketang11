<template>
    <div class="header-Bigbox">
        <div class="header-box">
            <div style=" overflow: hidden;">
                <div class="header-img">
                    <img src="http://course.myhope365.com/img/logo-header.08ec1297.png"/>
                </div>

                <Search></Search>
                <Shopping></Shopping>

            </div>
            <Nav></Nav>

        </div>
    </div>
</template>
<script>
    import Nav from "./Nav";
    import Search from "./Search";
    import Shopping from "./Shopping";


    export default {
        name: "Header",
        components: {
            Nav,
            Search,
            Shopping,


        },
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
        margin: 30px auto 0px;

        // padding: 20px;
    }

    .header-img {
        float: left;
    }

    // .header-Bigbox:after {
    //   clear: both;
    // }
</style>
