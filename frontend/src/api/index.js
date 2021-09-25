import authenticate from "./authen";

const apiUrlManager = {
  authenticate,
};

export default {
  install(Vue) {
    Vue.prototype.$api = apiUrlManager;
  },
};
