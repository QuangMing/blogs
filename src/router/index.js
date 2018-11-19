import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import Detail from '@/components/article/detail'
import Add from '@/components/article/Add'
import Login from '@/components/logReg/login'
import Reg from '@/components/logReg/reg'
import contssss from '@/components/share/canrousel'
import massge from '@/components/share/massge'
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
    
    },
    {
      path:'/reg',
      name:'Reg',
      component:Reg
    },
    {
      path:'/contssss',
      name:'contssss',
      component:contssss
    },
    {
      path:'/massge',
      name:'massge',
      component:massge
    }
  ]
})
