!function(t){function e(e){for(var r,o,i=e[0],u=e[1],c=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(p&&p(e);f.length;)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={1:0},a={1:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[];o[t]?e.push(o[t]):0!==o[t]&&{6:1}[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="./static/pull/styles/"+t+"."+{6:"3fd4353ddc98993674d8",7:"31d6cfe0d16ae931b73c"}[t]+".css",a=i.p+r,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=(p=s[u]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(c===r||c===a))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){var p;if((c=(p=l[u]).getAttribute("data-href"))===r||c===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[t],f.parentNode.removeChild(f),n(s)},f.href=a,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(t){return i.p+"static/pull/scripts/"+({}[t]||t)+"."+{6:"ae1dc626cc7d69eb126e",7:"3046826665d5f03227a5"}[t]+".js"}(t);var c=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}a[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;s.push([50,0,5]),n()}([,function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"h",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return i})),n.d(e,"i",(function(){return u})),n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return p}));const r="SET_PANZOOM",o="SHOW_MODAL",a="HIDE_MODAL",s="CLOSE_INTERFACE_PANEL",i="OPEN_INTERFACE_PANEL",u="START_QUEST",c="END_QUEST",l="SET_TIME",p="SET_USERDATA"},,function(t,e,n){"use strict";async function r(t,e){if(!t||!e)return!1;const n=JSON.stringify({loginOrEmail:t,password:e});try{return 200==(await fetch("/api/checkAuth",{body:n,method:"POST"})).status}catch{return!1}}async function o(t,e){const n=JSON.stringify({loginOrEmail:t,password:e});let r=null,o=!1;try{const t=await fetch("/api/login",{body:n,method:"POST"});if(o=200==t.status,!o)throw t}catch(t){const e=await t.text();r=0==e.length?"Не удалось отправить данные":e}return{result:o,msg:r}}async function a(t,e,n){const r=JSON.stringify({email:e,login:t,password:n});let o=null,a=!1;try{const t=await fetch("/api/register",{body:r,method:"POST"});if(a=200==t.status,!a)throw t}catch(t){const e=await t.text();o=0==e.length?"Не удалось отправить данные":e}return{result:a,msg:o}}async function s(t){let e=!1,n=null;try{const r=await fetch(`/api/get-country-info?id=${t}`,{method:"GET"});n=JSON.parse(await r.text()),e=!0}catch{}return{result:e,countryInfo:n}}async function i(t,e){let n=!1;const r=[],o=JSON.stringify({loginOrEmail:t,password:e});try{const t=await fetch("/api/get-contacts-list",{method:"POST",body:o});r=(await t.json()).contacts,n=!0}catch{}return{result:n,contacts:r}}async function u(t,e){let n=!1,r=[],o=null;try{const a=await fetch(`/api/get-leaders-list?user=${t}&count=${e}`,{method:"GET"}),s=JSON.parse(await a.text());r=s.leaders,o=s.user,n=!0}catch{}return{result:n,leaders:r,userInfo:o}}async function c(t,e,n){let r=!1,o=null;try{const o=JSON.stringify({loginOrEmail:t,password:e,contactName:n}),a=await fetch("/apt/add-contact",{method:"POST",body:o});if(200!=a.status)throw await a.text();r=!0}catch(t){0==t.length&&(o="Не удалось отправить данные")}return{result:r,message:o}}async function l(t,e){let n=!1,r=null,o=null;try{const r=JSON.stringify({loginOrEmail:t,password:e}),a=await fetch("/api/get-user-info",{method:"POST",body:r});200==a.status&&(o=JSON.parse(await a.text()),n=!0)}catch{r="Не удалось получить данные"}return{result:n,message:r,data:o}}async function p(t,e,n){let r=!1,o=null,a=null;try{const o=JSON.stringify({loginOrEmail:t,password:e,questType:n}),s=await fetch("/api/start-quest",{method:"POST",body:o});if(200!=s.status)throw await s.text();r=!0,a=JSON.parse(await s.text())}catch(t){0==t.length&&(o="Не удалось отправить данные")}return{result:r,message:o,data:a}}async function f(t,e){let n=!1,r=null,o=null;try{const r=JSON.stringify({loginOrEmail:t,password:e}),a=await fetch("/api/check-quest",{method:"POST",body:r});if(200==a.status);else{if(201!=a.status)throw null;o=JSON.parse(await a.text()),n=!0}}catch{r="[check-quest] Не удалось отправить данные"}return{result:n,message:r,data:o}}n.d(e,"a",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"j",(function(){return p}))},,,function(t,e,n){t.exports=n.p+"static/pull/images/crown.png"},function(t,e,n){t.exports=n.p+"static/pull/images/deleteIcon.png"},function(t,e,n){t.exports=n.p+"static/pull/images/friends.png"},function(t,e,n){t.exports=n.p+"static/pull/images/info.png"},function(t,e,n){t.exports=n.p+"static/pull/images/list.png"},function(t,e,n){t.exports=n.p+"static/pull/images/medal.png"},function(t,e,n){t.exports=n.p+"static/pull/images/minus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/plus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/reset.png"},function(t,e,n){t.exports=n.p+"static/pull/images/wiki.png"},function(t,e,n){"use strict";n(17),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(18),n(13),n(14),n(19),n(20),n(15),n(21),n(22),n(23),n(24),n(25),n(26)},function(t,e,n){t.exports=n.p+"static/pull/fonts/Roboto.ttf"},function(t,e,n){t.exports=n.p+"static/pull/images/planet.png"},function(t,e,n){t.exports=n.p+"static/pull/images/sattelite.png"},function(t,e,n){t.exports=n.p+"static/pull/images/spaceBlock.png"},function(t,e,n){},function(t,e,n){t.exports={panZoom:"_20HIHXdy1ra6spmNQx3cHj"}},function(t,e,n){t.exports={fade:"pVlqShqpPbOUn-ssalXSj","slide-right":"B9ak37oPz6lQEiNfwPc2U","slide-left":"_2jWkxyGpKUY4e7A8t5XPr9"}},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,function(t,e,n){t.exports={spinner:"_3C6QkPOpTN9nlETDXdXD_a","sk-scaleout":"T2DqBJx2oY-pZnW4AtjxN"}},,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(4),s=n(27),i=n(31),u=n(1);const c={zoomIn:null,zoomOut:null,resetZoom:null};const l={component:null,data:null,show:!1};const p={show:!1,Component:null,data:null};const f={isActive:!1,qObjective:null,time:0,questWorker:null};const d={userName:"",userScore:"",questPlayed:"",questComplited:"",questFailed:"",registerDate:""};var m=Object(s.b)({panZoom:function(t=c,e){switch(e.type){case u.e:const{zoomIn:n,zoomOut:r,resetZoom:o}=e;t={zoomIn:n,zoomOut:r,resetZoom:o}}return t},modals:function(t=l,e){switch(e.type){case u.h:t={component:e.component,data:e.data,show:!0};break;case u.c:t={component:null,data:null,show:!1}}return t},mapInterface:function(t=p,e){switch(e.type){case u.d:t={show:!0,Component:e.Component,data:e.data};break;case u.a:t={show:!1,Component:null,data:null}}return t},quest:function(t=f,e){switch(e.type){case u.i:t={isActive:!0,qObjective:e.questObjective,time:e.startTime,questWorker:e.questWorker};break;case u.b:t={isActive:!1,qObjective:null,time:0,questWorker:null};break;case u.f:t={...t,time:e.newTime}}return t},userData:function(t=d,e){return e.type==u.g&&(t={userName:e.userName,userScore:e.userScore,questPlayed:e.questPlayed,questComplited:e.questComplited,questFailed:e.questFailed,registerDate:e.registerDate}),t}}),g=n(3),h=n(34),y=n.n(h);function w({center:t}){return o.a.createElement("div",{className:y.a.spinner})}var O,b,S;n(16);const v=Object(r.lazy)(()=>Promise.all([n.e(7),n.e(6)]).then(n.bind(null,92)));function E(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.Suspense,{fallback:o.a.createElement(w,{center:!0})},o.a.createElement(v,null)))}const x=Object(s.c)(m),N=null!==(O=null!==(b=localStorage.getItem("login"))&&void 0!==b?b:localStorage.getItem("email"))&&void 0!==O?O:null,T=null!==(S=localStorage.getItem("password"))&&void 0!==S?S:null;(async()=>{await Object(g.a)(N,T)?Object(a.render)(o.a.createElement(i.a,{store:x},o.a.createElement(E,null)),document.getElementById("root")):location.href="/auth"})()}]);