---
title: Quick Expenses v4.0.3
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

<h1 id="quick-expenses">Quick Expenses v4.0.3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://us.api.concursolutions.com/">https://us.api.concursolutions.com/</a>

<h1 id="quick-expenses-resources">Resources</h1>

## createQuickExpenseUsingPOST_1

<a id="opIdcreateQuickExpenseUsingPOST_1"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'concur-correlationid: string' \
  -H 'accept-language: string'

```

```http
POST https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses HTTP/1.1
Host: us.api.concursolutions.com
Content-Type: application/json
Accept: application/json
concur-correlationid: string
accept-language: string

```

```javascript
const inputBody = '{
  "comment": "string",
  "entryDetails": "string",
  "expenseTypeId": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "id": "string",
    "name": "string"
  },
  "paymentTypeId": "CASHX",
  "transactionAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "transactionDate": "2019-08-24",
  "vendor": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'concur-correlationid':'string',
  'accept-language':'string'
};

fetch('https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses',
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
  'concur-correlationid' => 'string',
  'accept-language' => 'string'
}

result = RestClient.post 'https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'concur-correlationid': 'string',
  'accept-language': 'string'
}

r = requests.post('https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'concur-correlationid' => 'string',
    'accept-language' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses', array(
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
URL obj = new URL("https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses");
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
        "concur-correlationid": []string{"string"},
        "accept-language": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses`

*This API is used to create a quick expense. This API does not support image creation.*

This API creates a basic expense with minimal fields. Can be added to expense reports from within SAP Concur.

> Body parameter

```json
{
  "comment": "string",
  "entryDetails": "string",
  "expenseTypeId": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "id": "string",
    "name": "string"
  },
  "paymentTypeId": "CASHX",
  "transactionAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "transactionDate": "2019-08-24",
  "vendor": "string"
}
```

<h3 id="createquickexpenseusingpost_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|concur-correlationid|header|string|false|A SAP Concur specific custom header used for technical support.|
|accept-language|header|string|false|The unique identifier of the user's locale that indicates the language in which the API response should be formulated.|
|userId|path|string|true|The unique identifier of the SAP Concur user.|
|contextType|path|string|true|The access level of the SAP Concur user, which determines the form fields they can view/modify. Supported value: TRAVELER.|
|body|body|[QuickExpenseRequest](#schemaquickexpenserequest)|false|quickExpenseRequest|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contextType|TRAVELER|

> Example responses

> 200 Response

```json
{
  "quickExpenseIdUri": "string"
}
```

<h3 id="createquickexpenseusingpost_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[NewQuickExpenseResponse](#schemanewquickexpenseresponse)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Sucessfully created new quick expense|[NewQuickExpenseResponse](#schemanewquickexpenseresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|User doesn't have appropriate roles to create quick expense|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ErrorMessage](#schemaerrormessage)|

<aside class="success">
This operation does not require authentication
</aside>

## createQuickExpenseUsingPOST

<a id="opIdcreateQuickExpenseUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses/image \
  -H 'Content-Type: multipart/form-data' \
  -H 'Accept: application/json' \
  -H 'concur-correlationid: string' \
  -H 'accept-language: string'

```

```http
POST https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses/image HTTP/1.1
Host: us.api.concursolutions.com
Content-Type: multipart/form-data
Accept: application/json
concur-correlationid: string
accept-language: string

```

```javascript
const inputBody = '{
  "quickExpenseRequest": "string",
  "fileContent": "string"
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'application/json',
  'concur-correlationid':'string',
  'accept-language':'string'
};

fetch('https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses/image',
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
  'Content-Type' => 'multipart/form-data',
  'Accept' => 'application/json',
  'concur-correlationid' => 'string',
  'accept-language' => 'string'
}

result = RestClient.post 'https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses/image',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'multipart/form-data',
  'Accept': 'application/json',
  'concur-correlationid': 'string',
  'accept-language': 'string'
}

r = requests.post('https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses/image', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'multipart/form-data',
    'Accept' => 'application/json',
    'concur-correlationid' => 'string',
    'accept-language' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses/image', array(
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
URL obj = new URL("https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses/image");
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
        "Content-Type": []string{"multipart/form-data"},
        "Accept": []string{"application/json"},
        "concur-correlationid": []string{"string"},
        "accept-language": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://us.api.concursolutions.com/quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses/image", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /quickexpense/v4/users/{userID}/context/{contextType}/quickexpenses/image`

*This API is used to create a quick expense with image. An image is required. This API accepts multipart/form-data request.*

This API creates a new quick expense and attaches an image to it, which is provided with multipart/form-data request.

> Body parameter

```yaml
quickExpenseRequest: string
fileContent: string

```

