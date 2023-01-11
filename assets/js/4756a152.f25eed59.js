"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[615],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5582:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var n=a(3117),r=(a(7294),a(3905)),o=a(4996);const i={id:"howto_bridge",title:"Bridge Assets"},l=void 0,s={unversionedId:"howto_bridge",id:"howto_bridge",title:"Bridge Assets",description:"On this page you will find a step-by-step guide on bridging tokens from the Ethereum ecosystem using Acala's Wormhole implementation.",source:"@site/docs/howto_bridge.md",sourceDirName:".",slug:"/howto_bridge",permalink:"/howto_bridge",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/howto_bridge.md",tags:[],version:"current",frontMatter:{id:"howto_bridge",title:"Bridge Assets"},sidebar:"sidebar",previous:{title:"Cross-chain Transfer",permalink:"/howto_xcm"},next:{title:"Create a new HDX Account",permalink:"/create_account"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Bridging Assets ETH -&gt; Acala",id:"bridging-assets-eth---acala",level:2},{value:"01 Navigate to Wormhole Token Bridge",id:"01-navigate-to-wormhole-token-bridge",level:3},{value:"02 Select Networks and Connect to Your Account",id:"02-select-networks-and-connect-to-your-account",level:3},{value:"03 Select Asset to Bridge",id:"03-select-asset-to-bridge",level:3},{value:"04 Select Payment for Gas",id:"04-select-payment-for-gas",level:3},{value:"Step 5: Bridge Tokens",id:"step-5-bridge-tokens",level:3},{value:"Bridging Assets Acala -&gt; ETH",id:"bridging-assets-acala---eth",level:2},{value:"01 Navigate to Wormhole Token Bridge Page",id:"01-navigate-to-wormhole-token-bridge-page",level:3},{value:"02 Select Networks and Connect to Your Account",id:"02-select-networks-and-connect-to-your-account-1",level:3},{value:"03 Select Asset to Bridge",id:"03-select-asset-to-bridge-1",level:3},{value:"04 Select Payment for Gas",id:"04-select-payment-for-gas-1",level:3},{value:"05 Bridge Tokens",id:"05-bridge-tokens",level:3}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On this page you will find a step-by-step guide on bridging tokens from the Ethereum ecosystem using Acala's Wormhole implementation."),(0,r.kt)("p",null,"Wormhole\u2019s Portal Bridge allows you to bridge tokens across different chains. Instead of swapping or converting assets directly, Wormhole locks your source assets in a smart contract and mints new Wormhole-wrapped assets on the target chain. You can then swap Wormhole-wrapped assets on an exchange for other assets on the target chain."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Polkadot wallet (Talisman or Polkadot.js/apps);"),(0,r.kt)("li",{parentName:"ul"},"An Ethereum wallet (Metamask);"),(0,r.kt)("li",{parentName:"ul"},"Bind your two wallets following ",(0,r.kt)("a",{parentName:"li",href:"https://guide.acalaapps.wiki/general/address-binding"},"Acala's guide"),". Completing this action will require a small amount ACA.\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to have enough tokens (ETH and ACA) in your wallets to pay for fees. Remember that fees will be charged for sending and redeeming tokens, and for binding your wallet addresses. In the interim, HydraDX has created an ACA faucet to help faciliate initial bridging activities. The faucet can be accessed via directly messaging the ",(0,r.kt)("strong",{parentName:"p"},"Bridge Fee Faucet")," bot located at the top of the member list on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/kkmY35UxAG"},"Discord"),". Note that DMs must be enabled.")),(0,r.kt)("h2",{id:"bridging-assets-eth---acala"},"Bridging Assets ETH -> Acala"),(0,r.kt)("h3",{id:"01-navigate-to-wormhole-token-bridge"},"01 Navigate to Wormhole Token Bridge"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.portalbridge.com/#/transfer"},"https://www.portalbridge.com/#/transfer")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/inbound_1.jpg"),width:"800px"})),(0,r.kt)("h3",{id:"02-select-networks-and-connect-to-your-account"},"02 Select Networks and Connect to Your Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once you have redirected to the Token Bridge Page, select the chains you intend to bridge to and from ",(0,r.kt)("strong",{parentName:"li"},"(1).")," In our case, it will be ",(0,r.kt)("strong",{parentName:"li"},"Ethereum")," as the Source Chain and ",(0,r.kt)("strong",{parentName:"li"},"Acala")," as the Target Chain;"),(0,r.kt)("li",{parentName:"ul"},"Connect to your Metamask account that you are bridging from ",(0,r.kt)("strong",{parentName:"li"},"(2)"),".")),(0,r.kt)("h3",{id:"03-select-asset-to-bridge"},"03 Select Asset to Bridge"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once Metamask is connected, select the token asset you would like to bridge ",(0,r.kt)("strong",{parentName:"li"},"(3)"),". If the token is not found in the dropdown, you can paste in the token contract address (which can be confirmed via Etherscan);"),(0,r.kt)("li",{parentName:"ul"},"Enter the amount of tokens you would like to bridge ",(0,r.kt)("strong",{parentName:"li"},"(4)"),";"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Next (5)"),". This will prompt Metamask to request a network switch from Ethereum to Acala.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that the only asset(s) currently able to be bridged to Acala from Ethereum is: "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"DAI: 0x6B175474E89094C44Da98b954EedeAC495271d0F (always double check contract address)"))),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/inbound_2.jpg"),width:"800px"})),(0,r.kt)("h3",{id:"04-select-payment-for-gas"},"04 Select Payment for Gas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Following the network switch to Acala, select the payment method for gas ",(0,r.kt)("strong",{parentName:"li"},"(6).")," Note that the bridge minimum for feeless bridge (on Acala side) is \u226510 $DAI;"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Next")," ",(0,r.kt)("strong",{parentName:"li"},"(7)")," to proceed. This will prompt Metamask to request a network switch back to Ethereum from Acala.")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/inbound_3.jpg"),width:"800px"})),(0,r.kt)("h3",{id:"step-5-bridge-tokens"},"Step 5: Bridge Tokens"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Following the network switch back to Ethereum, click ",(0,r.kt)("strong",{parentName:"li"},"Approve")," ",(0,r.kt)("strong",{parentName:"li"},"(8)")," to proceed. This will prompt a  first transaction within your Metamask wallet to approve the tokens to be transferred;"),(0,r.kt)("li",{parentName:"ul"},"Once this has been executed, click ",(0,r.kt)("strong",{parentName:"li"},"Transfer")," ",(0,r.kt)("strong",{parentName:"li"},"(8)")," (which will appear in place of Approve). This will prompt a second transaction within your Metamask wallet to execute the bridge transfer.")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/inbound_4.jpg"),width:"800px"})),(0,r.kt)("p",null,"Once the transaction has been processed by Wormhole, click Redeem (9). This action results in you receiving the tokens on the Acala chain."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/inbound_5.jpg"),width:"800px"})),(0,r.kt)("p",null,"You are all set!"),(0,r.kt)("h2",{id:"bridging-assets-acala---eth"},"Bridging Assets Acala -> ETH"),(0,r.kt)("p",null,"After transferring bridged assets back to Acala (using ",(0,r.kt)("a",{parentName:"p",href:"/howto_xcm"},"cross-chain transfers"),"), you can bridge them back to the Ethereum ecosystem following"),(0,r.kt)("h3",{id:"01-navigate-to-wormhole-token-bridge-page"},"01 Navigate to Wormhole Token Bridge Page"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.portalbridge.com/#/transfer"},"https://www.portalbridge.com/#/transfer")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/outbound_1.jpg"),width:"800px"})),(0,r.kt)("h3",{id:"02-select-networks-and-connect-to-your-account-1"},"02 Select Networks and Connect to Your Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once you have redirected to the Token Bridge Page, select the chains you intend to bridge to and from ",(0,r.kt)("strong",{parentName:"li"},"(1).")," In this case, it will be ",(0,r.kt)("strong",{parentName:"li"},"Acala")," as the Source Chain and ",(0,r.kt)("strong",{parentName:"li"},"Ethereum")," as the Target Chain;"),(0,r.kt)("li",{parentName:"ul"},"Connect to your Metamask account that you are bridging from ",(0,r.kt)("strong",{parentName:"li"},"(2)"),".")),(0,r.kt)("h3",{id:"03-select-asset-to-bridge-1"},"03 Select Asset to Bridge"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once Metamask is connected, select the token asset you would like to bridge ",(0,r.kt)("strong",{parentName:"li"},"(3)"),". If the token is not found in the dropdown, you can paste in the token contract address (which can be confirmed via ",(0,r.kt)("a",{parentName:"li",href:"https://blockscout.acala.network/"},"Acala Blockscout"),").")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that the only asset(s) currently able to be bridged to Acala from Ethereum is: "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"DAI: 0x54A37A01cD75B616D63E0ab665bFfdb0143c52AE (always double check contract address)"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enter the amount of tokens you would like to bridge ",(0,r.kt)("strong",{parentName:"li"},"(4)"),";"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Next (5)"),". This will prompt Metamask to request a network switch from Acala to Ethereum.")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/outbound_2.jpg"),width:"800px"})),(0,r.kt)("h3",{id:"04-select-payment-for-gas-1"},"04 Select Payment for Gas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Following the network switch to Ethereum, select the payment method for gas ",(0,r.kt)("strong",{parentName:"li"},"(6).")," Note that Manual Payment is the only option bridging from Acala to Ethereum;"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Next")," ",(0,r.kt)("strong",{parentName:"li"},"(7)")," to proceed. This will prompt Metamask to request a network switch back to Acala from Ethereum.")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/outbound_3.jpg"),width:"800px"})),(0,r.kt)("h3",{id:"05-bridge-tokens"},"05 Bridge Tokens"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Following the network switch back to Acala, click ",(0,r.kt)("strong",{parentName:"li"},"Approve")," ",(0,r.kt)("strong",{parentName:"li"},"(8)")," to proceed. This will prompt a  first transaction within your Metamask wallet to approve the tokens to be transferred;"),(0,r.kt)("li",{parentName:"ul"},"Once this has been executed, click ",(0,r.kt)("strong",{parentName:"li"},"Transfer")," ",(0,r.kt)("strong",{parentName:"li"},"(8)")," (which will appear in place of Approve). This will prompt a second transaction within your Metamask wallet to execute the bridge transfer.")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/outbound_4.jpg"),width:"800px"})),(0,r.kt)("p",null,"Once the transaction has been processed by Wormhole, click Redeem (9). This action results in you receiving the tokens on the Ethereum chain."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_bridge/outbound_5.jpg"),width:"800px"})),(0,r.kt)("p",null,"You are all done!"))}p.isMDXComponent=!0}}]);