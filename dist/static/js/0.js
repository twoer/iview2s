webpackJsonp([0],{"4awt":function(t,e){},EYvE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("xe4K"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var s=a("lEBt");var u=function(t){a("4awt")},c=a("vSla")(i.a,s.a,!1,u,"data-v-1f4f04a4",null);e.default=c.exports},HAGv:function(t,e,a){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[e("Row",[e("Col",{attrs:{span:"4"}},[e("Menu",{attrs:{"active-name":this.activeName},on:{"on-select":this.toLink}},[e("MenuItem",{attrs:{name:"page"}},[this._v("\n          Page 分页\n        ")])],1)],1),this._v(" "),e("Col",{staticClass:"main",attrs:{span:"20"}},[e("router-view")],1)],1)],1)},staticRenderFns:[]};e.a=n},HxAo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("u5a+"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var s=a("HAGv");var u=function(t){a("U+D8")},c=a("vSla")(i.a,s.a,!1,u,"data-v-5b563377",null);e.default=c.exports},"U+D8":function(t,e){},lEBt:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Alert",[a("p",[t._v("1. fix current page 不在第一页时，page size change 时，会同时 emit change / page-size-change 的问题，现在统一执行 emit change。")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("2. 之前 page-size 不支持 sync ，现在已经支持")])]),t._v(" "),a("xpage",{attrs:{current:t.searchData.page,"page-size":t.searchData.pageNum,total:t.listData.total},on:{"update:current":function(e){t.$set(t.searchData,"page",e)},"update:pageSize":function(e){t.$set(t.searchData,"pageNum",e)},"on-change":t.loadData}})],1)},staticRenderFns:[]};e.a=n},"u5a+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"index",data:function(){return{activeName:""}},methods:{toLink:function(t){this.activeName=t,this.$router.push({path:t})}}}},xe4K:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{searchData:{page:1,pageNum:10},listData:{total:1e3}}},methods:{loadData:function(){var t=this;this.$Message.loading({content:"正在加载数据...",duration:0}),setTimeout(function(){t.$Message.destroy()},1e3)}}}}});