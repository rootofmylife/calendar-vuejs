import event from './event'

const apiUrlManager = {
  event,
}

export default {
  install(Vue) {
    Vue.prototype.$api = apiUrlManager
  },
}
