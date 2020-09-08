<!--  -->
<template>
  <div class="profile-login">
    <div class="avator">
        <a href="#">
     <img src="~assets/imag/profile/touxiang.svg" alt="">
     </a>
    </div>
    <div class="login">
     <div class="login-item-l">登陆/注册</div>
     <div class="login-item-s">
         <div>
         <img src="~assets/imag/profile/shouji.svg" alt=""></div>
         <div>
         <span class="s-title">暂无绑定手机号</span></div>
     </div>
    </div>
    <div class="next">
      <img src="~assets/imag/profile/xiangqian.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name:"profile-login",
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.profile-login{
    width: 100%;
    height:60px ;
    background-color:  #ff5777;
    display: flex;
    align-items: center;
}
.avator{
    width: 70px;
}
.avator img{
    background-color: white;
    border-radius: 50%;
    margin-left: 10px;
}
.login{
    color:#fff;
    font-size: 13px;
    flex: 1;
}
.login img{
width: 18px;
height: 18px;
margin-left: -3px;
}
.login-item-s{
    display: flex;
}
.login-item-s span{
   font-size: 10px;
   
}
.next{
    width: 20px;
}
.next img{
    width: 10px;
    height: 10px;
}
</style>
