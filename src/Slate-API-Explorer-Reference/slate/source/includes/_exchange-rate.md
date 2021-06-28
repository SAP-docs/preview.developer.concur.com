---
title: Exchange Rate API v4
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

<h1 id="exchange-rate-api">Exchange Rate API v4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="//us.api.concursolutions.com/exchangeratebroker">//us.api.concursolutions.com/exchangeratebroker</a>

<a href="http://www.concur.com">Terms of service</a>

License: <a href="http://www.concur.com">Concur</a>

# Authentication

* API Key (CN)
    - Parameter Name: **concur-forwarded-for**, in: header. 

* API Key (JWT)
    - Parameter Name: **Authorization**, in: header. 

<h1 id="exchange-rate-api-exchange-rate-api">Exchange Rate API</h1>

Exchange Rate Endpoints

## uploadExchangeRateUsingPOST

<a id="opIduploadExchangeRateUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /us.api.concursolutions.com/exchangeratebroker/v4/rates \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'company-uid: string' \
  -H 'concur-correlationid: string' \
  -H 'concur-uid: string' \
  -H 'Authorization: API_KEY'

```

```http
POST /us.api.concursolutions.com/exchangeratebroker/v4/rates HTTP/1.1

Content-Type: application/json
Accept: application/json
company-uid: string
concur-correlationid: string
concur-uid: string

