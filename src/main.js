
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mock/mockServer'
import store from './store'
import './common/stylus/font.styl'
import { Swipe, SwipeItem, Button, Field} from 'mint-ui';
import VueScroller from 'vue-scroller'
import VDistpicker from  'v-distpicker'
Vue.component('v-distpicker',VDistpicker)
Vue.use(VueScroller)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h =>h(App),
})
