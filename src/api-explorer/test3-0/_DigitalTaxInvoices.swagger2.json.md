---
title: Digital Tax Invoices v3.0
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

<h1 id="digital-tax-invoices">Digital Tax Invoices v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The regulations of some countries require that clients provide an electronic receipt in digital XML format for each reimbursable expense. In addition, the client must: Store the XML file in order to claim the expense for tax purposes, be able to produce the original XML file in case of audit, and validate the XML file with the government. To help meet this requirement, Concur offers the Digital Tax Invoice feature. For Mexico, the official digital XML file is called Comprobante Fiscal Digital, or CFDi. This API provides methods to view and update digital tax invoices.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

# Authentication

- oAuth2 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication information</a> for more information.

    - Flow: clientCredentials

    - Token URL = [https://us.api.concursolutions.com/oauth2/v0](https://us.api.concursolutions.com/oauth2/v0)

<h1 id="digital-tax-invoices-resources">Resources</h1>

## get__expense_digitaltaxinvoices

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/digitaltaxinvoices`

*Get digital tax invoices*

Gets all digital tax invoices that can be validated by the user based on the search criteria.

<h3 id="get__expense_digitaltaxinvoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|The starting point of the next set of results, after the limit specified in the limit field has been reached.|
|limit|query|integer(int32)|false|The number of records to return. Default value: 25|
|modifiedafter|query|string|false|A modification date for the queue record; this parameter can be used to limit the results of the GET request to the queue items that have been added since the last time the validation company queried the queue. The user must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "Items": {
    "ConcurReceiptID": "string",
    "ID": "string",
    "URI": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<DigitalTaxInvoiceCollection>
  <Items>
    <ConcurReceiptID>string</ConcurReceiptID>
    <ID>string</ID>
    <URI>string</URI>
  </Items>
  <NextPage>string</NextPage>
</DigitalTaxInvoiceCollection>
```

<h3 id="get__expense_digitaltaxinvoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DigitalTaxInvoiceCollection](#schemadigitaltaxinvoicecollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## get__expense_digitaltaxinvoices_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id}',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/digitaltaxinvoices/{id}`

*Get a single digital tax invoice*

Gets the specified digital tax invoice.

<h3 id="get__expense_digitaltaxinvoices_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the digital tax invoice.|

> Example responses

> 200 Response

```json
{
  "AccountID": "string",
  "ConcurReceiptID": "string",
  "DocumentID": "string",
  "ReceiptData": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<DigitalTaxInvoiceGetSingle>
  <AccountID>string</AccountID>
  <ConcurReceiptID>string</ConcurReceiptID>
  <DocumentID>string</DocumentID>
  <ReceiptData>string</ReceiptData>
</DigitalTaxInvoiceGetSingle>
```

<h3 id="get__expense_digitaltaxinvoices_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DigitalTaxInvoiceGetSingle](#schemadigitaltaxinvoicegetsingle)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## put__expense_digitaltaxinvoices_{id}

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id} HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "Comment": "string",
  "Status": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id}',
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

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id}',
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

r = requests.put('https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id}', headers = headers)

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
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id}");
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
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /expense/digitaltaxinvoices/{id}`

*Update a digital tax invoice*

Updates the specified digital tax invoice.

> Body parameter

```json
{
  "Comment": "string",
  "Status": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<DigitalTaxInvoicePut>
  <Comment>string</Comment>
  <Status>string</Status>
</DigitalTaxInvoicePut>
```

<h3 id="put__expense_digitaltaxinvoices_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the digital tax invoice to update.|
|body|body|[DigitalTaxInvoicePut](#schemadigitaltaxinvoiceput)|true|A status update for the digital tax invoice.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="put__expense_digitaltaxinvoices_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_DigitalTaxInvoiceCollection">DigitalTaxInvoiceCollection</h2>

<a id="schemadigitaltaxinvoicecollection"></a>
<a id="schema_DigitalTaxInvoiceCollection"></a>
<a id="tocSdigitaltaxinvoicecollection"></a>
<a id="tocsdigitaltaxinvoicecollection"></a>

```json
{
  "Items": {
    "ConcurReceiptID": "string",
    "ID": "string",
    "URI": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[DigitalTaxInvoiceGetAll](#schemadigitaltaxinvoicegetall)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h2 id="tocS_DigitalTaxInvoiceGetAll">DigitalTaxInvoiceGetAll</h2>

<a id="schemadigitaltaxinvoicegetall"></a>
<a id="schema_DigitalTaxInvoiceGetAll"></a>
<a id="tocSdigitaltaxinvoicegetall"></a>
<a id="tocsdigitaltaxinvoicegetall"></a>

```json
{
  "ConcurReceiptID": "string",
  "ID": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConcurReceiptID|string|false|none|The ID of the digital tax invoice in plain text.|
|ID|string|false|none|The unique identifier of the resource.|
|URI|string|false|none|The URI to the resource.|

<h2 id="tocS_DigitalTaxInvoiceGetSingle">DigitalTaxInvoiceGetSingle</h2>

<a id="schemadigitaltaxinvoicegetsingle"></a>
<a id="schema_DigitalTaxInvoiceGetSingle"></a>
<a id="tocSdigitaltaxinvoicegetsingle"></a>
<a id="tocsdigitaltaxinvoicegetsingle"></a>

```json
{
  "AccountID": "string",
  "ConcurReceiptID": "string",
  "DocumentID": "string",
  "ReceiptData": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountID|string|false|none|The unique identifier assigned by the validation partner to the SAP Concur client company that owns the digital tax invoices.|
|ConcurReceiptID|string|false|none|The ID of the digital tax invoice in plain text.|
|DocumentID|string|false|none|The ID of the report in plain text.|
|ReceiptData|string|false|none|The digital tax invoice data.|

<h2 id="tocS_DigitalTaxInvoicePut">DigitalTaxInvoicePut</h2>

<a id="schemadigitaltaxinvoiceput"></a>
<a id="schema_DigitalTaxInvoicePut"></a>
<a id="tocSdigitaltaxinvoiceput"></a>
<a id="tocsdigitaltaxinvoiceput"></a>

```json
{
  "Comment": "string",
  "Status": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|string|false|none|A comment that describes the digital tax invoice status. Maximum length: 2000 characters|
|Status|string|false|none|A status that describes the digital tax invoice. Format: VALID - Valid; INVLD - Invalid; WARNG - Valid with warnings|

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

