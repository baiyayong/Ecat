<template>
  <div>
    <div class="wrap">
      <div class="header">
        <div class="list">
          <router-link to="/classify"><span class="qw">分类</span></router-link>
          <router-link to="/classify/brand"><span>商品</span></router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    width 375px
    height 100%
    .header
      height 40px
      .list
        margin-left 115px
        .qw
          margin-right 100px
          color: #ed4044;
          border-bottom: 2px solid #ed4044;
</style>
