(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1488:function(t,e,n){t.exports={}},2606:function(t,e,n){"use strict";n(1488)},3037:function(t,e,n){"use strict";n.r(e);n(23),n(13),n(86),n(58),n(32);var o={name:"News",data:function(){return{news:"",loading:!0,tabs:[],currentTab:0}},mounted:function(){this.getNews()},methods:{getNews:function(){var t=this;this.$axios.post("/news").then((function(e){t.tabs=e.data.data.map((function(i){return{value:i.name,title:'<img class="news-icon" src="'.concat(i.icon,'"> ').concat(i.name)}})),t.news=e.data.data,t.loading=!1})).catch((function(e){t.$notify.error({title:"获取数据失败",message:e})}))},handleTabsClick:function(t){this.currentTab=t}}},r=(n(2606),n(6)),l=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"新闻聚合,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"快速浏览全网新闻"}],title:"新闻聚合 - MikuTools"},t.options.toolsMeta={name:"新闻聚合",path:"/news",head:{meta:[{hid:"keywords",keywords:"新闻聚合,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"快速浏览全网新闻"}],title:"新闻聚合 - MikuTools"},hot:"hot",vip:!1,platforms:["app-android","web-pc","web-mobile"],key:"other",icon:"$tabler$news"}},component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"news"},[e("nya-container",{attrs:{main:"",title:"新闻聚合",loading:t.loading}},[e("el-select",{staticClass:"full-width mb-15",attrs:{placeholder:"请选择"},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.news,(function(n,o){return e("el-option",{key:o,attrs:{label:n.name,value:o.toString()}},[e("img",{staticStyle:{width:"15px",height:"15px","vertical-align":"middle","margin-right":"5px"},attrs:{src:n.icon}}),e("span",[t._v(t._s(n.name))])])})),1),e("el-tabs",{attrs:{type:"card"},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.news,(function(n,o){return e("el-tab-pane",{key:o,attrs:{label:n.name}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("img",{staticClass:"news-icon",attrs:{src:n.icon}}),t._v(t._s(n.name))]),t._l(n.list,(function(i,n){return e("div",{key:n,staticClass:"news-item"},[e("p",[e("a",{attrs:{title:i.title,href:i.url,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(i.title))])]),i.desc?e("p",{staticClass:"desc"},[t._v("\n                        "+t._s(i.desc)+"\n                    ")]):t._e()])}))],2)})),1)],1)],1)}),[],!1,null,null,null);"function"==typeof l&&l(component);e.default=component.exports}}]);