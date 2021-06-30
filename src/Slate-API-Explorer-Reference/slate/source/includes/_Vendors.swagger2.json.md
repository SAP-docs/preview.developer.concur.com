---
title: Vendors v3.0
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

<h2 id="vendors">Vendors v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An invoice is a bill of sale for goods or services provided by a vendor. This API provides methods to create, update, or delete invoice vendors.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

<h3 id="vendors-resources">Resources</h3>

#### get__invoice_vendors

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/invoice/vendors \
  -H 'Accept: application/json'

```

```http
GET https://www.concursolutions.com/api/v3.0/invoice/vendors HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/vendors',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/invoice/vendors',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/invoice/vendors', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/invoice/vendors', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/vendors");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/invoice/vendors", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /invoice/vendors`

*Retrieves an existing vendor.*

Gets an existing vendor. Note: If authenticating with a Company access token the API will return all vendors associated with a specific entity.

<h3 id="get__invoice_vendors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|The maximum number of items to be returned in a  response. The default is 25 and cannot exceed 1000.|
|offset|query|string|false|Specifies the starting point for the next query when iterating through the collection response.  Use with paged collections of resources.|
|sortDirection|query|string|false|ascending or descending, The default value will be ascending.|
|sortBy|query|string|false|Field you need to the results to be sorted by. Vendor Name will be made default if no value is sent. Only fields that are added to the vendor form can be used here. Fields have to be specified by name as specified in Doc.|
|searchType|query|string|false|Applies for the entire given search parameters. The default value is exact. Supported values: exact, begins, contains, ends|
|vendorCode|query|string|false|Vendor Code to be searched|
|vendorName|query|string|false|Vendor Name to be searched|
|taxID|query|string|false|Tax ID to be searched|
|buyerAccountNumber|query|string|false|Buyer Account Number to be searched|
|addressCode|query|string|false|Address Code to be searched|
|paymentMethodType|query|string|false|Payment Method Type to be searched. Valid values are ACH, CARD, CHECK, CLIENT, PAYPVD, VCHER, WIRE|
|address1|query|string|false|Address 1 to be searched|
|address2|query|string|false|Address 2 to be searched|
|address3|query|string|false|Address 3 to be searched|
|city|query|string|false|City to be searched|
|state|query|string|false|State to be searched|
|postalCode|query|string|false|Postal Code to be searched|
|approved|query|string|false|Find Approved/Un Approved Vendors , True/False|
|country|query|string|false|Country to be searched|
|custom1|query|string|false|Custom 1 to be searched|
|custom2|query|string|false|Custom 2 to be searched|
|custom3|query|string|false|Custom 3 to be searched|
|custom4|query|string|false|Custom 4 to be searched|
|custom5|query|string|false|Custom 5 to be searched|
|custom6|query|string|false|Custom 6 to be searched|
|custom7|query|string|false|Custom 7 to be searched|
|custom8|query|string|false|Custom 8 to be searched|
|custom9|query|string|false|Custom 9 to be searched|
|custom10|query|string|false|Custom 10 to be searched|
|custom11|query|string|false|Custom 11 to be searched|
|custom12|query|string|false|Custom 12 to be searched|
|custom13|query|string|false|Custom 13 to be searched|
|custom14|query|string|false|Custom 14 to be searched|
|custom15|query|string|false|Custom 15 to be searched|
|custom16|query|string|false|Custom 16 to be searched|
|custom17|query|string|false|Custom 17 to be searched|
|custom18|query|string|false|Custom 18 to be searched|
|custom19|query|string|false|Custom 19 to be searched|
|custom20|query|string|false|Custom 20 to be searched|

> Example responses

> 200 Response

```json
{
  "Vendor": {
    "AccountNumber": "string",
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "AddressCode": "string",
    "AddressImportSyncID": "string",
    "Approved": "string",
    "City": "string",
    "ContactEmail": "string",
    "ContactFirstName": "string",
    "ContactLastName": "string",
    "ContactPhoneNumber": "string",
    "Country": "string",
    "CountryCode": "string",
    "CurrencyCode": "string",
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
    "DefaultEmployeeID": "string",
    "DefaultExpenseTypeName": "string",
    "DiscountPercentage": "string",
    "DiscountTermsDays": "string",
    "ID": "string",
    "IsLineItemVatIncld": "string",
    "IsVisibleForContentExtraction": "string",
    "PaymentMethodType": "string",
    "PaymentTerms": "string",
    "PostalCode": "string",
    "ProvincialTaxID": "string",
    "PurchaseOrderContactEmail": "string",
    "PurchaseOrderContactFirstName": "string",
    "PurchaseOrderContactLastName": "string",
    "PurchaseOrderContactPhoneNumber": "string",
    "ShippingMethod": "string",
    "ShippingTerms": "string",
    "State": "string",
    "StatusList": {
      "Code": 0,
      "Message": "string",
      "RecordNumber": 0,
      "Type": "string"
    },
    "TaxID": "string",
    "TaxType": "string",
    "URI": "string",
    "VendorBankList": {
      "AccountNumber": "string",
      "AccountType": "string",
      "AddressCode": "string",
      "BankCode": "string",
      "BankName": "string",
      "BranchCode": "string",
      "BranchLocation": "string",
      "CountryCode": "string",
      "CurrencyAlphaCode": "string",
      "ID": "string",
      "IsActive": "string",
      "NameOnAccount": "string",
      "RoutingNumber": "string",
      "StatusList": {
        "Code": 0,
        "Message": "string",
        "RecordNumber": 0,
        "Type": "string"
      },
      "TransType": "string",
      "URI": "string",
      "VendorCode": "string"
    },
    "VendorCode": "string",
    "VendorFormName": "string",
    "VendorGroupList": [
      "string"
    ],
    "VendorName": "string",
    "VoucherNotes": "string"
  },
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<VendorCollection>
  <Vendor>
    <AccountNumber>string</AccountNumber>
    <Address1>string</Address1>
    <Address2>string</Address2>
    <Address3>string</Address3>
    <AddressCode>string</AddressCode>
    <AddressImportSyncID>string</AddressImportSyncID>
    <Approved>string</Approved>
    <City>string</City>
    <ContactEmail>string</ContactEmail>
    <ContactFirstName>string</ContactFirstName>
    <ContactLastName>string</ContactLastName>
    <ContactPhoneNumber>string</ContactPhoneNumber>
    <Country>string</Country>
    <CountryCode>string</CountryCode>
    <CurrencyCode>string</CurrencyCode>
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
    <DefaultEmployeeID>string</DefaultEmployeeID>
    <DefaultExpenseTypeName>string</DefaultExpenseTypeName>
    <DiscountPercentage>string</DiscountPercentage>
    <DiscountTermsDays>string</DiscountTermsDays>
    <ID>string</ID>
    <IsLineItemVatIncld>string</IsLineItemVatIncld>
    <IsVisibleForContentExtraction>string</IsVisibleForContentExtraction>
    <PaymentMethodType>string</PaymentMethodType>
    <PaymentTerms>string</PaymentTerms>
    <PostalCode>string</PostalCode>
    <ProvincialTaxID>string</ProvincialTaxID>
    <PurchaseOrderContactEmail>string</PurchaseOrderContactEmail>
    <PurchaseOrderContactFirstName>string</PurchaseOrderContactFirstName>
    <PurchaseOrderContactLastName>string</PurchaseOrderContactLastName>
    <PurchaseOrderContactPhoneNumber>string</PurchaseOrderContactPhoneNumber>
    <ShippingMethod>string</ShippingMethod>
    <ShippingTerms>string</ShippingTerms>
    <State>string</State>
    <StatusList>
      <Code>0</Code>
      <Message>string</Message>
      <RecordNumber>0</RecordNumber>
      <Type>string</Type>
    </StatusList>
    <TaxID>string</TaxID>
    <TaxType>string</TaxType>
    <URI>string</URI>
    <VendorBankList>
      <AccountNumber>string</AccountNumber>
      <AccountType>string</AccountType>
      <AddressCode>string</AddressCode>
      <BankCode>string</BankCode>
      <BankName>string</BankName>
      <BranchCode>string</BranchCode>
      <BranchLocation>string</BranchLocation>
      <CountryCode>string</CountryCode>
      <CurrencyAlphaCode>string</CurrencyAlphaCode>
      <ID>string</ID>
      <IsActive>string</IsActive>
      <NameOnAccount>string</NameOnAccount>
      <RoutingNumber>string</RoutingNumber>
      <StatusList>
        <Code>0</Code>
        <Message>string</Message>
        <RecordNumber>0</RecordNumber>
        <Type>string</Type>
      </StatusList>
      <TransType>string</TransType>
      <URI>string</URI>
      <VendorCode>string</VendorCode>
    </VendorBankList>
    <VendorCode>string</VendorCode>
    <VendorFormName>string</VendorFormName>
    <VendorGroupList>string</VendorGroupList>
    <VendorName>string</VendorName>
    <VoucherNotes>string</VoucherNotes>
  </Vendor>
  <NextPage>string</NextPage>
  <RequestRunSummary>string</RequestRunSummary>
  <TotalCount>0</TotalCount>
  <Items/>
</VendorCollection>
```

