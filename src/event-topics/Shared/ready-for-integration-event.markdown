---
title: Ready For Integration Events
layout: reference
---

# Ready For Integration Events

## <a name="overview"></a>Overview

The Financial Integration API provides clients and authorized partners access to each of the document types when the document is ready and available for import through the events on the topic `public.concur.financialintegration`. To subscribe to these events follow the steps described on the [Event Subscription Service v4](https://developer.concur.com/api-reference/ess/v4.event-subscription.html) page.

## <a name="limitations"></a>Limitations

Access to this documentation does not provide access to the subscription.

## <a name="scope-usage"></a>Scope Usage

|Name|Description|
|---|---|
`FISVC`|Financial Integration API related events.|

## <a name="event"></a>Events

|Event Type|Event Purpose |Recommended Partner Action|
|---|---|---|
`expense.readyForIntegration`|Notify the subscribers that there is a new expense document ready to be imported.| Subscribe to the topic and call the Financial Integration API to import the document.|
`invoice.readyForIntegration`|Notify the subscribers that there is a new invoice document ready to be imported.| Subscribe to the topic and call the Financial Integration API to import the document.|
`payroll.readyForIntegration`|Notify the subscribers that there is a new payroll document ready to be imported.| Subscribe to the topic and call the Financial Integration API to import the document.|
`cashadvance.readyForIntegration`|Notify the subscribers that there is a new cash advance document ready to be imported.| Subscribe to the topic and call the Financial Integration API to import the document.|
`requestObligation.readyForIntegration`|Notify the subscribers that there is a new request obligation document ready to be imported.|Subscribe to the topic and call the Financial Integration API to import the document.|
`reportObligation.readyForIntegration`|Notify the subscribers that there is a new report obligation document ready to be imported.|Subscribe to the topic and call the Financial Integration API to import the document.|

## <a name="schema"></a>Schema

### <a name="eventexpense-readyForIntegration"></a>Schema for Event expense.readyForIntegration

|Name|Type|Format|Description|
|---|---|---|---|
`id`|`String`|UUID| event id - a unique id for the event. |
`correlationId`|`String`|-|correlation id for the event.|
`eventType`|`String`|-|This will be `expense.readyForIntegration`.|
`topic`|`String`|-|This is the topic to which the event will be published. This will always be `public.concur.financialintegration`.|
`timeStamp`|`String`|yyyy-mm-ddThr:min:sec.msZ|Timestamp for the event being published. Maximum length 24 characters.|
`subtopic`|`String`|-|This is set to the Entity id of the company for which the expense document is ready to be imported.|
`facts`|`Object`|[Facts](#facts)|This is the facts object that will contain the `companyId`, `documentId` , `href`, `entityId`.
`data`|`Object`|-|This will be set to null. The data will be in facts.|
`route`|`String`|-|This will be set to `stable`.|


### <a name="eventinvoice-readyForIntegration"></a>Schema for Event invoice.readyForIntegration

|Name|Type|Format|Description|
|---|---|---|---|
`id`|`String`|UUID| event id - a unique id for the event.|
`correlationId`|`String`|-|correlation id for the event.|
`eventType`|`String`|-|This will be `invoice.readyForIntegration`.|
`topic`|`String`|-|This is the topic to which the event will be published. This will always be `public.concur.financialintegration`.|
`timeStamp`|`String`|yyyy-mm-ddThr:min:sec.msZ|Timestamp for the event being published. Maximum length 24 characters.|
`subtopic`|`String`|-|This is set to the Entity id of the company for which the invoice document is ready to be imported.|
`facts`|`Object`|[Facts](#facts)|This is the facts object that will contain the `companyId`, `documentId` , `href`, `entityId`.
`data`|`Object`|-|This will be set to null. The data will be in facts.|
`route`|`String`|-|This will be set to `stable`.|

### <a name="eventpayroll-readyForIntegration"></a>Schema for Event payroll.readyForIntegration

|Name|Type|Format|Description|
|---|---|---|---|
`id`|`String`|UUID| event id - a unique id for the event. |
`correlationId`|`String`|-|correlation id for the event.|
`eventType`|`String`|-|This will be `payroll.readyForIntegration`.|
`topic`|`String`|-|This is the topic to which the event will be published. This will always be `public.concur.financialintegration`.|
`timeStamp`|`String`|yyyy-mm-ddThr:min:sec.msZ|Timestamp for the event being published. Maximum length 24 characters.|
`subtopic`|`String`|-|This is set to the Entity id of the company for which the payroll document is ready to be imported.|
`facts`|`Object`|[Facts](#facts)|This is the facts object that will contain the `companyId`, `documentId` , `href`, `entityId`.
`data`|`Object`|-|This will be set to null. The data will be in facts.|
`route`|`String`|-|This will be set to `stable`.|

### <a name="eventcashadvance-readyForIntegration"></a>Schema for Event cashadvance.readyForIntegration

|Name|Type|Format|Description|
|---|---|---|---|
`id`|`String`|UUID| event id - a unique id for the event. |
`correlationId`|`String`|-|correlation id for the event.|
`eventType`|`String`|-|This will be `cashadvance.readyForIntegration`.|
`topic`|`String`|-|This is the topic to which the event will be published. This will always be `public.concur.financialintegration`.|
`timeStamp`|`String`|yyyy-mm-ddThr:min:sec.msZ|Timestamp for the event being published. Maximum length 24 characters.|
`subtopic`|`String`|-|This is set to the Entity id of the company for which the `cashadvance` document is ready to be imported.|
`facts`|`Object`|[Facts](#facts)|This is the facts object that will contain the `companyId`, `documentId` , `href`, `entityId`.
`data`|`Object`|-|This will be set to null. The data will be in facts.|
`route`|`String`|-|This will be set to `stable`.|

### <a name="eventrequestObligation-readyForIntegration"></a>Schema for Event requestObligation.readyForIntegration

|Name|Type|Format|Description|
|---|---|---|---|
`id`|`String`|UUID| event id - a unique id for the event. |
`correlationId`|`String`|-|correlation id for the event.|
`eventType`|`String`|-|This will be `requestObligation.readyForIntegration`.|
`topic`|`String`|-|This is the topic to which the event will be published. This will always be `public.concur.financialintegration`.|
`timeStamp`|`String`|yyyy-mm-ddThr:min:sec.msZ|Timestamp for the event being published. Maximum length 24 characters.|
`subtopic`|`String`|-|This is set to the Entity id of the company for which the requestObligation document is ready to be imported.|
`facts`|`Object`|[Facts](#facts)|This is the facts object that will contain the `companyId`, `documentId` , `href`, `entityId`.
`data`|`Object`|-|This will be set to null. The data will be in facts.|
`route`|`String`|-|This will be set to `stable`.|

### <a name="eventreportObligation-readyForIntegration"></a>Schema for Event reportObligation.readyForIntegration

|Name|Type|Format|Description|
|---|---|---|---|
`id`|`String`|UUID| event id - a unique id for the event. |
`correlationId`|`String`|-|correlation id for the event.|
`eventType`|`String`|-|This will be `reportObligation.readyForIntegration`.|
`topic`|`String`|-|This is the topic to which the event will be published. This will always be `public.concur.financialintegration`.|
`timeStamp`|`String`|yyyy-mm-ddThr:min:sec.msZ|Timestamp for the event being published. Maximum length 24 characters.|
`subtopic`|`String`|-|This is set to the Entity id of the company for which the reportObligation document is ready to be imported.|
`facts`|`Object`|[Facts](#facts)|This is the facts object that will contain the `companyId`, `documentId` , `href`, `entityId`.
`data`|`Object`|-|This will be set to null. The data will be in facts.|
`route`|`String`|-|This will be set to `stable`.|

### <a name="facts"></a>Schema for Facts

|Name|Type|Format|Description|
|---|---|---|---|
`companyId`|`String`|-|The company uuid of the company for which the document is ready to be imported.|
`documentId`|`String`|-|The document id of the document that is ready to be imported.|
`href`|`String`|-|The v4 callback GET url for the document to be imported.|
`entityId`|`String`|-|The entityId of the company for which the document is ready to be imported.|


## Flow Diagram

### <a name="process-flow-expense-readyForIntegration"></a>Process Flow 
![Process Flow for ReadyForIntegration](./readyForIntegrationeventsequence.png)

## <a name="samples"></a>Sample Events

### <a name="expense-readyForIntegrationExample"></a>Example for Event expense.readyForIntegration

```json
{
  "id":"aae52efe-b340-4256-8caf-26d23b8cb733",
  "data":null,
  "eventType":"expense.readyForIntegration",
  "correlationId":"901bc0ccbaae426c54f3bcc650ae9ec4",
  "topic":"public.concur.financialintegration",
  "subtopic":"p0608532bdtt",
  "timeStamp":"2023-09-26T21:17:44.570+0000",
  "route":"stable",
  "facts":
  {
    "companyId":"00001cd1-07a1-405f-b3e2-f83566ab4e39",
    "documentId":"5F8FC21234374B979809",
    "href":"https://us2.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/expense/transactions?docId=5F8FC21234374B979809",
    "entityId":"p0608532bdtt"
  }
}
```

### <a name="invoice-readyForIntegrationExample"></a>Example for Event invoice.readyForIntegration

```json
{
  "id":"ett80969-9d7b-41d3-ad64-6649839cc89a",
  "data":null,
  "eventType":"invoice.readyForIntegration",
  "correlationId":"912tteb5aa68424f9bd3f08114009149",
  "topic":"public.concur.financialintegration",
  "subtopic":"p0607623zrtt",
  "timeStamp":"2023-09-26T21:16:37.540+0000",
  "route":"stable",
  "facts":
  {
    "companyId":"1c3564d9-92bd-495a-a8c8-3aba068fff09",
    "documentId":"101F7074D9F3457D924T",
    "href":"https://us2.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/invoice/transactions?docId=101F7074D9F3457D924T",
    "entityId":"p0607623zrtt"
  }
}
```
## <a name="payroll-readyForIntegrationExample"></a>Example for Event payroll.readyForIntegration

```json
{
  "id":"85575t40-dbf8-43e2-aca4-f7e8540198e9",
  "data":null,
  "eventType":"payroll.readyForIntegration",
  "correlationId":"92tt978a-27a8-4f8f-814b-ac0c8b9c712f",
  "topic":"public.concur.financialintegration",
  "subtopic":"p0601728drww",
  "timeStamp":"2023-09-26T21:10:58.769+0000",
  "route":"stable",
  "facts":
  {
    "companyId":"566t38be-37dd-4fda-b367-b39f4c1f685a",
    "documentId":"D5768BD31B604BCE842T",
    "href":"https://us2.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/payroll/transactions?docId=D5768BD31B604BCE842T",
    "entityId":"p0601728drww"
  }
}
  ```


### <a name="cashadvance-readyForIntegrationExample"></a>Example for Event cashadvance.readyForIntegration

```json
{
  "id":"16ff4bt2-1519-4fe7-8a4f-c3160b31f533",
  "data":null,
  "eventType":"cashadvance.readyForIntegration",
  "correlationId":"d32abae50724075ad4fff3b3e3b7b6t2",
  "topic":"public.concur.financialintegration",
  "subtopic":"p0603355bmll",
  "timeStamp":"2023-09-26T21:17:54.600+0000",
  "route":"stable",
  "facts":
  {
    "companyId":"be463ad2-b2ce-4033-b079-663ca6c7t3d5",
    "documentId":"BB6963B71DE97746B37FE399FAE994B6",
    "href":"https://us2.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/cashadvance/transactions?docId=BB6963B71DE97746B37FE399FAE994B6",
    "entityId":"p0603355bmll"
  }
}
  ```

### <a name="requestObligation-readyForIntegrationExample"></a>Example for Event requestObligation.readyForIntegration

```json
{
  "id": "1tt0b656-a4f5-48a8-9ed9-7576595b0dee",
  "correlationId": "S4P_QM7CLNT715_4T010AEF4D5A1EEDACEBB009D5D61888",
  "eventType": "requestObligation.readyForIntegration",
  "topic": "public.concur.financialintegration",
  "timeStamp": "2023-02-23T09:36:13.524Z",
  "subtopic": "p1007275pott",
  "route":"stable",
  "facts":
  {
    "companyId": "325b8e77-14ee-458e-aebt-8193dc166786",
    "documentId": "B96B0E572F91714085616A3F2ABA00BAT",
    "href": "https://us2.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/requestobligation/transactions?docId=B96B0E572F91714085616A3F2ABA00BAT",
    "entityId": "p1007275pott"
  },
  "data": null
}
```

### <a name="reportObligation-readyForIntegrationExample"></a>Example for Event reportObligation.readyForIntegration

```json
{
  "id": "7b255204-ea52-4cb5-aa67-4f7d3c625ae8",
  "correlationId": "81ca8td0-a9f9-46e0-baf0-f679979b47cd",
  "eventType": "reportObligation.readyForIntegration",
  "topic": "public.concur.financialintegration",
  "timeStamp": "2023-02-23T14:23:26.567Z",
  "subtopic": "p1007275pott",
  "route": "stable",
  "facts":
  {
    "companyId": "325b8e7t-14ee-458e-aeb9-8193dc166786",
    "documentId": "CC79684B741042679T16",
    "href": "https://us2.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/reportobligation/transactions?docId=CC79684B741042679T16",
    "entityId": "p1007275pott"
  },
  "data": null
}
```
