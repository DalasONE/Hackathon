!function(t){function e(e){for(var o,i,s=e[0],l=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(c&&c(e);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={4:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;a.push([44,0]),n()}([,,,function(t,e,n){"use strict";async function o(t,e){if(!t||!e)return!1;const n=JSON.stringify({loginOrEmail:t,password:e});try{return 200==(await fetch("/api/checkAuth",{body:n,method:"POST"})).status}catch{return!1}}async function r(t,e){const n=JSON.stringify({loginOrEmail:t,password:e});let o=null,r=!1;try{const t=await fetch("/api/login",{body:n,method:"POST"});if(r=200==t.status,!r)throw t}catch(t){const e=await t.text();o=0==e.length?"Не удалось отправить данные":e}return{result:r,msg:o}}async function a(t,e,n){const o=JSON.stringify({email:e,login:t,password:n});let r=null,a=!1;try{const t=await fetch("/api/register",{body:o,method:"POST"});if(a=200==t.status,!a)throw t}catch(t){const e=await t.text();r=0==e.length?"Не удалось отправить данные":e}return{result:a,msg:r}}async function i(t){let e=null;try{const n=await fetch(`/api/get-country-info?id=${t}`,{method:"GET"});e=JSON.parse(await n.json()),res=!0}catch{}return{result:!1,countryInfo:e}}n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i}))},,,function(t,e,n){t.exports=n.p+"static/pull/images/crown.png"},function(t,e,n){t.exports=n.p+"static/pull/images/deleteIcon.png"},function(t,e,n){t.exports=n.p+"static/pull/images/friends.png"},function(t,e,n){t.exports=n.p+"static/pull/images/info.png"},function(t,e,n){t.exports=n.p+"static/pull/images/list.png"},function(t,e,n){t.exports=n.p+"static/pull/images/medal.png"},function(t,e,n){t.exports=n.p+"static/pull/images/minus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/plus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/reset.png"},function(t,e,n){t.exports=n.p+"static/pull/images/wiki.png"},function(t,e,n){"use strict";n(17),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(18),n(13),n(14),n(19),n(20),n(15),n(21),n(22),n(23),n(24),n(25),n(26)},function(t,e,n){t.exports=n.p+"static/pull/fonts/Roboto.ttf"},function(t,e,n){t.exports=n.p+"static/pull/images/planet.png"},function(t,e,n){t.exports=n.p+"static/pull/images/sattelite.png"},function(t,e,n){t.exports=n.p+"static/pull/images/spaceBlock.png"},function(t,e,n){},function(t,e,n){t.exports={panZoom:"_20HIHXdy1ra6spmNQx3cHj"}},function(t,e,n){t.exports={fade:"pVlqShqpPbOUn-ssalXSj","slide-right":"B9ak37oPz6lQEiNfwPc2U","slide-left":"_2jWkxyGpKUY4e7A8t5XPr9"}},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(45),n(16);var o=n(0),r=n.n(o),a=n(4),i=n(3);Object(a.render)(r.a.createElement((function(){const[t,e]=Object(o.useState)({email:"",login:"",password:""}),[n,a]=Object(o.useState)(null),[s,l]=Object(o.useState)(!1);return r.a.createElement("div",{className:"auth-container"},r.a.createElement("p",null,"Бесплатная регистрация"),r.a.createElement("form",{onSubmit:e=>{e.preventDefault(),async function(t,e,n){if(s)return;l(!0),a(null);const o=await Object(i.d)(e,t,n);o.result?(localStorage.setItem("login",e),localStorage.setItem("password",n),location.href="/app"):a(o.msg),l(!1)}(t.email,t.login,t.password)}},r.a.createElement("input",{id:"email-inp",placeholder:"Электронная почта",type:"email",required:!0,autoComplete:"off",onChange:n=>{e({...t,email:n.target.value})}}),r.a.createElement("input",{id:"login-inp",placeholder:"Логин",type:"text",required:!0,autoComplete:"off",onChange:n=>{e({...t,login:n.target.value})}}),r.a.createElement("input",{id:"passw-inp",placeholder:"Пароль",type:"password",required:!0,autoComplete:"off",onChange:n=>{e({...t,password:n.target.value})}}),r.a.createElement("p",{className:"error-msg"},n),r.a.createElement("input",{className:"submit",value:s?"Отправка...":"Создать профиль",type:"submit"})),r.a.createElement("a",{href:"/auth"},"У меня уже есть профиль"))}),null),document.getElementById("auth"))},function(t,e,n){t.exports={rotation:"_3d1kdYAgKoVr2tIXoiNWDq",scaleUpDown:"_2gSEjdEQkR94TeouDZKvN4"}}]);