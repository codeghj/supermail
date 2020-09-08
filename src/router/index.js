import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import cart from '../view/cart/cart.vue'
import home from '../view/home/home.vue'
import profile from '../view/profile/profile.vue'
import fenlei from '../view/fenlei/fenlei.vue'
import detials from '../view/detials/detials'
const routes=[
    {
        path:'',
        redirect:'/home'
    },
    
    {
        path:'/home',
        component:home
    },
    {
        path:'/cart',
        component:cart
    },
    {
        path:'/profile',
        component:profile
    },
    {
        path:'/fenlei',
        component:fenlei
    },
    {
        path:'/detials/:iid',
        component:detials

    }
]
const router=new VueRouter({
    routes,
    mode:'history'
})
export default router