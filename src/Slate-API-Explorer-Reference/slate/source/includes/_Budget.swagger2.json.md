

<h2 id="budget">Budget v4.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Budget service exposes budget and fiscal year data. Partners and clients may use the service endpoints to read and alter fiscal year, budget, budget adjustment, and budget matching configuration. Summary and detailed balance amounts are also available to read, but may not be altered via the API.

Base URLs:

* <a href="//www.concursolutions.com/">//www.concursolutions.com/</a>

<h2 id="budget-budget-adjustments">Budget Adjustments</h2>

Object defines the adjustments made to a budget header

#### saveAdjustmentsUsingPOST

<a id="opIdsaveAdjustmentsUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /www.concursolutions.com/budget/v4/adjustments?useMonthlyRollingUpdate=true \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /www.concursolutions.com/budget/v4/adjustments?useMonthlyRollingUpdate=true HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '[
  {
    "adjustmentType": "BUDGET_BALANCE",
    "amount": 500,
    "amountType": "BUDGET_AMOUNT",
    "budgetItemName": "Marketing",
    "budgetOwnerEmail": "name@compamy.com",
    "description": "Sample description",
    "fiscalPeriodName": "2018 - Q3",
    "fiscalYearName": 2018,
    "transactionDate": "2018-07-11"
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/adjustments?useMonthlyRollingUpdate=true',
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
  'Accept' => 'application/json'
}

