import Vue from 'vue'
import App from './App.vue'
import './main.css'
import utils from './utils'
import api from './api'

Vue.use(utils)
Vue.use(api)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
