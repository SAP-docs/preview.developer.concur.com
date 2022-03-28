---
title: Concur Accounting Integration Events
layout: reference
---
# Accounting Integration Event

{% include prerelease.html %}

## <a name="overview"></a>Overview

The Accounting Integration API provides clients and authorized partners access to the configuration settings and the mappings between SAP Concur systems and ERP data through the events on the topic `public.concur.spend.accountingintegration`. To subscribe to these events follow the steps described on the [Event Subscription Service v4](https://developer.concur.com/api-reference/ess/v4.event-subscription.html) page.

> **Limitation**: This event subscription is only available to partners who have been granted access to Accounting Integration API.

## <a name="scope-usage"></a>Scope Usage

| Name                               | Description |
|---|---|
| `spend.accountingintegration.read` | Accounting Integration API related events |

## <a name="events"></a>Events

| Event Type | Condition that triggers event | Recommended Partner Action |
|---|---|---|
| `listMapping.created` | This event will be published after the customer administrator has mapped the SAP Concur list with the ERP list name. (Professional Edition Note: The customer admin must first import the list, then map them in the `Forms and Fields` interface. Multiple fields can be linked to a single list. Only the first mapping of a list will trigger this event) | This is a trigger telling the Partner that it's time for the ERP data to be synchronized (Via the List Items API) with SAP Concur data.                          |
| `listMapping.deleted` | This event will be published after the customer administrator has removed the mapping between the SAP Concur list and the ERP list name. (Professional Edition Note: As multiple-fields can be mapped to the same list - this event will only trigger when all fields are unmapped from a given list) | The indicated list is no longer mapped and allows the Partner to do it's own data cleanup. This should also stop the indicated list data from being synchronized. |
| `data.resetRequested` | This event will be published when the customer administrator has requested to reset the ERP data cached in SAP Concur data-center. | Data should be resynchronized to SAP Concur systems. |
| `data.statusUpdated`  | This event will be sent to notify the partner that the data they sent to SAP Concur systems via the PATCH action with the `Accounts`, `Lists` and `Vendors` APIs has been processed on SAP Concur side. One notification is sent for each PATCH request that the partner performs. | The status may be interesting for the Partner to perform actions such as notification, logging, cleanup, etc. |

## <a name="schema"></a>Schema

### <a name="listMappingCreated"></a>Schema for Event `listMapping.created` and `listMapping.deleted`

| Name | Type | Format | Description                                                       |
|---|---|---|-------------------------------------------------------------------|
| `data` | `array` | [`ListMapping`](/api-reference/accounting-integration/v4.accountingintegration-schema.html#list-mapping) | List of ERP list to SAP Concur list mappings (See examples below) |

### <a name="resetRequested"></a>Schema for Event `data.resetRequested`

| Name | Type | Format | Description |
|---|---|---|---|
| `data` | `array` | [`ObjectType`](/api-reference/accounting-integration/v4.accountingintegration-schema.html#object-type) | Accounting object type |

### <a name="statusUpdated"></a>Schema for Event `data.statusUpdated`

| Name | Type | Format | Description |
|---|---|---|---|
| `data` | [`RequestStatus`](/api-reference/accounting-integration/v4.accountingintegration-schema.html#request-status) | -      | Details of the request status |

## <a name="samples"></a>Sample Events
```json
[{
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
},
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
},
{
  "correlationId": "21a659cc-9397-45f5-81ce-7960ad3f9709",
  "id": "761fa1dc-3e8b-46b6-9e9f-2e7016216b9f",
  "topic": "public.concur.spend.accountingintegration",
  "subtopic": null,
  "eventType": "data.resetRequested",
  "timeStamp": "2021-03-18T23:11:51.034Z", 
  "facts": {
    "companyId": "49d30324-7f69-4f9c-b3fa-ca7639e1fc35",
    "partnerId": "4f434150-5a74-4d43-8050-f7b57d0c8840",
    "data": ["ACCOUNT", "VENDOR", "LIST"]
  }
},
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
}]
```
