(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1048:function(t,e,o){var n=o(378),l=o(1049);t.exports=function(t,e){return t&&t.length?l(t,n(e,2)):[]}},1049:function(t,e,o){var n=o(558),l=o(1050),r=o(1051),d=o(559),c=o(1052),v=o(531),m=200;t.exports=function(t,e,o){var h=-1,f=l,_=t.length,y=!0,w=[],D=w;if(o)y=!1,f=r;else if(_>=m){var $=e?null:c(t);if($)return v($);y=!1,f=d,D=new n}else D=e?[]:w;t:for(;++h<_;){var C=t[h],x=e?e(C):C;if(C=o||0!==C?C:0,y&&x==x){for(var M=D.length;M--;)if(D[M]===x)continue t;e&&D.push(x),w.push(C)}else f(D,x,o)||(D!==w&&D.push(x),w.push(C))}return w}},1050:function(t,e,o){var n=o(561);t.exports=function(t,e){return!!(null==t?0:t.length)&&n(t,e,0)>-1}},1051:function(t,e){t.exports=function(t,e,o){for(var n=-1,l=null==t?0:t.length;++n<l;)if(o(e,t[n]))return!0;return!1}},1052:function(t,e,o){var n=o(560),l=o(1053),r=o(531),d=n&&1/r(new n([,-0]))[1]==1/0?function(t){return new n(t)}:l;t.exports=d},1053:function(t,e){t.exports=function(){}},1198:function(t,e,o){t.exports=function(){"use strict";return function(t,e,o){t=t||{};var n=e.prototype,l={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(t,e,o,l){return n.fromToBase(t,e,o,l)}o.en.relativeTime=l,n.fromToBase=function(e,n,i,r,u){for(var d,a,s,c=i.$locale().relativeTime||l,v=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=v.length,h=0;h<m;h+=1){var f=v[h];f.d&&(d=r?o(e).diff(i,f.d,!0):i.diff(e,f.d,!0));var p=(t.rounding||Math.round)(Math.abs(d));if(s=d>0,p<=f.r||!f.r){p<=1&&h>0&&(f=v[h-1]);var _=c[f.l];u&&(p=u(""+p)),a="string"==typeof _?_.replace("%d",p):_(p,n,f.l,s);break}}if(n)return a;var y=s?c.future:c.past;return"function"==typeof y?y(a):y.replace("%s",a)},n.to=function(t,e){return i(t,e,this,!0)},n.from=function(t,e){return i(t,e,this)};var r=function(t){return t.$u?o.utc():o()};n.toNow=function(t){return this.to(r(this),t)},n.fromNow=function(t){return this.from(r(this),t)}}}()},1199:function(t,e,o){t.exports=function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=e(t),n={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var o=100*t+e;return o<600?"凌晨":o<900?"早上":o<1100?"上午":o<1300?"中午":o<1800?"下午":"晚上"}};return o.default.locale(n,null,!0),n}(o(47))},1484:function(t,e,o){t.exports={}},2602:function(t,e,o){"use strict";o(1484)},3033:function(t,e,o){"use strict";o.r(e);o(528);var n,l=o(1048),r=o.n(l),d=(o(13),o(46),o(32),o(58),o(23),o(86),o(21),o(68),o(47)),c=o.n(d),v=o(1198),m=o.n(v),h=o(1012),f=(o(1199),o(216)),_=o(1481),y=o.n(_);c.a.locale("zh-cn"),c.a.extend(m.a),n=o(1482);var w={name:"MessageBoard",data:function(){return{data:null,msnry:null,dialog:{show:!1,type:"问题反馈",content:"",mail:"",loading:!1,tools:"",private:!1,view:!1},viewData:{show:!1,tools:"",date:"",status:"",type:"",content:"",reply:"",id:"",vuex:"",ua:"",localStorage:"",replyData:{mail:"",content:""},md5:""},loading:!1}},computed:{toolsList:function(){var t=[];return this.$store.state.tools.forEach((function(e){t=t.concat(e.list)})),r()(t,"path").map((function(t){return t.name}))},verifyMail:function(){return Object(f.MD5)(this.viewData.replyData.mail.trim()).toString()===this.viewData.md5}},mounted:function(){this.getData(),this.$route.query.id&&Object(h.isMongoId)(this.$route.query.id)&&this.viewById(this.$route.query.id)},methods:{handleUA:function(t){var e=new y.a;return e.setUA(t),JSON.stringify(e.getResult())},openAddMessageDialog:function(){this.dialog.mail=this.$store.state.user.meta.mail||"",this.dialog.show=!0},getData:function(){var t=this;this.loading=!0,this.data=null,this.$axios.get("/message_board/all",{params:{t:(new Date).getTime()}}).then((function(e){t.data=e.data.data,t.loading=!1,t.layout()})).catch((function(e){t.loading=!1,t.$notify.error({title:"获取数据失败",message:e})}))},layout:function(){var t=this;this.$store.state.isMobile||this.$nextTick((function(){t.msnry=new n(t.$refs["message-box"],{percentPosition:!0,itemSelector:".message-card"})}))},formatDate:function(t){return c()().from(c()(t))},formatDate2:function(t){return c()(t).format("YYYY-MM-DD HH:mm:ss")},add:function(){var t=this;if(!Object(h.isEmail)(this.dialog.mail))return this.$notify.error({title:"提交失败",message:"请输入正确的邮箱联系方式"});if(this.dialog.content<=15)return this.$notify.error({title:"提交失败",message:"请输入留言信息，且不少于15个字"});this.dialog.loading=!0;var e=JSON.parse(JSON.stringify(this.$store.state));delete e.env,delete e.tools,this.$db.read(),this.$axios.post("/message_board",{type:this.dialog.type,content:this.dialog.content,mail:this.dialog.mail,tools:this.dialog.tools,private:this.dialog.private,ua:navigator.userAgent,vuex:JSON.stringify(e),localStorage:JSON.stringify(this.$db.data),version:this.$store.state.version}).then((function(){t.dialog.loading=!1,t.$notify.success({title:"提交留言成功",message:"审核成功后将会显示在页面上"}),t.dialog.show=!1,t.getData(!0)})).catch((function(e){t.dialog.loading=!1,t.$notify.error({title:"提交失败",message:e})}))},view:function(t){this.viewData.show=!0,this.viewData.date=t.date,this.viewData.version=t.version,this.viewData.content=t.content,this.viewData.tools=t.tools,this.viewData.type=t.type,this.viewData.status=t.status,this.viewData.id=t.id,this.viewData.vuex=t.vuex,this.viewData.localStorage=t.localStorage,this.viewData.ua=t.ua,this.viewData.replyData.mail=t.mail||this.$store.state.user.meta.mail||this.$route.query.remail||"",this.viewData.replyData.content="",this.viewData.reply=t.reply,this.viewData.md5=t.md5,this.viewData.mail=t.mail},viewById:function(t){var e=this;this.$store.commit("loadingComponent",!0),this.$axios.post("/message_board/view",{id:t}).then((function(t){var data=t.data.data;e.viewData.show=!0,e.viewData.date=data.date,e.viewData.version=data.version,e.viewData.content=data.content,e.viewData.tools=data.tools,e.viewData.type=data.type,e.viewData.status=data.status,e.viewData.id=data.id,e.viewData.replyData.mail=data.mail||e.$route.query.remail||e.$store.state.user.meta.mail||"",e.viewData.replyData.content="",e.viewData.reply=data.reply,e.viewData.md5=data.md5,e.viewData.mail=data.mail,e.$store.commit("loadingComponent",!1)})).catch((function(t){e.$notify.error({title:"获取数据失败",message:t}),e.$router.replace("/message_board",{id:void 0,remail:void 0}),e.$store.commit("loadingComponent",!1)}))},processed:function(t){var e=this;this.$store.commit("loadingComponent",!0),this.$axios.post("/message_board/processed",{id:t}).then((function(){e.viewData.show=!1,e.getData(),e.$store.commit("loadingComponent",!1)})).catch((function(t){e.$notify.error({title:"操作失败",message:t}),e.$store.commit("loadingComponent",!1)}))},remove:function(t){var e=this;this.$store.commit("loadingComponent",!0),this.$axios.post("/message_board/remove",{id:t}).then((function(){e.viewData.show=!1,e.getData(),e.$store.commit("loadingComponent",!1)})).catch((function(t){e.$notify.error({title:"操作失败",message:t}),e.$store.commit("loadingComponent",!1)}))},reply:function(){var t=this;return Object(h.isEmail)(this.viewData.replyData.mail)?this.verifyMail?this.viewData.replyData.content?(this.$store.commit("loadingComponent",!0),void this.$axios.post("/message_board/reply",{id:this.viewData.id,mail:this.viewData.replyData.mail,content:this.viewData.replyData.content}).then((function(){return t.getData(),t.$axios.post("/message_board/view",{id:t.viewData.id})})).then((function(e){t.viewData.reply=e.data.data.reply,t.$store.commit("loadingComponent",!1),t.$store.state.env.admin===t.$store.state.user.meta.mail?t.$notify.success({title:"提交回复成功"}):t.$notify.success({title:"提交回复成功",message:"站长看到后会及时回复"})})).catch((function(e){t.$notify.error({title:"回复失败",message:e}),t.$store.commit("loadingComponent",!1)}))):this.$notify.error({title:"提交失败",message:"请输入回复的内容"}):this.$notify.error({title:"提交失败",message:"当前邮箱与提交留言时的邮箱不一致"}):this.$notify.error({title:"提交失败",message:"请输入正确的邮箱"})}}},D=(o(2602),o(6)),$=function(t){t.exports.head={meta:[{hid:"description",description:"有问题就来留言吧"}],title:"留言反馈 - MikuTools"},t.options.toolsMeta={name:"留言反馈",path:"/message_board",head:{meta:[{hid:"description",description:"有问题就来留言吧"}],title:"留言反馈 - MikuTools"},vip:!1,platforms:["app-android","web-pc","web-mobile"],key:"mikutools",icon:"$tabler$message-circle"}},component=Object(D.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"message_board"},[e("el-dialog",{attrs:{title:"查看留言",visible:t.viewData.show,fullscreen:t.$store.state.isMobile,top:"15vh",width:"600px"},on:{"update:visible":function(e){return t.$set(t.viewData,"show",e)}}},[e("div",{staticClass:"message_board-view-box"},[e("div",{staticClass:"mb-5"},[e("b",[t._v("留言ID：")]),e("span",[t._v(t._s(t.viewData.id))])]),t.viewData.version?e("div",{staticClass:"mb-5"},[e("b",[t._v("工具版本：")]),e("span",[t._v(t._s(t.viewData.version))])]):t._e(),t.viewData.mail?e("div",{staticClass:"mb-5"},[e("b",[t._v("邮箱：")]),e("span",[t._v(t._s(t.viewData.mail))])]):t._e(),e("div",{staticClass:"mb-5"},[e("b",[t._v("留言类型：")]),e("span",[t._v(t._s(t.viewData.type))])]),e("div",{staticClass:"mb-5"},[t.viewData.private?e("b",[t._v("私密留言：")]):t._e(),e("span",[t._v(t._s(t.viewData.private))])]),e("div",{staticClass:"mb-5"},[e("b",[t._v("日期：")]),e("span",[t._v(t._s(t.formatDate2(t.viewData.date)))])]),e("div",{staticClass:"mb-5"},[e("b",[t._v("状态："),"pending"===t.viewData.status?e("span",[t._v("待处理")]):t._e(),"processed"===t.viewData.status?e("span",[t._v("处理完成")]):t._e()])]),e("div",{staticClass:"mb-5"},[t.viewData.tools?e("b",[t._v("反馈工具：")]):t._e(),e("span",[t._v(t._s(t.viewData.tools))])]),t.viewData.ua?e("div",{staticClass:"mb-5"},[e("b",[t._v("UA：")]),e("nya-copy",{attrs:{copy:t.handleUA(t.viewData.ua)}},[e("span",{domProps:{textContent:t._s(t.handleUA(t.viewData.ua))}})])],1):t._e(),t.viewData.localStorage?e("div",{staticClass:"mb-5"},[e("b",[t._v("localStorage：")]),e("nya-copy",{attrs:{copy:t.viewData.localStorage}},[e("span",{domProps:{textContent:t._s(t.viewData.localStorage)}})])],1):t._e(),t.viewData.vuex?e("div",{staticClass:"mb-5"},[e("b",[t._v("VUEX：")]),e("nya-copy",{attrs:{copy:t.viewData.vuex}},[e("span",{domProps:{textContent:t._s(t.viewData.vuex)}})])],1):t._e(),t.viewData.reply.length?t._e():e("div",{staticClass:"mb-5"},[e("b",[t._v("留言内容：")]),e("p",{domProps:{textContent:t._s(t.viewData.content.trim())}})]),t.viewData.reply.length?e("div",{staticClass:"mb-5"},[e("hr"),e("div",{staticClass:"mb-15"},[e("b",[t._v("回复记录：")])]),e("div",{staticClass:"reply-list"},[e("el-timeline",[e("el-timeline-item",{attrs:{timestamp:t.formatDate2(t.viewData.date),color:"var(--theme)"}},[e("b",[t._v("用户留言：")]),e("div",{staticClass:"reply-item-content",domProps:{textContent:t._s(t.viewData.content.trim())}})]),t._l(t.viewData.reply,(function(o,n){return e("el-timeline-item",{key:n,attrs:{timestamp:t.formatDate2(o.date),color:"admin"===o.type?"var(--theme-danger)":"var(--theme)"}},[e("b",[t._v(t._s("admin"===o.type?"站长回复":"留言回复")+"：")]),e("span",{staticStyle:{"white-space":"pre-line"},domProps:{textContent:t._s(o.content.trim())}})])}))],2)],1)]):t._e(),t.$store.state.user.meta.mail===t.$store.state.env.admin?e("el-popconfirm",{attrs:{title:"确认删除这条留言吗？"},on:{confirm:function(e){return t.remove(t.viewData.id)}}},[e("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[t._v("\n                    删除\n                ")])],1):t._e(),t.$store.state.user.meta.mail===t.$store.state.env.admin&&"pending"===t.viewData.status?e("el-popconfirm",{staticClass:"ml-10 mr-10",attrs:{title:"确认处理完成这条留言吗？"},on:{confirm:function(e){return t.processed(t.viewData.id)}}},[e("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[t._v("\n                    处理完成\n                ")])],1):t._e(),e("el-divider",[t._v("回复留言")]),e("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n                验证邮箱（与留言时使用的相同）\n            ")]),e("el-input",{staticClass:"mb-15",attrs:{type:"email",placeholder:"请输入邮箱",autofocus:"",clearable:""},model:{value:t.viewData.replyData.mail,callback:function(e){t.$set(t.viewData.replyData,"mail","string"==typeof e?e.trim():e)},expression:"viewData.replyData.mail"}}),t.verifyMail?e("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n                回复内容\n            ")]):t._e(),t.verifyMail?e("el-input",{staticClass:"mb-15",attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入回复内容",autofocus:"",clearable:""},model:{value:t.viewData.replyData.content,callback:function(e){t.$set(t.viewData.replyData,"content",e)},expression:"viewData.replyData.content"}}):t._e(),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.reply(t.viewData.id)}}},[t._v("\n                回复\n            ")])],1)]),e("el-dialog",{attrs:{title:"添加留言",visible:t.dialog.show,fullscreen:t.$store.state.isMobile,top:"15vh",width:"600px"},on:{"update:visible":function(e){return t.$set(t.dialog,"show",e)}}},[e("div",{staticClass:"message_board-dialog-box"},[e("div",{staticClass:"nya-subtitle inline-title"},[t._v("\n                是否显示在留言板\n            ")]),e("el-switch",{attrs:{"active-value":!1,"inactive-value":!0},model:{value:t.dialog.private,callback:function(e){t.$set(t.dialog,"private",e)},expression:"dialog.private"}}),e("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n                邮箱\n            ")]),e("el-input",{staticClass:"mb-15",attrs:{type:"email",placeholder:"请输入邮箱",autofocus:"",clearable:""},model:{value:t.dialog.mail,callback:function(e){t.$set(t.dialog,"mail","string"==typeof e?e.trim():e)},expression:"dialog.mail"}}),e("div",{staticClass:"nya-subtitle"},[t._v("\n                类型\n            ")]),e("el-select",{staticClass:"full-width mb-15",attrs:{"popper-append-to-body":!1,placeholder:"请选择留言类型"},model:{value:t.dialog.type,callback:function(e){t.$set(t.dialog,"type",e)},expression:"dialog.type"}},[e("el-option",{attrs:{label:"问题反馈",value:"问题反馈"}}),e("el-option",{attrs:{label:"功能建议",value:"功能建议"}}),e("el-option",{attrs:{label:"其他",value:"其他"}}),e("el-option",{attrs:{label:"商务合作",value:"商务合作"}})],1),e("div",{staticClass:"nya-subtitle"},[t._v("\n                工具名称（可选）\n            ")]),e("el-select",{staticClass:"full-width mb-15",attrs:{"popper-append-to-body":!1,placeholder:"请选择需要反馈的工具"},model:{value:t.dialog.tools,callback:function(e){t.$set(t.dialog,"tools",e)},expression:"dialog.tools"}},t._l(t.toolsList,(function(t,o){return e("el-option",{key:o,attrs:{label:t,value:t}})})),1),e("div",{staticClass:"nya-subtitle"},[t._v("\n                内容\n            ")]),e("el-input",{staticClass:"mb-15",attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入留言信息，如果是问题反馈必须输入复现步骤，否则无视留言。",autofocus:""},model:{value:t.dialog.content,callback:function(e){t.$set(t.dialog,"content",e)},expression:"dialog.content"}}),e("div",[e("el-button",{attrs:{type:"primary",loading:t.dialog.loading},on:{click:t.add}},[t._v("\n                    "+t._s(t.dialog.loading?"提交中":"提交留言")+"\n                ")])],1)],1)]),e("nya-container",{attrs:{main:"",title:"留言板"}},[e("div",{staticClass:"message_board-header"},[e("div",[e("span",[t._v("当前共有 "),t.data?e("b",[t._v(t._s(t.data.total))]):t._e(),t._v(" 条留言，已显示最近 "),e("b",[t._v("30")]),t._v(" 条")])]),e("div",[e("el-button",{attrs:{type:"primary",size:t.$store.state.env.isWeb?"normal":"mini"},on:{click:t.openAddMessageDialog}},[t._v("\n                    添加留言\n                ")])],1)]),t.loading?e("nya-loading"):t._e(),t.data&&!t.data.list.length?e("div",{staticClass:"no-msg"},[t._v("\n            暂无留言\n        ")]):t._e(),e("div",{ref:"message-box"},[t.data?t._l(t.data.list,(function(o,n){return e("div",{key:n,staticClass:"message-card",attrs:{title:"查看留言"},on:{click:function(e){return t.view(o)}}},[e("div",{staticClass:"message-card-body"},[e("div",{staticClass:"header"},[e("div",{staticClass:"type"},[e("span",[t._v(t._s(o.type))]),"processed"===o.status?e("i",{staticClass:"eva eva-checkmark-circle-outline"}):t._e(),"pending"===o.status?e("i",{staticClass:"eva eva-clock-outline"}):t._e()]),e("div",{staticClass:"date"},[t._v("\n                                "+t._s(t.formatDate(o.date))+"\n                            ")])]),e("div",{staticClass:"content"},[t._v("\n                            "+t._s(o.content)+"\n                        ")])])])})):t._e()],2)],1),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("您的留言审核过后将会显示在页面上")]),e("li",[t._v("如果由于意外情况导致无法成功提交反馈，请邮件联系："+t._s(t.$store.state.env.admin))]),e("li",[t._v("所有留言都会查看，但不一定会回复或处理，可能是问题已解决或暂时不会考虑解决这个功能，但是已被进行记录，未来可能会修复或更新")]),e("li",[t._v("类似留言或者垃圾留言将被删除，部分恶意留言可能会被删除账号，提交前请检查是否有类似的问题已存在")])])])],1)}),[],!1,null,null,null);"function"==typeof $&&$(component);e.default=component.exports}}]);