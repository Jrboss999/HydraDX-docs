"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[714],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return d}});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(i),d=a,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return i?r.createElement(m,n(n({ref:t},u),{},{components:i})):r.createElement(m,n({ref:t},u))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,n=new Array(o);n[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var l=2;l<o;l++)n[l]=i[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},4618:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var r=i(3117),a=i(102),o=(i(7294),i(3905)),n=["components"],s={id:"omnipool_security",title:"State of the Art Security"},c=void 0,l={unversionedId:"omnipool_security",id:"omnipool_security",title:"State of the Art Security",description:"The HydraDX Protocol pursues a multi-layered security strategy which is specifically tailored to keep your funds safe. The concepts behind the HydraDX Omnipool, as well as their runtime implementation in Rust, have been subjected to rigorous audits. The second layer of our defence strategy is a generous bug bounty program which rewards the responsible disclosure of any vulnerabilities. Finally, a combination of measures which work together to protect your liquidity (against unfortunate events such as toxic assets or hacks).",source:"@site/docs/omnipool_security.md",sourceDirName:".",slug:"/omnipool_security",permalink:"/es/omnipool_security",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/omnipool_security.md",tags:[],version:"current",frontMatter:{id:"omnipool_security",title:"State of the Art Security"},sidebar:"sidebar",previous:{title:"Hydrate Your Treasury (B2B)",permalink:"/es/omnipool_treasuries"},next:{title:"Less Impermanent Loss",permalink:"/es/omnipool_impermanent_loss"}},u=[{value:"Audits",id:"audits",children:[],level:2},{value:"Bug Bounty Program",id:"bug-bounties",children:[],level:2},{value:"Mechanisms for Protecting Omnipool Liquidity",id:"protecting-liquidity",children:[],level:2}],p={toc:u};function h(e){var t=e.components,i=(0,a.Z)(e,n);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The HydraDX Protocol pursues a multi-layered security strategy which is specifically tailored to keep your funds safe. The concepts behind the HydraDX Omnipool, as well as their runtime implementation in Rust, have been subjected to ",(0,o.kt)("a",{parentName:"p",href:"#audits"},"rigorous audits"),". The second layer of our defence strategy is a ",(0,o.kt)("a",{parentName:"p",href:"#bug-bounties"},"generous bug bounty program")," which rewards the responsible disclosure of any vulnerabilities. Finally, a combination of measures which work together to ",(0,o.kt)("a",{parentName:"p",href:"#protecting-liquidity"},"protect your liquidity")," (against unfortunate events such as toxic assets or hacks)."),(0,o.kt)("h2",{id:"audits"},"Audits"),(0,o.kt)("p",null,"The security audit of the Rust implementation of the HydraDX Omnipool was performed by ",(0,o.kt)("a",{parentName:"p",href:"https://runtimeverification.com/"},"Runtime Verification")," - an established industry leader with clients such as NASA, Ethereum and Polkadot. The scope of the security audit includes the source code of\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-node/blob/master/pallets/omnipool/src/"},"HydraDX Omnipool pallet"),", its\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-math/tree/main/src/omnipool"},"mathematical logic"),"\xa0and\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/warehouse/tree/main/asset-registry"},"asset registry"),", as well as 3rd party libraries which have been included as a (Substrate) dependency. The results of the audit were published in September 2022, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220907-Runtime-Verification-Security-Audit.pdf"},"consult the full report here"),"."),(0,o.kt)("p",null,"In March 2022, the economic/math audit of the Omnipool was completed by ",(0,o.kt)("a",{parentName:"p",href:"https://block.science/"},"BlockScience")," - a leading web3 native firm dedicated to analyzing complex systems for the likes of Graph Protocol and Protocol Labs (Filecoin). The scope of this audit was to provide an overview of the AMM specification with a special attention to the mathematical and economic concepts underpinning the Omnipool, together with the implications of those mechanisms for liquidity provisioning and trading activity. You can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220322-BlockScience-Omnipool-Report%2Baddendum-by-HydraDX.pdf"},"consult the full report here"),", including our addendum with post-factum changes."),(0,o.kt)("h2",{id:"bug-bounties"},"Bug Bounty Program"),(0,o.kt)("p",null,"HydraDX is working with ",(0,o.kt)("a",{parentName:"p",href:"https://immunefi.com/"},"Immunefi")," - another industry leader in the field of blockchain security, to set up a comprehensive system of incentives which rewards the responsible disclosure of bugs and potential exploits."),(0,o.kt)("p",null,"Rewards are distributed according to the impact of the vulnerability based on the ",(0,o.kt)("a",{parentName:"p",href:"https://immunefi.com/immunefi-vulnerability-severity-classification-system-v2-2/"},"Immunefi Vulnerability Severity Classification System V2.2"),". This is a simplified 5-level scale, with separate scales for websites/apps, smart contracts, and blockchains/DLTs, focusing on the impact of the vulnerability reported. "),(0,o.kt)("p",null,"We are in the final stages of setting up the bug bounty program, more info soon."),(0,o.kt)("h2",{id:"protecting-liquidity"},"Mechanisms for Protecting Omnipool Liquidity"),(0,o.kt)("p",null,"We have spent over a year researching and designing mechanisms which are activated in the unfortunate (but not impossible) scenario that an actor tries to drain liquidity from the Omnipool by abusing a toxic asset situation (LUNA-like scenario) or some malicious exploit. We have come up with a bundle of measures which - combined together - establish industry-leading safety standards."),(0,o.kt)("p",null,"One of these measures are the TVL caps (aka Omnipool weights) which define the maximum proportion of liquidity which can be provided for a particular asset relative to all other assets in the pool. The TVL cap is set per asset by following the democratic decision-making process at HydraDX. It makes sense that established assets such as DOT or DAI will have higher caps as compared to project-related coins. This limits the damage a potential liquidity attack can inflict."),(0,o.kt)("p",null,"Another defensive mechanism is the targeted function pausing which enables the HydraDX Technical Committee to temporarily pause transactions calling specific functions of our pallets. This allows us to quickly react and e.g. pause withdrawals to protect the Omnipool liquidity."),(0,o.kt)("p",null,"These are just some of the mechanisms that we have already put into place. As part of future iterations, we are researching and developing additional stuff such as reliable oracles, dynamic fees (making dumps less economically efficient while accruing POL), automated transaction throttling and other usage of circuit breakers."))}h.isMDXComponent=!0}}]);