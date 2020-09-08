<!--  -->
<template>
  <div class="maintabbar">
    <tabbar>
      <tabbaritem path="/home" activecolor="red">
        <img src="~assets/imag/tabbar/home.svg" alt slot="img-icon" />
        <img src="~assets/imag/tabbar/homeactive.svg" alt slot="img-icon1" />
        <div slot="font">首页</div>
      </tabbaritem>
      <tabbaritem path="/fenlei" activecolor="red">
        <img src="~assets/imag/tabbar/feilei.svg" alt slot="img-icon" />
        <img src="~assets/imag/tabbar/feileiactive.svg" alt slot="img-icon1" />
        <div slot="font">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" activecolor="red">
        <img src="~assets/imag/tabbar/cart.svg" alt slot="img-icon" />
        <img src="~assets/imag/tabbar/cartactive.svg" alt slot="img-icon1" />
        <div slot="font">购物车</div>
      </tabbaritem>

      <tabbaritem path="/profile" activecolor="red">
        <img src="~assets/imag/tabbar/profile.svg" alt slot="img-icon" />
        <img src="~assets/imag/tabbar/profileactive.svg" alt slot="img-icon1" />
        <div slot="font">个人</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar';
import tabbaritem from 'components/common/tabbar/tabbaritem';
export default {
  name: "mainTabbar",
  components: {
    tabbar,
    tabbaritem,
  },
};
</script>

<style  scoped>
.maintabbar{
  height: 49px;
  z-index: 99;
}
</style>
