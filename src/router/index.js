import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from "../views/index/Index.vue"
import IndexLayout from "../layout/IndexLayout";
import DetailLayout from "../layout/DetailLayout";
import store from "../store/index";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    // name: 'index',
    // component: Index,
    redirect: "/index"
},
    {
        path: '/detail',
        component: DetailLayout,
        children: [
            {
                path: '/detail/:courseId',
                name: 'detail',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(  '../views/detail/Detail')
            },
            {
                path: "couser/paly/:courseId",
                component: () => import('../views/CouserPlay'),
                meta: {
                    //需要登录才能访问
                    isAuth: true
                }
            },
            {
                path: "/shopping/cart",
                component: () => import('../views/shopping/ShoppingCart'),
                meta: {
                    //需要登录才能访问
                    isAuth: true
                }
            }
        ]
    },
    {
        path: '/index',

        // name: 'index',
        component: IndexLayout,
        children: [
            {
                path: '/',
                component: Index
            },

        ]

        // redirect:""
    },

]
//执行路由守卫之前先检测
const loginPromise = store.dispatch("checkLoginStatus")
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//路由守卫
router.beforeEach((to, from, next) => {
    // ...
    if (to.meta.isAuth) {
        //需要鉴权
        loginPromise.then(()=>{
            if(store.state.isLogin){
                next()
            }else {
                store.commit("changeLoginModelVisible",{isShow:true})
                next("/index")
            }

        })
    } else {
        next()
    }

    // next(false)
    // next('/index')
})

export default router