<template>
  <div class="hello">
      <div class="image">
        <img :src="this.baseImage+'/icon/streetImg/'+data.name+'.png'" alt="" class="img404" @click="getimgshow(0)">
      </div>
      <previewer :list="imgs" ref="previewerimgs"></previewer>
      <div class="span">
        <h1>{{data.name}}</h1>
        <i>简介</i>
        <span :class="{active:span}">{{data.intro}}</span>
        <em @click="span = false" v-if="span">详情</em>
        <em @click="span = true" v-else class="shang">收起</em>
      </div>
      <div class="list">
          <h1>街道概况</h1>
          <ul class="textul">
            <li><em>总面积</em><i>{{data.area}}km²</i></li>
            <li><em>户籍人口数</em><i>{{data.hjs}}人</i></li>
            <li><em>户籍数</em><i>{{data.census}}户</i></li>
            <li><em>社区/村</em><i>{{data.communities}}个</i></li>
            <li><em>企业</em><i>{{data.companies}}个</i></li>
            <li><em>规上企业</em><i>{{data.gsqys}}个</i></li>
          </ul>
      </div>
      <div class="list">
          <h1>特色项目</h1>
          <h2>{{data.project}}</h2>
          <ul class="imgul">
            <li v-for="(item,index) in images" :key="index" @click="getshow(index)"><img :src="item.src" alt=""></li>
          </ul>
          <previewer :list="images" ref="previewer"></previewer>
          <ul class="spanul">
            <li><em>总投资 : </em>
              <i class="type" v-if="data.ztz == '0.0' || data.ztz == ''">-</i>
              <i class="type" v-else>{{data.ztz}}亿人民币</i>
            </li>
            <li><em>用地面积 : </em>
              <i class="type" v-if="data.zydmj == '0.0' || data.zydmj == ''">-</i>
              <i class="type" v-else>{{data.zydmj}}km²</i>
            </li>
            <li><em>年税收 : </em>
              <i class="type" v-if="data.nss == '0.0' || data.nss == ''">-</i>
              <i class="type" v-else>{{data.nss}}亿人民币</i>
            </li>
            <li><em>竣工时间 : </em>
              <i class="type" v-if="data.jgsj == '0.0' || data.jgsj == ''">-</i>
              <i class="type" v-else>{{data.jgsj}}</i>
            </li>
          </ul>
          <!-- <div class="list-text">
            <em>项目概况：</em>
            <span :class="{active:JJ}">{{data.jj}}</span>
            <i @click="JJ = false" v-if="JJ">详情</i>
            <i @click="JJ = true" v-else>收起</i>
          </div> -->
      </div>
      <!-- <div class="echarts" v-for="(item,index) in charts" :id="item.id" :key="index"></div> -->
  </div>
</template>

<script>
import street from '@/view/home/street.js'
import { Previewer } from 'vux'
export default {
  mixins:[street],
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
@import "./street.less";
</style>
