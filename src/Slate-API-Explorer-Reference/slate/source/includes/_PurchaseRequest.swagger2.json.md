

<h2 id="purchase-request">Purchase Request v4.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Purchase Request API allows clients and partners to create and automatically submit purchase requests in the preauthorization workflow using the POST resource. With the GET resource you can retrieve the purchase request number, resulting purchase order number, workflow status, and any exception triggered for the records created.

Base URLs:

* <a href="https://www.concursolutions.com/api/v4.0">https://www.concursolutions.com/api/v4.0</a>

<h3 id="purchase-request-resources">Resources</h3>

#### post__purchaserequest_v4_purchaserequests_

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: string' \
  -H 'concur-correlationid: string'

```

```http
POST https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/ HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json
Content-Type: string
Authorization: string
concur-correlationid: string

```

```javascript
const inputBody = '{
  "description": "string",
  "userId": "string",
  "userEmail": "string",
  "userLoginId": "string",
  "policyExternalId": "string",
  "currencyCode": "string",
  "notesToSupplier": "string",
  "comments": "string",
  "custom1": "string",
  "custom2": "string",
  "custom3": "string",
  "custom4": "string",
  "custom5": "string",
  "custom6": "string",
  "custom7": "string",
  "custom8": "string",
  "custom9": "string",
  "custom10": "string",
  "custom11": "string",
  "custom12": "string",
  "custom13": "string",
  "custom14": "string",
  "custom15": "string",
  "custom16": "string",
  "custom17": "string",
  "custom18": "string",
  "custom19": "string",
  "custom20": "string",
  "custom21": "string",
  "custom22": "string",
  "custom23": "string",
  "custom24": "string",
  "shipToAddressCode": "string",
  "billToAddressCode": "string",
  "lineItems": {
    "purchaseType": "string",
    "vendorCode": "string",
    "vendorAddressCode": "string",
    "description": "string",
    "quantity": "string",
    "unitPrice": "string",
    "expenseType": "string",
    "receiptType": "string",
    "neededByDate": null,
    "uoMCode": "string",
    "shipping": "string",
    "tax": "string",
    "supplierPartId": "string",
    "url": "string",
    "notesToVendor": "string",
    "comments": "string",
    "custom1": "string",
    "custom2": "string",
    "custom3": "string",
    "custom4": "string",
    "custom5": "string",
    "custom6": "string",
    "custom7": "string",
    "custom8": "string",
    "custom9": "string",
    "custom10": "string",
    "custom11": "string",
    "custom12": "string",
    "custom13": "string",
    "custom14": "string",
    "custom15": "string",
    "custom16": "string",
    "custom17": "string",
    "custom18": "string",
    "custom19": "string",
    "custom20": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'string',
  'concur-correlationid':'string'
};

fetch('https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/',
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

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'string',
  'concur-correlationid' => 'string'
}

result = RestClient.post 'https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'string',
  'concur-correlationid': 'string'
}

