(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{3074:function(t,e,n){"use strict";n.r(e);n(528),n(21);var o=n(47),l=n.n(o),r={name:"Weather",data:function(){return{location:"",data:{},loading:!1}},methods:{formatDate:function(t){return l()(t).format("YYYY年MM月DD日")},getWeather:function(){var t=this;if(this.loading)return!1;/[\u4e00-\u9fa5]|\w+/.test(this.location)?(this.loading=!0,this.data={},this.$axios.post("/weather",{location:this.location}).then((function(e){t.loading=!1,t.data=e.data.data})).catch((function(e){t.loading=!1,t.$notify.error({title:"查询失败",message:e})}))):this.$notify.error({title:"查询失败",message:"请输入正确的城市名称，支持中文和拼音"})}}},c=n(6),d=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"天气查询,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"全国天气查询"}],title:"天气查询 - MikuTools"},t.options.toolsMeta={name:"天气查询",path:"/weather",head:{meta:[{hid:"keywords",keywords:"天气查询,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"全国天气查询"}],title:"天气查询 - MikuTools"},vip:!1,platforms:["web-pc","web-mobile"],key:"other",icon:"$tabler$cloud"}},component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"weather"},[e("nya-container",{attrs:{main:"",title:"实时天气查询"}},[e("div",{staticClass:"nya-subtitle"},[t._v("\n            请输入城市名称（中文/拼音）\n        ")]),e("el-input",{attrs:{placeholder:"昆明",autofocus:"",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getWeather.apply(null,arguments)}},model:{value:t.location,callback:function(e){t.location="string"==typeof e?e.trim():e},expression:"location"}},[e("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.getWeather},slot:"append"},[t._v("\n                "+t._s(t.loading?"查询中":"开始查询")+"\n            ")])],1)],1),t.data.now?e("nya-container",{attrs:{title:"查询成功"}},[e("img",{attrs:{src:"https://s2.sencdn.com/web/icons/3d_50/".concat(t.data.now.code,".png"),alt:"天气"}}),e("ul",{staticClass:"nya-list"},[e("li",[e("b",[t._v("天气：")]),t._v(t._s(t.data.now.text))]),e("li",[e("b",[t._v("地区：")]),t._v(t._s(t.data.location.path))]),e("li",[e("b",[t._v("时区：")]),t._v(t._s(t.data.location.timezone))]),e("li",[e("b",[t._v("最后更新于：")]),t._v(t._s(t.formatDate(t.data.last_update)))])])]):t._e(),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("数据仅供参考，出门记得带伞")]),e("li",[t._v("数据来自：心知天气")])])])],1)}),[],!1,null,null,null);"function"==typeof d&&d(component);e.default=component.exports}}]);