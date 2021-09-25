import Vue from 'vue'
import App from './App.vue'
import './main.css'
import utils from './utils'

Vue.use(utils)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
