<!--  -->
<template>
  <div class="baseinfo" v-if="Object.keys(goods).length !==0">
   <div class="info-title">{{goods.title}}</div>
   <div class="info-price">
       <span class="n-price">{{goods.newprice}}</span>
       <span class="o-price">{{goods.oldprice}}</span>
       <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
   </div>
   <div class="info-other">
      <span>{{goods.columns[0]}}</span>
       <span>{{goods.columns[1]}}</span>
       <span>{{goods.services[goods.services.length-1].name}}</span>
   </div>
   <div class="info-service">
       <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].icon" alt="">
              <span>{{goods.services[index-1].name}}</span>
       </span>

   </div>
  </div>
</template>

<script>
export default {
    name:"DetialsBaseInfo",
  data () {
    return {
    }
  },
  props:{
      goods:{
          type:Object,
          default(){
              return {}
          }
      }
  }
}
</script>

<style  scoped>
.baseinfo{
    margin-top: 10px;
}
.info-title{
    font-size: 15px;
    color: black;
    margin-bottom: 10px;
    text-indent: 2em;
}
.info-price{
    margin-bottom: 20px;
}
.n-price{
    color: rgb(255,87,119);
    font-size: 20px;
    padding-right: 5px;
    padding-left: 5px;
}
.o-price{
    font-size: 10px;
    color: black;
    text-decoration: line-through;
    margin-right: 4px;
}
.discount{
    display: inline-block;
    text-align: center;
    font-size: 15px;
    background-color: rgb(255,87,119);
    color: white;
    border-radius: 5px;
    position: relative;
    top:-5px;

}
.info-other{
    display: flex;
    font-size: 13px;
    box-shadow: 0px 1px 1px #eee;
    padding-bottom: 5px;
}
.info-other span{
    flex:1;
    padding: 0 8px;
}
.info-service{
    display: flex;
    text-align: center;
    height: 50px;
    box-shadow: 0px 3px 2px #eee;
}
.info-service span{
 flex: 1;
 line-height: 50px;
 font-size: 12px;
 color: black;
}
.info-service img{
    width: 10px;
    height: 10px;
}


</style>
