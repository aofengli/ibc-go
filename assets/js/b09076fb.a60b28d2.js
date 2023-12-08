"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4582],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},40578:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Parameters",sidebar_label:"Parameters",sidebar_position:6,slug:"/apps/interchain-accounts/parameters"},o="Parameters",i={unversionedId:"apps/interchain-accounts/parameters",id:"version-v8.0.x/apps/interchain-accounts/parameters",title:"Parameters",description:"The Interchain Accounts module contains the following on-chain parameters, logically separated for each distinct submodule:",source:"@site/versioned_docs/version-v8.0.x/02-apps/02-interchain-accounts/06-parameters.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/parameters",permalink:"/v8/apps/interchain-accounts/parameters",draft:!1,tags:[],version:"v8.0.x",sidebarPosition:6,frontMatter:{title:"Parameters",sidebar_label:"Parameters",sidebar_position:6,slug:"/apps/interchain-accounts/parameters"},sidebar:"defaultSidebar",previous:{title:"Messages",permalink:"/v8/apps/interchain-accounts/messages"},next:{title:"Transaction Encoding",permalink:"/v8/apps/interchain-accounts/tx-encoding"}},s={},p=[{value:"Controller Submodule Parameters",id:"controller-submodule-parameters",level:2},{value:"ControllerEnabled",id:"controllerenabled",level:3},{value:"Host Submodule Parameters",id:"host-submodule-parameters",level:2},{value:"HostEnabled",id:"hostenabled",level:3},{value:"AllowMessages",id:"allowmessages",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"The Interchain Accounts module contains the following on-chain parameters, logically separated for each distinct submodule:"),(0,r.kt)("h2",{id:"controller-submodule-parameters"},"Controller Submodule Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ControllerEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"controllerenabled"},"ControllerEnabled"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ControllerEnabled")," parameter controls a chains ability to service ICS-27 controller specific logic. This includes the sending of Interchain Accounts packet data as well as the following ICS-26 callback handlers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnChanOpenInit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnChanOpenAck")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnChanCloseConfirm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnAcknowledgementPacket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnTimeoutPacket"))),(0,r.kt)("h2",{id:"host-submodule-parameters"},"Host Submodule Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"HostEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AllowMessages")),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["*"]'))))),(0,r.kt)("h3",{id:"hostenabled"},"HostEnabled"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"HostEnabled")," parameter controls a chains ability to service ICS-27 host specific logic. This includes the following ICS-26 callback handlers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnChanOpenTry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnChanOpenConfirm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnChanCloseConfirm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnRecvPacket"))),(0,r.kt)("h3",{id:"allowmessages"},"AllowMessages"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AllowMessages")," parameter provides the ability for a chain to limit the types of messages or transactions that hosted interchain accounts are authorized to execute by defining an allowlist using the Protobuf message type URL format."),(0,r.kt)("p",null,"For example, a Cosmos SDK-based chain that elects to provide hosted Interchain Accounts with the ability of governance voting and staking delegations will define its parameters as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"params": {\n  "host_enabled": true,\n  "allow_messages": ["/cosmos.staking.v1beta1.MsgDelegate", "/cosmos.gov.v1beta1.MsgVote"]\n}\n')),(0,r.kt)("p",null,"There is also a special wildcard ",(0,r.kt)("inlineCode",{parentName:"p"},'"*"')," value which allows any type of message to be executed by the interchain account. This must be the only value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_messages")," array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"params": {\n  "host_enabled": true,\n  "allow_messages": ["*"]\n}\n')))}u.isMDXComponent=!0}}]);