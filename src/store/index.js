/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import { axiosApi } from "@/api/axiosApi";
Vue.use(Vuex);

/**
 * 排序 乱序函数
 * @param {*} x
 * @param {*} y
 */
const _RANDOM_ = (x, y) => {
  return 0.5 - Math.random();
};

export default new Vuex.Store({
  state: {
    /** overview */
    streets: [], // 街镇
    topCompanies: [], //  优质企业
    canvass: [] //  招商项目
  },
  mutations: {
    /**
     * 修改街镇数组
     * @param {*} state
     * @param {*} val
     */
    updateStreets(state, val) {
      state.streets = val;
    },
    /**
     * 修改优质企业
     * @param {*} state
     * @param {*} val
     */
    updateTopCompanies(state, val) {
      state.topCompanies = val;
    },
    /**
     * 修改优质企业
     * @param {*} state
     * @param {*} val
     */
    updateCanvass(state, val) {
      state.canvass = val;
    }
  },
  actions: {
    async fetchStreets({ state, commit }) {
      const [{ _ }] = await axiosApi({
        url: "/etl/au/data/u_streetinfo",
        params: {}
      });
      commit("updateStreets", [..._]);
    },
    async fetchTopCompanies({ state, commit }) {
      const [{ _ }] = await axiosApi({
        url: "/etl/au/data/gxqy",
        params: { offset: 0, limit: 20 }
      });
      commit("updateTopCompanies", [..._.sort(_RANDOM_).slice(0, 5)]);
    },
    async fetchCanvass({ state, commit }) {
      const [{ _ }] = await axiosApi({
        url: "/etl/au/data/u_zsdkm"
      });
      const hash = {};
      const hashToArr = [];
      _.map(item => {
        if (!hash[item["项目名称"]]) {
          hash[item["项目名称"]] = { ...item, list: [] };
        }
        hash[item["项目名称"]].list.push(item);
      });
      for (let v in hash) {
        hashToArr.push(hash[v]);
      }
      commit("updateCanvass", [...hashToArr.sort(_RANDOM_).slice(0, 5)]);
    }
  }
});
