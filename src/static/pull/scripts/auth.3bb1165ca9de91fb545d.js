!function(t){function e(e){for(var o,i,c=e[0],s=e[1],u=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);for(l&&l(e);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={2:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([49,0]),n()}([,function(t,e,n){"use strict";async function o(t){let e=!1,n=null;try{const o=await fetch(`/api/get-country-info?id=${t}`,{method:"GET"});console.log("RESP INFO:",await o.text(),o),n=JSON.parse(await o.json()),console.log("COUNTRY INFO RESULT(JSON):",await o.json()),console.log("COUNTRY INFO RESULT:",n),e=!0}catch{}return{result:e,countryInfo:n}}async function r(t,e){let n=!1;const o=[],r=JSON.stringify({loginOrEmail:t,password:e});try{const t=await fetch("/api/get-contacts-list",{method:"POST",body:r});o=JSON.parse(t.json()).contacts,n=!0}catch{}return{result:n,contacts:o}}n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}))},,,function(t,e,n){"use strict";async function o(t,e){if(!t||!e)return!1;const n=JSON.stringify({loginOrEmail:t,password:e});try{return 200==(await fetch("/api/checkAuth",{body:n,method:"POST"})).status}catch{return!1}}async function r(t,e){const n=JSON.stringify({loginOrEmail:t,password:e});let o=null,r=!1;try{const t=await fetch("/api/login",{body:n,method:"POST"});if(r=200==t.status,!r)throw t}catch(t){const e=await t.text();o=0==e.length?"Не удалось отправить данные":e}return{result:r,msg:o}}async function a(t,e,n){const o=JSON.stringify({email:e,login:t,password:n});let r=null,a=!1;try{const t=await fetch("/api/register",{body:o,method:"POST"});if(a=200==t.status,!a)throw t}catch(t){const e=await t.text();r=0==e.length?"Не удалось отправить данные":e}return{result:a,msg:r}}var i=n(1);n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i.b}))},,,function(t,e,n){t.exports=n.p+"static/pull/images/crown.png"},function(t,e,n){t.exports=n.p+"static/pull/images/deleteIcon.png"},function(t,e,n){t.exports=n.p+"static/pull/images/friends.png"},function(t,e,n){t.exports=n.p+"static/pull/images/info.png"},function(t,e,n){t.exports=n.p+"static/pull/images/list.png"},function(t,e,n){t.exports=n.p+"static/pull/images/medal.png"},function(t,e,n){t.exports=n.p+"static/pull/images/minus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/plus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/reset.png"},function(t,e,n){t.exports=n.p+"static/pull/images/wiki.png"},function(t,e,n){"use strict";n(18),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(19),n(14),n(15),n(20),n(21),n(16),n(22),n(23),n(24),n(25),n(26),n(27)},function(t,e,n){t.exports=n.p+"static/pull/fonts/Roboto.ttf"},function(t,e,n){t.exports=n.p+"static/pull/images/planet.png"},function(t,e,n){t.exports=n.p+"static/pull/images/sattelite.png"},function(t,e,n){t.exports=n.p+"static/pull/images/spaceBlock.png"},function(t,e,n){},function(t,e,n){t.exports={panZoom:"_20HIHXdy1ra6spmNQx3cHj"}},function(t,e,n){t.exports={fade:"pVlqShqpPbOUn-ssalXSj","slide-right":"B9ak37oPz6lQEiNfwPc2U","slide-left":"_2jWkxyGpKUY4e7A8t5XPr9"}},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));n(17),n(50);var o=n(0),r=n.n(o),a=n(5),i=n(4);function c(){const[t,e]=Object(o.useState)({login:"",password:""}),[n,a]=Object(o.useState)(!1),[c,s]=Object(o.useState)(null);return r.a.createElement("div",{className:"auth-container"},r.a.createElement("h3",null,"Вход в профиль"),r.a.createElement("form",{onSubmit:e=>{e.preventDefault(),async function(t,e){if(n)return;a(!0),s(null);const o=await Object(i.c)(t,e);o.result?(localStorage.setItem("login",t),localStorage.setItem("password",e),location.href="/app"):s(o.msg),a(!1)}(t.login,t.password)}},r.a.createElement("input",{placeholder:"Логин или Почта",type:"text",autoComplete:"off",required:!0,onChange:n=>{e({...t,login:n.target.value})}}),r.a.createElement("input",{placeholder:"Пароль",type:"password",autoComplete:"off",required:!0,onChange:n=>{e({...t,password:n.target.value})}}),r.a.createElement("p",{className:"error-msg"},c),r.a.createElement("input",{value:n?"Отправка...":"Войти",type:"submit"})),r.a.createElement("a",{href:"/intro"},"У меня еще нет профиля"))}Object(a.render)(r.a.createElement(c,null),document.getElementById("auth"))},function(t,e,n){}]);