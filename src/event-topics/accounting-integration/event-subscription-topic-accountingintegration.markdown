---
title: SAP Concur Accounting Integration Events
layout: reference
---
# Accounting Integration Event

{% include prerelease.html %}

## <a name="overview"></a>Overview

The Accounting Integration API provides clients and authorized partners access to the configuration settings and the
mappings between SAP Concur data and ERP data through the events on the
topic `public.concur.spend.accountingintegration`. To subscribe to these events follow the steps described on
the [Event Subscription Service v4](https://developer.concur.com/api-reference/ess/v4.event-subscription.html) page.

> **Limitation**: This event subscription is only available to partners who have been granted access to Accounting Integration API.

## <a name="scope-usage"></a>Scope Usage

|Name|Description|
|---|---|
|`spend.accountingintegration.read`|Accounting Integration API related events|

## <a name="events"></a>Events

|Event Type|Event Purpose |Recommended Partner Action|
|---|---|---|
| `data.statusUpdated`  | Notify the subscribers that the processing of the data they sent via the PATCH action of the [Accounts](/api-reference/accounting-integration/v4.accountingintegration-account.html), [List Names](/api-reference/accounting-integration/v4.accountingintegration-list.html) and [Vendors](/api-reference/accounting-integration/v4.accountingintegration-vendor.html) APIs has been completed. Separate notification is sent for each PATCH request that the partner performs.                                                                                                                                                                                                                                                                                                                                                                                                                        | The `data.statusUpdated` event provides the final request status for each request. If the status is not Success the [Request Errors API](/api-reference/accounting-integration/v4.accountingintegration-request.html#get-request-errors) is used to check for errors.                       |
| `mapping.updated`     | Notify the subscribers that there are updates to the [Configuration Settings and Mappings API](/api-reference/accounting-integration/v4.accountingintegration-mappings.html) data (these updates are performed in the SAP Concur UI by the customer administrator). Such updates are: Payment Types Configuration updates, List Mappings updates, Is Billable field updates, Expense and Invoice ERP Ledger updates, Invoice Liability Account Code mapping updates, Feature Settings preferences updates. **Note that changes in Invoice Policies will not trigger this event**                                                                                                                                                                                                                                                                                                                       | Call the [Configuration Settings and Mappings API](/api-reference/accounting-integration/v4.accountingintegration-mappings.html) to obtain the most recent mappings data. We also recommend caching the Configuration and Mappings data and updating the cache when this event is received. |
| `listMapping.created` | Notify the subscribers that a SAP Concur list or field is **mapped** to an ERP list. <br /> Standard Edition: this event is published after the customer administrator maps a SAP Concur Custom Field to an ERP List. <br/> Professional edition: this event is published after the customer administrator imports an ERP List in SAP Concur via the Administrator UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Start sending the list items of the mapped ERP List using the [List Item v4 API](/api-reference/common/list-item/v4.list-item.html). Note: you would need to periodically send any updates to the ERP list items of the mapped lists.                                                       |
| `listMapping.deleted` | Notify the subscribers that a SAP Concur list or field mapping to an ERP list is **removed**. <br /> Standard Edition: this event is published after the customer administrator removes the mapping between a SAP Concur Custom Field and an ERP List. <br/> Professional edition: this event is published after the customer administrator removes the mapping between a SAP Concur List and an ERP List.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Stop sending the list items of the ERP List which mapping was removed.                                                                                                                                                                                                                      |
| `data.resetRequested` | Notify the subscribers that a reset is requested for the ERP data that has been sent to the SAP Concur system via the [Accounts](/api-reference/accounting-integration/v4.accountingintegration-account.html), [List Names](/api-reference/accounting-integration/v4.accountingintegration-list.html) and [Vendors](/api-reference/accounting-integration/v4.accountingintegration-vendor.html) APIs. A reset might be requested for one or more of the data types (this is indicated in the event, see the [example](/event-subscription-topic-accountingintegration.html#dataResetRequestedExample)) and should be performed only for the requested type. Data reset means that the existing data that is cached in the SAP Concur system needs to be cleared out and resent. This event is published after an administrator has requested a reset (this request is performed in the SAP Concur UI). | Delete all the data stored in SAP Concur for the requested type(s) - Accounts, Vendors or List Names, and send all the ERP data again. **Note: to delete all of the cached data in the SAP Concur system send `deleteAll: true` flag in the PATCH endpoints. See the API documentation.**   |

## <a name="schema"></a>Schema

### <a name="statusUpdated"></a>Schema for Event `data.statusUpdated`

|Name|Type|Format|Description|
|---|---|---|---|
| `data` | [`RequestStatus`](/api-reference/accounting-integration/v4.accountingintegration-schema.html#request-status) | -    | Details of the request status |

### <a name="listMappingCreated"></a>Schema for Event `listMapping.created` and `listMapping.deleted`

|Name|Type|Format|Description|
|---|---|---|---|
| `data` | `array` | [`ListMapping`](/api-reference/accounting-integration/v4.accountingintegration-schema.html#list-mapping) | Array of list mappings between the ERP lists and SAP Concur lists (See examples below) |

### <a name="resetRequested"></a>Schema for Event `data.resetRequested`

|Name|Type|Format|Description|
|---|---|---|---|
| `data` | `array` | [`ObjectType`](/api-reference/accounting-integration/v4.accountingintegration-schema.html#object-type) | Accounting object type |

## Flow Diagrams

### <a name="process-flow-data.statusUpdated"></a>Process Flow for data.statusUpdated

![Process Flow for data.statusUpdated](./v4.accountingintegration-data.statusUpdated-flow.png)

### <a name="process-flow-mapping.updated"></a>Process Flow for mapping.updated

![Process Flow for mapping.updated](./v4.accountingintegration-mapping.updated-flow.png)

### <a name="process-flow-listMapping.created"></a>Process Flow for listMapping.created

![Process Flow for listMapping.created](./v4.accountingintegration-listMapping.created-flow.png)

### <a name="process-flow-listMapping.deleted"></a>Process Flow for listMapping.deleted

![Process Flow for listMapping.deleted](./v4.accountingintegration-listMapping.deleted-flow.png)

### <a name="process-flow-data.resetRequested"></a>Process Flow for data.resetRequested

![Process Flow for data.resetRequested](./v4.accountingintegration-data.resetRequested-flow.png)

## <a name="samples"></a>Sample Events

### <a name="statusUpdatedExample"></a>Example for Event `data.statusUpdated`

```json
  {
  "correlationId": "fece38ea-f06e-4dbc-98ae-5aca3a2016d6",
  "id": "b406d1ab-a41c-461c-9404-0bd958e86ae2",
  "topic": "public.concur.spend.accountingintegration",
  "subtopic": null,
  "eventType": "data.statusUpdated",
  "timeStamp": "2021-03-18T23:11:51.034Z",
  "facts": {
    "companyId": "49d30324-7f69-4f9c-b3fa-ca7639e1fc35",
    "erpId": "261a88ef-44f2-4102-b303-db4ac2a4a8ba",
    "partnerId": "4f434150-5a74-4d43-8050-f7b57d0c8840",
    "data": {
      "requestId": "fde670e0-4aa2-451e-8431-7bcdc574cc6b",
      "status": "ERROR",
      "_links": {
        "errors": {
          "href": "/v4/companies/49d30324-7f69-4f9c-b3fa-ca7639e1fc35/requests/fde670e0-4aa2-451e-8431-7bcdc574cc6b/errors"
        }
      }
    }
  }
}
```

### <a name="mappingUpdatedExample"></a>Example for Event `mapping.updated`

```json
  {
  "id": "de32e71c-f797-4841-8578-c3d870c28629",
  "correlationId": "ce33f8e586e9c30dd10f81a5dfe83fae",
  "eventType": "mapping.updated",
  "topic": "public.concur.spend.accountingintegration",
  "timeStamp": "2022-10-03T21:25:28.913Z",
  "facts": {
    "companyId": "5bfa738a-1ae7-471d-8286-3984c54223a7",
    "erpId": "f1f9852c-860a-496b-b38b-eb29fff67b81",
    "partnerId": "8b820d40-8e47-40a0-8c8e-f92eb8f5a0a7"
  }
}
```

### <a name="listMappingCreatedExample"></a>Example for Event `listMapping.created`

```json
{
  "correlationId": "correlationId",
  "id": "685fa226-b72d-47f9-b9ad-e621de12d094",
  "topic": "public.concur.spend.accountingintegration",
  "subtopic": null,
  "eventType": "listMapping.created",
  "timeStamp": "2021-03-18T23:11:51.034Z",
  "facts": {
    "companyId": "49d30324-7f69-4f9c-b3fa-ca7639e1fc35",
    "partnerId": "4f434150-5a74-4d43-8050-f7b57d0c8840",
    "erpId": "261a88ef-44f2-4102-b303-db4ac2a4a8ba",
    "data": [
      {
        "erpListId": "erpListId1",
        "concurListId": "concurListId1",
        "fieldMappings": [
          {
            "formTypeCode": "allocation",
            "fields": [
              {
                "alternateFieldId": "MyFieldId",
                "level": 1
              }
            ],
            "connectedLists": [
              {
                "fields": [
                  {
                    "alternateFieldId": "MyConnectedFieldID1",
                    "level": 1
                  },
                  {
                    "alternateFieldId": "MyConnectedFieldID2",
                    "level": 2
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "erpListId": "erpListId2",
        "concurListId": "concurListId2",
        "fieldMappings": [
          {
            "formTypeCode": "allocation",
            "fields": [
              {
                "alternateFieldId": "MyFieldId2",
                "level": 1
              }
            ],
            "connectedLists": [
              {
                "fields": [
                  {
                    "alternateFieldId": "MyOtherConnectedFieldID1",
                    "level": 1
                  },
                  {
                    "alternateFieldId": "MyOtherConnectedFieldID2",
                    "level": 2
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
  ```

### <a name="listMappingDeletedExample"></a>Example for Event `listMapping.deleted`

```json
  {
  "correlationId": "041eebf8-d1de-43d4-9303-c84d303f69e4",
  "id": "d60faf21-aeed-48fd-9a0d-8232f4bad0ad",
  "topic": "public.concur.spend.accountingintegration",
  "subtopic": null,
  "eventType": "listMapping.deleted",
  "timeStamp": "2021-03-18T23:11:51.034Z",
  "facts": {
    "companyId": "49d30324-7f69-4f9c-b3fa-ca7639e1fc35",
    "partnerId": "4f434150-5a74-4d43-8050-f7b57d0c8840",
    "erpId": "261a88ef-44f2-4102-b303-db4ac2a4a8ba",
    "data": [
      {
        "erpListId": "erpListId1",
        "concurListId": "concurListId1"
      }
    ]
  }
}
```

### <a name="dataResetRequestedExample"></a>Example for Event `data.resetRequested`

```json
  {
  "id": "91d301b9-29df-425a-99cc-7b2f5e995187",
  "correlationId": "e27f2040-6280-4550-b9dc-ae41dfd58b62",
  "eventType": "data.resetRequested",
  "topic": "public.concur.spend.accountingintegration",
  "timeStamp": "2022-09-08T22:49:41.973Z",
  "data": null,
  "facts": {
    "companyId": "4045cab7-532d-45ba-801d-937688a89ddf",
    "data": "{\"accountingObjects\":[\"ACCOUNT\",\"VENDOR\",\"LIST\"]}",
      "erpId": "a4542f54-a27a-4178-96a4-e9bbda79c48d",
      "partnerId": "646a2339-1632-4692-8be6-84534f5b41fc"
  }
}
```
