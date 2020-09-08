<!--  -->
<template>
  <div class="home">
    <navbar class="navbar">
      <div slot="center">购物街</div>
    </navbar>
    <tabcontrol 
         :title="title" 
         @tabbaritem="tabbaritems"
         class="tabcontrol" 
         v-show="isshowtabcontrol" 
         ref="tabcontrols">
    </tabcontrol>
    <scroll 
        class="scroll"
        ref="scroll"
        :probetype="3"
        @backtopclicks="backtopclicks"
        @updateup="updateup"
        :pullUpLoad="true">
    <homeswiper :banners="banners" @swiperimagload="swiperimagloads"></homeswiper>
    <recommend :recommends="recommends"></recommend>
    <featureview></featureview>
    <tabcontrol 
        :title="title"
        @tabbaritem="tabbaritems"
        class="tabbarcontrol"
        ref="tabcontrol">
    </tabcontrol>
    <goods :list="this.goods[this.currenttype].list"></goods>
    </scroll>
    <backtop @click.native="backtopclick" v-show="isShow"></backtop>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
import tabcontrol from "components/content/tabcontrol/TabControl";
import goods from "components/content/goods/Goods";
import scroll from "components/common/scoll/Scoll"
import backtop from "components/content/backtop/BackTop"


import homeswiper from "./childCompos/HomeSwiper";
import recommend from "./childCompos/Recommend";
import featureview from "./childCompos/FeatureView";

import { homerequest, homegoods } from "network/home";
import{mixins}from 'common/mxin'

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
      currenttype:'pop',
      isShow:'false',
      isshowtabcontrol:false,
      ofsettop:0,
      position:0,
      positions:0,
     
    };
  },
  mixins:[mixins],
  components: {
    navbar,
    homeswiper,
    recommend,
    tabcontrol,
    featureview,
    goods,
    scroll,
    backtop
  },
  created() {
    this.homerequest();
    this.homegoods("pop");
    this.homegoods("new");
    this.homegoods("sell");
    
    
  },
  mounted() {
    
  },
  activated() {
    this.$refs.scroll.scollTos(0,this.positions,500)
    this.$refs.scroll.refreshs();
     this.$bus.$on('Goodsload',()=>{
       this.$refs.scroll.refreshs()
     })
    
  },
  deactivated() {
    this.positions=this.position
    this.$bus.$off('Goodsload',this.loadGoods)
  },
  methods: {
    debounce(func,time){
      let timer=null
      return function(...arg){
        if(timer) clearTimeout(timer)
         timer=setTimeout(()=>{
           func.apply(this,arg)
         },time)
      }

    },
    homerequest() {
      homerequest().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    homegoods(type) {
      const page = this.goods[type].page + 1;
      homegoods(type, page).then((res) => {
        this.goods[type].page+=1;
        this.goods[type].list.push(...res.data.data.list);
        this.$refs.scroll.finishPullUp();
        
       
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
     this.$refs.tabcontrols.isactive=index
     this.$refs.tabcontrol.isactive=index
    },
    backtopclick(){
      this.$refs.scroll.scollTos(0, 0,500)
    },
    backtopclicks(position){
     this.isShow=-position.y>500
     this.isshowtabcontrol=-position.y>this.ofsettop
     this.position=position.y 
     
    },
    updateup(){
     this.homegoods(this.currenttype)
     
    },
    swiperimagloads(){
      this.ofsettop=this.$refs.tabcontrol.$el.offsetTop
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
  margin-top: 40px;
  height: 578px;
}
.scroll{
  position: absolute;
  top: 40px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  
}
.tabcontrol{
  position: relative;
  z-index: 9;
}
</style>
