<template>
  <div class="holle">
    <!-- <div class="header">
      <div class="search-warp">
        <div class="search" >
          <img src="@/assets/img/search.png" alt="">
          <input type="text" placeholder="企业名称" v-model="value" v-on:input="inputValue">
        </div>
      </div>
    </div>
    <div style="height:52px;"></div> -->
    <ul class="List">
      <li v-for="(item,index) in List" :key="index">
        <em>房间号：{{item.fjh}}</em>
        <span v-if="data.id == 0">入驻企业：{{item.rzqy}}</span>
        <div  v-else>
          <span>闲置面积：{{item.jzmj}}(M²)</span>
          <span>参考月租：{{item.mpfmzj}}/M²</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // value:'',
      List:[],
      data:{}
    }
  },
  created(){
    this.data = JSON.parse(localStorage['join'])
    console.log(this.data)
    this.lcxx()
  },
  methods:{
    inputValue(){},
    lcxx(){
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      param.params = JSON.stringify({status:this.data.id,name:this.data.name})
      that.$vux.loading.show();
      that.get(this.baseUrl+'/etl/au/data/u_lcxx', param).then(function (res) {
        that.$vux.loading.hide();
        if (res.data.data) {
          if(that.data.id == 0){
            var array=[];
            for(var i=0;i<res.data.data[0]._.length;i++){
              var ret=false;
              for(var j=0;j<array.length;j++){
                if(array[j].rzqy==res.data.data[0]._[i].rzqy){
                  ret=true;
                  break;
                }
              }
              if(!ret){
                array.push(res.data.data[0]._[i]);
              }
            }
            that.List = array;
          }else{
            that.List = res.data.data[0]._
          }
        }
      }).catch(function (err) {
        that.$vux.loading.hide();
        that.$vux.toast.text('服务器连接失败');
      });
    },
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/common.less";
.List{
  background-color: #fff;
  li{
    width: 92%;
    border-bottom: 1px solid #ececec;
    padding: 5px 4%;
    // display: flex;
    // justify-content: flex-start;
    // align-items: center;
    em{
      font-size: 1.4rem;
      line-height: 25px;
      margin-right: 8px;
      margin-left: 5px;
      color: #7caafb;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      display: block;
    }
    div{
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    span{
      font-size: 1.4rem;
      line-height: 30px;
      color: #4d5572;
      margin-right: 10px;
      display: block;
      // flex: 1;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
}
</style>