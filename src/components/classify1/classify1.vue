<template>
    <div class="tab">
     <div class="left" ref="left">
        <ul class="list">
          <li><span>为您推荐</span></li>
          <li><span>狗狗主粮</span></li>
          <li><span>狗狗生活</span></li>
          <li><span>狗狗主粮</span></li>
          <li><span>狗狗主粮</span></li>
          <li><span>狗狗主粮</span></li>
          <li><span>狗狗保健</span></li>
          <li><span>狗狗主粮</span></li>
          <li><span>狗狗主粮</span></li>
          <li><span>狗狗主粮</span></li>
          <li><span>为您推荐</span></li>
          <li><span>狗狗主粮</span></li>
          <li><span>狗狗主粮</span></li>
        </ul>
      </div>

      <div class="right" ref="right">
        <div class="sort-recom">
            <div class="w1">
              <span>热门分类</span>
            </div>
            <ul class="list">
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
            <li><img src="./one1.png" alt=""><span>体内去冲</span></li>
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
          </ul>
            <ul class="list">
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
            <li><img src="./one1.png" alt=""><span>体内去冲</span></li>
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
          </ul>
            <ul class="list">
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
            <li><img src="./one1.png" alt=""><span>体内去冲</span></li>
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
            <li><img src="./one1.png" alt=""><span>国产狗粮</span></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      // 只有当有数据创建创建scroll对象
      this._initScroll()  // 从其它路由切换过来
    },
    methods:{
      _initScroll(){
        //异步创建bscroll对象
        this.$nextTick(() =>{
          //创建整体的
          this.scroll=new BScroll(this.$refs.left,{
            click:true,
          })
          this.scroll=new BScroll(this.$refs.right,{
            click:true,
          })
          })
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    position absolute
    top 40px
    bottom 55px
    width 100%
    display flex
    .left
      width 70px
      .list
        li
          margin: 3px
          padding-bottom: 30px
          span
            padding: 3px
            height: 16px
            line-height: 26px
            border 1px solid #d9dde1
            font-size: 14px
            color: rgb(147, 153, 159)
            background: #f3f5f7
    .right
      width 305px
      .sort-recom
        box-sizing border-box
        .w1
          padding: 18px 20px 20px;
        .list
          overflow hidden
          li
            float left
            width 96px
            height 116px
            margin-right 5px
            img
              width 100%
              height 50%




</style>
