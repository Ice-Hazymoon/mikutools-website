(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1128:function(t,n){},1129:function(t,n){},1130:function(t,n){},1479:function(t,n,e){t.exports={}},2577:function(t,n,e){t.exports=e.p+"img/0.a597dd6.png"},2578:function(t,n,e){t.exports=e.p+"img/1.ec979c7.png"},2579:function(t,n,e){t.exports=e.p+"img/2.7c68d58.png"},2580:function(t,n,e){t.exports=e.p+"img/3.531ee50.png"},2581:function(t,n,e){t.exports=e.p+"img/4.967fcbb.png"},2582:function(t,n,e){t.exports=e.p+"img/5.3ad8e5d.png"},2583:function(t,n,e){t.exports=e.p+"img/6.67373f5.png"},2584:function(t,n,e){t.exports=e.p+"img/7.41b3c6f.png"},2585:function(t,n,e){t.exports=e.p+"img/8.2a794ea.png"},2586:function(t,n,e){t.exports=e.p+"img/9.3303bca.png"},2587:function(t,n,e){t.exports=e.p+"img/10.72e99f2.png"},2588:function(t,n,e){t.exports=e.p+"img/11.e0c39cd.png"},2589:function(t,n,e){t.exports=e.p+"img/12.41ea735.png"},2590:function(t,n,e){t.exports=e.p+"img/13.76fc0e5.png"},2591:function(t,n,e){t.exports=e.p+"img/14.fb26fec.png"},2592:function(t,n,e){"use strict";e(1479)},3031:function(t,n,e){"use strict";e.r(n);e(21),e(68),e(13);var o,c=e(370),r=e(959);o=e(1127).fabric;var l={name:"ChristmasHat",data:function(){return{n:null,src:[e(2577),e(2578),e(2579),e(2580),e(2581),e(2582),e(2583),e(2584),e(2585),e(2586),e(2587),e(2588),e(2589),e(2590),e(2591)],style:0,logo:null,backgroundImage:null,canvas:null}},watch:{style:function(){this.n&&this.renderCanvas()}},mounted:function(){this.canvas=new o.Canvas(this.$refs.canvas)},methods:{handleChange:function(t){var n=this,e=t.target.files;if(!e.length)return!1;var o=e[0];Object(r.a)(o).then((function(t){var image=new Image;image.onload=function(){n.backgroundImage=image,n.$nextTick(n.renderCanvas)},image.src=t}))},renderCanvas:function(){var t=this;this.canvas.clear();var image=this.backgroundImage,n=1600,e=this.$refs.box.offsetWidth,c=1;image.width>n?(this.canvas.setWidth(n),this.canvas.setHeight(n/image.width*image.height),c=n/image.width):(this.canvas.setWidth(image.width),this.canvas.setHeight(image.height)),this.getLogo().then((function(){var e=image.width/2/t.logo.width;image.width>n&&(e=800/t.logo.width);var c=new o.Image(t.logo,{scaleX:e,scaleY:e,left:0,top:0});t.canvas.add(c),c.centerH(),t.canvas.renderAll()}));var r=new o.Image(image,{scaleX:c,scaleY:c,left:0,top:0,selectable:!1});this.canvas.setBackgroundImage(r),this.canvas.width>e&&(this.canvas.wrapperEl.style.transform="scale(".concat(e/this.canvas.width,")"),this.canvas.wrapperEl.style.width="100%",this.canvas.wrapperEl.style.height=this.canvas.height*(e/this.canvas.width)+"px")},getLogo:function(){var t=this;return new Promise((function(n,e){var image=new Image;image.crossOrigin="anonymous",image.onload=function(){t.logo=image,n(image)},image.onerror=e,image.src=t.src[t.style]}))},save:function(){if(!this.n)return!1;c.a.bind(this)({url:this.canvas.toDataURL(),filename:"mask-avatar_".concat((new Date).getTime(),".png")})}}},h=(e(2592),e(6)),d=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"在线加口罩,头像加口罩,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"给头像加个口罩"}],title:"头像加口罩 - MikuTools"},t.options.toolsMeta={name:"头像加口罩",path:"/mask",head:{meta:[{hid:"keywords",keywords:"在线加口罩,头像加口罩,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"给头像加个口罩"}],title:"头像加口罩 - MikuTools"},vip:!1,platforms:["web-pc","web-mobile"],key:"obsolete",icon:"$tabler$face-mask"}},component=Object(h.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"mask"},[n("nya-container",{attrs:{main:"",title:"在线加口罩"}},[n("div",{staticClass:"nya-subtitle"},[t._v("\n            请选择要制作的图片\n        ")]),n("el-input",{attrs:{type:"file",accept:"image/*",placeholder:t.n?t.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件",clearable:""},nativeOn:{change:function(n){return t.handleChange.apply(null,arguments)}},model:{value:t.n,callback:function(n){t.n=n},expression:"n"}},[n("el-button",{attrs:{slot:"append"},on:{click:t.save},slot:"append"},[t._v("\n                保存图片\n            ")])],1),n("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n            选择口罩样式\n        ")]),n("el-select",{staticStyle:{width:"100%"},attrs:{"popper-append-to-body":!1,placeholder:"请选择"},model:{value:t.style,callback:function(n){t.style=n},expression:"style"}},t._l(t.src,(function(e,o){return n("el-option",{key:o,attrs:{label:"样式：".concat(o+1),value:o}},[n("div",{staticClass:"preview"},[n("el-image",{attrs:{src:t.src[o],fit:"contain"}}),n("div",[t._v(t._s("样式：".concat(o+1)))])],1)])})),1)],1),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.n,expression:"n"}],attrs:{title:"预览"}},[n("div",{ref:"box",staticClass:"box"},[n("canvas",{ref:"canvas"})])])],1)}),[],!1,null,null,null);"function"==typeof d&&d(component);n.default=component.exports},959:function(t,n,e){"use strict";e(13);n.a=function(t){return new Promise((function(n,e){var o=new FileReader;o.readAsDataURL(t),o.onload=function(){return n(o.result)},o.onerror=function(t){return e(t)}}))}}}]);