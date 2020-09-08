<!--  -->
<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shops.logo" alt />
      <span class="title">{{shops.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="shop-left-sells">
          <div class="shop-sells">{{shops.sells| sellscountfilters}}</div>
          <span>总销量</span>
        </div>
         <div class="shop-right-sells">
            <div class="right-sells">{{shops.goodsCount}}</div>
            <span>全部宝贝</span>
         </div>
      </div>
      <div class="shop-middle-right">
      <div  class="shop-middle-right-item">
          <div class="shop-score" v-for="item in shops.score">
           <span>{{item.name}}</span>
           <span :class="{active:item.isBetter}">{{item.score}}</span>
           <span :class="{actives:item.isBetter}">{{item.isBetter?'高':'低'}}</span>
          </div>
      </div>
      </div>
     
    </div>
     <div class="shop-bottom">
        <a href="">
            进店逛逛
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "DetialsShopInfo",
  data() {
    return {};
  },
  props: {
    shops: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellscountfilters(value) {
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style  scoped>
.shop-info {
  margin-top: 20px;
  border-bottom: solid 3px #eee;
}
.shop-top {
  display: flex;
}
.shop-top img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: solid 1px #eee;
  margin-right: 5px;
}
.shop-top span {
  line-height: 40px;
  font-size: 12px;
}
.shop-middle{
    display: flex;
}
.shop-middle-left{
    display: flex;
    height: 100px;
    width: 150px;
    align-items: center;
    text-align: center;
    justify-content: space-evenly; 
}
.shop-left-sells,.shop-right-sells{
    flex: 1;
} 
.shop-sells,.right-sells {
    font-weight: bold;
}
.shop-right-sells{
 border-right: solid 2px #eee;
}
.shop-left-sells span,.shop-right-sells span{
   font-size: 10px;
}
.shop-middle-right{
    flex:1;
    height: 100px;
    font-size: 10px;

}
.shop-middle-right-item{
    padding-top: 21px;
}
.shop-middle-right .shop-score :first-child{
    padding-top: 20px;
}
.active{
    color:  rgb(255,87,119) !important;
    padding-right: 15px;
}
.shop-score{
    padding-left: 40px;
    line-height: 20px;
}

.shop-score span:not(:first-child){
    color: white;
}
.shop-score span:nth-child(2){
    color: green;
}
.shop-score span:last-child{
    background-color: green;
}

.shop-score span{
    margin-right: 10px;
}
.shop-score span:first-child{
    text-align: left;
}
.actives{
    background-color: rgb(255,87,119) !important;
}
.shop-bottom{
    height: 40px;
    text-align: center;
    
}
.shop-bottom a{
    font-size: 10px;
    display: inline-block;
    width: 100px;
    height: 20px;
    background-color: rgb(241, 245, 251);
    text-align: center;
    line-height: 20px;
   border-top-left-radius:5px 10px ;
   border-top-right-radius: 5px 10px;
   border-bottom-left-radius: 5px  10px;
   border-bottom-right-radius: 5px 10px;

}
</style>
