

<h2 id="lists">Lists v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

<h3 id="lists-resources">Resources</h3>

#### get__common_lists

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/common/lists \
  -H 'Accept: application/json'

```

```http
GET https://www.concursolutions.com/api/v3.0/common/lists HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/common/lists',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/common/lists',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/common/lists', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/common/lists', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/lists");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/common/lists", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /common/lists`

*Gets all lists*

Returns all lists based on the search criteria.

<h3 id="get__common_lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|The number of records to return. The default is 25 and the maximum is 100.|
|offset|query|string|false|The start of the page offset. The default is from the beginning.|

> Example responses

> 200 Response

```json
{
  "Items": {
    "ConnectorID": "string",
    "DisplayCodeFirst": true,
    "ExternalThreshold": 0,
    "ID": "string",
    "IsVendorList": true,
    "Name": "string",
    "SearchCriteriaCode": "string",
    "URI": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ListGetCollection>
  <Items>
    <ConnectorID>string</ConnectorID>
    <DisplayCodeFirst>true</DisplayCodeFirst>
    <ExternalThreshold>0</ExternalThreshold>
    <ID>string</ID>
    <IsVendorList>true</IsVendorList>
    <Name>string</Name>
    <SearchCriteriaCode>string</SearchCriteriaCode>
    <URI>string</URI>
  </Items>
  <NextPage>string</NextPage>
</ListGetCollection>
```

<h3 id="get__common_lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ListGetCollection](#schemalistgetcollection)|

<aside class="success">
This operation does not require authentication
</aside>

#### post__common_lists

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/common/lists \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST https://www.concursolutions.com/api/v3.0/common/lists HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ConnectorID": "string",
  "DisplayCodeFirst": true,
  "ExternalThreshold": 0,
  "IsVendorList": true,
  "Name": "string",
  "SearchCriteriaCode": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/common/lists',
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

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/common/lists',
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

r = requests.post('https://www.concursolutions.com/api/v3.0/common/lists', headers = headers)

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
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/common/lists', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/lists");
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
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/common/lists", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /common/lists`

*Create a new list*

Create a new list

> Body parameter

```json
{
  "ConnectorID": "string",
  "DisplayCodeFirst": true,
  "ExternalThreshold": 0,
  "IsVendorList": true,
  "Name": "string",
  "SearchCriteriaCode": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ListPost>
  <ConnectorID>string</ConnectorID>
  <DisplayCodeFirst>true</DisplayCodeFirst>
  <ExternalThreshold>0</ExternalThreshold>
  <IsVendorList>true</IsVendorList>
  <Name>string</Name>
  <SearchCriteriaCode>string</SearchCriteriaCode>
</ListPost>
```

<h3 id="post__common_lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ListPost](#schemalistpost)|true|list object to create|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<CreateResponse>
  <ID>string</ID>
  <URI>string</URI>
</CreateResponse>
```

<h3 id="post__common_lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreateResponse](#schemacreateresponse)|

<aside class="success">
This operation does not require authentication
</aside>

#### get__common_lists_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/common/lists/{id} \
  -H 'Accept: application/json'

```

```http
GET https://www.concursolutions.com/api/v3.0/common/lists/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/common/lists/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/common/lists/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/common/lists/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/common/lists/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/lists/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/common/lists/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /common/lists/{id}`

*Get a single list by ID*

Returns a list by ID.

<h3 id="get__common_lists_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the list.|

> Example responses

> 200 Response

```json
{
  "ConnectorID": "string",
  "DisplayCodeFirst": true,
  "ExternalThreshold": 0,
  "ID": "string",
  "IsVendorList": true,
  "Name": "string",
  "SearchCriteriaCode": "string",
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ListGet>
  <ConnectorID>string</ConnectorID>
  <DisplayCodeFirst>true</DisplayCodeFirst>
  <ExternalThreshold>0</ExternalThreshold>
  <ID>string</ID>
  <IsVendorList>true</IsVendorList>
  <Name>string</Name>
  <SearchCriteriaCode>string</SearchCriteriaCode>
  <URI>string</URI>
</ListGet>
```

<h3 id="get__common_lists_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ListGet](#schemalistget)|

<aside class="success">
This operation does not require authentication
</aside>

#### put__common_lists_{id}

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/common/lists/{id} \
  -H 'Content-Type: application/json'

```

```http
PUT https://www.concursolutions.com/api/v3.0/common/lists/{id} HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json

