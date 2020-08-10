<!--  -->
<template>
  <div class="goods">
      <goodsitem v-for="item in list" :lists="item"></goodsitem>
  </div>
</template>

<script>
import goodsitem from "./GoodsItem";
export default {
  name: "goods",
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components:{
      goodsitem,
  }
};
</script>

<style  scoped>
.goods{
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>
