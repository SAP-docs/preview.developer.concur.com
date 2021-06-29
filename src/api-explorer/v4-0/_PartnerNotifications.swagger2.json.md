---
title: Notifications v4.0.0
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

<h1 id="notifications">Notifications v4.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The purpose of this API is to provide SAP Concur's partners the ability to message users, through the web and mobile product.

Base URLs:

* <a href="https://us.api.concursolutions.com/notifications/v4">https://us.api.concursolutions.com/notifications/v4</a>

<h1 id="notifications-resources">Resources</h1>

## post__messages_{userId}_session

> Code samples

```shell
# You can also use wget
curl -X POST https://us.api.concursolutions.com/notifications/v4/messages/{userId}/session \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

```http
POST https://us.api.concursolutions.com/notifications/v4/messages/{userId}/session HTTP/1.1
Host: us.api.concursolutions.com
Content-Type: application/json
Accept: application/json
Authorization: string

```

```javascript
const inputBody = '{
  "sessionId": "string",
  "templateId": "string",
  "context": {
    "url": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'string'
};

fetch('https://us.api.concursolutions.com/notifications/v4/messages/{userId}/session',
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
  'Authorization' => 'string'
}

result = RestClient.post 'https://us.api.concursolutions.com/notifications/v4/messages/{userId}/session',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'string'
}

r = requests.post('https://us.api.concursolutions.com/notifications/v4/messages/{userId}/session', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://us.api.concursolutions.com/notifications/v4/messages/{userId}/session', array(
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
URL obj = new URL("https://us.api.concursolutions.com/notifications/v4/messages/{userId}/session");
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
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://us.api.concursolutions.com/notifications/v4/messages/{userId}/session", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /messages/{userId}/session`

This endpoint provides a way for SAP Concur partners to message users and notify them. Partners will provide details about the message they want to send, along with data to apply to the message.

> Body parameter

```json
{
  "sessionId": "string",
  "templateId": "string",
  "context": {
    "url": "string"
  }
}
```

<h3 id="post__messages_{userid}_session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Bearer Token that identifies the caller. This is the Company or User access token.|
|userId|path|string|true|The unique identifier of the SAP Concur user.|
|body|body|[NotificationsPartnerRequestBody](#schemanotificationspartnerrequestbody)|true|The payload request body.|

> Example responses

> 400 Response

```json
{
  "errors": [
    {
      "errorId": "string",
      "errorCode": "string",
      "errorMessage": "string"
    }
  ]
}
```

<h3 id="post__messages_{userid}_session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ErrorMessage](#schemaerrormessage)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Unavailable|[ErrorMessage](#schemaerrormessage)|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|Gateway Timeout|[ErrorMessage](#schemaerrormessage)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_NotificationsPartnerRequestBody">NotificationsPartnerRequestBody</h2>

<a id="schemanotificationspartnerrequestbody"></a>
<a id="schema_NotificationsPartnerRequestBody"></a>
<a id="tocSnotificationspartnerrequestbody"></a>
<a id="tocsnotificationspartnerrequestbody"></a>

```json
{
  "sessionId": "string",
  "templateId": "string",
  "context": {
    "url": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionId|string|true|none|The unique ID of the session.|
|templateId|string|true|none|The template identifier of the message.|
|context|object|true|none|none|
|» url|string|false|none|The context URL to apply to the template. Please contact SAP Concur to add domains to the approved list.|

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>

<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
{
  "errors": [
    {
      "errorId": "string",
      "errorCode": "string",
      "errorMessage": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|none|
|» errorId|string|false|none|none|
|» errorCode|string|false|none|none|
|» errorMessage|string|false|none|none|

