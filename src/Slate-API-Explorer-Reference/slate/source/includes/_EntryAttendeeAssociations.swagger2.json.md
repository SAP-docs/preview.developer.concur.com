

<h2 id="entry-attendee-associations">Entry Attendee Associations v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manage the relationship between the attendees and the expense report and entry, for the specified expense entry. This resource does not include the full attendee information, which can be accessed using the Attendees resource. This API provides methods to view, create, update, and delete entry attendee associations.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>





    

    

<h3 id="entry-attendee-associations-resources">Resources</h3>

#### get__expense_entryattendeeassociations

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/entryattendeeassociations`

*Get all entry-attendee associations*

Gets all entry-attendee associations owned by the user. These are the associations between an expense entry and an attendee.

<h3 id="get__expense_entryattendeeassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entryID|query|string|false|The ID of the entry for which to retrieve entry-attendee associations.|
|offset|query|string|false|The starting point of the next set of results, after the limit specified in the limit field has been reached.|
|limit|query|integer(int32)|false|The number of records to return. Default value: 25|
|user|query|string|false|The login ID of the user who owns this entry-attendee association. The user must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "Items": {
    "Amount": 0,
    "AssociatedAttendeeCount": 0,
    "AttendeeID": "string",
    "Custom1": "string",
    "Custom2": "string",
    "Custom3": "string",
    "Custom4": "string",
    "Custom5": "string",
    "EntryID": "string",
    "ID": "string",
    "URI": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<EntryAttendeeAssociationCollection>
  <Items>
    <Amount>0</Amount>
    <AssociatedAttendeeCount>0</AssociatedAttendeeCount>
    <AttendeeID>string</AttendeeID>
    <Custom1>string</Custom1>
    <Custom2>string</Custom2>
    <Custom3>string</Custom3>
    <Custom4>string</Custom4>
    <Custom5>string</Custom5>
    <EntryID>string</EntryID>
    <ID>string</ID>
    <URI>string</URI>
  </Items>
  <NextPage>string</NextPage>
</EntryAttendeeAssociationCollection>
```

<h3 id="get__expense_entryattendeeassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[EntryAttendeeAssociationCollection](#schemaentryattendeeassociationcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### post__expense_entryattendeeassociations

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "Amount": 0,
  "AssociatedAttendeeCount": 0,
  "AttendeeID": "string",
  "Custom1": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "EntryID": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations',
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

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations',
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

