(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{2934:function(n,o,t){"use strict";t.r(o),t.d(o,"BrowserWeb",(function(){return w})),t.d(o,"Browser",(function(){return l}));var e=t(12);class w extends e.WebPlugin{constructor(){super(),this._lastWindow=null}async open(n){this._lastWindow=window.open(n.url,n.windowName||"_blank")}async close(){return new Promise(((n,o)=>{null!=this._lastWindow?(this._lastWindow.close(),this._lastWindow=null,n()):o("No active window to close!")}))}}const l=new w}}]);