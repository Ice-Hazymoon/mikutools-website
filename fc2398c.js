(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1566:function(t,e,n){t.exports={}},2899:function(t,e,n){"use strict";n(1566)},3087:function(t,e,n){"use strict";n.r(e);n(59);var r={};!function main(t,e,n,r){var o=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function l(){}function c(n){var r=e.exports.Promise,o=void 0!==r?r:t.Promise;return"function"==typeof o?new o(n):(n(l,l),null)}var d,f,h,m,v,y,w,M,_,x=(h=Math.floor(1e3/60),m={},v=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(d=function(t){var e=Math.random();return m[e]=requestAnimationFrame((function n(time){v===time||v+h-1<time?(v=time,delete m[e],t()):m[e]=requestAnimationFrame(n)})),e},f=function(t){m[t]&&cancelAnimationFrame(m[t])}):(d=function(t){return setTimeout(t,h)},f=function(t){return clearTimeout(t)}),{frame:d,cancel:f}),C=(M={},function(){if(y)return y;if(!n&&o){var code=["var CONFETTI, SIZE = {}, module = {};","("+main.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{y=new Worker(URL.createObjectURL(new Blob([code])))}catch(t){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",t),null}!function(t){function e(e,n){t.postMessage({options:e||{},callback:n})}t.init=function(canvas){var e=canvas.transferControlToOffscreen();t.postMessage({canvas:e},[e])},t.fire=function(n,r,o){if(w)return e(n,null),w;var l=Math.random().toString(36).slice(2);return w=c((function(r){function c(e){e.data.callback===l&&(delete M[l],t.removeEventListener("message",c),w=null,o(),r())}t.addEventListener("message",c),e(n,l),M[l]=c.bind(null,{data:{callback:l}})}))},t.reset=function(){for(var e in t.postMessage({reset:!0}),M)M[e](),delete M[e]}}(y)}return y}),k={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(t,e,n){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:k[e],n)}function T(t){return t<0?0:Math.floor(t)}function I(t){return parseInt(t,16)}function R(t){return t.map(S)}function S(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:I(e.substring(0,2)),g:I(e.substring(2,4)),b:I(e.substring(4,6))}}function F(canvas){canvas.width=document.documentElement.clientWidth,canvas.height=document.documentElement.clientHeight}function N(canvas){var rect=canvas.getBoundingClientRect();canvas.width=rect.width,canvas.height=rect.height}function animate(canvas,t,e,o,l){var d,f,h=t.slice(),m=canvas.getContext("2d"),v=c((function(t){function c(){d=f=null,m.clearRect(0,0,o.width,o.height),l(),t()}d=x.frame((function t(){!n||o.width===r.width&&o.height===r.height||(o.width=canvas.width=r.width,o.height=canvas.height=r.height),o.width||o.height||(e(canvas),o.width=canvas.width,o.height=canvas.height),m.clearRect(0,0,o.width,o.height),h=h.filter((function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var progress=e.tick++/e.totalTicks,n=e.x+e.random*e.tiltCos,r=e.y+e.random*e.tiltSin,o=e.wobbleX+e.random*e.tiltCos,l=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-progress)+")",t.beginPath(),"circle"===e.shape)t.ellipse?t.ellipse(e.x,e.y,Math.abs(o-n)*e.ovalScalar,Math.abs(l-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,n,r,o,l,c,d,f){t.save(),t.translate(e,n),t.rotate(l),t.scale(r,o),t.arc(0,0,1,c,d,f),t.restore()}(t,e.x,e.y,Math.abs(o-n)*e.ovalScalar,Math.abs(l-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if("star"===e.shape)for(var c=Math.PI/2*3,d=4*e.scalar,f=8*e.scalar,h=e.x,m=e.y,v=5,y=Math.PI/v;v--;)h=e.x+Math.cos(c)*f,m=e.y+Math.sin(c)*f,t.lineTo(h,m),c+=y,h=e.x+Math.cos(c)*d,m=e.y+Math.sin(c)*d,t.lineTo(h,m),c+=y;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(r)),t.lineTo(Math.floor(o),Math.floor(l)),t.lineTo(Math.floor(n),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}(m,t)})),h.length?d=x.frame(t):c()})),f=c}));return{addFettis:function(t){return h=h.concat(t),v},canvas:canvas,promise:v,reset:function(){d&&x.cancel(d),f&&f()}}}function O(canvas,e){var n,r=!canvas,l=!!E(e||{},"resize"),d=E(e,"disableForReducedMotion",Boolean),f=o&&!!E(e||{},"useWorker")?C():null,h=r?F:N,m=!(!canvas||!f)&&!!canvas.__confetti_initialized,v="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function y(t,e,r){for(var o,l,c,d,f,m=E(t,"particleCount",T),v=E(t,"angle",Number),y=E(t,"spread",Number),w=E(t,"startVelocity",Number),M=E(t,"decay",Number),_=E(t,"gravity",Number),x=E(t,"drift",Number),C=E(t,"colors",R),k=E(t,"ticks",Number),I=E(t,"shapes"),S=E(t,"scalar"),F=function(t){var e=E(t,"origin",Object);return e.x=E(e,"x",Number),e.y=E(e,"y",Number),e}(t),N=m,O=[],P=canvas.width*F.x,z=canvas.height*F.y;N--;)O.push((o={x:P,y:z,angle:v,spread:y,startVelocity:w,color:C[N%C.length],shape:I[(d=0,f=I.length,Math.floor(Math.random()*(f-d))+d)],ticks:k,decay:M,gravity:_,drift:x,scalar:S},l=void 0,c=void 0,l=o.angle*(Math.PI/180),c=o.spread*(Math.PI/180),{x:o.x,y:o.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*o.startVelocity+Math.random()*o.startVelocity,angle2D:-l+(.5*c-Math.random()*c),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:o.color,shape:o.shape,tick:0,totalTicks:o.ticks,decay:o.decay,drift:o.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*o.gravity,ovalScalar:.6,scalar:o.scalar}));return n?n.addFettis(O):(n=animate(canvas,O,h,e,r)).promise}function w(e){var o=d||E(e,"disableForReducedMotion",Boolean),w=E(e,"zIndex",Number);if(o&&v)return c((function(t){t()}));r&&n?canvas=n.canvas:r&&!canvas&&(canvas=function(t){var canvas=document.createElement("canvas");return canvas.style.position="fixed",canvas.style.top="0px",canvas.style.left="0px",canvas.style.pointerEvents="none",canvas.style.zIndex=t,canvas}(w),document.body.appendChild(canvas)),l&&!m&&h(canvas);var M={width:canvas.width,height:canvas.height};function _(){if(f){var t={getBoundingClientRect:function(){if(!r)return canvas.getBoundingClientRect()}};return h(t),void f.postMessage({resize:{width:t.width,height:t.height}})}M.width=M.height=null}function x(){n=null,l&&t.removeEventListener("resize",_),r&&canvas&&(document.body.removeChild(canvas),canvas=null,m=!1)}return f&&!m&&f.init(canvas),m=!0,f&&(canvas.__confetti_initialized=!0),l&&t.addEventListener("resize",_,!1),f?f.fire(e,M,x):y(e,M,x)}return w.reset=function(){f&&f.reset(),n&&n.reset()},w}function P(){return _||(_=O(null,{useWorker:!0,resize:!0})),_}e.exports=function(){return P().apply(this,arguments)},e.exports.reset=function(){P().reset()},e.exports.create=O}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),r,!1);var o=r.exports,l=(r.exports.create,{name:"Pay",data:function(){return{payType:"alipay-pc",loading:!0,payResult:null,payError:null,status:"success"}},mounted:function(){var t=this;this.$route.query.out_trade_no?this.checkOrder():(this.$notify.error({title:"订单信息不存在",message:"即将返回购买页面"}),setTimeout((function(){t.$router.push("/user/buy")}),500))},methods:{firework:function(){var t=Date.now()+1e3,e=["#FA5477","#249FFD"];!function n(){o({particleCount:2,angle:60,spread:55,origin:{x:0},colors:e}),o({particleCount:2,angle:120,spread:55,origin:{x:1},colors:e}),Date.now()<t&&requestAnimationFrame(n)}()},checkOrder:function(){var t=this;this.loading=!0,this.$axios.post("/user/pay/checkOrder",{orderNo:this.$route.query.out_trade_no}).then((function(e){t.payResult=e.data.data,t.firework(),t.loading=!1})).catch((function(e){console.log(e),t.loading=!1,t.status="error",t.payError=e,t.$notify.error({title:"查询订单状态失败",message:e})}))}}}),c=(n(2899),n(6)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pay"},[e("nya-container",{attrs:{main:"",title:"支付结果"}},[t.loading?e("div",{staticClass:"loading"},[e("nya-loading"),e("div",{staticClass:"loading-text"},[t._v("\n                订单处理中，请稍后\n            ")])],1):e("el-result",{attrs:{icon:t.status,title:t.payError?"支付失败":"支付成功","sub-title":t.payError?"如果您已支付，稍等片刻刷新页面，或联系网站管理员":"感谢您的支持，网站有你将会变得更好"}},[e("template",{slot:"extra"},[t.payResult?e("div",{staticClass:"pay-result"},[e("div",[e("b",[t._v("网站订单号：")]),t._v(t._s(t.payResult.out_trade_no))]),e("div",[e("b",[t._v("支付订单号：")]),t._v(t._s(t.payResult.trade_no))]),e("div",[e("b",[t._v("交易金额：")]),t._v("￥"+t._s(t.payResult.total_amount))]),e("div",[e("b",[t._v("交易时间：")]),t._v(t._s(t.payResult.timestamp))])]):t._e(),t.payError?e("div",{staticClass:"pay-error"},[e("div",[e("b",[t._v("错误信息：")]),t._v(t._s(t.payError))])]):t._e(),e("nuxt-link",{attrs:{to:"/"}},[e("el-button",{attrs:{type:"primary",size:"medium"}},[t._v("\n                        返回首页\n                    ")])],1)],1)],2)],1),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("任何与会员相关的问题可联系站长QQ 1733708055，微信 lovesnad、邮箱 imiku.me@gmail.com")]),e("li",[t._v("\n                使用激活码激活的用户如有需要可在 "),e("nuxt-link",{attrs:{to:"/user/query_user"}},[t._v("\n                    查询激活码使用账号\n                ")]),t._v(" 中查询激活的邮箱\n            ")],1),e("li",[t._v("支付完成却未激活会员可联系站长提供支持")]),e("li",[t._v("\n                其他任何问题请查看 "),e("nuxt-link",{attrs:{to:"/docs"}},[t._v("\n                    使用说明\n                ")])],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);