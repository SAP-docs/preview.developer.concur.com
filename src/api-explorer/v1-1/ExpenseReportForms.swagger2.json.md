---
title: Expense Report Forms v1.1
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

<h1 id="expense-report-forms">Expense Report Forms v1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Returns the configured Expense form types, or the form IDs for the supplied form type. Clients can have multiple forms configured for each form type.

Base URLs:

* <a href="https://www.concursolutions.com/api/expense/expensereport/v1.1">https://www.concursolutions.com/api/expense/expensereport/v1.1</a>

# Authentication

- oAuth2 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication information</a> for more information.

    - Flow: clientCredentials

    - Token URL = [https://us.api.concursolutions.com/oauth2/v0](https://us.api.concursolutions.com/oauth2/v0)

<h1 id="expense-report-forms-form-types">Form Types</h1>

Returns the active form types for the company specified in the access token. Expense clients always have multiple form types.

## getFormTypesUsingGET

<a id="opIdgetFormTypesUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/ \
  -H 'Accept: application/xml' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/ HTTP/1.1
Host: www.concursolutions.com
Accept: application/xml

```

```javascript

const headers = {
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/',
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
  'Accept' => 'application/xml',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/xml',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/xml',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/', array(
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
URL obj = new URL("https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/");
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
        "Accept": []string{"application/xml"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/expensereport/v1.1/report/Forms/`

*Get all form types*

Retrieves the list of configured form types for the company.

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<FormTypesList>
  <FormType>
    <Name>string</Name>
    <FormCode>string</FormCode>
  </FormType>
</FormTypesList>
```

<h3 id="getformtypesusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[FormTypesList](#schemaformtypeslist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="expense-report-forms-form-data">Form Data</h1>

Retrieves the IDs of configured forms for the specified form type. The FormCode is returned in the FormCode element in the Get Form Types response.

## getFormDataUsingGET

<a id="opIdgetFormDataUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormCode} \
  -H 'Accept: application/xml' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormCode} HTTP/1.1
Host: www.concursolutions.com
Accept: application/xml

```

```javascript

const headers = {
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormCode}',
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
  'Accept' => 'application/xml',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormCode}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/xml',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormCode}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/xml',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormCode}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormCode}");
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
        "Accept": []string{"application/xml"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormCode}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/expensereport/v1.1/report/Forms/{FormCode}`

*Get all forms by form type.*

Retrieves the list of configured forms for the specified form type.

<h3 id="getformdatausingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FormCode|path|string|true|The identifier for the desired form.|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<FormDataList>
  <FormData>
    <Name>string</Name>
    <FormId>string</FormId>
  </FormData>
</FormDataList>
```

<h3 id="getformdatausingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[FormDataList](#schemaformdatalist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_FormTypesList">FormTypesList</h2>

<a id="schemaformtypeslist"></a>
<a id="schema_FormTypesList"></a>
<a id="tocSformtypeslist"></a>
<a id="tocsformtypeslist"></a>

```json
{
  "FormType": [
    {
      "Name": "string",
      "FormCode": "string"
    }
  ]
}

```

List of configured form types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FormType|[[FormType](#schemaformtype)]|false|none|[The form type name.]|

<h2 id="tocS_FormType">FormType</h2>

<a id="schemaformtype"></a>
<a id="schema_FormType"></a>
<a id="tocSformtype"></a>
<a id="tocsformtype"></a>

```json
{
  "Name": "string",
  "FormCode": "string"
}

```

The form type name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|none|
|FormCode|string|false|none|The form type code.|

<h2 id="tocS_FormDataList">FormDataList</h2>

<a id="schemaformdatalist"></a>
<a id="schema_FormDataList"></a>
<a id="tocSformdatalist"></a>
<a id="tocsformdatalist"></a>

```json
{
  "FormData": [
    {
      "Name": "string",
      "FormId": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FormData|[[FormData](#schemaformdata)]|false|none|List of configured forms for the specified form type.|

<h2 id="tocS_FormData">FormData</h2>

<a id="schemaformdata"></a>
<a id="schema_FormData"></a>
<a id="tocSformdata"></a>
<a id="tocsformdata"></a>

```json
{
  "Name": "string",
  "FormId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|The form name.|
|FormId|string|false|none|The form identifier.|

