import Vue from 'vue'
import VueRouter from 'VueRouter'
Vue.use(VueRouter)
import cart from '../views/cart/cart.vue'
import home from '../views/home/home.vue'
import profile from '../views/profile/profile.vue'
import fenlei from '../views/fenlei/fenlei.vue'
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
]
const router=new VueRouter({
    routes,
    mode:'history'
})
export default router