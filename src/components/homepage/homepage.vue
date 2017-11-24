<template>
<div class="contentWarp" ref="content">
  <scroller>
    <div class="content">
      <div class="nav">
        <mt-swipe :auto="4000" v-for="(img,index) in firstPage.banners" :key="index">
          <mt-swipe-item><a href=""><img :src="img.url" alt=""></a></mt-swipe-item>
        </mt-swipe>
      </div>
      <split/>
      <div class="columnnavdiv">
        <ul class="nas">
          <li><a href=""><img class="img1" src="./one5-1.png" alt=""></a></li>
          <li><a href=""><img class="img1" src="./one5-2.png" alt=""></a></li>
          <li><a href=""><img class="img1" src="./one5-3.png" alt=""></a></li>
          <li><a href=""><img class="img1" src="./one5-4.png" alt=""></a></li>
          <li><a href=""><img class="img1" src="./one5-5.png" alt=""></a></li>
          <li><a href=""><img class="img1" src="./one5-6.png" alt=""></a></li>
          <li><a href=""><img class="img1" src="./one5-7.png" alt=""></a></li>
          <li><a href=""><img class="img1" src="./one5-8.png" alt=""></a></li>
        </ul>

      </div>
      <split/>
      <div class="surprise" >
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
        <div class="surprise-pro" ref="pro">
          <div class="swiper-container">
            <ul class="sur2">
              <li>
                <img src="./one6-2.png" alt="">
                <div class="sur2-1">
                  <span class="ft12">¥</span>
                  <span class="ft17">1.50</span>
                  <p class="c999 ftc ft12">省￥13.50</p>
                </div>

              </li>
              <li>
                <img src="./one6-2.png" alt="">
                <div class="sur2-1">
                  <span class="ft12">¥</span>
                  <span class="ft17">1.50</span>
                  <p class="c999 ftc ft12">省￥13.50</p>
                </div>

              </li>
              <li>
                <img src="./one6-2.png" alt="">
                <div class="sur2-1">
                  <span class="ft12">¥</span>
                  <span class="ft17">1.50</span>
                  <p class="c999 ftc ft12">省￥13.50</p>
                </div>

              </li>
              <li>
                <img src="./one6-2.png" alt="">
                <div class="sur2-1">
                  <span class="ft12">¥</span>
                  <span class="ft17">1.50</span>
                  <p class="c999 ftc ft12">省￥13.50</p>
                </div>
              </li>
              <li>
                <img src="./one6-2.png" alt="">
                <div class="sur2-1">
                  <span class="ft12">¥</span>
                  <span class="ft17">1.50</span>
                  <p class="c999 ftc ft12">省￥13.50</p>
                </div>

              </li>
            </ul>
          </div>
        </div>
        <div class="currency">
          <div class="titdiv">
            <img src="./11.png" alt="">
          </div>
          <div class="divboximg">
            <div class="left">
              <img width="160" class="ac" src="./one7-1.png" alt="">
            </div>
            <div class="rigth">
              <img width="215" src="./one7-2.png" alt="">
              <img width="215" src="./one7-3.png" alt="">
            </div>
          </div>
        </div>
        <split/>
        <div class="currency1">
          <div class="titdiv1">
            <img height="45px" width="100%" src="./one13.png" alt="">
          </div>
          <ul class="list" >
            <li>
              <img src="./one11-1.png" alt="">
              <span class="fl">盒**喵</span>
              <span class="fr pet-name">中华田园猫</span>
              <p>
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
                在这里购物，我觉得放心，安心，省心。
                质量有保障，售货服务也很贴心，及时。
                这不仅仅是个购物平台，更是爱猫人的天地。
                祝福E宠可以越走越好，有更多丰富的商品
              </p>
            </li>
            <li>
              <img src="./one11-2.png" alt="">
              <span class="fl">盒**喵</span>
              <span class="fr pet-name">中华田园猫</span>
              <p>
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
                在这里购物，我觉得放心，安心，省心。
                质量有保障，售货服务也很贴心，及时。
                这不仅仅是个购物平台，更是爱猫人的天地。
                祝福E宠可以越走越好，有更多丰富的商品
              </p>
            </li>
            <li>
              <img src="./one11-3.png" alt="">
              <span class="fl">盒**喵</span>
              <span class="fr pet-name">中华田园猫</span>
              <p>
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
                在这里购物，我觉得放心，安心，省心。
                质量有保障，售货服务也很贴心，及时。
                这不仅仅是个购物平台，更是爱猫人的天地。
                祝福E宠可以越走越好，有更多丰富的商品
              </p>
            </li>
            <li>
              <img src="./one11-4.png" alt="">
              <span class="fl">盒**喵</span>
              <span class="fr pet-name">中华田园猫</span>
              <p>
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
                在这里购物，我觉得放心，安心，省心。
                质量有保障，售货服务也很贴心，及时。
                这不仅仅是个购物平台，更是爱猫人的天地。
                祝福E宠可以越走越好，有更多丰富的商品
              </p>
            </li>
          </ul>
        </div>
        <split/>
      </div>
    </div>
  </scroller>
</div>



</template>
<script>
  import split from '../../components/split/split.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    components:{split},
    mounted(){
      // 只有当有数据创建创建scroll对象
      this._initScroll()  // 从其它路由切换过来
      this.$store.dispatch('getFirstPage')
    },
    methods:{
      _initScroll(){
        //异步创建bscroll对象
        this.$nextTick(() =>{
          //创建整体的
          this.scroll=new BScroll(this.$refs.content,{
            click:true,
          })
          // 动态指定ul的样式宽度
          //创建横向的
          this.scroll=new BScroll(this.$refs.pro,{
            click:true,
            scrollX:true
          })
          this.scroll.refresh()
        })
      }
    },
    computed:{
      ...mapState(['firstPage'])
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.contentWarp
  position absolute
  top 96px
  bottom 0px
  left 0
  right 0
  .content
    .nav
      height 160px
      width 100%
      img
       width 100%
    .columnnavdiv
      height 175px
      .nas
        overflow hidden
        li
          float left
          width 25%
          .img1
            width 100%
    .surprise
      .surpriseup
        height 80px
        .sur1
          position relative
          padding 10px
          display flex
          img
            height: 24px;
          .f1
            margin 6px 6px
          .time
            margin 6px 0px
            .time1
              border 1px solid #ddd
              padding 1px 2px
          .more
            position absolute
            top 0
            right 0
            img
              width 68px
              height 40px
      .surprise-pro
        padding-left 5px
        margin-bottom 10px
        .swiper-container
          width: 500px
          overflow: hidden
          white-space: nowrap
          .sur2
            font-size: 0
            li
              display: inline-block
              margin-right: 10px
              width: 85px
              height: 130px
              img
               width 100%
            .sur2-1
              color red
              margin-top 2px
              margin-left 22px
              .ft12
                font-size: 12px
              .ft17
                font-size: 12px
              .c999
                color: #999;
                font-size: 12px
      .currency
        height 230px
        .titdiv
          height 40px
          img
            width 100%
        .divboximg
          height 188px
          .left
            float left
          .right
            float left
      .titdiv1
        padding-top 10px
        box-sizing border-box
      .currency1
        .titdiv1
          height 40px
        .list
          margin-top 10px
          height 480px
          display flex
          flex-wrap wrap
          justify-content space-around
          li
            width 45%
            height 125px
            img
              width 100%
            .fr
              margin-left 50px
            p
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
</style>
