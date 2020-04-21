<template>
  <div class="hello">
    <iframe id="map" @load="getiframe" src="https://lysb.lucheng.gov.cn/around/index.html#/" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value:'',
      mode:'',
      table:'',
    }
  },
  activated(){
    this.value=this.$route.query.name
    this.mode=this.$route.query.type
    this.table=this.$route.query.id
  },
  methods:{
    getiframe(){
      var iframe = document.getElementById("map")
      iframe.contentWindow.postMessage({
        value: this.value,
        mode: this.mode, 
        table: this.table
      },'*')
    }
  },
  components: {

  },
}
</script>

<style lang="less" scoped>
#map{
  width: 100vw;
  height: 100vh;
  z-index: 9999;
}
</style>
