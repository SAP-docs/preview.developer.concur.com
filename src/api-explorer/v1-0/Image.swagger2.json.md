---
title: Image API Documentation v1.0
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

<h1 id="image-api-documentation">Image API Documentation v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The SAP Concur Image API allows clients to manage the receipt images attached to expense reports and the images attached to invoices. Clients can retrieve existing images by reportID, image ID, or invoiceID, and upload new images to a user, expense entry, report, or invoice.<p>The Image API supports the following image formats:</p><p><li>`application/pdf`<li>`image/jpg`<li>`image/jpeg`<li>`image/png`</p><p>The maximum file size allowed is 10 MB.</p>

Base URLs:

* <a href="https://www.concursolutions.com/api/v1.0">https://www.concursolutions.com/api/v1.0</a>

# Authentication

- oAuth2 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication information</a> for more information.

    - Flow: clientCredentials

    - Token URL = [https://us.api.concursolutions.com/oauth2/v0](https://us.api.concursolutions.com/oauth2/v0)

<h1 id="image-api-documentation-post-an-image">Post an image</h1>

Add an expense report, expense entry, purchase request, or receipt image.

## addReceiptLineItemUsingPOST

<a id="opIdaddReceiptLineItemUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v1.0/image/v1.0/receipt \
  -H 'Content-Type: multipart/form-data' \
  -H 'Accept: application/xml' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://www.concursolutions.com/api/v1.0/image/v1.0/receipt HTTP/1.1
Host: www.concursolutions.com
Content-Type: multipart/form-data
Accept: application/xml

```

```javascript
const inputBody = '{
  "Image File": "string"
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v1.0/image/v1.0/receipt',
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
  'Accept' => 'application/xml',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.concursolutions.com/api/v1.0/image/v1.0/receipt',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'multipart/form-data',
  'Accept': 'application/xml',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.concursolutions.com/api/v1.0/image/v1.0/receipt', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'multipart/form-data',
    'Accept' => 'application/xml',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://www.concursolutions.com/api/v1.0/image/v1.0/receipt', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v1.0/image/v1.0/receipt");
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
        "Accept": []string{"application/xml"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v1.0/image/v1.0/receipt", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /image/v1.0/receipt`

*Post receipt image*

Uploads a receipt image and associates it with the OAuth consumer. The user can view the image in the receipt management section of SAP Concur.

> Body parameter

```yaml
Image File: string

```

<h3 id="addreceiptlineitemusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» Image File|body|string(binary)|true|Receipt image to upload.|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Image>
  <Id>string</Id>
  <Url>string</Url>
</Image>
```

<h3 id="addreceiptlineitemusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Image](#schemaimage)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## addExpenseEntryLineItemUsingPOST

<a id="opIdaddExpenseEntryLineItemUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId} \
  -H 'Content-Type: multipart/form-data' \
  -H 'Accept: application/xml' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId} HTTP/1.1
Host: www.concursolutions.com
Content-Type: multipart/form-data
Accept: application/xml

```

```javascript
const inputBody = '{
  "Image File": "string"
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId}',
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
  'Accept' => 'application/xml',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'multipart/form-data',
  'Accept': 'application/xml',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'multipart/form-data',
    'Accept' => 'application/xml',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId}");
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
        "Accept": []string{"application/xml"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /image/v1.0/expenseentry/{entryId}`

*Post expense entry image*

Uploads a receipt image and associates it with the expense entry that matches the supplied entry ID. Once an image is attached to the entry, you cannot append additional images.

> Body parameter

```yaml
Image File: string

```

<h3 id="addexpenseentrylineitemusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entryId|path|string|true|The unique identifier of the image.|
|body|body|object|true|none|
|» Image File|body|string(binary)|true|Receipt Image to Upload|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Image>
  <Id>string</Id>
  <Url>string</Url>
</Image>
```

<h3 id="addexpenseentrylineitemusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Image](#schemaimage)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## addInvoiceImageUsingPOST

<a id="opIdaddInvoiceImageUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId} \
  -H 'Content-Type: multipart/form-data' \
  -H 'Accept: application/xml' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId} HTTP/1.1
Host: www.concursolutions.com
Content-Type: multipart/form-data
Accept: application/xml

```

```javascript
const inputBody = '{
  "Image File": "string"
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId}',
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
  'Accept' => 'application/xml',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'multipart/form-data',
  'Accept': 'application/xml',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'multipart/form-data',
    'Accept' => 'application/xml',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId}");
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
        "Accept": []string{"application/xml"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /image/v1.0/invoice/{requestId}`

*Post invoice image*

Uploads an invoice image and associates it with the invoice that matches the supplied request ID. Once an image is attached to the invoice, you cannot append additional images.

> Body parameter

```yaml
Image File: string

```

<h3 id="addinvoiceimageusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|path|string|true|The unique identifier of the image.|
|body|body|object|true|none|
|» Image File|body|string(binary)|true|Receipt image to upload|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Image>
  <Id>string</Id>
  <Url>string</Url>
</Image>
```

<h3 id="addinvoiceimageusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Image](#schemaimage)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## addReportImageUsingPOST

<a id="opIdaddReportImageUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId} \
  -H 'Content-Type: multipart/form-data' \
  -H 'Accept: application/xml' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId} HTTP/1.1
Host: www.concursolutions.com
Content-Type: multipart/form-data
Accept: application/xml

```

```javascript
const inputBody = '{
  "Image File": "string"
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId}',
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
  'Accept' => 'application/xml',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'multipart/form-data',
  'Accept': 'application/xml',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'multipart/form-data',
    'Accept' => 'application/xml',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId}");
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
        "Accept": []string{"application/xml"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /image/v1.0/report/{reportId}`

*Post expense report image*

Uploads a receipt image and associates it with the report that matches the supplied report ID. If a report image already exists for the report, the new image will be appended to the existing image.

> Body parameter

```yaml
Image File: string

```

<h3 id="addreportimageusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|string|true|The unique identifier of the image.|
|body|body|object|true|none|
|» Image File|body|string(binary)|true|Receipt image to upload|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Image>
  <Id>string</Id>
  <Url>string</Url>
</Image>
```

<h3 id="addreportimageusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Image](#schemaimage)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="image-api-documentation-get-an-image-url">Get an image URL</h1>

Retrieve image URLs. The URL is valid for 30 minutes after the request.

## getExpenseEntryImageUsingGET

<a id="opIdgetExpenseEntryImageUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId} \
  -H 'Accept: application/xml' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId} HTTP/1.1
Host: www.concursolutions.com
Accept: application/xml

```

```javascript

const headers = {
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId}',
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

r = requests.get('https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v1.0/image/v1.0/expenseentry/{entryId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /image/v1.0/expenseentry/{entryId}`

*Get an expense report entry image URL*

Retrieve an expense report entry image URL.

<h3 id="getexpenseentryimageusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entryId|path|string|true|The unique identifier of the image.|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Image>
  <Id>string</Id>
  <Url>string</Url>
</Image>
```

<h3 id="getexpenseentryimageusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Image](#schemaimage)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## getInvoiceImageUsingGET

<a id="opIdgetInvoiceImageUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId} \
  -H 'Accept: application/xml' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId} HTTP/1.1
Host: www.concursolutions.com
Accept: application/xml

```

```javascript

const headers = {
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId}',
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

r = requests.get('https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v1.0/image/v1.0/invoice/{requestId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /image/v1.0/invoice/{requestId}`

* Get invoice image URL*

Retrieve invoice image URL.

<h3 id="getinvoiceimageusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|path|string|true|The unique identifier of the image.|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Image>
  <Id>string</Id>
  <Url>string</Url>
</Image>
```

<h3 id="getinvoiceimageusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Image](#schemaimage)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## getReportEntryImageUsingGET

<a id="opIdgetReportEntryImageUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId} \
  -H 'Accept: application/xml' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId} HTTP/1.1
Host: www.concursolutions.com
Accept: application/xml

```

```javascript

const headers = {
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId}',
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

r = requests.get('https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v1.0/image/v1.0/report/{reportId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /image/v1.0/report/{reportId}`

*Get report image URL*

Retrieve expense report image URL.

<h3 id="getreportentryimageusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|string|true|The unique identifier of the image.|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Image>
  <Id>string</Id>
  <Url>string</Url>
</Image>
```

<h3 id="getreportentryimageusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Image](#schemaimage)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## getReceiptImageUsingGET

<a id="opIdgetReceiptImageUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v1.0/image/v1.0/receipt/{imageId} \
  -H 'Accept: application/xml' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v1.0/image/v1.0/receipt/{imageId} HTTP/1.1
Host: www.concursolutions.com
Accept: application/xml

```

```javascript

const headers = {
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v1.0/image/v1.0/receipt/{imageId}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v1.0/image/v1.0/receipt/{imageId}',
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

r = requests.get('https://www.concursolutions.com/api/v1.0/image/v1.0/receipt/{imageId}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v1.0/image/v1.0/receipt/{imageId}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v1.0/image/v1.0/receipt/{imageId}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v1.0/image/v1.0/receipt/{imageId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /image/v1.0/receipt/{imageId}`

*Get receipt image URL*

Receive receipt image URL.

<h3 id="getreceiptimageusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageId|path|string|true|The unique identifier of the image.|

> Example responses

> 200 Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Image>
  <Id>string</Id>
  <Url>string</Url>
</Image>
```

<h3 id="getreceiptimageusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Image](#schemaimage)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_Image">Image</h2>

<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "Id": "string",
  "Url": "string"
}

```

Image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|The unique identifier of the image.|
|Url|string|false|none|The URL to the image. Note that special characters will be XML-encoded. You will need to unencode any special characters before using the link. This element is empty when uploading images.|

