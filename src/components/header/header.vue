<template>
    <div>
      <div class="header" v-if="!isShow">
        <div class="headertop">
          <div class="clearfix">
            <a @click.prevent="toggleShow">
              <span>狗狗站</span>
              <span>|</span>
              <a>陕西</a>
            </a>
            <span class="search">
            <a href="#">
               <input type="search" placeholder="搜索商品和品牌">
            </a>
          </span>
          </div>
        </div>
        <div id="navsWrap" ref="map">
          <ul id="navList" ref="ul">
            <li>
              <router-link to="/firstpage" class="active">首页</router-link>
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
      <div class="bbb" v-if="isShow">
        <div class="select">
          <span class="" @click.prevent="toggleShow"><</span>
          <span>选择收货地址</span>
          <span class="icon-home"></span>
        </div>
        <div class="mimi" ref="mimi">
          <mt-button type="primary" class="mimicat" :class="{active:index==1}" @click="michoose(1)">猫猫站</mt-button>
          <mt-button type="primary" class="mimicat" :class="{active:index==2}" @click="michoose(2)">狗狗站</mt-button>
          <mt-button type="primary" class="mimicat" :class="{active:index==3}" @click="michoose(3)">水族站</mt-button>
        </div>
        <span>默认地址</span><v-distpicker type="mobile" :province="select.province" :city="select.city" :area="select.area"></v-distpicker>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
       isShow:false,
       index:2,
       select: { province: '广东省', city: '广州市', area: '海珠区' },
      }
    },
    mounted(){
      // 只有当有数据创建创建scroll对象
      this._initScroll()  // 从其它路由切换过来
    },
    methods:{
      _initScroll(){
        //异步创建bscroll对象
        this.$nextTick(() =>{
          //创建整体的
          // 动态指定ul的样式宽度
          const ul = this.$refs.ul
          const liWidth = 55
          const space = 20
          const liCount = 7
          const width = (liWidth+space) * liCount - space
          ul.style.width = width + 'px'
          //创建横向的
          new BScroll(this.$refs.map,{
            click:true,
            scrollX:true
          })
        })
      },
      toggleShow(){
        return this.isShow=!this.isShow
      },
      //点击变色
      michoose(index){
        this.index=index
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position absolute
    top 0
    left 0
    right 0
    z-index 30
    background white
    height 96px
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
      //width: 380px;
      height: 37px;
      #navList
        overflow hidden
        white-space: nowrap;
        font-size: 0;
        display flex
        justify-content space-between
        li
          margin-left 20px
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
  .bbb
    z-index 400
    position absolute
    width 100%
    height 100%
    background white
    .select
      display flex
      justify-content space-around
      margin-top 5px
      span
        font-size 25px
    .mimi
      display flex
      justify-content space-around
      margin-top 10px
      .mimicat
        background #7e8c8d
      .active
        background red
</style>
