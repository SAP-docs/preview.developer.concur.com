
<h2 id="travel-allowance-days">Travel Allowance Days v4.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Travel Allowance API fetches all the fixed allowance days in the specified expense report. Clients using this API can determine whether an allowance is a full day or partial day allowance.

Base URLs:

* <a href="https://www.concursolutions.com/api/v4.0">https://www.concursolutions.com/api/v4.0</a>

<h3 id="travel-allowance-days-resources">Resources</h3>

#### get__api_v4_travelallowance_allowancedays_companyUUID_{companyUUID}_contexts_{Context}_{ContextId}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v4.0/api/v4/travelallowance/allowancedays/companyUUID/{companyUUID}/contexts/{Context}/{ContextId} \
  -H 'Accept: application/json' \
  -H 'Authorization: string' \
  -H 'concur-correlationid: string'

```

```http
GET https://www.concursolutions.com/api/v4.0/api/v4/travelallowance/allowancedays/companyUUID/{companyUUID}/contexts/{Context}/{ContextId} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json
Authorization: string
concur-correlationid: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'string',
  'concur-correlationid':'string'
};

fetch('https://www.concursolutions.com/api/v4.0/api/v4/travelallowance/allowancedays/companyUUID/{companyUUID}/contexts/{Context}/{ContextId}',
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
  'Authorization' => 'string',
  'concur-correlationid' => 'string'
}

result = RestClient.get 'https://www.concursolutions.com/api/v4.0/api/v4/travelallowance/allowancedays/companyUUID/{companyUUID}/contexts/{Context}/{ContextId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'string',
  'concur-correlationid': 'string'
}

r = requests.get('https://www.concursolutions.com/api/v4.0/api/v4/travelallowance/allowancedays/companyUUID/{companyUUID}/contexts/{Context}/{ContextId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'string',
    'concur-correlationid' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/v4.0/api/v4/travelallowance/allowancedays/companyUUID/{companyUUID}/contexts/{Context}/{ContextId}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v4.0/api/v4/travelallowance/allowancedays/companyUUID/{companyUUID}/contexts/{Context}/{ContextId}");
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
        "Authorization": []string{"string"},
        "concur-correlationid": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v4.0/api/v4/travelallowance/allowancedays/companyUUID/{companyUUID}/contexts/{Context}/{ContextId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v4/travelallowance/allowancedays/companyUUID/{companyUUID}/contexts/{Context}/{ContextId}`

*Get Details of Travel Allowance Days*

Returns allowance days details along with any exceptions.

<h3 id="get__api_v4_travelallowance_allowancedays_companyuuid_{companyuuid}_contexts_{context}_{contextid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Bearer Token that identifies the caller. This is the Company access token.|
|concur-correlationid|header|string|false|Concur specific custom header used for technical support in the form of a RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace.|
|companyUUID|path|string|true|The company's unique identifier.|
|Context|path|string|true|For expense reports, the value is EXPENSE_REPORT|
|ContextId|path|string|true|For expense reports, this is the reportId of the report.|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "allowanceDate": "2019-08-24",
      "currencyCode": "string",
      "expenseTransactionAmount": 0,
      "expenseTransactionDate": "2019-08-24",
      "expenseTypeCode": "string",
      "fullAllowanceDay": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}
```

<h3 id="get__api_v4_travelallowance_allowancedays_companyuuid_{companyuuid}_contexts_{context}_{contextid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ResourcesOfReportFullAllowanceDayModel](#schemaresourcesofreportfullallowancedaymodel)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Unavailable|None|

<aside class="success">
This operation does not require authentication
</aside>

### Schemas

<h3 id="tocS_ErrorResponse">ErrorResponse</h3>

<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "errors": [
    {}
  ],
  "exception": "string",
  "message": "string",
  "path": "string",
  "timestamp": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|none|
|exception|string|false|none|Type of exception.|
|message|string|false|none|A description of the error.|
|path|string|false|none|The path to the request data which has the error message.|
|timestamp|integer|false|none|Time at which error occurs.|

<h3 id="tocS_Link">Link</h3>

<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "href": "string",
  "rel": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|A URL related to the current resource.|
|rel|string|false|none|The link relation type describes how the current context is related to the target resource.|

<h3 id="tocS_ReportFullAllowanceDayModel">ReportFullAllowanceDayModel</h3>

<a id="schemareportfullallowancedaymodel"></a>
<a id="schema_ReportFullAllowanceDayModel"></a>
<a id="tocSreportfullallowancedaymodel"></a>
<a id="tocsreportfullallowancedaymodel"></a>

```json
{
  "allowanceDate": "2019-08-24",
  "currencyCode": "string",
  "expenseTransactionAmount": 0,
  "expenseTransactionDate": "2019-08-24",
  "expenseTypeCode": "string",
  "fullAllowanceDay": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowanceDate|string(date)|false|none|Travel Allowance Date.|
|currencyCode|string|false|none|The 3-letter ISO 4217 currency code for the expense report currency. The expense report currency is defined as the report creator's default reimbursement currency.|
|expenseTransactionAmount|number|false|none|Expense transaction amount, in the expense entry currency.|
|expenseTransactionDate|string(date)|false|none|Expense transaction date.|
|expenseTypeCode|string|false|none|Expense Code. For example, MEALS for Travel Allowance.|
|fullAllowanceDay|string|false|none|True/False. 'True' means full allowance day and 'False' means partial allowance day.|

<h3 id="tocS_ResourcesOfReportFullAllowanceDayModel">ResourcesOfReportFullAllowanceDayModel</h3>

<a id="schemaresourcesofreportfullallowancedaymodel"></a>
<a id="schema_ResourcesOfReportFullAllowanceDayModel"></a>
<a id="tocSresourcesofreportfullallowancedaymodel"></a>
<a id="tocsresourcesofreportfullallowancedaymodel"></a>

```json
{
  "content": [
    {
      "allowanceDate": "2019-08-24",
      "currencyCode": "string",
      "expenseTransactionAmount": 0,
      "expenseTransactionDate": "2019-08-24",
      "expenseTypeCode": "string",
      "fullAllowanceDay": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[ReportFullAllowanceDayModel](#schemareportfullallowancedaymodel)]|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|

