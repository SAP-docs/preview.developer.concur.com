---
title: Suppliers v3.0
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

<h1 id="suppliers">Suppliers v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

TripLink supplier information.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

<h1 id="suppliers-resources">Resources</h1>

## get__common_suppliers

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/common/suppliers \
  -H 'Accept: application/json'

```

```http
GET https://www.concursolutions.com/api/v3.0/common/suppliers HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/common/suppliers',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/common/suppliers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/common/suppliers', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/common/suppliers', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/suppliers");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/common/suppliers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /common/suppliers`

*Gets All Suppliers by Search Criteria*

Returns all Suppliers based on the search criteria.

<h3 id="get__common_suppliers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Name|
|address|query|string|false|Address|
|address2|query|string|false|Address|
|city|query|string|false|City|
|state|query|string|false|State|
|zip|query|string|false|Zip|
|country|query|string|false|Country Code|
|phone|query|string|false|Phone|
|mcCode|query|string|false|MCC Code (Ex: Delta Airline - 3058)|
|taxId|query|string|false|Tax Id|
|merchantType|query|string|false|Merchant Type Code(Ex: Visa - VI, Amex - AX) |
|merchantID|query|string|false|Merchant Id|
|iataCode|query|string|false|IATA Code|
|relevance|query|integer(int32)|false|Relevance of the Search results|

> Example responses

> 200 Response

```json
{
  "Items": {
    "BusinessName": "string",
    "City": "string",
    "CountryCode": "string",
    "ID": "string",
    "PostalCode": "string",
    "State": "string",
    "StreetAddress": "string",
    "StreetAddress2": "string",
    "URI": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<SupplierCollection>
  <Items>
    <BusinessName>string</BusinessName>
    <City>string</City>
    <CountryCode>string</CountryCode>
    <ID>string</ID>
    <PostalCode>string</PostalCode>
    <State>string</State>
    <StreetAddress>string</StreetAddress>
    <StreetAddress2>string</StreetAddress2>
    <URI>string</URI>
  </Items>
  <NextPage>string</NextPage>
</SupplierCollection>
```

<h3 id="get__common_suppliers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[SupplierCollection](#schemasuppliercollection)|

<aside class="success">
This operation does not require authentication
</aside>

## get__common_suppliers_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/common/suppliers/{id} \
  -H 'Accept: application/json'

```

```http
GET https://www.concursolutions.com/api/v3.0/common/suppliers/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/common/suppliers/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/common/suppliers/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/common/suppliers/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/common/suppliers/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/suppliers/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/common/suppliers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /common/suppliers/{id}`

*Get a single Supplier by ID*

Returns a single Supplier ID

<h3 id="get__common_suppliers_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Supplier Id|

> Example responses

> 200 Response

```json
{
  "AmadeusId": "string",
  "AustinTetra": "string",
  "BusinessName": "string",
  "ChainCode": "string",
  "ChainName": "string",
  "City": "string",
  "CountryCode": "string",
  "CreditCardVendorId": "string",
  "DunsNumber": "string",
  "Email": "string",
  "Fax": "string",
  "GalileoId": "string",
  "ID": "string",
  "MccCode": "string",
  "NorthstarId": "string",
  "PegasusId": "string",
  "Phone": "string",
  "PostalCode": "string",
  "PrimaryNaics": "string",
  "PrimarySic": "string",
  "PropertyCode": "string",
  "SabreId": "string",
  "SecondaryNaics": "string",
  "SecondarySic": "string",
  "State": "string",
  "StreetAddress": "string",
  "StreetAddress2": "string",
  "TaxId": "string",
  "TollFree": "string",
  "URI": "string",
  "WebUrl": "string",
  "WorldspanId": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<SupplierSingle>
  <AmadeusId>string</AmadeusId>
  <AustinTetra>string</AustinTetra>
  <BusinessName>string</BusinessName>
  <ChainCode>string</ChainCode>
  <ChainName>string</ChainName>
  <City>string</City>
  <CountryCode>string</CountryCode>
  <CreditCardVendorId>string</CreditCardVendorId>
  <DunsNumber>string</DunsNumber>
  <Email>string</Email>
  <Fax>string</Fax>
  <GalileoId>string</GalileoId>
  <ID>string</ID>
  <MccCode>string</MccCode>
  <NorthstarId>string</NorthstarId>
  <PegasusId>string</PegasusId>
  <Phone>string</Phone>
  <PostalCode>string</PostalCode>
  <PrimaryNaics>string</PrimaryNaics>
  <PrimarySic>string</PrimarySic>
  <PropertyCode>string</PropertyCode>
  <SabreId>string</SabreId>
  <SecondaryNaics>string</SecondaryNaics>
  <SecondarySic>string</SecondarySic>
  <State>string</State>
  <StreetAddress>string</StreetAddress>
  <StreetAddress2>string</StreetAddress2>
  <TaxId>string</TaxId>
  <TollFree>string</TollFree>
  <URI>string</URI>
  <WebUrl>string</WebUrl>
  <WorldspanId>string</WorldspanId>
</SupplierSingle>
```

