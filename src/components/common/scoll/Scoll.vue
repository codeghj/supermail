<!--  -->
<template>
  <div class="wrapper" ref="wrappers">
     <div class="content">
         <slot></slot>
     </div>
  </div>
</template>

<script>
import betterscoll from 'better-scroll'
export default {
    name:"Scoll",
    mounted() {
        this.scroll=new betterscoll(this.$refs.wrappers,{
            click:true,
            probeType:this.probetype,
            pullUpLoad:this.pullUpLoad
        });
        this.scroll.on('scroll',(position)=>{
           
            this.$emit('backtopclicks',position)
            // console.log(position)
            
            
        })
        this.scroll.on('pullingUp',()=>{
        this.$emit('updateup')
        })
         this.scroll.scrollTo(0,0)

    },
    props:{
        probetype:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
  data () {
    return {
        scroll:null,
    }
  },
  methods: {
      scollTos(x , y,time){
          this.scroll&&this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
          this.scroll&&this.scroll.finishPullUp()
      },
      refreshs(){
          this.scroll&&this.scroll.refresh();
      }
  },
}
</script>

<style  scoped>

</style>
