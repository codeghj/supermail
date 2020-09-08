<!--  -->
<template>
  <div class="fenlei">
    <navbar class="navbar">
      <div slot="center">商品分类</div>
    </navbar>
    <tabcontrol
      :title="controltitle"
      @tabbaritem="tabbaritem"
      class="tabcontrols"
      ref="tabcontrols"
      v-show="isactive"
    ></tabcontrol>
    <div class="content">
      <scroll class="wrapp-menu">
        <categorymenu :menudata="category" @changetype="changetype"></categorymenu>
      </scroll>
      <scroll class="wrapp-content" ref="scroll" @backtopclicks="backtopclicks" :probetype="3">
        <div>
          <categorycontent :categorycontent="subcategory[currentType].list"></categorycontent>
          <tabcontrol
            :title="controltitle"
            @tabbaritem="tabbaritem"
            class="tabcontrol"
            ref="tabcontrol"
          ></tabcontrol>
          <goods :list="controlitem"></goods>
        </div>
      </scroll>
    </div>
    <backtop @click.native="backtopclick" v-show="active"></backtop>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
import tabcontrol from "components/content/tabcontrol/TabControl";
import goods from "components/content/goods/Goods";
import scroll from "components/common/scoll/Scoll";
import backtop from "components/content/backtop/BackTop";

import categorymenu from "./childCompos/CategoryMenu";
import categorycontent from "./childCompos/CategoryContent";

import {
  getfenlei,
  getsubcategory,
  getsubcategorydetails,
} from "network/fenlei";

import { mixins } from "common/mxin";
export default {
  name: "fenlei",
  created() {
    this.getcategory();
    setTimeout(() => {
      this.getminiWallkey();
      this.getmaitkey();
      this.getdetails();
      this.getsub("nowpop");
      this.getsub("sy");
      this.getsub("kz");
      this.getsub("qz");
      this.getsub("ny");
      this.getsub("nx");
      this.getsub("bf");
      this.getsub("bb");
      this.getsub("yd");
      this.getsub("ps");
      this.getsub("mz");
      this.getsub("gh");
      this.getsub("jj");
      this.getsub("bh");
      this.getsub("my");
      this.getsub("sp");
    }, 500);
  },
  mounted() {
    this.$bus.$on("contentimgload", () => {
      this.offsettoptabcontrol = this.$refs.tabcontrol.$el.offsetTop;
    });
  },
  updated() {},
  mixins: [mixins],
  data() {
    return {
      category: [],
      subcategory: {
        nowpop: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        sy: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        kz: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        qz: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        ny: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        nx: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        bf: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        bb: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        yd: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        ps: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        mz: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        gh: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        jj: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        bh: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        my: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
        sp: { maitkey: 0, list: [], miniWallkey: 0, goods: [] },
      },
      currentType: "nowpop",
      currentindex: "pop",
      controltitle: ["综合", "新品", "销量"],
      miniWallkey: [],
      count: 0,
      controlitem: [],
      goodlength: 0,
      position: 0,
      active: false,
      isactive: false,
      offsettoptabcontrol: 0,
      counts: 0,
      maitkey: [],
    };
  },
  components: {
    navbar,
    categorymenu,
    categorycontent,
    tabcontrol,
    goods,
    scroll,
    backtop,
  },
  methods: {
    getsub(type) {
      getsubcategory(this.subcategory[type].maitkey).then((res) => {
        this.subcategory[type].list.push(...res.data.data.list);
      });
    },

    getcategory() {
      getfenlei().then((res) => {
        this.category.push(...res.data.data.category.list);
      });
    },
    tabbaritem(index) {
      switch (index) {
        case 0:
          this.currentindex = "pop";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.tabcontrol.isactive = index;
          this.$refs.tabcontrols.isactive = index;
          break;
        case 1:
          this.currentindex = "new";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.tabcontrol.isactive = index;
          this.$refs.tabcontrols.isactive = index;
          break;
        case 2:
          this.currentindex = "sell";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.tabcontrol.isactive = index;
          this.$refs.tabcontrols.isactive = index;
          break;
      }
    },
    getdetails() {
      getsubcategorydetails(
        this.subcategory[this.currentType].miniWallkey,
        this.currentindex
      ).then((res) => {
        this.goodlength = res.data.length;
        this.controlitem.push(...res.data);
      });
    },
    changetype(index) {
      switch (index) {
        case 0:
          this.currentType = "nowpop";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 1:
          this.currentType = "sy";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          console.log(this.controlitem.length);
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 2:
          this.currentType = "kz";
          this.controlitem.splice(0, this.goodlength);

          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 3:
          this.currentType = "qz";
          this.controlitem.splice(0, this.goodlength);

          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 4:
          this.currentType = "ny";
          this.controlitem.splice(0, this.goodlength);

          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 5:
          this.currentType = "nx";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 6:
          this.currentType = "bf";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 7:
          this.currentType = "bb";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 8:
          this.currentType = "yd";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 9:
          this.currentType = "ps";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 10:
          this.currentType = "mz";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 11:
          this.currentType = "gh";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 12:
          this.currentType = "jj";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 13:
          this.currentType = "bh";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 14:
          this.currentType = "my";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
        case 15:
          this.currentType = "sp";
          this.controlitem.splice(0, this.goodlength);
          this.getdetails();
          this.$refs.scroll.scollTos(0, this.position, 100);
          break;
      }
    },
    getminiWallkey() {
      for (let item of this.category) {
        this.miniWallkey.push(item.miniWallkey);
      }
      for (let item of Object.keys(this.subcategory)) {
        if (this.count < this.miniWallkey.length) {
          this.subcategory[item].miniWallkey = this.miniWallkey[this.count];
          this.count += 1;
        }
      }
    },
    backtopclicks(position) {
      this.position = position;
      this.active = position.y > -500 ? false : true;
      this.isactive = -position.y > this.offsettoptabcontrol ? true : false;
    },
    backtopclick() {
      this.$refs.scroll.scollTos(0, 0, 1000);
    },
    getmaitkey() {
      for (let item of this.category) {
        this.maitkey.push(item.maitKey);
      }
      for (let item of Object.keys(this.subcategory)) {
        if (this.counts < this.maitkey.length) {
          this.subcategory[item].maitkey = this.maitkey[this.counts];
          this.counts += 1;
        }
      }
    },
  },
  deactivated() {},
  computed: {},
};
</script>

<style  scoped>
.fenlei {
  position: absolute;
  top: 0;
  bottom: 49px;
  left: 0;
  right: 0;
}
.navbar {
  background-color: #ff5777;
  color: #fff;
}
.content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
}
.wrapp-menu,
.wrapp-content {
  position: absolute;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.wrapp-content {
  left: 100px;
}
.tabcontrols {
  position: relative;
  z-index: 999;
  margin-top: 0px;
  width: 73%;
  float: right;
}
</style>
