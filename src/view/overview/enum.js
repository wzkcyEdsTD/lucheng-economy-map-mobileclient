//  轮播图\矩阵图及跳转参数
const swiperImgs = [
  "streetImg/大南街道.png",
  "tsjjImg/滨润大厦.png",
  "streetImg/仰义街道.png"
];
const menuImgs = ["经济总图", "楼宇地图", "用地地图", "招商地图"];
const canvassImgs = ["招商项目", "招商楼宇", "招商地块", "招商公房"];
//  [***]政策内容过多,故不从服务取,先写死
const policies = [
  "关于深化人才制度改革的30条意见",
  "现代服务业高质量发展",
  "工业经济高质量发展",
  "促进开放型经济",
  "农业农村新动能"
];
const subMenuHash = [
  ["产业布局", "经济特色", "特色旅游", "街镇特色", "优质企业", "经济指标"],
  ["楼宇匹配"],
  ["用地匹配"],
  ["招商总述", "招商资源", "招商政策"]
];
export const DELAY = 500;
export const IMGDELAY = 8000;
export const TIMER = 5000;
export const _IFRAME_ = "https://lysb.lucheng.gov.cn/around/index.html#/";
export const v_swiperImgs = [...swiperImgs];
export const v_menu = menuImgs.map(v => {
  return {
    title: v,
    url: require(`@/assets/img/overview/${v}@2x.png`)
  };
});
export const v_matrix = canvassImgs.map(v =>
  require(`@/assets/img/overview/${v}@2x.png`)
);
export const v_policies = [...policies];
export const v_subMenuHash = [...subMenuHash];
