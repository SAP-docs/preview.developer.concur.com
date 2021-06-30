---
title: Sales Tax Validation Request v3.0
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

<h1 id="sales-tax-validation-request">Sales Tax Validation Request v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An invoice is a bill of sale for goods or services. This API provides invoice information so that clients can calculate appropriate sales tax for invoice items. It also allows clients to update the invoice with the calculated sales tax.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

# Authentication

- oAuth2 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication information</a> for more information.

    - Flow: clientCredentials

    - Token URL = [https://us.api.concursolutions.com/oauth2/v0](https://us.api.concursolutions.com/oauth2/v0)

<h1 id="sales-tax-validation-request-resources">Resources</h1>

## get__invoice_salestaxvalidationrequest

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /invoice/salestaxvalidationrequest`

*Get invoices*

Gets invoices for the purpose of calculating sales tax.

<h3 id="get__invoice_salestaxvalidationrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|The starting point of the next set of results, after the limit specified in the limit field has been reached.|
|limit|query|integer(int32)|false|The number of invoices to retrieve. Maximum value: 1000|
|modifiedafter|query|string|false|A parameter that can be used to limit the results to invoices modified after the specified date.|

> Example responses

> 200 Response

```json
{
  "Items": {
    "BillToAddress": {
      "Address1": "string",
      "Address2": "string",
      "Address3": "string",
      "City": "string",
      "CountryCode": "string",
      "ExternalID": "string",
      "Name": "string",
      "PostalCode": "string",
      "State": "string",
      "StateProvince": "string"
    },
    "CalculatedTaxAmount": "string",
    "CalculatedTaxRate": "string",
    "CountryCode": "string",
    "CurrencyCode": "string",
    "ID": "string",
    "InvoiceAmount": "string",
    "InvoiceDate": "string",
    "LineItem": {
      "CalculatedTaxAmount": "string",
      "CalculatedTaxRate": "string",
      "CommodityCode": "string",
      "CountryCode": "string",
      "CurrencyCode": "string",
      "LineItemKey": "string",
      "Quantity": "string",
      "Total": "string",
      "UnitPrice": "string",
      "Vendor": {
        "Address1": "string",
        "Address2": "string",
        "Address3": "string",
        "City": "string",
        "CountryCode": "string",
        "PostalCode": "string",
        "State": "string",
        "VendorAddressName": "string",
        "VendorName": "string"
      }
    },
    "PurchaseOrderNumber": "string",
    "RequestID": "string",
    "ShippingAmount": "string",
    "ShipToAddress": {
      "Address1": "string",
      "Address2": "string",
      "Address3": "string",
      "City": "string",
      "CountryCode": "string",
      "ExternalID": "string",
      "Name": "string",
      "PostalCode": "string",
      "State": "string",
      "StateProvince": "string"
    },
    "Status": "string",
    "StatusCode": "string",
    "Tax": "string",
    "TaxReferenceID": "string",
    "Title": "string",
    "Total": "string",
    "URI": "string",
    "VendorInvoiceNumber": "string"
  },
  "NextPage": "string",
  "TotalCount": 0
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<InvoiceGetCollection>
  <Items>
    <BillToAddress>
      <Address1>string</Address1>
      <Address2>string</Address2>
      <Address3>string</Address3>
      <City>string</City>
      <CountryCode>string</CountryCode>
      <ExternalID>string</ExternalID>
      <Name>string</Name>
      <PostalCode>string</PostalCode>
      <State>string</State>
      <StateProvince>string</StateProvince>
    </BillToAddress>
    <CalculatedTaxAmount>string</CalculatedTaxAmount>
    <CalculatedTaxRate>string</CalculatedTaxRate>
    <CountryCode>string</CountryCode>
    <CurrencyCode>string</CurrencyCode>
    <ID>string</ID>
    <InvoiceAmount>string</InvoiceAmount>
    <InvoiceDate>string</InvoiceDate>
    <LineItem>
      <CalculatedTaxAmount>string</CalculatedTaxAmount>
      <CalculatedTaxRate>string</CalculatedTaxRate>
      <CommodityCode>string</CommodityCode>
      <CountryCode>string</CountryCode>
      <CurrencyCode>string</CurrencyCode>
      <LineItemKey>string</LineItemKey>
      <Quantity>string</Quantity>
      <Total>string</Total>
      <UnitPrice>string</UnitPrice>
      <Vendor>
        <Address1>string</Address1>
        <Address2>string</Address2>
        <Address3>string</Address3>
        <City>string</City>
        <CountryCode>string</CountryCode>
        <PostalCode>string</PostalCode>
        <State>string</State>
        <VendorAddressName>string</VendorAddressName>
        <VendorName>string</VendorName>
      </Vendor>
    </LineItem>
    <PurchaseOrderNumber>string</PurchaseOrderNumber>
    <RequestID>string</RequestID>
    <ShippingAmount>string</ShippingAmount>
    <ShipToAddress>
      <Address1>string</Address1>
      <Address2>string</Address2>
      <Address3>string</Address3>
      <City>string</City>
      <CountryCode>string</CountryCode>
      <ExternalID>string</ExternalID>
      <Name>string</Name>
      <PostalCode>string</PostalCode>
      <State>string</State>
      <StateProvince>string</StateProvince>
    </ShipToAddress>
    <Status>string</Status>
    <StatusCode>string</StatusCode>
    <Tax>string</Tax>
    <TaxReferenceID>string</TaxReferenceID>
    <Title>string</Title>
    <Total>string</Total>
    <URI>string</URI>
    <VendorInvoiceNumber>string</VendorInvoiceNumber>
  </Items>
  <NextPage>string</NextPage>
  <TotalCount>0</TotalCount>
</InvoiceGetCollection>
```

<h3 id="get__invoice_salestaxvalidationrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[InvoiceGetCollection](#schemainvoicegetcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## put__invoice_salestaxvalidationrequest

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "CalculatedTaxAmount": "string",
  "CalculatedTaxRate": "string",
  "Comments": "string",
  "ID": "string",
  "LineItem": {
    "CalculatedTaxAmount": "string",
    "CalculatedTaxRate": "string",
    "LineItemKey": "string"
  },
  "Status": "string",
  "StatusCode": "string",
  "TaxReferenceID": "string",
  "URI": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest',
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
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.put('https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest");
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
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /invoice/salestaxvalidationrequest`

*Update invoices with the calculated tax information*

Updates the specified invoices with the calculated tax amount and tax rate.

> Body parameter

```json
{
  "CalculatedTaxAmount": "string",
  "CalculatedTaxRate": "string",
  "Comments": "string",
  "ID": "string",
  "LineItem": {
    "CalculatedTaxAmount": "string",
    "CalculatedTaxRate": "string",
    "LineItemKey": "string"
  },
  "Status": "string",
  "StatusCode": "string",
  "TaxReferenceID": "string",
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Invoice>
  <CalculatedTaxAmount>string</CalculatedTaxAmount>
  <CalculatedTaxRate>string</CalculatedTaxRate>
  <Comments>string</Comments>
  <ID>string</ID>
  <LineItem>
    <CalculatedTaxAmount>string</CalculatedTaxAmount>
    <CalculatedTaxRate>string</CalculatedTaxRate>
    <LineItemKey>string</LineItemKey>
  </LineItem>
  <Status>string</Status>
  <StatusCode>string</StatusCode>
  <TaxReferenceID>string</TaxReferenceID>
  <URI>string</URI>
</Invoice>
```

<h3 id="put__invoice_salestaxvalidationrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Invoice](#schemainvoice)|true|The tax information for the invoice that is to be updated.|

> Example responses

> 200 Response

```json
{
  "Code": 0,
  "Comments": "string",
  "Message": "string",
  "RecordNumber": 0,
  "Status": "string",
  "TaxReferenceID": "string",
  "Type": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<InvoiceStatus>
  <Code>0</Code>
  <Comments>string</Comments>
  <Message>string</Message>
  <RecordNumber>0</RecordNumber>
  <Status>string</Status>
  <TaxReferenceID>string</TaxReferenceID>
  <Type>string</Type>
</InvoiceStatus>
```

<h3 id="put__invoice_salestaxvalidationrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[InvoiceStatus](#schemainvoicestatus)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_BillToAddress">BillToAddress</h2>

<a id="schemabilltoaddress"></a>
<a id="schema_BillToAddress"></a>
<a id="tocSbilltoaddress"></a>
<a id="tocsbilltoaddress"></a>

```json
{
  "Address1": "string",
  "Address2": "string",
  "Address3": "string",
  "City": "string",
  "CountryCode": "string",
  "ExternalID": "string",
  "Name": "string",
  "PostalCode": "string",
  "State": "string",
  "StateProvince": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address1|string|false|none|Address line 1 of the shipping or billing address.|
|Address2|string|false|none|Address line 2 of the shipping or billing address.|
|Address3|string|false|none|Address line 3 of the shipping or billing address.|
|City|string|false|none|The city of the shipping or billing address.|
|CountryCode|string|false|none|The code of the country for the shipping or billing address.|
|ExternalID|string|false|none|A unique value supplied by the customer to identify a particular shipping or billing address.|
|Name|string|false|none|An optional name that can be given to the shipping or billing address.|
|PostalCode|string|false|none|The postal code of the shipping or billing address.|
|State|string|false|none|The state or province of the shipping or billing address.|
|StateProvince|string|false|none|The state or province of the shipping or billing address.|

<h2 id="tocS_Invoice">Invoice</h2>

<a id="schemainvoice"></a>
<a id="schema_Invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "CalculatedTaxAmount": "string",
  "CalculatedTaxRate": "string",
  "Comments": "string",
  "ID": "string",
  "LineItem": {
    "CalculatedTaxAmount": "string",
    "CalculatedTaxRate": "string",
    "LineItemKey": "string"
  },
  "Status": "string",
  "StatusCode": "string",
  "TaxReferenceID": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculatedTaxAmount|string|false|none|The calculated tax amount for the invoice.|
|CalculatedTaxRate|string|false|none|The calculated tax rate for the invoice.|
|Comments|string|false|none|Comments for the invoice.|
|ID|string|false|none|The unique identifier of the resource.|
|LineItem|[InvoiceLineItemPut](#schemainvoicelineitemput)|false|none|none|
|Status|string|false|none|The status of the invoice.|
|StatusCode|string|false|none|The status code that indicates the outcome of tax validation. Supported values: ERROR, CMPLT|
|TaxReferenceID|string|false|none|The tax reference ID of the invoice.|
|URI|string|false|none|The URI to the resource.|

<h2 id="tocS_InvoiceGet">InvoiceGet</h2>

<a id="schemainvoiceget"></a>
<a id="schema_InvoiceGet"></a>
<a id="tocSinvoiceget"></a>
<a id="tocsinvoiceget"></a>

```json
{
  "BillToAddress": {
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "City": "string",
    "CountryCode": "string",
    "ExternalID": "string",
    "Name": "string",
    "PostalCode": "string",
    "State": "string",
    "StateProvince": "string"
  },
  "CalculatedTaxAmount": "string",
  "CalculatedTaxRate": "string",
  "CountryCode": "string",
  "CurrencyCode": "string",
  "ID": "string",
  "InvoiceAmount": "string",
  "InvoiceDate": "string",
  "LineItem": {
    "CalculatedTaxAmount": "string",
    "CalculatedTaxRate": "string",
    "CommodityCode": "string",
    "CountryCode": "string",
    "CurrencyCode": "string",
    "LineItemKey": "string",
    "Quantity": "string",
    "Total": "string",
    "UnitPrice": "string",
    "Vendor": {
      "Address1": "string",
      "Address2": "string",
      "Address3": "string",
      "City": "string",
      "CountryCode": "string",
      "PostalCode": "string",
      "State": "string",
      "VendorAddressName": "string",
      "VendorName": "string"
    }
  },
  "PurchaseOrderNumber": "string",
  "RequestID": "string",
  "ShippingAmount": "string",
  "ShipToAddress": {
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "City": "string",
    "CountryCode": "string",
    "ExternalID": "string",
    "Name": "string",
    "PostalCode": "string",
    "State": "string",
    "StateProvince": "string"
  },
  "Status": "string",
  "StatusCode": "string",
  "Tax": "string",
  "TaxReferenceID": "string",
  "Title": "string",
  "Total": "string",
  "URI": "string",
  "VendorInvoiceNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BillToAddress|[BillToAddress](#schemabilltoaddress)|false|none|none|
|CalculatedTaxAmount|string|false|none|The calculated tax amount for the invoice.|
|CalculatedTaxRate|string|false|none|The calculated tax rate for the invoice.|
|CountryCode|string|false|none|The country code for the line item.|
|CurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the invoice currency. For example, USD or CAD.|
|ID|string|false|none|The unique identifier of the resource.|
|InvoiceAmount|string|false|none|The invoice amount (the cost of the purchased items).|
|InvoiceDate|string|false|none|The invoice date.|
|LineItem|[InvoiceLineItem](#schemainvoicelineitem)|false|none|none|
|PurchaseOrderNumber|string|false|none|The purchase order number for the purchase order associated with the invoice.|
|RequestID|string|false|none|The request ID of the payment request|
|ShippingAmount|string|false|none|The shipping amount for the invoice.|
|ShipToAddress|[ShipToAddress](#schemashiptoaddress)|false|none|none|
|Status|string|false|none|The status of the invoice.|
|StatusCode|string|false|none|The status code that indicates the outcome of tax validation. Supported values: ERROR, CMPLT|
|Tax|string|false|none|The tax as shown on the invoice. This is the tax applied by the vendor.|
|TaxReferenceID|string|false|none|The tax reference ID of the invoice.|
|Title|string|false|none|The title of the invoice.|
|Total|string|false|none|The total amount of the request.|
|URI|string|false|none|The URI to the resource.|
|VendorInvoiceNumber|string|false|none|The vendor invoice number that is associated with the invoice.|

<h2 id="tocS_InvoiceGetCollection">InvoiceGetCollection</h2>

<a id="schemainvoicegetcollection"></a>
<a id="schema_InvoiceGetCollection"></a>
<a id="tocSinvoicegetcollection"></a>
<a id="tocsinvoicegetcollection"></a>

```json
{
  "Items": {
    "BillToAddress": {
      "Address1": "string",
      "Address2": "string",
      "Address3": "string",
      "City": "string",
      "CountryCode": "string",
      "ExternalID": "string",
      "Name": "string",
      "PostalCode": "string",
      "State": "string",
      "StateProvince": "string"
    },
    "CalculatedTaxAmount": "string",
    "CalculatedTaxRate": "string",
    "CountryCode": "string",
    "CurrencyCode": "string",
    "ID": "string",
    "InvoiceAmount": "string",
    "InvoiceDate": "string",
    "LineItem": {
      "CalculatedTaxAmount": "string",
      "CalculatedTaxRate": "string",
      "CommodityCode": "string",
      "CountryCode": "string",
      "CurrencyCode": "string",
      "LineItemKey": "string",
      "Quantity": "string",
      "Total": "string",
      "UnitPrice": "string",
      "Vendor": {
        "Address1": "string",
        "Address2": "string",
        "Address3": "string",
        "City": "string",
        "CountryCode": "string",
        "PostalCode": "string",
        "State": "string",
        "VendorAddressName": "string",
        "VendorName": "string"
      }
    },
    "PurchaseOrderNumber": "string",
    "RequestID": "string",
    "ShippingAmount": "string",
    "ShipToAddress": {
      "Address1": "string",
      "Address2": "string",
      "Address3": "string",
      "City": "string",
      "CountryCode": "string",
      "ExternalID": "string",
      "Name": "string",
      "PostalCode": "string",
      "State": "string",
      "StateProvince": "string"
    },
    "Status": "string",
    "StatusCode": "string",
    "Tax": "string",
    "TaxReferenceID": "string",
    "Title": "string",
    "Total": "string",
    "URI": "string",
    "VendorInvoiceNumber": "string"
  },
  "NextPage": "string",
  "TotalCount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[InvoiceGet](#schemainvoiceget)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|
|TotalCount|integer(int32)|false|none|none|

<h2 id="tocS_InvoiceLineItem">InvoiceLineItem</h2>

<a id="schemainvoicelineitem"></a>
<a id="schema_InvoiceLineItem"></a>
<a id="tocSinvoicelineitem"></a>
<a id="tocsinvoicelineitem"></a>

```json
{
  "CalculatedTaxAmount": "string",
  "CalculatedTaxRate": "string",
  "CommodityCode": "string",
  "CountryCode": "string",
  "CurrencyCode": "string",
  "LineItemKey": "string",
  "Quantity": "string",
  "Total": "string",
  "UnitPrice": "string",
  "Vendor": {
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "City": "string",
    "CountryCode": "string",
    "PostalCode": "string",
    "State": "string",
    "VendorAddressName": "string",
    "VendorName": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculatedTaxAmount|string|false|none|The calculated tax amount for the individual line item.|
|CalculatedTaxRate|string|false|none|The calculated tax rate for the individual line item.|
|CommodityCode|string|false|none|The commodity code that is tied to the expense type associated with the line item.|
|CountryCode|string|false|none|The country code for the line item.|
|CurrencyCode|string|false|none|The currency code for the individual line item.|
|LineItemKey|string|false|none|A value that uniquely identifies the line item.|
|Quantity|string|false|none|The quantity for the line item.|
|Total|string|false|none|The total amount for the line item.|
|UnitPrice|string|false|none|The unit price for the line item.|
|Vendor|[InvoiceVendor](#schemainvoicevendor)|false|none|none|

<h2 id="tocS_InvoiceLineItemPut">InvoiceLineItemPut</h2>

<a id="schemainvoicelineitemput"></a>
<a id="schema_InvoiceLineItemPut"></a>
<a id="tocSinvoicelineitemput"></a>
<a id="tocsinvoicelineitemput"></a>

```json
{
  "CalculatedTaxAmount": "string",
  "CalculatedTaxRate": "string",
  "LineItemKey": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculatedTaxAmount|string|false|none|The calculated tax amount for the individual line item.|
|CalculatedTaxRate|string|false|none|The calculated tax rate for the individual line item.|
|LineItemKey|string|false|none|A value that uniquely identifies the line item.|

<h2 id="tocS_InvoiceStatus">InvoiceStatus</h2>

<a id="schemainvoicestatus"></a>
<a id="schema_InvoiceStatus"></a>
<a id="tocSinvoicestatus"></a>
<a id="tocsinvoicestatus"></a>

```json
{
  "Code": 0,
  "Comments": "string",
  "Message": "string",
  "RecordNumber": 0,
  "Status": "string",
  "TaxReferenceID": "string",
  "Type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|integer(int32)|false|none|Code of request result|
|Comments|string|false|none|Comments that are returned for the update request.|
|Message|string|false|none|Message of request result|
|RecordNumber|integer(int32)|false|none|Record Number for create/update request.|
|Status|string|false|none|The status of the update. Supported values: SUCCESS, FAILURE|
|TaxReferenceID|string|false|none|The tax reference ID of the updated invoice.|
|Type|string|false|none|Type request result|

<h2 id="tocS_InvoiceVendor">InvoiceVendor</h2>

<a id="schemainvoicevendor"></a>
<a id="schema_InvoiceVendor"></a>
<a id="tocSinvoicevendor"></a>
<a id="tocsinvoicevendor"></a>

```json
{
  "Address1": "string",
  "Address2": "string",
  "Address3": "string",
  "City": "string",
  "CountryCode": "string",
  "PostalCode": "string",
  "State": "string",
  "VendorAddressName": "string",
  "VendorName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address1|string|false|none|The Vendor Address 1.|
|Address2|string|false|none|The Vendor Address 2.|
|Address3|string|false|none|The Vendor Address 3.|
|City|string|false|none|The Vendor City.|
|CountryCode|string|false|none|The Vendor Country Code.|
|PostalCode|string|false|none|The Vendor Postal Code / Zip.|
|State|string|false|none|The Vendor State.|
|VendorAddressName|string|false|none|Name for Vendor Address.|
|VendorName|string|false|none|The name of the vendor.|

<h2 id="tocS_ShipToAddress">ShipToAddress</h2>

<a id="schemashiptoaddress"></a>
<a id="schema_ShipToAddress"></a>
<a id="tocSshiptoaddress"></a>
<a id="tocsshiptoaddress"></a>

```json
{
  "Address1": "string",
  "Address2": "string",
  "Address3": "string",
  "City": "string",
  "CountryCode": "string",
  "ExternalID": "string",
  "Name": "string",
  "PostalCode": "string",
  "State": "string",
  "StateProvince": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address1|string|false|none|Address line 1 of the shipping or billing address.|
|Address2|string|false|none|Address line 2 of the shipping or billing address.|
|Address3|string|false|none|Address line 3 of the shipping or billing address.|
|City|string|false|none|The city of the shipping or billing address.|
|CountryCode|string|false|none|The code of the country for the shipping or billing address.|
|ExternalID|string|false|none|A unique value supplied by the customer to identify a particular shipping or billing address.|
|Name|string|false|none|An optional name that can be given to the shipping or billing address.|
|PostalCode|string|false|none|The postal code of the shipping or billing address.|
|State|string|false|none|The state or province of the shipping or billing address.|
|StateProvince|string|false|none|The state or province of the shipping or billing address.|

<h2 id="tocS_Void">Void</h2>

<a id="schemavoid"></a>
<a id="schema_Void"></a>
<a id="tocSvoid"></a>
<a id="tocsvoid"></a>

```json
{}

```

### Properties

*None*

