import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   components: {
//   App,
//   },
//   Router,
//   })




new Vue({
  render: h => h(App),
  router
}).$mount('#app')

  
