const land = {
  data:() => {
    return{
      // active:0,
      // nav:['亩均论英雄','鹿城用地'],
      // pickerM:[],
      // pickerQ:[],
      // listM:[['50亩以下','50亩-100亩','100亩-200亩','200亩以上']],
      // listQ:[['','可供地块']],
      // charts:[
      //   { id:'chart0' , title:'规上企业行业数量' , type: 1},
      //   { id:'chart1' , title:'规上企业街镇税收排名(万/亩)' , type: 1},
      //   { id:'chart2' , title:'规上企业评价结果' , type: 2},
      //   { id:'chart3' , title:'参评企业数量' , type: 3},
      //   { id:'chart4' , title:'亩均效益分析' , type: 4},
      // ],
      // search:[],
      addlist:[],
      // type:false,
      warpYD:{
        // lx:'',
        // ydxz:'',
        // mjs:'',
        // mje:'',
      },
      value:[],
      // warplist:[],
      Ranges:[
        {name:'用地面积（亩）',min:'',max:'',list:[
          {name:'0-30',show:false},
          {name:'30-60',show:false},
          {name:'60-100',show:false},
        ]}
      ],
      show:false,
      itemlist:[
        {show:false,name:'[A]公共管理与公共服务用地',code:'A'},
        {show:false,name:'[B]商业服务业设施用地',code:'B'},
        {show:false,name:'[E]非建设用地',code:'E'},
        {show:false,name:'[G]绿地与广场用地',code:'G'},
        {show:false,name:'[H]建设用地',code:'H'},
        {show:true,name:'[M]工业用地',code:'M'},
        {show:false,name:'[R]居住用地',code:'R'},
        {show:false,name:'[S]道路与交通设施用地',code:'S'},
        {show:false,name:'[U]公用设施用地',code:'U'},
        {show:false,name:'[W]物流仓储用地',code:'W'},
      ],
      listX:[
        { type:'A',list:['文化设施用地','教育科研用地','中小学用地']},
        { type:'B',list:['商业用地','商务用地','旅馆用地','加油加气站用地']},
        { type:'C',list:['商业金融业用地','教育科研用地','医疗卫生用地','其他公共设施用地']},
        { type:'E',list:[]},
        { type:'G',list:['公园绿地','街头绿地','防护绿地','生产防护绿地','防护绿地']},
        { type:'H',list:[]},
        { type:'M',list:['一类工业用地','三类工业用地']},
        { type:'R',list:['二类居住用地','服务设施用地','公共服务设施用地']},
        { type:'S',list:['交通场站用地','社会停车场用地']},
        { type:'U',list:['供应设施用地','供电用地','公共交通用地']},
        { type:'W',list:['一类物流仓储用地']},
      ],
      value:'',
      pickerlist:[
        {show:true,name:'已征待拆'},
        {show:true,name:'可供地块'}
      ]
    }
  },
  created(){

  },
  mounted(){
    // for(var i = 0;i<this.charts.length; i++ ){
    //   if( this.charts[i].type ==  1){
    //     this.chartsA(this.charts[i])
    //   }else if( this.charts[i].type == 2 ){
    //     this.chartsB(this.charts[i])        
    //   }else if( this.charts[i].type == 3 ){
    //     this.chartsC(this.charts[i])        
    //   }else if( this.charts[i].type == 4 ){
    //     this.chartsD(this.charts[i])        
    //   }
    // }
    this.gettrue()
  },
  methods:{
    toggle(type){
      this.active = type
    },
    chartsA(item){
      if( item.id == 'chart0' ){
        var data = ['鞋业鞋材','制作业','其他']
        var color = ['#6ec8b2','#0bb4d3']
        var series = [
          {
            type: 'bar',
            barWidth:15,
            data: [128,43,51],        //数据
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
              },
            },
          }
        ]
      }else if( item.id == 'chart1' ){
        var data = ['南郊','仰义','滨江','丰门','双屿','山福镇','轻工园','藤桥镇','南汇']
        var color = ['#0073fb','#00c7e1']
        var series = [
          {
            type: 'bar',
            barWidth:8,
            data: [85.78,75.18,74.03,71.53,52.91,43.02,29.62,28.52,24.63],        //数据
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
              },
            },
          }
        ]
      }

      let text = item.title
      let myChart = this.$echarts.init(document.getElementById(item.id))
      myChart.clear();
      myChart.setOption({
        title: {
          text: text,
          textStyle:{
            color: '#fff',
            fontWeight:'500',
            fontSize:'16'
          },
          left:'15',
          top:'10',
        },
        tooltip : {
          trigger: 'axis',
          axisPointer : {           
              type : 'shadow'        
          }
        },
        yAxis: {
          type: 'value',
          position: 'left',
          axisTick: {
            show: false,
          },
          axisLine:{
            lineStyle:{
              color:'#5f7898',
            }
          },
          axisLabel: {
            color:'#fff',
            margin: 4,
          },
          splitLine: {
            show: true,
            lineStyle:{
              type:'dashed',
              color:'#5f7898',
            }
          }
        },
        xAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLabel: {
            color:'#fff',
            interval: 0,
            fontSize: 10,
            rotate:40
          },
          axisLine:{
            lineStyle:{
              color:'#5f7898',
            }
          },
          data:data
        },
        series: series
      });
    },
    chartsB(item){
        var data = ['丰门','工业园区','南郊','仰义','藤桥镇','双屿','山福镇','滨江','南汇']
        var color = ['#f52424','#ec8221','#2883f5','#127b49']
        var series = [
          {
            name: 'A类',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                  show: true,
                  position: 'inside',
                  formatter: function (params) {
                    if (params.value > 0) {
                        return params.value;
                    } else {
                        return '';
                    }
                  }
                }
            },
            data: [24, 15, 13, 12, 3, 3, 4, 1, 0]
          },
          {
            name: 'B类',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                  show: true,
                  position: 'inside',
                  formatter: function (params) {
                    if (params.value > 0) {
                        return params.value;
                    } else {
                        return '';
                    }
                  }
                }
            },
            data: [37, 8, 10, 14, 4, 8, 1, 0, 1]
          },
          {
            name: 'C类',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                  show: true,
                  position: 'inside',
                  formatter: function (params) {
                    if (params.value > 0) {
                        return params.value;
                    } else {
                        return '';
                    }
                	}
                }
            },
            data: [18, 11, 3, 9, 3, 7, 3, 1, 0]
          },
          {
            name: 'D类',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                  show: true,
                  position: 'inside',
                  formatter: function (params) {
                    if (params.value > 0) {
                        return params.value;
                    } else {
                        return '';
                    }
                  }
                }
            },
            data: [3, 4, 0, 0, 0, 1, 1, 0, 0]
          },
        ]


      let text = item.title
      let myChart = this.$echarts.init(document.getElementById(item.id))
      myChart.clear();
      myChart.setOption({
        title: {
          text: text,
          textStyle:{
            color: '#fff',
            fontWeight:'500',
            fontSize:'16'
          },
          left:'15',
          top:'5',
        },
        legend: {
          data: ['A类', 'B类','C类','D类'],
          top:'30',
          textStyle:{
            color:'#fff'
          }
        },
        color:color,
        tooltip : {
          trigger: 'axis',
          axisPointer : {           
              type : 'shadow'        
          }
        },
        yAxis: {
          type: 'category',
          data:data,
          axisTick: {
            show: false,
          },
          axisLine:{
            lineStyle:{
              color:'#5f7898',
            }
          },
          axisLabel: {
            color:'#fff',
            margin: 4,
          },
          splitLine: {
            show: false,
          }
        },
        xAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLabel: {
            color:'#fff',
            interval: 0,
            fontSize: 10,
            rotate:40
          },
          axisLine:{
            lineStyle:{
              color:'#5f7898',
            }
          },
          splitLine: {
            show: false,
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
        series: series
      });
    },
    getlandList(){
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      param.params = JSON.stringify(that.warpYD)
      that.$vux.loading.show();
      that.get(this.baseUrl+'/etl/au/data/u_land', param).then(function (res) {
        console.log(res)
        that.$vux.loading.hide();
        if (res.data.data) {
          that.addlist = res.data.data[0]._
          // that.search = res.data.data[0]._
        }
      }).catch(function (err) {
        that.$vux.loading.hide();
        that.$vux.toast.text('服务器连接失败');
      });
    },
    chartsC(item){
      var data = ['规上企业','规下企业']
      var color = ['#2ac9fd','#3add79']
      let text = item.title
      let myChart = this.$echarts.init(document.getElementById(item.id))
      myChart.clear();
      myChart.setOption({
        title: {
          text: text,
          textStyle:{
            color: '#fff',
            fontWeight:'500',
            fontSize:'16'
          },
          left:'15',
          top:'10',
        },
        tooltip: {
          trigger: 'item',
          formatter: "{b}: {c} 家"
        },
        legend: {
            data:data,
            bottom:'3%',
            textStyle:{
              color:'#fff',
            }
        },
        color:color,
        graphic: [{　　　　　　　　　　　　　　　　//环形图中间添加文字
          type: 'text',　　　　　　　　　　　　//通过不同top值可以设置上下显示
          left: 'center',　　　　　　　　　　
          top: '44%',
          style: {　　　　　　　　　　　　　　　　
              text: "总数667",
              textAlign: 'center',
              fill: '#fff',　　　　　　　　//文字的颜色
              width: 30,
              height: 30,
              fontSize: 28,
              color: "#4d4f5c",
              fontFamily: "Microsoft YaHei"
              }
          }],
        series: [
          {
            type:'pie',
            radius: ['50%', '70%'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
            },
            label: {
              normal: {
                  show:true,
                  padding: [0, 0],
                  formatter :"{c}家",
                  color:'#fff'
                }
              },
            labelLine: {
              normal: {
                  length: 5,
                  length2: 5
              }
            },
            data:[
                {value:222, name:'规上企业'},
                {value:445, name:'规下企业'},
            ]
        }
        ]
      });
    },
    chartsD(item){
        var data = ['100万/亩以上','30-100万/亩','15-30万/亩','5-15万/亩','5万/亩以下']
        var color = ['#0c2344','#e99b05','#1acc4a','#4af1fd','#4e98fc','#af4ffc']
        var series = [
          {
            type: 'bar',
            barWidth:18,
            data: [
              {
                value:'48',
                itemStyle: {
                  normal: {
                    barBorderRadius:[10,10,10,10],
                    //颜色渐变
                    color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      offset: 0,
                      color: color[1]
                    }, {
                      offset: 1,
                      color: color[0]
                    }]),
                  },
                },
              },
              {
                value:'184',
                itemStyle: {
                  normal: {
                    barBorderRadius:[10,10,10,10],
                    //颜色渐变
                    color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      offset: 0,
                      color: color[2]
                    }, {
                      offset: 1,
                      color: color[0]
                    }]),
                  },
                },
              },
              {
                value:'198',
                itemStyle: {
                  normal: {
                    barBorderRadius:[10,10,10,10],
                    //颜色渐变
                    color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      offset: 0,
                      color: color[3]
                    }, {
                      offset: 1,
                      color: color[0]
                    }]),
                  },
                },
              },
              {
                value:'177',
                itemStyle: {
                    normal: {
                    barBorderRadius:[10,10,10,10],
                    //颜色渐变
                    color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      offset: 0,
                      color: color[4]
                    }, {
                      offset: 1,
                      color: color[0]
                    }]),
                  },
                },
              },
              {
                value:'60',
                itemStyle: {
                  normal: {
                    barBorderRadius:[10,10,10,10],
                    //颜色渐变
                    color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      offset: 0,
                      color: color[5]
                    }, {
                      offset: 1,
                      color: color[0]
                    }]),
                  },
                },
              }
            ],   
          }
        ]

      let text = item.title
      let myChart = this.$echarts.init(document.getElementById(item.id))
      myChart.clear();
      myChart.setOption({
        title: {
          text: text,
          textStyle:{
            color: '#fff',
            fontWeight:'500',
            fontSize:'16'
          },
          left:'15',
          top:'10',
        },
        tooltip : {
          trigger: 'axis',
          axisPointer : {           
              type : 'shadow'        
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'category',
          position: 'left',
          axisTick: {
            show: false,
          },
          axisLine:{
            lineStyle:{
              color:'#5f7898',
            }
          },
          axisLabel: {
            color:'#fff',
            margin: 4,
          },
          splitLine: {
            show: false,
          },
          data:data
        },
        xAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLabel: {
            color:'#fff',
            interval: 0,
            fontSize: 10,
            rotate:40
          },
          axisLine:{
            lineStyle:{
              color:'#5f7898',
            }
          },
          splitLine: {
            show: false,
          },
        },
        series: series
      });
    },
    // onChange(){
    //   var item = []
    //   var data = this.search
    //   var val1 = this.pickerM
    //   var val2 = this.pickerQ
    //   for(var i = 0;i<data.length;i++ ){
    //     if(val1.length == 0){
    //       if( val2.length == 0 ){
    //           item = data
    //       }else{
    //         if( val2[0] == data[i].lx ){
    //           item.push(data[i])
    //         }
    //       }
    //     }else{
    //       var value = data[i].mj
    //       if( val2.length == 0){
    //         if(val1[0] == '50亩以下'){
    //           if( value <= 50 ){
    //             item.push(data[i])
    //           }
    //         }else if(val1[0] == '50亩-100亩'){
    //           if(  value > 50 && value <= 100 ){
    //             item.push(data[i])
    //           }
    //         }else if(val1[0] == '100亩-200亩'){
    //           if(  value > 100 && value <= 200 ){
    //             item.push(data[i])
    //           }
    //         }else if(val1[0] == '200亩以上'){
    //           if(  value >= 200 ){
    //             item.push(data[i])
    //           }
    //         }
    //       }else{
    //         if( val2[0] == data[i].lx ){
    //           if(val1[0] == '50亩以下'){
    //             if( value <= 50 ){
    //               item.push(data[i])
    //             }
    //           }else if(val1[0] == '50亩-100亩'){
    //             if(  value > 50 && value <= 100 ){
    //               item.push(data[i])
    //             }
    //           }else if(val1[0] == '100亩-200亩'){
    //             if(  value > 100 && value <= 200 ){
    //               item.push(data[i])
    //             }
    //           }else if(val1[0] == '200亩以上'){
    //             if(  value >= 200 ){
    //               item.push(data[i])
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    //   this.addlist = item
    // },
    // getitemlist(){
    //   var item = this.itemlist
    //   var warp = this.warplist
    //   for(var i = 0 ;i<item.length;i++){
    //     for(var l = 0 ;l<warp.length;l++){
    //       if(item[i].name == warp[l]){
    //         item[i].show = true
    //       }
    //     }
    //   }
    //   this.show = true
    // },
    // getwarplist(){
    //   var data = []
    //   var list = this.itemlist
    //   for(var i = 0 ;i<list.length;i++){
    //     if(list[i].show == true){
    //       data.push(list[i].name)
    //     }
    //   }
    //   this.warplist = data
    //   this.show = false
    // },
    // getPP(){
    //   this.getlandList()
    // },
    pickeractive(index){
      var data = this.pickerlist
      data[index].show = !data[index].show

      // for(var i = 0;i<data.length;i++){
      //   if(i == index){
      //     data[i].show = !data[i].show
      //   }else{
      //     data[i].show = false
      //   }
      // }
    },
    getmap(item){
      var id = item['lx']
      if(id == '已征待拆'){
        var l = 'u_ydyzdc'
        var type = 'polygon'
      }else if( id == '可供地块'){
        var l = 'u_ydkgdk'
        var type = 'polygon'
      }else if( id == '招商地块'){
        var l = 'u_zsdkd'
        var type = 'point'
      }
      this.$router.push('/map?type='+type+'&id='+l+'&name='+item['dkzl'])
    },
    getrangelist(index,name,listindex){
      var list = this.Ranges
      for(var i = 0;i<list.length;i++){
        if(index == i){
          var min = parseInt(name.split('-')[0])
          var max = parseInt(name.split('-')[1])
          list[i].min = min
          list[i].max = max

          for(var l = 0;l<list[i].list.length;l++){
            if( l == listindex ){
              list[i].list[l].show = true
            }else{
              list[i].list[l].show = false
            }
          }
        }
      }
    },
    getsearch(index){
      var list = this.itemlist
      for(var i = 0 ; i<list.length;i++){
        if(i == index){
          list[i].show = !list[i].show
        }
      }
    },
    getNo(){
      var that = this
      for(var i =0;i<this.itemlist.length;i++){
        if( i == 5 ){
          that.itemlist[i].show = true
        }else{
          that.itemlist[i].show = false
        }
      }
      for(var m =0;m<this.pickerlist.length;m++){
        that.pickerlist[m].show = true
      }
      for(var l =0;l<this.Ranges.length;l++){
        var list = that.Ranges[l]
        list.min = ''
        list.max = ''
        
        for(var x = 0;x<list.list.length;x++){
          list.list[x].show = false
        }
      }
    },
    gettrue(){
      var that = this;
      var val = []
      this.show = false
      this.warpYD = {}
      for( var x =0;x<this.pickerlist.length;x++){
        if(that.pickerlist[x].show == true){
          val.push(that.pickerlist[x].name)
          if(that.pickerlist[0].show != that.pickerlist[1].show ){
            that.warpYD.lx = that.pickerlist[x].name
          }
        }
      }
      for( var i =0;i<this.Ranges.length;i++){
        if(that.Ranges[i].min == '' && that.Ranges[i].max == ''){

        }else{
          val.push(that.Ranges[i].name.split('区间')[0]+'：'+that.Ranges[i].min+'~'+that.Ranges[i].max)
          if(that.Ranges[i].min != ''){
            that.warpYD.mjs = that.Ranges[i].min
          }

          if(that.Ranges[i].max != ''){
            that.warpYD.mje = that.Ranges[i].max
          }
        }
      }
      var src = [];
      for( var l =0;l<this.itemlist.length;l++){
        if(that.itemlist[l].show == true){
          val.push(that.itemlist[l].name)
          for(var k in that.listX){
            if(that.listX[k].type == that.itemlist[l].code){
              for(var s in that.listX[k].list){
                src.push(that.listX[k].list[s])
              }
            }
          }
        }
      }
      if(src.length != 0){
        that.warpYD.ydxz = src
      }
      this.value = val
      this.getlandList()
    }
  },
  watch: {

  },
}
export default land