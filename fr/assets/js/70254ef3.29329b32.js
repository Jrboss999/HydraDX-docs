"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[323],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||r;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9910:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var i=n(3117),o=n(102),r=(n(7294),n(3905)),a=n(4996),l=["components"],s={id:"omnipool_lp",title:"Single-Sided LPing"},c=void 0,u={unversionedId:"omnipool_lp",id:"omnipool_lp",title:"Single-Sided LPing",description:"The cutting-edge design of the HydraDX Omnipool unlocks the possibility of single-sided liquidity provisioning: Anyone can provide liquidity only for the asset they want, and as much as they want (up to the respective TVL cap for the asset). This resolves one of the main drawbacks of standard XYK AMMs which require that liquidity providers (LPs) deposit a pair of assets in equivalent value.",source:"@site/docs/omnipool_lp.md",sourceDirName:".",slug:"/omnipool_lp",permalink:"/fr/omnipool_lp",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/omnipool_lp.md",tags:[],version:"current",frontMatter:{id:"omnipool_lp",title:"Single-Sided LPing"},sidebar:"sidebar",previous:{title:"Efficient Trading",permalink:"/fr/omnipool_trading"},next:{title:"Hydrate Your Treasury (B2B)",permalink:"/fr/omnipool_treasuries"}},p=[{value:"The Hub Token LRNA",id:"the-hub-token-lrna",children:[],level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The cutting-edge design of the HydraDX Omnipool unlocks the possibility of single-sided liquidity provisioning: Anyone can provide liquidity only for the asset they want, and as much as they want (up to the respective TVL cap for the asset). This resolves one of the main drawbacks of standard XYK AMMs which require that liquidity providers (LPs) deposit a pair of assets in equivalent value."),(0,r.kt)("p",null,"Liquidity in the HydraDX Omnipool is concentrated, meaning that by providing your asset you gain instant exposure to all other assets in the Omnipool. Forget about liquidity fragmentation and the need to spread your liquidity across several trading pools."),(0,r.kt)("h2",{id:"the-hub-token-lrna"},"The Hub Token LRNA"),(0,r.kt)("p",null,"Single-sided liquidity provisioning is made possible by our hub token called Lerna (LRNA). Every time liquidity is added, the Omnipool will mint a corresponding amount of LRNA to keep the pool in balance. Accordingly, LRNA will be burnt to reflect any removal of liquidity. These mechanisms ensure that the value of LRNA does not significantly fluctuate when assets are added or removed from the Omnipool."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"login",src:(0,a.Z)("/omnipool/lrna.png"),width:"300px"})),(0,r.kt)("p",null,"Another way to understand the hub token concept is to imagine every single asset within the Omnipool as a synthetic 50/50 liquidity pool, with the only difference being that the 2nd leg of the pair is always LRNA i.e. TKN:LRNA."),(0,r.kt)("p",null,"This design allows the Protocol to use LRNA as a proxy which reflects the value locked in the Omnipool, including trading activity and price fluctuations, in an abstract manner."))}f.isMDXComponent=!0}}]);