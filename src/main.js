// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import BootstrapVue from 'bootstrap-vue'
import vueSmoothScroll from 'vue-smooth-scroll'
// import './style/theme-chalk/index.css'              // element-ui custom CSS
// import 'bootstrap/dist/css/bootstrap.min.css'       // bootstrap CSS
// import 'bootstrap-vue/dist/bootstrap-vue.css'       // bootstrap-vue CSS

Vue.use(vueSmoothScroll);
Vue.use(ElementUI)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
