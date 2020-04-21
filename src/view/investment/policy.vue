<template>
  <div class="hello">
    <h1 class="title">{{data['标题']}}</h1>
    <div v-html="data['内容']"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:{}
    }
  },
  created(){
    this.data = JSON.parse(localStorage['Listitem'])
    console.log(this.data)
  },
}
</script>

<style lang="less" scoped>
  .hello{
    background-color: #fff;
    width: 100%;
    overflow: hidden;
    .title{
      color: #000;
      text-align: center;
      font-size: 2rem;
      line-height: 35px;
      padding-top: 15px;
      font-weight: 700;
    }
    div{
      color: #666;
      padding: 0 12px;
    }
  }
</style>