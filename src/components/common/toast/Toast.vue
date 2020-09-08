<!--  -->
<template>
  <div class="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name:"Toast",
  data () {
    return {
       message:'',
       isShow:false
    }
  },
  props:{
      // message:{
      //     type:String,
      //     default(){
      //         return ''
      //     }
      // },
     
      // isShow:{
      //     type:Boolean,
      //     default(){
      //         return false
      //     }
      // }
  },
  methods: {
    isshow(message,time){
    this.message=message
    this.isShow=true
    setTimeout(()=>{
      this.isShow=false
    },time)
    }
  },
}
</script>

<style  scoped>
.toast{
    width: 150px;
    height: 50px;
    position: fixed;
    top:50%;
    left: 50%;
    margin-left: -75px;
    margin-top: -25px;
    background-color:rgba(0, 0, 0, 0.7);
    text-align: center;
    border-radius: 4%;
    z-index: 9999;
}
.toast span{
    font-size: 15px;
    line-height: 50px;
    color:#fff;
}
</style>
