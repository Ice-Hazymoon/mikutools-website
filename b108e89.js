(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{2951:function(t,e,o){"use strict";o.r(e);o(173),o(21),o(68);var n={toAlphabet:function(t,e){var base=e.length,o=[];do{o.push(t%base),t=Math.floor(t/base)}while(t>0);for(var n=[];o.length;)n.push(e[o.pop()]);return n.join("")},fromAlphabet:function(t,e){for(var o,base=e.length,n=0,r=0;t.length;)o=t[t.length-1],t=t.substr(0,t.length-1),r+=Math.pow(base,n)*e.indexOf(o),n++;return r},NUMERALS:"0123456789",LETTERS_LOWERCASE:"abcdefghijklmnopqrstuvwxyz"};n.LETTERS_UPPERCASE=n.LETTERS_LOWERCASE.toUpperCase(),n.KNOWN_ALPHABETS={};for(var i=2;i<=10;i++)n.KNOWN_ALPHABETS[i]=n.NUMERALS.substr(0,i);for(var r=11;r<=16;r++)n.KNOWN_ALPHABETS[r]=n.NUMERALS+n.LETTERS_LOWERCASE.substr(0,r-10);function l(base,t){n["toBase"+base]=function(e){return n.toAlphabet(e,t)},n["fromBase"+base]=function(e){return n.fromAlphabet(e,t)}}for(var base in n.KNOWN_ALPHABETS[36]=n.NUMERALS+n.LETTERS_LOWERCASE,n.KNOWN_ALPHABETS[62]=n.NUMERALS+n.LETTERS_LOWERCASE+n.LETTERS_UPPERCASE,n.KNOWN_ALPHABETS[26]=n.LETTERS_LOWERCASE,n.KNOWN_ALPHABETS[52]=n.LETTERS_LOWERCASE+n.LETTERS_UPPERCASE,n.KNOWN_ALPHABETS[64]=n.LETTERS_UPPERCASE+n.LETTERS_LOWERCASE+n.NUMERALS+"+/",n.KNOWN_ALPHABETS[58]=n.KNOWN_ALPHABETS[62].replace(/[0OlI]/g,""),n.KNOWN_ALPHABETS[32]=n.NUMERALS+n.LETTERS_UPPERCASE.replace(/[ILOU]/g,""),n.KNOWN_ALPHABETS)Object.prototype.hasOwnProperty.call(n,base)&&l(base,n.KNOWN_ALPHABETS[base]);n.toBase=function(t,base){return n.toAlphabet(t,n.KNOWN_ALPHABETS[base])},n.fromBase=function(t,base){return n.fromAlphabet(t,n.KNOWN_ALPHABETS[base])};var E=n,_={name:"HexConvert",data:function(){return{value:"12345678",hex:10}},computed:{result:function(){var t=E.fromBase(this.value,this.hex);return{base_2:E.toBase(t,2),base_8:E.toBase(t,8),base_10:E.toBase(t,10),base_16:E.toBase(t,16),base_26:E.toBase(t,26),base_32:E.toBase(t,32),base_36:E.toBase(t,36),base_52:E.toBase(t,52),base_58:E.toBase(t,58),base_62:E.toBase(t,62)}}}},c=o(6),A=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"二进制-进制转换,六进制-进制转换,十进制-进制转换,十六进制-进制转换,三十二进制-进制转换,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"计算机进制转换"}],title:"进制转换 - MikuTools"},t.options.toolsMeta={name:"进制转换",path:"/hexconvert",head:{meta:[{hid:"keywords",keywords:"二进制-进制转换,六进制-进制转换,十进制-进制转换,十六进制-进制转换,三十二进制-进制转换,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"计算机进制转换"}],title:"进制转换 - MikuTools"},vip:!1,platforms:["app-android","web-pc","web-mobile"],key:"data-conversion",icon:"$tabler$binary"}},component=Object(c.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"hex_convert"},[e("nya-container",{attrs:{main:"",title:"进制转换"}},[e("div",{staticClass:"nya-subtitle"},[t._v("\n            输入内容\n        ")]),e("el-input",{staticClass:"mb-15",attrs:{placeholder:"请输入要处理的内容",autofocus:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[e("el-select",{attrs:{slot:"prepend","popper-append-to-body":!1,placeholder:"请选择进制"},slot:"prepend",model:{value:t.hex,callback:function(e){t.hex=e},expression:"hex"}},[e("el-option",{attrs:{label:"2进制",value:2}}),e("el-option",{attrs:{label:"8进制",value:8}}),e("el-option",{attrs:{label:"10进制",value:10}}),e("el-option",{attrs:{label:"16进制",value:16}}),e("el-option",{attrs:{label:"26进制",value:26}}),e("el-option",{attrs:{label:"32进制",value:32}}),e("el-option",{attrs:{label:"36进制",value:36}}),e("el-option",{attrs:{label:"52进制",value:52}}),e("el-option",{attrs:{label:"58进制",value:58}}),e("el-option",{attrs:{label:"62进制",value:62}})],1)],1),e("nya-copy",{attrs:{copy:t.result.base_2}},[e("span",{domProps:{textContent:t._s("二进制："+t.result.base_2)}})]),e("nya-copy",{attrs:{copy:t.result.base_8}},[e("span",{domProps:{textContent:t._s("八进制："+t.result.base_8)}})]),e("nya-copy",{attrs:{copy:t.result.base_10}},[e("span",{domProps:{textContent:t._s("十进制："+t.result.base_10)}})]),e("nya-copy",{attrs:{copy:t.result.base_16}},[e("span",{domProps:{textContent:t._s("十六进制："+t.result.base_16)}})]),e("nya-copy",{attrs:{copy:t.result.base_26}},[e("span",{domProps:{textContent:t._s("二十六进制："+t.result.base_26)}})]),e("nya-copy",{attrs:{copy:t.result.base_32}},[e("span",{domProps:{textContent:t._s("三十二进制："+t.result.base_32)}})]),e("nya-copy",{attrs:{copy:t.result.base_36}},[e("span",{domProps:{textContent:t._s("三十六进制："+t.result.base_36)}})]),e("nya-copy",{attrs:{copy:t.result.base_52}},[e("span",{domProps:{textContent:t._s("五十二进制："+t.result.base_52)}})]),e("nya-copy",{attrs:{copy:t.result.base_58}},[e("span",{domProps:{textContent:t._s("五十八进制："+t.result.base_58)}})]),e("nya-copy",{attrs:{copy:t.result.base_62}},[e("span",{domProps:{textContent:t._s("六十二进制："+t.result.base_62)}})])],1),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("请规范的输入相应进制，否则将无法正确计算")])])])],1)}),[],!1,null,null,null);"function"==typeof A&&A(component);e.default=component.exports}}]);