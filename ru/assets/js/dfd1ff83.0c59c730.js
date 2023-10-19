"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[7939],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,y=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2595:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905)),a=r(4996);const i={id:"howto_dca",title:"Place a DCA Order"},c=void 0,l={unversionedId:"howto_dca",id:"howto_dca",title:"Place a DCA Order",description:"On this page you will find a step-by-step guide for setting up a DCA order in the HydraDX Omnipool.",source:"@site/docs/howto_dca.md",sourceDirName:".",slug:"/howto_dca",permalink:"/ru/howto_dca",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/howto_dca.md",tags:[],version:"current",frontMatter:{id:"howto_dca",title:"Place a DCA Order"},sidebar:"sidebar",previous:{title:"Trade in Omnipool",permalink:"/ru/howto_trade"},next:{title:"Provide Liquidity",permalink:"/ru/howto_lp"}},p={},u=[{value:"Step 1: Navigate to HydraDX DCA Page",id:"step-1-navigate-to-hydradx-dca-page",level:3},{value:"Step 2: Connect to Your Account",id:"step-2-connect-to-your-account",level:3},{value:"Step 3: Set up DCA Order",id:"step-3-set-up-dca-order",level:3},{value:"Step 4: View your DCA Order",id:"step-4-view-your-dca-order",level:3}],d={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"On this page you will find a ",(0,o.kt)("strong",{parentName:"p"},"step-by-step guide for setting up a DCA order")," in the HydraDX Omnipool."),(0,o.kt)("p",null,"Before proceeding, we encourage you to visit our ",(0,o.kt)("a",{parentName:"p",href:"/omnipool_dca"},"DCA product page")," in order to get yourself familiar with the HydraDX implementation of the dollar-cost averaging strategy."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,a.Z)("/howto_dca/dca.jpg")})),(0,o.kt)("h3",{id:"step-1-navigate-to-hydradx-dca-page"},"Step 1: Navigate to HydraDX DCA Page"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://app.hydradx.io/dca"},"https://app.hydradx.io/dca")),(0,o.kt)("h3",{id:"step-2-connect-to-your-account"},"Step 2: Connect to Your Account"),(0,o.kt)("p",null,"Connect your wallet to HydraDX by clicking ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Connect Account")," (1 in image above).")),(0,o.kt)("h3",{id:"step-3-set-up-dca-order"},"Step 3: Set up DCA Order"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the asset you will use to pay for the swap; Enter the order amount for each DCA trade, and the total order size ",(0,o.kt)("strong",{parentName:"li"},"(2)"),";"),(0,o.kt)("li",{parentName:"ul"},"Select the time interval for each DCA swap ",(0,o.kt)("strong",{parentName:"li"},"(3)"),";"),(0,o.kt)("li",{parentName:"ul"},"Select the asset you would like to receive from the swap ",(0,o.kt)("strong",{parentName:"li"},"(4)"),";"),(0,o.kt)("li",{parentName:"ul"},"For advanced users who would like to set up orders at specific block intervals, you can toggle the switch ",(0,o.kt)("strong",{parentName:"li"},"Advanced Settings (5"),") to set this up;"),(0,o.kt)("li",{parentName:"ul"},"If you would like to adjust your slippage preferences, you can do so by clicking on the ",(0,o.kt)("strong",{parentName:"li"},"Settings Icon (6)"),";"),(0,o.kt)("li",{parentName:"ul"},"To complete the DCA order, click on ",(0,o.kt)("strong",{parentName:"li"},"Schedule DCA trades")," ",(0,o.kt)("strong",{parentName:"li"},"(7)")," and sign the transaction using your wallet app.")),(0,o.kt)("h3",{id:"step-4-view-your-dca-order"},"Step 4: View your DCA Order"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After submitting it, your DCA order will appear under ",(0,o.kt)("strong",{parentName:"li"},"DCA Orders"),";"),(0,o.kt)("li",{parentName:"ul"},"To see the details, click the ",(0,o.kt)("strong",{parentName:"li"},"Dropdown Arrow (8)"),";"),(0,o.kt)("li",{parentName:"ul"},"You can cancel your DCA order for the remaining amount by clicking on ",(0,o.kt)("strong",{parentName:"li"},"Terminate (9)"),".")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,a.Z)("/howto_dca/dca_overview.jpg"),width:"600px"})))}s.isMDXComponent=!0}}]);