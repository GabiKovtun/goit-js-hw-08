function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function m(e,t,n){var i,o,r,u,a,f,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,a=setTimeout(w,t),l?g(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function w(){var e=v();if(h(e))return S(e);a=setTimeout(w,function(e){var n=t-(e-f);return s?p(n,r-(e-c)):n}(e))}function S(e){return a=void 0,m&&i?g(e):(i=o=void 0,u)}function T(){var e=v(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(w,t),g(f)}return void 0===a&&(a=setTimeout(w,t)),u}return t=b(t)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=o=a=void 0},T.flush=function(){return void 0===a?u:S(v())},T}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:i,maxWait:t,trailing:o})};const g=document.querySelector(".feedback-form"),j=g.querySelector('input[name="email"]'),h=g.querySelector('textarea[name="message"]'),w=(g.querySelector('button[type="submit"]'),localStorage.getItem("feedback-form-state"));console.log(w),g.addEventListener("submit",e(t)((e=>{e.preventDefault();const t={emailInput:j.value,messageInput:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(t)),j.value="",h.value=""}),500));
//# sourceMappingURL=03-feedback.527c0a76.js.map