import Axios from "axios";
import qs from "qs";
import vuxToolsCommon from "@/assets/lib/vuxToolsCommon.js";
import crypto from "crypto";

const common = {
  components: {},
  mixins: [vuxToolsCommon],
  data: () => {
    return {
      // baseUrl: "https://lysb.lucheng.gov.cn/api",
      baseUrl: "/api",
      baseImage: "https://lysb.lucheng.gov.cn/s/lc",
      cacheName: "JingJiDiTu",
      etag: "+mOUb1hDtJA=",
      res: "testsql_all"
    };
  },
  created() {
    this.base = localStorage[this.cacheName]
      ? JSON.parse(localStorage[this.cacheName])
      : {};
    Axios.defaults.withCredentials = true; //设置请求带上cookie
  },
  methods: {
    //请求方法封装
    get(url, params) {
      return Axios({
        method: "get",
        url: url,
        params: params,
        // headers:{
        //   "Authorization":this.base.user.access_token
        // }
      });
    },
    post(url, params) {
      return Axios.post(url, qs.stringify(params), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
    },
    delete(url, params) {
      return Axios({
        method: "delete",
        url: url,
        params: params
      });
    },
    valueClear(source, str) {
      var value = str ? str : "";
      var result = source ? source : value;
      return result;
    },
    md5(str) {
      var md5 = crypto.createHash("md5");
      md5.update(str);
      return md5.digest("hex");
    },
    dateFormatting(date, fmt) {
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "H+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
        }
      }
      return fmt;
    },
    //姓名脱敏
    tmName(data) {
      let nameLen = data.length;
      let namecode = "";
      let name;
      for (let i = 1; i < nameLen; i++) {
        namecode += "*";
      }
      name = data.replace(data.substr(0, nameLen - 1), namecode);
      return name;
    },
    //身份证脱敏
    tmCode(data) {
      let code;
      code = data.substr(0, 1);
      code += "**************";
      code += data.substr(17);
      // var code = data.replace(data.substr(1, 16), '**************');
      return code;
    },
    //手机号码脱敏
    tmTel(data) {
      let tel;
      tel = data.substr(0, 3);
      tel += "*****";
      tel += data.substr(7);
      return tel;
    },
    //身份证号码校验
    validationCardNo(value) {
      // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
      var reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
      return reg.test(value);
    }
  }
};
export default common;
