
<h2 id="list">List v4.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides an automated solution to clients who would like to manage lists. This API provides methods to view, add, update or delete lists.

Base URLs:

* <a href="https://www.concursolutions.com/api/v4.0">https://www.concursolutions.com/api/v4.0</a>



* API Key (JWT_Token)
    - Parameter Name: **Authorization**, in: header.

<h2 id="list-list-api">List API</h2>

List Controller

#### getListsForCategoryUsingGET

<a id="opIdgetListsForCategoryUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v4.0/list/v4/categories/{categoryId}/lists \
  -H 'Accept: application/json' \
  -H 'Accept-Language: en' \
  -H 'company-uuid: string' \
  -H 'concur-correlationid: string' \
  -H 'concur-uid: string' \
  -H 'Authorization: API_KEY'

```

```http
GET https://www.concursolutions.com/api/v4.0/list/v4/categories/{categoryId}/lists HTTP/1.1
Host: www.concursolutions.com
Accept: application/json
Accept-Language: en
company-uuid: string
concur-correlationid: string
concur-uid: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'Accept-Language':'en',
  'company-uuid':'string',
  'concur-correlationid':'string',
  'concur-uid':'string',
  'Authorization':'API_KEY'
};

fetch('https://www.concursolutions.com/api/v4.0/list/v4/categories/{categoryId}/lists',
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
  'Accept-Language' => 'en',
  'company-uuid' => 'string',
  'concur-correlationid' => 'string',
  'concur-uid' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://www.concursolutions.com/api/v4.0/list/v4/categories/{categoryId}/lists',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Accept-Language': 'en',
  'company-uuid': 'string',
  'concur-correlationid': 'string',
  'concur-uid': 'string',
  'Authorization': 'API_KEY'
}

