!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=33)}([function(e,t,n){"use strict";var r=n(3),i=Object.prototype.toString;function o(e){return"[object Array]"===i.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===i.call(e)}function h(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:h,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):o(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)h(arguments[r],n);return t},extend:function(e,t,n){return h(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},function(e,t,n){"use strict";var r=n(12),i=n.n(r),o=n(13),a=n.n(o),s=n(14),c=i()((function(e){return e[1]}));c.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);"]);var u=a()(s.a);c.push([e.i,"*{font-family:'Press Start 2P', cursive}html,body{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}html.init,body.init{background-image:url("+u+")}h1{color:white}button{background-color:#242729;color:white;border-width:1px;border-radius:15px;border-color:white;width:20vw;height:5vh;font-size:large}button:hover{background-color:#35393b}button.initBut{width:30vw;height:8vh}button.ansBut{margin:20px;width:30vw;height:10vh;font-size:larger}button.ansButCorrect{background-color:chartreuse;margin:20px;width:30vw;height:10vh;font-size:larger}button.ansButInCorrect{background-color:rgba(255,0,13,0.911);margin:20px;width:30vw;height:10vh;font-size:larger}button.ansCorrect{background-color:rgba(243,200,8,0.911);margin:20px;width:30vw;height:10vh;font-size:larger}select{background-color:#242729;border-width:1px;border-radius:15px;border-color:white;color:white;width:25vw;height:5vh;margin:2vh;font-size:large;display:flex;flex-direction:row;justify-content:center;align-items:center}select:hover{background-color:#35393b}selectoption{text-align:center}.qContainer{width:90%;height:90%;display:flex;flex-direction:column;justify-content:center;align-items:center}.warning{color:red}.showCanvas{width:100%;height:100%;z-index:-1;position:fixed}.dontShowCanvas{width:0%;height:0%;position:fixed}.fade{position:relative;width:100%;min-height:5vh;top:-800px;background-image:linear-gradient(0deg, transparent, black 75%);z-index:-10}.description{margin-top:40px;color:#feda4a;font-size:100%;font-weight:600;letter-spacing:6px;text-align:justify}.star-wars{margin-top:400px;width:50%;align-self:center;flex-shrink:3;z-index:-10;display:flex;justify-content:center;position:relative;height:80px;color:#feda4a;font-family:'Pathway Gothic One', sans-serif;font-size:100%;font-weight:600;letter-spacing:6px;line-height:150%;perspective:400px;text-align:justify}.crawl{position:relative;top:9999px;transform-origin:50% 100%;animation:crawl 200s linear}.crawl>.title{font-size:90%;text-align:center}.crawl>.title h1{margin:0 0 100px;text-transform:uppercase}@keyframes crawl{0%{top:0;transform:rotateX(20deg) translateZ(0)}100%{top:-6000px;transform:rotateX(25deg) translateZ(-2500px)}}\n",""]),t.a=c},function(e,t,n){e.exports=n(15)},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),i=n(21),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n(7)),s),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c}).call(this,n(20))},function(e,t,n){"use strict";var r=n(0),i=n(22),o=n(24),a=n(4),s=n(25),c=n(28),u=n(29),h=n(8);e.exports=function(e){return new Promise((function(t,n){var l=e.data,f=e.headers;r.isFormData(l)&&delete f["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";f.Authorization="Basic "+btoa(p+":"+m)}var v=s(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};i(t,n,o),d=null}},d.onabort=function(){d&&(n(h("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(h("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(h(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||u(v))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(f,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete f[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),n(e),d=null)})),l||(l=null),d.send(l)}))}},function(e,t,n){"use strict";var r=n(23);e.exports=function(e,t,n,i,o){var a=new Error(e);return r(a,t,n,i,o)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={},i=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(e[i],t[i])}r.forEach(i,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(o,u),r.forEach(a,(function(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(void 0,t[i])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var h=i.concat(o).concat(a).concat(s),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===h.indexOf(e)}));return r.forEach(l,u),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],u=n[c]||0,h="".concat(c," ").concat(u);n[c]=u+1;var l=s(h),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:h,updater:v(f,t),references:1}),r.push(h)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var h,l=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function d(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function v(e,t){var n,r,i;if(t.singleton){var o=m++;n=p||(p=u(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(t),r=d.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);a[i].references--}for(var o=c(e,t),u=0;u<n.length;u++){var h=s(n[u]);0===a[h].references&&(a[h].updater(),a.splice(h,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";t.a=n.p+"6802cc2de5df70b83d6c638864a6bf5c.gif"},function(e,t,n){"use strict";var r=n(0),i=n(3),o=n(16),a=n(9);function s(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var c=s(n(6));c.Axios=o,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(10),c.CancelToken=n(30),c.isCancel=n(5),c.all=function(e){return Promise.all(e)},c.spread=n(31),c.isAxiosError=n(32),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(0),i=n(4),o=n(17),a=n(18),s=n(9);function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(0);function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},function(e,t,n){"use strict";var r=n(0),i=n(19),o=n(5),a=n(6);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=i(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(s(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],h=!1,l=-1;function f(){h&&c&&(h=!1,c.length?u=c.concat(u):l=-1,u.length&&d())}function d(){if(!h){var e=s(f);h=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,h=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||h||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(8);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(26),i=n(27);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(10);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},function(e,t,n){"use strict";n.r(t),n.d(t,"canvas",(function(){return de})),n.d(t,"finish",(function(){return Ce})),n.d(t,"shotAudio",(function(){return he}));var r=n(11),i=n.n(r),o=n(1),a={insert:"head",singleton:!1},s=(i()(o.a,a),o.a.locals,n(2)),c=n.n(s);function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}var f=window.canvas.getContext("2d"),d=0,p=[],m=[],v=function(){function e(){var t=this;u(this,e),this.x=0,this.y=0,this.width=window.canvas.width,this.height=window.canvas.height,this.img=new Image,this.img.src="https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png",this.img.onload=function(){t.draw()}}return l(e,[{key:"draw",value:function(){f.drawImage(this.img,this.x,this.y,this.width,this.height)}}]),e}(),g=new(function(){function e(){var t=this;u(this,e),this.width=50,this.height=40,this.y=window.canvas.height-this.height,this.x=40,this.img=new Image,this.img.src="https://previews.dropbox.com/p/thumb/ABAcg5Xl-d-RRZAdpMvTtjwcnlizHF1i2HCbYMUp2t4WAOx1Wx-KdqasI-YbUiZjL0E-baPppS0_nl9gBv4a3CdTkmJhPd9DcrC0e6Xm8enZWeDEPJef9qp6IA1vckW6xenoc5Qu6h1X8JLYXIWSELS0YQ4zIx5cTiAkfaFEmgmu3r4eC7lHNQbmLyXWWx23JQwPdlcHgiw7chlgSxo9efK1lZO9yRwPU6GVwPUn0DpSkrCuQShuE2ENMTx3AR0X_VuC4sPB08Eqvdf51tr80dNehFe8ob8HEL0VIzRCWUZ3vawQ4R-uPGjYV4L2VQBizUTWJNkOxb15Iu4ie24Q9Q3N9Qets7I_PUm6Kw-He-jpsw/p.png?fv_content=true&size_mode=5",this.img.onload=function(){t.draw()}}return l(e,[{key:"draw",value:function(){f.drawImage(this.img,this.x,this.y,this.width,this.height)}},{key:"shot",value:function(){x(this.x,this.y,"xwing"),C()}},{key:"moveLeft",value:function(){this.x>=40&&(this.x-=1)}},{key:"moveRight",value:function(){this.x<=200&&(this.x+=1)}},{key:"lastMove",value:function(){this.x<125?this.x+=1:this.x>125&&(this.x-=1)}}]),e}());var w=new(function(){function e(){var t=this;u(this,e),this.width=80,this.height=40,this.y=this.height-15,this.x=25,this.img=new Image,this.img.src="https://previews.dropbox.com/p/thumb/ABAzThjXcVARB-N9_T9L2uxUQ2naJgvjaIwrvR8T7LYb-Pez0v-18COB5BdOpyGxSlhp3OolCbUIPH-iER4OjBkM00MSQAYnhvzFtGS5vkKiMvtQadcffU11Fyn6RCV-4JNio73uzT50O_wniNHNTvih4zOC6eT6vFxY-vgUN1P_ie202vCW4ZAun6gxlO-kdg0KWAwJ60iDRj2pQ36l5wPJ3LPzfgHznMcN6eo9XuZKLTGSj20fiZcxDTiuEd_uEYCRQzApATZ2yrUgxrQ4ud270AvNbc95U-HeF5iiRC19SJuFOdJ9Ypexf5yKlxrjo38ghwlGNdQfJqRFwled7fqjN0jFcqZf9LbPWDtjF95Scg/p.png?fv_content=true&size_mode=5",this.img.onload=function(){t.draw()}}return l(e,[{key:"draw",value:function(){f.drawImage(this.img,this.x,this.y,this.width,this.height)}},{key:"shot",value:function(){x(this.x+15,this.y+30,"tFight"),C()}},{key:"moveRight",value:function(){this.x<=185&&(this.x+=1)}},{key:"moveLeft",value:function(){this.x>=25&&(this.x-=1)}},{key:"lastMove",value:function(){this.x<=550&&(this.x+=1)}}]),e}());var y=function(){function e(t){u(this,e),this.x=t,this.y=-window.canvas.height,this.width=3,this.height=3,this.img=new Image,this.img.src="http://pixelartmaker.com/art/cffedf3d8504aa9.png"}return l(e,[{key:"draw",value:function(){this.y++,f.drawImage(this.img,this.x,this.y,this.width,this.height)}}]),e}();var b=function(){function e(t,n,r){u(this,e),this.x=t,this.y=n,this.width=10,this.height=10,this.img=new Image,this.img.src="https://res.cloudinary.com/mirukusheku/image/upload/v1495140035/Red_laser-ConvertImage_votu8o.png",this.whoShot=r}return l(e,[{key:"draw",value:function(){"xwing"===this.whoShot?(this.y--,f.drawImage(this.img,this.x,this.y,this.width,this.height)):(this.y++,f.drawImage(this.img,this.x,this.y,this.width,this.height))}}]),e}();function x(e,t,n){if(he.play(),d%30==0){var r=new b(e+20,t,n);m.push(r)}}function C(){m.forEach((function(e){return e.draw()}))}var E=new(function(){function e(){var t=this;u(this,e),this.width=60,this.height=70,this.y=-90,this.x=120,this.img=new Image,this.img.src="https://www.pngkey.com/png/full/14-142561_death-star-pixel-art.png",this.img.onload=function(){t.draw()}}return l(e,[{key:"draw",value:function(){f.drawImage(this.img,this.x,this.y,this.width,this.height)}},{key:"shot",value:function(){x(this.x,this.y,"DeathStart"),C()}},{key:"moveDown",value:function(){this.y<5&&(this.y+=1)}},{key:"moveUp",value:function(){this.y<-90&&(this.y-=1)}}]),e}()),T=new v,S=!1,k=!1,A=!1,L=!1,N=!1,j="left",R=function(e){"xwing"===e?S=!0:"tieFight"===e?k=!0:"DeathStart"===e&&(N=!0)},O=function(){S=!1,k=!1,setTimeout(_(),5e3)},_=function(){"left"===j?A=!0:"right"===j&&(L=!0)},M=function(){A=!1,L=!1,j="left"===j?"right":"left"},P=!1,H=function(e){P=!0;var t=e.marker,n=function(){return Ce(e)},r=function(){return!1},i=function(){P=!1,j="left",g.img.src="https://previews.dropbox.com/p/thumb/ABAcg5Xl-d-RRZAdpMvTtjwcnlizHF1i2HCbYMUp2t4WAOx1Wx-KdqasI-YbUiZjL0E-baPppS0_nl9gBv4a3CdTkmJhPd9DcrC0e6Xm8enZWeDEPJef9qp6IA1vckW6xenoc5Qu6h1X8JLYXIWSELS0YQ4zIx5cTiAkfaFEmgmu3r4eC7lHNQbmLyXWWx23JQwPdlcHgiw7chlgSxo9efK1lZO9yRwPU6GVwPUn0DpSkrCuQShuE2ENMTx3AR0X_VuC4sPB08Eqvdf51tr80dNehFe8ob8HEL0VIzRCWUZ3vawQ4R-uPGjYV4L2VQBizUTWJNkOxb15Iu4ie24Q9Q3N9Qets7I_PUm6Kw-He-jpsw/p.png?fv_content=true&size_mode=5",g.x=40,w.x=25,E.img.src="https://www.pngkey.com/png/full/14-142561_death-star-pixel-art.png",E.y=-90,S=!1,k=!1,N=!1,setTimeout(r,2e3)};t>=1e3?(R("xwing"),setTimeout((function(){return E.img.src="https://i.pinimg.com/originals/4c/a0/92/4ca092beb9b20f34fdd3f22e6686462f.png"}),3e3),setTimeout(n,6e3),setTimeout(i,6100)):(R("DeathStart"),setTimeout((function(){return g.img.src="https://i.pinimg.com/originals/4c/a0/92/4ca092beb9b20f34fdd3f22e6686462f.png"}),3e3),setTimeout(n,6e3),setTimeout(i,6100))};function B(){d++,"showCanvas"===window.canvas.className&&f.clearRect(0,0,window.canvas.width,window.canvas.height),T.draw(),d%5==0&&(3===g.animate?g.animate=0:g.animate++),g.draw(),w.draw(),E.draw(),d%5==0&&(3===w.animate?w.animate=0:w.animate++),!0===S&&g.shot(),!0===k&&w.shot(),!0===N&&E.shot(),function(){if(d%30==0){var e=Math.floor(Math.random()*window.canvas.width),t=new y(e);p.push(t)}}(),p.forEach((function(e){return e.draw()})),!0===A&&(g.moveRight(),w.moveRight()),!0===L&&(g.moveLeft(),w.moveLeft()),!0===P&&(E.moveDown(),w.lastMove(),g.lastMove()),C()}function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}setInterval(B,1e3/60);var I=document.createElement("div");I.className="qContainer";var z=document.createElement("h1"),D=1,F=document.createElement("h1"),Q=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;U(this,e),this.trivia=t,this.difficulty=n,this.round=[],this.marker=0,this.questionShow=0}var t,n,r;return t=e,(n=[{key:"questionsGen",value:function(){var e,t,n=this,r=1,i=0;this.trivia.forEach((function(o){var a=[o.correct_answer],s=1;o.incorrect_answers.forEach((function(e){a[s]=e,s++})),"hard"==o.difficulty?(e=11,t=100):"easy"==o.difficulty?(e=21,t=200):"medium"==o.difficulty&&(e=16,t=150),n.round[i]={number:r,question:o.question,answers:a,correctAnswer:o.correct_answer,difficultyChose:n.difficulty,difficultyOfQuestion:o.difficulty,time:e,points:t,htmlElements:{}},r++,i++})),this.cardQuestions()}},{key:"cardQuestions",value:function(){var e=this;this.round.forEach((function(t){var n=t.htmlElements;n.ansHtml=[],n.hElement=document.createElement("h1"),n.hElement.innerHTML="".concat(t.number,": ").concat(t.question),t.answers.forEach((function(t){var r=document.createElement("button");r.innerHTML="".concat(t),r.value="".concat(t),r.className="ansBut",r.addEventListener("click",(function(){e.round[e.questionShow].chooseAnswer=t,e.gameCheck(e.questionShow)})),n.ansHtml.push(r)}))})),this.showTrivia()}},{key:"timeQuestion",value:function(e){var t=this;z.className="";var n=this.round[this.questionShow].time;!function r(){D==e.number?n>0?(0==n?n=59:n-=1,1==n.toString().length&&(n="0"+n),n<=5&&(z.className="warning"),z.innerHTML=n,setTimeout(r,1e3)):t.gameCheck(t.questionShow):e.number}()}},{key:"showTrivia",value:function(){var e=this.round[this.questionShow].htmlElements.hElement;console.log("Correct Answer: ",this.round[this.questionShow].correctAnswer),I.appendChild(e),window.body.appendChild(I);var t=this.round[this.questionShow].htmlElements.ansHtml;!function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t}(t),t.forEach((function(e){I.appendChild(e)})),F.innerHTML="Marker:".concat(this.marker),I.appendChild(F),I.appendChild(z),this.timeQuestion(this.round[this.questionShow])}},{key:"gameCheck",value:function(e){var t=this,n=this.round[e].htmlElements,r=this.round[e].correctAnswer,i=this.round[e].chooseAnswer,o=this.round[e].points;r==i?(R("xwing"),n.ansHtml.forEach((function(e){e.value==i?e.className="ansButCorrect":e.className="ansButInCorrect"}))):(R("tieFight"),n.ansHtml.forEach((function(e){e.value==r?e.className="ansCorrect":e.className="ansButInCorrect"}))),I.removeChild(z),setTimeout((function(){e<t.round.length-1?(r==i?t.marker+=o:void 0===i&&(t.round[e].chooseAnswer="End Time"),I.removeChild(n.hElement),n.ansHtml.forEach((function(e){I.removeChild(e)})),(0==t.questionShow||t.questionShow<10)&&t.questionShow++,t.questionShow>=1&&D++,t.showTrivia(),O(),setTimeout(M,2900)):(I.removeChild(n.hElement),n.ansHtml.forEach((function(e){I.removeChild(e)})),window.body.removeChild(I),O(),H(t),D=1,M())}),2e3)}}])&&q(t.prototype,n),r&&q(t,r),e}(),W=1,J=document.getElementById("body");J.className="init";var X=document.createElement("button");X.className="initBut";var V=document.createElement("section");V.className="star-wars";var Y=document.createElement("div");Y.className="crawl",V.appendChild(Y),Y.innerHTML='<div class="title">\n<h1>Trivia-Wars</h1>\n<p>A DEV-F project</p>\n</div><p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p>      \n<p>During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.</p>\n<p>Pursued by the Empire’s sinister agents, the Rebels need to solve a Trivia and then they can save people and restore freedom to the galaxy…</p>',V.className="star-wars";var Z=document.createElement("div");Z.className="fade";var G=document.createElement("select"),K=document.createElement("option");K.value="any",K.innerHTML="Any Difficulty",G.appendChild(K);var $=document.createElement("option");$.value="easy",$.innerHTML="Easy",G.appendChild($);var ee=document.createElement("option");ee.value="medium",ee.innerHTML="Medium",G.appendChild(ee);var te=document.createElement("option");te.value="hard",te.innerHTML="Hard",G.appendChild(te);var ne=document.createElement("select"),re=document.createElement("option");re.value="Any",re.innerHTML="Any Type",ne.appendChild(re);var ie=document.createElement("option");ie.value="multiple",ie.innerHTML="Multiple Choice",ne.appendChild(ie);var oe=document.createElement("option");oe.value="boolean",oe.innerHTML="True/False",ne.appendChild(oe);var ae=document.createElement("p");ae.className="description",ae.innerHTML="Solve the trivia and get a marker of 1000 points or more.";var se=new Audio;se.src="../songs/Happy ThreeChirp.mp3";var ce=new Audio;ce.src="../songs/8d82b5_Star_Wars_Duel_of_the_Fates_Theme_Song.mp3";var ue=new Audio;ue.src="../songs/8d82b5_Star_Wars_Main_Theme_Song.mp3",window.addEventListener("DOMContentLoaded",(function(e){ue.volume=.2,ue.play()}));var he=new Audio;he.src="../songs/TIE fighter fire 2.mp3";var le=new Audio;le.src="../songs/8d82b5_Star_Wars_Cantina_Theme_Song.mp3";var fe=new Audio;fe.src="../songs/8d82b5_Star_Wars_The_Imperial_March_Theme_Song.mp3";var de=document.getElementById("canvas"),pe=document.createElement("select");c.a.get("https://opentdb.com/api_category.php").then((function(e){var t=e.data.trivia_categories,n={},r=9,i=document.createElement("option");i.value=0,i.innerHTML="Any Category",pe.appendChild(i),t.forEach((function(e){var t;n[r]=document.createElement("option"),n[r].value=r,t=e.name.includes("Entertainment")?e.name.replace("Entertainment: ",""):e.name.includes("Science")?e.name.replace("Science: ",""):e.name,n[r].innerHTML="".concat(t),pe.appendChild(n[r]),r++}))})).catch((function(e){alert("Error!"),console.log(e)}));var me=document.createElement("button"),ve=document.createElement("h1"),ge=document.createElement("h1"),we=document.createElement("button");we.innerHTML="Start trivia";var ye=function(){var e,t=Number(pe.value),n=ne.value.toLowerCase(),r=G.value.toLowerCase();se.play(),ue.pause(),ue.currentTime=0;e="any"==n&&"any"==r&&0==t?"https://opentdb.com/api.php?amount=10":0==t&&"any"==n?"https://opentdb.com/api.php?amount=10&difficulty=".concat(r):0==t&&"any"==r?"https://opentdb.com/api.php?amount=10&type=".concat(n):"any"==n&&"any"==r?"https://opentdb.com/api.php?amount=10&category=".concat(t):0==t?"https://opentdb.com/api.php?amount=10&difficulty=".concat(r,"&type=").concat(n):"any"==n?"https://opentdb.com/api.php?amount=10&category=".concat(t,"&difficulty=").concat(r):"any"==r?"https://opentdb.com/api.php?amount=10&category=".concat(t,"&type=").concat(n):"https://opentdb.com/api.php?amount=10&category=".concat(t,"&difficulty=").concat(r,"&type=").concat(n),c.a.get(e).then((function(e){var t=e.data.results,n=new Q(t,r,g,w);ce.play(),n.questionsGen(),xe(),de.className="showCanvas",J.appendChild(de),B()})).catch((function(e){alert("Try other combination!"),console.log(e)}))},be=function(){se.play(),J.className="init",1==W&&(J.removeChild(X),J.removeChild(V)),W>=2&&(le.pause(),fe.pause(),le.currentTime=0,fe.currentTime=0,ue.play(),J.removeChild(me),J.removeChild(ve),J.removeChild(ge)),J.appendChild(G),J.appendChild(ne),J.appendChild(pe),J.appendChild(we),J.appendChild(ae),we.addEventListener("click",ye)},xe=function(){J.removeChild(ne),J.removeChild(pe),J.removeChild(G),J.removeChild(we),J.removeChild(ae),J.className=""};X.innerHTML="START",J.appendChild(X),J.appendChild(Z),J.appendChild(V),X.addEventListener("click",be);var Ce=function(e){ce.pause(),ce.currentTime=0,W++;var t=e.marker;me.innerHTML="Restart",J.appendChild(me),me.addEventListener("click",be),t>=1e3?(ve.innerHTML="YOU WIN!",ge.innerHTML="".concat(t),de.className="dontShowCanvas",le.play(),J.className="init",J.appendChild(ve),J.appendChild(ge)):(ve.innerHTML="YOU LOSE!",ge.innerHTML="".concat(t),de.className="dontShowCanvas",fe.play(),J.className="init",J.appendChild(ve),J.appendChild(ge))}}]);