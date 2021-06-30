---
title: Connection Requests v3.2
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

<h1 id="connection-requests">Connection Requests v3.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://us.api.concursolutions.com/api/v3.2">https://us.api.concursolutions.com/api/v3.2</a>

<h1 id="connection-requests-resources">Resources</h1>

## get__common_connectionrequests

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/api/v3.2/common/connectionrequests \
  -H 'Accept: application/json'

```

```http
GET https://us.api.concursolutions.com/api/v3.2/common/connectionrequests HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://us.api.concursolutions.com/api/v3.2/common/connectionrequests',
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

result = RestClient.get 'https://us.api.concursolutions.com/api/v3.2/common/connectionrequests',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://us.api.concursolutions.com/api/v3.2/common/connectionrequests', headers = headers)

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
    $response = $client->request('GET','https://us.api.concursolutions.com/api/v3.2/common/connectionrequests', array(
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
URL obj = new URL("https://us.api.concursolutions.com/api/v3.2/common/connectionrequests");
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
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/api/v3.2/common/connectionrequests", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /common/connectionrequests`

*Get all connection requests*

Gets all connection requests that match the TripLink supplier ID.

<h3 id="get__common_connectionrequests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|The starting point of the next set of results, after the limit specified in the limit field has been reached. The default is the beginning of the page.|
|limit|query|integer(int32)|false|The number of records to return. The default is 5 and the maximum is 10.|
|status|query|string|false|The status code representing the state of the connection request. The possible values are Pending, Processing, Connected, Failed, and Retry.|

> Example responses

> 200 Response

```json
{
  "Items": {
    "firstName": "string",
    "ID": "string",
    "lastModified": "string",
    "lastName": "string",
    "loyaltyNumber": "string",
    "middleName": "string",
    "requestToken": "string",
    "status": "string",
    "URI": "string",
    "userId": "string",
    "emailAddresses": {
      "email1": "string",
      "email2": "string",
      "email3": "string",
      "email4": "string",
      "email5": "string"
    }
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ConnectionRequestCollection>
  <Items>
    <firstName>string</firstName>
    <ID>string</ID>
    <lastModified>string</lastModified>
    <lastName>string</lastName>
    <loyaltyNumber>string</loyaltyNumber>
    <middleName>string</middleName>
    <requestToken>string</requestToken>
    <status>string</status>
    <URI>string</URI>
    <userId>string</userId>
    <emailAddresses>
      <email1>string</email1>
      <email2>string</email2>
      <email3>string</email3>
      <email4>string</email4>
      <email5>string</email5>
    </emailAddresses>
  </Items>
  <NextPage>string</NextPage>
</ConnectionRequestCollection>
```

<h3 id="get__common_connectionrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ConnectionRequestCollection](#schemaconnectionrequestcollection)|

<aside class="success">
This operation does not require authentication
</aside>

## post__common_connectionrequests

> Code samples

```shell
# You can also use wget
curl -X POST https://us.api.concursolutions.com/api/v3.2/common/connectionrequests?user=string \
  -H 'Accept: application/json'

```

```http
POST https://us.api.concursolutions.com/api/v3.2/common/connectionrequests?user=string HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://us.api.concursolutions.com/api/v3.2/common/connectionrequests?user=string',
{
  method: 'POST',

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

result = RestClient.post 'https://us.api.concursolutions.com/api/v3.2/common/connectionrequests',
  params: {
  'user' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('https://us.api.concursolutions.com/api/v3.2/common/connectionrequests', params={
  'user': 'string'
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
    $response = $client->request('POST','https://us.api.concursolutions.com/api/v3.2/common/connectionrequests', array(
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
URL obj = new URL("https://us.api.concursolutions.com/api/v3.2/common/connectionrequests?user=string");
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
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://us.api.concursolutions.com/api/v3.2/common/connectionrequests", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /common/connectionrequests`

*Create a connection request*

Creates a connection request on behalf of the specified user.

<h3 id="post__common_connectionrequests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|true|The login ID of the user for whom to create the connection request. The user must have the Web Services Admin role to use this parameter.|

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

<h3 id="post__common_connectionrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreateResponse](#schemacreateresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## get__common_connectionrequests_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id} \
  -H 'Accept: application/json'

```

```http
GET https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id} HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id}',
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

