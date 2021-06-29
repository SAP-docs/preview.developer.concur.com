

<h2 id="financial-integration-api">Financial Integration API v4</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Financial Integration APIs help SAP Concur clients move extract data from SAP Concur into their systems of record.

Base URLs:

* <a href="//us.api.concursolutions.com/">//us.api.concursolutions.com/</a>





    

    

<h2 id="financial-integration-api-financial-transactions">Financial Transactions</h2>

Interacting with financial documents generated from SAP Concur.

#### getTransactionDocsUsingGET

<a id="opIdgetTransactionDocsUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions \
  -H 'Accept: application/json' \
  -H 'documentFormatAs: text' \
  -H 'Authorization: string'

```

```http
GET /us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions HTTP/1.1

Accept: application/json
documentFormatAs: text
Authorization: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'documentFormatAs':'text',
  'Authorization':'string'
};

fetch('/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions',
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
  'documentFormatAs' => 'text',
  'Authorization' => 'string'
}

result = RestClient.get '/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'documentFormatAs': 'text',
  'Authorization': 'string'
}

r = requests.get('/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'documentFormatAs' => 'text',
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions', array(
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
URL obj = new URL("/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions");
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
        "documentFormatAs": []string{"text"},
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions`

*Retrieves a list of financial transactions.*

If docId is not present, the results are paged, page size is 25 by default if limit is not specified. Only one type of transactions can be retrieved at a time - specified by the docType. <br>If paging is occurring, each response contains a URI to retrieve the next page of transactions (if more exist). <br>If systemId is specified, the returned list of queued documents is filtered by systemId, paging applies. <br>If docId is specified, a single document which matches docId is returned. Paging doesn't apply. <br>If docId and systemId are specified, a single document whose docId AND systemId match the values is returned. Paging doesn't apply. <br>If docId is specified and ignoreDocumentStatus is no, a document which has not been retrieved by an ERP system is returned only, i.e document status is READY. If ignoreDocumentStatus is yes, a document is returned regardless of status.<br><br><a href="https://developer.concur.com/api-reference/financial-integration/v4.financial-documents-schema.html">Financial Documents Schema Documentation</a>

<h3 id="gettransactiondocsusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|docType|path|string|true|docType|
|documentFormatAs|header|string|false|documentFormatAs|
|page|query|integer(int32)|false|page|
|limit|query|integer(int32)|false|limit|
|docId|query|string|false|expense report id/payroll report id/invoice report id|
|ignoreDocumentStatus|query|string|false|ignoreDocumentStatus|
|systemId|query|string|false|systemId|
|Authorization|header|string|true|For details on how to get an authorization token, please refer <a href="https://developer.concur.com/api-reference/authentication/getting-started.html"> here </a>|

###### Enumerated Values

|Parameter|Value|
|---|---|
|docType|expense|
|docType|invoice|
|docType|cashadvance|
|docType|payroll|
|docType|obligation|
|documentFormatAs|text|
|documentFormatAs|json|
|ignoreDocumentStatus|yes|
|ignoreDocumentStatus|no|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "companyId": "string",
      "companyUuid": "string",
      "docStatus": "ACKNOWLEDGED",
      "docType": "expense",
      "document": {},
      "entityId": "string",
      "erpSystemId": "string",
      "id": "string",
      "links": [
        null
      ]
    }
  ],
  "links": [
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
  ],
  "page": {
    "number": 0,
    "size": 0,
    "totalElements": 0,
    "totalPages": 0
  }
}
```

<h3 id="gettransactiondocsusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PagedResources.Resource.FIDocument](#schemapagedresources.resource.fidocument)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|Inline|

<h3 id="gettransactiondocsusingget-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### acknowledgeUsingPOST

<a id="opIdacknowledgeUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/acknowledgements \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

```http
POST /us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/acknowledgements HTTP/1.1

Content-Type: application/json
Accept: application/json
Authorization: string

```

```javascript
const inputBody = '{
  "ids": [
    "string"
  ],
  "systemId": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'string'
};

fetch('/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/acknowledgements',
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

result = RestClient.post '/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/acknowledgements',
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

r = requests.post('/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/acknowledgements', headers = headers)

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
    $response = $client->request('POST','/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/acknowledgements', array(
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
URL obj = new URL("/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/acknowledgements");
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
    req, err := http.NewRequest("POST", "/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/acknowledgements", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/acknowledgements`

*Acknowledges successful retrieval of financial transaction(s).*

This API allows a financial system to acknowledge/confirm that it has successfully retrieved one or more financial transactions and will begin to process those transactions. These transactions are then taken out of the ready queue.

> Body parameter

```json
{
  "ids": [
    "string"
  ],
  "systemId": "string"
}
```

<h3 id="acknowledgeusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|docType|path|string|true|Document type|
|Authorization|header|string|true|Bearer JWTFromOAuthServiceHere|
|body|body|[AcknowledgeRequest](#schemaacknowledgerequest)|true|Acknowledge Request|

###### Enumerated Values

|Parameter|Value|
|---|---|
|docType|expense|
|docType|invoice|
|docType|cashadvance|
|docType|payroll|
|docType|obligation|

> Example responses

> 200 Response

```json
[
  {
    "acknowledgeResult": "SUCCESS",
    "code": 0,
    "docId": "string",
    "errorMessage": "string",
    "systemId": "string"
  }
]
```

<h3 id="acknowledgeusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[AcknowledgeResponse](#schemaacknowledgeresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### postErpPaymentConfirmationsUsingPOST

<a id="opIdpostErpPaymentConfirmationsUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/paymentconfirmations \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

```http
POST /us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/paymentconfirmations HTTP/1.1

Content-Type: application/json
Accept: application/json
Authorization: string

```

```javascript
const inputBody = '{
  "systemId": "string",
  "processingConfirmation": [
    {
      "docId": "string",
      "clearingDetails": [
        {
          "clearingDate": "string",
          "clearingAmount": 0,
          "clearingCurrency": "string",
          "receiver": [
            {
              "receiverId": "string",
              "receiverName": "string",
              "receiverType": "string"
            }
          ],
          "clearingReference": [
            {
              "companyCode": "string",
              "financialDocumentId": "string",
              "fiscalYear": "string",
              "paymentRef": "string",
              "paymentMethod": "string"
            }
          ]
        }
      ],
      "processingStatusCode": "string"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'string'
};

fetch('/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/paymentconfirmations',
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

result = RestClient.post '/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/paymentconfirmations',
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

r = requests.post('/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/paymentconfirmations', headers = headers)

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
    $response = $client->request('POST','/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/paymentconfirmations', array(
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
URL obj = new URL("/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/paymentconfirmations");
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
    req, err := http.NewRequest("POST", "/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/paymentconfirmations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/paymentconfirmations`

*Confirms results of financial transactions payment posting.*

This API allows financial posting results to be sent to SAP Concur.

> Body parameter

```json
{
  "systemId": "string",
  "processingConfirmation": [
    {
      "docId": "string",
      "clearingDetails": [
        {
          "clearingDate": "string",
          "clearingAmount": 0,
          "clearingCurrency": "string",
          "receiver": [
            {
              "receiverId": "string",
              "receiverName": "string",
              "receiverType": "string"
            }
          ],
          "clearingReference": [
            {
              "companyCode": "string",
              "financialDocumentId": "string",
              "fiscalYear": "string",
              "paymentRef": "string",
              "paymentMethod": "string"
            }
          ]
        }
      ],
      "processingStatusCode": "string"
    }
  ]
}
```

<h3 id="posterppaymentconfirmationsusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|docType|path|string|true|docType|
|Authorization|header|string|true|Bearer JWTFromOAuthServiceHere|
|body|body|[paymentrequest](#schemapaymentrequest)|true|Payment confirmation body|

###### Enumerated Values

|Parameter|Value|
|---|---|
|docType|expense|
|docType|invoice|
|docType|cashadvance|
|docType|payroll|
|docType|obligation|

> Example responses

> 200 Response

```json
[
  {
    "code": 0,
    "detailMessage": "string",
    "docId": "string",
    "errorMessage": "string",
    "paymentConfirmationResult": "SUCCESS",
    "paymentRef": "string",
    "systemId": "string"
  }
]
```

<h3 id="posterppaymentconfirmationsusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Ok|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<h3 id="posterppaymentconfirmationsusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PaymentConfirmationResponseItem](#schemapaymentconfirmationresponseitem)]|false|none|none|
|» code|integer(int32)|false|none|The fi return code|
|» detailMessage|string|false|none|none|
|» docId|string|true|none|The document id|
|» errorMessage|string|false|none|Any error message if occurred.|
|» paymentConfirmationResult|string|true|none|Payment confirmation result|
|» paymentRef|string|false|none|Any message corresponding to payment reference being processed.|
|» systemId|string|true|none|The ERP Id that acknowledged the document.|

###### Enumerated Values

|Property|Value|
|---|---|
|paymentConfirmationResult|SUCCESS|
|paymentConfirmationResult|SYSTEM_ERROR_OCCURRED|
|paymentConfirmationResult|NOT_POSTING_CONFIRMED|
|paymentConfirmationResult|DOCUMENT_NOT_FOUND|
|paymentConfirmationResult|FAILURE|
|paymentConfirmationResult|NOOP|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### postErpPostingConfirmationsUsingPOST

<a id="opIdpostErpPostingConfirmationsUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/postingconfirmations \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

```http
POST /us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/postingconfirmations HTTP/1.1

Content-Type: application/json
Accept: application/json
Authorization: string

```

```javascript
const inputBody = '{
  "systemId": "string",
  "postingConfirmations": [
    {
      "docId": "string",
      "postingDocs": [
        {
          "companyId": "string",
          "documentNumber": "string",
          "fiscalYear": "string",
          "paymentRelevantLineItems": [
            null
          ],
          "postingDate": "string"
        }
      ],
      "overallPostingStatusCode": "string",
      "systemMessages": [
        {
          "concurTransactionLineItemId": "string",
          "messageId": "string",
          "messageLanguage": "string",
          "messageLongText": [
            null
          ],
          "messageShortText": "string"
        }
      ]
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'string'
};

fetch('/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/postingconfirmations',
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

result = RestClient.post '/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/postingconfirmations',
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

r = requests.post('/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/postingconfirmations', headers = headers)

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
    $response = $client->request('POST','/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/postingconfirmations', array(
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
URL obj = new URL("/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/postingconfirmations");
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
    req, err := http.NewRequest("POST", "/us.api.concursolutions.com/financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/postingconfirmations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /financialintegration/fi/v4/companies/transactiontypes/{docType}/transactions/postingconfirmations`

*Confirms results of financial transactions posting.*

This API allows financial posting results to be sent to SAP Concur.

> Body parameter

```json
{
  "systemId": "string",
  "postingConfirmations": [
    {
      "docId": "string",
      "postingDocs": [
        {
          "companyId": "string",
          "documentNumber": "string",
          "fiscalYear": "string",
          "paymentRelevantLineItems": [
            null
          ],
          "postingDate": "string"
        }
      ],
      "overallPostingStatusCode": "string",
      "systemMessages": [
        {
          "concurTransactionLineItemId": "string",
          "messageId": "string",
          "messageLanguage": "string",
          "messageLongText": [
            null
          ],
          "messageShortText": "string"
        }
      ]
    }
  ]
}
```

<h3 id="posterppostingconfirmationsusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|docType|path|string|true|docType|
|Authorization|header|string|true|Bearer JWTFromOAuthServiceHere|
|body|body|[confirmationrequest](#schemaconfirmationrequest)|true|Posting confirmation body|

###### Enumerated Values

|Parameter|Value|
|---|---|
|docType|expense|
|docType|invoice|
|docType|cashadvance|
|docType|payroll|
|docType|obligation|

> Example responses

> 200 Response

```json
[
  {
    "code": 0,
    "detailMessage": "string",
    "docId": "string",
    "errorMessage": "string",
    "postingConfirmationResult": "SUCCESS",
    "systemId": "string"
  }
]
```

<h3 id="posterppostingconfirmationsusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Ok|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<h3 id="posterppostingconfirmationsusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PostingConfirmationResponseItem](#schemapostingconfirmationresponseitem)]|false|none|none|
|» code|integer(int32)|false|none|The fi return code|
|» detailMessage|string|false|none|none|
|» docId|string|true|none|The document id|
|» errorMessage|string|false|none|Any error message if occurred.|
|» postingConfirmationResult|string|true|none|Posting confirmation result|
|» systemId|string|true|none|The ERP Id that acknowledged the document.|

###### Enumerated Values

|Property|Value|
|---|---|
|postingConfirmationResult|SUCCESS|
|postingConfirmationResult|SYSTEM_ERROR_OCCURRED|
|postingConfirmationResult|NOT_YET_ACKNOWLEDGED|
|postingConfirmationResult|DOCUMENT_NOT_FOUND|
|postingConfirmationResult|FAILURE|
|postingConfirmationResult|WAS_RECALLED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

### Schemas

<h3 id="tocS_PageMetadata">PageMetadata</h3>

<a id="schemapagemetadata"></a>
<a id="schema_PageMetadata"></a>
<a id="tocSpagemetadata"></a>
<a id="tocspagemetadata"></a>

```json
{
  "number": 0,
  "size": 0,
  "totalElements": 0,
  "totalPages": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|integer(int64)|false|none|Page location for which the result is returned, for example: first page starts with 0, second page starts with 1|
|size|integer(int64)|false|none|Total number of pages returned|
|totalElements|integer(int64)|false|none|Total count of records returned|
|totalPages|integer(int64)|false|none|Total number of pages returned|

<h3 id="tocS_AcknowledgeRequest">AcknowledgeRequest</h3>

<a id="schemaacknowledgerequest"></a>
<a id="schema_AcknowledgeRequest"></a>
<a id="tocSacknowledgerequest"></a>
<a id="tocsacknowledgerequest"></a>

```json
{
  "ids": [
    "string"
  ],
  "systemId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|The unique identifiers list for the financial documents|
|systemId|string|true|none|The external System ID that acknowledged the documents.|

<h3 id="tocS_Collection.Resource.FIDocument">Collection.Resource.FIDocument</h3>

<a id="schemacollection.resource.fidocument"></a>
<a id="schema_Collection.Resource.FIDocument"></a>
<a id="tocScollection.resource.fidocument"></a>
<a id="tocscollection.resource.fidocument"></a>

```json
[
  {
    "companyId": "string",
    "companyUuid": "string",
    "docStatus": "ACKNOWLEDGED",
    "docType": "expense",
    "document": {},
    "entityId": "string",
    "erpSystemId": "string",
    "id": "string",
    "links": [
      null
    ]
  }
]

```

The result collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Resource.FIDocument](#schemaresource.fidocument)]|false|none|The result collection|

<h3 id="tocS_Resource.FIDocument">Resource.FIDocument</h3>

<a id="schemaresource.fidocument"></a>
<a id="schema_Resource.FIDocument"></a>
<a id="tocSresource.fidocument"></a>
<a id="tocsresource.fidocument"></a>

```json
{
  "companyId": "string",
  "companyUuid": "string",
  "docStatus": "ACKNOWLEDGED",
  "docType": "expense",
  "document": {},
  "entityId": "string",
  "erpSystemId": "string",
  "id": "string",
  "links": [
    null
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyId|string|false|none|Unique identifier for the company in SAP Concur|
|companyUuid|string|false|none|UUID for the company in SAP Concur|
|docStatus|string|false|none|The financial document status. Supported values are: READY, ACKNOWLEDGED, POSTING_CONFIRMED_SUCCESS, POSTING_CONFIRMED_FAILURE|
|docType|string|false|none|Transaction type. Supported values are: expense, invoice, cashadvance, payroll, obligation|
|document|object|false|none|The JSON financial document. Review the <a href='https://developer.concur.com/api-reference/financial-integration/v4.financial-documents-schema.html'>Financial Documents Schema Documentation</a>|
|entityId|string|false|none|Unique identifier for the entity in SAP Concur|
|erpSystemId|string|false|none|none|
|id|string|false|none|The unique identifier for the document|
|links|[any]|false|none|Pagination links|

###### Enumerated Values

|Property|Value|
|---|---|
|docStatus|ACKNOWLEDGED|
|docStatus|PAID|
|docStatus|RECALLED|
|docStatus|READY|
|docStatus|POSTING_CONFIRMED_SUCCESS|
|docStatus|POSTING_CONFIRMED_FAILURE|
|docStatus|PAYMENT_CONFIRMED_SUCCESS|
|docStatus|PAYMENT_CONFIRMED_REVERSED|
|docStatus|PAYMENT_CONFIRMED_OBSOLETE|
|docStatus|PENDING_SYSTEM_REFRESH|
|docStatus|FLAG_DUPLICATE|
|docType|expense|
|docType|invoice|
|docType|cashadvance|
|docType|payroll|
|docType|obligation|

<h3 id="tocS_AcknowledgeResponse">AcknowledgeResponse</h3>

<a id="schemaacknowledgeresponse"></a>
<a id="schema_AcknowledgeResponse"></a>
<a id="tocSacknowledgeresponse"></a>
<a id="tocsacknowledgeresponse"></a>

```json
[
  {
    "acknowledgeResult": "SUCCESS",
    "code": 0,
    "docId": "string",
    "errorMessage": "string",
    "systemId": "string"
  }
]

```

The JSON response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AcknowledgeResponseItem](#schemaacknowledgeresponseitem)]|false|none|The JSON response|

<h3 id="tocS_AcknowledgeResponseItem">AcknowledgeResponseItem</h3>

<a id="schemaacknowledgeresponseitem"></a>
<a id="schema_AcknowledgeResponseItem"></a>
<a id="tocSacknowledgeresponseitem"></a>
<a id="tocsacknowledgeresponseitem"></a>

```json
{
  "acknowledgeResult": "SUCCESS",
  "code": 0,
  "docId": "string",
  "errorMessage": "string",
  "systemId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgeResult|string|true|none|Acknowledge processing result. Supported values are: SUCCESS or FAILURE|
|code|integer(int32)|false|none|The Financial Integration Service Code. This is a particular code based on the success and failure of individual records for Acknowledging documents.|
|docId|string|true|none|The financial document unique identifier.|
|errorMessage|string|false|none|The error message, if any|
|systemId|string|true|none|The external system ID that acknowledged the documents|

###### Enumerated Values

|Property|Value|
|---|---|
|acknowledgeResult|SUCCESS|
|acknowledgeResult|FAILURE|

<h3 id="tocS_PagedResources.Resource.FIDocument">PagedResources.Resource.FIDocument</h3>

<a id="schemapagedresources.resource.fidocument"></a>
<a id="schema_PagedResources.Resource.FIDocument"></a>
<a id="tocSpagedresources.resource.fidocument"></a>
<a id="tocspagedresources.resource.fidocument"></a>

```json
{
  "content": [
    {
      "companyId": "string",
      "companyUuid": "string",
      "docStatus": "ACKNOWLEDGED",
      "docType": "expense",
      "document": {},
      "entityId": "string",
      "erpSystemId": "string",
      "id": "string",
      "links": [
        null
      ]
    }
  ],
  "links": [
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
  ],
  "page": {
    "number": 0,
    "size": 0,
    "totalElements": 0,
    "totalPages": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[Collection.Resource.FIDocument](#schemacollection.resource.fidocument)|false|none|The result collection|
|links|[[Link](#schemalink)]|false|none|Pagination links|
|page|[PageMetadata](#schemapagemetadata)|false|none|Pagination details|

<h3 id="tocS_confirmationrequest">confirmationrequest</h3>

<a id="schemaconfirmationrequest"></a>
<a id="schema_confirmationrequest"></a>
<a id="tocSconfirmationrequest"></a>
<a id="tocsconfirmationrequest"></a>

```json
{
  "systemId": "string",
  "postingConfirmations": [
    {
      "docId": "string",
      "postingDocs": [
        {
          "companyId": "string",
          "documentNumber": "string",
          "fiscalYear": "string",
          "paymentRelevantLineItems": [
            null
          ],
          "postingDate": "string"
        }
      ],
      "overallPostingStatusCode": "string",
      "systemMessages": [
        {
          "concurTransactionLineItemId": "string",
          "messageId": "string",
          "messageLanguage": "string",
          "messageLongText": [
            null
          ],
          "messageShortText": "string"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|systemId|string|true|none|The external System ID that acknowledged the documents, it can be an empty String.|
|postingConfirmations|[[postingrequest](#schemapostingrequest)]|true|none|Posting confirmations JSON request.|

<h3 id="tocS_postingrequest">postingrequest</h3>

<a id="schemapostingrequest"></a>
<a id="schema_postingrequest"></a>
<a id="tocSpostingrequest"></a>
<a id="tocspostingrequest"></a>

```json
{
  "docId": "string",
  "postingDocs": [
    {
      "companyId": "string",
      "documentNumber": "string",
      "fiscalYear": "string",
      "paymentRelevantLineItems": [
        null
      ],
      "postingDate": "string"
    }
  ],
  "overallPostingStatusCode": "string",
  "systemMessages": [
    {
      "concurTransactionLineItemId": "string",
      "messageId": "string",
      "messageLanguage": "string",
      "messageLongText": [
        null
      ],
      "messageShortText": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|docId|string|true|none|The financial document Id to confirm.|
|postingDocs|[[postingdocs](#schemapostingdocs)]|true|none|Posting documents details, if any.|
|overallPostingStatusCode|string|true|none|Posting status. VALUES: error or success.|
|systemMessages|[[systemmsg](#schemasystemmsg)]|true|none|Messages to post into Concur, if any.|

<h3 id="tocS_postingdocs">postingdocs</h3>

<a id="schemapostingdocs"></a>
<a id="schema_postingdocs"></a>
<a id="tocSpostingdocs"></a>
<a id="tocspostingdocs"></a>

```json
{
  "companyId": "string",
  "documentNumber": "string",
  "fiscalYear": "string",
  "paymentRelevantLineItems": [
    null
  ],
  "postingDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyId|string|true|none|External system organizational Unit ID.|
|documentNumber|string|false|none|External system document identifier.|
|fiscalYear|string|false|none|External system fiscal year.|
|paymentRelevantLineItems|[any]|false|none|Payment Relevant line items. This array is usually empty.|
|postingDate|string|false|none|External system posting date.|

<h3 id="tocS_systemmsg">systemmsg</h3>

<a id="schemasystemmsg"></a>
<a id="schema_systemmsg"></a>
<a id="tocSsystemmsg"></a>
<a id="tocssystemmsg"></a>

```json
{
  "concurTransactionLineItemId": "string",
  "messageId": "string",
  "messageLanguage": "string",
  "messageLongText": [
    null
  ],
  "messageShortText": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|concurTransactionLineItemId|string|false|none|none|
|messageId|string|false|none|External System message identifier|
|messageLanguage|string|false|none|Message Language code, example EN, FR.|
|messageLongText|[any]|false|none|Message text, will be posted on the audit trail in SAP Concur.|
|messageShortText|string|false|none|Message text, will be posted on the audit trail in SAP Concur.|

<h3 id="tocS_paymentrequest">paymentrequest</h3>

<a id="schemapaymentrequest"></a>
<a id="schema_paymentrequest"></a>
<a id="tocSpaymentrequest"></a>
<a id="tocspaymentrequest"></a>

```json
{
  "systemId": "string",
  "processingConfirmation": [
    {
      "docId": "string",
      "clearingDetails": [
        {
          "clearingDate": "string",
          "clearingAmount": 0,
          "clearingCurrency": "string",
          "receiver": [
            {
              "receiverId": "string",
              "receiverName": "string",
              "receiverType": "string"
            }
          ],
          "clearingReference": [
            {
              "companyCode": "string",
              "financialDocumentId": "string",
              "fiscalYear": "string",
              "paymentRef": "string",
              "paymentMethod": "string"
            }
          ]
        }
      ],
      "processingStatusCode": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|systemId|string|true|none|The external System ID that acknowledged the documents, it can be an empty String.|
|processingConfirmation|[[paymentconfirmationrequest](#schemapaymentconfirmationrequest)]|true|none|Payment confirmations JSON request.|

<h3 id="tocS_paymentconfirmationrequest">paymentconfirmationrequest</h3>

<a id="schemapaymentconfirmationrequest"></a>
<a id="schema_paymentconfirmationrequest"></a>
<a id="tocSpaymentconfirmationrequest"></a>
<a id="tocspaymentconfirmationrequest"></a>

```json
{
  "docId": "string",
  "clearingDetails": [
    {
      "clearingDate": "string",
      "clearingAmount": 0,
      "clearingCurrency": "string",
      "receiver": [
        {
          "receiverId": "string",
          "receiverName": "string",
          "receiverType": "string"
        }
      ],
      "clearingReference": [
        {
          "companyCode": "string",
          "financialDocumentId": "string",
          "fiscalYear": "string",
          "paymentRef": "string",
          "paymentMethod": "string"
        }
      ]
    }
  ],
  "processingStatusCode": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|docId|string|true|none|The financial document Id to confirm.|
|clearingDetails|[[paymentdocs](#schemapaymentdocs)]|true|none|Payment documents details, if any.|
|processingStatusCode|string|true|none|Payment status. VALUES: CP, PP, RE, OB (Completely Paid, Partially paid, Reversal, Obsolete)|

<h3 id="tocS_paymentdocs">paymentdocs</h3>

<a id="schemapaymentdocs"></a>
<a id="schema_paymentdocs"></a>
<a id="tocSpaymentdocs"></a>
<a id="tocspaymentdocs"></a>

```json
{
  "clearingDate": "string",
  "clearingAmount": 0,
  "clearingCurrency": "string",
  "receiver": [
    {
      "receiverId": "string",
      "receiverName": "string",
      "receiverType": "string"
    }
  ],
  "clearingReference": [
    {
      "companyCode": "string",
      "financialDocumentId": "string",
      "fiscalYear": "string",
      "paymentRef": "string",
      "paymentMethod": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clearingDate|string|false|none|Date the payment got cleared.|
|clearingAmount|integer|false|none|Amount cleared.|
|clearingCurrency|string|false|none|Currency value.|
|receiver|[[receiver](#schemareceiver)]|false|none|Receiver details.|
|clearingReference|[[clearing-reference](#schemaclearing-reference)]|false|none|Clearing reference details.|

<h3 id="tocS_receiver">receiver</h3>

<a id="schemareceiver"></a>
<a id="schema_receiver"></a>
<a id="tocSreceiver"></a>
<a id="tocsreceiver"></a>

```json
{
  "receiverId": "string",
  "receiverName": "string",
  "receiverType": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|receiverId|string|false|none|Receiver id.|
|receiverName|string|false|none|Name of receiver.|
|receiverType|string|false|none|Type of receiver.|

<h3 id="tocS_clearing-reference">clearing-reference</h3>

<a id="schemaclearing-reference"></a>
<a id="schema_clearing-reference"></a>
<a id="tocSclearing-reference"></a>
<a id="tocsclearing-reference"></a>

```json
{
  "companyCode": "string",
  "financialDocumentId": "string",
  "fiscalYear": "string",
  "paymentRef": "string",
  "paymentMethod": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyCode|string|false|none|Company code.|
|financialDocumentId|string|false|none|Document id in ERP.|
|fiscalYear|string|false|none|Fiscal year.|
|paymentRef|string|false|none|Payment reference id.|
|paymentMethod|string|false|none|Payment method.|

<h3 id="tocS_PaymentConfirmationResponseItem">PaymentConfirmationResponseItem</h3>

<a id="schemapaymentconfirmationresponseitem"></a>
<a id="schema_PaymentConfirmationResponseItem"></a>
<a id="tocSpaymentconfirmationresponseitem"></a>
<a id="tocspaymentconfirmationresponseitem"></a>

```json
{
  "code": 0,
  "detailMessage": "string",
  "docId": "string",
  "errorMessage": "string",
  "paymentConfirmationResult": "SUCCESS",
  "paymentRef": "string",
  "systemId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The fi return code|
|detailMessage|string|false|none|none|
|docId|string|true|none|The document id|
|errorMessage|string|false|none|Any error message if occurred.|
|paymentConfirmationResult|string|true|none|Payment confirmation result|
|paymentRef|string|false|none|Any message corresponding to payment reference being processed.|
|systemId|string|true|none|The ERP Id that acknowledged the document.|

###### Enumerated Values

|Property|Value|
|---|---|
|paymentConfirmationResult|SUCCESS|
|paymentConfirmationResult|SYSTEM_ERROR_OCCURRED|
|paymentConfirmationResult|NOT_POSTING_CONFIRMED|
|paymentConfirmationResult|DOCUMENT_NOT_FOUND|
|paymentConfirmationResult|FAILURE|
|paymentConfirmationResult|NOOP|

<h3 id="tocS_PostingConfirmationResponseItem">PostingConfirmationResponseItem</h3>

<a id="schemapostingconfirmationresponseitem"></a>
<a id="schema_PostingConfirmationResponseItem"></a>
<a id="tocSpostingconfirmationresponseitem"></a>
<a id="tocspostingconfirmationresponseitem"></a>

```json
{
  "code": 0,
  "detailMessage": "string",
  "docId": "string",
  "errorMessage": "string",
  "postingConfirmationResult": "SUCCESS",
  "systemId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The fi return code|
|detailMessage|string|false|none|none|
|docId|string|true|none|The document id|
|errorMessage|string|false|none|Any error message if occurred.|
|postingConfirmationResult|string|true|none|Posting confirmation result|
|systemId|string|true|none|The ERP Id that acknowledged the document.|

###### Enumerated Values

|Property|Value|
|---|---|
|postingConfirmationResult|SUCCESS|
|postingConfirmationResult|SYSTEM_ERROR_OCCURRED|
|postingConfirmationResult|NOT_YET_ACKNOWLEDGED|
|postingConfirmationResult|DOCUMENT_NOT_FOUND|
|postingConfirmationResult|FAILURE|
|postingConfirmationResult|WAS_RECALLED|

<h3 id="tocS_Link">Link</h3>

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
|deprecation|string|false|none|Deprecated indication, if any|
|href|string|false|none|Complete URL for the paginated link|
|hreflang|string|false|none|Link language, if any|
|media|string|false|none|Media type, if any|
|rel|string|false|none|Relation of link, for example: first, self, next, last|
|templated|boolean|false|none|none|
|title|string|false|none|Link title, if any|
|type|string|false|none|Link type, if any|

