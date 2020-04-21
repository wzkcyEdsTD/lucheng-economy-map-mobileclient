const enterprisedetail = {
  data:() => {
    return{
      data:{},
      qyzclist:{},
      ydpjblist:{},
      qyczblist:{},
      qynblist:{}
    }
  },
  created(){
    this.data = JSON.parse(localStorage['Listitem'])
  },
  mounted(){
    // this.qyzc()
    // this.qynb()
    // this.ydpjb()
    // this.qyczb()
  },
  methods:{
    qyzc(){
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      param.params = JSON.stringify({ 'uuid':that.data['统一社会信用代码']})
      that.$vux.loading.show();
      that.get(this.baseUrl+'/etl/au/data/u_qyzc', param).then(function (res) {
        that.$vux.loading.hide();
        if (res.data.data) {
          that.qyzclist = res.data.data[0]._[0]
        }
      }).catch(function (err) {
        that.$vux.loading.hide();
        that.$vux.toast.text('服务器连接失败');
      });
    },
    qynb(){
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      param.params = JSON.stringify({ 'uuid':that.data['统一社会信用代码']})
      that.$vux.loading.show();
      that.get(this.baseUrl+'/etl/au/data/u_qynb', param).then(function (res) {
        that.$vux.loading.hide();
        if (res.data.data) {
          var arr = res.data.data[0]._
          arr.sort(function (a, b) {
            if (parseInt(a['年报年度']) < parseInt(b['年报年度'])){
              return 1;
            } else if (parseInt(a['年报年度']) == parseInt(b['年报年度'])) {
              return 0;
            } else {
              return -1;
            }
          });
          that.qynblist = arr[0]
        }
      }).catch(function (err) {
        that.$vux.loading.hide();
        that.$vux.toast.text('服务器连接失败');
      });
    },
    ydpjb(){
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      param.params = JSON.stringify({ 'uuid':that.data['统一社会信用代码']})
      that.$vux.loading.show();
      that.get(this.baseUrl+'/etl/au/data/u_ydpjb', param).then(function (res) {
        that.$vux.loading.hide();
        if (res.data.data) {
          that.ydpjblist = res.data.data[0]._[0]
        }
      }).catch(function (err) {
        that.$vux.loading.hide();
        that.$vux.toast.text('服务器连接失败');
      });
    },
    qyczb(){
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.res = this.res;
      // param.token = that.base.user.access_token;
      param.params = JSON.stringify({ 'uuid':that.data['统一社会信用代码']})
      that.$vux.loading.show();
      that.get(this.baseUrl+'/etl/au/data/u_qyczb', param).then(function (res) {
        that.$vux.loading.hide();
        if (res.data.data) {
          that.qyczblist = res.data.data[0]._[0]
        }
      }).catch(function (err) {
        that.$vux.loading.hide();
        that.$vux.toast.text('服务器连接失败');
      });
    }
  },
  watch: {

  },
}
export default enterprisedetail