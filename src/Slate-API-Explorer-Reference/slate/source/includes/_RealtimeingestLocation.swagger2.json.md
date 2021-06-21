

<h2 id="real-time-location-ingestion-service">Real Time Location Ingestion Service v1.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides an endpoint to ingest real time user location information from Rideshare Services

Base URLs:

* <a href="/realtimeingest">/realtimeingest</a>

Email: <a href="mailto:DL_AE4E8B60807542848C5FE406400E04C2@sap.com">Support</a>



* API Key (Bearer)
    - Parameter Name: **Authorization**, in: header. To access the API a valid JWT token must be passed in the Authorization header

<h2 id="real-time-location-ingestion-service-realtime-location">realtime-location</h2>

#### post__location_:uuid

> Code samples

```shell
# You can also use wget
curl -X POST /realtimeingest/location/:uuid \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /realtimeingest/location/:uuid HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "userID": "string",
  "dropOffDateTime": "2019-08-24T14:15:22Z",
  "dropOffLocation": {
    "name": "string",
    "latitude": 0,
    "longitude": 0,
    "address": {
      "streetAddress": "string",
      "addressLocality": "string",
      "addressRegion": "string",
      "addressCountry": "string",
      "postalCode": "string"
    }
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/realtimeingest/location/:uuid',
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

result = RestClient.post '/realtimeingest/location/:uuid',
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

r = requests.post('/realtimeingest/location/:uuid', headers = headers)

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
    $response = $client->request('POST','/realtimeingest/location/:uuid', array(
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
URL obj = new URL("/realtimeingest/location/:uuid");
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
    req, err := http.NewRequest("POST", "/realtimeingest/location/:uuid", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /location/:uuid`

*Ingest real time location of users *

> Body parameter

```json
{
  "userID": "string",
  "dropOffDateTime": "2019-08-24T14:15:22Z",
  "dropOffLocation": {
    "name": "string",
    "latitude": 0,
    "longitude": 0,
    "address": {
      "streetAddress": "string",
      "addressLocality": "string",
      "addressRegion": "string",
      "addressCountry": "string",
      "postalCode": "string"
    }
  }
}
```

<h3 id="post__location_:uuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PostObject](#schemapostobject)|true|location object|

> Example responses

> 200 Response

```json
{
  "requestId": "d385ab22-0f51-4b97-9ecd-b8ff3fd4fcb6",
  "concur-correlationId": "string",
  "appVersion": "string",
  "message": "string"
}
```

<h3 id="post__location_:uuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|POST successful|[ApiResponse](#schemaapiresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication Error|[ApiErrorResponse](#schemaapierrorresponse)|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Data Validation Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

### Schemas

<h3 id="tocS_ApiResponse">ApiResponse</h3>

<a id="schemaapiresponse"></a>
<a id="schema_ApiResponse"></a>
<a id="tocSapiresponse"></a>
<a id="tocsapiresponse"></a>

```json
{
  "requestId": "d385ab22-0f51-4b97-9ecd-b8ff3fd4fcb6",
  "concur-correlationId": "string",
  "appVersion": "string",
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string(uuid)|false|none|For accessing the API a valid JWT token must be passed|
|concur-correlationId|string|false|none|none|
|appVersion|string|false|none|Application Version|
|message|string|false|none|Suitable success message|

<h3 id="tocS_ApiErrorResponse">ApiErrorResponse</h3>

<a id="schemaapierrorresponse"></a>
<a id="schema_ApiErrorResponse"></a>
<a id="tocSapierrorresponse"></a>
<a id="tocsapierrorresponse"></a>

```json
{
  "requestId": "d385ab22-0f51-4b97-9ecd-b8ff3fd4fcb6",
  "appVersion": "string",
  "message": "string",
  "errorDescription": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string(uuid)|false|none|For accessing the API a valid JWT token must be passed|
|appVersion|string|false|none|Application Version|
|message|string|false|none|Suitable error message|
|errorDescription|string|false|none|Error description|

<h3 id="tocS_PostObject">PostObject</h3>

<a id="schemapostobject"></a>
<a id="schema_PostObject"></a>
<a id="tocSpostobject"></a>
<a id="tocspostobject"></a>

```json
{
  "userID": "string",
  "dropOffDateTime": "2019-08-24T14:15:22Z",
  "dropOffLocation": {
    "name": "string",
    "latitude": 0,
    "longitude": 0,
    "address": {
      "streetAddress": "string",
      "addressLocality": "string",
      "addressRegion": "string",
      "addressCountry": "string",
      "postalCode": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userID|string|false|none|unique identifier for the user|
|dropOffDateTime|string(date-time)|true|none|Date Time in RFC3339 format|
|dropOffLocation|[LocationObject](#schemalocationobject)|true|none|Schema representing a location|

<h3 id="tocS_LocationObject">LocationObject</h3>

<a id="schemalocationobject"></a>
<a id="schema_LocationObject"></a>
<a id="tocSlocationobject"></a>
<a id="tocslocationobject"></a>

```json
{
  "name": "string",
  "latitude": 0,
  "longitude": 0,
  "address": {
    "streetAddress": "string",
    "addressLocality": "string",
    "addressRegion": "string",
    "addressCountry": "string",
    "postalCode": "string"
  }
}

```

Schema representing a location

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name for the location|
|latitude|number(float)|true|none|Numeric latitude value between -90.00 and 90.00|
|longitude|number(float)|true|none|Numeric longitude value between -180.00 and 180.00|
|address|[AddressObject](#schemaaddressobject)|true|none|Common address object|

<h3 id="tocS_AddressObject">AddressObject</h3>

<a id="schemaaddressobject"></a>
<a id="schema_AddressObject"></a>
<a id="tocSaddressobject"></a>
<a id="tocsaddressobject"></a>

```json
{
  "streetAddress": "string",
  "addressLocality": "string",
  "addressRegion": "string",
  "addressCountry": "string",
  "postalCode": "string"
}

```

Common address object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streetAddress|string|true|none|Street address of the location|
|addressLocality|string|true|none|City component of the address|
|addressRegion|string|true|none|1 to 3 character country subdivision code as defined in ISO 3166-2:2013|
|addressCountry|string|true|none|2 or 3 character country code as defined in ISO 3166-1:2013|
|postalCode|string|true|none|none|

