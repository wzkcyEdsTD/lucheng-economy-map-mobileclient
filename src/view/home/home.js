const home = {
  data:() => {
    return{
      nav:['产业布局','经济特色','旅游特色','街镇特色','优质企业','经济指标'],
      active:0,
      navlist:['GDP','三次产业','规上工业','消费零售','规上盈利','财政收入','人均GDP','劳动生产','税收收入','存款贷款','工业用电','房产销售','出口总额','城乡收入','4+2投资'],
      listactive:0,
      warplist:[
        {nav:'专业市场',value:[]},
        {nav:'重大产业项目',value:[]},
        {nav:'优质楼宇',value:[]},
        {nav:'招商项目',value:[]},
      ],
      warpactive:0,
      warpnav:['功勋企业','功勋企业家','工业50强','商贸业50强','服务业50强','建筑行业贡献单位','科技工作先进单位','开放经济先进单位','金融经济考评先进单位'],
      itemactive:0,
      YLnav:['AAA级景区村庄','A级风景区','其他景点','星级旅行社','星级酒店','民宿客栈'],
      YLactive:'AAA级景区村庄',
      YLvalue:'',
      YLlist:[],
      Echarts:[
        { show:true , id:'charts0' , title:'GDP增速' , type: 1,list:[],data:[]},
        { show:true , id:'charts1' , title:'三次产业增速' , type: 1,list:{item1:[],item2:[],item3:[]},data:[]},
        { show:true , id:'charts2' , title:'规上工业增速' , type: 1,list:[],data:[]},
        { show:true , id:'charts3' , title:'限上消费品零售额增速' , type: 1,list:[],data:[]},
        { show:true , id:'charts4' , title:'规上盈利性服务业增速' , type: 1,list:[],data:[]},
        { show:true , id:'charts5' , title:'财政收入、一般公共预算增速' , type: 1,list:{item1:[],item2:[],item3:[]},data:[]},
        { show:true , id:'charts6' , title:'人均GDP(元)' , type: 2,list:[],data:[]},
        { show:true , id:'charts7' , title:'全员劳动生产率(万元/人)' , type: 2,list:[],data:[]},
        { show:true , id:'charts8' , title:'税收收入占比(%)' , type: 2,list:[],data:[]},
        { show:true , id:'charts9' , title:'人民币存款、贷款余额增速' , type: 1,list:{item1:[],item2:[]},data:[]},
        { show:true , id:'charts10' , title:'工业用电量增速' , type: 1,list:[],data:[]},
        { show:true , id:'charts11' , title:'商品房销售面积增速' , type: 1,list:[],data:[]},
        { show:true , id:'charts12' , title:'出口总额（亿元）' , type: 2,list:{item1:[],item2:[]},data:[]},
        { show:true , id:'charts13' , title:'城乡居民收入增速' , type: 1,list:{item1:[],item2:[]},data:[]},
        { show:true , id:'charts14' , title:'4+2投资结构增速' , type: 1,list:{item1:[],item2:[],item3:[],item4:[],item5:[],item6:[]},data:[]},
      ],
      // bing:[
      //   {value:70, name:'2018一季度'},
      //   {value:150, name:'2018上半年'},
      //   {value:230, name:'2018前三季度'},
      //   {value:450, name:'2018全年'},
      //   {value:90, name:'2019一季度'},
      //   {value:160, name:'2019上半年'},
      // ],
      list:[],
      addlist:[],
      value:'',
      List:[],
      search:[],
      valueName:'',
      screenHeight:document.documentElement.clientHeight,
      errorImg:'this.src=" '+require('../../assets/img/Nophoto.png')+' "',
      // index:1,
    }
  },
  created(){
    this.active = JSON.parse(localStorage['active'])
    this.warpactive = JSON.parse(localStorage['warpactive'])
    this.itemactive = JSON.parse(localStorage['itemactive'])
    // this.index = JSON.parse(localStorage['gif'])
  },
  mounted(){
    var that = this
    // setTimeout(function (){
    //   that.index = 1
    //   localStorage['gif'] = JSON.stringify(1)
    // }, 5500);
    this.getEcharts()
    this.activeType()
    window.addEventListener('scroll',this.handleScroll)
  },
  methods:{
    getEcharts(){
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      that.$vux.loading.show();
      that.get(this.baseUrl+'/etl/au/data/u_jjzb', param).then(function (res) {
        that.$vux.loading.hide();
        console.log(res.data.data[0]._);
        if (res.data.data) {
          var array=[];
          for(var i=0;i<res.data.data[0]._.length;i++){
            var ret=false;
            for(var j=0;j<array.length;j++){
              if(array[j]['指标类别']==res.data.data[0]._[i]['指标类别']){
                array[j]['list'].push(res.data.data[0]._[i]);
                ret=true;
                break;
              }
            }
            if(!ret){
              array.push({指标类别:res.data.data[0]._[i]['指标类别'],list:[res.data.data[0]._[i]]});
            }
          }
          console.log(array)
          for(var k in array){
            var name = array[k]['指标类别']
            if(name == 'GDP增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[0].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[0].list.push(array[k].list[l]['指标值'])
              }
            }else if(name == '第一产业增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[1].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[1].list.item1.push(array[k].list[l]['指标值'])
              }
            }else if(name == '第二产业增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[1].list.item2.push(array[k].list[l]['指标值'])
              }
            }else if(name == '第三产业增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[1].list.item3.push(array[k].list[l]['指标值'])
              }
            }else if(name == '规上工业增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[2].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[2].list.push(array[k].list[l]['指标值'])
              }
            }else if(name == '限上消费品零售额增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[3].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[3].list.push(array[k].list[l]['指标值'])
              }
            }else if(name == '营利性服务业增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[4].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[4].list.push(array[k].list[l]['指标值'])
              }
            }else if(name == '一般公共预算收入增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[5].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[5].list.item1.push(array[k].list[l]['指标值'])
              }
            }else if(name == '一般公共预算支出增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[5].list.item2.push(array[k].list[l]['指标值'])
              }
            }else if(name == '财政总收入增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[5].list.item3.push(array[k].list[l]['指标值'])
              }
            }else if(name == '人均GDP（元）'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[6].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[6].list.push(array[k].list[l]['指标值'])
              }
            }else if(name == '全员劳动生产率（万元）'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[7].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[7].list.push(array[k].list[l]['指标值'])
              }
            }else if(name == '税收收入占一般公共预算收入比重（%）'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[8].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[8].list.push(array[k].list[l]['指标值'])
              }
            }else if(name == '金融机构人民币存款余额增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[9].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[9].list.item1.push(array[k].list[l]['指标值'])
              }
            }else if(name == '金融机构人民币贷款余额增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[9].list.item2.push(array[k].list[l]['指标值'])
              }
            }else if(name == '工业用电量增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[10].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[10].list.push(array[k].list[l]['指标值'])
              }
            }else if(name == '商品房销售面积增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[11].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[11].list.push(array[k].list[l]['指标值'])
              }
            }else if(name == '出口总额（亿元）'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[12].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[12].list.item1.push(array[k].list[l]['指标值'])
              }
            }else if(name == '出口总额增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[12].list.item2.push(array[k].list[l]['指标值'])
              }
            }else if(name == '城镇常住居民人均可支配收入增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[13].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[13].list.item1.push(array[k].list[l]['指标值'])
              }
            }else if(name == '农村常住居民人均可支配收入增速'){
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[13].list.item2.push(array[k].list[l]['指标值'])
              }
            }else if(name == '民间项目投资增速'){
              if(array[k].list.length < 6){
                var d = 6 - array[k].list.length
                for(d;d>0;d--){
                  that.Echarts[14].list.item1.push(null)
                }
              }
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[14].list.item1.push(array[k].list[l]['指标值'])
              }
            }else if(name == '高新技术产业投资增速'){
              if(array[k].list.length < 6){
                var d = 6 - array[k].list.length
                for(d;d>0;d--){
                  that.Echarts[14].list.item2.push(null)
                }
              }
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[14].data.push(array[k].list[l]['年份']+'年\n'+array[k].list[l]['季度']+'季度')
                that.Echarts[14].list.item2.push(array[k].list[l]['指标值'])
              }
            }else if(name == '工业投资增速'){
              if(array[k].list.length < 6){
                var d = 6 - array[k].list.length
                for(d;d>0;d--){
                  that.Echarts[14].list.item3.push(null)
                }
              }
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[14].list.item3.push(array[k].list[l]['指标值'])
              }
            }else if(name == '交通投资增速'){
              if(array[k].list.length < 6){
                var d = 6 - array[k].list.length
                for(d;d>0;d--){
                  that.Echarts[14].list.item4.push(null)
                }
              }
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[14].list.item4.push(array[k].list[l]['指标值'])
              }
            }else if(name == '服务业投资增速'){
              if(array[k].list.length < 6){
                var d = 6 - array[k].list.length
                for(d;d>0;d--){
                  that.Echarts[14].list.item5.push(null)
                }
              }
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[14].list.item5.push(array[k].list[l]['指标值'])
              }
            }else if(name == '生态环境和公共设施投资增速'){
              if(array[k].list.length < 6){
                var d = 6 - array[k].list.length
                for(d;d>0;d--){
                  that.Echarts[14].list.item6.push(null)
                }
              }
              for(var s = array[k].list.length;s>0;s--){
                var l = s-1
                that.Echarts[14].list.item6.push(array[k].list[l]['指标值'])
              }
            }
          }
          that.getList()
        }
      }).catch(function (err) {
        that.$vux.loading.hide();
        that.$vux.toast.text('服务器连接失败');
      });
    },
    getList(){
      for(var i = 0;i<this.Echarts.length; i++ ){
        if( this.Echarts[i].type == 1 ){
          this.getechartsXian(this.Echarts[i])
        }else if( this.Echarts[i].type == 2 ){
          this.getechartsZhu(this.Echarts[i])
        }
      }
    },
    activeType(){
      for(var i = 0;i<this.Echarts.length; i++ ){
        if(this.active == 5){
          this.Echarts[i].show = true
        }else{
          this.Echarts[i].show = false
        }
      }
      if(this.active == 1){
        this.jjts()
      }else if(this.active == 3){
        this.streetinfo()
      }else if(this.active == 4){
        this.getwarp()
      }else if(this.active == 2){
        this.lvyou()
      }
    },
    lvyou(){
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      that.$vux.loading.show();
      that.get(this.baseUrl+'/etl/au/data/u_lvyou', param).then(function (res) {
        console.log(res)
        that.$vux.loading.hide();
        if (res.data.data) {
          that.YLlist = res.data.data[0]._
        }
      }).catch(function (err) {
        that.$vux.loading.hide();
        that.$vux.toast.text('服务器连接失败');
      });
    },
    toggle(type){
      if( this.active !== type ){
        this.active = type
        this.activeType()
      }
    },
    listtoggle(type){
      this.listactive = type;
      document.body.scrollTop = type*325;
      document.documentElement.scrollTop = type*325;

      // if( type == 0){

      // }else{
      //   for(var i = 0;i<this.Echarts.length; i++ ){
      //     var x = type - 1
      //     if( x == i ){
      //       this.Echarts[i].show = true
      //     }else{
      //       this.Echarts[i].show = false
      //     }
      //   }
      // }
    },
    handleScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var x = Math.trunc(scrollTop/325)
      if(this.active == 5){
          document.querySelector('#nav').scrollLeft = 80*(x - 1)
      }
  　　this.listactive = x
    },
    warptoggle(type){
      this.warpactive = type
      document.querySelector('#warpnav').scrollLeft = 115*(type - 1)
    },
    itemtoggle(type){
      if( this.itemactive !== type ){
        // document.querySelector('#itemnav').scrollLeft = 100*(type - 1)
        this.itemactive = type
        this.valueName = ''
        this.getwarp()
      }
    },
    YLtoggle(type,index){
      if( this.YLactive !== type ){
        document.querySelector('#YLactive').scrollLeft = 100*(index - 1)
        this.YLactive = type
      } 
    },
    getechartsXian(item){
      if( item.id ==  'charts0'){
        var color = ['#00ffff']
        var top = 60
        var series = [
          {
            data: item.list,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          }
        ]
      }else if(item.id ==  'charts1'){
        var color = ['#1cacff','#ffb422','#bb93fd']
        var top = 60
        var legend = {data:['一产','二产','三产'],top:'32',textStyle:{color:'#4d5572',}}
        var series = [
          {
            name:'一产',
            data: item.list.item1,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          },{
            name:'二产',
            data: item.list.item2,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          },{
            name:'三产',
            data: item.list.item3,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          }
        ]
      }else if(item.id ==  'charts2'){
        var color = ['#98b551']
        var top = 60
        var series = [
          {
            data: item.list,
            type: 'line',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          }
        ]
      }else if(item.id ==  'charts3'){
        var color = ['#c23531']
        var top = 60
        var series = [
          {
            data: item.list,
            type: 'line',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          }
        ]
      }else if(item.id ==  'charts4'){
        var color = ['#372c76']
        var top = 60
        var series = [
          {
            data: item.list,
            type: 'line',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          }
        ]
      }else if(item.id ==  'charts5'){
        var color = ['#c23531','#0092f6','#ff8c00']
        var top = 60
        var legend = {data:['总收入','预算收入','预算支出'],top:'32',textStyle:{color:'#4d5572',}}
        var series = [
          {
            name:'总收入',
            data: item.list.item3,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          },
          {
            name:'预算收入',
            data: item.list.item1,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          },
          {
            name:'预算支出',
            data: item.list.item2,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          },
        ]
      }else if(item.id ==  'charts9'){
        var color = ['#0092ff','#ff8c00']
        var top = 60
        var legend = {data:['存款','贷款'],top:'32',textStyle:{color:'#4d5572',}}
        var series = [
          {
            name:'存款',
            data: item.list.item1,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          },{
            name:'贷款',
            data: item.list.item2,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          }
        ]
      }else if(item.id ==  'charts10'){
        var color = ['#bc932c']
        var top = 60
        var series = [
          {
            data: item.list,
            type: 'line',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          }
        ]
      }else if(item.id ==  'charts11'){
        var color = ['#0182de']
        var top = 60
        var series = [
          {
            data: item.list,
            type: 'line',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          }
        ]
      }else if(item.id ==  'charts13'){
        var color = ['#0092ff','#ff8c00']
        var top = 60
        var legend = {data:['城镇','农村'],top:'32',textStyle:{color:'#4d5572',}}
        var series = [
          {
            name:'城镇',
            data: item.list.item1,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          },{
            name:'农村',
            data: item.list.item2,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          }
        ]
      }else if(item.id ==  'charts14'){
        var color = ['#ffff00','#4169e1','#00fb9c','#fe9d22','#894af4','#c23531']
        var top = 100
        var legend = {data:['民间项目','高新技术产业','工业','交通','服务业','生态环境和公共设施'],top:'42',textStyle:{color:'#4d5572',}}
        var series = [
          {
            name:'民间项目',
            data: item.list.item1,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          },{
            name:'高新技术产业',
            data: item.list.item2,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          },{
            name:'工业',
            data: item.list.item3,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          }
          ,{
            name:'交通',
            data: item.list.item4,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          }
          ,{
            name:'服务业',
            data: item.list.item5,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          }
          ,{
            name:'生态环境和公共设施',
            data: item.list.item6,
            type: 'line',
            symbol:'circle',
            symbolSize:'7',
            areaStyle: {
              opacity:0.3
            }
          }
        ]
      }
      let text = item.title
      let myChart = this.$echarts.init(document.getElementById(item.id))
      myChart.clear();
        // 绘制图表
      myChart.setOption({
        title: {
          text: text,
          textStyle:{
            color: '#172770',
            fontWeight:'500',
            fontSize:'16'
          },
          left:'left',
          top:'10',
        },
        tooltip: {
          trigger: 'axis'
        },
        color:color,
        legend: legend,
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            color:'#376798',
            interval: 0,
            fontSize: 10
          },
          axisLine:{
            lineStyle:{
              color:'#0D1A59',
            }
          },
          data: item.data
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false,
          },
          axisLine:{
            lineStyle:{
              color:'#0D1A59',
            }
          },
          axisLabel: {
            margin: 2,
            color:'#134EC5',
            formatter: '{value}%'
          },
          splitLine: {
            show: true,
            lineStyle:{
              type:'dashed',
              color:'#DDDDDD',
            }
          }
        },
        grid: {
          top:top,
          left: 35,
          right: 20,
        },
        series:series
      });
    },
    getechartsZhu(item){
      let text = item.title
      let myChart = this.$echarts.init(document.getElementById(item.id))
      myChart.clear();
      if(item.id ==  'charts6'){
        var color = ['#00fa9a','#00fad6']
        var left = 50
        var right = 35
        var series = [
          {
            type: 'bar',
            barWidth:18,
            data: item.list,        //数据
            itemStyle: {
              normal: {
                //颜色渐变
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: color[1]
                }, {
                  offset: 1,
                  color: color[0]
                }]),
              }
            },
          }
        ]
      }else if(item.id ==  'charts7'){
        var color = ['#188df0','#7cbbf5']
        var left = 30
        var right = 40
        var series = [
          {
            type: 'bar',
            barWidth:18,
            data: item.list,        //数据
            itemStyle: {
              normal: {
                //颜色渐变
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: color[1]
                }, {
                  offset: 1,
                  color: color[0]
                }]),
              }
            },
          }
        ]
      }else if(item.id ==  'charts8'){
        var color = ['#fe5822','#fe9b22']
        var left = 30
        var right = 35
        var series = [
          {
            type: 'bar',
            barWidth:18,
            data: item.list,        //数据
            itemStyle: {
              normal: {
                //颜色渐变
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: color[1]
                }, {
                  offset: 1,
                  color: color[0]
                }]),
              }
            },
          }
        ]
      }else if(item.id ==  'charts12'){
        var color = ['#3e52b4','#81bdf4','#d4780b']
        var left = 25
        var right = 40
        var series = [
          {
            name: '出口总额',
            type: 'bar',
            barWidth:18,
            data: item.list.item1,        //数据
            itemStyle: {
              normal: {
                //颜色渐变
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: color[1]
                }, {
                  offset: 1,
                  color: color[0]
                }]),
              }
            },
          },
          {
            name:'增速',
            data: item.list.item2,
            type: 'line',
            symbolSize:'7',
            yAxisIndex: 1,
            color:color[2]
          }
        ]
      }
      // 绘制图表
      myChart.setOption({
        title: {
          text: text,
          textStyle:{
            color: '#172770',
            fontWeight:'500',
            fontSize:'16'
          },
          left:'left',
          top:'10',
        },
        tooltip : {
          trigger: 'axis',
          axisPointer : {           
              type : 'shadow'        
          }
        },
        yAxis: [
          {
            type: 'value',
            position: 'left',
            axisTick: {
              show: false,
            },
            axisLine:{
              lineStyle:{
                color:'#0D1A59',
              }
            },
            axisLabel: {
              color:'#134EC5',
              margin: 4,
            },
            splitLine: {
              show: false,
            }
          },
          {
            type: 'value',
            position: 'right',
            axisTick: {
              show: false,
            },
            axisLine:{
              lineStyle:{
                color:'#0D1A59',
              }
            },
            axisLabel: {
              color:'#134EC5',
              formatter: '{value}%'
            },
            splitLine: {
              show: false,
            }
          }
        ],
        xAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLabel: {
            color:'#376798',
            interval: 0,
            fontSize: 10
          },
          axisLine:{
            lineStyle:{
              color:'#0D1A59',
            }
          },
          data:item.data
        },
        grid: {
          left: left,
          right: right,
        },
        series: series
      });
    },
    getechartsBing(item){
      let text = item.title
      let myChart = this.$echarts.init(document.getElementById(item.id))
      var color =  ['#13b8f5', '#5eeec0', '#ff6766', '#ff9645', '#ab60ff', '#f2e236']
      myChart.clear();
        // 绘制图表
      myChart.setOption({
        title : {
          text: text,
          textStyle:{
            color:'#4d5572',
            fontSize:12
          },
          subtext: '12,284 家',
          subtextStyle:{
            color:'#5eeec0',
            fontSize:20
          },
          x:'center',
          top:'10'
        },
        series : [
          {
            name:'私营企业数',
            type:'pie',
            radius : [30, 100],
            center : ['50%', '50%'],
            roseType : 'radius',
            data:this.bing,
            label: {
              normal: {
                  formatter: '{b|{b}}\n　{c}家　',
                  padding: [0, -45],
                  fontSize:10,
                  rich: {
                    b:{
                      lineHeight:15,
                      fontSize:10,
                    }
                  }
              }
            },
            labelLine:{
              length:10,
              length2:45,
            },
            color: color
          }
        ]
      });
    },
    geteconomic(item){
      var img = this.baseImage+'/icon/tsjjImg/'+item['name']+".png"
      var data = {'ADDRESS':item['ssjd'],'项目概述':item['jj'],'NAME':item['name'],'图片':img,type:this.warplist[this.warpactive].nav}
      localStorage['Listitem'] = JSON.stringify(data)
      this.$router.push('/economic');
    },
    getstreet(item){
      localStorage['Listitem'] = JSON.stringify(item)
      this.$router.push('/street');
    },
    jjts(){
      for(var x =0;x<this.warplist.length;x++){
        this.warplist[x].value = []
      } 
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      that.$vux.loading.show();
      that.get(this.baseUrl+'/etl/au/data/u_jjts', param).then(function (res) {
        console.log(res)
        that.$vux.loading.hide();
        if (res.data.data) {
          var t = res.data.data[0]._
          for(var i = 0;i<t.length;i++){
            if(t[i].type == '3'){
              that.warplist[0].value.push(t[i])
            }else if(t[i].type == '1'){
              that.warplist[1].value.push(t[i])
            }else if(t[i].type == '2'){
              that.warplist[2].value.push(t[i])
            }else if(t[i].type == '4'){
              that.warplist[3].value.push(t[i])
            }
          }
        }
      }).catch(function (err) {
        that.$vux.loading.hide();
        that.$vux.toast.text('服务器连接失败');
      });
    },
    streetinfo(){
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      that.$vux.loading.show();
      that.get(this.baseUrl+'/etl/au/data/u_streetinfo', param).then(function (res) {
        console.log(res)
        that.$vux.loading.hide();
        if (res.data.data) {
          that.addlist = res.data.data[0]._
        }
      }).catch(function (err) {
        that.$vux.loading.hide();
        that.$vux.toast.text('服务器连接失败');
      });
    },
    getwarp(){
      var id = this.itemactive
      var url = ''
      if(id == 0){
        url = '/etl/au/data/gxqy'
      }else if(id == 1){
        url = '/etl/au/data/gxqyj'
      }else if(id == 2){
        url = '/etl/au/data/gy50q'
      }else if(id == 3){
        url = '/etl/au/data/smy50q'
      }else if(id == 4){
        url = '/etl/au/data/fwy50q'
      }else if(id == 5){
        url = '/etl/au/data/jzhydw'
      }else if(id == 6){
        url = '/etl/au/data/kjgzdw'
      }else if(id == 7){
        url = '/etl/au/data/jjgzdw'
      }else if(id == 8){
        url = '/etl/au/data/yjkpdw'
      }
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      that.$vux.loading.show();
      that.get(this.baseUrl+url, param).then(function (res) {
        that.$vux.loading.hide();
        if (res.data.data) {
          that.List = res.data.data[0]._;
          that.search = res.data.data[0]._;
        }
      }).catch(function (err) {
        that.$vux.loading.hide();
        that.$vux.toast.text('服务器连接失败');
      });
    },
    inputValue(){
      var value = this.valueName
      var list = this.search
      var data = []
      if( value == ''){
        data = list
      }else{
        for(var i = 0;i<list.length;i++){
          var name = list[i]['企业名称']
          if(name !== null){
            if(name.includes(value)){
              data.push(list[i])
            }
          }
        }
      }
      this.List = data
    },
    getdetail(data){
      localStorage['Listitem'] = JSON.stringify(data)
      this.$router.push('/enterprisedetail');
    },
    getmap(){
      var iframe = document.getElementById("map")
      iframe.contentWindow.postMessage({ mode : "map" },'*')
    },
    getYL(item){
      localStorage['Listitem'] = JSON.stringify(item)
      this.$router.push('/YL');
    }
  },
  destroyed(){
    window.removeEventListener('scroll',this.handleScroll)
    localStorage['active'] = JSON.stringify(this.active)
    localStorage['warpactive'] = JSON.stringify(this.warpactive)
    localStorage['itemactive'] = JSON.stringify(this.itemactive)
  },
  watch: {

  },
}
export default home