<h3 id="get__common_suppliers_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[SupplierSingle](#schemasuppliersingle)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_SupplierCollection">SupplierCollection</h2>

<a id="schemasuppliercollection"></a>
<a id="schema_SupplierCollection"></a>
<a id="tocSsuppliercollection"></a>
<a id="tocssuppliercollection"></a>

```json
{
  "Items": {
    "BusinessName": "string",
    "City": "string",
    "CountryCode": "string",
    "ID": "string",
    "PostalCode": "string",
    "State": "string",
    "StreetAddress": "string",
    "StreetAddress2": "string",
    "URI": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[SupplierGet](#schemasupplierget)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h2 id="tocS_SupplierGet">SupplierGet</h2>

<a id="schemasupplierget"></a>
<a id="schema_SupplierGet"></a>
<a id="tocSsupplierget"></a>
<a id="tocssupplierget"></a>

```json
{
  "BusinessName": "string",
  "City": "string",
  "CountryCode": "string",
  "ID": "string",
  "PostalCode": "string",
  "State": "string",
  "StreetAddress": "string",
  "StreetAddress2": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BusinessName|string|false|none|Name|
|City|string|false|none|City|
|CountryCode|string|false|none|Country Code|
|ID|string|false|none|The unique identifier of the resource.|
|PostalCode|string|false|none|Zip|
|State|string|false|none|State|
|StreetAddress|string|false|none|Address|
|StreetAddress2|string|false|none|Address2|
|URI|string|false|none|The URI to the resource.|

<h2 id="tocS_SupplierSingle">SupplierSingle</h2>

<a id="schemasuppliersingle"></a>
<a id="schema_SupplierSingle"></a>
<a id="tocSsuppliersingle"></a>
<a id="tocssuppliersingle"></a>

```json
{
  "AmadeusId": "string",
  "AustinTetra": "string",
  "BusinessName": "string",
  "ChainCode": "string",
  "ChainName": "string",
  "City": "string",
  "CountryCode": "string",
  "CreditCardVendorId": "string",
  "DunsNumber": "string",
  "Email": "string",
  "Fax": "string",
  "GalileoId": "string",
  "ID": "string",
  "MccCode": "string",
  "NorthstarId": "string",
  "PegasusId": "string",
  "Phone": "string",
  "PostalCode": "string",
  "PrimaryNaics": "string",
  "PrimarySic": "string",
  "PropertyCode": "string",
  "SabreId": "string",
  "SecondaryNaics": "string",
  "SecondarySic": "string",
  "State": "string",
  "StreetAddress": "string",
  "StreetAddress2": "string",
  "TaxId": "string",
  "TollFree": "string",
  "URI": "string",
  "WebUrl": "string",
  "WorldspanId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmadeusId|string|false|none|Amadeus Id|
|AustinTetra|string|false|none|Austin Tetra|
|BusinessName|string|false|none|Name|
|ChainCode|string|false|none|Chain Code|
|ChainName|string|false|none|Chain Name|
|City|string|false|none|City|
|CountryCode|string|false|none|Country Code|
|CreditCardVendorId|string|false|none|Creditcard Vendor Id|
|DunsNumber|string|false|none|Duns Number|
|Email|string|false|none|Email|
|Fax|string|false|none|Fax|
|GalileoId|string|false|none|Galileo Id|
|ID|string|false|none|The unique identifier of the resource.|
|MccCode|string|false|none|MCC Code (Ex: Delta Airline - 3058)|
|NorthstarId|string|false|none|Northstar Id|
|PegasusId|string|false|none|Pegasus Id|
|Phone|string|false|none|Phone|
|PostalCode|string|false|none|Zip|
|PrimaryNaics|string|false|none|Primary Naics Code|
|PrimarySic|string|false|none|Primary Sic Code|
|PropertyCode|string|false|none|undefined:ConnectSwaggerDocs-SUP_PARAM_PROPERTY_CODE|
|SabreId|string|false|none|Sabre Id|
|SecondaryNaics|string|false|none|Secondary Naics Code|
|SecondarySic|string|false|none|Secondary Sic Code|
|State|string|false|none|State|
|StreetAddress|string|false|none|Address|
|StreetAddress2|string|false|none|Address2|
|TaxId|string|false|none|Tax Id|
|TollFree|string|false|none|Toll Free|
|URI|string|false|none|The URI to the resource.|
|WebUrl|string|false|none|Web Address|
|WorldspanId|string|false|none|Worldspan Id|

