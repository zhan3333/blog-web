import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: 'test',
      name: 'Test',
      component: Test
    }
  ]
})
