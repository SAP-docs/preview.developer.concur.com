

<h2 id="itemizations">Itemizations v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Expense Entry Itemizations are children of an expense entry that subdivide the expense. A common use case for itemizations is on a hotel bill, which can have separate itemizations for room rate, room tax, and services such as laundry or minibar.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>





    

    

<h3 id="itemizations-resources">Resources</h3>

#### get__expense_itemizations

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/itemizations \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/itemizations HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/itemizations',
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
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/itemizations',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/itemizations', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/itemizations', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/itemizations");
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
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/itemizations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/itemizations`

*Get expense itemizations*

Gets all expense itemizations owned by the user, with optional filtering parameters.

<h3 id="get__expense_itemizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportID|query|string|false|The report ID of the itemizations to be retrieved.  Format: An alpha-numeric string|
|entryID|query|string|false|The entry ID for the itemizations to be retrieved.|
|expenseTypeCode|query|string|false|The expense type code for the itemizations to be retrieved.|
|offset|query|string|false|The starting point of the next set of results, after the limit specified in the limit field has been reached.|
|limit|query|integer(int32)|false|The number of records to return. Default value: 25|
|user|query|string|false|The login ID of the user who owns the itemizations. The user must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "Items": {
    "AllocationType": "string",
    "ApprovedAmount": 0,
    "Custom1": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom2": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom3": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom4": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom5": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom6": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom7": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom8": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom9": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom10": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom11": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom12": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom13": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom14": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom15": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom16": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom17": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom18": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom19": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom20": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom21": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom22": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom23": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom24": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom25": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom26": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom27": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom28": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom29": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom30": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom37": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom38": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom39": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom40": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom41": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom42": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom43": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom44": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom45": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom46": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Description": "string",
    "EntryID": "string",
    "ExpenseTypeCode": "string",
    "ExpenseTypeName": "string",
    "HasComments": true,
    "HasExceptions": true,
    "ID": "string",
    "IsBillable": true,
    "IsImageRequired": true,
    "IsPersonal": true,
    "LastModified": "2019-08-24T14:15:22Z",
    "LocationCountry": "string",
    "LocationID": "string",
    "LocationName": "string",
    "LocationSubdivision": "string",
    "OrgUnit1": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "OrgUnit2": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "OrgUnit3": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "OrgUnit4": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "OrgUnit5": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "OrgUnit6": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "PostedAmount": 0,
    "ReportID": "string",
    "ReportOwnerID": "string",
    "SpendCategoryCode": "string",
    "SpendCategoryName": "string",
    "TransactionAmount": 0,
    "TransactionDate": "2019-08-24T14:15:22Z",
    "URI": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ItemizationCollection>
  <Items>
    <AllocationType>string</AllocationType>
    <ApprovedAmount>0</ApprovedAmount>
    <Custom1>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom1>
    <Custom2>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom2>
    <Custom3>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom3>
    <Custom4>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom4>
    <Custom5>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom5>
    <Custom6>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom6>
    <Custom7>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom7>
    <Custom8>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom8>
    <Custom9>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom9>
    <Custom10>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom10>
    <Custom11>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom11>
    <Custom12>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom12>
    <Custom13>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom13>
    <Custom14>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom14>
    <Custom15>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom15>
    <Custom16>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom16>
    <Custom17>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom17>
    <Custom18>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom18>
    <Custom19>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom19>
    <Custom20>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom20>
    <Custom21>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom21>
    <Custom22>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom22>
    <Custom23>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom23>
    <Custom24>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom24>
    <Custom25>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom25>
    <Custom26>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom26>
    <Custom27>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom27>
    <Custom28>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom28>
    <Custom29>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom29>
    <Custom30>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom30>
    <Custom37>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom37>
    <Custom38>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom38>
    <Custom39>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom39>
    <Custom40>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom40>
    <Custom41>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom41>
    <Custom42>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom42>
    <Custom43>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom43>
    <Custom44>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom44>
    <Custom45>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom45>
    <Custom46>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom46>
    <Description>string</Description>
    <EntryID>string</EntryID>
    <ExpenseTypeCode>string</ExpenseTypeCode>
    <ExpenseTypeName>string</ExpenseTypeName>
    <HasComments>true</HasComments>
    <HasExceptions>true</HasExceptions>
    <ID>string</ID>
    <IsBillable>true</IsBillable>
    <IsImageRequired>true</IsImageRequired>
    <IsPersonal>true</IsPersonal>
    <LastModified>2019-08-24T14:15:22Z</LastModified>
    <LocationCountry>string</LocationCountry>
    <LocationID>string</LocationID>
    <LocationName>string</LocationName>
    <LocationSubdivision>string</LocationSubdivision>
    <OrgUnit1>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </OrgUnit1>
    <OrgUnit2>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </OrgUnit2>
    <OrgUnit3>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </OrgUnit3>
    <OrgUnit4>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </OrgUnit4>
    <OrgUnit5>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </OrgUnit5>
    <OrgUnit6>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </OrgUnit6>
    <PostedAmount>0</PostedAmount>
    <ReportID>string</ReportID>
    <ReportOwnerID>string</ReportOwnerID>
    <SpendCategoryCode>string</SpendCategoryCode>
    <SpendCategoryName>string</SpendCategoryName>
    <TransactionAmount>0</TransactionAmount>
    <TransactionDate>2019-08-24T14:15:22Z</TransactionDate>
    <URI>string</URI>
  </Items>
  <NextPage>string</NextPage>
</ItemizationCollection>
```

