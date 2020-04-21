<template>
  <div class="hello">
      <div class="header">
        <div class="nav">
          <ul>
            <li v-for="(item,$index) in nav" :key="item" @click="toggle($index)" :class="{active:$index == active}">
              <em>{{item}}</em>
              <span></span>
            </li>
          </ul>
        </div>
        <div class="navlist" v-if="active == 5">
          <ul id="nav">
            <li v-for="(item,$index) in navlist" :key="item" @click="listtoggle($index)" :class="{active:$index == listactive}">{{item}}</li>
          </ul>
        </div>
        <div class="warplist" v-if="active == 1">
          <ul id="warpnav">
            <li v-for="(item,$index) in warplist" :key="item.nav" @click="warptoggle($index,item)" :class="{active:$index == warpactive}">
              <em>{{item.nav}}</em>
              <span>({{item.value.length}})</span>
            </li>
          </ul>
        </div>
        <div class="warplist" v-if="active == 2">
          <ul id="YLactive">
            <li v-for="(item,$index) in YLnav" :key="$index" @click="YLtoggle(item,$index)" :class="{active:item == YLactive}">{{item}}</li>
          </ul>
        </div>
        <div class="search-warp"  v-if="active == 2">
          <div class="search">
            <img src="@/assets/img/search.png" alt="">
            <input type="text" placeholder="请输入名称搜索" v-model="YLvalue" >
          </div>
        </div>
        <div class="search-warp"  v-if="active == 1">
          <div class="search">
            <img src="@/assets/img/search.png" alt="">
            <input type="text" placeholder="请输入名称搜索" v-model="value" >
          </div>
        </div>
        <div class="warplist" v-if="active == 4">
          <ul id="itemnav">
            <li v-for="(item,$index) in warpnav" :key="item" @click="itemtoggle($index)" :class="{active:$index == itemactive}">{{item}}</li>
          </ul>
        </div>
        <div class="search-warp"  v-if="active == 4">
          <div class="search">
            <img src="@/assets/img/search.png" alt="">
            <input type="text" placeholder="企业名称" v-model="valueName" v-on:input="inputValue">
          </div>
        </div>
      </div>
      <div style="height:50px;" v-if="active == 3 || active == 0"></div>
      <div style="height:143px;" v-if="active == 4 || active == 1 || active == 2"></div>
      <div style="height:90px;"  v-if="active == 5 "></div>
      <div :class="['echarts',{'Bing':item.type == 5}]" v-for="(item,index) in Echarts" :key="index" v-show="item.show">
          <!-- <div :id="item.id" class="bing" v-if="item.type == 3"></div>
          <div class="binglist" v-if="item.id == 'charts15'">
            <ul>
              <li v-for="(item,index) in bing" :key="index">
                <i></i>
                <em>{{item.name}}</em>
                <span>{{item.value}}家</span>
              </li>
            </ul>
          </div> -->
          <div :id="item.id" class="chart"></div>
      </div>
      <div class="warp" v-if="active == 1">
        <ul class="warp-list">
          <li v-for="(item,index) in warplist[warpactive].value" :key="index" @click="geteconomic(item)" v-show="value == '' || item.name.includes(value)">
            <img v-bind:src="baseImage+'/icon/tsjjImg/'+item['name']+'.png'" alt="" class="phone" :onerror="errorImg">
            <div>
              <em>{{item.name}}</em>
              <h1>{{item.ssjd}}</h1>
              <span>简介：{{item.jj}}</span>
            </div>
            <img src="@/assets/img/right.png" alt="" class="right">
          </li>
        </ul>
      </div>
      <div class="warp" v-if="active == 2">
        <ul class="warp-list">
          <li v-for="(item,index) in YLlist" :key="index" @click="getYL(item)" v-show="(YLvalue == '' || item['名称'].includes(YLvalue)) && item['类型'] == YLactive">
            <img v-bind:src="baseImage+'/icon/travel/'+item['名称']+'.jpg'" alt="" class="phone" :onerror="errorImg">
            <div>
              <em>{{item['名称']}}</em>
              <h1>{{item['类型']}}</h1>
              <span>简介：{{item['简介']}}</span>
            </div>
            <img src="@/assets/img/right.png" alt="" class="right">
          </li>
        </ul>
      </div>
      <div class="warp" v-if="active == 3">
        <ul class="warp-list street">
          <li v-for="(item,index) in addlist" :key="index" @click="getstreet(item)">
            <img :src="baseImage+'/icon/streetImg/'+item.name+'.png'" alt="" class="phone" :onerror="errorImg">
            <div>
              <em>{{item.name}}</em>
              <h1>{{item.intro}}</h1>
            </div>
            <img src="@/assets/img/right.png" alt="" class="right">
          </li>
        </ul>
      </div>
      <div v-if="active == 4">
        <h1 class="TS">2018年度优质企业（企业排名不分先后）</h1>
        <ul class="List">
          <li v-for="(item,index) in List" :key="index" @click="getdetail(item)">
            <em>{{index + 1}}</em>
            <div :class="{active:itemactive == 1}">
              <h1 v-if="itemactive == 1">{{item['详细情况1']}}</h1>
              <span>{{item['企业名称']}}</span>
            </div>
            <img src="@/assets/img/right.png" alt="">
          </li>
        </ul>
      </div>
      <iframe id="map" :style="{height:(screenHeight-110)+'px'}"  @load="getmap" src="https://lysb.lucheng.gov.cn/around/index.html#/layout" frameborder="0" v-if="active == 0"></iframe>
      <!-- <img src="@/assets/img/enterprise.png" style="width:100%;height:auto;" v-if="active == 4"> -->
  </div>
</template>

<script>
import home from '@/view/home/home.js'
export default {
  mixins:[home],
  data(){
    return{

    }
  },
  components: {
    
  },
}
</script>

<style lang="less" scoped>
@import "./home.less";
</style>
