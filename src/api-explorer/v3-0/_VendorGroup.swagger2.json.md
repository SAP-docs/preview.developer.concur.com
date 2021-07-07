---
title: VendorGroup v3.0
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

<h1 id="vendorgroup">VendorGroup v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An invoice is a bill of sale for goods or services provided by a vendor. This API provides methods to create or delete invoice vendor groups that meet the search parameters.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

<h1 id="vendorgroup-resources">Resources</h1>

## put__invoice_vendor_groups

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/invoice/vendor/groups?vendorCode=string&addressCode=string \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
PUT https://www.concursolutions.com/api/v3.0/invoice/vendor/groups?vendorCode=string&addressCode=string HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "VendorGroup": {
    "ID": "string",
    "Name": "string",
    "URI": "string"
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

fetch('https://www.concursolutions.com/api/v3.0/invoice/vendor/groups?vendorCode=string&addressCode=string',
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

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/invoice/vendor/groups',
  params: {
  'vendorCode' => 'string',
'addressCode' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('https://www.concursolutions.com/api/v3.0/invoice/vendor/groups', params={
  'vendorCode': 'string',  'addressCode': 'string'
}, headers = headers)

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
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/invoice/vendor/groups', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/vendor/groups?vendorCode=string&addressCode=string");
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
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/invoice/vendor/groups", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /invoice/vendor/groups`

*Add vendor groups by Vendor Code, Address Code, and Vendor Group.*

Add vendor groups by Vendor Code, Address Code, and Vendor Group.

> Body parameter

```json
{
  "VendorGroup": {
    "ID": "string",
    "Name": "string",
    "URI": "string"
  },
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<VendorGroupCollection>
  <VendorGroup>
    <ID>string</ID>
    <Name>string</Name>
    <URI>string</URI>
  </VendorGroup>
  <NextPage>string</NextPage>
  <RequestRunSummary>string</RequestRunSummary>
  <TotalCount>0</TotalCount>
  <Items/>
</VendorGroupCollection>
```

<h3 id="put__invoice_vendor_groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vendorCode|query|string|true|The Vendor Code to be searched.|
|addressCode|query|string|true|Address Code to be searched.|
|body|body|[VendorGroupCollection](#schemavendorgroupcollection)|true|The vendor group details.|

> Example responses

> 200 Response

```json
{
  "VendorGroup": {
    "ID": "string",
    "Name": "string",
    "URI": "string"
  },
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<VendorGroupCollection>
  <VendorGroup>
    <ID>string</ID>
    <Name>string</Name>
    <URI>string</URI>
  </VendorGroup>
  <NextPage>string</NextPage>
  <RequestRunSummary>string</RequestRunSummary>
  <TotalCount>0</TotalCount>
  <Items/>
</VendorGroupCollection>
```

<h3 id="put__invoice_vendor_groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[VendorGroupCollection](#schemavendorgroupcollection)|

<aside class="success">
This operation does not require authentication
</aside>

## delete__invoice_vendor_groups

> Code samples

```shell
# You can also use wget
curl -X DELETE https://www.concursolutions.com/api/v3.0/invoice/vendor/groups?vendorCode=string&addressCode=string&groupName=string \
  -H 'Accept: application/json'

```

```http
DELETE https://www.concursolutions.com/api/v3.0/invoice/vendor/groups?vendorCode=string&addressCode=string&groupName=string HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/vendor/groups?vendorCode=string&addressCode=string&groupName=string',
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

result = RestClient.delete 'https://www.concursolutions.com/api/v3.0/invoice/vendor/groups',
  params: {
  'vendorCode' => 'string',
'addressCode' => 'string',
'groupName' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://www.concursolutions.com/api/v3.0/invoice/vendor/groups', params={
  'vendorCode': 'string',  'addressCode': 'string',  'groupName': 'string'
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
    $response = $client->request('DELETE','https://www.concursolutions.com/api/v3.0/invoice/vendor/groups', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/vendor/groups?vendorCode=string&addressCode=string&groupName=string");
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
    req, err := http.NewRequest("DELETE", "https://www.concursolutions.com/api/v3.0/invoice/vendor/groups", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /invoice/vendor/groups`

*Delete a vendor group by Vendor Code, Address Code, and Group Name.*

Delete a vendor group by Vendor Code, Address Code, and Group Name.

<h3 id="delete__invoice_vendor_groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vendorCode|query|string|true|The Vendor Code to be deleted.|
|addressCode|query|string|true|Address Code to be deleted.|
|groupName|query|string|true|Group Name to be deleted.|

> Example responses

> 200 Response

```json
{
  "VendorGroup": {
    "ID": "string",
    "Name": "string",
    "URI": "string"
  },
  "NextPage": "string",
  "RequestRunSummary": "string",
  "TotalCount": 0,
  "Items": null
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<VendorGroupCollection>
  <VendorGroup>
    <ID>string</ID>
    <Name>string</Name>
    <URI>string</URI>
  </VendorGroup>
  <NextPage>string</NextPage>
  <RequestRunSummary>string</RequestRunSummary>
  <TotalCount>0</TotalCount>
  <Items/>
</VendorGroupCollection>
```

<h3 id="delete__invoice_vendor_groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[VendorGroupCollection](#schemavendorgroupcollection)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Status">Status</h2>

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

<h2 id="tocS_VendorGroup">VendorGroup</h2>

<a id="schemavendorgroup"></a>
<a id="schema_VendorGroup"></a>
<a id="tocSvendorgroup"></a>
<a id="tocsvendorgroup"></a>

```json
{
  "ID": "string",
  "Name": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|The unique identifier of the resource.|
|Name|string|false|none|The group name|
|URI|string|false|none|The URI to the resource.|

<h2 id="tocS_VendorGroupCollection">VendorGroupCollection</h2>

<a id="schemavendorgroupcollection"></a>
<a id="schema_VendorGroupCollection"></a>
<a id="tocSvendorgroupcollection"></a>
<a id="tocsvendorgroupcollection"></a>

```json
{
  "VendorGroup": {
    "ID": "string",
    "Name": "string",
    "URI": "string"
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
|VendorGroup|[VendorGroup](#schemavendorgroup)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|
|RequestRunSummary|string|false|none|The URI of the next page of results, if any.|
|TotalCount|integer(int32)|false|none|Record Number for create/update request.|
|Items|any|false|none|none|

