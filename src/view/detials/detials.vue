<!--  -->
<template>
  <div class="detials">
    <navbar class="navbar">
      <div slot="felt" class="navbar-left-item" @click="backclick">
        <img src="~assets/imag/common/back.svg" alt />
      </div>
      <div slot="center" class="nav-center-item">
        <div
          v-for="(item,index) in banners"
          :class="{ 'active':currentindex==index}"
          @click="itemclick(index)"
        >{{item}}</div>
      </div>
    </navbar>
    <scroll class="wrapper" ref="scroll" @backtopclicks="backtopclicks" :probetype="3">
      <detialswipers :imag="topimag" @detailsLoadImg="detailsLoadImg"></detialswipers>
      <detailsbaseinfo :goods="goods"></detailsbaseinfo>
      <detailsshopinfo :shops="shops" ref="shopInfo"></detailsshopinfo>
      <detailsinfo :detailsInfo="detailsInfo" @datailLoad="datailsLoad" ref="detailsInfo"></detailsinfo>
      <detailsitemparams :ItemParams="itemParams" ref="detailsitem"></detailsitemparams>
      <detailsusercomment :userSay="userSay" ref="usercomment"></detailsusercomment>
      <goods :list="recommend" ref="recommendGoods"></goods>
    </scroll>

    <backTop v-show="shownative" @click.native="backtop"></backTop>
    <detailsbottombar @addCart="addCart"></detailsbottombar>
    <!-- <toast :message="message" :time="time" :isShow="isshow"></toast> -->
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
import scroll from "components/common/scoll/Scoll";
import goods from "components/content/goods/Goods";
import backTop from "components/content/backtop/BackTop";
import toast from 'components/common/toast/Toast'

import detialswipers from "./childComps/DetialsSwiper";
import detailsbaseinfo from "./childComps/DetialsBaseInfo";
import detailsshopinfo from "./childComps/DetialsShopInfo";
import detailsinfo from "./childComps/DetialsInfo";
import detailsitemparams from "./childComps/DetailsItemParams";
import detailsusercomment from "./childComps/DetailsUserComment";
import detailsbottombar from "./childComps/DetailsBottomTabBar";

