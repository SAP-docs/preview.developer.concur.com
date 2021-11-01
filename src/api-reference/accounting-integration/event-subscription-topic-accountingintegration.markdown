---
title: Concur Accounting Integration Events
layout: reference
---

{% include prerelease.html %}

## <a name="overview"></a>Overview

The Accounting Integration API provides clients and authorized partners access to the configuration settings and the mappings between SAP Concur and ERP data through the events on the topic `public.concur.spend.accountingintegration`. To subscribe to these events follow the steps described on the [Event Subscription Service v4](https://developer.concur.com/api-reference/ess/v4.event-subscription.html) page.

> **Limitation**: This event subscription is only available to partners who have been granted access to Accounting Integration API.

## <a name="scope-usage"></a>Scope Usage

Name|Description
---|---
`spend.accountingintegration.read`|Accounting Integration API related events

## <a name="events"></a>Events

Name|Condition|User Case
---|---|---
`listMapping.created`|This event will be published after the customer has mapped the Concur list with the ERP list name.|The subscriber may send over the list items to SAP Concur.
`listMapping.deleted`|This event will be published after the customer has removed the mapping between the Concur list and the ERP list name.|The subscriber may remove the list items from SAP Concur.
`data.resetRequested`|This event will be published when the customer has requested to reset the ERP data cached in SAP Concur data center.|The subscriber may reset the ERP data cached in SAP Concur.
`data.statusUpdated`|This event will be published after the completion of the processing of the ERP data.|The subscriber may query for the status details.

## <a name="schema"></a>Schema

### <a name="listMappingCreated"></a>Schema for Event `listMapping.created` and `listMapping.deleted`

Name|Type|Format|Description
---|---|---|---
`data`|`array`|[`ListMapping`](./v4.accountingintegration-schema.markdown#list-mapping)|List of ERP list to Concur list mappings

### <a name="resetRequested"></a>Schema for Event `data.resetRequested`

Name|Type|Format|Description
---|---|---|---
`data`|`array`|[`ObjectType`](./v4.accountingintegration-schema.markdown#object-type)|Accounting object type

### <a name="statusUpdated"></a>Schema for Event `data.statusUpdated`

Name|Type|Format|Description
---|---|---|---
`data`|[`RequestStatus`](./v4.accountingintegration-schema.markdown#request-status)|-|Details of the request status
