---
title: Payment Request Digest v3.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
generator: widdershins v4.0.1

---

<h1 id="payment-request-digest">Payment Request Digest v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A payment request digest is a collection of summarized payment requests to invoice vendors. This API provides methods to view all payment requests corresponding to search parameters, or view a payment request digest by ID.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

# Authentication

- oAuth2 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication information</a> for more information.

    - Flow: clientCredentials

    - Token URL = [https://us.api.concursolutions.com/oauth2/v0](https://us.api.concursolutions.com/oauth2/v0)

<h1 id="payment-request-digest-resources">Resources</h1>

## get__invoice_paymentrequestdigests_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests/{id}',
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
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests/{id}");
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
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /invoice/paymentrequestdigests/{id}`

*Get payment request digest*

Returns the specified payment request digest. 

<h3 id="get__invoice_paymentrequestdigests_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The payment request ID|

> Example responses

> 200 Response

```json
{
  "ApprovalStatusCode": "string",
  "CreateDate": "string",
  "CurrencyCode": "string",
  "ID": "string",
  "InvoiceNumber": "string",
  "IsDeleted": "string",
  "OwnerLoginID": "string",
  "OwnerName": "string",
  "PaidDate": "string",
  "PaymentRequestId": "string",
  "PaymentRequestUri": "string",
  "PaymentStatusCode": "string",
  "PurchaseOrderNumber": "string",
  "Total": "string",
  "URI": "string",
  "UserDefinedDate": "string",
  "VendorName": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PaymentRequestDigest>
  <ApprovalStatusCode>string</ApprovalStatusCode>
  <CreateDate>string</CreateDate>
  <CurrencyCode>string</CurrencyCode>
  <ID>string</ID>
  <InvoiceNumber>string</InvoiceNumber>
  <IsDeleted>string</IsDeleted>
  <OwnerLoginID>string</OwnerLoginID>
  <OwnerName>string</OwnerName>
  <PaidDate>string</PaidDate>
  <PaymentRequestId>string</PaymentRequestId>
  <PaymentRequestUri>string</PaymentRequestUri>
  <PaymentStatusCode>string</PaymentStatusCode>
  <PurchaseOrderNumber>string</PurchaseOrderNumber>
  <Total>string</Total>
  <URI>string</URI>
  <UserDefinedDate>string</UserDefinedDate>
  <VendorName>string</VendorName>
</PaymentRequestDigest>
```

<h3 id="get__invoice_paymentrequestdigests_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentRequestDigest](#schemapaymentrequestdigest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## get__invoice_paymentrequestdigests

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests',
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
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests");
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
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/invoice/paymentrequestdigests", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /invoice/paymentrequestdigests`

*Get all payment requests digests*

Returns all payment requests digests based on the search criteria.

<h3 id="get__invoice_paymentrequestdigests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|The start of the page offset.|
|limit|query|integer(int32)|false|The number of records to return (default 1000).|
|approvalStatus|query|string|false|A code representing a payment request approval status. Use "GET /invoice/localizeddata" to get the available approval status codes.|
|paymentStatus|query|string|false|A code representing a Payment Request Payment Status. Use "GET /invoice/localizeddata" to get the available payment status codes|
|vendorInvoiceNumber|query|string|false|Vendor invoice number tied to invoice.|
|createDateBefore|query|string(date-time)|false|The payment request create date is before this date. Format: YYYY-MM-DD|
|createDateAfter|query|string(date-time)|false|The payment request create date is after this date. Format: YYYY-MM-DD|
|userDefinedDateBefore|query|string(date-time)|false|The payment request user defined date is before this date. Format: YYYY-MM-DD|
|userDefinedDateAfter|query|string(date-time)|false|The payment request user defined date is after this date. Format: YYYY-MM-DD|
|submitDateBefore|query|string(date-time)|false|The payment request submit date is before this date. Format: YYYY-MM-DD|
|submitDateAfter|query|string(date-time)|false|The payment request submit date is after this date. Format: YYYY-MM-DD|
|paidDateBefore|query|string(date-time)|false|The payment request paid date is before this date. Format: YYYY-MM-DD|
|paidDateAfter|query|string(date-time)|false|The payment request paid date is after this date. Format: YYYY-MM-DD|

> Example responses

> 200 Response

```json
{
  "Items": {
    "ApprovalStatusCode": "string",
    "CreateDate": "string",
    "CurrencyCode": "string",
    "ID": "string",
    "InvoiceNumber": "string",
    "IsDeleted": "string",
    "OwnerLoginID": "string",
    "OwnerName": "string",
    "PaidDate": "string",
    "PaymentRequestId": "string",
    "PaymentRequestUri": "string",
    "PaymentStatusCode": "string",
    "PurchaseOrderNumber": "string",
    "Total": "string",
    "URI": "string",
    "UserDefinedDate": "string",
    "VendorName": "string"
  },
  "NextPage": "string",
  "PaymentRequestDigest": {
    "ApprovalStatusCode": "string",
    "CreateDate": "string",
    "CurrencyCode": "string",
    "ID": "string",
    "InvoiceNumber": "string",
    "IsDeleted": "string",
    "OwnerLoginID": "string",
    "OwnerName": "string",
    "PaidDate": "string",
    "PaymentRequestId": "string",
    "PaymentRequestUri": "string",
    "PaymentStatusCode": "string",
    "PurchaseOrderNumber": "string",
    "Total": "string",
    "URI": "string",
    "UserDefinedDate": "string",
    "VendorName": "string"
  },
  "TotalCount": 0
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PaymentRequestDigestCollection>
  <Items>
    <ApprovalStatusCode>string</ApprovalStatusCode>
    <CreateDate>string</CreateDate>
    <CurrencyCode>string</CurrencyCode>
    <ID>string</ID>
    <InvoiceNumber>string</InvoiceNumber>
    <IsDeleted>string</IsDeleted>
    <OwnerLoginID>string</OwnerLoginID>
    <OwnerName>string</OwnerName>
    <PaidDate>string</PaidDate>
    <PaymentRequestId>string</PaymentRequestId>
    <PaymentRequestUri>string</PaymentRequestUri>
    <PaymentStatusCode>string</PaymentStatusCode>
    <PurchaseOrderNumber>string</PurchaseOrderNumber>
    <Total>string</Total>
    <URI>string</URI>
    <UserDefinedDate>string</UserDefinedDate>
    <VendorName>string</VendorName>
  </Items>
  <NextPage>string</NextPage>
  <PaymentRequestDigest>
    <ApprovalStatusCode>string</ApprovalStatusCode>
    <CreateDate>string</CreateDate>
    <CurrencyCode>string</CurrencyCode>
    <ID>string</ID>
    <InvoiceNumber>string</InvoiceNumber>
    <IsDeleted>string</IsDeleted>
    <OwnerLoginID>string</OwnerLoginID>
    <OwnerName>string</OwnerName>
    <PaidDate>string</PaidDate>
    <PaymentRequestId>string</PaymentRequestId>
    <PaymentRequestUri>string</PaymentRequestUri>
    <PaymentStatusCode>string</PaymentStatusCode>
    <PurchaseOrderNumber>string</PurchaseOrderNumber>
    <Total>string</Total>
    <URI>string</URI>
    <UserDefinedDate>string</UserDefinedDate>
    <VendorName>string</VendorName>
  </PaymentRequestDigest>
  <TotalCount>0</TotalCount>
</PaymentRequestDigestCollection>
```

<h3 id="get__invoice_paymentrequestdigests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentRequestDigestCollection](#schemapaymentrequestdigestcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_PaymentRequestDigest">PaymentRequestDigest</h2>

<a id="schemapaymentrequestdigest"></a>
<a id="schema_PaymentRequestDigest"></a>
<a id="tocSpaymentrequestdigest"></a>
<a id="tocspaymentrequestdigest"></a>

```json
{
  "ApprovalStatusCode": "string",
  "CreateDate": "string",
  "CurrencyCode": "string",
  "ID": "string",
  "InvoiceNumber": "string",
  "IsDeleted": "string",
  "OwnerLoginID": "string",
  "OwnerName": "string",
  "PaidDate": "string",
  "PaymentRequestId": "string",
  "PaymentRequestUri": "string",
  "PaymentStatusCode": "string",
  "PurchaseOrderNumber": "string",
  "Total": "string",
  "URI": "string",
  "UserDefinedDate": "string",
  "VendorName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApprovalStatusCode|string|false|none|A code indicating the request's approval status.|
|CreateDate|string|false|none|The date the request was created.|
|CurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the request currency. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona.|
|ID|string|false|none|The unique identifier of the resource.|
|InvoiceNumber|string|false|none|The invoice number of the payment request.|
|IsDeleted|string|false|none|A true/false value which indicates whether the request has been deleted. Deleted requests are retained in the system for historical purposes.|
|OwnerLoginID|string|false|none|The login ID of the payment request owner.|
|OwnerName|string|false|none|The name of the payment request owner.|
|PaidDate|string|false|none|The date when all journal entries in the request were integrated with or extracted to the financial system.|
|PaymentRequestId|string|false|none|The unique identifier of the payment request summarized in this digest.|
|PaymentRequestUri|string|false|none|The URI of the payment request summarized in this digest.|
|PaymentStatusCode|string|false|none|A code indicating the request's payment status.|
|PurchaseOrderNumber|string|false|none|The purchase order number for the purchase order associated with the invoice.|
|Total|string|false|none|The total amount of the request.|
|URI|string|false|none|The URI to the resource.|
|UserDefinedDate|string|false|none|The invoice date as assigned by the user.|
|VendorName|string|false|none|The name of the vendor.|

<h2 id="tocS_PaymentRequestDigestCollection">PaymentRequestDigestCollection</h2>

<a id="schemapaymentrequestdigestcollection"></a>
<a id="schema_PaymentRequestDigestCollection"></a>
<a id="tocSpaymentrequestdigestcollection"></a>
<a id="tocspaymentrequestdigestcollection"></a>

```json
{
  "Items": {
    "ApprovalStatusCode": "string",
    "CreateDate": "string",
    "CurrencyCode": "string",
    "ID": "string",
    "InvoiceNumber": "string",
    "IsDeleted": "string",
    "OwnerLoginID": "string",
    "OwnerName": "string",
    "PaidDate": "string",
    "PaymentRequestId": "string",
    "PaymentRequestUri": "string",
    "PaymentStatusCode": "string",
    "PurchaseOrderNumber": "string",
    "Total": "string",
    "URI": "string",
    "UserDefinedDate": "string",
    "VendorName": "string"
  },
  "NextPage": "string",
  "PaymentRequestDigest": {
    "ApprovalStatusCode": "string",
    "CreateDate": "string",
    "CurrencyCode": "string",
    "ID": "string",
    "InvoiceNumber": "string",
    "IsDeleted": "string",
    "OwnerLoginID": "string",
    "OwnerName": "string",
    "PaidDate": "string",
    "PaymentRequestId": "string",
    "PaymentRequestUri": "string",
    "PaymentStatusCode": "string",
    "PurchaseOrderNumber": "string",
    "Total": "string",
    "URI": "string",
    "UserDefinedDate": "string",
    "VendorName": "string"
  },
  "TotalCount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[PaymentRequestDigest](#schemapaymentrequestdigest)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|
|PaymentRequestDigest|[PaymentRequestDigest](#schemapaymentrequestdigest)|false|none|none|
|TotalCount|integer(int32)|false|none|none|

