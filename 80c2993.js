(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1546:function(e,t,n){e.exports={}},2862:function(e,t,n){"use strict";n(1546)},3064:function(e,t,n){"use strict";n.r(t);n(60),n(32);var l=n(84),c=(n(58),n(79),n(59),{name:"TestScreen",data:function(){return{step:0,width:0,height:0,contrast_white:["#AFAFAF","#B7B7B7","#BFBFBF","#C7C7C7","#CFCFCF","#D7D7D7","#DFDFDF","#E7E7E7","#EFEFEF","#F7F7F7","#D7D7D7","#DBDBDB","#DFDFDF","#E3E3E3","#E7E7E7","#EBEBEB","#EFEFEF","#F3F3F3","#F7F7F7","#FBFBFB","#EBEBEB","#EDEDED","#EFEFEF","#F1F1F1","#F3F3F3","#F5F5F5","#F7F7F7","#F9F9F9","#FBFBFB","#FDFDFD","#F5F5F5","#F6F6F6","#F7F7F7","#F8F8F8","#F9F9F9","#FAFAFA","#FBFBFB","#FCFCFC","#FDFDFD","#FEFEFE"],contrast_black:["#010101","#020202","#030303","#040404","#050505","#060606","#070707","#080808","#090909","#0A0A0A","#020202","#040404","#060606","#080808","#0A0A0A","#0C0C0C","#0E0E0E","#101010","#121212","#141414","#040404","#080808","#0C0C0C","#101010","#141414","#181818","#1C1C1C","#202020","#242424","#282828","#080808","#101010","#181818","#202020","#282828","#303030","#383838","#404040","#484848","#505050"],fullscreen:!1,select:"1-27",text:{"1-6":"测试屏幕坏点，请检查每个区域，注意区分灰尘","7-7":"测试屏幕亮度是否均匀","8-8":"测试屏幕是否存在漏光","9-15":"测试模拟信号的干扰水平，画面稳定的显示设备更佳","16-16":"通常用于测试CRT显示器以及投影仪的对焦水平，请检查每个图案是否都清晰可见","17-17":"通常用于测试CRT显示器的呼吸效应程度，边缘线条稳定的显示设备更佳","18-18":"请通过显示器的OSD设置菜单，使得线条横平竖直","19-19":"请检查线条是否有相同的宽度，以及线条是否平整，尤其是屏幕的边缘","20-20":"用于测试屏幕的对比度，一般的非专业显示器无法区分最后一行的色块边缘","21-21":"用于测试屏幕的对比度，一般的非专业显示器无法区分第一行的色块边缘","22-25":"用于测试显示器的色彩平滑程度，颜色过渡平滑的显示设备更佳","26-26":"用于测试屏幕的色彩饱和度，颜色过渡平滑的显示设备更佳","27-27":"测试 AMOLED 或 OLED 的屏幕老化程度，请在暗光下观察屏幕亮度是否均匀"},touchtime:(new Date).getTime(),touch:{timer:null,start:null,end:null,longClick:0}}},computed:{textData:function(){var e,t=this;return(e=[]).concat.apply(e,Object(l.a)(Object.keys(this.text).map((function(e){for(var n=t.text[e],l=e.split("-"),c=parseInt(l[0]),o=parseInt(l[1]),r=[],F=0;F<=o-c;F++)r.push(n);return r}))))}},mounted:function(){this.width=screen.width,this.height=screen.height},methods:{esc:function(){document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||(document.removeEventListener("fullscreenchange",this.exit),document.removeEventListener("webkitfullscreenchange",this.exit),document.removeEventListener("mozfullscreenchange",this.exit),document.removeEventListener("MSFullscreenChange",this.exit),this.exit())},touchstart:function(){this.$store.state.isMobile&&(this.touch.longClick=0,this.touch.timer=setTimeout(this.prev,500))},touchend:function(){clearTimeout(this.touch.timer)},start:function(){this.launchFullscreen(!0);var e=this.select.split("-")[0];this.step=parseInt(e)},next:function(){if(this.$store.state.isMobile){if((new Date).getTime()-this.touchtime<300)return this.exit(),!1;this.touchtime=(new Date).getTime()}var e=this.select.split("-")[1];this.step===parseInt(e)?this.exit():this.step+=1},prev:function(){if(this.$store.state.isMobile){if(this.touch.longClick)return!1;this.touch.longClick=1}var e=this.select.split("-")[0];this.step===parseInt(e)?this.exit():this.step-=1},exit:function(){this.step=0,this.launchFullscreen(!1)},contrast:function(i){return 19===i?this.contrast_white:this.contrast_black},launchFullscreen:function(e){if(e){var t=this.$refs["step-box"];t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullScreen(),document.addEventListener("fullscreenchange",this.esc),document.addEventListener("webkitfullscreenchange",this.esc),document.addEventListener("mozfullscreenchange",this.esc),document.addEventListener("MSFullscreenChange",this.esc)}else document.fullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}}}),o=(n(2862),n(6)),r=function(e){e.exports.head={meta:[{hid:"keywords",keywords:"屏幕测试,屏幕参数测试,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"测试屏幕是否有缺陷"}],title:"屏幕缺陷测试 - MikuTools"},e.options.toolsMeta={name:"屏幕缺陷测试",path:"/test_screen",head:{meta:[{hid:"keywords",keywords:"屏幕测试,屏幕参数测试,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"测试屏幕是否有缺陷"}],title:"屏幕缺陷测试 - MikuTools"},vip:!1,platforms:["app-android","web-pc","web-mobile"],key:"other",icon:"$tabler$screen-share-off"}},component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"test_screen"},[t("nya-container",{attrs:{main:"",title:"屏幕测试"}},[t("p",[e._v("可用于测试屏幕的部分参数和缺陷，测试项目包含：纯色，漏光，干扰，对比度，色阶，饱和度。通过一系列可在一定程度上了解显示器的质量和水平。本工具非专业屏幕检测方法，仅作为部分参考")]),t("p",[e._v("测试过程中使用 "),t("b",[e._v("鼠标右键")]),e._v(" 或 "),t("b",[e._v("长按触摸屏")]),e._v(" 可返回上一步测试，"),t("b",[e._v("ESC")]),e._v(" 键或者 "),t("b",[e._v("双击触摸屏")]),e._v(" 即可退出测试")]),t("p",[e._v("显示器分辨率："),t("b",[e._v(e._s(e.width)+"×"+e._s(e.height))])]),t("el-select",{staticClass:"mb-15",staticStyle:{width:"100%"},attrs:{"popper-append-to-body":!1,placeholder:"请选择单独测试"},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[t("el-option",{attrs:{label:"测试全部",value:"1-27"}}),t("el-option",{attrs:{label:"漏光测试",value:"1-8"}}),t("el-option",{attrs:{label:"干扰测试",value:"9-15"}}),t("el-option",{attrs:{label:"对焦测试",value:"16-16"}}),t("el-option",{attrs:{label:"呼吸效应",value:"17-17"}}),t("el-option",{attrs:{label:"网格测试",value:"18-19"}}),t("el-option",{attrs:{label:"对比度测试",value:"20-21"}}),t("el-option",{attrs:{label:"渐变测试",value:"22-25"}}),t("el-option",{attrs:{label:"饱和度",value:"26-26"}}),t("el-option",{attrs:{label:"OLED 老化测试",value:"27-27"}})],1),t("el-button",{attrs:{type:"primary"},on:{click:e.start}},[e._v("\n            开始测试\n        ")])],1),t("div",{ref:"step-box"},[e._l(27,(function(n,l){return[e.step===l+1?t("div",{key:l,staticClass:"step",class:"step-".concat(l+1),attrs:{title:"点击继续下一步"},on:{click:e.next,touchstart:e.touchstart,touchend:e.touchend,contextmenu:function(t){return t.preventDefault(),e.prev.apply(null,arguments)}}},[t("div",{staticClass:"text",domProps:{textContent:e._s(e.textData[l])}}),19===l||20===l?t("div",{staticClass:"contrast-box"},[e._l(e.contrast(l).slice(0,10),(function(i,e){return t("div",{key:"".concat(e,"_").concat(i),style:{backgroundColor:i}})})),e._l(e.contrast(l).slice(10,20),(function(i,e){return t("div",{key:"".concat(e,"_").concat(i),style:{backgroundColor:i}})})),e._l(e.contrast(l).slice(20,30),(function(i,e){return t("div",{key:"".concat(e,"_").concat(i),style:{backgroundColor:i}})})),e._l(e.contrast(l).slice(30,40),(function(i,e){return t("div",{key:"".concat(e,"_").concat(i),style:{backgroundColor:i}})}))],2):e._e()]):e._e()]}))],2)],1)}),[],!1,null,null,null);"function"==typeof r&&r(component);t.default=component.exports}}]);