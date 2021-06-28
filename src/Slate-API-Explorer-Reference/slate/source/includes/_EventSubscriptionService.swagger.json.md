

<h2 id="event-service-api">Event Service Api v1.0.1</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Event Service Api.

Base URLs:

* <a href="//awsqa-event-mgmt.nonprod.cnqr.tech/">//awsqa-event-mgmt.nonprod.cnqr.tech/</a>

<a href="http://concur.com">Terms of service</a>

License: <a href="https://concur.com">Concur License</a>

<h2 id="event-service-api-subscriptions-management">Subscriptions Management</h2>

Subscriptions CRUD

#### listUsingGET_2

<a id="opIdlistUsingGET_2"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

```http
GET /awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions HTTP/1.1

Accept: application/json
Authorization: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'string'
};

fetch('/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions',
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
  'Authorization' => 'string'
}

result = RestClient.get '/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'string'
}

r = requests.get('/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions', array(
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
URL obj = new URL("/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions");
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
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v4/subscriptions`

*Fetch all of your subscriptions and subscription details*

Allows you to fetch all of your subscriptions based on your Application ID found in the JWT (web token).

<h3 id="listusingget_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Web token|

> Example responses

> 200 Response

```json
[
  {
    "applicationId": "string",
    "companyIds": [
      "string"
    ],
    "filter": ".*",
    "groups": [
      "string"
    ],
    "id": "string",
    "scope": "string",
    "topic": "string",
    "webHookConfig": {
      "endpoint": "string"
    }
  }
]
```

