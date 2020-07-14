export  default {
    computed:{
        isLogin(){
            return this.$store.state.isLogin
        }
    },
    methods:{
        loginClick(){
            if(this.isLogin){
                return true
            }else {
                this.$store.commit("changeLoginModelVisible", {isShow: true})
                return  false
            }
        }
    }
}