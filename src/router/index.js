import Vue from 'vue'
import vueRouter from 'vue-router'
import firstpage from '../pages/fristpage/firstpage.vue'
import classify from '../pages/classify/classify.vue'
import mycat from '../pages/mycat/mycat.vue'
import shopcard from '../pages/shopcard/shopcard.vue'

import first from '../components/homepage/homepage.vue'
import second from '../components/second.vue'
import three from '../components/three.vue'
import four from '../components/four.vue'
import five from '../components/five.vue'
import six from '../components/six.vue'
import seven from '../components/seven.vue'

import classify1 from '../components/classify1/classify1.vue'
import brand from '../components/brand/brand.vue'
Vue.use(vueRouter)
export default new vueRouter({
  routes:[
    {
      path:'/',
      redirect:'firstpage'
    },
    {
      path:'/firstpage',
      component:firstpage,
      children:[
        {path:'',
         component:first
        },
        {path:'second',
          component:second
        },
        {path:'three',
          component:three
        },
        {path:'four',
          component:four
        },
        {path:'five',
          component:five
        },
        {path:'six',
          component:six
        },
        {path:'seven',
          component:seven
        }
      ]
    },
    {
      path:'/classify',
      component:classify,
      children:[
        {
          path:'',
          component:classify1
        },
        {
          path:'brand',
          component:brand
        }
      ]
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
