!function(t){function e(e){for(var o,a,l=e[0],p=e[1],u=e[2],c=0,f=[];c<l.length;c++)a=l[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(t[o]=p[o]);for(s&&s(e);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var p=n[l];0!==r[p]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={4:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],p=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=p;i.push([42,0]),n()}([,,,,,function(t,e,n){t.exports=n.p+"static/pull/images/crown.png"},function(t,e,n){t.exports=n.p+"static/pull/images/friends.png"},function(t,e,n){t.exports=n.p+"static/pull/images/info.png"},function(t,e,n){t.exports=n.p+"static/pull/images/list.png"},function(t,e,n){t.exports=n.p+"static/pull/images/medal.png"},function(t,e,n){t.exports=n.p+"static/pull/images/minus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/plus.png"},function(t,e,n){t.exports=n.p+"static/pull/images/reset.png"},function(t,e,n){t.exports=n.p+"static/pull/images/wiki.png"},function(t,e,n){"use strict";n(15),n(5),n(6),n(7),n(8),n(9),n(10),n(16),n(11),n(12),n(17),n(18),n(13),n(19),n(20),n(21),n(22),n(23),n(24)},function(t,e,n){t.exports=n.p+"static/pull/fonts/Roboto.ttf"},function(t,e,n){t.exports=n.p+"static/pull/images/planet.png"},function(t,e,n){t.exports=n.p+"static/pull/images/sattelite.png"},function(t,e,n){t.exports=n.p+"static/pull/images/spaceBlock.png"},function(t,e,n){},function(t,e,n){},function(t,e,n){t.exports={fade:"pVlqShqpPbOUn-ssalXSj","slide-right":"B9ak37oPz6lQEiNfwPc2U","slide-left":"_2jWkxyGpKUY4e7A8t5XPr9"}},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(43),n(14);var o=n(0),r=n.n(o),i=n(3);Object(i.render)(r.a.createElement((function(){const[t,e]=Object(o.useState)({email:"",login:"",password:""});return r.a.createElement("div",{className:"auth-container"},r.a.createElement("p",null,"Бесплатная регистрация"),r.a.createElement("form",{onSubmit:e=>{e.preventDefault(),async function(t,e,n){const o=JSON.stringify({email:t,login:e,password:n});try{const t=await fetch("/api/register",{body:o,method:"POST"});console.log(t.body)}catch(t){console.log(t)}}(t.email,t.login,t.password)}},r.a.createElement("input",{id:"email-inp",placeholder:"Электронная почта",type:"email",required:!0,autoComplete:"off",onChange:n=>{e({...t,email:n.target.value})}}),r.a.createElement("input",{id:"login-inp",placeholder:"Логин",type:"text",required:!0,autoComplete:"off",onChange:n=>{e({...t,login:n.target.value})}}),r.a.createElement("input",{id:"passw-inp",placeholder:"Пароль",type:"password",required:!0,autoComplete:"off",onChange:n=>{e({...t,password:n.target.value})}}),r.a.createElement("input",{className:"submit",value:"Создать аккаунт",type:"submit"})),r.a.createElement("a",{href:"/auth.html"},"У меня уже есть профиль"))}),null),document.getElementById("auth"))},function(t,e,n){t.exports={rotation:"_3d1kdYAgKoVr2tIXoiNWDq",scaleUpDown:"_2gSEjdEQkR94TeouDZKvN4"}}]);