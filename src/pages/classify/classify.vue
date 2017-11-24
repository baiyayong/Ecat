<template>
    <div class="wrap1">
        <div class="header1">
          <div class="list">
            <router-link to="/classify"><span class="qw">分类</span></router-link>
            <router-link to="/classify/brand"><span>商品</span></router-link>
          </div>
        </div>
        <router-view></router-view>
      </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap1
    width 375px
    height 100%
    position relative
    overflow hidden
    .header1
      width 100%
      height 40px
      position fixed
      top 0
      left 0
      z-index 30
      background white
      .list
        margin-left 115px
        .qw
          margin-right 100px
          color: #ed4044;
          border-bottom: 2px solid #ed4044;
</style>
