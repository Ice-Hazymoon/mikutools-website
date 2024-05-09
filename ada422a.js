(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1177:function(e,t){},1178:function(e,t){},1504:function(e,t,n){e.exports={}},2650:function(e,t,n){"use strict";n(1504)},2960:function(e,t,n){"use strict";n.r(t);n(21),n(68);var r,o,c=n(3),l=(n(13),n(39),n(33),n(529),n(246),n(86),n(25),n(1498)),d=n.n(l),h=n(2649),f=n.n(h);var m={name:"QrcodeGeneration",data:function(){return{n:"",qrcodeText:"",dataUrl:"",rdata:"",loading:!1}},beforeRouteLeave:function(e,t,n){n()},methods:{useCamera:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$store.state.env.isApp){t.next=10;break}return t.next=3,e.didUserGrantPermission();case 3:if(!t.sent){t.next=8;break}e.startScan(),t.next=10;break;case 8:return t.next=10,o.show({text:"没有摄像头权限，请到设置中开启权限",duration:"short",position:"bottom"});case 10:case"end":return t.stop()}}),t)})))()},startScan:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.body.classList.add("barcode-scanner-open"),document.querySelector(".barcode-scanner-container").style.display="flex",document.getElementById("barcode-scanner-cancel").addEventListener("click",(function(){e.stopScan()})),t.next=5,r.startScan();case 5:if(!(n=t.sent).hasContent){t.next=11;break}return t.next=9,o.show({text:"识别成功",duration:"short",position:"bottom"});case 9:e.rdata=n.content,e.stopScan();case 11:case"end":return t.stop()}}),t)})))()},stopScan:function(){document.body.classList.remove("barcode-scanner-open"),document.querySelector(".barcode-scanner-container").style.display="none",r.stopScan()},didUserGrantPermission:function(){return Object(c.a)(regeneratorRuntime.mark((function e(){var t,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n(592),o=t.Dialog,e.next=3,r.checkPermission({force:!1});case 3:if(c=e.sent,console.log(c),!c.granted){e.next=8;break}return console.log("用户允许"),e.abrupt("return",!0);case 8:if(!c.denied){e.next=11;break}return console.log("用户拒绝"),e.abrupt("return",!1);case 11:if(c.asked&&console.log("system requested the user for permission during this call",!1),!c.neverAsked){e.next=20;break}return console.log("用户以前没有被要求过这种权限"),e.next=16,o.confirm({title:"请求权限",message:"我们需要获取摄像头权限进行扫码",okButtonTitle:"允许",cancelButtonTitle:"拒绝"});case 16:if(l=e.sent,l.value){e.next=20;break}return e.abrupt("return",!1);case 20:if(!c.restricted&&!c.unknown){e.next=22;break}return e.abrupt("return",!1);case 22:return e.next=24,r.checkPermission({force:!0});case 24:if((d=e.sent).asked&&console.log("system requested the user for permission during this call",!0),!d.granted){e.next=28;break}return e.abrupt("return",!0);case 28:return e.abrupt("return",!1);case 29:case"end":return e.stop()}}),e)})))()},readerQrcode:function(e){var t=this;this.dataUrl="",this.rdata="";var n=e.target.files;if(!n.length)return!1;var r,o=URL.createObjectURL(n[0]);(r=o,new Promise((function(e,t){var image=new Image;image.onload=function(){var canvas=document.createElement("canvas"),n=canvas.getContext("2d");canvas.width=image.width,canvas.height=image.height,n.drawImage(image,0,0);try{var r=n.getImageData(0,0,image.width,image.height),o=f()(r.data,r.width,r.height);e(o)}catch(e){t(e)}},image.src=r}))).then((function(e){t.rdata=e.data})).catch((function(){t.$notify.error({title:"识别失败",message:"可能不是一个二维码，或由于二维码内容过于复杂"})}))},generation:function(){if(this.loading=!0,this.dataUrl="",this.rdata="",this.qrcodeText)try{var e=d.a.imageSync(this.qrcodeText,{type:"png",size:10});this.dataUrl="data:image/png;base64,"+e.toString("base64"),this.loading=!1}catch(e){this.loading=!1,this.$notify.error({title:"生成失败",message:e})}else this.loading=!1,this.$notify.error({title:"生成失败",message:"请输入内容"})}}},v=(n(2650),n(6)),k=function(e){e.exports.head={meta:[{hid:"keywords",keywords:"在线二维码生成,在线二维码内容解析,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"二维码生成/解析"}],title:"二维码生成/解析 - MikuTools"},e.options.toolsMeta={name:"二维码生成/解析",path:"/qrcode_generation",head:{meta:[{hid:"keywords",keywords:"在线二维码生成,在线二维码内容解析,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"二维码生成/解析"}],title:"二维码生成/解析 - MikuTools"},vip:!1,platforms:["app-android","web-pc","web-mobile"],key:"other",icon:"$tabler$qrcode"}},component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"qrcode_generation"},[t("nya-container",{attrs:{main:"",title:"二维码生成/识别"}},[t("div",{staticClass:"nya-subtitle"},[e._v("\n            请输入要生成的内容\n        ")]),t("el-input",{staticClass:"mb-15",attrs:{placeholder:"https://imiku.me",autofocus:"",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.generation.apply(null,arguments)}},model:{value:e.qrcodeText,callback:function(t){e.qrcodeText=t},expression:"qrcodeText"}},[t("el-button",{attrs:{slot:"append",loading:e.loading},on:{click:e.generation},slot:"append"},[e._v("\n                "+e._s(e.loading?"生成中":"开始生成")+"\n            ")])],1),t("div",{staticClass:"nya-subtitle"},[e._v("\n            请选择要识别的二维码图片\n        ")]),t("el-input",{attrs:{type:"file",accept:"image/*",placeholder:e.n?e.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件"},nativeOn:{change:function(t){return e.readerQrcode.apply(null,arguments)}},model:{value:e.n,callback:function(t){e.n=t},expression:"n"}},[e.$store.state.env.isApp?t("el-button",{attrs:{slot:"append"},on:{click:e.useCamera},slot:"append"},[e._v("\n                使用相机扫描\n            ")]):e._e()],1)],1),t("nya-container",{directives:[{name:"show",rawName:"v-show",value:e.dataUrl||e.rdata,expression:"dataUrl || rdata"}],attrs:{title:"获取成功"}},[e.rdata?t("pre",[e._v(e._s(e.rdata))]):t("img",{staticClass:"qrcode",attrs:{src:e.dataUrl,alt:"QRCode"}})]),t("nya-container",{attrs:{title:"说明"}},[t("ul",{staticClass:"nya-list"},[t("li",[t("b",[e._v("如果二维码内容包含二维码以外的其他元素，请在 "),t("nuxt-link",{attrs:{to:"/picture_clipping"}},[e._v("图片裁剪")]),e._v(" 中裁剪出二维码主体后进行识别")],1)]),t("li",[e._v("本站仅提供简单的二维码生成，如有其他样式需求可自行选择其他工具")]),t("li",[e._v("二维码识别若出现错误，可能由于二维码内容过于复杂或不是一个二维码")])])])],1)}),[],!1,null,null,null);"function"==typeof k&&k(component);t.default=component.exports}}]);