r = requests.get('https://www.concursolutions.com/api/v4.0/list/v4/categories/{categoryId}/lists', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Accept-Language' => 'en',
    'company-uuid' => 'string',
    'concur-correlationid' => 'string',
    'concur-uid' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/v4.0/list/v4/categories/{categoryId}/lists', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v4.0/list/v4/categories/{categoryId}/lists");
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
        "Accept-Language": []string{"en"},
        "company-uuid": []string{"string"},
        "concur-correlationid": []string{"string"},
        "concur-uid": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v4.0/list/v4/categories/{categoryId}/lists", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /list/v4/categories/{categoryId}/lists`

*Get the lists for a given category id*

Returns lists for the category

<h3 id="getlistsforcategoryusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Language code|
|categoryId|path|string(uuid)|true|The unique identifier of the category|
|company-uuid|header|string|false|Company UUID of the user (Used for x509 authorization)|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|concur-uid|header|string|false|Concur Employee UUID of the caller (Used for x509 authorization)|
|page|query|integer(int32)|false|Page number starting from 1|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": "string",
      "categoryId": "337f5e5d-288b-40d5-be14-901cc3acacc0",
      "levelCount": 1,
      "searchCriteria": "string",
      "displayFormat": "string",
      "isReadOnly": true,
      "isDeleted": true
    }
  ],
  "links": [
    {
      "deprecation": "string",
      "href": "string",
      "hreflang": "string",
      "media": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "page": {
    "number": 0,
    "size": 0,
    "totalElements": 0,
    "totalPages": 0
  }
}
```

<h3 id="getlistsforcategoryusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successfully got all lists of list category|[PagedResourcesListResponse](#schemapagedresourceslistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Entity does not exist|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Access Denied|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|List category not found|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT_Token
</aside>

#### getAllListsUsingGET

<a id="opIdgetAllListsUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v4.0/list/v4/lists \
  -H 'Accept: application/json' \
  -H 'Accept-Language: en' \
  -H 'company-uuid: string' \
  -H 'concur-correlationid: string' \
  -H 'concur-uid: string' \
  -H 'Authorization: API_KEY'

```

```http
GET https://www.concursolutions.com/api/v4.0/list/v4/lists HTTP/1.1
Host: www.concursolutions.com
Accept: application/json
Accept-Language: en
company-uuid: string
concur-correlationid: string
concur-uid: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'Accept-Language':'en',
  'company-uuid':'string',
  'concur-correlationid':'string',
  'concur-uid':'string',
  'Authorization':'API_KEY'
};

fetch('https://www.concursolutions.com/api/v4.0/list/v4/lists',
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
  'Accept-Language' => 'en',
  'company-uuid' => 'string',
  'concur-correlationid' => 'string',
  'concur-uid' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://www.concursolutions.com/api/v4.0/list/v4/lists',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Accept-Language': 'en',
  'company-uuid': 'string',
  'concur-correlationid': 'string',
  'concur-uid': 'string',
  'Authorization': 'API_KEY'
}

r = requests.get('https://www.concursolutions.com/api/v4.0/list/v4/lists', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Accept-Language' => 'en',
    'company-uuid' => 'string',
    'concur-correlationid' => 'string',
    'concur-uid' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/v4.0/list/v4/lists', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v4.0/list/v4/lists");
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
        "Accept-Language": []string{"en"},
        "company-uuid": []string{"string"},
        "concur-correlationid": []string{"string"},
        "concur-uid": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v4.0/list/v4/lists", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /list/v4/lists`

*Gets all lists for the given company*

Returns all lists

<h3 id="getalllistsusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Language code|
|company-uuid|header|string|false|Company UUID of the user (Used for x509 authorization)|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|concur-uid|header|string|false|Concur Employee UUID of the caller (Used for x509 authorization)|
|page|query|integer(int32)|false|Page number starting from 1|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": "string",
      "categoryId": "337f5e5d-288b-40d5-be14-901cc3acacc0",
      "levelCount": 1,
      "searchCriteria": "string",
      "displayFormat": "string",
      "isReadOnly": true,
      "isDeleted": true
    }
  ],
  "links": [
    {
      "deprecation": "string",
      "href": "string",
      "hreflang": "string",
      "media": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "page": {
    "number": 0,
    "size": 0,
    "totalElements": 0,
    "totalPages": 0
  }
}
```

<h3 id="getalllistsusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successfully get all lists|[PagedResourcesListResponse](#schemapagedresourceslistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Entity does not exist|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Access Denied|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT_Token
</aside>

#### createListUsingPOST

<a id="opIdcreateListUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v4.0/list/v4/lists \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'company-uuid: string' \
  -H 'concur-correlationid: string' \
  -H 'concur-uid: string' \
  -H 'Authorization: API_KEY'

```

```http
POST https://www.concursolutions.com/api/v4.0/list/v4/lists HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json
company-uuid: string
concur-correlationid: string
concur-uid: string

```

```javascript
const inputBody = '{
  "searchCriteria": "TEXT",
  "value": "string",
  "categoryId": "337f5e5d-288b-40d5-be14-901cc3acacc0",
  "displayFormat": "(CODE) TEXT"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'company-uuid':'string',
  'concur-correlationid':'string',
  'concur-uid':'string',
  'Authorization':'API_KEY'
};

fetch('https://www.concursolutions.com/api/v4.0/list/v4/lists',
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
  'company-uuid' => 'string',
  'concur-correlationid' => 'string',
  'concur-uid' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://www.concursolutions.com/api/v4.0/list/v4/lists',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'company-uuid': 'string',
  'concur-correlationid': 'string',
  'concur-uid': 'string',
  'Authorization': 'API_KEY'
}

r = requests.post('https://www.concursolutions.com/api/v4.0/list/v4/lists', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'company-uuid' => 'string',
    'concur-correlationid' => 'string',
    'concur-uid' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://www.concursolutions.com/api/v4.0/list/v4/lists', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v4.0/list/v4/lists");
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
        "company-uuid": []string{"string"},
        "concur-correlationid": []string{"string"},
        "concur-uid": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v4.0/list/v4/lists", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /list/v4/lists`

*Create a list with provided request body*

Returns a new list

> Body parameter

```json
{
  "searchCriteria": "TEXT",
  "value": "string",
  "categoryId": "337f5e5d-288b-40d5-be14-901cc3acacc0",
  "displayFormat": "(CODE) TEXT"
}
```

<h3 id="createlistusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company-uuid|header|string|false|Company UUID of the user (Used for x509 authorization)|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|concur-uid|header|string|false|Concur Employee UUID of the caller (Used for x509 authorization)|
|body|body|[ListRequest](#schemalistrequest)|true|List object that is created for the company|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "value": "string",
  "categoryId": "337f5e5d-288b-40d5-be14-901cc3acacc0",
  "levelCount": 1,
  "searchCriteria": "string",
  "displayFormat": "string",
  "isReadOnly": true,
  "isDeleted": true
}
```

<h3 id="createlistusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Successfully created a list|[ListResponse](#schemalistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Entity does not exist|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Access Denied|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[ErrorMessage](#schemaerrormessage)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|The specified media type is not supported|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|List could not be created|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT_Token
</aside>

#### getListUsingGET

<a id="opIdgetListUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId} \
  -H 'Accept: application/json' \
  -H 'Accept-Language: en' \
  -H 'company-uuid: string' \
  -H 'concur-correlationid: string' \
  -H 'concur-uid: string' \
  -H 'Authorization: API_KEY'

```

```http
GET https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json
Accept-Language: en
company-uuid: string
concur-correlationid: string
concur-uid: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'Accept-Language':'en',
  'company-uuid':'string',
  'concur-correlationid':'string',
  'concur-uid':'string',
  'Authorization':'API_KEY'
};

fetch('https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}',
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
  'Accept-Language' => 'en',
  'company-uuid' => 'string',
  'concur-correlationid' => 'string',
  'concur-uid' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Accept-Language': 'en',
  'company-uuid': 'string',
  'concur-correlationid': 'string',
  'concur-uid': 'string',
  'Authorization': 'API_KEY'
}

r = requests.get('https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Accept-Language' => 'en',
    'company-uuid' => 'string',
    'concur-correlationid' => 'string',
    'concur-uid' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}");
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
        "Accept-Language": []string{"en"},
        "company-uuid": []string{"string"},
        "concur-correlationid": []string{"string"},
        "concur-uid": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /list/v4/lists/{listId}`

*Get a list with provided list id*

Returns an existing list

<h3 id="getlistusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Language code|
|company-uuid|header|string|false|Company UUID of the user (Used for x509 authorization)|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|concur-uid|header|string|false|Concur Employee UUID of the caller (Used for x509 authorization)|
|listId|path|string(uuid)|true|The unique identifier of the list|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "value": "string",
  "categoryId": "337f5e5d-288b-40d5-be14-901cc3acacc0",
  "levelCount": 1,
  "searchCriteria": "string",
  "displayFormat": "string",
  "isReadOnly": true,
  "isDeleted": true
}
```

<h3 id="getlistusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successfully get list|[ListResponse](#schemalistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Entity does not exist|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Access Denied|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|List not found|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT_Token
</aside>

#### putListUsingPUT

<a id="opIdputListUsingPUT"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Accept-Language: en' \
  -H 'company-uuid: string' \
  -H 'concur-correlationid: string' \
  -H 'concur-uid: string' \
  -H 'Authorization: API_KEY'

```

