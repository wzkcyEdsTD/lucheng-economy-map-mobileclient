/**
 * toLink
 * @param {*} _context_
 * @param {*} param1
 */
export const toLink = async (_context_, { url, params, item }) => {
  const { $router } = _context_;
  if (url == "type") {
    if (
      ~[
        "产业布局",
        "经济特色",
        "特色旅游",
        "街镇特色",
        "优质企业",
        "经济指标"
      ].indexOf(item)
    ) {
      localStorage["active"] = JSON.stringify(params);
      $router.push("/home");
    } else if (~["招商总述", "招商资源", "招商政策"].indexOf(item)) {
      $router.push("/investment?View=" + params);
    } else if (~["楼宇匹配"].indexOf(item)) {
      $router.push("/building");
    } else if (~["用地匹配"].indexOf(item)) {
      $router.push("/land");
    }
  } else if (url == "v_menu") {
    if (params == 1) {
      $router.push("/building");
    } else if (params == 2) {
      $router.push("/land");
    }
  } else if (url == "detail") {
    localStorage["Listitem"] = JSON.stringify(params);
    $router.push("/street");
  } else if (url == "enterprisedetail") {
    localStorage["Listitem"] = JSON.stringify(params);
    $router.push("/enterprisedetail");
  } else if (url == "investmentdetail") {
    localStorage["Listitem"] = JSON.stringify(params);
    $router.push("/investmentdetail");
  } else {
    $router.push("/" + url + "?View=" + params + "&id=" + item);
  }
};
