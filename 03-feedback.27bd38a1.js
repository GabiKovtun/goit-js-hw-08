function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,u=setTimeout(I,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function I(){var e=m();if(j(e))return S(e);u=setTimeout(I,function(e){var n=t-(e-f);return s?v(n,o-(e-l)):n}(e))}function S(e){return u=void 0,p&&r?b(e):(r=i=void 0,a)}function w(){var e=m(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(I,t),b(f)}return void 0===u&&(u=setTimeout(I,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},w.flush=function(){return void 0===u?a:S(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),h=b.querySelector('input[name="email"]'),j=b.querySelector('textarea[name="message"]');b.addEventListener("input",e(t)((()=>{const e={emailInput:h.value,messageInput:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));const I=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state");I&&(h.value=I.emailInput,j.value=I.messageInput);b.addEventListener("submit",e(t)((e=>{if(e.preventDefault(),""===h.value||""===j.value)return alert("Please fill in all fields");console.log({emailInput:h.value,messageInput:j.value}),b.reset(),localStorage.removeItem("feedback-form-state")}),500));
//# sourceMappingURL=03-feedback.27bd38a1.js.map