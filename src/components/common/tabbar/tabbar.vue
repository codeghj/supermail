<!--  -->
<template>
  <div class="tabbar" >
  <slot></slot>
  </div>
</template>

<script>
export default {
name:'tabber',
  data () {
    return {
    }
  },
 
}
</script>

<style  scoped>
.tabbar{
    display: flex;
    height: 49px;
    position: fixed;
    left: 0;
    right:  0;
    bottom: 0;
    background-color: #ccc;
}
.tabbar div{
    text-align: center;
    flex: 1;
}
</style>
