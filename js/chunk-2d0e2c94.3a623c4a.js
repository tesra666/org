(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0e2c94"],{"7fd3":function(t,s,e){"use strict";e.r(s);var a=(e("ac6a"),e("456d"),e("4ec3")),o=e("b893"),i={name:"ModalImportProject",mixins:[e("9d11").a],data:function(){return{modalImportTask:!1,taskList:[],queryProjectList:{total:null,pageNum:1,pageSize:5},isQueryLoading:!1}},methods:{handleImportProject:function(t){1===t.old&&(this.hideModalImportProject(),this.$emit("handleImportProject",t))},gotoUpload:function(){this.hideModalImportProject(),this.$store.commit("set_console_child_component","Project"),this.$router.push({name:"Console"})},showModalImportProject:function(){this.modalImportTask=!0,this.changePageProjectList(this.queryProjectList.pageNum)},hideModalImportProject:function(){this.modalImportTask=!1},changePageProjectList:function(t){this.queryProjectList.pageNum=t,this.requestProjectList(!1)},requestProjectList:function(){var t=this,s=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e={pageNum:this.queryProjectList.pageNum,pageSize:s?0:this.queryProjectList.pageSize};this.isQueryLoading=!0,this.$axios.post(a.a.getTaskList,e).then((function(s){if(200==s.data.code){t.isQueryLoading=!1;var e=s.data.payload||[];Object.keys(e).length&&(t.queryProjectList.total=e.total,t.taskList=e.list.map((function(s){return s.statusText=t.getStatusText(s.trainStatus),s.updateTimeText=Object(o.l)("Y-M-D h:m",s.updateTime),s})))}})).catch((function(t){}))}}},r=e("2877"),c=Object(r.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Modal",{staticClass:"modal-ais modal-import-task",attrs:{title:t.$t("AI.projectImport"),width:"648","class-name":"vertical-center-modal","footer-hide":""},model:{value:t.modalImportTask,callback:function(s){t.modalImportTask=s},expression:"modalImportTask"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"wrap task-wrap"},[e("div",{staticClass:"thead tr"},[e("span",{staticClass:"name"},[t._v(t._s(t.$t("AI.projectName")))]),e("span",{staticClass:"status"},[t._v(t._s(t.$t("AI.status")))]),e("span",{staticClass:"update-time"},[t._v(t._s(t.$t("AI.update")))]),e("span",{staticClass:"project-desc"},[t._v(t._s(t.$t("AI.describe")))]),e("span",{staticClass:"handle"},[t._v(t._s(t.$t("AI.handle")))])]),e("div",{staticClass:"tbody"},[t._l(t.taskList,(function(s,a){return e("div",{key:a,staticClass:"tr"},[e("span",{staticClass:"name item",style:{color:1!==s.old?"red":""},attrs:{title:s.taskName}},[t._v(t._s(s.taskName))]),e("span",{staticClass:"status item",attrs:{title:s.statusText}},[t._v(t._s(s.statusText))]),e("span",{staticClass:"update-time item",attrs:{title:s.updateTimeText}},[t._v(t._s(s.updateTimeText))]),e("span",{staticClass:"project-desc item",attrs:{title:s.projectDesc}},[t._v(t._s(s.projectDesc))]),e("span",{staticClass:"handle",style:{color:1!==s.old?"#cccccc55":"#389cfa",cursor:1!==s.old?"no-drop":"pointer"},on:{click:function(e){return t.handleImportProject(s)}}},[t._v(t._s(t.$t("AI.import")))])])})),t.isQueryLoading?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],2),e("div",{directives:[{name:"show",rawName:"v-show",value:t.taskList.length,expression:"taskList.length"}],staticClass:"page-wrapper"},[e("Page",{attrs:{total:t.queryProjectList.total,"page-size":t.queryProjectList.pageSize,current:t.queryProjectList.pageNum},on:{"on-change":t.changePageProjectList}})],1)])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"base-btn2 bg-linear",on:{click:t.gotoUpload}},[t._v("\n      "+t._s(t.$t("AI.projectUpload"))+"\n    ")])])])}),[],!1,null,null,null);s.default=c.exports}}]);