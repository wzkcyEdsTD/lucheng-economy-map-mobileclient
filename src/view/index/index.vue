<template></template>

<script>
export default {
  data() {
    return {
      mobile:''
    };
  },
  mounted() {
    this.mobile = this.$route.query.mobile
    this.login()
  },
  methods: {
    login() {
      var that = this;
      var param = {};
      param.etag = this.etag;
      param.username = "suosi_api";
      param.time = that.dateFormatting(new Date(), "yyyy-MM-dd HH:mm:ss");
      param.code = that.md5(param.username + "wzzh" + param.time).toUpperCase();
      that.$vux.loading.show();
      that
        .post(this.baseUrl + "/etl/au/token", param)
        .then(function(res) {
          console.log(res);
          that.$vux.loading.hide();
          if (res.data.data) {
            that.base.user = res.data.data[0];
            localStorage[that.cacheName] = JSON.stringify(that.base);
            localStorage["active"] = JSON.stringify(0);
            localStorage["warpactive"] = JSON.stringify(0);
            localStorage["itemactive"] = JSON.stringify(0);
            localStorage["gif"] = JSON.stringify(0);
            that.$router.push("/overview");
          }
        })
        .catch(function(err) {
          that.$vux.loading.hide();
          that.$vux.toast.text("服务器连接失败");
        });
    },
    // login () {
    //   var that = this;
    //   var param = {};
    //   param.etag = this.etag;
    //   param.mobile = this.mobile;
    //   param.time = that.dateFormatting(new Date(), 'yyyy-MM-dd HH:mm:ss');;
    //   param.code = (that.md5(param.mobile + 'wzzh' + param.time)).toUpperCase();
    //   that.$vux.loading.show();
    //   that.post(that.baseUrl+'/etl/au/token_mobile', param).then(function (res) {
    //     that.$vux.loading.hide();
    //     if (res.data.data[0].error) {
    //       that.$router.push('/manual');
    //     }else{
    //       that.base.user = res.data.data[0];
    //       localStorage[that.cacheName] = JSON.stringify(that.base);
    //       localStorage['active'] = JSON.stringify(0)
    //       localStorage['warpactive'] = JSON.stringify(0)
    //       localStorage['itemactive'] = JSON.stringify(0)
    //       localStorage['gif'] = JSON.stringify(0)
    //       that.$router.push('/home');
    //     }
    //   }).catch(function (err) {
    //     that.$vux.loading.hide();
    //     that.$vux.toast.text('服务器连接失败');
    //   });
    // }
  }
};
</script>

<style lang="less" scoped>
</style>
