"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[2989],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,h=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2580:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905)),a=r(4996);const i={id:"howto_xcm",title:"Cross-chain Transfer"},c=void 0,s={unversionedId:"howto_xcm",id:"howto_xcm",title:"Cross-chain Transfer",description:"On this page you will find a step-by-step guide for performing cross-chain transfers.",source:"@site/docs/howto_xcm.md",sourceDirName:".",slug:"/howto_xcm",permalink:"/howto_xcm",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/howto_xcm.md",tags:[],version:"current",frontMatter:{id:"howto_xcm",title:"Cross-chain Transfer"},sidebar:"sidebar",previous:{title:"Contribute to HydraDX",permalink:"/spending_fw"},next:{title:"Bridge Assets",permalink:"/howto_bridge"}},l={},u=[{value:"00 Prerequisites",id:"00-prerequisites",level:2},{value:"01 Navigate to Cross-chain Transfers",id:"01-navigate-to-cross-chain-transfers",level:2},{value:"02 Connect Your Account",id:"02-connect-your-account",level:2},{value:"03 Cross-chain Transfer",id:"03-cross-chain-transfer",level:2}],p={toc:u};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"On this page you will find a ",(0,o.kt)("strong",{parentName:"p"},"step-by-step guide for performing cross-chain transfers"),". "),(0,o.kt)("p",null,"Cross-chain transfers allow you to transport non-native assets to the HydraDX chain from other Polkadot parachains, or from Polkadot itself."),(0,o.kt)("p",null,"Currently, the following tokens are supported by HydraDX for cross-chain transfers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DOT"),(0,o.kt)("li",{parentName:"ul"},"DAI (from Acala, bridged via Wormhole)"),(0,o.kt)("li",{parentName:"ul"},"ETH  (from Acala, bridged via Wormhole)"),(0,o.kt)("li",{parentName:"ul"},"HDX")),(0,o.kt)("h2",{id:"00-prerequisites"},"00 Prerequisites"),(0,o.kt)("p",null,"Before you continue, please make sure you have sufficient amount of tokens on the destination chain for fees (ACA or DOT)."),(0,o.kt)("h2",{id:"01-navigate-to-cross-chain-transfers"},"01 Navigate to Cross-chain Transfers"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://app.hydradx.io/#/cross-chain"},"https://app.hydradx.io/#/cross-chain")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"metadata",src:(0,a.Z)("/howto_xcm/xcm_screen.jpg"),width:"500px"})),(0,o.kt)("h2",{id:"02-connect-your-account"},"02 Connect Your Account"),(0,o.kt)("p",null,"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect wallet")," and connect to your preferred Polkadot wallet. After that, select your account."),(0,o.kt)("h2",{id:"03-cross-chain-transfer"},"03 Cross-chain Transfer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the source chain and the destination chain;"),(0,o.kt)("li",{parentName:"ul"},"Select the asset you intend to transfer and enter the amount;"),(0,o.kt)("li",{parentName:"ul"},"Enter the destination address. It should automatically populate with your address on that chain, but you can also change it to another address;"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Transfer")," and sign the transaction using your wallet.")))}f.isMDXComponent=!0}}]);