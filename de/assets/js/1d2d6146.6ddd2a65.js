"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[4101],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6845:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var n=r(3117),a=(r(7294),r(3905));const i={id:"omnipool_hydrated_farms",title:"Hydrated Farms"},o=void 0,s={unversionedId:"omnipool_hydrated_farms",id:"omnipool_hydrated_farms",title:"Hydrated Farms",description:"Hydrated Farms are time-limited incentives programs which offer additional rewards for providing liquidity for selected assets, on top of the rewards from trading fees.",source:"@site/docs/omnipool_hydrated_farms.md",sourceDirName:".",slug:"/omnipool_hydrated_farms",permalink:"/de/omnipool_hydrated_farms",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/omnipool_hydrated_farms.md",tags:[],version:"current",frontMatter:{id:"omnipool_hydrated_farms",title:"Hydrated Farms"},sidebar:"sidebar",previous:{title:"Less Impermanent Loss",permalink:"/de/omnipool_impermanent_loss"},next:{title:"Bonds",permalink:"/de/bonds"}},l={},d=[{value:"Farm NFTs",id:"farm-nfts",level:2},{value:"Rewards Stacking",id:"rewards-stacking",level:2},{value:"Loyalty Multiplier",id:"loyalty-multiplier",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hydrated Farms are time-limited incentives programs which offer additional rewards for providing liquidity for selected assets, on top of the rewards from trading fees."),(0,a.kt)("p",null,"Departing from traditional liquidity mining programs, Hydrated Farms offer several distinctive features: they use ",(0,a.kt)("a",{parentName:"p",href:"#farm-nfts"},"Farm NFTs")," to represent the farm position, they support ",(0,a.kt)("a",{parentName:"p",href:"#rewards-stacking"},"rewards stacking"),", and their rewards grow over time thanks to a ",(0,a.kt)("a",{parentName:"p",href:"#loyalty-multiplier"},"loyalty multiplier"),"."),(0,a.kt)("p",null,"On this page you will find further details on the features of Hydrated Farms. If you would like to participate, please visit our ",(0,a.kt)("a",{parentName:"p",href:"/howto_hydrated_farms"},"step-by-step guide on Hydrated Farms"),"."),(0,a.kt)("h2",{id:"farm-nfts"},"Farm NFTs"),(0,a.kt)("p",null,"Whenever a user provides liquidity to the Omnipool and joins a Hydrated Farm, the HydraDX Protocol will mint an NFT which is owned by the user. This NFT represents the user position in the farm and stores certain details such as time of entry. This enables the Protocol to provide sustainable incentives with rewards which grow over time."),(0,a.kt)("p",null,"The owner of the farm NFT controls the position in the farm as well the underlying liquidity in the Omnipool. In the future, Protocol stakeholders may decide to open up a marketplace for Farm NFTs or enable their usage as collateral."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Due to the unique properties of the Farm NFTs, joining a given farm multiple times will yield several NFTs.")),(0,a.kt)("h2",{id:"rewards-stacking"},"Rewards Stacking"),(0,a.kt)("p",null,"Hydrated Farms support the possibility to offer rewards in more than one asset. In other words, rewards are stackable."),(0,a.kt)("p",null,"Any team can reach out to the HydraDX stakeholders with the request to create a Hydrated Farm incentivized by their own TKN. Following this example, the HydraDX governance can decide to also provide HDX as incentives to that farm. As a result, hydrated farmers would receive both HDX and TKN rewards."),(0,a.kt)("h2",{id:"loyalty-multiplier"},"Loyalty Multiplier"),(0,a.kt)("p",null,"To encourage more sustainable liquidity provisioning, Hydrated Farms feature a loyalty multiplier - rewards grow over time as liquidity remains in the farm. You can view the exact curve for distributing rewards on the farm detail page."),(0,a.kt)("p",null,"Once users decide to leave a farm, their loyalty multiplier is reset and they will begin from the base level again if they decide to rejoin."))}u.isMDXComponent=!0}}]);