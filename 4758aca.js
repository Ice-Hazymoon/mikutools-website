(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1373:function(e,t,n){e.exports={}},2391:function(e,t,n){"use strict";n(1373)},2991:function(e,t,n){"use strict";n.r(t);n(23);var o=n(978),l=n.n(o),m=(n(13),n(46),{name:"ConvertLength",data:function(){return{fromValue:0,fromUnit:0,toValue:0,toUnit:1,items:[{name:"千米",unit:"km",value:0,m:.001},{name:"米",unit:"m",value:0,m:1},{name:"分米",unit:"dm",value:0,m:10},{name:"厘米",unit:"cm",value:0,m:100},{name:"毫米",unit:"mm",value:0,m:1e3},{name:"微米",unit:"μm",value:0,m:1e6},{name:"纳米",unit:"nm",value:0,m:1e9},{name:"皮米",unit:"pm",value:0,m:1e12},{name:"海里",unit:"nmi",value:0,m:.000539956803455723},{name:"英里",unit:"mi",value:0,m:.000621371192237333},{name:"弗隆",unit:"fur",value:0,m:.004970969537898671},{name:"英寻",unit:"ftm",value:0,m:.5468066491688539},{name:"码",unit:"yd",value:0,m:1.0936132983377078},{name:"英尺",unit:"ft",value:0,m:3.2808398950131235},{name:"英寸",unit:"in",value:0,m:39.37007874015748},{name:"公里",unit:"gongli",value:0,m:.001},{name:"里",unit:"li",value:0,m:.002},{name:"丈",unit:"zhang",value:0,m:.3},{name:"尺",unit:"chi",value:0,m:3},{name:"寸",unit:"cun",value:0,m:30},{name:"分",unit:"fen",value:0,m:300},{name:"厘",unit:"li",value:0,m:3e3},{name:"毫",unit:"hao",value:0,m:3e4},{name:"秒差距",unit:"pc",value:0,m:32e-18},{name:"月球距离",unit:"ld",value:0,m:2.601450048e-9},{name:"天文单位",unit:"☉",value:0,m:6684587e-18},{name:"光年",unit:"AU",value:0,m:105e-18}]}},methods:{convert:function(e,t){if(!l()(parseFloat(e)))return this.clear(),!1;var n=this.items[this.fromUnit],o=this.items[this.toUnit];t?(this.fromValue=e/o.m*n.m,this.toValue=e):(this.toValue=e/n.m*o.m,this.fromValue=e)},clear:function(){this.fromValue=0,this.toValue=0,this.items.forEach((function(i){i.value=0}))}}}),r=(n(2391),n(6)),c=function(e){e.exports.head={meta:[{hid:"keywords",keywords:"千米-长度单位转换,米-长度单位转换,分米-长度单位转换,厘米-长度单位转换,毫米-长度单位转换,纳米-长度单位转换,微米-长度单位转换,皮米-长度单位转换,海里-长度单位转换,英里-长度单位转换,弗隆-长度单位转换,英寻-长度单位转换,码-长度单位转换,英尺-长度单位转换,英寸-长度单位转换,公里-长度单位转换,里-长度单位转换,丈-长度单位转换,尺-长度单位转换,寸-长度单位转换,分-长度单位转换,里-长度单位转换,毫-长度单位转换,光年-长度单位转换,秒差距-长度单位转换,天文单位-长度单位转换,月球距离-长度单位转换,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"长度单位转换"}],title:"长度单位转换 - MikuTools"},e.options.toolsMeta={name:"长度单位转换",path:"/convert_length",head:{meta:[{hid:"keywords",keywords:"千米-长度单位转换,米-长度单位转换,分米-长度单位转换,厘米-长度单位转换,毫米-长度单位转换,纳米-长度单位转换,微米-长度单位转换,皮米-长度单位转换,海里-长度单位转换,英里-长度单位转换,弗隆-长度单位转换,英寻-长度单位转换,码-长度单位转换,英尺-长度单位转换,英寸-长度单位转换,公里-长度单位转换,里-长度单位转换,丈-长度单位转换,尺-长度单位转换,寸-长度单位转换,分-长度单位转换,里-长度单位转换,毫-长度单位转换,光年-长度单位转换,秒差距-长度单位转换,天文单位-长度单位转换,月球距离-长度单位转换,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"长度单位转换"}],title:"长度单位转换 - MikuTools"},vip:!1,platforms:["app-android","web-pc","web-mobile"],key:"data-conversion",icon:"$tabler$ruler-3"}},component=Object(r.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"convert_length"},[t("nya-container",{attrs:{main:"",title:"长度单位转换"}},[t("el-input",{attrs:{type:"number",autofocus:"",value:e.fromValue},on:{input:function(t){return e.convert(t,0)}}},[t("el-select",{attrs:{slot:"prepend","popper-append-to-body":!1,placeholder:"请选择"},on:{input:function(t){return e.convert(e.fromValue,0)}},slot:"prepend",model:{value:e.fromUnit,callback:function(t){e.fromUnit=t},expression:"fromUnit"}},e._l(e.items,(function(n,o){return t("el-option",{key:o,attrs:{label:n.name,value:o}},[t("span",{staticStyle:{float:"left"}},[e._v(e._s(n.name))]),t("span",{staticStyle:{float:"right",color:"var(--color-text-placeholder)","font-size":"13px"}},[e._v(e._s(n.unit))])])})),1)],1),t("div",{staticClass:"eva eva-swap-outline"}),t("el-input",{attrs:{type:"number",value:e.toValue},on:{input:function(t){return e.convert(t,1)}}},[t("el-select",{attrs:{slot:"prepend","popper-append-to-body":!1,placeholder:"请选择"},on:{input:function(t){return e.convert(e.fromValue,0)}},slot:"prepend",model:{value:e.toUnit,callback:function(t){e.toUnit=t},expression:"toUnit"}},e._l(e.items,(function(n,o){return t("el-option",{key:o,attrs:{label:n.name,value:o}},[t("span",{staticStyle:{float:"left"}},[e._v(e._s(n.name))]),t("span",{staticStyle:{float:"right",color:"var(--color-text-placeholder)","font-size":"13px"}},[e._v(e._s(n.unit))])])})),1)],1)],1),t("nya-container",{attrs:{title:"说明"}},[t("ul",{staticClass:"nya-list"},[t("li",[e._v("如果转换数据有问题，请在首页【留言板】中进行反馈")]),t("li",[e._v("结果以实际为准，本数据仅供参考，由于转换单位不同可能会有一定误差，本工具以【米(m)】作为基准单位")])])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(component);t.default=component.exports},978:function(e,t,n){var o=n(141),l=n(99),m="[object Number]";e.exports=function(e){return"number"==typeof e||l(e)&&o(e)==m}}}]);