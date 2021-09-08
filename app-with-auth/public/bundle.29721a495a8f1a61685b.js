(()=>{"use strict";var t={28:(t,n,e)=>{e.d(n,{Z:()=>i});var o=e(645),r=e.n(o)()((function(t){return t[1]}));r.push([t.id,"/**\n * Body CSS\n */\n\n html,\n body {\n   height: 100%;\n }\n \n html,\n body,\n input,\n textarea,\n button {\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale;\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n }\n \n \n /**\n  * Sidebar CSS\n  */\n \n #sidebar {\n   background-color: #2196F3;\n   padding: 15px;\n }\n \n @media (min-width: 768px) {\n   #sidebar {\n     position: fixed;\n     top: 0;\n     bottom: 0;\n     width: 180px;\n     height: 100%;\n     padding-top: 30px;\n   }\n }\n \n \n /**\n  * Content CSS\n  */\n @media (min-width: 768px) {\n   #content {\n     margin-left: 180px;\n   }\n }\n\n /* select starting stylings ------------------------------*/\n.select {\n  font-family:\n    'Roboto','Helvetica','Arial',sans-serif;\n\tposition: relative;\n\twidth: 350px;\n}\n\n.select-text {\n\tposition: relative;\n\tfont-family: inherit;\n\tbackground-color: transparent;\n\twidth: 350px;\n\tpadding: 10px 10px 10px 0;\n\tfont-size: 18px;\n\tborder-radius: 0;\n\tborder: none;\n\tborder-bottom: 1px solid rgba(0,0,0, 0.12);\n}\n\n/* Remove focus */\n.select-text:focus {\n\toutline: none;\n\tborder-bottom: 1px solid rgba(0,0,0, 0);\n}\n\n\t/* Use custom arrow */\n.select .select-text {\n\tappearance: none;\n\t-webkit-appearance:none\n}\n\n.select:after {\n\tposition: absolute;\n\ttop: 18px;\n\tright: 10px;\n\t/* Styling the down arrow */\n\twidth: 0;\n\theight: 0;\n\tpadding: 0;\n\tcontent: '';\n\tborder-left: 6px solid transparent;\n\tborder-right: 6px solid transparent;\n\tborder-top: 6px solid rgba(0, 0, 0, 0.12);\n\tpointer-events: none;\n}\n\n\n/* LABEL ======================================= */\n.select-label {\n\tcolor: rgba(0,0,0, 0.26);\n\tfont-size: 18px;\n\tfont-weight: normal;\n\tposition: absolute;\n\tpointer-events: none;\n\tleft: 0;\n\ttop: 10px;\n\ttransition: 0.2s ease all;\n}\n\n/* active state */\n.select-text:focus ~ .select-label, .select-text:valid ~ .select-label {\n\tcolor: #2F80ED;\n\ttop: -20px;\n\ttransition: 0.2s ease all;\n\tfont-size: 14px;\n}\n\n/* BOTTOM BARS ================================= */\n.select-bar {\n\tposition: relative;\n\tdisplay: block;\n\twidth: 350px;\n}\n\n.select-bar:before, .select-bar:after {\n\tcontent: '';\n\theight: 2px;\n\twidth: 0;\n\tbottom: 1px;\n\tposition: absolute;\n\tbackground: #2F80ED;\n\ttransition: 0.2s ease all;\n}\n\n.select-bar:before {\n\tleft: 50%;\n}\n\n.select-bar:after {\n\tright: 50%;\n}\n\n/* active state */\n.select-text:focus ~ .select-bar:before, .select-text:focus ~ .select-bar:after {\n\twidth: 50%;\n}\n\n/* HIGHLIGHTER ================================== */\n.select-highlight {\n\tposition: absolute;\n\theight: 60%;\n\twidth: 100px;\n\ttop: 25%;\n\tleft: 0;\n\tpointer-events: none;\n\topacity: 0.5;\n}\n\n.floating-btn {\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n}\n\n.modal {\n  max-width: 600px;\n  max-height: 300px;\n  margin: 100px auto;\n  overflow-y: auto;\n  background: #fff;\n}\n\n.modal > h1 {\n  text-align: center;\n}\n\n.modal .modal-content{\n  padding: 1rem;\n}\n\n.error {\n  color: red;\n}",""]);const i=r},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&r[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},379:t=>{var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var i={},a=[],s=0;s<t.length;s++){var l=t[s],d=o.base?l[0]+o.base:l[0],c=i[d]||0,u="".concat(d," ").concat(c);i[d]=c+1;var p=e(u),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(n[p].references++,n[p].updater(f)):n.push({identifier:u,updater:r(f,o),references:1}),a.push(u)}return a}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=e(i[a]);n[s].references--}for(var l=o(t,r),d=0;d<i.length;d++){var c=e(i[d]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}i=l}}},569:t=>{var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o=e.css,r=e.media,i=e.sourceMap;r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,t)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return t[o](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t=e(379),n=e.n(t),o=e(795),r=e.n(o),i=e(569),a=e.n(i),s=e(565),l=e.n(s),d=e(216),c=e.n(d),u=e(589),p=e.n(u),f=e(28),m={};function h(t){return t.length>=10}function b(t,n){const e=document.createElement("div");e.classList.add("modal"),e.innerHTML=`<h1>${t}</h1>\n        <div class="modal-content">${n}</div>\n    `,mui.overlay("on",e)}m.styleTagTransform=p(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=c(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class v{static create(t){return fetch("https://app-with-auth-e9d45-default-rtdb.europe-west1.firebasedatabase.app/question.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((n=>(t.id=n.name,t))).then(g).then(v.renderList)}static fetch(t){return t?fetch(`https://app-with-auth-e9d45-default-rtdb.europe-west1.firebasedatabase.app/question.json?auth=${t}`).then((t=>t.json())).then((t=>t&&t.error?`<p class="error">${t.error}</p>`:t?Object.keys(t).map((n=>({...t[n],id:n}))):[])):Promise.resolve('<p class="error">Token is missed</p>')}static renderList(){const t=x(),n=t.length?t.map(y).join(" "):'<div class="mui--text-headline">No questions</div>';document.getElementById("list").innerHTML=n}static listToHtml(t){return t.length?`<ol>${t.map((t=>`<li>${t.text}</li>`)).join(" ")}</ol>`:"<p>No Questions</p>"}}function g(t){const n=x();n.push(t),localStorage.setItem("questions",JSON.stringify(n))}function x(){return JSON.parse(localStorage.getItem("questions")||"[]")}function y(t){return`\n    <div class="mui--text-black-54">\n        ${new Date(t.date).toLocaleDateString()}\n        ${new Date(t.date).toLocaleTimeString()}\n    </div>\n    <div>\n        ${t.text}\n    </div>\n    <br>\n    `}const w=document.getElementById("form"),S=w.querySelector("#input-question"),T=w.querySelector("#submit"),E=(w.querySelector("#select"),document.getElementById("modal-btn"));function L(t){t.preventDefault();const n=t.target.querySelector("button");var e,o;(e=t.target.querySelector("#email").value,o=t.target.querySelector("#password").value,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAInWtW54oIXrd0JpASIbkgXTqPQELRfTU",{method:"POST",body:JSON.stringify({email:e,password:o,returnSecureToken:!0}),header:{"Content-Type":"application/json"}}).then((t=>t.json())).then((t=>t.idToken))).then(v.fetch).then(I).then((()=>n.disabled=!1))}function I(t){"string"==typeof t?b("Error!",t):b("List of Questions",v.listToHtml(t))}window.addEventListener("load",v.renderList),w.addEventListener("submit",(function(t){if(t.preventDefault(),console.log(S.value),h(S.value)){const t={text:S.value.trim(),date:(new Date).toJSON()};T.disabled=!0,v.create(t).then((()=>{console.log("Question:",t),S.value="",S.className="",T.disabled=!1}))}})),E.addEventListener("click",(function(){b("Authorization",'\n    <form class="mui-form" id="auth-form">\n        <div class="mui-textfield mui-textfield--float-label">\n            <input type="email" id="email" required>\n            <label for="email">Email</label>\n        </div>\n        <div class="mui-textfield mui-textfield--float-label">\n            <input type="password" id="password" required>\n            <label for="password">Password</label>\n        </div>\n        <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Enter</button>\n    </form>\n    '),document.getElementById("auth-form").addEventListener("submit",L,{once:!0})})),S.addEventListener("input",(()=>{T.disabled=!h(S.value)}))})()})();