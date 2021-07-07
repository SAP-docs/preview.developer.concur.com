---
title: Purchase Orders v3.0
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

<h1 id="purchase-orders">Purchase Orders v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

In Concur Invoice, purchase orders are requests for a vendor to supply goods or services. This API provides methods to create a new purchase order, or view or update an existing purchase order.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

# Authentication

- oAuth2 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication information</a> for more information.

    - Flow: clientCredentials

    - Token URL = [https://us.api.concursolutions.com/oauth2/v0](https://us.api.concursolutions.com/oauth2/v0)

<h1 id="purchase-orders-resources">Resources</h1>

## post__invoice_purchaseorders

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/invoice/purchaseorders \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://www.concursolutions.com/api/v3.0/invoice/purchaseorders HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "AmountWithoutVat": "string",
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
  "CurrencyCode": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "ID": "string",
  "IsTest": true,
  "IsChangeOrder": true,
  "LedgerCode": "string",
  "LineItem": [
    {
      "AccountCode": "string",
      "Allocation": [
        {
          "Amount": "string",
          "Custom1": "string",
          "Custom2": "string",
          "Custom3": "string",
          "Custom4": "string",
          "Custom5": "string",
          "Custom6": "string",
          "Custom7": "string",
          "Custom8": "string",
          "Custom9": "string",
          "Custom10": "string",
          "Custom11": "string",
          "Custom12": "string",
          "Custom13": "string",
          "Custom14": "string",
          "Custom15": "string",
          "Custom16": "string",
          "Custom17": "string",
          "Custom18": "string",
          "Custom19": "string",
          "Custom20": "string",
          "GrossAmount": "string",
          "Percentage": "string"
        }
      ],
      "AmountWithoutVat": "string",
      "CreateDate": "string",
      "Custom1": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom2": "string",
      "Custom20": "string",
      "Custom3": "string",
      "Custom4": "string",
      "Custom5": "string",
      "Custom6": "string",
      "Custom7": "string",
      "Custom8": "string",
      "Custom9": "string",
      "Description": "string",
      "ExpenseType": "string",
      "ExternalID": "string",
      "IsReceiptRequired": "string",
      "LineNumber": "string",
      "PurchaseOrderReceiptType": "string",
      "Quantity": "string",
      "RequestedBy": "string",
      "RequestedDeliveryDate": "string",
      "SupplierPartID": "string",
      "Tax": "string",
      "UnitOfMeasureCode": "string",
      "UnitPrice": "string",
      "VatAmount": "string",
      "VatRate": "string"
    }
  ],
  "Name": "string",
  "NeededByDate": "string",
  "OrderDate": "string",
  "PaymentTerms": "string",
  "PolicyExternalID": "string",
  "PoVendorTaxId": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderNumber": "string",
  "PurchaseRequestNumber": "string",
  "ReceiptType": "string",
  "RequestedBy": "string",
  "RequestedDeliveryDate": "string",
  "Shipping": "string",
  "ShippingDescription": "string",
  "ShippingMethodKey": "string",
  "ShippingTermsKey": "string",
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
  "Tax": "string",
  "URI": "string",
  "VatAmountOne": "string",
  "VatAmountTwo": "string",
  "VatRateOne": "string",
  "VatRateTwo": "string",
  "VendorAccountNumber": "string",
  "VendorAddressCode": "string",
  "VendorCode": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/purchaseorders',
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
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/invoice/purchaseorders',
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

r = requests.post('https://www.concursolutions.com/api/v3.0/invoice/purchaseorders', headers = headers)

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
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/invoice/purchaseorders', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/purchaseorders");
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
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/invoice/purchaseorders", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /invoice/purchaseorders`

*Create a purchase order*

Creates a purchase order and returns the status of the creation request.

> Body parameter

```json
{
  "AmountWithoutVat": "string",
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
  "CurrencyCode": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "ID": "string",
  "IsTest": true,
  "IsChangeOrder": true,
  "LedgerCode": "string",
  "LineItem": [
    {
      "AccountCode": "string",
      "Allocation": [
        {
          "Amount": "string",
          "Custom1": "string",
          "Custom2": "string",
          "Custom3": "string",
          "Custom4": "string",
          "Custom5": "string",
          "Custom6": "string",
          "Custom7": "string",
          "Custom8": "string",
          "Custom9": "string",
          "Custom10": "string",
          "Custom11": "string",
          "Custom12": "string",
          "Custom13": "string",
          "Custom14": "string",
          "Custom15": "string",
          "Custom16": "string",
          "Custom17": "string",
          "Custom18": "string",
          "Custom19": "string",
          "Custom20": "string",
          "GrossAmount": "string",
          "Percentage": "string"
        }
      ],
      "AmountWithoutVat": "string",
      "CreateDate": "string",
      "Custom1": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom2": "string",
      "Custom20": "string",
      "Custom3": "string",
      "Custom4": "string",
      "Custom5": "string",
      "Custom6": "string",
      "Custom7": "string",
      "Custom8": "string",
      "Custom9": "string",
      "Description": "string",
      "ExpenseType": "string",
      "ExternalID": "string",
      "IsReceiptRequired": "string",
      "LineNumber": "string",
      "PurchaseOrderReceiptType": "string",
      "Quantity": "string",
      "RequestedBy": "string",
      "RequestedDeliveryDate": "string",
      "SupplierPartID": "string",
      "Tax": "string",
      "UnitOfMeasureCode": "string",
      "UnitPrice": "string",
      "VatAmount": "string",
      "VatRate": "string"
    }
  ],
  "Name": "string",
  "NeededByDate": "string",
  "OrderDate": "string",
  "PaymentTerms": "string",
  "PolicyExternalID": "string",
  "PoVendorTaxId": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderNumber": "string",
  "PurchaseRequestNumber": "string",
  "ReceiptType": "string",
  "RequestedBy": "string",
  "RequestedDeliveryDate": "string",
  "Shipping": "string",
  "ShippingDescription": "string",
  "ShippingMethodKey": "string",
  "ShippingTermsKey": "string",
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
  "Tax": "string",
  "URI": "string",
  "VatAmountOne": "string",
  "VatAmountTwo": "string",
  "VatRateOne": "string",
  "VatRateTwo": "string",
  "VendorAccountNumber": "string",
  "VendorAddressCode": "string",
  "VendorCode": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PurchaseOrder>
  <AmountWithoutVat>string</AmountWithoutVat>
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
  <CurrencyCode>string</CurrencyCode>
  <Custom1>string</Custom1>
  <Custom10>string</Custom10>
  <Custom11>string</Custom11>
  <Custom12>string</Custom12>
  <Custom13>string</Custom13>
  <Custom14>string</Custom14>
  <Custom15>string</Custom15>
  <Custom16>string</Custom16>
  <Custom17>string</Custom17>
  <Custom18>string</Custom18>
  <Custom19>string</Custom19>
  <Custom2>string</Custom2>
  <Custom20>string</Custom20>
  <Custom21>string</Custom21>
  <Custom22>string</Custom22>
  <Custom23>string</Custom23>
  <Custom24>string</Custom24>
  <Custom3>string</Custom3>
  <Custom4>string</Custom4>
  <Custom5>string</Custom5>
  <Custom6>string</Custom6>
  <Custom7>string</Custom7>
  <Custom8>string</Custom8>
  <Custom9>string</Custom9>
  <Description>string</Description>
  <DiscountPercentage>string</DiscountPercentage>
  <DiscountTerms>string</DiscountTerms>
  <ID>string</ID>
  <IsTest>true</IsTest>
  <IsChangeOrder>true</IsChangeOrder>
  <LedgerCode>string</LedgerCode>
  <LineItem>
    <AccountCode>string</AccountCode>
    <Allocation>
      <Amount>string</Amount>
      <Custom1>string</Custom1>
      <Custom2>string</Custom2>
      <Custom3>string</Custom3>
      <Custom4>string</Custom4>
      <Custom5>string</Custom5>
      <Custom6>string</Custom6>
      <Custom7>string</Custom7>
      <Custom8>string</Custom8>
      <Custom9>string</Custom9>
      <Custom10>string</Custom10>
      <Custom11>string</Custom11>
      <Custom12>string</Custom12>
      <Custom13>string</Custom13>
      <Custom14>string</Custom14>
      <Custom15>string</Custom15>
      <Custom16>string</Custom16>
      <Custom17>string</Custom17>
      <Custom18>string</Custom18>
      <Custom19>string</Custom19>
      <Custom20>string</Custom20>
      <GrossAmount>string</GrossAmount>
      <Percentage>string</Percentage>
    </Allocation>
    <AmountWithoutVat>string</AmountWithoutVat>
    <CreateDate>string</CreateDate>
    <Custom1>string</Custom1>
    <Custom10>string</Custom10>
    <Custom11>string</Custom11>
    <Custom12>string</Custom12>
    <Custom13>string</Custom13>
    <Custom14>string</Custom14>
    <Custom15>string</Custom15>
    <Custom16>string</Custom16>
    <Custom17>string</Custom17>
    <Custom18>string</Custom18>
    <Custom19>string</Custom19>
    <Custom2>string</Custom2>
    <Custom20>string</Custom20>
    <Custom3>string</Custom3>
    <Custom4>string</Custom4>
    <Custom5>string</Custom5>
    <Custom6>string</Custom6>
    <Custom7>string</Custom7>
    <Custom8>string</Custom8>
    <Custom9>string</Custom9>
    <Description>string</Description>
    <ExpenseType>string</ExpenseType>
    <ExternalID>string</ExternalID>
    <IsReceiptRequired>string</IsReceiptRequired>
    <LineNumber>string</LineNumber>
    <PurchaseOrderReceiptType>string</PurchaseOrderReceiptType>
    <Quantity>string</Quantity>
    <RequestedBy>string</RequestedBy>
    <RequestedDeliveryDate>string</RequestedDeliveryDate>
    <SupplierPartID>string</SupplierPartID>
    <Tax>string</Tax>
    <UnitOfMeasureCode>string</UnitOfMeasureCode>
    <UnitPrice>string</UnitPrice>
    <VatAmount>string</VatAmount>
    <VatRate>string</VatRate>
  </LineItem>
  <Name>string</Name>
  <NeededByDate>string</NeededByDate>
  <OrderDate>string</OrderDate>
  <PaymentTerms>string</PaymentTerms>
  <PolicyExternalID>string</PolicyExternalID>
  <PoVendorTaxId>string</PoVendorTaxId>
  <ProvincialTaxId>string</ProvincialTaxId>
  <PurchaseOrderNumber>string</PurchaseOrderNumber>
  <PurchaseRequestNumber>string</PurchaseRequestNumber>
  <ReceiptType>string</ReceiptType>
  <RequestedBy>string</RequestedBy>
  <RequestedDeliveryDate>string</RequestedDeliveryDate>
  <Shipping>string</Shipping>
  <ShippingDescription>string</ShippingDescription>
  <ShippingMethodKey>string</ShippingMethodKey>
  <ShippingTermsKey>string</ShippingTermsKey>
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
  <Tax>string</Tax>
  <URI>string</URI>
  <VatAmountOne>string</VatAmountOne>
  <VatAmountTwo>string</VatAmountTwo>
  <VatRateOne>string</VatRateOne>
  <VatRateTwo>string</VatRateTwo>
  <VendorAccountNumber>string</VendorAccountNumber>
  <VendorAddressCode>string</VendorAddressCode>
  <VendorCode>string</VendorCode>
</PurchaseOrder>
```

<h3 id="post__invoice_purchaseorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PurchaseOrder](#schemapurchaseorder)|true|The details of the purchase order.|

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
<PurchaseOrderResult>
  <ErrorCode>string</ErrorCode>
  <ErrorMessage>string</ErrorMessage>
  <FieldCode>string</FieldCode>
  <LineItemExternalID>string</LineItemExternalID>
  <Message>string</Message>
  <PurchaseOrderNumber>string</PurchaseOrderNumber>
  <Status>string</Status>
</PurchaseOrderResult>
```

<h3 id="post__invoice_purchaseorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PurchaseOrderResult](#schemapurchaseorderresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## put__invoice_purchaseorders

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/invoice/purchaseorders \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://www.concursolutions.com/api/v3.0/invoice/purchaseorders HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "AmountWithoutVat": "string",
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
  "CurrencyCode": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "ID": "string",
  "IsTest": true,
  "IsChangeOrder": true,
  "LedgerCode": "string",
  "LineItem": [
    {
      "AccountCode": "string",
      "Allocation": [
        {
          "Amount": "string",
          "Custom1": "string",
          "Custom2": "string",
          "Custom3": "string",
          "Custom4": "string",
          "Custom5": "string",
          "Custom6": "string",
          "Custom7": "string",
          "Custom8": "string",
          "Custom9": "string",
          "Custom10": "string",
          "Custom11": "string",
          "Custom12": "string",
          "Custom13": "string",
          "Custom14": "string",
          "Custom15": "string",
          "Custom16": "string",
          "Custom17": "string",
          "Custom18": "string",
          "Custom19": "string",
          "Custom20": "string",
          "GrossAmount": "string",
          "Percentage": "string"
        }
      ],
      "AmountWithoutVat": "string",
      "CreateDate": "string",
      "Custom1": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom2": "string",
      "Custom20": "string",
      "Custom3": "string",
      "Custom4": "string",
      "Custom5": "string",
      "Custom6": "string",
      "Custom7": "string",
      "Custom8": "string",
      "Custom9": "string",
      "Description": "string",
      "ExpenseType": "string",
      "ExternalID": "string",
      "IsReceiptRequired": "string",
      "LineNumber": "string",
      "PurchaseOrderReceiptType": "string",
      "Quantity": "string",
      "RequestedBy": "string",
      "RequestedDeliveryDate": "string",
      "SupplierPartID": "string",
      "Tax": "string",
      "UnitOfMeasureCode": "string",
      "UnitPrice": "string",
      "VatAmount": "string",
      "VatRate": "string"
    }
  ],
  "Name": "string",
  "NeededByDate": "string",
  "OrderDate": "string",
  "PaymentTerms": "string",
  "PolicyExternalID": "string",
  "PoVendorTaxId": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderNumber": "string",
  "PurchaseRequestNumber": "string",
  "ReceiptType": "string",
  "RequestedBy": "string",
  "RequestedDeliveryDate": "string",
  "Shipping": "string",
  "ShippingDescription": "string",
  "ShippingMethodKey": "string",
  "ShippingTermsKey": "string",
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
  "Tax": "string",
  "URI": "string",
  "VatAmountOne": "string",
  "VatAmountTwo": "string",
  "VatRateOne": "string",
  "VatRateTwo": "string",
  "VendorAccountNumber": "string",
  "VendorAddressCode": "string",
  "VendorCode": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/purchaseorders',
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

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/invoice/purchaseorders',
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

r = requests.put('https://www.concursolutions.com/api/v3.0/invoice/purchaseorders', headers = headers)

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
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/invoice/purchaseorders', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/purchaseorders");
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
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/invoice/purchaseorders", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /invoice/purchaseorders`

*Update a purchase order.*

Updates the specified purchase order and returns the status of the update request.

> Body parameter

```json
{
  "AmountWithoutVat": "string",
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
  "CurrencyCode": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "ID": "string",
  "IsTest": true,
  "IsChangeOrder": true,
  "LedgerCode": "string",
  "LineItem": [
    {
      "AccountCode": "string",
      "Allocation": [
        {
          "Amount": "string",
          "Custom1": "string",
          "Custom2": "string",
          "Custom3": "string",
          "Custom4": "string",
          "Custom5": "string",
          "Custom6": "string",
          "Custom7": "string",
          "Custom8": "string",
          "Custom9": "string",
          "Custom10": "string",
          "Custom11": "string",
          "Custom12": "string",
          "Custom13": "string",
          "Custom14": "string",
          "Custom15": "string",
          "Custom16": "string",
          "Custom17": "string",
          "Custom18": "string",
          "Custom19": "string",
          "Custom20": "string",
          "GrossAmount": "string",
          "Percentage": "string"
        }
      ],
      "AmountWithoutVat": "string",
      "CreateDate": "string",
      "Custom1": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom2": "string",
      "Custom20": "string",
      "Custom3": "string",
      "Custom4": "string",
      "Custom5": "string",
      "Custom6": "string",
      "Custom7": "string",
      "Custom8": "string",
      "Custom9": "string",
      "Description": "string",
      "ExpenseType": "string",
      "ExternalID": "string",
      "IsReceiptRequired": "string",
      "LineNumber": "string",
      "PurchaseOrderReceiptType": "string",
      "Quantity": "string",
      "RequestedBy": "string",
      "RequestedDeliveryDate": "string",
      "SupplierPartID": "string",
      "Tax": "string",
      "UnitOfMeasureCode": "string",
      "UnitPrice": "string",
      "VatAmount": "string",
      "VatRate": "string"
    }
  ],
  "Name": "string",
  "NeededByDate": "string",
  "OrderDate": "string",
  "PaymentTerms": "string",
  "PolicyExternalID": "string",
  "PoVendorTaxId": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderNumber": "string",
  "PurchaseRequestNumber": "string",
  "ReceiptType": "string",
  "RequestedBy": "string",
  "RequestedDeliveryDate": "string",
  "Shipping": "string",
  "ShippingDescription": "string",
  "ShippingMethodKey": "string",
  "ShippingTermsKey": "string",
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
  "Tax": "string",
  "URI": "string",
  "VatAmountOne": "string",
  "VatAmountTwo": "string",
  "VatRateOne": "string",
  "VatRateTwo": "string",
  "VendorAccountNumber": "string",
  "VendorAddressCode": "string",
  "VendorCode": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PurchaseOrder>
  <AmountWithoutVat>string</AmountWithoutVat>
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
  <CurrencyCode>string</CurrencyCode>
  <Custom1>string</Custom1>
  <Custom10>string</Custom10>
  <Custom11>string</Custom11>
  <Custom12>string</Custom12>
  <Custom13>string</Custom13>
  <Custom14>string</Custom14>
  <Custom15>string</Custom15>
  <Custom16>string</Custom16>
  <Custom17>string</Custom17>
  <Custom18>string</Custom18>
  <Custom19>string</Custom19>
  <Custom2>string</Custom2>
  <Custom20>string</Custom20>
  <Custom21>string</Custom21>
  <Custom22>string</Custom22>
  <Custom23>string</Custom23>
  <Custom24>string</Custom24>
  <Custom3>string</Custom3>
  <Custom4>string</Custom4>
  <Custom5>string</Custom5>
  <Custom6>string</Custom6>
  <Custom7>string</Custom7>
  <Custom8>string</Custom8>
  <Custom9>string</Custom9>
  <Description>string</Description>
  <DiscountPercentage>string</DiscountPercentage>
  <DiscountTerms>string</DiscountTerms>
  <ID>string</ID>
  <IsTest>true</IsTest>
  <IsChangeOrder>true</IsChangeOrder>
  <LedgerCode>string</LedgerCode>
  <LineItem>
    <AccountCode>string</AccountCode>
    <Allocation>
      <Amount>string</Amount>
      <Custom1>string</Custom1>
      <Custom2>string</Custom2>
      <Custom3>string</Custom3>
      <Custom4>string</Custom4>
      <Custom5>string</Custom5>
      <Custom6>string</Custom6>
      <Custom7>string</Custom7>
      <Custom8>string</Custom8>
      <Custom9>string</Custom9>
      <Custom10>string</Custom10>
      <Custom11>string</Custom11>
      <Custom12>string</Custom12>
      <Custom13>string</Custom13>
      <Custom14>string</Custom14>
      <Custom15>string</Custom15>
      <Custom16>string</Custom16>
      <Custom17>string</Custom17>
      <Custom18>string</Custom18>
      <Custom19>string</Custom19>
      <Custom20>string</Custom20>
      <GrossAmount>string</GrossAmount>
      <Percentage>string</Percentage>
    </Allocation>
    <AmountWithoutVat>string</AmountWithoutVat>
    <CreateDate>string</CreateDate>
    <Custom1>string</Custom1>
    <Custom10>string</Custom10>
    <Custom11>string</Custom11>
    <Custom12>string</Custom12>
    <Custom13>string</Custom13>
    <Custom14>string</Custom14>
    <Custom15>string</Custom15>
    <Custom16>string</Custom16>
    <Custom17>string</Custom17>
    <Custom18>string</Custom18>
    <Custom19>string</Custom19>
    <Custom2>string</Custom2>
    <Custom20>string</Custom20>
    <Custom3>string</Custom3>
    <Custom4>string</Custom4>
    <Custom5>string</Custom5>
    <Custom6>string</Custom6>
    <Custom7>string</Custom7>
    <Custom8>string</Custom8>
    <Custom9>string</Custom9>
    <Description>string</Description>
    <ExpenseType>string</ExpenseType>
    <ExternalID>string</ExternalID>
    <IsReceiptRequired>string</IsReceiptRequired>
    <LineNumber>string</LineNumber>
    <PurchaseOrderReceiptType>string</PurchaseOrderReceiptType>
    <Quantity>string</Quantity>
    <RequestedBy>string</RequestedBy>
    <RequestedDeliveryDate>string</RequestedDeliveryDate>
    <SupplierPartID>string</SupplierPartID>
    <Tax>string</Tax>
    <UnitOfMeasureCode>string</UnitOfMeasureCode>
    <UnitPrice>string</UnitPrice>
    <VatAmount>string</VatAmount>
    <VatRate>string</VatRate>
  </LineItem>
  <Name>string</Name>
  <NeededByDate>string</NeededByDate>
  <OrderDate>string</OrderDate>
  <PaymentTerms>string</PaymentTerms>
  <PolicyExternalID>string</PolicyExternalID>
  <PoVendorTaxId>string</PoVendorTaxId>
  <ProvincialTaxId>string</ProvincialTaxId>
  <PurchaseOrderNumber>string</PurchaseOrderNumber>
  <PurchaseRequestNumber>string</PurchaseRequestNumber>
  <ReceiptType>string</ReceiptType>
  <RequestedBy>string</RequestedBy>
  <RequestedDeliveryDate>string</RequestedDeliveryDate>
  <Shipping>string</Shipping>
  <ShippingDescription>string</ShippingDescription>
  <ShippingMethodKey>string</ShippingMethodKey>
  <ShippingTermsKey>string</ShippingTermsKey>
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
  <Tax>string</Tax>
  <URI>string</URI>
  <VatAmountOne>string</VatAmountOne>
  <VatAmountTwo>string</VatAmountTwo>
  <VatRateOne>string</VatRateOne>
  <VatRateTwo>string</VatRateTwo>
  <VendorAccountNumber>string</VendorAccountNumber>
  <VendorAddressCode>string</VendorAddressCode>
  <VendorCode>string</VendorCode>
</PurchaseOrder>
```

<h3 id="put__invoice_purchaseorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PurchaseOrder](#schemapurchaseorder)|true|The details of the purchase order.|

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
<PurchaseOrderResult>
  <ErrorCode>string</ErrorCode>
  <ErrorMessage>string</ErrorMessage>
  <FieldCode>string</FieldCode>
  <LineItemExternalID>string</LineItemExternalID>
  <Message>string</Message>
  <PurchaseOrderNumber>string</PurchaseOrderNumber>
  <Status>string</Status>
</PurchaseOrderResult>
```

<h3 id="put__invoice_purchaseorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PurchaseOrderResult](#schemapurchaseorderresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## get__invoice_purchaseorders_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/invoice/purchaseorders/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/invoice/purchaseorders/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/purchaseorders/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/invoice/purchaseorders/{id}',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/invoice/purchaseorders/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/invoice/purchaseorders/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/purchaseorders/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/invoice/purchaseorders/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /invoice/purchaseorders/{id}`

*Get a purchase order.*

Retrieves information about the specified purchase order.

<h3 id="get__invoice_purchaseorders_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The identifier for the purchase order.|

> Example responses

> 200 Response

```json
{
  "AmountWithoutVat": "string",
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
  "CurrencyCode": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "ID": "string",
  "IsTest": true,
  "IsChangeOrder": true,
  "LedgerCode": "string",
  "LineItem": [
    {
      "AccountCode": "string",
      "Allocation": [
        {
          "Amount": "string",
          "Custom1": "string",
          "Custom2": "string",
          "Custom3": "string",
          "Custom4": "string",
          "Custom5": "string",
          "Custom6": "string",
          "Custom7": "string",
          "Custom8": "string",
          "Custom9": "string",
          "Custom10": "string",
          "Custom11": "string",
          "Custom12": "string",
          "Custom13": "string",
          "Custom14": "string",
          "Custom15": "string",
          "Custom16": "string",
          "Custom17": "string",
          "Custom18": "string",
          "Custom19": "string",
          "Custom20": "string",
          "GrossAmount": "string",
          "Percentage": "string"
        }
      ],
      "AmountWithoutVat": "string",
      "CreateDate": "string",
      "Custom1": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom2": "string",
      "Custom20": "string",
      "Custom3": "string",
      "Custom4": "string",
      "Custom5": "string",
      "Custom6": "string",
      "Custom7": "string",
      "Custom8": "string",
      "Custom9": "string",
      "Description": "string",
      "ExpenseType": "string",
      "ExternalID": "string",
      "IsReceiptRequired": "string",
      "LineNumber": "string",
      "PurchaseOrderReceiptType": "string",
      "Quantity": "string",
      "RequestedBy": "string",
      "RequestedDeliveryDate": "string",
      "SupplierPartID": "string",
      "Tax": "string",
      "UnitOfMeasureCode": "string",
      "UnitPrice": "string",
      "VatAmount": "string",
      "VatRate": "string"
    }
  ],
  "Name": "string",
  "NeededByDate": "string",
  "OrderDate": "string",
  "PaymentTerms": "string",
  "PolicyExternalID": "string",
  "PoVendorTaxId": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderNumber": "string",
  "PurchaseRequestNumber": "string",
  "ReceiptType": "string",
  "RequestedBy": "string",
  "RequestedDeliveryDate": "string",
  "Shipping": "string",
  "ShippingDescription": "string",
  "ShippingMethodKey": "string",
  "ShippingTermsKey": "string",
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
  "Tax": "string",
  "URI": "string",
  "VatAmountOne": "string",
  "VatAmountTwo": "string",
  "VatRateOne": "string",
  "VatRateTwo": "string",
  "VendorAccountNumber": "string",
  "VendorAddressCode": "string",
  "VendorCode": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PurchaseOrder>
  <AmountWithoutVat>string</AmountWithoutVat>
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
  <CurrencyCode>string</CurrencyCode>
  <Custom1>string</Custom1>
  <Custom10>string</Custom10>
  <Custom11>string</Custom11>
  <Custom12>string</Custom12>
  <Custom13>string</Custom13>
  <Custom14>string</Custom14>
  <Custom15>string</Custom15>
  <Custom16>string</Custom16>
  <Custom17>string</Custom17>
  <Custom18>string</Custom18>
  <Custom19>string</Custom19>
  <Custom2>string</Custom2>
  <Custom20>string</Custom20>
  <Custom21>string</Custom21>
  <Custom22>string</Custom22>
  <Custom23>string</Custom23>
  <Custom24>string</Custom24>
  <Custom3>string</Custom3>
  <Custom4>string</Custom4>
  <Custom5>string</Custom5>
  <Custom6>string</Custom6>
  <Custom7>string</Custom7>
  <Custom8>string</Custom8>
  <Custom9>string</Custom9>
  <Description>string</Description>
  <DiscountPercentage>string</DiscountPercentage>
  <DiscountTerms>string</DiscountTerms>
  <ID>string</ID>
  <IsTest>true</IsTest>
  <IsChangeOrder>true</IsChangeOrder>
  <LedgerCode>string</LedgerCode>
  <LineItem>
    <AccountCode>string</AccountCode>
    <Allocation>
      <Amount>string</Amount>
      <Custom1>string</Custom1>
      <Custom2>string</Custom2>
      <Custom3>string</Custom3>
      <Custom4>string</Custom4>
      <Custom5>string</Custom5>
      <Custom6>string</Custom6>
      <Custom7>string</Custom7>
      <Custom8>string</Custom8>
      <Custom9>string</Custom9>
      <Custom10>string</Custom10>
      <Custom11>string</Custom11>
      <Custom12>string</Custom12>
      <Custom13>string</Custom13>
      <Custom14>string</Custom14>
      <Custom15>string</Custom15>
      <Custom16>string</Custom16>
      <Custom17>string</Custom17>
      <Custom18>string</Custom18>
      <Custom19>string</Custom19>
      <Custom20>string</Custom20>
      <GrossAmount>string</GrossAmount>
      <Percentage>string</Percentage>
    </Allocation>
    <AmountWithoutVat>string</AmountWithoutVat>
    <CreateDate>string</CreateDate>
    <Custom1>string</Custom1>
    <Custom10>string</Custom10>
    <Custom11>string</Custom11>
    <Custom12>string</Custom12>
    <Custom13>string</Custom13>
    <Custom14>string</Custom14>
    <Custom15>string</Custom15>
    <Custom16>string</Custom16>
    <Custom17>string</Custom17>
    <Custom18>string</Custom18>
    <Custom19>string</Custom19>
    <Custom2>string</Custom2>
    <Custom20>string</Custom20>
    <Custom3>string</Custom3>
    <Custom4>string</Custom4>
    <Custom5>string</Custom5>
    <Custom6>string</Custom6>
    <Custom7>string</Custom7>
    <Custom8>string</Custom8>
    <Custom9>string</Custom9>
    <Description>string</Description>
    <ExpenseType>string</ExpenseType>
    <ExternalID>string</ExternalID>
    <IsReceiptRequired>string</IsReceiptRequired>
    <LineNumber>string</LineNumber>
    <PurchaseOrderReceiptType>string</PurchaseOrderReceiptType>
    <Quantity>string</Quantity>
    <RequestedBy>string</RequestedBy>
    <RequestedDeliveryDate>string</RequestedDeliveryDate>
    <SupplierPartID>string</SupplierPartID>
    <Tax>string</Tax>
    <UnitOfMeasureCode>string</UnitOfMeasureCode>
    <UnitPrice>string</UnitPrice>
    <VatAmount>string</VatAmount>
    <VatRate>string</VatRate>
  </LineItem>
  <Name>string</Name>
  <NeededByDate>string</NeededByDate>
  <OrderDate>string</OrderDate>
  <PaymentTerms>string</PaymentTerms>
  <PolicyExternalID>string</PolicyExternalID>
  <PoVendorTaxId>string</PoVendorTaxId>
  <ProvincialTaxId>string</ProvincialTaxId>
  <PurchaseOrderNumber>string</PurchaseOrderNumber>
  <PurchaseRequestNumber>string</PurchaseRequestNumber>
  <ReceiptType>string</ReceiptType>
  <RequestedBy>string</RequestedBy>
  <RequestedDeliveryDate>string</RequestedDeliveryDate>
  <Shipping>string</Shipping>
  <ShippingDescription>string</ShippingDescription>
  <ShippingMethodKey>string</ShippingMethodKey>
  <ShippingTermsKey>string</ShippingTermsKey>
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
  <Tax>string</Tax>
  <URI>string</URI>
  <VatAmountOne>string</VatAmountOne>
  <VatAmountTwo>string</VatAmountTwo>
  <VatRateOne>string</VatRateOne>
  <VatRateTwo>string</VatRateTwo>
  <VendorAccountNumber>string</VendorAccountNumber>
  <VendorAddressCode>string</VendorAddressCode>
  <VendorCode>string</VendorCode>
</PurchaseOrder>
```

<h3 id="get__invoice_purchaseorders_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PurchaseOrder](#schemapurchaseorder)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_Allocation">Allocation</h2>

<a id="schemaallocation"></a>
<a id="schema_Allocation"></a>
<a id="tocSallocation"></a>
<a id="tocsallocation"></a>

```json
{
  "Amount": "string",
  "Custom1": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom20": "string",
  "GrossAmount": "string",
  "Percentage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|string|true|none|Required. The total amount of the allocation.|
|Custom1|string|false|none|A value that can be applied to a custom field 1 that is part of the allocation form.|
|Custom2|string|false|none|A value that can be applied to a custom field 10 that is part of the allocation form.|
|Custom3|string|false|none|A value that can be applied to a custom field 11 that is part of the allocation form.|
|Custom4|string|false|none|A value that can be applied to a custom field 12 that is part of the allocation form.|
|Custom5|string|false|none|A value that can be applied to a custom field 13 that is part of the allocation form.|
|Custom6|string|false|none|A value that can be applied to a custom field 14 that is part of the allocation form.|
|Custom7|string|false|none|A value that can be applied to a custom field 15 that is part of the allocation form.|
|Custom8|string|false|none|A value that can be applied to a custom field 16 that is part of the allocation form.|
|Custom9|string|false|none|A value that can be applied to a custom field 17 that is part of the allocation form.|
|Custom10|string|false|none|A value that can be applied to a custom field 18 that is part of the allocation form.|
|Custom11|string|false|none|A value that can be applied to a custom field 19 that is part of the allocation form.|
|Custom12|string|false|none|A value that can be applied to a custom field 2 that is part of the allocation form.|
|Custom13|string|false|none|A value that can be applied to a custom field 20 that is part of the allocation form.|
|Custom14|string|false|none|A value that can be applied to a custom field 3 that is part of the allocation form.|
|Custom15|string|false|none|A value that can be applied to a custom field 4 that is part of the allocation form.|
|Custom16|string|false|none|A value that can be applied to a custom field 5 that is part of the allocation form.|
|Custom17|string|false|none|A value that can be applied to a custom field 6 that is part of the allocation form.|
|Custom18|string|false|none|A value that can be applied to a custom field 7 that is part of the allocation form.|
|Custom19|string|false|none|A value that can be applied to a custom field 8 that is part of the allocation form.|
|Custom20|string|false|none|A value that can be applied to a custom field 9 that is part of the allocation form.|
|GrossAmount|string|false|none|Required. The allocation gross amount.|
|Percentage|string|false|none|Required. The allocation percentage.|

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
|Address1|string|true|none|Required. Address line 1 of the shipping or billing address.|
|Address2|string|false|none|Address line 2 of the shipping or billing address.|
|Address3|string|false|none|Address line 3 of the shipping or billing address.|
|City|string|true|none|Required. The city of the shipping or billing address.|
|CountryCode|string|true|none|Required. The code of the country for the shipping or billing address.|
|ExternalID|string|true|none|Required. A unique value supplied by the customer to identify a particular shipping or billing address.|
|Name|string|false|none|An optional name that can be given to the shipping or billing address.|
|PostalCode|string|true|none|Required. The postal code of the shipping or billing address.|
|State|string|false|none|The state or province of the shipping or billing address.|
|StateProvince|string|false|none|Required. The state or province of the shipping or billing address.|

<h2 id="tocS_LineItem">LineItem</h2>

<a id="schemalineitem"></a>
<a id="schema_LineItem"></a>
<a id="tocSlineitem"></a>
<a id="tocslineitem"></a>

```json
{
  "AccountCode": "string",
  "Allocation": [
    {
      "Amount": "string",
      "Custom1": "string",
      "Custom2": "string",
      "Custom3": "string",
      "Custom4": "string",
      "Custom5": "string",
      "Custom6": "string",
      "Custom7": "string",
      "Custom8": "string",
      "Custom9": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom20": "string",
      "GrossAmount": "string",
      "Percentage": "string"
    }
  ],
  "AmountWithoutVat": "string",
  "CreateDate": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Description": "string",
  "ExpenseType": "string",
  "ExternalID": "string",
  "IsReceiptRequired": "string",
  "LineNumber": "string",
  "PurchaseOrderReceiptType": "string",
  "Quantity": "string",
  "RequestedBy": "string",
  "RequestedDeliveryDate": "string",
  "SupplierPartID": "string",
  "Tax": "string",
  "UnitOfMeasureCode": "string",
  "UnitPrice": "string",
  "VatAmount": "string",
  "VatRate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountCode|string|false|none|The account code of the line item. A value must be supplied for either ExpenseType or AccountCode, but not both. This field is required if an ExpenseType value is not supplied.|
|Allocation|[[Allocation](#schemaallocation)]|false|none|none|
|AmountWithoutVat|string|false|none|The net amount of the line item (excluding VAT).|
|CreateDate|string|false|none|The date the line item was created. Format: YYYY-MM-DD|
|Custom1|string|false|none|A value that can be applied to a custom field 1 that is part of the purchase order line item form.|
|Custom10|string|false|none|A value that can be applied to a custom field 10 that is part of the purchase order line item form.|
|Custom11|string|false|none|A value that can be applied to a custom field 11 that is part of the purchase order line item form.|
|Custom12|string|false|none|A value that can be applied to a custom field 12 that is part of the purchase order line item form.|
|Custom13|string|false|none|A value that can be applied to a custom field 13 that is part of the purchase order line item form.|
|Custom14|string|false|none|A value that can be applied to a custom field 14 that is part of the purchase order line item form.|
|Custom15|string|false|none|A value that can be applied to a custom field 15 that is part of the purchase order line item form.|
|Custom16|string|false|none|A value that can be applied to a custom field 16 that is part of the purchase order line item form.|
|Custom17|string|false|none|A value that can be applied to a custom field 17 that is part of the purchase order line item form.|
|Custom18|string|false|none|A value that can be applied to a custom field 18 that is part of the purchase order line item form.|
|Custom19|string|false|none|A value that can be applied to a custom field 19 that is part of the purchase order line item form.|
|Custom2|string|false|none|A value that can be applied to a custom field 2 that is part of the purchase order line item form.|
|Custom20|string|false|none|A value that can be applied to a custom field 20 that is part of the purchase order line item form.|
|Custom3|string|false|none|A value that can be applied to a custom field 3 that is part of the purchase order line item form.|
|Custom4|string|false|none|A value that can be applied to a custom field 4 that is part of the purchase order line item form.|
|Custom5|string|false|none|A value that can be applied to a custom field 5 that is part of the purchase order line item form.|
|Custom6|string|false|none|A value that can be applied to a custom field 6 that is part of the purchase order line item form.|
|Custom7|string|false|none|A value that can be applied to a custom field 7 that is part of the purchase order line item form.|
|Custom8|string|false|none|A value that can be applied to a custom field 8 that is part of the purchase order line item form.|
|Custom9|string|false|none|A value that can be applied to a custom field 9 that is part of the purchase order line item form.|
|Description|string|false|none|A description of the line item.|
|ExpenseType|string|false|none|The expense type of the line item. A value must be supplied for either ExpenseType or AccountCode, but not both. This field is required if an AccountCode value is not supplied.|
|ExternalID|string|true|none|Required. A customer-supplied value that uniquely identifies the line item within the purchase order.|
|IsReceiptRequired|string|false|none|Indicates whether the line item requires a receipt. Format: true or false|
|LineNumber|string|true|none|Required. The line item number within the purchase order.|
|PurchaseOrderReceiptType|string|false|none|Purchase order ReceiptType of the line item. Accepted values are QUANTITY_RECEIPT or NONE. If a value is not provided, it will default to NONE. If you are using Concur Receiving and need to enter Goods Receipts against the resulting PO lines use QUANTITY_RECEIPT.|
|Quantity|string|true|none|Required. The quantity associated with the line item.|
|RequestedBy|string|false|none|The person who requests the goods in the line item of the purchase order.|
|RequestedDeliveryDate|string|false|none|The date the line item of the purchase order instructed the vendor to deliver the goods. Format: YYYY-MM-DD|
|SupplierPartID|string|false|none|Any number that might help to identify the line item. This could be a value such as the vendor's part number or even the manufacturer number.|
|Tax|string|false|none|Any tax that is associated with the line item.|
|UnitOfMeasureCode|string|false|none|The unit of measure code of the line item.|
|UnitPrice|string|true|none|Required. The price of each item of the line item.|
|VatAmount|string|false|none|This field has not been implemented by purchase request yet. Any data in this field will be ignored.|
|VatRate|string|false|none|This field has not been implemented by purchase request yet. Any data in this field will be ignored.|

<h2 id="tocS_PurchaseOrder">PurchaseOrder</h2>

<a id="schemapurchaseorder"></a>
<a id="schema_PurchaseOrder"></a>
<a id="tocSpurchaseorder"></a>
<a id="tocspurchaseorder"></a>

```json
{
  "AmountWithoutVat": "string",
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
  "CurrencyCode": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "ID": "string",
  "IsTest": true,
  "IsChangeOrder": true,
  "LedgerCode": "string",
  "LineItem": [
    {
      "AccountCode": "string",
      "Allocation": [
        {
          "Amount": "string",
          "Custom1": "string",
          "Custom2": "string",
          "Custom3": "string",
          "Custom4": "string",
          "Custom5": "string",
          "Custom6": "string",
          "Custom7": "string",
          "Custom8": "string",
          "Custom9": "string",
          "Custom10": "string",
          "Custom11": "string",
          "Custom12": "string",
          "Custom13": "string",
          "Custom14": "string",
          "Custom15": "string",
          "Custom16": "string",
          "Custom17": "string",
          "Custom18": "string",
          "Custom19": "string",
          "Custom20": "string",
          "GrossAmount": "string",
          "Percentage": "string"
        }
      ],
      "AmountWithoutVat": "string",
      "CreateDate": "string",
      "Custom1": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom2": "string",
      "Custom20": "string",
      "Custom3": "string",
      "Custom4": "string",
      "Custom5": "string",
      "Custom6": "string",
      "Custom7": "string",
      "Custom8": "string",
      "Custom9": "string",
      "Description": "string",
      "ExpenseType": "string",
      "ExternalID": "string",
      "IsReceiptRequired": "string",
      "LineNumber": "string",
      "PurchaseOrderReceiptType": "string",
      "Quantity": "string",
      "RequestedBy": "string",
      "RequestedDeliveryDate": "string",
      "SupplierPartID": "string",
      "Tax": "string",
      "UnitOfMeasureCode": "string",
      "UnitPrice": "string",
      "VatAmount": "string",
      "VatRate": "string"
    }
  ],
  "Name": "string",
  "NeededByDate": "string",
  "OrderDate": "string",
  "PaymentTerms": "string",
  "PolicyExternalID": "string",
  "PoVendorTaxId": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderNumber": "string",
  "PurchaseRequestNumber": "string",
  "ReceiptType": "string",
  "RequestedBy": "string",
  "RequestedDeliveryDate": "string",
  "Shipping": "string",
  "ShippingDescription": "string",
  "ShippingMethodKey": "string",
  "ShippingTermsKey": "string",
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
  "Tax": "string",
  "URI": "string",
  "VatAmountOne": "string",
  "VatAmountTwo": "string",
  "VatRateOne": "string",
  "VatRateTwo": "string",
  "VendorAccountNumber": "string",
  "VendorAddressCode": "string",
  "VendorCode": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmountWithoutVat|string|false|none|The net amount of the purchase order, excluding VAT.|
|BillToAddress|[BillToAddress](#schemabilltoaddress)|true|none|none|
|CurrencyCode|string|true|none|Required. The 3-letter ISO 4217 currency code of the currency that is associated with the purchase order.|
|Custom1|string|false|none|A value that can be applied to a custom field 1 that is part of the purchase order header form.|
|Custom10|string|false|none|A value that can be applied to a custom field 10 that is part of the purchase order header form.|
|Custom11|string|false|none|A value that can be applied to a custom field 11 that is part of the purchase order header form.|
|Custom12|string|false|none|A value that can be applied to a custom field 12 that is part of the purchase order header form.|
|Custom13|string|false|none|A value that can be applied to a custom field 13 that is part of the purchase order header form.|
|Custom14|string|false|none|A value that can be applied to a custom field 14 that is part of the purchase order header form.|
|Custom15|string|false|none|A value that can be applied to a custom field 15 that is part of the purchase order header form.|
|Custom16|string|false|none|A value that can be applied to a custom field 16 that is part of the purchase order header form.|
|Custom17|string|false|none|A value that can be applied to a custom field 17 that is part of the purchase order header form.|
|Custom18|string|false|none|A value that can be applied to a custom field 18 that is part of the purchase order header form.|
|Custom19|string|false|none|A value that can be applied to a custom field 19 that is part of the purchase order header form.|
|Custom2|string|false|none|A value that can be applied to a custom field 2 that is part of the purchase order header form.|
|Custom20|string|false|none|A value that can be applied to a custom field 20 that is part of the purchase order header form.|
|Custom21|string|false|none|A value that can be applied to a custom field 21 that is part of the purchase order header form.|
|Custom22|string|false|none|A value that can be applied to a custom field 22 that is part of the purchase order header form.|
|Custom23|string|false|none|A value that can be applied to a custom field 23 that is part of the purchase order header form.|
|Custom24|string|false|none|A value that can be applied to a custom field 24 that is part of the purchase order header form.|
|Custom3|string|false|none|A value that can be applied to a custom field 3 that is part of the purchase order header form.|
|Custom4|string|false|none|A value that can be applied to a custom field 4 that is part of the purchase order header form.|
|Custom5|string|false|none|A value that can be applied to a custom field 5 that is part of the purchase order header form.|
|Custom6|string|false|none|A value that can be applied to a custom field 6 that is part of the purchase order header form.|
|Custom7|string|false|none|A value that can be applied to a custom field 7 that is part of the purchase order header form.|
|Custom8|string|false|none|A value that can be applied to a custom field 8 that is part of the purchase order header form.|
|Custom9|string|false|none|A value that can be applied to a custom field 9 that is part of the purchase order header form.|
|Description|string|false|none|A description of the purchase order.|
|DiscountPercentage|string|false|none|The discount from the vendor, if the discount terms are met.|
|DiscountTerms|string|false|none|The net discount terms that the vendor offers, when discounts apply.|
|ID|string|false|none|The unique identifier of the resource.|
|IsTest|boolean|false|none|If the purchase order is a test.|
|IsChangeOrder|boolean|false|none|If the purchase order has a change order or not.|
|LedgerCode|string|false|none|A code which indicates which company journal the Purchase Order is assigned to. Use "GET /purchase order/localizeddata" to translate the code into text.|
|LineItem|[[LineItem](#schemalineitem)]|true|none|none|
|Name|string|false|none|Required. A name for the purchase order.|
|NeededByDate|string|false|none|The date by which the purchase order must be fulfilled. Format: YYYY-MM-DD|
|OrderDate|string|true|none|Required. The date when goods were ordered. Format: YYYY-MM-DD|
|PaymentTerms|string|false|none|The net payment terms that have been set up with a vendor.|
|PolicyExternalID|string|true|none|Required. The external identifier of the policy that should be associated with the purchase order. The external Id is a property of the policy configuration screen. Clients will need to get these ID’s from the Implementation team if using professional version. For standard version the value is always 'PO'|
|PoVendorTaxId|string|false|none|The vendor tax ID|
|ProvincialTaxId|string|false|none|The vendor provincial tax ID.|
|PurchaseOrderNumber|string|false|none|The purchase order number.|
|PurchaseRequestNumber|string|false|none|The related purchase request number that generated the purchase order.|
|ReceiptType|string|false|none|Deprecated, use the PurchaseOrderReceiptType at line item level instead.|
|RequestedBy|string|false|none|The person who requests the goods in the purchase order.|
|RequestedDeliveryDate|string|false|none|The date the purchase order instructed the vendor to deliver the goods. Format YYYY-MM-DD|
|Shipping|string|false|none|The total shipping cost for the purchase order.|
|ShippingDescription|string|false|none|A description of how the goods in the purchase order will ship. For example, via FedEx.|
|ShippingMethodKey|string|false|none|A code that represents the shipping method used by the vendor. Maximum length: 10 characters|
|ShippingTermsKey|string|false|none|A code that represents the shipping terms that the vendor offers. Maximum length: 10 characters|
|ShipToAddress|[ShipToAddress](#schemashiptoaddress)|true|none|none|
|Status|string|false|none|The current status of the purchase order. Status should be either Closed or Transmitted. If a value is not provided, it will default to Transmitted.|
|Tax|string|false|none|The total tax for the purchase order.|
|URI|string|false|none|The URI to the resource.|
|VatAmountOne|string|false|none|This field has not been implemented by Purchase Request yet. Any data in this field will be ignored.|
|VatAmountTwo|string|false|none|This field has not been implemented by Purchase Request yet. Any data in this field will be ignored.|
|VatRateOne|string|false|none|This field has not been implemented by Purchase Request yet. Any data in this field will be ignored.|
|VatRateTwo|string|false|none|This field has not been implemented by Purchase Request yet. Any data in this field will be ignored.|
|VendorAccountNumber|string|false|none|The vendor account number.|
|VendorAddressCode|string|true|none|Required. The code that identifies the vendor's remit address for the purchase order.|
|VendorCode|string|true|none|Required. The code that identifies the vendor for the purchase order.|

<h2 id="tocS_PurchaseOrderResult">PurchaseOrderResult</h2>

<a id="schemapurchaseorderresult"></a>
<a id="schema_PurchaseOrderResult"></a>
<a id="tocSpurchaseorderresult"></a>
<a id="tocspurchaseorderresult"></a>

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
|ErrorCode|string|false|none|A code that indicates why the purchase order was not processed successfully.|
|ErrorMessage|string|false|none|A description of the error.|
|FieldCode|string|false|none|A code that indicates which field caused an issue. This code typically appears only when a field is being validated against a field of a form type. Format: LEVEL|CODE. The possible levels are: Header, ShipTo, BillTo, LineItem, Allocation.|
|LineItemExternalID|string|false|none|The external ID of a line item that caused an error. If the error is related to an allocation, this field indicates the external ID of the line item that the allocation is associated with, and also indicates the allocation that caused of the error.|
|Message|string|false|none|Message of request result.|
|PurchaseOrderNumber|string|false|none|The purchase order number.|
|Status|string|false|none|The result of processing the purchase order. Format: SUCCESS or FAILURE|

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
|Address1|string|true|none|Required. Address line 1 of the shipping or billing address.|
|Address2|string|false|none|Address line 2 of the shipping or billing address.|
|Address3|string|false|none|Address line 3 of the shipping or billing address.|
|City|string|true|none|Required. The city of the shipping or billing address.|
|CountryCode|string|true|none|Required. The code of the country for the shipping or billing address.|
|ExternalID|string|true|none|Required. A unique value supplied by the customer to identify a particular shipping or billing address.|
|Name|string|false|none|An optional name that can be given to the shipping or billing address.|
|PostalCode|string|true|none|Required. The postal code of the shipping or billing address.|
|State|string|false|none|The state or province of the shipping or billing address.|
|StateProvince|string|false|none|Required. The state or province of the shipping or billing address.|

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

