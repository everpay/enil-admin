<template>
<div class="d-flex align-items-center position-relative height-lg-100vh">
      <div class="col-lg-5 col-xl-4 d-none d-lg-flex align-items-center gradient-half-primary-v1 height-lg-100vh px-0">
        <div class="w-100 p-5">
          <!-- SVG Quote -->
          <figure class="text-center mb-5 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px"
               viewBox="0 0 8 8" style="enable-background:new 0 0 8 8;" xml:space="preserve">
              <path class="fill-white" d="M3,1.3C2,1.7,1.2,2.7,1.2,3.6c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5
                C1.4,6.9,1,6.6,0.7,6.1C0.4,5.6,0.3,4.9,0.3,4.5c0-1.6,0.8-2.9,2.5-3.7L3,1.3z M7.1,1.3c-1,0.4-1.8,1.4-1.8,2.3
                c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5c-0.7,0-1.1-0.3-1.4-0.8
                C4.4,5.6,4.4,4.9,4.4,4.5c0-1.6,0.8-2.9,2.5-3.7L7.1,1.3z"/>
            </svg>
          </figure>
          <!-- End SVG Quote -->

          <!-- Testimonials Carousel Main -->
          <div id="testimonialsNavMain" class="js-slick-carousel u-slick mb-4"
               data-infinite="true"
               data-autoplay="true"
               data-speed="5000"
               data-fade="true"
               data-nav-for="#testimonialsNavPagination">
            <div class="js-slide">
              <!-- Testimonials -->
              <div class="w-md-80 w-lg-60 text-center mx-auto">
                <blockquote class="h5 text-white font-weight-normal mb-4">The template is really nice and offers quite a large set of options. Thank you!</blockquote>
                <h1 class="h6 text-white-70">Maria Muszynska, Google</h1>
              </div>
              <!-- End Testimonials -->
            </div>

            <div class="js-slide">
              <!-- Testimonials -->
              <div class="w-md-80 w-lg-60 text-center mx-auto">
                <blockquote class="h5 text-white font-weight-normal mb-4">It's beautiful and the coding is done quickly and seamlessly. Keep it up!</blockquote>
                <h2 class="h6 text-white-70">James Austin, Slack</h2>
              </div>
              <!-- End Testimonials -->
            </div>

            <div class="js-slide">
              <!-- Testimonials -->
              <div class="w-md-80 w-lg-60 text-center mx-auto">
                <blockquote class="h5 text-white font-weight-normal mb-4">I love Front! I love the ease of use, I love the fact that I have total creative freedom...</blockquote>
                <h3 class="h6 text-white-70">Charlotte Moore, Amazon</h3>
              </div>
              <!-- End Testimonials -->
            </div>
          </div>
          <!-- End Testimonials Carousel Main -->

          <!-- Testimonials Carousel Pagination -->
          <div id="testimonialsNavPagination" class="js-slick-carousel u-slick u-slick--transform-off u-slick--pagination-modern mx-auto"
               data-infinite="true"
               data-autoplay="true"
               data-speed="5000"
               data-center-mode="true"
               data-slides-show="3"
               data-is-thumbs="true"
               data-focus-on-select="true"
               data-nav-for="#testimonialsNavMain">
            <div class="js-slide">
              <div class="u-avatar mx-auto">
                <img class="img-fluid rounded-circle" src="../../assets/img/100x100/img1.jpg" alt="Image Description">
              </div>
            </div>

            <div class="js-slide">
              <div class="u-avatar mx-auto">
                <img class="img-fluid rounded-circle" src="../../assets/img/100x100/img3.jpg" alt="Image Description">
              </div>
            </div>

            <div class="js-slide">
              <div class="u-avatar mx-auto">
                <img class="img-fluid rounded-circle" src="../../assets/img/100x100/img2.jpg" alt="Image Description">
              </div>
            </div>
          </div>
          <!-- End Testimonials Carousel Pagination -->

          <!-- Clients -->
          <div class="position-absolute right-0 bottom-0 left-0 text-center p-5">
            <h4 class="h6 text-white-70 mb-3">Front partners</h4>
            <div class="d-flex justify-content-center">
              <div class="mx-4">
                <img class="u-clients" src="../../assets/svg/clients-logo/slack-white.svg" alt="Image Description">
              </div>
              <div class="mx-4">
                <img class="u-clients" src="../../assets/svg/clients-logo/google-white.svg" alt="Image Description">
              </div>
              <div class="mx-4">
                <img class="u-clients" src="../../assets/svg/clients-logo/spotify-white.svg" alt="Image Description">
              </div>
            </div>
          </div>
          <!-- End Clients -->
        </div>
      </div>

      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-3 space-lg-0">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="js-validate mt-5" autocomplete="on" label-position="left">

