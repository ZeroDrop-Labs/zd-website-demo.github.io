(function(){"use strict";var e={3343:function(e,t,n){var r=n(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],a={name:"app",data(){return{theme:"darkMode"}},mounted(){document.title="ZeroDrop - A Data-Driven Web3 Marketing Platform"},methods:{toggleTheme(){this.theme="darkMode"==this.theme?"":"darkMode",document.documentElement.setAttribute("data-theme",this.theme),localStorage.setItem("theme",this.theme)},detectColorScheme(){var e="dark";if(localStorage.getItem("theme")){if("light"==localStorage.getItem("theme"))e="dark"}else{if(!window.matchMedia)return!1;if(window.matchMedia("(prefers-color-scheme: dark)").matches)e="dark"}"dark"==e&&document.documentElement.setAttribute("data-theme","dark")}}},u=a,c=n(3736),l=(0,c.Z)(u,o,i,!1,null,null,null),s=l.exports,d=n(5431);(0,d.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=n(2631);r["default"].use(f.ZP);const h=[{path:"/",name:"home",component:()=>n.e(205).then(n.bind(n,7205))},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,3932))},{path:"/quest-engine",name:"quest-engine",component:()=>n.e(136).then(n.bind(n,6136))},{path:"/mint-drop",name:"mint-drop",component:()=>n.e(140).then(n.bind(n,8140))}],m=new f.ZP({mode:"history",base:"/",routes:h,scrollBehavior(){return{x:0,y:0}}});var p=m,g=n(9515),v=n(9464),b=n.n(v),y=n(8970);r["default"].use(y.ZP,{config:{id:"G-2Y517Y861Y"}}),r["default"].use(b()),r["default"].use(g.ZP),r["default"].config.productionTip=!1,new r["default"]({router:p,render:e=>e(s)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{136:"43eb7a9a",140:"9cbc78f6",205:"f6475ebe",443:"96c25988"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{136:"b6e17b76",140:"70bc863a",205:"8a77f677",443:"03d33239"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="zd-website:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={136:1,140:1,205:1,443:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var s=c(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self["webpackChunkzd_website"]=self["webpackChunkzd_website"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3343)}));r=n.O(r)})();
//# sourceMappingURL=app.ac351bc8.js.map