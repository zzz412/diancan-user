"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "dish",
  setup(__props) {
    common_vendor.onLoad((message) => {
    });
    common_vendor.onShow(() => {
    });
    common_vendor.onHide(() => {
    });
    common_vendor.onShareAppMessage(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o((...args) => _ctx.tolower && _ctx.tolower(...args)),
        b: _ctx.scroll_into,
        c: common_vendor.o((...args) => _ctx.scroLl && _ctx.scroLl(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/13921/Desktop/\u5C0F\u7A0B\u5E8F\u9879\u76EE/diancan-user/pages/dish/dish.vue"]]);
wx.createPage(MiniProgramPage);
