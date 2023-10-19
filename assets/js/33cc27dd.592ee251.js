"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[3350],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return f}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(o),y=r,f=u["".concat(p,".").concat(y)]||u[y]||d[y]||a;return o?n.createElement(f,c(c({ref:t},s),{},{components:o})):n.createElement(f,c({ref:t},s))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=o[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},1651:function(e,t,o){o.r(t),o.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=o(3117),r=(o(7294),o(3905)),a=o(4996);const c={id:"polkadotjs_apps_local",title:"Connect to a Local Node"},l=void 0,p={unversionedId:"polkadotjs_apps_local",id:"polkadotjs_apps_local",title:"Connect to a Local Node",description:"You can use the Polkadot/apps to connect to your local HydraDX node. For this purpose, you need to have access to port 9944 which is used for RPC websocket connections.",source:"@site/docs/polkadotjs_apps_local.md",sourceDirName:".",slug:"/polkadotjs_apps_local",permalink:"/polkadotjs_apps_local",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/polkadotjs_apps_local.md",tags:[],version:"current",frontMatter:{id:"polkadotjs_apps_local",title:"Connect to a Local Node"},sidebar:"sidebar",previous:{title:"Set your Identity",permalink:"/identity"},next:{title:"Connect to a Public Node",permalink:"/polkadotjs_apps_public"}},i={},s=[{value:"Accessing your local node using Polkadot/apps",id:"accessing-your-local-node-using-polkadotapps",level:3}],u={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use the Polkadot/apps to connect to your local HydraDX node. For this purpose, you need to have access to port ",(0,r.kt)("inlineCode",{parentName:"p"},"9944")," which is used for RPC websocket connections."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you are running the node as a validator, we highly recommend that you blacklist port ",(0,r.kt)("inlineCode",{parentName:"p"},"9944")," for remote connections. This port could be abused by third parties to degrade the performance of your node, which may result in slashing and involuntary loss of funds. You should use port ",(0,r.kt)("inlineCode",{parentName:"p"},"9944")," to connect to your validator node only when the node is in your local network.")),(0,r.kt)("h3",{id:"accessing-your-local-node-using-polkadotapps"},"Accessing your local node using Polkadot/apps"),(0,r.kt)("p",null,"To access your node, open ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot/apps")," and click in the upper left corner to change the network."),(0,r.kt)("div",null,(0,r.kt)("img",{src:(0,a.Z)("/polkadotjs-apps/PolkadotJS-APPS-1.png")})),(0,r.kt)("p",null,"After opening the menu, click on ",(0,r.kt)("strong",{parentName:"p"},"Development")," and select ",(0,r.kt)("strong",{parentName:"p"},"Local node"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:(0,a.Z)("/polkadotjs-apps/local-1.png")})),(0,r.kt)("p",null,"Adjust the IP if necessary and click on ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Switch"))," to switch to your local node."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:(0,a.Z)("/polkadotjs-apps/local-2.png")})),(0,r.kt)("p",null,"Now you should be connected to your local node and be able to interact with it."))}d.isMDXComponent=!0}}]);