result = RestClient.get 'https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id}', headers = headers)

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
    $response = $client->request('GET','https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id}', array(
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
URL obj = new URL("https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id}");
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
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /common/connectionrequests/{id}`

*Get a connection request by ID*

Gets a connection request by ID.

<h3 id="get__common_connectionrequests_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The connection request ID.|

> Example responses

> 200 Response

```json
{
  "firstName": "string",
  "ID": "string",
  "lastModified": "string",
  "lastName": "string",
  "loyaltyNumber": "string",
  "middleName": "string",
  "requestToken": "string",
  "status": "string",
  "URI": "string",
  "userId": "string",
  "emailAddresses": {
    "email1": "string",
    "email2": "string",
    "email3": "string",
    "email4": "string",
    "email5": "string"
  }
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ConnectionRequestGet>
  <firstName>string</firstName>
  <ID>string</ID>
  <lastModified>string</lastModified>
  <lastName>string</lastName>
  <loyaltyNumber>string</loyaltyNumber>
  <middleName>string</middleName>
  <requestToken>string</requestToken>
  <status>string</status>
  <URI>string</URI>
  <userId>string</userId>
  <emailAddresses>
    <email1>string</email1>
    <email2>string</email2>
    <email3>string</email3>
    <email4>string</email4>
    <email5>string</email5>
  </emailAddresses>
</ConnectionRequestGet>
```

<h3 id="get__common_connectionrequests_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ConnectionRequestGet](#schemaconnectionrequestget)|

<aside class="success">
This operation does not require authentication
</aside>

## put__common_connectionrequests_{id}

> Code samples

```shell
# You can also use wget
curl -X PUT https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
PUT https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id} HTTP/1.1
Host: us.api.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "status": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id}',
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

result = RestClient.put 'https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id}',
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

r = requests.put('https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id}', headers = headers)

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
    $response = $client->request('PUT','https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id}', array(
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
URL obj = new URL("https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id}");
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
    req, err := http.NewRequest("PUT", "https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /common/connectionrequests/{id}`

*Update a connection request by ID*

Updates the specified connection request. Only the fields provided in the supplied object are updated. Missing fields will not be altered.

> Body parameter

```json
{
  "status": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ConnectionRequestPut>
  <status>string</status>
</ConnectionRequestPut>
```

<h3 id="put__common_connectionrequests_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The connection request ID.|
|body|body|[ConnectionRequestPut](#schemaconnectionrequestput)|true|The connection request object to update.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="put__common_connectionrequests_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ConnectionRequestCollection">ConnectionRequestCollection</h2>

<a id="schemaconnectionrequestcollection"></a>
<a id="schema_ConnectionRequestCollection"></a>
<a id="tocSconnectionrequestcollection"></a>
<a id="tocsconnectionrequestcollection"></a>

```json
{
  "Items": {
    "firstName": "string",
    "ID": "string",
    "lastModified": "string",
    "lastName": "string",
    "loyaltyNumber": "string",
    "middleName": "string",
    "requestToken": "string",
    "status": "string",
    "URI": "string",
    "userId": "string",
    "emailAddresses": {
      "email1": "string",
      "email2": "string",
      "email3": "string",
      "email4": "string",
      "email5": "string"
    }
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[ConnectionRequestGet](#schemaconnectionrequestget)|false|none|none|
|NextPage|string|false|none|If provided, the URI for the next GET call.|

<h2 id="tocS_ConnectionRequestGet">ConnectionRequestGet</h2>

<a id="schemaconnectionrequestget"></a>
<a id="schema_ConnectionRequestGet"></a>
<a id="tocSconnectionrequestget"></a>
<a id="tocsconnectionrequestget"></a>

```json
{
  "firstName": "string",
  "ID": "string",
  "lastModified": "string",
  "lastName": "string",
  "loyaltyNumber": "string",
  "middleName": "string",
  "requestToken": "string",
  "status": "string",
  "URI": "string",
  "userId": "string",
  "emailAddresses": {
    "email1": "string",
    "email2": "string",
    "email3": "string",
    "email4": "string",
    "email5": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|first name of the user for whom the connection request is for.|
|ID|string|false|none|The unique identifier for the connection request.|
|lastModified|string|false|none|The UTC date representing when this connection rerquest was last modified.  Format: YYY-MM-DDTHH:MM:SS|
|lastName|string|false|none|The last name of the user for whom the connection request is for.|
|loyaltyNumber|string|false|none|The user's loyalty number.|
|middleName|string|false|none|The middle name of the user for whom the connection request is for.|
|requestToken|string|false|none|OAuth2 request token with a limited lifetime (15 minutes) that may be exchanged for an access token.|
|status|string|false|none|The status code representing the state of the connection request. The possible values are: <br /><br /> CRSUC - The supplier indicated that the connection was made successfully. <br /> CREU1 - The loyalty number was not found. <br /> CREU2 - The loyalty number doesn't match the name. <br /> CREU3 - Your loyalty account requires attention. <br /> CRPA1 - The request token has expired. <br /> CRPA2 - A network error occurred. <br /> CRRET - Retry connection.|
|URI|string|false|none|URI for the GET call that will return this connection request.|
|userId|string|false|none|The unique identifier for the user.|
|emailAddresses|[UserEmailAddresses](#schemauseremailaddresses)|false|none|none|

<h2 id="tocS_ConnectionRequestPut">ConnectionRequestPut</h2>

<a id="schemaconnectionrequestput"></a>
<a id="schema_ConnectionRequestPut"></a>
<a id="tocSconnectionrequestput"></a>
<a id="tocsconnectionrequestput"></a>

```json
{
  "status": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|The status code representing the state of the connection request. The possible values are: <br /><br /> CRSUC - The supplier indicated that the connection was made successfully. <br /> CREU1 - The loyalty number was not found. <br /> CREU2 - The loyalty number doesn't match the name. <br /> CREU3 - Your loyalty account requires attention. <br /> CRPA1 - The request token has expired. <br /> CRPA2 - A network error occurred. <br /> CRRET - Retry connection.|

<h2 id="tocS_CreateResponse">CreateResponse</h2>

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
|ID|string|false|none|The unique identifier for the connection request created by this call.|
|URI|string|false|none|URI for the GET call that will return the newly created connection request.|

<h2 id="tocS_UserEmailAddresses">UserEmailAddresses</h2>

<a id="schemauseremailaddresses"></a>
<a id="schema_UserEmailAddresses"></a>
<a id="tocSuseremailaddresses"></a>
<a id="tocsuseremailaddresses"></a>

```json
{
  "email1": "string",
  "email2": "string",
  "email3": "string",
  "email4": "string",
  "email5": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email1|string|false|none|Email address for the user.|
|email2|string|false|none|Email address for the user.|
|email3|string|false|none|Email address for the user.|
|email4|string|false|none|Email address for the user.|
|email5|string|false|none|Email address for the user.|

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

