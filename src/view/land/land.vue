<template>
  <div class="hello">
    <!-- <div class="header">
      <div class="nav">
        <ul>
          <li v-for="(item,$index) in nav" :key="item" @click="toggle($index)" :class="{active:$index == active}">
            <em>{{item}}</em>
            <span></span>
          </li>
        </ul>
      </div>
      <div class="picker">
        <Group class="li-picker">
          <popup-picker v-model="pickerM" :data="listM" placeholder="用地面积" @on-change="onChange"></popup-picker>
        </Group>
        <Group class="li-picker">
          <popup-picker v-model="pickerQ" :data="listQ" placeholder="用地情况" @on-change="onChange"></popup-picker>
        </Group>
      </div>
    </div> -->
    <!-- <div class="warp">
      <div class="searchTitle">
        <h1 :class="{'active':type}" @click="type = !type">用地信息匹配</h1>
        <div class="searchType" v-show="type">
          <div>
            <div class="searchTwo">
              <em>用地面积</em>
              <input type="text" v-model="warpYD.start">
              <span>亩 ~</span>
              <input type="text" v-model="warpYD.end">
              <span>亩</span>
            </div>
            <div class="pickerlist">
              <em>用地类型</em>
              <div class="pickernav">
                <span v-for="(item,index) in pickerlist" :key="index" :class="{'active':item.show}" @click="pickeractive(index)">{{item.name}}</span>
              </div>
            </div>
            <div class="searchList">
              <em>用地性质</em>
              <ul @click="getitemlist">
                <li v-for="(item,index) in warplist" :key="index">{{item}}</li>
              </ul>
            </div>
            <button @click="getPP">匹配</button>
          </div>
        </div>
      </div>
    </div> -->
    <div class="header">
      <div class="filter">
        <div class="filter-ul">
          <ul>
            <li v-for="(item,index) in value" :key="index">{{item}}</li>
          </ul>
        </div>
        <div class="filter-img"  @click="show = true">
          <img src="@/assets/img/sai.png" alt="">
          <em>筛选</em>
        </div>
      </div>
    </div>
    <div style="height:40px"></div>
    <div>
      <ul class="landList">
        <li v-for="(item,index) in addlist" :key="index" @click="getmap(item)">
          <h1>{{item['dkzl']}}</h1>
          <em>类型：{{item['lx']}}</em>
          <em>面积：{{parseInt(item['mj']).toFixed(2)}}亩</em>
          <em>用地性质：{{item['ydxz']}}</em>
          <em>所属街道：{{item['ssjd']}}</em>
        </li>
      </ul>
    </div>
    <transition name="mask">
      <div class="Mask" v-if="show" @click="show = false"></div>
    </transition>
    <transition name="filter">
      <div class="Mask-filter" v-if="show">
        <div class="Gun">
          <div class="filterpicker">
            <h1>用地类型</h1>
            <ul>
              <li :class="item.show ?'active':''" v-for="(item,index) in pickerlist" :key="index" @click="pickeractive(index)">{{item.name}}</li>
            </ul>
          </div>
          <div class="Ranges" v-for="(item,index) in Ranges" :key="index">
            <div class="range-text">
              <em>{{item.name}}</em>
              <!-- <span>{{item.min}} ~ {{item.range}} {{item.type}}</span> -->
            </div>
            <div class="range-input">
              <input type="text" placeholder="最低值（0）" v-model="item.min">
              <span>~</span>
              <input type="text" placeholder="最大值（不限）" v-model="item.max">
            </div>
            <!-- <cell primary="content" class="range">
              <range v-model="item.range" :min="item.min" :max="item.max"></range>
            </cell> -->
            <ul class="range-list">
              <li :class="value.show ?'active':''" v-for="(value,indexlist) in item.list" :key="indexlist" @click="getrangelist(index,value.name,indexlist)">{{value.name}}</li>
            </ul>
          </div>
          <div class="filterList">
            <h1>用地性质</h1>
            <ul class="type">
              <li :class="item.show ?'active':''" v-for="(item,index) in itemlist" :key="index" @click="getsearch(index)">{{item.name}}</li>
            </ul>
          </div>
          <div style="height:50px"></div>
        </div>
      </div>
    </transition>
    <transition name="filter">
      <div class="filterbutton" v-if="show">
        <em @click="getNo">重置</em>
        <em @click="gettrue">确定</em>
      </div>
    </transition>
    <!-- <div class="Mask" v-show="show">
      <ul>
        <li v-for="(item,index) in itemlist" :key="index" @click="item.show = !item.show">
          <i :class="{'active':item.show == true}"></i>
          <em>{{item.name}}</em>
        </li>
      </ul>
      <div style="height:60px"></div>
      <div class="footer">
        <button @click="getwarplist">确认</button>
      </div>
    </div> -->
    <!-- <div class="echarts" v-for="(item,index) in charts" :id="item.id" :key="index" v-show="active == 0"></div> -->
  </div>
</template>

<script>
import land from '@/view/land/land.js'
import { PopupPicker, Group, Cell, Range  } from 'vux'
export default {
  mixins:[land],
  data(){
    return{

    }
  },
  components: {
    PopupPicker,
    Group,
    Cell,
    Range,
  },
}
</script>

<style lang="less" scoped>
@import "./land.less";
</style>