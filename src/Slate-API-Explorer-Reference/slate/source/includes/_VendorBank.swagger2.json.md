---
title: VendorBank v3.0
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

<h2 id="vendorbank">VendorBank v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An invoice is a bill of sale for goods or services provided by a vendor. This API provides methods to create or update banking information for the specified invoice vendor.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

<h3 id="vendorbank-resources">Resources</h3>

#### put__invoice_vendor_banks

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/invoice/vendor/banks \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
PUT https://www.concursolutions.com/api/v3.0/invoice/vendor/banks HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "VendorBank": {
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
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/vendor/banks',
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

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/invoice/vendor/banks',
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

r = requests.put('https://www.concursolutions.com/api/v3.0/invoice/vendor/banks', headers = headers)

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
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/invoice/vendor/banks', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/vendor/banks");
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
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/invoice/vendor/banks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /invoice/vendor/banks`

*Updates/creates vendor banking information.*

Updates/creates vendor banking information.

> Body parameter

```json
{
  "VendorBank": {
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
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<VendorBankCollection>
  <VendorBank>
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
  </VendorBank>
  <NextPage>string</NextPage>
  <RequestRunSummary>string</RequestRunSummary>
  <TotalCount>0</TotalCount>
  <Items/>
</VendorBankCollection>
```

<h3 id="put__invoice_vendor_banks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VendorBankCollection](#schemavendorbankcollection)|true|The vendor bank details.|

> Example responses

> 200 Response

```json
{
  "VendorBank": {
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
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<VendorBankCollection>
  <VendorBank>
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
  </VendorBank>
  <NextPage>string</NextPage>
  <RequestRunSummary>string</RequestRunSummary>
  <TotalCount>0</TotalCount>
  <Items/>
</VendorBankCollection>
```

<h3 id="put__invoice_vendor_banks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[VendorBankCollection](#schemavendorbankcollection)|

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
|AccountType|string|false|none|The account type--CHCK for checking, SAVE for saving|
|AddressCode|string|false|none|The Vendor Address Code.|
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

<h3 id="tocS_VendorBankCollection">VendorBankCollection</h3>

<a id="schemavendorbankcollection"></a>
<a id="schema_VendorBankCollection"></a>
<a id="tocSvendorbankcollection"></a>
<a id="tocsvendorbankcollection"></a>

```json
{
  "VendorBank": {
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
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VendorBank|[VendorBank](#schemavendorbank)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|
|RequestRunSummary|string|false|none|The URI of the next page of results, if any.|
|TotalCount|integer(int32)|false|none|Record Number for create/update request.|
|Items|any|false|none|none|

