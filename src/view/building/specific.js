const specific = {
  data: () => {
    return {
      list: [],
      warp: [],
      data: {},
      bing: [],
      name: "",
      List: [],
      namelist: [],
      chartsForceLabel: { data: {} }
    };
  },
  methods: {
    getmap(type, id, name) {
      this.$router.push("/map?type=" + type + "&id=" + id + "&name=" + name);
    },
    getjoin(name, id) {
      localStorage["join"] = JSON.stringify({ name: name, id: id });
      this.$router.push("/join");
    },
    getitem() {
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      that.$vux.loading.show();
      that
        .get(this.baseUrl + "/etl/au/data/u_lyzb", param)
        .then(function(res) {
          that.$vux.loading.hide();
          if (res.data.data) {
            var item = res.data.data[0]._;
            var d = that.data;
            for (var i = 0; i < item.length; i++) {
              if (d["固定ID"] == item[i]["固定id"]) {
                that.warp = [
                  { title: item[i]["便利店"], name: "便利店" },
                  { title: item[i]["停车场"], name: "停车场" },
                  { title: item[i]["公交站"], name: "公交站" },
                  { title: item[i]["公园"], name: "公园" },
                  { title: item[i]["加油站"], name: "加油站" },
                  { title: item[i]["医院"], name: "医院" },
                  { title: item[i]["大型商场"], name: "大型商场" },
                  { title: item[i]["娱乐健身"], name: "娱乐健身" },
                  { title: item[i]["学校"], name: "学校" },
                  { title: item[i]["宾馆"], name: "宾馆" },
                  { title: item[i]["小区"], name: "小区" },
                  { title: item[i]["楼宇"], name: "楼宇" },
                  { title: item[i]["银行"], name: "银行" },
                  { title: item[i]["餐饮店"], name: "餐饮店" }
                ];
              }
            }
          }
        })
        .catch(function(err) {
          that.$vux.loading.hide();
          that.$vux.toast.text("服务器连接失败");
        });
    },
    getdata() {
      var data = this.data;
      this.list = [
        { title: "总面积", value: data["总面积"], text: "(㎡)" },
        {
          title: "租金",
          value: data["租金（元/平方米/月）"],
          text: "(元/m²/月)"
        },
        {
          title: "物业费",
          value: data["物业费（元/平方米/月）"],
          text: "(元/m²/月)"
        },
        { title: "楼层数", value: data["楼层数"], text: "(层)" },
        { title: "入驻企业数", value: data["入驻企业数"], text: "(家)" },
        { title: "入驻率", value: data["入驻率"] * 100, text: "(%)" }
      ];
    },
    getecharts() {
      const that = this;
      let myChart = this.$echarts.init(document.getElementById("echarts"));
      var color = [
        "#00d4fa",
        "#ff6766",
        "#006afc",
        "#0589f8",
        "#25b7fb",
        "#00d88e",
        "#fe8300",
        "#ffc500",
        "#8500f7"
      ];
      myChart.clear();
      // 绘制图表
      myChart.setOption({
        title: {
          text: "业态分布",
          textStyle: {
            color: "#4d5572",
            fontSize: 16
          },
          x: "center",
          top: 18
        },
        // tooltip: {
        //   trigger: "item",
        //   formatter: "{a} : {c} ({d}%)"
        // },
        legend: {
          x: "center",
          y: "bottom",
          data: this.namelist,
          textStyle: {
            color: color
          }
        },
        series: [
          {
            name: "企业数量",
            type: "pie",
            radius: [70, 100],
            center: ["50%", "45%"],
            data: this.bing,
            color
          }
        ]
      });
      myChart.on("mouseover", function(params) {
        that.chartsForceLabel = params;
      });
    },
    lyxx() {
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      that.$vux.loading.show();
      that
        .get(this.baseUrl + "/etl/au/data/u_lyxx", param)
        .then(function(res) {
          that.$vux.loading.hide();
          if (res.data.data) {
            var dev = res.data.data[0]._;
            for (var i = 0; i < dev.length; i++) {
              if (dev[i]["楼宇名称"] == that.name) {
                that.data = dev[i];
              }
            }
            that.getdata();
          }
        })
        .catch(function(err) {
          that.$vux.loading.hide();
          that.$vux.toast.text("服务器连接失败");
        });
    },
    lcxx() {
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      param.params = JSON.stringify({ status: "0", name: this.name });
      that.$vux.loading.show();
      that
        .get(this.baseUrl + "/etl/au/data/u_lcxx", param)
        .then(function(res) {
          that.$vux.loading.hide();
          if (res.data.data) {
            var array = [];
            for (var i = 0; i < res.data.data[0]._.length; i++) {
              var ret = false;
              for (var j = 0; j < array.length; j++) {
                if (array[j].rzqy == res.data.data[0]._[i].rzqy) {
                  ret = true;
                  break;
                }
              }
              if (!ret) {
                array.push(res.data.data[0]._[i]);
              }
            }
            that.List = array;
            that.echartslist();
          }
        })
        .catch(function(err) {
          that.$vux.loading.hide();
          that.$vux.toast.text("服务器连接失败");
        });
    },
    echartslist() {
      var that = this;
      var list = this.List;
      var array = [];
      for (var i = 0; i < list.length; i++) {
        var ret = false;
        if (list[i].hy == "" || list[i].hy == null) {
          list[i].hy = "未知行业";
        }
        for (var j = 0; j < array.length; j++) {
          if (array[j].name == list[i].hy) {
            array[j].list.push(list[i]);
            ret = true;
            break;
          }
        }
        if (!ret) {
          array.push({ list: [list[i]], name: list[i].hy });
        }
      }
      for (var x = 0; x < array.length; x++) {
        that.bing.push({ value: array[x].list.length, name: array[x].name });
        that.namelist.push(array[x].name);
      }
      this.getecharts();
    }
  },
  watch: {}
};
export default specific;
