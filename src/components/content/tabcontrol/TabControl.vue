<!--  -->
<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in title" class="tabcontrol-item" :class="{ active:isactive===index}" @click="onactive(index)">
     <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:'tabcontrol',
    props:{
       title:{
           type:Array,
           default(){
               return []
           }
       },
    },
    
  data () {
    return {
        isactive:0
    }
  },
  methods: {
      onactive(index){
          this.isactive=index;
          this.$emit('tabbaritem',index)
         
      }
  },
}
</script>

<style  scoped>
.tabcontrol{
    display: flex;
    text-align: center;
    background-color: white;
    height: 40px;
    line-height: 40px;
}
.tabcontrol-item{
    flex: 1;
}
.active{
    color: red;
    
}
.active span{
    padding: 5px;
    border-bottom: 3px solid red;
}
.tabcontrol{
    margin-top: 20px;
}

</style>
