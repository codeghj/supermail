<!--  -->
<template>
  <div class="backtop">
    <img src="~assets/imag/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    name:"BackTop",
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.backtop{
  position:fixed;
  bottom: 55px;
  right: 20px;
  z-index: 9;
  
}
.backtop img{
  width: 50px;
  height: 50px;
}

</style>
