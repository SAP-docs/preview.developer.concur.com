---
title: Expense Report Service v4.0.56
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

<h1 id="expense-report-service">Expense Report Service v4.0.56</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<b>Expense Report Service (ERS) is the next-generation v4 API for operations related to  creating and processing Expense Reports</b>. In order to interact with this API, a client  must include either an authorized User or Company JWT in the header of each request, or  use an X.509 client certificate which has been white-listed by the ERS team.

Base URLs:

* <a href="//api.concursolutions.com/">//api.concursolutions.com/</a>

Email: <a href="mailto:expensereportservice@sap.onmicrosoft.com">expensereportservice@sap.onmicrosoft.com</a> 
 License: SAP Concur

<h1 id="expense-report-service-reports">Reports</h1>

Reports API 

## getReportDetailsUsingGET

<a id="opIdgetReportDetailsUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId} \
  -H 'Accept: application/json' \
  -H 'concur-correlationid: string' \
  -H 'accept-language: string'

```

```http
GET /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId} HTTP/1.1

Accept: application/json
concur-correlationid: string
accept-language: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'concur-correlationid':'string',
  'accept-language':'string'
};

fetch('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}',
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
  'concur-correlationid' => 'string',
  'accept-language' => 'string'
}

result = RestClient.get '/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'concur-correlationid': 'string',
  'accept-language': 'string'
}

