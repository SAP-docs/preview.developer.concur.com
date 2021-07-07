---
title: Attendee Types v3.0
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

<h1 id="attendee-types">Attendee Types v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Get the configured attendee types for the company or for a specified user. You can also update attendee types by providing some or all of the attendee type fields.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

# Authentication

- oAuth2 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication information</a> for more information.

    - Flow: clientCredentials

    - Token URL = [https://us.api.concursolutions.com/oauth2/v0](https://us.api.concursolutions.com/oauth2/v0)

<h1 id="attendee-types-resources">Resources</h1>

## get__expense_attendeetypes

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/attendeetypes \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/attendeetypes HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/attendeetypes',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/attendeetypes',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/attendeetypes', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/attendeetypes', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/attendeetypes");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/attendeetypes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/attendeetypes`

*Get all attendee types*

Gets all active attendee types for the company.

<h3 id="get__expense_attendeetypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|The starting point of the next set of results, after the limit specified in the limit field has been reached.|
|limit|query|integer(int32)|false|The number of records to return. Default value: 25|

> Example responses

> 200 Response

```json
{
  "Items": {
    "AllowAttendeeCountEditing": true,
    "AllowManuallyEnteredAttendees": true,
    "AttendeeFormID": "string",
    "Code": "string",
    "ConnectorID": "string",
    "DuplicateSearchFields": [
      "string"
    ],
    "ID": "string",
    "Name": "string",
    "URI": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<AttendeeTypesCollection>
  <Items>
    <AllowAttendeeCountEditing>true</AllowAttendeeCountEditing>
    <AllowManuallyEnteredAttendees>true</AllowManuallyEnteredAttendees>
    <AttendeeFormID>string</AttendeeFormID>
    <Code>string</Code>
    <ConnectorID>string</ConnectorID>
    <DuplicateSearchFields>string</DuplicateSearchFields>
    <ID>string</ID>
    <Name>string</Name>
    <URI>string</URI>
  </Items>
  <NextPage>string</NextPage>
</AttendeeTypesCollection>
```

<h3 id="get__expense_attendeetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[AttendeeTypesCollection](#schemaattendeetypescollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## post__expense_attendeetypes

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/expense/attendeetypes \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://www.concursolutions.com/api/v3.0/expense/attendeetypes HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "AllowAttendeeCountEditing": true,
  "AllowManuallyEnteredAttendees": true,
  "AttendeeFormID": "string",
  "Code": "string",
  "ConnectorID": "string",
  "DuplicateSearchFields": [
    "string"
  ],
  "Name": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/attendeetypes',
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

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/expense/attendeetypes',
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

r = requests.post('https://www.concursolutions.com/api/v3.0/expense/attendeetypes', headers = headers)

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
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/expense/attendeetypes', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/attendeetypes");
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
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/expense/attendeetypes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /expense/attendeetypes`

*Create a new attendee type*

DEPRECATED: 05/19/2016 UNSUPPORTED: 11/19/2016 Creates a new attendee type.

> Body parameter

```json
{
  "AllowAttendeeCountEditing": true,
  "AllowManuallyEnteredAttendees": true,
  "AttendeeFormID": "string",
  "Code": "string",
  "ConnectorID": "string",
  "DuplicateSearchFields": [
    "string"
  ],
  "Name": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<AttendeeTypePost>
  <AllowAttendeeCountEditing>true</AllowAttendeeCountEditing>
  <AllowManuallyEnteredAttendees>true</AllowManuallyEnteredAttendees>
  <AttendeeFormID>string</AttendeeFormID>
  <Code>string</Code>
  <ConnectorID>string</ConnectorID>
  <DuplicateSearchFields>string</DuplicateSearchFields>
  <Name>string</Name>
</AttendeeTypePost>
```

<h3 id="post__expense_attendeetypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AttendeeTypePost](#schemaattendeetypepost)|true|The AttendeeType object to create.|

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

<h3 id="post__expense_attendeetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreateResponse](#schemacreateresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## get__expense_attendeetypes_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/attendeetypes/{id}`

*Get a single attendee type*

Gets an attendee type for the specified ID.

<h3 id="get__expense_attendeetypes_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the attendee type.|

> Example responses

> 200 Response

```json
{
  "AllowAttendeeCountEditing": true,
  "AllowManuallyEnteredAttendees": true,
  "AttendeeFormID": "string",
  "Code": "string",
  "ConnectorID": "string",
  "DuplicateSearchFields": [
    "string"
  ],
  "ID": "string",
  "Name": "string",
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<AttendeeTypeGet>
  <AllowAttendeeCountEditing>true</AllowAttendeeCountEditing>
  <AllowManuallyEnteredAttendees>true</AllowManuallyEnteredAttendees>
  <AttendeeFormID>string</AttendeeFormID>
  <Code>string</Code>
  <ConnectorID>string</ConnectorID>
  <DuplicateSearchFields>string</DuplicateSearchFields>
  <ID>string</ID>
  <Name>string</Name>
  <URI>string</URI>
</AttendeeTypeGet>
```

<h3 id="get__expense_attendeetypes_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[AttendeeTypeGet](#schemaattendeetypeget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## delete__expense_attendeetypes_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}',
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
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete 'https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}',
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

r = requests.delete('https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}', headers = headers)

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
    $response = $client->request('DELETE','https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}");
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
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /expense/attendeetypes/{id}`

*Delete an attendee type by ID*

DEPRECATED: 05/19/2016 UNSUPPORTED: 11/19/2016 Deletes the specified attendee type.

<h3 id="delete__expense_attendeetypes_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the attendee type to delete.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="delete__expense_attendeetypes_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## put__expense_attendeetypes_{id}

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id} HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "AllowAttendeeCountEditing": true,
  "AllowManuallyEnteredAttendees": true,
  "AttendeeFormID": "string",
  "Code": "string",
  "ConnectorID": "string",
  "DuplicateSearchFields": [
    "string"
  ],
  "Name": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}',
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

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}',
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

r = requests.put('https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}', headers = headers)

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
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}");
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
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /expense/attendeetypes/{id}`

*Update an attendee type by ID*

Updates the specified attendee type. Only the fields provided in the supplied object will be updated. Missing fields will not be altered.

> Body parameter

```json
{
  "AllowAttendeeCountEditing": true,
  "AllowManuallyEnteredAttendees": true,
  "AttendeeFormID": "string",
  "Code": "string",
  "ConnectorID": "string",
  "DuplicateSearchFields": [
    "string"
  ],
  "Name": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<AttendeeTypePut>
  <AllowAttendeeCountEditing>true</AllowAttendeeCountEditing>
  <AllowManuallyEnteredAttendees>true</AllowManuallyEnteredAttendees>
  <AttendeeFormID>string</AttendeeFormID>
  <Code>string</Code>
  <ConnectorID>string</ConnectorID>
  <DuplicateSearchFields>string</DuplicateSearchFields>
  <Name>string</Name>
</AttendeeTypePut>
```

<h3 id="put__expense_attendeetypes_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the attendee type.|
|body|body|[AttendeeTypePut](#schemaattendeetypeput)|true|The partial or complete AttendeeType object to update.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="put__expense_attendeetypes_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_AttendeeTypeGet">AttendeeTypeGet</h2>

<a id="schemaattendeetypeget"></a>
<a id="schema_AttendeeTypeGet"></a>
<a id="tocSattendeetypeget"></a>
<a id="tocsattendeetypeget"></a>

```json
{
  "AllowAttendeeCountEditing": true,
  "AllowManuallyEnteredAttendees": true,
  "AttendeeFormID": "string",
  "Code": "string",
  "ConnectorID": "string",
  "DuplicateSearchFields": [
    "string"
  ],
  "ID": "string",
  "Name": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowAttendeeCountEditing|boolean|false|none|Determines whether users are allowed to edit the count for this attendee type. Format: true or false|
|AllowManuallyEnteredAttendees|boolean|false|none|Determines whether users are allowed to add attendees for this attendee type. Format: true or false|
|AttendeeFormID|string|false|none|The unique identifier for the attendee form for this attendee type.|
|Code|string|false|none|A code that indicates the type of attendee. Examples: EMPLOYEE, SPOUSE, BUSGUEST. Maximum length: 40 characters|
|ConnectorID|string|false|none|The unique identifier for the Application Connector that is the data source for this attendee type. When this field is empty, Concur Expense is the data source.|
|DuplicateSearchFields|[string]|false|none|The list of Attendee field IDs used by the Add Attendee user interface to alert users that the attendee they want to add is a possible duplicate.|
|ID|string|false|none|The unique identifier of the resource.|
|Name|string|false|none|The name for the attendee type. This name must be unique. Maximum length: 40 characters|
|URI|string|false|none|The URI to the resource.|

<h2 id="tocS_AttendeeTypePost">AttendeeTypePost</h2>

<a id="schemaattendeetypepost"></a>
<a id="schema_AttendeeTypePost"></a>
<a id="tocSattendeetypepost"></a>
<a id="tocsattendeetypepost"></a>

```json
{
  "AllowAttendeeCountEditing": true,
  "AllowManuallyEnteredAttendees": true,
  "AttendeeFormID": "string",
  "Code": "string",
  "ConnectorID": "string",
  "DuplicateSearchFields": [
    "string"
  ],
  "Name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowAttendeeCountEditing|boolean|false|none|Determines whether users are allowed to edit the count for this attendee type. Format: true or false|
|AllowManuallyEnteredAttendees|boolean|false|none|Determines whether users are allowed to add attendees for this attendee type. Format: true or false|
|AttendeeFormID|string|false|none|The unique identifier for the attendee form for this attendee type.|
|Code|string|false|none|A code that indicates the type of attendee. Examples: EMPLOYEE, SPOUSE, BUSGUEST. Maximum length: 40 characters|
|ConnectorID|string|false|none|The unique identifier for the Application Connector that is the data source for this attendee type. When this field is empty, Concur Expense is the data source.|
|DuplicateSearchFields|[string]|false|none|The list of Attendee field IDs used by the Add Attendee user interface to alert users that the attendee they want to add is a possible duplicate.|
|Name|string|false|none|The name for the attendee type. This name must be unique. Maximum length: 40 characters|

<h2 id="tocS_AttendeeTypePut">AttendeeTypePut</h2>

<a id="schemaattendeetypeput"></a>
<a id="schema_AttendeeTypePut"></a>
<a id="tocSattendeetypeput"></a>
<a id="tocsattendeetypeput"></a>

```json
{
  "AllowAttendeeCountEditing": true,
  "AllowManuallyEnteredAttendees": true,
  "AttendeeFormID": "string",
  "Code": "string",
  "ConnectorID": "string",
  "DuplicateSearchFields": [
    "string"
  ],
  "Name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowAttendeeCountEditing|boolean|false|none|Determines whether users are allowed to edit the count for this attendee type. Format: true or false|
|AllowManuallyEnteredAttendees|boolean|false|none|Determines whether users are allowed to add attendees for this attendee type. Format: true or false|
|AttendeeFormID|string|false|none|The unique identifier for the attendee form for this attendee type.|
|Code|string|false|none|A code that indicates the type of attendee. Examples: EMPLOYEE, SPOUSE, BUSGUEST. Maximum length: 40 characters|
|ConnectorID|string|false|none|The unique identifier for the Application Connector that is the data source for this attendee type. When this field is empty, Concur Expense is the data source.|
|DuplicateSearchFields|[string]|false|none|The list of Attendee field IDs used by the Add Attendee user interface to alert users that the attendee they want to add is a possible duplicate.|
|Name|string|false|none|The name for the attendee type. This name must be unique. Maximum length: 40 characters|

<h2 id="tocS_AttendeeTypesCollection">AttendeeTypesCollection</h2>

<a id="schemaattendeetypescollection"></a>
<a id="schema_AttendeeTypesCollection"></a>
<a id="tocSattendeetypescollection"></a>
<a id="tocsattendeetypescollection"></a>

```json
{
  "Items": {
    "AllowAttendeeCountEditing": true,
    "AllowManuallyEnteredAttendees": true,
    "AttendeeFormID": "string",
    "Code": "string",
    "ConnectorID": "string",
    "DuplicateSearchFields": [
      "string"
    ],
    "ID": "string",
    "Name": "string",
    "URI": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[AttendeeTypeGet](#schemaattendeetypeget)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

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
|ID|string|false|none|The URI of the next page of results, if any.|
|URI|string|false|none|The URI of the next page of results, if any.|

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

