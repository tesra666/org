(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17c3c0d6"],{"59ed":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABzUlEQVQ4T62Uv2tTURzFz7l5oRA7CQ4KFalbER0k7SA4iP9ATV7o2kFCm6okdnAo8sDNxlcN5pXnopOU5wuBQh0snWzx52KxKk4iTm4VBa3J/cqrCn0h8V1a73CX7zmfe87lcul64VUBbEB+YE+LfQDv0/XCV5XJ/Ik9sf6YXS/c4JwXPi9P5of/C7D+YL0r8LrfPJpu6RyUCsoTox9MD3N3AmdvhyNKyWhkJmgDGITgvVCaSUCRdmO6NPYiBrzlB4dbbY5sm4VTJE6LYAUUPwmYTqsnF8/nPsWAO02O72f2be0f/tb/9akzPv49Cfh33hNoCujU7Rp4s97IatGHKlP2YnRBXRPOzi8cU7DOJKUjkIHGNRAWgDtCbCitlsulc29jCau1YIhpdTYJKBoZhd9Akr6GvBGFR9PF/LtdV656wUmSBy9P2Es9KyclM5kbJ6zVggMtyxr68nn9seM4uhc8Bpybbx7R0sp2F/MGgQER3APlYafGSsmzS8XCxxgwegpt6lw3IMESgH6Cqxp6rVPDNsPKhfxL48rV+kKWTJ36mZK7V4qFTaPKJpeepNlOGG2Vkn08SWwwjz7r13S9xgwoBRHZMjD9Q0KLkOAXiC798WIxuNUAAAAASUVORK5CYII="},"6b40":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Modal",{staticClass:"modal-ais modal-preference",attrs:{width:"648","class-name":"vertical-center-modal","footer-hide":""},model:{value:e.modalPreference,callback:function(t){e.modalPreference=t},expression:"modalPreference"}},[s("section",{staticClass:"tabs"},[s("div",{staticClass:"base-set tab-item",class:{active:"base"===e.tabName},on:{click:function(t){e.tabName="base"}}},[s("img",{staticClass:"icon icon-base",attrs:{src:a("59ed"),alt:"icon-base"}}),s("span",[e._v(e._s(e.$t("AI.modalPreferBase")))])]),s("div",{staticClass:"font-size tab-item",class:{active:"serve"===e.tabName},on:{click:function(t){e.tabName="serve"}}},[s("img",{staticClass:"icon icon-serve",attrs:{src:a("59ed"),alt:"icon-serve"}}),s("span",[e._v(e._s(e.$t("AI.modalPreferService")))])])]),s("div",{staticClass:"content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:"base"===e.tabName,expression:"tabName === 'base'"}],staticClass:"base-wrap"},[s("div",{staticClass:"theme item"},[s("span",{staticClass:"tit"},[e._v(e._s(e.$t("AI.modalPreferTheme"))+": ")]),s("Select",{staticClass:"select-theme",on:{"on-change":e.updateTheme},model:{value:e.curTheme,callback:function(t){e.curTheme=t},expression:"curTheme"}},[s("Option",{attrs:{value:"vs"}},[e._v("Light")]),s("Option",{attrs:{value:"dark"}},[e._v("Dark")])],1)],1),s("div",{staticClass:"font-size item"},[s("span",{staticClass:"tit"},[e._v(e._s(e.$t("AI.modalPreferFontSize"))+": ")]),s("Select",{staticClass:"select-theme",on:{"on-change":e.updateFontSize},model:{value:e.curFontSize,callback:function(t){e.curFontSize=t},expression:"curFontSize"}},e._l(e.fontSizeArr,(function(t){return s("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])})),1)],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:"serve"===e.tabName,expression:"tabName === 'serve'"}],staticClass:"serve-wrap"},[s("div",{staticClass:"save-switch item"},[s("span",{staticClass:"tit"},[e._v(e._s(e.$t("AI.modalPreferAutoPay"))+": ")]),s("i-switch",{staticClass:"auto-save",attrs:{size:"large"},on:{"on-change":e.toggleAutoPay},model:{value:e.isAutoPay,callback:function(t){e.isAutoPay=t},expression:"isAutoPay"}},[s("span",{attrs:{slot:"open"},slot:"open"},[e._v("ON")]),s("span",{attrs:{slot:"close"},slot:"close"},[e._v("OFF")])])],1),s("div",{staticClass:"tip"},[s("span",{staticClass:"tit"},[e._v(e._s(e.$t("AI.modalPreferAutoPayTipTitle"))+": ")]),s("span",{staticClass:"des"},[e._v(e._s(e.$t("AI.modalPreferAutoPayTipDes")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isAutoPay,expression:"isAutoPay"}],staticClass:"item pay-order"},[s("div",{staticClass:"tit"},[e._v(e._s(e.$t("AI.modalPreferPayOrderTitle"))+": ")]),s("div",{staticClass:"orders-list"},[s("div",{staticClass:"tip"},[e._v(e._s(e.$t("AI.modalPreferPayOrderDes")))]),s("transition-group",{staticClass:"list-wrap",attrs:{name:"flip-list",tag:"div"}},e._l(e.payOrders,(function(t,a){return s("div",{key:t.type,staticClass:"list"},[s("div",{staticClass:"left"},[e._v(e._s(t.title))]),s("div",{staticClass:"center"},[e._v(e._s(e.$t("AI.modalPayRemain")+": ")+" "+e._s(e._f("transToThousandsFloor")(t.balance))+" T•H")]),s("div",{directives:[{name:"show",rawName:"v-show",value:a>0,expression:"index > 0"}],staticClass:"right",on:{click:function(t){return e.handleUp(a)}}},[e._v("↑")])])})),0)],1)]),e.isQueryLoading?s("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)])])},i=[],r=(a("7514"),a("28a5"),a("456d"),a("75fc")),o=(a("ac6a"),a("5df3"),a("96cf"),a("3b8d")),n=(a("c5f6"),a("4ec3")),c=a("b893"),u={name:"ModalPreference",props:{theme:String,fontSize:Number,autoSave:Boolean},data:function(){return{modalPreference:!1,tabName:"base",curTheme:this.theme,curFontSize:this.fontSize,fontSizeArr:[13,14,15,16,18,20],isAutoSave:this.autoSave,isAutoPay:null,isQueryLoading:!1,payOrders:[{balance:0,type:1,title:this.$t("AI.modalPayVoucher")},{balance:0,type:2,title:this.$t("AI.modalPayCoupon")},{balance:0,type:3,title:this.$t("AI.modalPayTsr")}]}},created:function(){this.initIdeInfo()},filters:{transToThousandsFloor:function(e){return Object(c["C"])(e)}},methods:{showModalPreference:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.modalPreference=!0,this.isQueryLoading=!0,e.next=4,Promise.all([this.reqAutoPayInfo(),this.reqShowTH()]);case 4:this.isAutoPay=1===this.$store.state.autoPay,this.isQueryLoading=!1,this.updateAutoSave();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),initIdeInfo:function(){var e=localStorage.getItem("AIcurTheme");e&&(this.curTheme=e,this.$store.commit("setWebIdeTheme",this.curTheme));var t=document.querySelector("body");t.className="vs"==this.curTheme?"white":"black";var a=localStorage.getItem("AIcurFontSize");a&&(this.curFontSize=Number(a),this.$store.commit("setWebIdeFontSize",this.curFontSize)),this.updateAutoSave()},updateAutoSave:function(){var e=localStorage.getItem("AIisAutoSave");e&&(this.isAutoSave="true"===e,this.$store.commit("setWebIdeAutoSave",this.isAutoSave))},updateTheme:function(){this.$store.getters.webIdeInfo.theme!==this.curTheme&&(this.$store.commit("setWebIdeTheme",this.curTheme),localStorage.setItem("AIcurTheme",this.curTheme));var e=document.querySelector("body");e.className="vs"==this.curTheme?"white":"black"},updateFontSize:function(){this.$store.getters.webIdeInfo.fontSize!==this.curFontSize&&(this.$store.commit("setWebIdeFontSize",this.curFontSize),localStorage.setItem("AIcurFontSize",this.curFontSize))},toggleAutoSave:function(){this.isAutoSave=!this.isAutoSave,localStorage.setItem("AIisAutoSave",this.isAutoSave),this.$store.commit("setWebIdeAutoSave",this.isAutoSave)},toggleAutoPay:function(e){var t=this,a={autoPay:this.isAutoPay?1:2,payOrder:this.payOrders.map((function(e){return e.type})).join(",")};this.$axios.post(n["a"].updateAutoPayInfo,a).then((function(e){200===e.data.code?t.showCongUpdated():(t.isAutoPay=!t.isAutoPay,t.$Message.error(e.data.message)),t.$store.commit("setAutoPayState",t.isAutoPay?1:2)})).catch((function(e){console.log(e)}))},handleUp:function(e){var t=this;if(!(e<1)){var a=Object(r["a"])(this.payOrders),s=[this.payOrders[e],this.payOrders[e-1]];this.payOrders[e-1]=s[0],this.payOrders[e]=s[1],this.payOrders=this.payOrders.slice();var i=this.payOrders.map((function(e){return e.type})).join(","),o={autoPay:this.isAutoPay?1:2,payOrder:i};this.$axios.post(n["a"].updateAutoPayInfo,o).then((function(e){200===e.data.code?t.showCongUpdated():(t.payOrders=a,t.$Message.error(e.data.message)),t.$store.commit("setPayOrder",i)})).catch((function(e){console.log(e)}))}},reqAutoPayInfo:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,s,i,r,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$axios.post(n["a"].reqAutoPayInfo);case 3:if(t=e.sent,200!==t.data.code){e.next=14;break}if(a=t.data.payload||[],Object.keys(a).length){e.next=8;break}return e.abrupt("return");case 8:this.isAutoPay=1===a.autoPay,s=this.payOrders.map((function(e){return e.type})).join(","),i=a.payOrder?a.payOrder:"1,2,3",s!=i&&(r=i.split(",").map((function(e){return o.payOrders.find((function(t){return Number(t.type)===Number(e)}))})),this.payOrders=r.slice()),this.$store.commit("setAutoPayState",1===a.autoPay?1:2),this.$store.commit("setPayOrder",i);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));function t(){return e.apply(this,arguments)}return t}(),reqShowTH:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$axios.post(n["a"].queryShowTH);case 3:t=e.sent,200===t.data.code&&(a=t.data.payload.voucher,s=t.data.payload.th,i=t.data.payload.tsr,this.payOrders.forEach((function(e){switch(e.type){case 1:e.balance=a;break;case 2:e.balance=s;break;case 3:e.balance=i;break;default:console.log("Error: ",e.type);break}}))),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),showCongUpdated:Object(c["h"])((function(){this.$Message.success(this.$t("AI.configurationUpdated"))}),500),showUpdateError:Object(c["h"])((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Oops, update failed!";this.$Message.success(e)}),500)},watch:{curTheme:function(e){this.$emit("updateTheme",e)},curFontSize:function(e){this.$emit("updateFontSize",e)},isAutoSave:function(e){this.$emit("updateAutoSave",e)}}},l=u,h=(a("7bfb"),a("2877")),d=Object(h["a"])(l,s,i,!1,null,null,null);t["default"]=d.exports},"7bfb":function(e,t,a){"use strict";var s=a("f3a9"),i=a.n(s);i.a},f3a9:function(e,t,a){}}]);