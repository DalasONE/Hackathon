!function(t){function e(e){for(var r,o,s=e[0],i=e[1],u=e[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);for(p&&p(e);f.length;)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={1:0},a={1:0},c=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[];o[t]?e.push(o[t]):0!==o[t]&&{6:1}[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="./static/pull/styles/"+t+"."+{6:"1e5ddea01d7f1547118b",7:"31d6cfe0d16ae931b73c"}[t]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=(p=c[i]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(u===r||u===a))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){var p;if((u=(p=l[i]).getAttribute("data-href"))===r||u===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[t],f.parentNode.removeChild(f),n(c)},f.href=a,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=function(t){return s.p+"static/pull/scripts/"+({}[t]||t)+"."+{6:"04081807b89813147f30",7:"3046826665d5f03227a5"}[t]+".js"}(t);var u=new Error;c=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=u;c.push([50,0,5]),n()}([,function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"g",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"f",(function(){return l}));const r="SET_PANZOOM",o="SHOW_MODAL",a="HIDE_MODAL",c="CLOSE_INTERFACE_PANEL",s="OPEN_INTERFACE_PANEL",i="START_QUEST",u="END_QUEST",l="SET_TIME"},,function(t,e,n){"use strict";async function r(t,e){if(!t||!e)return!1;const n=JSON.stringify({loginOrEmail:t,password:e});try{return 200==(await fetch("/api/checkAuth",{body:n,method:"POST"})).status}catch{return!1}}async function o(t,e){const n=JSON.stringify({loginOrEmail:t,password:e});let r=null,o=!1;try{const t=await fetch("/api/login",{body:n,method:"POST"});if(o=200==t.status,!o)throw t}catch(t){const e=await t.text();r=0==e.length?"Не удалось отправить данные":e}return{result:o,msg:r}}async function a(t,e,n){const r=JSON.stringify({email:e,login:t,password:n});let o=null,a=!1;try{const t=await fetch("/api/register",{body:r,method:"POST"});if(a=200==t.status,!a)throw t}catch(t){const e=await t.text();o=0==e.length?"Не удалось отправить данные":e}return{result:a,msg:o}}async function c(t){let e=!1,n=null;try{const r=await fetch(`/api/get-country-info?id=${t}`,{method:"GET"});n=JSON.parse(await r.text()),e=!0}catch{}return{result:e,countryInfo:n}}async function s(t,e){let n=!1;const r=[],o=JSON.stringify({loginOrEmail:t,password:e});try{const t=await fetch("/api/get-contacts-list",{method:"POST",body:o});r=JSON.parse(await t.text()).contacts,n=!0}catch{}return{result:n,contacts:r}}async function i(t,e){let n=!1,r=[],o=null;try{const a=await fetch(`/api/get-leaders-list?user=${t}&count=${e}`,{method:"GET"}),c=JSON.parse(await a.text());r=c.leaders,o=c.user,n=!0}catch{}return{result:n,leaders:r,userInfo:o}}async function u(t,e,n){let r=!1,o=null;try{const o=JSON.stringify({loginOrEmail:t,password:e,contactName:n}),a=await fetch("/apt/add-contact",{method:"POST",body:o});if(200!=a.status)throw await a.text();r=!0}catch(t){0==t.length&&(o="Не удалось отправить данные")}return{result:r,message:o}}async function l(t,e,n){let r=!1,o=null,a=null;try{const o=JSON.stringify({loginOrEmail:t,password:e,questType:n}),c=await fetch("/api/start-quest",{method:"POST",body:o});if(200!=c.status)throw await c.text();r=!0,a=JSON.parse(await c.text())}catch(t){0==t.length&&(o="Не удалось отправить данные")}return{result:r,message:o,data:a}}async function p(t,e){let n=!1,r=null,o=null;try{const r=JSON.stringify({loginOrEmail:t,password:e}),a=await fetch("api/check-quest",{method:"POST",body:r});if(200!=a.status)throw null;o=JSON.parse(await a.text()),n=!0}catch{r="[check-quest] Не удалось отправить данные"}return{result:n,message:r,data:o}}n.d(e,"a",(function(){return r})),n.d(e,"h",(function(){return a})),n.d(e,"g",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return u})),n.d(e,"b",(function(){return p})),n.d(e,"i",(function(){return l}))},,,function(t,e,n){t.exports=n.p+"static/pull/images/crown.png"},function(t,e,n){t.exports=n.p+"static/pull/images/deleteIcon.png"},function(t,e,n){t.exports=n.p+"static/pull/images/friends.png"},function(t,e,n){t.exports=n.p+"static/pull/images/info.png"},function(t,e,n){t.exports=n.p+"static/pull/images/list.png"},function(t,e,n){t.exports=n.p+"static/pull/images/medal.png"},function(t,e,n){t.exports=n.p+"static/pull/images/minus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/plus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/reset.png"},function(t,e,n){t.exports=n.p+"static/pull/images/wiki.png"},function(t,e,n){"use strict";n(17),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(18),n(13),n(14),n(19),n(20),n(15),n(21),n(22),n(23),n(24),n(25),n(26)},function(t,e,n){t.exports=n.p+"static/pull/fonts/Roboto.ttf"},function(t,e,n){t.exports=n.p+"static/pull/images/planet.png"},function(t,e,n){t.exports=n.p+"static/pull/images/sattelite.png"},function(t,e,n){t.exports=n.p+"static/pull/images/spaceBlock.png"},function(t,e,n){},function(t,e,n){t.exports={panZoom:"_20HIHXdy1ra6spmNQx3cHj"}},function(t,e,n){t.exports={fade:"pVlqShqpPbOUn-ssalXSj","slide-right":"B9ak37oPz6lQEiNfwPc2U","slide-left":"_2jWkxyGpKUY4e7A8t5XPr9"}},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,function(t,e,n){t.exports={spinner:"_3C6QkPOpTN9nlETDXdXD_a","sk-scaleout":"T2DqBJx2oY-pZnW4AtjxN"}},,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(4),c=n(27),s=n(31),i=n(1);const u={zoomIn:null,zoomOut:null,resetZoom:null};const l={component:null,data:null,show:!1};const p={show:!1,Component:null,data:null};const f={isActive:!1,qObjective:null,time:0,questWorker:null};var d=Object(c.b)({panZoom:function(t=u,e){switch(e.type){case i.e:const{zoomIn:n,zoomOut:r,resetZoom:o}=e;t={zoomIn:n,zoomOut:r,resetZoom:o}}return t},modals:function(t=l,e){switch(e.type){case i.g:t={component:e.component,data:e.data,show:!0};break;case i.c:t={component:null,data:null,show:!1}}return t},mapInterface:function(t=p,e){switch(e.type){case i.d:t={show:!0,Component:e.Component,data:e.data};break;case i.a:t={show:!1,Component:null,data:null}}return t},quest:function(t=f,e){switch(e.type){case i.h:t={isActive:!0,qObjective:e.questObjective,time:e.startTime,questWorker:e.questWorker};break;case i.b:t={isActive:!1,qObjective:null,time:0,questWorker:null};break;case i.f:t={...t,time:e.newTime}}return t}}),m=n(3),g=n(34),h=n.n(g);function y({center:t}){return o.a.createElement("div",{className:h.a.spinner})}var w,O,b;n(16);const v=Object(r.lazy)(()=>Promise.all([n.e(7),n.e(6)]).then(n.bind(null,91)));function E(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.Suspense,{fallback:o.a.createElement(y,{center:!0})},o.a.createElement(v,null)))}const S=Object(c.c)(d),x=null!==(w=null!==(O=localStorage.getItem("login"))&&void 0!==O?O:localStorage.getItem("email"))&&void 0!==w?w:null,T=null!==(b=localStorage.getItem("password"))&&void 0!==b?b:null;(async()=>{await Object(m.a)(x,T)?Object(a.render)(o.a.createElement(s.a,{store:S},o.a.createElement(E,null)),document.getElementById("root")):location.href="/auth"})()}]);