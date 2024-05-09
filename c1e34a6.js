(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{3100:function(e,t,o){"use strict";o.r(t),o.d(t,"HttpWeb",(function(){return f}));var n=o(1126);const c=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),r=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),d=()=>{const output=[],map={};if(!document.cookie)return output;const e=document.cookie.split(";")||[];for(const t of e){let[e,o]=t.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");e=r(e).trim(),o=r(o).trim(),map[e]=o}const t=Object.entries(map);for(const[e,o]of t)output.push({key:e,value:o});return output},l=()=>{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)},h=(e,t={})=>{const output=Object.assign({method:e.method||"GET",headers:e.headers},t),o=((e={})=>{const t=Object.keys(e);return Object.keys(e).map((e=>e.toLocaleLowerCase())).reduce(((o,n,c)=>(o[n]=e[t[c]],o)),{})})(e.headers)["content-type"]||"";if("string"==typeof e.data)output.body=e.data;else if(o.includes("application/x-www-form-urlencoded")){const t=new URLSearchParams;for(const[o,n]of Object.entries(e.data||{}))t.set(o,n);output.body=t.toString()}else if(o.includes("multipart/form-data")){const form=new FormData;if(e.data instanceof FormData)e.data.forEach(((e,t)=>{form.append(t,e)}));else for(let t of Object.keys(e.data))form.append(t,e.data[t]);output.body=form;const t=new Headers(output.headers);t.delete("content-type"),output.headers=t}else(o.includes("application/json")||"object"==typeof e.data)&&(output.body=JSON.stringify(e.data));return output},y=async e=>{const t=h(e,e.webFetchExtra),o=((e,t=!0)=>e?Object.entries(e).reduce(((e,o)=>{const[n,c]=o;let r,d;return Array.isArray(c)?(d="",c.forEach((e=>{r=t?encodeURIComponent(e):e,d+=`${n}=${r}&`})),d.slice(0,-1)):(r=t?encodeURIComponent(c):c,d=`${n}=${r}`),`${e}&${d}`}),"").substr(1):null)(e.params,e.shouldEncodeUrlParams),n=o?`${e.url}?${o}`:e.url,c=await fetch(n,t),r=c.headers.get("content-type")||"";let data,{responseType:d="text"}=c.ok?e:{};switch(r.includes("application/json")&&(d="json"),d){case"arraybuffer":case"blob":const e=await c.blob();data=await(async e=>new Promise(((t,o)=>{const n=new FileReader;n.onload=()=>{const e=n.result,o=e.substr(e.indexOf(",")+1);t(o)},n.onerror=e=>o(e),n.readAsDataURL(e)})))(e);break;case"json":data=await c.json();break;default:data=await c.text()}const l={};return c.headers.forEach(((e,t)=>{l[t]=e})),{data:data,headers:l,status:c.status,url:c.url}};class f extends n.a{constructor(){super(),this.request=async e=>y(e),this.get=async e=>(async e=>y(Object.assign(Object.assign({},e),{method:"GET"})))(e),this.post=async e=>(async e=>y(Object.assign(Object.assign({},e),{method:"POST"})))(e),this.put=async e=>(async e=>y(Object.assign(Object.assign({},e),{method:"PUT"})))(e),this.patch=async e=>(async e=>y(Object.assign(Object.assign({},e),{method:"PATCH"})))(e),this.del=async e=>(async e=>y(Object.assign(Object.assign({},e),{method:"DELETE"})))(e),this.getCookiesMap=async e=>{const t=d(),output={};for(const e of t)output[e.key]=e.value;return output},this.getCookies=async e=>{const{url:t}=e;return{cookies:d()}},this.setCookie=async e=>{const{key:t,value:o,expires:n="",path:path=""}=e;((e,t,o={})=>{const n=c(e),r=c(t),d=`; expires=${(o.expires||"").replace("expires=","")}`,path=(o.path||"/").replace("path=","");document.cookie=`${n}=${r||""}${d}; path=${path}`})(t,o,{expires:n,path:path})},this.getCookie=async e=>(e=>{const t=d();for(const o of t)if(o.key===e)return o;return{key:e,value:""}})(e.key),this.deleteCookie=async e=>{return t=e.key,void(document.cookie=`${t}=; Max-Age=0`);var t},this.clearCookies=async e=>l(),this.clearAllCookies=async()=>l(),this.uploadFile=async e=>{const t=new FormData;t.append(e.name,e.blob||"undefined");const o=Object.assign(Object.assign({},e),{body:t,method:"POST"});return this.post(o)},this.downloadFile=async e=>{const t=h(e,e.webFetchExtra),o=await fetch(e.url,t);let n;if(null==e?void 0:e.progress)if(null==o?void 0:o.body){const t=o.body.getReader();let c=0,r=[];const d=o.headers.get("content-type"),l=parseInt(o.headers.get("content-length")||"0",10);for(;;){const{done:o,value:n}=await t.read();if(o)break;r.push(n),c+=(null==n?void 0:n.length)||0;const d={type:"DOWNLOAD",url:e.url,bytes:c,contentLength:l};this.notifyListeners("progress",d)}let h=new Uint8Array(c),y=0;for(const e of r)void 0!==e&&(h.set(e,y),y+=e.length);n=new Blob([h.buffer],{type:d||void 0})}else n=new Blob;else n=await o.blob();return{blob:n}}}}}}]);