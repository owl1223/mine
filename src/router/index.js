import Vue from 'vue'
import Router from 'vue-router'
import ZhuYe from '../pages/ZhuYe.vue'
// import FangJian from '../pages/FangJian'
import LOL from '../pages/lol'
import jdqs from '../pages/jdqs'
import yz from '../pages/yz'
import wzry from '../pages/wzry'
import cfsy from '../pages/CFsy'
import DNF from '../pages/DNF'
import yqk from '../pages/yqk'
import DOTA2 from '../pages/DOTA2'
import hpjy from '../pages/hpjy'
import ecy from '../pages/ecy'
import HW from '../pages/HW'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ZhuYe
    },
    {
      path: '/LOL',
      component: LOL
    },
    {
      path: '/jdqs',
      component: jdqs
    },
    {
      path: '/yz',
      component: yz
    },
    {
      path: '/wzry',
      component: wzry
    },
    {
      path: '/CFSY',
      component: cfsy
    },
    {
      path: '/DNF',
      component: DNF
    },
    {
      path: '/yqk',
      component: yqk
    },
    {
      path: '/DOTA2',
      component: DOTA2
    },
    {
      path: '/hpjy',
      component: hpjy
    },
    {
      path: '/ecy',
      component: ecy
    },
    {
      path: '/HW',
      component: HW
    }

  ]
})
