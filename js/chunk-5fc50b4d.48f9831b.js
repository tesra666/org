(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5fc50b4d"],{"0f85":function(e,a,t){"use strict";t.r(a);var s={data:function(){return{modalAffordableTip:!1,isChecked:!1}},watch:{isChecked:function(e){localStorage.setItem("AIAffordableTip",e)}},methods:{showModal:function(){this.modalAffordableTip=!0},hideModal:function(){this.modalAffordableTip=!1},handleSure:function(){this.hideModal(),this.$emit("handleSureStartTask")}}},i=(t("97a8"),t("2877")),c=Object(i.a)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("Modal",{staticClass:"modal-ais modal-affordable-tip",attrs:{title:e.$t("AI.warmTips"),width:"500","class-name":"vertical-center-modal","footer-hide":""},model:{value:e.modalAffordableTip,callback:function(a){e.modalAffordableTip=a},expression:"modalAffordableTip"}},[t("div",{staticClass:"content"},[t("p",{staticClass:"des"},[e._v(e._s(e.$t("AI.modalAffordableTipDes")))])]),t("div",{staticClass:"modal-footer"},[t("div",{staticClass:"btn-wrap"},[t("CoButton",{staticClass:"base-btn2 bg-blue",nativeOn:{click:function(a){return e.handleSure(a)}}},[e._v("\n        "+e._s(e.$t("AI.sure"))+"\n      ")]),t("div",{staticClass:"check-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isChecked,expression:"isChecked"}],staticClass:"no-next",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isChecked)?e._i(e.isChecked,null)>-1:e.isChecked},on:{change:function(a){var t=e.isChecked,s=a.target,i=!!s.checked;if(Array.isArray(t)){var c=e._i(t,null);s.checked?c<0&&(e.isChecked=t.concat([null])):c>-1&&(e.isChecked=t.slice(0,c).concat(t.slice(c+1)))}else e.isChecked=i}}}),t("span",[e._v(e._s(e.$t("AI.noNext")))])])],1)])])}),[],!1,null,null,null);a.default=c.exports},"6bee":function(e,a,t){},"97a8":function(e,a,t){"use strict";var s=t("6bee");t.n(s).a}}]);