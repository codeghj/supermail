<!--  -->
<template>
  <div class="checked-img" :class="{'active':nowChecked,'allactive':active}">
   <img src="~assets/imag/details/gou.svg" alt="" @click="isshowClick">
   
  </div>
</template>

<script>
export default {
  name:"CheckedImg",
  data () {
    return {
       
        
    }
  },
  mounted() {
      console.log(this.active)
  },
  props:{
      isshow:{
          type:Object,
          default(){
              return {}
          }
      },
      goodscounts:{
          type:Array,
          default(){
              return []
          }
      },
      active:{
          type:Boolean,
          default(){
              return false
          }
      },
      cartlistcheeched:{
          type:Boolean,
          default(){
              return false
          }
      }
  },
  methods:{
   isshowClick(){
       console.log(Object.keys(this.isshow).length)
        
        
      if(Object.keys(this.isshow).length!=0){
       
       let id=this.isshow.iid
       this.$bus.$emit('changIsShow',id)
       console.log(this.isshow)
       console.log(Object.keys(this.isshow).length)
          }
    else{
     if(Object.keys(this.isshow).length==0){
       if(this.active==true){
           for(let item of this.goodscounts){
               item.checked=true
             
               
           }
           
           console.log(Object.keys(this.isshow).length)
           console.log(this.goodscounts)
       }
       else
       if(this.active==false){
            this.goodscounts.forEach(element => element.checked=false)
            
            console.log(this.goodscounts)
       }
       
    }
    }
  },
},
computed: {
    nowChecked(){
        if(Object.keys(this.isshow).length!=0){
        return  !this.cartlistcheeched}
        else{
            return false
        }
    }
},
}
</script>

<style  scoped>
.checked-img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #aaa;
    margin-left: 5px;
}
.checked-img img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
.active{
    background-color: red;
}
.allactive{
    background-color: red;
}

</style>
