"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||h[u]||r;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const r={title:"Solomachine",sidebar_label:"Solomachine",sidebar_position:1,slug:"/ibc/light-clients/solomachine/solomachine"},a="solomachine",l={unversionedId:"light-clients/solomachine/solomachine",id:"version-v8.0.x/light-clients/solomachine/solomachine",title:"Solomachine",description:"Abstract",source:"@site/versioned_docs/version-v8.0.x/03-light-clients/03-solomachine/01-solomachine.md",sourceDirName:"03-light-clients/03-solomachine",slug:"/ibc/light-clients/solomachine/solomachine",permalink:"/v8/ibc/light-clients/solomachine/solomachine",draft:!1,tags:[],version:"v8.0.x",sidebarPosition:1,frontMatter:{title:"Solomachine",sidebar_label:"Solomachine",sidebar_position:1,slug:"/ibc/light-clients/solomachine/solomachine"},sidebar:"defaultSidebar",previous:{title:"State Verification",permalink:"/v8/ibc/light-clients/localhost/state-verification"},next:{title:"Concepts",permalink:"/v8/ibc/light-clients/solomachine/concepts"}},c={},s=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2}],p={toc:s},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"solomachine"},(0,o.kt)("inlineCode",{parentName:"h1"},"solomachine")),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"This paper defines the implementation of the ICS06 protocol on the Cosmos SDK. For the general\nspecification please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/client/ics-006-solo-machine-client"},"ICS06 Specification"),"."),(0,o.kt)("p",null,"This implementation of a solo machine light client supports single and multi-signature public\nkeys. The client is capable of handling public key updates by header and governance proposals.\nThe light client is capable of processing client misbehaviour. Proofs of the counterparty state\nare generated by the solo machine client by signing over the desired state with a certain sequence,\ndiversifier, and timestamp."),(0,o.kt)("h2",{id:"contents"},"Contents"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/v8/ibc/light-clients/solomachine/concepts"},"Concepts"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/v8/ibc/light-clients/solomachine/state"},"State"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/v8/ibc/light-clients/solomachine/state_transitions"},"State Transitions")))))}h.isMDXComponent=!0}}]);