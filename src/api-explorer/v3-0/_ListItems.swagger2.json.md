---
title: List Items v3.0
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

<h1 id="list-items">List Items v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides an automated solution to clients who would like to manage list items. This API provides methods to view, add, update or delete list items owned by the specified lists. This API supports Concur Expense, Concur Invoice, and Concur Request.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

# Authentication

- oAuth2 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication information</a> for more information.

    - Flow: clientCredentials

    - Token URL = [https://us.api.concursolutions.com/oauth2/v0](https://us.api.concursolutions.com/oauth2/v0)

<h1 id="list-items-resources">Resources</h1>

## get__common_listitems

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/common/listitems \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/common/listitems HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/common/listitems',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/common/listitems',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/common/listitems', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/common/listitems', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/listitems");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/common/listitems", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /common/listitems`

*Get all list items*

Returns all list items based on the search criteria.

<h3 id="get__common_listitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|The number of records to return. The default is 25 and the maximum is 100.|
|offset|query|string|false|The start of the page offset. The default is from the beginning.|
|listId|query|string|false|The unique identifier for the list this item is a member of.|
|name|query|string|false|The name of the list item. Maximum length: 64.|
|parentId|query|string|false|The unique identifier of this item's parent. Empty when there is no parent.|
|level1Code|query|string|false|The item code for the first level of the list. All lists have at least a Level1Code. Maximum 32 characters|
|level2Code|query|string|false|The item code for the second level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|level3Code|query|string|false|The item code for the third level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|level4Code|query|string|false|The item code for the fourth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|level5Code|query|string|false|The item code for the fifth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|level6Code|query|string|false|The item code for the sixth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|level7Code|query|string|false|The item code for the seventh level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|level8Code|query|string|false|The item code for the eighth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|level9Code|query|string|false|The item code for the ninth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|level10Code|query|string|false|The item code for the tenth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|

> Example responses

> 200 Response

```json
{
  "Items": {
    "ID": "string",
    "Level10Code": "string",
    "Level1Code": "string",
    "Level2Code": "string",
    "Level3Code": "string",
    "Level4Code": "string",
    "Level5Code": "string",
    "Level6Code": "string",
    "Level7Code": "string",
    "Level8Code": "string",
    "Level9Code": "string",
    "ListID": "string",
    "Name": "string",
    "ParentID": "string",
    "URI": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ListItemGetCollection>
  <Items>
    <ID>string</ID>
    <Level10Code>string</Level10Code>
    <Level1Code>string</Level1Code>
    <Level2Code>string</Level2Code>
    <Level3Code>string</Level3Code>
    <Level4Code>string</Level4Code>
    <Level5Code>string</Level5Code>
    <Level6Code>string</Level6Code>
    <Level7Code>string</Level7Code>
    <Level8Code>string</Level8Code>
    <Level9Code>string</Level9Code>
    <ListID>string</ListID>
    <Name>string</Name>
    <ParentID>string</ParentID>
    <URI>string</URI>
  </Items>
  <NextPage>string</NextPage>
</ListItemGetCollection>
```

<h3 id="get__common_listitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ListItemGetCollection](#schemalistitemgetcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## post__common_listitems

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/common/listitems \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://www.concursolutions.com/api/v3.0/common/listitems HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "Level10Code": "string",
  "Level1Code": "string",
  "Level2Code": "string",
  "Level3Code": "string",
  "Level4Code": "string",
  "Level5Code": "string",
  "Level6Code": "string",
  "Level7Code": "string",
  "Level8Code": "string",
  "Level9Code": "string",
  "ListID": "string",
  "Name": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/common/listitems',
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

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/common/listitems',
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

r = requests.post('https://www.concursolutions.com/api/v3.0/common/listitems', headers = headers)

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
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/common/listitems', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/listitems");
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
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/common/listitems", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /common/listitems`

*Create a new list item*

Creates a new item in the specified list.

> Body parameter

```json
{
  "Level10Code": "string",
  "Level1Code": "string",
  "Level2Code": "string",
  "Level3Code": "string",
  "Level4Code": "string",
  "Level5Code": "string",
  "Level6Code": "string",
  "Level7Code": "string",
  "Level8Code": "string",
  "Level9Code": "string",
  "ListID": "string",
  "Name": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ListItemPost>
  <Level10Code>string</Level10Code>
  <Level1Code>string</Level1Code>
  <Level2Code>string</Level2Code>
  <Level3Code>string</Level3Code>
  <Level4Code>string</Level4Code>
  <Level5Code>string</Level5Code>
  <Level6Code>string</Level6Code>
  <Level7Code>string</Level7Code>
  <Level8Code>string</Level8Code>
  <Level9Code>string</Level9Code>
  <ListID>string</ListID>
  <Name>string</Name>
</ListItemPost>
```

<h3 id="post__common_listitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ListItemPost](#schemalistitempost)|true|List item object to create.|

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

<h3 id="post__common_listitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreateResponse](#schemacreateresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## get__common_listitems_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/common/listitems/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/common/listitems/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/common/listitems/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/common/listitems/{id}',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/common/listitems/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/common/listitems/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/listitems/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/common/listitems/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /common/listitems/{id}`

*Get a single list item by ID*

Returns the specified list item.

<h3 id="get__common_listitems_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the list item.|
|listId|query|string|false|The unique identifier for the list this item is a member.|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Level10Code": "string",
  "Level1Code": "string",
  "Level2Code": "string",
  "Level3Code": "string",
  "Level4Code": "string",
  "Level5Code": "string",
  "Level6Code": "string",
  "Level7Code": "string",
  "Level8Code": "string",
  "Level9Code": "string",
  "ListID": "string",
  "Name": "string",
  "ParentID": "string",
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ListItemGet>
  <ID>string</ID>
  <Level10Code>string</Level10Code>
  <Level1Code>string</Level1Code>
  <Level2Code>string</Level2Code>
  <Level3Code>string</Level3Code>
  <Level4Code>string</Level4Code>
  <Level5Code>string</Level5Code>
  <Level6Code>string</Level6Code>
  <Level7Code>string</Level7Code>
  <Level8Code>string</Level8Code>
  <Level9Code>string</Level9Code>
  <ListID>string</ListID>
  <Name>string</Name>
  <ParentID>string</ParentID>
  <URI>string</URI>
</ListItemGet>
```

<h3 id="get__common_listitems_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ListItemGet](#schemalistitemget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## put__common_listitems_{id}

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/common/listitems/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://www.concursolutions.com/api/v3.0/common/listitems/{id} HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "Code": "string",
  "ListID": "string",
  "Name": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/common/listitems/{id}',
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

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/common/listitems/{id}',
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

r = requests.put('https://www.concursolutions.com/api/v3.0/common/listitems/{id}', headers = headers)

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
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/common/listitems/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/listitems/{id}");
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
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/common/listitems/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /common/listitems/{id}`

*Update list item*

Updates the specified list item. Only the provided fields will be updated, missing fields will not be altered.

> Body parameter

```json
{
  "Code": "string",
  "ListID": "string",
  "Name": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ListItemPut>
  <Code>string</Code>
  <ListID>string</ListID>
  <Name>string</Name>
</ListItemPut>
```

<h3 id="put__common_listitems_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the list item.|
|body|body|[ListItemPut](#schemalistitemput)|true|The list item object to update|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="put__common_listitems_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## delete__common_listitems_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE https://www.concursolutions.com/api/v3.0/common/listitems/{id}?listId=string \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE https://www.concursolutions.com/api/v3.0/common/listitems/{id}?listId=string HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/common/listitems/{id}?listId=string',
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

result = RestClient.delete 'https://www.concursolutions.com/api/v3.0/common/listitems/{id}',
  params: {
  'listId' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('https://www.concursolutions.com/api/v3.0/common/listitems/{id}', params={
  'listId': 'string'
}, headers = headers)

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
    $response = $client->request('DELETE','https://www.concursolutions.com/api/v3.0/common/listitems/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/listitems/{id}?listId=string");
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
    req, err := http.NewRequest("DELETE", "https://www.concursolutions.com/api/v3.0/common/listitems/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /common/listitems/{id}`

*Delete list item by ID*

Deletes the specified list item.

<h3 id="delete__common_listitems_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the list item to delete|
|listId|query|string|true|The unique identifier of the list associated with a list item to be deleted|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="delete__common_listitems_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

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
|ID|string|false|none|none|
|URI|string|false|none|none|

<h2 id="tocS_ListItemGet">ListItemGet</h2>

<a id="schemalistitemget"></a>
<a id="schema_ListItemGet"></a>
<a id="tocSlistitemget"></a>
<a id="tocslistitemget"></a>

```json
{
  "ID": "string",
  "Level10Code": "string",
  "Level1Code": "string",
  "Level2Code": "string",
  "Level3Code": "string",
  "Level4Code": "string",
  "Level5Code": "string",
  "Level6Code": "string",
  "Level7Code": "string",
  "Level8Code": "string",
  "Level9Code": "string",
  "ListID": "string",
  "Name": "string",
  "ParentID": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|The unique identifier of the resource.|
|Level10Code|string|false|none|The item code for the tenth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level1Code|string|false|none|The item code for the first level of the list. All lists have at least a Level1Code. Maximum 32 characters|
|Level2Code|string|false|none|The item code for the second level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level3Code|string|false|none|The item code for the third level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level4Code|string|false|none|The item code for the fourth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level5Code|string|false|none|The item code for the fifth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level6Code|string|false|none|The item code for the sixth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level7Code|string|false|none|The item code for the seventh level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level8Code|string|false|none|The item code for the eighth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level9Code|string|false|none|The item code for the ninth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|ListID|string|false|none|The unique identifier for the list this item is a member of.|
|Name|string|false|none|The name of item. Maximum 64 characters|
|ParentID|string|false|none|The unique identifier of this item's parent. Empty when there is no parent.|
|URI|string|false|none|The URI to the resource.|

<h2 id="tocS_ListItemGetCollection">ListItemGetCollection</h2>

<a id="schemalistitemgetcollection"></a>
<a id="schema_ListItemGetCollection"></a>
<a id="tocSlistitemgetcollection"></a>
<a id="tocslistitemgetcollection"></a>

```json
{
  "Items": {
    "ID": "string",
    "Level10Code": "string",
    "Level1Code": "string",
    "Level2Code": "string",
    "Level3Code": "string",
    "Level4Code": "string",
    "Level5Code": "string",
    "Level6Code": "string",
    "Level7Code": "string",
    "Level8Code": "string",
    "Level9Code": "string",
    "ListID": "string",
    "Name": "string",
    "ParentID": "string",
    "URI": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[ListItemGet](#schemalistitemget)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h2 id="tocS_ListItemPost">ListItemPost</h2>

<a id="schemalistitempost"></a>
<a id="schema_ListItemPost"></a>
<a id="tocSlistitempost"></a>
<a id="tocslistitempost"></a>

```json
{
  "Level10Code": "string",
  "Level1Code": "string",
  "Level2Code": "string",
  "Level3Code": "string",
  "Level4Code": "string",
  "Level5Code": "string",
  "Level6Code": "string",
  "Level7Code": "string",
  "Level8Code": "string",
  "Level9Code": "string",
  "ListID": "string",
  "Name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Level10Code|string|false|none|The item code for the tenth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level1Code|string|false|none|The item code for the first level of the list. All lists have at least a Level1Code. Maximum 32 characters|
|Level2Code|string|false|none|The item code for the second level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level3Code|string|false|none|The item code for the third level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level4Code|string|false|none|The item code for the fourth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level5Code|string|false|none|The item code for the fifth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level6Code|string|false|none|The item code for the sixth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level7Code|string|false|none|The item code for the seventh level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level8Code|string|false|none|The item code for the eighth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|Level9Code|string|false|none|The item code for the ninth level of the list. Empty when this level doesn't exist in the list. Maximum 32 characters|
|ListID|string|false|none|The unique identifier for the list this item is a member of.|
|Name|string|false|none|The name of item. Maximum 64 characters|

<h2 id="tocS_ListItemPut">ListItemPut</h2>

<a id="schemalistitemput"></a>
<a id="schema_ListItemPut"></a>
<a id="tocSlistitemput"></a>
<a id="tocslistitemput"></a>

```json
{
  "Code": "string",
  "ListID": "string",
  "Name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|The item code of the list item. Maximum 32 characters|
|ListID|string|false|none|The unique identifier for the list this item is a member of.|
|Name|string|false|none|The name of item. Maximum 64 characters|

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

