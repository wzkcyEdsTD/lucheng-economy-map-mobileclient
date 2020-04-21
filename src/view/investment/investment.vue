<template>
  <div class="hello">
    <div class="header">
      <div class="nav">
        <ul>
          <li
            v-for="(item,$index) in nav"
            :key="item"
            @click="toggle($index)"
            :class="{active:$index == active}"
          >
            <em>{{item}}</em>
            <span></span>
          </li>
        </ul>
      </div>
      <div class="listnav" v-if="active == 1">
        <ul>
          <li
            v-for="(item,index) in VRlist"
            :key="index"
            :class="{'active':index == VR}"
            @click="VR = index"
          >{{item}}</li>
        </ul>
      </div>
      <div class="filter" v-if="active == 1 && VR == 1">
        <div class="filter-ul">
          <ul>
            <li v-for="(item,index) in value" :key="index">{{item}}</li>
          </ul>
        </div>
        <div class="filter-img" @click="show = true">
          <img src="@/assets/img/sai.png" alt />
          <em>筛选</em>
        </div>
      </div>
    </div>
    <div style="height:130px" v-if="active == 1 && VR == 1"></div>
    <div style="height:90px" v-else-if="active == 1&& VR != 1"></div>
    <div style="height:50px" v-else></div>
    <div class="warp" v-if="active == 0">
      <div class="itemWarp">
        <h1>招商简介</h1>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鹿城区
          <i>东临龙湾，西近丽水，南接瓯海，北靠瓯江</i>。是温州市政府的所在地、温州市
          <i>政治经济文化中心</i>和温州市发展
          <i>核心区域</i>。
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全区陆地面积
          <i>292.72</i>平方千米，常住人口
          <i>130</i>万左右，下辖2镇12街道。城市依“
          <i>通五行之水、连五斗之山、凿二十八井</i>”而建，“
          <i>山水林田湖岛</i>”生态本底一应俱全，至今保留山水斗城格局。
        </span>
      </div>
      <div class="itemWarp">
        <h1>招商视频</h1>
        <video
          muted="muted"
          id="video"
          src="https://lysb.lucheng.gov.cn/s/lc/icon/canvassImg/book/lc.mp4"
          autoplay="autoplay"
          controls="controls"
          loop="loop"
        ></video>
      </div>
      <div class="traffic">
        <h1>区域优势</h1>
        <ul>
          <li v-for="(item,index) in trafficList" :key="index">
            <i :class="gettrafficType(item['类型'])"></i>
            <em>{{item['类型']}}：{{item['详情']}}</em>
          </li>
        </ul>
      </div>
      <div class="itemTel">
        <h1>联系我们</h1>

        <a href="tel:">
          <i>0577-88030503</i>
          <img src="@/assets/img/phone.png" alt />
        </a>
      </div>
    </div>
    <div v-if="active == 2">
      <ul class="textList">
        <li v-for="(item,index) in text" :key="index">
          <em @click="getpolicy(item)">{{item['标题']}}</em>
        </li>
      </ul>
    </div>
    <div v-if="active == 1">
      <div class="investmentList">
        <div v-if="VR == 1">
          <ul class="warp-list">
            <li v-for="(item,index) in list" :key="index" @click="getdateil(item)">
              <img
                :src="baseImage+'/icon/tsjjImg/'+item.name+'.png'"
                alt
                class="list-img"
                v-if="ID == 1"
                :onerror="errorImg"
              />
              <img
                :src="baseImage+'/icon/canvassImg/canvass_'+item['页码']+'.jpg'"
                alt
                class="list-img"
                v-if="ID == 2"
                :onerror="errorImg"
              />
              <div>
                <em v-if="ID == 2">{{item['项目名称']}}</em>
                <em v-else-if="ID == 0">{{item['dkzl']}}</em>
                <em v-else-if="ID == 1">{{item.name}}</em>
                <em v-else>房屋地址：{{item['地址']}}</em>
                <span v-if="ID == 2" style="color: rgb(112, 57, 15);">{{item.项目英文}}</span>
                <span v-else-if="ID == 3">房屋状态：{{item['房屋状态']}}</span>
                <span v-else>{{item.ssjd}}</span>
              </div>
              <img src="@/assets/img/right.png" alt class="list-right" />
            </li>
          </ul>
        </div>
        <div v-if="VR == 2">
          <ul class="vrlist">
            <li v-for="(item,index) in VRwarp" :key="index" @click="getVR(item)">{{item.name}}</li>
          </ul>
        </div>
        <div v-if="VR == 0">
          <iframe
            id="map"
            :style="{height:(screenHeight-150)+'px'}"
            @load="getmap"
            src="https://lysb.lucheng.gov.cn/around/index.html#/polymerization"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
    <transition name="mask">
      <div class="Mask" v-if="show" @click="show = false"></div>
    </transition>
    <transition name="filter">
      <div class="Mask-filter" v-if="show">
        <div class="Gun">
          <div class="filterpicker">
            <h1>匹配类型</h1>
            <ul>
              <li
                :class="{'active':index == picker}"
                v-for="(item,index) in pickerlist"
                :key="index"
                @click="getRanges(index)"
              >{{item}}</li>
            </ul>
          </div>
          <div class="filterpicker" v-if="picker == 0">
            <h1>用地类型</h1>
            <ul>
              <li
                :class="item.show ?'active':''"
                v-for="(item,index) in TTlist"
                :key="index"
                @click="pickeractive(index)"
              >{{item.name}}</li>
            </ul>
          </div>
          <div class="Ranges" v-for="(item,index) in Ranges" :key="index">
            <div class="range-text">
              <em>{{item.name}}</em>
            </div>
            <div class="range-input">
              <input type="text" placeholder="最低值（0）" v-model="item.min" />
              <span>~</span>
              <input type="text" placeholder="最大值（不限）" v-model="item.max" />
            </div>
            <ul class="range-list">
              <li
                :class="value.show ?'active':''"
                v-for="(value,indexlist) in item.list"
                :key="indexlist"
                @click="getrangelist(index,value.name,indexlist)"
              >{{value.name}}</li>
            </ul>
          </div>
          <div class="Ranges" v-if="picker == 2">
            <div class="range-text">
              <em>房屋地址</em>
            </div>
            <div class="range-input">
              <input type="text" placeholder="请输入房屋地址" v-model="warpGF.dz" />
            </div>
          </div>
          <div class="Ranges" v-if="picker == 3">
            <div class="range-text">
              <em>项目名称</em>
            </div>
            <div class="range-input">
              <input type="text" placeholder="请输入项目名称" v-model="warpZS.name" />
            </div>
          </div>
          <div class="filterList" v-if="picker == 0">
            <h1>用地性质</h1>
            <ul class="type">
              <li
                :class="item.show ?'active':''"
                v-for="(item,index) in itemlist"
                :key="index"
                @click="getsearch(index)"
              >{{item.name}}</li>
            </ul>
          </div>
          <div class="filterList" v-if="picker == 1">
            <h1>所属街道</h1>
            <ul>
              <li
                :class="item.show ?'active':''"
                v-for="(item,index) in streetlist"
                :key="index"
                @click="getsearch(index)"
              >{{item.name}}</li>
            </ul>
          </div>
          <div class="filterList" v-if="picker == 2">
            <h1>房屋状态</h1>
            <ul>
              <li
                :class="item.show ?'active':''"
                v-for="(item,index) in lcgfList"
                :key="index"
                @click="getsearch(index)"
              >{{item.name}}</li>
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
import investment from "@/view/investment/investment.js";
import { PopupPicker, Group, Cell, Range } from "vux";

export default {
  mixins: [investment],
  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  methods: {
    getdateil(item) {
      localStorage["Listitem"] = JSON.stringify(item);
      if (this.ID == 2) {
        this.$router.push("/investmentdetail");
      } else if (this.ID == 1) {
        localStorage["Listitem"] = JSON.stringify(item.name);
        this.$router.push("/specific");
      } else if (this.ID == 0) {
        var id = item.lx;
        if (id == "已征待拆") {
          var l = "u_ydyzdc";
          var type = "polygon";
        } else if (id == "可供地块") {
          var l = "u_ydkgdk";
          var type = "polygon";
        } else if (id == "招商地块") {
          var l = "u_zsdkd";
          var type = "point";
        }
        this.$router.push(
          "/map?type=" + type + "&id=" + l + "&name=" + item["dkzl"]
        );
      } else {
        this.$router.push("/lcgf");
      }
    },
    getpolicy(item) {
      localStorage["Listitem"] = JSON.stringify(item);
      this.$router.push("/policy");
    }
  },
  components: {
    PopupPicker,
    Group,
    Cell,
    Range
  }
};
</script>

<style lang="less" scoped>
@import "./investment.less";
</style>
