<template>
  <div class="hello">
    <swiper :options="swiperOption">
    　　<swiper-slide class="imglist" :style="{height:screenHeight+'px'}" v-for="(item,index) in imglist" :key="index">
          <img :src="item.img" alt="">
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>

export default {
  data(){
    return{
      swiperOption: {
          effect : 'coverflow',
      　　pagination: {
      　　　　el: '.swiper-pagination',
      　　},
      },
      screenHeight: document.documentElement.clientHeight,
      imglist:[],
    }
  },
  mounted(){
    for(var i = 2;i<69;i++){
      this.imglist.push({img:require("@/assets/img/"+i+".png")})
    }
  },
}

</script>

<style lang="less" scoped>
@import "../../view/investment/investment.less";
</style>