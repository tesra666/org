(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-613089cc"],{"1fe7":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"box"},[s("ul",t._l(t.D_leng,function(e,i){return s("li",{key:i,staticClass:"cursor-x"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.secret,expression:"!secret"}]},[t._v(t._s(t.inputVal[i]))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.secret&&t.inputVal[i],expression:"secret && inputVal[index]"}],staticClass:"point"})])}),0)]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],staticClass:"inputPwd",attrs:{type:"password",maxlength:t.D_leng,oninput:"value=value.replace(/\\D+/, '')"},domProps:{value:t.inputVal},on:{focus:function(e){return t.changeFocus(!0)},blur:function(e){return t.changeFocus(!1)},input:function(e){e.target.composing||(t.inputVal=e.target.value)}}})])},n=[],a=(s("c5f6"),{name:"inputPwd",props:{leng:{type:Number,default:6},secret:{type:Boolean,default:!1}},data:function(){return{title:"密码输入框组件",D_leng:this.leng,cIndex:0,inputVal:"",isFocus:!1}},watch:{inputVal:function(t){this.cIndex=t.length,this.$emit("input",t)}},methods:{changeFocus:function(t){this.isFocus=t}},computed:{xtsCls:function(){}}}),r=a,o=(s("e472"),s("2877")),c=Object(o["a"])(r,i,n,!1,null,"15441cb6",null);e["a"]=c.exports},"3da8":function(t,e,s){"use strict";var i=s("5df5"),n=s.n(i);n.a},"46e6":function(t,e,s){t.exports=s.p+"img/success.e654ab46.png"},"5df5":function(t,e,s){},"69ad":function(t,e,s){},"87bf":function(t,e,s){"use strict";var i=s("69ad"),n=s.n(i);n.a},"91e6":function(t,e,s){},a0a4:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"view-zps reg-page"},[i("div",{staticClass:"content view-body"},[i("div",{staticClass:"title",attrs:{cnrk:"免费注册"}},[t._v(t._s(t.$t("Login.registerFree")))]),i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.step||2==t.step,expression:"step == 1 || step == 2"}],staticClass:"step-1"},[i("div",{staticClass:"regItem"},[i("div",{staticClass:"regItem-title",attrs:{cnrk:"注册账号"}},[t._v(t._s(t.$t("Login.account")))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"hsyx-btn",attrs:{type:"text",placeholder:t.$t("Login.accountPla1"),cnrk:"邮箱"},domProps:{value:t.account},on:{input:[function(e){e.target.composing||(t.account=e.target.value)},t.inpFns]}}),i("p",{directives:[{name:"show",rawName:"v-show",value:t.showAccErr,expression:"showAccErr"}],staticClass:"color-red"},[t._v(t._s(t.accErrHint))])]),i("div",{staticClass:"regItem"},[i("div",{staticClass:"regItem-title",attrs:{cnrk:"验证码"}},[t._v(t._s(t.$t("Regx.code")))]),i("div",{staticClass:"regItem-code"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.codeYzxbnc,expression:"codeYzxbnc"}],staticClass:"inpox hsyx-btn",attrs:{type:"text",maxlength:"6",oninput:"value=value.replace(/\\D+/, '')"},domProps:{value:t.codeYzxbnc},on:{input:[function(e){e.target.composing||(t.codeYzxbnc=e.target.value)},t.inpVerCd]}}),i("button",{staticClass:"Local-btn sdgbf7y6-btn",attrs:{disabled:!t.canGetCode,cnrk:"获取验证码"},on:{click:t.getCode}},[t._v(t._s(t.getCodeText||t.$t("Regx.getCode")))])]),i("p",{directives:[{name:"show",rawName:"v-show",value:t.showSentTxt,expression:"showSentTxt"}],staticClass:"color-red",attrs:{cnrk:"验证码已发送"}},[t._v(t._s(t.seedCodeText||t.$t("Regx.sentCode"))+" ")])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:2==t.step,expression:"step == 2"}],staticClass:"step-2"},[i("div",{staticClass:"regItem"},[i("div",{staticClass:"regItem-title",attrs:{cnrk:"邀请码"}},[t._v(t._s(t.$t("Regx.inviteCode")))]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inviteCode,expression:"inviteCode",modifiers:{trim:!0}}],staticClass:"hsyx-btn",attrs:{type:"text",maxlength:"10",placeholder:t.$t("Regx.inviteCodePlc"),cnrk:""},domProps:{value:t.inviteCode},on:{input:[function(e){e.target.composing||(t.inviteCode=e.target.value.trim())},t.inpInvFns],blur:function(e){return t.$forceUpdate()}}}),i("p",{directives:[{name:"show",rawName:"v-show",value:t.showInvErr,expression:"showInvErr"}],staticClass:"color-red"},[t._v(t._s(t.inviteErrHint))])]),i("div",{staticClass:"regItem"},[i("div",{staticClass:"regItem-title",attrs:{cnrk:"设置密码"}},[t._v(t._s(t.$t("Regx.setPwd")))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"hsyx-btn",attrs:{type:"password",placeholder:t.$t("Regx.inputPwd"),maxlength:"26",cnrk:"请输入您的密码"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}}),i("p",{directives:[{name:"show",rawName:"v-show",value:""===t.pwd,expression:"pwd === ''"}],staticClass:"color-gray",attrs:{cnrk:"密码由6-20位且不能为纯数字或纯字母"}},[t._v(t._s(t.$t("Regx.inputPwdError")))]),i("p",{directives:[{name:"show",rawName:"v-show",value:!t.verify_pwd&&""!==t.pwd,expression:"!verify_pwd && pwd !== ''"}],staticClass:"color-red",attrs:{cnrk:"密码由6-20位且不能为纯数字或纯字母"}},[t._v(t._s(t.$t("Regx.inputPwdError")))])]),i("div",{staticClass:"regItem"},[i("div",{staticClass:"regItem-title",attrs:{cnrk:"确认密码"}},[t._v(t._s(t.$t("Regx.confirmPwd")))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd_repeat,expression:"pwd_repeat"}],staticClass:"hsyx-btn",attrs:{type:"password",placeholder:t.$t("Regx.confirmPwdPla"),maxlength:"26",cnrk:"请再次确认您的密码"},domProps:{value:t.pwd_repeat},on:{input:function(e){e.target.composing||(t.pwd_repeat=e.target.value)}}}),i("p",{directives:[{name:"show",rawName:"v-show",value:!t.verify_pwd_repeat&&""!==t.pwd_repeat,expression:"!verify_pwd_repeat && pwd_repeat !== ''"}],staticClass:"color-red",attrs:{cnrk:"两次密码不一致"}},[t._v(t._s(t.$t("Regx.confirmPwdError")))])]),i("div",{staticClass:"Terms"},[i("div",{staticClass:"Radio",on:{click:t.checkAgree}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.isAgree,expression:"isAgree"}],attrs:{src:s("a91b")}})]),i("a",{staticClass:"Terms-text",attrs:{href:"/protocol",cnrk:"《服务条款》"}},[t._v(t._s(t.$t("Regx.tos")))])]),i("div",{staticClass:"submit-reg"},[i("button",{staticClass:"Local-btn Local-btn-lang",attrs:{disabled:!t.canRegister,cnrk:"注册"},on:{click:t.registerFn}},[t._v(t._s(t.$t("Nav.register")))])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:3==t.step,expression:"step == 3"}],staticClass:"step-3"},[i("div",{staticClass:"success"},[i("img",{attrs:{src:s("46e6")}}),i("p",{staticClass:"ptsa",attrs:{cnrk:"注册成功! 欢迎您的加入"}}),i("button",{staticClass:"Local-btn Local-btn-lang bg-blue",attrs:{cnrk:"立即登录"},on:{click:t.goLogin}},[t._v(t._s(t.$t("Regx.immiLogin")))])])])])])},n=[],a=(s("a481"),s("b893")),r=s("4ec3"),o=s("0418"),c=s("fd2d"),u=s("1fe7"),d={name:"RegisterInv",components:{Header:o["a"],Footer:c["a"],InputPwd:u["a"]},data:function(){return{timerID:0,codeYzxbnc:"",account:"",inviteCode:"",pwd:"",accErrHint:this.$t("Regx.accountError"),showAccErr:!1,inviteErrHint:this.$t("Regx.inviteError"),showInvErr:!1,pwd_repeat:"",regType:1,step:2,Timer:null,haveSetValue:30,timerCount:0,isAgree:!1,seedCodeText:"",showSentTxt:!1,getCodeText:""}},methods:{init:function(){this.countDown()},inpFns:function(){this.showAccErr=!1},inpInvFns:function(){this.showInvErr=!1},inpVerCd:Object(a["h"])(function(){this.showSentTxt=!1},800),reqCode:function(){var t=this,e=Object(a["w"])(this.account)?r["a"].registerPhoneCode:r["a"].registerEmailCode,s={phone:this.account,email:this.account};this.$axios.post(e,s).then(function(e){if(e.data.success){var s=~~(Date.now()/1e3)+t.haveSetValue;Object(a["z"])("registe_verifycode_expire",s),t.countDown()}else t.accErrHint=e.data.msg,t.showAccErr=!0}).catch(function(t){console.error(t)})},getCode:Object(a["h"])(function(){this.canGetCode&&this.reqCode()},300),checkAgree:function(){this.isAgree=!this.isAgree},reqVerCode:function(){var t=this,e=Object(a["w"])(this.account)?r["a"].verPhoneRegCode:r["a"].verEmailRegCode,s={phone:this.account,email:this.account,code:this.codeYzxbnc};this.$axios.post(e,s).then(function(e){200===e.data.code?t.step=2:(t.seedCodeText=e.data.message,t.showSentTxt=!0,t.step=1)}).catch(function(t){console.error(t)})},reqRegister:function(){var t=this,e=Object(a["w"])(this.account)?r["a"].registerPhoneSubmit:r["a"].registerEmailSubmit,s={phone:this.account,email:this.account,password:this.pwd,captcha:this.codeYzxbnc,invitation:this.inviteCode,device:1,source:0};this.$axios.post(e,s).then(function(e){e.data.success?(t.step=3,Object(a["x"])("注册",t.account)):t.$Message.error(e.data.msg)}).catch(function(t){console.error(t)})},registerFn:Object(a["h"])(function(){this.reqRegister()},300),goPath:function(t){this.$router.push({name:t})},goLogin:function(){this.$router.replace({name:"Login"})},countDown:function(){clearTimeout(this.timerID);var t=+Object(a["o"])("registe_verifycode_expire");this.timerCount=t-~~(Date.now()/1e3)||0,this.timerCount>0?(Object(a["s"])()?this.getCodeText=this.$t("Regx.reget")+this.timerCount+"s":this.getCodeText=this.timerCount+this.$t("Regx.reget"),this.timerID=setTimeout(this.countDown,1e3)):this.getCodeText=this.$t("Regx.getCode")}},computed:{verify_account:function(){return Object(a["w"])(this.account)||Object(a["r"])(this.account)},verify_inv_code:function(){return 10===this.inviteCode.length},verify_pwd:function(){var t=/^[a-z]+$|^[A-Z]+$|^\d+$/;return!t.test(this.pwd)&&this.pwd.length>=6},verify_pwd_repeat:function(){return this.pwd===this.pwd_repeat},canGetCode:function(){return this.verify_account&&this.timerCount<=0&&!this.showAccErr},canRegister:function(){return!!(this.verify_account&&6===this.codeYzxbnc.length&&this.verify_inv_code&&this.verify_pwd&&this.verify_pwd_repeat&&this.isAgree)}},created:function(){this.init()}},l=d,p=(s("a1eb"),s("87bf"),s("3da8"),s("2877")),v=Object(p["a"])(l,i,n,!1,null,"15219741",null);e["default"]=v.exports},a1eb:function(t,e,s){"use strict";var i=s("91e6"),n=s.n(i);n.a},a91b:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNklEQVQ4T8WToUtDURTGf2eTDZZcMNosJrPIMOjewCAYXFAMFoMoe2smEYssOK448Q8Qg842WXh7TRDBaLYIWizPYhhsRxxv8qZPeY8FbzuXc777ne/7rjDkkSHniQVgt3SSLg2EG2PJ+ufjkQG2mzqWHOEWmAA8Y0k2MsDepaa8LC5Kzl95y1hyMgCw0dBMKs1ozZKXAV1UxXY5Q1nt3SunpiCb/Z6vFWxH74EplBVTkKt+Q7mlO6oc+LXz7LFQL0onDOAJGAfaCViqWtIsOboscOFr9ZAWcpW8vAUZBhnMAA6QAd4FdhX2/fq1k2T6eE4ev9s+4ILt6jxdroF0oLGdEGarebkLy8wPG0uOLgrUgVRPMmXNFOT8t8CF5qDc0qIqNYXDI0sqf6U1cpBiMYjzP/6fwQeofloRWh2uUQAAAABJRU5ErkJggg=="},b32f:function(t,e,s){},e472:function(t,e,s){"use strict";var i=s("b32f"),n=s.n(i);n.a}}]);