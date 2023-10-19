"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[7615],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5582:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=a(3117),n=(a(7294),a(3905)),o=a(4996);const i={id:"howto_bridge",title:"Bridge Assets"},l=void 0,s={unversionedId:"howto_bridge",id:"howto_bridge",title:"Bridge Assets",description:"On this page you will find a step-by-step guide on bridging tokens from the Ethereum ecosystem.  Currently there are two methods to bridging to and from Ethereum (via Wormhole):",source:"@site/docs/howto_bridge.md",sourceDirName:".",slug:"/howto_bridge",permalink:"/es/howto_bridge",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/howto_bridge.md",tags:[],version:"current",frontMatter:{id:"howto_bridge",title:"Bridge Assets"},sidebar:"sidebar",previous:{title:"Cross-chain Transfer",permalink:"/es/howto_xcm"},next:{title:"Trade in Omnipool",permalink:"/es/howto_trade"}},d={},u=[{value:"To/From Ethereum via Moonbeam",id:"moonbeam",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"01 Navigate to Carrier.so",id:"01-navigate-to-carrierso",level:3},{value:"02 Add the Wallets from Source and Destination Network",id:"02-add-the-wallets-from-source-and-destination-network",level:3},{value:"03 Select Networks and Wallets to Bridge",id:"03-select-networks-and-wallets-to-bridge",level:3},{value:"04 Select Asset to Bridge",id:"04-select-asset-to-bridge",level:3},{value:"05 Bridge Tokens",id:"05-bridge-tokens",level:3},{value:"To/From Ethereum via Acala",id:"acala",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"01 Navigate to Acala Bridge Page",id:"01-navigate-to-acala-bridge-page",level:3},{value:"Step 2: Connect to Your Account",id:"step-2-connect-to-your-account",level:3},{value:"Step 3: Bridge Tokens",id:"step-3-bridge-tokens",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"On this page you will find a step-by-step guide on bridging tokens from the Ethereum ecosystem.  Currently there are two methods to bridging to and from Ethereum (via Wormhole):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#moonbeam"},"Moonbeam routed liquidity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#acala"},"Acala"))),(0,n.kt)("p",null,"Wormhole\u2019s Portal Bridge allows you to bridge tokens across different chains. Instead of swapping or converting assets directly, Wormhole locks your source assets in a smart contract and mints new Wormhole-wrapped assets on the target chain. You can then swap Wormhole-wrapped assets on an exchange for other assets on the target chain."),(0,n.kt)("h2",{id:"moonbeam"},"To/From Ethereum via Moonbeam"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Polkadot wallet (Talisman or Polkadot.js/apps);"),(0,n.kt)("li",{parentName:"ul"},"An Ethereum wallet (Talisman or Metamask);")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to have enough tokens (ETH) in your wallets to pay for fees. Remember that fees will be charged for sending and redeeming tokens.")),(0,n.kt)("h3",{id:"01-navigate-to-carrierso"},"01 Navigate to Carrier.so"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.carrier.so/"},"https://www.carrier.so/")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Use with caution. All crypto applications can potentially carry risks related to smart contracts/pallets.")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/mb1.jpg"),width:"600px"})),(0,n.kt)("h3",{id:"02-add-the-wallets-from-source-and-destination-network"},"02 Add the Wallets from Source and Destination Network"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Once you have navigated to Carrier.so, add the wallets needed to allow for bridging to and from the desired networks\xa0",(0,n.kt)("strong",{parentName:"li"},"(1 in image above).")),(0,n.kt)("li",{parentName:"ul"},"In the example above, Metamask was selected as the wallet for Ethereum and Talisman for HydraDX.")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/mb2.jpg"),width:"600px"})),(0,n.kt)("h3",{id:"03-select-networks-and-wallets-to-bridge"},"03 Select Networks and Wallets to Bridge"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/mb3.jpg"),width:"600px"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Once Metamask and Talisman are connected, select the network chains ",(0,n.kt)("strong",{parentName:"li"},"(2)")," and select the previously connected wallets ",(0,n.kt)("strong",{parentName:"li"},"(3)"),".")),(0,n.kt)("h3",{id:"04-select-asset-to-bridge"},"04 Select Asset to Bridge"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select the token asset and amount of tokens you would like to bridge\xa0",(0,n.kt)("strong",{parentName:"li"},"(4)"),".")),(0,n.kt)("h3",{id:"05-bridge-tokens"},"05 Bridge Tokens"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Within ",(0,n.kt)("strong",{parentName:"li"},"Settings")," ",(0,n.kt)("strong",{parentName:"li"},"(5)"),", you can select whether to Auto Relay the transaction. It is recommended that this is toggled on.")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/mb4.jpg"),width:"600px"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click\xa0",(0,n.kt)("strong",{parentName:"li"},"Confirm & Begin Transaction"),"\xa0",(0,n.kt)("strong",{parentName:"li"},"(6)"),"\xa0to proceed. This will prompt your wallet to sign the transactions. Once confirmed, you are all done!")),(0,n.kt)("p",null,"In the example above, bridging from Ethereum to HydraDX, your assets will automatically appear in your wallet on HydraDX network. If you are bridging out of HydraDX to Ethereum, your assets should appear in your Metamask wallet afterwards."),(0,n.kt)("h2",{id:"acala"},"To/From Ethereum via Acala"),(0,n.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Polkadot wallet (Talisman or Polkadot.js/apps);"),(0,n.kt)("li",{parentName:"ul"},"An Ethereum wallet (Metamask);"),(0,n.kt)("li",{parentName:"ul"},"Bind your two wallets following\xa0",(0,n.kt)("a",{parentName:"li",href:"https://guide.acalaapps.wiki/general/address-binding"},"Acala's guide"),". Completing this action will require a small amount of ACA.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to have enough tokens (ETH and ACA) in your wallets to pay for fees. Remember that fees will be charged for sending and redeeming tokens, and for binding your wallet addresses.")),(0,n.kt)("h3",{id:"01-navigate-to-acala-bridge-page"},"01 Navigate to Acala Bridge Page"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://apps.acala.network/bridge"},"https://apps.acala.network/bridge")),(0,n.kt)("p",null,"Once you have been directed to Acala bridge page, follow the actions below:"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/aca1.jpg"),width:"600px"})),(0,n.kt)("h3",{id:"step-2-connect-to-your-account"},"Step 2: Connect to Your Account"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connect your account ",(0,n.kt)("strong",{parentName:"li"},"(1)"),"."),(0,n.kt)("li",{parentName:"ul"},"Select the chains you intend to bridge to and from ",(0,n.kt)("strong",{parentName:"li"},"(2)"),", in this case, it will be ",(0,n.kt)("strong",{parentName:"li"},"Ethereum")," as the Origin Chain and ",(0,n.kt)("strong",{parentName:"li"},"HydraDX")," as the Destination Chain."),(0,n.kt)("li",{parentName:"ul"},"Connect to your Metamask account that you are bridging from ",(0,n.kt)("strong",{parentName:"li"},"(3)"),".")),(0,n.kt)("h3",{id:"step-3-bridge-tokens"},"Step 3: Bridge Tokens"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enter the amount of tokens and the token for bridging ",(0,n.kt)("strong",{parentName:"li"},"(4)"),"."),(0,n.kt)("li",{parentName:"ul"},"To commence the bridge, click ",(0,n.kt)("strong",{parentName:"li"},"Approve Tokens (5)")," and sign the transaction using your Metamask wallet app."),(0,n.kt)("li",{parentName:"ul"},"Once the tokens are approved for transfer, click ",(0,n.kt)("strong",{parentName:"li"},"Send Tokens (5)"),". This starts the bridging process cross-chain."),(0,n.kt)("li",{parentName:"ul"},"Once the transaction has been processed by Wormhole, click ",(0,n.kt)("strong",{parentName:"li"},"Redeem & Route Tokens (5).")," This action results in you receiving the tokens on the destination chain.")),(0,n.kt)("p",null,"In the example above, bridging from Ethereum to HydraDX, your assets will automatically appear in your wallet on HydraDX network. If you are bridging out of HydraDX to Ethereum, your assets should appear in your Metamask wallet afterwards."))}p.isMDXComponent=!0}}]);