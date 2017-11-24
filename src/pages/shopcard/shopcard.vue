<template>
<div>
  <div class="wap-top-bar">
    <header class="head-top">
      <a href="" class="p3"><</a>
      <span class="p1">购物车</span>
      <span class="p2">+</span>
    </header>
  </div>
  <div class="CartBox">
    <span class="u-emtcoupon"></span>
    <p>购物车是空的</p>
  </div>
</div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wap-top-bar
    position fixed
    top 0px
    left 0px
    height 50px
    box-sizing border-box
    overflow hidden
    .head-top
      height: 50px
      line-height: 50px;
      position: relative;
      padding: 0 1em;
      border-bottom: 1px solid #f3f3f3;
      .p3
        background-size: 9px 17px;
        display: block;
        width: 22px;
        height: 20px;
        position: absolute;
        margin-top: 16px;
      .p1
       text-overflow: ellipsis;
       white-space: nowrap;
       overflow: hidden;
       display: inline-block;
       margin: 0 120px;
       font-size: 1.8em
      .p2
        float right
  .CartBox
    position fixed
    top 50px
    left 35%
    height 298px
    text-align: center
    .u-emtcoupon
     margin: 50px auto 20px;
     display: inline-block;
     width: 100px;
     height: 100px;
     background-image: url(./shopcard.png);
     background-size: 105px auto;

</style>
