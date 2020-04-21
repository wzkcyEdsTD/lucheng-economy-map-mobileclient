<template>
  <div>
    <div class="image">
      <img v-bind:src="baseImage + '/icon/travel/'+data['名称']+'.jpg'" alt="" @click="getshow(0)">
    </div>
    <previewer :list="images" ref="previewer"></previewer>
    <div class="title">
      <div @click="getmap(data)"  class="title-text">
        <img src="@/assets/img/map.png" alt="">
        <h1>{{data["名称"]}}</h1>
      </div>
      <em>类型：{{data["类型"]}}</em>
    </div>
    <div class="center">
      <em>简介</em>
      <span>{{data["简介"]}}</span>
    </div>
  </div>
</template>

<script>
import { Previewer } from 'vux'
export default {
  data(){
    return{
      data:{},
      images:[]
    }
  },
  components: {
    Previewer
  },
  created(){
    this.data = JSON.parse(localStorage['Listitem'])
    console.log(this.data)
  },
  mounted(){
    this.images = [
      {
        src:this.baseImage + '/icon/travel/'+this.data['名称']+'.jpg',
        msrc:this.baseImage + '/icon/travel/'+this.data['名称']+'.jpg',
      },
    ]
  },
  methods:{
    getshow(index) {
      this.$refs.previewer.show(index)
    },
    getmap(data){
      var type = 'point'
      var name = data['名称']
      var id = 'u_lvyou'

      this.$router.push('/map?type='+type+'&id='+id+'&name='+name)
    },
  }
}
</script>

<style lang="less" scoped>
.image{
  min-height: 120px;
  text-align: center;
  background: url('../../assets/img/Nophoto.png') center center no-repeat;
  background-size: 35% auto;
  img{
    width: 100%;
    height: auto;
    &.img404{
      width: 40%;
      margin: 12px auto;
    }
  }
}
.title{
  width: 92%;
  border-bottom: 1px solid #DDDDDD; 
  padding:10px 4%;
  background-color: #fff;
  em{
    font-size: 1.4rem;
    color: #394061;
    line-height: 18px;
    padding: 5px 0;
  }
  .title-text{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h1{
      color: #0B1439;
      font-size: 1.6rem;
      line-height: 28px;
      flex: 1
    }
    img{
      width: 15px;
      height: 16px;
      margin-right: 8px;
    }

  }
}
.center{
  width: 92%;
  padding:10px 4%;
  background-color: #fff;
  em{
    display: block;
    line-height: 35px;
    color: #6E7386;
    font-size: 1.6rem;;
  }
  span{
    display: block;
    line-height: 22px;
    font-size: 1.4rem;
    color: #394061;
  }
}
</style>