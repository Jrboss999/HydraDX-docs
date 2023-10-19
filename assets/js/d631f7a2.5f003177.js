"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[942],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905)),o=n(4996);const i={id:"bonds",title:"Bonds"},s=void 0,d={unversionedId:"bonds",id:"bonds",title:"Bonds",description:"The HydraDX Protocol uses Bonds as part of its strategy to grow and diversify its Protocol-owned liquidity (POL). For this purpose, the HydraDX Governance can at any time decide to issue a given amount of bonds which will be traded against assets that the HydraDX Treasury wishes to accumulate.",source:"@site/docs/bonds.md",sourceDirName:".",slug:"/bonds",permalink:"/bonds",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/bonds.md",tags:[],version:"current",frontMatter:{id:"bonds",title:"Bonds"},sidebar:"sidebar",previous:{title:"Hydrated Farms",permalink:"/omnipool_hydrated_farms"},next:{title:"Liquidity bootstrapping (LBP)",permalink:"/lbp"}},c={},l=[{value:"History of Bonds",id:"history-of-bonds",level:2},{value:"The Process of a Bonds Campaign",id:"the-process-of-a-bonds-campaign",level:2},{value:"After a Bonds Campaign",id:"after-a-bonds-campaign",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The HydraDX Protocol uses ",(0,a.kt)("strong",{parentName:"p"},"Bonds")," as part of its strategy to ",(0,a.kt)("strong",{parentName:"p"},"grow and diversify its Protocol-owned liquidity (POL)"),". For this purpose, the HydraDX Governance can at any time decide to ",(0,a.kt)("strong",{parentName:"p"},"issue a given amount of bonds")," which will be traded against assets that the HydraDX Treasury wishes to accumulate."),(0,a.kt)("p",null,"All HDX bonds have a ",(0,a.kt)("strong",{parentName:"p"},"maturity date"),", which marks the moment when the bond can be ",(0,a.kt)("strong",{parentName:"p"},"swapped against the underlying asset (HDX)"),". The HydraDX Protocol can decide the manner in which bonds are sold: For example, it can host a ",(0,a.kt)("strong",{parentName:"p"},"dynamically priced LBP event"),", or simply place an ",(0,a.kt)("strong",{parentName:"p"},"OTC order against a fixed price"),". Once acquired, bonds are ",(0,a.kt)("strong",{parentName:"p"},"transferrable and tradeable on the secondary market")," (e.g. OTC), also before they have reached maturity."),(0,a.kt)("p",null,"On this page you will find more info on the origins of bonds, as well as the process of a bonds campaign."),(0,a.kt)("h2",{id:"history-of-bonds"},"History of Bonds"),(0,a.kt)("p",null,"The concept of bonds was first pioneered by OlympusDAO in 2021 as a tool which would help grow its POL. In the case of OlympusDAO, the Protocol was heavily relying on unsustainable yields as an incentivisation strategy for attracting liquidity - a strategy which ultimately resulted in an inefficient use of funds outside of bull markets."),(0,a.kt)("h2",{id:"the-process-of-a-bonds-campaign"},"The Process of a Bonds Campaign"),(0,a.kt)("p",null,"The first step of a Bonds campaign is the issuance of the bonds by the Protocol. Any member of the HydraDX Community can initiate a governance discussion and a referendum to issue a given amount of bonds with a predefined maturity date, in order to obtain a given asset as POL."),(0,a.kt)("p",null,"Once bonds are issued, the HydraDX Governance must decide on the method of trade. One option is to host a dedicated LBP event, which limited in time and allows for dynamic pricing thanks to the interplay between time-based weights shifting and demand (more info in our ",(0,a.kt)("a",{parentName:"p",href:"/lbp"},"LBP docs"),"). Another option is for the Protocol to place an OTC order against a predefined price per bond."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{alt:"metadata",src:(0,o.Z)("/bonds/bonds-screen.jpg"),width:"800px"})),(0,a.kt)("h2",{id:"after-a-bonds-campaign"},"After a Bonds Campaign"),(0,a.kt)("p",null,"All bonds have a maturity date. Once matured, the bonds can be swapped against the underlying asset (HDX) in a 1:1 ratio. In the meantime, the bonds are transferrable which means that they can be traded between users (e.g. by placing an OTC order)."))}u.isMDXComponent=!0}}]);