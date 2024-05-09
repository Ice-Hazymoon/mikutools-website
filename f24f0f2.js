(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1545:function(t,e,n){t.exports={}},2860:function(t,e,n){"use strict";n(1545)},3059:function(t,e,n){"use strict";n.r(e);n(528);var r,o=n(3),c=(n(25),n(175),n(176),n(21),n(58),n(980),n(60),n(32),n(13),n(39),n(33),n(71),n(69),n(565),n(235)),l=n.n(c),use=n(1575).use,d=n(2927).CanvasRenderer,m=n(2925).LineChart,h=n(2926),f=h.GridComponent,v=h.TooltipComponent;r=(r=n(2929)).default,use([d,m,f,v]);var y={name:"StarHistory",components:{VChart:r},provide:{},data:function(){return{repo:"",token:"",loading:!1,sampleNum:10,option:{tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:[{type:"time",show:!0,axisLabel:{hideOverlap:!0,show:!0,interval:0,formatter:"{yyyy}-{MM}"},axisTick:{alignWithLabel:!0,show:!0}}],yAxis:[{type:"value",position:"left"}],series:[{name:"Star",type:"line",smooth:!0,data:[]}]}}},methods:{query:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,t.option.series[0].data=[],t.repo.includes("github.com")?(t.repo+="/",t.repo=/github\.com\/(\S*?\/\S*?)[/#?]/.exec(t.repo)[1]):t.repo=""==t.repo?"Ice-Hazymoon/MikuTools":t.repo,t.$db.read(),!(n=t.$db.data.tool.star_history[t.repo])){e.next=10;break}t.loading=!1,t.option.series[0].data=n.map((function(t){return[t.date,t.starNum]})),e.next=24;break;case 10:return e.prev=10,e.next=13,t.getStarHistory(t.repo,t.token?t.token:void 0);case 13:r=e.sent,t.loading=!1,t.option.series[0].data=r.map((function(t){return[t.date,t.starNum]})),t.$db.data.tool.star_history[t.repo]=r,t.$db.write(),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(10),t.loading=!1,e.t0.message.indexOf("403")>=0?t.$notify.error({title:"统计失败",message:"请求次数过多，请填写 Token 以获取更多配额"}):t.$notify.error({title:"统计失败",message:e.t0});case 24:case"end":return e.stop()}}),e,null,[[10,20]])})))()},range:function(t){return Array.apply(null,{length:t}).map((function(t,i){return i+1}))},generateUrls:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c,d,link,m,h,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=l.a.create({headers:{Accept:"application/vnd.github.v3.star+json"},params:{access_token:e}}),c="https://api.github.com/repos/".concat(t,"/stargazers"),r.next=4,o.get(c,{auth:!1,headers:{Accept:"application/vnd.github.v3.star+json"},params:{access_token:e}});case 4:return d=r.sent,link=d.headers.link,m=link?/next.*?page=(\d*).*?last/.exec(link)[1]:1,h=m<=n.sampleNum?n.range(m).slice(1,m):n.range(n.sampleNum).map((function(t){return Math.round(t/n.sampleNum*m)-1})),f=h.map((function(t){return"".concat(c,"?page=").concat(t)})),r.abrupt("return",{firstPage:d,sampleUrls:f,pageIndexes:h});case 10:case"end":return r.stop()}}),r)})))()},getStarHistory:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c,d,m,h,f,v,y,k,x,w,_,S,M,C,A,T;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=l.a.create({headers:{Accept:"application/vnd.github.v3.star+json"},params:{access_token:e}}),r.next=3,n.generateUrls(t,e);case 3:return c=r.sent,d=c.sampleUrls,m=c.pageIndexes,h=c.firstPage,f=[h].concat(d.map((function(t){return o.get(t,{auth:!1,headers:{Accept:"application/vnd.github.v3.star+json"},params:{access_token:e}})}))),r.next=10,Promise.all(f);case 10:return v=r.sent,y=null,m[m.length-1]>n.sampleNum?y=m.map((function(p,i){return{date:v[i+1].data[0].starred_at.slice(0,10),starNum:30*(p-1)}})):(k=v.reduce((function(t,e){return t.concat(e.data)}),[]),x=new Date(k[0].starred_at),w=Math.round(new Date-x)/864e5,_=Array.from(new Array(50)).map((function(t,i){var e=new Date(x);return e.setDate(e.getDate()+Math.floor(w/50*(i+1))),e.toISOString().slice(0,10)}),[]),y=_.map((function(t){var e=0,n=k.find((function(n,i){return n.starred_at.slice(0,10)>=t&&(e=i+1,!0)}));return n&&{date:n.starred_at.slice(0,10),starNum:e}})).filter((function(t){return t}))),r.next=15,o.get("https://api.github.com/repos/".concat(t),{auth:!1,headers:{Accept:"application/vnd.github.v3.star+json"},params:{access_token:e}});case 15:return S=r.sent,M=S.data.stargazers_count,C=new Date,A=C.getMonth()+1>10?C.getMonth()+1:"0".concat(C.getMonth()+1),T=C.getDate()>10?C.getDate():"0".concat(C.getDate()),y.push({date:"".concat(C.getFullYear(),"-").concat(A,"-").concat(T),starNum:M}),r.abrupt("return",y);case 22:case"end":return r.stop()}}),r)})))()}}},k=(n(2860),n(6)),x=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"GitHub Star历史,Star历史查询,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"GitHub Star历史记录查询"}],title:"Star 历史查询 - MikuTools"},t.options.toolsMeta={name:"Star 历史查询",path:"/star_history",head:{meta:[{hid:"keywords",keywords:"GitHub Star历史,Star历史查询,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"GitHub Star历史记录查询"}],title:"Star 历史查询 - MikuTools"},vip:!1,platforms:["web-pc","web-mobile"],key:"development",icon:"$tabler$brand-github"}},component=Object(k.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"star_history"},[e("nya-container",{attrs:{main:"",title:"Star 历史查询"}},[e("div",{staticClass:"nya-subtitle"},[t._v("\n            请输入GitHub项目地址\n        ")]),e("el-input",{staticClass:"mb-15",attrs:{autofocus:"",disabled:t.loading,placeholder:"https://github.com/Ice-Hazymoon/MikuTools"},model:{value:t.repo,callback:function(e){t.repo="string"==typeof e?e.trim():e},expression:"repo"}}),e("div",{staticClass:"nya-subtitle"},[t._v("\n            Access Token\n        ")]),e("el-input",{staticClass:"mb-15",attrs:{autofocus:"",disabled:t.loading,placeholder:"私有仓库或访问超过限制则必填"},model:{value:t.token,callback:function(e){t.token="string"==typeof e?e.trim():e},expression:"token"}}),e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.query}},[t._v("\n            "+t._s(t.loading?"统计中":"开始统计")+"\n        ")])],1),t.option.series[0].data.length?e("nya-container",{attrs:{title:"查询结果"}},[e("div",{staticClass:"chart-box"},[e("div",{staticClass:"chart-canvas"},[e("client-only",[e("v-chart",{staticClass:"chart",attrs:{option:t.option}})],1)],1)])]):t._e(),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("\n                Access Token 申请地址："),e("app-link",{attrs:{href:"https://github.com/settings/tokens/new?scopes=repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                    https://github.com/settings/tokens/new?scopes=repo\n                ")])],1),e("li",[t._v("所有过程都不会经过 MikuTools 的服务器，本站不会记录你的 Access Token，可放心使用")])])])],1)}),[],!1,null,null,null);"function"==typeof x&&x(component);e.default=component.exports}}]);