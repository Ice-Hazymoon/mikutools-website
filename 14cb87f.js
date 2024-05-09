(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1557:function(t,e,n){"use strict";const r=n(1558),o={allowBooleanAttributes:!1,unpairedTags:[]};function l(t){return" "===t||"\t"===t||"\n"===t||"\r"===t}function c(t,i){const e=i;for(;i<t.length;i++)if("?"!=t[i]&&" "!=t[i]);else{const n=t.substr(e,i-e);if(i>5&&"xml"===n)return v("InvalidXml","XML declaration allowed only at the start of the document.",y(t,i));if("?"==t[i]&&">"==t[i+1]){i++;break}}return i}function h(t,i){if(t.length>i+5&&"-"===t[i+1]&&"-"===t[i+2]){for(i+=3;i<t.length;i++)if("-"===t[i]&&"-"===t[i+1]&&">"===t[i+2]){i+=2;break}}else if(t.length>i+8&&"D"===t[i+1]&&"O"===t[i+2]&&"C"===t[i+3]&&"T"===t[i+4]&&"Y"===t[i+5]&&"P"===t[i+6]&&"E"===t[i+7]){let e=1;for(i+=8;i<t.length;i++)if("<"===t[i])e++;else if(">"===t[i]&&(e--,0===e))break}else if(t.length>i+9&&"["===t[i+1]&&"C"===t[i+2]&&"D"===t[i+3]&&"A"===t[i+4]&&"T"===t[i+5]&&"A"===t[i+6]&&"["===t[i+7])for(i+=8;i<t.length;i++)if("]"===t[i]&&"]"===t[i+1]&&">"===t[i+2]){i+=2;break}return i}e.validate=function(t,e){e=Object.assign({},o,e);const n=[];let f=!1,d=!1;"\ufeff"===t[0]&&(t=t.substr(1));for(let i=0;i<t.length;i++)if("<"===t[i]&&"?"===t[i+1]){if(i+=2,i=c(t,i),i.err)return i}else{if("<"!==t[i]){if(l(t[i]))continue;return v("InvalidChar","char '"+t[i]+"' is not expected.",y(t,i))}{let o=i;if(i++,"!"===t[i]){i=h(t,i);continue}{let T=!1;"/"===t[i]&&(T=!0,i++);let A="";for(;i<t.length&&">"!==t[i]&&" "!==t[i]&&"\t"!==t[i]&&"\n"!==t[i]&&"\r"!==t[i];i++)A+=t[i];if(A=A.trim(),"/"===A[A.length-1]&&(A=A.substring(0,A.length-1),i--),x=A,!r.isName(x)){let e;return e=0===A.trim().length?"Invalid space after '<'.":"Tag '"+A+"' is an invalid name.",v("InvalidTag",e,y(t,i))}const P=m(t,i);if(!1===P)return v("InvalidAttr","Attributes for '"+A+"' have open quote.",y(t,i));let w=P.value;if(i=P.index,"/"===w[w.length-1]){const n=i-w.length;w=w.substring(0,w.length-1);const r=N(w,e);if(!0!==r)return v(r.err.code,r.err.msg,y(t,n+r.err.line));f=!0}else if(T){if(!P.tagClosed)return v("InvalidTag","Closing tag '"+A+"' doesn't have proper closing.",y(t,i));if(w.trim().length>0)return v("InvalidTag","Closing tag '"+A+"' can't have attributes or invalid starting.",y(t,o));{const e=n.pop();if(A!==e.tagName){let n=y(t,e.tagStartPos);return v("InvalidTag","Expected closing tag '"+e.tagName+"' (opened in line "+n.line+", col "+n.col+") instead of closing tag '"+A+"'.",y(t,o))}0==n.length&&(d=!0)}}else{const r=N(w,e);if(!0!==r)return v(r.err.code,r.err.msg,y(t,i-w.length+r.err.line));if(!0===d)return v("InvalidXml","Multiple possible root nodes found.",y(t,i));-1!==e.unpairedTags.indexOf(A)||n.push({tagName:A,tagStartPos:o}),f=!0}for(i++;i<t.length;i++)if("<"===t[i]){if("!"===t[i+1]){i++,i=h(t,i);continue}if("?"!==t[i+1])break;if(i=c(t,++i),i.err)return i}else if("&"===t[i]){const e=E(t,i);if(-1==e)return v("InvalidChar","char '&' is not expected.",y(t,i));i=e}else if(!0===d&&!l(t[i]))return v("InvalidXml","Extra text at the end",y(t,i));"<"===t[i]&&i--}}}var x;return f?1==n.length?v("InvalidTag","Unclosed tag '"+n[0].tagName+"'.",y(t,n[0].tagStartPos)):!(n.length>0)||v("InvalidXml","Invalid '"+JSON.stringify(n.map((t=>t.tagName)),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1}):v("InvalidXml","Start tag expected.",1)};const f='"',d="'";function m(t,i){let e="",n="",r=!1;for(;i<t.length;i++){if(t[i]===f||t[i]===d)""===n?n=t[i]:n!==t[i]||(n="");else if(">"===t[i]&&""===n){r=!0;break}e+=t[i]}return""===n&&{value:e,index:i,tagClosed:r}}const x=new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function N(t,e){const n=r.getAllMatches(t,x),o={};for(let i=0;i<n.length;i++){if(0===n[i][1].length)return v("InvalidAttr","Attribute '"+n[i][2]+"' has no space in starting.",A(n[i]));if(void 0!==n[i][3]&&void 0===n[i][4])return v("InvalidAttr","Attribute '"+n[i][2]+"' is without value.",A(n[i]));if(void 0===n[i][3]&&!e.allowBooleanAttributes)return v("InvalidAttr","boolean attribute '"+n[i][2]+"' is not allowed.",A(n[i]));const t=n[i][2];if(!T(t))return v("InvalidAttr","Attribute '"+t+"' is an invalid name.",A(n[i]));if(o.hasOwnProperty(t))return v("InvalidAttr","Attribute '"+t+"' is repeated.",A(n[i]));o[t]=1}return!0}function E(t,i){if(";"===t[++i])return-1;if("#"===t[i])return function(t,i){let e=/\d/;for("x"===t[i]&&(i++,e=/[\da-fA-F]/);i<t.length;i++){if(";"===t[i])return i;if(!t[i].match(e))break}return-1}(t,++i);let e=0;for(;i<t.length;i++,e++)if(!(t[i].match(/\w/)&&e<20)){if(";"===t[i])break;return-1}return i}function v(code,t,e){return{err:{code:code,msg:t,line:e.line||e,col:e.col}}}function T(t){return r.isName(t)}function y(t,e){const n=t.substring(0,e).split(/\r?\n/);return{line:n.length,col:n[n.length-1].length+1}}function A(t){return t.startIndex+t[1].length}},1558:function(t,e,n){"use strict";const r=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",o="["+r+"]["+(r+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040")+"]*",l=new RegExp("^"+o+"$");e.isExist=function(t){return void 0!==t},e.isEmptyObject=function(t){return 0===Object.keys(t).length},e.merge=function(t,a,e){if(a){const n=Object.keys(a),r=n.length;for(let i=0;i<r;i++)t[n[i]]="strict"===e?[a[n[i]]]:a[n[i]]}},e.getValue=function(t){return e.isExist(t)?t:""},e.isName=function(t){const e=l.exec(t);return!(null==e)},e.getAllMatches=function(t,e){const n=[];let r=e.exec(t);for(;r;){const o=[];o.startIndex=e.lastIndex-r[0].length;const l=r.length;for(let t=0;t<l;t++)o.push(r[t]);n.push(o),r=e.exec(t)}return n},e.nameRegexp=o},2878:function(t,e,n){"use strict";const r=n(1557),o=n(2879),l=n(2886);t.exports={XMLParser:o,XMLValidator:r,XMLBuilder:l}},2879:function(t,e,n){const{buildOptions:r}=n(2880),o=n(2881),{prettify:l}=n(2885),c=n(1557);t.exports=class{constructor(t){this.externalEntities={},this.options=r(t)}parse(t,e){if("string"==typeof t);else{if(!t.toString)throw new Error("XML data is accepted in String or Bytes[] form.");t=t.toString()}if(e){!0===e&&(e={});const n=c.validate(t,e);if(!0!==n)throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`)}const n=new o(this.options);n.addExternalEntities(this.externalEntities);const r=n.parseXml(t);return this.options.preserveOrder||void 0===r?r:l(r,this.options)}addEntity(t,e){if(-1!==e.indexOf("&"))throw new Error("Entity value can't have '&'");if(-1!==t.indexOf("&")||-1!==t.indexOf(";"))throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if("&"===e)throw new Error("An entity with value '&' is not permitted");this.externalEntities[t]=e}}},2880:function(t,e){const n={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1};e.buildOptions=function(t){return Object.assign({},n,t)},e.defaultOptions=n},2881:function(t,e,n){"use strict";const r=n(1558),o=n(2882),l=n(2883),c=n(2884);"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,r.nameRegexp);function h(t){const e=Object.keys(t);for(let i=0;i<e.length;i++){const n=e[i];this.lastEntities[n]={regex:new RegExp("&"+n+";","g"),val:t[n]}}}function f(t,e,n,r,o,l,c){if(void 0!==t&&(this.options.trimValues&&!r&&(t=t.trim()),t.length>0)){c||(t=this.replaceEntitiesValue(t));const r=this.options.tagValueProcessor(e,t,n,o,l);if(null==r)return t;if(typeof r!=typeof t||r!==t)return r;if(this.options.trimValues)return w(t,this.options.parseTagValue,this.options.numberParseOptions);return t.trim()===t?w(t,this.options.parseTagValue,this.options.numberParseOptions):t}}function d(t){if(this.options.removeNSPrefix){const e=t.split(":"),n="/"===t.charAt(0)?"/":"";if("xmlns"===e[0])return"";2===e.length&&(t=n+e[1])}return t}const m=new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");function x(t,e){if(!this.options.ignoreAttributes&&"string"==typeof t){const n=r.getAllMatches(t,m),o=n.length,l={};for(let i=0;i<o;i++){const t=this.resolveNameSpace(n[i][1]);let r=n[i][4],o=this.options.attributeNamePrefix+t;if(t.length)if(this.options.transformAttributeName&&(o=this.options.transformAttributeName(o)),"__proto__"===o&&(o="#__proto__"),void 0!==r){this.options.trimValues&&(r=r.trim()),r=this.replaceEntitiesValue(r);const n=this.options.attributeValueProcessor(t,r,e);l[o]=null==n?r:typeof n!=typeof r||n!==r?n:w(r,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(l[o]=!0)}if(!Object.keys(l).length)return;if(this.options.attributesGroupName){const t={};return t[this.options.attributesGroupName]=l,t}return l}}const N=function(t){t=t.replace(/\r\n?/g,"\n");const e=new o("!xml");let n=e,r="",c="";for(let i=0;i<t.length;i++){if("<"===t[i])if("/"===t[i+1]){const e=y(t,">",i,"Closing Tag is not closed.");let o=t.substring(i+2,e).trim();if(this.options.removeNSPrefix){const t=o.indexOf(":");-1!==t&&(o=o.substr(t+1))}this.options.transformTagName&&(o=this.options.transformTagName(o)),n&&(r=this.saveTextToParentTag(r,n,c)),c=c.substr(0,c.lastIndexOf(".")),n=this.tagsNodeStack.pop(),r="",i=e}else if("?"===t[i+1]){let e=A(t,i,!1,"?>");if(!e)throw new Error("Pi Tag is not closed.");if(r=this.saveTextToParentTag(r,n,c),this.options.ignoreDeclaration&&"?xml"===e.tagName||this.options.ignorePiTags);else{const t=new o(e.tagName);t.add(this.options.textNodeName,""),e.tagName!==e.tagExp&&e.attrExpPresent&&(t[":@"]=this.buildAttributesMap(e.tagExp,c)),n.addChild(t)}i=e.closeIndex+1}else if("!--"===t.substr(i+1,3)){const e=y(t,"--\x3e",i+4,"Comment is not closed.");if(this.options.commentPropName){const o=t.substring(i+4,e-2);r=this.saveTextToParentTag(r,n,c),n.add(this.options.commentPropName,[{[this.options.textNodeName]:o}])}i=e}else if("!D"===t.substr(i+1,2)){const e=l(t,i);this.docTypeEntities=e.entities,i=e.i}else if("!["===t.substr(i+1,2)){const e=y(t,"]]>",i,"CDATA is not closed.")-2,o=t.substring(i+9,e);if(r=this.saveTextToParentTag(r,n,c),this.options.cdataPropName)n.add(this.options.cdataPropName,[{[this.options.textNodeName]:o}]);else{let t=this.parseTextData(o,n.tagname,c,!0,!1,!0);null==t&&(t=""),n.add(this.options.textNodeName,t)}i=e+2}else{let l=A(t,i,this.options.removeNSPrefix),h=l.tagName,f=l.tagExp,d=l.attrExpPresent,m=l.closeIndex;this.options.transformTagName&&(h=this.options.transformTagName(h)),n&&r&&"!xml"!==n.tagname&&(r=this.saveTextToParentTag(r,n,c,!1)),h!==e.tagname&&(c+=c?"."+h:h);const x=n;if(x&&-1!==this.options.unpairedTags.indexOf(x.tagname)&&(n=this.tagsNodeStack.pop()),this.isItStopNode(this.options.stopNodes,c,h)){let e="";if(f.length>0&&f.lastIndexOf("/")===f.length-1)i=l.closeIndex;else if(-1!==this.options.unpairedTags.indexOf(h))i=l.closeIndex;else{const n=this.readStopNodeData(t,h,m+1);if(!n)throw new Error(`Unexpected end of ${h}`);i=n.i,e=n.tagContent}const r=new o(h);h!==f&&d&&(r[":@"]=this.buildAttributesMap(f,c)),e&&(e=this.parseTextData(e,h,c,!0,d,!0,!0)),c=c.substr(0,c.lastIndexOf(".")),r.add(this.options.textNodeName,e),n.addChild(r)}else{if(f.length>0&&f.lastIndexOf("/")===f.length-1){"/"===h[h.length-1]?(h=h.substr(0,h.length-1),f=h):f=f.substr(0,f.length-1),this.options.transformTagName&&(h=this.options.transformTagName(h));const t=new o(h);h!==f&&d&&(t[":@"]=this.buildAttributesMap(f,c)),c=c.substr(0,c.lastIndexOf(".")),n.addChild(t)}else{const t=new o(h);this.tagsNodeStack.push(n),h!==f&&d&&(t[":@"]=this.buildAttributesMap(f,c)),n.addChild(t),n=t}r="",i=m}}else r+=t[i]}return e.child},E=function(t){if(this.options.processEntities){for(let e in this.docTypeEntities){const n=this.docTypeEntities[e];t=t.replace(n.regx,n.val)}for(let e in this.lastEntities){const n=this.lastEntities[e];t=t.replace(n.regex,n.val)}if(this.options.htmlEntities)for(let e in this.htmlEntities){const n=this.htmlEntities[e];t=t.replace(n.regex,n.val)}t=t.replace(this.ampEntity.regex,this.ampEntity.val)}return t};function v(t,e,n,r){return t&&(void 0===r&&(r=0===Object.keys(e.child).length),void 0!==(t=this.parseTextData(t,e.tagname,n,!1,!!e[":@"]&&0!==Object.keys(e[":@"]).length,r))&&""!==t&&e.add(this.options.textNodeName,t),t=""),t}function T(t,e,n){const r="*."+n;for(const n in t){const o=t[n];if(r===o||e===o)return!0}return!1}function y(t,e,i,n){const r=t.indexOf(e,i);if(-1===r)throw new Error(n);return r+e.length-1}function A(t,i,e,n=">"){const r=function(t,i,e=">"){let n,r="";for(let o=i;o<t.length;o++){let l=t[o];if(n)l===n&&(n="");else if('"'===l||"'"===l)n=l;else if(l===e[0]){if(!e[1])return{data:r,index:o};if(t[o+1]===e[1])return{data:r,index:o}}else"\t"===l&&(l=" ");r+=l}}(t,i+1,n);if(!r)return;let o=r.data;const l=r.index,c=o.search(/\s/);let h=o,f=!0;if(-1!==c&&(h=o.substr(0,c).replace(/\s\s*$/,""),o=o.substr(c+1)),e){const t=h.indexOf(":");-1!==t&&(h=h.substr(t+1),f=h!==r.data.substr(t+1))}return{tagName:h,tagExp:o,closeIndex:l,attrExpPresent:f}}function P(t,e,i){const n=i;let r=1;for(;i<t.length;i++)if("<"===t[i])if("/"===t[i+1]){const o=y(t,">",i,`${e} is not closed`);if(t.substring(i+2,o).trim()===e&&(r--,0===r))return{tagContent:t.substring(n,i),i:o};i=o}else if("?"===t[i+1]){i=y(t,"?>",i+1,"StopNode is not closed.")}else if("!--"===t.substr(i+1,3)){i=y(t,"--\x3e",i+3,"StopNode is not closed.")}else if("!["===t.substr(i+1,2)){i=y(t,"]]>",i,"StopNode is not closed.")-2}else{const n=A(t,i,">");if(n){(n&&n.tagName)===e&&"/"!==n.tagExp[n.tagExp.length-1]&&r++,i=n.closeIndex}}}function w(t,e,n){if(e&&"string"==typeof t){const e=t.trim();return"true"===e||"false"!==e&&c(t,n)}return r.isExist(t)?t:""}t.exports=class{constructor(t){this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"¢"},pound:{regex:/&(pound|#163);/g,val:"£"},yen:{regex:/&(yen|#165);/g,val:"¥"},euro:{regex:/&(euro|#8364);/g,val:"€"},copyright:{regex:/&(copy|#169);/g,val:"©"},reg:{regex:/&(reg|#174);/g,val:"®"},inr:{regex:/&(inr|#8377);/g,val:"₹"}},this.addExternalEntities=h,this.parseXml=N,this.parseTextData=f,this.resolveNameSpace=d,this.buildAttributesMap=x,this.isItStopNode=T,this.replaceEntitiesValue=E,this.readStopNodeData=P,this.saveTextToParentTag=v}}},2882:function(t,e,n){"use strict";t.exports=class{constructor(t){this.tagname=t,this.child=[],this[":@"]={}}add(t,e){"__proto__"===t&&(t="#__proto__"),this.child.push({[t]:e})}addChild(t){"__proto__"===t.tagname&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,":@":t[":@"]}):this.child.push({[t.tagname]:t.child})}}},2883:function(t,e){const n=RegExp("^\\s([a-zA-z0-0]+)[ \t](['\"])([^&]+)\\2");function r(t,e){const r=n.exec(t);r&&(e[r[1]]={regx:RegExp(`&${r[1]};`,"g"),val:r[3]})}t.exports=function(t,i){const e={};if("O"!==t[i+3]||"C"!==t[i+4]||"T"!==t[i+5]||"Y"!==t[i+6]||"P"!==t[i+7]||"E"!==t[i+8])throw new Error("Invalid Tag instead of DOCTYPE");{i+=9;let n=1,o=!1,l=!1,c=!1,h="";for(;i<t.length;i++)if("<"!==t[i]||c)if(">"===t[i]){if(c?"-"===t[i-1]&&"-"===t[i-2]&&(c=!1,n--):(l&&(r(h,e),l=!1),n--),0===n)break}else"["===t[i]?o=!0:h+=t[i];else{if(o&&"!"===t[i+1]&&"E"===t[i+2]&&"N"===t[i+3]&&"T"===t[i+4]&&"I"===t[i+5]&&"T"===t[i+6]&&"Y"===t[i+7])i+=7,l=!0;else if(o&&"!"===t[i+1]&&"E"===t[i+2]&&"L"===t[i+3]&&"E"===t[i+4]&&"M"===t[i+5]&&"E"===t[i+6]&&"N"===t[i+7]&&"T"===t[i+8])i+=8;else if(o&&"!"===t[i+1]&&"A"===t[i+2]&&"T"===t[i+3]&&"T"===t[i+4]&&"L"===t[i+5]&&"I"===t[i+6]&&"S"===t[i+7]&&"T"===t[i+8])i+=8;else if(o&&"!"===t[i+1]&&"N"===t[i+2]&&"O"===t[i+3]&&"T"===t[i+4]&&"A"===t[i+5]&&"T"===t[i+6]&&"I"===t[i+7]&&"O"===t[i+8]&&"N"===t[i+9])i+=9;else{if("!"!==t[i+1]||"-"!==t[i+2]||"-"!==t[i+3])throw new Error("Invalid DOCTYPE");c=!0}n++,h=""}if(0!==n)throw new Error("Unclosed DOCTYPE")}return{entities:e,i:i}}},2884:function(t,e){const n=/^[-+]?0x[a-fA-F0-9]+$/,r=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const o={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};t.exports=function(t,e={}){if(e=Object.assign({},o,e),!t||"string"!=typeof t)return t;let l=t.trim();if(void 0!==e.skipLike&&e.skipLike.test(l))return t;if(e.hex&&n.test(l))return Number.parseInt(l,16);{const n=r.exec(l);if(n){const r=n[1],o=n[2];let c=function(t){if(t&&-1!==t.indexOf("."))return"."===(t=t.replace(/0+$/,""))?t="0":"."===t[0]?t="0"+t:"."===t[t.length-1]&&(t=t.substr(0,t.length-1)),t;return t}(n[3]);const h=n[4]||n[6];if(!e.leadingZeros&&o.length>0&&r&&"."!==l[2])return t;if(!e.leadingZeros&&o.length>0&&!r&&"."!==l[1])return t;{const n=Number(l),f=""+n;return-1!==f.search(/[eE]/)||h?e.eNotation?n:t:-1!==l.indexOf(".")?"0"===f&&""===c||f===c||r&&f==="-"+c?n:t:o?c===f||r+c===f?n:t:l===f||l===r+f?n:t}}return t}}},2885:function(t,e,n){"use strict";function r(t,e,n){let text;const h={};for(let i=0;i<t.length;i++){const f=t[i],d=o(f);let m="";if(m=void 0===n?d:n+"."+d,d===e.textNodeName)void 0===text?text=f[d]:text+=""+f[d];else{if(void 0===d)continue;if(f[d]){let t=r(f[d],e,m);const n=c(t,e);f[":@"]?l(t,f[":@"],m,e):1!==Object.keys(t).length||void 0===t[e.textNodeName]||e.alwaysCreateTextNode?0===Object.keys(t).length&&(e.alwaysCreateTextNode?t[e.textNodeName]="":t=""):t=t[e.textNodeName],void 0!==h[d]&&h.hasOwnProperty(d)?(Array.isArray(h[d])||(h[d]=[h[d]]),h[d].push(t)):e.isArray(d,m,n)?h[d]=[t]:h[d]=t}}}return"string"==typeof text?text.length>0&&(h[e.textNodeName]=text):void 0!==text&&(h[e.textNodeName]=text),h}function o(t){const e=Object.keys(t);for(let i=0;i<e.length;i++){const t=e[i];if(":@"!==t)return t}}function l(t,e,n,r){if(e){const o=Object.keys(e),l=o.length;for(let i=0;i<l;i++){const l=o[i];r.isArray(l,n+"."+l,!0,!0)?t[l]=[e[l]]:t[l]=e[l]}}}function c(t,e){const n=Object.keys(t).length;return!!(0===n||1===n&&t[e.textNodeName])}e.prettify=function(t,e){return r(t,e)}},2886:function(t,e,n){"use strict";const r=n(2887),o={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,a){return a},attributeValueProcessor:function(t,a){return a},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[]};function l(t){this.options=Object.assign({},o,t),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=f),this.processTextOrObjNode=c,this.options.format?(this.indentate=h,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function c(object,t,e){const n=this.j2x(object,e+1);return void 0!==object[this.options.textNodeName]&&1===Object.keys(object).length?this.buildTextValNode(object[this.options.textNodeName],t,n.attrStr,e):this.buildObjectNode(n.val,t,n.attrStr,e)}function h(t){return this.options.indentBy.repeat(t)}function f(t){return!!t.startsWith(this.options.attributeNamePrefix)&&t.substr(this.attrPrefixLen)}l.prototype.build=function(t){return this.options.preserveOrder?r(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t}),this.j2x(t,0).val)},l.prototype.j2x=function(t,e){let n="",r="";for(let o in t)if(void 0===t[o]);else if(null===t[o])"?"===o[0]?r+=this.indentate(e)+"<"+o+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+o+"/"+this.tagEndChar;else if(t[o]instanceof Date)r+=this.buildTextValNode(t[o],o,"",e);else if("object"!=typeof t[o]){const l=this.isAttribute(o);if(l)n+=this.buildAttrPairStr(l,""+t[o]);else if(o===this.options.textNodeName){let e=this.options.tagValueProcessor(o,""+t[o]);r+=this.replaceEntitiesValue(e)}else r+=this.buildTextValNode(t[o],o,"",e)}else if(Array.isArray(t[o])){const n=t[o].length;for(let l=0;l<n;l++){const n=t[o][l];void 0===n||(null===n?"?"===o[0]?r+=this.indentate(e)+"<"+o+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+o+"/"+this.tagEndChar:r+="object"==typeof n?this.processTextOrObjNode(n,o,e):this.buildTextValNode(n,o,"",e))}}else if(this.options.attributesGroupName&&o===this.options.attributesGroupName){const e=Object.keys(t[o]),r=e.length;for(let l=0;l<r;l++)n+=this.buildAttrPairStr(e[l],""+t[o][e[l]])}else r+=this.processTextOrObjNode(t[o],o,e);return{attrStr:n,val:r}},l.prototype.buildAttrPairStr=function(t,e){return e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&"true"===e?" "+t:" "+t+'="'+e+'"'},l.prototype.buildObjectNode=function(t,e,n,r){if(""===t)return"?"===e[0]?this.indentate(r)+"<"+e+n+"?"+this.tagEndChar:this.indentate(r)+"<"+e+n+this.closeTag(e)+this.tagEndChar;{let o="</"+e+this.tagEndChar,l="";return"?"===e[0]&&(l="?",o=""),n&&-1===t.indexOf("<")?this.indentate(r)+"<"+e+n+l+">"+t+o:!1!==this.options.commentPropName&&e===this.options.commentPropName&&0===l.length?this.indentate(r)+`\x3c!--${t}--\x3e`+this.newLine:this.indentate(r)+"<"+e+n+l+this.tagEndChar+t+this.indentate(r)+o}},l.prototype.closeTag=function(t){let e="";return-1!==this.options.unpairedTags.indexOf(t)?this.options.suppressUnpairedNode||(e="/"):e=this.options.suppressEmptyNode?"/":`></${t}`,e},l.prototype.buildTextValNode=function(t,e,n,r){if(!1!==this.options.cdataPropName&&e===this.options.cdataPropName)return this.indentate(r)+`<![CDATA[${t}]]>`+this.newLine;if(!1!==this.options.commentPropName&&e===this.options.commentPropName)return this.indentate(r)+`\x3c!--${t}--\x3e`+this.newLine;if("?"===e[0])return this.indentate(r)+"<"+e+n+"?"+this.tagEndChar;{let o=this.options.tagValueProcessor(e,t);return o=this.replaceEntitiesValue(o),""===o?this.indentate(r)+"<"+e+n+this.closeTag(e)+this.tagEndChar:this.indentate(r)+"<"+e+n+">"+o+"</"+e+this.tagEndChar}},l.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(let i=0;i<this.options.entities.length;i++){const e=this.options.entities[i];t=t.replace(e.regex,e.val)}return t},t.exports=l},2887:function(t,e){const n="\n";function r(t,e,n,f){let d="",m=!1;for(let i=0;i<t.length;i++){const x=t[i],N=o(x);let E="";if(E=0===n.length?N:`${n}.${N}`,N===e.textNodeName){let t=x[N];c(E,e)||(t=e.tagValueProcessor(N,t),t=h(t,e)),m&&(d+=f),d+=t,m=!1;continue}if(N===e.cdataPropName){m&&(d+=f),d+=`<![CDATA[${x[N][0][e.textNodeName]}]]>`,m=!1;continue}if(N===e.commentPropName){d+=f+`\x3c!--${x[N][0][e.textNodeName]}--\x3e`,m=!0;continue}if("?"===N[0]){const t=l(x[":@"],e),n="?xml"===N?"":f;let r=x[N][0][e.textNodeName];r=0!==r.length?" "+r:"",d+=n+`<${N}${r}${t}?>`,m=!0;continue}let v=f;""!==v&&(v+=e.indentBy);const T=f+`<${N}${l(x[":@"],e)}`,y=r(x[N],e,E,v);-1!==e.unpairedTags.indexOf(N)?e.suppressUnpairedNode?d+=T+">":d+=T+"/>":y&&0!==y.length||!e.suppressEmptyNode?y&&y.endsWith(">")?d+=T+`>${y}${f}</${N}>`:(d+=T+">",y&&""!==f&&(y.includes("/>")||y.includes("</"))?d+=f+e.indentBy+y+f:d+=y,d+=`</${N}>`):d+=T+"/>",m=!0}return d}function o(t){const e=Object.keys(t);for(let i=0;i<e.length;i++){const t=e[i];if(":@"!==t)return t}}function l(t,e){let n="";if(t&&!e.ignoreAttributes)for(let r in t){let o=e.attributeValueProcessor(r,t[r]);o=h(o,e),!0===o&&e.suppressBooleanAttributes?n+=` ${r.substr(e.attributeNamePrefix.length)}`:n+=` ${r.substr(e.attributeNamePrefix.length)}="${o}"`}return n}function c(t,e){let n=(t=t.substr(0,t.length-e.textNodeName.length-1)).substr(t.lastIndexOf(".")+1);for(let r in e.stopNodes)if(e.stopNodes[r]===t||e.stopNodes[r]==="*."+n)return!0;return!1}function h(t,e){if(t&&t.length>0&&e.processEntities)for(let i=0;i<e.entities.length;i++){const n=e.entities[i];t=t.replace(n.regex,n.val)}return t}t.exports=function(t,e){let o="";return e.format&&e.indentBy.length>0&&(o=n),r(t,e,"",o)}}}]);