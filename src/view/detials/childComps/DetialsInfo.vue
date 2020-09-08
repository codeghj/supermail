<!--  -->
<template>
  <div class="details-info">
    <div class="details-info-top">
        <div></div>
    </div>
    <div class="details-info-desc">{{detailsInfo.desc}}</div>
    <div class="details-info-bottom-margin">
    <div class="details-info-bottom">
        <div></div>
    </div>
    </div>
    <div class="details-info-Img-key">{{detailsInfo.detailImage[0].key}}</div>  
    <div class="details-info-detailimg" >  
    <img v-for="item in detailsInfo.detailImage[0].list" :src="item" alt="" @load="datailLoad">  
    </div>
  </div>
</template>

<script>
export default {
    name:"DetialsInfo",
  data () {
    return {
    }
  },
  props:{
      detailsInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  methods: {
      datailLoad(){
          this.$emit('datailLoad')
      }
  },
}
</script>

<style  scoped>
.details-info{
    border-bottom: solid 2px #eee;
}
.details-info-top{
 height: 5px;
 width: 80px;
 border-bottom: 2px solid #eee;
 margin-left: 10px;
 margin-top: 10px;
 
}
.details-info-top div{
 width: 4px;
 height: 4px;
 background-color: black;
 
 
}
.details-info-bottom-margin{
    height: 10px;
}
.details-info-bottom{
   height: 5px;
 width: 80px; 
 float: right;
 border-bottom: 2px solid #eee;
 margin-right: 10px;

}
.details-info-bottom div{
 width: 4px;
 height: 4px;
 background-color: black;
 float: right;
}
.details-info-desc{
   margin-top: 10px;
   margin-bottom: 10px;
    font-size: 10px;
    margin-left: 10px;
}

.details-info-Img-key{
    line-height: 20px;
    font-size: 10px;
    font-weight: bold;
     margin-left: 10px;
}
.details-info-detailimg img{
width: 100%;
}
</style>