```

```javascript
const inputBody = '{
  "DisplayCodeFirst": true,
  "Name": "string",
  "SearchCriteriaCode": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/common/lists/{id}',
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
  'Content-Type' => 'application/json'
}

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/common/lists/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('https://www.concursolutions.com/api/v3.0/common/lists/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/common/lists/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/lists/{id}");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/common/lists/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /common/lists/{id}`

*Update list*

DEPRECATED: 05/19/2016 UNSUPPORTED: 11/19/2016. Updates list specified in the URL.  Only the fields provided in the supplied object will be updated, missing fields will not be altered.

> Body parameter

```json
{
  "DisplayCodeFirst": true,
  "Name": "string",
  "SearchCriteriaCode": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ListPut>
  <DisplayCodeFirst>true</DisplayCodeFirst>
  <Name>string</Name>
  <SearchCriteriaCode>string</SearchCriteriaCode>
</ListPut>
```

<h3 id="put__common_lists_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the list.|
|body|body|[ListPut](#schemalistput)|true|The list object to update|

<h3 id="put__common_lists_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

### Schemas

<h3 id="tocS_CreateResponse">CreateResponse</h3>

<a id="schemacreateresponse"></a>
<a id="schema_CreateResponse"></a>
<a id="tocScreateresponse"></a>
<a id="tocscreateresponse"></a>

```json
{
  "ID": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|none|
|URI|string|false|none|none|

<h3 id="tocS_ListGet">ListGet</h3>

<a id="schemalistget"></a>
<a id="schema_ListGet"></a>
<a id="tocSlistget"></a>
<a id="tocslistget"></a>

```json
{
  "ConnectorID": "string",
  "DisplayCodeFirst": true,
  "ExternalThreshold": 0,
  "ID": "string",
  "IsVendorList": true,
  "Name": "string",
  "SearchCriteriaCode": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorID|string|false|none|Optional. Defines the encrypted ConnectorID. If not provided then the list isn't associated with a connector.|
|DisplayCodeFirst|boolean|false|none|Required. Defines whether CODE should appear before TEXT, or vice-versa.|
|ExternalThreshold|integer(int32)|false|none|Optional. Default value is 1. Defines the threshold from where the level starts being external. This value can only be set if a ConnectorID is provided.|
|ID|string|false|none|The unique identifier of the resource.|
|IsVendorList|boolean|false|none|Required. Defines whether it is a vendor list.|
|Name|string|false|none|Required. Defines a name for the list. This name must be unique.|
|SearchCriteriaCode|string|false|none|Required. Defines whether the search criteria should apply to the CODE or to the TEXT.|
|URI|string|false|none|The URI to the resource.|

<h3 id="tocS_ListGetCollection">ListGetCollection</h3>

<a id="schemalistgetcollection"></a>
<a id="schema_ListGetCollection"></a>
<a id="tocSlistgetcollection"></a>
<a id="tocslistgetcollection"></a>

```json
{
  "Items": {
    "ConnectorID": "string",
    "DisplayCodeFirst": true,
    "ExternalThreshold": 0,
    "ID": "string",
    "IsVendorList": true,
    "Name": "string",
    "SearchCriteriaCode": "string",
    "URI": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[ListGet](#schemalistget)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h3 id="tocS_ListPost">ListPost</h3>

<a id="schemalistpost"></a>
<a id="schema_ListPost"></a>
<a id="tocSlistpost"></a>
<a id="tocslistpost"></a>

```json
{
  "ConnectorID": "string",
  "DisplayCodeFirst": true,
  "ExternalThreshold": 0,
  "IsVendorList": true,
  "Name": "string",
  "SearchCriteriaCode": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorID|string|false|none|Optional. Defines the encrypted ConnectorID. If not provided then the list isn't associated with a connector.|
|DisplayCodeFirst|boolean|false|none|Required. Defines whether CODE should appear before TEXT, or vice-versa.|
|ExternalThreshold|integer(int32)|false|none|Optional. Default value is 1. Defines the threshold from where the level starts being external. This value can only be set if a ConnectorID is provided.|
|IsVendorList|boolean|false|none|Required. Defines whether it is a vendor list.|
|Name|string|false|none|Required. Defines a name for the list. This name must be unique.|
|SearchCriteriaCode|string|false|none|Required. Defines whether the search criteria should apply to the CODE or to the TEXT.|

<h3 id="tocS_ListPut">ListPut</h3>

<a id="schemalistput"></a>
<a id="schema_ListPut"></a>
<a id="tocSlistput"></a>
<a id="tocslistput"></a>

```json
{
  "DisplayCodeFirst": true,
  "Name": "string",
  "SearchCriteriaCode": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayCodeFirst|boolean|false|none|Optional. Defines whether CODE should appear before TEXT, or vice-versa.|
|Name|string|false|none|Optional. Defines a name for the list. This name must be unique.|
|SearchCriteriaCode|string|false|none|Optional. Defines whether the search criteria should apply to the CODE or to the TEXT.|

