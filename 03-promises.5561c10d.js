var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const s=document.querySelector(".form");function a(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}s.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(s);(function({delay:e,step:t,amount:o}){for(i=1;i<=o;i++)a(i,e+(i-1)*t).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))})({delay:Number(t.get("delay")),step:Number(t.get("step")),amount:Number(t.get("amount"))}),s.reset()}));
//# sourceMappingURL=03-promises.5561c10d.js.map