<template>
  <div class="choose">
    <div class="regin" v-if="click">
      <div class="top">
        <div class="head-top">
          <a href="" class="aback"></a>
          <div class="zfont">
            <a @click="toggle">注册</a>

          </div>
        </div>
        <div class="mlogo">
          <img src="./1.png" alt="">
        </div>
        <div class="es_por4">
          <ul class="tags4">
            <li class="selectTag4"><a href="#" @click.prevent="toggleshow(false)">普通登录</a></li>
            <li class="selectTag4"><a href="#" @click.prevent="toggleshow(true)">手机动态密码登录</a></li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <div class="mformBox">
          <div class="Content">
            <form action="" v-if="!isShow">
              <ul class="mform" >
                <li>
                  <span class="mNameIco"></span>
                  <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username">
                </li>
                <li>
                  <span class="mpasswordIco"></span>
                  <input type="password" placeholder="输入密码" class="text" name="password" id="password">
                </li>
              </ul>
            </form >
            <form action="" v-if="isShow">
              <ul class="mform" >
                <li>
                  <span class="mNameIco"></span>
                  <input type="text" placeholder="已注册的手机号" class="text" name="username" id="username1">
                </li>
                <li>
                  <span class="mpasswordIco"></span>
                  <input type="password" placeholder="请输入图片内容" class="text" name="password" id="password1">
                  <span><img src="./a.png"></span>
                </li>
                <li>
                  <span class="mpasswordIco"></span>
                  <input type="password" placeholder="动态密码" class="text" name="password" id="password2">
                  <span><a class="get_phonepass" >获取动态密码</a></span>
                </li>
              </ul>
            </form>
            <span><a href="">忘记密码？</a></span>
            <mt-button type="primary" size="large">登录</mt-button>
          </div>
          <div style="height:5em"></div>
          <div class="other-login">
            <div class="partners">
              <p>合作网站登录</p>
            </div>
            <ul class="uList1">
              <li><img src="./login_ico2.png" alt=""></li>
              <li><img src="./login_ico4.png" alt=""></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!click">
      <mt-field label="手机号" placeholder="13152135311" type="tel" ></mt-field>
      <mt-field label="图片验证码" placeholder="图片验证码" type="url" >
        <img src="./a.png" height="45px" width="100px">
      </mt-field>
      <mt-field label="验证码" placeholder="验证码" type="number" >
        <mt-button type="primary">获取短信验证码</mt-button>
      </mt-field>
      <mt-field label="昵称" placeholder="你的昵称" type="name"></mt-field>
      <mt-field label="密码" placeholder="请设置密码" type="password" rows="4"></mt-field>
      <mt-field label="确认密码" placeholder="请确认密码"  rows="5" ></mt-field>
      <mt-button type="primary" size="large">注册</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
     data(){
     return{
       isShow:true,
       click:true
     }
     },
    methods:{
      toggleshow(el){
          return this.isShow=el
        },
      toggle(){
        return this.click=!this.click
      }
     },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .choose
    position fixed
    left 0px
    top 0
    width 100%
    .regin
      overflow hidden
      .top
        width 100%
        height 178px
        background-image url("11.png")
        background-size 100% 100%
        box-sizing border-box
        position relative
        .head-top
          height: 50px;
          line-height: 50px;
          padding: 0 1em;
          position relative
          .zfont
            position absolute
            right 10px
            top 0
            .aff
              color: #fff;
          .aback
            display: block;
            width: 22px;
            height: 20px;
            position: absolute;


        .mlogo
          margin-left 160px
          margin-top 20px
        .es_por4
          position absolute
          bottom 0px
          left 0px
          z-index 100
          height 44px
          width 100%
          background-color: rgba(255,255,255,0.3)
          .tags4
            overflow hidden
            .selectTag4
             float: left
             width: 50%
             text-align: center
             height: 44px
             line-height: 44px
             position: relative
            a
             font-size: 15px;
             color: #fff;
             display: block;


    .bottom
      width 100%
      height 410px
      .mformBox
       width 345px
       height 170px
       background: #fff;
       border-radius: 0.5em;
       margin: 0em 4% 1em 2%;
       padding: 0 1.6%;
      .Content
        .mform
          li
           border-bottom: #e2e2e2 solid 1px;
           padding: 12px 0 12px 30px;
           position: relative;
           input
            display: block;
            height: 21px;
            width: 100%;
            font-size: 15px;
            border: none;
            padding: 0px;
            color: #666;
            font-family: "Microsoft Yahei",tahoma,arial;
            outline: none;
          .get_phonepass
            background: #fff;
            color: #ff4259;
            border: 1px solid #eb4c33;
            position: absolute;
            right: 0;
            top: 2.5em;
            border-radius: 3px;
            width: 100px;
            text-align: center;
            padding: 0.3em 0;
      span
        float right
        margin-top 20px
      .other-login
        .partners
          color: #d7d7d7;
          margin-top: 0.5em;
          p
            text-align center
        .uList1
          padding: 1.5em 0;
          li
            width: 33.3%;
            padding: 0 1.2em;
            float: left;
            display: inline;
            img
              width 40px
              height: 40px
</style>
