webpackJsonp([5],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(4),u=a(r),l=n(35),o=n(176),c=a(o),s=n(395),d=a(s);(0,l.render)(u["default"].createElement(c["default"],{textarea:!0,flow:!1,tokenizer:d["default"]}),document.getElementById("naive-mount"))},176:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),u=a(r),l=n(32),o=n(24),c=a(o),s=n(393),d=a(s),i=(0,l.compose)((0,l.withState)("input","setInput","")),f=i(function(e){var t=e.tokenizer,n=e.input,a=e.setInput,r=e.textarea,l=void 0===r?!1:r,o=e.flow,s=void 0===o?!0:o,i=l?d["default"]:c["default"],f=n?t(n):[];return u["default"].createElement("div",{style:{width:"55%"}},u["default"].createElement(i,{placeholder:"Enter raw text here...",value:n,onChange:function(e){return a(e.target.value)}}),u["default"].createElement("p",{style:{width:"100%"}},f.map(function(e){return s?u["default"].createElement("span",{className:"token"},e):u["default"].createElement("div",{className:"token"},e)})))});t["default"]=f},393:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.value,n=void 0===t?"":t,a=e.placeholder,r=void 0===a?null:a,u=e.status,o=void 0===u?"default":u,c=e.onChange,s=void 0===c?Function.prototype:c,d="bar-textarea";return"error"===o?d+=" error":"success"===o&&(d+=" success"),l["default"].createElement("div",null,l["default"].createElement("textarea",{placeholder:r,onChange:s,value:n,className:o}),l["default"].createElement("span",{className:d}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var u=n(4),l=a(u)},394:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SIMPLE_QUOTES="’‘`‛'",t.DOUBLE_QUOTES='«»„‟“”"'},395:function(e,t,n){"use strict";function a(e,t){var n=e.replace(l,"$1$2").split(""),a=[];t=u.concat(t||[]).map(function(e){return e+"\\."}).join("|");for(var r=new RegExp("("+t+")$"),i="",f=void 0,p=0,v=n.length;v>p;p++)f=n[p],p===v-1||!r.test(f)&&!s.test(f)&&(d.test(f)||((i+f).match(o)||[]).length%2===0&&((i+f).match(c)||[]).length%2===0)?(a.push(i+(f&&i?" ":"")+f),i=""):i+=(i?" ":"")+f;return a}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=n(394),u=["Mr","Mrs","Ms","Mme","Mlle","Jr","Dr","Prof","Sr","Mgr","St","etc"],l=new RegExp(["([.?!…]+)","(["+r.DOUBLE_QUOTES+"*_]?[*_]?)","[\\s\\r\\n]+","(?=["+r.DOUBLE_QUOTES+r.SIMPLE_QUOTES+"]?[A-Z0-9])"].join(""),"g"),o=new RegExp("["+r.DOUBLE_QUOTES+"]","g"),c=/[(){}\[\]]/g,s=/^[A-Z0-9]\s?[.]\s*$/,d=/^[A-Za-z0-9]\s*\)/}});