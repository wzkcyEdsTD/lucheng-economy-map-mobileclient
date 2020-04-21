<template>
  <div class="hello">
    <div class="image">
      <img v-bind:src="this.baseImage+'/icon/canvassImg/canvass_'+data['页码']+'.jpg'" alt />
    </div>
    <div class="title">
      <h1 @click="getmap('polygon','u_zsdkm',data['项目名称'])">
        {{data['项目名称']}}
        <img src="@/assets/img/maps.png" alt />
      </h1>
      <h1>{{data['项目英文']}}</h1>
      <div>
        <em>负责人：{{data['科室负责人']}}</em>
      </div>
      <div>
        <em>联系电话：{{data['科室负责人电话']}}</em>
        <a :href="'tel:'+data['科室负责人电话']">
          <img src="@/assets/img/phone.png" alt class="tel" />
        </a>
      </div>
    </div>
    <div class="center" v-for="(item,index) in data.list" :key="index">
      <div>
        <em>{{item["目录"]}}</em>
        <span>{{item['内容'].split('@@')[0]}}</span>
        <span style="color:rgba(112, 57, 15, 1)">{{item['内容'].split('@@')[1]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import investmentdetail from "@/view/investment/investmentdetail.js";

export default {
  mixins: [investmentdetail],
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less" scoped>
@import "./investmentdetail.less";
</style>