<h3 id="get__invoice_vendors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[VendorCollection](#schemavendorcollection)|

<aside class="success">
This operation does not require authentication
</aside>

#### post__invoice_vendors

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/invoice/vendors \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST https://www.concursolutions.com/api/v3.0/invoice/vendors HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "Vendor": {
    "AccountNumber": "string",
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "AddressCode": "string",
    "AddressImportSyncID": "string",
    "Approved": "string",
    "City": "string",
    "ContactEmail": "string",
    "ContactFirstName": "string",
    "ContactLastName": "string",
    "ContactPhoneNumber": "string",
    "Country": "string",
    "CountryCode": "string",
    "CurrencyCode": "string",
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
    "DefaultEmployeeID": "string",
    "DefaultExpenseTypeName": "string",
    "DiscountPercentage": "string",
    "DiscountTermsDays": "string",
    "ID": "string",
    "IsLineItemVatIncld": "string",
    "IsVisibleForContentExtraction": "string",
    "PaymentMethodType": "string",
    "PaymentTerms": "string",
    "PostalCode": "string",
    "ProvincialTaxID": "string",
    "PurchaseOrderContactEmail": "string",
    "PurchaseOrderContactFirstName": "string",
    "PurchaseOrderContactLastName": "string",
    "PurchaseOrderContactPhoneNumber": "string",
    "ShippingMethod": "string",
    "ShippingTerms": "string",
    "State": "string",
    "StatusList": {
      "Code": 0,
      "Message": "string",
      "RecordNumber": 0,
      "Type": "string"
    },
    "TaxID": "string",
    "TaxType": "string",
    "URI": "string",
    "VendorBankList": {
      "AccountNumber": "string",
      "AccountType": "string",
      "AddressCode": "string",
      "BankCode": "string",
      "BankName": "string",
      "BranchCode": "string",
      "BranchLocation": "string",
      "CountryCode": "string",
      "CurrencyAlphaCode": "string",
      "ID": "string",
      "IsActive": "string",
      "NameOnAccount": "string",
      "RoutingNumber": "string",
      "StatusList": {
        "Code": 0,
        "Message": "string",
        "RecordNumber": 0,
        "Type": "string"
      },
      "TransType": "string",
      "URI": "string",
      "VendorCode": "string"
    },
    "VendorCode": "string",
    "VendorFormName": "string",
    "VendorGroupList": [
      "string"
    ],
    "VendorName": "string",
    "VoucherNotes": "string"
  },
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/vendors',
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

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/invoice/vendors',
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

r = requests.post('https://www.concursolutions.com/api/v3.0/invoice/vendors', headers = headers)

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
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/invoice/vendors', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/vendors");
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
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/invoice/vendors", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /invoice/vendors`

*Creates new vendors.*

Creates a new vendor and returns the status of creation.

> Body parameter

