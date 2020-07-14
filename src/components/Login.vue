<template>
    <div>

        <el-dialog
                title="提示"
                :visible.sync="loginModelVisible"
                width="30%"
                @close="cancel"
        >
            <div>
                <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px"
                         class="demo-ruleForm">
                    <el-form-item label="用户名" prop="userName">
                        <el-input type="text" v-model="loginForm.userName" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" propassw="pord">
                        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                    </el-form-item>

                    <!--               <el-form-item>-->
                    <!--                   <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
                    <!--                   <el-button @click="resetForm('ruleForm')">重置</el-button>-->
                    <!--               </el-form-item>-->
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button :plain="true" @click="cancel">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </span>
        </el-dialog>


    </div>
</template>

<script>

    import {mapState} from "vuex"
    import {loginApi} from "../api/user-api";
    // import {createKey, setItem} from "../utils/localStorage";

    export default {
        name: "Login",
        data() {
            var userName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                } else if (value.length < 5) {
                    //校验两次密码是否提一
                    // if (this.ruleForm.checkpassWord !== '') {
                    //     this.$refs.loginForm.validateField('checkpassWord');
                    // }
                    return callback(new Error("用户名大于5位"))
                }
                callback();
            };
            var validatePass = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            // var validatepassWord2 = (rule, value, callback) => {
            //     if (value === '') {
            //         callback(new Error('请再次输入密码'));
            //     } else if (value !== this.loginForm.passWord) {
            //         callback(new Error('两次输入密码不一致!'));
            //     } else {
            //         callback();
            //     }
            // };
            return {
                loginForm: {
                    password: '',
                    userName: '',

                },
                loginRules: {
                    password: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    userName: [
                        {validator: userName, trigger: 'blur'}
                    ],

                }
            };
        },
        methods: {
            cancel() {
                this.$store.commit("changeLoginModelVisible", {isShow: false})
            },
            submit() {
                this.$refs['loginForm'].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        // console.log(this.loginForm)
                        loginApi(this.loginForm.userName, this.loginForm.password).then(res => {
                            console.log(res)
                            if (res.data.code == 0) {

                                this.$message({
                                    message: '恭喜你，登陆成功',
                                    type: 'success'
                                });

                                // this.$store.commit("changeUserInfo", {userInfo: res.data.userInfo})
                                // localStorage.setItem(createKey("userInfo"),JSON.stringify(res.data.userInfo))
                                // this.$store.commit("changeLogin", {isLogin: true})
                                // // localStorage.setItem(createKey("isLogin"),'true')
                                // setItem(createKey("isLogin"),true,Date.now()+50000)
                                this.$store.commit("changeLoginModelVisible", {isShow: false})
                                this.$store.dispatch("checkLoginStatus")
                            }

                        })

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });

                //登录成功之后

            },


        },
        computed: {
            ...mapState(['loginModelVisible'])
        }
    };
</script>

<style scoped>

</style>