(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f52c478"],{"296a":function(t,s,e){t.exports=e.p+"img/yuan-2.a3fff7c1.png"},"6e0a":function(t,s,e){t.exports=e.p+"img/yuan-1.295039ed.png"},"7b2d":function(t,s,e){"use strict";var n=e("cf6d"),a=e.n(n);a.a},"82cf":function(t,s,e){t.exports=e.p+"img/animateBac.f756a480.png"},a55b:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"view-zps login-page"},[n("div",{staticClass:"content view-body",attrs:{tabindex:"1"}},[t._m(0),n("div",{staticClass:"right"},[n("div",{staticClass:"loginArea"},[n("div",{staticClass:"loginTitle",attrs:{cnrk:"密码登录"}},[t._v(t._s(t.$t("Login.loginPassword")))]),n("div",{staticClass:"inputItem"},[n("div",{staticClass:"inputItem-title",attrs:{cnrk:"登录账号"}},[t._v(t._s(t.$t("Login.account")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:t.$t("Login.accountPla"),cnrk:"p:中国大陆手机号/邮箱"},domProps:{value:t.account},on:{input:function(s){s.target.composing||(t.account=s.target.value)}}}),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.verify_account&&""!==t.account,expression:"!verify_account && account !== '' "}],attrs:{cnrk:"账号的格式不正确"}},[t._v(t._s(t.$t("Login.accountError")))])]),n("div",{staticClass:"inputItem"},[n("div",{staticClass:"inputItem-title",attrs:{cnrk:"登录密码"}},[t._v(t._s(t.$t("Login.password")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"inp-mms",attrs:{type:"password",placeholder:t.$t("Login.passwordPla"),cnrk:"p:请输入您的登录密码"},domProps:{value:t.password},on:{input:[function(s){s.target.composing||(t.password=s.target.value)},t.enterPwd]}}),n("p",{directives:[{name:"show",rawName:"v-show",value:t.loginFail&&""!==t.password,expression:"loginFail && password !== '' "}]},[t._v(t._s(t.pwdMsg))])]),n("button",{staticClass:"base-btn1 bg-blue login-btn",attrs:{disabled:!t.canLogin,cnrk:"登录"},on:{click:t.login}},[t._v(t._s(t.$t("Login.login")))]),n("div",{staticClass:"opnsw"},[n("span",{attrs:{cnrk:"忘记密码"},on:{click:function(s){return t.$router.push("/reset-pwd")}}},[t._v(t._s(t.$t("Login.forgetPassword")))]),n("span",{attrs:{cnrk:"免费注册"},on:{click:function(s){return t.$router.push("/register")}}},[t._v(t._s(t.$t("Login.registerFree")))])])])]),n("img",{staticClass:"bcImg bcImg-left",attrs:{src:e("296a")}}),n("img",{staticClass:"bcImg bcImg-right",attrs:{src:e("6e0a")}})])])},a=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"left",attrs:{oncontextmenu:"javascript:return false;"}},[n("div",{staticClass:"ims-w"},[n("p",{staticClass:"pn1"}),n("p",{staticClass:"pn2"}),n("img",{staticClass:"imxys",attrs:{ondragstart:"javascript:return false;",src:e("82cf")}})])])}],i=(e("4917"),e("96cf"),e("3b8d")),o=e("fa7d"),r=e("4ec3"),c=e("0418"),u=e("fd2d"),d={name:"Login",components:{Header:c["a"],Footer:u["a"]},data:function(){return{title:"login",account:"",password:"",loginFail:!1,pwdMsg:this.$t("Login.loginPassword")}},computed:{verify_account:function(){return o["a"].isPhone(this.account)||o["a"].isEmail(this.account)},verify_password:function(){return this.password.trim()},canLogin:function(){return this.verify_account&&this.verify_password}},methods:{goPath:function(t){this.$router.push({name:t})},login:o["a"].debounce(Object(i["a"])(regeneratorRuntime.mark(function t(){var s,e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=r["a"].login,e={phoneOrEmail:this.account,pwd:this.password},t.next=4,this.$axios.post(s,e);case 4:n=t.sent,200===n.data.code?(o["a"].setStore("isLogin",!0,1920),this.$store.commit("set_console_child_component","Console"),this.$store.commit("SET_LOGIN_TYPE",o["a"].isPhone(this.account)),this.$store.commit("set_header_show",!0),this.$store.dispatch("getUserInfo"),this.$store.dispatch("getUserInfo2"),this.$router.push({name:"Console"})):(this.pwdMsg=n.data.message,this.loginFail=!0);case 6:case"end":return t.stop()}},t,this)})),o["a"].debounce_delay||350),setKeyboardShortcut:function(){var t=this,s="";document.onkeydown=function(e){if(e.ctrlKey&&e.altKey&&e.key.match(/\d/)){if(t.isRapid())return;s+=e.key}"1238"==s&&o["a"].setStore("login.rapidLogin","1")}},enterPwd:function(){this.loginFail=!1},rapidLogin:function(){var t=this,s=document.querySelector(".view-body");s.onkeydown=function(s){var e=[{user:"we10086110@qq.com",pwd:"qwe123"},{user:"13883241934",pwd:"qwe123"}];s&&"Enter"===s.key&&t.canLogin&&t.login(),t.isRapid()&&s.altKey&&/\d/.test(s.key)&&s.key<=e.length&&(s.preventDefault(),t.account=e[s.key-1].user||"",t.password=e[s.key-1].pwd||"")}},isRapid:function(){return"1"===o["a"].getStore("login.rapidLogin")}},mounted:function(){this.rapidLogin(),this.setKeyboardShortcut()},created:function(){o["a"].isLogin()&&(o["a"].setStore("isLogin",!1),location.reload())}},l=d,p=(e("7b2d"),e("2877")),g=Object(p["a"])(l,n,a,!1,null,"7257abbc",null);s["default"]=g.exports},cf6d:function(t,s,e){}}]);