```json
{
  "Vendor": {
    "AccountNumber": "string",
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "AddressCode": "string",
    "AddressImportSyncID": "string",
    "Approved": "string",
    "City": "string",
    "ContactEmail": "string",
    "ContactFirstName": "string",
    "ContactLastName": "string",
    "ContactPhoneNumber": "string",
    "Country": "string",
    "CountryCode": "string",
    "CurrencyCode": "string",
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
    "DefaultEmployeeID": "string",
    "DefaultExpenseTypeName": "string",
    "DiscountPercentage": "string",
    "DiscountTermsDays": "string",
    "ID": "string",
    "IsLineItemVatIncld": "string",
    "IsVisibleForContentExtraction": "string",
    "PaymentMethodType": "string",
    "PaymentTerms": "string",
    "PostalCode": "string",
    "ProvincialTaxID": "string",
    "PurchaseOrderContactEmail": "string",
    "PurchaseOrderContactFirstName": "string",
    "PurchaseOrderContactLastName": "string",
    "PurchaseOrderContactPhoneNumber": "string",
    "ShippingMethod": "string",
    "ShippingTerms": "string",
    "State": "string",
    "StatusList": {
      "Code": 0,
      "Message": "string",
      "RecordNumber": 0,
      "Type": "string"
    },
    "TaxID": "string",
    "TaxType": "string",
    "URI": "string",
    "VendorBankList": {
      "AccountNumber": "string",
      "AccountType": "string",
      "AddressCode": "string",
      "BankCode": "string",
      "BankName": "string",
      "BranchCode": "string",
      "BranchLocation": "string",
      "CountryCode": "string",
      "CurrencyAlphaCode": "string",
      "ID": "string",
      "IsActive": "string",
      "NameOnAccount": "string",
      "RoutingNumber": "string",
      "StatusList": {
        "Code": 0,
        "Message": "string",
        "RecordNumber": 0,
        "Type": "string"
      },
      "TransType": "string",
      "URI": "string",
      "VendorCode": "string"
    },
    "VendorCode": "string",
    "VendorFormName": "string",
    "VendorGroupList": [
      "string"
    ],
    "VendorName": "string",
    "VoucherNotes": "string"
  },
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<VendorCollection>
  <Vendor>
    <AccountNumber>string</AccountNumber>
    <Address1>string</Address1>
    <Address2>string</Address2>
    <Address3>string</Address3>
    <AddressCode>string</AddressCode>
    <AddressImportSyncID>string</AddressImportSyncID>
    <Approved>string</Approved>
    <City>string</City>
    <ContactEmail>string</ContactEmail>
    <ContactFirstName>string</ContactFirstName>
    <ContactLastName>string</ContactLastName>
    <ContactPhoneNumber>string</ContactPhoneNumber>
    <Country>string</Country>
    <CountryCode>string</CountryCode>
    <CurrencyCode>string</CurrencyCode>
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
    <DefaultEmployeeID>string</DefaultEmployeeID>
    <DefaultExpenseTypeName>string</DefaultExpenseTypeName>
    <DiscountPercentage>string</DiscountPercentage>
    <DiscountTermsDays>string</DiscountTermsDays>
    <ID>string</ID>
    <IsLineItemVatIncld>string</IsLineItemVatIncld>
    <IsVisibleForContentExtraction>string</IsVisibleForContentExtraction>
    <PaymentMethodType>string</PaymentMethodType>
    <PaymentTerms>string</PaymentTerms>
    <PostalCode>string</PostalCode>
    <ProvincialTaxID>string</ProvincialTaxID>
    <PurchaseOrderContactEmail>string</PurchaseOrderContactEmail>
    <PurchaseOrderContactFirstName>string</PurchaseOrderContactFirstName>
    <PurchaseOrderContactLastName>string</PurchaseOrderContactLastName>
    <PurchaseOrderContactPhoneNumber>string</PurchaseOrderContactPhoneNumber>
    <ShippingMethod>string</ShippingMethod>
    <ShippingTerms>string</ShippingTerms>
    <State>string</State>
    <StatusList>
      <Code>0</Code>
      <Message>string</Message>
      <RecordNumber>0</RecordNumber>
      <Type>string</Type>
    </StatusList>
    <TaxID>string</TaxID>
    <TaxType>string</TaxType>
    <URI>string</URI>
    <VendorBankList>
      <AccountNumber>string</AccountNumber>
      <AccountType>string</AccountType>
      <AddressCode>string</AddressCode>
      <BankCode>string</BankCode>
      <BankName>string</BankName>
      <BranchCode>string</BranchCode>
      <BranchLocation>string</BranchLocation>
      <CountryCode>string</CountryCode>
      <CurrencyAlphaCode>string</CurrencyAlphaCode>
      <ID>string</ID>
      <IsActive>string</IsActive>
      <NameOnAccount>string</NameOnAccount>
      <RoutingNumber>string</RoutingNumber>
      <StatusList>
        <Code>0</Code>
        <Message>string</Message>
        <RecordNumber>0</RecordNumber>
        <Type>string</Type>
      </StatusList>
      <TransType>string</TransType>
      <URI>string</URI>
      <VendorCode>string</VendorCode>
    </VendorBankList>
    <VendorCode>string</VendorCode>
    <VendorFormName>string</VendorFormName>
    <VendorGroupList>string</VendorGroupList>
    <VendorName>string</VendorName>
    <VoucherNotes>string</VoucherNotes>
  </Vendor>
  <NextPage>string</NextPage>
  <RequestRunSummary>string</RequestRunSummary>
  <TotalCount>0</TotalCount>
  <Items/>
</VendorCollection>
```

<h3 id="post__invoice_vendors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VendorCollection](#schemavendorcollection)|true|The vendor details.|

> Example responses

> 200 Response

```json
{
  "Vendor": {
    "AccountNumber": "string",
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "AddressCode": "string",
    "AddressImportSyncID": "string",
    "Approved": "string",
    "City": "string",
    "ContactEmail": "string",
    "ContactFirstName": "string",
    "ContactLastName": "string",
    "ContactPhoneNumber": "string",
    "Country": "string",
    "CountryCode": "string",
    "CurrencyCode": "string",
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
    "DefaultEmployeeID": "string",
    "DefaultExpenseTypeName": "string",
    "DiscountPercentage": "string",
    "DiscountTermsDays": "string",
    "ID": "string",
    "IsLineItemVatIncld": "string",
    "IsVisibleForContentExtraction": "string",
    "PaymentMethodType": "string",
    "PaymentTerms": "string",
    "PostalCode": "string",
    "ProvincialTaxID": "string",
    "PurchaseOrderContactEmail": "string",
    "PurchaseOrderContactFirstName": "string",
    "PurchaseOrderContactLastName": "string",
    "PurchaseOrderContactPhoneNumber": "string",
    "ShippingMethod": "string",
    "ShippingTerms": "string",
    "State": "string",
    "StatusList": {
      "Code": 0,
      "Message": "string",
      "RecordNumber": 0,
      "Type": "string"
    },
    "TaxID": "string",
    "TaxType": "string",
    "URI": "string",
    "VendorBankList": {
      "AccountNumber": "string",
      "AccountType": "string",
      "AddressCode": "string",
      "BankCode": "string",
      "BankName": "string",
      "BranchCode": "string",
      "BranchLocation": "string",
      "CountryCode": "string",
      "CurrencyAlphaCode": "string",
      "ID": "string",
      "IsActive": "string",
      "NameOnAccount": "string",
      "RoutingNumber": "string",
      "StatusList": {
        "Code": 0,
        "Message": "string",
        "RecordNumber": 0,
        "Type": "string"
      },
      "TransType": "string",
      "URI": "string",
      "VendorCode": "string"
    },
    "VendorCode": "string",
    "VendorFormName": "string",
    "VendorGroupList": [
      "string"
    ],
    "VendorName": "string",
    "VoucherNotes": "string"
  },
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<VendorCollection>
  <Vendor>
    <AccountNumber>string</AccountNumber>
    <Address1>string</Address1>
    <Address2>string</Address2>
    <Address3>string</Address3>
    <AddressCode>string</AddressCode>
    <AddressImportSyncID>string</AddressImportSyncID>
    <Approved>string</Approved>
    <City>string</City>
    <ContactEmail>string</ContactEmail>
    <ContactFirstName>string</ContactFirstName>
    <ContactLastName>string</ContactLastName>
    <ContactPhoneNumber>string</ContactPhoneNumber>
    <Country>string</Country>
    <CountryCode>string</CountryCode>
    <CurrencyCode>string</CurrencyCode>
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
    <DefaultEmployeeID>string</DefaultEmployeeID>
    <DefaultExpenseTypeName>string</DefaultExpenseTypeName>
    <DiscountPercentage>string</DiscountPercentage>
    <DiscountTermsDays>string</DiscountTermsDays>
    <ID>string</ID>
    <IsLineItemVatIncld>string</IsLineItemVatIncld>
    <IsVisibleForContentExtraction>string</IsVisibleForContentExtraction>
    <PaymentMethodType>string</PaymentMethodType>
    <PaymentTerms>string</PaymentTerms>
    <PostalCode>string</PostalCode>
    <ProvincialTaxID>string</ProvincialTaxID>
    <PurchaseOrderContactEmail>string</PurchaseOrderContactEmail>
    <PurchaseOrderContactFirstName>string</PurchaseOrderContactFirstName>
    <PurchaseOrderContactLastName>string</PurchaseOrderContactLastName>
    <PurchaseOrderContactPhoneNumber>string</PurchaseOrderContactPhoneNumber>
    <ShippingMethod>string</ShippingMethod>
    <ShippingTerms>string</ShippingTerms>
    <State>string</State>
    <StatusList>
      <Code>0</Code>
      <Message>string</Message>
      <RecordNumber>0</RecordNumber>
      <Type>string</Type>
    </StatusList>
    <TaxID>string</TaxID>
    <TaxType>string</TaxType>
    <URI>string</URI>
    <VendorBankList>
      <AccountNumber>string</AccountNumber>
      <AccountType>string</AccountType>
      <AddressCode>string</AddressCode>
      <BankCode>string</BankCode>
      <BankName>string</BankName>
      <BranchCode>string</BranchCode>
      <BranchLocation>string</BranchLocation>
      <CountryCode>string</CountryCode>
      <CurrencyAlphaCode>string</CurrencyAlphaCode>
      <ID>string</ID>
      <IsActive>string</IsActive>
      <NameOnAccount>string</NameOnAccount>
      <RoutingNumber>string</RoutingNumber>
      <StatusList>
        <Code>0</Code>
        <Message>string</Message>
        <RecordNumber>0</RecordNumber>
        <Type>string</Type>
      </StatusList>
      <TransType>string</TransType>
      <URI>string</URI>
      <VendorCode>string</VendorCode>
    </VendorBankList>
    <VendorCode>string</VendorCode>
    <VendorFormName>string</VendorFormName>
    <VendorGroupList>string</VendorGroupList>
    <VendorName>string</VendorName>
    <VoucherNotes>string</VoucherNotes>
  </Vendor>
  <NextPage>string</NextPage>
  <RequestRunSummary>string</RequestRunSummary>
  <TotalCount>0</TotalCount>
  <Items/>
</VendorCollection>
```

