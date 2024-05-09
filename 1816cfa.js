(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1455:function(t,e,n){t.exports={}},2525:function(t,e,n){"use strict";n(1455)},3005:function(t,e,n){"use strict";n.r(e);var o={name:"Deepl",data:function(){return{placeholder:"Hello World!",input:"",loading:!1,result:"",source:"AUTO",target:"ZH",source_list:{AUTO:"自动检测",BG:"保加利亚语",CS:"捷克语",DA:"丹麦语",DE:"德语",EL:"希腊语",EN:"英语",ES:"西班牙语",ET:"爱沙尼亚语",FI:"芬兰语",FR:"法语",HU:"匈牙利语",ID:"印度尼西亚语",IT:"意大利语",JA:"日语",KO:"韩语",LT:"立陶宛语",LV:"拉脱维亚语",NB:"挪威语（博克马尔）",NL:"荷兰语",PL:"波兰语",PT:"葡萄牙语",RO:"罗马尼亚语",RU:"俄语",SK:"斯洛伐克语",SL:"斯洛文尼亚语",SV:"瑞典语",TR:"土耳其语",UK:"乌克兰语",ZH:"中文"},target_list:{BG:"保加利亚语",CS:"捷克语",DA:"丹麦语",DE:"德语",EL:"希腊语","en-GB":"英语（英国）","en-US":"英语（美国）",ES:"西班牙语",ET:"爱沙尼亚语",FI:"芬兰语",FR:"法语",HU:"匈牙利语",ID:"印度尼西亚语",IT:"意大利语",JA:"日语",KO:"韩语",LT:"立陶宛语",LV:"拉脱维亚语",NB:"挪威语（博克马尔）",NL:"荷兰语",PL:"波兰语","PT-BR":"葡萄牙语（巴西）","PT-PT":"葡萄牙语（葡萄牙除巴西外的所有变体）",RO:"罗马尼亚语",RU:"俄语",SK:"斯洛伐克语",SL:"斯洛文尼亚语",SV:"瑞典语",TR:"土耳其语",UK:"乌克兰语",ZH:"中文（简体）"}}},computed:{resultText:function(){return this.result.result.texts[0]}},methods:{translate:function(){var t=this;this.input&&(this.result="",this.loading=!0,this.$axios.post("/deepl/translate",{translate_text:this.input,source_lang:this.source,target_lang:this.target}).then((function(e){t.loading=!1,t.result=e.data.data})).catch((function(e){t.loading=!1,t.$notify.error({title:"翻译失败",message:e})})))}}},l=(n(2525),n(6)),r=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"DeepL Translator,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"世界上最好的翻译服务"}],title:"DeepL Translator - MikuTools"},t.options.toolsMeta={name:"DeepL Translator",path:"/deepl",head:{meta:[{hid:"keywords",keywords:"DeepL Translator,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"世界上最好的翻译服务"}],title:"DeepL Translator - MikuTools"},vip:!1,platforms:["app-android","web-pc","web-mobile"],key:["text","hot"],icon:"$svg$custom-deepl"}},component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"deepl"},[e("nya-container",{attrs:{main:"",title:"DeepL Translator"}},[e("div",{staticClass:"nya-subtitle"},[t._v("\n            输入文本开始翻译\n        ")]),e("el-input",{staticClass:"mb-15",attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:t.placeholder,autofocus:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),e("div",{staticClass:"mb-15 flex"},[e("el-select",{attrs:{slot:"prepend","popper-append-to-body":!1,placeholder:"请选择"},slot:"prepend",model:{value:t.source,callback:function(e){t.source=e},expression:"source"}},t._l(t.source_list,(function(t,n){return e("el-option",{key:n,attrs:{label:t,value:n}})})),1),e("div",{staticClass:"eva eva-swap-outline"}),e("el-select",{attrs:{slot:"prepend","popper-append-to-body":!1,placeholder:"请选择"},slot:"prepend",model:{value:t.target,callback:function(e){t.target=e},expression:"target"}},t._l(t.target_list,(function(t,n){return e("el-option",{key:n,attrs:{label:t,value:n}})})),1)],1),e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.translate}},[t._v("\n            "+t._s(t.loading?"翻译中":"开始翻译")+"\n        ")])],1),t.result?e("nya-container",{attrs:{main:"",title:"翻译结果"}},[e("div",{staticClass:"lang"},[t._v("\n            "+t._s(t.source_list[t.result.source_lang])+" "),e("i",{staticClass:"eva eva-arrowhead-right-outline"}),t._v(" "+t._s(t.target_list[t.result.target_lang])+"\n        ")]),e("nya-copy",{staticClass:"mt-15",attrs:{copy:t.resultText.text}},[e("div",{domProps:{textContent:t._s(t.resultText.text)}})]),e("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n            其他结果\n        ")]),t._l(t.resultText.alternatives,(function(n,o){return e("nya-copy",{key:o,staticClass:"mt-15",attrs:{copy:n.text}},[e("div",{domProps:{textContent:t._s(n.text)}})])}))],2):t._e(),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("该功能正在测试中，期间可能不稳定，如有问题请联系 imiku.me@gmail.com")])])])],1)}),[],!1,null,null,null);"function"==typeof r&&r(component);e.default=component.exports}}]);