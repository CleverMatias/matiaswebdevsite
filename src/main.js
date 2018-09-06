import Vue from 'vue'
import App from './App.vue'

export const Bus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
