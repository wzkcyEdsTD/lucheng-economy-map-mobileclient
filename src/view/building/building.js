const building = {
  data: () => {
    return {
      // pickerM: [],
      // pickerQ: [],
      // pickerD: [],
      // listM: [['10000m²以下','10000m²-30000m²','30000m²-50000m²','50000m²以上']],
      // listQ: [['30元/㎡以下', '30-60元/㎡', '60-90元/㎡', '90元/㎡以上']],
      // listD: [['滨江街道', '南汇街道', '五马街道', '藤桥镇', '丰门街道','七都街道','蒲鞋市街道','南郊街道','大南街道','松台街道','广化街道','双屿街道','山福镇','仰义街道']],
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
      warpLY: {},
      data: [],
      search: [],
      errorImg: 'this.src=" ' + require("../../assets/img/Nophoto.png") + ' "',
      show: false,
      value: [],
      Ranges: [
        {
          name: "闲置面积区间",
          min: "",
          max: "",
          list: [
            { name: "0-150", show: false },
            { name: "150-300", show: false },
            { name: "300-600", show: false }
          ]
        },
        {
          name: "月租金区间",
          min: "",
          max: "",
          list: [
            { name: "0-30", show: false },
            { name: "30-50", show: false },
            { name: "50-100", show: false }
          ]
        },
        {
          name: "物业费区间",
          min: "",
          max: "",
          list: [
            { name: "0-5", show: false },
            { name: "5-10", show: false },
            { name: "10-15", show: false }
          ]
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.refresh();
  },
  methods: {
    refresh() {
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      param.params = JSON.stringify(that.warpLY);
      that.$vux.loading.show();
      that
        .get(this.baseUrl + "/etl/au/data/u_lcxx_list", param)
        .then(function(res) {
          that.$vux.loading.hide();
          if (res.data.data) {
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
                  list: [res.data.data[0]._[i]]
                });
              }
            }
            that.data = array;
            // that.search=res.data.data[0]._;
          }
        })
        .catch(function(err) {
          that.$vux.loading.hide();
          that.$vux.toast.text("服务器连接失败");
        });
    },
    getspecific(item) {
      localStorage["Listitem"] = JSON.stringify(item.name);
      this.$router.push("/specific");
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
    getsearch(index) {
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
          //   list[i].show = true
          // }else{
          //   list[i].show = false
        }
      }
    },
    getNo() {
      var that = this;
      for (var i = 0; i < this.streetlist.length; i++) {
        that.streetlist[i].show = false;
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
      this.warpLY = {};
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
      if (Object.keys(this.warpLY).length) {
        this.warpLY.status = "2";
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
      // let src = '';
      // for(let s in streetArr){
      //   src += streetArr[s];
      //   if(s < streetArr.length-1){
      //     src += ','
      //   }
      // }
      // if(src != ''){
      //   that.warpLY.ssjd = src;
      // }
      if (streetArr.length != 0) {
        that.warpLY.ssjd = streetArr;
      }
      this.value = val;
      this.refresh();
    }
    // getwarplist(){
    //   if(this.street == '全部'){
    //     this.warpLY.ssjd = ""
    //   }else{
    //     this.warpLY.ssjd = this.street
    //   }
    //   this.show = false
    // },
    // getstreet(name){
    //   var list = this.streetlist
    //   for(var i = 0 ;i<list.length;i++){
    //     if(list[i].name == name){
    //       list[i].show = true
    //     }else{
    //       list[i].show = false
    //     }
    //   }
    //   this.street = name
    // },
    // getPP(){
    //   this.refresh()
    // },
    // getitemlist(){
    //   var name = this.street
    //   var list = this.streetlist
    //   for(var i = 0 ;i<list.length;i++){
    //     if(list[i].name == name){
    //       list[i].show = true
    //     }else{
    //       list[i].show = false
    //     }
    //   }
    //   this.show = true
    // },
    // onChange(){
    //   var value = val[0]
    //   if( value == '全部'){
    //     var jie = ''
    //   }else{
    //     var jie = value
    //   }
    //   this.warpLY.ssjd = jie
    // }
    // onChange(){
    //   var item = []
    //   var data = this.search
    //   var val1 = this.pickerM
    //   var val2 = this.pickerD

    //   for(var i = 0;i<data.length;i++ ){
    //     if(val1.length == 0){
    //       if( val2.length == 0 ){
    //           item = data
    //       }else{
    //         if( val2[0] == data[i]['属地街道'] ){
    //           item.push(data[i])
    //         }
    //       }
    //     }else{
    //       var value = data[i]['总面积']
    //       if( val2.length == 0){
    //         if(val1[0] == '10000m²以下'){
    //           if( value <= 10000 ){
    //             item.push(data[i])
    //           }
    //         }else if(val1[0] == '10000m²-30000m²'){
    //           if(  value > 10000 && value <= 30000 ){
    //             item.push(data[i])
    //           }
    //         }else if(val1[0] == '30000m²-50000m²'){
    //           if(  value > 30000 && value <= 50000 ){
    //             item.push(data[i])
    //           }
    //         }else if(val1[0] == '50000m²以上'){
    //           if(  value >= 50000 ){
    //             item.push(data[i])
    //           }
    //         }
    //       }else{
    //         if(val2[0] == data[i]['属地街道']){
    //           if(val1[0] == '10000m²以下'){
    //             if( value <= 10000 ){
    //               item.push(data[i])
    //             }
    //           }else if(val1[0] == '10000m²-30000m²'){
    //             if(  value > 10000 && value <= 30000 ){
    //               item.push(data[i])
    //             }
    //           }else if(val1[0] == '30000m²-50000m²'){
    //             if(  value > 30000 && value <= 50000 ){
    //               item.push(data[i])
    //             }
    //           }else if(val1[0] == '50000m²以上'){
    //             if(  value >= 50000 ){
    //               item.push(data[i])
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }

    //   this.data = item
    // }
  },
  watch: {}
};
export default building;
