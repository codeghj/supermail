<template>
  <div id="app">
    <router-view></router-view>
    <mainTabbar></mainTabbar>
  </div>
</template>

<script>
import mainTabbar from './components/content/mainTabbar'

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