```http
PUT https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId} HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json
Accept-Language: en
company-uuid: string
concur-correlationid: string
concur-uid: string

```

```javascript
const inputBody = '{
  "value": "string",
  "searchCriteria": "TEXT",
  "displayFormat": "(CODE) TEXT"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Accept-Language':'en',
  'company-uuid':'string',
  'concur-correlationid':'string',
  'concur-uid':'string',
  'Authorization':'API_KEY'
};

fetch('https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}',
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
  'Accept-Language' => 'en',
  'company-uuid' => 'string',
  'concur-correlationid' => 'string',
  'concur-uid' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.put 'https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Accept-Language': 'en',
  'company-uuid': 'string',
  'concur-correlationid': 'string',
  'concur-uid': 'string',
  'Authorization': 'API_KEY'
}

r = requests.put('https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Accept-Language' => 'en',
    'company-uuid' => 'string',
    'concur-correlationid' => 'string',
    'concur-uid' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}");
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
        "Accept-Language": []string{"en"},
        "company-uuid": []string{"string"},
        "concur-correlationid": []string{"string"},
        "concur-uid": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /list/v4/lists/{listId}`

*Update a list with provided request body*

Returns updated list

> Body parameter

```json
{
  "value": "string",
  "searchCriteria": "TEXT",
  "displayFormat": "(CODE) TEXT"
}
```