result = RestClient.post '/www.concursolutions.com/budget/v4/adjustments',
  params: {
  'useMonthlyRollingUpdate' => 'boolean'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/www.concursolutions.com/budget/v4/adjustments', params={
  'useMonthlyRollingUpdate': 'true'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/www.concursolutions.com/budget/v4/adjustments', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/adjustments?useMonthlyRollingUpdate=true");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/www.concursolutions.com/budget/v4/adjustments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /budget/v4/adjustments`

*Saves a list of adjustments*

> Body parameter

```json
[
  {
    "adjustmentType": "BUDGET_BALANCE",
    "amount": 500,
    "amountType": "BUDGET_AMOUNT",
    "budgetItemName": "Marketing",
    "budgetOwnerEmail": "name@compamy.com",
    "description": "Sample description",
    "fiscalPeriodName": "2018 - Q3",
    "fiscalYearName": 2018,
    "transactionDate": "2018-07-11"
  }
]
```

<h3 id="saveadjustmentsusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|useMonthlyRollingUpdate|query|boolean|true|Should roll adjustments for months. If true, only one record will be maintained for a budget detail for every amount type for a given month|
|body|body|[BudgetAdjustmentsExternal](#schemabudgetadjustmentsexternal)|false|The adjustments to save|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="saveadjustmentsusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|string|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h2 id="budget-budget-category">Budget Category</h2>

Groups of expense types

#### getBudgetCategoryByEntityIdUsingGET

<a id="opIdgetBudgetCategoryByEntityIdUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /www.concursolutions.com/budget/v4/budgetCategory \
  -H 'Accept: application/json'

```

```http
GET /www.concursolutions.com/budget/v4/budgetCategory HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/budgetCategory',
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

result = RestClient.get '/www.concursolutions.com/budget/v4/budgetCategory',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/www.concursolutions.com/budget/v4/budgetCategory', headers = headers)

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
    $response = $client->request('GET','/www.concursolutions.com/budget/v4/budgetCategory', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/budgetCategory");
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
    req, err := http.NewRequest("GET", "/www.concursolutions.com/budget/v4/budgetCategory", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /budget/v4/budgetCategory`

*Fetches all of the budget categories in the system for an entity.*

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "expenseTypes": [
      {
        "expenseTypeCode": "string",
        "featureTypeCode": "REQUEST",
        "id": "string",
        "name": "string",
        "syncGuid": "string"
      }
    ],
    "id": "string",
    "name": "string",
    "statusType": "OPEN",
    "syncGuid": "string"
  }
]
```

<h3 id="getbudgetcategorybyentityidusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<h3 id="getbudgetcategorybyentityidusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BudgetCategory](#schemabudgetcategory)]|false|none|none|
|» description|string|false|none|none|
|» expenseTypes|[[ExpenseType](#schemaexpensetype)]|true|none|The list of expense types that this budget category matches.|
|»» expenseTypeCode|string|false|none|The alphanumeric code that describes an expense type. Ex: TRAVEL, AC_CATER Any string may be used, but only expense type codes returned by GET /budgetCategory/expenseType will behave properly in the Concur UI.|
|»» featureTypeCode|string|false|none|The type of feature that this expense type applies to, Purchase Request, Payment Request (Invoice), Expense or Travel Authorization|
|»» id|string|false|none|The unique idenifier for the expense type|
|»» name|string|true|none|none|
|»» syncGuid|string|false|none|The unique idenifier for the expense type|
|» id|string|false|none|The unique identifier for the budget category.|
|» name|string|true|none|The name of this budget category.|
|» statusType|string|false|none|The status of this budget category--only open and removed are meaningful for budget category.|
|» syncGuid|string|false|none|The unique identifier for the budget category.|

###### Enumerated Values

|Property|Value|
|---|---|
|featureTypeCode|REQUEST|
|featureTypeCode|TRAVEL|
|featureTypeCode|EXPENSE|
|featureTypeCode|PAYMENT_REQUEST|
|featureTypeCode|PURCHASE_REQUEST|
|featureTypeCode|ADJUSTMENT|
|featureTypeCode|EMPLOYEE|
|statusType|OPEN|
|statusType|CLOSED|
|statusType|REMOVED|
|statusType|MERGED|

<aside class="success">
This operation does not require authentication
</aside>

#### saveBudgetCategoryUsingPOST

<a id="opIdsaveBudgetCategoryUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /www.concursolutions.com/budget/v4/budgetCategory \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /www.concursolutions.com/budget/v4/budgetCategory HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "description": "string",
  "expenseTypes": [
    {
      "expenseTypeCode": "string",
      "featureTypeCode": "REQUEST",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "id": "string",
  "name": "string",
  "statusType": "OPEN",
  "syncGuid": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/budgetCategory',
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
  'Accept' => 'application/json'
}

result = RestClient.post '/www.concursolutions.com/budget/v4/budgetCategory',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/www.concursolutions.com/budget/v4/budgetCategory', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/www.concursolutions.com/budget/v4/budgetCategory', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/budgetCategory");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/www.concursolutions.com/budget/v4/budgetCategory", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /budget/v4/budgetCategory`

*Save budget category. Creates a new budget category if one doesn't exist.*

> Body parameter

```json
{
  "description": "string",
  "expenseTypes": [
    {
      "expenseTypeCode": "string",
      "featureTypeCode": "REQUEST",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "id": "string",
  "name": "string",
  "statusType": "OPEN",
  "syncGuid": "string"
}
```

<h3 id="savebudgetcategoryusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BudgetCategory](#schemabudgetcategory)|true|budgetCategory|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "expenseTypes": [
    {
      "expenseTypeCode": "string",
      "featureTypeCode": "REQUEST",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "id": "string",
  "name": "string",
  "statusType": "OPEN",
  "syncGuid": "string"
}
```

<h3 id="savebudgetcategoryusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[BudgetCategory](#schemabudgetcategory)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="success">
This operation does not require authentication
</aside>

#### getExpenseTypesUsingGET

<a id="opIdgetExpenseTypesUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /www.concursolutions.com/budget/v4/budgetCategory/expenseTypes \
  -H 'Accept: application/json'

```

```http
GET /www.concursolutions.com/budget/v4/budgetCategory/expenseTypes HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/budgetCategory/expenseTypes',
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

result = RestClient.get '/www.concursolutions.com/budget/v4/budgetCategory/expenseTypes',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/www.concursolutions.com/budget/v4/budgetCategory/expenseTypes', headers = headers)

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
    $response = $client->request('GET','/www.concursolutions.com/budget/v4/budgetCategory/expenseTypes', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/budgetCategory/expenseTypes");
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
    req, err := http.NewRequest("GET", "/www.concursolutions.com/budget/v4/budgetCategory/expenseTypes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /budget/v4/budgetCategory/expenseTypes`

*Calls the concur midtier to fetches the list of expense types for the given entity.*

<h3 id="getexpensetypesusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userLanguage|query|string|false|userLanguage|

> Example responses

> 200 Response

```json
[
  {
    "expenseTypeCode": "string",
    "featureTypeCode": "REQUEST",
    "id": "string",
    "name": "string",
    "syncGuid": "string"
  }
]
```

<h3 id="getexpensetypesusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<h3 id="getexpensetypesusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ExpenseType](#schemaexpensetype)]|false|none|none|
|» expenseTypeCode|string|false|none|The alphanumeric code that describes an expense type. Ex: TRAVEL, AC_CATER Any string may be used, but only expense type codes returned by GET /budgetCategory/expenseType will behave properly in the Concur UI.|
|» featureTypeCode|string|false|none|The type of feature that this expense type applies to, Purchase Request, Payment Request (Invoice), Expense or Travel Authorization|
|» id|string|false|none|The unique idenifier for the expense type|
|» name|string|true|none|none|
|» syncGuid|string|false|none|The unique idenifier for the expense type|

###### Enumerated Values

|Property|Value|
|---|---|
|featureTypeCode|REQUEST|
|featureTypeCode|TRAVEL|
|featureTypeCode|EXPENSE|
|featureTypeCode|PAYMENT_REQUEST|
|featureTypeCode|PURCHASE_REQUEST|
|featureTypeCode|ADJUSTMENT|
|featureTypeCode|EMPLOYEE|

<aside class="success">
This operation does not require authentication
</aside>

#### getBudgetCategoryUsingGET

<a id="opIdgetBudgetCategoryUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /www.concursolutions.com/budget/v4/budgetCategory/{id} \
  -H 'Accept: application/json'

```

```http
GET /www.concursolutions.com/budget/v4/budgetCategory/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/budgetCategory/{id}',
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

result = RestClient.get '/www.concursolutions.com/budget/v4/budgetCategory/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/www.concursolutions.com/budget/v4/budgetCategory/{id}', headers = headers)

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
    $response = $client->request('GET','/www.concursolutions.com/budget/v4/budgetCategory/{id}', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/budgetCategory/{id}");
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
    req, err := http.NewRequest("GET", "/www.concursolutions.com/budget/v4/budgetCategory/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /budget/v4/budgetCategory/{id}`

*Fetches an individual budget category by the guid.*

<h3 id="getbudgetcategoryusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Budget category guid|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "expenseTypes": [
    {
      "expenseTypeCode": "string",
      "featureTypeCode": "REQUEST",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "id": "string",
  "name": "string",
  "statusType": "OPEN",
  "syncGuid": "string"
}
```

<h3 id="getbudgetcategoryusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[BudgetCategory](#schemabudgetcategory)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="success">
This operation does not require authentication
</aside>

#### deleteBudgetCategoryUsingDELETE

<a id="opIddeleteBudgetCategoryUsingDELETE"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /www.concursolutions.com/budget/v4/budgetCategory/{id} \
  -H 'Accept: application/json'

```

```http
DELETE /www.concursolutions.com/budget/v4/budgetCategory/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/budgetCategory/{id}',
{
  method: 'DELETE',

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

result = RestClient.delete '/www.concursolutions.com/budget/v4/budgetCategory/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('/www.concursolutions.com/budget/v4/budgetCategory/{id}', headers = headers)

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
    $response = $client->request('DELETE','/www.concursolutions.com/budget/v4/budgetCategory/{id}', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/budgetCategory/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
    req, err := http.NewRequest("DELETE", "/www.concursolutions.com/budget/v4/budgetCategory/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /budget/v4/budgetCategory/{id}`

*Remove budget category by sync guid.*

<h3 id="deletebudgetcategoryusingdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Budget category guid|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="deletebudgetcategoryusingdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|string|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|No Content|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h2 id="budget-budget-item">Budget Item</h2>

Budget Item Controller

#### searchBudgetItemsPagedUsingGET

<a id="opIdsearchBudgetItemsPagedUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /www.concursolutions.com/budget/v4/budgetItemHeader \
  -H 'Accept: application/json'

```

```http
GET /www.concursolutions.com/budget/v4/budgetItemHeader HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/budgetItemHeader',
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

result = RestClient.get '/www.concursolutions.com/budget/v4/budgetItemHeader',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/www.concursolutions.com/budget/v4/budgetItemHeader', headers = headers)

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
    $response = $client->request('GET','/www.concursolutions.com/budget/v4/budgetItemHeader', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/budgetItemHeader");
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
    req, err := http.NewRequest("GET", "/www.concursolutions.com/budget/v4/budgetItemHeader", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /budget/v4/budgetItemHeader`

*Fetch all budget items for an entity.*

<h3 id="searchbudgetitemspagedusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adminView|query|boolean|false|Response is needed for administration purpose|
|offset|query|integer(int32)|false|Offset based pagination|

> Example responses

> 200 Response

```json
{
  "budgetItemHeaders": [
    {
      "active": true,
      "annualBudget": 0,
      "budgetAmounts": {
        "adjustedBudgetAmount": 0,
        "availableAmount": 0,
        "consumedPercent": 0,
        "pendingAmount": 0,
        "spendAmount": 0,
        "threshold": "UNDER",
        "unExpensedAmount": 0,
        "unExpensedSettings": true
      },
      "budgetApprovers": [
        {
          "email": "string",
          "employeeId": "string",
          "employeeUuid": "string",
          "externalUserCUUID": "string",
          "externalUserSyncGuid": "string",
          "id": "string",
          "name": "string",
          "syncGuid": "string"
        }
      ],
      "budgetCategory": {
        "description": "string",
        "expenseTypes": [
          {
            "expenseTypeCode": "string",
            "featureTypeCode": "REQUEST",
            "id": "string",
            "name": "string",
            "syncGuid": "string"
          }
        ],
        "id": "string",
        "name": "string",
        "statusType": "OPEN",
        "syncGuid": "string"
      },
      "budgetItemDetails": [
        {
          "amount": 0,
          "budgetAmounts": {
            "adjustedBudgetAmount": 0,
            "availableAmount": 0,
            "consumedPercent": 0,
            "pendingAmount": 0,
            "spendAmount": 0,
            "threshold": "UNDER",
            "unExpensedAmount": 0,
            "unExpensedSettings": true
          },
          "budgetItemBalances": [
            {
              "amount": 0,
              "featureTypeCode": "REQUEST",
              "featureTypeSubCode": "QUICK_EXPENSE",
              "id": "string",
              "syncGuid": "string",
              "workflowState": "NONE"
            }
          ],
          "budgetItemDetailStatusType": "OPEN",
          "budgetItemHeaderId": "string",
          "budgetItemHeaderSyncGuid": "string",
          "budgetName": "string",
          "currencyCode": "string",
          "detailDashboardBudgetItemAdjustments": [
            {
              "adjustedBy": "string",
              "adjustmentType": "BUDGET_BALANCE",
              "amount": 0,
              "amountType": "QUICK_EXPENSE",
              "description": "string",
              "transactionDate": "2019-08-24"
            }
          ],
          "fiscalPeriod": {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          },
          "fiscalPeriodId": "string",
          "id": "string",
          "syncGuid": "string"
        }
      ],
      "budgetItemStatusType": "OPEN",
      "budgetManagers": [
        {
          "email": "string",
          "employeeId": "string",
          "employeeUuid": "string",
          "externalUserCUUID": "string",
          "externalUserSyncGuid": "string",
          "id": "string",
          "name": "string",
          "syncGuid": "string"
        }
      ],
      "budgetType": "PERSONAL_USE",
      "budgetViewers": [
        {
          "email": "string",
          "employeeId": "string",
          "employeeUuid": "string",
          "externalUserCUUID": "string",
          "externalUserSyncGuid": "string",
          "id": "string",
          "name": "string",
          "syncGuid": "string"
        }
      ],
      "costObjects": [
        {
          "code": "string",
          "displayName": "string",
          "fieldDefinitionId": "string",
          "listKey": "string",
          "listName": "string",
          "operator": "EQUAL",
          "value": "string"
        }
      ],
      "createdDate": "2019-08-24T14:15:22Z",
      "currencyCode": "string",
      "dateRange": {
        "endDate": "2019-08-24",
        "startDate": "2019-08-24"
      },
      "description": "string",
      "fiscalYear": {
        "currentYear": true,
        "customFiscalPeriods": [
          {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          }
        ],
        "displayName": "string",
        "endDate": "2019-08-24",
        "fiscalPeriods": [
          {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          }
        ],
        "id": "string",
        "lastModified": "2019-08-24T14:15:22Z",
        "monthlyFiscalPeriods": [
          {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          }
        ],
        "name": "string",
        "openAndClosedFiscalPeriods": [
          {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          }
        ],
        "quarterlyFiscalPeriods": [
          {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          }
        ],
        "startDate": "2019-08-24",
        "status": "OPEN",
        "syncGuid": "string",
        "yearlyFiscalPeriods": [
          {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          }
        ]
      },
      "fiscalYearId": "string",
      "id": "string",
      "isTest": true,
      "lastModifiedDate": "2019-08-24T14:15:22Z",
      "name": "string",
      "owned": true,
      "owner": {
        "email": "string",
        "employeeId": "string",
        "employeeUuid": "string",
        "externalUserCUUID": "string",
        "externalUserSyncGuid": "string",
        "id": "string",
        "name": "string",
        "syncGuid": "string"
      },
      "periodType": "MONTHLY",
      "syncGuid": "string",
      "test": true
    }
  ],
  "href": "string",
  "limit": 0,
  "next": {
    "href": "string"
  },
  "offset": 0,
  "previous": {
    "href": "string"
  },
  "totalRows": 0
}
```

<h3 id="searchbudgetitemspagedusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PagedBudgetItemHeaderResult](#schemapagedbudgetitemheaderresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|InternalError|None|

<aside class="success">
This operation does not require authentication
</aside>

#### saveBudgetItemUsingPOST

<a id="opIdsaveBudgetItemUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /www.concursolutions.com/budget/v4/budgetItemHeader \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /www.concursolutions.com/budget/v4/budgetItemHeader HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "active": true,
  "annualBudget": 0,
  "budgetAmounts": {
    "adjustedBudgetAmount": 0,
    "availableAmount": 0,
    "consumedPercent": 0,
    "pendingAmount": 0,
    "spendAmount": 0,
    "threshold": "UNDER",
    "unExpensedAmount": 0,
    "unExpensedSettings": true
  },
  "budgetApprovers": [
    {
      "email": "string",
      "employeeId": "string",
      "employeeUuid": "string",
      "externalUserCUUID": "string",
      "externalUserSyncGuid": "string",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "budgetCategory": {
    "description": "string",
    "expenseTypes": [
      {
        "expenseTypeCode": "string",
        "featureTypeCode": "REQUEST",
        "id": "string",
        "name": "string",
        "syncGuid": "string"
      }
    ],
    "id": "string",
    "name": "string",
    "statusType": "OPEN",
    "syncGuid": "string"
  },
  "budgetItemDetails": [
    {
      "amount": 0,
      "budgetAmounts": {
        "adjustedBudgetAmount": 0,
        "availableAmount": 0,
        "consumedPercent": 0,
        "pendingAmount": 0,
        "spendAmount": 0,
        "threshold": "UNDER",
        "unExpensedAmount": 0,
        "unExpensedSettings": true
      },
      "budgetItemBalances": [
        {
          "amount": 0,
          "featureTypeCode": "REQUEST",
          "featureTypeSubCode": "QUICK_EXPENSE",
          "id": "string",
          "syncGuid": "string",
          "workflowState": "NONE"
        }
      ],
      "budgetItemDetailStatusType": "OPEN",
      "budgetItemHeaderId": "string",
      "budgetItemHeaderSyncGuid": "string",
      "budgetName": "string",
      "currencyCode": "string",
      "detailDashboardBudgetItemAdjustments": [
        {
          "adjustedBy": "string",
          "adjustmentType": "BUDGET_BALANCE",
          "amount": 0,
          "amountType": "QUICK_EXPENSE",
          "description": "string",
          "transactionDate": "2019-08-24"
        }
      ],
      "fiscalPeriod": {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      },
      "fiscalPeriodId": "string",
      "id": "string",
      "syncGuid": "string"
    }
  ],
  "budgetItemStatusType": "OPEN",
  "budgetManagers": [
    {
      "email": "string",
      "employeeId": "string",
      "employeeUuid": "string",
      "externalUserCUUID": "string",
      "externalUserSyncGuid": "string",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "budgetType": "PERSONAL_USE",
  "budgetViewers": [
    {
      "email": "string",
      "employeeId": "string",
      "employeeUuid": "string",
      "externalUserCUUID": "string",
      "externalUserSyncGuid": "string",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "costObjects": [
    {
      "code": "string",
      "displayName": "string",
      "fieldDefinitionId": "string",
      "listKey": "string",
      "listName": "string",
      "operator": "EQUAL",
      "value": "string"
    }
  ],
  "createdDate": "2019-08-24T14:15:22Z",
  "currencyCode": "string",
  "dateRange": {
    "endDate": "2019-08-24",
    "startDate": "2019-08-24"
  },
  "description": "string",
  "fiscalYear": {
    "currentYear": true,
    "customFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "displayName": "string",
    "endDate": "2019-08-24",
    "fiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "id": "string",
    "lastModified": "2019-08-24T14:15:22Z",
    "monthlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "name": "string",
    "openAndClosedFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "quarterlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "startDate": "2019-08-24",
    "status": "OPEN",
    "syncGuid": "string",
    "yearlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ]
  },
  "fiscalYearId": "string",
  "id": "string",
  "isTest": true,
  "lastModifiedDate": "2019-08-24T14:15:22Z",
  "name": "string",
  "owned": true,
  "owner": {
    "email": "string",
    "employeeId": "string",
    "employeeUuid": "string",
    "externalUserCUUID": "string",
    "externalUserSyncGuid": "string",
    "id": "string",
    "name": "string",
    "syncGuid": "string"
  },
  "periodType": "MONTHLY",
  "syncGuid": "string",
  "test": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/budgetItemHeader',
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
  'Accept' => 'application/json'
}

result = RestClient.post '/www.concursolutions.com/budget/v4/budgetItemHeader',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/www.concursolutions.com/budget/v4/budgetItemHeader', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/www.concursolutions.com/budget/v4/budgetItemHeader', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/budgetItemHeader");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/www.concursolutions.com/budget/v4/budgetItemHeader", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /budget/v4/budgetItemHeader`

*Save budget item. Creates a new budget item if one doesn't exist.*

> Body parameter

```json
{
  "active": true,
  "annualBudget": 0,
  "budgetAmounts": {
    "adjustedBudgetAmount": 0,
    "availableAmount": 0,
    "consumedPercent": 0,
    "pendingAmount": 0,
    "spendAmount": 0,
    "threshold": "UNDER",
    "unExpensedAmount": 0,
    "unExpensedSettings": true
  },
  "budgetApprovers": [
    {
      "email": "string",
      "employeeId": "string",
      "employeeUuid": "string",
      "externalUserCUUID": "string",
      "externalUserSyncGuid": "string",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "budgetCategory": {
    "description": "string",
    "expenseTypes": [
      {
        "expenseTypeCode": "string",
        "featureTypeCode": "REQUEST",
        "id": "string",
        "name": "string",
        "syncGuid": "string"
      }
    ],
    "id": "string",
    "name": "string",
    "statusType": "OPEN",
    "syncGuid": "string"
  },
  "budgetItemDetails": [
    {
      "amount": 0,
      "budgetAmounts": {
        "adjustedBudgetAmount": 0,
        "availableAmount": 0,
        "consumedPercent": 0,
        "pendingAmount": 0,
        "spendAmount": 0,
        "threshold": "UNDER",
        "unExpensedAmount": 0,
        "unExpensedSettings": true
      },
      "budgetItemBalances": [
        {
          "amount": 0,
          "featureTypeCode": "REQUEST",
          "featureTypeSubCode": "QUICK_EXPENSE",
          "id": "string",
          "syncGuid": "string",
          "workflowState": "NONE"
        }
      ],
      "budgetItemDetailStatusType": "OPEN",
      "budgetItemHeaderId": "string",
      "budgetItemHeaderSyncGuid": "string",
      "budgetName": "string",
      "currencyCode": "string",
      "detailDashboardBudgetItemAdjustments": [
        {
          "adjustedBy": "string",
          "adjustmentType": "BUDGET_BALANCE",
          "amount": 0,
          "amountType": "QUICK_EXPENSE",
          "description": "string",
          "transactionDate": "2019-08-24"
        }
      ],
      "fiscalPeriod": {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      },
      "fiscalPeriodId": "string",
      "id": "string",
      "syncGuid": "string"
    }
  ],
  "budgetItemStatusType": "OPEN",
  "budgetManagers": [
    {
      "email": "string",
      "employeeId": "string",
      "employeeUuid": "string",
      "externalUserCUUID": "string",
      "externalUserSyncGuid": "string",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "budgetType": "PERSONAL_USE",
  "budgetViewers": [
    {
      "email": "string",
      "employeeId": "string",
      "employeeUuid": "string",
      "externalUserCUUID": "string",
      "externalUserSyncGuid": "string",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "costObjects": [
    {
      "code": "string",
      "displayName": "string",
      "fieldDefinitionId": "string",
      "listKey": "string",
      "listName": "string",
      "operator": "EQUAL",
      "value": "string"
    }
  ],
  "createdDate": "2019-08-24T14:15:22Z",
  "currencyCode": "string",
  "dateRange": {
    "endDate": "2019-08-24",
    "startDate": "2019-08-24"
  },
  "description": "string",
  "fiscalYear": {
    "currentYear": true,
    "customFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "displayName": "string",
    "endDate": "2019-08-24",
    "fiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "id": "string",
    "lastModified": "2019-08-24T14:15:22Z",
    "monthlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "name": "string",
    "openAndClosedFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "quarterlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "startDate": "2019-08-24",
    "status": "OPEN",
    "syncGuid": "string",
    "yearlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ]
  },
  "fiscalYearId": "string",
  "id": "string",
  "isTest": true,
  "lastModifiedDate": "2019-08-24T14:15:22Z",
  "name": "string",
  "owned": true,
  "owner": {
    "email": "string",
    "employeeId": "string",
    "employeeUuid": "string",
    "externalUserCUUID": "string",
    "externalUserSyncGuid": "string",
    "id": "string",
    "name": "string",
    "syncGuid": "string"
  },
  "periodType": "MONTHLY",
  "syncGuid": "string",
  "test": true
}
```

<h3 id="savebudgetitemusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BudgetItemHeader](#schemabudgetitemheader)|true|budgetItemHeader|

> Example responses

> 200 Response

```json
{
  "budgetItemHeaderSyncGuid": "string",
  "success": true
}
```

<h3 id="savebudgetitemusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[BudgetItemHeaderResponse](#schemabudgetitemheaderresponse)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="success">
This operation does not require authentication
</aside>

#### getBudgetItemV4UsingGET

<a id="opIdgetBudgetItemV4UsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /www.concursolutions.com/budget/v4/budgetItemHeader/{id} \
  -H 'Accept: application/json'

```

```http
GET /www.concursolutions.com/budget/v4/budgetItemHeader/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/budgetItemHeader/{id}',
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

result = RestClient.get '/www.concursolutions.com/budget/v4/budgetItemHeader/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/www.concursolutions.com/budget/v4/budgetItemHeader/{id}', headers = headers)

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
    $response = $client->request('GET','/www.concursolutions.com/budget/v4/budgetItemHeader/{id}', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/budgetItemHeader/{id}");
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
    req, err := http.NewRequest("GET", "/www.concursolutions.com/budget/v4/budgetItemHeader/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /budget/v4/budgetItemHeader/{id}`

*Fetches a budget item by guid.*

<h3 id="getbudgetitemv4usingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Budget item guid|

> Example responses

> 200 Response

```json
{
  "active": true,
  "annualBudget": 0,
  "budgetAmounts": {
    "adjustedBudgetAmount": 0,
    "availableAmount": 0,
    "consumedPercent": 0,
    "pendingAmount": 0,
    "spendAmount": 0,
    "threshold": "UNDER",
    "unExpensedAmount": 0,
    "unExpensedSettings": true
  },
  "budgetApprovers": [
    {
      "email": "string",
      "employeeId": "string",
      "employeeUuid": "string",
      "externalUserCUUID": "string",
      "externalUserSyncGuid": "string",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "budgetCategory": {
    "description": "string",
    "expenseTypes": [
      {
        "expenseTypeCode": "string",
        "featureTypeCode": "REQUEST",
        "id": "string",
        "name": "string",
        "syncGuid": "string"
      }
    ],
    "id": "string",
    "name": "string",
    "statusType": "OPEN",
    "syncGuid": "string"
  },
  "budgetItemDetails": [
    {
      "amount": 0,
      "budgetAmounts": {
        "adjustedBudgetAmount": 0,
        "availableAmount": 0,
        "consumedPercent": 0,
        "pendingAmount": 0,
        "spendAmount": 0,
        "threshold": "UNDER",
        "unExpensedAmount": 0,
        "unExpensedSettings": true
      },
      "budgetItemBalances": [
        {
          "amount": 0,
          "featureTypeCode": "REQUEST",
          "featureTypeSubCode": "QUICK_EXPENSE",
          "id": "string",
          "syncGuid": "string",
          "workflowState": "NONE"
        }
      ],
      "budgetItemDetailStatusType": "OPEN",
      "budgetItemHeaderId": "string",
      "budgetItemHeaderSyncGuid": "string",
      "budgetName": "string",
      "currencyCode": "string",
      "detailDashboardBudgetItemAdjustments": [
        {
          "adjustedBy": "string",
          "adjustmentType": "BUDGET_BALANCE",
          "amount": 0,
          "amountType": "QUICK_EXPENSE",
          "description": "string",
          "transactionDate": "2019-08-24"
        }
      ],
      "fiscalPeriod": {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      },
      "fiscalPeriodId": "string",
      "id": "string",
      "syncGuid": "string"
    }
  ],
  "budgetItemStatusType": "OPEN",
  "budgetManagers": [
    {
      "email": "string",
      "employeeId": "string",
      "employeeUuid": "string",
      "externalUserCUUID": "string",
      "externalUserSyncGuid": "string",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "budgetType": "PERSONAL_USE",
  "budgetViewers": [
    {
      "email": "string",
      "employeeId": "string",
      "employeeUuid": "string",
      "externalUserCUUID": "string",
      "externalUserSyncGuid": "string",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "costObjects": [
    {
      "code": "string",
      "displayName": "string",
      "fieldDefinitionId": "string",
      "listKey": "string",
      "listName": "string",
      "operator": "EQUAL",
      "value": "string"
    }
  ],
  "createdDate": "2019-08-24T14:15:22Z",
  "currencyCode": "string",
  "dateRange": {
    "endDate": "2019-08-24",
    "startDate": "2019-08-24"
  },
  "description": "string",
  "fiscalYear": {
    "currentYear": true,
    "customFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "displayName": "string",
    "endDate": "2019-08-24",
    "fiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "id": "string",
    "lastModified": "2019-08-24T14:15:22Z",
    "monthlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "name": "string",
    "openAndClosedFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "quarterlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "startDate": "2019-08-24",
    "status": "OPEN",
    "syncGuid": "string",
    "yearlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ]
  },
  "fiscalYearId": "string",
  "id": "string",
  "isTest": true,
  "lastModifiedDate": "2019-08-24T14:15:22Z",
  "name": "string",
  "owned": true,
  "owner": {
    "email": "string",
    "employeeId": "string",
    "employeeUuid": "string",
    "externalUserCUUID": "string",
    "externalUserSyncGuid": "string",
    "id": "string",
    "name": "string",
    "syncGuid": "string"
  },
  "periodType": "MONTHLY",
  "syncGuid": "string",
  "test": true
}
```

<h3 id="getbudgetitemv4usingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[BudgetItemHeader](#schemabudgetitemheader)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="success">
This operation does not require authentication
</aside>

#### removeBudgetItemUsingDELETE

<a id="opIdremoveBudgetItemUsingDELETE"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /www.concursolutions.com/budget/v4/budgetItemHeader/{id} \
  -H 'Accept: application/json'

```

```http
DELETE /www.concursolutions.com/budget/v4/budgetItemHeader/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/budgetItemHeader/{id}',
{
  method: 'DELETE',

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

result = RestClient.delete '/www.concursolutions.com/budget/v4/budgetItemHeader/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('/www.concursolutions.com/budget/v4/budgetItemHeader/{id}', headers = headers)

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
    $response = $client->request('DELETE','/www.concursolutions.com/budget/v4/budgetItemHeader/{id}', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/budgetItemHeader/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
    req, err := http.NewRequest("DELETE", "/www.concursolutions.com/budget/v4/budgetItemHeader/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /budget/v4/budgetItemHeader/{id}`

*Remove budget item*

<h3 id="removebudgetitemusingdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Budget item guid|

> Example responses

> 200 Response

```json
{
  "budgetItemHeaderSyncGuid": "string",
  "success": true
}
```

<h3 id="removebudgetitemusingdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[BudgetItemHeaderResponse](#schemabudgetitemheaderresponse)|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|No Content|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="success">
This operation does not require authentication
</aside>

#### deleteBudgetItemUsingDELETE

<a id="opIddeleteBudgetItemUsingDELETE"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /www.concursolutions.com/budget/v4/delete/budgetItemHeader/{syncGuid} \
  -H 'Accept: application/json'

```

```http
DELETE /www.concursolutions.com/budget/v4/delete/budgetItemHeader/{syncGuid} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/delete/budgetItemHeader/{syncGuid}',
{
  method: 'DELETE',

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

result = RestClient.delete '/www.concursolutions.com/budget/v4/delete/budgetItemHeader/{syncGuid}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('/www.concursolutions.com/budget/v4/delete/budgetItemHeader/{syncGuid}', headers = headers)

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
    $response = $client->request('DELETE','/www.concursolutions.com/budget/v4/delete/budgetItemHeader/{syncGuid}', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/delete/budgetItemHeader/{syncGuid}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
    req, err := http.NewRequest("DELETE", "/www.concursolutions.com/budget/v4/delete/budgetItemHeader/{syncGuid}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /budget/v4/delete/budgetItemHeader/{syncGuid}`

*Remove budget item permanently*

<h3 id="deletebudgetitemusingdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|syncGuid|path|string|true|Budget item guid|

> Example responses

> 200 Response

```json
{
  "budgetItemHeaderSyncGuid": "string",
  "success": true
}
```

<h3 id="deletebudgetitemusingdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[BudgetItemHeaderResponse](#schemabudgetitemheaderresponse)|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|No Content|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h2 id="budget-cost-object-field">Cost Object Field</h2>

Cost Object Field

#### getFieldListByEntityIdUsingGET

<a id="opIdgetFieldListByEntityIdUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /www.concursolutions.com/budget/v4/budgetTrackingField \
  -H 'Accept: application/json'

```

```http
GET /www.concursolutions.com/budget/v4/budgetTrackingField HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/budgetTrackingField',
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

result = RestClient.get '/www.concursolutions.com/budget/v4/budgetTrackingField',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/www.concursolutions.com/budget/v4/budgetTrackingField', headers = headers)

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
    $response = $client->request('GET','/www.concursolutions.com/budget/v4/budgetTrackingField', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/budgetTrackingField");
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
    req, err := http.NewRequest("GET", "/www.concursolutions.com/budget/v4/budgetTrackingField", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /budget/v4/budgetTrackingField`

*Fetches the list of cost object fields in the system for an entity*

> Example responses

> 200 Response

```json
[
  {
    "budgetSequenceNumber": 0,
    "budgetTrackingFieldName": "string",
    "connectedListSequenceNumber": 0,
    "feildType": "string",
    "fieldDefinitionId": "string",
    "fieldId": "string",
    "fieldSyncGuid": "string",
    "listSyncGuid": "string"
  }
]
```

<h3 id="getfieldlistbyentityidusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<h3 id="getfieldlistbyentityidusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CostObjectField](#schemacostobjectfield)]|false|none|none|
|» budgetSequenceNumber|integer(int32)|false|none|none|
|» budgetTrackingFieldName|string|false|none|none|
|» connectedListSequenceNumber|integer|false|none|none|
|» feildType|string|false|none|none|
|» fieldDefinitionId|string|false|none|none|
|» fieldId|string|false|none|none|
|» fieldSyncGuid|string|false|none|none|
|» listSyncGuid|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h2 id="budget-fiscal-year">Fiscal Year</h2>

#### getFiscalYearByEntityIdAndBylastModifiedAfterUsingGET

<a id="opIdgetFiscalYearByEntityIdAndBylastModifiedAfterUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /www.concursolutions.com/budget/v4/fiscalYear \
  -H 'Accept: application/json'

```

```http
GET /www.concursolutions.com/budget/v4/fiscalYear HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/fiscalYear',
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

result = RestClient.get '/www.concursolutions.com/budget/v4/fiscalYear',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/www.concursolutions.com/budget/v4/fiscalYear', headers = headers)

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
    $response = $client->request('GET','/www.concursolutions.com/budget/v4/fiscalYear', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/fiscalYear");
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
    req, err := http.NewRequest("GET", "/www.concursolutions.com/budget/v4/fiscalYear", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /budget/v4/fiscalYear`

*Fetches the list of fiscal years in the system for an entity.*

<h3 id="getfiscalyearbyentityidandbylastmodifiedafterusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|includeRemoved|query|boolean|false|includeRemoved|
|lastModifiedAfter|query|string|false|lastModifiedAfter|

> Example responses

> 200 Response

```json
[
  {
    "currentYear": true,
    "customFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "displayName": "string",
    "endDate": "2019-08-24",
    "fiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "id": "string",
    "lastModified": "2019-08-24T14:15:22Z",
    "monthlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "name": "string",
    "openAndClosedFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "quarterlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "startDate": "2019-08-24",
    "status": "OPEN",
    "syncGuid": "string",
    "yearlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ]
  }
]
```

<h3 id="getfiscalyearbyentityidandbylastmodifiedafterusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<h3 id="getfiscalyearbyentityidandbylastmodifiedafterusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FiscalYear](#schemafiscalyear)]|false|none|none|
|» currentYear|boolean|true|none|Is this the current fiscal year based on the current time?|
|» customFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|»» currentPeriod|boolean|true|none|Is this the current period based on the current date/time?|
|»» endDate|string(date)|true|none|The end date of the fiscal period. Must be within the parent fiscal year.|
|»» fiscalPeriodStatus|string|false|none|The status of the fiscal period. Open, closed, and removed are valid.|
|»» fiscalYearSyncGuid|string|false|none|none|
|»» id|string|false|none|The unique identifier for the fiscal period.|
|»» name|string|true|none|Name of the fiscal period. Must be unique for the entity.|
|»» periodType|string|true|none|The type of fiscal period|
|»» spendDate|string(date)|true|none|The spend date of the fiscal period. Must be within the parent fiscal year.|
|»» startDate|string(date)|true|none|The start date of the fiscal period. Must be within the parent fiscal year.|
|»» syncGuid|string|false|none|The unique identifier for the fiscal period.|
|» displayName|string|false|none|Display name for fiscal year. For date range budget item we use this field to display|
|» endDate|string(date)|true|none|The end date for this fiscal year. The distance between start date and end date may not be more than two years.|
|» fiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|» id|string|false|none|The unique identifier of the fiscal year.|
|» lastModified|string(date-time)|false|none|The last time the fiscal year was updated. Date in UTC. **READ ONLY**|
|» monthlyFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|» name|string|true|none|The name of this fiscal year. Must be unique for this entity.|
|» openAndClosedFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|» quarterlyFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|» startDate|string(date)|true|none|The start date for this fiscal year|
|» status|string|false|none|The status of this fiscal year. Open, closed, and removed are valid.|
|» syncGuid|string|false|none|The unique identifier of the fiscal year.|
|» yearlyFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|

###### Enumerated Values

|Property|Value|
|---|---|
|fiscalPeriodStatus|OPEN|
|fiscalPeriodStatus|CLOSED|
|fiscalPeriodStatus|REMOVED|
|fiscalPeriodStatus|MERGED|
|periodType|MONTHLY|
|periodType|QUARTERLY|
|periodType|YEARLY|
|periodType|CUSTOM|
|periodType|DATE_RANGE|
|status|OPEN|
|status|CLOSED|
|status|REMOVED|
|status|MERGED|

<aside class="success">
This operation does not require authentication
</aside>

#### saveFiscalYearUsingPOST

<a id="opIdsaveFiscalYearUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /www.concursolutions.com/budget/v4/fiscalYear \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /www.concursolutions.com/budget/v4/fiscalYear HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '[
  {
    "currentYear": true,
    "customFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "displayName": "string",
    "endDate": "2019-08-24",
    "fiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "id": "string",
    "lastModified": "2019-08-24T14:15:22Z",
    "monthlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "name": "string",
    "openAndClosedFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "quarterlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "startDate": "2019-08-24",
    "status": "OPEN",
    "syncGuid": "string",
    "yearlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ]
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/fiscalYear',
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
  'Accept' => 'application/json'
}

result = RestClient.post '/www.concursolutions.com/budget/v4/fiscalYear',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/www.concursolutions.com/budget/v4/fiscalYear', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/www.concursolutions.com/budget/v4/fiscalYear', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/fiscalYear");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/www.concursolutions.com/budget/v4/fiscalYear", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /budget/v4/fiscalYear`

*Save fiscal year. Creates a new fiscal year if one doesn't exist.*

> Body parameter

```json
[
  {
    "currentYear": true,
    "customFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "displayName": "string",
    "endDate": "2019-08-24",
    "fiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "id": "string",
    "lastModified": "2019-08-24T14:15:22Z",
    "monthlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "name": "string",
    "openAndClosedFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "quarterlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "startDate": "2019-08-24",
    "status": "OPEN",
    "syncGuid": "string",
    "yearlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ]
  }
]
```

<h3 id="savefiscalyearusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|forceSave|
|body|body|[FiscalYear](#schemafiscalyear)|true|fiscalYearsList|

> Example responses

> 200 Response

```json
[
  {
    "currentYear": true,
    "customFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "displayName": "string",
    "endDate": "2019-08-24",
    "fiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "id": "string",
    "lastModified": "2019-08-24T14:15:22Z",
    "monthlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "name": "string",
    "openAndClosedFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "quarterlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "startDate": "2019-08-24",
    "status": "OPEN",
    "syncGuid": "string",
    "yearlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ]
  }
]
```

<h3 id="savefiscalyearusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<h3 id="savefiscalyearusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FiscalYear](#schemafiscalyear)]|false|none|none|
|» currentYear|boolean|true|none|Is this the current fiscal year based on the current time?|
|» customFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|»» currentPeriod|boolean|true|none|Is this the current period based on the current date/time?|
|»» endDate|string(date)|true|none|The end date of the fiscal period. Must be within the parent fiscal year.|
|»» fiscalPeriodStatus|string|false|none|The status of the fiscal period. Open, closed, and removed are valid.|
|»» fiscalYearSyncGuid|string|false|none|none|
|»» id|string|false|none|The unique identifier for the fiscal period.|
|»» name|string|true|none|Name of the fiscal period. Must be unique for the entity.|
|»» periodType|string|true|none|The type of fiscal period|
|»» spendDate|string(date)|true|none|The spend date of the fiscal period. Must be within the parent fiscal year.|
|»» startDate|string(date)|true|none|The start date of the fiscal period. Must be within the parent fiscal year.|
|»» syncGuid|string|false|none|The unique identifier for the fiscal period.|
|» displayName|string|false|none|Display name for fiscal year. For date range budget item we use this field to display|
|» endDate|string(date)|true|none|The end date for this fiscal year. The distance between start date and end date may not be more than two years.|
|» fiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|» id|string|false|none|The unique identifier of the fiscal year.|
|» lastModified|string(date-time)|false|none|The last time the fiscal year was updated. Date in UTC. **READ ONLY**|
|» monthlyFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|» name|string|true|none|The name of this fiscal year. Must be unique for this entity.|
|» openAndClosedFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|» quarterlyFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|» startDate|string(date)|true|none|The start date for this fiscal year|
|» status|string|false|none|The status of this fiscal year. Open, closed, and removed are valid.|
|» syncGuid|string|false|none|The unique identifier of the fiscal year.|
|» yearlyFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|

###### Enumerated Values

|Property|Value|
|---|---|
|fiscalPeriodStatus|OPEN|
|fiscalPeriodStatus|CLOSED|
|fiscalPeriodStatus|REMOVED|
|fiscalPeriodStatus|MERGED|
|periodType|MONTHLY|
|periodType|QUARTERLY|
|periodType|YEARLY|
|periodType|CUSTOM|
|periodType|DATE_RANGE|
|status|OPEN|
|status|CLOSED|
|status|REMOVED|
|status|MERGED|

<aside class="success">
This operation does not require authentication
</aside>

#### getFiscalYearUsingGET

<a id="opIdgetFiscalYearUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /www.concursolutions.com/budget/v4/fiscalYear/{syncguid} \
  -H 'Accept: application/json'

```

```http
GET /www.concursolutions.com/budget/v4/fiscalYear/{syncguid} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/fiscalYear/{syncguid}',
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

result = RestClient.get '/www.concursolutions.com/budget/v4/fiscalYear/{syncguid}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/www.concursolutions.com/budget/v4/fiscalYear/{syncguid}', headers = headers)

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
    $response = $client->request('GET','/www.concursolutions.com/budget/v4/fiscalYear/{syncguid}', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/fiscalYear/{syncguid}");
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
    req, err := http.NewRequest("GET", "/www.concursolutions.com/budget/v4/fiscalYear/{syncguid}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /budget/v4/fiscalYear/{syncguid}`

*Fetches an individual fiscal year from the system by guid.*

<h3 id="getfiscalyearusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|syncguid|path|string|true|Fiscal year guid|

> Example responses

> 200 Response

```json
{
  "currentYear": true,
  "customFiscalPeriods": [
    {
      "currentPeriod": true,
      "endDate": "2019-08-24",
      "fiscalPeriodStatus": "OPEN",
      "fiscalYearSyncGuid": "string",
      "id": "string",
      "name": "string",
      "periodType": "MONTHLY",
      "spendDate": "2019-08-24",
      "startDate": "2019-08-24",
      "syncGuid": "string"
    }
  ],
  "displayName": "string",
  "endDate": "2019-08-24",
  "fiscalPeriods": [
    {
      "currentPeriod": true,
      "endDate": "2019-08-24",
      "fiscalPeriodStatus": "OPEN",
      "fiscalYearSyncGuid": "string",
      "id": "string",
      "name": "string",
      "periodType": "MONTHLY",
      "spendDate": "2019-08-24",
      "startDate": "2019-08-24",
      "syncGuid": "string"
    }
  ],
  "id": "string",
  "lastModified": "2019-08-24T14:15:22Z",
  "monthlyFiscalPeriods": [
    {
      "currentPeriod": true,
      "endDate": "2019-08-24",
      "fiscalPeriodStatus": "OPEN",
      "fiscalYearSyncGuid": "string",
      "id": "string",
      "name": "string",
      "periodType": "MONTHLY",
      "spendDate": "2019-08-24",
      "startDate": "2019-08-24",
      "syncGuid": "string"
    }
  ],
  "name": "string",
  "openAndClosedFiscalPeriods": [
    {
      "currentPeriod": true,
      "endDate": "2019-08-24",
      "fiscalPeriodStatus": "OPEN",
      "fiscalYearSyncGuid": "string",
      "id": "string",
      "name": "string",
      "periodType": "MONTHLY",
      "spendDate": "2019-08-24",
      "startDate": "2019-08-24",
      "syncGuid": "string"
    }
  ],
  "quarterlyFiscalPeriods": [
    {
      "currentPeriod": true,
      "endDate": "2019-08-24",
      "fiscalPeriodStatus": "OPEN",
      "fiscalYearSyncGuid": "string",
      "id": "string",
      "name": "string",
      "periodType": "MONTHLY",
      "spendDate": "2019-08-24",
      "startDate": "2019-08-24",
      "syncGuid": "string"
    }
  ],
  "startDate": "2019-08-24",
  "status": "OPEN",
  "syncGuid": "string",
  "yearlyFiscalPeriods": [
    {
      "currentPeriod": true,
      "endDate": "2019-08-24",
      "fiscalPeriodStatus": "OPEN",
      "fiscalYearSyncGuid": "string",
      "id": "string",
      "name": "string",
      "periodType": "MONTHLY",
      "spendDate": "2019-08-24",
      "startDate": "2019-08-24",
      "syncGuid": "string"
    }
  ]
}
```

<h3 id="getfiscalyearusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[FiscalYear](#schemafiscalyear)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="success">
This operation does not require authentication
</aside>

#### removeFiscalYearUsingDELETE

<a id="opIdremoveFiscalYearUsingDELETE"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /www.concursolutions.com/budget/v4/fiscalYear/{syncguid} \
  -H 'Accept: application/json'

```

```http
DELETE /www.concursolutions.com/budget/v4/fiscalYear/{syncguid} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/budget/v4/fiscalYear/{syncguid}',
{
  method: 'DELETE',

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

result = RestClient.delete '/www.concursolutions.com/budget/v4/fiscalYear/{syncguid}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('/www.concursolutions.com/budget/v4/fiscalYear/{syncguid}', headers = headers)

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
    $response = $client->request('DELETE','/www.concursolutions.com/budget/v4/fiscalYear/{syncguid}', array(
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
URL obj = new URL("/www.concursolutions.com/budget/v4/fiscalYear/{syncguid}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
    req, err := http.NewRequest("DELETE", "/www.concursolutions.com/budget/v4/fiscalYear/{syncguid}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /budget/v4/fiscalYear/{syncguid}`

*Remove fiscal year*

<h3 id="removefiscalyearusingdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|syncguid|path|string|true|Fiscal year guid|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="removefiscalyearusingdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|string|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|No Content|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error|None|

<aside class="success">
This operation does not require authentication
</aside>

### Schemas

<h3 id="tocS_BudgetAdjustmentsExternal">BudgetAdjustmentsExternal</h3>

<a id="schemabudgetadjustmentsexternal"></a>
<a id="schema_BudgetAdjustmentsExternal"></a>
<a id="tocSbudgetadjustmentsexternal"></a>
<a id="tocsbudgetadjustmentsexternal"></a>

```json
{
  "adjustmentType": "BUDGET_BALANCE",
  "amount": 500,
  "amountType": "BUDGET_AMOUNT",
  "budgetItemName": "Marketing",
  "budgetOwnerEmail": "name@compamy.com",
  "description": "Sample description",
  "fiscalPeriodName": "2018 - Q3",
  "fiscalYearName": 2018,
  "transactionDate": "2018-07-11"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustmentType|string|false|none|The type of adjustment being made. Only a user reference field|
|amount|number|true|none|The value of the amount adjusted (+/-)|
|amountType|string|true|none|The type of the amount that is being adjusted|
|budgetItemName|string|true|none|The name of the budget item to which the adjustment is being made|
|budgetOwnerEmail|string|true|none|The owner email Id of the budget item|
|description|string|false|none|The short description of the adjustment|
|fiscalPeriodName|string|true|none|The specific fiscal period when this budget amount will be used.|
|fiscalYearName|string|true|none|The Fiscal year of the budget item|
|transactionDate|string(date)|false|none|The transaction date of adjusted spend. Required when the adjustment is made for amount type SPENT_AMOUNT or PENDING_AMOUNT|

###### Enumerated Values

|Property|Value|
|---|---|
|adjustmentType|BUDGET_BALANCE|
|adjustmentType|FUND_TRANSFER|
|adjustmentType|EXPENSE|
|adjustmentType|PAYMENT_REQUEST|
|adjustmentType|PURCHASE_REQUEST|
|adjustmentType|REQUEST|
|adjustmentType|PURGE_ADJUSTMENT|
|amountType|BUDGET_AMOUNT|
|amountType|SPENT_AMOUNT|
|amountType|PENDING_AMOUNT|

<h3 id="tocS_BudgetAmount">BudgetAmount</h3>

<a id="schemabudgetamount"></a>
<a id="schema_BudgetAmount"></a>
<a id="tocSbudgetamount"></a>
<a id="tocsbudgetamount"></a>

```json
{
  "adjustedBudgetAmount": 0,
  "availableAmount": 0,
  "consumedPercent": 0,
  "pendingAmount": 0,
  "spendAmount": 0,
  "threshold": "UNDER",
  "unExpensedAmount": 0,
  "unExpensedSettings": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustedBudgetAmount|number|false|none|The amount adjusted against this budget. **READ ONLY**|
|availableAmount|number|false|none|The available amount accumulated against this budget. Uses budget entity setting to determine which amounts are included to calculate available amount. **READ ONLY**|
|consumedPercent|number|false|none|The percentage of the budget that is considered used. Uses budget entity setting to determine which amounts to include. **READ ONLY**|
|pendingAmount|number|false|none|The pending amount accumulated against this budget. **READ ONLY**|
|spendAmount|number|false|none|The spend amount accumulated against this budget. **READ ONLY**|
|threshold|string|false|none|The indicator of whether this budget is under the alert limit (UNDER), equal to or over the alert limit, but under the control limit (ALERT), or equal to or over the control limit (OVER). **READ ONLY**|
|unExpensedAmount|number|false|none|The pending amount accumulated against this budget. **READ ONLY**|
|unExpensedSettings|boolean|false|none|The unexpensed settings is used to decided to show unexpensed balance or not. **READ ONLY**|

###### Enumerated Values

|Property|Value|
|---|---|
|threshold|UNDER|
|threshold|ALERT|
|threshold|OVER|
|threshold|UNKNOWN|

<h3 id="tocS_BudgetCategory">BudgetCategory</h3>

<a id="schemabudgetcategory"></a>
<a id="schema_BudgetCategory"></a>
<a id="tocSbudgetcategory"></a>
<a id="tocsbudgetcategory"></a>

```json
{
  "description": "string",
  "expenseTypes": [
    {
      "expenseTypeCode": "string",
      "featureTypeCode": "REQUEST",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "id": "string",
  "name": "string",
  "statusType": "OPEN",
  "syncGuid": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|expenseTypes|[[ExpenseType](#schemaexpensetype)]|true|none|The list of expense types that this budget category matches.|
|id|string|false|none|The unique identifier for the budget category.|
|name|string|true|none|The name of this budget category.|
|statusType|string|false|none|The status of this budget category--only open and removed are meaningful for budget category.|
|syncGuid|string|false|none|The unique identifier for the budget category.|

###### Enumerated Values

|Property|Value|
|---|---|
|statusType|OPEN|
|statusType|CLOSED|
|statusType|REMOVED|
|statusType|MERGED|

<h3 id="tocS_BudgetItemBalance">BudgetItemBalance</h3>

<a id="schemabudgetitembalance"></a>
<a id="schema_BudgetItemBalance"></a>
<a id="tocSbudgetitembalance"></a>
<a id="tocsbudgetitembalance"></a>

```json
{
  "amount": 0,
  "featureTypeCode": "REQUEST",
  "featureTypeSubCode": "QUICK_EXPENSE",
  "id": "string",
  "syncGuid": "string",
  "workflowState": "NONE"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|none|
|featureTypeCode|string|false|none|The feature type for this balance.|
|featureTypeSubCode|string|false|none|The feature type sub code for this balance.|
|id|string|false|none|The unique identifier for this particular budget balance bucket|
|syncGuid|string|false|none|The unique identifier for this particular budget balance bucket|
|workflowState|string|false|none|none|

###### Enumerated Values

|Property|Value|
|---|---|
|featureTypeCode|REQUEST|
|featureTypeCode|TRAVEL|
|featureTypeCode|EXPENSE|
|featureTypeCode|PAYMENT_REQUEST|
|featureTypeCode|PURCHASE_REQUEST|
|featureTypeCode|ADJUSTMENT|
|featureTypeCode|EMPLOYEE|
|featureTypeSubCode|QUICK_EXPENSE|
|featureTypeSubCode|ERECEIPT|
|featureTypeSubCode|CREDIT_CARD|
|featureTypeSubCode|PERSONAL_CARD|
|featureTypeSubCode|TRIP|
|featureTypeSubCode|RECEIPT_CAPTURE|
|featureTypeSubCode|BILLING_STATEMENT|
|featureTypeSubCode|MANUAL|
|featureTypeSubCode|NONE|
|featureTypeSubCode|BUDGET_AMOUNT|
|featureTypeSubCode|SPENT_AMOUNT|
|featureTypeSubCode|PENDING_AMOUNT|
|featureTypeSubCode|PRE_AUTHORIZED|
|featureTypeSubCode|PURGE_ADJUSTMENT|
|workflowState|NONE|
|workflowState|UNEXPENSED|
|workflowState|UNSUBMITTED|
|workflowState|UNSUBMITTED_HELD|
|workflowState|SUBMITTED|
|workflowState|APPROVED|
|workflowState|PROCESSED|
|workflowState|PAID|

<h3 id="tocS_BudgetItemDetail">BudgetItemDetail</h3>

<a id="schemabudgetitemdetail"></a>
<a id="schema_BudgetItemDetail"></a>
<a id="tocSbudgetitemdetail"></a>
<a id="tocsbudgetitemdetail"></a>

```json
{
  "amount": 0,
  "budgetAmounts": {
    "adjustedBudgetAmount": 0,
    "availableAmount": 0,
    "consumedPercent": 0,
    "pendingAmount": 0,
    "spendAmount": 0,
    "threshold": "UNDER",
    "unExpensedAmount": 0,
    "unExpensedSettings": true
  },
  "budgetItemBalances": [
    {
      "amount": 0,
      "featureTypeCode": "REQUEST",
      "featureTypeSubCode": "QUICK_EXPENSE",
      "id": "string",
      "syncGuid": "string",
      "workflowState": "NONE"
    }
  ],
  "budgetItemDetailStatusType": "OPEN",
  "budgetItemHeaderId": "string",
  "budgetItemHeaderSyncGuid": "string",
  "budgetName": "string",
  "currencyCode": "string",
  "detailDashboardBudgetItemAdjustments": [
    {
      "adjustedBy": "string",
      "adjustmentType": "BUDGET_BALANCE",
      "amount": 0,
      "amountType": "QUICK_EXPENSE",
      "description": "string",
      "transactionDate": "2019-08-24"
    }
  ],
  "fiscalPeriod": {
    "currentPeriod": true,
    "endDate": "2019-08-24",
    "fiscalPeriodStatus": "OPEN",
    "fiscalYearSyncGuid": "string",
    "id": "string",
    "name": "string",
    "periodType": "MONTHLY",
    "spendDate": "2019-08-24",
    "startDate": "2019-08-24",
    "syncGuid": "string"
  },
  "fiscalPeriodId": "string",
  "id": "string",
  "syncGuid": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|The currency amount allocated to this fiscal period.|
|budgetAmounts|[BudgetAmount](#schemabudgetamount)|false|none|The total budget amount and accumulated balances for this budget detail. **READ ONLY**|
|budgetItemBalances|[[BudgetItemBalance](#schemabudgetitembalance)]|false|none|READONLY|
|budgetItemDetailStatusType|string|false|none|The status of the budget item detail. Only open, closed, and removed are valid.|
|budgetItemHeaderId|string|false|none|The unique id of the header that contains this budget item detail.|
|budgetItemHeaderSyncGuid|string|false|none|The unique id of the header that contains this budget item detail.|
|budgetName|string|false|none|none|
|currencyCode|string|true|none|The alpha currency code, e.g. USD or GBP|
|detailDashboardBudgetItemAdjustments|[[DetailDashboardBudgetItemAdjustment](#schemadetaildashboardbudgetitemadjustment)]|false|none|none|
|fiscalPeriod|[FiscalPeriod](#schemafiscalperiod)|true|none|The specific fiscal period when this budget amount will be used.|
|fiscalPeriodId|string|false|none|none|
|id|string|false|none|The unique identifier for this budget item detail|
|syncGuid|string|false|none|The unique identifier for this budget item detail|

###### Enumerated Values

|Property|Value|
|---|---|
|budgetItemDetailStatusType|OPEN|
|budgetItemDetailStatusType|CLOSED|
|budgetItemDetailStatusType|REMOVED|
|budgetItemDetailStatusType|MERGED|

<h3 id="tocS_BudgetItemHeader">BudgetItemHeader</h3>

<a id="schemabudgetitemheader"></a>
<a id="schema_BudgetItemHeader"></a>
<a id="tocSbudgetitemheader"></a>
<a id="tocsbudgetitemheader"></a>

```json
{
  "active": true,
  "annualBudget": 0,
  "budgetAmounts": {
    "adjustedBudgetAmount": 0,
    "availableAmount": 0,
    "consumedPercent": 0,
    "pendingAmount": 0,
    "spendAmount": 0,
    "threshold": "UNDER",
    "unExpensedAmount": 0,
    "unExpensedSettings": true
  },
  "budgetApprovers": [
    {
      "email": "string",
      "employeeId": "string",
      "employeeUuid": "string",
      "externalUserCUUID": "string",
      "externalUserSyncGuid": "string",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "budgetCategory": {
    "description": "string",
    "expenseTypes": [
      {
        "expenseTypeCode": "string",
        "featureTypeCode": "REQUEST",
        "id": "string",
        "name": "string",
        "syncGuid": "string"
      }
    ],
    "id": "string",
    "name": "string",
    "statusType": "OPEN",
    "syncGuid": "string"
  },
  "budgetItemDetails": [
    {
      "amount": 0,
      "budgetAmounts": {
        "adjustedBudgetAmount": 0,
        "availableAmount": 0,
        "consumedPercent": 0,
        "pendingAmount": 0,
        "spendAmount": 0,
        "threshold": "UNDER",
        "unExpensedAmount": 0,
        "unExpensedSettings": true
      },
      "budgetItemBalances": [
        {
          "amount": 0,
          "featureTypeCode": "REQUEST",
          "featureTypeSubCode": "QUICK_EXPENSE",
          "id": "string",
          "syncGuid": "string",
          "workflowState": "NONE"
        }
      ],
      "budgetItemDetailStatusType": "OPEN",
      "budgetItemHeaderId": "string",
      "budgetItemHeaderSyncGuid": "string",
      "budgetName": "string",
      "currencyCode": "string",
      "detailDashboardBudgetItemAdjustments": [
        {
          "adjustedBy": "string",
          "adjustmentType": "BUDGET_BALANCE",
          "amount": 0,
          "amountType": "QUICK_EXPENSE",
          "description": "string",
          "transactionDate": "2019-08-24"
        }
      ],
      "fiscalPeriod": {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      },
      "fiscalPeriodId": "string",
      "id": "string",
      "syncGuid": "string"
    }
  ],
  "budgetItemStatusType": "OPEN",
  "budgetManagers": [
    {
      "email": "string",
      "employeeId": "string",
      "employeeUuid": "string",
      "externalUserCUUID": "string",
      "externalUserSyncGuid": "string",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "budgetType": "PERSONAL_USE",
  "budgetViewers": [
    {
      "email": "string",
      "employeeId": "string",
      "employeeUuid": "string",
      "externalUserCUUID": "string",
      "externalUserSyncGuid": "string",
      "id": "string",
      "name": "string",
      "syncGuid": "string"
    }
  ],
  "costObjects": [
    {
      "code": "string",
      "displayName": "string",
      "fieldDefinitionId": "string",
      "listKey": "string",
      "listName": "string",
      "operator": "EQUAL",
      "value": "string"
    }
  ],
  "createdDate": "2019-08-24T14:15:22Z",
  "currencyCode": "string",
  "dateRange": {
    "endDate": "2019-08-24",
    "startDate": "2019-08-24"
  },
  "description": "string",
  "fiscalYear": {
    "currentYear": true,
    "customFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "displayName": "string",
    "endDate": "2019-08-24",
    "fiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "id": "string",
    "lastModified": "2019-08-24T14:15:22Z",
    "monthlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "name": "string",
    "openAndClosedFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "quarterlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ],
    "startDate": "2019-08-24",
    "status": "OPEN",
    "syncGuid": "string",
    "yearlyFiscalPeriods": [
      {
        "currentPeriod": true,
        "endDate": "2019-08-24",
        "fiscalPeriodStatus": "OPEN",
        "fiscalYearSyncGuid": "string",
        "id": "string",
        "name": "string",
        "periodType": "MONTHLY",
        "spendDate": "2019-08-24",
        "startDate": "2019-08-24",
        "syncGuid": "string"
      }
    ]
  },
  "fiscalYearId": "string",
  "id": "string",
  "isTest": true,
  "lastModifiedDate": "2019-08-24T14:15:22Z",
  "name": "string",
  "owned": true,
  "owner": {
    "email": "string",
    "employeeId": "string",
    "employeeUuid": "string",
    "externalUserCUUID": "string",
    "externalUserSyncGuid": "string",
    "id": "string",
    "name": "string",
    "syncGuid": "string"
  },
  "periodType": "MONTHLY",
  "syncGuid": "string",
  "test": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|Indicates if this budget should be displayed on user screens **READ ONLY**|
|annualBudget|number|false|none|The total budget amount and accumulated balances for this budget header. **READ ONLY**|
|budgetAmounts|[BudgetAmount](#schemabudgetamount)|false|none|The total budget amount and accumulated balances for this budget header. **READ ONLY**|
|budgetApprovers|[[BudgetPerson](#schemabudgetperson)]|false|none|The users who can approve spending for this budget.|
|budgetCategory|[BudgetCategory](#schemabudgetcategory)|false|none|The budget category for this budget item. If a budget category is present, spending items must match one of the expense types in the budget category in order to match this budget.|
|budgetItemDetails|[[BudgetItemDetail](#schemabudgetitemdetail)]|false|none|none|
|budgetItemStatusType|string|true|none|The status of this budget item. Merged is invalid for Budget Items. (Closed means no spending may be attached to this budget.)|
|budgetManagers|[[BudgetPerson](#schemabudgetperson)]|false|none|If managers exist, spend items only matches this budget if one of the managers is in the manager hierarchy of the submitter or approver for the given spend item.|
|budgetType|string|false|none|The budget type indicates if the budget item is personal or not|
|budgetViewers|[[BudgetPerson](#schemabudgetperson)]|false|none|The users who can view this budget.|
|costObjects|[[HierarchyValue](#schemahierarchyvalue)]|false|none|The cost object list for matching spending items.|
|createdDate|string(date-time)|false|none|The time the budget item header was created. Date in UTC. **READ ONLY**|
|currencyCode|string|false|none|The currency code of the first budget detail. Moved to this level for convenience since it's very rare for a budget item header to have details with different currency codes.|
|dateRange|[DateRange](#schemadaterange)|false|none|none|
|description|string|true|none|The friendly name for a budget item.|
|fiscalYear|[FiscalYear](#schemafiscalyear)|false|none|none|
|fiscalYearId|string|false|none|none|
|id|string|false|none|The unique identifier for the budget item.|
|isTest|boolean|false|none|The test flag for the budget item|
|lastModifiedDate|string(date-time)|false|none|The last time the budget item header was updated. Date in UTC. **READ ONLY**|
|name|string|true|none|The admin-facing name of this budget|
|owned|boolean|false|none|Indicates if this budget is owned by the current user **READ ONLY**|
|owner|[BudgetPerson](#schemabudgetperson)|true|none|The user who is ultimately responsible for this budget. He/she may approve spending for the budget|
|periodType|string|false|none|The type of period within the fiscal year that this budget uses **READ ONLY**|
|syncGuid|string|false|none|The unique identifier for the budget item.|
|test|boolean|false|none|none|

###### Enumerated Values

|Property|Value|
|---|---|
|budgetItemStatusType|OPEN|
|budgetItemStatusType|CLOSED|
|budgetItemStatusType|REMOVED|
|budgetItemStatusType|MERGED|
|budgetType|PERSONAL_USE|
|budgetType|BUDGET|
|budgetType|RESTRICTED|
|periodType|MONTHLY|
|periodType|QUARTERLY|
|periodType|YEARLY|
|periodType|CUSTOM|
|periodType|DATE_RANGE|

<h3 id="tocS_BudgetItemHeaderResponse">BudgetItemHeaderResponse</h3>

<a id="schemabudgetitemheaderresponse"></a>
<a id="schema_BudgetItemHeaderResponse"></a>
<a id="tocSbudgetitemheaderresponse"></a>
<a id="tocsbudgetitemheaderresponse"></a>

```json
{
  "budgetItemHeaderSyncGuid": "string",
  "success": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|budgetItemHeaderSyncGuid|string|false|none|none|
|success|boolean|false|none|none|

<h3 id="tocS_BudgetPerson">BudgetPerson</h3>

<a id="schemabudgetperson"></a>
<a id="schema_BudgetPerson"></a>
<a id="tocSbudgetperson"></a>
<a id="tocsbudgetperson"></a>

```json
{
  "email": "string",
  "employeeId": "string",
  "employeeUuid": "string",
  "externalUserCUUID": "string",
  "externalUserSyncGuid": "string",
  "id": "string",
  "name": "string",
  "syncGuid": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|populate user email|
|employeeId|string|false|none|populate user employeeId|
|employeeUuid|string|true|none|The unique identifier for this user. This must match the UUID from Concur's profile service.|
|externalUserCUUID|string|true|none|The unique identifier for this user. This must match the CUUID from Concur's profile service.|
|externalUserSyncGuid|string|true|none|The unique identifier for this user. This must match the CUUID from Concur's profile service.|
|id|string|false|none|The budget service's unique identifier for this user.|
|name|string|false|none|none|
|syncGuid|string|false|none|The budget service's unique identifier for this user.|

<h3 id="tocS_CostObjectField">CostObjectField</h3>

<a id="schemacostobjectfield"></a>
<a id="schema_CostObjectField"></a>
<a id="tocScostobjectfield"></a>
<a id="tocscostobjectfield"></a>

```json
{
  "budgetSequenceNumber": 0,
  "budgetTrackingFieldName": "string",
  "connectedListSequenceNumber": 0,
  "feildType": "string",
  "fieldDefinitionId": "string",
  "fieldId": "string",
  "fieldSyncGuid": "string",
  "listSyncGuid": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|budgetSequenceNumber|integer(int32)|false|none|none|
|budgetTrackingFieldName|string|false|none|none|
|connectedListSequenceNumber|integer|false|none|none|
|feildType|string|false|none|none|
|fieldDefinitionId|string|false|none|none|
|fieldId|string|false|none|none|
|fieldSyncGuid|string|false|none|none|
|listSyncGuid|string|false|none|none|

<h3 id="tocS_DateRange">DateRange</h3>

<a id="schemadaterange"></a>
<a id="schema_DateRange"></a>
<a id="tocSdaterange"></a>
<a id="tocsdaterange"></a>

```json
{
  "endDate": "2019-08-24",
  "startDate": "2019-08-24"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date)|false|none|The end date for the budget.|
|startDate|string(date)|false|none|The start date for the budget.|

<h3 id="tocS_DetailDashboardBudgetItemAdjustment">DetailDashboardBudgetItemAdjustment</h3>

<a id="schemadetaildashboardbudgetitemadjustment"></a>
<a id="schema_DetailDashboardBudgetItemAdjustment"></a>
<a id="tocSdetaildashboardbudgetitemadjustment"></a>
<a id="tocsdetaildashboardbudgetitemadjustment"></a>

```json
{
  "adjustedBy": "string",
  "adjustmentType": "BUDGET_BALANCE",
  "amount": 0,
  "amountType": "QUICK_EXPENSE",
  "description": "string",
  "transactionDate": "2019-08-24"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustedBy|string|false|none|The User who added or updated this adjustment|
|adjustmentType|string|false|none|The type of adjustment being made. Only a user reference field|
|amount|number|true|none|The value of the amount adjusted (+/-)|
|amountType|string|false|none|The amount type of the field|
|description|string|false|none|The short description of the adjustment|
|transactionDate|string(date)|false|none|The transaction date of adjusted spend. Required when the adjustment is made for amount type SPENT_AMOUNT or PENDING_AMOUNT|

###### Enumerated Values

|Property|Value|
|---|---|
|adjustmentType|BUDGET_BALANCE|
|adjustmentType|FUND_TRANSFER|
|adjustmentType|EXPENSE|
|adjustmentType|PAYMENT_REQUEST|
|adjustmentType|PURCHASE_REQUEST|
|adjustmentType|REQUEST|
|adjustmentType|PURGE_ADJUSTMENT|
|amountType|QUICK_EXPENSE|
|amountType|ERECEIPT|
|amountType|CREDIT_CARD|
|amountType|PERSONAL_CARD|
|amountType|TRIP|
|amountType|RECEIPT_CAPTURE|
|amountType|BILLING_STATEMENT|
|amountType|MANUAL|
|amountType|NONE|
|amountType|BUDGET_AMOUNT|
|amountType|SPENT_AMOUNT|
|amountType|PENDING_AMOUNT|
|amountType|PRE_AUTHORIZED|
|amountType|PURGE_ADJUSTMENT|

<h3 id="tocS_ExpenseType">ExpenseType</h3>

<a id="schemaexpensetype"></a>
<a id="schema_ExpenseType"></a>
<a id="tocSexpensetype"></a>
<a id="tocsexpensetype"></a>

```json
{
  "expenseTypeCode": "string",
  "featureTypeCode": "REQUEST",
  "id": "string",
  "name": "string",
  "syncGuid": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expenseTypeCode|string|false|none|The alphanumeric code that describes an expense type. Ex: TRAVEL, AC_CATER Any string may be used, but only expense type codes returned by GET /budgetCategory/expenseType will behave properly in the Concur UI.|
|featureTypeCode|string|false|none|The type of feature that this expense type applies to, Purchase Request, Payment Request (Invoice), Expense or Travel Authorization|
|id|string|false|none|The unique idenifier for the expense type|
|name|string|true|none|none|
|syncGuid|string|false|none|The unique idenifier for the expense type|

###### Enumerated Values

|Property|Value|
|---|---|
|featureTypeCode|REQUEST|
|featureTypeCode|TRAVEL|
|featureTypeCode|EXPENSE|
|featureTypeCode|PAYMENT_REQUEST|
|featureTypeCode|PURCHASE_REQUEST|
|featureTypeCode|ADJUSTMENT|
|featureTypeCode|EMPLOYEE|

<h3 id="tocS_FiscalPeriod">FiscalPeriod</h3>

<a id="schemafiscalperiod"></a>
<a id="schema_FiscalPeriod"></a>
<a id="tocSfiscalperiod"></a>
<a id="tocsfiscalperiod"></a>

```json
{
  "currentPeriod": true,
  "endDate": "2019-08-24",
  "fiscalPeriodStatus": "OPEN",
  "fiscalYearSyncGuid": "string",
  "id": "string",
  "name": "string",
  "periodType": "MONTHLY",
  "spendDate": "2019-08-24",
  "startDate": "2019-08-24",
  "syncGuid": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentPeriod|boolean|true|none|Is this the current period based on the current date/time?|
|endDate|string(date)|true|none|The end date of the fiscal period. Must be within the parent fiscal year.|
|fiscalPeriodStatus|string|false|none|The status of the fiscal period. Open, closed, and removed are valid.|
|fiscalYearSyncGuid|string|false|none|none|
|id|string|false|none|The unique identifier for the fiscal period.|
|name|string|true|none|Name of the fiscal period. Must be unique for the entity.|
|periodType|string|true|none|The type of fiscal period|
|spendDate|string(date)|true|none|The spend date of the fiscal period. Must be within the parent fiscal year.|
|startDate|string(date)|true|none|The start date of the fiscal period. Must be within the parent fiscal year.|
|syncGuid|string|false|none|The unique identifier for the fiscal period.|

###### Enumerated Values

|Property|Value|
|---|---|
|fiscalPeriodStatus|OPEN|
|fiscalPeriodStatus|CLOSED|
|fiscalPeriodStatus|REMOVED|
|fiscalPeriodStatus|MERGED|
|periodType|MONTHLY|
|periodType|QUARTERLY|
|periodType|YEARLY|
|periodType|CUSTOM|
|periodType|DATE_RANGE|

<h3 id="tocS_FiscalYear">FiscalYear</h3>

<a id="schemafiscalyear"></a>
<a id="schema_FiscalYear"></a>
<a id="tocSfiscalyear"></a>
<a id="tocsfiscalyear"></a>

```json
{
  "currentYear": true,
  "customFiscalPeriods": [
    {
      "currentPeriod": true,
      "endDate": "2019-08-24",
      "fiscalPeriodStatus": "OPEN",
      "fiscalYearSyncGuid": "string",
      "id": "string",
      "name": "string",
      "periodType": "MONTHLY",
      "spendDate": "2019-08-24",
      "startDate": "2019-08-24",
      "syncGuid": "string"
    }
  ],
  "displayName": "string",
  "endDate": "2019-08-24",
  "fiscalPeriods": [
    {
      "currentPeriod": true,
      "endDate": "2019-08-24",
      "fiscalPeriodStatus": "OPEN",
      "fiscalYearSyncGuid": "string",
      "id": "string",
      "name": "string",
      "periodType": "MONTHLY",
      "spendDate": "2019-08-24",
      "startDate": "2019-08-24",
      "syncGuid": "string"
    }
  ],
  "id": "string",
  "lastModified": "2019-08-24T14:15:22Z",
  "monthlyFiscalPeriods": [
    {
      "currentPeriod": true,
      "endDate": "2019-08-24",
      "fiscalPeriodStatus": "OPEN",
      "fiscalYearSyncGuid": "string",
      "id": "string",
      "name": "string",
      "periodType": "MONTHLY",
      "spendDate": "2019-08-24",
      "startDate": "2019-08-24",
      "syncGuid": "string"
    }
  ],
  "name": "string",
  "openAndClosedFiscalPeriods": [
    {
      "currentPeriod": true,
      "endDate": "2019-08-24",
      "fiscalPeriodStatus": "OPEN",
      "fiscalYearSyncGuid": "string",
      "id": "string",
      "name": "string",
      "periodType": "MONTHLY",
      "spendDate": "2019-08-24",
      "startDate": "2019-08-24",
      "syncGuid": "string"
    }
  ],
  "quarterlyFiscalPeriods": [
    {
      "currentPeriod": true,
      "endDate": "2019-08-24",
      "fiscalPeriodStatus": "OPEN",
      "fiscalYearSyncGuid": "string",
      "id": "string",
      "name": "string",
      "periodType": "MONTHLY",
      "spendDate": "2019-08-24",
      "startDate": "2019-08-24",
      "syncGuid": "string"
    }
  ],
  "startDate": "2019-08-24",
  "status": "OPEN",
  "syncGuid": "string",
  "yearlyFiscalPeriods": [
    {
      "currentPeriod": true,
      "endDate": "2019-08-24",
      "fiscalPeriodStatus": "OPEN",
      "fiscalYearSyncGuid": "string",
      "id": "string",
      "name": "string",
      "periodType": "MONTHLY",
      "spendDate": "2019-08-24",
      "startDate": "2019-08-24",
      "syncGuid": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentYear|boolean|true|none|Is this the current fiscal year based on the current time?|
|customFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|displayName|string|false|none|Display name for fiscal year. For date range budget item we use this field to display|
|endDate|string(date)|true|none|The end date for this fiscal year. The distance between start date and end date may not be more than two years.|
|fiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|id|string|false|none|The unique identifier of the fiscal year.|
|lastModified|string(date-time)|false|none|The last time the fiscal year was updated. Date in UTC. **READ ONLY**|
|monthlyFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|name|string|true|none|The name of this fiscal year. Must be unique for this entity.|
|openAndClosedFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|quarterlyFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|
|startDate|string(date)|true|none|The start date for this fiscal year|
|status|string|false|none|The status of this fiscal year. Open, closed, and removed are valid.|
|syncGuid|string|false|none|The unique identifier of the fiscal year.|
|yearlyFiscalPeriods|[[FiscalPeriod](#schemafiscalperiod)]|false|none|none|

###### Enumerated Values

|Property|Value|
|---|---|
|status|OPEN|
|status|CLOSED|
|status|REMOVED|
|status|MERGED|

<h3 id="tocS_HierarchyValue">HierarchyValue</h3>

<a id="schemahierarchyvalue"></a>
<a id="schema_HierarchyValue"></a>
<a id="tocShierarchyvalue"></a>
<a id="tocshierarchyvalue"></a>

```json
{
  "code": "string",
  "displayName": "string",
  "fieldDefinitionId": "string",
  "listKey": "string",
  "listName": "string",
  "operator": "EQUAL",
  "value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|displayName|string|false|none|none|
|fieldDefinitionId|string|false|none|none|
|listKey|string|false|none|none|
|listName|string|false|none|none|
|operator|string|false|none|none|
|value|string|false|none|none|

###### Enumerated Values

|Property|Value|
|---|---|
|operator|EQUAL|
|operator|INLIST|
|operator|ISBLANK|
|operator|NOTEQUAL|
|operator|NOTINLIST|
|operator|ISNOTBLANK|
|operator|ISTRUE|
|operator|ISFALSE|
|operator|ISNOTTRUE|
|operator|ISNOTFALSE|

<h3 id="tocS_Href">Href</h3>

<a id="schemahref"></a>
<a id="schema_Href"></a>
<a id="tocShref"></a>
<a id="tocshref"></a>

```json
{
  "href": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The fully qualified url|

<h3 id="tocS_PagedBudgetItemHeaderResult">PagedBudgetItemHeaderResult</h3>

<a id="schemapagedbudgetitemheaderresult"></a>
<a id="schema_PagedBudgetItemHeaderResult"></a>
<a id="tocSpagedbudgetitemheaderresult"></a>
<a id="tocspagedbudgetitemheaderresult"></a>

```json
{
  "budgetItemHeaders": [
    {
      "active": true,
      "annualBudget": 0,
      "budgetAmounts": {
        "adjustedBudgetAmount": 0,
        "availableAmount": 0,
        "consumedPercent": 0,
        "pendingAmount": 0,
        "spendAmount": 0,
        "threshold": "UNDER",
        "unExpensedAmount": 0,
        "unExpensedSettings": true
      },
      "budgetApprovers": [
        {
          "email": "string",
          "employeeId": "string",
          "employeeUuid": "string",
          "externalUserCUUID": "string",
          "externalUserSyncGuid": "string",
          "id": "string",
          "name": "string",
          "syncGuid": "string"
        }
      ],
      "budgetCategory": {
        "description": "string",
        "expenseTypes": [
          {
            "expenseTypeCode": "string",
            "featureTypeCode": "REQUEST",
            "id": "string",
            "name": "string",
            "syncGuid": "string"
          }
        ],
        "id": "string",
        "name": "string",
        "statusType": "OPEN",
        "syncGuid": "string"
      },
      "budgetItemDetails": [
        {
          "amount": 0,
          "budgetAmounts": {
            "adjustedBudgetAmount": 0,
            "availableAmount": 0,
            "consumedPercent": 0,
            "pendingAmount": 0,
            "spendAmount": 0,
            "threshold": "UNDER",
            "unExpensedAmount": 0,
            "unExpensedSettings": true
          },
          "budgetItemBalances": [
            {
              "amount": 0,
              "featureTypeCode": "REQUEST",
              "featureTypeSubCode": "QUICK_EXPENSE",
              "id": "string",
              "syncGuid": "string",
              "workflowState": "NONE"
            }
          ],
          "budgetItemDetailStatusType": "OPEN",
          "budgetItemHeaderId": "string",
          "budgetItemHeaderSyncGuid": "string",
          "budgetName": "string",
          "currencyCode": "string",
          "detailDashboardBudgetItemAdjustments": [
            {
              "adjustedBy": "string",
              "adjustmentType": "BUDGET_BALANCE",
              "amount": 0,
              "amountType": "QUICK_EXPENSE",
              "description": "string",
              "transactionDate": "2019-08-24"
            }
          ],
          "fiscalPeriod": {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          },
          "fiscalPeriodId": "string",
          "id": "string",
          "syncGuid": "string"
        }
      ],
      "budgetItemStatusType": "OPEN",
      "budgetManagers": [
        {
          "email": "string",
          "employeeId": "string",
          "employeeUuid": "string",
          "externalUserCUUID": "string",
          "externalUserSyncGuid": "string",
          "id": "string",
          "name": "string",
          "syncGuid": "string"
        }
      ],
      "budgetType": "PERSONAL_USE",
      "budgetViewers": [
        {
          "email": "string",
          "employeeId": "string",
          "employeeUuid": "string",
          "externalUserCUUID": "string",
          "externalUserSyncGuid": "string",
          "id": "string",
          "name": "string",
          "syncGuid": "string"
        }
      ],
      "costObjects": [
        {
          "code": "string",
          "displayName": "string",
          "fieldDefinitionId": "string",
          "listKey": "string",
          "listName": "string",
          "operator": "EQUAL",
          "value": "string"
        }
      ],
      "createdDate": "2019-08-24T14:15:22Z",
      "currencyCode": "string",
      "dateRange": {
        "endDate": "2019-08-24",
        "startDate": "2019-08-24"
      },
      "description": "string",
      "fiscalYear": {
        "currentYear": true,
        "customFiscalPeriods": [
          {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          }
        ],
        "displayName": "string",
        "endDate": "2019-08-24",
        "fiscalPeriods": [
          {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          }
        ],
        "id": "string",
        "lastModified": "2019-08-24T14:15:22Z",
        "monthlyFiscalPeriods": [
          {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          }
        ],
        "name": "string",
        "openAndClosedFiscalPeriods": [
          {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          }
        ],
        "quarterlyFiscalPeriods": [
          {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          }
        ],
        "startDate": "2019-08-24",
        "status": "OPEN",
        "syncGuid": "string",
        "yearlyFiscalPeriods": [
          {
            "currentPeriod": true,
            "endDate": "2019-08-24",
            "fiscalPeriodStatus": "OPEN",
            "fiscalYearSyncGuid": "string",
            "id": "string",
            "name": "string",
            "periodType": "MONTHLY",
            "spendDate": "2019-08-24",
            "startDate": "2019-08-24",
            "syncGuid": "string"
          }
        ]
      },
      "fiscalYearId": "string",
      "id": "string",
      "isTest": true,
      "lastModifiedDate": "2019-08-24T14:15:22Z",
      "name": "string",
      "owned": true,
      "owner": {
        "email": "string",
        "employeeId": "string",
        "employeeUuid": "string",
        "externalUserCUUID": "string",
        "externalUserSyncGuid": "string",
        "id": "string",
        "name": "string",
        "syncGuid": "string"
      },
      "periodType": "MONTHLY",
      "syncGuid": "string",
      "test": true
    }
  ],
  "href": "string",
  "limit": 0,
  "next": {
    "href": "string"
  },
  "offset": 0,
  "previous": {
    "href": "string"
  },
  "totalRows": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|budgetItemHeaders|[[BudgetItemHeader](#schemabudgetitemheader)]|false|none|List of budget item headers. Each budget item header represents a single budget for a fiscal year.|
|href|string|true|none|The link to this page of results|
|limit|integer(int32)|false|none|The maximum number of entries a user can receive from this service.|
|next|[Href](#schemahref)|false|none|The link to the next page of results, if one exists.|
|offset|integer(int32)|false|none|The starting offset of this list inside the entire universe of results. Passing in a value larger than the total number of items for your search will result in an empty list.|
|previous|[Href](#schemahref)|false|none|The link to the previous page of results, if one exists.|
|totalRows|integer|false|none|Total number of records|

