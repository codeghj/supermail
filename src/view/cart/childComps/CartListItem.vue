<!--  -->
<template>
  <div class="cart-list-item">
   <checkimg class="checked" :isshow="items":cartlistcheeched="items.checked"></checkimg>
   <div class="item-img">
       <img :src="items.img" alt="">
   </div>
   <div class="item-desc-right">
     <div class="item-title">
       {{items.title}}
     </div>
     <div class="item-desc">
      {{items.descs}}
     </div>
     <div class="item-desc-bottom">
         <span class="realprice">￥{{items.realprice}}</span>
         <span class="count">X{{items.count}}</span>
     </div>

   </div>

  </div>
</template>

<script>
import checkimg from 'components/content/checkedimg/ChenckImg'
export default {
    name:"CartListItem",
  data () {
    return {
    }
  },
  props:{
      items:{
          type:Object,
          default(){
              return{}
          }
      }
  },
  components:{
      checkimg,
  }
}
</script>

<style  scoped>
.cart-list-item{
    display: flex;
    height: 120px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 2px solid #eee;
    justify-content: center;
}
.item-img{
    width: 100px;
    margin-left: 5px;
}
.item-img img{
    width: 80px;
    height: 100px;
    border-radius: 5%;
}
.item-desc-right{
    height: 100px;
    width: 60%;
}
.item-title{
    width: 150px;
    overflow: hidden;
    height: 30px;
    text-overflow: ellipsis;
    white-space: nowrap;
    
}
.item-desc{
    width: 150px;
    font-size: 10px;
    overflow: hidden;
    height: 30px;
    text-overflow: ellipsis;
    white-space: nowrap;
    
}
.item-desc-bottom{
    margin-top: 10px;
}
.realprice{
    float: left;
    color: coral;
}
.count{
    float: right;
    margin-right: 10px;
}
</style>