<h3 id="putlistusingput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Language code|
|company-uuid|header|string|false|Company UUID of the user (Used for x509 authorization)|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|concur-uid|header|string|false|Concur Employee UUID of the caller (Used for x509 authorization)|
|listId|path|string(uuid)|true|The unique identifier of the list|
|body|body|[ListUpdate](#schemalistupdate)|true|List object that is updated for the company|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "value": "string",
  "categoryId": "337f5e5d-288b-40d5-be14-901cc3acacc0",
  "levelCount": 1,
  "searchCriteria": "string",
  "displayFormat": "string",
  "isReadOnly": true,
  "isDeleted": true
}
```

<h3 id="putlistusingput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successfully updated the list|[ListResponse](#schemalistresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Entity does not exist|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Access Denied|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|List not found|[ErrorMessage](#schemaerrormessage)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|The specified media type is not supported|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT_Token
</aside>

#### deleteListUsingDELETE

<a id="opIddeleteListUsingDELETE"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId} \
  -H 'Accept: application/json' \
  -H 'company-uuid: string' \
  -H 'concur-correlationid: string' \
  -H 'concur-uid: string' \
  -H 'Authorization: API_KEY'

```

```http
DELETE https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json
company-uuid: string
concur-correlationid: string
concur-uid: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'company-uuid':'string',
  'concur-correlationid':'string',
  'concur-uid':'string',
  'Authorization':'API_KEY'
};

fetch('https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}',
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
  'company-uuid' => 'string',
  'concur-correlationid' => 'string',
  'concur-uid' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.delete 'https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'company-uuid': 'string',
  'concur-correlationid': 'string',
  'concur-uid': 'string',
  'Authorization': 'API_KEY'
}

r = requests.delete('https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'company-uuid' => 'string',
    'concur-correlationid' => 'string',
    'concur-uid' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}");
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
        "company-uuid": []string{"string"},
        "concur-correlationid": []string{"string"},
        "concur-uid": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://www.concursolutions.com/api/v4.0/list/v4/lists/{listId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /list/v4/lists/{listId}`

*Delete a list*

Returns status code result

<h3 id="deletelistusingdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company-uuid|header|string|false|Company UUID of the user (Used for x509 authorization)|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|concur-uid|header|string|false|Concur Employee UUID of the caller (Used for x509 authorization)|
|listId|path|string(uuid)|true|The unique identifier of the list|

> Example responses

> 400 Response

```json
{
  "error": {
    "id": "string",
    "message": "string"
  },
  "httpStatus": "string",
  "path": "string",
  "timestamp": "2016-10-04T00:53:25.931+0000",
  "validationErrors": [
    {
      "message": "string",
      "source": "string"
    }
  ]
}
```

<h3 id="deletelistusingdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|List resource no longer in system.|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|List could not be deleted|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Access Denied|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT_Token
</aside>

### Schemas

<h3 id="tocS_ErrorMessage">ErrorMessage</h3>

<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
{
  "error": {
    "id": "string",
    "message": "string"
  },
  "httpStatus": "string",
  "path": "string",
  "timestamp": "2016-10-04T00:53:25.931+0000",
  "validationErrors": [
    {
      "message": "string",
      "source": "string"
    }
  ]
}

```

ErrorMessage

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Message](#schemamessage)|true|none|none|
|httpStatus|string|true|none|The http response code and phrase for the response|
|path|string|true|none|The URI of the attempted request|
|timestamp|string(date-time)|true|none|The time when the error was captured|
|validationErrors|[[ValidationError](#schemavalidationerror)]|false|none|The validation error messages|

<h3 id="tocS_Link">Link</h3>

<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "deprecation": "string",
  "href": "string",
  "hreflang": "string",
  "media": "string",
  "rel": "string",
  "templated": true,
  "title": "string",
  "type": "string"
}

```

Link

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deprecation|string|false|none|none|
|href|string|false|none|none|
|hreflang|string|false|none|none|
|media|string|false|none|none|
|rel|string|false|none|none|
|templated|boolean|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<h3 id="tocS_ListRequest">ListRequest</h3>

<a id="schemalistrequest"></a>
<a id="schema_ListRequest"></a>
<a id="tocSlistrequest"></a>
<a id="tocslistrequest"></a>

