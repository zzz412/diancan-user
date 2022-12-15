"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/saoma/saoma.js";
  "./pages/select/select.js";
  "./pages/dish/dish.js";
  "./pages/order/order.js";
  "./pages/order-list/order-list.js";
}
const _sfc_main = {
  onLaunch: async function() {
    const code = await wx.login();
    console.log(code);
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/13921/Desktop/\u5C0F\u7A0B\u5E8F\u9879\u76EE/diancan-user/App.vue"]]);
common_vendor.index.$Toast = function(title = "\u6570\u636E\u8BF7\u6C42\u5931\u8D25\uFF01", duration = 1500) {
  common_vendor.index.showToast({
    title,
    duration,
    icon: "none"
  });
};
function createApp() {
  const app = common_vendor.createSSRApp(App);
  const pinia = common_vendor.createPinia();
  return {
    app,
    pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
