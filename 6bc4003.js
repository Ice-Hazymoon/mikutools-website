(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1474:function(e,n,l){e.exports={}},2570:function(e,n,l){"use strict";l(1474)},3024:function(e,n,l){"use strict";l.r(n);l(23);var t={name:"Kuaidi",data:function(){return{kuaidiId:"",results:null,loading:!1,company:null,list:[{name:"京东快递",value:"jd"},{name:"圆通速递",value:"yuantong"},{name:"邮政包裹信件",value:"youzhengguonei"},{name:"极兔速递",value:"jtexpress"},{name:"申通快递",value:"shentong"},{name:"中通快递",value:"zhongtong"},{name:"韵达速递",value:"yunda"},{name:"百世快运",value:"baishiwuliu"},{name:"优速物流",value:"youshuwuliu"},{name:"AAE全球专递",value:"aae"},{name:"Aramex",value:"aramex"},{name:"百世快运",value:"huitongkuaidi"},{name:"DHL中国件",value:"dhl"},{name:"EMS",value:"ems"},{name:"EMS国际件",value:"emsguoji"},{name:"凡客配送",value:"vancl"},{name:"凡宇快递",value:"fanyukuaidi"},{name:"韩国邮政",value:"koreapost"},{name:"加拿大邮政",value:"canpost"},{name:"加运美",value:"jiayunmeiwuliu"},{name:"嘉里大通",value:"jialidatong"},{name:"京广速递",value:"jinguangsudikuaijian"},{name:"跨越速运",value:"kuayue"},{name:"快捷快递",value:"kuaijiesudi"},{name:"民邦速递",value:"minbangsudi"},{name:"民航快递",value:"minghangkuaidi"},{name:"OCS",value:"ocs"},{name:"全峰快递",value:"quanfengkuaidi"},{name:"全一快递",value:"quanyikuaidi"},{name:"全晨快递",value:"quanchenkuaidi"},{name:"日本邮政",value:"japanposten"},{name:"速尔快递",value:"suer"},{name:"圣安物流",value:"shenganwuliu"},{name:"盛辉物流",value:"shenghuiwuliu"},{name:"天天快递",value:"tiantian"},{name:"TNT",value:"tnt"},{name:"UPS",value:"ups"},{name:"USPS",value:"usps"},{name:"万象物流",value:"wanxiangwuliu"},{name:"信丰物流",value:"xinfengwuliu"},{name:"运通中港快递",value:"ytkd"},{name:"增益速递",value:"zengyisudi"},{name:"德邦快递",value:"debangwuliu"},{name:"天地华宇",value:"tiandihuayu"},{name:"龙邦速递",value:"longbanwuliu"},{name:"中邮物流",value:"zhongyouwuliu"},{name:"传喜物流",value:"chuanxiwuliu"},{name:"中铁飞豹",value:"ztky"},{name:"飞康达",value:"feikangda"},{name:"安能物流",value:"annengwuliu"},{name:"百福东方",value:"baifudongfang"},{name:"大田物流",value:"datianwuliu"},{name:"恒路物流",value:"hengluwuliu"},{name:"佳吉快运",value:"jiajiwuliu"},{name:"康力物流",value:"kangliwuliu"},{name:"联昊通",value:"lianhaowuliu"},{name:"明亮物流",value:"mingliangwuliu"},{name:"穗佳物流",value:"suijiawuliu"},{name:"远成物流",value:"yuanchengwuliu"},{name:"邮政国际包裹",value:"youzhengguoji"},{name:"FedEx国际件",value:"fedex"},{name:"OnTrac",value:"ontrac"},{name:"比利时邮政",value:"bpost"},{name:"Fedex",value:"fedexcn"},{name:"FedEx美国件",value:"fedexus"},{name:"宅急送",value:"zhaijisong"}]}},methods:{query:function(){var e=this;if(this.loading)return!1;this.kuaidiId?(this.loading=!0,this.results=null,this.$axios.post("/kuaidi",{number:this.kuaidiId,company:this.company}).then((function(n){e.loading=!1,e.results=n.data.data})).catch((function(n){e.loading=!1,e.$notify.error({title:"查询失败",message:n})}))):this.$notify.error({title:"查询失败",message:"请输入正确的快递单号"})}}},o=(l(2570),l(6)),m=function(e){e.exports.head={meta:[{hid:"keywords",keywords:"在线快递查询,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"支持国际快递"}],title:"快递查询 - MikuTools"},e.options.toolsMeta={name:"快递查询",path:"/kuaidi",head:{meta:[{hid:"keywords",keywords:"在线快递查询,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"支持国际快递"}],title:"快递查询 - MikuTools"},vip:!1,platforms:["app-android","web-pc","web-mobile"],key:"other",icon:"$tabler$truck"}},component=Object(o.a)(t,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"kuaidi"},[n("nya-container",{attrs:{main:"",title:"快递查询"}},[n("div",{staticClass:"nya-subtitle"},[e._v("\n            请输入快递单号\n        ")]),n("el-input",{attrs:{placeholder:"75135890000000",autofocus:"",clearable:""},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.query.apply(null,arguments)}},model:{value:e.kuaidiId,callback:function(n){e.kuaidiId=n},expression:"kuaidiId"}},[n("el-button",{attrs:{slot:"append",loading:e.loading},on:{click:e.query},slot:"append"},[e._v("\n                "+e._s(e.loading?"查询中":"开始查询")+"\n            ")])],1),n("div",{staticClass:"nya-subtitle mt-15"},[e._v("\n            请选择快递公司\n        ")]),n("el-select",{staticClass:"full-width",attrs:{placeholder:"请选择快递公司"},model:{value:e.company,callback:function(n){e.company=n},expression:"company"}},e._l(e.list,(function(e){return n("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)],1),e.results?n("nya-container",{attrs:{title:"查询成功"}},[n("ul",{staticClass:"nya-list"},[e.results.nu?n("li",[n("b",[e._v("单号：")]),n("span",[e._v(e._s(e.results.nu))])]):e._e(),e.results.company?n("li",[n("b",[e._v("公司：")]),n("span",[e._v(e._s(e.results.company))])]):e._e(),e.results.code?n("li",[n("b",[e._v("代码：")]),n("span",[e._v(e._s(e.results.code))])]):e._e(),e.results.tel?n("li",[n("b",[e._v("电话：")]),n("span",[e._v(e._s(e.results.tel))])]):e._e(),e.results.status?n("li",[n("b",[e._v("状态：")]),n("span",[e._v(e._s(e.results.status))])]):e._e()]),n("el-timeline",{attrs:{reverse:""}},e._l(e.results.messages,(function(l,t){return n("el-timeline-item",{key:t,attrs:{timestamp:l.time,color:0===t?"var(--theme)":t===e.results.messages.length-1?"var(--color-danger)":""}},[e._v("\n                "+e._s(l.context)+"\n            ")])})),1)],1):e._e()],1)}),[],!1,null,null,null);"function"==typeof m&&m(component);n.default=component.exports}}]);