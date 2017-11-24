<template>
  <div class="bigwrap">
    <div class="TopWarp">
      <router-view></router-view>
    </div>
    <div class="foot">
      <ul class="hfood">
        <li><router-link to="/firstpage"><span class="icon-classify">首页</span></router-link></li>
        <li><router-link to="/classify"><span class="icon-home">分类</span></router-link></li>
        <li><router-link to="/shopcard"><span class="icon-shopping">购物车</span></router-link></li>
        <li><router-link to="/mycat"><span class="icon-login">我的E宠</span></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .bigwrap
    width 100%
    height 100%
    position absolute
    overflow hidden
    .TopWarp
      position absolute
      top 0
      bottom 55px
      width 100%
    .foot
      position absolute
      bottom 0px
      left 0px
      width 100%
      height 55px
      z-index 100
      background white
      .hfood
        line-height 60px
        overflow hidden
        li
          float: left
          width: 55px
          height: 55px
          margin-left 30px
          span
            font-size 18px
</style>
