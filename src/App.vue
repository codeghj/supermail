<template>
  <div id="app">
    <keep-alive exclude="detials">
    <router-view></router-view>
    </keep-alive>
    <mainTabbar></mainTabbar>
  </div>
</template>

<script>
import mainTabbar from 'components/content/mainTabbar/mainTabbar'

export default {
  name: 'App',
  components: {
  mainTabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
