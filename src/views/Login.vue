<template>
    <div class="login" ref="loginContent">
        <section class="login-form">
          <div class="login-title">登录</div>
          <div class="input-group-wrap">
            <div class="input-item van-hairline--bottom">
              <img class="left-icon" src="../assets/images/phone.svg" alt="">
              <van-field
                v-model="mobile"
                type="number"
                placeholder="请输入手机号"
                @focus="focusInput"
                clearable
              />
            </div>
            <div class="input-item van-hairline--bottom">
              <img class="left-icon" src="../assets/images/pwd.svg" alt="">
              <van-field class="pwd"
                v-model="password"
                :type=" showPwd ? 'text' : 'password'"
                placeholder="请输入密码"
                @focus="focusInput"
                clearable
              />
              <img class="right-icon" v-if="!showPwd" @click="changeShowPwd('1')" src="../assets/images/eye-see.svg" alt="">
              <img class="right-icon" v-else @click="changeShowPwd('1')" src="../assets/images/eye-close.svg" alt="">
            </div>
          </div>
          <div class="btn-group-wrap">
            <van-button class="log" @click="subLogin">登录</van-button>
            <van-button class="reg" @click="toRegister">注册</van-button>
          </div>
        </section>
        <div class="customer-service">
          客服电话: <a href="tel:4006680091">4006680091</a>
        </div>
    </div>
</template>

<script>
    import * as core from '../api/loginAndRegister'
    import { CellGroup, Field, Button } from 'vant'
    import { checkMobile } from '../common/js/util'

    export default {
      name: 'login',
      data() {
        return {
          mobile: null,
          password: null,
          showPwd: false
        }
      },
      components: {
        [Field.name]: Field,
        [CellGroup.name]: CellGroup,
        [Button.name]: Button
      },
      created() {
        document.title = this.$route.meta.title;
      },
      methods: {
        changeShowPwd(type){
          console.log(this.password)
          this.showPwd = !this.showPwd
        },
        focusInput(e){
          let hrt = this.$refs.loginContent.offsetHeight
          this.$refs.loginContent.style.height = hrt + 'px'
        },
        subLogin(){
          let data = {}
          if(!this.mobile){
            this.$toast("请输入手机号")
            return;
          }else{
            if(!checkMobile(this.mobile)){
              this.$toast("请输入正确的手机号")
              return;
            }
          }
          data.mobile = this.mobile
          if(!this.password){
            this.$toast("请输入密码")
            return;
          }
          data.password = this.password
          core.subLogin(data).then(res => {
            // console.log(res)
            if (res.code && res.code == '00') {
              this.$toast(res.message)
              this.$router.push('/login')
            }else{
              this.$toast(res.message)
            }
          }).catch(err => {
            this.$toast("网络错误")
          })
        },
        toRegister(){
          this.$router.push('/register')
        }
      }
    }
</script>

<style lang="less" scoped>
    /*@import "../common/style/mixins";*/
    .login {
      width: 100%;
      box-sizing: border-box;
      position: relative;
        .login-form {
          padding-top: 60px;
          .login-title {
            font-size:22px;
            padding-left: 26px;
            color:rgba(51,51,51,1);
          }
          .input-group-wrap {
            margin-top: 36px;
            .input-item {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 46px;
              margin: 0 27px;
              margin-bottom: 14px;
              &:last-child {
                margin-bottom: 0
              }
              .left-icon {
                width: 20px;
                height: 20px;
              }
              .van-field {
                flex: 1;
                font-size:15px;
                color:rgba(51,51,51,1);
              }
              .pwd {
                padding-right: 45px;
              }
              .right-icon {
                width: 14px;
                height: 14px;
                margin-right: 16px;
              }
            }
          }
          .btn-group-wrap {
            margin-top: 60px;
            text-align: center;
            .van-button {
              width:225px;
              height:44px;
              border-radius:22px;
              border: none;
              font-size:18px;
            }
            .log {
              background:rgba(24,144,255,1);
              margin-bottom: 24px;
              color:rgba(255,255,255,1);
            }
            .reg {
              border:1px solid rgba(24,144,255,1);
              background: #fff;
              color:rgba(24,144,255,1);
            }
          }
        }
        .customer-service {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          font-size: 12px;
          letter-spacing: 0rem;
          color: #999999;
          text-align: center;
          a {
            color: #1890FF;
          }
          &::before {
            content: '';
            position: absolute;
            left: -45px;
            top: 50%;
            transform: translateY(-50%) scaleY(0.5);
            height: 1px;
            background: #999999;
            width: 40px;
          }
          &::after {
            content: '';
            position: absolute;
            right: -45px;
            top: 50%;
            transform: translateY(-50%) scaleY(0.5);
            height: 1px;
            background: #999999;
            width: 40px;
          }
        }
    }
    .login /deep/ .van-cell:not(:last-child)::after {
      border: none;
    }
</style>
