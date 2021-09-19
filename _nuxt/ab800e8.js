(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{451:function(e,t,r){"use strict";r.r(t);var o=r(10),c=(r(67),r(14),r(34),r(135),r(170),r(27),r(98)),n=r.n(c),l={data:function(){return{search:"",filteredToDos:[],toggle_exclusive:0,user:"",userIds:[1,2,3,4,5,6,7,8,9,10],userId:1}},computed:{filteredToDosSearch:function(){var e=this;return this.filteredToDos.filter((function(t){return t.title.toLowerCase().match(e.search.toLowerCase())}))}},mounted:function(){this.getTodosFromApi(),null===this.$fire.auth.currentUser&&this.$router.push("/")},methods:{getTodosFromApi:function(){var e=arguments,t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.length>0&&void 0!==e[0]?e[0]:null,c="".concat("https://jsonplaceholder.typicode.com/","todos?userId=").concat(t.userId),r.next=4,n.a.get(null!==o?"".concat(c,"&completed=").concat(o):c).then((function(e){var r=[];for(var o in e.data)r.push(e.data[o]),t.filteredToDos=r})).catch((function(e){console.error(e)}));case 4:case"end":return r.stop()}}),r)})))()}}},d=l,v=r(85),h=r(104),m=r.n(h),f=r(354),_=r(453),x=r(380),T=r(357),C=r(445),w=r(381),I=r(342),k=r(446),V=r(449),D=r(352),y=r(439),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",[r("v-col",{staticClass:"mx-auto",attrs:{cols:"12",sm:"8",md:"6"}},[r("h1",{staticClass:"my-5 text-center"},[e._v("Welcome "+e._s(e.user?e.user.email:"")+" to your Dashboard")]),e._v(" "),r("div",{staticClass:"d-flex align-center"},[r("v-text-field",{staticClass:"pa-5 text-truncate",attrs:{placeholder:"Search Todo"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[e._v("\n          Search by content\n        ")]),e._v(" "),r("v-select",{attrs:{items:e.userIds,label:"Select a todo by USERID",dense:""},on:{change:function(t){return e.getTodosFromApi()}},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}})],1),e._v(" "),r("v-btn-toggle",{staticClass:"d-flex justify-center",attrs:{group:"",tile:""},model:{value:e.toggle_exclusive,callback:function(t){e.toggle_exclusive=t},expression:"toggle_exclusive"}},[r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.getTodosFromApi()}}},[e._v("All")]),e._v(" "),r("v-btn",{attrs:{text:"",color:"success"},on:{click:function(t){return e.getTodosFromApi(!0)}}},[e._v("Completed")]),e._v(" "),r("v-btn",{attrs:{text:"",color:"error"},on:{click:function(t){return e.getTodosFromApi(!1)}}},[e._v("Not Completed")])],1)],1)],1),e._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},e._l(e.filteredToDosSearch,(function(t){return r("v-col",{key:t.id,attrs:{cols:"12",sm:"6",md:"4"}},[r("v-card",{attrs:{height:"8rem"}},[r("v-card-title",{attrs:{height:"8rem"}},[e._v("Task ID: "+e._s(t.id)+" - User ID: "+e._s(e.userId)+"\n        "),r("v-spacer"),e._v(" "),r("v-icon",{attrs:{color:t.completed?"green":"error"}},[e._v(e._s(t.completed?"mdi-check-circle":"mdi-close-circle"))])],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{staticClass:"pa-3"},[e._v("\n        "+e._s(t.title)+"\n      ")])],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:f.a,VBtnToggle:_.a,VCard:x.a,VCardText:T.c,VCardTitle:T.d,VCol:C.a,VDivider:w.a,VIcon:I.a,VRow:k.a,VSelect:V.a,VSpacer:D.a,VTextField:y.a})}}]);