(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-431cf704"],{"0a03":function(s,t,a){"use strict";var e=a("5388"),i=a.n(e);i.a},5388:function(s,t,a){},"7f66":function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("Modal",{staticClass:"modal-ais modal-stop-task",attrs:{title:s.$t("AI.modalTRTitle"),width:"500","class-name":"vertical-center-modal","footer-hide":""},model:{value:s.modalStopTask,callback:function(t){s.modalStopTask=t},expression:"modalStopTask"}},[a("div",{staticClass:"content"},[a("p",[s._v(s._s(s.$t("AI.modalTRDes")))]),a("div",{staticClass:"name item"},[a("span",{staticClass:"tit"},[s._v(s._s(s.$t("AI.modalTRProName"))+": ")]),a("span",{staticClass:"des"},[s._v(s._s(s.taskName))])]),a("div",{staticClass:"used-time item"},[a("span",{staticClass:"tit"},[s._v(s._s(s.$t("AI.modalTRProUsedTime"))+":")]),a("span",{staticClass:"des"},[s._v(s._s(s.usedTime))])]),a("div",{staticClass:"used-th item"},[a("span",{staticClass:"tit"},[s._v(s._s(s.$t("AI.modalTRProUsedTH"))+":")]),a("span",{staticClass:"des red"},[s._v(s._s(s.usedTH))])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"base-btn2 bg-blue",on:{click:s.sureStopTask}},[s._v("\n      "+s._s(s.$t("AI.modalTermiConfirm"))+"\n    ")]),a("button",{staticClass:"base-btn3 bg-white",on:{click:s.hideModalStopTask}},[s._v("\n      "+s._s(s.$t("AI.modalCancel"))+"\n    ")])]),s.stopOnline?a("Spin",{attrs:{size:"large",fix:""}}):s._e()],1)},i=[],o={name:"ModalStopTask",props:{taskName:{type:String,default:""},usedTime:{default:null},usedTH:{default:null}},data:function(){return{modalStopTask:!1,stopOnline:!1}},methods:{sureStopTask:function(){this.stopOnline=!0,this.$emit("stopTask")},hideModalStopTask:function(){this.modalStopTask=!1,this.hideLoadingMask()},hideLoadingMask:function(){this.stopOnline=!1},showModalStopTask:function(){this.modalStopTask=!0}},components:{}},n=o,l=(a("0a03"),a("2877")),d=Object(l["a"])(n,e,i,!1,null,null,null);t["default"]=d.exports}}]);