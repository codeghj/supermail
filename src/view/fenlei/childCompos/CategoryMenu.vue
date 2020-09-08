<!--  -->
<template>
  <div class="category-menu">
   <div @click="changeStyle(index)" v-for="(item,index) in menudata" class="category-menu-item" :class="{'category-menu-items':active==index}">
     {{item.title}}
   </div>
  </div>
</template>

<script>
export default {
  name:"CategoryMenu",
  data () {
    return {
        active:0
    }
  },
  props:{
      menudata:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods: {
      changeStyle(index){
          this.active=index
          this.$emit('changetype',index)
      }
  },
}
</script>

<style  scoped>
.category-menu{
    margin-top: 1px;
    
    width: 100px;
    line-height: 60px;
    font-size: 10px; 
}
.category-menu-item{
 width: 100px;
 height: 60px; 
 text-align: center;
 background-color: #eee;
}
.category-menu-items{
    background-color: white;
    color: red;
}
</style>