```json
{
  "searchCriteria": "TEXT",
  "value": "string",
  "categoryId": "337f5e5d-288b-40d5-be14-901cc3acacc0",
  "displayFormat": "(CODE) TEXT"
}

```

ListRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchCriteria|string|false|none|What attribute to search by|
|value|string|true|none|Name of the list|
|categoryId|string(uuid)|false|none|The unique identifier of the category that the list belongs to|
|displayFormat|string|false|none|Whether we display code or value first|

###### Enumerated Values

|Property|Value|
|---|---|
|searchCriteria|TEXT|
|searchCriteria|CODE|
|displayFormat|(CODE) TEXT|
|displayFormat|TEXT (CODE)|

<h3 id="tocS_ListResponse">ListResponse</h3>

<a id="schemalistresponse"></a>
<a id="schema_ListResponse"></a>
<a id="tocSlistresponse"></a>
<a id="tocslistresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "value": "string",
  "categoryId": "337f5e5d-288b-40d5-be14-901cc3acacc0",
  "levelCount": 1,
  "searchCriteria": "string",
  "displayFormat": "string",
  "isReadOnly": true,
  "isDeleted": true
}

```

ListResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|Unique identifier of a List|
|value|string|false|none|Name of the list|
|categoryId|string(uuid)|false|none|Unique identifier of a Category|
|levelCount|integer(int32)|false|none|Number of levels in the list|
|searchCriteria|string|false|none|What attribute to search by|
|displayFormat|string|false|none|Whether we display code or value first|
|isReadOnly|boolean|false|none|Whether the list is read only|
|isDeleted|boolean|false|none|Whether the list has been deleted|

<h3 id="tocS_ListUpdate">ListUpdate</h3>

<a id="schemalistupdate"></a>
<a id="schema_ListUpdate"></a>
<a id="tocSlistupdate"></a>
<a id="tocslistupdate"></a>

```json
{
  "value": "string",
  "searchCriteria": "TEXT",
  "displayFormat": "(CODE) TEXT"
}

```

ListUpdate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|Name of the list|
|searchCriteria|string|false|none|What attribute to search by|
|displayFormat|string|false|none|Whether we display code or value first|

###### Enumerated Values

|Property|Value|
|---|---|
|searchCriteria|TEXT|
|searchCriteria|CODE|
|displayFormat|(CODE) TEXT|
|displayFormat|TEXT (CODE)|

<h3 id="tocS_Message">Message</h3>

<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "id": "string",
  "message": "string"
}

```

Message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the error associated with the response or is it error response itself|
|message|string|false|none|none|

<h3 id="tocS_PageMetadata">PageMetadata</h3>

<a id="schemapagemetadata"></a>
<a id="schema_PageMetadata"></a>
<a id="tocSpagemetadata"></a>
<a id="tocspagemetadata"></a>

```json
{
  "number": 0,
  "size": 0,
  "totalElements": 0,
  "totalPages": 0
}

```

PageMetadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|integer(int64)|false|none|none|
|size|integer(int64)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int64)|false|none|none|

<h3 id="tocS_PagedResourcesListResponse">PagedResourcesListResponse</h3>

<a id="schemapagedresourceslistresponse"></a>
<a id="schema_PagedResourcesListResponse"></a>
<a id="tocSpagedresourceslistresponse"></a>
<a id="tocspagedresourceslistresponse"></a>

```json
{
  "content": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": "string",
      "categoryId": "337f5e5d-288b-40d5-be14-901cc3acacc0",
      "levelCount": 1,
      "searchCriteria": "string",
      "displayFormat": "string",
      "isReadOnly": true,
      "isDeleted": true
    }
  ],
  "links": [
    {
      "deprecation": "string",
      "href": "string",
      "hreflang": "string",
      "media": "string",
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string"
    }
  ],
  "page": {
    "number": 0,
    "size": 0,
    "totalElements": 0,
    "totalPages": 0
  }
}

```

PagedResourcesListResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[ListResponse](#schemalistresponse)]|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|page|[PageMetadata](#schemapagemetadata)|false|none|none|

<h3 id="tocS_ValidationError">ValidationError</h3>

<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "message": "string",
  "source": "string"
}

```

ValidationError

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The detailed message of the validation error|
|source|string|false|none|The type of validation which failed|

