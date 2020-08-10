<!--  -->
<template>
  <div class="nav-bar">
  <div class="felt"><slot name="felt"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.nav-bar{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.felt,.right{
    width: 60px;
}
.center{
    flex:1
}

</style>
