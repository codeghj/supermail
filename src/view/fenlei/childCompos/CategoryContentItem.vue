<!--  -->
<template>
  <div class="category-content-item">
   <a :href="contentitem.link">
       <img :src="contentitem.image" alt="" @load="contentimgload">
       <div>{{contentitem.title}}</div>
   </a>
  </div>
</template>

<script>
export default {
    name:"CategoryContentItem",
  data () {
    return {
    }
  },
  props:{
      contentitem:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  methods: {
      contentimgload(){
          this.$bus.$emit('contentimgload')
      }
  },
}
</script>

<style  scoped>
.category-content-item{
    font-size: 10px;
    height: 70px;
    margin: 0 5px;
    text-align: center;
    margin-bottom: 15px;
    
}
.category-content-item img{
    width: 55px;
    height: 55px;
    vertical-align: top;
}
.category-content-item div{
    line-height: 15px;
}
</style>
