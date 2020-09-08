<!--  -->
<template>
  <div class="profile-bottom-control">
    <div class="bottom-control-top">
        <a href="#">
      <div class="first">
        <div class="img">
          <img src="~assets/imag/profile/message_icon.svg" alt="">
        </div>
        <div class="des">我的消息</div>
      </div>
      </a>
      <a href="#">
       <div class="second">
        <div class="img">
          <img src="~assets/imag/profile/shangcheng.svg" alt="">
        </div>
        <div class="des">积分商城</div>
      </div>
      </a>
      <a href="#">
       <div class="third">
        <div class="img">
          <img src="~assets/imag/profile/huiyuan.svg" alt="">
        </div>
        <div class="des">会员卡</div>
      </div>
      </a>
    </div>
    <div class="bottom-control-bottom">
        <a href="#">
         <div class="first">
        <div class="img">
          <img src="~assets/imag/profile/cart-.svg" alt="">
        </div>
        <div class="des">我的购物车</div>
      </div>
        </a>
        <a href="#">
       <div class="second">
        <div class="img">
          <img src="~assets/imag/profile/xiazai.svg" alt="">
        </div>
        <div class="des">下载购物app</div>
      </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile-bottom-control",
  data() {
    return {};
  },
};
</script>

<style  scoped>
.bottom-control-top{
    border-bottom: solid 8px #eee;
}
.first,.second,.third{
    display: flex;
    height: 35px;
    align-items: center;
    font-size: 10px;
}
.first img,.second img,.third img{
    width: 18px;
    height: 18px;
    margin-left: 13px;
    text-align: center;
    margin-right: 8px;
}
.des{
    flex: 1;
    line-height: 30px;
    border-bottom: 1px solid #eee;
}
.third .des{
    border-style: none;
}
</style>
