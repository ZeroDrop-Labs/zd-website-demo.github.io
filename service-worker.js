if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const c=s=>i(s,n),u={module:{uri:n},exports:o,require:c};e[n]=Promise.all(r.map((s=>u[s]||c(s)))).then((s=>(l(...s),o)))}}define(["./workbox-79ffe3e0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"zd-website"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/292.98e15fc1.css",revision:null},{url:"/css/317.b6c46354.css",revision:null},{url:"/css/693.7acbc485.css",revision:null},{url:"/css/about.9168de87.css",revision:null},{url:"/css/app.560fe585.css",revision:null},{url:"/css/chunk-vendors.0106fc28.css",revision:null},{url:"/img/home-top-bg-left.svg",revision:"1f97e5f1a0cca999b31c9ba38e8f5bc1"},{url:"/img/home-top-bg-right.svg",revision:"71ce38c1bb593ccbfe6165fea6292db4"},{url:"/img/top-bg-left.svg",revision:"91054df6d27329a9113d961b5ea723f6"},{url:"/img/top-bg-zd.svg",revision:"9000f8a33d8659b028a13345464ada15"},{url:"/img/zd-logo.svg",revision:"d4b1f63d73565cabf2e88395b94a5927"},{url:"/index.html",revision:"bb486f965a360491ad11ee8f9330a3c2"},{url:"/js/292.e6687066.js",revision:null},{url:"/js/317.4b4a16cf.js",revision:null},{url:"/js/693.e4a2b327.js",revision:null},{url:"/js/about.8687ac1d.js",revision:null},{url:"/js/app.d99f4924.js",revision:null},{url:"/js/chunk-vendors.ff37735f.js",revision:null},{url:"/manifest.json",revision:"3512fab919173e5ad2f97c8c00d79999"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
