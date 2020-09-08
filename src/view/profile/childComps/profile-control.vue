<!--  -->
<template>
  <div class="profile-control">
    <div class="control-left">
        <a href="#">
      <div class="count">
        <span>0.00</span>
        <span>元</span>
      </div>
      <div class="des">我的余额</div>
      </a>
    </div>
    <div class="control-center">
        <a href="#">
      <div class="count">
        <span>0</span>
        <span>个</span>
      </div>
      <div class="des">我的优惠</div>
      </a>
    </div>
    <div class="control-right">
        <a href="#">
      <div class="count">
        <span>0</span>
        <span>分</span>
      </div>
      <div class="des">我的积分</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile-control",
  data() {
    return {};
  },
};
</script>

<style  scoped>
.profile-control {
  display: flex;
  align-items: center;
  height: 80px;
  text-align: center;
  border-bottom: 8px solid #eee;
}
.control-left,.control-center,.control-right{
    flex: 1;
    font-size: 10px;
}
.control-left,.control-center{
    border-right: 1px solid #eee;
}
.count{
    margin-bottom: 5px;
}
.count span:first-child{
    color: coral;
    font-size: 18px;
    font-weight: bold;
}
</style>
