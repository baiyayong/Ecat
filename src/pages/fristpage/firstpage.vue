<template>
  <div id="aaaa">
    <tou/>
    <router-view></router-view>
  </div>
</template>
<script>
  import tou from '../../components/header/header.vue'
  import {mapState} from 'vuex'
  import axios from 'axios'
  export default {
    data(){
      return{

      }
      },
    components:{tou},
    methods:{
    },
    mounted(){
     /* console.log('aaaa');
      axios.get('/api1/firstPage')
        .then(response => {
          const result = response.data
          console.log('axios', result)
        })*/
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #aaaa
    width 100%
    height 100%
</style>
