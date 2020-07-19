<template>
    <div class="shopping-box">
    <router-link class="icon" to="/shopping/cart">
      <i class="el-icon-shopping-cart-1"></i> |
    </router-link>

        <span v-if="!isLogin" class="text" @click="showLoginModel">登录/注册<i class="el-icon-s-custom"></i></span>
        <span v-else @click="logOut">{{userInfo.nickname}} <img :src="userInfo.avatarUrl" class="avatarUrl"> </span>

        <Login></Login>
    </div>
</template>
<script>
    import Login from "./Login";
    import {mapState} from "vuex";
    import {logOut} from "../api/user-api";

    export default {
        name: "Shopping",
        components: {Login},
        methods: {
            //退出登录
            logOut() {
                logOut().then(res => {
                    console.log(res)
                    if (res.data.code === 0) {
                        //    退出成功
                        this.$store.dispatch("checkLoginStatus")
                        this.$message('成功退出');
                    }
                })
            },
            showLoginModel() {
                //eslint-disable-nex-line

                // debugger
                this.$store.commit("changeLoginModelVisible", {isShow: true})
            }
        },
        computed: {
            ...mapState(['isLogin', 'userInfo'])
        }

    };
</script>
<style lang="less" scoped>
    .shopping-box {
        width: 150px;
        height: 35px;
        line-height: 35px;
        margin-top: 14px;
        margin-left: 180px;
        float: left;
        //   border: 1px solid black;
        .icon,
        i {
            color: #999;
        }

        .text {
            font-size: 14px;
        }
    }

    .avatarUrl {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        vertical-align: center;
    }
</style>