<h3 id="post__invoice_vendors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[VendorCollection](#schemavendorcollection)|

<aside class="success">
This operation does not require authentication
</aside>

#### put__invoice_vendors

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/invoice/vendors \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
PUT https://www.concursolutions.com/api/v3.0/invoice/vendors HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "Vendor": {
    "AccountNumber": "string",
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "AddressCode": "string",
    "AddressImportSyncID": "string",
    "Approved": "string",
    "City": "string",
    "ContactEmail": "string",
    "ContactFirstName": "string",
    "ContactLastName": "string",
    "ContactPhoneNumber": "string",
    "Country": "string",
    "CountryCode": "string",
    "CurrencyCode": "string",
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
    "DefaultEmployeeID": "string",
    "DefaultExpenseTypeName": "string",
    "DiscountPercentage": "string",
    "DiscountTermsDays": "string",
    "ID": "string",
    "IsLineItemVatIncld": "string",
    "IsVisibleForContentExtraction": "string",
    "PaymentMethodType": "string",
    "PaymentTerms": "string",
    "PostalCode": "string",
    "ProvincialTaxID": "string",
    "PurchaseOrderContactEmail": "string",
    "PurchaseOrderContactFirstName": "string",
    "PurchaseOrderContactLastName": "string",
    "PurchaseOrderContactPhoneNumber": "string",
    "ShippingMethod": "string",
    "ShippingTerms": "string",
    "State": "string",
    "StatusList": {
      "Code": 0,
      "Message": "string",
      "RecordNumber": 0,
      "Type": "string"
    },
    "TaxID": "string",
    "TaxType": "string",
    "URI": "string",
    "VendorBankList": {
      "AccountNumber": "string",
      "AccountType": "string",
      "AddressCode": "string",
      "BankCode": "string",
      "BankName": "string",
      "BranchCode": "string",
      "BranchLocation": "string",
      "CountryCode": "string",
      "CurrencyAlphaCode": "string",
      "ID": "string",
      "IsActive": "string",
      "NameOnAccount": "string",
      "RoutingNumber": "string",
      "StatusList": {
        "Code": 0,
        "Message": "string",
        "RecordNumber": 0,
        "Type": "string"
      },
      "TransType": "string",
      "URI": "string",
      "VendorCode": "string"
    },
    "VendorCode": "string",
    "VendorFormName": "string",
    "VendorGroupList": [
      "string"
    ],
    "VendorName": "string",
    "VoucherNotes": "string"
  },
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/vendors',
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

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/invoice/vendors',
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

r = requests.put('https://www.concursolutions.com/api/v3.0/invoice/vendors', headers = headers)

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
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/invoice/vendors', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/vendors");
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
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/invoice/vendors", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /invoice/vendors`

*Manages existing vendors.*

Updates existing vendors and returns the update status.

> Body parameter

