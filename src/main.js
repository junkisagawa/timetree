/* eslint-disable */
/* eslint-disable no-console　*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import vueSmoothScroll from 'vue-smooth-scroll'
import axios from 'axios'


Vue.use(vueSmoothScroll);
Vue.use(VueMaterial)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.component('slide', Slide)
Vue.component('burger-menu', Menu)

new Vue({
  router, //追加
  store,
  render: h => h(App)
}).$mount('#app')