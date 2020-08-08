<!--  -->
<template>
  <div class="tabbaritem" @click="itemclick()">
   <div v-if="isactive"><slot name="img-icon"> </slot></div>
    <div v-else><slot name="img-icon1"></slot></div>
    <div :style="isactivecolor"><slot name="font"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        
        
      
    }
  },
  computed: {
      isactive(){
          return this.$route.path.indexOf(this.path)
         
      },
      isactivecolor(){
          return this.isactive ? {}: {color:this.activecolor}
      }
  },
  props:{
      path:String,
      activecolor:String
  },
  methods:{
      itemclick(){
          this.$router.push(this.path)
        
        
      }
  },
}
</script>

<style  scoped>
.tabbaritem img{
    width: 24px;
    height: 24px;

}
</style>
