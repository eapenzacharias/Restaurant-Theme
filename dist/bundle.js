!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(r,a),r.locals?r.locals:{});e.exports=i},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],l=n.base?a[0]+n.base:a[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var d=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:b(f,n),references:1}),o.push(u)}return o}function s(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function m(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,h=0;function b(e,n){var t,o,r;if(n.singleton){var a=h++;t=p||(p=s(n)),o=f.bind(null,t,a,!1),r=f.bind(null,t,a,!0)}else t=s(n),o=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=c(t[o]);i[r].references--}for(var a=l(e,n),s=0;s<t.length;s++){var u=c(t[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=a}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,'html {\n  height: 100%;\n}\n\nhtml body {\n  height: 100%;\n}\n\nhtml body #content {\n  height: 100%;\n}\n\nhtml body .home {\n  height: 100%;\n  background-color: #292929;\n}\n\nhtml body .home .col {\n  padding: 0;\n}\n\nhtml body .home .small-box,\nhtml body .home .large-box {\n  border: 5px solid #fff;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\nhtml body .home .large-box {\n  height: 700px;\n  background-color: #490000;\n}\n\nhtml body .home .small-box {\n  height: 350px;\n  background-color: darkgreen;\n}\n\nhtml body nav .nav {\n  margin-top: 10px;\n  min-width: 60%;\n  text-align: center;\n}\n\nhtml body nav .nav a {\n  color: #221717;\n  text-transform: uppercase;\n  text-decoration: none;\n  letter-spacing: 0.15em;\n  display: inline-block;\n  padding: 15px 20px;\n  position: relative;\n  width: 140px;\n}\n\nhtml body nav .nav a:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: "";\n  display: block;\n  height: 2px;\n  left: 50%;\n  position: absolute;\n  background: #221717;\n  -webkit-transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n\nhtml body nav .nav a:hover:after {\n  width: 100%;\n  left: 0;\n}\n\nhtml body nav .nav .active:after {\n  width: 100%;\n  left: 0;\n}',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([r]).join("\n")}var i,c,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},function(e,n,t){"use strict";t.r(n);t(0);var o=function(e){const n=document.getElementById("container");return n.innerHTML="",document.getElementsByClassName("nav-link active")[0].setAttribute("class","nav-link"),document.getElementById(e).classList.add("active"),n};var r=function(){const e=o("home-link"),n=document.createElement("div");n.setAttribute("class","row home");const t=document.createElement("div");t.setAttribute("class","col col-12 col-lg-6 large-box");const r=document.createElement("div");r.setAttribute("class","col col-12 col-lg-6");const a=document.createElement("div");a.setAttribute("class","col col-12 small-box");const i=document.createElement("div");i.setAttribute("class","col col-12 small-box"),n.appendChild(t),r.appendChild(a),r.appendChild(i),n.appendChild(r),e.appendChild(n)};var a=function(){o("menu-link").innerHTML="Menu Page"};var i=function(){o("reserve-link").innerHTML="Reservation Page"};var c=function(){o("contact-link").innerHTML="Contact Page"};var l=function(e){const n=document.createElement("a");n.setAttribute("class","navbar-brand align-self-center m-0 pb-3 position-md-absloute pb-md-0");const t=document.createElement("img");t.setAttribute("class","d-inline-block align-top"),t.src="./img/logo.png",n.appendChild(t),e.appendChild(n);const o=document.createElement("ul");o.setAttribute("class","nav justify-content-around");const l=document.createElement("a");l.setAttribute("id","home-link"),l.innerHTML="HOME",l.onclick=()=>{r()};const s=document.createElement("a");s.setAttribute("id","menu-link"),s.innerHTML="MENU",s.onclick=()=>{a()};const u=document.createElement("a");u.setAttribute("id","reserve-link"),u.innerHTML="RESERVE",u.onclick=()=>{i()};const d=document.createElement("a");d.setAttribute("id","contact-link"),d.innerHTML="CONTACT",d.onclick=()=>{c()},[l,s,u,d].forEach(e=>{const n=document.createElement("li");n.setAttribute("class","nav-item"),e===l?e.setAttribute("class","nav-link active"):e.setAttribute("class","nav-link"),n.appendChild(e),o.appendChild(n)}),e.appendChild(o)};const s=document.getElementById("content"),u=document.createElement("nav");u.setAttribute("class","navbar navbar-expand-lg navbar-light bg-light flex-column");const d=document.createElement("div");d.setAttribute("class","container flex-grow-1"),d.setAttribute("id","container"),s.appendChild(u),l(u),s.appendChild(d),r()}]);