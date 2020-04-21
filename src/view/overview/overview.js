/**
 * overview
 * created by eds 2019.12.11
 */
import {
  v_swiperImgs,
  v_menu,
  v_matrix,
  v_policies,
  v_subMenuHash,
  DELAY,
  IMGDELAY,
  TIMER,
  _IFRAME_
} from "./enum";
import { toLink } from "./linkTool";
import { mapState, mapActions } from "vuex";

export default {
  data: () => {
    return {
      swiperOption: {
        autoplay: {
          delay: IMGDELAY
        },
        pagination: {
          el: ".swiper-pagination"
        }
      },
      v_swiperImgs,
      v_menu,
      v_matrix,
      v_policies,
      v_subMenu: [],
      // 定时器
      animate: false,
      policyTimer: undefined,
      // iframe预缓存
      _IFRAME_,
      sessionPreLoad: false
    };
  },
  computed: {
    ...mapState({
      streets: state => state.streets,
      topCompanies: state => state.topCompanies,
      canvass: state => state.canvass
    })
  },
  created() {
    this.sessionPreLoad = !sessionStorage.getItem("preLoadMapCache");
    sessionStorage.setItem("preLoadMapCache", "cached");
  },
  async mounted() {
    this.rollInit();
    !this.streets.length && (await this.fetchStreets());
    !this.topCompanies.length && (await this.fetchTopCompanies());
    !this.canvass.length && (await this.fetchCanvass());
  },
  beforeDestroy() {
    clearInterval(this.policyTimer);
    this.policyTimer = undefined;
  },
  methods: {
    ...mapActions([
      "fetchStreets",
      "fetchTopCompanies",
      "fetchCanvass",
    ]),
    /**
     * overview link common function
     * @param {String} url
     * @param {*} params
     * @param {*} item
     */
    async getToLink(url, params, item) {
      toLink(this, { url, params, item });
    },
    /**
     * 若有子页面则显示子页面
     * 若无子页面则跳转大模块
     * @param {*} index
     */
    forceSubMenu(index) {
      const _sub = [...v_subMenuHash[index]];
      this.v_subMenu = _sub;
      !_sub.length && this.getToLink("v_menu", index);
    },
    rollInit() {
      this.policyTimer = setInterval(() => {
        this.animate = true;
        setTimeout(() => {
          const v_policies = JSON.parse(JSON.stringify(this.v_policies));
          v_policies.push(this.v_policies[0]);
          v_policies.shift();
          this.v_policies = v_policies;
          this.animate = false;
        }, DELAY);
      }, TIMER);
    }
  }
};
