<template>
  <div class="scroll" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BSscroll from 'better-scroll';
  export default {
    name: "scroll",
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      pullup: {
        type: Boolean,
        default: false
      },
      beforeScroll: {
        type: Boolean,
        default: false
      },
      refreshDelay:{
        type:Number,
        default:20
      },
      scrollX:{
        type:Boolean,
        default:false
      },
      scrollY:{
        type:Boolean,
        default:true
      },
      bounce:{
        type:Object,
        default:function () {
          return {
            top:false
          }
        }
      }
    },
    mounted() {
      setTimeout(()=>{
        this._initScroll()
      },20)
    },
    methods:{
      _initScroll(){
        if (!this.$refs.wrapper){
          return
        }
        this.scroll = new BSscroll(this.$refs.wrapper,{
          probeType: this.probeType,
          click: this.click,
          scrollX:this.scrollX,
          scrollY:true,
          bounce:this.bounce
        });
        if (this.listenScroll){
          let me = this;
          this.scroll.on('scroll',(pos)=>{
            me.$emit('scroll',pos)
          })
        }
        if (this.pullup){
          this.scroll.on('scrollEnd',()=>{ // 监听滚动停止事件
            if (this.scroll.y<=(this.scroll.maxScrollY+50)){
              this.$emit('scrollToEnd') // 触发滚动事件
            }
          })
        }
        if (this.beforeScroll){
          this.scroll.on('beforeScrollStart',()=>{
            this.$emit('beforeScroll')
          })
        }
      },
      enable(){
        this.scroll&&this.scroll.enable() // 启用better-scroll默认开启
      },
      disable(){
        this.scroll&&this.scroll.disable() // 禁用better-scroll
      },
      refresh(){
        this.scroll&&this.scroll.refresh()
      },
      scrollTo() {
        this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)
      },
      scrollToElement(){
        this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)
      }
    },
    watch:{
      data(){
        setTimeout(()=>{
          this.refresh()
        },this.refreshDelay)
      }
    }
  }
</script>

<style scoped>

</style>
