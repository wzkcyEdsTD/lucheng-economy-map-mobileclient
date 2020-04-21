<template>
  <div class="holle">
    <div class="top">
      <img src="@/assets/img/left.png" alt="" @click="$router.go(-1)">
      <em>{{data.name}}</em>
    </div>
    <iframe id="vr" :src="data.vr" frameborder="0" :style="{height:(screenHeight-45)+'px'}"></iframe>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:{},
      screenHeight: document.documentElement.clientHeight,
    }
  },
  created(){
    this.data = JSON.parse(localStorage['Listitem'])
    console.log(this.data)
  },
}
</script>

<style lang="less" scoped>
.top{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  em{
    color: #333;
    font-size: 1.6rem;
    flex: 1;
    text-align: center;
    margin-right: 35px;
    line-height: 45px;
  }
  img{
    width: 25px;
    height: 25px;
    margin:  5px ;
  }
}
#vr{
  width: 100%;
}
</style>