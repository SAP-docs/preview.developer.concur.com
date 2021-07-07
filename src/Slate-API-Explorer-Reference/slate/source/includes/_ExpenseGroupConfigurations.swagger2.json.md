

<h2 id="expense-group-configurations">Expense Group Configurations v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Expense Group Configurations specify the allowed expense types, policies, payment types, and expense settings allowed for the expense group. This API provides methods to view the expense group details by user or by expense group ID.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

<h3 id="expense-group-configurations-resources">Resources</h3>

#### get__expense_expensegroupconfigurations

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations \
  -H 'Accept: application/json'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/expensegroupconfigurations`

*Get an expense group configuration*

Gets the configuration of an expense group.

<h3 id="get__expense_expensegroupconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|false|The login ID of the user associated with this expense group configuration. The user must have the Web Services Admin role to use this parameter.|
|offset|query|string|false|The starting point of the next set of results, after the limit specified in the limit field has been reached.|
|limit|query|integer(int32)|false|The number of records to return Default value: 10|

> Example responses

> 200 Response

```json
{
  "Items": {
    "AllowUserDigitalTaxInvoice": true,
    "AllowUserRegisterYodlee": true,
    "AttendeeListFormID": "string",
    "AttendeeListFormName": "string",
    "AttendeeTypes": {
      "Code": "string",
      "Name": "string"
    },
    "CashAdvance": {
      "AllowUserCarryBalance": true,
      "AllowUserLinkMultiple": true,
      "AllowUserUpdateExchangeRate": true,
      "Name": "string",
      "WorkflowID": "string"
    },
    "ID": "string",
    "Name": "string",
    "PaymentTypes": {
      "ID": "string",
      "IsDefault": true,
      "Name": "string"
    },
    "Policies": {
      "ExpenseTypes": {
        "Code": "string",
        "ExpenseCode": "string",
        "Name": "string"
      },
      "ID": "string",
      "IsDefault": true,
      "IsInheritable": true,
      "Name": "string"
    },
    "URI": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ExpenseGroupConfigurationCollection>
  <Items>
    <AllowUserDigitalTaxInvoice>true</AllowUserDigitalTaxInvoice>
    <AllowUserRegisterYodlee>true</AllowUserRegisterYodlee>
    <AttendeeListFormID>string</AttendeeListFormID>
    <AttendeeListFormName>string</AttendeeListFormName>
    <AttendeeTypes>
      <Code>string</Code>
      <Name>string</Name>
    </AttendeeTypes>
    <CashAdvance>
      <AllowUserCarryBalance>true</AllowUserCarryBalance>
      <AllowUserLinkMultiple>true</AllowUserLinkMultiple>
      <AllowUserUpdateExchangeRate>true</AllowUserUpdateExchangeRate>
      <Name>string</Name>
      <WorkflowID>string</WorkflowID>
    </CashAdvance>
    <ID>string</ID>
    <Name>string</Name>
    <PaymentTypes>
      <ID>string</ID>
      <IsDefault>true</IsDefault>
      <Name>string</Name>
    </PaymentTypes>
    <Policies>
      <ExpenseTypes>
        <Code>string</Code>
        <ExpenseCode>string</ExpenseCode>
        <Name>string</Name>
      </ExpenseTypes>
      <ID>string</ID>
      <IsDefault>true</IsDefault>
      <IsInheritable>true</IsInheritable>
      <Name>string</Name>
    </Policies>
    <URI>string</URI>
  </Items>
  <NextPage>string</NextPage>
</ExpenseGroupConfigurationCollection>
```

<h3 id="get__expense_expensegroupconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ExpenseGroupConfigurationCollection](#schemaexpensegroupconfigurationcollection)|

<aside class="success">
This operation does not require authentication
</aside>

#### get__expense_expensegroupconfigurations_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations/{id} \
  -H 'Accept: application/json'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/expensegroupconfigurations/{id}`

*Get an expense group configuration by ID*

Gets an expense group configuration by ID.

<h3 id="get__expense_expensegroupconfigurations_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the expense group configuration.|
|user|query|string|false|The login ID of the user associated with this expense group configuration. The user must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "AllowUserDigitalTaxInvoice": true,
  "AllowUserRegisterYodlee": true,
  "AttendeeListFormID": "string",
  "AttendeeListFormName": "string",
  "AttendeeTypes": {
    "Code": "string",
    "Name": "string"
  },
  "CashAdvance": {
    "AllowUserCarryBalance": true,
    "AllowUserLinkMultiple": true,
    "AllowUserUpdateExchangeRate": true,
    "Name": "string",
    "WorkflowID": "string"
  },
  "ID": "string",
  "Name": "string",
  "PaymentTypes": {
    "ID": "string",
    "IsDefault": true,
    "Name": "string"
  },
  "Policies": {
    "ExpenseTypes": {
      "Code": "string",
      "ExpenseCode": "string",
      "Name": "string"
    },
    "ID": "string",
    "IsDefault": true,
    "IsInheritable": true,
    "Name": "string"
  },
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ExpenseGroupConfiguration>
  <AllowUserDigitalTaxInvoice>true</AllowUserDigitalTaxInvoice>
  <AllowUserRegisterYodlee>true</AllowUserRegisterYodlee>
  <AttendeeListFormID>string</AttendeeListFormID>
  <AttendeeListFormName>string</AttendeeListFormName>
  <AttendeeTypes>
    <Code>string</Code>
    <Name>string</Name>
  </AttendeeTypes>
  <CashAdvance>
    <AllowUserCarryBalance>true</AllowUserCarryBalance>
    <AllowUserLinkMultiple>true</AllowUserLinkMultiple>
    <AllowUserUpdateExchangeRate>true</AllowUserUpdateExchangeRate>
    <Name>string</Name>
    <WorkflowID>string</WorkflowID>
  </CashAdvance>
  <ID>string</ID>
  <Name>string</Name>
  <PaymentTypes>
    <ID>string</ID>
    <IsDefault>true</IsDefault>
    <Name>string</Name>
  </PaymentTypes>
  <Policies>
    <ExpenseTypes>
      <Code>string</Code>
      <ExpenseCode>string</ExpenseCode>
      <Name>string</Name>
    </ExpenseTypes>
    <ID>string</ID>
    <IsDefault>true</IsDefault>
    <IsInheritable>true</IsInheritable>
    <Name>string</Name>
  </Policies>
  <URI>string</URI>
</ExpenseGroupConfiguration>
```

<h3 id="get__expense_expensegroupconfigurations_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ExpenseGroupConfiguration](#schemaexpensegroupconfiguration)|

<aside class="success">
This operation does not require authentication
</aside>

### Schemas

<h3 id="tocS_AttendeeType">AttendeeType</h3>

<a id="schemaattendeetype"></a>
<a id="schema_AttendeeType"></a>
<a id="tocSattendeetype"></a>
<a id="tocsattendeetype"></a>

```json
{
  "Code": "string",
  "Name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|The attendee type code.|
|Name|string|false|none|The name of the attendee type.|

<h3 id="tocS_CashAdvance">CashAdvance</h3>

<a id="schemacashadvance"></a>
<a id="schema_CashAdvance"></a>
<a id="tocScashadvance"></a>
<a id="tocscashadvance"></a>

```json
{
  "AllowUserCarryBalance": true,
  "AllowUserLinkMultiple": true,
  "AllowUserUpdateExchangeRate": true,
  "Name": "string",
  "WorkflowID": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowUserCarryBalance|boolean|false|none|Indicates whether users are allowed to carry a cash advance balance forward from one report to another. Format: true or false|
|AllowUserLinkMultiple|boolean|false|none|Indicates whether users are allowed to link multiple cash advances to one expense report. Format: true or false|
|AllowUserUpdateExchangeRate|boolean|false|none|Indicates whether users are allowed to update the currency exchange rate for expense entries. Format: true or false|
|Name|string|false|none|The name of the cash advance workflow.|
|WorkflowID|string|false|none|The unique identifier for the cash advance workflow. Null means there is no such workflow.|

<h3 id="tocS_ExpenseGroupConfiguration">ExpenseGroupConfiguration</h3>

<a id="schemaexpensegroupconfiguration"></a>
<a id="schema_ExpenseGroupConfiguration"></a>
<a id="tocSexpensegroupconfiguration"></a>
<a id="tocsexpensegroupconfiguration"></a>

```json
{
  "AllowUserDigitalTaxInvoice": true,
  "AllowUserRegisterYodlee": true,
  "AttendeeListFormID": "string",
  "AttendeeListFormName": "string",
  "AttendeeTypes": {
    "Code": "string",
    "Name": "string"
  },
  "CashAdvance": {
    "AllowUserCarryBalance": true,
    "AllowUserLinkMultiple": true,
    "AllowUserUpdateExchangeRate": true,
    "Name": "string",
    "WorkflowID": "string"
  },
  "ID": "string",
  "Name": "string",
  "PaymentTypes": {
    "ID": "string",
    "IsDefault": true,
    "Name": "string"
  },
  "Policies": {
    "ExpenseTypes": {
      "Code": "string",
      "ExpenseCode": "string",
      "Name": "string"
    },
    "ID": "string",
    "IsDefault": true,
    "IsInheritable": true,
    "Name": "string"
  },
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowUserDigitalTaxInvoice|boolean|false|none|Indicates whether users are allowed to upload digital tax invoices. Format: true or false|
|AllowUserRegisterYodlee|boolean|false|none|Indicates whether users in the expense group are allowed to register Yodlee credit cards. Format: true or false|
|AttendeeListFormID|string|false|none|The unique identifier for the attendee list form.|
|AttendeeListFormName|string|false|none|The name of the attendee list form.|
|AttendeeTypes|[AttendeeType](#schemaattendeetype)|false|none|none|
|CashAdvance|[CashAdvance](#schemacashadvance)|false|none|none|
|ID|string|false|none|The unique identifier of the resource.|
|Name|string|false|none|The name of the expense group configuration.|
|PaymentTypes|[PaymentType](#schemapaymenttype)|false|none|none|
|Policies|[Policy](#schemapolicy)|false|none|none|
|URI|string|false|none|The URI to the resource.|

<h3 id="tocS_ExpenseGroupConfigurationCollection">ExpenseGroupConfigurationCollection</h3>

<a id="schemaexpensegroupconfigurationcollection"></a>
<a id="schema_ExpenseGroupConfigurationCollection"></a>
<a id="tocSexpensegroupconfigurationcollection"></a>
<a id="tocsexpensegroupconfigurationcollection"></a>

```json
{
  "Items": {
    "AllowUserDigitalTaxInvoice": true,
    "AllowUserRegisterYodlee": true,
    "AttendeeListFormID": "string",
    "AttendeeListFormName": "string",
    "AttendeeTypes": {
      "Code": "string",
      "Name": "string"
    },
    "CashAdvance": {
      "AllowUserCarryBalance": true,
      "AllowUserLinkMultiple": true,
      "AllowUserUpdateExchangeRate": true,
      "Name": "string",
      "WorkflowID": "string"
    },
    "ID": "string",
    "Name": "string",
    "PaymentTypes": {
      "ID": "string",
      "IsDefault": true,
      "Name": "string"
    },
    "Policies": {
      "ExpenseTypes": {
        "Code": "string",
        "ExpenseCode": "string",
        "Name": "string"
      },
      "ID": "string",
      "IsDefault": true,
      "IsInheritable": true,
      "Name": "string"
    },
    "URI": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[ExpenseGroupConfiguration](#schemaexpensegroupconfiguration)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h3 id="tocS_ExpenseType">ExpenseType</h3>

<a id="schemaexpensetype"></a>
<a id="schema_ExpenseType"></a>
<a id="tocSexpensetype"></a>
<a id="tocsexpensetype"></a>

```json
{
  "Code": "string",
  "ExpenseCode": "string",
  "Name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|The code for the expense type. Expense types define expenses within an expense category. For example, Business Meal is an expense type in the MEALS category.|
|ExpenseCode|string|false|none|The code for the expense category. The expense category code controls the function of an expense entry. Format: OTHER - Standard, COCARMILE - Company Car, PCARMILE - Personal Car, MFUEL - Fuel For Mileage, LODGING - Lodging, MEALS - Meals, OTHERNP - Other Not Partially Approvable, JPYPTRAN - Japanese Public Transportation|
|Name|string|false|none|The name of the expense type.|

<h3 id="tocS_PaymentType">PaymentType</h3>

<a id="schemapaymenttype"></a>
<a id="schema_PaymentType"></a>
<a id="tocSpaymenttype"></a>
<a id="tocspaymenttype"></a>

```json
{
  "ID": "string",
  "IsDefault": true,
  "Name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|The unique identifier of the resource.|
|IsDefault|boolean|false|none|Determines whether this payment type is the default. Format: true or false|
|Name|string|false|none|The name of the payment type.|

<h3 id="tocS_Policy">Policy</h3>

<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "ExpenseTypes": {
    "Code": "string",
    "ExpenseCode": "string",
    "Name": "string"
  },
  "ID": "string",
  "IsDefault": true,
  "IsInheritable": true,
  "Name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExpenseTypes|[ExpenseType](#schemaexpensetype)|false|none|none|
|ID|string|false|none|The unique identifier of the resource.|
|IsDefault|boolean|false|none|Indicates whether this policy is the default. Format: true or false|
|IsInheritable|boolean|false|none|Indicates whether the descendent nodes in the Expense Feature Hierarchy are covered by this policy. Format: true or false|
|Name|string|false|none|The name of the policy.|

