import index from "@/view/index/index.vue";
import overview from "@/view/overview/overview.vue";
import home from "@/view/home/home.vue";
import economic from "@/view/home/economic.vue";
import street from "@/view/home/street.vue";
import enterprisedetail from "@/view/home/enterprisedetail.vue";
import YL from "@/view/home/YL.vue";
import building from "@/view/building/building.vue";
import specific from "@/view/building/specific.vue";
import join from "@/view/building/join.vue";
import land from "@/view/land/land.vue";
import investment from "@/view/investment/investment.vue";
import investmentdetail from "@/view/investment/investmentdetail.vue";
import lcgf from "@/view/investment/lcgf.vue";
import policy from "@/view/investment/policy.vue";
import map from "@/view/common/map.vue";
import vr from "@/view/common/vr.vue";
import easy from "@/view/easy/easy.vue";
import easydetail from "@/view/easy/easydetail.vue";
// import manual from "@/view/easy/manual.vue";

export const mainRouter = [
  {
    title: "登录",
    path: "/",
    name: "index",
    component: index,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "总览",
    path: "/overview",
    name: "overview",
    component: overview,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "首页/经济总述",
    path: "/home",
    name: "home",
    component: home,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "优质企业详情",
    path: "/enterprisedetail",
    name: "enterprisedetail",
    component: enterprisedetail,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "楼宇经济",
    path: "/building",
    name: "building",
    component: building,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "土地利用",
    path: "/land",
    name: "land",
    component: land,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "招商推荐",
    path: "/investment",
    name: "investment",
    component: investment,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "招商详情",
    path: "/investmentdetail",
    name: "investmentdetail",
    component: investmentdetail,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "鹿城公房",
    path: "/lcgf",
    name: "lcgf",
    component: lcgf,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "经济特色详情",
    path: "/economic",
    name: "economic",
    component: economic,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "街道特色详情",
    path: "/street",
    name: "street",
    component: street,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "楼宇具体详情",
    path: "/specific",
    name: "specific",
    component: specific,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "地图",
    path: "/map",
    name: "map",
    component: map,
    meta: {
      keepAlive: true
    }
  },
  {
    title: "VR",
    path: "/vr",
    name: "vr",
    component: vr,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "单独招商项目",
    path: "/easy",
    name: "easy",
    component: easy,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "单独招商项目详情",
    path: "/easydetail",
    name: "easydetail",
    component: easydetail,
    meta: {
      keepAlive: false
    }
  },
  // {
  //   title: "单独招商手册",
  //   path: "/manual",
  //   name: "manual",
  //   component: manual,
  //   meta: {
  //     keepAlive: false
  //   }
  // },
  {
    title: "入驻详情",
    path: "/join",
    name: "join",
    component: join,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "政策详情",
    path: "/policy",
    name: "policy",
    component: policy,
    meta: {
      keepAlive: false
    }
  },
  {
    title: "旅游特色详情",
    path: "/YL",
    name: "YL",
    component: YL,
    meta: {
      keepAlive: false
    }
  }
];

export const routers = [...mainRouter];
