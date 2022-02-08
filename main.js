(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1em;\n    \n    color: rgb(243, 243, 243);\n    background-color: rgb(38, 76, 102);\n    font-weight: bold;\n}\n\n#content {\n    margin: 1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 1em;\n}\n\n.project-container-style {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;  \n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    border-radius: 10%;\n}\n\n.project-title-style {\n    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    color: rgb(243, 243, 243);\n    background-color: rgb(38, 76, 102);\n    padding: 1em;\n}\n\n.to-do-style {\n    display: flex;\n    gap: 0.1em;\n    margin: 1em;\n}\n\n.add-entry-style {\n    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    margin: 1em;\n    color: white;\n    background-color: green;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    padding: 1em;   \n}\n\n.add-project-style {\n    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n\n    color: white;\n    background-color: green;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    padding: 1em;\n}\n\n\n.remove-entry-style {\n    color: white;\n    background-color: darkred;\n    padding: 0.5em;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n}\n\n.add-project-style:hover, .add-entry-style:hover, .remove-entry-style:hover {\n    filter: brightness(80%);\n    cursor: pointer;\n}\n\n.projectitlewrapper {\n display: flex;\n justify-content: center;\n align-items: center;\n}\n\n",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{function e(e){const n=document.createElement("div"),t=document.createElement("input");t.setAttribute("type","checkbox");const r=document.createElement("input");r.innerText="This is the to do container.",n.classList.add("to-do-style");const o=document.createElement("div");o.innerText="X",o.classList.add("remove-entry-style"),o.onclick=()=>{e.childNodes[1].removeChild(n)},n.append(o),n.append(t),n.append(r),e.childNodes[1].appendChild(n)}function n(n){const t=document.createElement("div");t.classList.add("project-title-style");const r=document.createElement("div");r.appendChild(t);const o=document.createElement("div"),a=document.createElement("div");a.classList.add("add-entry-style"),t.innerText=n,a.innerText="+";const c=document.createElement("div");c.classList.add("project-container-style");const i=document.createElement("div");return i.innerText="Remove project",i.classList.add("remove-entry-style"),i.onclick=()=>{c.parentNode.removeChild(c)},r.appendChild(i),r.classList.add("projecttitlewrapper"),c.appendChild(r),c.appendChild(o),c.appendChild(a),e(c),a.onclick=()=>{e(c)},c}var r=t(379),o=t.n(r),a=t(795),c=t.n(a),i=t(569),s=t.n(i),d=t(565),l=t.n(d),p=t(216),u=t.n(p),m=t(589),f=t.n(m),v=t(426),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=u(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals,console.log("Test"),function(){const e=n("Default"),t=document.querySelector("#content");t.appendChild(e);const r=document.createElement("div");r.innerText="Add new Project",r.classList.add("add-project-style"),r.onclick=()=>{t.removeChild(r);let e=prompt("Enter name of project:");t.appendChild(n(e)),t.appendChild(r)},t.appendChild(r)}()})()})();