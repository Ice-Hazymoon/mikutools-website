(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{3017:function(t,n,e){"use strict";e.r(n);var o;e(21),e(68);o=e(2554);var l={name:"Html2pdf",data:function(){return{n:"",html:"",loading:!1}},methods:{handleChange:function(t){var n=this,e=t.target.files;if(!e.length)return!1;var o=e[0],l=new FileReader;l.addEventListener("load",(function(){n.html=l.result})),l.readAsText(o)},transfrom:function(){var t=this;if(this.loading)return!1;this.loading=!0,o().from(this.html).save().then((function(){t.loading=!1})).catch((function(n){t.loading=!1,t.$notify.error({title:"转换失败",message:n})}))}}},r=e(6),d=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"HTML转换PDF,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"将HTML转换为PDF"}],title:"HTML转PDF - MikuTools"},t.options.toolsMeta={name:"HTML转PDF",path:"/html2pdf",head:{meta:[{hid:"keywords",keywords:"HTML转换PDF,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"将HTML转换为PDF"}],title:"HTML转PDF - MikuTools"},vip:!1,platforms:["web-pc","web-mobile"],key:"other",icon:"$tabler$file-text"}},component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"html2pdf"},[n("nya-container",{attrs:{main:"",title:"HTML转PDF"}},[n("div",{staticClass:"nya-subtitle mt-0"},[t._v("\n            请选择要转换的 HTML 文件\n        ")]),n("el-input",{attrs:{type:"file",accept:"text/*",disabled:t.loading,placeholder:t.n?t.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件",clearable:""},nativeOn:{change:function(n){return t.handleChange.apply(null,arguments)}},model:{value:t.n,callback:function(n){t.n=n},expression:"n"}},[n("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.transfrom},slot:"append"},[t._v("\n                "+t._s(t.loading?"处理中":"开始转换")+"\n            ")])],1)],1)],1)}),[],!1,null,null,null);"function"==typeof d&&d(component);n.default=component.exports}}]);