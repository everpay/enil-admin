<template>
<div class="panel-wrapper">
<a href="" class="everpay-logo">Everpay</a>

<div class="feature-panel feature-panel--enterprise" style="background:url('https://res.cloudinary.com/lmj6rf6tz/image/upload/q_auto:good/v1525911362/bg-img-fforms_lgfgvy.jpg')">

		<div class="enterprise-panel__content text-center">
				<h2 class="enterprise-panel__header">
					<small class="enterprise-panel__subheader">
						EverPay Enterprise Edition
					</small>
					Customized cloud powered commerce
				</h2>
				<p class="enterprise-panel__caption text-center">
					Unlimited users. Unlimited gateways. Unlimited connectivity.
				</p>
<a href="" target="_blank" class="enterprise-panel__button m-bottom-md-10">Register for an account.</a>
			</div>

			<div class="enterprise-panel__footer">
				<p class="enterprise-panel__footer__lead">
					TRUSTED BY THE WORLD'S SMARTEST COMPANIES
				</p>
                        </div>
  </div>

		<div class="main-panel">

			<div class="main-panel__table">
				<div class="main-panel__table-cell">

					<div class="main-panel__switch">
						<span class="main-panel__switch__text">
							Don't have an account?
						</span>
						<a href="" class="main-panel__switch__button">
							Get Started
						</a>
					</div>

					<div class="main-panel__content">

						<h1 class="main-panel__heading">
							Welcome Back
            <small class="main-panel__subheading">
							Connect to your dashboard, and manage your payments.
							</small>
						</h1>
            
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="main-panel__form Bizible-Exclude" autocomplete="on" label-position="left">
 <div class="widget-box">
      <div class="box-highlight">
      <div class="field">
          <div class="form-group float-label-control">
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
     </div>
</div>

<div class="field">
          <div class="form-group float-label-control"> 
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
      <a class="form__help text-left margin-top-10">Forgot your password?</a>
     </div>
</div>

<div class="text--center">
      <el-button :loading="loading" class="form__button" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>
</div>
         <div style="position:relative">
        <div class="tips">
          <span>Username : admin</span>
          <span>Password : any</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">Username : editor</span>
          <span>Password : any</span>
        </div>

        <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
          Or connect with
        </el-button>
      </div>
    </el-form>

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

$bg:#5f697a;
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
    height: 100%;
    width: 100%;

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

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#5f697a;
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
    padding: 30px 35px 0;
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
.form__label, button {
    font-family: brandon-grotesque, "Open Sans", open-sans, sans-serif
}

button {
    font-weight: 700
}

.text--left {
    text-align: left
}

.text--center {
    text-align: center
}

.text--right {
    text-align: right
}
.form__help {
    position: relative;
    top: 0;
    right: 0;
    font-size: 12px;
    color: #8C96A9;
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
}


.main-panel__switch__button {
    display: inline-block;
    vertical-align: middle;
    background: #fff;
    border: 1px solid #C6CCD7;
    border-radius: 6px;
    font-weight: 700;
    color: #596377;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-left: 12px;
    padding: 0 28px;
    height: 36px;
    line-height: 36px;
    text-decoration: none;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
}

.form__button, .form__legal, .main-panel--single .main-panel__heading,
.main-panel__footer, .saml-button, .sso-knock-modal .content, .sso-knocking__options,
.sso-knocking__title {
    text-align: center
}

.text--left{text-align:left}
.text--center{text-align:center}
.text--right{text-align:right}

.form__button,.form__legal,.main-panel--single .main-panel__heading,.main-panel__footer,.saml-button,.sso-knock-modal .content,.sso-knocking__options,.sso-knocking__title{text-align:center}

.everpay-logo{display:block;position:absolute;z-index:10;display:inline-block;vertical-align:middle;top:5%!important;left:5%!important;background:url('https://res.cloudinary.com/lmj6rf6tz/image/upload/v1496853334/Everpaylogo-261x67_jrwizm.png') no-repeat;width:180px!important;background-size:90%;color:transparent;font-size:1px}
.form__input,.form__select{height:50px;display:block;width:100%}
@media (min-width:1076px){.everpay-logo{background-image:url('https://res.cloudinary.com/lmj6rf6tz/image/upload/v1496853334/Everpay-dark-logo_lghtzd.png')no-repeat}
.everpay-logo--single{background-image:url('https://res.cloudinary.com/lmj6rf6tz/image/upload/v1506199019/Everpay-icon_ihn2fk.png')}}

