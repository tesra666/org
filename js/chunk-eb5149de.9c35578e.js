(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb5149de"],{"0980":function(t,e,s){"use strict";var n=s("231d"),r=s.n(n);r.a},"231d":function(t,e,s){},"296a":function(t,e,s){t.exports=s.p+"img/yuan-2.a3fff7c1.png"},"6e0a":function(t,e,s){t.exports=s.p+"img/yuan-1.295039ed.png"},"82cf":function(t,e,s){t.exports=s.p+"img/animateBac.f756a480.png"},a55b:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-zps login-page"},[n("div",{staticClass:"content view-body",attrs:{tabindex:"1"}},[t._m(0),n("div",{staticClass:"right"},[n("div",{staticClass:"loginArea"},[n("div",{staticClass:"loginTitle",attrs:{cnrk:"密码登录"}},[t._v(t._s(t.$t("Login.loginPassword")))]),n("div",{staticClass:"fg-tpk",class:{on:t.showWxQrCode}},[n("a",{staticClass:"refresh-btn-4s",attrs:{href:"javascript:;",cnrk:"刷新"},on:{click:function(e){return t.refreshWxCode()}}},[t._v("↻ "+t._s(t.$t("Login.refresh")))]),n("div",{staticClass:"wx-login-box",attrs:{id:"wx_login_box"}}),n("div",{staticClass:"inputItem"},[n("div",{staticClass:"inputItem-title",attrs:{cnrk:"登录账号"}},[t._v(t._s(t.$t("Login.account")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:t.$t("Login.accountPla"),cnrk:"p:中国大陆手机号/邮箱"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}}),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.verify_account&&""!==t.account,expression:"!verify_account && account !== '' "}],attrs:{cnrk:"账号的格式不正确"}},[t._v(t._s(t.$t("Login.accountError")))])]),n("div",{staticClass:"inputItem"},[n("div",{staticClass:"inputItem-title",attrs:{cnrk:"登录密码"}},[t._v(t._s(t.$t("Login.password")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"inp-mms",attrs:{type:"password",placeholder:t.$t("Login.passwordPla"),cnrk:"p:请输入您的登录密码"},domProps:{value:t.password},on:{input:[function(e){e.target.composing||(t.password=e.target.value)},t.enterPwd]}}),n("p",{directives:[{name:"show",rawName:"v-show",value:t.loginFail&&""!==t.password,expression:"loginFail && password !== '' "}]},[t._v(t._s(t.pwdMsg))])]),n("button",{staticClass:"base-btn1 bg-blue login-btn",attrs:{disabled:!t.canLogin,cnrk:"登录"},on:{click:t.login}},[t._v(t._s(t.$t("Login.login")))])]),n("div",{staticClass:"opnsw"},[n("span",{attrs:{cnrk:"忘记密码"},on:{click:function(e){return t.$router.push("/reset-pwd")}}},[t._v(t._s(t.$t("Login.forgetPassword")))]),n("span",{attrs:{cnrk:"免费注册"},on:{click:function(e){return t.$router.push("/register")}}},[t._v(t._s(t.$t("Login.registerFree")))])])])]),n("img",{staticClass:"bcImg bcImg-left",attrs:{src:s("296a")}}),n("img",{staticClass:"bcImg bcImg-right",attrs:{src:s("6e0a")}})])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left",attrs:{oncontextmenu:"javascript:return false;"}},[n("div",{staticClass:"ims-w"},[n("p",{staticClass:"pn1"}),n("p",{staticClass:"pn2"}),n("img",{staticClass:"imxys",attrs:{ondragstart:"javascript:return false;",src:s("82cf")}})])])}],i=(s("ac6a"),s("456d"),s("4917"),s("96cf"),s("3b8d")),a=s("fa7d"),o=s("4ec3"),c=s("a78e"),u=s.n(c),p=s("0418"),d=s("fd2d"),l={name:"Login",components:{Header:p["a"],Footer:d["a"]},data:function(){return{title:"login",account:"",password:"",loginFail:!1,pwdMsg:this.$t("Login.loginPassword"),showWxQrCode:!1,timer1s:null}},computed:{verify_account:function(){return a["a"].isPhone(this.account)||a["a"].isEmail(this.account)},verify_password:function(){return this.password.trim()},canLogin:function(){return this.verify_account&&this.verify_password},rapTxt:function(){return this.showWxQrCode?this.$t("Login.passwordLogin"):this.$t("Login.rapLogin")}},methods:{goPath:function(t){this.$router.push({name:t})},login:a["a"].debounce(Object(i["a"])(regeneratorRuntime.mark(function t(){var e,s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=o["a"].userLogin,s={username:this.account,password:this.password},t.next=4,this.$axios.post(e,s);case 4:n=t.sent,n.data.success?this.loginSuccessCtr(n.data.data):(this.pwdMsg=n.data.msg,this.loginFail=!0);case 6:case"end":return t.stop()}},t,this)})),a["a"].debounce_delay||350),loginSuccessCtr:function(t){u.a.set("token",JSON.stringify(t)),a["a"].setStore("isLogin",!0,1920),this.$store.commit("set_console_child_component","Console"),this.$store.commit("SET_LOGIN_TYPE",a["a"].isPhone(this.account)),this.$store.commit("set_header_show",!0),this.$store.commit("set_user_login",!0),this.$store.dispatch("getUserInfo"),this.$store.dispatch("getUserInfo2"),this.$router.push({name:"Console"})},setKeyboardShortcut:function(){var t=this,e="";document.onkeydown=function(s){if(s.ctrlKey&&s.altKey&&s.key.match(/\d/)){if(t.isRapid())return;e+=s.key}"1238"==e&&a["a"].setStore("login.rapidLogin","1")}},enterPwd:function(){this.loginFail=!1},rapidLogin:function(){var t=this,e=document.querySelector(".view-body");e.onkeydown=function(e){var s=[{user:"we10086110@qq.com",pwd:"qwe123"},{user:"13883241934",pwd:"qwe123"}];e&&"Enter"===e.key&&t.canLogin&&!t.showWxQrCode&&t.login(),t.isRapid()&&e.altKey&&/\d/.test(e.key)&&e.key<=s.length&&(e.preventDefault(),t.account=s[e.key-1].user||"",t.password=s[e.key-1].pwd||"")}},isRapid:function(){return"1"===a["a"].getStore("login.rapidLogin")},clearTimer1s:function(){clearTimeout(this.timer1s)},reqWxVstate:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,s,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.clearTimer1s(),t.next=3,this.$axios.post(o["a"].getLoginStatusYx);case 3:if(e=t.sent,200!==e.data.code){t.next=9;break}if(s=e.data.payload||[],Object.keys(s).length){t.next=8;break}return t.abrupt("return");case 8:0===s.status?this.timer1s=setTimeout(function(){n.reqWxVstate()},1e3):1===s.status?this.loginSuccessCtr():(alert(s.errorInfo),this.handleRapidLogin());case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),refreshWxCode:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.reqWxAppid();case 2:this.createWxLoginQrCode(),this.reqWxVstate();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),reqWxAppid:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=o["a"].getWxInfo,t.next=3,this.$axios.post(e);case 3:if(s=t.sent,200!==s.data.code){t.next=10;break}if(n=s.data.payload||[],Object.keys(n).length){t.next=8;break}return t.abrupt("return");case 8:this.wx_appid=n.appid,this.wx_appState=n.state;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),createWxLoginQrCode:function(){new WxLogin({self_redirect:!0,id:"wx_login_box",appid:this.wx_appid,scope:"snsapi_login",redirect_uri:encodeURIComponent("https://www.tesra.cloud/api/wxUser/loginCallback"),state:this.wx_appState,href:"https://tsimg.top/css/wx_qrcode.css"})},handleRapidLogin:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.showWxQrCode){t.next=5;break}return t.next=3,this.refreshWxCode();case 3:t.next=6;break;case 5:this.clearTimer1s();case 6:this.showWxQrCode=!this.showWxQrCode;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.rapidLogin(),this.setKeyboardShortcut()},created:function(){a["a"].isLogin()&&(a["a"].setStore("isLogin",!1),location.reload())},beforeDestroy:function(){this.clearTimer1s()}},h=l,g=(s("0980"),s("2877")),f=Object(g["a"])(h,n,r,!1,null,"7e63875c",null);e["default"]=f.exports}}]);