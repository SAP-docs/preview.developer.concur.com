---
title: Detokenizer Service v1.0
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

<h1 id="detokenizer-service">Detokenizer Service v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Detokenizer Service allows clients to retrieve the user's credit card number from Concur Expense in a secure way. The Detokenizer service returns the user's credit card number encrypted with a public key that the client provides in the request. The client will be able to decrypt the user's credit card number using their private key.

Base URLs:

* <a href="https://us.api.concursolutions.com/detokenizer/v1">https://us.api.concursolutions.com/detokenizer/v1</a>

<h1 id="detokenizer-service-resources">Resources</h1>

## get__company_{companyUUID}_creditcard_{creditcardGUID}

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/detokenizer/v1/company/{companyUUID}/creditcard/{creditcardGUID}?pubkeyAlgorithm=string&pubkeyFormat=string&pubkey=string \
  -H 'Accept: application/json'

```

```http
GET https://us.api.concursolutions.com/detokenizer/v1/company/{companyUUID}/creditcard/{creditcardGUID}?pubkeyAlgorithm=string&pubkeyFormat=string&pubkey=string HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://us.api.concursolutions.com/detokenizer/v1/company/{companyUUID}/creditcard/{creditcardGUID}?pubkeyAlgorithm=string&pubkeyFormat=string&pubkey=string',
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

result = RestClient.get 'https://us.api.concursolutions.com/detokenizer/v1/company/{companyUUID}/creditcard/{creditcardGUID}',
  params: {
  'pubkeyAlgorithm' => 'string',
'pubkeyFormat' => 'string',
'pubkey' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://us.api.concursolutions.com/detokenizer/v1/company/{companyUUID}/creditcard/{creditcardGUID}', params={
  'pubkeyAlgorithm': 'string',  'pubkeyFormat': 'string',  'pubkey': 'string'
}, headers = headers)

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
    $response = $client->request('GET','https://us.api.concursolutions.com/detokenizer/v1/company/{companyUUID}/creditcard/{creditcardGUID}', array(
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
URL obj = new URL("https://us.api.concursolutions.com/detokenizer/v1/company/{companyUUID}/creditcard/{creditcardGUID}?pubkeyAlgorithm=string&pubkeyFormat=string&pubkey=string");
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
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/detokenizer/v1/company/{companyUUID}/creditcard/{creditcardGUID}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /company/{companyUUID}/creditcard/{creditcardGUID}`

*Get credit card account details*

Returns the credit card number encrypted with the public key provided in the request.

<h3 id="get__company_{companyuuid}_creditcard_{creditcardguid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyUUID|path|string|true|Company UUID|
|creditcardGUID|path|string|true|Credit card GUID|
|pubkeyAlgorithm|query|string|true|The RSA Algorithm used by the PublicKey for credit card number encryption.|
|pubkeyFormat|query|string|true|Public key format|
|pubkey|query|string|true|Public Key|

> Example responses

> 200 Response

```json
{
  "accountNumber ": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<CreditCardAccountDetails>
  <accountNumber >string</accountNumber >
</CreditCardAccountDetails>
```

<h3 id="get__company_{companyuuid}_creditcard_{creditcardguid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreditCardAccountDetails](#schemacreditcardaccountdetails)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CreditCardAccountDetails">CreditCardAccountDetails</h2>

<a id="schemacreditcardaccountdetails"></a>
<a id="schema_CreditCardAccountDetails"></a>
<a id="tocScreditcardaccountdetails"></a>
<a id="tocscreditcardaccountdetails"></a>

```json
{
  "accountNumber ": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|false|none|The encrypted credit card account number|