.form__group{position:relative;margin-bottom:23px}
.form__label{display:block;font-weight:700;font-size:11px;color:#434C5E;margin-bottom:8px}
.form__input{border:1px solid #D4D9E2;border-radius:3px;padding:15px;font-size:14px;color:#596377;outline:0;-webkit-transition:border-color .2s ease;transition:border-color .2s ease}
.form__input::-webkit-input-placeholder{color:#C6CCD7}
.form__input:-moz-placeholder{color:#C6CCD7}
.form__input::-moz-placeholder{color:#C6CCD7}
.form__input:ms-input-placeholder{color:#C6CCD7}
.form__select,.form__select>select{color:#596377;font-size:14px;outline:0}
.form__input:focus{border-color:#8C96A9}
.form__input.error{border:1px solid #E73737;margin-bottom:10px}
.form__select{border:1px solid #D4D9E2;border-radius:3px;padding:14px 15px;overflow:hidden;position:relative;-webkit-transition:border-color .2s ease;transition:border-color .2s ease}
.form__select:after{content:"";display:block;position:absolute;right:32px;top:50%;margin-top:-4px;border-bottom:2px solid #596377;border-left:2px solid #596377;width:6px;height:6px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}
.form__select.focus,.form__select:focus{border-color:#596377}
.form__select.error{border:1px solid #E73737;margin-bottom:10px}
.form__select>select{background:0 0;border:none;font-family:"Open Sans",open-sans,sans-serif;width:110%;-webkit-appearance:none;-moz-appearance:none;appearance:none}
.enterprise-panel__footer__lead,.enterprise-panel__header,.form__button,.main-panel__switch__button{font-family:brandon-grotesque,"Open Sans",open-sans,sans-serif}
.form__select.form__select--empty select{color:#C6CCD7}
.form__help{position:relative;top:0;right:0;font-size:12px;color:#8C96A9;-webkit-transition:color .2s ease;transition:color .2s ease}
.main-panel,.panel-wrapper{position:relative}
.form__help:focus,.form__help:hover{color:#434C5E}

.form__button {
    display: inline-block;
    margin: 20px auto;
    background-color: #1ec89a;
    border: 1px solid transparent;
    border-radius: 100px;
    height: 50px;
    line-height: 50px;
    padding: 0 60px;
    font-size: 1em;
    font-weight: 700;
    color: #FFF;
    cursor: pointer;
    -webkit-transition: box-shadow .2s ease,border .2s ease;
    transition: box-shadow .2s ease,border .2s ease;
}

.form__button {-webkit-transition: all 0.3s; -moz-transition: all 0.3s;transition: all 0.3s;-webkit-transition: box-shadow .2s ease;transition: box-shadow .2s ease;}
.form__button:focus,.form__button:hover{cursor:pointer; opacity: 1;box-shadow:0 3px 15px 0 rgba(0,0,0,.25)}
.form__button:active{box-shadow:0 1px 4px rgba(0,0,0,.2)}
.form__button {
    display: inline-block;
    margin: 20px auto;
    background-color: #1ec89a!important;
    border: 1px solid transparent;
    border-radius: 100px;
    height: 50px;
    line-height: 50px;
    padding: 0 60px;
    font-size: 1em;
    font-weight: 700;
    color: #FFF!important;
    cursor: pointer;
    -webkit-transition: box-shadow .2s ease,border .2s ease;
    transition: box-shadow .2s ease,border .2s ease;
}
.form__button--alternate{background-color:#11B683}
.form__error{font-size:14px;font-weight:600;color:#E73737;letter-spacing:0;margin-bottom:24px}
.form__legal,.form__legal a,.form__legal a:hover{color:#8C96A9}
.form__legal{margin-bottom:0;padding-bottom:30px}
.form__legal a{text-decoration:underline}

.alert-dynamic,.alert-error{color:#E73737!important;}
.alert-error{display:none}
.alert-dynamic{display:block}

.panel-wrapper{display:block;width:100%}

.main-panel__switch__button {
    border-radius: 100px!important;
    font-weight: 600!important;
    font-size: 0.875em!important;
    margin-top: 2px;
    position: relative!important;
}

.main-panel, .panel-wrapper {
position: relative;
}

@media (min-width:1076px){.main-panel{margin-left:43%}}

@media (min-width:1076px) and (min-height:600px){.panel-wrapper{height:100%}
.main-panel{height:100%;overflow:auto}}
.main-panel__switch{position:absolute;right:0;top:0;margin-top:34px;margin-bottom:46px;margin-right:5%;font-size:13px;color:#596377;letter-spacing:0;line-height:36px}
.main-panel__switch__text{display:none}

@media (min-width:600px)
{.everpay-logo{left: 2%;top: 5%;}
.main-panel__switch{margin-right:38px}
.main-panel__switch__text{display:inline}}
.main-panel__table{display:table;width:100%;height:100%}
.main-panel__table-cell{position:relative;display:table-cell;vertical-align:middle;padding-top:80px;padding-bottom:100px}
.main-panel__content{clear:both;width:90%;max-width:540px;margin:0 auto}
.main-panel__footer{position:absolute;bottom:0;left:0;padding:20px;width:100%;border-top:1px solid #D4D9E2}
.main-panel__heading{font-size:36px;font-weight:700;color:#434C5F;margin-bottom:20px}
.main-panel__heading.referral .main-panel__subheading .emphasizeOffer{color:#11B683;font-weight:700}
.main-panel__subheading{display:block;margin-top:6px;font-size:18px;color:#596377}
.main-panel__switch__button{display:inline-block;vertical-align:middle;background:#fff;border:1px solid #C6CCD7;border-radius:6px;font-weight:700;color:#596377;letter-spacing:1px;text-transform:uppercase;margin-left:12px;padding:0 28px;height:36px;line-height:36px;text-decoration:none;-webkit-transition:all .2s ease;transition:all .2s ease}
.main-panel__switch__button:focus,.main-panel__switch__button:hover{color:#fff;text-decoration:none;box-shadow:0 3px 12px 0 rgba(0,0,0,.25);background-color:#1ec89a;border:1px solid #1ec89a}
.main-panel__switch__button:active{box-shadow:0 1px 4px rgba(0,0,0,.2)}

@media (min-width:1076px){.main-panel--single{margin-left:0}}
.main-panel__badge{display:block;width:82px;height:82px;margin:0 auto;border-radius:6px}

.main-panel__badge--default{background-image:url('https://res.cloudinary.com/lmj6rf6tz/image/upload/v1496853370/everpay-rnd-logo_s7wmeh.png')
;background-position:center;background-repeat:no-repeat;background-color:#048864}
.feature-panel{display:none;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;right:0;width:42%;min-height:600px;height:100%;}

@media (min-width:1076px){.feature-panel{left: 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}
@media (min-height:600px){.feature-panel{left: 0;position:absolute}}
.feature-panel--enterprise{background:none;background-size:cover;text-align:center}
.feature-panel:before {
content: "";
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: #048864;
opacity: 0.85;
z-index: 1;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
}
.enterprise-panel__footer{position:absolute;bottom:40px;left:55px;right:55px;color:#FFFFFF;z-index:2;}
.enterprise-panel__footer__lead{margin-bottom:15px;opacity:.75;font-size:12px!important;text-align:center;text-transform:uppercase;color:#FFFFFF;letter-spacing:.91px}
.enterprise-panel__content{padding:0 40px;z-index: 2;}
.enterprise-panel__header{margin-bottom:33px;opacity:.89;font-weight:600;font-size:20px;color:#FFFFFF;letter-spacing:1.42px;text-transform:uppercase}
.enterprise-panel__button,.sso-knocking__title{font-family:brandon-grotesque,"Open Sans",open-sans,sans-serif;font-weight:700;text-transform:uppercase}
.enterprise-panel__subheader{display:block;margin-bottom:17px;font-size:15px;color:#FFFFFF;letter-spacing:1.09px}
.enterprise-panel__caption{margin-bottom:35px;opacity:.69;font-style:italic;font-size:14px!important;color:#FCFCFC;line-height:25px}
.enterprise-panel__button{margin-bottom:40px;display:inline-block;background:#1E8FE1;border-radius:100px;font-size:10px;color:#FFFFFF;letter-spacing:1px;padding:0 36px;height:36px;line-height:36px;text-decoration:none;-webkit-transition:box-shadow .2s ease;transition:box-shadow .2s ease}
.feature-panel--quotes,.sso-knocking__option-item{background-position:center;background-repeat:no-repeat}
.enterprise-panel__button:focus,.enterprise-panel__button:hover{text-decoration:none;box-shadow:0 3px 12px 0 rgba(0,0,0,.25)}
.feature-panel--sign-up{background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/signup-photo.jpg');background-size:cover}
.feature-panel--quotes{background-size:cover}
.feature-panel--quotes:before{content:"";position:absolute;bottom:0;left:0;width:100%;height:480px;background-image:-webkit-linear-gradient(91deg,#141516 7%,rgba(43,51,65,0) 100%);background-image:linear-gradient(-1deg,#141516 7%,rgba(43,51,65,0) 100%)}

.sso-alternate{font-size:13px;color:#596377;letter-spacing:0;text-decoration:underline}
.sso-knocking__title{font-size:11px}
.sso-knocking__options{display:block;margin:0 auto;padding:0;list-style:none}
.sso-knocking__option-item{display:inline-block;width:36px;height:36px;margin-left:5px;margin-right:5px;border-radius:36px;background-size:16px 16px;background-color:#fff;-webkit-transition:box-shadow .2s ease;transition:box-shadow .2s ease;cursor:pointer}
.sso-knocking__option-item:hover{box-shadow:0 3px 15px 0 rgba(0,0,0,.25)}
.sso-knocking__option-item--google{background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/sso-google-logo.png')}
.sso-knocking__option-item--okta{background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/sso-okta-logo.png');background-size:18px 18px}
.sso-knocking__option-item--ping{background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/sso-ping-logo.png')}
.sso-knocking__option-item--onelogin{background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/sso-onelogin-logo.png');background-size:18px 18px}

.sso-knock-modal{position:fixed;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:0;left:0;height:100%;width:100%;background:rgba(255,255,255,.87)}
.sso-knock-modal .content{width:760px;margin:0 auto;padding:75px 20px;background:#FFF;border:1px solid rgba(0,0,0,.1);box-shadow:0 0 20px 0 rgba(0,0,0,.1);border-radius:4px}
.sso-knock-modal .title{margin-top:0;margin-bottom:12px;font-size:30px;font-weight:400;color:#434C5F}
.button,.sso-knock-modal .back{border-radius:100px;font-family:brandon-grotesque,"Open Sans",open-sans,sans-serif;font-weight:700;letter-spacing:1px;text-transform:uppercase}
.sso-knock-modal .message{width:430px;margin:15px auto;line-height:24px;font-size:16px;color:#8C96A9}
.sso-knock-modal .back{display:block;margin:50px auto 30px;background:#11B683;height:50px;line-height:50px;width:200px;font-size:12px;color:#FFF;cursor:pointer;-webkit-transition:box-shadow .2s ease,border .2s ease;transition:box-shadow .2s ease,border .2s ease}
.sso-knock-modal .back:focus,.sso-knock-modal .back:hover{box-shadow:0 3px 15px 0 rgba(0,0,0,.25)}
.sso-knock-modal .contact{margin-top:55px;margin-bottom:0;font-size:14px}
.sso-knock-modal .contact a{color:#1E8FE1;text-decoration:underline}

.button{display:inline-block;background:#1E8FE1;font-size:10px;color:#FFF;padding:0 36px;height:36px;line-height:36px;text-decoration:none;-webkit-transition:all .2s ease;transition:all .2s ease}
.sign-up__quote__logo--netflix,.sign-up__quote__logo--twitter,.sign-up__quote__logo--uber{background-size:100%;background-repeat:no-repeat;overflow:hidden}
.button:hover{text-decoration:none;box-shadow:0 3px 12px 0 rgba(0,0,0,.25)}
.button:active{box-shadow:0 1px 4px rgba(0,0,0,.2)}
.button--link{color:#596377;background-color:transparent}
.button--link:active,.button--link:hover{color:#434C5E;box-shadow:none;background-color:transparent}

.alert{margin-bottom:23px}
.alert--success{color:#14B876}
.alert--error{color:#b94a48}

.remember_me {
	    margin-top: -10px;
    font-size: 14px;
    color: #8C96A9;
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
	}

form.form label {
    display: block;
    float: none;
    width: 99%;
    text-align: left;
    padding-right: 10px;
    /* font-weight: bold; */
}

.quotes--twitter{background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/mike-davidson.jpg')}

@media only screen and (min-device-pixel-ratio:2),only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-resolution:192dpi),only screen and (min-resolution:2dppx){.quotes--twitter{background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/mike-davidson@2x.jpg')}}
.quotes--uber{background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/molly-nix.jpg')}

@media only screen and (min-device-pixel-ratio:2),only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-resolution:192dpi),only screen and (min-resolution:2dppx){.quotes--uber{background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/molly-nix@2x.jpg')}}
.quotes--netflix{background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/andy-law.jpg')}

@media only screen and (min-device-pixel-ratio:2),only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-resolution:192dpi),only screen and (min-resolution:2dppx){.quotes--netflix{background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/andy-law@2x.jpg')}}

.quotes__pagination{position:absolute;width:50%;bottom:40px;right:40px;margin:0;text-align:right}
.pagination__page{cursor:pointer;display:inline-block;width:6px;height:6px;margin-left:20px;border-radius:100%;background-color:rgba(255,255,255,.5);-webkit-transition:background-color .2s ease;transition:background-color .2s ease}

.pagination__page.selected{background-color:#fff}
.sign-up__quote{display:none;position:absolute;bottom:0;left:0;right:0;padding:0 40px}
.sign-up__quote.selected{display:block}
.sign-up__quote__excerpt{position:relative;margin-bottom:40px;font-size:16px;font-style:italic;color:#FFF;line-height:26px;opacity:.8}
.sign-up__quote__name{opacity:.8;font-weight:600;font-size:11px;color:#FFF;letter-spacing:1px;text-transform:uppercase}
.sign-up__quote__logo{margin-bottom:40px}
.sign-up__quote__logo--twitter{display:block;width:39px;height:32px;background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/twitter-logo.png')}
.sign-up__quote__logo--uber{display:block;width:119px;height:24px;background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/uber-logo.png')}
.sign-up__quote__logo--netflix{display:block;width:110px;height:31px;background-image:url('https://cdn.everpayinc.com/assets/img/login-signup/netflix-logo.png')}
.hidden{display:none}
.truncate-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

.enterprise-select-brand-title{font-size:28px;font-weight:400;color:#434C5F;margin-bottom:40px;text-align:center}
.new-enterprise-select-brand{border-radius:5px;width:90%;max-width:540px;margin:0 auto}
.new-enterprise-select-brand form{margin:0;padding:0}
.new-enterprise-select-brand .new-brand-select{list-style:none;margin:0;padding:0}
.new-enterprise-select-brand .new-brand-select li{padding:24px;color:#3e4b59;cursor:pointer;font:400 16px/1em 'Open Sans';margin-bottom:16px;background:#fff;border-radius:5px;box-shadow:0 -1px 1px 0 rgba(0,0,0,.05),0 1px 2px 0 rgba(0,0,0,.2);height:96px;position:relative}
.new-enterprise-select-brand .new-brand-select li div,.new-enterprise-select-brand .new-brand-select li i,.new-enterprise-select-brand .new-brand-select li p{display:inline-block;margin:0;vertical-align:middle}
.new-enterprise-select-brand .new-brand-select li p{max-width:167px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:20px;font-weight:400;color:#434C5E}
.new-enterprise-select-brand .new-brand-select li p small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#8C96A9;display:block;font-size:13px;font-weight:400}

@media (min-width:400px){.new-enterprise-select-brand .new-brand-select li p{max-width:250px}}

@media (min-width:600px){.new-enterprise-select-brand .new-brand-select li p{max-width:290px}}
.new-enterprise-select-brand .new-brand-select li .brand-logo{width:48px;height:48px;margin-right:20px;background:#fff;border-radius:3px;overflow:hidden}
.new-enterprise-select-brand .new-brand-select li .brand-logo.no-logo{background:#ccc}
.new-enterprise-select-brand .new-brand-select li .brand-logo img{max-width:48px;max-height:48px}
.new-enterprise-select-brand .new-brand-select li .brand-logo.my-inv{background:0 0}
.new-enterprise-select-brand .new-brand-select li input{display:none}
.new-enterprise-select-brand .new-brand-select li .form__button{display:inline;margin:0;padding:0;height:36px;width:115px;border-radius:100px;border:1px solid #a3aebf;font-family:brandon-grotesque,"Open Sans",open-sans,sans-serif;font-size:10px;text-align:center;letter-spacing:1px;text-transform:uppercase;background-color:#fff;color:#596377;cursor:pointer;line-height:0;position:absolute;right:24px;top:30px}
.new-enterprise-select-brand .new-brand-select li:focus,.new-enterprise-select-brand .new-brand-select li:hover{background:#fff;border-radius:5px;box-shadow:0 4px 16px 0 rgba(0,0,0,.2)}
.new-enterprise-select-brand .new-brand-select li:focus .form__button,.new-enterprise-select-brand .new-brand-select li:hover .form__button{background-color:#11B683;border-color:#11B683;color:#fff}
.new-enterprise-select-brand .new-brand-select li:focus .form__button:focus,.new-enterprise-select-brand .new-brand-select li:focus .form__button:hover,.new-enterprise-select-brand .new-brand-select li:hover .form__button:focus,.new-enterprise-select-brand .new-brand-select li:hover .form__button:hover{box-shadow:0 0}
@media (max-width:600px){.new-enterprise-select-brand
.padding-override {
    padding: 0 15px !important;
}

.form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}

.form-signin .form-control {
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.form-signin .form-control:focus {
    z-index: 2;
}

.form-signin input[type="text"],
.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.feature-panel {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 43%;
    height: 100%;
    overflow: hidden;
}

.feature-panel--enterprise {
    background: url(https://res.cloudinary.com/lmj6rf6tz/image/upload/v1491557710/monica-replacement_zc3anj.png);
    background-size: cover;
    text-align: center;
}
	


.panel-wrapper .wizard-container {
  padding-top: 100px;
  z-index: 3;
}
.panel-wrapper .wizard-container .wizard-navigation {
  position: relative;
}

.panel-wrapper .title,
.panel-wrapper .card-title,
.panel-wrapper .wizard-title {
  font-weight: 700;
}
.title,
.title a,
.card-title,
.card-title a,
.wizard-title,
.wizard-title a {
  color: #3C4858;
  text-decoration: none;
}


.panel-wrapper .description,
.card-description,
.footer-big p {
  color: #999999;
}

.text-warning {
  color: #ff9800;
}

.text-primary {
  color: #9c27b0;
}

.text-danger {
  color: #f44336;
}

.text-success {
  color: #4caf50;
}

.text-info {
  color: #00bcd4;
}

.panel-wrapper .card {
  background-color: #FFFFFF;
  padding: 10px 0;
  width: 100%;
  border-radius: 6px;
  color: rgba(0,0,0, 0.87);
  background: #fff;
}

.panel-wrapper .wizard-card {
  min-height: 410px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}
.panel-wrapper .wizard-card .picture-container {
  position: relative;
  cursor: pointer;
  text-align: center;
}
.panel-wrapper .wizard-card .picture {
  width: 106px;
  height: 106px;
  background-color: #999999;
  border: 4px solid #CCCCCC;
  color: #FFFFFF;
  border-radius: 50%;
  margin: 5px auto;
  overflow: hidden;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
}
.panel-wrapper .wizard-card .picture:hover {
  border-color: #2ca8ff;
}
.panel-wrapper .wizard-card[data-color="purple"] .moving-tab {
  position: absolute;
  text-align: center;
  padding: 12px;
  font-size: 12px;
  text-transform: uppercase;
  -webkit-font-smoothing: subpixel-antialiased;
  background-color: #9c27b0;
  top: -4px;
  left: 0px;
  border-radius: 4px;
  color: #FFFFFF;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 16px 26px -10px rgba(156, 39, 176, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);
}
.wizard-card[data-color="purple"] .picture:hover {
  border-color: #9c27b0;
}
.wizard-card[data-color="purple"] .choice:hover .icon, .wizard-card[data-color="purple"] .choice.active .icon {
  border-color: #9c27b0;
  color: #9c27b0;
}
.wizard-card[data-color="purple"] .form-group .form-control {
  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);
}
.wizard-card[data-color="purple"] .checkbox input[type=checkbox]:checked + .checkbox-material .check {
  background-color: #9c27b0;
}
.wizard-card[data-color="purple"] .radio input[type=radio]:checked ~ .check {
  background-color: #9c27b0;
}
.wizard-card[data-color="purple"] .radio input[type=radio]:checked ~ .circle {
  border-color: #9c27b0;
}
.panel-wrapper .wizard-card[data-color="green"] .moving-tab {
  position: absolute;
  text-align: center;
  padding: 12px;
  font-size: 12px;
  text-transform: uppercase;
  -webkit-font-smoothing: subpixel-antialiased;
  background-color: #4caf50;
  top: -4px;
  left: 0px;
  border-radius: 4px;
  color: #FFFFFF;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 16px 26px -10px rgba(76, 175, 80, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2);
}
.panel-wrapper .wizard-card[data-color="green"] .picture:hover {
  border-color: #4caf50;
}
.panel-wrapper .wizard-card[data-color="green"] .choice:hover .icon, .wizard-card[data-color="green"] .choice.active .icon {
  border-color: #4caf50;
  color: #4caf50;
}
.panel-wrapper .wizard-card[data-color="green"] .form-group .form-control {
  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);
}
.panel-wrapper .wizard-card[data-color="green"] .checkbox input[type=checkbox]:checked + .checkbox-material .check {
  background-color: #4caf50;
}
.panel-wrapper .wizard-card[data-color="green"] .radio input[type=radio]:checked ~ .check {
  background-color: #4caf50;
}
.panel-wrapper .wizard-card[data-color="green"] .radio input[type=radio]:checked ~ .circle {
  border-color: #4caf50;
}
.wizard-card[data-color="blue"] .moving-tab {
  position: absolute;
  text-align: center;
  padding: 12px;
  font-size: 12px;
  text-transform: uppercase;
  -webkit-font-smoothing: subpixel-antialiased;
  background-color: #00bcd4;
  top: -4px;
  left: 0px;
  border-radius: 4px;
  color: #FFFFFF;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 16px 26px -10px rgba(0, 188, 212, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2);
}
.wizard-card[data-color="blue"] .picture:hover {
  border-color: #00bcd4;
}
.wizard-card[data-color="blue"] .choice:hover .icon, .wizard-card[data-color="blue"] .choice.active .icon {
  border-color: #00bcd4;
  color: #00bcd4;
}
.wizard-card[data-color="blue"] .form-group .form-control {
  background-image: linear-gradient(#00bcd4, #00bcd4), linear-gradient(#D2D2D2, #D2D2D2);
}
.wizard-card[data-color="blue"] .checkbox input[type=checkbox]:checked + .checkbox-material .check {
  background-color: #00bcd4;
}
.wizard-card[data-color="blue"] .radio input[type=radio]:checked ~ .check {
  background-color: #00bcd4;
}
.wizard-card[data-color="blue"] .radio input[type=radio]:checked ~ .circle {
  border-color: #00bcd4;
}
.wizard-card[data-color="orange"] .moving-tab {
  position: absolute;
  text-align: center;
  padding: 12px;
  font-size: 12px;
  text-transform: uppercase;
  -webkit-font-smoothing: subpixel-antialiased;
  background-color: #ff9800;
  top: -4px;
  left: 0px;
  border-radius: 4px;
  color: #FFFFFF;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 16px 26px -10px rgba(255, 152, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2);
}
.wizard-card[data-color="orange"] .picture:hover {
  border-color: #ff9800;
}
.wizard-card[data-color="orange"] .choice:hover .icon, .wizard-card[data-color="orange"] .choice.active .icon {
  border-color: #ff9800;
  color: #ff9800;
}
.wizard-card[data-color="orange"] .form-group .form-control {
  background-image: linear-gradient(#ff9800, #ff9800), linear-gradient(#D2D2D2, #D2D2D2);
}
.wizard-card[data-color="orange"] .checkbox input[type=checkbox]:checked + .checkbox-material .check {
  background-color: #ff9800;
}
.wizard-card[data-color="orange"] .radio input[type=radio]:checked ~ .check {
  background-color: #ff9800;
}
.wizard-card[data-color="orange"] .radio input[type=radio]:checked ~ .circle {
  border-color: #ff9800;
}
.wizard-card[data-color="red"] .moving-tab {
  position: absolute;
  text-align: center;
  padding: 12px;
  font-size: 12px;
  text-transform: uppercase;
  -webkit-font-smoothing: subpixel-antialiased;
  background-color: #f44336;
  top: -4px;
  left: 0px;
  border-radius: 4px;
  color: #FFFFFF;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 16px 26px -10px rgba(244, 67, 54, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2);
}
.wizard-card[data-color="red"] .picture:hover {
  border-color: #f44336;
}
.wizard-card[data-color="red"] .choice:hover .icon, .wizard-card[data-color="red"] .choice.active .icon {
  border-color: #f44336;
  color: #f44336;
}
.wizard-card[data-color="red"] .form-group .form-control {
  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);
}
.wizard-card[data-color="red"] .checkbox input[type=checkbox]:checked + .checkbox-material .check {
  background-color: #f44336;
}
.wizard-card[data-color="red"] .radio input[type=radio]:checked ~ .check {
  background-color: #f44336;
}
.wizard-card[data-color="red"] .radio input[type=radio]:checked ~ .circle {
  border-color: #f44336;
}
.panel-wrapper .wizard-card .picture input[type="file"] {
  cursor: pointer;
  display: block;
  height: 100%;
  left: 0;
  opacity: 0 !important;
  position: absolute;
  top: 0;
  width: 100%;
}
.wizard-card .picture-src {
  width: 100%;
}
.panel-wrapper .wizard-card .tab-content {
  min-height: 340px;
  padding: 20px 15px;
}
.wizard-card .wizard-footer {
  padding: 0 15px;
}
.wizard-card .wizard-footer .checkbox {
  margin-top: 16px;
}
.wizard-card .disabled {
  display: none;
}
.panel-wrapper .wizard-card .wizard-header {
  text-align: center;
  padding: 25px 0 35px;
}
.wizard-card .wizard-header h5 {
  margin: 5px 0 0;
}
.wizard-card .nav-pills > li {
  text-align: center;
}
.wizard-card .btn {
  text-transform: uppercase;
}
.wizard-card .info-text {
  text-align: center;
  font-weight: 300;
  margin: 10px 0 30px;
}
.wizard-card .choice {
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
}
.wizard-card .choice .icon {
  text-align: center;
  vertical-align: middle;
  height: 116px;
  width: 116px;
  border-radius: 50%;
  color: #999999;
  margin: 0 auto 20px;
  border: 4px solid #CCCCCC;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
}
.wizard-card .choice i {
  font-size: 40px;
  line-height: 111px;
}
.wizard-card .choice:hover .icon, .wizard-card .choice.active .icon {
  border-color: #2ca8ff;
}
.wizard-card .choice input[type="radio"],
.wizard-card .choice input[type="checkbox"] {
  position: absolute;
  left: -10000px;
  z-index: -1;
}
.wizard-card .btn-finish {
  display: none;
}
.wizard-card .description {
  color: #999999;
  font-size: 14px;
}
.wizard-card .wizard-title {
  margin: 0;
}

legend {
  margin-bottom: 20px;
  font-size: 21px;
}

output {
  padding-top: 8px;
  font-size: 14px;
  line-height: 1.42857;
}

.form-control {
  height: 36px;
  padding: 7px 0;
  font-size: 14px;
  line-height: 1.42857;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="date"].form-control,
  input[type="time"].form-control,
  input[type="datetime-local"].form-control,
  input[type="month"].form-control {
    line-height: 36px;
  }
  input[type="date"].input-sm, .input-group-sm input[type="date"],
  input[type="time"].input-sm, .input-group-sm
  input[type="time"],
  input[type="datetime-local"].input-sm, .input-group-sm
  input[type="datetime-local"],
  input[type="month"].input-sm, .input-group-sm
  input[type="month"] {
    line-height: 24px;
  }
  input[type="date"].input-lg, .input-group-lg input[type="date"],
  input[type="time"].input-lg, .input-group-lg
  input[type="time"],
  input[type="datetime-local"].input-lg, .input-group-lg
  input[type="datetime-local"],
  input[type="month"].input-lg, .input-group-lg
  input[type="month"] {
    line-height: 44px;
  }
}
.radio label,
.checkbox label {
  min-height: 20px;
}

.form-control-static {
  padding-top: 8px;
  padding-bottom: 8px;
  min-height: 34px;
}

.input-sm .input-sm {
  height: 24px;
  padding: 3px 0;
  font-size: 11px;
  line-height: 1.5;
  border-radius: 0;
}
.input-sm select.input-sm {
  height: 24px;
  line-height: 24px;
}
.input-sm textarea.input-sm,
.input-sm select[multiple].input-sm {
  height: auto;
}

.form-group-sm .form-control {
  height: 24px;
  padding: 3px 0;
  font-size: 11px;
  line-height: 1.5;
}
.form-group-sm select.form-control {
  height: 24px;
  line-height: 24px;
}
.form-group-sm textarea.form-control,
.form-group-sm select[multiple].form-control {
  height: auto;
}
.form-group-sm .form-control-static {
  height: 24px;
  min-height: 31px;
  padding: 4px 0;
  font-size: 11px;
  line-height: 1.5;
}

.input-lg .input-lg {
  height: 44px;
  padding: 9px 0;
  font-size: 18px;
  line-height: 1.33333;
  border-radius: 0;
}
.input-lg select.input-lg {
  height: 44px;
  line-height: 44px;
}
.input-lg textarea.input-lg,
.input-lg select[multiple].input-lg {
  height: auto;
}

.form-group-lg .form-control {
  height: 44px;
  padding: 9px 0;
  font-size: 18px;
  line-height: 1.33333;
}
.form-group-lg select.form-control {
  height: 44px;
  line-height: 44px;
}
.form-group-lg textarea.form-control,
.form-group-lg select[multiple].form-control {
  height: auto;
}
.form-group-lg .form-control-static {
  height: 44px;
  min-height: 38px;
  padding: 10px 0;
  font-size: 18px;
  line-height: 1.33333;
}

.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  padding-top: 8px;
}
.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 28px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    padding-top: 8px;
  }
}
@media (min-width: 768px) {
  .form-horizontal .form-group-lg .control-label {
    padding-top: 13.0px;
    font-size: 18px;
  }
}
@media (min-width: 768px) {
  .form-horizontal .form-group-sm .control-label {
    padding-top: 4px;
    font-size: 11px;
  }
}

.label {
  border-radius: 3px;
}
.label, .label.label-default {
  background-color: #FFFFFF;
}
.label.label-inverse {
  background-color: #212121;
}
.label.label-primary {
  background-color: #9c27b0;
}
.label.label-success {
  background-color: #4caf50;
}
.label.label-info {
  background-color: #00bcd4;
}
.label.label-warning {
  background-color: #ff9800;
}
.label.label-danger {
  background-color: #f44336;
}
.label.label-rose {
  background-color: #e91e63;
}

.form-control,
.form-group .form-control {
  border: 0;
  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);
  background-size: 0 2px, 100% 1px;
  background-repeat: no-repeat;
  background-position: center bottom, center calc(100% - 1px);
  background-color: transparent;
  transition: background 0s ease-out;
  float: none;
  box-shadow: none;
  border-radius: 0;
  font-weight: 400;
}
.form-control::-moz-placeholder,
.form-group .form-control::-moz-placeholder {
  color: #AAAAAA;
  font-weight: 400;
}
.form-control:-ms-input-placeholder,
.form-group .form-control:-ms-input-placeholder {
  color: #AAAAAA;
  font-weight: 400;
}
.form-control::-webkit-input-placeholder,
.form-group .form-control::-webkit-input-placeholder {
  color: #AAAAAA;
  font-weight: 400;
}
.form-control[readonly], .form-control[disabled], fieldset[disabled] .form-control,
.form-group .form-control[readonly],
.form-group .form-control[disabled], fieldset[disabled]
.form-group .form-control {
  background-color: transparent;
}
.form-control[disabled], fieldset[disabled] .form-control,
.form-group .form-control[disabled], fieldset[disabled]
.form-group .form-control {
  background-image: none;
  border-bottom: 1px dotted #D2D2D2;
}

.form-group {
  position: relative;
}
.form-group.label-static label.control-label, .form-group.label-placeholder label.control-label, .form-group.label-floating label.control-label {
  position: absolute;
  pointer-events: none;
  transition: 0.3s ease all;
}
.form-group.label-floating label.control-label {
  will-change: left, top, contents;
}
.form-group.label-placeholder:not(.is-empty) label.control-label {
  display: none;
}
.form-group .help-block {
  position: absolute;
  display: none;
}
.form-group.is-focused .form-control {
  outline: none;
  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);
  background-size: 100% 2px, 100% 1px;
  box-shadow: none;
  transition-duration: 0.3s;
}
.form-group.is-focused .form-control .material-input:after {
  background-color: #9c27b0;
}
.form-group.is-focused.form-info .form-control {
  background-image: linear-gradient(#00bcd4, #00bcd4), linear-gradient(#D2D2D2, #D2D2D2);
}
.form-group.is-focused.form-success .form-control {
  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);
}
.form-group.is-focused.form-warning .form-control {
  background-image: linear-gradient(#ff9800, #ff9800), linear-gradient(#D2D2D2, #D2D2D2);
}
.form-group.is-focused.form-danger .form-control {
  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);
}
.form-group.is-focused.form-rose .form-control {
  background-image: linear-gradient(#e91e63, #e91e63), linear-gradient(#D2D2D2, #D2D2D2);
}
.form-group.is-focused.form-white .form-control {
  background-image: linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(#D2D2D2, #D2D2D2);
}
.form-group.is-focused.label-placeholder label,
.form-group.is-focused.label-placeholder label.control-label {
  color: #AAAAAA;
}
.form-group.is-focused .help-block {
  display: block;
}
.form-group.has-warning .form-control {
  box-shadow: none;
}
.form-group.has-warning.is-focused .form-control {
  background-image: linear-gradient(#ff9800, #ff9800), linear-gradient(#D2D2D2, #D2D2D2);
}
.form-group.has-warning label.control-label,
.form-group.has-warning .help-block {
  color: #ff9800;
}
.form-group.has-error .form-control {
  box-shadow: none;
}
.form-group.has-error.is-focused .form-control {
  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);
}
.form-group.has-error label.control-label,
.form-group.has-error .help-block {
  color: #f44336;
}
.form-group.has-success .form-control {
  box-shadow: none;
}
.form-group.has-success.is-focused .form-control {
  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);
}
.form-group.has-success label.control-label,
.form-group.has-success .help-block {
  color: #4caf50;
}
.form-group.has-info .form-control {
  box-shadow: none;
}
.form-group.has-info.is-focused .form-control {
  background-image: linear-gradient(#00bcd4, #00bcd4), linear-gradient(#D2D2D2, #D2D2D2);
}
.form-group.has-info label.control-label,
.form-group.has-info .help-block {
  color: #00bcd4;
}
.form-group textarea {
  resize: none;
}
.form-group textarea ~ .form-control-highlight {
  margin-top: -11px;
}
.form-group select {
  appearance: none;
}
.form-group select ~ .material-input:after {
  display: none;
}

.form-control {
  margin-bottom: 7px;
}
.form-control::-moz-placeholder {
  font-size: 14px;
  line-height: 1.42857;
  color: #AAAAAA;
  font-weight: 400;
}
.form-control:-ms-input-placeholder {
  font-size: 14px;
  line-height: 1.42857;
  color: #AAAAAA;
  font-weight: 400;
}
.form-control::-webkit-input-placeholder {
  font-size: 14px;
  line-height: 1.42857;
  color: #AAAAAA;
  font-weight: 400;
}

.checkbox label,
.radio label,
label {
  font-size: 14px;
  line-height: 1.42857;
  color: #AAAAAA;
  font-weight: 400;
}

label.control-label {
  font-size: 11px;
  line-height: 1.07143;
  color: #AAAAAA;
  font-weight: 400;
  margin: 16px 0 0 0;
}

.help-block {
  margin-top: 0;
  font-size: 11px;
}

.form-group {
  padding-bottom: 7px;
  margin: 27px 0 0 0;
}
.form-group .form-control {
  margin-bottom: 7px;
}
.form-group .form-control::-moz-placeholder {
  font-size: 14px;
  line-height: 1.42857;
  color: #AAAAAA;
  font-weight: 400;
}
.form-group .form-control:-ms-input-placeholder {
  font-size: 14px;
  line-height: 1.42857;
  color: #AAAAAA;
  font-weight: 400;
}
.form-group .form-control::-webkit-input-placeholder {
  font-size: 14px;
  line-height: 1.42857;
  color: #AAAAAA;
  font-weight: 400;
}
.form-group .checkbox label,
.form-group .radio label,
.form-group label {
  font-size: 14px;
  line-height: 1.42857;
  color: #AAAAAA;
  font-weight: 400;
}
.form-group label.control-label {
  font-size: 11px;
  line-height: 1.07143;
  color: #AAAAAA;
  font-weight: 400;
  margin: 16px 0 0 0;
}
.form-group .help-block {
  margin-top: 0;
  font-size: 11px;
}
.form-group.label-floating label.control-label, .form-group.label-placeholder label.control-label {
  top: -7px;
  font-size: 14px;
  line-height: 1.42857;
}
.form-group.label-static label.control-label, .form-group.label-floating.is-focused label.control-label, .form-group.label-floating:not(.is-empty) label.control-label {
  top: -28px;
  left: 0;
  font-size: 11px;
  line-height: 1.07143;
}
.form-group.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {
  top: -28px;
  left: 0;
  font-size: 11px;
  line-height: 1.07143;
}

.form-group.form-group-sm {
  padding-bottom: 3px;
  margin: 21px 0 0 0;
}
.form-group.form-group-sm .form-control {
  margin-bottom: 3px;
}
.form-group.form-group-sm .form-control::-moz-placeholder {
  font-size: 11px;
  line-height: 1.5;
  color: #AAAAAA;
  font-weight: 400;
}
.form-group.form-group-sm .form-control:-ms-input-placeholder {
  font-size: 11px;
  line-height: 1.5;
  color: #AAAAAA;
  font-weight: 400;
}
.form-group.form-group-sm .form-control::-webkit-input-placeholder {
  font-size: 11px;
  line-height: 1.5;
  color: #AAAAAA;
  font-weight: 400;
}
.form-group.form-group-sm .checkbox label,
.form-group.form-group-sm .radio label,
.form-group.form-group-sm label {
  font-size: 11px;
  line-height: 1.5;
  color: #AAAAAA;
  font-weight: 400;
}
.form-group.form-group-sm label.control-label {
  font-size: 9px;
  line-height: 1.125;
  color: #AAAAAA;
  font-weight: 400;
  margin: 16px 0 0 0;
}
.form-group.form-group-sm .help-block {
  margin-top: 0;
  font-size: 9px;
}
.form-group.form-group-sm.label-floating label.control-label, .form-group.form-group-sm.label-placeholder label.control-label {
  top: -11px;
  font-size: 11px;
  line-height: 1.5;
}
.form-group.form-group-sm.label-static label.control-label, .form-group.form-group-sm.label-floating.is-focused label.control-label, .form-group.form-group-sm.label-floating:not(.is-empty) label.control-label {
  top: -25px;
  left: 0;
  font-size: 9px;
  line-height: 1.125;
}
.form-group.form-group-sm.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {
  top: -25px;
  left: 0;
  font-size: 9px;
  line-height: 1.125;
}

.form-group.form-group-lg {
  padding-bottom: 9px;
  margin: 30px 0 0 0;
}
.form-group.form-group-lg .form-control {
  margin-bottom: 9px;
}
.form-group.form-group-lg .form-control::-moz-placeholder {
  font-size: 18px;
  line-height: 1.33333;
  color: #AAAAAA;
  font-weight: 400;
}
.form-group.form-group-lg .form-control:-ms-input-placeholder {
  font-size: 18px;
  line-height: 1.33333;
  color: #AAAAAA;
  font-weight: 400;
}
.form-group.form-group-lg .form-control::-webkit-input-placeholder {
  font-size: 18px;
  line-height: 1.33333;
  color: #AAAAAA;
  font-weight: 400;
}
.form-group.form-group-lg .checkbox label,
.form-group.form-group-lg .radio label,
.form-group.form-group-lg label {
  font-size: 18px;
  line-height: 1.33333;
  color: #AAAAAA;
  font-weight: 400;
}
.form-group.form-group-lg label.control-label {
  font-size: 14px;
  line-height: 1.0;
  color: #AAAAAA;
  font-weight: 400;
  margin: 16px 0 0 0;
}
.form-group.form-group-lg .help-block {
  margin-top: 0;
  font-size: 14px;
}
.form-group.form-group-lg.label-floating label.control-label, .form-group.form-group-lg.label-placeholder label.control-label {
  top: -5px;
  font-size: 18px;
  line-height: 1.33333;
}
.form-group.form-group-lg.label-static label.control-label, .form-group.form-group-lg.label-floating.is-focused label.control-label, .form-group.form-group-lg.label-floating:not(.is-empty) label.control-label {
  top: -32px;
  left: 0;
  font-size: 14px;
  line-height: 1.0;
}
.form-group.form-group-lg.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {
  top: -32px;
  left: 0;
  font-size: 14px;
  line-height: 1.0;
}

select.form-control {
  border: 0;
  box-shadow: none;
  border-radius: 0;
}
.form-group.is-focused select.form-control {
  box-shadow: none;
  border-color: #D2D2D2;
}
select.form-control[multiple], .form-group.is-focused select.form-control[multiple] {
  height: 85px;
}

.input-group-btn .btn {
  margin: 0 0 7px 0;
}

.form-group.form-group-sm .input-group-btn .btn {
  margin: 0 0 3px 0;
}
.form-group.form-group-lg .input-group-btn .btn {
  margin: 0 0 9px 0;
}

.input-group .input-group-btn {
  padding: 0 12px;
}
.input-group .input-group-addon {
  border: 0;
  background: transparent;
  padding: 6px 15px 0px;
}

.form-group input[type=file] {
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.form-control-feedback {
  opacity: 0;
}
.has-success .form-control-feedback {
  color: #4caf50;
  opacity: 1;
}
.has-error .form-control-feedback {
  color: #f44336;
  opacity: 1;
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

</style>
