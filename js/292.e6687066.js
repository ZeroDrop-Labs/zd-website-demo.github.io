"use strict";(self["webpackChunkzd_website"]=self["webpackChunkzd_website"]||[]).push([[292],{3025:function(t,s,i){i.d(s,{Z:function(){return c}});var a=function(){var t=this,s=t._self._c;return s("footer",{staticClass:"footer has-background-white-bis py-6 mt-6 border-color-grey-lighter",staticStyle:{"border-top":"1px solid"}},[s("div",{staticClass:"container"},[t._m(0),s("hr"),s("div",{staticClass:"content"},[s("div",{staticClass:"columns is-vcentered"},[t._m(1),s("div",{staticClass:"column has-text-right is-align-items-end is-justify-content-right is-align-content-end"},[s("span",{staticClass:"icon-text"},[s("a",{staticClass:"navbar-item",attrs:{href:"https://twitter.com/zerodrop_io",target:"_blank"}},[s("span",{staticClass:"icon is-medium"},[s("ion-icon",{attrs:{name:"logo-twitter",size:"medium"}})],1)]),s("a",{staticClass:"navbar-item",attrs:{href:"https://discord.com/invite/EsNHcKcgVM",target:"_blank"}},[s("span",{staticClass:"icon is-medium"},[s("ion-icon",{attrs:{name:"logo-discord",size:"medium"}})],1)]),s("a",{staticClass:"navbar-item",attrs:{href:"https://medium.com/zerodrop",target:"_blank"}},[s("span",{staticClass:"icon is-medium"},[s("ion-icon",{attrs:{name:"logo-medium",size:"medium"}})],1)])])])])])])])},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"columns py-6"},[s("div",{staticClass:"column"},[s("div",[s("a",{attrs:{href:""}},[s("img",{attrs:{src:"img/zd-logo.svg",alt:"ZeroDrop Logo"}})])])]),s("div",{staticClass:"column"},[s("div",[s("p",{staticClass:"heading is-1 is-spaced"},[t._v("Company")]),s("ul",[s("li",[s("a",{attrs:{href:""}},[t._v("About")])])])])]),s("div",{staticClass:"column"},[s("div",[s("p",{staticClass:"heading is-1 is-spaced"},[t._v("Products")]),s("ul",[s("li",[s("a",{attrs:{href:""}},[t._v("ZeroDrop App")])]),s("li",[s("a",{attrs:{href:""}},[t._v("ZeroDrop Wallet")])])])])]),s("div",{staticClass:"column"},[s("div",[s("p",{staticClass:"heading is-1 is-spaced"},[t._v("Features")]),s("ul",[s("li",[s("a",{attrs:{href:""}},[t._v("Quest Engine")])]),s("li",[s("a",{attrs:{href:""}},[t._v("Mintdrop")])])])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"column"},[s("p",[t._v("© 2022 Zerodrop Labs Inc. All Rights Reserved.")])])}],n={name:"Footer",props:{msg:String},components:{},mounted(){},methods:{}},l=n,o=i(1001),r=(0,o.Z)(l,a,e,!1,null,"436cf9fe",null),c=r.exports},8353:function(t,s,i){i.d(s,{Z:function(){return c}});var a=function(){var t=this,s=t._self._c;return s("nav",{staticClass:"navbar p-3",class:{"is-fixed-top":!t.view.topOfPage,"has-background-white":!t.view.topOfPage,"semi-transpanrent":!t.view.topOfPage,"nav-border":!t.view.topOfPage},attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-item",on:{click:function(s){return t.handleViewPage("/")}}},[s("img",{attrs:{src:"img/zd-logo.svg",alt:"ZeroDrop Logo"}})]),s("a",{staticClass:"navbar-burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(s){return t.toggleMobileMenu()}}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive}},[s("div",{staticClass:"navbar-start"},[s("a",{staticClass:"navbar-item",on:{click:function(s){return t.handleViewPage("/about")}}},[t._v("About")]),s("a",{staticClass:"navbar-item",on:{click:function(s){return t.handleViewPage("/quest-engine")}}},[t._v("Quest Engine")]),s("a",{staticClass:"navbar-item",on:{click:function(s){return t.handleViewPage("/mint-drop")}}},[t._v("MintDrop")])]),s("div",{staticClass:"navbar-end"},[s("a",{staticClass:"navbar-item",attrs:{href:"https://twitter.com/zerodrop_io",target:"_blank"}},[s("span",{staticClass:"icon is-medium"},[s("ion-icon",{attrs:{name:"logo-twitter",size:"medium"}})],1)]),s("a",{staticClass:"navbar-item",attrs:{href:"https://discord.com/invite/EsNHcKcgVM",target:"_blank"}},[s("span",{staticClass:"icon is-medium"},[s("ion-icon",{attrs:{name:"logo-discord",size:"medium"}})],1)]),s("a",{staticClass:"navbar-item",attrs:{href:"https://medium.com/zerodrop",target:"_blank"}},[s("span",{staticClass:"icon is-medium"},[s("ion-icon",{attrs:{name:"logo-medium",size:"medium"}})],1)]),t._m(0)])])])])},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"navbar-item"},[s("div",{staticClass:"buttons"},[s("a",{staticClass:"button is-primary is-rounded"},[s("strong",[t._v("Demo")])])])])}],n={name:"NavBar",props:{msg:String},data(){return{isActive:!1,view:{topOfPage:!0}}},components:{},mounted(){},beforeMount(){window.addEventListener("scroll",this.handleScroll)},methods:{toggleMobileMenu(){this.isActive=!this.isActive},handleViewPage(t){this.$router.push(t)},handleScroll(){window.pageYOffset>0?this.view.topOfPage&&(this.view.topOfPage=!1):this.view.topOfPage||(this.view.topOfPage=!0)}}},l=n,o=i(1001),r=(0,o.Z)(l,a,e,!1,null,"7d2319be",null),c=r.exports},1286:function(t,s,i){i.d(s,{Z:function(){return c}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container is-fluid"},[s("div",{staticClass:"container my-6 p-6 box has-background-light border-color-grey-lighter",staticStyle:{border:"1px solid"}},[t._m(0),s("form",{staticClass:"field my-6",attrs:{method:"POST",action:"https://script.google.com/macros/s/AKfycbwNtasNFHrpVN2Gf0ftKgRFASHh9tn9IJAma0OAWQsKrbX4lCrNavtlAQjOYAIZN9WQRQ/exec"}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input is-large is-tablet-only",attrs:{name:"Email",type:"email",placeholder:"Email",required:""}}),s("span",{staticClass:"icon is-medium is-left"},[s("ion-icon",{attrs:{name:"mail-outline",size:"medium"}})],1)]),s("div",{staticClass:"control has-icons-left has-icons-right mt-5"},[s("input",{staticClass:"input is-large is-tablet-only",attrs:{name:"Name",type:"text",placeholder:"Name",required:""}}),s("span",{staticClass:"icon is-medium is-left"},[s("ion-icon",{attrs:{name:"person-outline",size:"medium"}})],1)])]),t._m(1)]),t._m(2)])])])},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"has-text-centered"},[s("p",{staticClass:"heading has-text-weight-bold gradient-text"},[t._v("Request Demo")]),s("p",{staticClass:"title is-size-2 is-size-3-touch has-text-weight-bold"},[t._v(" Join now and get "),s("br"),t._v("6-months of complimentary access! ")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"column"},[s("div",{staticClass:"control"},[s("textarea",{staticClass:"textarea is-large is-tablet-only",attrs:{placeholder:"Messages",name:"Messages",type:"textarea",rows:"3",required:""}})])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"field is-grouped is-grouped-centered"},[s("button",{staticClass:"button is-primary is-medium",attrs:{type:"submit"}},[t._v("Send")])])}],n={name:"RequestDemo",props:{msg:String},components:{},mounted(){},methods:{}},l=n,o=i(1001),r=(0,o.Z)(l,a,e,!1,null,"e266bd98",null),c=r.exports},8292:function(t,s,i){i.r(s),i.d(s,{default:function(){return m}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"quest-engine"},[s("img",{staticClass:"fix-bg-left",attrs:{src:"img/top-bg-left.svg",alt:""}}),s("img",{staticClass:"fix-bg-right is-hidden-touch",attrs:{src:"img/top-bg-zd.svg",alt:""}}),s("section",{staticClass:"hero is-medium"},[s("div",{staticClass:"hero-head"},[s("Navbar")],1),t._m(0)]),s("div",{staticClass:"container is-fluid"},[s("div",{staticClass:"container"},[s("b-tabs",{staticClass:"block features-tabs",attrs:{position:"is-centered"},model:{value:t.activeTab,callback:function(s){t.activeTab=s},expression:"activeTab"}},t._l(t.featuresList,(function(i,a){return s("b-tab-item",{key:a,attrs:{label:i.label}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("p",{staticClass:"title"},[t._v(t._s(i.desc))])]),s("div",{staticClass:"column is-three-quarters"},[s("img",{staticStyle:{"border-radius":"10px"},attrs:{src:i.imageUrl}})])])])})),1)],1)]),s("div",{staticClass:"container is-fluid my-6"},[s("div",{staticClass:"container"},[t._m(1),s("hr"),s("div",{staticClass:"my-6"},[s("div",{staticClass:"columns is-variable my-3 benefits-list"},[s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("ion-icon",{staticClass:"gradient-text",attrs:{name:"logo-apple-ar"}}),s("p",{staticClass:"py-4 subtitle is-5"},[t._v(" User friendly for marketers, 5 minute setup ")])],1)]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("ion-icon",{attrs:{name:"logo-apple-ar"}}),s("p",{staticClass:"py-4 subtitle is-5"},[t._v(" Increase engagement on Discord and Twitter ")])],1)]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("ion-icon",{attrs:{name:"logo-apple-ar"}}),s("p",{staticClass:"py-4 subtitle is-5"},[t._v(" Unleash your creativity with our expanding library of pre-built components ")])],1)])]),s("div",{staticClass:"columns is-variable my-3 benefits-list"},[s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("ion-icon",{staticClass:"gradient-text",attrs:{name:"logo-apple-ar"}}),s("p",{staticClass:"py-4 subtitle is-5"},[t._v(" Fun and immersive onboarding for your audience ")])],1)]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("ion-icon",{attrs:{name:"logo-apple-ar"}}),s("p",{staticClass:"py-4 subtitle is-5"},[t._v(" Easily reward your community for engagement ")])],1)]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("ion-icon",{attrs:{name:"logo-apple-ar"}}),s("p",{staticClass:"py-4 subtitle is-5"},[t._v("Simple and effective raid2earn")])],1)])]),s("div",{staticClass:"columns is-variable my-3 benefits-list"},[s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("ion-icon",{staticClass:"gradient-text",attrs:{name:"logo-apple-ar"}}),s("p",{staticClass:"py-4 subtitle is-5"},[t._v(" Convenient access to your analytics in our zerodrop portal ")])],1)]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("ion-icon",{attrs:{name:"logo-apple-ar"}}),s("p",{staticClass:"py-4 subtitle is-5"},[t._v(" Tracking of your community engagement with the quest engine ")])],1)]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("ion-icon",{attrs:{name:"logo-apple-ar"}}),s("p",{staticClass:"py-4 subtitle is-5"},[t._v(" Establish a link between profiles both on-chain and off-chain ")])],1)])])])])]),s("hr"),t._m(2),s("RequestDemo"),s("Footer")],1)},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("p",{staticClass:"heading has-text-weight-bold gradient-text"},[t._v("Feature")]),s("p",{staticClass:"title is-spaced is-size-3-touch has-text-weight-bold",staticStyle:{"font-size":"4rem"}},[t._v(" Quest Engine ")]),s("p",{staticClass:"subtitle"},[t._v(" Immerse your community in your story and reward them "),s("br"),t._v("for their engagements ")]),s("button",{staticClass:"button is-large my-6"},[t._v("Request a Demo")])])])},function(){var t=this,s=t._self._c;return s("div",{},[s("p",{staticClass:"heading has-text-weight-bold gradient-text"},[t._v("Benefits")]),s("p",{staticClass:"title is-size-1 is-size-3-touch has-text-weight-bold"},[t._v(" Why Quest Engine ")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"container is-fluid"},[s("div",{staticClass:"container my-6 p-6 box border-color-grey-lighter",staticStyle:{border:"1px solid"}},[s("div",{staticClass:"has-text-centered"},[s("p",{staticClass:"heading has-text-weight-bold gradient-text"},[t._v("Use Cases")]),s("p",{staticClass:"title is-size-1 is-size-3-touch has-text-weight-bold"},[t._v(" Best to use on ")])]),s("div",{staticClass:"tile is-ancestor my-6"},[s("div",{staticClass:"tile is-vertical"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification"},[s("p",{staticClass:"subtitle"},[t._v(" Onboard new Discord users with a guided tour and funnel them into relevant channels with custom Discord roles ")])]),s("article",{staticClass:"tile is-child notification"},[s("p",{staticClass:"subtitle"},[t._v(" Building in-depth profiles of your community ")])])])])]),s("div",{staticClass:"tile is-vertical is-8"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification"},[s("p",{staticClass:"subtitle"},[t._v(" Bridge the engagement between Discord to Twitter ")])]),s("article",{staticClass:"tile is-child notification"},[s("p",{staticClass:"subtitle"},[t._v(" Get feedback on episodes of game that you’re developing ")])])]),s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification"},[s("p",{staticClass:"subtitle"},[t._v(" Time-limited quest to promote new products ")])]),s("article",{staticClass:"tile is-child notification"},[s("p",{staticClass:"subtitle"},[t._v("Raid2earn")])]),s("article",{staticClass:"tile is-child notification"},[s("p",{staticClass:"subtitle"},[t._v(" Screen and whitelist wallet for next NFT sale ")])])])])])])])])}],n=i(8353),l=i(3025),o=i(1286),r={name:"QuestEngineView",props:{msg:String},components:{Navbar:n.Z,Footer:l.Z,RequestDemo:o.Z},data(){return{isActive:!1,items:[],activeTab:0,featuresList:[{label:"Build quests",desc:"Build quests around your story",imageUrl:"https://dummyimage.com/16:9x1080/0A0A0A/8A8A8A"},{label:"Users journey",desc:"Users journey through the quest with Discord bot",imageUrl:"https://dummyimage.com/16:9x1080/0A0A0A/8A8A8A"},{label:"Activities",desc:"Engage users in different activities: Tweet, connect wallet, verify NFTs, watch videos, play games…",imageUrl:"https://dummyimage.com/16:9x1080/0A0A0A/8A8A8A"},{label:"Rewards",desc:"Reward them with tokens, NFTs, points and roles",imageUrl:"https://dummyimage.com/16:9x1080/0A0A0A/8A8A8A"},{label:"Build profiles",desc:"Build up the profile of your community with new insights",imageUrl:"https://dummyimage.com/16:9x1080/0A0A0A/8A8A8A"}]}},mounted(){},methods:{}},c=r,d=i(1001),u=(0,d.Z)(c,a,e,!1,null,"36834ff0",null),m=u.exports}}]);
//# sourceMappingURL=292.e6687066.js.map