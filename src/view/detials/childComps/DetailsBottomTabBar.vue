<!--  -->
<template>
  <div class="bottom-bar">
     <div class="bottom-bar-left">
         <div class="left-item">
             <div class="left-icon">
                 <img src="~assets/imag/details/icon-.svg" alt="">
             </div>
             <span>客服</span>
         </div>
         <div class="center-item">
           <div class="center-icon">
               <img src="~assets/imag/details/dianpu.svg" alt="">
           </div>
             <span>店铺</span>
         </div>
         <div class="right-item">
             <div class="right-icon">
                 <img src="~assets/imag/details/shoucang.svg" alt="">
             </div>
             <span>收藏</span>
         </div>
     </div>
     <div class="bottom-bar-right">
         <div class="left-items" @click="addCart">加入购物车</div>
         <div class="right-items">购买</div>
     </div>
  </div>
</template>

<script>
export default {
    name:"DetailsBottomBar",
  data () {
    return {
    }
  },
  methods: {
      addCart(){
          this.$emit('addCart')
      }
  },
}
</script>

<style  scoped>
.bottom-bar{
    height: 49px;
    position: fixed;
    background-color: white;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    display: flex;

}
.bottom-bar-left ,.bottom-bar-right{
    flex: 1;
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 13px;
}
 .left-item,.center-item,.right-item,.left-items,.right-items{
     flex:1
 }
 .bottom-bar-left img{
     width: 20px;
     height: 20px;
 }
 .left-items{
     background-color: rgb(226,194,29);
     line-height: 49px;
     color: black;
 }
 .right-items{
     background-color:rgb(246,119,148);
      line-height: 49px;
      color: #fff;
 }
</style>