import {
  detialsSwiper,
  Goods,
  Shop,
  ItemParams,
  UserComment,
  recommend,
} from "network/detials";
import { mixins } from "common/mxin";
export default {
  name: "detials",
  data() {
    return {
      iid: null,
      banners: ['商品', '参数', '评论', '推荐'],
      currentindex: 0,
      topimag: [],
      goods: {},
      shops: {},
      detailsInfo: {},
      itemParams: {},
      userSay: {},
      recommend: [],
      offsettop: 0,
      offsettopitems: 0,
      offsettopsay: 0,
      offsettopcomment: 0,
      offsetdetailsheight: 0,
      offsetsayheight: 0,
      offsetcommentheight: 0,
      shownative: false,
      message:'',
      time:2000,
      isshow:false,
      rate:0,

    };
  },
  mixins: [mixins],
  created() {
    // //   this.iid=this.$route.params.iid;
    // //   detialsSwiper(this.iid).then(res=>{
    // //     this.topimag=res.data.result.itemInfo.topImages;
    //   })
  },
  mounted() {
    this.iid = this.$route.params.iid;
    detialsSwiper(this.iid).then((res) => {
      this.topimag = res.data.result.itemInfo.topImages;
      this.goods = new Goods(
        res.data.result.itemInfo,
        res.data.result.columns,
        res.data.result.shopInfo.services
      );
      console.log(res);
      console.log(res.data.result.services);
      this.shops = new Shop(res.data.result.shopInfo);
      this.detailsInfo = res.data.result.detailInfo;
      console.log(this.detailsInfo);
      this.itemParams = new ItemParams(
        res.data.result.itemParams.info,
        res.data.result.itemParams.rule
      );
       this.rate=res.data.result.rate.cRate 
      if (res.data.result.rate.cRate != 0) {
        this.userSay = new UserComment(res.data.result.rate.list[0]);
      }
      
    });
    recommend().then((res) => {
      this.recommend = res.data.data.list;
      console.log(res);
    });
  },
  destroyed() {
    this.$bus.$off("Goodsload", this.detailsGoods);
  },
  components: {
    navbar,
    detialswipers,
    detailsbaseinfo,
    scroll,
    detailsshopinfo,
    detailsinfo,
    detailsitemparams,
    detailsusercomment,
    goods,
    backTop,
    detailsbottombar,
    toast,
  },
  methods: {
    itemclick(index) {
      
      switch (index) {
        case 0:
          this.$refs.scroll.scollTos(0, -this.offsettop, 1);
          this.currentindex = index;
          break;
        case 1:
          this.$refs.scroll.scollTos(0, -this.offsettopitems, 1);
          this.currentindex = index;
          if(Object.keys(this.itemParams).length==0){
            this.$toast.isshow('无参数',2000)
          }
          break;
        case 2:
          this.$refs.scroll.scollTos(0, -this.offsettopsay, 1);
          this.currentindex = index;
          if(this.rate==0){
            this.$toast.isshow('无评论',2000)
          }
          break;
        case 3:
          this.$refs.scroll.scollTos(0, -this.offserropcomment, 1);
          this.currentindex = index;
          break;
      }
    },
    backclick() {
      this.$router.back();
    },
    datailsLoad() {
      this.$refs.scroll.refreshs();
      this.offsettopitems = this.$refs.detailsitem.$el.offsetTop;
      this.offsettopsay = this.$refs.usercomment.$el.offsetTop;
      this.offsettopcomment = this.$refs.recommendGoods.$el.offsetTop;
      this.offsetdetailsheight = this.$refs.detailsitem.$el.offsetHeight;
      this.offsetsayheight = this.$refs.usercomment.$el.offsetHeight;
      this.offsetcommentheight = this.$refs.recommendGoods.$el.offsetHeight;
      
    },
    detailsLoadImg() {
      this.offsettop = this.$refs.detailsInfo.$el.offsetTop;
      this.offsettopitems = this.$refs.detailsitem.$el.offsetTop;
      this.offsettopsay = this.$refs.usercomment.$el.offsetTop;
      this.offserropcomment = this.$refs.recommendGoods.$el.offsetTop;
      this.offsetdetailsheight = this.$refs.detailsitem.$el.offsetHeight;
      this.offsetsayheight = this.$refs.usercomment.$el.offsetHeight;
      this.offsetcommentheight = this.$refs.recommendGoods.$el.offsetHeight;
    },
    backtopclicks(position) {
      this.shownative = -position.y > 500;
      if (
        -position.y > this.offsettopitems &&
        -position.y < this.offsetdetailsheight + this.offsettopitems
      ) {
        this.currentindex = 1;
      } else if (
        -position.y > this.offsettopsay &&
        -position.y < this.offsettopsay + this.offsetsayheight
      ) {
        this.currentindex = 2;
      } else if (
        -position.y > this.offsettopcomment &&
        -position.y < this.offsettopcomment + this.offsetcommentheight
      ) {
        this.currentindex = 3;
      } else if (-position.y < this.offsettop) this.currentindex = 0;
    },
    backtop() {
      this.$refs.scroll.scollTos(0, 0, 500);
    },
    addCart() {
      let goodsDisurt = {
      iid:this.iid,
      descs:this.goods.desc,
      img:this.topimag[0],
      realprice :this.goods.realprice,
      count:0,
      title:this.goods.title,
      checked:true,
};
      
      console.log(goodsDisurt);
      this.$store.dispatch('addcart', goodsDisurt).then(res=>{
          // this.message=res
          // this.isshow=true
          // setTimeout(()=>{
          //  this.isshow=false
          // },2000)
          this.$toast.isshow(res,2000)
      });
      console.log(this.$store.state.goodscount);
      console.log(1);
    },
  },
};
</script>

<style  scoped>
.detials {
  /* position: relative; */
  z-index: 9;
  background-color: white;
}
.navbar {
  box-shadow: 0 1px 1px #eee;
}
.navbar-left-item {
  margin-top: 5px;
}
.nav-center-item {
  display: flex;
  text-align: center;
  font-size: 13px;
}
.nav-center-item div {
  flex: 1;
}
.active {
  color: red;
}
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  bottom: 0;
  overflow: hidden;
}
</style>
