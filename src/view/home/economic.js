const economic = {
  data:() => {
    return{
      data:{},
      item:{},
      value:{},
      images:[]
    }
  },
  created(){
    this.data = JSON.parse(localStorage['Listitem'])
    console.log(this.data)
  },
  mounted(){
    this.images = [
      {
        src:this.data['图片'],
        msrc:this.data['图片'],
      },
    ]
    this.economic()
  },
  methods:{
    getmap(data){
      var type = 'point'
      var name = data['NAME']
      if(data['type'] == '招商项目'){
        var id = 'u_zsdkd'
      }else if(data['type'] == '优质楼宇'){
        var id = 'u_zdly'
      }else if(data['type'] == '重大项目产业'){
        var id = 'u_zdcy'
      }else if(data['type'] == '专业市场'){
        var id = 'u_zysc'
      }

      this.$router.push('/map?type='+type+'&id='+id+'&name='+name)
      
    },
    economic(){
      var data = this.data
      if(data['type'] == '招商项目'){
        var url = 'u_canvass'
      }else if(data['type'] == '优质楼宇'){
        var url = 'u_lyxx'
      }else if(data['type'] == '重大项目产业'){
        var url = 'zdcyxmb'
      }else if(data['type'] == '专业市场'){
        var url = 'zysc'
      }

      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      param.params = JSON.stringify({name:data['NAME']})
      that.$vux.loading.show();
      that.get(this.baseUrl+'/etl/au/data/'+url, param).then(function (res) {
        console.log(res)
        that.$vux.loading.hide();
        if (res.data.data) {
          that.item = res.data.data[0]._[0]
          that.getdata()
        }
      }).catch(function (err) {
        that.$vux.loading.hide();
        that.$vux.toast.text('服务器连接失败');
      });
    },
    getdata(){
      var that = this
      var array = {}
      var item = this.item
      if(that.data['type'] == '招商项目'){
        array = {
          name:item['NAME'],
          dz:item['详细地址'],
          jj:item['项目概述'],
          list:[
            {name:'经济类别',value:that.data['type']},
            {name:'英文名称',value:item['英文名称']},
            {name:'英文概述',value:item['英文概述']},
          ]
        }
      }else if(that.data['type'] == '优质楼宇'){
        array = {
          name:item['楼宇名称'],
          dz:item['地址'],
          jj:item['备注'],
          list:[
            {name:'经济类别',value:that.data['type']},
            {name:'业主单位',value:item['业主单位']},
            {name:'产业定位',value:item['产业定位']},
            {name:'入驻企业数',value:item['入驻企业数']},
            {name:'入驻率',value:item['入驻率']},
            {name:'员工数',value:item['员工数']},
            {name:'属地街道',value:item['属地街道']},
            {name:'物业公司名称',value:item['物业公司名称']},
            {name:'物业费（元/平方米/月）',value:item['物业费（元/平方米/月）']},
            {name:'租金（元/平方米/月）',value:item['租金（元/平方米/月）']},
          ]
        }
      }else if(that.data['type'] == '重大项目产业'){
        array = {
          name:item['项目名称'],
          dz:item['责任单位'],
          jj:item['项目概况'],
          list:[
            {name:'经济类别',value:that.data['type']},
            {name:'完成率',value:item['完成率']},
            {name:'建设性质',value:item['建设性质']},
            {name:'总投资',value:item['总投资']},
            {name:'用地面积（亩）',value:item['用地面积（亩）']},
            {name:'竣工时间',value:item['竣工时间']},
          ]
        }
      }else if(that.data['type'] == '专业市场'){
        array = {
          name:item['名称'],
          dz:item['地址'],
          jj:item['简介'],
          list:[
            {name:'经济类别',value:that.data['type']},
            {name:'入驻商户',value:item['入驻商户']},
            {name:'占地面积（亩）',value:item['占地面积（亩）']},
            {name:'市场运营负责单位',value:item['市场运营负责单位']},
            {name:'年交易额（亿元）',value:item['年交易额（亿元）']},
            {name:'税收（万元）',value:item['税收（万元）']},
            {name:'营业面积（万平方米）',value:item['营业面积（万平方米）']},
            {name:'所属街道',value:item['街道名称']},
            {name:'经营范围',value:item['经营范围']},
          ]
        }
      }

      this.value = array
    },
    getshow(index) {
      this.$refs.previewer.show(index)
    }
  },
  watch: {

  },
}
export default economic