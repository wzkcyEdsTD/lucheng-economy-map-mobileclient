<template>
  <div class="overview">
    <header class="o-swiper">
      <swiper :options="swiperOption" ref="swiper">
        <swiper-slide v-for="(item,index) in v_swiperImgs" :key="index">
          <img :src="`${baseImage}/icon/${item}`" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </header>
    <div class="policies">
      <span>政策</span>
      <ul :class="{_top:animate}">
        <li v-for="(item,index) in v_policies" :key="index" @click="getToLink('investment',2)">
          <span>{{item}}</span>
        </li>
      </ul>
      <i class="toLeft" />
    </div>
    <div class="menus">
      <ul class="v_menu">
        <li v-for="(item,index) in v_menu" :key="index">
          <div @click="forceSubMenu(index)">
            <img :src="item.url" />
            <span>{{item.title}}</span>
          </div>
        </li>
      </ul>
      <ul class="v_subMenu" v-if="v_subMenu.length">
        <li v-for="(item,index) in v_subMenu" :key="index" @click="getToLink('type',index,item)">
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="LCcanvass">
      <header>鹿城招商</header>
      <ul>
        <li v-for="(item,index) in v_matrix" :key="index" @click="getToLink('investment',1,index)">
          <div>
            <img :src="item" />
          </div>
        </li>
      </ul>
    </div>
    <div class="streets">
      <header>特色街镇</header>
      <ul>
        <li v-for="(item,index) in streets" :key="index" @click="getToLink('detail',item)">
          <div
            :style="{backgroundImage:`url(${baseImage}/icon/streetImg/${item.name}.png), linear-gradient(rgba(61, 79, 234, 0.3), rgba(88, 88, 255, 0.4))`}"
          >
            <span>{{item.name}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="topCompanies">
      <header>
        优质企业
        <i class="moreTip" @click="getToLink('type',4,'优质企业')">查看更多</i>
      </header>
      <p>2018年度优质企业 (企业排名不分先后)</p>
      <ul>
        <li
          v-for="(item,index) in topCompanies"
          :key="index"
          @click="getToLink('enterprisedetail',item)"
        >
          <span>{{++index}}</span>
          <span>{{item['企业名称']}}</span>
          <i>></i>
        </li>
      </ul>
    </div>
    <div class="canvass">
      <header>
        招商项目
        <i class="moreTip" @click="getToLink('investment',1,0)">查看更多</i>
      </header>
      <ul>
        <li
          v-for="(item,index) in canvass"
          :key="index"
          @click="getToLink('investmentdetail',item)"
        >
          <span
            :style="{backgroundImage:`url(${baseImage}/icon/canvassImg/canvass_${item['页码']}.jpg), linear-gradient(rgba(61, 79, 234, 0.3), rgba(88, 88, 255, 0.4))`}"
          ></span>
          <div>
            <span>{{item['项目名称']}}</span>
            <span>{{item['项目英文']}}</span>
          </div>
          <i>></i>
        </li>
      </ul>
    </div>
    <!-- 预加载获取全部或部分缓存 -->
    <iframe v-if="sessionPreLoad" id="preLoadMapCache" :src="$data._IFRAME_" frameborder="0"></iframe>
  </div>
</template>

<script>
import overview from "./overview";
export default {
  name: "overview",
  mixins: [overview]
};
</script>

<style lang="less">
@import "./overview.less";
</style>