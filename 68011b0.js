(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{3078:function(t,e,n){"use strict";n.r(e);var o=n(2878),l={name:"Xml2json",data:function(){return{content:"",results:"",type:"xml2j"}},methods:{transfrom:function(){this.results="";try{if("j2xml"===this.type){var t=new o.XMLBuilder;this.results=t.build(JSON.parse(this.content))}else{var e=new o.XMLParser;this.results=JSON.stringify(e.parse(this.content))}}catch(t){this.$notify.error({title:"转换失败",message:t})}}}},r=n(6),c=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"XML转JSON,JSON转XML,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"XML 和 JSON 互转"}],title:"XML转JSON - MikuTools"},t.options.toolsMeta={name:"XML转JSON",path:"/xml2json",head:{meta:[{hid:"keywords",keywords:"XML转JSON,JSON转XML,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"XML 和 JSON 互转"}],title:"XML转JSON - MikuTools"},vip:!1,platforms:["web-pc","web-mobile"],key:"development",icon:"$tabler$code"}},component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"xml2json"},[e("nya-container",{attrs:{main:"",title:"XML 转 JSON"}},[e("div",{staticClass:"nya-subtitle"},[t._v("\n            待处理的内容\n        ")]),e("el-input",{staticClass:"mb-15",attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入要处理的内容",autofocus:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),e("div",{staticClass:"nya-subtitle"},[t._v("\n            选择转换方式\n        ")]),e("div",{staticClass:"mb-15"},[e("el-switch",{attrs:{"inactive-color":"var(--theme-danger)","active-value":"xml2j","inactive-value":"j2xml","active-text":"XML 转 JSON","inactive-text":"JSON 转 XML"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),e("el-button",{attrs:{type:"primary"},on:{click:t.transfrom}},[t._v("\n            转换\n        ")])],1),t.results?e("nya-container",{attrs:{title:"获取成功"}},[e("nya-copy",{attrs:{copy:t.results}},[e("div",{domProps:{textContent:t._s(t.results)}})])],1):t._e()],1)}),[],!1,null,null,null);"function"==typeof c&&c(component);e.default=component.exports}}]);