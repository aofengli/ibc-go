"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4868],{88575:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"v4.5.x","label":"v4.5.x","banner":null,"badge":true,"noIndex":false,"className":"docs-version-v4.5.x","isLast":false,"docsSidebars":{},"docs":{"apps/interchain-accounts/active-channels":{"id":"apps/interchain-accounts/active-channels","title":"Active Channels","description":"The Interchain Accounts module uses ORDERED channels to maintain the order of transactions when sending packets from a controller to a host chain. A limitation when using ORDERED channels is that when a packet times out the channel will be closed."},"apps/interchain-accounts/auth-modules":{"id":"apps/interchain-accounts/auth-modules","title":"Authentication Modules","description":"Authentication modules play the role of the Base Application as described in ICS30 IBC Middleware, and enable application developers to perform custom logic when working with the Interchain Accounts controller API."},"apps/interchain-accounts/integration":{"id":"apps/interchain-accounts/integration","title":"Integration","description":"Learn how to integrate Interchain Accounts host and controller functionality to your chain. The following document only applies for Cosmos SDK chains."},"apps/interchain-accounts/overview":{"id":"apps/interchain-accounts/overview","title":"Overview","description":"Learn about what the Interchain Accounts module is, and how to build custom modules that utilize Interchain Accounts functionality"},"apps/interchain-accounts/parameters":{"id":"apps/interchain-accounts/parameters","title":"Parameters","description":"The Interchain Accounts module contains the following on-chain parameters, logically separated for each distinct submodule:"},"apps/interchain-accounts/transactions":{"id":"apps/interchain-accounts/transactions","title":"Transactions","description":"Learn about Interchain Accounts transaction execution"},"apps/transfer/events":{"id":"apps/transfer/events","title":"Events","description":"MsgTransfer"},"apps/transfer/messages":{"id":"apps/transfer/messages","title":"Messages","description":"MsgTransfer"},"apps/transfer/metrics":{"id":"apps/transfer/metrics","title":"Metrics","description":"The IBC transfer application module exposes the following set of metrics."},"apps/transfer/overview":{"id":"apps/transfer/overview","title":"Overview","description":"Learn about what the token Transfer module is"},"apps/transfer/params":{"id":"apps/transfer/params","title":"Params","description":"The IBC transfer application module contains the following parameters:"},"apps/transfer/state":{"id":"apps/transfer/state","title":"State","description":"The IBC transfer application module keeps state of the port to which the module is binded and the denomination trace information as outlined in ADR 001."},"apps/transfer/state-transitions":{"id":"apps/transfer/state-transitions","title":"State Transitions","description":"Send fungible tokens"},"ibc/apps/apps":{"id":"ibc/apps/apps","title":"IBC Applications","description":"Learn how to build custom IBC application modules that enable packets to be sent to and received from other IBC-enabled chains."},"ibc/apps/bindports":{"id":"ibc/apps/bindports","title":"Bind ports","description":"Learn what changes to make to bind modules to their ports on initialization."},"ibc/apps/ibcmodule":{"id":"ibc/apps/ibcmodule","title":"Implement `IBCModule` interface and callbacks","description":"Learn how to implement the IBCModule interface and all of the callbacks it requires."},"ibc/apps/keeper":{"id":"ibc/apps/keeper","title":"Keeper","description":"Learn how to implement the IBC Module keeper."},"ibc/apps/packets_acks":{"id":"ibc/apps/packets_acks","title":"Define packets and acks","description":"Learn how to define custom packet and acknowledgement structs and how to encode and decode them."},"ibc/apps/routing":{"id":"ibc/apps/routing","title":"Routing","description":"Pre-requisite readings"},"ibc/integration":{"id":"ibc/integration","title":"Integration","description":"Learn how to integrate IBC to your application and send data packets to other chains."},"ibc/middleware/develop":{"id":"ibc/middleware/develop","title":"IBC middleware","description":"Learn how to write your own custom middleware to wrap an IBC application, and understand how to hook different middleware to IBC base applications to form different IBC application stacks"},"ibc/middleware/integration":{"id":"ibc/middleware/integration","title":"Integrating IBC middleware into a chain","description":"Learn how to integrate IBC middleware(s) with a base application to your chain. The following document only applies for Cosmos SDK chains."},"ibc/overview":{"id":"ibc/overview","title":"Overview","description":"Learn about IBC, its components, and IBC use cases."},"ibc/proposals":{"id":"ibc/proposals","title":"Governance Proposals","description":"In uncommon situations, a highly valued client may become frozen due to uncontrollable"},"ibc/proto-docs":{"id":"ibc/proto-docs","title":"Protobuf Documentation","description":"See ibc-go v4.4.x Buf Protobuf documentation."},"ibc/relayer":{"id":"ibc/relayer","title":"Relayer","description":"Pre-requisite readings"},"ibc/roadmap":{"id":"ibc/roadmap","title":"Roadmap","description":"Lastest update: March 31, 2022"},"ibc/upgrades/developer-guide":{"id":"ibc/upgrades/developer-guide","title":"IBC Client Developer Guide to Upgrades","description":"Learn how to implement upgrade functionality for your custom IBC client."},"ibc/upgrades/genesis-restart":{"id":"ibc/upgrades/genesis-restart","title":"Genesis Restart Upgrades","description":"Learn how to upgrade your chain and counterparty clients using genesis restarts."},"ibc/upgrades/intro":{"id":"ibc/upgrades/intro","title":"Upgrading IBC Chains Overview","description":"Upgrading IBC Chains Overview"},"ibc/upgrades/quick-guide":{"id":"ibc/upgrades/quick-guide","title":"How to Upgrade IBC Chains and their Clients","description":"Learn how to upgrade your chain and counterparty clients."},"intro":{"id":"intro","title":"intro","description":"This version of ibc-go is not supported anymore. Please upgrade to the latest version."},"middleware/ics29-fee/end-users":{"id":"middleware/ics29-fee/end-users","title":"End Users","description":"Learn how to incentivize IBC packets using the ICS29 Fee Middleware module."},"middleware/ics29-fee/events":{"id":"middleware/ics29-fee/events","title":"Events","description":"An overview of all events related to ICS-29"},"middleware/ics29-fee/fee-distribution":{"id":"middleware/ics29-fee/fee-distribution","title":"Fee Distribution","description":"Learn about payee registration for the distribution of packet fees. The following document is intended for relayer operators."},"middleware/ics29-fee/integration":{"id":"middleware/ics29-fee/integration","title":"Integration","description":"Learn how to configure the Fee Middleware module with IBC applications. The following document is intended for developers building on top of the Cosmos SDK and only applies for Cosmos SDK chains."},"middleware/ics29-fee/msgs":{"id":"middleware/ics29-fee/msgs","title":"Fee Messages","description":"Learn about the different ways to pay for fees, how the fees are paid out and what happens when not enough escrowed fees are available for payout"},"middleware/ics29-fee/overview":{"id":"middleware/ics29-fee/overview","title":"Overview","description":"Learn about what the Fee Middleware module is, and how to build custom modules that utilize the Fee Middleware functionality"},"migrations/sdk-to-v1":{"id":"migrations/sdk-to-v1","title":"SDK v0.43 to IBC-Go v1","description":"This file contains information on how to migrate from the IBC module contained in the SDK 0.41.x and 0.42.x lines to the IBC module in the ibc-go repository based on the 0.44 SDK version."},"migrations/support-denoms-with-slashes":{"id":"migrations/support-denoms-with-slashes","title":"Support transfer of coins whose base denom contains slashes","description":"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG."},"migrations/v1-to-v2":{"id":"migrations/v1-to-v2","title":"IBC-Go v1 to v2","description":"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG."},"migrations/v2-to-v3":{"id":"migrations/v2-to-v3","title":"IBC-Go v2 to v3","description":"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG."},"migrations/v3-to-v4":{"id":"migrations/v3-to-v4","title":"IBC-Go v3 to v4","description":"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG."}}}')}}]);