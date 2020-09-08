<!--  -->
<template>
  <div class="cart">
  <navbar class="nav-bar">
    <div slot="center">购物车({{getGoodsCountLength}})</div>
  </navbar>
  <scroll class="swiper" ref="scroll">
  <cartlist :list="getGoodsCount"></cartlist>
  </scroll> 
  <bottombar :goodscounts="getGoodsCount"></bottombar>
  </div>
</template>

<script>
import scroll from'components/common/scoll/Scoll'
import navbar from 'components/common/navbar/NavBar'


import cartlist from'./childComps/CartList'
import bottombar from './childComps/CartBottomBar'


import { mapGetters } from 'vuex'
export default {
    name:"cart",
  data () {
    return {
    }
  },
  mounted() {
    this.$bus.$on('changIsShow',(id)=>{
      for(let item of this.getGoodsCount){
        if(item.iid==id){
      item.checked?item.checked=false:item.checked=true}
      }
    })
    
  },
  components:{
    navbar,
    cartlist,
    scroll ,
    bottombar,
  },
  computed: {
    ...mapGetters(['getGoodsCountLength','getGoodsCount'])
  },
  activated() {
    this.$refs.scroll.refreshs()
  },
}
</script>

<style  scoped>
.cart{
  height: 618px;
}
.swiper{
position: absolute;
top: 40px;
bottom: 79px;
left: 0;
right: 0;
overflow: hidden;
}
.nav-bar{
  background-color:  #ff5777;
  color: white;
}
</style>
