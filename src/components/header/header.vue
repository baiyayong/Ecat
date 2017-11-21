<template>
  <div class="wrap">
    <div class="header">
      <div class="headertop">
        <div class="clearfix">
          <a href="">
            <span>狗狗站</span>
            <span>|</span>
            <span>陕西</span>
            <i></i>
          </a>
          <span class="search">
            <a href="#">
               <input type="search" placeholder="搜索商品和品牌">
               <span class="eico serach-ico"></span>
            </a>
          </span>
          <span>
            <a href="#">
              <img src="" alt="">
            </a>
          </span>
        </div>
      </div>
      <div id="navsWrap" ref="map">
        <ul id="navList" ref="ul">
          <li class="active">
            <router-link to="/firstpage">首页</router-link>
          </li>
          <li>
            <router-link to="/firstpage/second">服饰城</router-link>
          </li>
          <li>
            <router-link to="/firstpage/three">狗狗主粮</router-link>
          </li>
          <li>
            <router-link to="/firstpage/four">医疗保健</router-link>
          </li>
          <li>
            <router-link to="/firstpage/five">零食玩具</router-link>
          </li>
          <li>
            <router-link to="/firstpage/six">日用外出</router-link>
          </li>
          <li>
            <router-link to="/firstpage/seven">美容香波</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    max-width: 375px;
    position fixed
    left 0px
    top:0
    background white
    z-index 40
  .header
    height 86px
    .headertop
      height 60px
    .clearfix
      padding 18px 10px
      .search
        margin 5px 17px
        input
          width: 60%;
          border: 0;
          height: 25px;
          background: #e9e9e9;
          border-radius: 4px;
          color: #bcbcbc;
          text-indent: 10px;
          font-size: 13px;
          outline: 0;
    #navsWrap
      box-sizing: border-box;
      width: 100%;
      height: 35px;
      min-width: 320px;
      #navList
        overflow hidden
        white-space: nowrap;
        font-size: 0;
        display flex
        li
          float left
          padding 0 10px
          .active
            color: #459d36;
            display: inline-block;
         a
           display: block;
           width: 100%;
           height: 100%;
           line-height: 36px;
           font-size: 14px;
           text-align: center;
           color: #666;


</style>