r = requests.post('https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'string',
    'concur-correlationid' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"string"},
        "concur-correlationid": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /purchaserequest/v4/purchaserequests/`

*Create a new purchase request*

Create a Purchase Request based on provided header and line item details. If the request is valid it creates a purchase request and returns back a unique identifier to get the purchase request details.

> Body parameter

```json
{
  "description": "string",
  "userId": "string",
  "userEmail": "string",
  "userLoginId": "string",
  "policyExternalId": "string",
  "currencyCode": "string",
  "notesToSupplier": "string",
  "comments": "string",
  "custom1": "string",
  "custom2": "string",
  "custom3": "string",
  "custom4": "string",
  "custom5": "string",
  "custom6": "string",
  "custom7": "string",
  "custom8": "string",
  "custom9": "string",
  "custom10": "string",
  "custom11": "string",
  "custom12": "string",
  "custom13": "string",
  "custom14": "string",
  "custom15": "string",
  "custom16": "string",
  "custom17": "string",
  "custom18": "string",
  "custom19": "string",
  "custom20": "string",
  "custom21": "string",
  "custom22": "string",
  "custom23": "string",
  "custom24": "string",
  "shipToAddressCode": "string",
  "billToAddressCode": "string",
  "lineItems": {
    "purchaseType": "string",
    "vendorCode": "string",
    "vendorAddressCode": "string",
    "description": "string",
    "quantity": "string",
    "unitPrice": "string",
    "expenseType": "string",
    "receiptType": "string",
    "neededByDate": null,
    "uoMCode": "string",
    "shipping": "string",
    "tax": "string",
    "supplierPartId": "string",
    "url": "string",
    "notesToVendor": "string",
    "comments": "string",
    "custom1": "string",
    "custom2": "string",
    "custom3": "string",
    "custom4": "string",
    "custom5": "string",
    "custom6": "string",
    "custom7": "string",
    "custom8": "string",
    "custom9": "string",
    "custom10": "string",
    "custom11": "string",
    "custom12": "string",
    "custom13": "string",
    "custom14": "string",
    "custom15": "string",
    "custom16": "string",
    "custom17": "string",
    "custom18": "string",
    "custom19": "string",
    "custom20": "string"
  }
}
```

<h3 id="post__purchaserequest_v4_purchaserequests_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Content Type.|
|Authorization|header|string|true|Bearer Token that identifies the caller. This is the Company or User access token.|
|concur-correlationid|header|string|false|Concur specific custom header used for technical support in the form of a RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace.|
|body|body|[purchaseRequest](#schemapurchaserequest)|true|The details of the purchase request.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "uri": "string"
}
```

<h3 id="post__purchaserequest_v4_purchaserequests_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[purchaseRequestResponse](#schemapurchaserequestresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[errors](#schemaerrors)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Unavailable|None|

<aside class="success">
This operation does not require authentication
</aside>

#### get__purchaserequest_v4_purchaserequests_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/{id}?mode=COMPACT \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: string' \
  -H 'concur-correlationid: string'

```

```http
GET https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/{id}?mode=COMPACT HTTP/1.1
Host: www.concursolutions.com
Accept: application/json
Content-Type: string
Authorization: string
concur-correlationid: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'string',
  'concur-correlationid':'string'
};

fetch('https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/{id}?mode=COMPACT',
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

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'string',
  'concur-correlationid' => 'string'
}

result = RestClient.get 'https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/{id}?mode=COMPACT',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'string',
  'concur-correlationid': 'string'
}

