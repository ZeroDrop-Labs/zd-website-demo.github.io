if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,d)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let n={};const c=e=>r(e,o),a={module:{uri:o},exports:n,require:c};i[o]=Promise.all(s.map((e=>a[e]||c(e)))).then((e=>(d(...e),n)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"zd-website"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/140.70bc863a.css",revision:null},{url:"/css/287.34506e41.css",revision:null},{url:"/css/882.fe4c2592.css",revision:null},{url:"/css/about.03d33239.css",revision:null},{url:"/css/app.4b6107a5.css",revision:null},{url:"/img/about/_about-hero_.jpg",revision:"4ca8bc25cccf441661456449860021ec"},{url:"/img/about/about-hero.jpg",revision:"ec1cbb37d720246740ef4cc290e7e4ad"},{url:"/img/about/credentials-1.jpg",revision:"b8ebf0e40ab1345aadde8eaac7477fa6"},{url:"/img/about/credentials-2.jpg",revision:"6fe318e235321ea458b18fe790984699"},{url:"/img/about/credentials-3.jpg",revision:"381e74a20b9fbad5aeb58fa418e9cebc"},{url:"/img/about/credentials-4.jpg",revision:"10501d4d8dcfd72ba68ee0837af122c9"},{url:"/img/about/credentials-5.jpg",revision:"961b26f18c60d728adc4cdd55159ba31"},{url:"/img/about/credentials-6.jpg",revision:"c524af3d0f6fda7f6389ddfe8ff5d9de"},{url:"/img/cust-logo-discord.svg",revision:"1738dd44204155a328191e8d0ffab13e"},{url:"/img/home/_who-we-are.jpg",revision:"4ca8bc25cccf441661456449860021ec"},{url:"/img/home/figure-10.jpg",revision:"71f65312c9d0f7df490821a0c672df35"},{url:"/img/home/figure-2.jpg",revision:"0a92c96bf56228313c3d06b286eeb291"},{url:"/img/home/home-top-bg-left.svg",revision:"1bd003d2dafd4973a21fa07a861e4261"},{url:"/img/home/home-top-bg-right.svg",revision:"d0e9a2726ed647e72529693e542cc24a"},{url:"/img/home/investors-1.jpg",revision:"1100b570cf886cb7ec62d9e7a9f6df65"},{url:"/img/home/investors-2.jpg",revision:"b3395a015edb43c368cc6cea80c24f24"},{url:"/img/home/network-png-hd.png",revision:"1f1759d342f77ba8971d4a4734db311a"},{url:"/img/home/network-png-transparent.png",revision:"a99145abbd1adca68bc38c240f482040"},{url:"/img/home/stats.jpg",revision:"0549f72e76b3f427a26b58fda6557eb0"},{url:"/img/home/who-we-are.jpg",revision:"c79c44e1229df1454d2bd7b7d14a697c"},{url:"/img/mint-drop/figure-10.jpg",revision:"71f65312c9d0f7df490821a0c672df35"},{url:"/img/mint-drop/figure-7.jpg",revision:"edc38712e2674c53dcd159fd6145ec8e"},{url:"/img/mint-drop/figure-8.jpg",revision:"b810c768ebe34deda0e6db42765d18fb"},{url:"/img/mint-drop/figure-9.jpg",revision:"2db24632d0416749a46a4932cd26052e"},{url:"/img/mint-drop/top-bg.svg",revision:"372fede0f693ddffbadd1f8a4db4b15e"},{url:"/img/quest-engine/figure-10.jpg",revision:"984d808e2ef3c3def0b5365a6df56dcb"},{url:"/img/quest-engine/figure-3.jpg",revision:"a4c7e5a275cb78a8afdcde09b4e9b19a"},{url:"/img/quest-engine/figure-6.jpg",revision:"f1f05a2074c0fab6ae4d192396cb7696"},{url:"/img/quest-engine/top-bg-left.svg",revision:"91054df6d27329a9113d961b5ea723f6"},{url:"/img/quest-engine/top-bg-zd.svg",revision:"9000f8a33d8659b028a13345464ada15"},{url:"/img/quest-engine/video-2.mp4",revision:"5c9d52dcf49c6471efc63594d05f48c1"},{url:"/img/safari-pinned-tab.ico",revision:"7e6b86e091377d1c865cf289f7fbcad2"},{url:"/img/zd-logo.svg",revision:"d4b1f63d73565cabf2e88395b94a5927"},{url:"/index.html",revision:"0f2c2b12ef372e1006a5cf4b865cd8a0"},{url:"/js/140.4045fadb.js",revision:null},{url:"/js/287.4238f68b.js",revision:null},{url:"/js/882.3f96ee9b.js",revision:null},{url:"/js/about.5ff7d1fb.js",revision:null},{url:"/js/app.758ac800.js",revision:null},{url:"/js/chunk-vendors.fba107d7.js",revision:null},{url:"/manifest.json",revision:"3512fab919173e5ad2f97c8c00d79999"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/social-preview.jpg",revision:"620ed698a1c67d37ee4ecf16d339a47a"}],{})}));
//# sourceMappingURL=service-worker.js.map