```json
{
  "Vendor": {
    "AccountNumber": "string",
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "AddressCode": "string",
    "AddressImportSyncID": "string",
    "Approved": "string",
    "City": "string",
    "ContactEmail": "string",
    "ContactFirstName": "string",
    "ContactLastName": "string",
    "ContactPhoneNumber": "string",
    "Country": "string",
    "CountryCode": "string",
    "CurrencyCode": "string",
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
    "DefaultEmployeeID": "string",
    "DefaultExpenseTypeName": "string",
    "DiscountPercentage": "string",
    "DiscountTermsDays": "string",
    "ID": "string",
    "IsLineItemVatIncld": "string",
    "IsVisibleForContentExtraction": "string",
    "PaymentMethodType": "string",
    "PaymentTerms": "string",
    "PostalCode": "string",
    "ProvincialTaxID": "string",
    "PurchaseOrderContactEmail": "string",
    "PurchaseOrderContactFirstName": "string",
    "PurchaseOrderContactLastName": "string",
    "PurchaseOrderContactPhoneNumber": "string",
    "ShippingMethod": "string",
    "ShippingTerms": "string",
    "State": "string",
    "StatusList": {
      "Code": 0,
      "Message": "string",
      "RecordNumber": 0,
      "Type": "string"
    },
    "TaxID": "string",
    "TaxType": "string",
    "URI": "string",
    "VendorBankList": {
      "AccountNumber": "string",
      "AccountType": "string",
      "AddressCode": "string",
      "BankCode": "string",
      "BankName": "string",
      "BranchCode": "string",
      "BranchLocation": "string",
      "CountryCode": "string",
      "CurrencyAlphaCode": "string",
      "ID": "string",
      "IsActive": "string",
      "NameOnAccount": "string",
      "RoutingNumber": "string",
      "StatusList": {
        "Code": 0,
        "Message": "string",
        "RecordNumber": 0,
        "Type": "string"
      },
      "TransType": "string",
      "URI": "string",
      "VendorCode": "string"
    },
    "VendorCode": "string",
    "VendorFormName": "string",
    "VendorGroupList": [
      "string"
    ],
    "VendorName": "string",
    "VoucherNotes": "string"
  },
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<VendorCollection>
  <Vendor>
    <AccountNumber>string</AccountNumber>
    <Address1>string</Address1>
    <Address2>string</Address2>
    <Address3>string</Address3>
    <AddressCode>string</AddressCode>
    <AddressImportSyncID>string</AddressImportSyncID>
    <Approved>string</Approved>
    <City>string</City>
    <ContactEmail>string</ContactEmail>
    <ContactFirstName>string</ContactFirstName>
    <ContactLastName>string</ContactLastName>
    <ContactPhoneNumber>string</ContactPhoneNumber>
    <Country>string</Country>
    <CountryCode>string</CountryCode>
    <CurrencyCode>string</CurrencyCode>
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
    <DefaultEmployeeID>string</DefaultEmployeeID>
    <DefaultExpenseTypeName>string</DefaultExpenseTypeName>
    <DiscountPercentage>string</DiscountPercentage>
    <DiscountTermsDays>string</DiscountTermsDays>
    <ID>string</ID>
    <IsLineItemVatIncld>string</IsLineItemVatIncld>
    <IsVisibleForContentExtraction>string</IsVisibleForContentExtraction>
    <PaymentMethodType>string</PaymentMethodType>
    <PaymentTerms>string</PaymentTerms>
    <PostalCode>string</PostalCode>
    <ProvincialTaxID>string</ProvincialTaxID>
    <PurchaseOrderContactEmail>string</PurchaseOrderContactEmail>
    <PurchaseOrderContactFirstName>string</PurchaseOrderContactFirstName>
    <PurchaseOrderContactLastName>string</PurchaseOrderContactLastName>
    <PurchaseOrderContactPhoneNumber>string</PurchaseOrderContactPhoneNumber>
    <ShippingMethod>string</ShippingMethod>
    <ShippingTerms>string</ShippingTerms>
    <State>string</State>
    <StatusList>
      <Code>0</Code>
      <Message>string</Message>
      <RecordNumber>0</RecordNumber>
      <Type>string</Type>
    </StatusList>
    <TaxID>string</TaxID>
    <TaxType>string</TaxType>
    <URI>string</URI>
    <VendorBankList>
      <AccountNumber>string</AccountNumber>
      <AccountType>string</AccountType>
      <AddressCode>string</AddressCode>
      <BankCode>string</BankCode>
      <BankName>string</BankName>
      <BranchCode>string</BranchCode>
      <BranchLocation>string</BranchLocation>
      <CountryCode>string</CountryCode>
      <CurrencyAlphaCode>string</CurrencyAlphaCode>
      <ID>string</ID>
      <IsActive>string</IsActive>
      <NameOnAccount>string</NameOnAccount>
      <RoutingNumber>string</RoutingNumber>
      <StatusList>
        <Code>0</Code>
        <Message>string</Message>
        <RecordNumber>0</RecordNumber>
        <Type>string</Type>
      </StatusList>
      <TransType>string</TransType>
      <URI>string</URI>
      <VendorCode>string</VendorCode>
    </VendorBankList>
    <VendorCode>string</VendorCode>
    <VendorFormName>string</VendorFormName>
    <VendorGroupList>string</VendorGroupList>
    <VendorName>string</VendorName>
    <VoucherNotes>string</VoucherNotes>
  </Vendor>
  <NextPage>string</NextPage>
  <RequestRunSummary>string</RequestRunSummary>
  <TotalCount>0</TotalCount>
  <Items/>
</VendorCollection>
```

<h3 id="put__invoice_vendors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VendorCollection](#schemavendorcollection)|true|The vendor details.|

> Example responses

> 200 Response

```json
{
  "Vendor": {
    "AccountNumber": "string",
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "AddressCode": "string",
    "AddressImportSyncID": "string",
    "Approved": "string",
    "City": "string",
    "ContactEmail": "string",
    "ContactFirstName": "string",
    "ContactLastName": "string",
    "ContactPhoneNumber": "string",
    "Country": "string",
    "CountryCode": "string",
    "CurrencyCode": "string",
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
    "DefaultEmployeeID": "string",
    "DefaultExpenseTypeName": "string",
    "DiscountPercentage": "string",
    "DiscountTermsDays": "string",
    "ID": "string",
    "IsLineItemVatIncld": "string",
    "IsVisibleForContentExtraction": "string",
    "PaymentMethodType": "string",
    "PaymentTerms": "string",
    "PostalCode": "string",
    "ProvincialTaxID": "string",
    "PurchaseOrderContactEmail": "string",
    "PurchaseOrderContactFirstName": "string",
    "PurchaseOrderContactLastName": "string",
    "PurchaseOrderContactPhoneNumber": "string",
    "ShippingMethod": "string",
    "ShippingTerms": "string",
    "State": "string",
    "StatusList": {
      "Code": 0,
      "Message": "string",
      "RecordNumber": 0,
      "Type": "string"
    },
    "TaxID": "string",
    "TaxType": "string",
    "URI": "string",
    "VendorBankList": {
      "AccountNumber": "string",
      "AccountType": "string",
      "AddressCode": "string",
      "BankCode": "string",
      "BankName": "string",
      "BranchCode": "string",
      "BranchLocation": "string",
      "CountryCode": "string",
      "CurrencyAlphaCode": "string",
      "ID": "string",
      "IsActive": "string",
      "NameOnAccount": "string",
      "RoutingNumber": "string",
      "StatusList": {
        "Code": 0,
        "Message": "string",
        "RecordNumber": 0,
        "Type": "string"
      },
      "TransType": "string",
      "URI": "string",
      "VendorCode": "string"
    },
    "VendorCode": "string",
    "VendorFormName": "string",
    "VendorGroupList": [
      "string"
    ],
    "VendorName": "string",
    "VoucherNotes": "string"
  },
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<VendorCollection>
  <Vendor>
    <AccountNumber>string</AccountNumber>
    <Address1>string</Address1>
    <Address2>string</Address2>
    <Address3>string</Address3>
    <AddressCode>string</AddressCode>
    <AddressImportSyncID>string</AddressImportSyncID>
    <Approved>string</Approved>
    <City>string</City>
    <ContactEmail>string</ContactEmail>
    <ContactFirstName>string</ContactFirstName>
    <ContactLastName>string</ContactLastName>
    <ContactPhoneNumber>string</ContactPhoneNumber>
    <Country>string</Country>
    <CountryCode>string</CountryCode>
    <CurrencyCode>string</CurrencyCode>
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
    <DefaultEmployeeID>string</DefaultEmployeeID>
    <DefaultExpenseTypeName>string</DefaultExpenseTypeName>
    <DiscountPercentage>string</DiscountPercentage>
    <DiscountTermsDays>string</DiscountTermsDays>
    <ID>string</ID>
    <IsLineItemVatIncld>string</IsLineItemVatIncld>
    <IsVisibleForContentExtraction>string</IsVisibleForContentExtraction>
    <PaymentMethodType>string</PaymentMethodType>
    <PaymentTerms>string</PaymentTerms>
    <PostalCode>string</PostalCode>
    <ProvincialTaxID>string</ProvincialTaxID>
    <PurchaseOrderContactEmail>string</PurchaseOrderContactEmail>
    <PurchaseOrderContactFirstName>string</PurchaseOrderContactFirstName>
    <PurchaseOrderContactLastName>string</PurchaseOrderContactLastName>
    <PurchaseOrderContactPhoneNumber>string</PurchaseOrderContactPhoneNumber>
    <ShippingMethod>string</ShippingMethod>
    <ShippingTerms>string</ShippingTerms>
    <State>string</State>
    <StatusList>
      <Code>0</Code>
      <Message>string</Message>
      <RecordNumber>0</RecordNumber>
      <Type>string</Type>
    </StatusList>
    <TaxID>string</TaxID>
    <TaxType>string</TaxType>
    <URI>string</URI>
    <VendorBankList>
      <AccountNumber>string</AccountNumber>
      <AccountType>string</AccountType>
      <AddressCode>string</AddressCode>
      <BankCode>string</BankCode>
      <BankName>string</BankName>
      <BranchCode>string</BranchCode>
      <BranchLocation>string</BranchLocation>
      <CountryCode>string</CountryCode>
      <CurrencyAlphaCode>string</CurrencyAlphaCode>
      <ID>string</ID>
      <IsActive>string</IsActive>
      <NameOnAccount>string</NameOnAccount>
      <RoutingNumber>string</RoutingNumber>
      <StatusList>
        <Code>0</Code>
        <Message>string</Message>
        <RecordNumber>0</RecordNumber>
        <Type>string</Type>
      </StatusList>
      <TransType>string</TransType>
      <URI>string</URI>
      <VendorCode>string</VendorCode>
    </VendorBankList>
    <VendorCode>string</VendorCode>
    <VendorFormName>string</VendorFormName>
    <VendorGroupList>string</VendorGroupList>
    <VendorName>string</VendorName>
    <VoucherNotes>string</VoucherNotes>
  </Vendor>
  <NextPage>string</NextPage>
  <RequestRunSummary>string</RequestRunSummary>
  <TotalCount>0</TotalCount>
  <Items/>
</VendorCollection>
```

