!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var o,i,a,f,u,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function j(e){return l=e,u=setTimeout(h,t),s?p(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=b();if(O(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function w(e){return u=void 0,m&&o?p(e):(o=i=void 0,f)}function T(){var e=b(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===u)return j(c);if(d)return u=setTimeout(h,t),p(c)}return void 0===u&&(u=setTimeout(h,t)),f}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=c=i=u=void 0},T.flush=function(){return void 0===u?f:w(b())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||u.test(t)?c(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),O=j.elements,h=(j.querySelector('[type="submit"]'),{email:"",comment:""});j.addEventListener("input",e(t)((function(){var e=O.email,t=O.message;h.email=e.value,h.comment=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),function(){if(localStorage.getItem("feedback-form-state")){var e=JSON.parse(localStorage.getItem("feedback-form-state"));O.message.textContent=e.comment,O.email.value=e.email}}(),j.addEventListener("submit",e(t)((function(e){e.preventDefault(),localStorage.getItem("feedback-form-state")&&console.log(JSON.parse(localStorage.getItem("feedback-form-state")));localStorage.removeItem("feedback-form-state"),j.reset(),O.message.textContent=""}),500))}();
//# sourceMappingURL=03-feedback.23dab09e.js.map
