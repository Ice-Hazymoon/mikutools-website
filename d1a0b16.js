(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1054:function(t,e,n){"use strict";(function(e){function n(t){return(t+"===".slice((t.length+3)%4)).replace(/-/g,"+").replace(/_/g,"/")}function r(t){return t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}t.exports={unescape:n,escape:r,encode:function(t,n){return r(e.from(t,n||"utf8").toString("base64"))},decode:function(t,r){return e.from(n(t),"base64").toString(r||"utf8")}}}).call(this,n(964).Buffer)},1475:function(t,e,n){t.exports={}},2571:function(t,e,n){"use strict";n(1475)},3026:function(t,e,n){"use strict";n.r(e);n(528),n(13),n(46),n(79),n(32),n(59),n(988);var r=n(1159),d=(n(1208),n(1209),n(1054)),o=n.n(d),l=n(47),c=n.n(l),f={name:"Lifecount",components:{DatePicker:r.default},data:function(){return{date:"",defaultValue:c()().subtract(18,"year").format("YYYY-MM-DD"),updateDate:null,dateData:!1}},computed:{results:function(){if(!this.date.trim())return!1;var t=[],e=c()(this.date),n=c()(),r=1728,d=n.diff(e,"day"),o=e.add(80,"year").diff(n,"day"),l=e.add(65,"year").diff(n,"day"),f=e.add(46,"year").diff(n,"day"),v=e.add(52,"year").diff(n,"day"),h=~~(d/72),_=~~(8*o/r),m=l<=0?0:~~(8*l/r),y=f<=0?0:~~(5*f/r),C=v<=0?0:~~(v/31*24/r),k=400-(_+h+m+y+C);k<=0&&(k=0);var data={past:h,sleep:_,work:m,child:y,parents:C,surplus:k};return Object.keys(data).forEach((function(e){for(var i=0;i<data[e];i++)t.push({type:e})})),{blockArr:t,length:data}},share:function(){return"https://".concat(this.$store.state.env.domain).concat(this.$route.path,"?k=").concat(o.a.encode(this.date))}},watch:{date:function(t){if(!t)return clearInterval(this.updateDate),this.dateData=!1,!1;this.setDateData(),this.updateDate=setInterval(this.setDateData,1e3)}},mounted:function(){if(this.$route.query.k)try{var t=o.a.decode(this.$route.query.k);this.date=t}catch(t){}},methods:{setDateData:function(){var t=c()(this.date),e=c()(),n=t.add(80,"year");this.dateData={past:{year:e.diff(t,"year",!0).toFixed(1),month:e.diff(t,"month",!0).toFixed(1),day:e.diff(t,"day",!0).toFixed(1),hour:e.diff(t,"hour",!0).toFixed(1),minute:e.diff(t,"minute",!0).toFixed(1),second:e.diff(t,"second",!0).toFixed(1)},have:{year:n.diff(e,"year",!0).toFixed(1),month:n.diff(e,"month",!0).toFixed(1),day:n.diff(e,"day",!0).toFixed(1),hour:n.diff(e,"hour",!0).toFixed(1),minute:n.diff(e,"minute",!0).toFixed(1),second:n.diff(e,"second",!0).toFixed(1)}}},disabledDate:function(t){var e=c()(t);return!!e.isBefore(c()().subtract(79,"year"))||!!e.isAfter(c()().subtract(1,"year"))}}},v=(n(2571),n(6)),h=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"人生小格,人生进度条,lifecount,生命进度,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"查看你的人生进度"}],title:"人生小格 - MikuTools"},t.options.toolsMeta={name:"人生小格",path:"/lifecount",head:{meta:[{hid:"keywords",keywords:"人生小格,人生进度条,lifecount,生命进度,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"查看你的人生进度"}],title:"人生小格 - MikuTools"},hot:"hot",vip:!1,platforms:["app-android","web-pc","web-mobile"],key:["other","hot"],icon:"$tabler$brand-trello"}},component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lifecount"},[e("nya-container",{attrs:{main:"",title:"人生小格"}},[e("date-picker",{staticClass:"nya-input",attrs:{editable:!1,placeholder:"选择你的生日","default-value":t.defaultValue,"value-type":"format","disabled-date":t.disabledDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t.dateData?e("nya-container",{attrs:{title:"已经过去了"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"list"},[e("div",{staticClass:"name"},[t._v("\n                    "+t._s(t.dateData.past.year)),e("small",[t._v("年")])]),e("div",{staticClass:"date"},[t._v("\n                    "+t._s(t.dateData.past.hour)),e("small",[t._v("时")])])]),e("div",{staticClass:"list"},[e("div",{staticClass:"name"},[t._v("\n                    "+t._s(t.dateData.past.month)),e("small",[t._v("月")])]),e("div",{staticClass:"date"},[t._v("\n                    "+t._s(t.dateData.past.minute)),e("small",[t._v("分")])])]),e("div",{staticClass:"list"},[e("div",{staticClass:"name"},[t._v("\n                    "+t._s(t.dateData.past.day)),e("small",[t._v("天")])]),e("div",{staticClass:"date"},[t._v("\n                    "+t._s(t.dateData.past.second)),e("small",[t._v("秒")])])])])]):t._e(),t.dateData?e("nya-container",{attrs:{title:"剩下的时间"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"list"},[e("div",{staticClass:"name"},[t._v("\n                    "+t._s(t.dateData.have.year)),e("small",[t._v("年")])]),e("div",{staticClass:"date"},[t._v("\n                    "+t._s(t.dateData.have.hour)),e("small",[t._v("时")])])]),e("div",{staticClass:"list"},[e("div",{staticClass:"name"},[t._v("\n                    "+t._s(t.dateData.have.month)),e("small",[t._v("月")])]),e("div",{staticClass:"date"},[t._v("\n                    "+t._s(t.dateData.have.minute)),e("small",[t._v("分")])])]),e("div",{staticClass:"list"},[e("div",{staticClass:"name"},[t._v("\n                    "+t._s(t.dateData.have.day)),e("small",[t._v("天")])]),e("div",{staticClass:"date"},[t._v("\n                    "+t._s(t.dateData.have.second)),e("small",[t._v("秒")])])])])]):t._e(),t.results?e("nya-container",{attrs:{title:"你的人生进度"}},[e("div",{staticClass:"box"},t._l(t.results.blockArr,(function(n,r){return e("div",{key:r,staticClass:"block",class:[n.type,{retired:323===r&&r>=t.results.length.past},{flash:r===t.results.length.past-1}]})})),0)]):t._e(),t.results?e("nya-container",{attrs:{title:"分享链接"}},[e("nya-copy",{attrs:{copy:t.share+"\n这是我的人生进度，你也快来查询一下吧~"}},[e("div",{domProps:{textContent:t._s(t.share)}})])],1):t._e(),e("nya-container",{attrs:{title:"说明"}},[e("small",[t._v("参考了小程序"),e("b",[t._v(" lifecount ")]),t._v("而制作的网页版本")]),e("b",[t._v("假设我们的寿命是80岁,分为400个方块。")]),e("div",{staticClass:"hint"},[e("li",[e("div",{staticClass:"block past"}),t._v(" 你已经走过的生命")]),e("li",[e("div",{staticClass:"block sleep"}),t._v(" 如果你平均每天休息 8 小时，这是你余下生命里睡眠占用的时间")]),e("li",[e("div",{staticClass:"block work"}),t._v(" 如果你 65 岁退休，退休前平均每天工作 8 小时，这是你余下生命里工作占用的时间")]),e("li",[e("div",{staticClass:"block retired"}),t._v(" 65 岁，你退休了")]),e("li",[e("div",{staticClass:"block child"}),t._v(" 如果你 28 岁生孩子，孩子18岁出门上大学，这 18 年里你平均每天能花 5 个小时陪伴孩子，这里是你余下生命里所用去的时间")]),e("li",[e("div",{staticClass:"block parents"}),t._v(" 如果你每个月能看望父母一天，在他们 80 岁前，这是你的余生里还能陪伴他们的时光")]),e("li",[e("div",{staticClass:"block surplus"}),t._v(" 除了以上之外，你剩下的所有日子")])]),e("li",[t._v("数据仅供娱乐，人生苦短，继续努力吧~")])])],1)}),[],!1,null,null,null);"function"==typeof h&&h(component);e.default=component.exports},988:function(t,e,n){"use strict";var r=n(2),d=n(4),o=n(62),l=n(532),c=n(530),f=n(5),v=RangeError,h=String,_=Math.floor,m=d(c),y=d("".slice),C=d(1..toFixed),k=function(t,e,n){return 0===e?n:e%2==1?k(t,e-1,n*t):k(t*t,e/2,n)},D=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=_(r/1e7)},x=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=_(n/t),n=n%t*1e7},w=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+m("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:f((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!f((function(){C({})}))},{toFixed:function(t){var e,n,r,d,c=l(this),f=o(t),data=[0,0,0,0,0,0],_="",C="0";if(f<0||f>20)throw v("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return h(c);if(c<0&&(_="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*k(2,69,1))-69)<0?c*k(2,-e,1):c/k(2,e,1),n*=4503599627370496,(e=52-e)>0){for(D(data,0,n),r=f;r>=7;)D(data,1e7,0),r-=7;for(D(data,k(10,r,1),0),r=e-1;r>=23;)x(data,1<<23),r-=23;x(data,1<<r),D(data,1,1),x(data,2),C=w(data)}else D(data,0,n),D(data,1<<-e,0),C=w(data)+m("0",f);return C=f>0?_+((d=C.length)<=f?"0."+m("0",f-d)+C:y(C,0,d-f)+"."+y(C,d-f)):_+C}})}}]);