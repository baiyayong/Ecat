<template>
 <div>
   <topheader/>
   <div class="content">
      <div class="nav">
        <mt-swipe :auto="4000">
          <mt-swipe-item><a href=""><img src="./one1.png" alt=""></a></mt-swipe-item>
          <mt-swipe-item><a href=""><img src="./one2.png" alt=""></a></mt-swipe-item>
          <mt-swipe-item><a href=""><img src="./one3.png" alt=""></a></mt-swipe-item>
          <mt-swipe-item><a href=""><img src="./one4.png" alt=""></a></mt-swipe-item>
          <mt-swipe-item><a href=""><img src="./one5.png" alt=""></a></mt-swipe-item>
          <mt-swipe-item><a href=""><img src="./one6.png" alt=""></a></mt-swipe-item>
          <mt-swipe-item><a href=""><img src="./one7.png" alt=""></a></mt-swipe-item>
        </mt-swipe>
      </div>
     <split/>
     <div class="columnnavdiv">
          <ul class="nas">
            <li><a href=""><img src="./one5-1.png" alt=""></a></li>
            <li><a href=""><img src="./one5-2.png" alt=""></a></li>
            <li><a href=""><img src="./one5-3.png" alt=""></a></li>
            <li><a href=""><img src="./one5-4.png" alt=""></a></li>
            <li><a href=""><img src="./one5-5.png" alt=""></a></li>
            <li><a href=""><img src="./one5-6.png" alt=""></a></li>
            <li><a href=""><img src="./one5-7.png" alt=""></a></li>
            <li><a href=""><img src="./one5-8.png" alt=""></a></li>
          </ul>

     </div>
     <split/>
     <div class="surprise">
          <div class="surpriseup">
            <div class="sur1">
              <span><img src="./one8.png" alt=""></span>
              <div class="f1">距本场结束</div>
              <div class="time">
                <span class="time1">00</span>
                <span>:</span>
                <span class="time1">00</span>
                <span>:</span>
                <span class="time1">00</span>
              </div>
              <div class="more">
                <a href="#">
                  <img src="./more.png" alt="">
                </a>
              </div>
            </div>
          </div>
     </div>
   </div>
 </div>
</template>
<script>
  import split from '../../components/split/split.vue'
  import topheader from '../../components/header/header.vue'
  export default {
    components:{topheader,split},
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .content
    margin-top 95px
    .nav
      height 160px
      img
        width 100%
    .columnnavdiv
      height 175px
      .nas
        li
          float left
          img
            width 93px
            height 88px
    .surprise
      height 190px
      .surpriseup
        height 80px
        .sur1
          padding 10px
          display flex
          position relative
          img
            height: 24px;
            margin-left: -20px;
          .f1
            margin 6px 6px
          .time
            margin 6px 0px
            .time1
              border 1px solid #ddd
              padding 1px 2px
          .more
            position: absolute
            top: 2px
            right: -8px
            img
             width 50%
             heigt 10px



</style>
