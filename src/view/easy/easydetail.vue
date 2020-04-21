<template>
  <div class="hello">
    <div v-if="ID == 2">
      <div class="image">
        <img v-bind:src="this.baseImage+'/icon/canvassImg/canvass_'+data['编号']+'.jpg'" alt="">
      </div>
      <div class="title">
        <h1>{{data['项目名称']}}</h1>
        <div>
          <em>联系电话：{{data['联系电话']}}</em>
          <a :href="'tel:'+data['联系电话']">
            <img src="@/assets/img/phone.png" alt="" class="tel">
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
    <div v-else>
      <div class="specific-top">
        <img :src="baseImage+'/icon/tsjjImg/'+data['楼宇名称']+'.png'"  alt="" class="banner">
      </div>
      <div class="title">
        <div class="title-top">
          <h1>{{data["楼宇名称"]}}</h1>
          <a :href="'tel:'+data['联系方式']">
            <img src="@/assets/img/phone.png" alt="">
          </a>
        </div>
        <div class="title-item"><em>产业定位</em><i>{{data["产业定位"]}}</i></div>
        <div class="title-item"><em>业主单位</em><i>{{data["业主单位"]}}</i></div>
        <div class="title-item"><em>属地街道</em><i>{{data["属地街道"]}}</i></div>
        <div class="title-item"><em>物业公司</em><i>{{data["物业公司名称"]}}</i></div>
        <div class="title-item"><em>楼宇地址</em><i>{{data["地址"]}}</i></div>
      </div>
      <div class="item-title">
        <em>楼宇经济分析</em>
        <!-- <span @click="getjoin(data['楼宇名称'],2)">闲置详情</span>
        <span @click="getjoin(data['楼宇名称'],0)">入驻详情</span> -->
      </div>
      <ul class="item-list">
        <li v-for="(item,index) in list" :key="index">
          <em class="top">{{item.title}}</em>
          <h1>{{item.value}}</h1>
          <em>{{item.text}}</em>
        </li>
      </ul>
      <div class="echarts">
        <div class="bing" id="echarts"></div>
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
  </div>
</template>

<script>
import specific from '@/view/building/specific.js'

export default {
  mixins:[specific],
  data(){
    return{
      ID:0,
      list:[],
      warp:[],
      data:{},
      bing:[],
      name:'',
      List:[],
      namelist:[]
    }
  },
  created(){
    this.name = JSON.parse(localStorage['Listitem'])
    this.ID = this.$route.query.id
  },
  mounted(){
    if(this.ID == 1){
      this.lyxx()
      this.lcxx()
      this.getitem()
    }
  },
  methods:{

  },
  components: {

  },
}
</script>

<style lang="less" scoped>
@import "../../view/investment/investmentdetail.less";
@import "../../view/building/specific.less";
</style>