```

```javascript
const inputBody = '{
  "currency_sets": [
    {
      "from_crn_code": "string",
      "start_date": "string",
      "rate": 0,
      "to_crn_code": "string"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'company-uid':'string',
  'concur-correlationid':'string',
  'concur-uid':'string',
  'Authorization':'API_KEY'
};

fetch('/us.api.concursolutions.com/exchangeratebroker/v4/rates',
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
  'company-uid' => 'string',
  'concur-correlationid' => 'string',
  'concur-uid' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.post '/us.api.concursolutions.com/exchangeratebroker/v4/rates',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'company-uid': 'string',
  'concur-correlationid': 'string',
  'concur-uid': 'string',
  'Authorization': 'API_KEY'
}

r = requests.post('/us.api.concursolutions.com/exchangeratebroker/v4/rates', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'company-uid' => 'string',
    'concur-correlationid' => 'string',
    'concur-uid' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/us.api.concursolutions.com/exchangeratebroker/v4/rates', array(
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
URL obj = new URL("/us.api.concursolutions.com/exchangeratebroker/v4/rates");
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
        "company-uid": []string{"string"},
        "concur-correlationid": []string{"string"},
        "concur-uid": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/us.api.concursolutions.com/exchangeratebroker/v4/rates", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v4/rates`

*upload custom exchange rates for an entity*

Upload rates

> Body parameter

```json
{
  "currency_sets": [
    {
      "from_crn_code": "string",
      "start_date": "string",
      "rate": 0,
      "to_crn_code": "string"
    }
  ]
}
```

<h3 id="uploadexchangerateusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company-uid|header|string|true|The unique identifier of the company|
|concur-correlationid|header|string|true|concur-correlationid|
|concur-uid|header|string|false|The Concur unique identifier of the caller|
|body|body|[BulkExchangeRateUploadRequest](#schemabulkexchangerateuploadrequest)|true|bulkExchangeRateUploadRequest|

> Example responses

> 200 Response

```json
{
  "currencySets": [
    {
      "from_crn_code": "string",
      "rate": 0,
      "start_date": "string",
      "statusCode": 0,
      "statusMessage": "string",
      "to_crn_code": "string"
    }
  ],
  "message": "string",
  "overallStatus": "string"
}
```

<h3 id="uploadexchangerateusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successfully uploaded exchange rates|[BulkExchangeRateUploadResponse](#schemabulkexchangerateuploadresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request received|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Access Denied|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Unable to find exchange rate|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error, please contact the administrator.|[ErrorMessage](#schemaerrormessage)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is unavailable either due to being offline or refusing the connection|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, CN
</aside>

## getRateUsingGET

<a id="opIdgetRateUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /us.api.concursolutions.com/exchangeratebroker/v4/rates/{baseCurrency}/{date}/{quoteCurrency} \
  -H 'Accept: application/json' \
  -H 'company-uid: string' \
  -H 'concur-correlationid: string' \
  -H 'concur-uid: string' \
  -H 'Authorization: API_KEY'

```

```http
GET /us.api.concursolutions.com/exchangeratebroker/v4/rates/{baseCurrency}/{date}/{quoteCurrency} HTTP/1.1

Accept: application/json
company-uid: string
concur-correlationid: string
concur-uid: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'company-uid':'string',
  'concur-correlationid':'string',
  'concur-uid':'string',
  'Authorization':'API_KEY'
};

fetch('/us.api.concursolutions.com/exchangeratebroker/v4/rates/{baseCurrency}/{date}/{quoteCurrency}',
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
  'company-uid' => 'string',
  'concur-correlationid' => 'string',
  'concur-uid' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.get '/us.api.concursolutions.com/exchangeratebroker/v4/rates/{baseCurrency}/{date}/{quoteCurrency}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'company-uid': 'string',
  'concur-correlationid': 'string',
  'concur-uid': 'string',
  'Authorization': 'API_KEY'
}

r = requests.get('/us.api.concursolutions.com/exchangeratebroker/v4/rates/{baseCurrency}/{date}/{quoteCurrency}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'company-uid' => 'string',
    'concur-correlationid' => 'string',
    'concur-uid' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/us.api.concursolutions.com/exchangeratebroker/v4/rates/{baseCurrency}/{date}/{quoteCurrency}', array(
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
URL obj = new URL("/us.api.concursolutions.com/exchangeratebroker/v4/rates/{baseCurrency}/{date}/{quoteCurrency}");
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
        "company-uid": []string{"string"},
        "concur-correlationid": []string{"string"},
        "concur-uid": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/us.api.concursolutions.com/exchangeratebroker/v4/rates/{baseCurrency}/{date}/{quoteCurrency}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v4/rates/{baseCurrency}/{date}/{quoteCurrency}`

*Retrieve a rate based on base currrency and quote currency for a closed date*

Returns rate

<h3 id="getrateusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseCurrency|path|string|true|Base currency|
|company-uid|header|string|true|The unique identifier of the company|
|concur-correlationid|header|string|true|concur-correlationid|
|concur-uid|header|string|false|The Concur unique identifier of the caller|
|date|path|string|true|Date|
|quoteCurrency|path|string|true|Quote currency|

> Example responses

> 200 Response

```json
{
  "rate": 0
}
```

<h3 id="getrateusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successfully retrieved exchange rate|[ExchangeRateResponse](#schemaexchangerateresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request received|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Access Denied|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Unable to find exchange rate|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error, please contact the administrator.|[ErrorMessage](#schemaerrormessage)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is unavailable either due to being offline or refusing the connection|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, CN
</aside>

# Schemas

<h2 id="tocS_BulkExchangeRateUploadRequest">BulkExchangeRateUploadRequest</h2>

<a id="schemabulkexchangerateuploadrequest"></a>
<a id="schema_BulkExchangeRateUploadRequest"></a>
<a id="tocSbulkexchangerateuploadrequest"></a>
<a id="tocsbulkexchangerateuploadrequest"></a>

```json
{
  "currency_sets": [
    {
      "from_crn_code": "string",
      "start_date": "string",
      "rate": 0,
      "to_crn_code": "string"
    }
  ]
}

```

BulkExchangeRateUploadRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency_sets|[[ExchangeRateUploadRequest](#schemaexchangerateuploadrequest)]|true|none|Currencies, rate and date|

<h2 id="tocS_BulkExchangeRateUploadResponse">BulkExchangeRateUploadResponse</h2>

<a id="schemabulkexchangerateuploadresponse"></a>
<a id="schema_BulkExchangeRateUploadResponse"></a>
<a id="tocSbulkexchangerateuploadresponse"></a>
<a id="tocsbulkexchangerateuploadresponse"></a>

```json
{
  "currencySets": [
    {
      "from_crn_code": "string",
      "rate": 0,
      "start_date": "string",
      "statusCode": 0,
      "statusMessage": "string",
      "to_crn_code": "string"
    }
  ],
  "message": "string",
  "overallStatus": "string"
}

```

BulkExchangeRateUploadResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencySets|[[ExchangeRateUploadResponse](#schemaexchangerateuploadresponse)]|false|none|Currency set response|
|message|string|false|none|Overall message for the response|
|overallStatus|string|false|none|Overall status of the response|

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>

<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
{
  "errorId": "string",
  "errorMessage": "string",
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
|errorId|string|false|none|The unique identifier of the error associated with the response or is it error response itself|
|errorMessage|string|true|none|The detailed error message|
|httpStatus|string|true|none|The http response code and phrase for the response|
|path|string|true|none|The URI of the attempted request|
|timestamp|string(date-time)|true|none|The time when the error was captured|
|validationErrors|[[ValidationError](#schemavalidationerror)]|false|none|The validation error messages|

<h2 id="tocS_ExchangeRateResponse">ExchangeRateResponse</h2>

<a id="schemaexchangerateresponse"></a>
<a id="schema_ExchangeRateResponse"></a>
<a id="tocSexchangerateresponse"></a>
<a id="tocsexchangerateresponse"></a>

```json
{
  "rate": 0
}

```

ExchangeRateResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate|number|false|none|Exchange Rate|

<h2 id="tocS_ExchangeRateUploadRequest">ExchangeRateUploadRequest</h2>

<a id="schemaexchangerateuploadrequest"></a>
<a id="schema_ExchangeRateUploadRequest"></a>
<a id="tocSexchangerateuploadrequest"></a>
<a id="tocsexchangerateuploadrequest"></a>

```json
{
  "from_crn_code": "string",
  "start_date": "string",
  "rate": 0,
  "to_crn_code": "string"
}

```

ExchangeRateUploadRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from_crn_code|string|true|none|From currency code|
|start_date|string|true|none|Start date|
|rate|number|true|none|Rate|
|to_crn_code|string|true|none|To currency code|

<h2 id="tocS_ExchangeRateUploadResponse">ExchangeRateUploadResponse</h2>

<a id="schemaexchangerateuploadresponse"></a>
<a id="schema_ExchangeRateUploadResponse"></a>
<a id="tocSexchangerateuploadresponse"></a>
<a id="tocsexchangerateuploadresponse"></a>

```json
{
  "from_crn_code": "string",
  "rate": 0,
  "start_date": "string",
  "statusCode": 0,
  "statusMessage": "string",
  "to_crn_code": "string"
}

```

ExchangeRateUploadResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from_crn_code|string|false|none|From currency code|
|rate|number|false|none|Rate|
|start_date|string|false|none|Start date|
|statusCode|integer(int32)|false|none|Status Code|
|statusMessage|string|false|none|Status Message|
|to_crn_code|string|false|none|To currency code|

<h2 id="tocS_ValidationError">ValidationError</h2>

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

