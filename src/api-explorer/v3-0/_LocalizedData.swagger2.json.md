---
title: Localized Data v3.0
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

<h1 id="localized-data">Localized Data v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Invoice includes various status codes, and error messages. This API provides a method to list the localized strings of various codes.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

<h1 id="localized-data-resources">Resources</h1>

## get__invoice_localizeddata

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/invoice/localizeddata \
  -H 'Accept: application/json'

```

```http
GET https://www.concursolutions.com/api/v3.0/invoice/localizeddata HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/localizeddata',
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
  'Accept' => 'application/json'
}

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/invoice/localizeddata',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/invoice/localizeddata', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/invoice/localizeddata', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/localizeddata");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/invoice/localizeddata", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /invoice/localizeddata`

*Get localized string of various codes in Invoice. *

Returns the  localized string of various codes in Invoice. 

<h3 id="get__invoice_localizeddata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Valid types are -    approvalStatus, paymentStatus, expenseType, ledgerCode, dataSourceCode, payMethod, receiptConfirmation, unitOfMeasure.|
|langCode|query|string|false|Optional. The language code requested. lang codes examples - de, en, es, fr, fr_CA, hu, it, ja, pl, pt_BR|

> Example responses

> 200 Response

```json
{
  "LocalizationData": {
    "Code": "string",
    "LangCode": "string",
    "LocalizedValue": "string"
  },
  "TotalCount": 0
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<LocalizationDataCollection>
  <LocalizationData>
    <Code>string</Code>
    <LangCode>string</LangCode>
    <LocalizedValue>string</LocalizedValue>
  </LocalizationData>
  <TotalCount>0</TotalCount>
</LocalizationDataCollection>
```

<h3 id="get__invoice_localizeddata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[LocalizationDataCollection](#schemalocalizationdatacollection)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_LocalizationData">LocalizationData</h2>

<a id="schemalocalizationdata"></a>
<a id="schema_LocalizationData"></a>
<a id="tocSlocalizationdata"></a>
<a id="tocslocalizationdata"></a>

```json
{
  "Code": "string",
  "LangCode": "string",
  "LocalizedValue": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|Internal status code.|
|LangCode|string|false|none|The language code for the results|
|LocalizedValue|string|false|none|The localized value based on langcode and type.|

<h2 id="tocS_LocalizationDataCollection">LocalizationDataCollection</h2>

<a id="schemalocalizationdatacollection"></a>
<a id="schema_LocalizationDataCollection"></a>
<a id="tocSlocalizationdatacollection"></a>
<a id="tocslocalizationdatacollection"></a>

```json
{
  "LocalizationData": {
    "Code": "string",
    "LangCode": "string",
    "LocalizedValue": "string"
  },
  "TotalCount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocalizationData|[LocalizationData](#schemalocalizationdata)|false|none|none|
|TotalCount|integer(int32)|false|none|none|

