!function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);for(l&&l(e);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={4:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([44,0]),n()}([,,function(t,e,n){"use strict";async function a(t,e){if(!t||!e)return!1;const n=JSON.stringify({loginOrEmail:t,password:e});try{return 200==(await fetch("/api/checkAuth",{body:n,method:"POST"})).status}catch{return!1}}async function r(t,e){const n=JSON.stringify({loginOrEmail:t,password:e});let a=null,r=!1;try{const t=await fetch("/api/login",{body:n,method:"POST"});if(r=200==t.status,!r)throw t}catch(t){const e=await t.text();a=0==e.length?"Не удалось отправить данные":e}return{result:r,msg:a}}async function o(t,e,n){const a=JSON.stringify({email:e,login:t,password:n});let r=null,o=!1;try{const t=await fetch("/api/register",{body:a,method:"POST"});if(o=200==t.status,!o)throw t}catch(t){const e=await t.text();r=0==e.length?"Не удалось отправить данные":e}return{result:o,msg:r}}async function i(t){let e=!1,n=null;try{const a=await fetch(`/api/get-country-info?id=${t}`,{method:"GET"});n=JSON.parse(await a.text()),e=!0}catch{}return{result:e,countryInfo:n}}async function s(t,e){let n=!1;const a=[],r=JSON.stringify({loginOrEmail:t,password:e});try{const t=await fetch("/api/get-contacts-list",{method:"POST",body:r});a=JSON.parse(await t.text()).contacts,n=!0}catch{}return{result:n,contacts:a}}async function c(t,e){let n=!1,a=[],r=null;try{const o=await fetch(`/api/get-leaders-list?user=${t}&count=${e}`,{method:"GET"}),i=JSON.parse(await o.text());a=i.leaders,r=i.user,n=!0}catch{}return{result:n,leaders:a,userInfo:r}}async function u(t,e,n){let a=!1,r=null;try{const r=JSON.stringify({loginOrEmail:t,password:e,contactName:n}),o=await fetch("/apt/add-contact",{method:"POST",body:r});if(200!=o.status)throw await o.text();a=!0}catch(t){0==t.length&&(r="Не удалось отправить данные")}return{result:a,message:r}}async function l(t,e,n){let a=!1,r=null,o=null;try{const r=JSON.stringify({loginOrEmail:t,password:e,questType:n}),i=await fetch("/api/start-quest",{method:"POST",body:r});if(200!=i.status)throw await i.text();o=JSON.parse(await i.text()),a=!0}catch(t){0==t.length&&(r="Не удалось отправить данные")}return{result:a,message:r,data:o}}async function p(t,e){let n=!1,a=null,r=null;try{const a=JSON.stringify({loginOrEmail:t,password:e}),o=await fetch("api/check-quest",{method:"POST",body:a});200==o.status&&(r=JSON.parse(await o.text()),n=!0)}catch(t){a="[check-quest] Не удалось отправить данные"}return{result:n,message:a,data:r}}n.d(e,"a",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"g",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"b",(function(){return p})),n.d(e,"i",(function(){return l}))},,,,function(t,e,n){t.exports=n.p+"static/pull/images/crown.png"},function(t,e,n){t.exports=n.p+"static/pull/images/deleteIcon.png"},function(t,e,n){t.exports=n.p+"static/pull/images/friends.png"},function(t,e,n){t.exports=n.p+"static/pull/images/info.png"},function(t,e,n){t.exports=n.p+"static/pull/images/list.png"},function(t,e,n){t.exports=n.p+"static/pull/images/medal.png"},function(t,e,n){t.exports=n.p+"static/pull/images/minus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/plus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/reset.png"},function(t,e,n){t.exports=n.p+"static/pull/images/wiki.png"},function(t,e,n){"use strict";n(17),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(18),n(13),n(14),n(19),n(20),n(15),n(21),n(22),n(23),n(24),n(25),n(26)},function(t,e,n){t.exports=n.p+"static/pull/fonts/Roboto.ttf"},function(t,e,n){t.exports=n.p+"static/pull/images/planet.png"},function(t,e,n){t.exports=n.p+"static/pull/images/sattelite.png"},function(t,e,n){t.exports=n.p+"static/pull/images/spaceBlock.png"},function(t,e,n){},function(t,e,n){t.exports={panZoom:"_20HIHXdy1ra6spmNQx3cHj"}},function(t,e,n){t.exports={fade:"pVlqShqpPbOUn-ssalXSj","slide-right":"B9ak37oPz6lQEiNfwPc2U","slide-left":"_2jWkxyGpKUY4e7A8t5XPr9"}},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(45),n(16);var a=n(0),r=n.n(a),o=n(4),i=n(2);Object(o.render)(r.a.createElement((function(){const[t,e]=Object(a.useState)({email:"",login:"",password:""}),[n,o]=Object(a.useState)(null),[s,c]=Object(a.useState)(!1);return r.a.createElement("div",{className:"auth-container"},r.a.createElement("p",null,"Бесплатная регистрация"),r.a.createElement("form",{onSubmit:e=>{e.preventDefault(),async function(t,e,n){if(s)return;c(!0),o(null);const a=await Object(i.h)(e,t,n);a.result?(localStorage.setItem("login",e),localStorage.setItem("password",n),location.href="/app"):o(a.msg),c(!1)}(t.email,t.login,t.password)}},r.a.createElement("input",{id:"email-inp",placeholder:"Электронная почта",type:"email",required:!0,autoComplete:"off",onChange:n=>{e({...t,email:n.target.value})}}),r.a.createElement("input",{id:"login-inp",placeholder:"Логин",type:"text",required:!0,autoComplete:"off",onChange:n=>{e({...t,login:n.target.value})}}),r.a.createElement("input",{id:"passw-inp",placeholder:"Пароль",type:"password",required:!0,autoComplete:"off",onChange:n=>{e({...t,password:n.target.value})}}),r.a.createElement("p",{className:"error-msg"},n),r.a.createElement("input",{className:"submit",value:s?"Отправка...":"Создать профиль",type:"submit"})),r.a.createElement("a",{href:"/auth"},"У меня уже есть профиль"))}),null),document.getElementById("auth"))},function(t,e,n){t.exports={rotation:"_3d1kdYAgKoVr2tIXoiNWDq",scaleUpDown:"_2gSEjdEQkR94TeouDZKvN4"}}]);