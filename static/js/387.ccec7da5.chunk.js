"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[387],{1387:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var s=a(2791);class r{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=t}}const i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},o=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},l=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=await fetch(i.origin+e,{method:"POST",headers:a,body:t}),o=await s.text(),l=new r(s.status,o);if(s.ok)return l;throw l},n=(e,t,a)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!==typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||"string"!==typeof a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},c=e=>e.webdriver||!e.languages||0===e.languages.length,d=()=>new r(451,"Unavailable For Headless Browser"),m=(e,t)=>{if((e=>{var t;return!(null!==(t=e.list)&&void 0!==t&&t.length)||!e.watchVariable})(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const a=(s=t,r=e.watchVariable,s instanceof FormData?s.get(r):s[r]);var s,r;return"string"===typeof a&&e.list.includes(a)},h=()=>new r(403,"Forbidden"),u=async(e,t,a)=>{if(!t.throttle||!a)return!1;((e,t)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!==typeof t)throw"The LimitRate ID has to be a string"})(t.throttle,t.id);const s=t.id||e,r=await(async(e,t,a)=>{const s=Number(await a.get(e)||0);return t-Date.now()+s})(s,t.throttle,a);return r>0||(await a.set(s,Date.now().toString()),!1)},p=()=>new r(429,"Too Many Requests"),f=async(e,t,a,s)=>{const r=o(s),f=r.publicKey||i.publicKey,b=r.blockHeadless||i.blockHeadless,g=i.storageProvider||r.storageProvider,v={...i.blockList,...r.blockList},w={...i.limitRate,...r.limitRate};if(b&&c(navigator))return Promise.reject(d());const y=(e=>"string"===typeof e?document.querySelector(e):e)(a);n(f,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(y);const j=new FormData(y);return m(v,j)?Promise.reject(h()):await u(location.pathname,w,g)?Promise.reject(p()):(j.append("lib_version","4.3.3"),j.append("service_id",e),j.append("template_id",t),j.append("user_id",f),l("/api/v1.0/email/send-form",j))};const b=a.p+"static/media/letter.0f322812cf43fb6af9b250abe4943b96.svg";var g=a(184);const v=()=>{const e=(0,s.useRef)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"ContactSection",id:"contact",children:[(0,g.jsxs)("div",{className:"Firstsection",children:[(0,g.jsx)("div",{className:"contactHeading",children:"Contact"}),(0,g.jsx)("img",{src:b,alt:"letter",className:"letterImg"})]}),(0,g.jsxs)("div",{className:"contactForm",children:[(0,g.jsx)("div",{className:"subHeading",children:"Get in touch, just drop a message..."}),(0,g.jsxs)("form",{ref:e,onSubmit:t=>{t.preventDefault(),f("service_8x62bqo","template_6fuaqcw",e.current,{publicKey:"3nyMUK1C74Lt-MFR1"}).then((()=>{alert("SUCCESS!")}),(e=>{alert("FAILED...",e.text)}))},children:[(0,g.jsxs)("div",{className:"fields",children:[(0,g.jsx)("label",{className:"Labels",children:"Name"}),(0,g.jsx)("input",{type:"text",name:"from_name",placeholder:"Enter your Name"})]}),(0,g.jsxs)("div",{className:"fields",children:[(0,g.jsx)("label",{className:"Labels",children:"Email"}),(0,g.jsx)("input",{type:"email",name:"from_email",placeholder:"Enter your Email ID"})]}),(0,g.jsxs)("div",{className:"fields",children:[(0,g.jsx)("label",{className:"Labels",children:"Message"}),(0,g.jsx)("textarea",{name:"message",placeholder:"Message..."})]}),(0,g.jsx)("div",{className:"sendButton",children:(0,g.jsx)("input",{type:"submit",value:"Send",className:"submitButton"})})]})]})]})})}}}]);
//# sourceMappingURL=387.ccec7da5.chunk.js.map