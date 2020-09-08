<!--  -->
<template>
  <div class="profile">
  <navbar class="navbar"><div slot="center">我的</div></navbar>
  <profilelogin></profilelogin>
  <profilecontrol></profilecontrol>
  <profilebottomcontrol></profilebottomcontrol>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'


import profilelogin from'./childComps/profile-login'
import profilecontrol from './childComps/profile-control'
import profilebottomcontrol from './childComps/profile-bottom-control'
export default {
    name:"profile",
  data () {
    return {
    }
  },
  components:{
 navbar,
 profilelogin,
 profilecontrol,
 profilebottomcontrol
  }
}
</script>

<style  scoped>
.navbar{
  background-color: #ff5777;
  color: #fff;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.5);
}
</style>