<div class="mb-7">
                <h2 class="h3 text-primary font-weight-normal mb-0">Welcome <span class="font-weight-semi-bold">back</span></h2>
                <p>Login to manage your account.</p>
              </div>
              
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

<div style="position:relative">
        <div class="tips">
          <span>Username : admin</span>
          <span>Password : any</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">Username : editor</span>
          <span>Password : any</span>
        </div>
<!-- Button -->
              <div class="row align-items-center mb-5">
                <div class="col-6">
                  <span class="small text-muted">Don't have an account?</span>
                  <a class="small" href="//id.everpayinc.com/Signup">Signup</a>
                </div>

                <div class="col-6 text-right">
                 <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>
                </div>
              </div>
     
      </div>
    </el-form>
   <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
          Or connect with
        </el-button>
    <el-dialog title="Or connect with" :visible.sync="showDialog">
      Can not be simulated on local, so please combine you own business simulation! ! !
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog>
  </div>
  
  </div>
        </div>
      </div>
    </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import SocialSign from './components/SocialSignin'

export default {
  name: 'Login',
  components: { SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#2b8a7a;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .w-100 {
    width: 100% !important;
}
.p-5 {
    padding: 2rem !important;
}
.height-lg-100vh {
    height: 100vh;
}
.gradient-half-primary-v1 {
    background-image: linear-gradient(150deg, #2d1582 0%, #19a0ff 100%);
    background-repeat: repeat-x;
}
.pl-0, .px-0 {
    padding-left: 0 !important;
}
.pr-0, .px-0 {
    padding-right: 0 !important;
}
.align-items-center {
    -ms-flex-align: center !important;
    align-items: center !important;
}
@media (min-width: 992px)
.d-lg-flex {
    display: -ms-flexbox !important;
    display: flex !important;
}
}
@media (min-width: 1200px)
.col-xl-4 {
    -ms-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
}}
@media (min-width: 992px)
.col-lg-5 {
    -ms-flex: 0 0 41.66667%;
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
}}
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
.justify-content-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
}

.d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
}
.text-center {
    text-align: center !important;
}
.ml-auto, .mx-auto {
    margin-left: auto !important;
}
.mr-auto, .mx-auto {
    margin-right: auto !important;
}
.mb-5, .my-5 {
    margin-bottom: 2rem !important;
}
figure {
    margin: 0 0 1rem;
}
.u-slick.slick-initialized {
    background: none;
}
.u-slick {
    background: url(../svg/preloaders/circle-preloader.svg) no-repeat 50% 50%;
}
.u-slick {
    position: relative;
}
.mb-4, .my-4 {
    margin-bottom: 1.5rem !important;
}
.slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}
.text-white-70 {
    color: rgba(255, 255, 255, 0.7);
}
h4, h5, h6, .h4, .h5, .h6 {
    font-weight: 500;
}

.mb-3, .my-3 {
    margin-bottom: 1rem !important;
}
h6, .h6 {
    font-size: 1rem;
}
.left-0 {
    left: 0;
}
.bottom-0 {
    bottom: 0;
}
.right-0 {
    right: 0;
}
.left-0 {
    left: 0;
}
.bottom-0 {
    bottom: 0;
}
.right-0 {
    right: 0;
}
.text-center {
    text-align: center !important;
}
.p-5 {
    padding: 2rem !important;
}
.position-absolute {
    position: absolute !important;
}
.u-clients {
    width: 100%;
    max-width: 6rem;
    height: auto;
    margin-left: auto;
    margin-right: auto;
}

img {
    vertical-align: middle;
    border-style: none;
}
.u-slick.slick-initialized {
  background: none;
}

.u-slick.slick-initialized .js-slide,
.u-slick.slick-initialized .js-thumb {
  visibility: visible;
  height: auto;
  overflow: visible;
}

.u-slick.slick-initialized .js-next,
.u-slick.slick-initialized .js-prev {
  opacity: 1;
}

.u-slick .js-slide,
.u-slick .js-thumb {
  height: 0;
  visibility: hidden;
  overflow: hidden;
}

.u-slick .js-slide:first-child,
.u-slick .js-thumb:first-child {
  height: auto;
}
.no-gutters {
    margin-right: 0;
    margin-left: 0;
}

.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.no-gutters > .col, .no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
}
.space-lg-0, .space-bottom-lg-0 {
    padding-bottom: 0 !important;
}
.space-lg-0, .space-top-lg-0 {
    padding-top: 0 !important;
}
.space-3, .space-bottom-3 {
    padding-bottom: 8rem !important;
}
.space-3, .space-top-3 {
    padding-top: 8rem !important;
}
.offset-xl-3 {
    margin-left: 25%;
}
.col-xl-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}

.text-center {
    text-align: center !important;
}
.mb-7, .my-7 {
    margin-bottom: 3rem !important;
}
.p-5 {
    padding: 2rem !important;
}
.position-absolute {
    position: absolute !important;
}
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2b8a7a;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
