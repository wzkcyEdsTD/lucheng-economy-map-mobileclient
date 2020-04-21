<template>
  <div class="hello">
    <div class="title">
      <h1>{{data["地址"]}}</h1>
      <div class="title-text" @click="getmap(data)">
        <img src="@/assets/img/map.png" alt />
        <em>查看定位</em>
      </div>
    </div>
    <div class="list">
      <h1>基本信息</h1>
      <ul>
        <li>房屋面积：{{data['面积']}}㎡</li>
        <li>房屋状态：{{data['房屋状态']}}</li>
        <li>房屋用途：{{data['房屋用途']}}</li>
        <li>权属单位：{{data['权属单位']}}</li>
      </ul>
    </div>
    <div class="center">
      <em>备注</em>
      <span>{{data["备注"] || '无'}}</span>
    </div>
  </div>
</template>

<script>
import lcgf from "@/view/investment/lcgf.js";
export default {
  mixins: [lcgf],
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "./lcgf.less";
</style>