r = requests.get('https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/{id}?mode=COMPACT', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'string',
    'concur-correlationid' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/{id}?mode=COMPACT', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/{id}?mode=COMPACT");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"string"},
        "concur-correlationid": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v4.0/purchaserequest/v4/purchaserequests/{id}?mode=COMPACT", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /purchaserequest/v4/purchaserequests/{id}?mode=COMPACT`

*Gets details of an existing purchase request*

Gets purchase request details. The supported mode is COMPACT, which returns basic info about the purchase request along with any exceptions.

<h3 id="get__purchaserequest_v4_purchaserequests_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Content Type.|
|Authorization|header|string|true|Bearer Token that identifies the caller. This is the Company or User access token.|
|concur-correlationid|header|string|false|Concur specific custom header used for technical support in the form of a RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace.|
|id|path|string|true|The identifier for the purchase request.|
|mode|parameter|string|true|Specifies mode for Get Purchase Request Details. Supported value: COMPACT.|

> Example responses

> 200 Response

```json
{
  "purchaseRequestId": "string",
  "purchaseRequestNumber": "string",
  "purchaseRequestQueueStatus": "string",
  "purchaseRequestWorkflowStatus": "string",
  "purchaseOrders": {
    "purchaseOrderNumber": "string"
  },
  "purchaseRequestExceptions": {
    "eventCode": "string",
    "exceptionCode": "string",
    "isCleared": "string",
    "prExceptionId": "string",
    "message": "string"
  }
}
```

<h3 id="get__purchaserequest_v4_purchaserequests_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[getPurchaseRequestCompact](#schemagetpurchaserequestcompact)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Unavailable|None|

<aside class="success">
This operation does not require authentication
</aside>

### Schemas

<h3 id="tocS_purchaseRequest">purchaseRequest</h3>

<a id="schemapurchaserequest"></a>
<a id="schema_purchaseRequest"></a>
<a id="tocSpurchaserequest"></a>
<a id="tocspurchaserequest"></a>

```json
{
  "description": "string",
  "userId": "string",
  "userEmail": "string",
  "userLoginId": "string",
  "policyExternalId": "string",
  "currencyCode": "string",
  "notesToSupplier": "string",
  "comments": "string",
  "custom1": "string",
  "custom2": "string",
  "custom3": "string",
  "custom4": "string",
  "custom5": "string",
  "custom6": "string",
  "custom7": "string",
  "custom8": "string",
  "custom9": "string",
  "custom10": "string",
  "custom11": "string",
  "custom12": "string",
  "custom13": "string",
  "custom14": "string",
  "custom15": "string",
  "custom16": "string",
  "custom17": "string",
  "custom18": "string",
  "custom19": "string",
  "custom20": "string",
  "custom21": "string",
  "custom22": "string",
  "custom23": "string",
  "custom24": "string",
  "shipToAddressCode": "string",
  "billToAddressCode": "string",
  "lineItems": {
    "purchaseType": "string",
    "vendorCode": "string",
    "vendorAddressCode": "string",
    "description": "string",
    "quantity": "string",
    "unitPrice": "string",
    "expenseType": "string",
    "receiptType": "string",
    "neededByDate": null,
    "uoMCode": "string",
    "shipping": "string",
    "tax": "string",
    "supplierPartId": "string",
    "url": "string",
    "notesToVendor": "string",
    "comments": "string",
    "custom1": "string",
    "custom2": "string",
    "custom3": "string",
    "custom4": "string",
    "custom5": "string",
    "custom6": "string",
    "custom7": "string",
    "custom8": "string",
    "custom9": "string",
    "custom10": "string",
    "custom11": "string",
    "custom12": "string",
    "custom13": "string",
    "custom14": "string",
    "custom15": "string",
    "custom16": "string",
    "custom17": "string",
    "custom18": "string",
    "custom19": "string",
    "custom20": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the purchase request.|
|userId|string|true|none|The employee that is requesting the items. This is the UUID of the employee. Either UserId or UserEmail or UserLoginId is required to identify the employee.|
|userEmail|string|true|none|The employee that is requesting the items. This is the employee’s email. Either UserId or UserEmail or UserLoginId is required to identify the employee.|
|userLoginId|string|true|none|The employee that is requesting the items. This is the employee’s Login Id. Either UserId or UserEmail or UserLoginId is required to identify the employee.|
|policyExternalId|string|false|none|The external identifier of the policy that should be associated with the purchase request. If not supplied, the API will use the default policy set up for the user group assigned to the requesting employee. This is the External Id from the Invoice Policy configuration. Clients will need to get these Ids from their SAP Concur contact if they need to assign policies other than the group default.|
|currencyCode|string|true|none|The 3-letter ISO 4217 currency code of the currency that is associated with the purchase request. This code will be used for all items on this request. Example: USD.|
|notesToSupplier|string|false|none|Notes to print on the transmitted purchase order PDF sent to the supplier.|
|comments|string|false|none|Internal comments related to this record.|
|custom1|string|false|none|A value that can be applied to a custom field 1 that is part of the purchase request header form.|
|custom2|string|false|none|A value that can be applied to a custom field 2 that is part of the purchase request header form.|
|custom3|string|false|none|A value that can be applied to a custom field 3 that is part of the purchase request header form.|
|custom4|string|false|none|A value that can be applied to a custom field 4 that is part of the purchase request header form.|
|custom5|string|false|none|A value that can be applied to a custom field 5 that is part of the purchase request header form.|
|custom6|string|false|none|A value that can be applied to a custom field 6 that is part of the purchase request header form.|
|custom7|string|false|none|A value that can be applied to a custom field 7 that is part of the purchase request header form.|
|custom8|string|false|none|A value that can be applied to a custom field 8 that is part of the purchase request header form.|
|custom9|string|false|none|A value that can be applied to a custom field 9 that is part of the purchase request header form.|
|custom10|string|false|none|A value that can be applied to a custom field 10 that is part of the purchase request header form.|
|custom11|string|false|none|A value that can be applied to a custom field 11 that is part of the purchase request header form.|
|custom12|string|false|none|A value that can be applied to a custom field 12 that is part of the purchase request header form.|
|custom13|string|false|none|A value that can be applied to a custom field 13 that is part of the purchase request header form.|
|custom14|string|false|none|A value that can be applied to a custom field 14 that is part of the purchase request header form.|
|custom15|string|false|none|A value that can be applied to a custom field 15 that is part of the purchase request header form.|
|custom16|string|false|none|A value that can be applied to a custom field 16 that is part of the purchase request header form.|
|custom17|string|false|none|A value that can be applied to a custom field 17 that is part of the purchase request header form.|
|custom18|string|false|none|A value that can be applied to a custom field 18 that is part of the purchase request header form.|
|custom19|string|false|none|A value that can be applied to a custom field 19 that is part of the purchase request header form.|
|custom20|string|false|none|A value that can be applied to a custom field 20 that is part of the purchase request header form.|
|custom21|string|false|none|A value that can be applied to a custom field 21 that is part of the purchase request header form.|
|custom22|string|false|none|A value that can be applied to a custom field 22 that is part of the purchase request header form.|
|custom23|string|false|none|A value that can be applied to a custom field 23 that is part of the purchase request header form.|
|custom24|string|false|none|A value that can be applied to a custom field 24 that is part of the purchase request header form.|
|shipToAddressCode|string|false|none|The shipping address of the Purchase Request. The accepted value is the address code from ShipTo record. If not supplied, the API will use the requesting user’s default shipping address.|
|billToAddressCode|string|false|none|The billing address of the Purchase Request to be used for invoicing. The accepted value is the address code from the BillTo record. If not supplied the API will use the policy’s default BillTo address.|
|lineItems|[lineItem](#schemalineitem)|true|none|Requested items or services related to this Purchase Request.|

<h3 id="tocS_lineItem">lineItem</h3>

<a id="schemalineitem"></a>
<a id="schema_lineItem"></a>
<a id="tocSlineitem"></a>
<a id="tocslineitem"></a>

```json
{
  "purchaseType": "string",
  "vendorCode": "string",
  "vendorAddressCode": "string",
  "description": "string",
  "quantity": "string",
  "unitPrice": "string",
  "expenseType": "string",
  "receiptType": "string",
  "neededByDate": null,
  "uoMCode": "string",
  "shipping": "string",
  "tax": "string",
  "supplierPartId": "string",
  "url": "string",
  "notesToVendor": "string",
  "comments": "string",
  "custom1": "string",
  "custom2": "string",
  "custom3": "string",
  "custom4": "string",
  "custom5": "string",
  "custom6": "string",
  "custom7": "string",
  "custom8": "string",
  "custom9": "string",
  "custom10": "string",
  "custom11": "string",
  "custom12": "string",
  "custom13": "string",
  "custom14": "string",
  "custom15": "string",
  "custom16": "string",
  "custom17": "string",
  "custom18": "string",
  "custom19": "string",
  "custom20": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchaseType|string|true|none|The type of item, either goods or services. Displayed as Type in Concur Invoice. Supported values: GOODS, SERVICES.|
|vendorCode|string|true|none|The code that identifies the vendor. This value can be found in the vendor information form of Vendor Manager. This is used along with Vendor Address Code to determine the specific Vendor record.|
|vendorAddressCode|string|true|none|The code that identifies the vendor’s address. This value can be found in the vendor information form of Vendor Manager and is labeled Address Accounting Code. This is used along with Vendor Code to determine the specific Vendor record.|
|description|string|true|none|A description of the line item.|
|quantity|string|true|none|The quantity associated with the line item.|
|unitPrice|string|true|none|The unit price of the line item.|
|expenseType|string|false|none|The PET code of the Expense Type that will be assigned to the line item. If not supplied it will default to the Expense Type set up on the Vendor Profile used for the item. Clients will need to get these PET codes from their SAP Concur contact.|
|receiptType|string|false|none|The type of receipt. If not supplied, the API will use the purchaseType to set this field to NONE for SERVICES, or QUANTITY_RECEIPT for GOODS. If you are using SAP Concur Receiving and need to enter Goods Receipts against the resulting PO lines use QUANTITY_RECEIPT. Supported values: QUANTITY_RECEIPT, NONE.|
|neededByDate|date|false|none|The date by which the purchase order must be fulfilled in format YYYY-MM-DD. Example: 2018-03-23.|
|uoMCode|string|false|none|Unit of Measure (UOM) code for the purchase request item. Accepted values are the UOM Codes set up in the Unit of Measure configuration in Concur Invoice. If not supplied, the API will default a UOM based on the defaults for goods and services.|
|shipping|string|false|none|The total shipping cost for the item.|
|tax|string|false|none|Tax amount that is associated with the line item.|
|supplierPartId|string|false|none|An Id value that helps to identify the line item. This could be a value such as the vendor’s part number or the manufacturer number.|
|url|string|false|none|A URL related to the item. You can have multiple URLs per item, enclosed in quotes and comma separated.|
|notesToVendor|string|false|none|Notes related to the item that display on the transmitted purchase order PDF to the vendor.|
|comments|string|false|none|Internal comments related to this record.|
|custom1|string|false|none|A value that can be applied to a custom field 1 that is part of the purchase request line item form.|
|custom2|string|false|none|A value that can be applied to a custom field 2 that is part of the purchase request line item form.|
|custom3|string|false|none|A value that can be applied to a custom field 3 that is part of the purchase request line item form.|
|custom4|string|false|none|A value that can be applied to a custom field 4 that is part of the purchase request line item form.|
|custom5|string|false|none|A value that can be applied to a custom field 5 that is part of the purchase request line item form.|
|custom6|string|false|none|A value that can be applied to a custom field 6 that is part of the purchase request line item form.|
|custom7|string|false|none|A value that can be applied to a custom field 7 that is part of the purchase request line item form.|
|custom8|string|false|none|A value that can be applied to a custom field 8 that is part of the purchase request line item form.|
|custom9|string|false|none|A value that can be applied to a custom field 9 that is part of the purchase request line item form.|
|custom10|string|false|none|A value that can be applied to a custom field 10 that is part of the purchase request line item form.|
|custom11|string|false|none|A value that can be applied to a custom field 11 that is part of the purchase request line item form.|
|custom12|string|false|none|A value that can be applied to a custom field 12 that is part of the purchase request line item form.|
|custom13|string|false|none|A value that can be applied to a custom field 13 that is part of the purchase request line item form.|
|custom14|string|false|none|A value that can be applied to a custom field 14 that is part of the purchase request line item form.|
|custom15|string|false|none|A value that can be applied to a custom field 15 that is part of the purchase request line item form.|
|custom16|string|false|none|A value that can be applied to a custom field 16 that is part of the purchase request line item form.|
|custom17|string|false|none|A value that can be applied to a custom field 17 that is part of the purchase request line item form.|
|custom18|string|false|none|A value that can be applied to a custom field 18 that is part of the purchase request line item form.|
|custom19|string|false|none|A value that can be applied to a custom field 19 that is part of the purchase request line item form.|
|custom20|string|false|none|A value that can be applied to a custom field 20 that is part of the purchase request line item form.|

<h3 id="tocS_purchaseRequestResponse">purchaseRequestResponse</h3>

<a id="schemapurchaserequestresponse"></a>
<a id="schema_purchaseRequestResponse"></a>
<a id="tocSpurchaserequestresponse"></a>
<a id="tocspurchaserequestresponse"></a>

```json
{
  "id": "string",
  "uri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique purchase request reference ID if the request has passed all validations. This reference ID will be needed to look up details of the purchase request.|
|uri|string|false|none|The URI to look up details of the newly created purchase request.|

<h3 id="tocS_errors">errors</h3>

<a id="schemaerrors"></a>
<a id="schema_errors"></a>
<a id="tocSerrors"></a>
<a id="tocserrors"></a>

```json
{
  "error": {
    "errorCode": "string",
    "errorMessage": "string",
    "dataPath": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[error](#schemaerror)|false|none|An array of errors indicating which fields have failed validation.|

<h3 id="tocS_error">error</h3>

<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "dataPath": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|An error code indicating why a field failed validation.|
|errorMessage|string|false|none|A description of the error.|
|dataPath|string|false|none|The path to the request data which has the error message.|

<h3 id="tocS_getPurchaseRequestCompact">getPurchaseRequestCompact</h3>

<a id="schemagetpurchaserequestcompact"></a>
<a id="schema_getPurchaseRequestCompact"></a>
<a id="tocSgetpurchaserequestcompact"></a>
<a id="tocsgetpurchaserequestcompact"></a>

```json
{
  "purchaseRequestId": "string",
  "purchaseRequestNumber": "string",
  "purchaseRequestQueueStatus": "string",
  "purchaseRequestWorkflowStatus": "string",
  "purchaseOrders": {
    "purchaseOrderNumber": "string"
  },
  "purchaseRequestExceptions": {
    "eventCode": "string",
    "exceptionCode": "string",
    "isCleared": "string",
    "prExceptionId": "string",
    "message": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchaseRequestId|string|false|none|The unique purchase request reference Id. Returned by the Create Purchase Request API call.|
|purchaseRequestNumber|string|false|none|The unique purchase request identifier which can be used to uniquely identify a purchase request in SAP Concur products.|
|purchaseRequestQueueStatus|string|false|none|The creation status of the purchase request. Possible values are: PENDING_CREATION, CREATED, CREATE_FAILED.|
|purchaseRequestWorkflowStatus|string|false|none|The workflow status of the purchase request. Possible values are: Approved, Pending Approval, Pending Cost Object Approval, Sent Back To Employee, Not Submitted, Submitted, Pending Processor Review, Vendor Approval, Approval Time Expired.|
|purchaseOrders|[purchaseOrder](#schemapurchaseorder)|false|none|If the purchase request has been approved and a purchase order generated, this array contains the purchase order details. If empty, this element will not be returned.|
|purchaseRequestExceptions|[purchaseRequestException](#schemapurchaserequestexception)|false|none|An array of exceptions, if present on the purchase request. If empty, this element will not be returned.|

<h3 id="tocS_purchaseOrder">purchaseOrder</h3>

<a id="schemapurchaseorder"></a>
<a id="schema_purchaseOrder"></a>
<a id="tocSpurchaseorder"></a>
<a id="tocspurchaseorder"></a>

```json
{
  "purchaseOrderNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchaseOrderNumber|string|false|none|The purchase order number.|

<h3 id="tocS_purchaseRequestException">purchaseRequestException</h3>

<a id="schemapurchaserequestexception"></a>
<a id="schema_purchaseRequestException"></a>
<a id="tocSpurchaserequestexception"></a>
<a id="tocspurchaserequestexception"></a>

```json
{
  "eventCode": "string",
  "exceptionCode": "string",
  "isCleared": "string",
  "prExceptionId": "string",
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventCode|string|false|none|The event code of the exception. Example: PURCH_DETAIL_SUBMIT.|
|exceptionCode|string|false|none|The unique exception code.|
|isCleared|string|false|none|Whether the exception has been cleared.|
|prExceptionId|string|false|none|The unique exception id of the purchase request.|
|message|string|false|none|The message of the exception with details.|