r = requests.post('https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations', headers = headers)

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
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations");
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
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /expense/entryattendeeassociations`

*Create entry-attendee association*

Creates a new association between an expense entry and an attendee.

> Body parameter

```json
{
  "Amount": 0,
  "AssociatedAttendeeCount": 0,
  "AttendeeID": "string",
  "Custom1": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "EntryID": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<EntryAttendeeAssociationPost>
  <Amount>0</Amount>
  <AssociatedAttendeeCount>0</AssociatedAttendeeCount>
  <AttendeeID>string</AttendeeID>
  <Custom1>string</Custom1>
  <Custom2>string</Custom2>
  <Custom3>string</Custom3>
  <Custom4>string</Custom4>
  <Custom5>string</Custom5>
  <EntryID>string</EntryID>
</EntryAttendeeAssociationPost>
```

<h3 id="post__expense_entryattendeeassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|false|The login ID of the user who owns this entry-attendee association. The user must have the Web Services Admin role to use this parameter.|
|body|body|[EntryAttendeeAssociationPost](#schemaentryattendeeassociationpost)|true|The EntryAttendeeAssociation object to create.|

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

<h3 id="post__expense_entryattendeeassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreateResponse](#schemacreateresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### get__expense_entryattendeeassociations_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/entryattendeeassociations/{id}`

*Get a single entry-attendee association*

Gets the specified entry-attendee association.

<h3 id="get__expense_entryattendeeassociations_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the entry-attendee association.|
|user|query|string|false|The login ID of the user who owns this entry-attendee association. The user must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "Amount": 0,
  "AssociatedAttendeeCount": 0,
  "AttendeeID": "string",
  "Custom1": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "EntryID": "string",
  "ID": "string",
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<EntryAttendeeAssociationGet>
  <Amount>0</Amount>
  <AssociatedAttendeeCount>0</AssociatedAttendeeCount>
  <AttendeeID>string</AttendeeID>
  <Custom1>string</Custom1>
  <Custom2>string</Custom2>
  <Custom3>string</Custom3>
  <Custom4>string</Custom4>
  <Custom5>string</Custom5>
  <EntryID>string</EntryID>
  <ID>string</ID>
  <URI>string</URI>
</EntryAttendeeAssociationGet>
```

<h3 id="get__expense_entryattendeeassociations_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[EntryAttendeeAssociationGet](#schemaentryattendeeassociationget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### put__expense_entryattendeeassociations_{id}

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id} HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "Amount": 0,
  "AssociatedAttendeeCount": 0,
  "Custom1": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}',
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

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}',
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

r = requests.put('https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}', headers = headers)

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
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}");
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
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /expense/entryattendeeassociations/{id}`

*Update an entry-attendee association*

Updates the specified entry-attendee association. Only the fields provided in the supplied object will be updated. Missing fields will not be altered.

> Body parameter

```json
{
  "Amount": 0,
  "AssociatedAttendeeCount": 0,
  "Custom1": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<EntryAttendeeAssociationPut>
  <Amount>0</Amount>
  <AssociatedAttendeeCount>0</AssociatedAttendeeCount>
  <Custom1>string</Custom1>
  <Custom2>string</Custom2>
  <Custom3>string</Custom3>
  <Custom4>string</Custom4>
  <Custom5>string</Custom5>
</EntryAttendeeAssociationPut>
```

<h3 id="put__expense_entryattendeeassociations_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the entry-attendee association.|
|user|query|string|false|The login ID of the user who owns this entry-attendee association. The user must have the Web Services Admin role to use this parameter.|
|body|body|[EntryAttendeeAssociationPut](#schemaentryattendeeassociationput)|true|The partial or complete EntryAttendeeAssociation object to update.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="put__expense_entryattendeeassociations_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### delete__expense_entryattendeeassociations_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}',
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

result = RestClient.delete 'https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}',
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

r = requests.delete('https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}', headers = headers)

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
    $response = $client->request('DELETE','https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}");
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
    req, err := http.NewRequest("DELETE", "https://www.concursolutions.com/api/v3.0/expense/entryattendeeassociations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /expense/entryattendeeassociations/{id}`

*Delete an entry-attendee association*

Deletes the specified entry-attendee association.

<h3 id="delete__expense_entryattendeeassociations_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the entry-attendee association to delete.|
|user|query|string|false|The login ID of the user who owns this entry-attendee association. The user must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="delete__expense_entryattendeeassociations_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
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

<h3 id="tocS_EntryAttendeeAssociationCollection">EntryAttendeeAssociationCollection</h3>

<a id="schemaentryattendeeassociationcollection"></a>
<a id="schema_EntryAttendeeAssociationCollection"></a>
<a id="tocSentryattendeeassociationcollection"></a>
<a id="tocsentryattendeeassociationcollection"></a>

```json
{
  "Items": {
    "Amount": 0,
    "AssociatedAttendeeCount": 0,
    "AttendeeID": "string",
    "Custom1": "string",
    "Custom2": "string",
    "Custom3": "string",
    "Custom4": "string",
    "Custom5": "string",
    "EntryID": "string",
    "ID": "string",
    "URI": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[EntryAttendeeAssociationGet](#schemaentryattendeeassociationget)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h3 id="tocS_EntryAttendeeAssociationGet">EntryAttendeeAssociationGet</h3>

<a id="schemaentryattendeeassociationget"></a>
<a id="schema_EntryAttendeeAssociationGet"></a>
<a id="tocSentryattendeeassociationget"></a>
<a id="tocsentryattendeeassociationget"></a>

```json
{
  "Amount": 0,
  "AssociatedAttendeeCount": 0,
  "AttendeeID": "string",
  "Custom1": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "EntryID": "string",
  "ID": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|number(double)|false|none|The portion of the entry transaction amount assigned to this attendee.|
|AssociatedAttendeeCount|integer(int32)|false|none|The count of additional attendees associated with this attendee. A count greater than 1 means there are unnamed attendees associated with this attendee.|
|AttendeeID|string|false|none|The unique identifier of the associated attendee. To obtain the attendee ID value, use the "GET /expense/attendees" endpoint.|
|Custom1|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom2|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom3|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom4|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom5|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|EntryID|string|false|none|The unique identifier of the associated entry. To obtain the attendee ID value, use the "GET /expense/entries" endpoint.|
|ID|string|false|none|The unique identifier of the resource.|
|URI|string|false|none|The URI to the resource.|

<h3 id="tocS_EntryAttendeeAssociationPost">EntryAttendeeAssociationPost</h3>

<a id="schemaentryattendeeassociationpost"></a>
<a id="schema_EntryAttendeeAssociationPost"></a>
<a id="tocSentryattendeeassociationpost"></a>
<a id="tocsentryattendeeassociationpost"></a>

```json
{
  "Amount": 0,
  "AssociatedAttendeeCount": 0,
  "AttendeeID": "string",
  "Custom1": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "EntryID": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|number(double)|false|none|The portion of the entry transaction amount assigned to this attendee.|
|AssociatedAttendeeCount|integer(int32)|false|none|The count of additional attendees associated with this attendee. A count greater than 1 means there are unnamed attendees associated with this attendee.|
|AttendeeID|string|false|none|The unique identifier of the associated attendee. To obtain the attendee ID value, use the "GET /expense/attendees" endpoint.|
|Custom1|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom2|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom3|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom4|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom5|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|EntryID|string|false|none|The unique identifier of the associated entry. To obtain the attendee ID value, use the "GET /expense/entries" endpoint. The value of the ID element in the response is the entry ID.|

<h3 id="tocS_EntryAttendeeAssociationPut">EntryAttendeeAssociationPut</h3>

<a id="schemaentryattendeeassociationput"></a>
<a id="schema_EntryAttendeeAssociationPut"></a>
<a id="tocSentryattendeeassociationput"></a>
<a id="tocsentryattendeeassociationput"></a>

```json
{
  "Amount": 0,
  "AssociatedAttendeeCount": 0,
  "Custom1": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|number(double)|false|none|The portion of the entry transaction amount assigned to this attendee.|
|AssociatedAttendeeCount|integer(int32)|false|none|The count of additional attendees associated with this attendee. A count greater than 1 means there are unnamed attendees associated with this attendee.|
|Custom1|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom2|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom3|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom4|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom5|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|

<h3 id="tocS_Void">Void</h3>

<a id="schemavoid"></a>
<a id="schema_Void"></a>
<a id="tocSvoid"></a>
<a id="tocsvoid"></a>

```json
{}

```

### Properties

*None*

