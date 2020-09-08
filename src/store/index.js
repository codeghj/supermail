import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        goodscount: []
    },
    mutations: {
        addcount(state, payload) {
            payload.count++
            console.log(1)
        },
        pushObject(state, payload) {
            state.goodscount.push(payload)
        }
    },
    getters:{
        getGoodsCountLength(state){
          return state.goodscount.length;
          
        },
        getGoodsCount(state){
            return state.goodscount
        }

    },
    actions: {
        addcart(context, payload) {
            return new Promise((resolve,reject)=>{ 
                let goods = null
                goods=context.state.goodscount.find(item=>item.iid==payload.iid)
                
                if (goods) {
                        context.commit('addcount', goods)
                        resolve('该商品数量加1')
                    }
                    else {
                        payload.count = 1
                        context.commit('pushObject', payload)
                        resolve('加入购物车成功')
    
                    }
                })
            
            
            
            
        }
    }
})
export default store