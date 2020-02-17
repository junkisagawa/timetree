import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/MainPage.vue'
import Calender from '../components/Calender.vue'
import External from '../components/External.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'orico',
      component: MainPage
    },
    {
      path: '/external',
      name: 'external',
      component: External
    },
    {
      path: '/calender',
      name: 'calender',
      component: Calender
    }
  ]
})
