!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector(".form"),a=document.querySelector("button");function l(e){var t=e.position,n=e.currentDelay,o=e.amount;e.step;return new Promise((function(e,r){var i=Math.random()>.3;setTimeout((function(){t===Number(o.value)&&(a.disabled=!1),i?e({position:t,currentDelay:n}):r({position:t,currentDelay:n})}),n)}))}u.addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.elements,o=n.amount,r=n.delay,u=n.step,c=0,s=Number(r.value);a.setAttribute("disabled",!0);for(var f=1;f<=o.value;f++)c=f,console.log("position",c,"step",s),l({position:c,currentDelay:s,amount:o,step:u}).then((function(t){var n=t.position,o=t.currentDelay;e(i).Notify.info("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.currentDelay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),s+=Number(u.value)}))}();
//# sourceMappingURL=03-promises.0956e6f1.js.map
