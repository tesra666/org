(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18d4099d"],{"3b2b":function(t,e,a){var n=a("7726"),i=a("5dbc"),o=a("86cc").f,s=a("9093").f,m=a("aae3"),u=a("0bfb"),l=n.RegExp,p=l,r=l.prototype,h=/a/g,c=/a/g,d=new l(h)!==h;if(a("9e1e")&&(!d||a("79e5")(function(){return c[a("2b4c")("match")]=!1,l(h)!=h||l(c)==c||"/a/i"!=l(h,"i")}))){l=function(t,e){var a=this instanceof l,n=m(t),o=void 0===e;return!a&&n&&t.constructor===l&&o?t:i(d?new p(n&&!o?t.source:t,e):p((n=t instanceof l)?t.source:t,n&&o?u.call(t):e),a?this:r,l)};for(var N=function(t){t in l||o(l,t,{configurable:!0,get:function(){return p[t]},set:function(e){p[t]=e}})},I=s(p),f=0;I.length>f;)N(I[f++]);r.constructor=l,l.prototype=r,a("2aba")(n,"RegExp",l)}a("7a56")("RegExp")},5361:function(t,e,a){"use strict";var n=a("b780"),i=a.n(n);i.a},"99b4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{staticClass:"modal-ais modal-create-project",attrs:{title:t.modalInputNameData.title,width:"468","class-name":"vertical-center-modal","footer-hide":""},model:{value:t.modalInputName,callback:function(e){t.modalInputName=e},expression:"modalInputName"}},[a("div",{staticClass:"content"},[t._v("\n    "+t._s(t.modalInputNameData.name)+"：\n    "),t.isShowInputName?a("input",{directives:[{name:"focus",rawName:"v-focus",value:t.isShowInputName,expression:"isShowInputName"},{name:"model",rawName:"v-model.trim",value:t.inputName,expression:"inputName",modifiers:{trim:!0}}],staticClass:"ipt-name",attrs:{type:"text",autofocus:"",placeholder:t.modalInputNameData.plcHolder,maxlength:"32"},domProps:{value:t.inputName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSureInputName(e)},input:function(e){e.target.composing||(t.inputName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):t._e(),a("p",{directives:[{name:"show",rawName:"v-show",value:t.showTip,expression:"showTip"}],staticClass:"error-tip"},[t._v(t._s(t.nameTip))])]),a("div",{staticClass:"btn-wrap"},[a("span",{staticClass:"btn bg-blue btn-sure",on:{click:t.handleSureInputName}},[t._v(t._s(t.$t("AI.sure")))]),a("span",{staticClass:"btn btn-cancel",on:{click:t.hideModalInputName}},[t._v(t._s(t.$t("AI.cancel")))])])])},i=[],o=(a("3b2b"),a("6762"),a("2fdb"),{name:"ModalInputName",directives:{focus:{inserted:function(t){t.focus()}}},data:function(){return{modalInputName:!1,modalInputNameData:{type:"project",title:"创建项目",name:"项目名称",plcHolder:"请输入项目名称"},isShowInputName:!0,inputName:"",showTip:!1}},computed:{verifyInputName:function(){var t=this.modalInputNameData.type.includes("file")?/^[a-zA-Z][a-zA-Z0-9_.]{1,31}$/:/^[a-zA-Z][a-zA-Z0-9_]{1,31}$/;return t.test(this.inputName)},nameTip:function(){var t=this.$t("AI.fileNameRule"),e=this.$t("AI.nameRule");return"file"===this.modalInputNameData.type?t:e}},methods:{showModalCreateProject:function(){this.modalInputNameData.type="project",this.modalInputNameData.title=this.$t("AI.createProject"),this.modalInputNameData.name=this.$t("AI.projectName"),this.modalInputNameData.plcHolder=this.$t("AI.inputProjectName"),this.showModalInputName()},showModalCreateFile:function(){this.modalInputNameData.type="file",this.modalInputNameData.title=this.$t("AI.newFile"),this.modalInputNameData.name=this.$t("AI.fileName"),this.modalInputNameData.plcHolder=this.$t("AI.inputFileName"),this.showModalInputName()},showModalCreateFolder:function(){this.modalInputNameData.type="folder",this.modalInputNameData.title=this.$t("AI.newFolder"),this.modalInputNameData.name=this.$t("AI.folderName"),this.modalInputNameData.plcHolder=this.$t("AI.inputFolderName"),this.showModalInputName()},showModalRenameFile:function(t){this.modalInputNameData.type="renamefile",this.showModalRename(),this.inputName=t},showModalRenameFolder:function(t){this.modalInputNameData.type="renamefolder",this.showModalRename(),this.inputName=t},showModalRename:function(){this.modalInputNameData.title=this.$t("AI.renameTitle"),this.modalInputNameData.name=this.$t("AI.rename"),this.modalInputNameData.plcHolder=this.$t("AI.renamePlc"),this.showModalInputName()},handleSureInputName:function(){if(this.inputName){new RegExp('[\\\\/:*?"<>|]');this.verifyInputName?(this.hideModalInputName(),this.$emit("handleSureInputName",{type:this.modalInputNameData.type,inputName:this.inputName})):this.$Message.warning(this.$t("AI.invalidName"))}else{var t=this.$t("AI.noEmptyName");this.$Message.warning(t)}},showModalInputName:function(){var t=this;this.inputName="",this.showTip=!1,this.modalInputName=!0,this.isShowInputName=!1,this.$nextTick(function(){t.isShowInputName=!0})},hideModalInputName:function(){this.modalInputName=!1}},watch:{inputName:function(t){this.verifyInputName?this.showTip=!1:this.showTip=!0}}}),s=o,m=(a("5361"),a("2877")),u=Object(m["a"])(s,n,i,!1,null,null,null);e["default"]=u.exports},b780:function(t,e,a){}}]);