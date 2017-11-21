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
      <div id="navsWrap">
        <ul id="navList">
          <li class="active">
            <a href="#">首页</a>
          </li>
          <li>
            <a href='#'>服饰城</a>
          </li>
          <li>
            <a href='#'>狗狗主粮</a>
          </li>
          <li>
            <a href='#'>医疗保健</a>
          </li>
          <li>
            <a href='#'>零食玩具</a>
          </li>
          <li>
            <a href='#'>日用外出</a>
          </li>
          <li>
            <a href='#'>美容香波</a>
          </li>
        </ul>
      </div>
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
        float: left;
        white-space: nowrap;
        font-size: 0;
        display flex
        li
          display: inline-block;
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
