!function(t){function e(e){for(var o,r,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);for(p&&p(e);f.length;)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={1:0},a={1:0},c=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[];r[t]?e.push(r[t]):0!==r[t]&&{6:1}[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="./static/pull/styles/"+t+"."+{6:"06603f96736e1e160ce6",7:"31d6cfe0d16ae931b73c"}[t]+".css",a=i.p+o,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=(p=c[u]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(s===o||s===a))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){var p;if((s=(p=l[u]).getAttribute("data-href"))===o||s===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[t],f.parentNode.removeChild(f),n(c)},f.href=a,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){r[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(t){return i.p+"static/pull/scripts/"+({}[t]||t)+"."+{6:"66f85fc8370d83a5bece",7:"8b4a7d5b8094a81ff962"}[t]+".js"}(t);var s=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,n[1](s)}a[t]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=s;c.push([50,0,5]),n()}([,,function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return i}));const o="SET_PANZOOM",r="SHOW_MODAL",a="HIDE_MODAL",c="CLOSE_INTERFACE_PANEL",i="OPEN_INTERFACE_PANEL"},function(t,e,n){"use strict";async function o(t,e){if(!t||!e)return!1;const n=JSON.stringify({loginOrEmail:t,password:e});try{return 200==(await fetch("/api/checkAuth",{body:n,method:"POST"})).status}catch{return!1}}async function r(t,e){const n=JSON.stringify({loginOrEmail:t,password:e});let o=null,r=!1;try{const t=await fetch("/api/login",{body:n,method:"POST"});if(r=200==t.status,!r)throw t}catch(t){const e=await t.text();o=0==e.length?"Не удалось отправить данные":e}return{result:r,msg:o}}async function a(t,e,n){const o=JSON.stringify({email:e,login:t,password:n});let r=null,a=!1;try{const t=await fetch("/api/register",{body:o,method:"POST"});if(a=200==t.status,!a)throw t}catch(t){const e=await t.text();r=0==e.length?"Не удалось отправить данные":e}return{result:a,msg:r}}async function c(t){let e=null;try{const n=await fetch(`/api/get-country-info?id=${t}`,{method:"GET"});e=JSON.parse(await n.json()),res=!0}catch{}return{result:!1,countryInfo:e}}n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return c}))},,,function(t,e,n){t.exports=n.p+"static/pull/images/crown.png"},function(t,e,n){t.exports=n.p+"static/pull/images/deleteIcon.png"},function(t,e,n){t.exports=n.p+"static/pull/images/friends.png"},function(t,e,n){t.exports=n.p+"static/pull/images/info.png"},function(t,e,n){t.exports=n.p+"static/pull/images/list.png"},function(t,e,n){t.exports=n.p+"static/pull/images/medal.png"},function(t,e,n){t.exports=n.p+"static/pull/images/minus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/plus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/reset.png"},function(t,e,n){t.exports=n.p+"static/pull/images/wiki.png"},function(t,e,n){"use strict";n(17),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(18),n(13),n(14),n(19),n(20),n(15),n(21),n(22),n(23),n(24),n(25),n(26)},function(t,e,n){t.exports=n.p+"static/pull/fonts/Roboto.ttf"},function(t,e,n){t.exports=n.p+"static/pull/images/planet.png"},function(t,e,n){t.exports=n.p+"static/pull/images/sattelite.png"},function(t,e,n){t.exports=n.p+"static/pull/images/spaceBlock.png"},function(t,e,n){},function(t,e,n){t.exports={panZoom:"_20HIHXdy1ra6spmNQx3cHj"}},function(t,e,n){t.exports={fade:"pVlqShqpPbOUn-ssalXSj","slide-right":"B9ak37oPz6lQEiNfwPc2U","slide-left":"_2jWkxyGpKUY4e7A8t5XPr9"}},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,function(t,e,n){t.exports={spinner:"_3C6QkPOpTN9nlETDXdXD_a","sk-scaleout":"T2DqBJx2oY-pZnW4AtjxN"}},,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(4),c=n(27),i=n(31),u=n(2);const s={zoomIn:null,zoomOut:null,resetZoom:null};const l={component:null,data:null,show:!1};const p={show:!1,Component:null,data:null};var f=Object(c.b)({panZoom:function(t=s,e){switch(e.type){case u.d:const{zoomIn:n,zoomOut:o,resetZoom:r}=e;t={zoomIn:n,zoomOut:o,resetZoom:r}}return t},modals:function(t=l,e){switch(e.type){case u.e:t={component:e.component,data:e.data,show:!0};break;case u.b:t={component:null,data:null,show:!1}}return t},mapInterface:function(t=p,e){switch(e.type){case u.c:t={show:!0,Component:e.Component,data:e.data};break;case u.a:t={show:!1,Component:null,data:null}}return t}}),d=n(3),m=n(34),g=n.n(m);function h({center:t}){return r.a.createElement("div",{className:g.a.spinner})}var y,b,w;n(16);const v=Object(o.lazy)(()=>Promise.all([n.e(7),n.e(6)]).then(n.bind(null,89)));function O(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Suspense,{fallback:r.a.createElement(h,{center:!0})},r.a.createElement(v,null)))}const E=Object(c.c)(f),x=null!==(y=null!==(b=localStorage.getItem("login"))&&void 0!==b?b:localStorage.getItem("email"))&&void 0!==y?y:null,S=null!==(w=localStorage.getItem("password"))&&void 0!==w?w:null;(async()=>{await Object(d.a)(x,S)?Object(a.render)(r.a.createElement(i.a,{store:E},r.a.createElement(O,null)),document.getElementById("root")):location.href="/auth"})()}]);