r = requests.get('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'concur-correlationid' => 'string',
    'accept-language' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}', array(
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
URL obj = new URL("/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}");
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
        "concur-correlationid": []string{"string"},
        "accept-language": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}`

*Gets report details for the specified report.*

Returns report details for the specified report. Also returns a self link, plus each of the following links, contingent on the existence of the resource: comments, exceptions, expenses, formFields.

<h3 id="getreportdetailsusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|accept-language|header|string|false|The unique identifier of the user's locale that indicates the language in which the API response should be formulated|
|reportId|path|string|true|The unique identifier of the report|
|userId|path|string|true|The unique identifier of the Concur user|
|contextType|path|string|true|The access level of the Concur user, which determines the form fields they can view/modify|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contextType|TRAVELER|
|contextType|PROXY|

> Example responses

> 200 Response

```json
{
  "allocationFormId": "string",
  "amountCompanyPaid": {
    "currencyCode": "string",
    "value": 0
  },
  "amountDueCompany": {
    "currencyCode": "string",
    "value": 0
  },
  "amountDueCompanyCard": {
    "currencyCode": "string",
    "value": 0
  },
  "amountDueEmployee": {
    "currencyCode": "string",
    "value": 0
  },
  "amountNotApproved": {
    "currencyCode": "string",
    "value": 0
  },
  "analyticsGroupId": "string",
  "approvalStatus": "string",
  "approvalStatusId": "string",
  "approvedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "businessPurpose": "string",
  "canRecall": true,
  "canReopen": true,
  "cardProgramStatementPeriodId": "string",
  "claimedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "concurAuditStatus": "PASS",
  "country": "string",
  "countryCode": "string",
  "countrySubDivisionCode": "string",
  "creationDate": "2019-08-24T14:15:22Z",
  "currency": "string",
  "currencyCode": "string",
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "endDate": "2019-08-24",
  "hierarchyNodeId": "string",
  "isFinancialIntegrationEnabled": true,
  "isPaperReceiptsReceived": true,
  "isReceiptImageAvailable": true,
  "isReceiptImageRequired": true,
  "isReopened": true,
  "ledger": "string",
  "ledgerId": "string",
  "links": [
    {
      "deprecation": "string",
      "href": "string",
      "hreflang": "string",
      "isTemplated": true,
      "media": "string",
      "method": "string",
      "rel": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "name": "string",
  "paymentConfirmedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "paymentStatus": "string",
  "paymentStatusId": "string",
  "personalAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "policy": "string",
  "policyId": "string",
  "redirectFund": {
    "amount": {
      "currencyCode": "string",
      "value": 0
    },
    "creditCardId": "string"
  },
  "reportDate": "2019-08-24",
  "reportFormId": "string",
  "reportId": "string",
  "reportNumber": "string",
  "reportTotal": {
    "currencyCode": "string",
    "value": 0
  },
  "reportType": "'Regular'or'Reconciliation'or'Statement'or'AutoCreated'",
  "reportVersion": 0,
  "startDate": "2019-08-24",
  "submitDate": "2019-08-24T14:15:22Z",
  "userId": "string"
}
```

<h3 id="getreportdetailsusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Report details successfully retrieved|[ReportDetails](#schemareportdetails)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Specified context not supported|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or invalid authorization header|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Specified context type is invalid for this API. Review the documentation for supported context type,
User is not allowed to access this report|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|reportId not found|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error. Retry your request again|[ErrorMessage](#schemaerrormessage)|

<aside class="success">
This operation does not require authentication
</aside>

## updateReportUsingPATCH

<a id="opIdupdateReportUsingPATCH"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'concur-correlationid: string' \
  -H 'accept-language: string'

```

```http
PATCH /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId} HTTP/1.1

Content-Type: application/json
Accept: application/json
concur-correlationid: string
accept-language: string

```

```javascript
const inputBody = '{
  "businessPurpose": "string",
  "comment": "string",
  "country": "string",
  "countryCode": "string",
  "countrySubDivisionCode": "string",
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "endDate": "2019-08-24",
  "isCopyDownInherited": true,
  "isPaperReceiptsReceived": true,
  "name": "string",
  "policy": "string",
  "policyId": "string",
  "redirectFund": {
    "amount": {
      "currencyCode": "string",
      "value": 0
    },
    "creditCardId": "string"
  },
  "reportDate": "2019-08-24",
  "reportSource": "EA",
  "startDate": "2019-08-24"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'concur-correlationid':'string',
  'accept-language':'string'
};

fetch('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}',
{
  method: 'PATCH',
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

result = RestClient.patch '/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}',
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

r = requests.patch('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}', headers = headers)

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
    $response = $client->request('PATCH','/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}', array(
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
URL obj = new URL("/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
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
    req, err := http.NewRequest("PATCH", "/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}`

*Updates the specified report*

Updates the specified report.

> Body parameter

```json
{
  "businessPurpose": "string",
  "comment": "string",
  "country": "string",
  "countryCode": "string",
  "countrySubDivisionCode": "string",
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "endDate": "2019-08-24",
  "isCopyDownInherited": true,
  "isPaperReceiptsReceived": true,
  "name": "string",
  "policy": "string",
  "policyId": "string",
  "redirectFund": {
    "amount": {
      "currencyCode": "string",
      "value": 0
    },
    "creditCardId": "string"
  },
  "reportDate": "2019-08-24",
  "reportSource": "EA",
  "startDate": "2019-08-24"
}
```

<h3 id="updatereportusingpatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|accept-language|header|string|false|The unique identifier of the user's locale that indicates the language in which the API response should be formulated|
|reportId|path|string|true|The unique identifier of the report|
|userId|path|string|true|The unique identifier of the Concur user|
|contextType|path|string|true|The access level of the Concur user, which determines the form fields they can view/modify|
|body|body|[UpdateReport](#schemaupdatereport)|true|Report body|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contextType|TRAVELER|
|contextType|PROXY|

> Example responses

> 400 Response

```json
{
  "errorId": "string",
  "errorMessage": "string",
  "httpStatus": "string",
  "path": "string",
  "timestamp": "2016-10-04T00:53:25.931+0000",
  "validationErrors": [
    {
      "id": "string",
      "message": "string",
      "source": "string"
    }
  ]
}
```

<h3 id="updatereportusingpatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Report successfully updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Specified context not supported,
Invalid field value specified,
User does not have proper role|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or invalid authorization header|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Specified context type is invalid for this API. Review the documentation for supported context type|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|reportId not found|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error. Retry your request again|[ErrorMessage](#schemaerrormessage)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="expense-report-service-expenses">Expenses</h1>

Report Expenses API

## getReportExpensesSummaryUsingGET

<a id="opIdgetReportExpensesSummaryUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses \
  -H 'Accept: application/json' \
  -H 'concur-correlationid: string' \
  -H 'accept-language: string'

```

```http
GET /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses HTTP/1.1

Accept: application/json
concur-correlationid: string
accept-language: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'concur-correlationid':'string',
  'accept-language':'string'
};

fetch('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses',
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
  'concur-correlationid' => 'string',
  'accept-language' => 'string'
}

result = RestClient.get '/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'concur-correlationid': 'string',
  'accept-language': 'string'
}

r = requests.get('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'concur-correlationid' => 'string',
    'accept-language' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses', array(
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
URL obj = new URL("/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses");
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
        "concur-correlationid": []string{"string"},
        "accept-language": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses`

*Gets all expense summaries for the specified report*

Returns all expense summaries for the specified report. Includes a link to expense details for each expense and a link to itemizations for each parent expense.

<h3 id="getreportexpensessummaryusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|accept-language|header|string|false|The unique identifier of the user's locale that indicates the language in which the API response should be formulated|
|reportId|path|string|true|The unique identifier of the report|
|userId|path|string|true|The unique identifier of the Concur user|
|contextType|path|string|true|The access level of the Concur user, which determines the form fields they can view/modify|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contextType|TRAVELER|
|contextType|PROXY|

> Example responses

> 200 Response

```json
[
  {
    "allocationSetId": "string",
    "allocationState": "string",
    "approvedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "approverAdjustedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "attendeeCount": 0,
    "businessPurpose": "string",
    "claimedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "ereceiptImageId": "string",
    "exchangeRate": {
      "operation": "string",
      "value": 0
    },
    "expenseId": "string",
    "expenseSourceIdentifiers": {
      "creditCardTransactionId": "string",
      "ereceiptId": "string",
      "expenseCaptureImageId": "string",
      "jptRouteId": "string",
      "personalCardTransactionId": "string",
      "quickExpenseId": "string",
      "segmentId": 0,
      "segmentTypeId": "string",
      "tripId": 0
    },
    "expenseType": {
      "code": "string",
      "id": "string",
      "isDeleted": true,
      "name": "string"
    },
    "hasBlockingExceptions": true,
    "hasExceptions": true,
    "hasMissingReceiptDeclaration": true,
    "imageCertificationStatus": "string",
    "isAutoCreated": true,
    "isImageRequired": true,
    "isPaperReceiptRequired": true,
    "isPersonalExpense": true,
    "jptRouteId": "string",
    "links": [
      {
        "deprecation": "string",
        "href": "string",
        "hreflang": "string",
        "isTemplated": true,
        "media": "string",
        "method": "string",
        "rel": "string",
        "title": "string",
        "type": "string"
      }
    ],
    "location": {
      "city": "string",
      "countryCode": "string",
      "countrySubDivisionCode": "string",
      "id": "string",
      "name": "string"
    },
    "paymentType": {
      "code": "string",
      "id": "string",
      "name": "string"
    },
    "postedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "receiptImageId": "string",
    "ticketNumber": "string",
    "transactionAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "transactionDate": "2019-08-24",
    "travelAllowance": {
      "dailyLimitAmount": 0,
      "dailyTravelAllowanceId": "string",
      "isExpensePartOfTravelAllowance": true
    },
    "vendor": {
      "description": "string",
      "id": "string",
      "name": "string"
    }
  }
]
```

<h3 id="getreportexpensessummaryusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Expense summaries successfully retrieved|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Specified context not supported|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or invalid authorization header|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Specified context type is invalid for this API. Review the documentation for supported context type

User is not allowed to access this report|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|reportId not found|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error. Retry your request again|[ErrorMessage](#schemaerrormessage)|

<h3 id="getreportexpensessummaryusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReportExpenseSummary](#schemareportexpensesummary)]|false|none|none|
|» allocationSetId|string|false|none|The identifier of the Allocation set associated with the expense. Allocations which belong to the same set were created at the same time.|
|» allocationState|string|true|none|Allocation state for the expense. Possible values: 'FULLY_ALLOCATED', 'NOT_ALLOCATED', 'PARTIALLY_ALLOCATED'|
|» approvedAmount|[Amount](#schemaamount)|false|none|none|
|»» currencyCode|string|true|none|The 3-letter ISO 4217 currency code for the expense report currency, based on the user's assigned reimbursement currency when the report was created. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona|
|»» value|number(double)|true|none|The amount in the defined currency|
|» approverAdjustedAmount|[Amount](#schemaamount)|false|none|none|
|» attendeeCount|integer(int32)|false|none|The total number of attendees associated with the expense|
|» businessPurpose|string|false|none|The text input for the business purpose by the user|
|» claimedAmount|[Amount](#schemaamount)|false|none|none|
|» ereceiptImageId|string|false|none|The unique identifier of the eReceipt image associated with the expense|
|» exchangeRate|[ExchangeRate](#schemaexchangerate)|true|none|none|
|»» operation|string|true|none|Exchange rate operation. Possible values: 'MULTIPLY' or 'DIVIDE'|
|»» value|number(double)|true|none|Exchange rate value|
|» expenseId|string|true|none|The unique identifier for the expense|
|» expenseSourceIdentifiers|[ExpenseSourceIdentifiers](#schemaexpensesourceidentifiers)|false|none|none|
|»» creditCardTransactionId|string|false|none|The unique identifier of the credit card transaction (indexed transactionId) associated with the expense|
|»» ereceiptId|string|false|none|none|
|»» expenseCaptureImageId|string|false|none|The unique identifier of the expense capture image associated with the expense|
|»» jptRouteId|string|false|none|The unique identifier to identify a Japan rail route|
|»» personalCardTransactionId|string|false|none|The unique identifier of the personal card transaction associated with the expense|
|»» quickExpenseId|string|false|none|The unique identifier of the mobile expense associated with the expense|
|»» segmentId|integer(int64)|false|none|The unique identifier of the segment associated with the expense|
|»» segmentTypeId|string|false|none|Segment type id associated with the trip. Possible values: AIRFR - Air Ticket, AIRSU - Air Subscription, CARRT - Car Rental, DININ - Dining, EVENT - Event, HOTEL - Hotel Reservation, INSUR - Insurance, LIMOF - Limousine Reservation, MISC - Miscellaneous, PARKG - Parking Fee, RAILF - Train Ticket, RAISU - Train Subscription, TAXIF - Taxi Fare, VISA - Visa|
|»» tripId|integer(int64)|false|none|The unique identifier of the trip id associated with the expense|
|» expenseType|[ExpenseType](#schemaexpensetype)|true|none|none|
|»» code|string|false|none|The code of the expense type|
|»» id|string|true|none|The unique identifier of the expense type. Maximum length: 5 characters. Example: 'BRKFT'|
|»» isDeleted|boolean|false|none|Whether the expense type returned is deleted or not.|
|»» name|string|false|none|The name of the expense type (localized as per accept-language header)|
|» hasBlockingExceptions|boolean|true|none|Whether the expense has any exceptions that blocks it from being submitted|
|» hasExceptions|boolean|true|none|Whether the expense has any exceptions|
|» hasMissingReceiptDeclaration|boolean|true|none|Whether the expense has an affidavit declaration for missing receipt|
|» imageCertificationStatus|string|false|none|The final status of the receipt image associated with the expense. Possible values: Refer [Receipts Status V4 API](https://github.concur.com/receipts/receipt-service/wiki/GRDC-API-Docs#possible-digitizationstatus-codes)|
|» isAutoCreated|boolean|true|none|Whether the expense is auto created|
|» isImageRequired|boolean|true|none|Whether the image is required for the expense|
|» isPaperReceiptRequired|boolean|true|none|Whether the paper receipt is required for the expense to be submitted|
|» isPersonalExpense|boolean|true|none|Whether the expense is marked as personal (that is, non-reimbursable) by the user|
|» jptRouteId|string|false|none|The unique route ID to identify a Japan rail route|
|» links|[[Link](#schemalink)]|false|none|Resource links related to this call|
|»» deprecation|string|false|none|none|
|»» href|string|true|none|The URL of the related HATEOAS link that you can use for subsequent calls|
|»» hreflang|string|false|none|none|
|»» isTemplated|boolean|true|none|Whether the href is parameterized|
|»» media|string|false|none|none|
|»» method|string|true|none|The HTTP method required for the related call|
|»» rel|string|true|none|The link relationship that describes how the href relates to the API call|
|»» title|string|false|none|none|
|»» type|string|false|none|none|
|» location|[Location](#schemalocation)|false|none|none|
|»» city|string|false|none|The location city|
|»» countryCode|string|false|none|The location country ISO 3166-1 code (https://en.wikipedia.org/wiki/ISO_3166-1)|
|»» countrySubDivisionCode|string|false|none|The location country sub division ISO 3166-2 code (https://en.wikipedia.org/wiki/ISO_3166-2)|
|»» id|string|false|none|The unique identifier of the location. When location id is specified (when creating or updating a resource), other location object fields will be ignored|
|»» name|string|false|none|The location name (localized as per accept-language header)|
|» paymentType|[PaymentType](#schemapaymenttype)|true|none|none|
|»» code|string|false|none|The code of the payment type|
|»» id|string|true|none|The unique identifier of the Payment type. Maximum length: 4 characters. Example: 'CASH'|
|»» name|string|false|none|The name of the payment type (localized as per accept-language header)|
|» postedAmount|[Amount](#schemaamount)|true|none|none|
|» receiptImageId|string|false|none|The unique identifier of the image associated with the expense|
|» ticketNumber|string|false|none|The ticket number associated with the travel|
|» transactionAmount|[Amount](#schemaamount)|true|none|none|
|» transactionDate|string(date)|false|none|The transaction date (ISO-8601) of the expense (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD|
|» travelAllowance|[TravelAllowance](#schematravelallowance)|false|none|none|
|»» dailyLimitAmount|number(double)|false|none|The allowed amount based on government travel allowance rates|
|»» dailyTravelAllowanceId|string|false|none|The fixed daily travel allowance id associated with the expense. Maximum length: 32 characters|
|»» isExpensePartOfTravelAllowance|boolean|false|none|Whether the expense is part of travel allowance. Default value: false|
|» vendor|[Vendor](#schemavendor)|false|none|none|
|»» description|string|false|none|The description of the vendor. Maximum length: 64 characters|
|»» id|string|false|none|The unique identifier of the vendor|
|»» name|string|false|none|The name of the vendor (localized as per accept-language header)|

<aside class="success">
This operation does not require authentication
</aside>

## getReportExpenseDetailUsingGET

<a id="opIdgetReportExpenseDetailUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId} \
  -H 'Accept: application/json' \
  -H 'concur-correlationid: string' \
  -H 'accept-language: string'

```

```http
GET /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId} HTTP/1.1

Accept: application/json
concur-correlationid: string
accept-language: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'concur-correlationid':'string',
  'accept-language':'string'
};

fetch('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}',
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
  'concur-correlationid' => 'string',
  'accept-language' => 'string'
}

result = RestClient.get '/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'concur-correlationid': 'string',
  'accept-language': 'string'
}

r = requests.get('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'concur-correlationid' => 'string',
    'accept-language' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}', array(
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
URL obj = new URL("/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}");
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
        "concur-correlationid": []string{"string"},
        "accept-language": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}`

*Gets expense details for the specified expense*

Returns expense details for the specified expense. Also returns a self link, plus each of the following links, contingent on the existence of the resource: allocations, attendees, comments, exceptions, formFields, itemizations, tax.

<h3 id="getreportexpensedetailusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|accept-language|header|string|false|The unique identifier of the user's locale that indicates the language in which the API response should be formulated|
|reportId|path|string|true|The unique identifier of the report|
|expenseId|path|string|true|The unique identifier of the expense|
|userId|path|string|true|The unique identifier of the Concur user|
|contextType|path|string|true|The access level of the Concur user, which determines the form fields they can view/modify|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contextType|TRAVELER|
|contextType|PROXY|

> Example responses

> 200 Response

```json
{
  "allocationSetId": "string",
  "allocationState": "string",
  "approvedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "approverAdjustedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "attendeeCount": 0,
  "authorizationRequestExpenseId": "string",
  "budgetAccrualDate": "2019-08-24",
  "businessPurpose": "string",
  "claimedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "ereceiptImageId": "string",
  "exchangeRate": {
    "operation": "string",
    "value": 0
  },
  "expenseId": "string",
  "expenseSourceIdentifiers": {
    "creditCardTransactionId": "string",
    "ereceiptId": "string",
    "expenseCaptureImageId": "string",
    "jptRouteId": "string",
    "personalCardTransactionId": "string",
    "quickExpenseId": "string",
    "segmentId": 0,
    "segmentTypeId": "string",
    "tripId": 0
  },
  "expenseTaxSummary": {
    "netAdjustedTaxAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "netReclaimAdjustedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "netReclaimAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "netTaxAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "totalReclaimAdjustedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "totalReclaimPostedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "totalTaxAdjustedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "totalTaxPostedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "vatTaxTotal": {
      "currencyCode": "string",
      "value": 0
    }
  },
  "expenseType": {
    "code": "string",
    "id": "string",
    "isDeleted": true,
    "name": "string"
  },
  "hasBlockingExceptions": true,
  "hasExceptions": true,
  "hasMissingReceiptDeclaration": true,
  "imageCertificationStatus": "string",
  "isAutoCreated": true,
  "isExcludedFromCashAdvanceByUser": true,
  "isExpenseBillable": true,
  "isExpenseRejected": true,
  "isImageRequired": true,
  "isPaperReceiptReceived": true,
  "isPaperReceiptRequired": true,
  "isPersonalExpense": true,
  "jptRouteId": "string",
  "links": [
    {
      "deprecation": "string",
      "href": "string",
      "hreflang": "string",
      "isTemplated": true,
      "media": "string",
      "method": "string",
      "rel": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "id": "string",
    "name": "string"
  },
  "merchantTaxId": "string",
  "mileage": {
    "hasCaravanAttached": true,
    "hasDogIncluded": true,
    "hasForestOrConstructionSiteRoadInRoute": true,
    "hasForestRoadInRoute": true,
    "hasMachinery": true,
    "hasMobileCanteenOrHeavyLoadAttached": true,
    "hasTrailerAttached": true,
    "isMarkedAsHigherRate": true,
    "odometerEnd": 0,
    "odometerStart": 0,
    "passengerCount": 0,
    "personalDistance": 0,
    "routeId": "string",
    "totalDistance": 0,
    "vehicleId": "string"
  },
  "parentExpenseId": "string",
  "paymentType": {
    "code": "string",
    "id": "string",
    "name": "string"
  },
  "postedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "receiptImageId": "string",
  "receiptType": {
    "id": "string",
    "status": "string"
  },
  "taxRateLocation": "FOREIGN",
  "transactionAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "transactionDate": "2019-08-24",
  "travel": {
    "airlineFeeTypeCode": "string",
    "airlineFeeTypeName": "string",
    "airlineServiceClassCode": "string",
    "airlineServiceClassName": "string",
    "carRentalDays": 0,
    "endLocation": "string",
    "hotelCheckinDate": "2019-08-24",
    "hotelCheckoutDate": "2019-08-24",
    "startLocation": "string",
    "ticketNumber": "string"
  },
  "travelAllowance": {
    "dailyLimitAmount": 0,
    "dailyTravelAllowanceId": "string",
    "isExpensePartOfTravelAllowance": true
  },
  "vendor": {
    "description": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="getreportexpensedetailusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Expense details successfully retrieved|[ReportExpenseDetail](#schemareportexpensedetail)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Specified context not supported|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or invalid authorization header|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Specified context type is invalid for this API. Review the documentation for supported context type

User is not allowed to access this report|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|reportId not found

expenseId not found|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error. Retry your request again|[ErrorMessage](#schemaerrormessage)|

<aside class="success">
This operation does not require authentication
</aside>

## updateReportExpenseUsingPATCH

<a id="opIdupdateReportExpenseUsingPATCH"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'concur-correlationid: string' \
  -H 'accept-language: string'

```

```http
PATCH /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId} HTTP/1.1

Content-Type: application/json
Accept: application/json
concur-correlationid: string
accept-language: string

```

```javascript
const inputBody = '{
  "approverAdjustedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "authorizationRequestExpenseId": "string",
  "budgetAccrualDate": "2019-08-24",
  "businessPurpose": "string",
  "comment": "string",
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "exchangeRate": {
    "operation": "string",
    "value": 0
  },
  "expenseSource": "EA",
  "expenseType": {
    "code": "string",
    "id": "string",
    "isDeleted": true,
    "name": "string"
  },
  "hasMissingReceiptDeclaration": true,
  "isCopyDownInherited": true,
  "isExcludedFromCashAdvanceByUser": true,
  "isExpenseBillable": true,
  "isExpenseRejected": true,
  "isPaperReceiptReceived": true,
  "isPersonalExpense": true,
  "jptRouteId": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "id": "string",
    "name": "string"
  },
  "merchantTaxId": "string",
  "mileage": {
    "hasCaravanAttached": true,
    "hasDogIncluded": true,
    "hasForestOrConstructionSiteRoadInRoute": true,
    "hasForestRoadInRoute": true,
    "hasMachinery": true,
    "hasMobileCanteenOrHeavyLoadAttached": true,
    "hasTrailerAttached": true,
    "isMarkedAsHigherRate": true,
    "odometerEnd": 0,
    "odometerStart": 0,
    "passengerCount": 0,
    "personalDistance": 0,
    "routeId": "string",
    "totalDistance": 0,
    "vehicleId": "string"
  },
  "paymentType": {
    "code": "string",
    "id": "string",
    "name": "string"
  },
  "receiptImageId": "string",
  "receiptType": {
    "id": "string",
    "status": "string"
  },
  "smartExpense": {
    "creditCardTransactionId": "string",
    "ereceipt": {
      "carEReceipt": {
        "calculatedDailyRate": 0,
        "carClass": "string",
        "currencyCode": "string",
        "endDate": "2019-08-24",
        "fuelServiceCharge": 0,
        "numberOfRentalDays": 0,
        "startDate": "2019-08-24",
        "unitsDriven": 0,
        "vendorName": "string"
      },
      "hotelEReceipt": {
        "calculatedDailyRate": 0,
        "endDate": "2019-08-24",
        "locationId": "string",
        "startDate": "2019-08-24",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        },
        "vendorName": "string"
      },
      "id": "string",
      "imageId": "string",
      "templateURL": "string",
      "type": "string"
    },
    "expenseAttendees": {
      "expenseAttendeeList": [
        {
          "associatedAttendeeCount": 0,
          "attendeeId": "string",
          "customData": [
            {
              "id": "string",
              "isValid": true,
              "value": "string"
            }
          ],
          "isAmountUserEdited": true,
          "isTraveling": true,
          "transactionAmount": 0,
          "versionNumber": 0
        }
      ],
      "noShowAttendeeCount": 0
    },
    "isAutoCreated": true,
    "personalCardTransactionId": "string",
    "quickExpenseId": "string",
    "trip": {
      "airTrip": {
        "airlineName": "string",
        "endDate": "2019-08-24",
        "numberOfTravelDays": 0,
        "startDate": "2019-08-24",
        "ticketType": "string",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        }
      },
      "bookingOrigin": "string",
      "bookingSource": "string",
      "carTrip": {
        "calculatedDailyRate": 0,
        "carClass": "string",
        "endDate": "2019-08-24",
        "numberOfCars": 0,
        "numberOfRentalDays": 0,
        "startDate": "2019-08-24",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        },
        "vendorName": "string"
      },
      "cliqbookPaymentId": 0,
      "cliqbookPaymentMethod": "string",
      "hotelTrip": {
        "calculatedDailyRate": 0,
        "endDate": "2019-08-24",
        "numberOfNights": 0,
        "numberOfRooms": 0,
        "startDate": "2019-08-24",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        },
        "vendorName": "string"
      },
      "merchantCode": "string",
      "rideTrip": {
        "startDate": "2019-08-24",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        },
        "vendorName": "string"
      },
      "segmentId": 0,
      "segmentTypeId": "string",
      "startLocationId": "string",
      "tripId": 0
    }
  },
  "tax": {
    "expenseTax1": {
      "customData": [
        {
          "id": "string",
          "isValid": true,
          "value": "string"
        }
      ],
      "reclaimCode": "string",
      "reclaimTransactionAmount": 0,
      "taxAuthorityId": "string",
      "taxAuthorityName": "string",
      "taxCode": "string",
      "taxFormId": "string",
      "taxLabel": "string",
      "taxRateTypeId": "string",
      "taxRateTypeName": "string",
      "taxReclaimConfigurationId": "string",
      "taxTransactionAmount": 0
    },
    "expenseTax2": {
      "customData": [
        {
          "id": "string",
          "isValid": true,
          "value": "string"
        }
      ],
      "reclaimCode": "string",
      "reclaimTransactionAmount": 0,
      "taxAuthorityId": "string",
      "taxAuthorityName": "string",
      "taxCode": "string",
      "taxFormId": "string",
      "taxLabel": "string",
      "taxRateTypeId": "string",
      "taxRateTypeName": "string",
      "taxReclaimConfigurationId": "string",
      "taxTransactionAmount": 0
    }
  },
  "taxRateLocation": "FOREIGN",
  "transactionAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "transactionDate": "2019-08-24",
  "travel": {
    "airlineFeeTypeCode": "string",
    "airlineFeeTypeName": "string",
    "airlineServiceClassCode": "string",
    "airlineServiceClassName": "string",
    "carRentalDays": 0,
    "endLocation": "string",
    "hotelCheckinDate": "2019-08-24",
    "hotelCheckoutDate": "2019-08-24",
    "startLocation": "string",
    "ticketNumber": "string"
  },
  "travelAllowance": {
    "dailyLimitAmount": 0,
    "dailyTravelAllowanceId": "string",
    "isExpensePartOfTravelAllowance": true
  },
  "vendor": {
    "description": "string",
    "id": "string",
    "name": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'concur-correlationid':'string',
  'accept-language':'string'
};

fetch('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}',
{
  method: 'PATCH',
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

result = RestClient.patch '/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}',
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

r = requests.patch('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}', headers = headers)

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
    $response = $client->request('PATCH','/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}', array(
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
URL obj = new URL("/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
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
    req, err := http.NewRequest("PATCH", "/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}`

*Updates the specified expense*

Updates the specified expense.

> Body parameter

```json
{
  "approverAdjustedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "authorizationRequestExpenseId": "string",
  "budgetAccrualDate": "2019-08-24",
  "businessPurpose": "string",
  "comment": "string",
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "exchangeRate": {
    "operation": "string",
    "value": 0
  },
  "expenseSource": "EA",
  "expenseType": {
    "code": "string",
    "id": "string",
    "isDeleted": true,
    "name": "string"
  },
  "hasMissingReceiptDeclaration": true,
  "isCopyDownInherited": true,
  "isExcludedFromCashAdvanceByUser": true,
  "isExpenseBillable": true,
  "isExpenseRejected": true,
  "isPaperReceiptReceived": true,
  "isPersonalExpense": true,
  "jptRouteId": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "id": "string",
    "name": "string"
  },
  "merchantTaxId": "string",
  "mileage": {
    "hasCaravanAttached": true,
    "hasDogIncluded": true,
    "hasForestOrConstructionSiteRoadInRoute": true,
    "hasForestRoadInRoute": true,
    "hasMachinery": true,
    "hasMobileCanteenOrHeavyLoadAttached": true,
    "hasTrailerAttached": true,
    "isMarkedAsHigherRate": true,
    "odometerEnd": 0,
    "odometerStart": 0,
    "passengerCount": 0,
    "personalDistance": 0,
    "routeId": "string",
    "totalDistance": 0,
    "vehicleId": "string"
  },
  "paymentType": {
    "code": "string",
    "id": "string",
    "name": "string"
  },
  "receiptImageId": "string",
  "receiptType": {
    "id": "string",
    "status": "string"
  },
  "smartExpense": {
    "creditCardTransactionId": "string",
    "ereceipt": {
      "carEReceipt": {
        "calculatedDailyRate": 0,
        "carClass": "string",
        "currencyCode": "string",
        "endDate": "2019-08-24",
        "fuelServiceCharge": 0,
        "numberOfRentalDays": 0,
        "startDate": "2019-08-24",
        "unitsDriven": 0,
        "vendorName": "string"
      },
      "hotelEReceipt": {
        "calculatedDailyRate": 0,
        "endDate": "2019-08-24",
        "locationId": "string",
        "startDate": "2019-08-24",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        },
        "vendorName": "string"
      },
      "id": "string",
      "imageId": "string",
      "templateURL": "string",
      "type": "string"
    },
    "expenseAttendees": {
      "expenseAttendeeList": [
        {
          "associatedAttendeeCount": 0,
          "attendeeId": "string",
          "customData": [
            {
              "id": "string",
              "isValid": true,
              "value": "string"
            }
          ],
          "isAmountUserEdited": true,
          "isTraveling": true,
          "transactionAmount": 0,
          "versionNumber": 0
        }
      ],
      "noShowAttendeeCount": 0
    },
    "isAutoCreated": true,
    "personalCardTransactionId": "string",
    "quickExpenseId": "string",
    "trip": {
      "airTrip": {
        "airlineName": "string",
        "endDate": "2019-08-24",
        "numberOfTravelDays": 0,
        "startDate": "2019-08-24",
        "ticketType": "string",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        }
      },
      "bookingOrigin": "string",
      "bookingSource": "string",
      "carTrip": {
        "calculatedDailyRate": 0,
        "carClass": "string",
        "endDate": "2019-08-24",
        "numberOfCars": 0,
        "numberOfRentalDays": 0,
        "startDate": "2019-08-24",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        },
        "vendorName": "string"
      },
      "cliqbookPaymentId": 0,
      "cliqbookPaymentMethod": "string",
      "hotelTrip": {
        "calculatedDailyRate": 0,
        "endDate": "2019-08-24",
        "numberOfNights": 0,
        "numberOfRooms": 0,
        "startDate": "2019-08-24",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        },
        "vendorName": "string"
      },
      "merchantCode": "string",
      "rideTrip": {
        "startDate": "2019-08-24",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        },
        "vendorName": "string"
      },
      "segmentId": 0,
      "segmentTypeId": "string",
      "startLocationId": "string",
      "tripId": 0
    }
  },
  "tax": {
    "expenseTax1": {
      "customData": [
        {
          "id": "string",
          "isValid": true,
          "value": "string"
        }
      ],
      "reclaimCode": "string",
      "reclaimTransactionAmount": 0,
      "taxAuthorityId": "string",
      "taxAuthorityName": "string",
      "taxCode": "string",
      "taxFormId": "string",
      "taxLabel": "string",
      "taxRateTypeId": "string",
      "taxRateTypeName": "string",
      "taxReclaimConfigurationId": "string",
      "taxTransactionAmount": 0
    },
    "expenseTax2": {
      "customData": [
        {
          "id": "string",
          "isValid": true,
          "value": "string"
        }
      ],
      "reclaimCode": "string",
      "reclaimTransactionAmount": 0,
      "taxAuthorityId": "string",
      "taxAuthorityName": "string",
      "taxCode": "string",
      "taxFormId": "string",
      "taxLabel": "string",
      "taxRateTypeId": "string",
      "taxRateTypeName": "string",
      "taxReclaimConfigurationId": "string",
      "taxTransactionAmount": 0
    }
  },
  "taxRateLocation": "FOREIGN",
  "transactionAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "transactionDate": "2019-08-24",
  "travel": {
    "airlineFeeTypeCode": "string",
    "airlineFeeTypeName": "string",
    "airlineServiceClassCode": "string",
    "airlineServiceClassName": "string",
    "carRentalDays": 0,
    "endLocation": "string",
    "hotelCheckinDate": "2019-08-24",
    "hotelCheckoutDate": "2019-08-24",
    "startLocation": "string",
    "ticketNumber": "string"
  },
  "travelAllowance": {
    "dailyLimitAmount": 0,
    "dailyTravelAllowanceId": "string",
    "isExpensePartOfTravelAllowance": true
  },
  "vendor": {
    "description": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="updatereportexpenseusingpatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|accept-language|header|string|false|The unique identifier of the user's locale that indicates the language in which the API response should be formulated|
|reportId|path|string|true|The unique identifier of the report|
|expenseId|path|string|true|The unique identifier of the expense|
|userId|path|string|true|The unique identifier of the Concur user|
|contextType|path|string|true|The access level of the Concur user, which determines the form fields they can view/modify|
|body|body|[UpdateReportExpense](#schemaupdatereportexpense)|true|Expense data|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contextType|TRAVELER|
|contextType|PROXY|

> Example responses

> 400 Response

```json
{
  "errorId": "string",
  "errorMessage": "string",
  "httpStatus": "string",
  "path": "string",
  "timestamp": "2016-10-04T00:53:25.931+0000",
  "validationErrors": [
    {
      "id": "string",
      "message": "string",
      "source": "string"
    }
  ]
}
```

<h3 id="updatereportexpenseusingpatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Successfully updated the report expense|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Specified context not supported

Invalid field value specified

User does not have proper role|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or invalid authorization header|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Specified context type is invalid for this API. Review the documentation for supported context type

User is not allowed to modify this report|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|reportId not found

expenseId not found|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error. Retry your request again|[ErrorMessage](#schemaerrormessage)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="expense-report-service-allocations">Allocations</h1>

Allocations API

## getAllocationByIdUsingGET

<a id="opIdgetAllocationByIdUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId} \
  -H 'Accept: application/json' \
  -H 'concur-correlationid: string' \
  -H 'accept-language: string'

```

```http
GET /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId} HTTP/1.1

Accept: application/json
concur-correlationid: string
accept-language: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'concur-correlationid':'string',
  'accept-language':'string'
};

fetch('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}',
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
  'concur-correlationid' => 'string',
  'accept-language' => 'string'
}

result = RestClient.get '/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'concur-correlationid': 'string',
  'accept-language': 'string'
}

r = requests.get('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'concur-correlationid' => 'string',
    'accept-language' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}', array(
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
URL obj = new URL("/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}");
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
        "concur-correlationid": []string{"string"},
        "accept-language": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}`

*Gets specified allocation for the specified report.*

Returns specified allocation for the specified report.

<h3 id="getallocationbyidusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|accept-language|header|string|false|The unique identifier of the user's locale that indicates the language in which the API response should be formulated|
|reportId|path|string|true|The unique identifier of the report|
|allocationId|path|string|true|The unique identifier of the expense allocation|
|userId|path|string|true|The unique identifier of the Concur user|
|contextType|path|string|true|The access level of the Concur user, which determines the form fields they can view/modify|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contextType|TRAVELER|
|contextType|PROXY|

> Example responses

> 200 Response

```json
{
  "accountCode": "string",
  "allocationAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "allocationId": "string",
  "approvedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "claimedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "expenseId": "string",
  "isPercentEdited": true,
  "isSystemAllocation": true,
  "overLimitAccountCode": "string",
  "percentage": 0
}
```

<h3 id="getallocationbyidusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Allocation successfully retrieved|[ReportAllocationResponse](#schemareportallocationresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid expenseId

allocationId is invalid|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or invalid authorization header|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Specified context type is invalid for this API. Review the documentation for supported context type

User is not authorized to access this report with this context type|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|reportId not found

allocationId not found|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error. Retry your request again|[ErrorMessage](#schemaerrormessage)|

<aside class="success">
This operation does not require authentication
</aside>

## updateAllocationUsingPATCH

<a id="opIdupdateAllocationUsingPATCH"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'concur-correlationid: string' \
  -H 'accept-language: string'

```

```http
PATCH /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId} HTTP/1.1

Content-Type: application/json
Accept: application/json
concur-correlationid: string
accept-language: string

```

```javascript
const inputBody = '{
  "allocation": {
    "customData": [
      {
        "id": "string",
        "isValid": true,
        "value": "string"
      }
    ]
  },
  "expenseIds": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'concur-correlationid':'string',
  'accept-language':'string'
};

fetch('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}',
{
  method: 'PATCH',
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

result = RestClient.patch '/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}',
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

r = requests.patch('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}', headers = headers)

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
    $response = $client->request('PATCH','/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}', array(
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
URL obj = new URL("/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
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
    req, err := http.NewRequest("PATCH", "/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/allocations/{allocationId}`

*Updates the specified allocation for the report*

Updates the specified allocation for the report.

> Body parameter

```json
{
  "allocation": {
    "customData": [
      {
        "id": "string",
        "isValid": true,
        "value": "string"
      }
    ]
  },
  "expenseIds": [
    "string"
  ]
}
```

<h3 id="updateallocationusingpatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|accept-language|header|string|false|The unique identifier of the user's locale that indicates the language in which the API response should be formulated|
|reportId|path|string|true|The unique identifier of the report that contains the expense associated with the allocations|
|allocationId|path|string|true|The unique identifier of the expense allocation|
|userId|path|string|true|The unique identifier of the Concur user|
|contextType|path|string|true|The access level of the Concur user, which determines the form fields they can view/modify|
|body|body|[UpdateReportAllocation](#schemaupdatereportallocation)|true|Allocation data|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contextType|TRAVELER|
|contextType|PROXY|

> Example responses

> 400 Response

```json
{
  "errorId": "string",
  "errorMessage": "string",
  "httpStatus": "string",
  "path": "string",
  "timestamp": "2016-10-04T00:53:25.931+0000",
  "validationErrors": [
    {
      "id": "string",
      "message": "string",
      "source": "string"
    }
  ]
}
```

<h3 id="updateallocationusingpatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Successfully updated the allocation|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid field value specified

Invalid expenseId

allocationId is invalid

User does not have proper role|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or invalid authorization header|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Specified context type is invalid for this API. Review the documentation for supported context type

System allocation cannot be modified

User is not authorized to access this report with this context type|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|reportId not found

allocationId not found

expenseId not found

The policy of the specified report does not have an allocation form defined. Contact your Concur Administrator|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error. Retry your request again|[ErrorMessage](#schemaerrormessage)|

<aside class="success">
This operation does not require authentication
</aside>

## getAllocationsUsingGET

<a id="opIdgetAllocationsUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}/allocations \
  -H 'Accept: application/json' \
  -H 'concur-correlationid: string' \
  -H 'accept-language: string'

```

```http
GET /api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}/allocations HTTP/1.1

Accept: application/json
concur-correlationid: string
accept-language: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'concur-correlationid':'string',
  'accept-language':'string'
};

fetch('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}/allocations',
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
  'concur-correlationid' => 'string',
  'accept-language' => 'string'
}

result = RestClient.get '/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}/allocations',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'concur-correlationid': 'string',
  'accept-language': 'string'
}

r = requests.get('/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}/allocations', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'concur-correlationid' => 'string',
    'accept-language' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}/allocations', array(
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
URL obj = new URL("/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}/allocations");
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
        "concur-correlationid": []string{"string"},
        "accept-language": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api.concursolutions.com/expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}/allocations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expensereports/v4/users/{userId}/context/{contextType}/reports/{reportId}/expenses/{expenseId}/allocations`

*Gets all allocations for the specified expense*

Returns all allocations for the specified expense.

<h3 id="getallocationsusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|accept-language|header|string|false|The unique identifier of the user's locale that indicates the language in which the API response should be formulated|
|reportId|path|string|true|The unique identifier of the report|
|expenseId|path|string|true|The unique identifier of the expense|
|userId|path|string|true|The unique identifier of the Concur user|
|contextType|path|string|true|The access level of the Concur user, which determines the form fields they can view/modify|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contextType|TRAVELER|
|contextType|PROXY|

> Example responses

> 200 Response

```json
[
  {
    "accountCode": "string",
    "allocationAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "allocationId": "string",
    "approvedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "claimedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "customData": [
      {
        "id": "string",
        "isValid": true,
        "value": "string"
      }
    ],
    "expenseId": "string",
    "isPercentEdited": true,
    "isSystemAllocation": true,
    "overLimitAccountCode": "string",
    "percentage": 0
  }
]
```

<h3 id="getallocationsusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Allocations successfully retrieved|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid expenseId|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or invalid authorization header|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Specified context type is invalid for this API. Review the documentation for supported context type

User is not authorized to access this report with this context type|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|reportId not found|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error. Retry your request again|[ErrorMessage](#schemaerrormessage)|

<h3 id="getallocationsusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Allocation](#schemaallocation)]|false|none|none|
|» accountCode|string|false|none|The ledger account code associated with the allocation|
|» allocationAmount|[Amount](#schemaamount)|false|none|none|
|»» currencyCode|string|true|none|The 3-letter ISO 4217 currency code for the expense report currency, based on the user's assigned reimbursement currency when the report was created. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona|
|»» value|number(double)|true|none|The amount in the defined currency|
|» allocationId|string|true|none|The unique identifier of the allocation|
|» approvedAmount|[Amount](#schemaamount)|false|none|none|
|» claimedAmount|[Amount](#schemaamount)|false|none|none|
|» customData|[[CustomData](#schemacustomdata)]|false|none|This is a set of data that the custom fields contain for the resource based on the configuration. This set might be empty if no custom fields are configured|
|»» id|string|true|none|The unique identifier of the custom field e.g. 'custom1', 'orgUnit1'|
|»» isValid|boolean|false|none|Whether the value returned is valid or not. This value is returned for custom fields of all data types and is specifically evaluated for list items to represent the current status. Default value: true|
|»» value|string|false|none|The value of the custom field. This field can have values for all the supported data types such as 'text', 'integer', 'boolean' and 'listItemId'. Maximum length: 48 characters|
|» expenseId|string|true|none|The unique identifier of the expense associated with the allocation|
|» isPercentEdited|boolean|false|none|Whether the allocation percent has been edited|
|» isSystemAllocation|boolean|true|none|Whether the allocation is a system allocation, usually hidden from the user. If displayed to the user, should be read-only|
|» overLimitAccountCode|string|false|none|The ledger account code associated with the allocation if it exceeds a pre-defined threshold, for example, the user’s travel allowance limit|
|» percentage|number(double)|true|none|The percentage of the total expense that this allocation represents|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="expense-report-service-workflows">Workflows</h1>

Workflows API 

## approveReportAsSystemUsingPATCH

<a id="opIdapproveReportAsSystemUsingPATCH"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH /api.concursolutions.com/expensereports/v4/reports/{reportId}/approve \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'concur-correlationid: string' \
  -H 'accept-language: string'

```

```http
PATCH /api.concursolutions.com/expensereports/v4/reports/{reportId}/approve HTTP/1.1

Content-Type: application/json
Accept: application/json
concur-correlationid: string
accept-language: string

```

```javascript
const inputBody = '{
  "comment": "string",
  "currentProcessInstanceId": "string",
  "currentSequence": 0,
  "reportSource": "EA",
  "statusId": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'concur-correlationid':'string',
  'accept-language':'string'
};

fetch('/api.concursolutions.com/expensereports/v4/reports/{reportId}/approve',
{
  method: 'PATCH',
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

result = RestClient.patch '/api.concursolutions.com/expensereports/v4/reports/{reportId}/approve',
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

r = requests.patch('/api.concursolutions.com/expensereports/v4/reports/{reportId}/approve', headers = headers)

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
    $response = $client->request('PATCH','/api.concursolutions.com/expensereports/v4/reports/{reportId}/approve', array(
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
URL obj = new URL("/api.concursolutions.com/expensereports/v4/reports/{reportId}/approve");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
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
    req, err := http.NewRequest("PATCH", "/api.concursolutions.com/expensereports/v4/reports/{reportId}/approve", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /expensereports/v4/reports/{reportId}/approve`

*Advances the specified report to the next step if it is in a system step*

> Body parameter

```json
{
  "comment": "string",
  "currentProcessInstanceId": "string",
  "currentSequence": 0,
  "reportSource": "EA",
  "statusId": "string"
}
```

<h3 id="approvereportassystemusingpatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|accept-language|header|string|false|The unique identifier of the user's locale that indicates the language in which the API response should be formulated|
|reportId|path|string|true|The unique identifier of the report|
|body|body|[WorkflowTransitionRequest](#schemaworkflowtransitionrequest)|true|systemApproveReportRequest|

> Example responses

> 200 Response

```json
{}
```

<h3 id="approvereportassystemusingpatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Report successfully approved|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Specified context not supported

error.submit.Generic: An error occurred while submitting the selected report. The report was not submitted

error.submit.no_entries: The expense report has no expenses. You must create at least one expense in order to submit the report

error.workflow.no_clearingcode: Either the credit card account or the payment type is missing a clearing account code. Contact your Expense administrator

error.workflow.invalid_action: The action cannot be executed because it is not valid for the report workflow

error.workflow.incomplete_receipt_review: You have not finished reviewing all the receipts in this report.  Your company requires that you review receipts during approval

error.submit.rptXctMaxThreshold: This expense report cannot be submitted until all blocking exceptions are resolved

error.submit.entryXctMaxThreshold: This expense report cannot be submitted until all blocking exceptions are resolved

error.submit.undefined_expense_type: The expense report contains one or more expenses with an expense type of Undefined. You must select an expense type for each expense before you can submit the report

error.submit.missing_reqd_fields: At least one required field in this report is empty. Please provide a value and then submit the report

error.submit.missing_alloc_reqd_fields: At least one required allocation field in this report is empty. Please provide the appropriate value, and then submit the report

error.submit.missingKids: This report contains a Lodging expense that is not itemized. Lodging expenses must be itemized in the report before it can be submitted

error.submit.itemDiff: The expense report contains at least one itemized expense. The itemization amounts do not add up to the expense amount. Edit the itemized entries to make the required changes before submitting the report

error.submit.itemMissing: This report cannot be submitted because one or more entries must be itemized. Itemize the entries and then submit the report

error.submit.alreadySubmitted: The report has already been submitted and cannot be submitted again

error.submit.cannotSubmitAsDelegate: The report cannot be submitted by the Delegate

error.submit.cashadvance_cant_carry_balance: Cash Advances must be entirely utilized or returned. Please enter a Cash Advance Return on this report to return the remaining balance

error.submit.cashadvance_negative_balance: The Cash Advance Balance is negative because a Cash Advance Return is greater than the remaining balance. Either enter a Currency Gain/Loss expense to bring the balance to zero or adjust the Cash Advance Return amount to bring the balance to zero. Then, click Submit again

error.submit.single_row_itinerary: This report contains at least one itinerary with a single itinerary row. An itinerary is not valid until it has at least two rows. Please add another row to complete the itinerary

error.submit.invalidAttendeeType: This report contains at least one entry with an attendee of an invalid type.  Please remove the attendee(s) before submitting the report

info.submit.notify_by_delegate: A notification has been sent to the employee

cannot_approve_your_own_report: This expense report was created by you. You cannot approve your own report

no_approver: You must identify an approver before the expense report moves on to the next workflow step

invalid_auth_approver: This report cannot be sent to the next approver. This workflow step must be approved by a specialized approver called an Authorized Approver. The selected approver is not an Authorized Approver. Select another approver

no_approver.not_editable_step: There are no approvers defined in your workflow. Please contact your Expense administrator

no_approver.change_my_info: Missing the required approver for next workflow step. You may be able to select an approver; otherwise contact your Expense administrator for assistance

wf_config_invalid_next_step: You must identify an approver before the expense report moves on to the next workflow step

not_an_approver: This report cannot be sent to the next approver because the selected approver is no longer authorized to approve reports. Please select another approver

approver_cum_reportowner: You cannot send this report to this approver since this person created this report

approver_cum_reportowner.is_editableby: Your workflow is configured such that the report would come back to the report owner during some step. Please contact your Employee Administrator to change the approvers

instance_out_of_date: The approval workflow that this expense report uses has changed. Please select a new approver in order to approve and process this expense report

review_approval_flow_approver: Review Approvers in the workflow

cost_object_step: The next approval step is a Cost object step and cannot be approved through Mobile

step_exit_blocking_by_exception: One or more blocking exceptions are preventing approval submission. Resolve the exception before proceeding

receiptimagehold.workflow.noapprover: Missing the required approver for next step. Cannot advance report out of imaging hold. Contact your Expense administrator for assistance

error.workflow.invalid_report_key: The expense report no longer exists in the system

attendee_total_error: This report contains at least one entry with invalid attendee amounts.  Please correct the attendee amounts before approving

approver_cashadvance_owner.is_editableby: Your workflow is configured such that the cash advance would come back to the cash advance owner during some step. Please contact your Employee Administrator to change the approvers

error.workflow.missing_alloc_reqd_fields: At least one required allocation field in this report lacks data. Please provide the appropriate value, and then approve the report

error.recall.cannotRecall: Expense report cannot be recalled

error.workflow.noComments: Cannot send report back without providing comments. Add a comment to explain why you are returning the report

statusId.invalidValue: Invalid 'statusId' value specified|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or invalid authorization header|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Caller cannot modify System workflow step|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|reportId not found|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error. Retry your request again|[ErrorMessage](#schemaerrormessage)|

<h3 id="approvereportassystemusingpatch-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## sendBackReportAsSystemUsingPATCH

<a id="opIdsendBackReportAsSystemUsingPATCH"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH /api.concursolutions.com/expensereports/v4/reports/{reportId}/sendBack \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'concur-correlationid: string' \
  -H 'accept-language: string'

```

```http
PATCH /api.concursolutions.com/expensereports/v4/reports/{reportId}/sendBack HTTP/1.1

Content-Type: application/json
Accept: application/json
concur-correlationid: string
accept-language: string

```

```javascript
const inputBody = '{
  "comment": "string",
  "currentProcessInstanceId": "string",
  "currentSequence": 0,
  "reasonCodeId": "string",
  "reportSource": "EA"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'concur-correlationid':'string',
  'accept-language':'string'
};

fetch('/api.concursolutions.com/expensereports/v4/reports/{reportId}/sendBack',
{
  method: 'PATCH',
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

result = RestClient.patch '/api.concursolutions.com/expensereports/v4/reports/{reportId}/sendBack',
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

r = requests.patch('/api.concursolutions.com/expensereports/v4/reports/{reportId}/sendBack', headers = headers)

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
    $response = $client->request('PATCH','/api.concursolutions.com/expensereports/v4/reports/{reportId}/sendBack', array(
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
URL obj = new URL("/api.concursolutions.com/expensereports/v4/reports/{reportId}/sendBack");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
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
    req, err := http.NewRequest("PATCH", "/api.concursolutions.com/expensereports/v4/reports/{reportId}/sendBack", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /expensereports/v4/reports/{reportId}/sendBack`

*Sends back the specified report to report owner*

> Body parameter

```json
{
  "comment": "string",
  "currentProcessInstanceId": "string",
  "currentSequence": 0,
  "reasonCodeId": "string",
  "reportSource": "EA"
}
```

<h3 id="sendbackreportassystemusingpatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|concur-correlationid|header|string|false|The unique identifier of the consumer making the API calls. Minimum length: 6 characters|
|accept-language|header|string|false|The unique identifier of the user's locale that indicates the language in which the API response should be formulated|
|reportId|path|string|true|The unique identifier of the report|
|body|body|[ReportSendBackRequest](#schemareportsendbackrequest)|true|systemSendBackReportRequest|

> Example responses

> 200 Response

```json
{}
```

<h3 id="sendbackreportassystemusingpatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Report successfully sent back|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Specified context not supported

Invalid reportId

error.workflow.noComments: Cannot send report back without providing comments. Add a comment to explain why you are returning the report

no_approver: You must identify an approver before the expense report moves on to the next workflow step

invalid_auth_approver: This report cannot be sent to the next approver. This workflow step must be approved by a specialized approver called an Authorized Approver. The selected approver is not an Authorized Approver. Select another approver

no_approver.not_editable_step: There are no approvers defined in your workflow. Please contact your Expense administrator

wf_config_invalid_next_step: You must identify an approver before the expense report moves on to the next workflow step

not_an_approver: This report cannot be sent to the next approver because the selected approver is no longer authorized to approve reports. Please select another approver

error.workflow.invalid_report_key: The expense report no longer exists in the system

error.workflow.missing_alloc_reqd_fields: At least one required allocation field in this report lacks data. Please provide the appropriate value, and then approve the report|[ErrorMessage](#schemaerrormessage)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or invalid authorization header|[ErrorMessage](#schemaerrormessage)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Caller cannot modify System workflow step|[ErrorMessage](#schemaerrormessage)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|reportId not found|[ErrorMessage](#schemaerrormessage)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error. Retry your request again|[ErrorMessage](#schemaerrormessage)|

<h3 id="sendbackreportassystemusingpatch-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_HotelEReceipt">HotelEReceipt</h2>

<a id="schemahotelereceipt"></a>
<a id="schema_HotelEReceipt"></a>
<a id="tocShotelereceipt"></a>
<a id="tocshotelereceipt"></a>

```json
{
  "calculatedDailyRate": 0,
  "endDate": "2019-08-24",
  "locationId": "string",
  "startDate": "2019-08-24",
  "totalAmountPaid": {
    "currencyCode": "string",
    "value": 0
  },
  "vendorName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculatedDailyRate|number(double)|false|none|The calculated hotel daily rate|
|endDate|string(date)|false|none|The hotel checkout date (ISO-8601) (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD .|
|locationId|string|false|none|The unique identifier of the location for this hotel|
|startDate|string(date)|false|none|The hotel checkin date (ISO-8601) (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD .|
|totalAmountPaid|[Amount](#schemaamount)|false|none|The total amount paid|
|vendorName|string|false|none|The name of the hotel vendor. Maximum length: 255 characters. Examples: 'Hilton', 'Four Points by Sheraton, Seattle'|

<h2 id="tocS_ReportExpenseSummary">ReportExpenseSummary</h2>

<a id="schemareportexpensesummary"></a>
<a id="schema_ReportExpenseSummary"></a>
<a id="tocSreportexpensesummary"></a>
<a id="tocsreportexpensesummary"></a>

```json
{
  "allocationSetId": "string",
  "allocationState": "string",
  "approvedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "approverAdjustedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "attendeeCount": 0,
  "businessPurpose": "string",
  "claimedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "ereceiptImageId": "string",
  "exchangeRate": {
    "operation": "string",
    "value": 0
  },
  "expenseId": "string",
  "expenseSourceIdentifiers": {
    "creditCardTransactionId": "string",
    "ereceiptId": "string",
    "expenseCaptureImageId": "string",
    "jptRouteId": "string",
    "personalCardTransactionId": "string",
    "quickExpenseId": "string",
    "segmentId": 0,
    "segmentTypeId": "string",
    "tripId": 0
  },
  "expenseType": {
    "code": "string",
    "id": "string",
    "isDeleted": true,
    "name": "string"
  },
  "hasBlockingExceptions": true,
  "hasExceptions": true,
  "hasMissingReceiptDeclaration": true,
  "imageCertificationStatus": "string",
  "isAutoCreated": true,
  "isImageRequired": true,
  "isPaperReceiptRequired": true,
  "isPersonalExpense": true,
  "jptRouteId": "string",
  "links": [
    {
      "deprecation": "string",
      "href": "string",
      "hreflang": "string",
      "isTemplated": true,
      "media": "string",
      "method": "string",
      "rel": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "id": "string",
    "name": "string"
  },
  "paymentType": {
    "code": "string",
    "id": "string",
    "name": "string"
  },
  "postedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "receiptImageId": "string",
  "ticketNumber": "string",
  "transactionAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "transactionDate": "2019-08-24",
  "travelAllowance": {
    "dailyLimitAmount": 0,
    "dailyTravelAllowanceId": "string",
    "isExpensePartOfTravelAllowance": true
  },
  "vendor": {
    "description": "string",
    "id": "string",
    "name": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocationSetId|string|false|none|The identifier of the Allocation set associated with the expense. Allocations which belong to the same set were created at the same time.|
|allocationState|string|true|none|Allocation state for the expense. Possible values: 'FULLY_ALLOCATED', 'NOT_ALLOCATED', 'PARTIALLY_ALLOCATED'|
|approvedAmount|[Amount](#schemaamount)|false|none|The approved amount of the expense, in the report currency|
|approverAdjustedAmount|[Amount](#schemaamount)|false|none|The total amount adjusted for the expense by the approver|
|attendeeCount|integer(int32)|false|none|The total number of attendees associated with the expense|
|businessPurpose|string|false|none|The text input for the business purpose by the user|
|claimedAmount|[Amount](#schemaamount)|false|none|The total non-personal amount claimed for reimbursement for the expense|
|ereceiptImageId|string|false|none|The unique identifier of the eReceipt image associated with the expense|
|exchangeRate|[ExchangeRate](#schemaexchangerate)|true|none|Exchange rate data for the expense. Please refer to the 'ExchangeRate' object for more information|
|expenseId|string|true|none|The unique identifier for the expense|
|expenseSourceIdentifiers|[ExpenseSourceIdentifiers](#schemaexpensesourceidentifiers)|false|none|The list of expense sources associated with the expense|
|expenseType|[ExpenseType](#schemaexpensetype)|true|none|The expense type information for the expense. Please refer to the 'ExpenseType' object for more information|
|hasBlockingExceptions|boolean|true|none|Whether the expense has any exceptions that blocks it from being submitted|
|hasExceptions|boolean|true|none|Whether the expense has any exceptions|
|hasMissingReceiptDeclaration|boolean|true|none|Whether the expense has an affidavit declaration for missing receipt|
|imageCertificationStatus|string|false|none|The final status of the receipt image associated with the expense. Possible values: Refer [Receipts Status V4 API](https://github.concur.com/receipts/receipt-service/wiki/GRDC-API-Docs#possible-digitizationstatus-codes)|
|isAutoCreated|boolean|true|none|Whether the expense is auto created|
|isImageRequired|boolean|true|none|Whether the image is required for the expense|
|isPaperReceiptRequired|boolean|true|none|Whether the paper receipt is required for the expense to be submitted|
|isPersonalExpense|boolean|true|none|Whether the expense is marked as personal (that is, non-reimbursable) by the user|
|jptRouteId|string|false|none|The unique route ID to identify a Japan rail route|
|links|[[Link](#schemalink)]|false|none|Resource links related to this call|
|location|[Location](#schemalocation)|false|none|The location information of the expense. Please refer to the 'Location' object for more information|
|paymentType|[PaymentType](#schemapaymenttype)|true|none|The payment type information for the expense. Please refer to the 'PaymentType' object for more information|
|postedAmount|[Amount](#schemaamount)|true|none|The amount of the expense, in the report currency|
|receiptImageId|string|false|none|The unique identifier of the image associated with the expense|
|ticketNumber|string|false|none|The ticket number associated with the travel|
|transactionAmount|[Amount](#schemaamount)|true|none|The amount of the expense, in the transaction currency paid to the vendor|
|transactionDate|string(date)|false|none|The transaction date (ISO-8601) of the expense (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD|
|travelAllowance|[TravelAllowance](#schematravelallowance)|false|none|The travel allowance data associated with the expense. Please refer to the 'TravelAllowance' object for more information|
|vendor|[Vendor](#schemavendor)|false|none|The vendor information for the expense. Please refer to the 'Vendor' object for more information|

<h2 id="tocS_SmartExpense">SmartExpense</h2>

<a id="schemasmartexpense"></a>
<a id="schema_SmartExpense"></a>
<a id="tocSsmartexpense"></a>
<a id="tocssmartexpense"></a>

```json
{
  "creditCardTransactionId": "string",
  "ereceipt": {
    "carEReceipt": {
      "calculatedDailyRate": 0,
      "carClass": "string",
      "currencyCode": "string",
      "endDate": "2019-08-24",
      "fuelServiceCharge": 0,
      "numberOfRentalDays": 0,
      "startDate": "2019-08-24",
      "unitsDriven": 0,
      "vendorName": "string"
    },
    "hotelEReceipt": {
      "calculatedDailyRate": 0,
      "endDate": "2019-08-24",
      "locationId": "string",
      "startDate": "2019-08-24",
      "totalAmountPaid": {
        "currencyCode": "string",
        "value": 0
      },
      "vendorName": "string"
    },
    "id": "string",
    "imageId": "string",
    "templateURL": "string",
    "type": "string"
  },
  "expenseAttendees": {
    "expenseAttendeeList": [
      {
        "associatedAttendeeCount": 0,
        "attendeeId": "string",
        "customData": [
          {
            "id": "string",
            "isValid": true,
            "value": "string"
          }
        ],
        "isAmountUserEdited": true,
        "isTraveling": true,
        "transactionAmount": 0,
        "versionNumber": 0
      }
    ],
    "noShowAttendeeCount": 0
  },
  "isAutoCreated": true,
  "personalCardTransactionId": "string",
  "quickExpenseId": "string",
  "trip": {
    "airTrip": {
      "airlineName": "string",
      "endDate": "2019-08-24",
      "numberOfTravelDays": 0,
      "startDate": "2019-08-24",
      "ticketType": "string",
      "totalAmountPaid": {
        "currencyCode": "string",
        "value": 0
      }
    },
    "bookingOrigin": "string",
    "bookingSource": "string",
    "carTrip": {
      "calculatedDailyRate": 0,
      "carClass": "string",
      "endDate": "2019-08-24",
      "numberOfCars": 0,
      "numberOfRentalDays": 0,
      "startDate": "2019-08-24",
      "totalAmountPaid": {
        "currencyCode": "string",
        "value": 0
      },
      "vendorName": "string"
    },
    "cliqbookPaymentId": 0,
    "cliqbookPaymentMethod": "string",
    "hotelTrip": {
      "calculatedDailyRate": 0,
      "endDate": "2019-08-24",
      "numberOfNights": 0,
      "numberOfRooms": 0,
      "startDate": "2019-08-24",
      "totalAmountPaid": {
        "currencyCode": "string",
        "value": 0
      },
      "vendorName": "string"
    },
    "merchantCode": "string",
    "rideTrip": {
      "startDate": "2019-08-24",
      "totalAmountPaid": {
        "currencyCode": "string",
        "value": 0
      },
      "vendorName": "string"
    },
    "segmentId": 0,
    "segmentTypeId": "string",
    "startLocationId": "string",
    "tripId": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditCardTransactionId|string|false|none|The unique identifier of the credit card transaction (indexed transactionId) associated with the expense|
|ereceipt|[EReceipt](#schemaereceipt)|false|none|EReceipt information for the expense. Please refer to the 'EReceipt' object for more information|
|expenseAttendees|[ExpenseAttendees](#schemaexpenseattendees)|false|none|The attendee details associated with the smart expense. Please refer to the 'ExpenseAttendees' object for more information|
|isAutoCreated|boolean|false|none|Whether this expense is auto created. This element only applies to POST expense request. Default value: false|
|personalCardTransactionId|string|false|none|The unique identifier of the personal card transaction associated with the expense|
|quickExpenseId|string|false|none|The unique identifier of the mobile expense associated with the expense. When 'quickExpenseId' is specified, 'exchangeRate.value' field value will be ignored and it's value will be read from exchange rate currency service but 'exchangeRate.operation' will still be honored|
|trip|[Trip](#schematrip)|false|none|Trip data associated with the expense. Please refer to the 'Trip' object for more information|

<h2 id="tocS_ValidationError">ValidationError</h2>

<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "id": "string",
  "message": "string",
  "source": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The id of the validation error|
|message|string|false|none|The detailed message of the validation error|
|source|string|false|none|The type of validation which failed|

<h2 id="tocS_ExpenseTax">ExpenseTax</h2>

<a id="schemaexpensetax"></a>
<a id="schema_ExpenseTax"></a>
<a id="tocSexpensetax"></a>
<a id="tocsexpensetax"></a>

```json
{
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "reclaimCode": "string",
  "reclaimTransactionAmount": 0,
  "taxAuthorityId": "string",
  "taxAuthorityName": "string",
  "taxCode": "string",
  "taxFormId": "string",
  "taxLabel": "string",
  "taxRateTypeId": "string",
  "taxRateTypeName": "string",
  "taxReclaimConfigurationId": "string",
  "taxTransactionAmount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customData|[[CustomData](#schemacustomdata)]|false|none|This is a set of data that the custom fields contain for the resource based on the configuration. This set might be empty if no custom fields are configured|
|reclaimCode|string|false|none|The tax reclaim code. Maximum length: 20 characters|
|reclaimTransactionAmount|number(double)|false|none|The tax reclaim transaction amount|
|taxAuthorityId|string|true|none|The unique identifier of the tax authority|
|taxAuthorityName|string|false|none|The name of the tax authority|
|taxCode|string|false|none|The tax code. Maximum length: 20 characters|
|taxFormId|string|false|none|The unique identifier of the tax form associated with the expense|
|taxLabel|string|false|none|The localized label of the tax authority|
|taxRateTypeId|string|false|none|The unique identifier of the tax rate type id|
|taxRateTypeName|string|false|none|The name of the tax rate type|
|taxReclaimConfigurationId|string|false|none|The unique identifier of the tax reclaim configuration id|
|taxTransactionAmount|number(double)|false|none|The tax transaction amount|

<h2 id="tocS_Mileage">Mileage</h2>

<a id="schemamileage"></a>
<a id="schema_Mileage"></a>
<a id="tocSmileage"></a>
<a id="tocsmileage"></a>

```json
{
  "hasCaravanAttached": true,
  "hasDogIncluded": true,
  "hasForestOrConstructionSiteRoadInRoute": true,
  "hasForestRoadInRoute": true,
  "hasMachinery": true,
  "hasMobileCanteenOrHeavyLoadAttached": true,
  "hasTrailerAttached": true,
  "isMarkedAsHigherRate": true,
  "odometerEnd": 0,
  "odometerStart": 0,
  "passengerCount": 0,
  "personalDistance": 0,
  "routeId": "string",
  "totalDistance": 0,
  "vehicleId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasCaravanAttached|boolean|false|none|Whether the mileage expense has caravan attached to the car. Default value: false|
|hasDogIncluded|boolean|false|none|Whether the mileage expense includes a dog for work purposes. Default value: false|
|hasForestOrConstructionSiteRoadInRoute|boolean|false|none|Whether the mileage route is via a forest road or construction site road. Default value: false|
|hasForestRoadInRoute|boolean|false|none|Whether the mileage route has forest road. Default value: false|
|hasMachinery|boolean|false|none|Whether machines or equipment are transported in the car for this mileage expenses. Default value: false|
|hasMobileCanteenOrHeavyLoadAttached|boolean|false|none|Whether the mileage expense has mobile canteen or is transporting a heavy load attached to the car. Default value: false|
|hasTrailerAttached|boolean|false|none|Whether the mileage expense has trailer attached to the car. Default value: false|
|isMarkedAsHigherRate|boolean|false|none|Whether a higher rate should be applied to the mileage expense. Default value: false|
|odometerEnd|integer(int32)|false|none|The odometer reading at the end of the journey|
|odometerStart|integer(int32)|false|none|The odometer reading at the start of the journey|
|passengerCount|integer(int32)|false|none|The number of passengers in the vehicle during the journey|
|personalDistance|integer(int32)|false|none|The portion of the journey attributed to personal use. Default value: 0|
|routeId|string|false|none|The unique identifier of the route for this journey|
|totalDistance|integer(int32)|true|none|The total distance for this journey|
|vehicleId|string|true|none|The unique identifier for the vehicle used for this journey|

<h2 id="tocS_ExpenseType">ExpenseType</h2>

<a id="schemaexpensetype"></a>
<a id="schema_ExpenseType"></a>
<a id="tocSexpensetype"></a>
<a id="tocsexpensetype"></a>

```json
{
  "code": "string",
  "id": "string",
  "isDeleted": true,
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The code of the expense type|
|id|string|true|none|The unique identifier of the expense type. Maximum length: 5 characters. Example: 'BRKFT'|
|isDeleted|boolean|false|none|Whether the expense type returned is deleted or not.|
|name|string|false|none|The name of the expense type (localized as per accept-language header)|

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
  "isTemplated": true,
  "media": "string",
  "method": "string",
  "rel": "string",
  "title": "string",
  "type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deprecation|string|false|none|none|
|href|string|true|none|The URL of the related HATEOAS link that you can use for subsequent calls|
|hreflang|string|false|none|none|
|isTemplated|boolean|true|none|Whether the href is parameterized|
|media|string|false|none|none|
|method|string|true|none|The HTTP method required for the related call|
|rel|string|true|none|The link relationship that describes how the href relates to the API call|
|title|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_UpdateReport">UpdateReport</h2>

<a id="schemaupdatereport"></a>
<a id="schema_UpdateReport"></a>
<a id="tocSupdatereport"></a>
<a id="tocsupdatereport"></a>

```json
{
  "businessPurpose": "string",
  "comment": "string",
  "country": "string",
  "countryCode": "string",
  "countrySubDivisionCode": "string",
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "endDate": "2019-08-24",
  "isCopyDownInherited": true,
  "isPaperReceiptsReceived": true,
  "name": "string",
  "policy": "string",
  "policyId": "string",
  "redirectFund": {
    "amount": {
      "currencyCode": "string",
      "value": 0
    },
    "creditCardId": "string"
  },
  "reportDate": "2019-08-24",
  "reportSource": "EA",
  "startDate": "2019-08-24"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessPurpose|string|false|none|The text input for the business purpose by the user|
|comment|string|false|none|The expense report comment added by the user|
|country|string|false|none|The country name associated with the report (localized as per accept-language header)|
|countryCode|string|false|none|The location country ISO 3166-1 code (https://en.wikipedia.org/wiki/ISO_3166-1)|
|countrySubDivisionCode|string|false|none|The location country sub division ISO 3166-2 code (https://en.wikipedia.org/wiki/ISO_3166-2)|
|customData|[[CustomData](#schemacustomdata)]|false|none|This is a set of data that the custom fields contain for the resource based on the configuration. This set might be empty if no custom fields are configured|
|endDate|string(date)|false|none|The end date (ISO-8601) of the report as used for trip-based reporting (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD|
|isCopyDownInherited|boolean|false|none|If this flag is set to true, any change in the report header fields will be copied down to expenses, itemizations and allocations, as per the configuration. Usage of this flag should be deliberate as data corruption could result.|
|isPaperReceiptsReceived|boolean|false|none|Whether paper receipts have been received for the report|
|name|string|false|none|The expense report name input by the user|
|policy|string|false|none|The policy name to which the report adheres to|
|policyId|string|false|none|The unique identifier of the policy that applies to this report|
|redirectFund|[RedirectFund](#schemaredirectfund)|false|none|Funds redirected to IBCP card|
|reportDate|string(date)|false|none|The date (ISO-8601) assigned to the report by the user (https://en.wikipedia.org/wiki/ISO_8601).  Format: YYYY-MM-DD|
|reportSource|string|true|none|The source of the report. Possible values: EA - Expense Assistant, MOB - Mobile, OTHER - Unknown, SE - Smart Expense, TR - Travel Request, UI - Web UI|
|startDate|string(date)|false|none|The start date (ISO-8601) of the report as used for trip-based reporting (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD|

#### Enumerated Values

|Property|Value|
|---|---|
|reportSource|EA|
|reportSource|MOB|
|reportSource|OTHER|
|reportSource|SE|
|reportSource|TR|
|reportSource|UI|

<h2 id="tocS_ExpenseSourceIdentifiers">ExpenseSourceIdentifiers</h2>

<a id="schemaexpensesourceidentifiers"></a>
<a id="schema_ExpenseSourceIdentifiers"></a>
<a id="tocSexpensesourceidentifiers"></a>
<a id="tocsexpensesourceidentifiers"></a>

```json
{
  "creditCardTransactionId": "string",
  "ereceiptId": "string",
  "expenseCaptureImageId": "string",
  "jptRouteId": "string",
  "personalCardTransactionId": "string",
  "quickExpenseId": "string",
  "segmentId": 0,
  "segmentTypeId": "string",
  "tripId": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditCardTransactionId|string|false|none|The unique identifier of the credit card transaction (indexed transactionId) associated with the expense|
|ereceiptId|string|false|none|none|
|expenseCaptureImageId|string|false|none|The unique identifier of the expense capture image associated with the expense|
|jptRouteId|string|false|none|The unique identifier to identify a Japan rail route|
|personalCardTransactionId|string|false|none|The unique identifier of the personal card transaction associated with the expense|
|quickExpenseId|string|false|none|The unique identifier of the mobile expense associated with the expense|
|segmentId|integer(int64)|false|none|The unique identifier of the segment associated with the expense|
|segmentTypeId|string|false|none|Segment type id associated with the trip. Possible values: AIRFR - Air Ticket, AIRSU - Air Subscription, CARRT - Car Rental, DININ - Dining, EVENT - Event, HOTEL - Hotel Reservation, INSUR - Insurance, LIMOF - Limousine Reservation, MISC - Miscellaneous, PARKG - Parking Fee, RAILF - Train Ticket, RAISU - Train Subscription, TAXIF - Taxi Fare, VISA - Visa|
|tripId|integer(int64)|false|none|The unique identifier of the trip id associated with the expense|

<h2 id="tocS_CustomData">CustomData</h2>

<a id="schemacustomdata"></a>
<a id="schema_CustomData"></a>
<a id="tocScustomdata"></a>
<a id="tocscustomdata"></a>

```json
{
  "id": "string",
  "isValid": true,
  "value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the custom field e.g. 'custom1', 'orgUnit1'|
|isValid|boolean|false|none|Whether the value returned is valid or not. This value is returned for custom fields of all data types and is specifically evaluated for list items to represent the current status. Default value: true|
|value|string|false|none|The value of the custom field. This field can have values for all the supported data types such as 'text', 'integer', 'boolean' and 'listItemId'. Maximum length: 48 characters|

<h2 id="tocS_EReceipt">EReceipt</h2>

<a id="schemaereceipt"></a>
<a id="schema_EReceipt"></a>
<a id="tocSereceipt"></a>
<a id="tocsereceipt"></a>

```json
{
  "carEReceipt": {
    "calculatedDailyRate": 0,
    "carClass": "string",
    "currencyCode": "string",
    "endDate": "2019-08-24",
    "fuelServiceCharge": 0,
    "numberOfRentalDays": 0,
    "startDate": "2019-08-24",
    "unitsDriven": 0,
    "vendorName": "string"
  },
  "hotelEReceipt": {
    "calculatedDailyRate": 0,
    "endDate": "2019-08-24",
    "locationId": "string",
    "startDate": "2019-08-24",
    "totalAmountPaid": {
      "currencyCode": "string",
      "value": 0
    },
    "vendorName": "string"
  },
  "id": "string",
  "imageId": "string",
  "templateURL": "string",
  "type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carEReceipt|[CarEReceipt](#schemacarereceipt)|false|none|The eReceipt car data. Please refer to the 'CarEReceipt' object for more information|
|hotelEReceipt|[HotelEReceipt](#schemahotelereceipt)|false|none|The eReceipt hotel data. Please refer to the 'HotelEReceipt' object for more information|
|id|string|true|none|The unique identifier of the eReceipt with the expense|
|imageId|string|false|none|The unique identifier of the eReceipt image associated with the expense|
|templateURL|string|false|none|The URL of the eReceipt template. Maximum length: 512 characters|
|type|string|true|none|The type of eReceipt associated with the expense. Possible values: 'AIR', 'CAR', 'GASXX', 'GENERAL', 'GRTRN', 'HOTEL', 'JPT', 'MEALS', 'OFFIC', 'PRKNG', 'RAIL', 'RIDE', 'SHIPG', 'TELEC'|

<h2 id="tocS_Trip">Trip</h2>

<a id="schematrip"></a>
<a id="schema_Trip"></a>
<a id="tocStrip"></a>
<a id="tocstrip"></a>

```json
{
  "airTrip": {
    "airlineName": "string",
    "endDate": "2019-08-24",
    "numberOfTravelDays": 0,
    "startDate": "2019-08-24",
    "ticketType": "string",
    "totalAmountPaid": {
      "currencyCode": "string",
      "value": 0
    }
  },
  "bookingOrigin": "string",
  "bookingSource": "string",
  "carTrip": {
    "calculatedDailyRate": 0,
    "carClass": "string",
    "endDate": "2019-08-24",
    "numberOfCars": 0,
    "numberOfRentalDays": 0,
    "startDate": "2019-08-24",
    "totalAmountPaid": {
      "currencyCode": "string",
      "value": 0
    },
    "vendorName": "string"
  },
  "cliqbookPaymentId": 0,
  "cliqbookPaymentMethod": "string",
  "hotelTrip": {
    "calculatedDailyRate": 0,
    "endDate": "2019-08-24",
    "numberOfNights": 0,
    "numberOfRooms": 0,
    "startDate": "2019-08-24",
    "totalAmountPaid": {
      "currencyCode": "string",
      "value": 0
    },
    "vendorName": "string"
  },
  "merchantCode": "string",
  "rideTrip": {
    "startDate": "2019-08-24",
    "totalAmountPaid": {
      "currencyCode": "string",
      "value": 0
    },
    "vendorName": "string"
  },
  "segmentId": 0,
  "segmentTypeId": "string",
  "startLocationId": "string",
  "tripId": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airTrip|[AirTrip](#schemaairtrip)|false|none|Air trip data associated with the expense. Please refer to the 'AirTrip' object for more information|
|bookingOrigin|string|false|none|Booking origin of the trip. Possible values: AETM - Amadeus E-Travel, CLIQ - Concur Travel, PANM - Open Booking, TRPT - TripIt, TSUP - Travel Supplier|
|bookingSource|string|false|none|Booking source of the trip. Maximum length: 48 characters. Examples: 'Expedia', 'Travelocity', 'Manual'|
|carTrip|[CarTrip](#schemacartrip)|false|none|Car trip data associated with the expense. Please refer to the 'CarTrip' object for more information|
|cliqbookPaymentId|integer(int32)|false|none|Cliqbook payment id associated with the trip|
|cliqbookPaymentMethod|string|false|none|Cliqbook payment method associated with the trip. Possible values: 'GHOST_CARD' or 'FLGHT_PASS'|
|hotelTrip|[HotelTrip](#schemahoteltrip)|false|none|Hotel trip data associated with the expense. Please refer to the 'HotelTrip' object for more information|
|merchantCode|string|false|none|Merchant code associated with the trip. Maximum length: 4 characters|
|rideTrip|[RideTrip](#schemaridetrip)|false|none|Ride or Taxi trip data associated with the expense. Please refer to the 'RideTrip' object for more information|
|segmentId|integer(int64)|true|none|The unique identifier of the segment associated with the expense|
|segmentTypeId|string|true|none|Segment type id associated with the trip. Possible values: AIRFR - Air Ticket, AIRSU - Air Subscription, CARRT - Car Rental, DININ - Dining, EVENT - Event, HOTEL - Hotel Reservation, INSUR - Insurance, LIMOF - Limousine Reservation, MISC - Miscellaneous, PARKG - Parking Fee, RAILF - Train Ticket, RAISU - Train Subscription, TAXIF - Taxi Fare, VISA - Visa|
|startLocationId|string|false|none|The unique identifier of the start location associated with the trip|
|tripId|integer(int64)|true|none|The unique identifier of the trip id associated with the expense|

<h2 id="tocS_ReportExpenseDetail">ReportExpenseDetail</h2>

<a id="schemareportexpensedetail"></a>
<a id="schema_ReportExpenseDetail"></a>
<a id="tocSreportexpensedetail"></a>
<a id="tocsreportexpensedetail"></a>

```json
{
  "allocationSetId": "string",
  "allocationState": "string",
  "approvedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "approverAdjustedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "attendeeCount": 0,
  "authorizationRequestExpenseId": "string",
  "budgetAccrualDate": "2019-08-24",
  "businessPurpose": "string",
  "claimedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "ereceiptImageId": "string",
  "exchangeRate": {
    "operation": "string",
    "value": 0
  },
  "expenseId": "string",
  "expenseSourceIdentifiers": {
    "creditCardTransactionId": "string",
    "ereceiptId": "string",
    "expenseCaptureImageId": "string",
    "jptRouteId": "string",
    "personalCardTransactionId": "string",
    "quickExpenseId": "string",
    "segmentId": 0,
    "segmentTypeId": "string",
    "tripId": 0
  },
  "expenseTaxSummary": {
    "netAdjustedTaxAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "netReclaimAdjustedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "netReclaimAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "netTaxAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "totalReclaimAdjustedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "totalReclaimPostedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "totalTaxAdjustedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "totalTaxPostedAmount": {
      "currencyCode": "string",
      "value": 0
    },
    "vatTaxTotal": {
      "currencyCode": "string",
      "value": 0
    }
  },
  "expenseType": {
    "code": "string",
    "id": "string",
    "isDeleted": true,
    "name": "string"
  },
  "hasBlockingExceptions": true,
  "hasExceptions": true,
  "hasMissingReceiptDeclaration": true,
  "imageCertificationStatus": "string",
  "isAutoCreated": true,
  "isExcludedFromCashAdvanceByUser": true,
  "isExpenseBillable": true,
  "isExpenseRejected": true,
  "isImageRequired": true,
  "isPaperReceiptReceived": true,
  "isPaperReceiptRequired": true,
  "isPersonalExpense": true,
  "jptRouteId": "string",
  "links": [
    {
      "deprecation": "string",
      "href": "string",
      "hreflang": "string",
      "isTemplated": true,
      "media": "string",
      "method": "string",
      "rel": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "id": "string",
    "name": "string"
  },
  "merchantTaxId": "string",
  "mileage": {
    "hasCaravanAttached": true,
    "hasDogIncluded": true,
    "hasForestOrConstructionSiteRoadInRoute": true,
    "hasForestRoadInRoute": true,
    "hasMachinery": true,
    "hasMobileCanteenOrHeavyLoadAttached": true,
    "hasTrailerAttached": true,
    "isMarkedAsHigherRate": true,
    "odometerEnd": 0,
    "odometerStart": 0,
    "passengerCount": 0,
    "personalDistance": 0,
    "routeId": "string",
    "totalDistance": 0,
    "vehicleId": "string"
  },
  "parentExpenseId": "string",
  "paymentType": {
    "code": "string",
    "id": "string",
    "name": "string"
  },
  "postedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "receiptImageId": "string",
  "receiptType": {
    "id": "string",
    "status": "string"
  },
  "taxRateLocation": "FOREIGN",
  "transactionAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "transactionDate": "2019-08-24",
  "travel": {
    "airlineFeeTypeCode": "string",
    "airlineFeeTypeName": "string",
    "airlineServiceClassCode": "string",
    "airlineServiceClassName": "string",
    "carRentalDays": 0,
    "endLocation": "string",
    "hotelCheckinDate": "2019-08-24",
    "hotelCheckoutDate": "2019-08-24",
    "startLocation": "string",
    "ticketNumber": "string"
  },
  "travelAllowance": {
    "dailyLimitAmount": 0,
    "dailyTravelAllowanceId": "string",
    "isExpensePartOfTravelAllowance": true
  },
  "vendor": {
    "description": "string",
    "id": "string",
    "name": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocationSetId|string|false|none|The identifier of the Allocation set associated with the expense. Allocations which belong to the same set were created at the same time.|
|allocationState|string|true|none|Allocation state for the expense. Possible values: 'FULLY_ALLOCATED', 'NOT_ALLOCATED', 'PARTIALLY_ALLOCATED'|
|approvedAmount|[Amount](#schemaamount)|false|none|The approved amount of the expense, in the report currency|
|approverAdjustedAmount|[Amount](#schemaamount)|false|none|The total amount adjusted for the expense by the approver|
|attendeeCount|integer(int32)|false|none|The total number of attendees associated with the expense|
|authorizationRequestExpenseId|string|false|none|The authorization request expense id associated with the expense|
|budgetAccrualDate|string(date)|false|none|The budget accrual date (ISO-8601) of the expense (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD|
|businessPurpose|string|false|none|The text input for the business purpose by the user|
|claimedAmount|[Amount](#schemaamount)|false|none|The total non-personal amount claimed for reimbursement for the expense|
|customData|[[CustomData](#schemacustomdata)]|false|none|This is a set of data that the custom fields contain for the expense based on the configuration. This set might be empty if no custom fields are configured|
|ereceiptImageId|string|false|none|The unique identifier of the eReceipt image associated with the expense|
|exchangeRate|[ExchangeRate](#schemaexchangerate)|true|none|Exchange rate data for the expense. Please refer to the 'ExchangeRate' object for more information|
|expenseId|string|true|none|The unique identifier for the expense|
|expenseSourceIdentifiers|[ExpenseSourceIdentifiers](#schemaexpensesourceidentifiers)|false|none|The list of expense sources associated with the expense|
|expenseTaxSummary|[ExpenseTaxSummary](#schemaexpensetaxsummary)|false|none|Tax information for the expense. Please refer to the 'ExpenseTaxSummary' object for more information|
|expenseType|[ExpenseType](#schemaexpensetype)|true|none|The expense type information for the expense. Please refer to the 'ExpenseType' object for more information|
|hasBlockingExceptions|boolean|true|none|Whether the expense has any exceptions that blocks it from being submitted|
|hasExceptions|boolean|true|none|Whether the expense has any exceptions|
|hasMissingReceiptDeclaration|boolean|true|none|Whether the expense has an affidavit declaration for missing receipt|
|imageCertificationStatus|string|false|none|The final status of the receipt image associated with the expense. Possible values: Refer [Receipts Status V4 API](https://github.concur.com/receipts/receipt-service/wiki/GRDC-API-Docs#possible-digitizationstatus-codes)|
|isAutoCreated|boolean|true|none|Whether the expense is auto created|
|isExcludedFromCashAdvanceByUser|boolean|true|none|Whether the user has excluded the expense from cash advance|
|isExpenseBillable|boolean|true|none|Whether the expense is billable|
|isExpenseRejected|boolean|true|none|Whether the approver or processor has rejected this expense in the report. If this is true then this expense will be sent back to the report submitted in an addendum (split) report|
|isImageRequired|boolean|true|none|Whether the image is required for the expense|
|isPaperReceiptReceived|boolean|true|none|Whether the paper receipt was received for the expense|
|isPaperReceiptRequired|boolean|true|none|Whether the paper receipt is required for the expense to be submitted|
|isPersonalExpense|boolean|true|none|Whether the expense is marked as personal (that is, non-reimbursable) by the user|
|jptRouteId|string|false|none|The unique route ID to identify a Japan rail route|
|links|[[Link](#schemalink)]|false|none|Resource links related to this call|
|location|[Location](#schemalocation)|false|none|The location information of the expense. Please refer to the 'Location' object for more information|
|merchantTaxId|string|false|none|Merchant tax id for the expense|
|mileage|[Mileage](#schemamileage)|false|none|The mileage data associated with the expense. Please refer to the 'Mileage' object for more information|
|parentExpenseId|string|false|none|Expense Id of the parent expense|
|paymentType|[PaymentType](#schemapaymenttype)|true|none|The payment type information for the expense. Please refer to the 'PaymentType' object for more information|
|postedAmount|[Amount](#schemaamount)|true|none|The amount of the expense, in the report currency|
|receiptImageId|string|false|none|The unique identifier of the image associated with the expense|
|receiptType|[ReceiptType](#schemareceipttype)|false|none|Receipt type for the expense. Please refer to the 'ReceiptType' object for more information|
|taxRateLocation|string|true|none|Transaction location relative to the employee's home location as defined by their user profile. Possible values: FOREIGN - The expense transaction took place in foreign currency, HOME - The expense transaction took place in the reimbursement currency, OUT_OF_PROVINCE - The expense transaction took place outside the state jurisdiction. Default value: HOME|
|transactionAmount|[Amount](#schemaamount)|true|none|The amount of the expense, in the transaction currency paid to the vendor|
|transactionDate|string(date)|false|none|The transaction date (ISO-8601) of the expense (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD|
|travel|[Travel](#schematravel)|false|none|The travel data associated with the expense. Please refer to the 'Travel' object for more information|
|travelAllowance|[TravelAllowance](#schematravelallowance)|false|none|The travel allowance data associated with the expense. Please refer to the 'TravelAllowance' object for more information|
|vendor|[Vendor](#schemavendor)|false|none|The vendor information for the expense. Please refer to the 'Vendor' object for more information|

#### Enumerated Values

|Property|Value|
|---|---|
|taxRateLocation|FOREIGN|
|taxRateLocation|HOME|
|taxRateLocation|OUT_OF_PROVINCE|

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
|currencyCode|string|true|none|The 3-letter ISO 4217 currency code for the expense report currency, based on the user's assigned reimbursement currency when the report was created. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona|
|value|number(double)|true|none|The amount in the defined currency|

<h2 id="tocS_CarEReceipt">CarEReceipt</h2>

<a id="schemacarereceipt"></a>
<a id="schema_CarEReceipt"></a>
<a id="tocScarereceipt"></a>
<a id="tocscarereceipt"></a>

```json
{
  "calculatedDailyRate": 0,
  "carClass": "string",
  "currencyCode": "string",
  "endDate": "2019-08-24",
  "fuelServiceCharge": 0,
  "numberOfRentalDays": 0,
  "startDate": "2019-08-24",
  "unitsDriven": 0,
  "vendorName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculatedDailyRate|number(double)|false|none|The calculated car rental daily rate|
|carClass|string|false|none|The car class. Maximum length: 4 characters. Examples: 'IDAD', 'ECMZ', 'PCAV', 'IGDV'|
|currencyCode|string|false|none|The 3-letter ISO 4217 currency code. Examples: USD - US dollars, BRL - Brazilian real, CAD - Canadian dollar|
|endDate|string(date)|false|none|The car rental end date(ISO-8601)(https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD|
|fuelServiceCharge|number(double)|false|none|The fuel service charge. Minimum value: 0|
|numberOfRentalDays|integer(int32)|false|none|The number of car rental calculated days. Minimum value: 0|
|startDate|string(date)|false|none|The car rental start date (ISO-8601) (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD .|
|unitsDriven|integer(int32)|false|none|The total units driven. Minimum value: 0|
|vendorName|string|false|none|The name of the car vendor. Maximum length: 255 characters. Example: 'ABC Rent A Car'|

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
      "id": "string",
      "message": "string",
      "source": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorId|string|false|none|The unique identifier of the error associated with the response or is it error response itself|
|errorMessage|string|true|none|The detailed error message|
|httpStatus|string|true|none|The http response code and phrase for the response|
|path|string|true|none|The URI of the attempted request|
|timestamp|string(date-time)|true|none|The time when the error was captured|
|validationErrors|[[ValidationError](#schemavalidationerror)]|false|none|The validation error messages|

<h2 id="tocS_HotelTrip">HotelTrip</h2>

<a id="schemahoteltrip"></a>
<a id="schema_HotelTrip"></a>
<a id="tocShoteltrip"></a>
<a id="tocshoteltrip"></a>

```json
{
  "calculatedDailyRate": 0,
  "endDate": "2019-08-24",
  "numberOfNights": 0,
  "numberOfRooms": 0,
  "startDate": "2019-08-24",
  "totalAmountPaid": {
    "currencyCode": "string",
    "value": 0
  },
  "vendorName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculatedDailyRate|number(double)|false|none|The calculated hotel daily rate|
|endDate|string(date)|false|none|The hotel checkout date (ISO-8601) (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD .|
|numberOfNights|integer(int32)|false|none|The number of nights. Minimum value: 1|
|numberOfRooms|integer(int32)|false|none|The number of hotel rooms. Minimum value: 1|
|startDate|string(date)|false|none|The hotel checkin date (ISO-8601) (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD .|
|totalAmountPaid|[Amount](#schemaamount)|false|none|The total amount paid|
|vendorName|string|false|none|The name of the hotel vendor. Maximum length: 255 characters. Examples: 'Hilton', 'Four Points by Sheraton, Seattle'|

<h2 id="tocS_AirTrip">AirTrip</h2>

<a id="schemaairtrip"></a>
<a id="schema_AirTrip"></a>
<a id="tocSairtrip"></a>
<a id="tocsairtrip"></a>

```json
{
  "airlineName": "string",
  "endDate": "2019-08-24",
  "numberOfTravelDays": 0,
  "startDate": "2019-08-24",
  "ticketType": "string",
  "totalAmountPaid": {
    "currencyCode": "string",
    "value": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airlineName|string|false|none|The name of the airline vendor. Maximum length: 255 characters. Example: 'Alaska Airlines'|
|endDate|string(date)|false|none|The last travel date or the travel end date(ISO-8601) (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD .|
|numberOfTravelDays|integer(int32)|false|none|The number of days of travel. Minimum value: 1|
|startDate|string(date)|false|none|The first travel date or the travel start date (ISO-8601) (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD .|
|ticketType|string|false|none|The airline class of service. Maximum length: 10 characters, Example: 'Economy'|
|totalAmountPaid|[Amount](#schemaamount)|false|none|The total amount paid|

<h2 id="tocS_Tax">Tax</h2>

<a id="schematax"></a>
<a id="schema_Tax"></a>
<a id="tocStax"></a>
<a id="tocstax"></a>

```json
{
  "expenseTax1": {
    "customData": [
      {
        "id": "string",
        "isValid": true,
        "value": "string"
      }
    ],
    "reclaimCode": "string",
    "reclaimTransactionAmount": 0,
    "taxAuthorityId": "string",
    "taxAuthorityName": "string",
    "taxCode": "string",
    "taxFormId": "string",
    "taxLabel": "string",
    "taxRateTypeId": "string",
    "taxRateTypeName": "string",
    "taxReclaimConfigurationId": "string",
    "taxTransactionAmount": 0
  },
  "expenseTax2": {
    "customData": [
      {
        "id": "string",
        "isValid": true,
        "value": "string"
      }
    ],
    "reclaimCode": "string",
    "reclaimTransactionAmount": 0,
    "taxAuthorityId": "string",
    "taxAuthorityName": "string",
    "taxCode": "string",
    "taxFormId": "string",
    "taxLabel": "string",
    "taxRateTypeId": "string",
    "taxRateTypeName": "string",
    "taxReclaimConfigurationId": "string",
    "taxTransactionAmount": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expenseTax1|[ExpenseTax](#schemaexpensetax)|true|none|The tax data for the expense. Please refer to the 'ExpenseTax' object for more information|
|expenseTax2|[ExpenseTax](#schemaexpensetax)|false|none|The tax data for the expense. Please refer to the 'ExpenseTax' object for more information|

<h2 id="tocS_UpdateReportExpense">UpdateReportExpense</h2>

<a id="schemaupdatereportexpense"></a>
<a id="schema_UpdateReportExpense"></a>
<a id="tocSupdatereportexpense"></a>
<a id="tocsupdatereportexpense"></a>

```json
{
  "approverAdjustedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "authorizationRequestExpenseId": "string",
  "budgetAccrualDate": "2019-08-24",
  "businessPurpose": "string",
  "comment": "string",
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "exchangeRate": {
    "operation": "string",
    "value": 0
  },
  "expenseSource": "EA",
  "expenseType": {
    "code": "string",
    "id": "string",
    "isDeleted": true,
    "name": "string"
  },
  "hasMissingReceiptDeclaration": true,
  "isCopyDownInherited": true,
  "isExcludedFromCashAdvanceByUser": true,
  "isExpenseBillable": true,
  "isExpenseRejected": true,
  "isPaperReceiptReceived": true,
  "isPersonalExpense": true,
  "jptRouteId": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "id": "string",
    "name": "string"
  },
  "merchantTaxId": "string",
  "mileage": {
    "hasCaravanAttached": true,
    "hasDogIncluded": true,
    "hasForestOrConstructionSiteRoadInRoute": true,
    "hasForestRoadInRoute": true,
    "hasMachinery": true,
    "hasMobileCanteenOrHeavyLoadAttached": true,
    "hasTrailerAttached": true,
    "isMarkedAsHigherRate": true,
    "odometerEnd": 0,
    "odometerStart": 0,
    "passengerCount": 0,
    "personalDistance": 0,
    "routeId": "string",
    "totalDistance": 0,
    "vehicleId": "string"
  },
  "paymentType": {
    "code": "string",
    "id": "string",
    "name": "string"
  },
  "receiptImageId": "string",
  "receiptType": {
    "id": "string",
    "status": "string"
  },
  "smartExpense": {
    "creditCardTransactionId": "string",
    "ereceipt": {
      "carEReceipt": {
        "calculatedDailyRate": 0,
        "carClass": "string",
        "currencyCode": "string",
        "endDate": "2019-08-24",
        "fuelServiceCharge": 0,
        "numberOfRentalDays": 0,
        "startDate": "2019-08-24",
        "unitsDriven": 0,
        "vendorName": "string"
      },
      "hotelEReceipt": {
        "calculatedDailyRate": 0,
        "endDate": "2019-08-24",
        "locationId": "string",
        "startDate": "2019-08-24",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        },
        "vendorName": "string"
      },
      "id": "string",
      "imageId": "string",
      "templateURL": "string",
      "type": "string"
    },
    "expenseAttendees": {
      "expenseAttendeeList": [
        {
          "associatedAttendeeCount": 0,
          "attendeeId": "string",
          "customData": [
            {
              "id": "string",
              "isValid": true,
              "value": "string"
            }
          ],
          "isAmountUserEdited": true,
          "isTraveling": true,
          "transactionAmount": 0,
          "versionNumber": 0
        }
      ],
      "noShowAttendeeCount": 0
    },
    "isAutoCreated": true,
    "personalCardTransactionId": "string",
    "quickExpenseId": "string",
    "trip": {
      "airTrip": {
        "airlineName": "string",
        "endDate": "2019-08-24",
        "numberOfTravelDays": 0,
        "startDate": "2019-08-24",
        "ticketType": "string",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        }
      },
      "bookingOrigin": "string",
      "bookingSource": "string",
      "carTrip": {
        "calculatedDailyRate": 0,
        "carClass": "string",
        "endDate": "2019-08-24",
        "numberOfCars": 0,
        "numberOfRentalDays": 0,
        "startDate": "2019-08-24",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        },
        "vendorName": "string"
      },
      "cliqbookPaymentId": 0,
      "cliqbookPaymentMethod": "string",
      "hotelTrip": {
        "calculatedDailyRate": 0,
        "endDate": "2019-08-24",
        "numberOfNights": 0,
        "numberOfRooms": 0,
        "startDate": "2019-08-24",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        },
        "vendorName": "string"
      },
      "merchantCode": "string",
      "rideTrip": {
        "startDate": "2019-08-24",
        "totalAmountPaid": {
          "currencyCode": "string",
          "value": 0
        },
        "vendorName": "string"
      },
      "segmentId": 0,
      "segmentTypeId": "string",
      "startLocationId": "string",
      "tripId": 0
    }
  },
  "tax": {
    "expenseTax1": {
      "customData": [
        {
          "id": "string",
          "isValid": true,
          "value": "string"
        }
      ],
      "reclaimCode": "string",
      "reclaimTransactionAmount": 0,
      "taxAuthorityId": "string",
      "taxAuthorityName": "string",
      "taxCode": "string",
      "taxFormId": "string",
      "taxLabel": "string",
      "taxRateTypeId": "string",
      "taxRateTypeName": "string",
      "taxReclaimConfigurationId": "string",
      "taxTransactionAmount": 0
    },
    "expenseTax2": {
      "customData": [
        {
          "id": "string",
          "isValid": true,
          "value": "string"
        }
      ],
      "reclaimCode": "string",
      "reclaimTransactionAmount": 0,
      "taxAuthorityId": "string",
      "taxAuthorityName": "string",
      "taxCode": "string",
      "taxFormId": "string",
      "taxLabel": "string",
      "taxRateTypeId": "string",
      "taxRateTypeName": "string",
      "taxReclaimConfigurationId": "string",
      "taxTransactionAmount": 0
    }
  },
  "taxRateLocation": "FOREIGN",
  "transactionAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "transactionDate": "2019-08-24",
  "travel": {
    "airlineFeeTypeCode": "string",
    "airlineFeeTypeName": "string",
    "airlineServiceClassCode": "string",
    "airlineServiceClassName": "string",
    "carRentalDays": 0,
    "endLocation": "string",
    "hotelCheckinDate": "2019-08-24",
    "hotelCheckoutDate": "2019-08-24",
    "startLocation": "string",
    "ticketNumber": "string"
  },
  "travelAllowance": {
    "dailyLimitAmount": 0,
    "dailyTravelAllowanceId": "string",
    "isExpensePartOfTravelAllowance": true
  },
  "vendor": {
    "description": "string",
    "id": "string",
    "name": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approverAdjustedAmount|[Amount](#schemaamount)|false|none|The total amount adjusted for the expense by the approver|
|authorizationRequestExpenseId|string|false|none|The authorization request expense id associated with the expense|
|budgetAccrualDate|string(date)|false|none|The budget accrual date (ISO-8601) of the expense (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD|
|businessPurpose|string|false|none|The text input for the business purpose by the user. Maximum length: 64 characters|
|comment|string|false|none|A comment that describes the expense. Maximum length: 2000 characters|
|customData|[[CustomData](#schemacustomdata)]|false|none|This is a set of data that the custom fields contain for the resource based on the configuration. This set might be empty if no custom fields are configured|
|exchangeRate|[ExchangeRate](#schemaexchangerate)|false|none|The exchange rate data for the expense. Please refer to the 'ExchangeRate' object for more information|
|expenseSource|string|true|none|The source of the expense. Possible values: EA - Expense Assistant, MOB - Mobile, OTHER - Unknown, SE - Smart Expense, TA - Travel Allowance, TR - Travel Request, UI - Web UI|
|expenseType|[ExpenseType](#schemaexpensetype)|false|none|The expense type data for the expense. Please refer to the 'ExpenseType' object for more information|
|hasMissingReceiptDeclaration|boolean|false|none|Whether the expense has an affidavit declaration for missing receipt|
|isCopyDownInherited|boolean|false|none|If this flag is set to true, any change in the report expense fields will be copied down to itemization's and allocations, as per the configuration|
|isExcludedFromCashAdvanceByUser|boolean|false|none|Whether the user has excluded the expense from cash advance|
|isExpenseBillable|boolean|false|none|Whether the expense is billable|
|isExpenseRejected|boolean|false|none|Whether the approver or processor has rejected this expense in the report. If this is true then this expense will be sent back to the report submitted in an addendum (split) report|
|isPaperReceiptReceived|boolean|false|none|Whether paper receipts have been received for the expense.|
|isPersonalExpense|boolean|false|none|Whether the expense is marked as personal (that is, non-reimbursable) by the user|
|jptRouteId|string|false|none|The unique route ID to identify a Japan rail route|
|location|[Location](#schemalocation)|false|none|The location data of the expense. Please refer to the 'Location' object for more information|
|merchantTaxId|string|false|none|The merchant tax id for the expense. Maximum length: 64 characters|
|mileage|[Mileage](#schemamileage)|false|none|The mileage data associated with the expense. Please refer to the 'Mileage' object for more information|
|paymentType|[PaymentType](#schemapaymenttype)|false|none|The payment type data for the expense. Default's to group's default payment type else CASH. Please refer to the 'PaymentType' object for more information|
|receiptImageId|string|false|none|The unique identifier of the image associated with the expense|
|receiptType|[ReceiptType](#schemareceipttype)|false|none|Receipt type for the expense. Please refer to the 'ReceiptType' object for more information|
|smartExpense|[SmartExpense](#schemasmartexpense)|false|none|The smart expense data associated with this expense. Please refer to the 'SmartExpense' object for more information|
|tax|[Tax](#schematax)|false|none|The tax data associated with the expense|
|taxRateLocation|string|false|none|Transaction location relative to the employee's home location as defined by their user profile. Possible values: FOREIGN - The expense transaction took place in foreign currency, HOME - The expense transaction took place in the reimbursement currency, OUT_OF_PROVINCE - The expense transaction took place outside the state jurisdiction|
|transactionAmount|[Amount](#schemaamount)|false|none|The amount of the expense, in the transaction currency paid to the vendor|
|transactionDate|string(date)|false|none|The transaction date (ISO-8601) of the expense (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD|
|travel|[Travel](#schematravel)|false|none|The travel data associated with the expense. Please refer to the 'Travel' object for more information|
|travelAllowance|[TravelAllowance](#schematravelallowance)|false|none|The travel allowance data associated with the expense. Please refer to the 'TarvelAllowance' object for more information|
|vendor|[Vendor](#schemavendor)|false|none|The vendor data for the expense. Please refer to the 'Vendor' object for more information|

#### Enumerated Values

|Property|Value|
|---|---|
|expenseSource|EA|
|expenseSource|MOB|
|expenseSource|OTHER|
|expenseSource|SE|
|expenseSource|TA|
|expenseSource|TR|
|expenseSource|UI|
|taxRateLocation|FOREIGN|
|taxRateLocation|HOME|
|taxRateLocation|OUT_OF_PROVINCE|

<h2 id="tocS_ReportSendBackRequest">ReportSendBackRequest</h2>

<a id="schemareportsendbackrequest"></a>
<a id="schema_ReportSendBackRequest"></a>
<a id="tocSreportsendbackrequest"></a>
<a id="tocsreportsendbackrequest"></a>

```json
{
  "comment": "string",
  "currentProcessInstanceId": "string",
  "currentSequence": 0,
  "reasonCodeId": "string",
  "reportSource": "EA"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|true|none|Comments for sending back the report|
|currentProcessInstanceId|string|false|none|Current workflow process instance ID for validation|
|currentSequence|integer(int32)|false|none|Current workflow process sequence number for validation|
|reasonCodeId|string|false|none|The unique identifier of the Reason Code  only by Processor|
|reportSource|string|false|none|The source of the report. Possible values: EA - Expense Assistant, MOB - Mobile, OTHER - Unknown, SE - Smart Expense, TR - Travel Request, UI - Web UI|

#### Enumerated Values

|Property|Value|
|---|---|
|reportSource|EA|
|reportSource|MOB|
|reportSource|OTHER|
|reportSource|SE|
|reportSource|TR|
|reportSource|UI|

<h2 id="tocS_RedirectFund">RedirectFund</h2>

<a id="schemaredirectfund"></a>
<a id="schema_RedirectFund"></a>
<a id="tocSredirectfund"></a>
<a id="tocsredirectfund"></a>

```json
{
  "amount": {
    "currencyCode": "string",
    "value": 0
  },
  "creditCardId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The value of funds redirected to the IBCP card account|
|creditCardId|string|true|none|The unique identifier of the IBCP card account to which funds need to be redirected|

<h2 id="tocS_ReportAllocationResponse">ReportAllocationResponse</h2>

<a id="schemareportallocationresponse"></a>
<a id="schema_ReportAllocationResponse"></a>
<a id="tocSreportallocationresponse"></a>
<a id="tocsreportallocationresponse"></a>

```json
{
  "accountCode": "string",
  "allocationAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "allocationId": "string",
  "approvedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "claimedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "expenseId": "string",
  "isPercentEdited": true,
  "isSystemAllocation": true,
  "overLimitAccountCode": "string",
  "percentage": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The ledger account code associated with the allocation|
|allocationAmount|[Amount](#schemaamount)|false|none|The amount of the allocation|
|allocationId|string|true|none|The unique identifier of the allocation|
|approvedAmount|[Amount](#schemaamount)|false|none|The pro-rated amount of the allocation approved for reimbursement based on the approved expense amount|
|claimedAmount|[Amount](#schemaamount)|false|none|The amount of the allocation requested for reimbursement|
|customData|[[CustomData](#schemacustomdata)]|false|none|This is a set of data that the custom fields contain for the resource based on the configuration. This set might be empty if no custom fields are configured|
|expenseId|string|true|none|The unique identifier of the expense associated with the allocation|
|isPercentEdited|boolean|true|none|Whether the allocation percent has been edited|
|isSystemAllocation|boolean|true|none|Whether the allocation is a system allocation, usually hidden from the user. If displayed to the user, should be read-only|
|overLimitAccountCode|string|false|none|The ledger account code associated with the allocation if it exceeds a pre-defined threshold, for example, the user’s travel allowance limit|
|percentage|number(double)|true|none|The percentage of the total expense that this allocation represents|

<h2 id="tocS_RideTrip">RideTrip</h2>

<a id="schemaridetrip"></a>
<a id="schema_RideTrip"></a>
<a id="tocSridetrip"></a>
<a id="tocsridetrip"></a>

```json
{
  "startDate": "2019-08-24",
  "totalAmountPaid": {
    "currencyCode": "string",
    "value": 0
  },
  "vendorName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startDate|string(date)|false|none|The start date for the ride (ISO-8601) (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD .|
|totalAmountPaid|[Amount](#schemaamount)|false|none|The total amount paid|
|vendorName|string|false|none|The name of the vendor. Maximum length: 255 characters. Example: 'Yellow Cab'|

<h2 id="tocS_ExchangeRate">ExchangeRate</h2>

<a id="schemaexchangerate"></a>
<a id="schema_ExchangeRate"></a>
<a id="tocSexchangerate"></a>
<a id="tocsexchangerate"></a>

```json
{
  "operation": "string",
  "value": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Exchange rate operation. Possible values: 'MULTIPLY' or 'DIVIDE'|
|value|number(double)|true|none|Exchange rate value|

<h2 id="tocS_ReportDetails">ReportDetails</h2>

<a id="schemareportdetails"></a>
<a id="schema_ReportDetails"></a>
<a id="tocSreportdetails"></a>
<a id="tocsreportdetails"></a>

```json
{
  "allocationFormId": "string",
  "amountCompanyPaid": {
    "currencyCode": "string",
    "value": 0
  },
  "amountDueCompany": {
    "currencyCode": "string",
    "value": 0
  },
  "amountDueCompanyCard": {
    "currencyCode": "string",
    "value": 0
  },
  "amountDueEmployee": {
    "currencyCode": "string",
    "value": 0
  },
  "amountNotApproved": {
    "currencyCode": "string",
    "value": 0
  },
  "analyticsGroupId": "string",
  "approvalStatus": "string",
  "approvalStatusId": "string",
  "approvedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "businessPurpose": "string",
  "canRecall": true,
  "canReopen": true,
  "cardProgramStatementPeriodId": "string",
  "claimedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "concurAuditStatus": "PASS",
  "country": "string",
  "countryCode": "string",
  "countrySubDivisionCode": "string",
  "creationDate": "2019-08-24T14:15:22Z",
  "currency": "string",
  "currencyCode": "string",
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "endDate": "2019-08-24",
  "hierarchyNodeId": "string",
  "isFinancialIntegrationEnabled": true,
  "isPaperReceiptsReceived": true,
  "isReceiptImageAvailable": true,
  "isReceiptImageRequired": true,
  "isReopened": true,
  "ledger": "string",
  "ledgerId": "string",
  "links": [
    {
      "deprecation": "string",
      "href": "string",
      "hreflang": "string",
      "isTemplated": true,
      "media": "string",
      "method": "string",
      "rel": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "name": "string",
  "paymentConfirmedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "paymentStatus": "string",
  "paymentStatusId": "string",
  "personalAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "policy": "string",
  "policyId": "string",
  "redirectFund": {
    "amount": {
      "currencyCode": "string",
      "value": 0
    },
    "creditCardId": "string"
  },
  "reportDate": "2019-08-24",
  "reportFormId": "string",
  "reportId": "string",
  "reportNumber": "string",
  "reportTotal": {
    "currencyCode": "string",
    "value": 0
  },
  "reportType": "'Regular'or'Reconciliation'or'Statement'or'AutoCreated'",
  "reportVersion": 0,
  "startDate": "2019-08-24",
  "submitDate": "2019-08-24T14:15:22Z",
  "userId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocationFormId|string|false|none|The unique identifier of the allocation form|
|amountCompanyPaid|[Amount](#schemaamount)|true|none|The amount paid by the company|
|amountDueCompany|[Amount](#schemaamount)|true|none|The amount that the employee owes the company|
|amountDueCompanyCard|[Amount](#schemaamount)|true|none|The amount that the employee/company owes the corporate card|
|amountDueEmployee|[Amount](#schemaamount)|true|none|The amount that the company owes the employee|
|amountNotApproved|[Amount](#schemaamount)|true|none|The amount that was not approved for the report|
|analyticsGroupId|string|true|none|The unique identifier of the business intelligence hierarchy node|
|approvalStatus|string|true|none|The report’s approval status, in the user’s language|
|approvalStatusId|string|true|none|The unique identifier of the Approval Status|
|approvedAmount|[Amount](#schemaamount)|true|none|The total amount of approved expenses in the report|
|businessPurpose|string|false|none|The text input for the business purpose by the user|
|canRecall|boolean|true|none|Whether the report can be recalled by the current user|
|canReopen|boolean|false|none|Whether the report can be reopened after payment|
|cardProgramStatementPeriodId|string|false|none|The unique identifier of card program statement period on the report|
|claimedAmount|[Amount](#schemaamount)|true|none|The total amount of all non-personal expenses in the report|
|concurAuditStatus|string|true|none|The status of audit for the report|
|country|string|false|none|The country name associated with the report (localized as per accept-language header)|
|countryCode|string|false|none|The report country. Maximum 2 characters. Format: The ISO 3166-1 alpha-2 country code. Example: United States is US|
|countrySubDivisionCode|string|false|none|The location country sub division ISO 3166-2 code (https://en.wikipedia.org/wiki/ISO_3166-2)|
|creationDate|string(date-time)|true|none|The UTC datetime when the user created the report (https://en.wikipedia.org/wiki/ISO_8601).  Format: YYYY-MM-DDTHH:mm:ssZ|
|currency|string|true|none|The currency name for the report (localized as per accept-language header)|
|currencyCode|string|true|none|The 3-letter ISO 4217 currency code (https://en.wikipedia.org/wiki/ISO_4217) for the expense report currency. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong|
|customData|[[CustomData](#schemacustomdata)]|false|none|This is a set of data that the custom fields contain for the report based on the configuration. This set might be empty if no custom fields are configured|
|endDate|string(date)|false|none|The end date (ISO-8601) of the report as used for trip-based reporting (https://en.wikipedia.org/wiki/ISO_8601).  Format: YYYY-MM-DD|
|hierarchyNodeId|string|true|none|The unique identifier of the group hierarchy node for the report resource|
|isFinancialIntegrationEnabled|boolean|true|none|Whether the Financial Integration setting has been enabled for this report|
|isPaperReceiptsReceived|boolean|true|none|Whether paper receipts have been received for the report|
|isReceiptImageAvailable|boolean|true|none|Whether the receipt image is available at the report level|
|isReceiptImageRequired|boolean|true|none|Whether the receipt image is required at the report level|
|isReopened|boolean|false|none|Whether the report is reopened|
|ledger|string|true|none|The ledger name to which the report belongs (localized as per accept-language header)|
|ledgerId|string|true|none|The unique identifier of the Ledger|
|links|[[Link](#schemalink)]|false|none|Resource links related to this call|
|name|string|true|none|The expense report name input by the user|
|paymentConfirmedAmount|[Amount](#schemaamount)|true|none|The amount that was paid on the report|
|paymentStatus|string|true|none|The report's payment status in the user's language|
|paymentStatusId|string|true|none|The unique identifier of the payment status of the report|
|personalAmount|[Amount](#schemaamount)|true|none|The total amount of expenses marked as personal on the report|
|policy|string|true|none|The policy name to which the report adheres (localized as per accept-language header)|
|policyId|string|true|none|The unique identifier of the policy that applies to this report|
|redirectFund|[RedirectFund](#schemaredirectfund)|false|none|Funds redirected to IBCP card|
|reportDate|string(date)|false|none|The date (ISO-8601) assigned to the report by the user (https://en.wikipedia.org/wiki/ISO_8601).  Format: YYYY-MM-DD|
|reportFormId|string|true|none|The unique identifier of the report form|
|reportId|string|true|none|The unique identifier for the report resource|
|reportNumber|string|false|none|User friendly unique identifier for the report|
|reportTotal|[Amount](#schemaamount)|true|none|The total amount on the Report|
|reportType|string|false|none|This value identifies the method used to create the report. Statement refers to company billed statement reports and Auto-created refers to reports created by Expense Assistant.|
|reportVersion|integer(int32)|true|none|The current version of the report|
|startDate|string(date)|false|none|The start date (ISO-8601) of the report as used for trip-based reporting (https://en.wikipedia.org/wiki/ISO_8601).  Format: YYYY-MM-DD|
|submitDate|string(date-time)|false|none|The UTC datetime when the user submitted the report (https://en.wikipedia.org/wiki/ISO_8601).  Format: YYYY-MM-DDTHH:mm:ssZ|
|userId|string|true|none|The unique identifier of the Concur user who is the report owner|

#### Enumerated Values

|Property|Value|
|---|---|
|concurAuditStatus|PASS|
|concurAuditStatus|FAIL|
|concurAuditStatus|NOTR|
|reportType|'Regular'or'Reconciliation'or'Statement'or'AutoCreated'|

<h2 id="tocS_CarTrip">CarTrip</h2>

<a id="schemacartrip"></a>
<a id="schema_CarTrip"></a>
<a id="tocScartrip"></a>
<a id="tocscartrip"></a>

```json
{
  "calculatedDailyRate": 0,
  "carClass": "string",
  "endDate": "2019-08-24",
  "numberOfCars": 0,
  "numberOfRentalDays": 0,
  "startDate": "2019-08-24",
  "totalAmountPaid": {
    "currencyCode": "string",
    "value": 0
  },
  "vendorName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculatedDailyRate|number(double)|false|none|The calculated car rental daily rate|
|carClass|string|false|none|The car class. Maximum length: 10 characters. Examples: 'IDAD', 'ECMZ', 'PCAV', 'IGDV'|
|endDate|string(date)|false|none|The car rental end date (ISO-8601) (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD .|
|numberOfCars|integer(int32)|false|none|The number of cars rented. Minimum value: 1|
|numberOfRentalDays|integer(int32)|false|none|The number of car rental calculated days. Minimum value: 0|
|startDate|string(date)|false|none|The car rental start date (ISO-8601) (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD .|
|totalAmountPaid|[Amount](#schemaamount)|false|none|The total amount paid|
|vendorName|string|false|none|The name of the car vendor. Maximum length: 255 characters. Example: 'ABC Rent A Car'|

<h2 id="tocS_WorkflowTransitionRequest">WorkflowTransitionRequest</h2>

<a id="schemaworkflowtransitionrequest"></a>
<a id="schema_WorkflowTransitionRequest"></a>
<a id="tocSworkflowtransitionrequest"></a>
<a id="tocsworkflowtransitionrequest"></a>

```json
{
  "comment": "string",
  "currentProcessInstanceId": "string",
  "currentSequence": 0,
  "reportSource": "EA",
  "statusId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|Approver Comments|
|currentProcessInstanceId|string|false|none|Current workflow process instance ID for validation|
|currentSequence|integer(int32)|false|none|Current workflow process sequence number for validation|
|reportSource|string|false|none|The source of the report. Possible values: EA - Expense Assistant, MOB - Mobile, OTHER - Unknown, SE - Smart Expense, TR - Travel Request, UI - Web UI|
|statusId|string|false|none|Status that will be assigned to the report by this workflow transition|

#### Enumerated Values

|Property|Value|
|---|---|
|reportSource|EA|
|reportSource|MOB|
|reportSource|OTHER|
|reportSource|SE|
|reportSource|TR|
|reportSource|UI|

<h2 id="tocS_ReceiptType">ReceiptType</h2>

<a id="schemareceipttype"></a>
<a id="schema_ReceiptType"></a>
<a id="tocSreceipttype"></a>
<a id="tocsreceipttype"></a>

```json
{
  "id": "string",
  "status": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the receipt type. Possible values: N - No Receipt, R - Regular Receipt, T - Tax Receipt. Default value: N|
|status|string|false|none|Receipt status (localized as per accept-language header)|

<h2 id="tocS_Allocation">Allocation</h2>

<a id="schemaallocation"></a>
<a id="schema_Allocation"></a>
<a id="tocSallocation"></a>
<a id="tocsallocation"></a>

```json
{
  "accountCode": "string",
  "allocationAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "allocationId": "string",
  "approvedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "claimedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "expenseId": "string",
  "isPercentEdited": true,
  "isSystemAllocation": true,
  "overLimitAccountCode": "string",
  "percentage": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The ledger account code associated with the allocation|
|allocationAmount|[Amount](#schemaamount)|false|none|The amount of the allocation|
|allocationId|string|true|none|The unique identifier of the allocation|
|approvedAmount|[Amount](#schemaamount)|false|none|The pro-rated amount of the allocation approved for reimbursement based on the approved expense amount|
|claimedAmount|[Amount](#schemaamount)|false|none|The amount of the allocation requested for reimbursement|
|customData|[[CustomData](#schemacustomdata)]|false|none|This is a set of data that the custom fields contain for the resource based on the configuration. This set might be empty if no custom fields are configured|
|expenseId|string|true|none|The unique identifier of the expense associated with the allocation|
|isPercentEdited|boolean|false|none|Whether the allocation percent has been edited|
|isSystemAllocation|boolean|true|none|Whether the allocation is a system allocation, usually hidden from the user. If displayed to the user, should be read-only|
|overLimitAccountCode|string|false|none|The ledger account code associated with the allocation if it exceeds a pre-defined threshold, for example, the user’s travel allowance limit|
|percentage|number(double)|true|none|The percentage of the total expense that this allocation represents|

<h2 id="tocS_UpdateReportAllocation">UpdateReportAllocation</h2>

<a id="schemaupdatereportallocation"></a>
<a id="schema_UpdateReportAllocation"></a>
<a id="tocSupdatereportallocation"></a>
<a id="tocsupdatereportallocation"></a>

```json
{
  "allocation": {
    "customData": [
      {
        "id": "string",
        "isValid": true,
        "value": "string"
      }
    ]
  },
  "expenseIds": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocation|[UpdateAllocation](#schemaupdateallocation)|true|none|This is an allocation custom data object to be updated.|
|expenseIds|[string]|true|none|This is an array of unique identifiers of expenses within this report that are being updated|

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
|code|string|false|none|The code of the payment type|
|id|string|true|none|The unique identifier of the Payment type. Maximum length: 4 characters. Example: 'CASH'|
|name|string|false|none|The name of the payment type (localized as per accept-language header)|

<h2 id="tocS_TravelAllowance">TravelAllowance</h2>

<a id="schematravelallowance"></a>
<a id="schema_TravelAllowance"></a>
<a id="tocStravelallowance"></a>
<a id="tocstravelallowance"></a>

```json
{
  "dailyLimitAmount": 0,
  "dailyTravelAllowanceId": "string",
  "isExpensePartOfTravelAllowance": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyLimitAmount|number(double)|false|none|The allowed amount based on government travel allowance rates|
|dailyTravelAllowanceId|string|false|none|The fixed daily travel allowance id associated with the expense. Maximum length: 32 characters|
|isExpensePartOfTravelAllowance|boolean|false|none|Whether the expense is part of travel allowance. Default value: false|

<h2 id="tocS_ExpenseTaxSummary">ExpenseTaxSummary</h2>

<a id="schemaexpensetaxsummary"></a>
<a id="schema_ExpenseTaxSummary"></a>
<a id="tocSexpensetaxsummary"></a>
<a id="tocsexpensetaxsummary"></a>

```json
{
  "netAdjustedTaxAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "netReclaimAdjustedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "netReclaimAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "netTaxAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "totalReclaimAdjustedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "totalReclaimPostedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "totalTaxAdjustedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "totalTaxPostedAmount": {
    "currencyCode": "string",
    "value": 0
  },
  "vatTaxTotal": {
    "currencyCode": "string",
    "value": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|netAdjustedTaxAmount|[Amount](#schemaamount)|false|none|Net adjusted tax amount|
|netReclaimAdjustedAmount|[Amount](#schemaamount)|false|none|Net reclaim adjusted amount|
|netReclaimAmount|[Amount](#schemaamount)|false|none|Net reclaim amount|
|netTaxAmount|[Amount](#schemaamount)|false|none|Net tax amount|
|totalReclaimAdjustedAmount|[Amount](#schemaamount)|false|none|Total reclaim adjusted amount|
|totalReclaimPostedAmount|[Amount](#schemaamount)|false|none|Total reclaim posted amount|
|totalTaxAdjustedAmount|[Amount](#schemaamount)|false|none|Total tax adjusted amount|
|totalTaxPostedAmount|[Amount](#schemaamount)|false|none|Total tax posted amount|
|vatTaxTotal|[Amount](#schemaamount)|false|none|VAT tax total amount|

<h2 id="tocS_ExpenseAttendees">ExpenseAttendees</h2>

<a id="schemaexpenseattendees"></a>
<a id="schema_ExpenseAttendees"></a>
<a id="tocSexpenseattendees"></a>
<a id="tocsexpenseattendees"></a>

```json
{
  "expenseAttendeeList": [
    {
      "associatedAttendeeCount": 0,
      "attendeeId": "string",
      "customData": [
        {
          "id": "string",
          "isValid": true,
          "value": "string"
        }
      ],
      "isAmountUserEdited": true,
      "isTraveling": true,
      "transactionAmount": 0,
      "versionNumber": 0
    }
  ],
  "noShowAttendeeCount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expenseAttendeeList|[[ExpenseAttendee](#schemaexpenseattendee)]|false|none|The list of attendees associated with the expense. Maximum attendees: 500|
|noShowAttendeeCount|integer(int32)|false|none|The number of attendees that were planned but did not show up. Default value: 0|

<h2 id="tocS_UpdateAllocation">UpdateAllocation</h2>

<a id="schemaupdateallocation"></a>
<a id="schema_UpdateAllocation"></a>
<a id="tocSupdateallocation"></a>
<a id="tocsupdateallocation"></a>

```json
{
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customData|[[CustomData](#schemacustomdata)]|false|none|This is a set of data that the custom fields contain for the resource based on the configuration. This set might be empty if no custom fields are configured|

<h2 id="tocS_ExpenseAttendee">ExpenseAttendee</h2>

<a id="schemaexpenseattendee"></a>
<a id="schema_ExpenseAttendee"></a>
<a id="tocSexpenseattendee"></a>
<a id="tocsexpenseattendee"></a>

```json
{
  "associatedAttendeeCount": 0,
  "attendeeId": "string",
  "customData": [
    {
      "id": "string",
      "isValid": true,
      "value": "string"
    }
  ],
  "isAmountUserEdited": true,
  "isTraveling": true,
  "transactionAmount": 0,
  "versionNumber": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedAttendeeCount|integer(int32)|false|none|The count of total attendees. A count greater than 1 means there are unnamed attendees associated with this expense-attendee record. Default value: 1|
|attendeeId|string|true|none|The unique identifier of the associated expense attendee within Concur|
|customData|[[CustomData](#schemacustomdata)]|false|none|The set of data the custom fields contain for the attendee based on the configuration. This set might be empty if no custom fields are configured|
|isAmountUserEdited|boolean|false|none|This field indicates if the amount value for the attendee on this expense was ever manually edited by the end user. Default value: false|
|isTraveling|boolean|false|none|Whether the attendee was traveling when the expense was incurred, used for FBT tax calculations|
|transactionAmount|number(double)|false|none|The portion of the expense transaction amount assigned to this attendee for both individual expense tracking and attendee totals across time periods|
|versionNumber|integer(int32)|false|none|The version number of the attendee. This field value may always be 1, depending on the configuration. Default value: 1|

<h2 id="tocS_Vendor">Vendor</h2>

<a id="schemavendor"></a>
<a id="schema_Vendor"></a>
<a id="tocSvendor"></a>
<a id="tocsvendor"></a>

```json
{
  "description": "string",
  "id": "string",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the vendor. Maximum length: 64 characters|
|id|string|false|none|The unique identifier of the vendor|
|name|string|false|none|The name of the vendor (localized as per accept-language header)|

<h2 id="tocS_Travel">Travel</h2>

<a id="schematravel"></a>
<a id="schema_Travel"></a>
<a id="tocStravel"></a>
<a id="tocstravel"></a>

```json
{
  "airlineFeeTypeCode": "string",
  "airlineFeeTypeName": "string",
  "airlineServiceClassCode": "string",
  "airlineServiceClassName": "string",
  "carRentalDays": 0,
  "endLocation": "string",
  "hotelCheckinDate": "2019-08-24",
  "hotelCheckoutDate": "2019-08-24",
  "startLocation": "string",
  "ticketNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airlineFeeTypeCode|string|false|none|Airline fee type code. Possible values: 'BAGGS', 'BUSIN', 'OBENT', 'ONBRD', 'OTHER', 'PRACC', 'SEATS', 'TKCHG', 'UPGRD'|
|airlineFeeTypeName|string|false|none|The localized airline fee type name|
|airlineServiceClassCode|string|false|none|The airline service class code. Possible values: 'BUSIN', 'COACH', 'FIRST'|
|airlineServiceClassName|string|false|none|The localized airline service class name|
|carRentalDays|integer(int32)|false|none|The number of days car was rented. Minimum value: 0|
|endLocation|string|false|none|Location where the travel ended. Maximum length: 100 characters|
|hotelCheckinDate|string(date)|false|none|The hotel checkin date (ISO-8601) of the expense (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD|
|hotelCheckoutDate|string(date)|false|none|The hotel checkout date (ISO-8601) of the expense (https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD|
|startLocation|string|false|none|Location where the travel started. Maximum length: 100 characters|
|ticketNumber|string|false|none|The ticket number associated with the travel. Maximum length: 32 characters|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The location city|
|countryCode|string|false|none|The location country ISO 3166-1 code (https://en.wikipedia.org/wiki/ISO_3166-1)|
|countrySubDivisionCode|string|false|none|The location country sub division ISO 3166-2 code (https://en.wikipedia.org/wiki/ISO_3166-2)|
|id|string|false|none|The unique identifier of the location. When location id is specified (when creating or updating a resource), other location object fields will be ignored|
|name|string|false|none|The location name (localized as per accept-language header)|

