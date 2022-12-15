"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "select",
  setup(__props) {
    const people = common_vendor.ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const a = async () => {
      const data = await common_vendor.index.getUserProfile({ desc: "\u8865\u5145\u7528\u6237\u4FE1\u606F" });
      console.log(data);
    };
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
        a: common_vendor.f(people.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        b: common_vendor.o(a)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/13921/Desktop/\u5C0F\u7A0B\u5E8F\u9879\u76EE/diancan-user/pages/select/select.vue"]]);
wx.createPage(MiniProgramPage);
