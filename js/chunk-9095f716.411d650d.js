(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9095f716"],{"0b79":function(t,a,e){},"31fc":function(t,a,e){"use strict";var n=e("6eac"),s=e.n(n);s.a},3764:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t.spinShow?e("Spin",{attrs:{size:"large"}}):t._e(),e("div",{staticClass:"main"},[t.catalogueData?e("div",{staticClass:"catalog-title"},[t._v(t._s(t.catalogueData.name))]):e("div",{staticClass:"catalog-title",attrs:{cnrk:"暂无目录"}},[t._v(t._s(t.$t("Footer.noCatalogue")))]),t.catalogueData?e("div",{staticClass:"catalog-title-subsidiary"},[t._v("\n      "+t._s(t.catalogueData.content||"")+"\n    ")]):t._e(),t.catalogueData?e("div",{staticClass:"catalog-content"},t._l(t.catalogueData.list,function(a,n){return e("ul",{key:n,class:a.show?"act-name":void 0,on:{click:function(a){return t.showTitle(n)}}},[e("li",{staticClass:"item-title",attrs:{title:a.name}},[e("Icon",{attrs:{type:"md-arrow-dropdown"}}),t._v(t._s(a.name)+"\n        ")],1),t._l(a.list,function(n,s){return e("li",{key:s,staticClass:"item-content",attrs:{title:n.name},on:{click:function(e){return e.stopPropagation(),t.showTxtContent(a,n)}}},[e("span",[t._v(t._s(n.name))])])})],2)}),0):t._e()])],1)},s=[],i=(e("7f7f"),e("ac6a"),e("96cf"),e("3b8d")),o=e("4ec3"),c={name:"uplog",data:function(){return{catalogueData:"",actIndex:-1,spinShow:!0,showCatalogue:!1}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var a,e,n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post(o["a"].updataLogDocuments);case 2:a=t.sent,200===a.data.code?(a.data.payload.list.length>0&&(e=a.data.payload.list,n=new Array,s=new Object,e.forEach(function(t){t.show=!0,n.push(t)}),s=a.data.payload,s.list=n,this.catalogueData=s,this.showCatalogue=!0),this.spinShow=!1):this.$Message.error(a.data.message);case 4:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),methods:{showTitle:function(t){this.catalogueData.list[t].show=!this.catalogueData.list[t].show},showTxtContent:function(t,a){this.setBreadArr(t,a),this.$router.push("/uplog-detail/"+a.id)},setBreadArr:function(t,a){var e=[];e.push({name:this.catalogueData.name,path:"/uplog"}),e.push({name:t.name,path:"/uplog-detail/"+t.list[0].id}),e.push({name:a.name,path:"/uplog-detail/"+a.id}),this.$store.commit("setBreadArr",e)}}},r=c,l=(e("31fc"),e("e907"),e("2877")),u=Object(l["a"])(r,n,s,!1,null,"7d45c7c1",null);a["default"]=u.exports},"6eac":function(t,a,e){},e907:function(t,a,e){"use strict";var n=e("0b79"),s=e.n(n);s.a}}]);