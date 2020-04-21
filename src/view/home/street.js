const street = {
  data:() => {
    return{
      span:true,
      charts:[
        { id:'chart0' , title:'规上工业增加值增速' , type: 1},
        { id:'chart1' , title:'限上批零住餐销售(营业)总额(亿元)' , type: 2},
        { id:'chart2' , title:'限上消费品零售总额(亿元)' , type: 3},
      ],
      data:{},
      JJ:true,
      images:[],
      imgs:[]
    }
  },
  created(){
    this.data = JSON.parse(localStorage['Listitem'])
    console.log(this.data)
    this.imgs = [
      {
        src:this.baseImage+'/icon/streetImg/'+this.data.name+'.png',
        msrc:this.baseImage+'/icon/streetImg/'+this.data.name+'.png',        
      }
    ]
    this.images = [
      {
        src:this.baseImage+this.data.image1.split('@')[1],
        msrc:this.baseImage+this.data.image1.split('@')[1],
      },
      {
        src:this.baseImage+this.data.image2.split('@')[1],
        msrc:this.baseImage+this.data.image2.split('@')[1],
      }
    ]
  },
  mounted(){
    // for(var i = 0;i<this.charts.length; i++ ){
    //   if( this.charts[i].type ==  1){
    //     this.zhexian(this.charts[i])
    //   }else{
    //     this.zhuzhuang(this.charts[i])
    //   }
    // }
  },
  methods:{
    zhexian(item){
      var color = ['#5eeec0']
      var series = [
        {
          data: [7.8,6.3,6,5.8,5.3,7.9],
          type: 'line',
          symbol:'circle',
          symbolSize:'7',
          areaStyle: {
            opacity:0.3
          }
        }
      ]
      let data = ['2018\n一季度','2018\n上半年','2018\n前三季度','2018\n全年','2019\n一季度','2019\n上半年']
      let text = item.title
      let myChart = this.$echarts.init(document.getElementById(item.id))
      myChart.clear();
        // 绘制图表
      myChart.setOption({
        title: {
          text: text,
          textStyle:{
            color: '#fff',
            fontWeight:'500',
            fontSize:'16'
          },
          left:'15',
          top:'0',
        },
        tooltip: {
          trigger: 'axis'
        },
        color:color,
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            color:'#fff',
            interval: 0,
            fontSize: 10
          },
          axisLine:{
            lineStyle:{
              color:'#5f7898',
            }
          },
          data: data
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false,
          },
          axisLine:{
            lineStyle:{
              color:'#5f7898',
            }
          },
          axisLabel: {
            margin: 2,
            color:'#fff',
            formatter: '{value}%'
          },
          splitLine: {
            show: true,
            lineStyle:{
              type:'dashed',
              color:'#5f7898',
            }
          }
        },
        grid: {
          left: 35,
          right: 20,
        },
        series:series
      });
    },
    zhuzhuang(item){
      let data = ['2018\n一季度','2018\n上半年','2018\n前三季度','2018\n全年','2019\n一季度','2019\n上半年']
      let text = item.title
      let myChart = this.$echarts.init(document.getElementById(item.id))
      myChart.clear();
      if( item.type ==  2){
        var color = ['#ff9645','#f2e232']
        var series = [
          {
            type: 'bar',
            barWidth:10,
            data: [8.2,4.3,6.8,3,5.7,1.9],        //数据
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
                barBorderRadius:[10,10,0,0]
              },
            },
          }
        ]
      }else if(item.type ==  3){
        var color = ['#13b8f4','#5eeec0']
        var series = [
          {
            type: 'bar',
            barWidth:10,
            data: [4.5,8.1,4,6.2,2.9,6.2],        //数据
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
                barBorderRadius:[10,10,0,0]
              },
            },
          }
        ]    
      }
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
            fontSize: 10
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
    getshow(index) {
      this.$refs.previewer.show(index)
    },
    getimgshow(index) {
      this.$refs.previewerimgs.show(index)
    }
  },
  watch: {

  },
}
export default street