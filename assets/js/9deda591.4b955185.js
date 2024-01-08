"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[574],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return b}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(i),u=n,b=d["".concat(s,".").concat(u)]||d[u]||h[u]||a;return i?r.createElement(b,o(o({ref:t},c),{},{components:i})):r.createElement(b,o({ref:t},c))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},7394:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=i(3117),n=(i(7294),i(3905)),a=i(4996);const o={id:"lbp",title:"Liquidity bootstrapping (LBP)"},l=void 0,s={unversionedId:"lbp",id:"lbp",title:"Liquidity bootstrapping (LBP)",description:"LBP (Liquidity Bootstrapping Pool) is a permissionless Automated Market Maker (AMM) built for the Polkadot ecosystem. Its aim is to empower young crypto projects by allowing them to bootstrap liquidity and navigate initial price discovery while performing a fair distribution of tokens to their communities. Another possible use of LBP is to conduct bond campaigns which allow the Protocol to acquire Protocol-owned liquidity (POL).",source:"@site/docs/lbp.md",sourceDirName:".",slug:"/lbp",permalink:"/lbp",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/lbp.md",tags:[],version:"current",frontMatter:{id:"lbp",title:"Liquidity bootstrapping (LBP)"},sidebar:"sidebar",previous:{title:"Bonds",permalink:"/bonds"},next:{title:"Fees",permalink:"/fees"}},p={},c=[{value:"Overview of General LBP Trajectory",id:"overview-of-general-lbp-trajectory",level:2},{value:"<strong>At Start</strong>",id:"at-start",level:3},{value:"During the LBP Event",id:"during-the-lbp-event",level:3},{value:"Model Scenario Examples (illustrative)",id:"model-scenario-examples-illustrative",level:2},{value:"Chart 1: If nobody buys",id:"chart-1-if-nobody-buys",level:3},{value:"Chart 2: If someone buys (with small bids)",id:"chart-2-if-someone-buys-with-small-bids",level:3},{value:"Chart 3: If someone buys (with a large bid)",id:"chart-3-if-someone-buys-with-a-large-bid",level:3},{value:"Chart 4: If someone buys (with a large bid at the end)",id:"chart-4-if-someone-buys-with-a-large-bid-at-the-end",level:3},{value:"Real-world LBP <strong>Examples</strong>",id:"real-world-lbp-examples",level:2},{value:"Exhibit A",id:"exhibit-a",level:3},{value:"Exhibit B",id:"exhibit-b",level:3},{value:"Exhibit C: HydraDX LBP",id:"exhibit-c-hydradx-lbp",level:3}],d={toc:c};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"LBP")," (Liquidity Bootstrapping Pool) is a ",(0,n.kt)("strong",{parentName:"p"},"permissionless Automated Market Maker (AMM)")," built for the Polkadot ecosystem. Its aim is to ",(0,n.kt)("strong",{parentName:"p"},"empower young crypto projects")," by allowing them to ",(0,n.kt)("strong",{parentName:"p"},"bootstrap liquidity")," and ",(0,n.kt)("strong",{parentName:"p"},"navigate initial price discovery")," while performing a ",(0,n.kt)("strong",{parentName:"p"},"fair distribution of tokens to their communities"),". Another possible use of LBP is to conduct bond campaigns which allow the Protocol to acquire Protocol-owned liquidity (POL)."),(0,n.kt)("p",null,"An LBP uses a ",(0,n.kt)("strong",{parentName:"p"},"mechanism of time-based weights shifting")," which exerts a ",(0,n.kt)("strong",{parentName:"p"},"continuous downward pressure")," on the price. This is being ",(0,n.kt)("strong",{parentName:"p"},"counteracted by any buy orders"),"  that change the amount of tokens in the pool and drive the price up."),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"The information in this article is for illustrative purposes only. Every LBP is different and it is impossible to predict in advance how the price will develop."),(0,n.kt)("p",{parentName:"admonition"},"The starting price of the LBP, its weights settings and the overall general interest in the project raising liquidity are all factors which will affect the price navigation during LBP."),(0,n.kt)("p",{parentName:"admonition"},"Do your own research before aping!")),(0,n.kt)("h2",{id:"overview-of-general-lbp-trajectory"},"Overview of General LBP Trajectory"),(0,n.kt)("h3",{id:"at-start"},(0,n.kt)("strong",{parentName:"h3"},"At Start")),(0,n.kt)("p",null,"An LBP event begins with a predefined starting price. Projects can decide to set an unrealistically high price and let the weights push it down, but this is not necessarily always the case. You should DYOR with regard to the starting price."),(0,n.kt)("p",null,"If the starting price is (many times higher) than the expected valuation, it may not be wise to buy at the very beginning of the LBP event."),(0,n.kt)("h3",{id:"during-the-lbp-event"},"During the LBP Event"),(0,n.kt)("p",null,"Every LBP event is set to run for a specific amount of time (usually 3-5 days). Through the pre-programmed changing of the token weights in the pool, a downward price pressure will begin to be exerted during the course of the LBP event. This programmed decline will have its highest downward pressure at the beginning periods of the LBP. This is because when the token weight ratio changes from, say, 90-10 to 89-11, that is a 10% increase in supply of the latter asset vs if the weighting changes from 60-40 to 59-41, which is a 2.5% increase in supply."),(0,n.kt)("p",null,"As such, this programmed downward pressure allows participants to enter once price reaches what they deem a reasonable level. When participants begin to buy from the LBP, this will change the expected price trajectory because this will change the ratio between the two tokens. In addition, the size and timing of the buy order also affects how large the price impact will be. Placing a very large order will drive the price up (a lot), meaning that splitting orders into smaller chuncks may be a good idea."),(0,n.kt)("p",null,"Eventually, as the downward pressure decreases, the buy pressure from participants will overcome the further downward pressure (supply) programmed and prices will begin to rise. At this time, some participants may also sell back their acquired tokens to the LBP. This would also change the expected price trajectory of the LBP."),(0,n.kt)("h2",{id:"model-scenario-examples-illustrative"},"Model Scenario Examples (illustrative)"),(0,n.kt)("p",null,"Let\u2019s take a look at how the LBP price trajectory may change based on user actions. Please note that the examples and prices below are for illustrative purposes only."),(0,n.kt)("h3",{id:"chart-1-if-nobody-buys"},"Chart 1: If nobody buys"),(0,n.kt)("p",null,"If nobody buys, the price will continually decline based on a similar curve displayed below:"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"lbp",src:(0,a.Z)("/lbp/model_1.jpg"),width:"600px"})),(0,n.kt)("h3",{id:"chart-2-if-someone-buys-with-small-bids"},"Chart 2: If someone buys (with small bids)"),(0,n.kt)("p",null,"In case of a small but consistent buy pressure just above the $0.01 mark, the curve would look something like this:"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"lbp",src:(0,a.Z)("/lbp/model_2.jpg"),width:"600px"})),(0,n.kt)("h3",{id:"chart-3-if-someone-buys-with-a-large-bid"},"Chart 3: If someone buys (with a large bid)"),(0,n.kt)("p",null,"If someone buys 1/4 of all tokens at the price of $0.005, and nobody else buys or sells, the curve would look like this:"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"lbp",src:(0,a.Z)("/lbp/model_3.jpg"),width:"600px"})),(0,n.kt)("h3",{id:"chart-4-if-someone-buys-with-a-large-bid-at-the-end"},"Chart 4: If someone buys (with a large bid at the end)"),(0,n.kt)("p",null,"In cases of large buy orders towards the end of the LBP event, the price may pump significantly. This is because at the end of the LBP, the downward pressure from the weights is very small while the effect of large buy orders is relatively bigger:"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"lbp",src:(0,a.Z)("/lbp/model_4.jpg"),width:"600px"})),(0,n.kt)("h2",{id:"real-world-lbp-examples"},"Real-world LBP ",(0,n.kt)("strong",{parentName:"h2"},"Examples")),(0,n.kt)("p",null,"The abstract model scenarios above should shed some light on the interaction between user orders and the shifting weights."),(0,n.kt)("p",null,"Now let's take a look at several real-world examples of an LBP:"),(0,n.kt)("h3",{id:"exhibit-a"},"Exhibit A"),(0,n.kt)("p",null,"Price was initially sniped by bots/whales and pumped significantly over the initial price. This was eventually counteracted by the reweighting over time and demand picking up once a more reasonable price was reached."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"lbp",src:(0,a.Z)("/lbp/exhibit_a.jpg"),width:"600px"})),(0,n.kt)("h3",{id:"exhibit-b"},"Exhibit B"),(0,n.kt)("p",null,"Initial price was not sniped and allowed to fall before the significant demand from buyers pushed up prices materially. Buyers still had a good window of opportunity to enter in on acceptable prices given the duration of the LBP."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"lbp",src:(0,a.Z)("/lbp/exhibit_b.jpg"),width:"600px"})),(0,n.kt)("h3",{id:"exhibit-c-hydradx-lbp"},"Exhibit C: HydraDX LBP"),(0,n.kt)("p",null,"Finally, you can take a look at our ",(0,n.kt)("a",{parentName:"p",href:"https://hydradx.substack.com/p/lbp-analysis"},"analysis of the HydraDX LBP")," back in February 2021 which helped HydraDX raise 22.9M DAI to become one of the most successful LBPs ever conducted."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"lbp",src:(0,a.Z)("/lbp/exhibit_c.jpg"),width:"600px"})))}h.isMDXComponent=!0}}]);