<template>
  <div class="hello">
    <div class="image">
      <img v-bind:src="data['图片']" alt="" @click="getshow(0)">
    </div>
    <previewer :list="images" ref="previewer"></previewer>
    <div class="title">
      <h1>{{value["name"]}}</h1>
      <div class="title-text" @click="getmap(data)">
        <img src="@/assets/img/map.png" alt="">
        <em>{{value["dz"]}}</em>
      </div>
    </div>
    <div class="list">
      <h1>基本信息</h1>
      <ul>
        <li v-for="(item,index) in value.list" :key="index">{{item.name}}：{{item.value}}</li>
      </ul>
    </div>
    <div class="center">
      <em>简介</em>
      <span>{{value["jj"]}}</span>
    </div>
  </div>
</template>

<script>
import economic from '@/view/home/economic.js'
import { Previewer } from 'vux'
export default {
  mixins:[economic],
  data(){
    return{

    }
  },
  components: {
    Previewer
  },
}
</script>

<style lang="less" scoped>
@import "./economic.less";
</style>
