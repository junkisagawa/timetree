import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainPage from '@/components/mainpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: MainPage
    }
  ]
})
