---
title: Expense Report Form Fields v1.1
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

<h1 id="expense-report-form-fields">Expense Report Form Fields v1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Returns the configured fields for the specified expense form.

Base URLs:

* <a href="https://www.concursolutions.com/api/expense/expensereport/v1.1">https://www.concursolutions.com/api/expense/expensereport/v1.1</a>

# Authentication

- oAuth2 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication information</a> for more information.

    - Flow: clientCredentials

    - Token URL = [https://us.api.concursolutions.com/oauth2/v0](https://us.api.concursolutions.com/oauth2/v0)

<h1 id="expense-report-form-fields-form-field-data">Form Field Data</h1>

## getFormFieldsUsingGET

<a id="opIdgetFormFieldsUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormId}/Fields \
  -H 'Accept: application/xml' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormId}/Fields HTTP/1.1
Host: www.concursolutions.com
Accept: application/xml

```

```javascript

const headers = {
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormId}/Fields',
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

result = RestClient.get 'https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormId}/Fields',
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

r = requests.get('https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormId}/Fields', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormId}/Fields', array(
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
URL obj = new URL("https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormId}/Fields");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/expense/expensereport/v1.1/expense/expensereport/v1.1/report/Forms/{FormId}/Fields", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/expensereport/v1.1/report/Forms/{FormId}/Fields`

*Get form fields*

Retrieves the list of configured form fields for the specified form.

<h3 id="getformfieldsusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FormId|path|string|true|The identifier for the desired form.|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<FormFieldsList>
  <FormField>
    <Id>string</Id>
    <Label>string</Label>
    <ControlType>string</ControlType>
    <DataType>VARCHAR</DataType>
    <MaxLength>0</MaxLength>
    <Required>N</Required>
    <Cols>0</Cols>
    <Access>RW</Access>
    <Width>0</Width>
    <Custom>N</Custom>
    <Sequence>0</Sequence>
  </FormField>
</FormFieldsList>
```

<h3 id="getformfieldsusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[FormFieldsList](#schemaformfieldslist)|
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

<h2 id="tocS_FormFieldsList">FormFieldsList</h2>

<a id="schemaformfieldslist"></a>
<a id="schema_FormFieldsList"></a>
<a id="tocSformfieldslist"></a>
<a id="tocsformfieldslist"></a>

```json
{
  "FormField": [
    {
      "Id": "string",
      "Label": "string",
      "ControlType": "string",
      "DataType": "VARCHAR",
      "MaxLength": 0,
      "Required": "N",
      "Cols": 0,
      "Access": "RW",
      "Width": 0,
      "Custom": "N",
      "Sequence": 0
    }
  ]
}

```

FormFieldsList

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FormField|[[FormField](#schemaformfield)]|false|none|List of configured form fields for the specified form.|

<h2 id="tocS_FormField">FormField</h2>

<a id="schemaformfield"></a>
<a id="schema_FormField"></a>
<a id="tocSformfield"></a>
<a id="tocsformfield"></a>

```json
{
  "Id": "string",
  "Label": "string",
  "ControlType": "string",
  "DataType": "VARCHAR",
  "MaxLength": 0,
  "Required": "N",
  "Cols": 0,
  "Access": "RW",
  "Width": 0,
  "Custom": "N",
  "Sequence": 0
}

```

FormField

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|The form field ID.|
|Label|string|false|none|The field label that appears in the user interface for the specified form.|
|ControlType|string|false|none|The type of field.|
|DataType|string|false|none|The type of data accepted by the field.|
|MaxLength|integer|false|none|The maximum length of data in the field.|
|Required|string|false|none|Whether the field is required.|
|Cols|integer|false|none|The number of columns the field contains.|
|Access|string|false|none|The access level the specified user has to the field. RW is read/write, RO is read only, and HD is hidden.|
|Width|integer|false|none|The width of the field.|
|Custom|string|false|none|Whether the field is custom.|
|Sequence|integer|false|none|The field order on the specified form.|

#### Enumerated Values

|Property|Value|
|---|---|
|DataType|VARCHAR|
|DataType|INTEGER|
|DataType|CHAR|
|DataType|TIMESTAMP|
|DataType|NUMERIC|
|DataType|MONEY|
|DataType|SMALLINT|
|DataType|BINARY|
|DataType|LIST|
|DataType|MLIST|
|DataType|BOOLEANCHAR|
|Required|N|
|Required|Y|
|Access|RW|
|Access|RO|
|Access|HD|
|Custom|N|
|Custom|Y|

