(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{3041:function(t,n,e){"use strict";e.r(n);e(21),e(68),e(173),e(58);var l=e(959),r={name:"Tts",data:function(){return{n:"",results:"",loading:!1,url:null,language_type:"CHN_ENG",lan_list:{CHN_ENG:"中英混合",ENG:"英文",JAP:"日语",KOR:"韩语",FRE:"法语",SPA:"西班牙语",POR:"葡萄牙语",GER:"德语",ITA:"意大利语",RUS:"俄语"}}},computed:{resultsText:function(){return!!this.results&&this.results.map((function(t){return t.words})).join("\n")}},methods:{handleChange:function(t){var n=this,e=t.target.files;if(!e.length)return!1;var r=e[0];r.size/1024/1024>5?(this.n="",this.$notify.error({title:"识别失败",message:"请选择大小在5M以内的图片"})):(Object(l.a)(r).then((function(t){n.url=t})),this.results=null)},start:function(){var t=this;if(this.loading)return!1;this.loading=!0,this.results=null,this.$axios.post("/ocr",{url:this.url.replace(/data:.+?,/,""),language_type:this.language_type}).then((function(n){t.loading=!1,t.results=n.data.data})).catch((function(n){t.$notify.error({title:"识别失败",message:n}),t.loading=!1}))}}},o=e(6),c=function(t){t.exports.head={meta:[],title:"图片提取文字 - MikuTools"},t.options.toolsMeta={name:"图片提取文字",path:"/ocr",vip:!1,platforms:["app-android","web-pc","web-mobile"],key:"image",icon:"$tabler$text-recognition",head:{meta:[],title:"图片提取文字 - MikuTools"}}},component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"ocr"},[n("nya-container",{attrs:{main:"",title:"文本识别"}},[n("div",{staticClass:"mb-15"},[n("div",{staticClass:"nya-subtitle"},[t._v("\n                识别图片\n            ")]),n("el-input",{attrs:{type:"file",accept:"image/*",disabled:t.loading,placeholder:t.n?t.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件"},nativeOn:{change:function(n){return t.handleChange.apply(null,arguments)}},model:{value:t.n,callback:function(n){t.n=n},expression:"n"}})],1),n("div",{staticClass:"mb-15"},[n("div",{staticClass:"nya-subtitle"},[t._v("\n                识别语种选择\n            ")]),n("el-select",{staticClass:"full-width",attrs:{"popper-append-to-body":!1,disabled:t.loading},model:{value:t.language_type,callback:function(n){t.language_type=n},expression:"language_type"}},t._l(t.lan_list,(function(t,e){return n("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1),n("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.start}},[t._v("\n            "+t._s(t.loading?"识别中":"开始识别")+"\n        ")])],1),t.resultsText?n("nya-container",{attrs:{title:"识别成功"}},[n("nya-copy",{attrs:{copy:t.resultsText}},[n("span",{domProps:{textContent:t._s(t.resultsText)}})])],1):t._e(),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("不支持内容过多的文本识别")])])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(component);n.default=component.exports},959:function(t,n,e){"use strict";e(13);n.a=function(t){return new Promise((function(n,e){var l=new FileReader;l.readAsDataURL(t),l.onload=function(){return n(l.result)},l.onerror=function(t){return e(t)}}))}}}]);