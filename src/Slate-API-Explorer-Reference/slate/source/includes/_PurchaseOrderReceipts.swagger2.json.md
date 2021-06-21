

<h2 id="purchase-order-receipts">Purchase Order Receipts v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Purchase order receipts are records that the purchase order was completed. This API provides methods to create a new purchase order receipt, view or update an existing purchase order receipt, or delete a purchase order receipt.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

<h3 id="purchase-order-receipts-resources">Resources</h3>

#### put__invoice_purchaseorderreceipts

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
PUT https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "Custom1": "string",
  "Custom10": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Deleted": "string",
  "DeliverySlipNumber": "string",
  "GoodsReceiptNumber": "string",
  "ID": "string",
  "LineItemExternalID": "string",
  "PurchaseOrderNumber": "string",
  "ReceivedDate": "string",
  "ReceivedQuantity": "string",
  "UnitOfMeasureCode": "string",
  "URI": "string",
  "Version": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts',
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

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /invoice/purchaseorderreceipts`

*Updates purchase order receipts that are already in the system.*

Updates purchase order receipts that are already in the system and returns status of the update.

> Body parameter

```json
{
  "Custom1": "string",
  "Custom10": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Deleted": "string",
  "DeliverySlipNumber": "string",
  "GoodsReceiptNumber": "string",
  "ID": "string",
  "LineItemExternalID": "string",
  "PurchaseOrderNumber": "string",
  "ReceivedDate": "string",
  "ReceivedQuantity": "string",
  "UnitOfMeasureCode": "string",
  "URI": "string",
  "Version": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PurchaseOrderReceipt>
  <Custom1>string</Custom1>
  <Custom10>string</Custom10>
  <Custom2>string</Custom2>
  <Custom3>string</Custom3>
  <Custom4>string</Custom4>
  <Custom5>string</Custom5>
  <Custom6>string</Custom6>
  <Custom7>string</Custom7>
  <Custom8>string</Custom8>
  <Custom9>string</Custom9>
  <Deleted>string</Deleted>
  <DeliverySlipNumber>string</DeliverySlipNumber>
  <GoodsReceiptNumber>string</GoodsReceiptNumber>
  <ID>string</ID>
  <LineItemExternalID>string</LineItemExternalID>
  <PurchaseOrderNumber>string</PurchaseOrderNumber>
  <ReceivedDate>string</ReceivedDate>
  <ReceivedQuantity>string</ReceivedQuantity>
  <UnitOfMeasureCode>string</UnitOfMeasureCode>
  <URI>string</URI>
  <Version>string</Version>
</PurchaseOrderReceipt>
```

<h3 id="put__invoice_purchaseorderreceipts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PurchaseOrderReceipt](#schemapurchaseorderreceipt)|true|Purchase order receipt information.|

> Example responses

> 200 Response

```json
{
  "ErrorCode": "string",
  "ErrorMessage": "string",
  "FieldCode": "string",
  "LineItemExternalID": "string",
  "Message": "string",
  "PurchaseOrderNumber": "string",
  "Status": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PurchaseOrderReceiptResult>
  <ErrorCode>string</ErrorCode>
  <ErrorMessage>string</ErrorMessage>
  <FieldCode>string</FieldCode>
  <LineItemExternalID>string</LineItemExternalID>
  <Message>string</Message>
  <PurchaseOrderNumber>string</PurchaseOrderNumber>
  <Status>string</Status>
</PurchaseOrderReceiptResult>
```

<h3 id="put__invoice_purchaseorderreceipts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PurchaseOrderReceiptResult](#schemapurchaseorderreceiptresult)|

<aside class="success">
This operation does not require authentication
</aside>

#### post__invoice_purchaseorderreceipts

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "Custom1": "string",
  "Custom10": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Deleted": "string",
  "DeliverySlipNumber": "string",
  "GoodsReceiptNumber": "string",
  "ID": "string",
  "LineItemExternalID": "string",
  "PurchaseOrderNumber": "string",
  "ReceivedDate": "string",
  "ReceivedQuantity": "string",
  "UnitOfMeasureCode": "string",
  "URI": "string",
  "Version": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts',
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
  'Accept' => 'application/json'
}

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /invoice/purchaseorderreceipts`

*Create purchase order receiving information for a purchase order line item.*

Creates purchase order receipts and associate if to purchase order line item and returns status of updation.

> Body parameter

```json
{
  "Custom1": "string",
  "Custom10": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Deleted": "string",
  "DeliverySlipNumber": "string",
  "GoodsReceiptNumber": "string",
  "ID": "string",
  "LineItemExternalID": "string",
  "PurchaseOrderNumber": "string",
  "ReceivedDate": "string",
  "ReceivedQuantity": "string",
  "UnitOfMeasureCode": "string",
  "URI": "string",
  "Version": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PurchaseOrderReceipt>
  <Custom1>string</Custom1>
  <Custom10>string</Custom10>
  <Custom2>string</Custom2>
  <Custom3>string</Custom3>
  <Custom4>string</Custom4>
  <Custom5>string</Custom5>
  <Custom6>string</Custom6>
  <Custom7>string</Custom7>
  <Custom8>string</Custom8>
  <Custom9>string</Custom9>
  <Deleted>string</Deleted>
  <DeliverySlipNumber>string</DeliverySlipNumber>
  <GoodsReceiptNumber>string</GoodsReceiptNumber>
  <ID>string</ID>
  <LineItemExternalID>string</LineItemExternalID>
  <PurchaseOrderNumber>string</PurchaseOrderNumber>
  <ReceivedDate>string</ReceivedDate>
  <ReceivedQuantity>string</ReceivedQuantity>
  <UnitOfMeasureCode>string</UnitOfMeasureCode>
  <URI>string</URI>
  <Version>string</Version>
</PurchaseOrderReceipt>
```

<h3 id="post__invoice_purchaseorderreceipts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PurchaseOrderReceipt](#schemapurchaseorderreceipt)|true|Purchase order receipt information that needs to be created.|

> Example responses

> 200 Response

```json
{
  "ErrorCode": "string",
  "ErrorMessage": "string",
  "FieldCode": "string",
  "LineItemExternalID": "string",
  "Message": "string",
  "PurchaseOrderNumber": "string",
  "Status": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PurchaseOrderReceiptResult>
  <ErrorCode>string</ErrorCode>
  <ErrorMessage>string</ErrorMessage>
  <FieldCode>string</FieldCode>
  <LineItemExternalID>string</LineItemExternalID>
  <Message>string</Message>
  <PurchaseOrderNumber>string</PurchaseOrderNumber>
  <Status>string</Status>
</PurchaseOrderReceiptResult>
```

<h3 id="post__invoice_purchaseorderreceipts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PurchaseOrderReceiptResult](#schemapurchaseorderreceiptresult)|

<aside class="success">
This operation does not require authentication
</aside>

#### get__invoice_purchaseorderreceipts

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts?goodsReceiptNumber=string&purchaseOrderNumber=string \
  -H 'Accept: application/json'

```

```http
GET https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts?goodsReceiptNumber=string&purchaseOrderNumber=string HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts?goodsReceiptNumber=string&purchaseOrderNumber=string',
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
  'Accept' => 'application/json'
}

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts',
  params: {
  'goodsReceiptNumber' => 'string',
'purchaseOrderNumber' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts', params={
  'goodsReceiptNumber': 'string',  'purchaseOrderNumber': 'string'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts?goodsReceiptNumber=string&purchaseOrderNumber=string");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /invoice/purchaseorderreceipts`

*Gets existing purchase order receipts information.*

Gets existing purchase order receipts using below parameters.

<h3 id="get__invoice_purchaseorderreceipts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|goodsReceiptNumber|query|string|true|Goods receipt number for a purchase order line item receipt. This parameter can be used alone or in combination with the other two parameters.|
|purchaseOrderNumber|query|string|true|The purchase order number. This parameter can be used alone or in combination with the other two parameters.|
|lineItemExternalID|query|string|false|A value that uniquely identifies the line item within the purchase order. This parameter cannot be used alone. It must be used in combination with one or more of the other available parameters.|

> Example responses

> 200 Response

```json
{
  "Items": {
    "Custom1": "string",
    "Custom10": "string",
    "Custom2": "string",
    "Custom3": "string",
    "Custom4": "string",
    "Custom5": "string",
    "Custom6": "string",
    "Custom7": "string",
    "Custom8": "string",
    "Custom9": "string",
    "Deleted": "string",
    "DeliverySlipNumber": "string",
    "GoodsReceiptNumber": "string",
    "ID": "string",
    "LineItemExternalID": "string",
    "PurchaseOrderNumber": "string",
    "ReceivedDate": "string",
    "ReceivedQuantity": "string",
    "UnitOfMeasureCode": "string",
    "URI": "string",
    "Version": "string"
  },
  "NextPage": "string",
  "TotalCount": 0,
  "Info": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ReceiptsCollection>
  <Items>
    <Custom1>string</Custom1>
    <Custom10>string</Custom10>
    <Custom2>string</Custom2>
    <Custom3>string</Custom3>
    <Custom4>string</Custom4>
    <Custom5>string</Custom5>
    <Custom6>string</Custom6>
    <Custom7>string</Custom7>
    <Custom8>string</Custom8>
    <Custom9>string</Custom9>
    <Deleted>string</Deleted>
    <DeliverySlipNumber>string</DeliverySlipNumber>
    <GoodsReceiptNumber>string</GoodsReceiptNumber>
    <ID>string</ID>
    <LineItemExternalID>string</LineItemExternalID>
    <PurchaseOrderNumber>string</PurchaseOrderNumber>
    <ReceivedDate>string</ReceivedDate>
    <ReceivedQuantity>string</ReceivedQuantity>
    <UnitOfMeasureCode>string</UnitOfMeasureCode>
    <URI>string</URI>
    <Version>string</Version>
  </Items>
  <NextPage>string</NextPage>
  <TotalCount>0</TotalCount>
  <Info>string</Info>
</ReceiptsCollection>
```

<h3 id="get__invoice_purchaseorderreceipts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ReceiptsCollection](#schemareceiptscollection)|

<aside class="success">
This operation does not require authentication
</aside>

#### delete__invoice_purchaseorderreceipts

> Code samples

```shell
# You can also use wget
curl -X DELETE https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts?goodsReceiptNumber=string&purchaseOrderNumber=string \
  -H 'Accept: application/json'

```

```http
DELETE https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts?goodsReceiptNumber=string&purchaseOrderNumber=string HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts?goodsReceiptNumber=string&purchaseOrderNumber=string',
{
  method: 'DELETE',

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
  'Accept' => 'application/json'
}

result = RestClient.delete 'https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts',
  params: {
  'goodsReceiptNumber' => 'string',
'purchaseOrderNumber' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts', params={
  'goodsReceiptNumber': 'string',  'purchaseOrderNumber': 'string'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts?goodsReceiptNumber=string&purchaseOrderNumber=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://www.concursolutions.com/api/v3.0/invoice/purchaseorderreceipts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /invoice/purchaseorderreceipts`

*Deletes a purchase order line item receipt.*

Deletes a existing purchase order line item receipt using the available parameters below. The delete will only be executed if a unique record is found and not associated to a payment request.

<h3 id="delete__invoice_purchaseorderreceipts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|goodsReceiptNumber|query|string|true|Goods receipt number for a purchase order line item receipt. This parameter can be used alone or in combination with the other two parameters.|
|purchaseOrderNumber|query|string|true|The purchase order number. This parameter can be used alone or in combination with the other two parameters.|
|lineItemExternalID|query|string|false|A value that uniquely identifies the line item within the purchase order. This parameter cannot be used alone. It must be used in combination with one or more of the other available parameters.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="delete__invoice_purchaseorderreceipts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|

<aside class="success">
This operation does not require authentication
</aside>

### Schemas

<h3 id="tocS_PurchaseOrderReceipt">PurchaseOrderReceipt</h3>

<a id="schemapurchaseorderreceipt"></a>
<a id="schema_PurchaseOrderReceipt"></a>
<a id="tocSpurchaseorderreceipt"></a>
<a id="tocspurchaseorderreceipt"></a>

```json
{
  "Custom1": "string",
  "Custom10": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Deleted": "string",
  "DeliverySlipNumber": "string",
  "GoodsReceiptNumber": "string",
  "ID": "string",
  "LineItemExternalID": "string",
  "PurchaseOrderNumber": "string",
  "ReceivedDate": "string",
  "ReceivedQuantity": "string",
  "UnitOfMeasureCode": "string",
  "URI": "string",
  "Version": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Custom1|string|false|none|Custom 1 value for purchase order line item receipt.|
|Custom10|string|false|none|Custom 10 value for purchase order line item receipt.|
|Custom2|string|false|none|Custom 2 value for purchase order line item receipt.|
|Custom3|string|false|none|Custom 3 value for purchase order line item receipt.|
|Custom4|string|false|none|Custom 4 value for purchase order line item receipt.|
|Custom5|string|false|none|Custom 5 value for purchase order line item receipt.|
|Custom6|string|false|none|Custom 6 value for purchase order line item receipt.|
|Custom7|string|false|none|Custom 7 value for purchase order line item receipt.|
|Custom8|string|false|none|Custom 8 value for purchase order line item receipt.|
|Custom9|string|false|none|Custom 9 value for purchase order line item receipt.|
|Deleted|string|false|none|Delete status of purchase order line item receipt.|
|DeliverySlipNumber|string|false|none|Delivery slip number for a purchase order line item receipt.|
|GoodsReceiptNumber|string|false|none|Goods receipt number for a purchase order line item receipt. This field is Required for V2 Version when using Concur Receiving.|
|ID|string|false|none|The unique identifier of the resource.|
|LineItemExternalID|string|true|none|A customer-supplied value that uniquely identifies the line item within the purchase order.|
|PurchaseOrderNumber|string|true|none|The purchase order number.|
|ReceivedDate|string|false|none|The date the line item was received. Format: YYYY-MM-DD|
|ReceivedQuantity|string|false|none|The number of items that were received.|
|UnitOfMeasureCode|string|false|none|Unit of measure code for a purchase order line item receipt.|
|URI|string|false|none|The URI to the resource.|
|Version|string|false|none|The version of purchase order line item receipt. Use Version 2.0 here unless doing receipt confirmation only.|

<h3 id="tocS_PurchaseOrderReceiptResult">PurchaseOrderReceiptResult</h3>

<a id="schemapurchaseorderreceiptresult"></a>
<a id="schema_PurchaseOrderReceiptResult"></a>
<a id="tocSpurchaseorderreceiptresult"></a>
<a id="tocspurchaseorderreceiptresult"></a>

```json
{
  "ErrorCode": "string",
  "ErrorMessage": "string",
  "FieldCode": "string",
  "LineItemExternalID": "string",
  "Message": "string",
  "PurchaseOrderNumber": "string",
  "Status": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|string|false|none|A code that indicates why the purchase order receipt was not processed successfully.|
|ErrorMessage|string|false|none|A description of the error.|
|FieldCode|string|false|none|A code that indicates which field caused an issue.|
|LineItemExternalID|string|false|none|The external ID of a line item that caused an error.|
|Message|string|false|none|Message of request result.|
|PurchaseOrderNumber|string|false|none|The purchase order number.|
|Status|string|false|none|The result of processing the purchase order receipt. Format: SUCCESS or FAILURE|

<h3 id="tocS_ReceiptsCollection">ReceiptsCollection</h3>

<a id="schemareceiptscollection"></a>
<a id="schema_ReceiptsCollection"></a>
<a id="tocSreceiptscollection"></a>
<a id="tocsreceiptscollection"></a>

```json
{
  "Items": {
    "Custom1": "string",
    "Custom10": "string",
    "Custom2": "string",
    "Custom3": "string",
    "Custom4": "string",
    "Custom5": "string",
    "Custom6": "string",
    "Custom7": "string",
    "Custom8": "string",
    "Custom9": "string",
    "Deleted": "string",
    "DeliverySlipNumber": "string",
    "GoodsReceiptNumber": "string",
    "ID": "string",
    "LineItemExternalID": "string",
    "PurchaseOrderNumber": "string",
    "ReceivedDate": "string",
    "ReceivedQuantity": "string",
    "UnitOfMeasureCode": "string",
    "URI": "string",
    "Version": "string"
  },
  "NextPage": "string",
  "TotalCount": 0,
  "Info": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[PurchaseOrderReceipt](#schemapurchaseorderreceipt)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any|
|TotalCount|integer(int32)|false|none|Total number of receipts|
|Info|string|false|none|Any additional information messages|

<h3 id="tocS_Void">Void</h3>

<a id="schemavoid"></a>
<a id="schema_Void"></a>
<a id="tocSvoid"></a>
<a id="tocsvoid"></a>

```json
{}

```

### Properties

*None*