<h3 id="put__invoice_vendors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[VendorCollection](#schemavendorcollection)|

<aside class="success">
This operation does not require authentication
</aside>

#### delete__invoice_vendors

> Code samples

```shell
# You can also use wget
curl -X DELETE https://www.concursolutions.com/api/v3.0/invoice/vendors?vendorCode=string&addressCode=string \
  -H 'Accept: application/json'

```

```http
DELETE https://www.concursolutions.com/api/v3.0/invoice/vendors?vendorCode=string&addressCode=string HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/vendors?vendorCode=string&addressCode=string',
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

result = RestClient.delete 'https://www.concursolutions.com/api/v3.0/invoice/vendors',
  params: {
  'vendorCode' => 'string',
'addressCode' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://www.concursolutions.com/api/v3.0/invoice/vendors', params={
  'vendorCode': 'string',  'addressCode': 'string'
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
    $response = $client->request('DELETE','https://www.concursolutions.com/api/v3.0/invoice/vendors', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/vendors?vendorCode=string&addressCode=string");
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
    req, err := http.NewRequest("DELETE", "https://www.concursolutions.com/api/v3.0/invoice/vendors", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /invoice/vendors`

*Deletes a vendor.*

Deletes a vendor by Vendor Code and Address Code.

<h3 id="delete__invoice_vendors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vendorCode|query|string|true|Vendor Code to be deleted|
|addressCode|query|string|true|Address Code to be deleted|

> Example responses

> 200 Response

```json
{
  "Vendor": {
    "AccountNumber": "string",
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "AddressCode": "string",
    "AddressImportSyncID": "string",
    "Approved": "string",
    "City": "string",
    "ContactEmail": "string",
    "ContactFirstName": "string",
    "ContactLastName": "string",
    "ContactPhoneNumber": "string",
    "Country": "string",
    "CountryCode": "string",
    "CurrencyCode": "string",
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
    "DefaultEmployeeID": "string",
    "DefaultExpenseTypeName": "string",
    "DiscountPercentage": "string",
    "DiscountTermsDays": "string",
    "ID": "string",
    "IsLineItemVatIncld": "string",
    "IsVisibleForContentExtraction": "string",
    "PaymentMethodType": "string",
    "PaymentTerms": "string",
    "PostalCode": "string",
    "ProvincialTaxID": "string",
    "PurchaseOrderContactEmail": "string",
    "PurchaseOrderContactFirstName": "string",
    "PurchaseOrderContactLastName": "string",
    "PurchaseOrderContactPhoneNumber": "string",
    "ShippingMethod": "string",
    "ShippingTerms": "string",
    "State": "string",
    "StatusList": {
      "Code": 0,
      "Message": "string",
      "RecordNumber": 0,
      "Type": "string"
    },
    "TaxID": "string",
    "TaxType": "string",
    "URI": "string",
    "VendorBankList": {
      "AccountNumber": "string",
      "AccountType": "string",
      "AddressCode": "string",
      "BankCode": "string",
      "BankName": "string",
      "BranchCode": "string",
      "BranchLocation": "string",
      "CountryCode": "string",
      "CurrencyAlphaCode": "string",
      "ID": "string",
      "IsActive": "string",
      "NameOnAccount": "string",
      "RoutingNumber": "string",
      "StatusList": {
        "Code": 0,
        "Message": "string",
        "RecordNumber": 0,
        "Type": "string"
      },
      "TransType": "string",
      "URI": "string",
      "VendorCode": "string"
    },
    "VendorCode": "string",
    "VendorFormName": "string",
    "VendorGroupList": [
      "string"
    ],
    "VendorName": "string",
    "VoucherNotes": "string"
  },
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<VendorCollection>
  <Vendor>
    <AccountNumber>string</AccountNumber>
    <Address1>string</Address1>
    <Address2>string</Address2>
    <Address3>string</Address3>
    <AddressCode>string</AddressCode>
    <AddressImportSyncID>string</AddressImportSyncID>
    <Approved>string</Approved>
    <City>string</City>
    <ContactEmail>string</ContactEmail>
    <ContactFirstName>string</ContactFirstName>
    <ContactLastName>string</ContactLastName>
    <ContactPhoneNumber>string</ContactPhoneNumber>
    <Country>string</Country>
    <CountryCode>string</CountryCode>
    <CurrencyCode>string</CurrencyCode>
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
    <DefaultEmployeeID>string</DefaultEmployeeID>
    <DefaultExpenseTypeName>string</DefaultExpenseTypeName>
    <DiscountPercentage>string</DiscountPercentage>
    <DiscountTermsDays>string</DiscountTermsDays>
    <ID>string</ID>
    <IsLineItemVatIncld>string</IsLineItemVatIncld>
    <IsVisibleForContentExtraction>string</IsVisibleForContentExtraction>
    <PaymentMethodType>string</PaymentMethodType>
    <PaymentTerms>string</PaymentTerms>
    <PostalCode>string</PostalCode>
    <ProvincialTaxID>string</ProvincialTaxID>
    <PurchaseOrderContactEmail>string</PurchaseOrderContactEmail>
    <PurchaseOrderContactFirstName>string</PurchaseOrderContactFirstName>
    <PurchaseOrderContactLastName>string</PurchaseOrderContactLastName>
    <PurchaseOrderContactPhoneNumber>string</PurchaseOrderContactPhoneNumber>
    <ShippingMethod>string</ShippingMethod>
    <ShippingTerms>string</ShippingTerms>
    <State>string</State>
    <StatusList>
      <Code>0</Code>
      <Message>string</Message>
      <RecordNumber>0</RecordNumber>
      <Type>string</Type>
    </StatusList>
    <TaxID>string</TaxID>
    <TaxType>string</TaxType>
    <URI>string</URI>
    <VendorBankList>
      <AccountNumber>string</AccountNumber>
      <AccountType>string</AccountType>
      <AddressCode>string</AddressCode>
      <BankCode>string</BankCode>
      <BankName>string</BankName>
      <BranchCode>string</BranchCode>
      <BranchLocation>string</BranchLocation>
      <CountryCode>string</CountryCode>
      <CurrencyAlphaCode>string</CurrencyAlphaCode>
      <ID>string</ID>
      <IsActive>string</IsActive>
      <NameOnAccount>string</NameOnAccount>
      <RoutingNumber>string</RoutingNumber>
      <StatusList>
        <Code>0</Code>
        <Message>string</Message>
        <RecordNumber>0</RecordNumber>
        <Type>string</Type>
      </StatusList>
      <TransType>string</TransType>
      <URI>string</URI>
      <VendorCode>string</VendorCode>
    </VendorBankList>
    <VendorCode>string</VendorCode>
    <VendorFormName>string</VendorFormName>
    <VendorGroupList>string</VendorGroupList>
    <VendorName>string</VendorName>
    <VoucherNotes>string</VoucherNotes>
  </Vendor>
  <NextPage>string</NextPage>
  <RequestRunSummary>string</RequestRunSummary>
  <TotalCount>0</TotalCount>
  <Items/>
</VendorCollection>
```

