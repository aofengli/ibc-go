"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=l(n),h=i,u=c["".concat(p,".").concat(h)]||c[h]||d[h]||s;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=h;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:i,o[1]=r;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const s={title:"Integration",sidebar_label:"Integration",sidebar_position:3,slug:"/ibc/light-clients/wasm/integration"},o="Integration",r={unversionedId:"light-clients/wasm/integration",id:"light-clients/wasm/integration",title:"Integration",description:"Learn how to integrate the 08-wasm module in a chain binary and about the recommended approaches depending on whether the x/wasm module is already used in the chain. The following document only applies for Cosmos SDK chains.",source:"@site/docs/03-light-clients/04-wasm/03-integration.md",sourceDirName:"03-light-clients/04-wasm",slug:"/ibc/light-clients/wasm/integration",permalink:"/main/ibc/light-clients/wasm/integration",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:3,slug:"/ibc/light-clients/wasm/integration"},sidebar:"defaultSidebar",previous:{title:"Concepts",permalink:"/main/ibc/light-clients/wasm/concepts"},next:{title:"Messages",permalink:"/main/ibc/light-clients/wasm/messages"}},p={},l=[{value:"<code>app.go</code> setup",id:"appgo-setup",level:2},{value:"Keeper instantiation",id:"keeper-instantiation",level:2},{value:"If <code>x/wasm</code> is present",id:"if-xwasm-is-present",level:3},{value:"If <code>x/wasm</code> is not present",id:"if-xwasm-is-not-present",level:3},{value:"Updating <code>AllowedClients</code>",id:"updating-allowedclients",level:2},{value:"Adding snapshot support",id:"adding-snapshot-support",level:2},{value:"Pin byte codes at start",id:"pin-byte-codes-at-start",level:2}],m={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integration"},"Integration"),(0,i.kt)("p",null,"Learn how to integrate the ",(0,i.kt)("inlineCode",{parentName:"p"},"08-wasm")," module in a chain binary and about the recommended approaches depending on whether the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/tree/main/x/wasm"},(0,i.kt)("inlineCode",{parentName:"a"},"x/wasm")," module")," is already used in the chain. The following document only applies for Cosmos SDK chains. {synopsis}"),(0,i.kt)("h2",{id:"appgo-setup"},(0,i.kt)("inlineCode",{parentName:"h2"},"app.go")," setup"),(0,i.kt)("p",null,"The sample code below shows the relevant integration points in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.go")," required to setup the ",(0,i.kt)("inlineCode",{parentName:"p"},"08-wasm")," module in a chain binary. Since ",(0,i.kt)("inlineCode",{parentName:"p"},"08-wasm")," is a light client module itself, please check out as well the section ",(0,i.kt)("a",{parentName:"p",href:"/main/ibc/integration#integrating-light-clients"},"Integrating light clients")," for more information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// app.go\nimport (\n  ...\n  "github.com/cosmos/cosmos-sdk/runtime"\n  \n  cmtos "github.com/cometbft/cometbft/libs/os"\n\n  wasm "github.com/cosmos/ibc-go/modules/light-clients/08-wasm"\n  wasmkeeper "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/keeper"\n  wasmtypes "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"\n  ...\n)\n\n...\n\n// Register the AppModule for the 08-wasm module\nModuleBasics = module.NewBasicManager(\n  ...\n  wasm.AppModuleBasic{},\n  ...\n)\n\n// Add 08-wasm Keeper\ntype SimApp struct {\n  ...\n  WasmClientKeeper wasmkeeper.Keeper\n  ...\n}\n\nfunc NewSimApp(\n  logger log.Logger,\n  db dbm.DB,\n  traceStore io.Writer,\n  loadLatest bool,\n  appOpts servertypes.AppOptions,\n  baseAppOptions ...func(*baseapp.BaseApp),\n) *SimApp {\n  ...\n  keys := sdk.NewKVStoreKeys(\n    ...\n    wasmtypes.StoreKey,\n  ) \n\n  // Instantiate 08-wasm\'s keeper\n  // This sample code uses a constructor function that\n  // accepts a pointer to an existing instance of Wasm VM.\n  // This is the recommended approach when the chain\n  // also uses `x/wasm`, and then the Wasm VM instance\n  // can be shared.\n  // This sample code uses also an implementation of the \n  // wasmvm.Querier interface (querier). If nil is passed\n  // instead, then a default querier will be used that\n  // returns an error for all query types.\n  // See the section below for more information.\n  app.WasmClientKeeper = wasmkeeper.NewKeeperWithVM(\n    appCodec,\n    runtime.NewKVStoreService(keys[wasmtypes.StoreKey]),\n    app.IBCKeeper.ClientKeeper,\n    authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n    wasmVM,\n    querier,\n  )  \n  app.ModuleManager = module.NewManager(\n    // SDK app modules\n    ...\n    wasm.NewAppModule(app.WasmClientKeeper),\n  ) \n  app.ModuleManager.SetOrderBeginBlockers(\n    ...\n    wasmtypes.ModuleName,\n    ...\n  ) \n  app.ModuleManager.SetOrderEndBlockers(\n    ...\n    wasmtypes.ModuleName,\n    ...\n  ) \n  genesisModuleOrder := []string{\n    ...\n    wasmtypes.ModuleName,\n    ...\n  }\n  app.ModuleManager.SetOrderInitGenesis(genesisModuleOrder...)\n  app.ModuleManager.SetOrderExportGenesis(genesisModuleOrder...)\n  ...\n\n    // initialize BaseApp\n  app.SetInitChainer(app.InitChainer)\n  ...\n\n  // must be before Loading version\n  if manager := app.SnapshotManager(); manager != nil {\n    err := manager.RegisterExtensions(\n      wasmkeeper.NewWasmSnapshotter(app.CommitMultiStore(), &app.WasmClientKeeper),\n    )\n    if err != nil {\n      panic(fmt.Errorf("failed to register snapshot extension: %s", err))\n    }\n  }\n  ...\n\n  if loadLatest {\n    ...\n\n    ctx := app.BaseApp.NewUncachedContext(true, cmtproto.Header{})\n\n    // Initialize pinned codes in wasmvm as they are not persisted there\n    if err := wasmkeeper.InitializePinnedCodes(ctx); err != nil {\n      cmtos.Exit(fmt.Sprintf("failed initialize pinned codes %s", err))\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"keeper-instantiation"},"Keeper instantiation"),(0,i.kt)("p",null,"When it comes to instantiating ",(0,i.kt)("inlineCode",{parentName:"p"},"08-wasm"),"'s keeper there are two recommended ways of doing it. Choosing one or the other will depend on whether the chain already integrates ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/tree/main/x/wasm"},(0,i.kt)("inlineCode",{parentName:"a"},"x/wasm"))," or not. Both available constructor functions accept a querier parameter that should implement the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmvm/blob/v1.5.0/types/queries.go#L37"},(0,i.kt)("inlineCode",{parentName:"a"},"Querier")," interface of ",(0,i.kt)("inlineCode",{parentName:"a"},"wasmvm")),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," is provided, then a default querier implementation is used that returns error for any query type."),(0,i.kt)("h3",{id:"if-xwasm-is-present"},"If ",(0,i.kt)("inlineCode",{parentName:"h3"},"x/wasm")," is present"),(0,i.kt)("p",null,"If the chain where the module is integrated uses ",(0,i.kt)("inlineCode",{parentName:"p"},"x/wasm")," then we recommend that both ",(0,i.kt)("inlineCode",{parentName:"p"},"08-wasm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"x/wasm")," share the same Wasm VM instance. Having two separate Wasm VM instances is still possible, but care should be taken to make sure that both instances do not share the directory when the VM stores blobs and various caches, otherwise unexpected behaviour is likely to happen."),(0,i.kt)("p",null,"In order to share the Wasm VM instance please follow the guideline below. Please note that this requires ",(0,i.kt)("inlineCode",{parentName:"p"},"x/wasm"),"v0.41 or above."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Instantiate the Wasm VM in ",(0,i.kt)("inlineCode",{parentName:"li"},"app.go")," with the parameters of your choice."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd/blob/db93d7b6c7bb6f4a340d74b96a02cec885729b59/x/wasm/keeper/options.go#L21-L25"},"Create an ",(0,i.kt)("inlineCode",{parentName:"a"},"Option")," with this Wasm VM instance"),"."),(0,i.kt)("li",{parentName:"ul"},"Add the option created in the previous step to a slice and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd/blob/db93d7b6c7bb6f4a340d74b96a02cec885729b59/x/wasm/keeper/keeper_cgo.go#L36"},"pass it to the ",(0,i.kt)("inlineCode",{parentName:"a"},"x/wasm NewKeeper")," constructor function"),"."),(0,i.kt)("li",{parentName:"ul"},"Pass the pointer to the Wasm VM instance to ",(0,i.kt)("inlineCode",{parentName:"li"},"08-wasm")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/c95c22f45cb217d27aca2665af9ac60b0d2f3a0c/modules/light-clients/08-wasm/keeper/keeper.go#L33-L38"},"NewKeeperWithVM constructor function"),".")),(0,i.kt)("p",null,"The code to set this up would look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// app.go\nimport (\n  ...\n  "github.com/cosmos/cosmos-sdk/runtime"\n  \n  wasmvm "github.com/CosmWasm/wasmvm"\n  wasmkeeper "github.com/CosmWasm/wasmd/x/wasm/keeper"\n  ...\n)\n\n...\n\n// instantiate the Wasm VM with the chosen parameters\nwasmer, err := wasmvm.NewVM(\n  dataDir, \n  availableCapabilities, \n  contractMemoryLimit,\n  contractDebugMode, \n  memoryCacheSize,\n)\nif err != nil {\n  panic(err)\n}\n\n// create an Option slice (or append to an existing one)\n// with the option to use a custom Wasm VM instance\nwasmOpts = []wasmkeeper.Option{\n  wasmkeeper.WithWasmEngine(wasmer),\n}\n\n// the keeper will use the provided Wasm VM instance,\n// instead of instantiating a new one\napp.WasmKeeper = wasmkeeper.NewKeeper(\n  appCodec,\n  keys[wasmtypes.StoreKey],\n  app.AccountKeeper,\n  app.BankKeeper,\n  app.StakingKeeper,\n  distrkeeper.NewQuerier(app.DistrKeeper),\n  app.IBCFeeKeeper, // ISC4 Wrapper: fee IBC middleware\n  app.IBCKeeper.ChannelKeeper,\n  &app.IBCKeeper.PortKeeper,\n  scopedWasmKeeper,\n  app.TransferKeeper,\n  app.MsgServiceRouter(),\n  app.GRPCQueryRouter(),\n  wasmDir,\n  wasmConfig,\n  availableCapabilities,\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n  wasmOpts...,\n)\n\n// This sample code uses also an implementation of the \n// wasmvm.Querier interface (querier). If nil is passed\n// instead, then a default querier will be used that\n// returns an error for all query types.\napp.WasmClientKeeper = wasmkeeper.NewKeeperWithVM(\n  appCodec,\n  runtime.NewKVStoreService(keys[wasmtypes.StoreKey]),\n  app.IBCKeeper.ClientKeeper,\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n  wasmer, // pass the Wasm VM instance to `08-wasm` keeper constructor\n  querier,\n)\n...\n')),(0,i.kt)("h3",{id:"if-xwasm-is-not-present"},"If ",(0,i.kt)("inlineCode",{parentName:"h3"},"x/wasm")," is not present"),(0,i.kt)("p",null,"If the chain does not use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/tree/main/x/wasm"},(0,i.kt)("inlineCode",{parentName:"a"},"x/wasm")),", even though it is still possible to use the method above from the previous section\n(e.g. instantiating a Wasm VM in app.go an pass it to 08-wasm's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/c95c22f45cb217d27aca2665af9ac60b0d2f3a0c/modules/light-clients/08-wasm/keeper/keeper.go#L33-L38"},(0,i.kt)("inlineCode",{parentName:"a"},"NewKeeperWithVM")," constructor function"),", since there would be no need in this case to share the Wasm VM instance with another module, you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/c95c22f45cb217d27aca2665af9ac60b0d2f3a0c/modules/light-clients/08-wasm/keeper/keeper.go#L52-L57"},"`NewKeeperWithConfig`` constructor function")," and provide the Wasm VM configuration parameters of your choice instead. A Wasm VM instance will be created in",(0,i.kt)("inlineCode",{parentName:"p"},"NewKeeperWithConfig"),". The parameters that can set are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DataDir")," is the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmvm/blob/1638725b25d799f078d053391945399cb35664b1/lib.go#L25"},"directory for Wasm blobs and various caches"),". In ",(0,i.kt)("inlineCode",{parentName:"li"},"wasmd")," this is set to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd/blob/36416def20effe47fb77f29f5ba35a003970fdba/app/app.go#L578"},(0,i.kt)("inlineCode",{parentName:"a"},"wasm")," folder under the home directory"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SupportedCapabilities")," is a comma separated ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmvm/blob/1638725b25d799f078d053391945399cb35664b1/lib.go#L26"},"list of capabilities supported by the chain"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd/blob/36416def20effe47fb77f29f5ba35a003970fdba/app/app.go#L586"},(0,i.kt)("inlineCode",{parentName:"a"},"wasmd")," sets this to all the available capabilities"),", but 08-wasm only requires ",(0,i.kt)("inlineCode",{parentName:"li"},"iterator"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MemoryCacheSize")," sets ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmvm/blob/1638725b25d799f078d053391945399cb35664b1/lib.go#L29C16-L29C104"},"the size in MiB of an in-memory cache for e.g. module caching"),". It is not consensus-critical and should be defined on a per-node basis, often in the range 100 to 1000 MB. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd/blob/36416def20effe47fb77f29f5ba35a003970fdba/app/app.go#L579"},(0,i.kt)("inlineCode",{parentName:"a"},"wasmd")," reads this value of"),". Default value is 256."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ContractDebugMode")," is a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmvm/blob/1638725b25d799f078d053391945399cb35664b1/lib.go#L28"},"flag to enable/disable printing debug logs from the contract to STDOUT"),". This should be false in production environments. Default value is false.")),(0,i.kt)("p",null,"Another configuration parameter of the Wasm VM is the contract memory limit (in MiB), which is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/c95c22f45cb217d27aca2665af9ac60b0d2f3a0c/modules/light-clients/08-wasm/types/config.go#L5"},"set to 32"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/36416def20effe47fb77f29f5ba35a003970fdba/x/wasm/keeper/keeper.go#L32-L34"},"following the example of ",(0,i.kt)("inlineCode",{parentName:"a"},"wasmd")),". This parameter is not configurable by users of ",(0,i.kt)("inlineCode",{parentName:"p"},"08-wasm"),"."),(0,i.kt)("p",null,"The following sample code shows how the keeper would be constructed using this method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// app.go\nimport (\n  ...\n  "github.com/cosmos/cosmos-sdk/runtime"\n\n  wasmkeeper "github.com/CosmWasm/wasmd/x/wasm/keeper"\n  wasmtypes "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"\n  ...\n)\n...\nwasmConfig := wasmtypes.WasmConfig{\n  DataDir:               "ibc_08-wasm_client_data",\n  SupportedCapabilities: "iterator",\n  ContractDebugMode:     false,\n}\napp.WasmClientKeeper = wasmkeeper.NewKeeperWithConfig(\n  appCodec,\n  runtime.NewKVStoreService(keys[wasmtypes.StoreKey]),\n  app.IBCKeeper.ClientKeeper, \n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n  wasmConfig,\n  querier\n)\n')),(0,i.kt)("p",null,"Check out also the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/c95c22f45cb217d27aca2665af9ac60b0d2f3a0c/modules/light-clients/08-wasm/types/config.go#L7-L20"},(0,i.kt)("inlineCode",{parentName:"a"},"WasmConfig")," type definition")," for more information on each of the configurable parameters. Some parameters allow node-level configurations. There is additionally the function ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/6d8cee53a72524b7cf396d65f6c19fed45803321/modules/light-clients/08-wasm/types/config.go#L30"},(0,i.kt)("inlineCode",{parentName:"a"},"DefaultWasmConfig"))," available that returns a configuration with the default values."),(0,i.kt)("h2",{id:"updating-allowedclients"},"Updating ",(0,i.kt)("inlineCode",{parentName:"h2"},"AllowedClients")),(0,i.kt)("p",null,"In order to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"08-wasm")," module chains must update the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/proto/ibc/core/client/v1/client.proto#L103"},(0,i.kt)("inlineCode",{parentName:"a"},"AllowedClients")," parameter in the 02-client submodule")," of core IBC. This can be configured directly in the application upgrade handler with the sample code below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"params := clientKeeper.GetParams(ctx)\nparams.AllowedClients = append(params.AllowedClients, exported.Wasm)\nclientKeeper.SetParams(ctx, params)\n")),(0,i.kt)("p",null,"Or alternatively the parameter can be updated via a governance proposal (see at the bottom of section ",(0,i.kt)("a",{parentName:"p",href:"/main/ibc/light-clients/setup#creating-clients"},(0,i.kt)("inlineCode",{parentName:"a"},"Creating clients"))," for an example of how to do this)."),(0,i.kt)("h2",{id:"adding-snapshot-support"},"Adding snapshot support"),(0,i.kt)("p",null,"In order to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"08-wasm")," module chains are required to register the ",(0,i.kt)("inlineCode",{parentName:"p"},"WasmSnapshotter")," extension in the snapshot manager. This snapshotter takes care of persisting the external state, in the form of contract code, of the Wasm VM instance to disk when the chain is snapshotted. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/2bd29c08fd1fe50b461fc33a25735aa792dc896e/modules/light-clients/08-wasm/testing/simapp/app.go#L768-L776"},"This code")," should be placed in ",(0,i.kt)("inlineCode",{parentName:"p"},"NewSimApp")," function in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.go"),":"),(0,i.kt)("h2",{id:"pin-byte-codes-at-start"},"Pin byte codes at start"),(0,i.kt)("p",null,"Wasm byte codes should be pinned to the WasmVM cache on every application start, therefore ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/0ed221f687ffce75984bc57402fd678e07aa6cc5/modules/light-clients/08-wasm/testing/simapp/app.go#L821-L826"},"this code")," should be placed in ",(0,i.kt)("inlineCode",{parentName:"p"},"NewSimApp")," function in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.go"),"."))}d.isMDXComponent=!0}}]);