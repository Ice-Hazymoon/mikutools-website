(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{3060:function(e,t,o){"use strict";o.r(t);o(528);var l=o(2861),r=o.n(l);r.a.defaults({fontPath:"".concat("https://api.okmiku.com","/public/files/fonts/figlet")});var n={name:"Taag",data:function(){return{result:"",loading:!1,formData:{text:"MikuTools",font:"Standard",horizontalLayout:"default",verticalLayout:"default"},fontOptions:[{label:"Featured FIGlet Fonts",options:["3D Diagonal","Alpha","Acrobatic","Avatar","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big","Blocks","Bulbhead","Cards","Chiseled","Crawford2","Crazy","Dancing Font","Doh","Doom","Efti Wall","Epic","Fire Font-k","Fire Font-s","Flower Power","Fun Face","Fun Faces","Ghost","Graceful","Graffiti","Impossible","Isometric1","Isometric2","Isometric3","Isometric4","JS Bracket Letters","Lil Devil","Merlin1","Modular","Ogre","Patorjk's Cheese","Patorjk-HeX","Rectangles","Slant","Slant Relief","Small","Small Slant","Small Isometric1","Soft","Standard","Star Wars","Sub-Zero","Swamp Land","Sweet","Train","Twisted","Wet Letter","Varsity"]},{label:"ANSI FIGlet Fonts",options:["3D-ASCII","ANSI Regular","ANSI Shadow","Bloody","Calvin S","Delta Corps Priest 1","Electronic","Elite","Stronger Than All","THIS","The Edge"]},{label:"Regular FIGlet Fonts",options:["1Row","3-D","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ASCII New Roman","Alligator","Alligator2","Alphabet","Arrows","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big Chief","Bigfig","Binary","Block","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Caligraphy","Caligraphy2","Catwalk","Chunky","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Crawford","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DWhistled","Decimal","Def Leppard","Diamond","Diet Cola","Digital","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Water","Fender","Filter","Flipped","Four Tops","Fraktur","Fuzzy","Georgi16","Georgia11","Ghoulish","Glenyn","Goofy","Gothic","Gradient","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Invita","Italic","Ivrit","JS Block Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","LCD","Larry 3D","Lean","Letters","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin2","Mike","Mini","Mirror","Mnemonic","Morse","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Old Banner","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Relief","Relief2","Reverse","Roman","Rotated","Rounded","Rowan Cap","Rozzo","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shadow","Shimrod","Short","Slide","Small Caps","Small Keyboard","Small Poison","Small Script","Small Shadow","Small Tengwar","Speed","Spliff","Stacey","Stampate","Stampatello","Star Strips","Stellar","Stforek","Stick Letters","Stop","Straight","Swan","Tanja","Tengwar","Term","Test1","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tombstone","Trek","Tsalagi","Tubular","Two Point","USA Flag","Univers","Wavy","Weird","Whimsy","Wow"]}],layoutOptions:[{label:"默认 - 设计字体时的默认间距",value:"default"},{label:"展开 - 尽可能展开字符间距",value:"full"},{label:"紧凑 - 字符之间贴紧",value:"fitted"},{label:"controlled smushing",value:"controlled smushing"},{label:"universal smushing",value:"universal smushing"}]}},watch:{formData:{deep:!0,handler:function(){this.generator()}}},mounted:function(){this.generator()},methods:{generator:function(){var e=this;this.loading=!0;var text=this.formData.text;r.a.text(text,this.formData,(function(t,o){e.loading=!1,t?e.$message.error("生成失败:"+t):e.result=o}))}}},c=o(6),d=function(e){e.exports.head={meta:[{hid:"keywords",keywords:"TAAG,文本转字符画,终端字符画,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"文本转 ASCII 艺术字 (TAAG)"}],title:"艺术字符生成 - MikuTools"},e.options.toolsMeta={name:"艺术字符生成",path:"/taag",head:{meta:[{hid:"keywords",keywords:"TAAG,文本转字符画,终端字符画,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"文本转 ASCII 艺术字 (TAAG)"}],title:"艺术字符生成 - MikuTools"},vip:!1,platforms:["app-android","web-pc","web-mobile"],key:"text",icon:"$tabler$source-code"}},component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"taag"},[t("nya-container",{attrs:{main:"",title:"字符转画"}},[t("el-form",[t("el-form-item",[t("div",{staticClass:"nya-subtitle"},[e._v("\n                    请选择字体\n                ")]),t("el-select",{staticStyle:{width:"100%"},attrs:{"popper-append-to-body":!1,filterable:""},model:{value:e.formData.font,callback:function(t){e.$set(e.formData,"font",t)},expression:"formData.font"}},e._l(e.fontOptions,(function(o){return t("el-option-group",{key:o.label,attrs:{label:o.label}},e._l(o.options,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)})),1)],1),t("el-form-item",[t("div",{staticClass:"nya-subtitle"},[e._v("\n                    请选择字符间宽\n                ")]),t("el-select",{staticStyle:{width:"100%"},attrs:{"popper-append-to-body":!1},model:{value:e.formData.horizontalLayout,callback:function(t){e.$set(e.formData,"horizontalLayout",t)},expression:"formData.horizontalLayout"}},e._l(e.layoutOptions,(function(e){return t("el-option",{key:e.value+"1",attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",[t("div",{staticClass:"nya-subtitle"},[e._v("\n                    请选择字符间高\n                ")]),t("el-select",{staticStyle:{width:"100%"},attrs:{"popper-append-to-body":!1},model:{value:e.formData.verticalLayout,callback:function(t){e.$set(e.formData,"verticalLayout",t)},expression:"formData.verticalLayout"}},e._l(e.layoutOptions,(function(e){return t("el-option",{key:e.value+"2",attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",[t("div",{staticClass:"nya-subtitle"},[e._v("\n                    请输入字符\n                ")]),t("el-input",{attrs:{type:"textarea"},model:{value:e.formData.text,callback:function(t){e.$set(e.formData,"text",t)},expression:"formData.text"}})],1)],1)],1),e.result.trim()?t("nya-container",{attrs:{title:"结果"}},[t("nya-copy",{attrs:{copy:e.result}},[t("pre",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"line-height":"normal","word-spacing":"normal"}},[e._v(e._s(e.result))])])],1):e._e(),t("nya-container",{attrs:{title:"说明"}},[t("ul",{staticClass:"nya-list"},[t("li",[t("b",[e._v("所有字体均仅支持英文字母，不支持数字或符号。")])]),t("li",[e._v("点击结果区域即可复制字符")]),t("li",[e._v("\n                项目字体均来自 "),t("app-link",{attrs:{href:"https://github.com/patorjk/figlet.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("\n                    figlet.js\n                ")]),e._v("。\n            ")],1)])])],1)}),[],!1,null,null,null);"function"==typeof d&&d(component);t.default=component.exports}}]);