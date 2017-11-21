<template>
  <div>
    <router-view></router-view>
    <div class="foot">
      <ul class="hfood">
        <li><router-link to="/homepage">首页</router-link></li>
        <li><router-link to="/classify">分类</router-link></li>
        <li><router-link to="/shopcard">购物车</router-link></li>
        <li><router-link to="/mycat">我的E宠</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .foot
    position fixed
    bottom 0px
    left 0px
    width 375px
    height 55px
    .hfood
      line-height 60px
      li
        float: left
        width: 55px
        height: 55px
        margin-left 30px


</style>
