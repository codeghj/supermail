<!--  -->
<template>
  <div class="goods-item" @click="itemclicks" >
   <img v-lazy="showImg" alt="" @load="Goodsload" >
   <div class="goods-info"> 
       <p>{{lists.title}}</p>
       <span class="price">{{lists.price}}</span>
      <span class="collect">{{lists.cfav}}</span>
       </div>
   
  </div>
</template>

<script>
export default {
    name:'goodsitem',
  data () {
    return {
    }
  },
  props:{
      lists:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  computed: {
    showImg(){
      return this.lists.img||this.lists.image ||this.lists.show.img
    }
  },
  methods: {
    Goodsload(){
      this.$bus.$emit('Goodsload')
    },
    itemclicks(){
    this.$router.push('/detials/' +this.lists.iid)
  }
  },
  
}
</script>

<style   >
.goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/imag/common/collect.svg") 0 0/14px 14px;
  }
</style>
