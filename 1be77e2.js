(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1248:function(t,e,n){t.exports={}},1249:function(t,e,n){t.exports={}},1250:function(t,e,n){t.exports={}},1655:function(t,e,n){"use strict";n(1248)},1656:function(t,e,n){"use strict";n(1249)},1657:function(t,e,n){"use strict";n(1250)},2942:function(t,e,n){"use strict";n.r(e);var o=n(45),r=n(3);n(25),n(58),n(79),n(23),n(13),n(40),n(69),n(88),n(46),n(89);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={openQqGroup:{name:"打开 QQ 群",dataTemplate:{idkey:""}}},m={data:function(){var t=Object.keys(f).map((function(t){return{label:f[t].name,value:t}}));return t.push({label:"默认",value:""}),{loading:!1,formData:{title:"",body:"",icon:"/icon.png",image:"",tag:"",data:null},tagOptions:t,rules:{title:[{required:!0,message:"请输入推送标题",trigger:"blur"}]}}},methods:{onSubmit:function(){var t=this;this.validate((function(){t.loading=!0,t.$axios.post("/webpush",t.formData).then((function(){return t.$message.success("发送成功")})).catch((function(e){t.$notify.error({title:"提交失败",message:e})})).finally((function(){return t.loading=!1}))}))},onTest:function(){var t=this;this.validate((function(){t.showNotification(t.formData.title,t.formData)}))},validate:function(t){this.$refs.webpushForm.validate((function(e){e&&t()}))},showNotification:function(title){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.length>1&&void 0!==t[1]?t[1]:{},"Notification"in window&&"serviceWorker"in navigator){n.next=3;break}return n.abrupt("return",e.$message.error("设备不支持"));case 3:if("granted"===window.Notification.permission){n.next=5;break}return n.abrupt("return",e.$message.error("权限被拒绝"));case 5:return n.prev=5,n.next=8,navigator.serviceWorker.getRegistration();case 8:return r=n.sent,n.abrupt("return",r.showNotification(title,c({vibrate:[100,50,100]},o)));case 12:return n.prev=12,n.t0=n.catch(5),n.abrupt("return",e.$message.error("SW 未注册"));case 15:case"end":return n.stop()}}),n,null,[[5,12]])})))()}}},d=m,v=(n(1655),n(6)),h=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"webpush"},[e("nya-container",{attrs:{main:"",title:"发送推送"}},[e("el-form",{ref:"webpushForm",staticClass:"nya-input-btn",attrs:{rules:t.rules,model:t.formData,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"标题",prop:"title"}},[e("el-input",{attrs:{placeholder:"输入推送标题"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),e("el-form-item",{attrs:{label:"内容",prop:"body"}},[e("el-input",{attrs:{placeholder:"输入推送内容"},model:{value:t.formData.body,callback:function(e){t.$set(t.formData,"body",e)},expression:"formData.body"}})],1),e("el-form-item",{attrs:{label:"图标",prop:"icon"}},[e("el-input",{attrs:{placeholder:"输入推送 icon"},model:{value:t.formData.icon,callback:function(e){t.$set(t.formData,"icon",e)},expression:"formData.icon"}})],1),e("el-form-item",{attrs:{label:"图片",prop:"image"}},[e("el-input",{attrs:{placeholder:"输入推送图片"},model:{value:t.formData.image,callback:function(e){t.$set(t.formData,"image",e)},expression:"formData.image"}})],1),e("el-form-item",{attrs:{label:"震动规则"}},[e("el-input",{attrs:{disabled:"",value:"默认"}})],1),e("el-form-item",{attrs:{label:"推送标记"}},[e("el-select",{staticStyle:{width:"100%"},attrs:{"popper-append-to-body":!1,disabled:"",placeholder:"请选择推送标记"},model:{value:t.formData.tag,callback:function(e){t.$set(t.formData,"tag",e)},expression:"formData.tag"}},t._l(t.tagOptions,(function(option,t){return e("el-option",{key:t,attrs:{label:option.label,value:option.value}})})),1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.onSubmit}},[t._v("\n                    "+t._s(t.loading?"提交中":"发送全站推送")+"\n                ")]),e("el-button",{on:{click:t.onTest}},[t._v("\n                    预览推送\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,y=n(181),x=n(47),k=n.n(x),$=n(285),_=n.n($),w={data:function(){return{loading:!1,form:{type:"notice",version:"",title:"",content:"",color:"var(--theme)",platform:[],forcedUpdate:!1,hotUpdate:!0}}},computed:{result:function(){return Object(y.a)(this.form.content)}},mounted:function(){this.getNotice()},methods:{formatDate:function(t){return k.a.unix(t).format("YYYY年MM月DD日 HH:mm:ss")},getNotice:function(){var t=this;this.$axios.get("/notification").then((function(e){e.data.data.id&&(t.form.content=e.data.data.content,t.form.title=e.data.data.title)})).catch((function(e){t.$notify.error({title:"获取通知失败",message:"可能是服务器正在维护中：".concat(e)})}))},submit:function(){var t=this;if(!this.loading){if(this.loading=!0,"update"===this.form.type&&!_.a.valid(this.form.version))return this.$notify.error({title:"版本号格式错误",message:"请检查版本号格式是否正确"}),void(this.loading=!1);this.$axios.post("/notification",{content:this.form.content,title:this.form.title,color:this.form.color,platform:this.form.platform,type:this.form.type,forcedUpdate:this.form.forcedUpdate,hotUpdate:this.form.hotUpdate,version:this.form.version}).then((function(){t.loading=!1,t.$message.success("发送成功")})).catch((function(e){t.$notify.error({title:"提交失败",message:e}),t.loading=!1}))}}}},D=(n(1656),Object(v.a)(w,(function(){var t=this,e=t._self._c;return e("div",[e("nya-container",{attrs:{main:"",title:"发送通知"}},[e("el-form",{staticClass:"nya-input-btn",attrs:{model:t.form},nativeOn:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"nya-subtitle"},[t._v("\n                请输入通知类型\n            ")]),e("el-form-item",{attrs:{prop:"type"}},[e("el-select",{staticStyle:{width:"100%"},attrs:{"popper-append-to-body":!1,placeholder:"请选择"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[e("el-option",{attrs:{label:"公告通知",value:"notice"}}),e("el-option",{attrs:{label:"更新通知",value:"update"}})],1)],1),e("div",{staticClass:"nya-subtitle"},[t._v("\n                请输入通知标题\n            ")]),e("el-form-item",{attrs:{prop:"title"}},[e("el-input",{attrs:{autofocus:"",placeholder:"输入通知标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n                请输入通知内容\n            ")]),e("el-form-item",{attrs:{prop:"content"}},[e("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:8},autofocus:"",placeholder:"请输入通知内容"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),"update"===t.form.type?e("div",{staticClass:"nya-subtitle"},[t._v("\n                请填写版本号\n            ")]):t._e(),"update"===t.form.type?e("el-form-item",{attrs:{prop:"title"}},[e("el-input",{attrs:{autofocus:"",placeholder:"输入版本号"},model:{value:t.form.version,callback:function(e){t.$set(t.form,"version",e)},expression:"form.version"}})],1):t._e(),e("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n                选择日志颜色\n            ")]),e("el-form-item",[e("el-select",{staticStyle:{width:"100%"},attrs:{"popper-append-to-body":!1,placeholder:"请选择"},model:{value:t.form.color,callback:function(e){t.$set(t.form,"color",e)},expression:"form.color"}},[e("el-option",{attrs:{label:"蓝色",value:"var(--theme)"}},[e("span",{staticClass:"dot",style:{backgroundColor:"var(--theme)"}}),e("span",{staticStyle:{color:"#8492a6","font-size":"13px"}},[t._v("蓝色")])]),e("el-option",{attrs:{label:"红色",value:"var(--color-danger)"}},[e("span",{staticClass:"dot",style:{backgroundColor:"var(--color-danger)"}}),e("span",{staticStyle:{color:"#8492a6","font-size":"13px"}},[t._v("红色")])]),e("el-option",{attrs:{label:"绿色",value:"var(--color-success)"}},[e("span",{staticClass:"dot",style:{backgroundColor:"var(--color-success)"}}),e("span",{staticStyle:{color:"#8492a6","font-size":"13px"}},[t._v("绿色")])]),e("el-option",{attrs:{label:"黄色",value:"var(--color-warning)"}},[e("span",{staticClass:"dot",style:{backgroundColor:"var(--color-warning)"}}),e("span",{staticStyle:{color:"#8492a6","font-size":"13px"}},[t._v("黄色")])]),e("el-option",{attrs:{label:"灰色",value:"var(--color-text-placeholder)"}},[e("span",{staticClass:"dot",style:{backgroundColor:"var(--color-text-placeholder)"}}),e("span",{staticStyle:{color:"#8492a6","font-size":"13px"}},[t._v("灰色")])])],1)],1),e("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n                选择平台\n            ")]),e("el-form-item",[e("el-checkbox-group",{model:{value:t.form.platform,callback:function(e){t.$set(t.form,"platform",e)},expression:"form.platform"}},[e("el-checkbox",{attrs:{label:"all"}}),e("el-checkbox",{attrs:{label:"web"}}),e("el-checkbox",{attrs:{label:"android"}}),e("el-checkbox",{attrs:{label:"ios"}})],1)],1),e("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n                其他\n            ")]),e("el-form-item",["update"===t.form.type?e("el-checkbox",{attrs:{label:"强制更新"},model:{value:t.form.forcedUpdate,callback:function(e){t.$set(t.form,"forcedUpdate",e)},expression:"form.forcedUpdate"}}):t._e(),"update"===t.form.type?e("el-checkbox",{attrs:{label:"可以热更新"},model:{value:t.form.hotUpdate,callback:function(e){t.$set(t.form,"hotUpdate",e)},expression:"form.hotUpdate"}}):t._e()],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.submit}},[t._v("\n                    "+t._s(t.loading?"提交中":"发送全站通知")+"\n                ")])],1)],1)],1),e("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.result,expression:"result"}],attrs:{title:"预览通知"}},[e("div",{staticClass:"typo",domProps:{innerHTML:t._s(t.result)}})])],1)}),[],!1,null,null,null).exports),O=(n(32),{data:function(){return{tableData:null,loading:!1}},mounted:function(){},methods:{getData:function(){var t=this;this.loading=!0,this.$axios.post("/admin/envs").then((function(e){t.tableData=e.data.data,t.loading=!1})).catch((function(e){t.$notify.error({title:"获取环境变量失败",message:"可能是服务器正在维护中：".concat(e)})}))},edit:function(t){var e=this;this.$prompt("请输入新的值","编辑环境变量",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:t.value,inputType:"textarea",inputPlaceholder:t.value}).then((function(n){var o=n.value;e.$axios.post("/admin/envs/update",{id:t._id,key:t.key,value:o}).then((function(){e.$notify.success({title:"编辑成功",message:"已将 ".concat(t.key," 的值修改为 ").concat(o)}),e.getData()})).catch((function(t){e.$notify.error({title:"编辑失败",message:t})}))})).catch((function(){}))},del:function(t){var e=this;this.$confirm("此操作将永久删除该环境变量, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$axios.post("/admin/envs/del",{id:t._id}).then((function(){e.$notify.success({title:"删除成功",message:"已将 ".concat(t.key," 删除")}),e.getData()})).catch((function(t){e.$notify.error({title:"删除失败",message:t})}))})).catch((function(){}))},add:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$prompt("请输入键","添加环境变量",{confirmButtonText:"确定",cancelButtonText:"取消",inputPlaceholder:"请输入键"});case 3:return n=e.sent,e.next=6,t.$prompt("请输入值","添加环境变量",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"textarea",inputPlaceholder:"请输入值"});case 6:return o=e.sent,e.next=9,t.$prompt("请输入类型","添加环境变量",{confirmButtonText:"确定",cancelButtonText:"取消",inputPlaceholder:"请输入类型"});case 9:r=e.sent,e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return");case 15:t.$axios.post("/admin/envs/add",{key:n.value,value:o.value,type:r.value}).then((function(){t.$notify.success({title:"添加成功",message:"已将 ".concat(n.value," 添加")}),t.getData()})).catch((function(e){t.$notify.error({title:"添加失败",message:e})}));case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()},enc_dec:function(t){var e=this,n="加密";"dec"===t&&(n="解密"),this.$confirm("此操作将".concat(n,"所有环境变量, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$axios.post("/admin/envs/".concat(t)).then((function(){e.$notify.success({title:"".concat(n,"成功"),message:"已将所有环境变量".concat(n)}),e.getData()})).catch((function(t){e.$notify.error({title:"".concat(n,"失败"),message:t})}))})).catch((function(){}))},copy:function(t){var e=this;this.$copyText(t.value).then((function(){e.$notify.success({title:"复制成功",message:"已将 ".concat(t.key," 的值复制到剪贴板")})}),(function(){e.$notify.error({title:"复制失败",message:"请手动复制"})}))}}}),C=(n(1657),Object(v.a)(O,(function(){var t=this,e=t._self._c;return e("div",[e("nya-container",{attrs:{main:"",title:"环境变量",loading:t.loading}},[t.tableData?e("div",[e("div",{staticClass:"mb-15"},[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.add}},[t._v("\n                    添加\n                ")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.enc_dec("enc")}}},[t._v("\n                    加密\n                ")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.enc_dec("dec")}}},[t._v("\n                    解密\n                ")])],1),t.tableData?e("el-table",{attrs:{data:t.tableData,size:"mini",stripe:""}},[e("el-table-column",{attrs:{prop:"key",label:"键",width:"250"}}),e("el-table-column",{attrs:{prop:"value",label:"值"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticClass:"env-val"},[t._v(t._s(n.row.value))])]}}],null,!1,2070841728)}),e("el-table-column",{attrs:{prop:"type",label:"类型",width:"100"}}),e("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.edit(n.row)}}},[t._v("\n                            编辑\n                        ")]),e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.del(n.row)}}},[t._v("\n                            删除\n                        ")]),e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.copy(n.row)}}},[t._v("\n                            复制\n                        ")])]}}],null,!1,3904116813)})],1):t._e()],1):e("el-button",{attrs:{round:""},on:{click:t.getData}},[t._v("\n            加载环境变量\n        ")])],1)],1)}),[],!1,null,null,null).exports),j=(n(33),n(528),{name:"Openai",data:function(){return{content:"",loading:!1}},computed:{keys:function(){return this.content.trim().split("\n")}},methods:{submit:function(){var t=this;this.content&&this.keys.length?(this.loading=!0,this.$axios.post("/admin/openai",{keys:this.keys}).then((function(e){console.log(e.data.data),t.loading=!1,t.$message.success("添加成功")})).catch((function(e){t.loading=!1,t.$message.error(e.response.data.message)}))):this.$message.error("请输入内容")}}}),T={name:"Addmin",components:{Webpush:h,Notification:D,Envs:C,Openai:Object(v.a)(j,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"admin-openai"},[e("nya-container",{attrs:{title:"OpenAI"}},[e("el-input",{attrs:{type:"textarea",disabled:t.loading,autosize:{minRows:4,maxRows:8},autofocus:"",placeholder:"一行一个"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),e("div",{staticClass:"mt-15"},[t._v("\n            共添加："+t._s(t.keys.length)+" 个\n        ")]),e("el-button",{staticClass:"mt-15",attrs:{type:"primary",loading:t.loading},on:{click:t.submit}},[t._v("\n            "+t._s(t.loading?"添加中":"添加")+"\n        ")])],1)],1)}),[],!1,null,null,null).exports},head:function(){return{title:this.title}},data:function(){return{title:"管理 - ".concat("MikuTools")}},mounted:function(){},methods:{}},S=Object(v.a)(T,(function(){var t=this,e=t._self._c;return t.$store.state.user.meta.mail===t.$store.state.env.admin?e("div",{staticClass:"addmin"},[e("Notification"),e("Webpush"),e("Envs"),e("Openai")],1):t._e()}),[],!1,null,null,null);e.default=S.exports}}]);