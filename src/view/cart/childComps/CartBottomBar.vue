<!--  -->
<template>
  <div class="cart-bottom-bar">
    <div class="cart-bottom-bar-left">
     <div class="item-left">
     <checkimg :goodscounts="savegoods" :active="isallpick" class="allpickimg"></checkimg>
     <span>全选</span>
     </div>
     <div class="item-right">
       <span>合计</span>
       <span>￥{{allprice}}</span>
     </div>
    </div>
     <div class="cart-bottom-bar-right" @click="iscomputerPrice">
        <span>去结算({{alloverpricecount}})</span>
    </div>
  </div>
</template>

<script>
import checkimg from 'components/content/checkedimg/ChenckImg'
export default {
  name:"CartBottomBar",
  data () {
    return {
        bargoods:[]
    }
  },
  components:{
      checkimg,
  },
  props:{
      goodscounts:{
          type:Array,
          default(){
              return[]
          }
      }
  },
  computed: {
      allprice(){
      return this.goodscounts.filter(item=>item.checked==false).reduce((parValue,item)=>parValue+item.count*item.realprice,0).toFixed(2)
      },
      isallpick(){
          let lengths=this.goodscounts.filter(item=>item.checked==false).length
          if(lengths==0)
              return false
          else if(lengths==this.goodscounts.length)
              return true
       },
       savegoods(){
           return this.goodscounts
       },
       alloverpricecount(){
        return this.goodscounts.filter(item=>item.checked==false).length
       }
  },
  methods: {
     iscomputerPrice(){
         const priceLength=this.goodscounts.filter(item=>item.checked==false).length
         if(priceLength==0){
            this.$toast.isshow('请选择商品',2000) 
         }
     }
  },
}
</script>

<style  scoped>
.cart-bottom-bar{
    position: fixed;
    width: 100%;
    bottom: 49px;
    height: 30px;
    background-color:rgb(220,220,220);
    display: flex;
    
}
.cart-bottom-bar-left{
    display: flex;
    font-size: 10px;
    flex: 1;
}
.item-left,.item-right{
    display: flex;
    font-size: 10px;
    justify-content: center;
}
.item-left span{
    line-height: 30px;
    display: inline-block;
    width: 40px;
}
.item-right span{
    line-height: 30px;
    display: inline-block;
    width: 20px;

}
.cart-bottom-bar-right{
    font-size: 10px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    background-color: rgb(255,82,0);
    text-align: center;
    color:#fff;
}
.allpickimg{
    margin-top: 2px;
}
</style>
