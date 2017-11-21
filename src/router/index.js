import Vue from 'vue'
import vueRouter from 'vue-router'
import homepage from '../pages/homepage/homepage.vue'
import classify from '../pages/classify/classify.vue'
import mycat from '../pages/mycat/mycat.vue'
import shopcard from '../pages/shopcard/shopcard.vue'
Vue.use(vueRouter)
export default new vueRouter({
  routes:[
    {
      path:'/',
      redirect:'homepage'
    },
    {
      path:'/homepage',
      component:homepage
    },
    {
      path:'/classify',
      component:classify
    },
    {
      path:'/shopcard',
      component:shopcard
    },
    {
      path:'/mycat',
      component:mycat
    }
  ]
})
