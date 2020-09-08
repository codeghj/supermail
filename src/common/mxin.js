export const mixins={
    data() {
        return {
            loadGoods:null
        }
    },
    mounted() {
       
        this.loadGoods=()=>{
            this.$refs.scroll.refreshs()
          }
     this.$bus.$on('Goodsload',this.loadGoods)
    },
}