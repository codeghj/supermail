<!--  -->
<template>
  <div class="home-swiper">
    <Swiper>
      <SwiperItem v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt @load="swiperimagload" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperimagload() {
      this.$emit("swiperimagload");
    },
  },
};
</script>

<style  scoped>
</style>
