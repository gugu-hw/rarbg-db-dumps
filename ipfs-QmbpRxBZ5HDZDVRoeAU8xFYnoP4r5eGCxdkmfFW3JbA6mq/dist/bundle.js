(()=>{var __webpack_modules__={891:function(module){eval('!function(e,t){if(true)module.exports=t();else { var r, n; }}(this,(function(){return(()=>{"use strict";var e={870:(e,t,n)=>{n.r(t),n.d(t,{createEndpoint:()=>o,expose:()=>l,proxy:()=>g,proxyMarker:()=>r,releaseProxy:()=>a,transfer:()=>y,transferHandlers:()=>c,windowEndpoint:()=>v,wrap:()=>f});const r=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),a=Symbol("Comlink.releaseProxy"),s=Symbol("Comlink.thrown"),i=e=>"object"==typeof e&&null!==e||"function"==typeof e,c=new Map([["proxy",{canHandle:e=>i(e)&&e[r],serialize(e){const{port1:t,port2:n}=new MessageChannel;return l(e,t),[n,[n]]},deserialize:e=>(e.start(),f(e))}],["throw",{canHandle:e=>i(e)&&s in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function l(e,t=self){t.addEventListener("message",(function n(r){if(!r||!r.data)return;const{id:o,type:a,path:i}=Object.assign({path:[]},r.data),c=(r.data.argumentList||[]).map(w);let f;try{const t=i.slice(0,-1).reduce(((e,t)=>e[t]),e),n=i.reduce(((e,t)=>e[t]),e);switch(a){case 0:f=n;break;case 1:t[i.slice(-1)[0]]=w(r.data.value),f=!0;break;case 2:f=n.apply(t,c);break;case 3:f=g(new n(...c));break;case 4:{const{port1:t,port2:n}=new MessageChannel;l(e,n),f=y(t,[t])}break;case 5:f=void 0}}catch(e){f={value:e,[s]:0}}Promise.resolve(f).catch((e=>({value:e,[s]:0}))).then((e=>{const[r,s]=b(e);t.postMessage(Object.assign(Object.assign({},r),{id:o}),s),5===a&&(t.removeEventListener("message",n),u(t))}))})),t.start&&t.start()}function u(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function f(e,t){return d(e,[],t)}function p(e){if(e)throw new Error("Proxy has been released and is not useable")}function d(e,t=[],n=function(){}){let r=!1;const s=new Proxy(n,{get(n,o){if(p(r),o===a)return()=>E(e,{type:5,path:t.map((e=>e.toString()))}).then((()=>{u(e),r=!0}));if("then"===o){if(0===t.length)return{then:()=>s};const n=E(e,{type:0,path:t.map((e=>e.toString()))}).then(w);return n.then.bind(n)}return d(e,[...t,o])},set(n,o,a){p(r);const[s,i]=b(a);return E(e,{type:1,path:[...t,o].map((e=>e.toString())),value:s},i).then(w)},apply(n,a,s){p(r);const i=t[t.length-1];if(i===o)return E(e,{type:4}).then(w);if("bind"===i)return d(e,t.slice(0,-1));const[c,l]=m(s);return E(e,{type:2,path:t.map((e=>e.toString())),argumentList:c},l).then(w)},construct(n,o){p(r);const[a,s]=m(o);return E(e,{type:3,path:t.map((e=>e.toString())),argumentList:a},s).then(w)}});return s}function m(e){const t=e.map(b);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const h=new WeakMap;function y(e,t){return h.set(e,t),e}function g(e){return Object.assign(e,{[r]:!0})}function v(e,t=self,n="*"){return{postMessage:(t,r)=>e.postMessage(t,n,r),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function b(e){for(const[t,n]of c)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:3,name:t,value:r},o]}return[{type:0,value:e},h.get(e)||[]]}function w(e){switch(e.type){case 3:return c.get(e.name).deserialize(e.value);case 0:return e.value}}function E(e,t,n){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)}))}},162:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createDbWorker=void 0;const s=a(n(870));async function i(e){if(e.data&&"eval"===e.data.action){const t=new Int32Array(e.data.notify,0,2),n=new Uint8Array(e.data.notify,8);let r;try{r={ok:await u(e.data.request)}}catch(t){console.error("worker request error",e.data.request,t),r={err:String(t)}}const o=(new TextEncoder).encode(JSON.stringify(r));n.set(o,0),t[1]=o.length,Atomics.notify(t,0)}}function c(e){if("BODY"===e.tagName)return"body";const t=[];for(;e.parentElement&&"BODY"!==e.tagName;){if(e.id){t.unshift("#"+e.id);break}{let n=1,r=e;for(;r.previousElementSibling;)r=r.previousElementSibling,n++;t.unshift(e.tagName.toLowerCase()+":nth-child("+n+")")}e=e.parentElement}return t.join(" > ")}function l(e){return Object.keys(e)}async function u(e){if(console.log("dom vtable request",e),"select"===e.type)return[...document.querySelectorAll(e.selector)].map((t=>{const n={};for(const r of e.columns)"selector"===r?n.selector=c(t):"parent"===r?t.parentElement&&(n.parent=t.parentElement?c(t.parentElement):null):"idx"===r||(n[r]=t[r]);return n}));if("insert"===e.type){if(!e.value.parent)throw Error(\'"parent" column must be set when inserting\');const t=document.querySelectorAll(e.value.parent);if(0===t.length)throw Error(`Parent element ${e.value.parent} could not be found`);if(t.length>1)throw Error(`Parent element ${e.value.parent} ambiguous (${t.length} results)`);const n=t[0];if(!e.value.tagName)throw Error("tagName must be set for inserting");const r=document.createElement(e.value.tagName);for(const t of l(e.value))if(null!==e.value[t]){if("tagName"===t||"parent"===t)continue;if("idx"===t||"selector"===t)throw Error(`${t} can\'t be set`);r[t]=e.value[t]}return n.appendChild(r),null}if("update"===e.type){const t=document.querySelector(e.value.selector);if(!t)throw Error(`Element ${e.value.selector} not found!`);const n=[];for(const r of l(e.value)){const o=e.value[r];if("parent"!==r){if("idx"!==r&&"selector"!==r&&o!==t[r]){if(console.log("SETTING ",r,t[r],"->",o),"tagName"===r)throw Error("can\'t change tagName");n.push(r)}}else if(o!==c(t.parentElement)){const e=document.querySelectorAll(o);if(1!==e.length)throw Error(`Invalid target parent: found ${e.length} matches`);e[0].appendChild(t)}}for(const r of n)t[r]=e.value[r];return null}throw Error(`unknown request ${e.type}`)}s.transferHandlers.set("WORKERSQLPROXIES",{canHandle:e=>!1,serialize(e){throw Error("no")},deserialize:e=>(e.start(),s.wrap(e))}),t.createDbWorker=async function(e,t,n){const r=new Worker(t),o=s.wrap(r),a=await o.SplitFileHttpDatabase(n,e);return r.addEventListener("message",i),{db:a,worker:o,configs:e}}},432:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(162),t)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(432)})()}));\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3FsLmpzLWh0dHB2ZnMvZGlzdC9pbmRleC5qcz8wYzM0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsR0FBRyxJQUFpRCxvQkFBb0IsS0FBSyxhQUFpSSxDQUFDLGtCQUFrQixZQUFZLGFBQWEsT0FBTyxjQUFjLGNBQWMseUpBQXlKLEVBQUUsc01BQXNNLHFDQUFxQyxNQUFNLGdCQUFnQixvQkFBb0Isc0JBQXNCLGlDQUFpQyxZQUFZLHFDQUFxQyxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsa0JBQWtCLDZDQUE2QyxFQUFFLG1CQUFtQixRQUFRLGdCQUFnQixxRUFBcUUsZUFBZSxJQUFJLHFCQUFxQiw0Q0FBNEMsc0JBQXNCLE1BQU0sbUJBQW1CLGdCQUFnQixRQUFRLDRDQUE0QyxNQUFNLElBQUksMEVBQTBFLFVBQVUsV0FBVyxNQUFNLDhDQUE4QyxNQUFNLHNCQUFzQixNQUFNLHdCQUF3QixNQUFNLFFBQVEsTUFBTSxnQkFBZ0Isb0JBQW9CLGtCQUFrQixNQUFNLGlCQUFpQixTQUFTLEdBQUcsZUFBZSwrQkFBK0IsY0FBYyxjQUFjLGdCQUFnQiw0Q0FBNEMsS0FBSyxLQUFLLHNEQUFzRCxHQUFHLHNCQUFzQixjQUFjLGFBQWEseUNBQXlDLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGNBQWMsbUVBQW1FLGdDQUFnQyxFQUFFLFNBQVMscUJBQXFCLFNBQVMsNkJBQTZCLHFDQUFxQyxhQUFhLFVBQVUsR0FBRyxlQUFlLHVCQUF1QixZQUFZLGFBQWEscUNBQXFDLFVBQVUsc0JBQXNCLHFCQUFxQixZQUFZLEtBQUssZ0JBQWdCLFlBQVksb0RBQW9ELFlBQVksY0FBYyxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxVQUFVLHdDQUF3QyxnQkFBZ0IsWUFBWSxvREFBb0QsWUFBWSxnQkFBZ0IsS0FBSyxnQkFBZ0IsWUFBWSxvREFBb0QsYUFBYSxFQUFFLFNBQVMsY0FBYyxpQkFBaUIsaUZBQWlGLE1BQU0sb0JBQW9CLGdCQUFnQixvQkFBb0IsY0FBYyx3QkFBd0IsT0FBTyxFQUFFLDJCQUEyQixPQUFPLHVJQUF1SSxjQUFjLHNDQUFzQywwQkFBMEIsUUFBUSxzQkFBc0IsSUFBSSxRQUFRLGVBQWUsZUFBZSxjQUFjLGVBQWUsaURBQWlELHVCQUF1QixrQkFBa0Isd0JBQXdCLGlIQUFpSCw0Q0FBNEMsaUZBQWlGLG1EQUFtRCxLQUFLLE9BQU8sSUFBSSxxQkFBcUIsbUVBQW1FLDZDQUE2Qyw2QkFBNkIsYUFBYSxFQUFFLG1CQUFtQiw0QkFBNEIsZ0VBQWdFLG1DQUFtQyxzQkFBc0IsRUFBRSxlQUFlLFlBQVkseUNBQXlDLDRCQUE0QixTQUFTLDZGQUE2RixpQkFBaUIsc0NBQXNDLFNBQVMsMEJBQTBCLGtCQUFrQixvQkFBb0IsbUNBQW1DLDRFQUE0RSxNQUFNLElBQUksR0FBRyw0QkFBNEIsU0FBUywwREFBMEQsZUFBZSxvREFBb0QsOENBQThDLGNBQWMsbUNBQW1DLFdBQVcsS0FBSyxvQ0FBb0MsRUFBRSxTQUFTLG9CQUFvQixPQUFPLFlBQVksS0FBSyx5QkFBeUIsZ0NBQWdDLHVEQUF1RCxrQkFBa0IscUJBQXFCLGNBQWMsc0JBQXNCLG9CQUFvQixtSEFBbUgsV0FBVyxnS0FBZ0ssU0FBUyxHQUFHLHNCQUFzQiw2RUFBNkUsa0RBQWtELDhDQUE4QyxlQUFlLHNCQUFzQiw0Q0FBNEMsZUFBZSxjQUFjLFNBQVMsWUFBWSxhQUFhLHFFQUFxRSxnREFBZ0QsZ0RBQWdELHdDQUF3Qyw0Q0FBNEMsRUFBRSxnQkFBZ0IsZ0JBQWdCLDZCQUE2QixzQkFBc0IsaURBQWlELDZCQUE2QixpQkFBaUIsY0FBYyxXQUFXLDJCQUEyQixtQkFBbUIsaUJBQWlCLHdDQUF3QywyRkFBMkYsV0FBVyxnQ0FBZ0MscUNBQXFDLDREQUE0RCxTQUFTLFdBQVcscUJBQXFCLGlDQUFpQyxZQUFZLCtCQUErQixPQUFPLEdBQUcsMkNBQTJDLDZCQUE2QixrQkFBa0Isc0NBQXNDLHlDQUF5Qyx1RUFBdUUsd0NBQXdDLDBCQUEwQixxQkFBcUIsbUVBQW1FLDZDQUE2Qyw2QkFBNkIsYUFBYSxFQUFFLG1CQUFtQiw0QkFBNEIsMkNBQTJDLG1GQUFtRixzQ0FBc0MsU0FBUyxlQUFlLE1BQU0sY0FBYyxXQUFXLCtCQUErQixZQUFZLFlBQVksb0RBQW9ELG1CQUFtQiwrREFBK0QsdUJBQXVCLEVBQUUsOERBQThELDRGQUE0RixlQUFlLHdDQUF3QyxTQUFTLEVBQUUsUUFBUSxJQUFJO0FBQzVyUCIsImZpbGUiOiI4OTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLHQpO2Vsc2V7dmFyIG49dCgpO2Zvcih2YXIgciBpbiBuKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW3JdPW5bcl19fSh0aGlzLChmdW5jdGlvbigpe3JldHVybigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBlPXs4NzA6KGUsdCxuKT0+e24ucih0KSxuLmQodCx7Y3JlYXRlRW5kcG9pbnQ6KCk9Pm8sZXhwb3NlOigpPT5sLHByb3h5OigpPT5nLHByb3h5TWFya2VyOigpPT5yLHJlbGVhc2VQcm94eTooKT0+YSx0cmFuc2ZlcjooKT0+eSx0cmFuc2ZlckhhbmRsZXJzOigpPT5jLHdpbmRvd0VuZHBvaW50OigpPT52LHdyYXA6KCk9PmZ9KTtjb25zdCByPVN5bWJvbChcIkNvbWxpbmsucHJveHlcIiksbz1TeW1ib2woXCJDb21saW5rLmVuZHBvaW50XCIpLGE9U3ltYm9sKFwiQ29tbGluay5yZWxlYXNlUHJveHlcIikscz1TeW1ib2woXCJDb21saW5rLnRocm93blwiKSxpPWU9Plwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSxjPW5ldyBNYXAoW1tcInByb3h5XCIse2NhbkhhbmRsZTplPT5pKGUpJiZlW3JdLHNlcmlhbGl6ZShlKXtjb25zdHtwb3J0MTp0LHBvcnQyOm59PW5ldyBNZXNzYWdlQ2hhbm5lbDtyZXR1cm4gbChlLHQpLFtuLFtuXV19LGRlc2VyaWFsaXplOmU9PihlLnN0YXJ0KCksZihlKSl9XSxbXCJ0aHJvd1wiLHtjYW5IYW5kbGU6ZT0+aShlKSYmcyBpbiBlLHNlcmlhbGl6ZSh7dmFsdWU6ZX0pe2xldCB0O3JldHVybiB0PWUgaW5zdGFuY2VvZiBFcnJvcj97aXNFcnJvcjohMCx2YWx1ZTp7bWVzc2FnZTplLm1lc3NhZ2UsbmFtZTplLm5hbWUsc3RhY2s6ZS5zdGFja319Ontpc0Vycm9yOiExLHZhbHVlOmV9LFt0LFtdXX0sZGVzZXJpYWxpemUoZSl7aWYoZS5pc0Vycm9yKXRocm93IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGUudmFsdWUubWVzc2FnZSksZS52YWx1ZSk7dGhyb3cgZS52YWx1ZX19XV0pO2Z1bmN0aW9uIGwoZSx0PXNlbGYpe3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwoZnVuY3Rpb24gbihyKXtpZighcnx8IXIuZGF0YSlyZXR1cm47Y29uc3R7aWQ6byx0eXBlOmEscGF0aDppfT1PYmplY3QuYXNzaWduKHtwYXRoOltdfSxyLmRhdGEpLGM9KHIuZGF0YS5hcmd1bWVudExpc3R8fFtdKS5tYXAodyk7bGV0IGY7dHJ5e2NvbnN0IHQ9aS5zbGljZSgwLC0xKS5yZWR1Y2UoKChlLHQpPT5lW3RdKSxlKSxuPWkucmVkdWNlKCgoZSx0KT0+ZVt0XSksZSk7c3dpdGNoKGEpe2Nhc2UgMDpmPW47YnJlYWs7Y2FzZSAxOnRbaS5zbGljZSgtMSlbMF1dPXcoci5kYXRhLnZhbHVlKSxmPSEwO2JyZWFrO2Nhc2UgMjpmPW4uYXBwbHkodCxjKTticmVhaztjYXNlIDM6Zj1nKG5ldyBuKC4uLmMpKTticmVhaztjYXNlIDQ6e2NvbnN0e3BvcnQxOnQscG9ydDI6bn09bmV3IE1lc3NhZ2VDaGFubmVsO2woZSxuKSxmPXkodCxbdF0pfWJyZWFrO2Nhc2UgNTpmPXZvaWQgMH19Y2F0Y2goZSl7Zj17dmFsdWU6ZSxbc106MH19UHJvbWlzZS5yZXNvbHZlKGYpLmNhdGNoKChlPT4oe3ZhbHVlOmUsW3NdOjB9KSkpLnRoZW4oKGU9Pntjb25zdFtyLHNdPWIoZSk7dC5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse2lkOm99KSxzKSw1PT09YSYmKHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixuKSx1KHQpKX0pKX0pKSx0LnN0YXJ0JiZ0LnN0YXJ0KCl9ZnVuY3Rpb24gdShlKXsoZnVuY3Rpb24oZSl7cmV0dXJuXCJNZXNzYWdlUG9ydFwiPT09ZS5jb25zdHJ1Y3Rvci5uYW1lfSkoZSkmJmUuY2xvc2UoKX1mdW5jdGlvbiBmKGUsdCl7cmV0dXJuIGQoZSxbXSx0KX1mdW5jdGlvbiBwKGUpe2lmKGUpdGhyb3cgbmV3IEVycm9yKFwiUHJveHkgaGFzIGJlZW4gcmVsZWFzZWQgYW5kIGlzIG5vdCB1c2VhYmxlXCIpfWZ1bmN0aW9uIGQoZSx0PVtdLG49ZnVuY3Rpb24oKXt9KXtsZXQgcj0hMTtjb25zdCBzPW5ldyBQcm94eShuLHtnZXQobixvKXtpZihwKHIpLG89PT1hKXJldHVybigpPT5FKGUse3R5cGU6NSxwYXRoOnQubWFwKChlPT5lLnRvU3RyaW5nKCkpKX0pLnRoZW4oKCgpPT57dShlKSxyPSEwfSkpO2lmKFwidGhlblwiPT09byl7aWYoMD09PXQubGVuZ3RoKXJldHVybnt0aGVuOigpPT5zfTtjb25zdCBuPUUoZSx7dHlwZTowLHBhdGg6dC5tYXAoKGU9PmUudG9TdHJpbmcoKSkpfSkudGhlbih3KTtyZXR1cm4gbi50aGVuLmJpbmQobil9cmV0dXJuIGQoZSxbLi4udCxvXSl9LHNldChuLG8sYSl7cChyKTtjb25zdFtzLGldPWIoYSk7cmV0dXJuIEUoZSx7dHlwZToxLHBhdGg6Wy4uLnQsb10ubWFwKChlPT5lLnRvU3RyaW5nKCkpKSx2YWx1ZTpzfSxpKS50aGVuKHcpfSxhcHBseShuLGEscyl7cChyKTtjb25zdCBpPXRbdC5sZW5ndGgtMV07aWYoaT09PW8pcmV0dXJuIEUoZSx7dHlwZTo0fSkudGhlbih3KTtpZihcImJpbmRcIj09PWkpcmV0dXJuIGQoZSx0LnNsaWNlKDAsLTEpKTtjb25zdFtjLGxdPW0ocyk7cmV0dXJuIEUoZSx7dHlwZToyLHBhdGg6dC5tYXAoKGU9PmUudG9TdHJpbmcoKSkpLGFyZ3VtZW50TGlzdDpjfSxsKS50aGVuKHcpfSxjb25zdHJ1Y3QobixvKXtwKHIpO2NvbnN0W2Esc109bShvKTtyZXR1cm4gRShlLHt0eXBlOjMscGF0aDp0Lm1hcCgoZT0+ZS50b1N0cmluZygpKSksYXJndW1lbnRMaXN0OmF9LHMpLnRoZW4odyl9fSk7cmV0dXJuIHN9ZnVuY3Rpb24gbShlKXtjb25zdCB0PWUubWFwKGIpO3JldHVyblt0Lm1hcCgoZT0+ZVswXSkpLChuPXQubWFwKChlPT5lWzFdKSksQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSxuKSldO3ZhciBufWNvbnN0IGg9bmV3IFdlYWtNYXA7ZnVuY3Rpb24geShlLHQpe3JldHVybiBoLnNldChlLHQpLGV9ZnVuY3Rpb24gZyhlKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihlLHtbcl06ITB9KX1mdW5jdGlvbiB2KGUsdD1zZWxmLG49XCIqXCIpe3JldHVybntwb3N0TWVzc2FnZToodCxyKT0+ZS5wb3N0TWVzc2FnZSh0LG4sciksYWRkRXZlbnRMaXN0ZW5lcjp0LmFkZEV2ZW50TGlzdGVuZXIuYmluZCh0KSxyZW1vdmVFdmVudExpc3RlbmVyOnQucmVtb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHQpfX1mdW5jdGlvbiBiKGUpe2Zvcihjb25zdFt0LG5db2YgYylpZihuLmNhbkhhbmRsZShlKSl7Y29uc3RbcixvXT1uLnNlcmlhbGl6ZShlKTtyZXR1cm5be3R5cGU6MyxuYW1lOnQsdmFsdWU6cn0sb119cmV0dXJuW3t0eXBlOjAsdmFsdWU6ZX0saC5nZXQoZSl8fFtdXX1mdW5jdGlvbiB3KGUpe3N3aXRjaChlLnR5cGUpe2Nhc2UgMzpyZXR1cm4gYy5nZXQoZS5uYW1lKS5kZXNlcmlhbGl6ZShlLnZhbHVlKTtjYXNlIDA6cmV0dXJuIGUudmFsdWV9fWZ1bmN0aW9uIEUoZSx0LG4pe3JldHVybiBuZXcgUHJvbWlzZSgocj0+e2NvbnN0IG89bmV3IEFycmF5KDQpLmZpbGwoMCkubWFwKCgoKT0+TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKk51bWJlci5NQVhfU0FGRV9JTlRFR0VSKS50b1N0cmluZygxNikpKS5qb2luKFwiLVwiKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsKGZ1bmN0aW9uIHQobil7bi5kYXRhJiZuLmRhdGEuaWQmJm4uZGF0YS5pZD09PW8mJihlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdCkscihuLmRhdGEpKX0pKSxlLnN0YXJ0JiZlLnN0YXJ0KCksZS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHtpZDpvfSx0KSxuKX0pKX19LDE2MjpmdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCxuLHIpe3ZvaWQgMD09PXImJihyPW4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRbbl19fSl9OmZ1bmN0aW9uKGUsdCxuLHIpe3ZvaWQgMD09PXImJihyPW4pLGVbcl09dFtuXX0pLG89dGhpcyYmdGhpcy5fX3NldE1vZHVsZURlZmF1bHR8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pfTpmdW5jdGlvbihlLHQpe2UuZGVmYXVsdD10fSksYT10aGlzJiZ0aGlzLl9faW1wb3J0U3Rhcnx8ZnVuY3Rpb24oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciBuIGluIGUpXCJkZWZhdWx0XCIhPT1uJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmcih0LGUsbik7cmV0dXJuIG8odCxlKSx0fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmNyZWF0ZURiV29ya2VyPXZvaWQgMDtjb25zdCBzPWEobig4NzApKTthc3luYyBmdW5jdGlvbiBpKGUpe2lmKGUuZGF0YSYmXCJldmFsXCI9PT1lLmRhdGEuYWN0aW9uKXtjb25zdCB0PW5ldyBJbnQzMkFycmF5KGUuZGF0YS5ub3RpZnksMCwyKSxuPW5ldyBVaW50OEFycmF5KGUuZGF0YS5ub3RpZnksOCk7bGV0IHI7dHJ5e3I9e29rOmF3YWl0IHUoZS5kYXRhLnJlcXVlc3QpfX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKFwid29ya2VyIHJlcXVlc3QgZXJyb3JcIixlLmRhdGEucmVxdWVzdCx0KSxyPXtlcnI6U3RyaW5nKHQpfX1jb25zdCBvPShuZXcgVGV4dEVuY29kZXIpLmVuY29kZShKU09OLnN0cmluZ2lmeShyKSk7bi5zZXQobywwKSx0WzFdPW8ubGVuZ3RoLEF0b21pY3Mubm90aWZ5KHQsMCl9fWZ1bmN0aW9uIGMoZSl7aWYoXCJCT0RZXCI9PT1lLnRhZ05hbWUpcmV0dXJuXCJib2R5XCI7Y29uc3QgdD1bXTtmb3IoO2UucGFyZW50RWxlbWVudCYmXCJCT0RZXCIhPT1lLnRhZ05hbWU7KXtpZihlLmlkKXt0LnVuc2hpZnQoXCIjXCIrZS5pZCk7YnJlYWt9e2xldCBuPTEscj1lO2Zvcig7ci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOylyPXIucHJldmlvdXNFbGVtZW50U2libGluZyxuKys7dC51bnNoaWZ0KGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpK1wiOm50aC1jaGlsZChcIituK1wiKVwiKX1lPWUucGFyZW50RWxlbWVudH1yZXR1cm4gdC5qb2luKFwiID4gXCIpfWZ1bmN0aW9uIGwoZSl7cmV0dXJuIE9iamVjdC5rZXlzKGUpfWFzeW5jIGZ1bmN0aW9uIHUoZSl7aWYoY29uc29sZS5sb2coXCJkb20gdnRhYmxlIHJlcXVlc3RcIixlKSxcInNlbGVjdFwiPT09ZS50eXBlKXJldHVyblsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUuc2VsZWN0b3IpXS5tYXAoKHQ9Pntjb25zdCBuPXt9O2Zvcihjb25zdCByIG9mIGUuY29sdW1ucylcInNlbGVjdG9yXCI9PT1yP24uc2VsZWN0b3I9Yyh0KTpcInBhcmVudFwiPT09cj90LnBhcmVudEVsZW1lbnQmJihuLnBhcmVudD10LnBhcmVudEVsZW1lbnQ/Yyh0LnBhcmVudEVsZW1lbnQpOm51bGwpOlwiaWR4XCI9PT1yfHwobltyXT10W3JdKTtyZXR1cm4gbn0pKTtpZihcImluc2VydFwiPT09ZS50eXBlKXtpZighZS52YWx1ZS5wYXJlbnQpdGhyb3cgRXJyb3IoJ1wicGFyZW50XCIgY29sdW1uIG11c3QgYmUgc2V0IHdoZW4gaW5zZXJ0aW5nJyk7Y29uc3QgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUudmFsdWUucGFyZW50KTtpZigwPT09dC5sZW5ndGgpdGhyb3cgRXJyb3IoYFBhcmVudCBlbGVtZW50ICR7ZS52YWx1ZS5wYXJlbnR9IGNvdWxkIG5vdCBiZSBmb3VuZGApO2lmKHQubGVuZ3RoPjEpdGhyb3cgRXJyb3IoYFBhcmVudCBlbGVtZW50ICR7ZS52YWx1ZS5wYXJlbnR9IGFtYmlndW91cyAoJHt0Lmxlbmd0aH0gcmVzdWx0cylgKTtjb25zdCBuPXRbMF07aWYoIWUudmFsdWUudGFnTmFtZSl0aHJvdyBFcnJvcihcInRhZ05hbWUgbXVzdCBiZSBzZXQgZm9yIGluc2VydGluZ1wiKTtjb25zdCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZS52YWx1ZS50YWdOYW1lKTtmb3IoY29uc3QgdCBvZiBsKGUudmFsdWUpKWlmKG51bGwhPT1lLnZhbHVlW3RdKXtpZihcInRhZ05hbWVcIj09PXR8fFwicGFyZW50XCI9PT10KWNvbnRpbnVlO2lmKFwiaWR4XCI9PT10fHxcInNlbGVjdG9yXCI9PT10KXRocm93IEVycm9yKGAke3R9IGNhbid0IGJlIHNldGApO3JbdF09ZS52YWx1ZVt0XX1yZXR1cm4gbi5hcHBlbmRDaGlsZChyKSxudWxsfWlmKFwidXBkYXRlXCI9PT1lLnR5cGUpe2NvbnN0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLnZhbHVlLnNlbGVjdG9yKTtpZighdCl0aHJvdyBFcnJvcihgRWxlbWVudCAke2UudmFsdWUuc2VsZWN0b3J9IG5vdCBmb3VuZCFgKTtjb25zdCBuPVtdO2Zvcihjb25zdCByIG9mIGwoZS52YWx1ZSkpe2NvbnN0IG89ZS52YWx1ZVtyXTtpZihcInBhcmVudFwiIT09cil7aWYoXCJpZHhcIiE9PXImJlwic2VsZWN0b3JcIiE9PXImJm8hPT10W3JdKXtpZihjb25zb2xlLmxvZyhcIlNFVFRJTkcgXCIscix0W3JdLFwiLT5cIixvKSxcInRhZ05hbWVcIj09PXIpdGhyb3cgRXJyb3IoXCJjYW4ndCBjaGFuZ2UgdGFnTmFtZVwiKTtuLnB1c2gocil9fWVsc2UgaWYobyE9PWModC5wYXJlbnRFbGVtZW50KSl7Y29uc3QgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG8pO2lmKDEhPT1lLmxlbmd0aCl0aHJvdyBFcnJvcihgSW52YWxpZCB0YXJnZXQgcGFyZW50OiBmb3VuZCAke2UubGVuZ3RofSBtYXRjaGVzYCk7ZVswXS5hcHBlbmRDaGlsZCh0KX19Zm9yKGNvbnN0IHIgb2Ygbil0W3JdPWUudmFsdWVbcl07cmV0dXJuIG51bGx9dGhyb3cgRXJyb3IoYHVua25vd24gcmVxdWVzdCAke2UudHlwZX1gKX1zLnRyYW5zZmVySGFuZGxlcnMuc2V0KFwiV09SS0VSU1FMUFJPWElFU1wiLHtjYW5IYW5kbGU6ZT0+ITEsc2VyaWFsaXplKGUpe3Rocm93IEVycm9yKFwibm9cIil9LGRlc2VyaWFsaXplOmU9PihlLnN0YXJ0KCkscy53cmFwKGUpKX0pLHQuY3JlYXRlRGJXb3JrZXI9YXN5bmMgZnVuY3Rpb24oZSx0LG4pe2NvbnN0IHI9bmV3IFdvcmtlcih0KSxvPXMud3JhcChyKSxhPWF3YWl0IG8uU3BsaXRGaWxlSHR0cERhdGFiYXNlKG4sZSk7cmV0dXJuIHIuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixpKSx7ZGI6YSx3b3JrZXI6byxjb25maWdzOmV9fX0sNDMyOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10aGlzJiZ0aGlzLl9fY3JlYXRlQmluZGluZ3x8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0LG4scil7dm9pZCAwPT09ciYmKHI9biksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUscix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdFtuXX19KX06ZnVuY3Rpb24oZSx0LG4scil7dm9pZCAwPT09ciYmKHI9biksZVtyXT10W25dfSksbz10aGlzJiZ0aGlzLl9fZXhwb3J0U3Rhcnx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gZSlcImRlZmF1bHRcIj09PW58fE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pfHxyKHQsZSxuKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyhuKDE2MiksdCl9fSx0PXt9O2Z1bmN0aW9uIG4ocil7dmFyIG89dFtyXTtpZih2b2lkIDAhPT1vKXJldHVybiBvLmV4cG9ydHM7dmFyIGE9dFtyXT17ZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChhLmV4cG9ydHMsYSxhLmV4cG9ydHMsbiksYS5leHBvcnRzfXJldHVybiBuLmQ9KGUsdCk9Pntmb3IodmFyIHIgaW4gdCluLm8odCxyKSYmIW4ubyhlLHIpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLHtlbnVtZXJhYmxlOiEwLGdldDp0W3JdfSl9LG4ubz0oZSx0KT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCksbi5yPWU9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuKDQzMil9KSgpfSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///891\n')},249:(e,t,n)=>{"use strict";e.exports=n.p+"fd38fda4d9036372d1aa.wasm"},565:(e,t,n)=>{"use strict";e.exports=n.p+"257fb50677e11621f8a0.js"},607:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval('/* harmony import */ var sql_js_httpvfs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);\n/* harmony import */ var sql_js_httpvfs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sql_js_httpvfs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst workerUrl = new URL(/* asset import */ __webpack_require__(565), __webpack_require__.b);\nconst wasmUrl = new URL(/* asset import */ __webpack_require__(249), __webpack_require__.b);\nconst resultsEl = document.querySelector("#resultsDiv");\nconst buttonEl = document.querySelector(\'input[type="submit"]\');\nconst loadButton = document.querySelector("button");\nconst fieldsetEl = document.querySelector("fieldset");\nconst resultsPerPage = 10;\nlet currentQuery = "";\nlet resultsOffset = 0;\nlet worker = null;\nconst catmap = [\n    "unknown",\n    "ebooks",\n    "games_pc_iso",\n    "games_pc_rip",\n    "games_ps3",\n    "games_ps4",\n    "games_xbox360",\n    "movies_bd_full",\n    "movies_bd_remux",\n    "movies_x264_3d",\n    "movies_x264_4k",\n    "movies_x264_720",\n    "movies_x264",\n    "movies_x265_4k_hdr",\n    "movies_x265_4k",\n    "movies_x265",\n    "movies_xvid_720",\n    "movies_xvid",\n    "movies",\n    "music_flac",\n    "music_mp3",\n    "software_pc_iso",\n    "tv_sd",\n    "tv_uhd",\n    "tv",\n    "xxx",\n];\nasync function initialize() {\n    return await (0,sql_js_httpvfs__WEBPACK_IMPORTED_MODULE_0__.createDbWorker)([\n        {\n            from: "inline",\n            config: {\n                serverMode: "full",\n                url: "../rarbg_db_ipfs.sqlite",\n                requestChunkSize: 65536,\n            },\n        },\n    ], workerUrl.toString(), wasmUrl.toString());\n}\nasync function query(q, limit, offset) {\n    const sql = `\n\t\tSELECT\n\t\t\t  i.rowid     as id\n\t\t\t, i.title     as title\n\t\t\t, hex(i.hash) as hash\n\t\t\t, i.size      as size\n\t\t\t, i.cat       as cat\n\t\tFROM items_fts f\n\t\tINNER JOIN items i ON i.rowid = f.docid\n\t\tWHERE items_fts MATCH ? LIMIT ? OFFSET ?;\n\t`;\n    const params = [q, limit, offset];\n    try {\n        let results = await worker?.db.query(sql, params);\n        currentQuery = q;\n        return results;\n    }\n    catch (err) {\n        console.error("Database query failed\\n", {\n            sql: sql,\n            params: params,\n            error: err,\n        });\n        const matches = err.message.match(/Status: ([0-9]{3})/);\n        if (matches == null) {\n            alert(`Database query failed!`);\n        }\n        else {\n            const httpStatus = parseInt(matches[1]);\n            // Observed HTTP status codes for rate limiting...\n            if ([403, 429].includes(httpStatus)) {\n                alert(`IPFS Gateway error (${httpStatus}), please try another gateway or use IPFS directly instead.`);\n            }\n            else {\n                alert(`Database query failed (${httpStatus}), please contact the developers!`);\n            }\n        }\n        throw err;\n    }\n}\nfunction appendResults(results) {\n    for (const item of results) {\n        resultsEl.innerHTML += `\n\t\t<div class="magnet"><a href="magnet:?xt=urn:btih:${item.hash}">🧲</a></div>\n\t\t<div class="title"><a href="magnet:?xt=urn:btih:${item.hash}">${item.title} <span class="magnet">🧲</span></a></div>\n\t\t<div class="filesize">${(item.size / (1024 * 1024 * 1024)).toFixed(1)} GiB</div>\n\t\t<div class="category">${catmap[item.cat || 0]}</div>\n\t\t`;\n    }\n}\ndocument.getElementsByTagName("form")[0].addEventListener("submit", async function (ev) {\n    ev.preventDefault();\n    document.getElementById("welcome").style.display = "none";\n    loadButton.style.display = "block";\n    resultsEl.style.display = "none";\n    fieldsetEl.disabled = true;\n    buttonEl.value = "Searching...";\n    loadButton.disabled = true;\n    const q = document.getElementsByTagName("input")[0].value;\n    resultsOffset = 0;\n    const results = await query(q, resultsPerPage, resultsOffset);\n    fieldsetEl.disabled = false;\n    buttonEl.value = "Search";\n    if (results.length === 0) {\n        loadButton.textContent = "No More Results!";\n        resultsEl.style.display = "block";\n        resultsEl.innerHTML = `<div style="text-align: center;">No results have been found!</div>`;\n    }\n    else {\n        loadButton.textContent = "Load More Results";\n        loadButton.disabled = false;\n        resultsEl.style.display = "inline-grid";\n        resultsEl.textContent = "";\n        appendResults(results);\n    }\n});\ndocument.getElementsByTagName("button")[0].addEventListener("click", async function (ev) {\n    ev.preventDefault();\n    fieldsetEl.disabled = true;\n    loadButton.disabled = true;\n    loadButton.textContent = "Loading More Results...";\n    resultsOffset += resultsPerPage;\n    const results = await query(currentQuery, resultsPerPage, resultsOffset);\n    fieldsetEl.disabled = false;\n    if (results.length === 0) {\n        loadButton.disabled = true;\n        loadButton.textContent = "No More Results!";\n    }\n    else {\n        loadButton.disabled = false;\n        loadButton.textContent = "Load More Results";\n        appendResults(results);\n    }\n});\ninitialize().then((value) => {\n    console.log("DB worker has been created successfully");\n    worker = value;\n    fieldsetEl.disabled = false;\n    buttonEl.value = "Search";\n    document.querySelector(\'input[autofocus]\').focus();\n}, (err) => {\n    console.error("DB worker could not be created\\n", {\n        error: err,\n    });\n    alert(`DB worker could not be created\\n\\n${err}`);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZTk0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFnRDtBQUNoRCwwQkFBMEIsa0VBQXVEO0FBQ2pGLHdCQUF3QixrRUFBb0Q7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOERBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwwREFBMEQsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxXQUFXO0FBQ3hEO0FBQ0E7QUFDQSxnREFBZ0QsV0FBVztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELFVBQVU7QUFDL0Qsb0RBQW9ELFVBQVUsSUFBSSxXQUFXO0FBQzdFLDBCQUEwQiw4Q0FBOEM7QUFDeEUsMEJBQTBCLHNCQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsK0NBQStDLElBQUk7QUFDbkQsQ0FBQyIsImZpbGUiOiI2MDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEYldvcmtlciB9IGZyb20gXCJzcWwuanMtaHR0cHZmc1wiO1xuY29uc3Qgd29ya2VyVXJsID0gbmV3IFVSTChcInNxbC5qcy1odHRwdmZzL2Rpc3Qvc3FsaXRlLndvcmtlci5qc1wiLCBpbXBvcnQubWV0YS51cmwpO1xuY29uc3Qgd2FzbVVybCA9IG5ldyBVUkwoXCJzcWwuanMtaHR0cHZmcy9kaXN0L3NxbC13YXNtLndhc21cIiwgaW1wb3J0Lm1ldGEudXJsKTtcbmNvbnN0IHJlc3VsdHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdWx0c0RpdlwiKTtcbmNvbnN0IGJ1dHRvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xuY29uc3QgbG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG5jb25zdCBmaWVsZHNldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZpZWxkc2V0XCIpO1xuY29uc3QgcmVzdWx0c1BlclBhZ2UgPSAxMDtcbmxldCBjdXJyZW50UXVlcnkgPSBcIlwiO1xubGV0IHJlc3VsdHNPZmZzZXQgPSAwO1xubGV0IHdvcmtlciA9IG51bGw7XG5jb25zdCBjYXRtYXAgPSBbXG4gICAgXCJ1bmtub3duXCIsXG4gICAgXCJlYm9va3NcIixcbiAgICBcImdhbWVzX3BjX2lzb1wiLFxuICAgIFwiZ2FtZXNfcGNfcmlwXCIsXG4gICAgXCJnYW1lc19wczNcIixcbiAgICBcImdhbWVzX3BzNFwiLFxuICAgIFwiZ2FtZXNfeGJveDM2MFwiLFxuICAgIFwibW92aWVzX2JkX2Z1bGxcIixcbiAgICBcIm1vdmllc19iZF9yZW11eFwiLFxuICAgIFwibW92aWVzX3gyNjRfM2RcIixcbiAgICBcIm1vdmllc194MjY0XzRrXCIsXG4gICAgXCJtb3ZpZXNfeDI2NF83MjBcIixcbiAgICBcIm1vdmllc194MjY0XCIsXG4gICAgXCJtb3ZpZXNfeDI2NV80a19oZHJcIixcbiAgICBcIm1vdmllc194MjY1XzRrXCIsXG4gICAgXCJtb3ZpZXNfeDI2NVwiLFxuICAgIFwibW92aWVzX3h2aWRfNzIwXCIsXG4gICAgXCJtb3ZpZXNfeHZpZFwiLFxuICAgIFwibW92aWVzXCIsXG4gICAgXCJtdXNpY19mbGFjXCIsXG4gICAgXCJtdXNpY19tcDNcIixcbiAgICBcInNvZnR3YXJlX3BjX2lzb1wiLFxuICAgIFwidHZfc2RcIixcbiAgICBcInR2X3VoZFwiLFxuICAgIFwidHZcIixcbiAgICBcInh4eFwiLFxuXTtcbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgcmV0dXJuIGF3YWl0IGNyZWF0ZURiV29ya2VyKFtcbiAgICAgICAge1xuICAgICAgICAgICAgZnJvbTogXCJpbmxpbmVcIixcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHNlcnZlck1vZGU6IFwiZnVsbFwiLFxuICAgICAgICAgICAgICAgIHVybDogXCIuLi9yYXJiZ19kYl9pcGZzLnNxbGl0ZVwiLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RDaHVua1NpemU6IDY1NTM2LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICBdLCB3b3JrZXJVcmwudG9TdHJpbmcoKSwgd2FzbVVybC50b1N0cmluZygpKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5KHEsIGxpbWl0LCBvZmZzZXQpIHtcbiAgICBjb25zdCBzcWwgPSBgXG5cdFx0U0VMRUNUXG5cdFx0XHQgIGkucm93aWQgICAgIGFzIGlkXG5cdFx0XHQsIGkudGl0bGUgICAgIGFzIHRpdGxlXG5cdFx0XHQsIGhleChpLmhhc2gpIGFzIGhhc2hcblx0XHRcdCwgaS5zaXplICAgICAgYXMgc2l6ZVxuXHRcdFx0LCBpLmNhdCAgICAgICBhcyBjYXRcblx0XHRGUk9NIGl0ZW1zX2Z0cyBmXG5cdFx0SU5ORVIgSk9JTiBpdGVtcyBpIE9OIGkucm93aWQgPSBmLmRvY2lkXG5cdFx0V0hFUkUgaXRlbXNfZnRzIE1BVENIID8gTElNSVQgPyBPRkZTRVQgPztcblx0YDtcbiAgICBjb25zdCBwYXJhbXMgPSBbcSwgbGltaXQsIG9mZnNldF07XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCB3b3JrZXI/LmRiLnF1ZXJ5KHNxbCwgcGFyYW1zKTtcbiAgICAgICAgY3VycmVudFF1ZXJ5ID0gcTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIHF1ZXJ5IGZhaWxlZFxcblwiLCB7XG4gICAgICAgICAgICBzcWw6IHNxbCxcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgZXJyb3I6IGVycixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBlcnIubWVzc2FnZS5tYXRjaCgvU3RhdHVzOiAoWzAtOV17M30pLyk7XG4gICAgICAgIGlmIChtYXRjaGVzID09IG51bGwpIHtcbiAgICAgICAgICAgIGFsZXJ0KGBEYXRhYmFzZSBxdWVyeSBmYWlsZWQhYCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBodHRwU3RhdHVzID0gcGFyc2VJbnQobWF0Y2hlc1sxXSk7XG4gICAgICAgICAgICAvLyBPYnNlcnZlZCBIVFRQIHN0YXR1cyBjb2RlcyBmb3IgcmF0ZSBsaW1pdGluZy4uLlxuICAgICAgICAgICAgaWYgKFs0MDMsIDQyOV0uaW5jbHVkZXMoaHR0cFN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICBhbGVydChgSVBGUyBHYXRld2F5IGVycm9yICgke2h0dHBTdGF0dXN9KSwgcGxlYXNlIHRyeSBhbm90aGVyIGdhdGV3YXkgb3IgdXNlIElQRlMgZGlyZWN0bHkgaW5zdGVhZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGBEYXRhYmFzZSBxdWVyeSBmYWlsZWQgKCR7aHR0cFN0YXR1c30pLCBwbGVhc2UgY29udGFjdCB0aGUgZGV2ZWxvcGVycyFgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwZW5kUmVzdWx0cyhyZXN1bHRzKSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHJlc3VsdHMpIHtcbiAgICAgICAgcmVzdWx0c0VsLmlubmVySFRNTCArPSBgXG5cdFx0PGRpdiBjbGFzcz1cIm1hZ25ldFwiPjxhIGhyZWY9XCJtYWduZXQ6P3h0PXVybjpidGloOiR7aXRlbS5oYXNofVwiPvCfp7I8L2E+PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cInRpdGxlXCI+PGEgaHJlZj1cIm1hZ25ldDo/eHQ9dXJuOmJ0aWg6JHtpdGVtLmhhc2h9XCI+JHtpdGVtLnRpdGxlfSA8c3BhbiBjbGFzcz1cIm1hZ25ldFwiPvCfp7I8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJmaWxlc2l6ZVwiPiR7KGl0ZW0uc2l6ZSAvICgxMDI0ICogMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDEpfSBHaUI8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj4ke2NhdG1hcFtpdGVtLmNhdCB8fCAwXX08L2Rpdj5cblx0XHRgO1xuICAgIH1cbn1cbmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKVswXS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uIChldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWxjb21lXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBsb2FkQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcmVzdWx0c0VsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBmaWVsZHNldEVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBidXR0b25FbC52YWx1ZSA9IFwiU2VhcmNoaW5nLi4uXCI7XG4gICAgbG9hZEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29uc3QgcSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0udmFsdWU7XG4gICAgcmVzdWx0c09mZnNldCA9IDA7XG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHF1ZXJ5KHEsIHJlc3VsdHNQZXJQYWdlLCByZXN1bHRzT2Zmc2V0KTtcbiAgICBmaWVsZHNldEVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgYnV0dG9uRWwudmFsdWUgPSBcIlNlYXJjaFwiO1xuICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2FkQnV0dG9uLnRleHRDb250ZW50ID0gXCJObyBNb3JlIFJlc3VsdHMhXCI7XG4gICAgICAgIHJlc3VsdHNFbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICByZXN1bHRzRWwuaW5uZXJIVE1MID0gYDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+Tm8gcmVzdWx0cyBoYXZlIGJlZW4gZm91bmQhPC9kaXY+YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxvYWRCdXR0b24udGV4dENvbnRlbnQgPSBcIkxvYWQgTW9yZSBSZXN1bHRzXCI7XG4gICAgICAgIGxvYWRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmVzdWx0c0VsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ncmlkXCI7XG4gICAgICAgIHJlc3VsdHNFbC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGFwcGVuZFJlc3VsdHMocmVzdWx0cyk7XG4gICAgfVxufSk7XG5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJ1dHRvblwiKVswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBmaWVsZHNldEVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBsb2FkQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBsb2FkQnV0dG9uLnRleHRDb250ZW50ID0gXCJMb2FkaW5nIE1vcmUgUmVzdWx0cy4uLlwiO1xuICAgIHJlc3VsdHNPZmZzZXQgKz0gcmVzdWx0c1BlclBhZ2U7XG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHF1ZXJ5KGN1cnJlbnRRdWVyeSwgcmVzdWx0c1BlclBhZ2UsIHJlc3VsdHNPZmZzZXQpO1xuICAgIGZpZWxkc2V0RWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbG9hZEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGxvYWRCdXR0b24udGV4dENvbnRlbnQgPSBcIk5vIE1vcmUgUmVzdWx0cyFcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxvYWRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgbG9hZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTG9hZCBNb3JlIFJlc3VsdHNcIjtcbiAgICAgICAgYXBwZW5kUmVzdWx0cyhyZXN1bHRzKTtcbiAgICB9XG59KTtcbmluaXRpYWxpemUoKS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiREIgd29ya2VyIGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgIHdvcmtlciA9IHZhbHVlO1xuICAgIGZpZWxkc2V0RWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBidXR0b25FbC52YWx1ZSA9IFwiU2VhcmNoXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbYXV0b2ZvY3VzXScpLmZvY3VzKCk7XG59LCAoZXJyKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcIkRCIHdvcmtlciBjb3VsZCBub3QgYmUgY3JlYXRlZFxcblwiLCB7XG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgfSk7XG4gICAgYWxlcnQoYERCIHdvcmtlciBjb3VsZCBub3QgYmUgY3JlYXRlZFxcblxcbiR7ZXJyfWApO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///607\n')}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),__webpack_require__.b=document.baseURI||self.location.href;var __webpack_exports__=__webpack_require__(607)})();