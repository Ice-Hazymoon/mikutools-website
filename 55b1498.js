(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{3013:function(t,e,o){"use strict";o.r(e);o(528),o(32),o(21),o(68),o(369);var n=o(961),r={name:"FacebookVideoDownloader",data:function(){return{results:"",loading:!1,form:{url:""},regex:n.a}},computed:{handleSize:function(){return function(t){return t?t.replace(/ \(.+\)/,""):""}}},methods:{download:function(){var t=this;if(this.loading)return!1;n.a.http.test(this.form.url)?(this.loading=!0,this.results="",this.form.url=this.form.url.match(n.a.http)[0],this.$axios.post("/facebook_video_downloader",{url:this.form.url}).then((function(e){t.loading=!1,t.results=e.data.data})).catch((function(e){t.loading=!1,t.$notify.error({title:"解析失败",message:e})}))):this.$notify.error({title:"解析失败",message:"请输入正确的链接"})}}},l=o(6),c=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"Facebook 视频解析下载,怎么下载Facebook视频,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"Facebook 视频下载"}],title:"Facebook 视频下载 - MikuTools"},t.options.toolsMeta={name:"Facebook 视频下载",path:"/facebook_video_downloader",head:{meta:[{hid:"keywords",keywords:"Facebook 视频解析下载,怎么下载Facebook视频,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"Facebook 视频下载"}],title:"Facebook 视频下载 - MikuTools"},vip:!0,platforms:["app-android","web-pc","web-mobile"],key:["vip","other"],icon:"$tabler$brand-facebook"}},component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"facebook_video_downloader"},[e("nya-container",{attrs:{main:"",title:"Facebook 视频下载"}},[e("el-form",{staticClass:"nya-input-btn",attrs:{model:t.form},nativeOn:{submit:function(t){t.preventDefault()}}},[e("span",{staticClass:"nya-subtitle"},[t._v("请输入视频链接")]),e("el-form-item",{attrs:{prop:"url",rules:[{required:!0,message:"链接不能为空"},{pattern:t.regex.http,message:"链接格式不合法"}]}},[e("el-input",{attrs:{disabled:t.loading,clearable:"",autofocus:"",placeholder:"https://www.facebook.com/neneko.page/videos/407343883148739/"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.download.apply(null,arguments))}},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url","string"==typeof e?e.trim():e)},expression:"form.url"}},[e("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.download},slot:"append"},[t._v("\n                        "+t._s(t.loading?"获取中":"开始获取")+"\n                    ")])],1)],1)],1)],1),t.results?e("nya-container",{attrs:{title:"获取视频信息成功"}},[e("h2",[t._v("标题："+t._s(t.results.title))]),e("h2",[t._v("下载链接")]),t._l(t.results.formats,(function(o,n){return e("div",{key:n},[e("p",[e("span",[t._v(t._s(o.ext)+" "),o.width?e("span",[t._v("("+t._s("".concat(o.width,"x").concat(o.height))+")")]):t._e(),o.fps?e("span",[t._v(t._s(o.fps)+"fps")]):t._e(),t._v("：")]),e("app-link",{attrs:{href:o.url,target:"_blank",title:"右键另存为下载或长按保存",rel:"noopener noreferrer"}},[t._v("\n                    "+t._s(o.url)+"\n                ")])],1)])}))],2):t._e(),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("只支持解析在 Facebook 上传的视频，不支持分享的视频")]),e("li",[t._v("部分视频做了音频和视频的分离，请自行下载合并")])])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(component);e.default=component.exports},961:function(t,e,o){"use strict";e.a={domain:/^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/,http:/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/,http_with_unicode:/https?:\/\/[-A-Za-z0-9\u2E80-\u9FFF+&@#/%?=~_|!:,.;]+[-A-Za-z0-9\u2E80-\u9FFF+&@#/%=~_|]/}}}]);