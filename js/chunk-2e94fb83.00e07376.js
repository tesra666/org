(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e94fb83"],{"1fe7":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"box"},[s("ul",e._l(e.D_leng,function(t,a){return s("li",{key:a,staticClass:"cursor-x"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.secret,expression:"!secret"}]},[e._v(e._s(e.inputVal[a]))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.secret&&e.inputVal[a],expression:"secret && inputVal[index]"}],staticClass:"point"})])}),0)]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputVal,expression:"inputVal"}],staticClass:"inputPwd",attrs:{type:"password",maxlength:e.D_leng,oninput:"value=value.replace(/\\D+/, '')"},domProps:{value:e.inputVal},on:{focus:function(t){return e.changeFocus(!0)},blur:function(t){return e.changeFocus(!1)},input:function(t){t.target.composing||(e.inputVal=t.target.value)}}})])},n=[],i=(s("c5f6"),{name:"inputPwd",props:{leng:{type:Number,default:6},secret:{type:Boolean,default:!1}},data:function(){return{title:"密码输入框组件",D_leng:this.leng,cIndex:0,inputVal:"",isFocus:!1}},watch:{inputVal:function(e){this.cIndex=e.length,this.$emit("input",e)}},methods:{changeFocus:function(e){this.isFocus=e}},computed:{xtsCls:function(){}}}),r=i,o=(s("e472"),s("2877")),c=Object(o["a"])(r,a,n,!1,null,"15441cb6",null);t["a"]=c.exports},"386d":function(e,t,s){"use strict";var a=s("cb7c"),n=s("83a1"),i=s("5f1b");s("214f")("search",1,function(e,t,s,r){return[function(s){var a=e(this),n=void 0==s?void 0:s[t];return void 0!==n?n.call(s,a):new RegExp(s)[t](String(a))},function(e){var t=r(s,e,this);if(t.done)return t.value;var o=a(e),c=String(this),u=o.lastIndex;n(u,0)||(o.lastIndex=0);var d=i(o,c);return n(o.lastIndex,u)||(o.lastIndex=u),null===d?-1:d.index}]})},"46e6":function(e,t,s){e.exports=s.p+"img/success.e654ab46.png"},"50dd":function(e,t,s){},"73cf":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"view-zps reg-page"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.showWxReg,expression:"!showWxReg"}],staticClass:"content-tx view-body"},[a("div",{staticClass:"title",attrs:{cnrk:"免费注册"}},[e._v(e._s(e.$t("Login.registerFree")))]),a("div",{staticClass:"wx-reg-z5"},[a("a",{staticClass:"wx-btn-x2",attrs:{href:"javascript:;"},on:{click:function(t){return e.refreshWxCode()}}},[e._v(e._s(e.$t("Regx.wxReg")))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step||2==e.step,expression:"step == 1 || step == 2"}],staticClass:"step-1"},[a("div",{staticClass:"regItem"},[a("div",{staticClass:"regItem-title",attrs:{cnrk:"注册账号"}},[e._v(e._s(e.$t("Login.account")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],staticClass:"hsyx-btn",attrs:{type:"text",placeholder:e.$t("Login.accountPla"),cnrk:"中国大陆手机号/邮箱"},domProps:{value:e.account},on:{input:[function(t){t.target.composing||(e.account=t.target.value)},e.inpFns]}}),a("p",{directives:[{name:"show",rawName:"v-show",value:e.showAccErr,expression:"showAccErr"}],staticClass:"color-red"},[e._v(e._s(e.accErrHint))])]),a("div",{staticClass:"regItem"},[a("div",{staticClass:"regItem-title",attrs:{cnrk:"验证码"}},[e._v(e._s(e.$t("Regx.code")))]),a("div",{staticClass:"regItem-code"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.codeYzxbnc,expression:"codeYzxbnc"}],staticClass:"inpox hsyx-btn",attrs:{type:"text",maxlength:"6",oninput:"value=value.replace(/\\D+/, '')"},domProps:{value:e.codeYzxbnc},on:{input:[function(t){t.target.composing||(e.codeYzxbnc=t.target.value)},e.inpVerCd]}}),a("button",{staticClass:"Local-btn sdgbf7y6-btn",attrs:{disabled:!e.canGetCode,cnrk:"获取验证码"},on:{click:e.getCode}},[e._v(e._s(e.getCodeText||e.$t("Regx.getCode")))])]),a("p",{directives:[{name:"show",rawName:"v-show",value:e.showSentTxt,expression:"showSentTxt"}],staticClass:"color-red",attrs:{cnrk:"验证码已发送"}},[e._v(e._s(e.seedCodeText||e.$t("Regx.sentCode"))+" ")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.step,expression:"step == 2"}],staticClass:"step-2"},[a("div",{staticClass:"regItem"},[a("div",{staticClass:"regItem-title",attrs:{cnrk:"设置密码"}},[e._v(e._s(e.$t("Regx.setPwd")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"}],staticClass:"hsyx-btn",attrs:{type:"password",placeholder:e.$t("Regx.inputPwd"),maxlength:"26",cnrk:"请输入您的密码"},domProps:{value:e.pwd},on:{input:function(t){t.target.composing||(e.pwd=t.target.value)}}}),a("p",{directives:[{name:"show",rawName:"v-show",value:""===e.pwd,expression:"pwd === ''"}],staticClass:"color-gray",attrs:{cnrk:"密码由6-20位且不能为纯数字或纯字母"}},[e._v(e._s(e.$t("Regx.inputPwdError")))]),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.verify_pwd&&""!==e.pwd,expression:"!verify_pwd && pwd !== ''"}],staticClass:"color-red",attrs:{cnrk:"密码由6-20位且不能为纯数字或纯字母"}},[e._v(e._s(e.$t("Regx.inputPwdError")))])]),a("div",{staticClass:"regItem"},[a("div",{staticClass:"regItem-title",attrs:{cnrk:"确认密码"}},[e._v(e._s(e.$t("Regx.confirmPwd")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd_repeat,expression:"pwd_repeat"}],staticClass:"hsyx-btn",attrs:{type:"password",placeholder:e.$t("Regx.confirmPwdPla"),maxlength:"26",cnrk:"请再次确认您的密码"},domProps:{value:e.pwd_repeat},on:{input:function(t){t.target.composing||(e.pwd_repeat=t.target.value)}}}),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.verify_pwd_repeat&&""!==e.pwd_repeat,expression:"!verify_pwd_repeat && pwd_repeat !== ''"}],staticClass:"color-red",attrs:{cnrk:"两次密码不一致"}},[e._v(e._s(e.$t("Regx.confirmPwdError")))])]),a("div",{staticClass:"Terms"},[a("div",{staticClass:"Radio",on:{click:e.checkAgree}},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.isAgree,expression:"isAgree"}],attrs:{src:s("a91b")}})]),a("a",{staticClass:"Terms-text",attrs:{href:"/protocol",cnrk:"《服务条款》"}},[e._v(e._s(e.$t("Regx.tos")))])]),a("div",{staticClass:"submit-reg"},[a("button",{staticClass:"Local-btn Local-btn-lang",attrs:{disabled:!e.canRegister,cnrk:"注册"},on:{click:e.registerFn}},[e._v(e._s(e.$t("Nav.register")))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:3==e.step,expression:"step == 3"}],staticClass:"step-3"},[a("div",{staticClass:"success"},[a("img",{attrs:{src:s("46e6")}}),a("p",{staticClass:"ptsa",attrs:{cnrk:"注册成功! 欢迎您的加入"}}),a("button",{staticClass:"Local-btn Local-btn-lang bg-blue",attrs:{cnrk:"立即登录"},on:{click:function(t){return e.goPath("Login")}}},[e._v(e._s(e.$t("Regx.immiLogin")))])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showWxReg,expression:"showWxReg"}],staticClass:"content-wx"},[a("h1",{staticClass:"h1ts7b",attrs:{cnrk:"微信注册"}},[e._v(e._s(e.$t("Regx.wxReg")))]),a("div",{staticClass:"wx-register-q9"},[a("a",{staticClass:"wx-btn-vo",attrs:{href:"javascript:;"},on:{click:function(t){return e.hideWxReg()}}},[e._v(e._s(e.$t("Regx.emailOrPhoneReg")))])]),a("p",{staticClass:"pfs",attrs:{cnrk:"请使用微信扫描以下二维码"}},[e._v(e._s(e.$t("Regx.scanWxQrcode")))]),a("div",{staticClass:"wx-qrcode-w",attrs:{id:"wx_qrcx"}})])])},n=[],i=(s("a481"),s("7f7f"),s("386d"),s("ac6a"),s("456d"),s("96cf"),s("3b8d")),r=s("fa7d"),o=s("4ec3"),c=s("0418"),u=s("fd2d"),d=s("1fe7"),p={name:"Register",components:{Header:c["a"],Footer:u["a"],InputPwd:d["a"]},data:function(){return{timerID:0,codeYzxbnc:"",account:"",pwd:"",accErrHint:this.$t("Regx.accountError"),showAccErr:!1,pwd_repeat:"",regType:1,step:1,Timer:null,haveSetValue:30,timerCount:0,isAgree:!0,seedCodeText:"",showSentTxt:!1,getCodeText:"",wx_appid:"",wx_appState:"",showWxReg:!1}},methods:{init:function(){this.countDown(),this.initWxLogin(),this.reqWxAppid()},inpFns:function(){this.showAccErr=!1},inpVerCd:r["a"].debounce(function(){this.showSentTxt=!1,6===this.codeYzxbnc.length&&this.verify_account&&this.reqVerCode()},800),reqCode:function(){var e=this,t=r["a"].isPhone(this.account)?o["a"].getPhoneRegCode:o["a"].getEmailRegCode,s={phone:this.account,email:this.account};this.$axios.post(t,s).then(function(t){if(200==t.data.code){var s=~~(Date.now()/1e3)+e.haveSetValue;r["a"].setStore("registe_verifycode_expire",s),e.countDown()}else e.accErrHint=t.data.message,e.showAccErr=!0}).catch(function(e){console.error(e)})},getCode:r["a"].debounce(function(){this.canGetCode&&this.reqCode()},r["a"].debounce_delay||300),checkAgree:function(){this.isAgree=!this.isAgree},reqVerCode:function(){var e=this,t=r["a"].isPhone(this.account)?o["a"].verPhoneRegCode:o["a"].verEmailRegCode,s={phone:this.account,email:this.account,code:this.codeYzxbnc};this.$axios.post(t,s).then(function(t){200===t.data.code?e.step=2:(e.seedCodeText=t.data.message,e.showSentTxt=!0,e.step=1)}).catch(function(e){console.error(e)})},reqRegister:function(){var e=this,t=r["a"].isPhone(this.account)?o["a"].phoneReg:o["a"].emailReg,s={phone:this.account,email:this.account,pwd:this.pwd},a={image:this.wx_image,unionid:this.wx_unionid,openid:this.wx_openid,name:this.wx_openid};s=this.wx_openid?Object.assign(s,a):s,this.$axios.post(t,s).then(function(t){200===t.data.code?(e.step=3,r["a"].pushCnzz("注册",e.account)):e.$Message.error(t.data.message)}).catch(function(e){console.error(e)})},registerFn:r["a"].debounce(function(){this.reqRegister()},r["a"].debounce_delay||300),goPath:function(e){this.$router.push({name:e})},countDown:function(){clearTimeout(this.timerID);var e=+r["a"].getStore("registe_verifycode_expire");this.timerCount=e-~~(Date.now()/1e3)||0,this.timerCount>0?(r["a"].isEn()?this.getCodeText=this.$t("Regx.reget")+this.timerCount+"s":this.getCodeText=this.timerCount+this.$t("Regx.reget"),this.timerID=setTimeout(this.countDown,1e3)):this.getCodeText=this.$t("Regx.getCode")},hideWxReg:function(){this.showWxReg=!1},refreshWxCode:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.showWxReg=!0,e.next=3,this.reqWxAppid();case 3:this.wx_appState&&(this.createRegQrCode(),this.wx_appState="");case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),reqWxAppid:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=o["a"].getWxInfo,e.next=3,this.$axios.post(t);case 3:if(s=e.sent,200!==s.data.code){e.next=10;break}if(a=s.data.payload||[],Object.keys(a).length){e.next=8;break}return e.abrupt("return");case 8:this.wx_appid=a.appid,this.wx_appState=a.state;case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),createRegQrCode:function(){new WxLogin({self_redirect:!1,id:"wx_qrcx",appid:this.wx_appid,scope:"snsapi_login",redirect_uri:encodeURIComponent(location.href),state:this.wx_appState,href:"https://app.vizo.top/css/wx_qrcode.css"})},initWxLogin:function(){var e=new URLSearchParams(location.search),t=e.get("code"),s=e.get("state");t&&s&&this.reqUserWxInfo(t,s)},reqUserWxInfo:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,s){var a,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a={code:t,state:s},e.next=3,this.$axios.post(o["a"].getUserWxInfo,a);case 3:if(n=e.sent,200!==n.data.code){e.next=14;break}if(i=n.data.payload||[],Object.keys(i).length){e.next=8;break}return e.abrupt("return");case 8:this.wx_image=i.image,this.wx_name=i.name,this.wx_openid=i.openid,this.wx_unionid=i.unionid,e.next=16;break;case 14:alert(n.data.message),location.href=location.href.replace(/\?.*/,"");case 16:case"end":return e.stop()}},e,this)}));function t(t,s){return e.apply(this,arguments)}return t}()},computed:{verify_account:function(){return r["a"].isPhone(this.account)||r["a"].isEmail(this.account)},verify_pwd:function(){var e=/^[a-z]+$|^[A-Z]+$|^\d+$/;return!e.test(this.pwd)&&this.pwd.length>=6},verify_pwd_repeat:function(){return this.pwd===this.pwd_repeat},canGetCode:function(){return this.verify_account&&this.timerCount<=0&&!this.showAccErr},canRegister:function(){return!!(this.verify_account&&6===this.codeYzxbnc.length&&this.verify_pwd&&this.verify_pwd_repeat&&this.isAgree)}},created:function(){this.init()}},h=p,l=(s("acea"),s("2877")),g=Object(l["a"])(h,a,n,!1,null,"f2e21d1c",null);t["default"]=g.exports},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},a91b:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNklEQVQ4T8WToUtDURTGf2eTDZZcMNosJrPIMOjewCAYXFAMFoMoe2smEYssOK448Q8Qg842WXh7TRDBaLYIWizPYhhsRxxv8qZPeY8FbzuXc777ne/7rjDkkSHniQVgt3SSLg2EG2PJ+ufjkQG2mzqWHOEWmAA8Y0k2MsDepaa8LC5Kzl95y1hyMgCw0dBMKs1ozZKXAV1UxXY5Q1nt3SunpiCb/Z6vFWxH74EplBVTkKt+Q7mlO6oc+LXz7LFQL0onDOAJGAfaCViqWtIsOboscOFr9ZAWcpW8vAUZBhnMAA6QAd4FdhX2/fq1k2T6eE4ev9s+4ILt6jxdroF0oLGdEGarebkLy8wPG0uOLgrUgVRPMmXNFOT8t8CF5qDc0qIqNYXDI0sqf6U1cpBiMYjzP/6fwQeofloRWh2uUQAAAABJRU5ErkJggg=="},acea:function(e,t,s){"use strict";var a=s("50dd"),n=s.n(a);n.a},b32f:function(e,t,s){},e472:function(e,t,s){"use strict";var a=s("b32f"),n=s.n(a);n.a}}]);