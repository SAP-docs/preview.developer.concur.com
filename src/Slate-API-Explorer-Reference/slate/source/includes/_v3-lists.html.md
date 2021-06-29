
## Lists v3


The Lists API allows you to view your configured lists within SAP Concur products, and create new lists. The lists are shared between multiple SAP Concur products. Use the [List Items API](/api-reference/common/list-item/v3.list-item.html) to manage the items in the lists.

* [Products and Editions](#products-editions)
* [Scope Usage](#scope-usage)
* [Get All Lists](#get)
* [Create a New List](#post)
* [Get a Single List by ID](#get-2)
* [Update List](#put) **Deprecated**
* [Schema](#schema)
  * [CreateResponse](#create-response)
  * [ListGet](#list-get)
  * [ListGetCollection](#list-get-collection)
  * [ListPost](#list-post)
  * [ListPut](#list-put)

#### <a name="products-editions"></a>Products and Editions

* Concur Expense Professional Edition
* Concur Expense Standard Edition
* Concur Invoice Professional Edition
* Concur Invoice Standard Edition
* Concur Request Professional Edition
* Concur Request Standard Edition

#### <a name="scope-usage"></a>Scope Usage

Name|Description|Endpoint
---|---|---
`LIST`|Use and update lists configured by your company.|GET, POST

#### <a name="get"></a>Get All Lists

Returns all lists based on the search criteria.

#### Parameters

Name|Type|Format|Description
---|---|---|---
`limit`| `integer`|The default is 25 and the maximum is 100.|**Optional**. The number of records to return.
`offset` |`string`|-|**Optional**. The start of the page offset. The default is from the beginning.

#### Request

```http
GET https://www.concursolutions.com/api/v3.0/common/lists HTTP/1.1
Host: www.concursolutions.com
Accept: application/json
```

```javascript
 const headers = {
  'Accept':'application/json'

};

fetch('https://www.concursolutions.com/api/v3.0/common/lists',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

#### Response

200 Response

```json
{
  "Items": {
    "ConnectorID": "string",
    "DisplayCodeFirst": true,
    "ExternalThreshold": 0,
    "ID": "string",
    "IsVendorList": true,
    "Name": "string",
    "SearchCriteriaCode": "string",
    "URI": "string"
  },
  "NextPage": "string"
}
```

#### <a name="post"></a>Create a New List

Creates a new list.

#### Parameters

Name|Type|Format|Description
---|---|---|---
`content`|[ListPost](#list-post)|-|**Required**. List object to create.

#### Request

```http
POST https://www.concursolutions.com/api/v3.0/common/lists HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json
```

```javascript
const inputBody = '{
  "ConnectorID": "string",
  "DisplayCodeFirst": true,
  "ExternalThreshold": 0,
  "IsVendorList": true,
  "Name": "string",
  "SearchCriteriaCode": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://www.concursolutions.com/api/v3.0/common/lists',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

#### Response

200 Response

```json
{
  "ID": "string",
  "URI": "string"
}
```

#### <a name="get-2"></a>Get a Single List by ID

Returns a list by ID.

#### Parameters

Name|Type|Format|Description
---|---|---|---
`id`|`string`|-|**Required**.The unique identifier for the list.

#### Request

```http
GET https://www.concursolutions.com/api/v3.0/common/lists/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'

};

fetch('https://www.concursolutions.com/api/v3.0/common/lists/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

#### Response

200 Response

```json
{
  "ConnectorID": "string",
  "DisplayCodeFirst": true,
  "ExternalThreshold": 0,
  "ID": "string",
  "IsVendorList": true,
  "Name": "string",
  "SearchCriteriaCode": "string",
  "URI": "string"
}
```

#### <a name="put"></a>Update List

>**DEPRECATED**: 05/19/2016 UNSUPPORTED: 11/19/2016. Updates list specified in the URL. Only the fields provided in the supplied object will be updated, missing fields will not be altered.

#### Parameters

Name|Type|Format|Description
---|---|---|---
`id`|`string`|-|**Required**. The unique identifier for the list.
`content` |[ListPut](#list-put)|-|**Required**. The list object to update.

#### Request

```http
PUT https://www.concursolutions.com/api/v3.0/common/lists/{id} HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "DisplayCodeFirst": true,
  "Name": "string",
  "SearchCriteriaCode": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://www.concursolutions.com/api/v3.0/common/lists/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

### <a name="schema"></a>Schema

#### <a name="create-response"></a>CreateResponse

Name|Type|Format|Description
---|---|---|---
`ID`|`string` |-|
`URI`|`string`|-|

#### <a name="list-get"></a>ListGet

Name|Type|Format|Description
---|---|---|---
`ConnectorID`|`string`|-|**Optional**. Defines the encrypted `ConnectorID`. If not provided then the list isn't associated with a connector.
`DisplayCodeFirst`|`Boolean` |-|**Required**. Defines whether code should appear before text, or vice versa.
`ExternalThreshold`|`integer`|-|**Optional**. Default value is 1. Defines the threshold from where the level starts being external. This value can only be set if a `ConnectorID` is provided.
`ID`|`string`|-|The unique identifier of the resource.
`IsVendorList`|`Boolean`|-|**Required**. Defines whether it is a vendor list.
`Name`|`string`|-|**Required**. Defines a name for the list. This name must be unique.
`SearchCriteriaCode`|`string`|-|**Required**. Defines whether the search criteria should apply to the code or to the text.
`URI`|`string`|-|The URI to the resource.

#### <a name="list-get-collection"></a>ListGetCollection

Name|Type|Format|Description
---|---|---|---
`Items`|[ListGet](#listget)|-|
`NextPage`|`string`|-|The URI of the next page of results, if any.

#### <a name="list-post"></a>ListPost

Name|Type|Format|Description
---|---|---|---
`ConnectorID`|`string`|-|**Optional**. Defines the encrypted `ConnectorID`. If not provided then the list isn't associated with a connector.
`DisplayCodeFirst`|`Boolean`|-|**Required**. Defines whether code should appear before text, or vice versa.
`ExternalThreshold`|`integer`|-|**Optional**. Default value is 1. Defines the threshold from where the level starts being external. This value can only be set if a `ConnectorID` is provided.
`IsVendorList`|`Boolean`|-|**Required**. Defines whether it is a vendor list.
`Name`|`string`|-|**Required**. Defines a name for the list. This name must be unique.
`SearchCriteriaCode`|`string`|-|**Required**. Defines whether the search criteria should apply to the code or to the text.

#### <a name="list-put"></a>ListPut

Name|Type|Format|Description
---|---|---|---
`DisplayCodeFirst`|`Boolean`|-|**Optional**. Defines whether code should appear before text, or vice versa.
`Name`|`string`|-|**Optional**. Defines a name for the list. This name must be unique.
`SearchCriteriaCode`|`string`|-|**Optional**. Defines whether the search criteria should apply to the code or to the text.
