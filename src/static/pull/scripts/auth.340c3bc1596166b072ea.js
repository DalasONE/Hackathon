!function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={2:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([48,0]),n()}([,,,,function(t,e,n){"use strict";async function r(t,e){if(!t||!e)return!1;const n=JSON.stringify({loginOrEmail:t,password:e});try{return 200==(await fetch("/api/checkAuth",{body:n,method:"POST"})).status}catch{return!1}}async function o(t,e){const n=JSON.stringify({loginOrEmail:t,password:e});let r=null,o=!1;try{const t=await fetch("/api/login",{body:n,method:"POST"});if(o=200==t.status,!o)throw t}catch(t){const e=await t.text();r=0==e.length?"Не удалось отправить данные":e}return{result:o,msg:r}}async function a(t,e,n){const r=JSON.stringify({email:e,login:t,password:n});let o=null,a=!1;try{const t=await fetch("/api/register",{body:r,method:"POST"});if(a=200==t.status,!a)throw t}catch(t){const e=await t.text();o=0==e.length?"Не удалось отправить данные":e}return{result:a,msg:o}}n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return o}))},,function(t,e,n){t.exports=n.p+"static/pull/images/crown.png"},function(t,e,n){t.exports=n.p+"static/pull/images/deleteIcon.png"},function(t,e,n){t.exports=n.p+"static/pull/images/friends.png"},function(t,e,n){t.exports=n.p+"static/pull/images/info.png"},function(t,e,n){t.exports=n.p+"static/pull/images/list.png"},function(t,e,n){t.exports=n.p+"static/pull/images/medal.png"},function(t,e,n){t.exports=n.p+"static/pull/images/minus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/plus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/reset.png"},function(t,e,n){t.exports=n.p+"static/pull/images/wiki.png"},function(t,e,n){"use strict";n(17),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(18),n(13),n(14),n(19),n(20),n(15),n(21),n(22),n(23),n(24),n(25),n(26)},function(t,e,n){t.exports=n.p+"static/pull/fonts/Roboto.ttf"},function(t,e,n){t.exports=n.p+"static/pull/images/planet.png"},function(t,e,n){t.exports=n.p+"static/pull/images/sattelite.png"},function(t,e,n){t.exports=n.p+"static/pull/images/spaceBlock.png"},function(t,e,n){},function(t,e,n){t.exports={panZoom:"_20HIHXdy1ra6spmNQx3cHj"}},function(t,e,n){t.exports={fade:"pVlqShqpPbOUn-ssalXSj","slide-right":"B9ak37oPz6lQEiNfwPc2U","slide-left":"_2jWkxyGpKUY4e7A8t5XPr9"}},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));n(16),n(49);var r=n(0),o=n.n(r),a=n(3),i=n(4);function s(){const[t,e]=Object(r.useState)({login:"",password:""}),[n,a]=Object(r.useState)(!1),[s,u]=Object(r.useState)(null);return o.a.createElement("div",{className:"auth-container"},o.a.createElement("h3",null,"Вход в профиль"),o.a.createElement("form",{onSubmit:e=>{e.preventDefault(),async function(t,e){if(n)return;a(!0),u(null);const r=await Object(i.b)(t,e);r.result?(localStorage.setItem("login",t),localStorage.setItem("password",e),location.href="/app"):u(r.msg),a(!1)}(t.login,t.password)}},o.a.createElement("input",{placeholder:"Логин или Почта",type:"text",autoComplete:"off",required:!0,onChange:n=>{e({...t,login:n.target.value})}}),o.a.createElement("input",{placeholder:"Пароль",type:"password",autoComplete:"off",required:!0,onChange:n=>{e({...t,password:n.target.value})}}),o.a.createElement("p",{className:"error-msg"},s),o.a.createElement("input",{value:n?"Отправка...":"Войти",type:"submit"})),o.a.createElement("a",{href:"/intro"},"У меня еще нет профиля"))}Object(a.render)(o.a.createElement(s,null),document.getElementById("auth"))},function(t,e,n){}]);