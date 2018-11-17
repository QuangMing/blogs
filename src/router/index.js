import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import Detail from '@/components/detail'
import Add from '@/components/Add'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    },
    {
      path:'/add',
      name:'Add',
      component:Add
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})
