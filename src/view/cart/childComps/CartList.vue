<!--  -->
<template>
  <div class="cart-list">
    <cartlistitem v-for="item in list" :items="item"></cartlistitem>
  </div>
</template>

<script>
import cartlistitem from'./CartListItem'
export default {
name:"CartList",
  data () {
    return {
    }
  },
  props:{
      list:{
          type:Array,
          default(){
              return[]
          }
      }
  },
  components:{
   cartlistitem,
  }

}
</script>

<style  scoped>

</style>
