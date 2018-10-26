import Vue from 'vue'
import Router from 'vue-router'
import appliances from '../page/appliances.vue'
import particulars from '../page/particulars'
import mask from '../page/hotMask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appliances',
      component: appliances
    },
    {
      path: '/part',
      name: 'particulars',
      component: particulars
    },
    {
      path: '/ma',
      name: 'mask',
      component: mask
    }
  ]
})
