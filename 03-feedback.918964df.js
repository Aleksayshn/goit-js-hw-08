!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return d.Date.now()};function b(e,t,n){var r,i,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function h(e){return l=e,f=setTimeout(O,t),s?b(e):u}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function O(){var e=y();if(j(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?b(e):(r=i=void 0,u)}function T(){var e=y(),n=j(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return h(c);if(d)return f=setTimeout(O,t),b(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,p(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},T.flush=function(){return void 0===f?u:w(y())},T}function p(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var h={setInLocalStorage:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},getFromLocalStorage:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},removeFromLocalStorage:function(e){try{localStorage.removeItem(e)}catch(e){console.log("Remove item error: ",e.message)}}},j=h.setInLocalStorage,O=h.getFromLocalStorage,w=h.removeFromLocalStorage,T=document.querySelector(".feedback-form"),F={};!function(){var e=O("userFeedback");if(void 0!==e)for(var t in e)T.elements[t].value=e[t]}();T.addEventListener("input",e(t)((function(e){var t=e.target,n=t.value,r=t.name;F[r]=n,j("userFeedback",F)}),500)),T.addEventListener("submit",(function(e){e.preventDefault(),T.reset(),w("userFeedback")}))}();
//# sourceMappingURL=03-feedback.918964df.js.map
