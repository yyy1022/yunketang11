<template>
    <div id="app">

        <router-view/>
    </div>
</template>
<script>
    // import {createKey, getItem} from "./utils/localStorage";
    // import {getUserInfo} from "./api/user-api";

    export default {
        name: 'app',
        created() {
            // let isLogin = localStorage.getItem(createKey("isLogin")) || false
            // let isLogin = getItem(createKey("isLogin"))
            // this.$store.commit("changeLogin", {isLogin})
            // let userInfo = JSON.parse(localStorage.getItem(createKey("userInfo")) || "{}")
            // this.$store.commit("changeUserInfo", {userInfo})
            //
            this.$store.dispatch("checkLoginStatus")
        }
    }
</script>
<style lang="less">
    // #app {
    //   font-family: Avenir, Helvetica, Arial, sans-serif;
    //   -webkit-font-smoothing: antialiased;
    //   -moz-osx-font-smoothing: grayscale;
    //   // text-align: center;
    //   color: #2c3e50;
    // }

    // #nav {
    //   padding: 30px;

    //   a {
    //     font-weight: bold;
    //     color: #2c3e50;

    //     &.router-link-exact-active {
    //       color: #42b983;
    //     }
    //   }
    // }
</style>