<h3 id="createquickexpenseusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|concur-correlationid|header|string|false|A SAP Concur specific custom header used for technical support.|
|accept-language|header|string|false|The unique identifier of the user's locale that indicates the language in which the API response should be formulated.|
|userId|path|string|true|The unique identifier of the SAP Concur user.|
|contextType|path|string|true|The access level of the SAP Concur user, which determines the form fields they can view/modify. Supported value: TRAVELER.|
|body|body|object|false|none|
|» quickExpenseRequest|body|string|false|<b>QuickExpenseRequest</b> {<br><b>comment</b> (string, optional): This is a comment attached to the quick expense. ,<br><b>entryDetails</b> (string, optional): The quick expense entry details. ,<br><b>expenseTypeId</b> (string, optional): This is the expense type id of the quick expense. ,<br><b>location</b> (Location): The location where the quick expense occurred. ,<br><b>paymentTypeId</b> (string, optional): This is the payment type id of the quick expense. , <br><b>transactionAmount</b> (Amount): The amount of the quick expense. ,<br><b>transactionDate</b> (string): This is the transaction date of the quick expense. Format: YYYY-MM-DD ,<br><b>vendor</b> (string, optional): The name of the vendor. ,<br><b>Location</b> {<br><b>city</b> (string, optional): The location city. ,<br><b>countryCode</b> (string, optional): The location country ISO 3166-1 code. ,<br><b>countrySubDivisionCode</b> (string, optional): The location country sub division ISO 3166-2 code. ,<br><b>id</b> (string, optional): The unique identifier of the location. ,<br><b>name</b> (string, optional): The location name.<br>}<br><b>Amount</b> {<br><b>currencyCode</b> (string): The 3-letter ISO 4217 currency code for the amount. ,<br><b>value</b> (number): The amount value.<br>}|
|» fileContent|body|string(binary)|true|Image file. <br>Supported image file type ['PNG','GIF','PDF','TIFF','JPEG']. Max image size supported - 5MB|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contextType|TRAVELER|

> Example responses

> 200 Response

```json
{
  "quickExpenseIdUri": "string"
}
```

<h3 id="createquickexpenseusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[NewQuickExpenseResponse](#schemanewquickexpenseresponse)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Sucessfully created new quick expense|[NewQuickExpenseResponse](#schemanewquickexpenseresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|User doesn't have appropriate roles to create quick expense|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ErrorMessage](#schemaerrormessage)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_URI">URI</h2>

<a id="schemauri"></a>
<a id="schema_URI"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
{
  "absolute": true,
  "authority": "string",
  "fragment": "string",
  "host": "string",
  "opaque": true,
  "path": "string",
  "port": 0,
  "query": "string",
  "rawAuthority": "string",
  "rawFragment": "string",
  "rawPath": "string",
  "rawQuery": "string",
  "rawSchemeSpecificPart": "string",
  "rawUserInfo": "string",
  "scheme": "string",
  "schemeSpecificPart": "string",
  "userInfo": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absolute|boolean|false|none|none|
|authority|string|false|none|none|
|fragment|string|false|none|none|
|host|string|false|none|none|
|opaque|boolean|false|none|none|
|path|string|false|none|none|
|port|integer(int32)|false|none|none|
|query|string|false|none|none|
|rawAuthority|string|false|none|none|
|rawFragment|string|false|none|none|
|rawPath|string|false|none|none|
|rawQuery|string|false|none|none|
|rawSchemeSpecificPart|string|false|none|none|
|rawUserInfo|string|false|none|none|
|scheme|string|false|none|none|
|schemeSpecificPart|string|false|none|none|
|userInfo|string|false|none|none|

<h2 id="tocS_NewQuickExpenseResponse">NewQuickExpenseResponse</h2>

<a id="schemanewquickexpenseresponse"></a>
<a id="schema_NewQuickExpenseResponse"></a>
<a id="tocSnewquickexpenseresponse"></a>
<a id="tocsnewquickexpenseresponse"></a>

```json
{
  "quickExpenseIdUri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quickExpenseIdUri|string|false|none|The quick expense created resource url.|

<h2 id="tocS_URL">URL</h2>

<a id="schemaurl"></a>
<a id="schema_URL"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
{
  "authority": "string",
  "content": {},
  "defaultPort": 0,
  "deserializedFields": {},
  "file": "string",
  "host": "string",
  "path": "string",
  "port": 0,
  "protocol": "string",
  "query": "string",
  "ref": "string",
  "serializedHashCode": 0,
  "userInfo": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authority|string|false|none|none|
|content|object|false|none|none|
|defaultPort|integer(int32)|false|none|none|
|deserializedFields|[URLStreamHandler](#schemaurlstreamhandler)|false|none|none|
|file|string|false|none|none|
|host|string|false|none|none|
|path|string|false|none|none|
|port|integer(int32)|false|none|none|
|protocol|string|false|none|none|
|query|string|false|none|none|
|ref|string|false|none|none|
|serializedHashCode|integer(int32)|false|none|none|
|userInfo|string|false|none|none|

<h2 id="tocS_MultipartFile">MultipartFile</h2>

<a id="schemamultipartfile"></a>
<a id="schema_MultipartFile"></a>
<a id="tocSmultipartfile"></a>
<a id="tocsmultipartfile"></a>

```json
{
  "bytes": [
    "string"
  ],
  "contentType": "string",
  "empty": true,
  "inputStream": {},
  "name": "string",
  "originalFilename": "string",
  "resource": {
    "description": "string",
    "file": null,
    "filename": "string",
    "inputStream": {},
    "open": true,
    "readable": true,
    "uri": {
      "absolute": true,
      "authority": "string",
      "fragment": "string",
      "host": "string",
      "opaque": true,
      "path": "string",
      "port": 0,
      "query": "string",
      "rawAuthority": "string",
      "rawFragment": "string",
      "rawPath": "string",
      "rawQuery": "string",
      "rawSchemeSpecificPart": "string",
      "rawUserInfo": "string",
      "scheme": "string",
      "schemeSpecificPart": "string",
      "userInfo": "string"
    },
    "url": {
      "authority": "string",
      "content": {},
      "defaultPort": 0,
      "deserializedFields": {},
      "file": "string",
      "host": "string",
      "path": "string",
      "port": 0,
      "protocol": "string",
      "query": "string",
      "ref": "string",
      "serializedHashCode": 0,
      "userInfo": "string"
    }
  },
  "size": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytes|[string]|false|none|none|
|contentType|string|false|none|none|
|empty|boolean|false|none|none|
|inputStream|[InputStream](#schemainputstream)|false|none|none|
|name|string|false|none|none|
|originalFilename|string|false|none|none|
|resource|[Resource](#schemaresource)|false|none|none|
|size|integer(int64)|false|none|none|

<h2 id="tocS_PaymentType">PaymentType</h2>

<a id="schemapaymenttype"></a>
<a id="schema_PaymentType"></a>
<a id="tocSpaymenttype"></a>
<a id="tocspaymenttype"></a>

```json
{
  "code": "string",
  "id": "string",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The payment type code.|
|id|string|true|none|The unique identifier of the payment type.|
|name|string|true|none|The name of the payment type, localized to the user's language.|

<h2 id="tocS_InputStream">InputStream</h2>

<a id="schemainputstream"></a>
<a id="schema_InputStream"></a>
<a id="tocSinputstream"></a>
<a id="tocsinputstream"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_Amount">Amount</h2>

<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "currencyCode": "string",
  "value": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|The 3-letter ISO 4217 currency code for the amount.|
|value|number(double)|true|none|The amount value.|

<h2 id="tocS_Resource">Resource</h2>

<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "description": "string",
  "file": null,
  "filename": "string",
  "inputStream": {},
  "open": true,
  "readable": true,
  "uri": {
    "absolute": true,
    "authority": "string",
    "fragment": "string",
    "host": "string",
    "opaque": true,
    "path": "string",
    "port": 0,
    "query": "string",
    "rawAuthority": "string",
    "rawFragment": "string",
    "rawPath": "string",
    "rawQuery": "string",
    "rawSchemeSpecificPart": "string",
    "rawUserInfo": "string",
    "scheme": "string",
    "schemeSpecificPart": "string",
    "userInfo": "string"
  },
  "url": {
    "authority": "string",
    "content": {},
    "defaultPort": 0,
    "deserializedFields": {},
    "file": "string",
    "host": "string",
    "path": "string",
    "port": 0,
    "protocol": "string",
    "query": "string",
    "ref": "string",
    "serializedHashCode": 0,
    "userInfo": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|file|file|false|none|none|
|filename|string|false|none|none|
|inputStream|[InputStream](#schemainputstream)|false|none|none|
|open|boolean|false|none|none|
|readable|boolean|false|none|none|
|uri|[URI](#schemauri)|false|none|none|
|url|[URL](#schemaurl)|false|none|none|

<h2 id="tocS_ExpenseType">ExpenseType</h2>

<a id="schemaexpensetype"></a>
<a id="schema_ExpenseType"></a>
<a id="tocSexpensetype"></a>
<a id="tocsexpensetype"></a>

```json
{
  "code": "string",
  "id": "string",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The expense type code.|
|id|string|true|none|The unique identifier of the expense type.|
|name|string|true|none|The name of the expense type, localized to the user's language.|

<h2 id="tocS_QuickExpenseRequest">QuickExpenseRequest</h2>

<a id="schemaquickexpenserequest"></a>
<a id="schema_QuickExpenseRequest"></a>
<a id="tocSquickexpenserequest"></a>
<a id="tocsquickexpenserequest"></a>

```json
{
  "comment": "string",
  "entryDetails": "string",
  "expenseTypeId": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "id": "string",
    "name": "string"
  },
  "paymentTypeId": "CASHX",
  "transactionAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "transactionDate": "2019-08-24",
  "vendor": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|This is a comment attached to the quick expense.|
|entryDetails|string|false|none|The quick expense entry details.|
|expenseTypeId|string|false|none|This is the expense type id of the quick expense.|
|location|[Location](#schemalocation)|true|none|The location where the quick expense occurred.|
|paymentTypeId|string|false|none|This is the payment type id of the quick expense.|
|transactionAmount|[Amount](#schemaamount)|true|none|The amount of the quick expense.|
|transactionDate|string(date)|true|none|This is the transaction date of the quick expense. Format: YYYY-MM-DD|
|vendor|string|false|none|The name of the vendor.|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentTypeId|CASHX|
|paymentTypeId|CPAID|
|paymentTypeId|PENDC|

<h2 id="tocS_UriResponse">UriResponse</h2>

<a id="schemauriresponse"></a>
<a id="schema_UriResponse"></a>
<a id="tocSuriresponse"></a>
<a id="tocsuriresponse"></a>

```json
{
  "uri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|true|none|URI of the created resource.|

<h2 id="tocS_Date">Date</h2>

<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "date": 0,
  "day": 0,
  "hours": 0,
  "minutes": 0,
  "month": 0,
  "seconds": 0,
  "time": 0,
  "timezoneOffset": 0,
  "year": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|integer(int32)|false|none|none|
|day|integer(int32)|false|none|none|
|hours|integer(int32)|false|none|none|
|minutes|integer(int32)|false|none|none|
|month|integer(int32)|false|none|none|
|seconds|integer(int32)|false|none|none|
|time|integer(int64)|false|none|none|
|timezoneOffset|integer(int32)|false|none|none|
|year|integer(int32)|false|none|none|

<h2 id="tocS_URLStreamHandler">URLStreamHandler</h2>

<a id="schemaurlstreamhandler"></a>
<a id="schema_URLStreamHandler"></a>
<a id="tocSurlstreamhandler"></a>
<a id="tocsurlstreamhandler"></a>

```json
{}

```

### Properties

*None*

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
  "validationErrors": []
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorId|string|false|none|The unique identifier of the error.|
|errorMessage|string|true|none|Message associated with the error.|
|httpStatus|string|true|none|The HTTP status associated with the error.|
|path|string|true|none|The path to the resource.|
|timestamp|string(date-time)|true|none|The timestamp for the error.|
|validationErrors|[[ValidationError](#schemavalidationerror)]|false|none|An array of validation errors.|

<h2 id="tocS_File">File</h2>

<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "absolute": true,
  "absolutePath": "string",
  "canonicalPath": "string",
  "directory": true,
  "executable": true,
  "file": true,
  "freeSpace": 0,
  "hidden": true,
  "lastModified": 0,
  "name": "string",
  "parent": "string",
  "path": "string",
  "readable": true,
  "totalSpace": 0,
  "usableSpace": 0,
  "writable": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absolute|boolean|false|none|none|
|absolutePath|string|false|none|none|
|canonicalPath|string|false|none|none|
|directory|boolean|false|none|none|
|executable|boolean|false|none|none|
|file|boolean|false|none|none|
|freeSpace|integer(int64)|false|none|none|
|hidden|boolean|false|none|none|
|lastModified|integer(int64)|false|none|none|
|name|string|false|none|none|
|parent|string|false|none|none|
|path|string|false|none|none|
|readable|boolean|false|none|none|
|totalSpace|integer(int64)|false|none|none|
|usableSpace|integer(int64)|false|none|none|
|writable|boolean|false|none|none|

<h2 id="tocS_Link">Link</h2>

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

<h2 id="tocS_Location">Location</h2>

<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "city": "string",
  "countryCode": "string",
  "countrySubDivisionCode": "string",
  "id": "string",
  "name": "string"
}

```

This represents the location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The location city.|
|countryCode|string|false|none|The location country ISO 3166-1 code.|
|countrySubDivisionCode|string|false|none|The location country sub division ISO 3166-2 code.|
|id|string|false|none|The unique identifier of the location.|
|name|string|false|none|The location name.|

<h2 id="tocS_Collection_object_">Collection_object_</h2>

<a id="schemacollection_object_"></a>
<a id="schema_Collection_object_"></a>
<a id="tocScollection_object_"></a>
<a id="tocscollection_object_"></a>

```json
{}

```

### Properties

*None*