<h3 id="get__expense_itemizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ItemizationCollection](#schemaitemizationcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### post__expense_itemizations

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/expense/itemizations \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://www.concursolutions.com/api/v3.0/expense/itemizations HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "Comment": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom25": "string",
  "Custom26": "string",
  "Custom27": "string",
  "Custom28": "string",
  "Custom29": "string",
  "Custom3": "string",
  "Custom30": "string",
  "Custom31": "string",
  "Custom32": "string",
  "Custom33": "string",
  "Custom34": "string",
  "Custom35": "string",
  "Custom36": "string",
  "Custom37": "string",
  "Custom38": "string",
  "Custom39": "string",
  "Custom4": "string",
  "Custom40": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Description": "string",
  "EntryID": "string",
  "ExpenseTypeCode": "string",
  "IsBillable": true,
  "IsPersonal": true,
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "TransactionAmount": 0,
  "TransactionDate": "2019-08-24T14:15:22Z"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/itemizations',
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
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/expense/itemizations',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.concursolutions.com/api/v3.0/expense/itemizations', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/expense/itemizations', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/itemizations");
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
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/expense/itemizations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /expense/itemizations`

*Create expense itemization*

Creates a new expense itemization for the specified expense entry.

> Body parameter

```json
{
  "Comment": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom25": "string",
  "Custom26": "string",
  "Custom27": "string",
  "Custom28": "string",
  "Custom29": "string",
  "Custom3": "string",
  "Custom30": "string",
  "Custom31": "string",
  "Custom32": "string",
  "Custom33": "string",
  "Custom34": "string",
  "Custom35": "string",
  "Custom36": "string",
  "Custom37": "string",
  "Custom38": "string",
  "Custom39": "string",
  "Custom4": "string",
  "Custom40": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Description": "string",
  "EntryID": "string",
  "ExpenseTypeCode": "string",
  "IsBillable": true,
  "IsPersonal": true,
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "TransactionAmount": 0,
  "TransactionDate": "2019-08-24T14:15:22Z"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ItemizationPost>
  <Comment>string</Comment>
  <Custom1>string</Custom1>
  <Custom10>string</Custom10>
  <Custom11>string</Custom11>
  <Custom12>string</Custom12>
  <Custom13>string</Custom13>
  <Custom14>string</Custom14>
  <Custom15>string</Custom15>
  <Custom16>string</Custom16>
  <Custom17>string</Custom17>
  <Custom18>string</Custom18>
  <Custom19>string</Custom19>
  <Custom2>string</Custom2>
  <Custom20>string</Custom20>
  <Custom21>string</Custom21>
  <Custom22>string</Custom22>
  <Custom23>string</Custom23>
  <Custom24>string</Custom24>
  <Custom25>string</Custom25>
  <Custom26>string</Custom26>
  <Custom27>string</Custom27>
  <Custom28>string</Custom28>
  <Custom29>string</Custom29>
  <Custom3>string</Custom3>
  <Custom30>string</Custom30>
  <Custom31>string</Custom31>
  <Custom32>string</Custom32>
  <Custom33>string</Custom33>
  <Custom34>string</Custom34>
  <Custom35>string</Custom35>
  <Custom36>string</Custom36>
  <Custom37>string</Custom37>
  <Custom38>string</Custom38>
  <Custom39>string</Custom39>
  <Custom4>string</Custom4>
  <Custom40>string</Custom40>
  <Custom5>string</Custom5>
  <Custom6>string</Custom6>
  <Custom7>string</Custom7>
  <Custom8>string</Custom8>
  <Custom9>string</Custom9>
  <Description>string</Description>
  <EntryID>string</EntryID>
  <ExpenseTypeCode>string</ExpenseTypeCode>
  <IsBillable>true</IsBillable>
  <IsPersonal>true</IsPersonal>
  <OrgUnit1>string</OrgUnit1>
  <OrgUnit2>string</OrgUnit2>
  <OrgUnit3>string</OrgUnit3>
  <OrgUnit4>string</OrgUnit4>
  <OrgUnit5>string</OrgUnit5>
  <OrgUnit6>string</OrgUnit6>
  <TransactionAmount>0</TransactionAmount>
  <TransactionDate>2019-08-24T14:15:22Z</TransactionDate>
</ItemizationPost>
```

<h3 id="post__expense_itemizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|false|The login ID of the user who owns the itemizations. The user must have the Web Services Admin role to use this parameter.|
|body|body|[ItemizationPost](#schemaitemizationpost)|true|The expense itemization object to create.|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<CreateResponse>
  <ID>string</ID>
  <URI>string</URI>
</CreateResponse>
```

<h3 id="post__expense_itemizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreateResponse](#schemacreateresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### get__expense_itemizations_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/itemizations/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/itemizations/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}',
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
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}");
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
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/itemizations/{id}`

*Get a single expense itemization*

Gets the specified expense itemization.

<h3 id="get__expense_itemizations_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the expense itemization.|
|user|query|string|false|The login ID of the user who owns the itemizations. The user must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "AllocationType": "string",
  "ApprovedAmount": 0,
  "Custom1": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom2": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom3": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom4": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom5": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom6": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom7": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom8": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom9": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom10": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom11": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom12": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom13": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom14": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom15": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom16": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom17": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom18": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom19": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom20": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom21": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom22": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom23": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom24": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom25": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom26": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom27": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom28": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom29": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom30": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom37": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom38": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom39": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom40": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom41": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom42": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom43": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom44": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom45": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom46": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Description": "string",
  "EntryID": "string",
  "ExpenseTypeCode": "string",
  "ExpenseTypeName": "string",
  "HasComments": true,
  "HasExceptions": true,
  "ID": "string",
  "IsBillable": true,
  "IsImageRequired": true,
  "IsPersonal": true,
  "LastModified": "2019-08-24T14:15:22Z",
  "LocationCountry": "string",
  "LocationID": "string",
  "LocationName": "string",
  "LocationSubdivision": "string",
  "OrgUnit1": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "OrgUnit2": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "OrgUnit3": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "OrgUnit4": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "OrgUnit5": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "OrgUnit6": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "PostedAmount": 0,
  "ReportID": "string",
  "ReportOwnerID": "string",
  "SpendCategoryCode": "string",
  "SpendCategoryName": "string",
  "TransactionAmount": 0,
  "TransactionDate": "2019-08-24T14:15:22Z",
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ItemizationGet>
  <AllocationType>string</AllocationType>
  <ApprovedAmount>0</ApprovedAmount>
  <Custom1>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom1>
  <Custom2>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom2>
  <Custom3>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom3>
  <Custom4>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom4>
  <Custom5>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom5>
  <Custom6>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom6>
  <Custom7>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom7>
  <Custom8>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom8>
  <Custom9>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom9>
  <Custom10>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom10>
  <Custom11>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom11>
  <Custom12>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom12>
  <Custom13>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom13>
  <Custom14>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom14>
  <Custom15>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom15>
  <Custom16>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom16>
  <Custom17>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom17>
  <Custom18>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom18>
  <Custom19>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom19>
  <Custom20>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom20>
  <Custom21>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom21>
  <Custom22>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom22>
  <Custom23>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom23>
  <Custom24>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom24>
  <Custom25>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom25>
  <Custom26>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom26>
  <Custom27>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom27>
  <Custom28>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom28>
  <Custom29>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom29>
  <Custom30>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom30>
  <Custom37>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom37>
  <Custom38>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom38>
  <Custom39>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom39>
  <Custom40>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom40>
  <Custom41>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom41>
  <Custom42>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom42>
  <Custom43>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom43>
  <Custom44>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom44>
  <Custom45>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom45>
  <Custom46>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom46>
  <Description>string</Description>
  <EntryID>string</EntryID>
  <ExpenseTypeCode>string</ExpenseTypeCode>
  <ExpenseTypeName>string</ExpenseTypeName>
  <HasComments>true</HasComments>
  <HasExceptions>true</HasExceptions>
  <ID>string</ID>
  <IsBillable>true</IsBillable>
  <IsImageRequired>true</IsImageRequired>
  <IsPersonal>true</IsPersonal>
  <LastModified>2019-08-24T14:15:22Z</LastModified>
  <LocationCountry>string</LocationCountry>
  <LocationID>string</LocationID>
  <LocationName>string</LocationName>
  <LocationSubdivision>string</LocationSubdivision>
  <OrgUnit1>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </OrgUnit1>
  <OrgUnit2>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </OrgUnit2>
  <OrgUnit3>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </OrgUnit3>
  <OrgUnit4>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </OrgUnit4>
  <OrgUnit5>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </OrgUnit5>
  <OrgUnit6>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </OrgUnit6>
  <PostedAmount>0</PostedAmount>
  <ReportID>string</ReportID>
  <ReportOwnerID>string</ReportOwnerID>
  <SpendCategoryCode>string</SpendCategoryCode>
  <SpendCategoryName>string</SpendCategoryName>
  <TransactionAmount>0</TransactionAmount>
  <TransactionDate>2019-08-24T14:15:22Z</TransactionDate>
  <URI>string</URI>
</ItemizationGet>
```

