(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1470:function(t,e,n){t.exports={}},2563:function(t,e,n){"use strict";n(1470)},3020:function(t,e,n){"use strict";n.r(e);n(21),n(68),n(988);var r=n(370),o=n(959),l={name:"ImagePatina",data:function(){return{n:null,file:null,progress:0,iterations:16,quality:75,image:null,preview:"",resultsImg:"",loading:!1}},computed:{},watch:{quality:function(){this.resetProcess()}},mounted:function(){this.cover()},methods:{reset:function(){this.file=null,this.progress=0,this.iterations=16,this.quality=75,this.image=null,this.preview="",this.resultsImg="",this.loading=!1,this.cover()},handleChange:function(t){var e=this,n=t.target.files;if(!n.length)return!1;var r=n[0];this.file=r,Object(o.a)(r).then((function(t){e.preview=t,e.resetProcess()}))},download:function(){if(this.image.src){var t=this.n.lastIndexOf("."),e=(-1==t?this.n:this.n.substring(0,t))+(this.quality<=100?"_JPEGreen_".concat((new Date).getTime(),".jpg"):"_JPEGreen_".concat((new Date).getTime(),".png"));r.a.bind(this)({url:this.image.src,filename:e})}},cover:function(){var t=this;this.image=new Image,this.image.addEventListener("load",(function(){requestAnimationFrame(t.processImage)}))},update:function(){if(!this.file)return!1;this.progress<=this.iterations?requestAnimationFrame(this.processImage):this.resetProcess()},resetProcess:function(){this.progress=0,this.image.src=this.preview},processImage:function(){this.loading=!0;var t=function(t){return t>=0?t<=255?t:255:0},e=function(t){return t>=-128?t<=127?t:127:-128},canvas=document.createElement("canvas"),n=canvas.getContext("2d");if(this.progress!=this.iterations){++this.progress,canvas.width=this.image.width,canvas.height=this.image.height,n.fillStyle="white",n.fillRect(0,0,this.image.width,this.image.height),n.drawImage(this.image,0,0);for(var r=n.getImageData(0,0,this.image.width,this.image.height),data=r.data,p=0;p<data.length/4;++p){var o=data[4*p],g=data[4*p+1],b=data[4*p+2],l=t(77*o+150*g+29*b>>8),u=e((-43*o-85*g+128*b>>8)-1),c=e((128*o-107*g-21*b>>8)-1),h=t(65536*l+91881*c>>16),d=t(65536*l-22553*u-46802*c>>16),f=t(65536*l+116130*u>>16);data[4*p]=h,data[4*p+1]=d,data[4*p+2]=f}n.putImageData(r,0,0);var m=this.quality<=100?canvas.toDataURL("image/jpeg",.01*this.quality):canvas.toDataURL("image/png");this.resultsImg=m,this.image.src=m}else this.loading=!1}}},c=(n(2563),n(6)),h=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"图片做旧,表情包做旧,电子包浆,表情包包浆,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"图片包浆"}],title:"图片加包浆 - MikuTools"},t.options.toolsMeta={name:"图片加包浆",path:"/image_patina",head:{meta:[{hid:"keywords",keywords:"图片做旧,表情包做旧,电子包浆,表情包包浆,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"图片包浆"}],title:"图片加包浆 - MikuTools"},vip:!1,platforms:["app-android","web-pc","web-mobile"],key:"image",icon:"$tabler$photo-minus"}},component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"image_patina"},[e("nya-container",{attrs:{main:"",title:"图片加包浆"}},[e("div",{staticClass:"nya-subtitle mt-0"},[t._v("\n            请选择要处理的图片\n        ")]),e("el-input",{attrs:{type:"file",accept:"image/*",disabled:t.loading,placeholder:t.n?t.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件",clearable:""},on:{clear:t.reset},nativeOn:{change:function(e){return t.handleChange.apply(null,arguments)}},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}},[e("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.download},slot:"append"},[t._v("\n                "+t._s(t.loading?"".concat((t.progress/t.iterations*100).toFixed(0)," %"):"保存")+"\n            ")])],1),e("div",{staticClass:"nya-subtitle mb-0"},[t._v("\n            图片质量\n        ")]),e("el-slider",{attrs:{min:0,max:100},model:{value:t.quality,callback:function(e){t.quality=e},expression:"quality"}}),e("div",{staticClass:"nya-subtitle mt-0"},[t._v("\n            包浆次数\n        ")]),e("el-input-number",{staticClass:"full-width",on:{change:t.update},model:{value:t.iterations,callback:function(e){t.iterations=e},expression:"iterations"}})],1),t.preview?e("nya-container",{attrs:{title:"预览"}},[e("div",{staticClass:"preview"},[e("div",[e("div",{staticClass:"nya-subtitle"},[t._v("\n                    处理前\n                ")]),e("img",{attrs:{src:t.preview,alt:"image"}})]),e("div",[e("div",{staticClass:"nya-subtitle"},[t._v("\n                    处理后\n                ")]),e("img",{attrs:{src:t.resultsImg,alt:"image"}})])])]):t._e(),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("\n                为什么要写这个功能可以参考："),e("app-link",{attrs:{href:"https://www.zhihu.com/question/29345490",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                    https://www.zhihu.com/question/29345490\n                ")])],1),e("li",[t._v("新做的表情包没人用？表情包没有年代感？这时即可使用本工具把图片做旧，让表情包看起来传播次数更多，更有收藏价值")]),e("li",[t._v("如果处理时间过长或处理失败，请使用其他浏览器，推荐使用 Chrome")])])])],1)}),[],!1,null,null,null);"function"==typeof h&&h(component);e.default=component.exports},959:function(t,e,n){"use strict";n(13);e.a=function(t){return new Promise((function(e,n){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){return e(r.result)},r.onerror=function(t){return n(t)}}))}},988:function(t,e,n){"use strict";var r=n(2),o=n(4),l=n(62),c=n(532),h=n(530),d=n(5),f=RangeError,m=String,v=Math.floor,w=o(h),y=o("".slice),_=o(1..toFixed),k=function(t,e,n){return 0===e?n:e%2==1?k(t,e-1,n*t):k(t*t,e/2,n)},I=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=v(r/1e7)},C=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=v(n/t),n=n%t*1e7},x=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+w("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:d((function(){return"0.000"!==_(8e-5,3)||"1"!==_(.9,0)||"1.25"!==_(1.255,2)||"1000000000000000128"!==_(0xde0b6b3a7640080,0)}))||!d((function(){_({})}))},{toFixed:function(t){var e,n,r,o,h=c(this),d=l(t),data=[0,0,0,0,0,0],v="",_="0";if(d<0||d>20)throw f("Incorrect fraction digits");if(h!=h)return"NaN";if(h<=-1e21||h>=1e21)return m(h);if(h<0&&(v="-",h=-h),h>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(h*k(2,69,1))-69)<0?h*k(2,-e,1):h/k(2,e,1),n*=4503599627370496,(e=52-e)>0){for(I(data,0,n),r=d;r>=7;)I(data,1e7,0),r-=7;for(I(data,k(10,r,1),0),r=e-1;r>=23;)C(data,1<<23),r-=23;C(data,1<<r),I(data,1,1),C(data,2),_=x(data)}else I(data,0,n),I(data,1<<-e,0),_=x(data)+w("0",d);return _=d>0?v+((o=_.length)<=d?"0."+w("0",d-o)+_:y(_,0,o-d)+"."+y(_,o-d)):v+_}})}}]);