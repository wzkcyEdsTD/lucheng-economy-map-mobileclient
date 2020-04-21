<template>
  <div class="hello">
    <div class="detail">
      <h1>企业概况</h1>
      <ul>
        <li>
          <em>企业名称</em>
          <span>{{data['企业名称']}}</span>
        </li>
        <li>
          <em>企业类型</em>
          <span>{{data['企业类型']}}</span>
        </li>
        <li>
          <em>优质类型</em>
          <span>{{data['优质类型']}}</span>
        </li>
      </ul>
    </div>
    <div class="detail">
      <h1>企业信息</h1>
      <ul>
        <li>
          <em>成立日期</em>
          <span>{{data['成立日期'].substring(0,10)}}</span>
        </li>
        <li>
          <em>法定代表人</em>
          <span>{{data['法定代表人']}}</span>
        </li>
        <li>
          <em>登记机关</em>
          <span>{{data['登记机关']}}</span>
        </li>
        <li>
          <em>统一社会信用代码</em>
          <span>{{data['统一社会信用代码']}}</span>
        </li>
      </ul>
    </div>
    <div class="detail">
      <h1>经营行业</h1>
      <ul>
        <li>
          <em>经营地址</em>
          <span>{{data['经营地址']}}</span>
        </li>
        <li>
          <em>经营范围</em>
          <span>{{data['经营范围']}}</span>
        </li> 
      </ul>
    </div>
    <!-- <div class="detail" v-if="qyzclist !== undefined">
      <h1>企业信用信息</h1>
      <ul>
        <li>
          <em>不良信息条数</em>
          <span>{{qyzclist['不良信息条数']}}条</span>
        </li>
        <li>
          <em>其他信息条数</em>
          <span>{{qyzclist['其他信息条数']}}条</span>
        </li>
        <li>
          <em>守信信息条数</em>
          <span>{{qyzclist['守信信息条数']}}条</span>
        </li> 
        <li>
          <em>黑名单信息条数</em>
          <span>{{qyzclist['黑名单信息条数']}}条</span>
        </li> 
      </ul>
    </div> -->
    <!-- <div class="detail" v-if="ydpjblist  !== undefined">
      <h1>企业亩均指标</h1>
      <ul>
        <li>
          <em>亩均税收（万元/亩）</em>
          <span>{{ydpjblist['亩均税收（万元/亩）']}}</span>
        </li>
        <li>
          <em>评价结果</em>
          <span>{{ydpjblist['评价结果']}}</span>
        </li> 
      </ul>
    </div> -->
    <!-- <div class="detail" v-if="qyczblist  !== undefined">
      <h1>企业承租信息</h1>
      <ul>
        <li>
          <em>承租企业名称</em>
          <span>{{qyczblist['czqy']}}</span>
        </li>
        <li>
          <em>用地面积(亩)</em>
          <span>{{qyczblist['zydarear']}}</span>
        </li> 
      </ul>
    </div> -->
    <!-- <div class="detail" v-if="qynblist  !== undefined">
      <h1>企业年报信息</h1>
      <ul>
        <li>
          <em>年报年度</em>
          <span>{{qynblist['年报年度']}}</span>
        </li>
        <li>
          <em>净利润</em>
          <span>{{qynblist['净利润']}}</span>
        </li> 
        <li>
          <em>负债总额</em>
          <span>{{qynblist['负债总额']}}</span>
        </li> 
        <li>
          <em>利润总额</em>
          <span>{{qynblist['利润总额']}}</span>
        </li> 
        <li>
          <em>纳税总额</em>
          <span>{{qynblist['纳税总额']}}</span>
        </li> 
        <li>
          <em>销售(营业)收入</em>
          <span>{{qynblist['销售(营业)收入']}}</span>
        </li> 
        <li>
          <em>主营收入</em>
          <span>{{qynblist['其中主营业务收入']}}</span>
        </li> 
        <li>
          <em>资产总额</em>
          <span>{{qynblist['资产总额']}}</span>
        </li> 
      </ul>
    </div> -->
  </div>
</template>

<script>
import enterprisedetail from '@/view/home/enterprisedetail.js'
export default {
  mixins:[enterprisedetail],
  data(){
    return{

    }
  },
  components: {
    
  },
}
</script>

<style lang="less" scoped>
@import "./enterprisedetail.less";
</style>
