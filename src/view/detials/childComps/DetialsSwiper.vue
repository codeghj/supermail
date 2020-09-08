<!--  -->
<template>
  <div>
    <Swiper class="lunbo">
        <SwiperItem v-for="item in imag">
            <img :src="item" alt="" @load="detailsLoadImg">
        </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
    name:"DetialsSwiper",
  data () {
    return {
       
        }
    },
  props:{
       imag:{
            type:Array,
            default(){
                return []
            }
       }
  },
  components:{
      Swiper, 
      SwiperItem,
  },
  methods: {
    detailsLoadImg(){
      this.$emit('detailsLoadImg')
    }
  },
}
</script>

<style  scoped>
.lunbo{
    height: 300px;
}
</style>