<h3 id="delete__invoice_vendors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[VendorCollection](#schemavendorcollection)|

<aside class="success">
This operation does not require authentication
</aside>

### Schemas

<h3 id="tocS_Status">Status</h3>

<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "Code": 0,
  "Message": "string",
  "RecordNumber": 0,
  "Type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|integer(int32)|false|none|Code of request result|
|Message|string|false|none|Message of request result|
|RecordNumber|integer(int32)|false|none|Record Number for create/update request.|
|Type|string|false|none|Type request result|

<h3 id="tocS_Vendor">Vendor</h3>

<a id="schemavendor"></a>
<a id="schema_Vendor"></a>
<a id="tocSvendor"></a>
<a id="tocsvendor"></a>

```json
{
  "AccountNumber": "string",
  "Address1": "string",
  "Address2": "string",
  "Address3": "string",
  "AddressCode": "string",
  "AddressImportSyncID": "string",
  "Approved": "string",
  "City": "string",
  "ContactEmail": "string",
  "ContactFirstName": "string",
  "ContactLastName": "string",
  "ContactPhoneNumber": "string",
  "Country": "string",
  "CountryCode": "string",
  "CurrencyCode": "string",
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
  "DefaultEmployeeID": "string",
  "DefaultExpenseTypeName": "string",
  "DiscountPercentage": "string",
  "DiscountTermsDays": "string",
  "ID": "string",
  "IsLineItemVatIncld": "string",
  "IsVisibleForContentExtraction": "string",
  "PaymentMethodType": "string",
  "PaymentTerms": "string",
  "PostalCode": "string",
  "ProvincialTaxID": "string",
  "PurchaseOrderContactEmail": "string",
  "PurchaseOrderContactFirstName": "string",
  "PurchaseOrderContactLastName": "string",
  "PurchaseOrderContactPhoneNumber": "string",
  "ShippingMethod": "string",
  "ShippingTerms": "string",
  "State": "string",
  "StatusList": {
    "Code": 0,
    "Message": "string",
    "RecordNumber": 0,
    "Type": "string"
  },
  "TaxID": "string",
  "TaxType": "string",
  "URI": "string",
  "VendorBankList": {
    "AccountNumber": "string",
    "AccountType": "string",
    "AddressCode": "string",
    "BankCode": "string",
    "BankName": "string",
    "BranchCode": "string",
    "BranchLocation": "string",
    "CountryCode": "string",
    "CurrencyAlphaCode": "string",
    "ID": "string",
    "IsActive": "string",
    "NameOnAccount": "string",
    "RoutingNumber": "string",
    "StatusList": {
      "Code": 0,
      "Message": "string",
      "RecordNumber": 0,
      "Type": "string"
    },
    "TransType": "string",
    "URI": "string",
    "VendorCode": "string"
  },
  "VendorCode": "string",
  "VendorFormName": "string",
  "VendorGroupList": [
    "string"
  ],
  "VendorName": "string",
  "VoucherNotes": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountNumber|string|false|none|The Buyer Account Number.|
|Address1|string|false|none|The Vendor Address 1.|
|Address2|string|false|none|The Vendor Address 2.|
|Address3|string|false|none|The Vendor Address 3.|
|AddressCode|string|false|none|The Address Code.|
|AddressImportSyncID|string|false|none|This ID is originally generated by Invoice when an employee requests a new vendor. The Employee Request Vendor Extract provides this value to positively identify the vendor address record when reimporting vendor from the client's system of record for the Vendor Master List.|
|Approved|string|false|none|Vendor Approval Status.|
|City|string|false|none|The Vendor City.|
|ContactEmail|string|false|none|The Vendor Contact Email.|
|ContactFirstName|string|false|none|The Vendor Contact First Name.|
|ContactLastName|string|false|none|The Vendor Contact Last Name.|
|ContactPhoneNumber|string|false|none|The Vendor Contact Phone Number.|
|Country|string|false|none|The Vendor Country.|
|CountryCode|string|false|none|The Vendor Country Code.|
|CurrencyCode|string|false|none|The Vendor Currency Code.|
|Custom1|string|false|none|A value that can be applied to a custom field 1 that is part of the vendor form.|
|Custom2|string|false|none|A value that can be applied to a custom field 10 that is part of the vendor form.|
|Custom3|string|false|none|A value that can be applied to a custom field 11 that is part of the vendor form.|
|Custom4|string|false|none|A value that can be applied to a custom field 12 that is part of the vendor form.|
|Custom5|string|false|none|A value that can be applied to a custom field 13 that is part of the vendor form.|
|Custom6|string|false|none|A value that can be applied to a custom field 14 that is part of the vendor form.|
|Custom7|string|false|none|A value that can be applied to a custom field 15 that is part of the vendor form.|
|Custom8|string|false|none|A value that can be applied to a custom field 16 that is part of the vendor form.|
|Custom9|string|false|none|A value that can be applied to a custom field 17 that is part of the vendor form.|
|Custom10|string|false|none|A value that can be applied to a custom field 18 that is part of the vendor form.|
|Custom11|string|false|none|A value that can be applied to a custom field 19 that is part of the vendor form.|
|Custom12|string|false|none|A value that can be applied to a custom field 2 that is part of the vendor form.|
|Custom13|string|false|none|A value that can be applied to a custom field 20 that is part of the vendor form.|
|Custom14|string|false|none|A value that can be applied to a custom field 3 that is part of the vendor form.|
|Custom15|string|false|none|A value that can be applied to a custom field 4 that is part of the vendor form.|
|Custom16|string|false|none|A value that can be applied to a custom field 5 that is part of the vendor form.|
|Custom17|string|false|none|A value that can be applied to a custom field 6 that is part of the vendor form.|
|Custom18|string|false|none|A value that can be applied to a custom field 7 that is part of the vendor form.|
|Custom19|string|false|none|A value that can be applied to a custom field 8 that is part of the vendor form.|
|Custom20|string|false|none|A value that can be applied to a custom field 9 that is part of the vendor form.|
|DefaultEmployeeID|string|false|none|The Default Employee ID of the employee connected to the vendor.|
|DefaultExpenseTypeName|string|false|none|The Default Expense Type tied to the vendor.|
|DiscountPercentage|string|false|none|The Discount Percentage.|
|DiscountTermsDays|string|false|none|The Vendor Discount Terms Days.|
|ID|string|false|none|The unique identifier of the resource.|
|IsLineItemVatIncld|string|false|none|Line item Unit Price Contains VAT|
|IsVisibleForContentExtraction|string|false|none|Flag that indicates if the vendor will be available for OCR within Brainware|
|PaymentMethodType|string|false|none|Preferred Payment Type for Vendor.|
|PaymentTerms|string|false|none|The Vendor Payment Terms.|
|PostalCode|string|false|none|The Vendor Postal Code / Zip.|
|ProvincialTaxID|string|false|none|The Vendor Provincial Tax ID. Note that this value is not encrypted at REST.|
|PurchaseOrderContactEmail|string|false|none|The Purchase Order Contact Email.|
|PurchaseOrderContactFirstName|string|false|none|The Purchase Order Contact First Name.|
|PurchaseOrderContactLastName|string|false|none|The Purchase Order Contact Last Name.|
|PurchaseOrderContactPhoneNumber|string|false|none|The Purchase Order Contact Phone Number.|
|ShippingMethod|string|false|none|The Vendor Shipping Method.|
|ShippingTerms|string|false|none|The Vendor Shipping Terms.|
|State|string|false|none|The Vendor State.|
|StatusList|[Status](#schemastatus)|false|none|none|
|TaxID|string|false|none|The Vendor Tax ID. Note that this value is not encrypted at REST.|
|TaxType|string|false|none|The Vendor Tax Type.|
|URI|string|false|none|The URI to the resource.|
|VendorBankList|[VendorBank](#schemavendorbank)|false|none|none|
|VendorCode|string|false|none|The vendor code of the request.|
|VendorFormName|string|false|none|The vendor form name this vendor is associated with.|
|VendorGroupList|[string]|false|none|The list of vendor groups by name.|
|VendorName|string|false|none|The name of the vendor.|
|VoucherNotes|string|false|none|Notes sent to Vendor along with authorization to charge Card Voucher.|

<h3 id="tocS_VendorBank">VendorBank</h3>

<a id="schemavendorbank"></a>
<a id="schema_VendorBank"></a>
<a id="tocSvendorbank"></a>
<a id="tocsvendorbank"></a>

```json
{
  "AccountNumber": "string",
  "AccountType": "string",
  "AddressCode": "string",
  "BankCode": "string",
  "BankName": "string",
  "BranchCode": "string",
  "BranchLocation": "string",
  "CountryCode": "string",
  "CurrencyAlphaCode": "string",
  "ID": "string",
  "IsActive": "string",
  "NameOnAccount": "string",
  "RoutingNumber": "string",
  "StatusList": {
    "Code": 0,
    "Message": "string",
    "RecordNumber": 0,
    "Type": "string"
  },
  "TransType": "string",
  "URI": "string",
  "VendorCode": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountNumber|string|false|none|The account number.|
|AccountType|string|false|none|The account type.|
|AddressCode|string|false|none|The Address Code.|
|BankCode|string|false|none|Bank Code|
|BankName|string|false|none|The bank name.|
|BranchCode|string|false|none|Branch Code|
|BranchLocation|string|false|none|The branch location|
|CountryCode|string|false|none|The country code.|
|CurrencyAlphaCode|string|false|none|The currency alpha Code.|
|ID|string|false|none|The unique identifier of the resource.|
|IsActive|string|false|none|Is information active|
|NameOnAccount|string|false|none|The name on the account.|
|RoutingNumber|string|false|none|The routing number.|
|StatusList|[Status](#schemastatus)|false|none|none|
|TransType|string|false|none|The trans type.|
|URI|string|false|none|The URI to the resource.|
|VendorCode|string|false|none|The vendor code of the request.|

<h3 id="tocS_VendorCollection">VendorCollection</h3>

<a id="schemavendorcollection"></a>
<a id="schema_VendorCollection"></a>
<a id="tocSvendorcollection"></a>
<a id="tocsvendorcollection"></a>

```json
{
  "Vendor": {
    "AccountNumber": "string",
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "AddressCode": "string",
    "AddressImportSyncID": "string",
    "Approved": "string",
    "City": "string",
    "ContactEmail": "string",
    "ContactFirstName": "string",
    "ContactLastName": "string",
    "ContactPhoneNumber": "string",
    "Country": "string",
    "CountryCode": "string",
    "CurrencyCode": "string",
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
    "DefaultEmployeeID": "string",
    "DefaultExpenseTypeName": "string",
    "DiscountPercentage": "string",
    "DiscountTermsDays": "string",
    "ID": "string",
    "IsLineItemVatIncld": "string",
    "IsVisibleForContentExtraction": "string",
    "PaymentMethodType": "string",
    "PaymentTerms": "string",
    "PostalCode": "string",
    "ProvincialTaxID": "string",
    "PurchaseOrderContactEmail": "string",
    "PurchaseOrderContactFirstName": "string",
    "PurchaseOrderContactLastName": "string",
    "PurchaseOrderContactPhoneNumber": "string",
    "ShippingMethod": "string",
    "ShippingTerms": "string",
    "State": "string",
    "StatusList": {
      "Code": 0,
      "Message": "string",
      "RecordNumber": 0,
      "Type": "string"
    },
    "TaxID": "string",
    "TaxType": "string",
    "URI": "string",
    "VendorBankList": {
      "AccountNumber": "string",
      "AccountType": "string",
      "AddressCode": "string",
      "BankCode": "string",
      "BankName": "string",
      "BranchCode": "string",
      "BranchLocation": "string",
      "CountryCode": "string",
      "CurrencyAlphaCode": "string",
      "ID": "string",
      "IsActive": "string",
      "NameOnAccount": "string",
      "RoutingNumber": "string",
      "StatusList": {
        "Code": 0,
        "Message": "string",
        "RecordNumber": 0,
        "Type": "string"
      },
      "TransType": "string",
      "URI": "string",
      "VendorCode": "string"
    },
    "VendorCode": "string",
    "VendorFormName": "string",
    "VendorGroupList": [
      "string"
    ],
    "VendorName": "string",
    "VoucherNotes": "string"
  },
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Vendor|[Vendor](#schemavendor)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|
|RequestRunSummary|string|false|none|The URI of the next page of results, if any.|
|TotalCount|integer(int32)|false|none|Record Number for create/update request.|
|Items|any|false|none|none|


# Version 3.1