<h3 id="get__expense_itemizations_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ItemizationGet](#schemaitemizationget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### put__expense_itemizations_{id}

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/expense/itemizations/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://www.concursolutions.com/api/v3.0/expense/itemizations/{id} HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "Comment": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom25": "string",
  "Custom26": "string",
  "Custom27": "string",
  "Custom28": "string",
  "Custom29": "string",
  "Custom3": "string",
  "Custom30": "string",
  "Custom31": "string",
  "Custom32": "string",
  "Custom33": "string",
  "Custom34": "string",
  "Custom35": "string",
  "Custom36": "string",
  "Custom37": "string",
  "Custom38": "string",
  "Custom39": "string",
  "Custom4": "string",
  "Custom40": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Description": "string",
  "EntryID": "string",
  "ExpenseTypeCode": "string",
  "IsBillable": true,
  "IsPersonal": true,
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "TransactionAmount": 0,
  "TransactionDate": "2019-08-24T14:15:22Z"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}',
{
  method: 'PUT',
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
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.put('https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /expense/itemizations/{id}`

*Update an expense itemization*

Updates the specified expense itemization. Only the fields provided in the supplied object are updated. Missing fields will not be altered.

> Body parameter

```json
{
  "Comment": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom25": "string",
  "Custom26": "string",
  "Custom27": "string",
  "Custom28": "string",
  "Custom29": "string",
  "Custom3": "string",
  "Custom30": "string",
  "Custom31": "string",
  "Custom32": "string",
  "Custom33": "string",
  "Custom34": "string",
  "Custom35": "string",
  "Custom36": "string",
  "Custom37": "string",
  "Custom38": "string",
  "Custom39": "string",
  "Custom4": "string",
  "Custom40": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Description": "string",
  "EntryID": "string",
  "ExpenseTypeCode": "string",
  "IsBillable": true,
  "IsPersonal": true,
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "TransactionAmount": 0,
  "TransactionDate": "2019-08-24T14:15:22Z"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ItemizationPut>
  <Comment>string</Comment>
  <Custom1>string</Custom1>
  <Custom10>string</Custom10>
  <Custom11>string</Custom11>
  <Custom12>string</Custom12>
  <Custom13>string</Custom13>
  <Custom14>string</Custom14>
  <Custom15>string</Custom15>
  <Custom16>string</Custom16>
  <Custom17>string</Custom17>
  <Custom18>string</Custom18>
  <Custom19>string</Custom19>
  <Custom2>string</Custom2>
  <Custom20>string</Custom20>
  <Custom21>string</Custom21>
  <Custom22>string</Custom22>
  <Custom23>string</Custom23>
  <Custom24>string</Custom24>
  <Custom25>string</Custom25>
  <Custom26>string</Custom26>
  <Custom27>string</Custom27>
  <Custom28>string</Custom28>
  <Custom29>string</Custom29>
  <Custom3>string</Custom3>
  <Custom30>string</Custom30>
  <Custom31>string</Custom31>
  <Custom32>string</Custom32>
  <Custom33>string</Custom33>
  <Custom34>string</Custom34>
  <Custom35>string</Custom35>
  <Custom36>string</Custom36>
  <Custom37>string</Custom37>
  <Custom38>string</Custom38>
  <Custom39>string</Custom39>
  <Custom4>string</Custom4>
  <Custom40>string</Custom40>
  <Custom5>string</Custom5>
  <Custom6>string</Custom6>
  <Custom7>string</Custom7>
  <Custom8>string</Custom8>
  <Custom9>string</Custom9>
  <Description>string</Description>
  <EntryID>string</EntryID>
  <ExpenseTypeCode>string</ExpenseTypeCode>
  <IsBillable>true</IsBillable>
  <IsPersonal>true</IsPersonal>
  <OrgUnit1>string</OrgUnit1>
  <OrgUnit2>string</OrgUnit2>
  <OrgUnit3>string</OrgUnit3>
  <OrgUnit4>string</OrgUnit4>
  <OrgUnit5>string</OrgUnit5>
  <OrgUnit6>string</OrgUnit6>
  <TransactionAmount>0</TransactionAmount>
  <TransactionDate>2019-08-24T14:15:22Z</TransactionDate>
</ItemizationPut>
```

<h3 id="put__expense_itemizations_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the expense itemization.|
|user|query|string|false|The login ID of the user who owns the itemizations. The user must have the Web Services Admin role to use this parameter.|
|body|body|[ItemizationPut](#schemaitemizationput)|true|The partial or complete expense itemization object to update.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="put__expense_itemizations_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### delete__expense_itemizations_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE https://www.concursolutions.com/api/v3.0/expense/itemizations/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE https://www.concursolutions.com/api/v3.0/expense/itemizations/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}',
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
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete 'https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}");
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
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://www.concursolutions.com/api/v3.0/expense/itemizations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /expense/itemizations/{id}`

*Delete an expense itemization*

Deletes the specified expense itemization.

<h3 id="delete__expense_itemizations_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the expense itemization to delete.|
|user|query|string|false|The login ID of the user who owns the itemizations. The user must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="delete__expense_itemizations_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

### Schemas

<h3 id="tocS_CreateResponse">CreateResponse</h3>

<a id="schemacreateresponse"></a>
<a id="schema_CreateResponse"></a>
<a id="tocScreateresponse"></a>
<a id="tocscreateresponse"></a>

```json
{
  "ID": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|none|
|URI|string|false|none|none|

<h3 id="tocS_CustomField">CustomField</h3>

<a id="schemacustomfield"></a>
<a id="schema_CustomField"></a>
<a id="tocScustomfield"></a>
<a id="tocscustomfield"></a>

```json
{
  "Code": "string",
  "ListItemID": "string",
  "Type": "string",
  "Value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|For list fields, this is the list item code.|
|ListItemID|string|false|none|For list fields, this is the list item ID.|
|Type|string|false|none|The custom field type. Possible values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text|
|Value|string|false|none|The value in the Org Unit or Custom field. For list fields, this is the name of the list item.  Maximum length: 48 characters|

<h3 id="tocS_ItemizationCollection">ItemizationCollection</h3>

<a id="schemaitemizationcollection"></a>
<a id="schema_ItemizationCollection"></a>
<a id="tocSitemizationcollection"></a>
<a id="tocsitemizationcollection"></a>

```json
{
  "Items": {
    "AllocationType": "string",
    "ApprovedAmount": 0,
    "Custom1": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom2": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom3": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom4": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom5": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom6": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom7": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom8": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom9": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom10": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom11": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom12": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom13": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom14": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom15": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom16": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom17": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom18": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom19": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom20": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom21": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom22": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom23": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom24": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom25": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom26": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom27": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom28": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom29": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom30": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom37": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom38": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom39": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom40": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom41": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom42": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom43": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom44": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom45": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom46": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Description": "string",
    "EntryID": "string",
    "ExpenseTypeCode": "string",
    "ExpenseTypeName": "string",
    "HasComments": true,
    "HasExceptions": true,
    "ID": "string",
    "IsBillable": true,
    "IsImageRequired": true,
    "IsPersonal": true,
    "LastModified": "2019-08-24T14:15:22Z",
    "LocationCountry": "string",
    "LocationID": "string",
    "LocationName": "string",
    "LocationSubdivision": "string",
    "OrgUnit1": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "OrgUnit2": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "OrgUnit3": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "OrgUnit4": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "OrgUnit5": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "OrgUnit6": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "PostedAmount": 0,
    "ReportID": "string",
    "ReportOwnerID": "string",
    "SpendCategoryCode": "string",
    "SpendCategoryName": "string",
    "TransactionAmount": 0,
    "TransactionDate": "2019-08-24T14:15:22Z",
    "URI": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[ItemizationGet](#schemaitemizationget)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h3 id="tocS_ItemizationGet">ItemizationGet</h3>

<a id="schemaitemizationget"></a>
<a id="schema_ItemizationGet"></a>
<a id="tocSitemizationget"></a>
<a id="tocsitemizationget"></a>

```json
{
  "AllocationType": "string",
  "ApprovedAmount": 0,
  "Custom1": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom2": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom3": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom4": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom5": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom6": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom7": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom8": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom9": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom10": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom11": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom12": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom13": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom14": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom15": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom16": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom17": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom18": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom19": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom20": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom21": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom22": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom23": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom24": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom25": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom26": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom27": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom28": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom29": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom30": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom37": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom38": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom39": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom40": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom41": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom42": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom43": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom44": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom45": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom46": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Description": "string",
  "EntryID": "string",
  "ExpenseTypeCode": "string",
  "ExpenseTypeName": "string",
  "HasComments": true,
  "HasExceptions": true,
  "ID": "string",
  "IsBillable": true,
  "IsImageRequired": true,
  "IsPersonal": true,
  "LastModified": "2019-08-24T14:15:22Z",
  "LocationCountry": "string",
  "LocationID": "string",
  "LocationName": "string",
  "LocationSubdivision": "string",
  "OrgUnit1": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "OrgUnit2": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "OrgUnit3": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "OrgUnit4": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "OrgUnit5": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "OrgUnit6": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "PostedAmount": 0,
  "ReportID": "string",
  "ReportOwnerID": "string",
  "SpendCategoryCode": "string",
  "SpendCategoryName": "string",
  "TransactionAmount": 0,
  "TransactionDate": "2019-08-24T14:15:22Z",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllocationType|string|false|none|The type of allocation for the itemization. Supported values: P - partial allocation, F - full allocation, N - no allocation.|
|ApprovedAmount|number(double)|false|none|The approved amount of the expense itemization, in the report currency.|
|Custom1|[CustomField](#schemacustomfield)|false|none|none|
|Custom2|[CustomField](#schemacustomfield)|false|none|none|
|Custom3|[CustomField](#schemacustomfield)|false|none|none|
|Custom4|[CustomField](#schemacustomfield)|false|none|none|
|Custom5|[CustomField](#schemacustomfield)|false|none|none|
|Custom6|[CustomField](#schemacustomfield)|false|none|none|
|Custom7|[CustomField](#schemacustomfield)|false|none|none|
|Custom8|[CustomField](#schemacustomfield)|false|none|none|
|Custom9|[CustomField](#schemacustomfield)|false|none|none|
|Custom10|[CustomField](#schemacustomfield)|false|none|none|
|Custom11|[CustomField](#schemacustomfield)|false|none|none|
|Custom12|[CustomField](#schemacustomfield)|false|none|none|
|Custom13|[CustomField](#schemacustomfield)|false|none|none|
|Custom14|[CustomField](#schemacustomfield)|false|none|none|
|Custom15|[CustomField](#schemacustomfield)|false|none|none|
|Custom16|[CustomField](#schemacustomfield)|false|none|none|
|Custom17|[CustomField](#schemacustomfield)|false|none|none|
|Custom18|[CustomField](#schemacustomfield)|false|none|none|
|Custom19|[CustomField](#schemacustomfield)|false|none|none|
|Custom20|[CustomField](#schemacustomfield)|false|none|none|
|Custom21|[CustomField](#schemacustomfield)|false|none|none|
|Custom22|[CustomField](#schemacustomfield)|false|none|none|
|Custom23|[CustomField](#schemacustomfield)|false|none|none|
|Custom24|[CustomField](#schemacustomfield)|false|none|none|
|Custom25|[CustomField](#schemacustomfield)|false|none|none|
|Custom26|[CustomField](#schemacustomfield)|false|none|none|
|Custom27|[CustomField](#schemacustomfield)|false|none|none|
|Custom28|[CustomField](#schemacustomfield)|false|none|none|
|Custom29|[CustomField](#schemacustomfield)|false|none|none|
|Custom30|[CustomField](#schemacustomfield)|false|none|none|
|Custom37|[CustomField](#schemacustomfield)|false|none|none|
|Custom38|[CustomField](#schemacustomfield)|false|none|none|
|Custom39|[CustomField](#schemacustomfield)|false|none|none|
|Custom40|[CustomField](#schemacustomfield)|false|none|none|
|Custom41|[CustomField](#schemacustomfield)|false|none|none|
|Custom42|[CustomField](#schemacustomfield)|false|none|none|
|Custom43|[CustomField](#schemacustomfield)|false|none|none|
|Custom44|[CustomField](#schemacustomfield)|false|none|none|
|Custom45|[CustomField](#schemacustomfield)|false|none|none|
|Custom46|[CustomField](#schemacustomfield)|false|none|none|
|Description|string|false|none|The description of the expense. Maximum length: 64 characters|
|EntryID|string|false|none|The ID of the expense entry that is the parent for the itemization.|
|ExpenseTypeCode|string|false|none|The code for the expense type. Use the "GET ExpenseGroupConfigurations" endpoint to learn the expense type code for expense types that are active for this report's policy.|
|ExpenseTypeName|string|false|none|The name of the expense type, localized to the user's language.|
|HasComments|boolean|false|none|Indicates whether the expense has comments. Format: true or false|
|HasExceptions|boolean|false|none|Indicates whether the expense has exceptions. Format: true or false|
|ID|string|false|none|The unique identifier of the resource.|
|IsBillable|boolean|false|none|Indicates whether the itemization is billable. Format: true or false|
|IsImageRequired|boolean|false|none|Indicates whether a receipt image is required for the entry. Format: true or false|
|IsPersonal|boolean|false|none|Indicates whether the itemization is personal (that is, non-reimbursable). Format: true or false|
|LastModified|string(date-time)|false|none|The UTC date when the itemization was last modified.|
|LocationCountry|string|false|none|The country where the expense was incurred. Format: 2-letter ISO 3166-1 country code|
|LocationID|string|false|none|The unique identifier for the location where the expense was incurred.|
|LocationName|string|false|none|The location where the expense was incurred, usually the city name.|
|LocationSubdivision|string|false|none|The state, province, or other country subdivision where the expense was incurred. Format: ISO 3166-2:2007 country subdivision|
|OrgUnit1|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit2|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit3|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit4|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit5|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit6|[CustomField](#schemacustomfield)|false|none|none|
|PostedAmount|number(double)|false|none|The amount of the expense itemization, in the report currency.|
|ReportID|string|false|none|The ID of the report that is the parent for the itemization.|
|ReportOwnerID|string|false|none|The login ID for the report owner.|
|SpendCategoryCode|string|false|none|The code for the spending category that is specified for this itemization.|
|SpendCategoryName|string|false|none|The name of the spending category that is specified for this itemization, localized to the user's language.|
|TransactionAmount|number(double)|false|none|The amount of the expense itemization, in the transaction currency of the parent expense entry.|
|TransactionDate|string(date-time)|false|none|The date when the good or service associated with this itemization was provided. Format: YYYY-MM-DD|
|URI|string|false|none|The URI to the resource.|

<h3 id="tocS_ItemizationPost">ItemizationPost</h3>

<a id="schemaitemizationpost"></a>
<a id="schema_ItemizationPost"></a>
<a id="tocSitemizationpost"></a>
<a id="tocsitemizationpost"></a>

```json
{
  "Comment": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom25": "string",
  "Custom26": "string",
  "Custom27": "string",
  "Custom28": "string",
  "Custom29": "string",
  "Custom3": "string",
  "Custom30": "string",
  "Custom31": "string",
  "Custom32": "string",
  "Custom33": "string",
  "Custom34": "string",
  "Custom35": "string",
  "Custom36": "string",
  "Custom37": "string",
  "Custom38": "string",
  "Custom39": "string",
  "Custom4": "string",
  "Custom40": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Description": "string",
  "EntryID": "string",
  "ExpenseTypeCode": "string",
  "IsBillable": true,
  "IsPersonal": true,
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "TransactionAmount": 0,
  "TransactionDate": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|string|false|none|The expense itemization comment. Maximum length: 500 characters|
|Custom1|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom10|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom11|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom12|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom13|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom14|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom15|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom16|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom17|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom18|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom19|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom2|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom20|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom21|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom22|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom23|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom24|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom25|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom26|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom27|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom28|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom29|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom3|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom30|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom31|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom32|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom33|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom34|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom35|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom36|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom37|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom38|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom39|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom4|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom40|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom5|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom6|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom7|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom8|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom9|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Description|string|false|none|The description of the expense. Maximum length: 64 characters|
|EntryID|string|false|none|The ID of the expense entry that is the parent for the itemization. Use the "GET Entries" endpoint to learn the entry ID for the expense itemizations.|
|ExpenseTypeCode|string|false|none|The code for the expense type. Use the "GET Expense Group Configurations" endpoint to learn the expense type code for expense types that are active for this report's policy.|
|IsBillable|boolean|false|none|Indicates whether the itemization is billable. Format: true or false|
|IsPersonal|boolean|false|none|Indicates whether the itemization is personal (that is, non-reimbursable). Format: true or false|
|OrgUnit1|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|OrgUnit2|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|OrgUnit3|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|OrgUnit4|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|OrgUnit5|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|OrgUnit6|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|TransactionAmount|number(double)|false|none|The amount of the expense itemization, in the transaction currency of the parent expense entry.|
|TransactionDate|string(date-time)|false|none|The date when the good or service associated with this itemization was provided. Format: YYYY-MM-DD|

<h3 id="tocS_ItemizationPut">ItemizationPut</h3>

<a id="schemaitemizationput"></a>
<a id="schema_ItemizationPut"></a>
<a id="tocSitemizationput"></a>
<a id="tocsitemizationput"></a>

```json
{
  "Comment": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom25": "string",
  "Custom26": "string",
  "Custom27": "string",
  "Custom28": "string",
  "Custom29": "string",
  "Custom3": "string",
  "Custom30": "string",
  "Custom31": "string",
  "Custom32": "string",
  "Custom33": "string",
  "Custom34": "string",
  "Custom35": "string",
  "Custom36": "string",
  "Custom37": "string",
  "Custom38": "string",
  "Custom39": "string",
  "Custom4": "string",
  "Custom40": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Description": "string",
  "EntryID": "string",
  "ExpenseTypeCode": "string",
  "IsBillable": true,
  "IsPersonal": true,
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "TransactionAmount": 0,
  "TransactionDate": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|string|false|none|The expense itemization comment. Maximum length: 500 characters|
|Custom1|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom10|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom11|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom12|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom13|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom14|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom15|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom16|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom17|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom18|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom19|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom2|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom20|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom21|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom22|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom23|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom24|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom25|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom26|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom27|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom28|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom29|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom3|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom30|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom31|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom32|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom33|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom34|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom35|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom36|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom37|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom38|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom39|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom4|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom40|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom5|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom6|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom7|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom8|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Custom9|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|Description|string|false|none|The description of the expense. Maximum length: 64 characters|
|EntryID|string|false|none|The ID of the expense entry that is the parent for the itemization. Use the "GET Entries" endpoint to learn the entry ID for the expense itemizations.|
|ExpenseTypeCode|string|false|none|The code for the expense type. Use the "GET Expense Group Configurations" endpoint to learn the expense type code for expense types that are active for this report's policy.|
|IsBillable|boolean|false|none|Indicates whether the itemization is billable. Format: true or false|
|IsPersonal|boolean|false|none|Indicates whether the itemization is personal (that is, non-reimbursable). Format: true or false|
|OrgUnit1|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|OrgUnit2|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|OrgUnit3|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|OrgUnit4|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|OrgUnit5|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|OrgUnit6|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration. Maximum length: 64 characters|
|TransactionAmount|number(double)|false|none|The amount of the expense itemization, in the transaction currency of the parent expense entry.|
|TransactionDate|string(date-time)|false|none|The date when the good or service associated with this itemization was provided. Format: YYYY-MM-DD|

<h3 id="tocS_Void">Void</h3>

<a id="schemavoid"></a>
<a id="schema_Void"></a>
<a id="tocSvoid"></a>
<a id="tocsvoid"></a>

```json
{}

```

### Properties

*None*