<h3 id="listusingget_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="listusingget_2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PublicWebhookSubscription](#schemapublicwebhooksubscription)]|false|none|none|
|» PublicWebhookSubscription|[PublicWebhookSubscription](#schemapublicwebhooksubscription)|false|none|none|
|»» applicationId|string|true|none|none|
|»» companyIds|[string]|false|none|Only events corresponding to one of the provided company IDs will be delivered to the subscription. Required for public subscriptions. If a single value of '.*' is provided in the array, companies will not be filtered out.|
|»» filter|string|false|none|The regex pattern which will be applied to the event type to filter events.Ignore if no filter is needed|
|»» groups|[string]|false|none|Only events corresponding to one of the provided group IDs will be delivered to the subscription. If left blank or omitted, groups will not be filtered out.|
|»» id|string|true|none|The name of the subscription, must be globally unique|
|»» scope|string|false|none|none|
|»» topic|string|true|none|The name of the topic from which this subscription is receiving event|
|»» webHookConfig|[WebhookConfig](#schemawebhookconfig)|true|none|none|
|»»» endpoint|string|true|none|A URL locating the endpoint to which event should be pushed. For example, a Webhook endpoint might use "https://example.com/push"|

<aside class="success">
This operation does not require authentication
</aside>

#### saveWebhookUsingPUT_1

<a id="opIdsaveWebhookUsingPUT_1"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/webhook \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

```http
PUT /awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/webhook HTTP/1.1

Content-Type: application/json
Accept: */*
Authorization: string

```

```javascript
const inputBody = '{
  "filter": ".*",
  "id": "string",
  "topic": "string",
  "webHookConfig": {
    "endpoint": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'string'
};

fetch('/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/webhook',
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
  'Accept' => '*/*',
  'Authorization' => 'string'
}

result = RestClient.put '/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/webhook',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'Authorization': 'string'
}

r = requests.put('/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/webhook', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => '*/*',
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/webhook', array(
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
URL obj = new URL("/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/webhook");
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
        "Accept": []string{"*/*"},
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/webhook", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /v4/subscriptions/webhook`

*Create or update subscription webhook*

Allows you to create or update subscription webhook for allowed topic (look up Topic Management for details).

> Body parameter

```json
{
  "filter": ".*",
  "id": "string",
  "topic": "string",
  "webHookConfig": {
    "endpoint": "string"
  }
}
```

<h3 id="savewebhookusingput_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Web token|
|body|body|[PublicWebhookSubscriptionApiAdapter](#schemapublicwebhooksubscriptionapiadapter)|true|Subscription|

> Example responses

> 200 Response

<h3 id="savewebhookusingput_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[SubscriptionSaveSuccess](#schemasubscriptionsavesuccess)|

<aside class="success">
This operation does not require authentication
</aside>

#### getUsingGET_2

<a id="opIdgetUsingGET_2"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

```http
GET /awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id} HTTP/1.1

Accept: application/json
Authorization: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'string'
};

fetch('/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id}',
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
  'Authorization' => 'string'
}

result = RestClient.get '/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'string'
}

r = requests.get('/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id}', array(
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
URL obj = new URL("/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id}");
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
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v4/subscriptions/{id}`

*Fetch your subscription details*

Allows you to fetch certain subscription details.

<h3 id="getusingget_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Web token|
|id|path|string|true|Subscription id|

> Example responses

> 200 Response

```json
{
  "applicationId": "string",
  "companyIds": [
    "string"
  ],
  "filter": ".*",
  "groups": [
    "string"
  ],
  "id": "string",
  "scope": "string",
  "topic": "string",
  "webHookConfig": {
    "endpoint": "string"
  }
}
```

<h3 id="getusingget_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PublicWebhookSubscription](#schemapublicwebhooksubscription)|

<aside class="success">
This operation does not require authentication
</aside>

#### deleteUsingDELETE_1

<a id="opIddeleteUsingDELETE_1"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

```http
DELETE /awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id} HTTP/1.1

Accept: application/json
Authorization: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'string'
};

fetch('/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id}',
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
  'Authorization' => 'string'
}

result = RestClient.delete '/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'string'
}

r = requests.delete('/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id}', array(
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
URL obj = new URL("/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id}");
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
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/awsqa-event-mgmt.nonprod.cnqr.tech/v4/subscriptions/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /v4/subscriptions/{id}`

*Delete your subscription*

Allows you to delete an existing subscription.

<h3 id="deleteusingdelete_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Web token|
|id|path|string|true|Subscription id|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="deleteusingdelete_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[SubscriptionDeleteSuccess](#schemasubscriptiondeletesuccess)|

<aside class="success">
This operation does not require authentication
</aside>

<h2 id="event-service-api-topics-management">Topics Management</h2>

Enumerate Available Topics

#### listUsingGET_3

<a id="opIdlistUsingGET_3"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /awsqa-event-mgmt.nonprod.cnqr.tech/v4/topics \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

```http
GET /awsqa-event-mgmt.nonprod.cnqr.tech/v4/topics HTTP/1.1

Accept: application/json
Authorization: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'string'
};

fetch('/awsqa-event-mgmt.nonprod.cnqr.tech/v4/topics',
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
  'Authorization' => 'string'
}

result = RestClient.get '/awsqa-event-mgmt.nonprod.cnqr.tech/v4/topics',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'string'
}

r = requests.get('/awsqa-event-mgmt.nonprod.cnqr.tech/v4/topics', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/awsqa-event-mgmt.nonprod.cnqr.tech/v4/topics', array(
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
URL obj = new URL("/awsqa-event-mgmt.nonprod.cnqr.tech/v4/topics");
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
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/awsqa-event-mgmt.nonprod.cnqr.tech/v4/topics", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v4/topics`

*Fetch allowed topics*

Fetch all allowed topics. If you don't see a specific topic, you don't have necessary scopes in your JWT. Please contact topic owner to add correct scopes to your Application.

<h3 id="listusingget_3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Web token|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="listusingget_3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="listusingget_3-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

### Schemas

<h3 id="tocS_PublicWebhookSubscription">PublicWebhookSubscription</h3>

<a id="schemapublicwebhooksubscription"></a>
<a id="schema_PublicWebhookSubscription"></a>
<a id="tocSpublicwebhooksubscription"></a>
<a id="tocspublicwebhooksubscription"></a>

```json
{
  "applicationId": "string",
  "companyIds": [
    "string"
  ],
  "filter": ".*",
  "groups": [
    "string"
  ],
  "id": "string",
  "scope": "string",
  "topic": "string",
  "webHookConfig": {
    "endpoint": "string"
  }
}

```

PublicWebhookSubscription

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationId|string|true|none|none|
|companyIds|[string]|false|none|Only events corresponding to one of the provided company IDs will be delivered to the subscription. Required for public subscriptions. If a single value of '.*' is provided in the array, companies will not be filtered out.|
|filter|string|false|none|The regex pattern which will be applied to the event type to filter events.Ignore if no filter is needed|
|groups|[string]|false|none|Only events corresponding to one of the provided group IDs will be delivered to the subscription. If left blank or omitted, groups will not be filtered out.|
|id|string|true|none|The name of the subscription, must be globally unique|
|scope|string|false|none|none|
|topic|string|true|none|The name of the topic from which this subscription is receiving event|
|webHookConfig|[WebhookConfig](#schemawebhookconfig)|true|none|Details of webhook subscription|

<h3 id="tocS_PublicWebhookSubscriptionApiAdapter">PublicWebhookSubscriptionApiAdapter</h3>

<a id="schemapublicwebhooksubscriptionapiadapter"></a>
<a id="schema_PublicWebhookSubscriptionApiAdapter"></a>
<a id="tocSpublicwebhooksubscriptionapiadapter"></a>
<a id="tocspublicwebhooksubscriptionapiadapter"></a>

```json
{
  "filter": ".*",
  "id": "string",
  "topic": "string",
  "webHookConfig": {
    "endpoint": "string"
  }
}

```

PublicWebhookSubscriptionApiAdapter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|The regex pattern which will be applied to the event type to filter events.Ignore if no filter is needed|
|id|string|true|none|The name of the subscription, must be globally unique|
|topic|string|true|none|The name of the topic from which this subscription is receiving event|
|webHookConfig|[WebhookConfig](#schemawebhookconfig)|true|none|Details of webhook subscription|

<h3 id="tocS_SubscriptionDeleteSuccess">SubscriptionDeleteSuccess</h3>

<a id="schemasubscriptiondeletesuccess"></a>
<a id="schema_SubscriptionDeleteSuccess"></a>
<a id="tocSsubscriptiondeletesuccess"></a>
<a id="tocssubscriptiondeletesuccess"></a>

```json
{
  "message": "string"
}

```

SubscriptionDeleteSuccess

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h3 id="tocS_SubscriptionSaveSuccess">SubscriptionSaveSuccess</h3>

<a id="schemasubscriptionsavesuccess"></a>
<a id="schema_SubscriptionSaveSuccess"></a>
<a id="tocSsubscriptionsavesuccess"></a>
<a id="tocssubscriptionsavesuccess"></a>

```json
{
  "message": "string"
}

```

SubscriptionSaveSuccess

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h3 id="tocS_TopicApiAdapter">TopicApiAdapter</h3>

<a id="schematopicapiadapter"></a>
<a id="schema_TopicApiAdapter"></a>
<a id="tocStopicapiadapter"></a>
<a id="tocstopicapiadapter"></a>

```json
{
  "name": "string",
  "partitionCount": 0,
  "type": "Public"
}

```

TopicApiAdapter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|name|
|partitionCount|integer(int32)|true|none|partitionCount|
|type|string|true|none|type|

###### Enumerated Values

|Property|Value|
|---|---|
|type|Public|
|type|Internal|

<h3 id="tocS_WebhookConfig">WebhookConfig</h3>

<a id="schemawebhookconfig"></a>
<a id="schema_WebhookConfig"></a>
<a id="tocSwebhookconfig"></a>
<a id="tocswebhookconfig"></a>

```json
{
  "endpoint": "string"
}

```

WebhookConfig

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|true|none|A URL locating the endpoint to which event should be pushed. For example, a Webhook endpoint might use "https://example.com/push"|

