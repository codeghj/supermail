<!--  -->
<template>
  <div class="home">
    <navbar class="navbar">
      <div slot="center">购物街</div>
    </navbar>
    <homeswiper :banners="banners"></homeswiper>
    <recommend :recommends="recommends"></recommend>
    <featureview></featureview>
    <tabcontrol :title="title" @tabbaritem="tabbaritems"></tabcontrol>
    <goods :list="this.goods[this.currenttype].list"></goods>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
import tabcontrol from "components/content/tabcontrol/TabControl";
import goods from "components/content/goods/Goods";
import homeswiper from "./childCompos/HomeSwiper";
import recommend from "./childCompos/Recommend";
import featureview from "./childCompos/FeatureView";

import { homerequest, homegoods } from "network/home";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      title: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currenttype:'pop'
    };
  },
  components: {
    navbar,
    homeswiper,
    recommend,
    tabcontrol,
    featureview,
    goods,
  },
  created() {
    this.homerequest();
    this.homegoods("pop");
    this.homegoods("new");
    this.homegoods("sell");
  },
  methods: {
    homerequest() {
      homerequest().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    homegoods(type) {
      const page = this.goods[type].page + 1;
      homegoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        console.log(this.goods[type].list);
      });
    },
    tabbaritems(index){
     switch(index){
       case 0:
         this.currenttype='pop'
         break
       case 1:
         this.currenttype='new'
         break
       case 2:
         this.currenttype='sell'
         break
     }
    }
  },
};
</script>

<style  scoped>
.navbar {
  background-color: #ff5777;
  color: #fff;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.5);
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 9;
}
.home {
  padding-top: 40px;
}
</style>
