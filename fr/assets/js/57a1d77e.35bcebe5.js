"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[1467],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[p]="string"==typeof e?e:o,s[1]=u;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7138:function(e,t,r){r.r(t),r.d(t,{assets:function(){return a},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(3117),o=(r(7294),r(3905));r(4996);const i={id:"intro",title:"Commencer",slug:"/"},s=void 0,u={unversionedId:"intro",id:"intro",title:"Commencer",description:"Bienvenue sur les documentations officielles HydraDX ! Ici vous pouvez trouver toutes les ressources utiles sur le protocole HydraDX. Notre intention est d'en faire un endroit incontournable pour tous, couvrant le spectre complet, des visiteurs occasionnels, en passant pas les validateurs, les nominateurs, jusqu'aux d\xe9veloppeurs qui veulent aider \xe0 construire HydraDX.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/fr/",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/intro.md",tags:[],version:"current",frontMatter:{id:"intro",title:"Commencer",slug:"/"},sidebar:"sidebar",next:{title:"Efficient Trading",permalink:"/fr/omnipool_trading"}},a={},c=[{value:"Qu&#39;est-ce que HydraDX?",id:"what-is-hydradx",level:2}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Bienvenue sur les documentations officielles HydraDX ! Ici vous pouvez trouver toutes les ressources utiles sur le protocole HydraDX. Notre intention est d'en faire un endroit incontournable pour tous, couvrant le spectre complet, des visiteurs occasionnels, en passant pas les validateurs, les nominateurs, jusqu'aux d\xe9veloppeurs qui veulent aider \xe0 construire HydraDX. "),(0,o.kt)("p",null,"HydraDX est conduit par sa communaut\xe9, ainsi que les sont ces documentations. Nous sommes heureux de voir vos contributions, qui peuvent prendre plusieurs formes - par exemple, vous pourriez \xe9crire un nouvel article ou en traduire un existant. Regardez notre ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-docs"},"d\xe9p\xf4t GitHub")," ainsi que certaines ",(0,o.kt)("a",{parentName:"p",href:"/contributing"},"lignes directrices de contribution"),"."),(0,o.kt)("h2",{id:"what-is-hydradx"},"Qu'est-ce que HydraDX?"),(0,o.kt)("p",null,"HydraDX est un protocole de liquidit\xe9 inter-cha\xeenes construit sur la technologie Substrate. Notre mission est de permettre les liquidit\xe9s fluides (\"frictionless\" en anglais) pour tous les actifs crypto en construisant la premi\xe8re r\xe9serve de liquidit\xe9 (liquidity pool) multi-actifs de son genre  - L'Omnipool HydraDX (ou Omnir\xe9serve). Dans l'Omnipool,\ndiff\xe9rents actifs sont \xe9valu\xe9s les uns par rapport aux autres en utilisant nos token HDX natifs comme un interm\xe9diaire pour d\xe9terminer leur valeur relative. Avec l'Omnipool, HydraDX rompt avec la conception traditionnelle selon laquelle les actifs sont n\xe9goci\xe9s par paires en utilisant des r\xe9serves (pools) isol\xe9es. En outre, nous sommes heureux de faire partie de l'\xe9cosyst\xe8me Polkadot et nous esp\xe9rons devenir le fournisseur de liquidit\xe9s principal pour tous les actifs construits sur Substrate."))}p.isMDXComponent=!0}}]);