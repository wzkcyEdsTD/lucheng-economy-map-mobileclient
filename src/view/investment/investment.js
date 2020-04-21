const investment = {
  data: () => {
    return {
      active: 0,
      nav: ["招商总述", "招商资源", "招商政策"],
      list: [],
      text: [],
      textLast: false,
      picker: 3,
      pickerlist: ["招商用地", "招商楼宇", "鹿城公房", "招商项目"],
      warpYD: {},
      warpLY: {
        status: "2"
      },
      warpGF: {
        dz: ""
      },
      warpZS: {
        name: ""
      },
      lcgfList: [
        { show: false, name: "全部" },
        { show: false, name: "空置" },
        { show: false, name: "在租" },
        { show: false, name: "自用" },
        { show: false, name: "调配" },
        { show: false, name: "其他" }
      ],
      // street:'全部',
      streetlist: [
        { show: false, name: "全部" },
        { show: false, name: "滨江街道" },
        { show: false, name: "南汇街道" },
        { show: false, name: "五马街道" },
        { show: false, name: "藤桥镇" },
        { show: false, name: "丰门街道" },
        { show: false, name: "七都街道" },
        { show: false, name: "蒲鞋市街道" },
        { show: false, name: "南郊街道" },
        { show: false, name: "大南街道" },
        { show: false, name: "松台街道" },
        { show: false, name: "广化街道" },
        { show: false, name: "双屿街道" },
        { show: false, name: "山福镇" },
        { show: false, name: "仰义街道" }
      ],
      TTlist: [
        { show: true, name: "已征待拆" },
        { show: true, name: "可供地块" }
      ],
      show: false,
      value: [],
      itemlist: [
        { show: false, name: "[A]公共管理与公共服务用地", code: "A" },
        { show: false, name: "[B]商业服务业设施用地", code: "B" },
        { show: false, name: "[E]非建设用地", code: "E" },
        { show: false, name: "[G]绿地与广场用地", code: "G" },
        { show: false, name: "[H]建设用地", code: "H" },
        { show: true, name: "[M]工业用地", code: "M" },
        { show: false, name: "[R]居住用地", code: "R" },
        { show: false, name: "[S]道路与交通设施用地", code: "S" },
        { show: false, name: "[U]公用设施用地", code: "U" },
        { show: false, name: "[W]物流仓储用地", code: "W" }
      ],
      listX: [
        { type: "A", list: ["文化设施用地", "教育科研用地", "中小学用地"] },
        {
          type: "B",
          list: ["商业用地", "商务用地", "旅馆用地", "加油加气站用地"]
        },
        {
          type: "C",
          list: [
            "商业金融业用地",
            "教育科研用地",
            "医疗卫生用地",
            "其他公共设施用地"
          ]
        },
        { type: "E", list: [] },
        {
          type: "G",
          list: ["公园绿地", "街头绿地", "防护绿地", "生产防护绿地", "防护绿地"]
        },
        { type: "H", list: [] },
        { type: "M", list: ["一类工业用地", "三类工业用地"] },
        {
          type: "R",
          list: ["二类居住用地", "服务设施用地", "公共服务设施用地"]
        },
        { type: "S", list: ["交通场站用地", "社会停车场用地"] },
        { type: "U", list: ["供应设施用地", "供电用地", "公共交通用地"] },
        { type: "W", list: ["一类物流仓储用地"] }
      ],
      // warplist:[],
      VR: 0,
      VRlist: ["招商地图", "招商项目", "VR视角"],
      VRwarp: [
        { name: "世纪公园", vr: "https://720yun.com/t/6e0jvpsOzk2" },
        { name: "世纪广场", vr: "https://720yun.com/t/50cjvp4Ozy3" },
        { name: "庄头滨水公园", vr: "https://720yun.com/t/22ejvpuktk0" },
        { name: "白鹿洲公园", vr: "https://720yun.com/t/3nqw9w9889fo6e741g" },
        { name: "汇昌河滨公园", vr: "https://720yun.com/t/0c3jvpuktv0" },
        {
          name: "置信广场 购物中心",
          vr: "https://720yun.com/t/a00jtOhytO4?scene_id=14812608"
        },
        { name: "绣山公园", vr: "https://720yun.com/t/85fjvpuktm4" },
        { name: "南塘风貌街", vr: "https://720yun.com/t/zzjjlrw3yd0ml82dur" },
        {
          name: "温州市体育中心",
          vr: "https://720yun.com/t/410jOpyOem6?scene_id=2669658"
        },
        { name: "马鞍池公园", vr: "https://720yun.com/t/d8djvpsOzk0" },
        { name: "杨府山公园", vr: "https://720yun.com/t/b9djvpukta2" },
        {
          name: "张璁碑亭",
          vr: "http://city.wzghj.gov.cn/city/wide/zwbt/index.html"
        },
        {
          name: "妙果寺",
          vr: "https://720yun.com/t/f90jtrkOvk0?scene_id=12791591"
        },
        {
          name: "松台山仙人井",
          vr: "http://city.wzghj.gov.cn/city/wide/28xjxrj/index.html"
        },
        { name: "九山公园", vr: "https://720yun.com/t/d2cjvpuk5w8" },
        {
          name: "纱帽河朱氏民居",
          vr: "http://city.wzghj.gov.cn/city/wide/smhzsmj/index.html"
        },
        { name: "五马街", vr: "https://720yun.com/t/qz776pql6zupx73lu9" },
        {
          name: "温州教育史馆",
          vr: "https://720yun.com/t/fe0j5ptatv4?scene_id=10798316"
        },
        {
          name: "义井",
          vr: "http://city.wzghj.gov.cn/city/wide/hjysyj/index.html"
        },
        {
          name: "冽泉",
          vr: "http://city.wzghj.gov.cn/city/wide/hjyslq/index.html"
        },
        { name: "中山公园", vr: "https://720yun.com/t/5a4jvp4Ozf8" },
        {
          name: "谯楼",
          vr: "http://city.wzghj.gov.cn/city/wide/jz/index.html"
        },
        {
          name: "飞鹏巷陈宅",
          vr: "http://city.wzghj.gov.cn/city/wide/fpxcz/index.html"
        },
        {
          name: "嘉会里巷 12号民居",
          vr: "http://city.wzghj.gov.cn/city/wide/jhlx12h/index.html"
        },
        {
          name: "城西大教堂",
          vr: "http://city.wzghj.gov.cn/city/wide/cxjdjt/index.html"
        },
        {
          name: "沧河巷金宅",
          vr: "http://city.wzghj.gov.cn/city/wide/chxjz/index.html"
        },
        { name: "翠微山公园", vr: "https://720yun.com/t/f99jvpuktk3" },
        {
          name: "夏鼐故居纪念馆",
          vr: "http://city.wzghj.gov.cn/city/wide/xngj/index.html"
        },
        {
          name: "瓯江南岸",
          vr: "https://720yun.com/t/af027mOvxef?scene_id=652899"
        },
        {
          name: "米房创意文化园",
          vr: "https://720yun.com/t/106jOztvvu4?scene_id=3022714"
        },
        {
          name: "瓦市小学 瓦市校区",
          vr: "https://720yun.com/t/6bejv0eOzu9?scene_id=19506938"
        },
        {
          name: "温州市中心医院",
          vr: "https://720yun.com/t/b59jzpumuw7?scene_id=8310467"
        },
        {
          name: "海坦广场",
          vr: "https://720yun.com/t/fc62ejfdcu6?scene_id=277571"
        },
        {
          name: "叶适墓",
          vr: "http://city.wzghj.gov.cn/city/wide/ysm/index.html"
        },
        {
          name: "朔门街封火墙",
          vr: "https://720yun.com/t/28e2bus5q4w?scene_id=1903857"
        },
        { name: "望江公园", vr: "https://720yun.com/t/fdajv0ukzv5" },
        { name: "江心屿风景区", vr: "https://720yun.com/t/8f4jvp4Ozy2" },
        {
          name: "江心寺",
          vr: "https://720yun.com/t/b3128jrvjcg?scene_id=296601"
        },
        {
          name: "浩然楼",
          vr: "http://city.wzghj.gov.cn/city/wide/hrl/index.html"
        },
        {
          name: "程让平祖居",
          vr: "http://city.wzghj.gov.cn/city/wide/crpzj/index.html"
        },
        {
          name: "松台山八角井",
          vr: "http://city.wzghj.gov.cn/city/wide/28xjbjj/index.html"
        },
        {
          name: "益康钱庄旧址",
          vr: "http://city.wzghj.gov.cn/city/wide/wzykqz/index.html"
        },
        { name: "南塘街 3号码头", vr: "https://720yun.com/t/c73jv0huOm5" }
      ],
      screenHeight: document.documentElement.clientHeight,
      imglist: [],
      // type:true,
      ID: 2,
      value: "",
      Ranges: [],
      trafficList: [],
      errorImg: 'this.src=" ' + require("../../assets/img/Nophoto.png") + ' "'
    };
  },
  created() {
    var view = this.$route.query.View;
    var viewID = this.$route.query.id;
    console.log(view);
    if (view) {
      this.active = view;
    }
    if (viewID) {
      this.VR = 1;
      if (viewID == 0) {
        this.zs();
      } else if (viewID == 1) {
        this.picker = 1;
        this.gettrue();
      } else if (viewID == 2) {
        this.picker = 0;
        this.gettrue();
      } else {
        this.picker = 2;
        this.gettrue();
      }
    } else {
      this.zs();
    }
    this.getRanges(this.picker);
    this.wx_doc();
    this.u_qwys();
  },
  mounted() {
    for (var i = 2; i < 69; i++) {
      // this.imglist.push({img:require("@/assets/img/"+i+".png")})
    }
  },
  methods: {
    u_qwys() {
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      that.$vux.loading.show();
      that
        .get(this.baseUrl + "/etl/au/data/u_qwys", param)
        .then(function(res) {
          console.log(res);
          that.$vux.loading.hide();
          if (res.data.data) {
            that.trafficList = res.data.data[0]._;
          }
        })
        .catch(function(err) {
          that.$vux.loading.hide();
          that.$vux.toast.text("服务器连接失败");
        });
    },
    wx_doc() {
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      that.$vux.loading.show();
      that
        .get(this.baseUrl + "/etl/au/data/wx_doc", param)
        .then(function(res) {
          that.$vux.loading.hide();
          if (res.data.data) {
            that.text = res.data.data[0]._;
          }
        })
        .catch(function(err) {
          that.$vux.loading.hide();
          that.$vux.toast.text("服务器连接失败");
        });
    },
    toggle(type) {
      this.active = type;
    },
    zs() {
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      param.params = JSON.stringify({
        xmmc: `%${this.warpZS.name}%`
      });
      that.$vux.loading.show();
      that
        .get(this.baseUrl + "/etl/au/data/u_zsdkm", param)
        .then(function(res) {
          that.$vux.loading.hide();
          if (res.data.data) {
            var array = [];
            for (var i = 0; i < res.data.data[0]._.length; i++) {
              var ret = false;
              for (var j = 0; j < array.length; j++) {
                if (array[j]["页码"] == res.data.data[0]._[i]["页码"]) {
                  array[j]["list"].push(res.data.data[0]._[i]);
                  ret = true;
                  break;
                }
              }
              if (!ret) {
                array.push({
                  页码: res.data.data[0]._[i]["页码"],
                  项目名称: res.data.data[0]._[i]["项目名称"],
                  项目英文: res.data.data[0]._[i]["项目英文"],
                  科室负责人电话: res.data.data[0]._[i]["科室负责人电话"],
                  科室负责人: res.data.data[0]._[i]["科室负责人"],
                  list: [res.data.data[0]._[i]]
                });
              }
            }
            that.list = array;
          }
          that.type = false;
        })
        .catch(function(err) {
          that.$vux.loading.hide();
          that.$vux.toast.text("服务器连接失败");
        });
    },
    getRanges(index) {
      var that = this;
      this.picker = index;
      if (this.picker == 0) {
        that.Ranges = [
          {
            name: "用地面积(亩)",
            min: "",
            max: "",
            list: [
              { name: "0-30", show: false },
              { name: "30-60", show: false },
              { name: "60-100", show: false }
            ]
          }
        ];
      } else if (this.picker == 1) {
        that.Ranges = [
          {
            name: "闲置面积区间(㎡)",
            min: "",
            max: "",
            list: [
              { name: "0-150", show: false },
              { name: "150-300", show: false },
              { name: "300-600", show: false }
            ]
          },
          {
            name: "月租金区间(元/月/㎡)",
            min: "",
            max: "",
            list: [
              { name: "0-30", show: false },
              { name: "30-50", show: false },
              { name: "50-100", show: false }
            ]
          },
          {
            name: "物业费区间(元/月/㎡)",
            min: "",
            max: "",
            list: [
              { name: "0-5", show: false },
              { name: "5-10", show: false },
              { name: "10-15", show: false }
            ]
          }
        ];
      } else if (this.picker == 2) {
        that.Ranges = [
          {
            name: "房屋面积(㎡)",
            min: "",
            max: "",
            list: [
              { name: "0-120", show: false },
              { name: "120-180", show: false },
              { name: "180-300", show: false }
            ]
          }
        ];
      } else {
        that.Ranges = [];
      }
    },
    pickeractive(index) {
      var data = this.TTlist;
      data[index].show = !data[index].show;
    },
    getPP() {
      var that = this;
      var url = "";
      var param = {};
      if (this.picker == 0) {
        url = "/etl/au/data/u_land";
        (that.ID = 0), (param.params = JSON.stringify(that.warpYD));
      } else if (this.picker == 1) {
        url = "/etl/au/data/u_lcxx_list";
        that.ID = 1;
        param.params = JSON.stringify(that.warpLY);
      } else if (this.picker == 2) {
        url = "/etl/au/data/u_lcgf";
        that.ID = 3;
        param.params = JSON.stringify(that.warpGF);
      } else {
        that.ID = 2;
        return;
      }
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      that.$vux.loading.show();
      that
        .get(this.baseUrl + url, param)
        .then(function(res) {
          that.$vux.loading.hide();
          if (that.ID == 0) {
            if (res.data.data) {
              that.list = res.data.data[0]._;
            }
          } else if (that.ID == 1) {
            var array = [];
            for (var i = 0; i < res.data.data[0]._.length; i++) {
              var ret = false;

              for (var j = 0; j < array.length; j++) {
                if (array[j].name == res.data.data[0]._[i].name) {
                  array[j].list.push(res.data.data[0]._[i]);
                  ret = true;
                  break;
                }
              }

              if (!ret) {
                array.push({
                  name: res.data.data[0]._[i].name,
                  rent: res.data.data[0]._[i].rent,
                  wygs: res.data.data[0]._[i].wygs,
                  ssjd: res.data.data[0]._[i].ssjd,
                  list: [res.data.data[0]._[i]]
                });
              }
            }
            that.list = array;
          } else {
            that.list = res.data.data[0]._;
          }
          that.type = false;
        })
        .catch(function(err) {
          that.$vux.loading.hide();
          that.$vux.toast.text("服务器连接失败");
        });
    },
    getduixian() {
      var url = "http://reward.wenzhou.gov.cn/app";
      window.open(url, "_blank");
    },
    getsearch(index) {
      if (this.picker == 0) {
        var list = this.itemlist;
        for (var i = 0; i < list.length; i++) {
          if (i == index) {
            list[i].show = !list[i].show;
          }
        }
      } else if (this.picker == 1) {
        var list = this.streetlist;
        for (var i = 0; i < list.length; i++) {
          if (i == index) {
            if (list[i].name == "全部") {
              if (list[i].show == true) {
                list[i].show = false;
              } else {
                list[i].show = true;
                for (var l = 1; l < list.length; l++) {
                  list[l].show = false;
                }
              }
            } else {
              list[i].show = !list[i].show;
              list[0].show = false;
            }
          }
        }
      } else {
        var list = this.lcgfList;
        for (var i = 0; i < list.length; i++) {
          if (i == index) {
            list[i].show = true;
          } else {
            list[i].show = false;
          }
        }
      }
    },
    getrangelist(index, name, listindex) {
      var list = this.Ranges;
      for (var i = 0; i < list.length; i++) {
        if (index == i) {
          var min = parseInt(name.split("-")[0]);
          var max = parseInt(name.split("-")[1]);
          list[i].min = min;
          list[i].max = max;

          for (var l = 0; l < list[i].list.length; l++) {
            if (l == listindex) {
              list[i].list[l].show = true;
            } else {
              list[i].list[l].show = false;
            }
          }
        }
      }
    },
    getNo() {
      var that = this;
      for (var i = 0; i < this.itemlist.length; i++) {
        if (i == 5) {
          that.itemlist[i].show = true;
        } else {
          that.itemlist[i].show = false;
        }
      }
      for (var n = 0; n < this.streetlist.length; n++) {
        that.streetlist[n].show = false;
      }
      for (var m = 0; m < this.TTlist.length; m++) {
        that.TTlist[m].show = true;
      }
      for (var t = 0; t < this.lcgfList.length; t++) {
        that.lcgfList[t].show = false;
      }
      for (var l = 0; l < this.Ranges.length; l++) {
        var list = that.Ranges[l];
        list.min = "";
        list.max = "";

        for (var x = 0; x < list.list.length; x++) {
          list.list[x].show = false;
        }
      }
    },
    gettrue() {
      var that = this;
      var val = [];
      this.show = false;
      if (this.picker == 0) {
        this.warpYD = {};
        val.push("用地");
        for (var x = 0; x < this.TTlist.length; x++) {
          if (that.TTlist[x].show == true) {
            val.push(that.TTlist[x].name);
            if (that.TTlist[0].show != that.TTlist[1].show) {
              that.warpYD.lx = that.TTlist[x].name;
            }
          }
        }
        for (var i = 0; i < this.Ranges.length; i++) {
          if (that.Ranges[i].min == "" && that.Ranges[i].max == "") {
          } else {
            val.push(
              that.Ranges[i].name.split("区间")[0] +
                "：" +
                that.Ranges[i].min +
                "~" +
                that.Ranges[i].max
            );
            if (that.Ranges[i].min != "") {
              that.warpYD.mjs = that.Ranges[i].min;
            }

            if (that.Ranges[i].max != "") {
              that.warpYD.mje = that.Ranges[i].max;
            }
          }
        }
        var src = [];
        for (var l = 0; l < this.itemlist.length; l++) {
          if (that.itemlist[l].show == true) {
            val.push(that.itemlist[l].name);
            for (var k in that.listX) {
              if (that.listX[k].type == that.itemlist[l].code) {
                for (var s in that.listX[k].list) {
                  src.push(that.listX[k].list[s]);
                }
              }
            }
          }
        }
        if (src.length != 0) {
          that.warpYD.ydxz = src;
        }
      } else if (this.picker == 1) {
        val.push("楼宇");
        this.warpLY = {};
        this.warpLY.status = "2";
        for (var i = 0; i < this.Ranges.length; i++) {
          if (that.Ranges[i].min == "" && that.Ranges[i].max == "") {
          } else {
            val.push(
              that.Ranges[i].name.split("区间")[0] +
                "：" +
                that.Ranges[i].min +
                "~" +
                that.Ranges[i].max
            );
            if (that.Ranges[i].min != "") {
              if (i == 0) {
                that.warpLY.areas = that.Ranges[i].min;
              } else if (i == 1) {
                that.warpLY.rents = that.Ranges[i].min;
              } else if (i == 2) {
                that.warpLY.wyrents = that.Ranges[i].min;
              }
            }
            if (that.Ranges[i].max != "") {
              if (i == 0) {
                that.warpLY.areae = that.Ranges[i].max;
              } else if (i == 1) {
                that.warpLY.rente = that.Ranges[i].max;
              } else if (i == 2) {
                that.warpLY.wyrente = that.Ranges[i].max;
              }
            }
          }
        }
        let streetArr = [];
        let streetlist = this.streetlist;
        for (var l = 0; l < streetlist.length; l++) {
          if (streetlist[l].show == true) {
            val.push(streetlist[l].name);
            if (streetlist[l].name != "全部") {
              streetArr.push(streetlist[l].name);
            }
          }
        }
        if (streetArr.length != 0) {
          that.warpLY.ssjd = streetArr;
        }
      } else if (this.picker == 2) {
        this.warpGF = { dz: that.warpGF.dz };
        val.push("公房");
        if (that.warpGF.dz != "") {
          val.push("地址：" + that.warpGF.dz);
        }
        for (var i = 0; i < this.Ranges.length; i++) {
          if (that.Ranges[i].min == "" && that.Ranges[i].max == "") {
          } else {
            val.push(
              that.Ranges[i].name +
                "：" +
                that.Ranges[i].min +
                "~" +
                that.Ranges[i].max
            );
            if (that.Ranges[i].min != "") {
              that.warpGF.mjs = that.Ranges[i].min;
            }

            if (that.Ranges[i].max != "") {
              that.warpGF.mje = that.Ranges[i].max;
            }
          }
        }
        var fwzt = "";
        for (var t = 0; t < this.lcgfList.length; t++) {
          if (that.lcgfList[t].show == true) {
            val.push(that.lcgfList[t].name);
            fwzt = that.lcgfList[t].name;
          }
        }
        if (fwzt != "" && fwzt != "全部") {
          that.warpGF.fwzt = fwzt;
        }
      } else if (this.picker == 3) {
        val.push("招商");
        this.zs();
      }

      this.value = val;
      this.getPP();
    },
    getmap() {
      var iframe = document.getElementById("map");
      iframe.contentWindow.postMessage(
        { mode: "polygon", table: "u_ydkgdk" },
        "*"
      );
    },
    getVR(item) {
      localStorage["Listitem"] = JSON.stringify(item);
      this.$router.push("/vr");
    },
    gettrafficType(name) {
      switch (name) {
        case "高铁":
          return "GT";
          break;
        case "轻轨":
          return "QG";
          break;
        case "省道":
          return "SD";
          break;
        case "高速":
          return "GS";
          break;
        case "机场":
          return "JC";
          break;
        default:
          break;
      }
    }
  },
  watch: {}
};
export default investment;
