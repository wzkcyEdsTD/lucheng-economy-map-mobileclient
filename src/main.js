// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import { router } from "@/router";
import store from "./store/index";
import axios from "axios/dist/axios.min.js";
import common from "@/assets/lib/common.js";
import echarts from "@/assets/lib/echarts";
import Mint from "mint-ui";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.min.css";

Vue.use(Mint);
Vue.prototype.$echarts = echarts;
Vue.mixin(common);
Vue.prototype.axios = axios;
// axios.defaults.baseURL = '/api'
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
// import BScroll from 'better-scroll' //滚动插件
// import { Actionsheet } from 'vux' //vux-ui
// Vue.component('actionsheet', Actionsheet)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
