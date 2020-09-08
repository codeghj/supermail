<!--  -->
<template>
  <div class="category-content">
  <catergorycontentitem v-for="item in categorycontent" :contentitem="item"></catergorycontentitem>
  </div>
</template>

<script>
import catergorycontentitem from'./CategoryContentItem'
export default {

  name:"CategoryContent",
  data () {
    return {
    }
  },
  components:{
      catergorycontentitem,
  },
  props:{
      categorycontent:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>

<style  scoped>
.category-content{
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    
}
</style>
