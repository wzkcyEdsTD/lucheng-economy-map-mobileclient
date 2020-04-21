/* eslint-disable */

/**
 * [api]标准接口处理
 */
import axios from "axios";
let defaultAxios = null;
//  测试写死
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJldGFnIjoiK21PVWIxaER0SkE9IiwiYXVfdHlwZSI6ImF1X3VzZXIiLCJleHAiOjE1NzgwMTMyNDMsImF1X3VzZXJpZCI6Mjh9.lzGGx7tEqWvsKutuihcM998WJERUUQi5umSjP5usWis";
export function getDefaultAxios() {
  if (!defaultAxios) {
    defaultAxios = getAxiosInstance();
  }
  return defaultAxios;
}

/**
 * 获取Axios实例对象
 * [timeout] 30,000 ms超时
 */
function getAxiosInstance() {
  const instance = axios.create();
  instance.defaults.baseURL = "/api";
  instance.defaults.headers.post["Content-Type"] = "multipart/form-data";
  instance.interceptors.request.use(
    config => {
      if (config.method === "post") {
        config.data.etag = "+mOUb1hDtJA=";
        config.data.res = "testsql_all";
      }
      if (config.method === "get") {
        config.params.etag = "+mOUb1hDtJA=";
        config.params.res = "testsql_all";
      }
      // config.headers["Authorization"] = ACCESS_TOKEN;
      return config;
    },
    err => {
      // 请求超时!
      return Promise.reject(err);
    }
  );
  instance.interceptors.response.use(
    data => {
      if (data.errors) {
        // err code...
      }
      return data.data;
    },
    err => {
      //==============  错误处理  ====================
      if (err && err.response) {
        if (err.response.status) {
          switch (err.response.status) {
            case 400:
              err.message = "请求错误(400)";
              break;
            case 401:
              err.message = "未授权，请重新登录(401)";
              break;
            case 403:
              err.message = "拒绝访问(403)";
              break;
            case 404:
              err.message = "请求出错(404)";
              break;
            case 408:
              err.message = "请求超时(408)";
              break;
            case 500:
              err.message = "服务器错误(500)";
              break;
            case 501:
              err.message = "服务未实现(501)";
              break;
            case 502:
              err.message = "网络错误(502)";
              break;
            case 503:
              err.message = "服务不可用(503)";
              break;
            case 504:
              err.message = "网络超时(504)";
              break;
            case 505:
              err.message = "HTTP版本不受支持(505)";
              break;
            default:
              err.message = `连接出错(${err.response.status})!`;
          }
        }
        if (err.response.data && err.response.data.errors) {
          err.message = err.response.data.errors[0].title;
        }
      } else {
        err.message = "连接服务器失败!";
      }
      // hint(err)
      return Promise.reject(err);
    }
  );
  return instance;
}
