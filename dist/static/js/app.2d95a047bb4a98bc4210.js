webpackJsonp([1],{"+yx6":function(t,a,n){"use strict";function e(t){n("Kc6j")}var r=n("0+mr"),s=n("d7ih"),o=n("VU/8"),i=e,c=o(r.a,s.a,!1,i,null,null);a.a=c.exports},"0+mr":function(t,a,n){"use strict";var e=n("DrBp");a.a={name:"top",components:{Workingspace:e.a}}},"0IZH":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"workingSpace"},[n("b-card",{attrs:{"no-body":""}},[n("b-tabs",{attrs:{card:""}},[t._l(t.tabs,function(a){return n("b-tab",{key:a.id,attrs:{title:""+a.title}},[n("b-row",[n("b-col",{attrs:{md:"1"}},[n("label",{attrs:{for:"title-"+a.id}},[t._v("タイトル:")])]),t._v(" "),n("b-col",{attrs:{md:"4"}},[n("b-input",{attrs:{id:"title-"+a.id},model:{value:a.title,callback:function(n){t.$set(a,"title",n)},expression:"tab.title"}})],1),t._v(" "),n("b-col",{attrs:{md:"1"}},[n("label",{attrs:{for:"target-"+a.id}},[t._v("目標数:")])]),t._v(" "),n("b-col",{attrs:{md:"1"}},[n("b-input",{attrs:{id:"target-"+a.id,type:"number"},model:{value:a.target,callback:function(n){t.$set(a,"target",n)},expression:"tab.target"}})],1),t._v(" "),n("b-col",{attrs:{md:"2"}},[t._v("\n            現在の文字数："+t._s(t.countPureTextLength(a.content))+"\n          ")]),t._v(" "),n("b-col",{attrs:{md:"2"}},[a.target?n("b-progress",{attrs:{max:1}},[n("b-progress-bar",{attrs:{value:t.countPureTextLength(a.content)/a.target,"show-progress":"",animated:""}},[t._v("\n                "+t._s((100*t.countPureTextLength(a.content)/a.target).toFixed())+"%\n              ")])],1):t._e()],1),t._v(" "),n("b-col",{attrs:{md:"1"}},[n("b-btn",{staticClass:"float-right",attrs:{size:"sm",variant:"danger"},on:{click:function(){return t.closeTab(a.id)}}},[t._v("\n              ノートを削除\n            ")])],1)],1),t._v(" "),n("br"),t._v(" "),n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-form-textarea",{attrs:{placeholder:"何か書きましょう",rows:30,"max-rows":40},model:{value:a.content,callback:function(n){t.$set(a,"content",n)},expression:"tab.content"}})],1)],1)],1)}),t._v(" "),n("b-nav-item",{attrs:{slot:"tabs",href:"#"},on:{click:function(a){a.preventDefault(),t.newTab(a)}},slot:"tabs"},[t._v("\n        +\n      ")]),t._v(" "),n("b-nav-item",{staticClass:"danger",attrs:{slot:"tabs",href:"#"},slot:"tabs"},[n("b-btn",{attrs:{size:"sm",variant:"danger"},on:{click:function(){return t.closeAllTabs()}}},[t._v("\n          全てのノートを削除する\n        ")])],1),t._v(" "),n("div",{staticClass:"text-center text-muted",attrs:{slot:"empty"},slot:"empty"},[t._v("\n        ノートがありません\n        "),n("br"),t._v(" + ボタンから新しいノートを作成してください．\n      ")])],2)],1)],1)},r=[],s={render:e,staticRenderFns:r};a.a=s},"1/oy":function(t,a){},"8kb5":function(t,a,n){"use strict";a.a={name:"appfooter",data:function(){return{copy:""+this.$config.made_by,year:(new Date).getFullYear()}}}},"9M+g":function(t,a){},DrBp:function(t,a,n){"use strict";function e(t){n("rpw0")}var r=n("tMz+"),s=n("0IZH"),o=n("VU/8"),i=e,c=o(r.a,s.a,!1,i,"data-v-540263d0",null);a.a=c.exports},Drc2:function(t,a,n){"use strict";a.a={name:"navbar",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},Id91:function(t,a){},IhpD:function(t,a){},Kc6j:function(t,a){},M93x:function(t,a,n){"use strict";function e(t){n("hamq")}var r=n("xJD8"),s=n("tmDV"),o=n("VU/8"),i=e,c=o(r.a,s.a,!1,i,null,null);a.a=c.exports},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("7+uW"),r=n("/ocq"),s=n("e6fC"),o=n("yJzH"),i=n("M93x"),c=n("d2gY"),u=n("eqvY"),l=n("qb6w"),b=(n.n(l),n("9M+g"));n.n(b);e.a.use(s.a),e.a.use(o.a,"v-icon"),e.a.config.productionTip=!1,e.a.prototype.$config=c.a,e.a.use(r.a);var v=new r.a({routes:u.a});new e.a({router:v,render:function(t){return t(i.a)}}).$mount("#app")},"OC/o":function(t,a,n){"use strict";function e(t){n("IhpD")}var r=n("8kb5"),s=n("n5aw"),o=n("VU/8"),i=e,c=o(r.a,s.a,!1,i,"data-v-14cfd6f3",null);a.a=c.exports},QQY5:function(t,a,n){"use strict";function e(t){n("x02q")}var r=n("kRB+"),s=n("pdbQ"),o=n("VU/8"),i=e,c=o(r.a,s.a,!1,i,null,null);a.a=c.exports},d2gY:function(t,a,n){"use strict";a.a={service_name:"かだいやるぞうZ",made_by:"yas-nyan",github:"https://github.com/yas-nyan/kadaiyaruzo"}},d7ih:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement;return(t._self._c||a)("workingspace")},r=[],s={render:e,staticRenderFns:r};a.a=s},eqvY:function(t,a,n){"use strict";var e=n("QQY5"),r=n("+yx6");a.a=[{path:"/",name:"top",component:r.a},{path:"/about",name:"about",component:e.a}]},hamq:function(t,a){},"kRB+":function(t,a,n){"use strict";a.a={name:"about",components:{},data:function(){return{hoge:"hogehoge"}}}},ka9l:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info","navbar-expand-lg":""}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),n("b-navbar-brand",{attrs:{to:"/"}},[t._v(t._s(this.$config.service_name))]),t._v(" "),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/about"}},[t._v("about")])],1),t._v(" "),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{href:this.$config.github}},[t._v("Github "),n("v-icon",{staticClass:"github",attrs:{name:"github"}})],1)],1)],1)],1)},r=[],s={render:e,staticRenderFns:r};a.a=s},lfLh:function(t,a,n){"use strict";function e(t){n("scYm")}var r=n("Drc2"),s=n("ka9l"),o=n("VU/8"),i=e,c=o(r.a,s.a,!1,i,"data-v-45f638f8",null);a.a=c.exports},n5aw:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer__text container"},[n("a",{attrs:{href:this.$config.github}},[n("v-icon",{staticClass:"github",attrs:{name:"github"}})],1),t._v(" "),n("p"),t._v(" "),n("p",[t._v("© "+t._s(t.year)+" "+t._s(t.copy)+" All Rights Reserved.")])])])},r=[],s={render:e,staticRenderFns:r};a.a=s},pdbQ:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("b-jumbotron",{staticClass:"about",attrs:{"bg-variant":"light",fluid:""}},[n("template",{slot:"header"},[t._v("\n        かだいやるぞう\n    ")]),t._v(" "),n("template",{slot:"lead"},[t._v("\n        シンプルなマルチノート文字数カウンター\n    ")]),t._v(" "),n("hr",{staticClass:"my-4"}),t._v(" "),n("p",{staticClass:"text-md-left"},[t._v("\n        同時に多数のタブを開きながら編集可能なWEBエディターです。\n    ")]),t._v(" "),n("p",{staticClass:"text-sm-left"},[t._v("\n        作業中のデータはブラウザに自動保存されます。\n        目標文字数を設定することでグラフィカルに進捗状況を表示します。\n    ")]),t._v(" "),n("p",{staticClass:"text-sm-left"},[n("small",{staticClass:"text-danger"},[t._v("商用目的ではありません。アプリケーションの不具合による責任は負いかねます。")])]),t._v(" "),n("p",{staticClass:"text-sm-left"},[t._v("\n        クリエイティブ・コモンズです。ご意見ご要望はgithubからどうぞ。\n        "),n("a",{staticClass:"btn btn-info github-link",attrs:{href:this.$config.github}},[t._v("Github "),n("v-icon",{staticClass:"github",attrs:{name:"github"}})],1)])],2)},r=[],s={render:e,staticRenderFns:r};a.a=s},qb6w:function(t,a){},rpw0:function(t,a){},scYm:function(t,a){},"tMz+":function(t,a,n){"use strict";var e=n("mvHQ"),r=n.n(e);a.a={name:"Workingspace",data:function(){return{tabs:[],tabCounter:0}},created:function(){try{var t=localStorage.data,a=parseInt(localStorage.tabCounter),n=JSON.parse(t);if(null===n||NaN==a)throw"null error";this.tabs=n,this.tabCounter=a}catch(t){}},watch:{tabs:{handler:function(t,a){return localStorage.setItem("data",r()(t)),t},deep:!0},tabCounter:function(t,a){return localStorage.setItem("tabCounter",t),t}},methods:{closeTab:function(t){if(confirm("このノートを削除します。本当によろしいですか？"))for(var a in this.tabs)this.tabs[a].id===t&&this.tabs.splice(a,1)},newTab:function(){this.tabs.push({id:this.tabCounter++,title:"新しいノート",content:"",updated_at:(new Date).toLocaleString(),target:0})},closeAllTabs:function(){confirm("本当によろしいですか？")&&(this.tabs=[],this.tabCounter=0)},countPureTextLength:function(t){return t.replace(/\r?\n?\s/g,"").length}}}},tmDV:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("navbar"),t._v(" "),n("router-view"),t._v(" "),n("appfooter")],1)},r=[],s={render:e,staticRenderFns:r};a.a=s},x02q:function(t,a){},xJD8:function(t,a,n){"use strict";var e=n("lfLh"),r=n("OC/o");a.a={name:"app",components:{Navbar:e.a,Appfooter:r.a}}},zj2Q:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.2d95a047bb4a98bc4210.js.map