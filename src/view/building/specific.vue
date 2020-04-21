<template>
  <div class="hello">
    <div class="specific-top">
      <img :src="baseImage+'/icon/tsjjImg/'+data['楼宇名称']+'.png'" alt class="banner" />
    </div>
    <div class="title">
      <div class="title-top">
        <h1>{{data["楼宇名称"]}}</h1>
        <span>{{data['联系方式']}}</span>
        <a :href="'tel:'+data['联系方式']">
          <img src="@/assets/img/phone.png" alt />
        </a>
      </div>
      <div class="title-item">
        <em>产业定位</em>
        <i>{{data["产业定位"]}}</i>
      </div>
      <div class="title-item">
        <em>业主单位</em>
        <i>{{data["业主单位"]}}</i>
      </div>
      <div class="title-item">
        <em>属地街道</em>
        <i>{{data["属地街道"]}}</i>
      </div>
      <div class="title-item">
        <em>物业公司</em>
        <i>{{data["物业公司名称"]}}</i>
      </div>
      <div class="title-item">
        <em>楼宇地址</em>
        <i>{{data["地址"]}}</i>
        <img @click="getmap('point','u_zdly',data['楼宇名称'])" src="@/assets/img/maps.png" alt />
      </div>
    </div>
    <div class="item-title">
      <em>楼宇经济分析</em>
      <span @click="getjoin(data['楼宇名称'],'2')">闲置详情</span>
      <span @click="getjoin(data['楼宇名称'],'0')">入驻详情</span>
    </div>
    <ul class="item-list">
      <li v-for="(item,index) in list" :key="index">
        <em class="top">{{item.title}}</em>
        <h1>{{(item.value && index == 5) ? parseInt(item.value).toFixed(1):item.value}}</h1>
        <em>{{item.text}}</em>
      </li>
    </ul>
    <div class="echarts">
      <div class="bing" id="echarts"></div>
      <div class="chartsForceLabel" :style="{color:chartsForceLabel.color}">
        {{chartsForceLabel.name}}
        <br />
        {{chartsForceLabel.data.value}}家 ({{chartsForceLabel.percent}}%)
      </div>
    </div>
    <div class="item-title type">
      <em>楼宇周边配套设施分析</em>
      <span @click="getmap('point','u_zdly',data['楼宇名称'])">地图定位</span>
    </div>
    <ul class="item-warp">
      <li v-for="(item,index) in warp" :key="index">
        <i></i>
        <div>
          <em>{{item.name}}</em>
          <span>{{item.title}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import specific from "@/view/building/specific.js";

export default {
  mixins: [specific],
  created() {
    this.name = JSON.parse(localStorage["Listitem"]);
    this.lyxx();
    this.lcxx();
  },
  mounted() {
    this.getitem();
  }
};
</script>

<style lang="less" scoped>
@import "./specific.less";
</style>
