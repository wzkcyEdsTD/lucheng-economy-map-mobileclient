<template>
  <div class="hello">
    <!-- <div class="header">
      <div class="picker">
        <Group class="li-picker">
          <popup-picker v-model="pickerM"
                        :data="listM"
                        placeholder="总面积"
                        @on-change="onChange"></popup-picker>
        </Group>
        <Group class="li-picker">
          <popup-picker v-model="pickerQ"
                        :data="listQ"
                        placeholder="租金范围"></popup-picker>
        </Group>
        <Group class="li-picker">
          <popup-picker v-model="pickerD"
                        :data="listD"
                        placeholder="所属区域"
                        @on-change="onChange"></popup-picker>
        </Group>
      </div>
    </div> -->
    <!-- <div class="warp">
      <div class="searchTitle">
        <h1 :class="{'active':type}" @click="type = !type">楼宇信息匹配</h1>
        <div class="searchType" v-show="type">
          <div>
            <div class="searchTwo">
              <em>闲置面积</em>
              <input type="text" v-model="warpLY.areas">
              <span>~</span>
              <input type="text" v-model="warpLY.areae">
              <span>m²</span>
            </div>
            <div class="searchTwo">
              <em>月租金</em>
              <input type="text" v-model="warpLY.rents">
              <span>~</span>
              <input type="text" v-model="warpLY.rente">
              <span>元/m²</span>
            </div>
            <div class="searchTwo">
              <em>物业费</em>
              <input type="text" v-model="warpLY.wyrents">
              <span>~</span>
              <input type="text" v-model="warpLY.wyrente">
              <span>元/m²</span>
            </div>
            <div class="picker">
              <em>所属街道</em>
              <i @click="getitemlist">{{street}}</i>
              <Group class="li-picker">
                <popup-picker v-model="street" :data="streetlist" @on-change="onChange"></popup-picker>
              </Group>
            </div>
            <button @click="getPP">匹配</button>
          </div>
        </div>
      </div>
      <ul class="warp-list">
        <li v-for="(item,index) in list" :key="index" @click="getdateil(item)">
          <em v-if="ID == 0">{{item["项目名称"]}}</em>
          <em v-else>{{item["楼宇名称"]}}</em>
          <img src="@/assets/img/right.png" alt="">
        </li>
      </ul>
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
    <div style="height:45px"></div>
    <ul class="building">
      <li v-for="(item,index) in data"
          :key="index"
          @click="getspecific(item)">
        <div class="building-img">
          <img :src="baseImage+'/icon/tsjjImg/'+item.name+'.png'" :onerror="errorImg">
        </div>
        <div class="building-title">
          <h1>{{item.name}}</h1>
          <em>{{item.wygs}}</em>
          <div class="title-span">
            <span>月租：{{item.rent}}/M²</span>
            <span>{{warpLY.status ? "闲置数" : "房间数"}}:{{item.list.length}}</span>
          </div>
        </div>
        <!-- <div class="building-text">
          <h1>{{item["楼宇名称"]}}</h1>
          <em>{{item["物业公司名称"]}}</em>
          <div>
            <img src="@/assets/img/map.png"
                 alt="">
            <em>{{item["地址"]}}</em>
          </div>
        </div>
        <div class="building-span">
          <div>
            <em>{{item["租金（元/平方米/月）"]}}</em>
            <i>元/㎡</i>
          </div>
          <span>入驻企业数{{item["入驻企业数"]}}</span>
        </div> -->
      </li>
    </ul>
    <!-- <div class="Mask" v-show="show">
      <ul>
        <li v-for="(item,index) in streetlist" :key="index" @click="getstreet(item.name)">
          <i :class="{'active':item.show == true}"></i>
          <em>{{item.name}}</em>
        </li>
      </ul>
      <div style="height:60px"></div>
      <div class="footer">
        <button @click="getwarplist">确认</button>
      </div>
    </div> -->
    <transition name="mask">
      <div class="Mask" v-if="show" @click="show = false"></div>
    </transition>
    <transition name="filter">
      <div class="Mask-filter" v-if="show">
        <div class="Gun">
          <div class="Ranges" v-for="(item,index) in Ranges" :key="index">
            <div class="range-text">
              <em>{{item.name}}</em>
              <!-- <span>{{item.min}} ~ {{item.range}} {{item.type}}</span> -->
            </div>
            <!-- <cell primary="content" class="range">
              <range v-model="item.range" :min="item.min" :max="item.max"></range>
            </cell> -->
            <div class="range-input">
              <input type="text" placeholder="最低值（0）" v-model="item.min">
              <span>~</span>
              <input type="text" placeholder="最大值（不限）" v-model="item.max">
            </div>
            <ul class="range-list">
              <li :class="value.show ?'active':''" v-for="(value,indexlist) in item.list" :key="indexlist" @click="getrangelist(index,value.name,indexlist)">{{value.name}}</li>
            </ul>
          </div>
          <div class="filterList">
            <h1>所属街道</h1>
            <ul>
              <li :class="item.show ?'active':''" v-for="(item,index) in streetlist" :key="index" @click="getsearch(index)">{{item.name}}</li>
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
  </div>
</template>

<script>
import { PopupPicker, Group, Cell ,Range} from 'vux'
import building from '@/view/building/building.js'
// import { Range } from 'mint-ui'

export default {
  mixins: [building],
  data () {
    return {

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
@import "./building.less";
</style>
