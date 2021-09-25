import time from './time'

const utilManager = {
  time,
}

export default {
  install(Vue) {
    Vue.prototype.$utils = utilManager
  },
}
