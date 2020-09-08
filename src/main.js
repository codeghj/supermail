import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import lazyload from 'vue-lazyload'
import toast from './components/common/toast/index'
Vue.use(toast)
Vue.use(lazyload,{
  loading:require('./assets/imag/common/loading.jpg')
  
})
Vue.prototype.$bus=new Vue()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
