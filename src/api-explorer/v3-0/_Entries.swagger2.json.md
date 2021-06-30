---
title: Entries v3.0
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

<h1 id="entries">Entries v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Get all entries for a user, create new entries, update entries, or delete entries.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

# Authentication

- oAuth2 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication information</a> for more information.

    - Flow: clientCredentials

    - Token URL = [https://us.api.concursolutions.com/oauth2/v0](https://us.api.concursolutions.com/oauth2/v0)

<h1 id="entries-resources">Resources</h1>

## get__expense_entries

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/entries \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/entries HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/entries',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/entries',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/entries', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/entries', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/entries");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/entries", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/entries`

*Get expense entries*

Gets all expense entries owned by the user.

<h3 id="get__expense_entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportID|query|string|false|The report ID of the entries to be retrieved.  Format: An alpha-numeric GUID string.|
|paymentTypeID|query|string|false|The ID of the payment type of the entries to be retrieved.|
|batchID|query|string|false|The batch ID for the entries to be retrieved. The batch ID identifies the batch that contains the report payee associated with the entries.|
|isBillable|query|boolean|false|Determines whether the operation retrieves entries that are billable. Format: true or false|
|attendeeTypeCode|query|string|false|The ID of the attendee type for the entries to be retrieved.|
|hasAttendees|query|boolean|false|Determines whether the operation retrieves entries that have attendees. Format: true or false|
|hasVAT|query|boolean|false|Determines whether the operation retrieves entries that have VAT details. Format: true or false|
|expenseTypeCode|query|string|false|The code for the expense type for the entries to be retrieved.|
|attendeeID|query|string|false|The attendee associated with the entries to be retrieved.|
|offset|query|string|false|The starting point of the next set of results, after the limit specified in the limit field has been reached.|
|limit|query|integer(int32)|false|The number of records to return. Default value: 25|
|user|query|string|false|The login ID of the user who owns the entries. The user must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "Items": {
    "AllocationType": "string",
    "ApprovedAmount": 0,
    "CompanyCardTransactionID": "string",
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
    "Custom31": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom32": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom33": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom34": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom35": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom36": {
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
    "Description": "string",
    "ElectronicReceiptID": "string",
    "EmployeeBankAccountID": "string",
    "ExchangeRate": 0,
    "ExpenseTypeCode": "string",
    "ExpenseTypeName": "string",
    "FormID": "string",
    "HasAppliedCashAdvance": true,
    "HasAttendees": true,
    "HasComments": true,
    "HasExceptions": true,
    "HasImage": true,
    "HasItemizations": true,
    "HasVAT": true,
    "ID": "string",
    "IsBillable": true,
    "IsImageRequired": true,
    "IsPaidByExpensePay": true,
    "IsPersonal": true,
    "IsPersonalCardCharge": true,
    "Journey": {
      "BusinessDistance": 0,
      "EndLocation": "string",
      "NumberOfPassengers": 0,
      "OdometerEnd": 0,
      "OdometerStart": 0,
      "PersonalDistance": 0,
      "StartLocation": "string",
      "UnitOfMeasure": "string",
      "VehicleID": "string"
    },
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
    "PaymentTypeID": "string",
    "PaymentTypeName": "string",
    "PostedAmount": 0,
    "ReceiptReceived": true,
    "ReportID": "string",
    "ReportOwnerID": "string",
    "SpendCategoryCode": "string",
    "SpendCategoryName": "string",
    "TaxReceiptType": "string",
    "TransactionAmount": 0,
    "TransactionCurrencyCode": "string",
    "TransactionDate": "2019-08-24T14:15:22Z",
    "TripID": "string",
    "URI": "string",
    "VendorDescription": "string",
    "VendorListItemID": "string",
    "VendorListItemName": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<EntryCollection>
  <Items>
    <AllocationType>string</AllocationType>
    <ApprovedAmount>0</ApprovedAmount>
    <CompanyCardTransactionID>string</CompanyCardTransactionID>
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
    <Custom31>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom31>
    <Custom32>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom32>
    <Custom33>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom33>
    <Custom34>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom34>
    <Custom35>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom35>
    <Custom36>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom36>
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
    <Description>string</Description>
    <ElectronicReceiptID>string</ElectronicReceiptID>
    <EmployeeBankAccountID>string</EmployeeBankAccountID>
    <ExchangeRate>0</ExchangeRate>
    <ExpenseTypeCode>string</ExpenseTypeCode>
    <ExpenseTypeName>string</ExpenseTypeName>
    <FormID>string</FormID>
    <HasAppliedCashAdvance>true</HasAppliedCashAdvance>
    <HasAttendees>true</HasAttendees>
    <HasComments>true</HasComments>
    <HasExceptions>true</HasExceptions>
    <HasImage>true</HasImage>
    <HasItemizations>true</HasItemizations>
    <HasVAT>true</HasVAT>
    <ID>string</ID>
    <IsBillable>true</IsBillable>
    <IsImageRequired>true</IsImageRequired>
    <IsPaidByExpensePay>true</IsPaidByExpensePay>
    <IsPersonal>true</IsPersonal>
    <IsPersonalCardCharge>true</IsPersonalCardCharge>
    <Journey>
      <BusinessDistance>0</BusinessDistance>
      <EndLocation>string</EndLocation>
      <NumberOfPassengers>0</NumberOfPassengers>
      <OdometerEnd>0</OdometerEnd>
      <OdometerStart>0</OdometerStart>
      <PersonalDistance>0</PersonalDistance>
      <StartLocation>string</StartLocation>
      <UnitOfMeasure>string</UnitOfMeasure>
      <VehicleID>string</VehicleID>
    </Journey>
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
    <PaymentTypeID>string</PaymentTypeID>
    <PaymentTypeName>string</PaymentTypeName>
    <PostedAmount>0</PostedAmount>
    <ReceiptReceived>true</ReceiptReceived>
    <ReportID>string</ReportID>
    <ReportOwnerID>string</ReportOwnerID>
    <SpendCategoryCode>string</SpendCategoryCode>
    <SpendCategoryName>string</SpendCategoryName>
    <TaxReceiptType>string</TaxReceiptType>
    <TransactionAmount>0</TransactionAmount>
    <TransactionCurrencyCode>string</TransactionCurrencyCode>
    <TransactionDate>2019-08-24T14:15:22Z</TransactionDate>
    <TripID>string</TripID>
    <URI>string</URI>
    <VendorDescription>string</VendorDescription>
    <VendorListItemID>string</VendorListItemID>
    <VendorListItemName>string</VendorListItemName>
  </Items>
  <NextPage>string</NextPage>
</EntryCollection>
```

<h3 id="get__expense_entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[EntryCollection](#schemaentrycollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## post__expense_entries

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/expense/entries \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://www.concursolutions.com/api/v3.0/expense/entries HTTP/1.1
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
  "ExchangeRate": 0,
  "ExpenseTypeCode": "string",
  "IsBillable": true,
  "IsPersonal": true,
  "Journey": {
    "BusinessDistance": 0,
    "EndLocation": "string",
    "NumberOfPassengers": 0,
    "OdometerEnd": 0,
    "OdometerStart": 0,
    "PersonalDistance": 0,
    "StartLocation": "string",
    "UnitOfMeasure": "string",
    "VehicleID": "string"
  },
  "LocationID": "string",
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "PaymentTypeID": "string",
  "ReportID": "string",
  "TaxReceiptType": "string",
  "TransactionAmount": 0,
  "TransactionCurrencyCode": "string",
  "TransactionDate": "2019-08-24T14:15:22Z",
  "VendorDescription": "string",
  "VendorListItemID": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/entries',
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

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/expense/entries',
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

r = requests.post('https://www.concursolutions.com/api/v3.0/expense/entries', headers = headers)

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
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/expense/entries', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/entries");
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
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/expense/entries", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /expense/entries`

*Create expense entry*

Creates a new expense entry for the specified user.

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
  "ExchangeRate": 0,
  "ExpenseTypeCode": "string",
  "IsBillable": true,
  "IsPersonal": true,
  "Journey": {
    "BusinessDistance": 0,
    "EndLocation": "string",
    "NumberOfPassengers": 0,
    "OdometerEnd": 0,
    "OdometerStart": 0,
    "PersonalDistance": 0,
    "StartLocation": "string",
    "UnitOfMeasure": "string",
    "VehicleID": "string"
  },
  "LocationID": "string",
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "PaymentTypeID": "string",
  "ReportID": "string",
  "TaxReceiptType": "string",
  "TransactionAmount": 0,
  "TransactionCurrencyCode": "string",
  "TransactionDate": "2019-08-24T14:15:22Z",
  "VendorDescription": "string",
  "VendorListItemID": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<EntryPost>
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
  <ExchangeRate>0</ExchangeRate>
  <ExpenseTypeCode>string</ExpenseTypeCode>
  <IsBillable>true</IsBillable>
  <IsPersonal>true</IsPersonal>
  <Journey>
    <BusinessDistance>0</BusinessDistance>
    <EndLocation>string</EndLocation>
    <NumberOfPassengers>0</NumberOfPassengers>
    <OdometerEnd>0</OdometerEnd>
    <OdometerStart>0</OdometerStart>
    <PersonalDistance>0</PersonalDistance>
    <StartLocation>string</StartLocation>
    <UnitOfMeasure>string</UnitOfMeasure>
    <VehicleID>string</VehicleID>
  </Journey>
  <LocationID>string</LocationID>
  <OrgUnit1>string</OrgUnit1>
  <OrgUnit2>string</OrgUnit2>
  <OrgUnit3>string</OrgUnit3>
  <OrgUnit4>string</OrgUnit4>
  <OrgUnit5>string</OrgUnit5>
  <OrgUnit6>string</OrgUnit6>
  <PaymentTypeID>string</PaymentTypeID>
  <ReportID>string</ReportID>
  <TaxReceiptType>string</TaxReceiptType>
  <TransactionAmount>0</TransactionAmount>
  <TransactionCurrencyCode>string</TransactionCurrencyCode>
  <TransactionDate>2019-08-24T14:15:22Z</TransactionDate>
  <VendorDescription>string</VendorDescription>
  <VendorListItemID>string</VendorListItemID>
</EntryPost>
```

<h3 id="post__expense_entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|false|The login ID of the user who owns the entries. The user must have the Web Services Admin role to use this parameter.|
|body|body|[EntryPost](#schemaentrypost)|true|The expense entry object to create.|

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

<h3 id="post__expense_entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreateResponse](#schemacreateresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## get__expense_entries_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/entries/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/entries/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/entries/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/entries/{id}',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/entries/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/entries/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/entries/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/entries/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/entries/{id}`

*Get a single expense entry*

Gets the specified expense entry.

<h3 id="get__expense_entries_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The expense entry ID.|
|user|query|string|false|The login ID of the user who owns the entries. The user must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "AllocationType": "string",
  "ApprovedAmount": 0,
  "CompanyCardTransactionID": "string",
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
  "Custom31": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom32": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom33": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom34": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom35": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom36": {
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
  "Description": "string",
  "ElectronicReceiptID": "string",
  "EmployeeBankAccountID": "string",
  "ExchangeRate": 0,
  "ExpenseTypeCode": "string",
  "ExpenseTypeName": "string",
  "FormID": "string",
  "HasAppliedCashAdvance": true,
  "HasAttendees": true,
  "HasComments": true,
  "HasExceptions": true,
  "HasImage": true,
  "HasItemizations": true,
  "HasVAT": true,
  "ID": "string",
  "IsBillable": true,
  "IsImageRequired": true,
  "IsPaidByExpensePay": true,
  "IsPersonal": true,
  "IsPersonalCardCharge": true,
  "Journey": {
    "BusinessDistance": 0,
    "EndLocation": "string",
    "NumberOfPassengers": 0,
    "OdometerEnd": 0,
    "OdometerStart": 0,
    "PersonalDistance": 0,
    "StartLocation": "string",
    "UnitOfMeasure": "string",
    "VehicleID": "string"
  },
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
  "PaymentTypeID": "string",
  "PaymentTypeName": "string",
  "PostedAmount": 0,
  "ReceiptReceived": true,
  "ReportID": "string",
  "ReportOwnerID": "string",
  "SpendCategoryCode": "string",
  "SpendCategoryName": "string",
  "TaxReceiptType": "string",
  "TransactionAmount": 0,
  "TransactionCurrencyCode": "string",
  "TransactionDate": "2019-08-24T14:15:22Z",
  "TripID": "string",
  "URI": "string",
  "VendorDescription": "string",
  "VendorListItemID": "string",
  "VendorListItemName": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<EntryGet>
  <AllocationType>string</AllocationType>
  <ApprovedAmount>0</ApprovedAmount>
  <CompanyCardTransactionID>string</CompanyCardTransactionID>
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
  <Custom31>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom31>
  <Custom32>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom32>
  <Custom33>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom33>
  <Custom34>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom34>
  <Custom35>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom35>
  <Custom36>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom36>
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
  <Description>string</Description>
  <ElectronicReceiptID>string</ElectronicReceiptID>
  <EmployeeBankAccountID>string</EmployeeBankAccountID>
  <ExchangeRate>0</ExchangeRate>
  <ExpenseTypeCode>string</ExpenseTypeCode>
  <ExpenseTypeName>string</ExpenseTypeName>
  <FormID>string</FormID>
  <HasAppliedCashAdvance>true</HasAppliedCashAdvance>
  <HasAttendees>true</HasAttendees>
  <HasComments>true</HasComments>
  <HasExceptions>true</HasExceptions>
  <HasImage>true</HasImage>
  <HasItemizations>true</HasItemizations>
  <HasVAT>true</HasVAT>
  <ID>string</ID>
  <IsBillable>true</IsBillable>
  <IsImageRequired>true</IsImageRequired>
  <IsPaidByExpensePay>true</IsPaidByExpensePay>
  <IsPersonal>true</IsPersonal>
  <IsPersonalCardCharge>true</IsPersonalCardCharge>
  <Journey>
    <BusinessDistance>0</BusinessDistance>
    <EndLocation>string</EndLocation>
    <NumberOfPassengers>0</NumberOfPassengers>
    <OdometerEnd>0</OdometerEnd>
    <OdometerStart>0</OdometerStart>
    <PersonalDistance>0</PersonalDistance>
    <StartLocation>string</StartLocation>
    <UnitOfMeasure>string</UnitOfMeasure>
    <VehicleID>string</VehicleID>
  </Journey>
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
  <PaymentTypeID>string</PaymentTypeID>
  <PaymentTypeName>string</PaymentTypeName>
  <PostedAmount>0</PostedAmount>
  <ReceiptReceived>true</ReceiptReceived>
  <ReportID>string</ReportID>
  <ReportOwnerID>string</ReportOwnerID>
  <SpendCategoryCode>string</SpendCategoryCode>
  <SpendCategoryName>string</SpendCategoryName>
  <TaxReceiptType>string</TaxReceiptType>
  <TransactionAmount>0</TransactionAmount>
  <TransactionCurrencyCode>string</TransactionCurrencyCode>
  <TransactionDate>2019-08-24T14:15:22Z</TransactionDate>
  <TripID>string</TripID>
  <URI>string</URI>
  <VendorDescription>string</VendorDescription>
  <VendorListItemID>string</VendorListItemID>
  <VendorListItemName>string</VendorListItemName>
</EntryGet>
```

<h3 id="get__expense_entries_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[EntryGet](#schemaentryget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## put__expense_entries_{id}

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/expense/entries/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://www.concursolutions.com/api/v3.0/expense/entries/{id} HTTP/1.1
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
  "ExchangeRate": 0,
  "ExpenseTypeCode": "string",
  "IsBillable": true,
  "IsPersonal": true,
  "Journey": {
    "BusinessDistance": 0,
    "EndLocation": "string",
    "NumberOfPassengers": 0,
    "OdometerEnd": 0,
    "OdometerStart": 0,
    "PersonalDistance": 0,
    "StartLocation": "string",
    "UnitOfMeasure": "string",
    "VehicleID": "string"
  },
  "LocationID": "string",
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "PaymentTypeID": "string",
  "ReportID": "string",
  "TaxReceiptType": "string",
  "TransactionAmount": 0,
  "TransactionCurrencyCode": "string",
  "TransactionDate": "2019-08-24T14:15:22Z",
  "VendorDescription": "string",
  "VendorListItemID": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/entries/{id}',
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

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/expense/entries/{id}',
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

r = requests.put('https://www.concursolutions.com/api/v3.0/expense/entries/{id}', headers = headers)

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
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/expense/entries/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/entries/{id}");
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
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/expense/entries/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /expense/entries/{id}`

*Update an expense entry*

Updates the specified expense entry. Only the fields provided in the supplied object are updated. Missing fields will not be altered.

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
  "ExchangeRate": 0,
  "ExpenseTypeCode": "string",
  "IsBillable": true,
  "IsPersonal": true,
  "Journey": {
    "BusinessDistance": 0,
    "EndLocation": "string",
    "NumberOfPassengers": 0,
    "OdometerEnd": 0,
    "OdometerStart": 0,
    "PersonalDistance": 0,
    "StartLocation": "string",
    "UnitOfMeasure": "string",
    "VehicleID": "string"
  },
  "LocationID": "string",
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "PaymentTypeID": "string",
  "ReportID": "string",
  "TaxReceiptType": "string",
  "TransactionAmount": 0,
  "TransactionCurrencyCode": "string",
  "TransactionDate": "2019-08-24T14:15:22Z",
  "VendorDescription": "string",
  "VendorListItemID": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<EntryPut>
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
  <ExchangeRate>0</ExchangeRate>
  <ExpenseTypeCode>string</ExpenseTypeCode>
  <IsBillable>true</IsBillable>
  <IsPersonal>true</IsPersonal>
  <Journey>
    <BusinessDistance>0</BusinessDistance>
    <EndLocation>string</EndLocation>
    <NumberOfPassengers>0</NumberOfPassengers>
    <OdometerEnd>0</OdometerEnd>
    <OdometerStart>0</OdometerStart>
    <PersonalDistance>0</PersonalDistance>
    <StartLocation>string</StartLocation>
    <UnitOfMeasure>string</UnitOfMeasure>
    <VehicleID>string</VehicleID>
  </Journey>
  <LocationID>string</LocationID>
  <OrgUnit1>string</OrgUnit1>
  <OrgUnit2>string</OrgUnit2>
  <OrgUnit3>string</OrgUnit3>
  <OrgUnit4>string</OrgUnit4>
  <OrgUnit5>string</OrgUnit5>
  <OrgUnit6>string</OrgUnit6>
  <PaymentTypeID>string</PaymentTypeID>
  <ReportID>string</ReportID>
  <TaxReceiptType>string</TaxReceiptType>
  <TransactionAmount>0</TransactionAmount>
  <TransactionCurrencyCode>string</TransactionCurrencyCode>
  <TransactionDate>2019-08-24T14:15:22Z</TransactionDate>
  <VendorDescription>string</VendorDescription>
  <VendorListItemID>string</VendorListItemID>
</EntryPut>
```

<h3 id="put__expense_entries_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The expense entry ID.|
|user|query|string|false|The login ID of the user who owns the entries. The user must have the Web Services Admin role to use this parameter.|
|body|body|[EntryPut](#schemaentryput)|true|The partial or complete expense entry object to update.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="put__expense_entries_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## delete__expense_entries_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE https://www.concursolutions.com/api/v3.0/expense/entries/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE https://www.concursolutions.com/api/v3.0/expense/entries/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/entries/{id}',
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

result = RestClient.delete 'https://www.concursolutions.com/api/v3.0/expense/entries/{id}',
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

r = requests.delete('https://www.concursolutions.com/api/v3.0/expense/entries/{id}', headers = headers)

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
    $response = $client->request('DELETE','https://www.concursolutions.com/api/v3.0/expense/entries/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/entries/{id}");
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
    req, err := http.NewRequest("DELETE", "https://www.concursolutions.com/api/v3.0/expense/entries/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /expense/entries/{id}`

*Delete an expense entry*

Deletes the specified expense entry.

<h3 id="delete__expense_entries_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the expense entry to delete.|
|user|query|string|false|The login ID of the user who owns the entries. The user must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="delete__expense_entries_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_CreateResponse">CreateResponse</h2>

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

<h2 id="tocS_CustomField">CustomField</h2>

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
|Type|string|false|none|The custom field type. Supported values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text|
|Value|string|false|none|The value in the Org Unit or Custom field. For list fields, this is the name of the list item.  Maximum length: 48 characters|

<h2 id="tocS_EntryCollection">EntryCollection</h2>

<a id="schemaentrycollection"></a>
<a id="schema_EntryCollection"></a>
<a id="tocSentrycollection"></a>
<a id="tocsentrycollection"></a>

```json
{
  "Items": {
    "AllocationType": "string",
    "ApprovedAmount": 0,
    "CompanyCardTransactionID": "string",
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
    "Custom31": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom32": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom33": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom34": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom35": {
      "Code": "string",
      "ListItemID": "string",
      "Type": "string",
      "Value": "string"
    },
    "Custom36": {
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
    "Description": "string",
    "ElectronicReceiptID": "string",
    "EmployeeBankAccountID": "string",
    "ExchangeRate": 0,
    "ExpenseTypeCode": "string",
    "ExpenseTypeName": "string",
    "FormID": "string",
    "HasAppliedCashAdvance": true,
    "HasAttendees": true,
    "HasComments": true,
    "HasExceptions": true,
    "HasImage": true,
    "HasItemizations": true,
    "HasVAT": true,
    "ID": "string",
    "IsBillable": true,
    "IsImageRequired": true,
    "IsPaidByExpensePay": true,
    "IsPersonal": true,
    "IsPersonalCardCharge": true,
    "Journey": {
      "BusinessDistance": 0,
      "EndLocation": "string",
      "NumberOfPassengers": 0,
      "OdometerEnd": 0,
      "OdometerStart": 0,
      "PersonalDistance": 0,
      "StartLocation": "string",
      "UnitOfMeasure": "string",
      "VehicleID": "string"
    },
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
    "PaymentTypeID": "string",
    "PaymentTypeName": "string",
    "PostedAmount": 0,
    "ReceiptReceived": true,
    "ReportID": "string",
    "ReportOwnerID": "string",
    "SpendCategoryCode": "string",
    "SpendCategoryName": "string",
    "TaxReceiptType": "string",
    "TransactionAmount": 0,
    "TransactionCurrencyCode": "string",
    "TransactionDate": "2019-08-24T14:15:22Z",
    "TripID": "string",
    "URI": "string",
    "VendorDescription": "string",
    "VendorListItemID": "string",
    "VendorListItemName": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[EntryGet](#schemaentryget)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h2 id="tocS_EntryGet">EntryGet</h2>

<a id="schemaentryget"></a>
<a id="schema_EntryGet"></a>
<a id="tocSentryget"></a>
<a id="tocsentryget"></a>

```json
{
  "AllocationType": "string",
  "ApprovedAmount": 0,
  "CompanyCardTransactionID": "string",
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
  "Custom31": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom32": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom33": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom34": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom35": {
    "Code": "string",
    "ListItemID": "string",
    "Type": "string",
    "Value": "string"
  },
  "Custom36": {
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
  "Description": "string",
  "ElectronicReceiptID": "string",
  "EmployeeBankAccountID": "string",
  "ExchangeRate": 0,
  "ExpenseTypeCode": "string",
  "ExpenseTypeName": "string",
  "FormID": "string",
  "HasAppliedCashAdvance": true,
  "HasAttendees": true,
  "HasComments": true,
  "HasExceptions": true,
  "HasImage": true,
  "HasItemizations": true,
  "HasVAT": true,
  "ID": "string",
  "IsBillable": true,
  "IsImageRequired": true,
  "IsPaidByExpensePay": true,
  "IsPersonal": true,
  "IsPersonalCardCharge": true,
  "Journey": {
    "BusinessDistance": 0,
    "EndLocation": "string",
    "NumberOfPassengers": 0,
    "OdometerEnd": 0,
    "OdometerStart": 0,
    "PersonalDistance": 0,
    "StartLocation": "string",
    "UnitOfMeasure": "string",
    "VehicleID": "string"
  },
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
  "PaymentTypeID": "string",
  "PaymentTypeName": "string",
  "PostedAmount": 0,
  "ReceiptReceived": true,
  "ReportID": "string",
  "ReportOwnerID": "string",
  "SpendCategoryCode": "string",
  "SpendCategoryName": "string",
  "TaxReceiptType": "string",
  "TransactionAmount": 0,
  "TransactionCurrencyCode": "string",
  "TransactionDate": "2019-08-24T14:15:22Z",
  "TripID": "string",
  "URI": "string",
  "VendorDescription": "string",
  "VendorListItemID": "string",
  "VendorListItemName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllocationType|string|false|none|The type of allocations for the expense. Supported values: P - partial allocation, F - full allocation, N - no allocation.|
|ApprovedAmount|number(double)|false|none|The approved amount of the expense entry, in the report currency.|
|CompanyCardTransactionID|string|false|none|The unique identifier for a company card transaction that is associated with this expense. This element is null when there is no company card transaction associated with this expense.|
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
|Custom31|[CustomField](#schemacustomfield)|false|none|none|
|Custom32|[CustomField](#schemacustomfield)|false|none|none|
|Custom33|[CustomField](#schemacustomfield)|false|none|none|
|Custom34|[CustomField](#schemacustomfield)|false|none|none|
|Custom35|[CustomField](#schemacustomfield)|false|none|none|
|Custom36|[CustomField](#schemacustomfield)|false|none|none|
|Custom37|[CustomField](#schemacustomfield)|false|none|none|
|Custom38|[CustomField](#schemacustomfield)|false|none|none|
|Custom39|[CustomField](#schemacustomfield)|false|none|none|
|Custom40|[CustomField](#schemacustomfield)|false|none|none|
|Description|string|false|none|The description of the expense. Maximum length: 64 characters|
|ElectronicReceiptID|string|false|none|The unique identifier for an eReceipt that is associated with this expense. This element is null when there is no eReceipt associated with this expense.|
|EmployeeBankAccountID|string|false|none|The unique identifier of an employee bank account that is associated with this expense. Typically, this element is used when Expense Pay reimburses the employee for this expense.|
|ExchangeRate|number(double)|false|none|The currency conversion rate that converts the transaction amount that is in the transaction currency into the posted amount that is in the report currency. This element is typically not provided. If this element is empty for transactions in a currency different than the user's reimbursement currency, Expense will use the company's configured exchange rates to determine the posted amount for the transaction. If the system is not able to determine the exchange rate, a value of 1.0 will be used.|
|ExpenseTypeCode|string|false|none|The code for the expense type.|
|ExpenseTypeName|string|false|none|The name of the expense type, localized to the user's language.|
|FormID|string|false|none|The ID of the form used by this expense entry.|
|HasAppliedCashAdvance|boolean|false|none|Whether the entry has a cash advance applied to it. Format: true or false|
|HasAttendees|boolean|false|none|Indicates whether the expense has attendees. Format: true or false|
|HasComments|boolean|false|none|Whether the expense has comments. Format: true or false|
|HasExceptions|boolean|false|none|Whether the expense has exceptions. Format: true or false|
|HasImage|boolean|false|none|Indicates whether there is an entry image attached to the entry. Format: true or false|
|HasItemizations|boolean|false|none|Indicates whether the expense has itemizations. Use the Format: true or false|
|HasVAT|boolean|false|none|Indicates whether the entry has VAT data. Format: true or false|
|ID|string|false|none|The unique identifier of the resource.|
|IsBillable|boolean|false|none|Indicates whether the expense is billable. Format: true or false|
|IsImageRequired|boolean|false|none|Indicates whether an entry image is required for the entry. Format: true or false|
|IsPaidByExpensePay|boolean|false|none|Whether the entry is paid using the Expense Pay service. This element has a value if the report has reached the Processing Payment workflow step, because this is when Concur Expense determines whether it will be paid by Expense Pay. Format: true or false|
|IsPersonal|boolean|false|none|Indicates whether the expense is personal (that is, non-reimbursable). Format: true or false|
|IsPersonalCardCharge|boolean|false|none|Indicates whether the expense entry was imported from a personal card feed. Format: true or false|
|Journey|[Journey](#schemajourney)|false|none|none|
|LastModified|string(date-time)|false|none|The UTC date when the entry was last modified.|
|LocationCountry|string|false|none|The 2-letter ISO 3166-1 country code where the expense was incurred.|
|LocationID|string|false|none|The unique identifier for the location where the expense was incurred.|
|LocationName|string|false|none|The location where the expense was incurred, usually the city name.|
|LocationSubdivision|string|false|none|The ISO 3166-2:2007 country subdivision state, province, or other country subdivision where the expense was incurred.|
|OrgUnit1|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit2|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit3|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit4|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit5|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit6|[CustomField](#schemacustomfield)|false|none|none|
|PaymentTypeID|string|false|none|The ID of the payment type for the entry. For mileage expenses, use the Cash payment type. For expense types with an expense code that uses a transaction amount instead of a distance, this element is required. This element should not be used for expense types with an expense code for Company Car or Personal Car, because these two expense codes always use the Cash payment type.|
|PaymentTypeName|string|false|none|The name of the payment type, localized to the user's language.|
|PostedAmount|number(double)|false|none|The amount of the expense entry, in the report currency.|
|ReceiptReceived|boolean|false|none|Indicates whether this entry has been reviewed by a processor. Format: true or false|
|ReportID|string|false|none|The report ID of the report where the entry will be added.|
|ReportOwnerID|string|false|none|The login ID of the report owner.|
|SpendCategoryCode|string|false|none|The ID of the spending category that is specified for this expense entry.|
|SpendCategoryName|string|false|none|The name of the spending category that is specified for this expense entry, localized to the user's language.|
|TaxReceiptType|string|false|none|The receipt type for this entry. Supported values: T - tax receipt, R - regular receipt, N - no receipt|
|TransactionAmount|number(double)|false|none|The amount of the expense entry, in the transaction currency paid to the vendor. For expense types with an expense code that uses a transaction amount instead of a distance, this element is required. This element should not be used for expense types with an expense code for Company Car or Personal Car, because these two expense codes use a distance instead of a transaction amount.|
|TransactionCurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the expense entry transaction amount. This is the currency in which the vendor was paid. For expense types with an expense code that uses a transaction amount instead of a distance, this element is required. This element should not be used for expense types with an expense code for Company Car or Personal Car, because for these two expense codes the currency is always the Report Currency.|
|TransactionDate|string(date-time)|false|none|The date when the good or service associated with this expense entry was provided. Format: YYYY-MM-DD|
|TripID|string|false|none|The unique identifier of a trip in the Itinerary Service that includes a travel booking associated with this expense. This element is null when there is no trip associated with the expense.|
|URI|string|false|none|The URI to the resource.|
|VendorDescription|string|false|none|The name of the vendor for the expense entry. Maximum length: 64 characters|
|VendorListItemID|string|false|none|The unique identifier for a vendor list item.|
|VendorListItemName|string|false|none|The name of an item from a vendor list.|

<h2 id="tocS_EntryPost">EntryPost</h2>

<a id="schemaentrypost"></a>
<a id="schema_EntryPost"></a>
<a id="tocSentrypost"></a>
<a id="tocsentrypost"></a>

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
  "ExchangeRate": 0,
  "ExpenseTypeCode": "string",
  "IsBillable": true,
  "IsPersonal": true,
  "Journey": {
    "BusinessDistance": 0,
    "EndLocation": "string",
    "NumberOfPassengers": 0,
    "OdometerEnd": 0,
    "OdometerStart": 0,
    "PersonalDistance": 0,
    "StartLocation": "string",
    "UnitOfMeasure": "string",
    "VehicleID": "string"
  },
  "LocationID": "string",
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "PaymentTypeID": "string",
  "ReportID": "string",
  "TaxReceiptType": "string",
  "TransactionAmount": 0,
  "TransactionCurrencyCode": "string",
  "TransactionDate": "2019-08-24T14:15:22Z",
  "VendorDescription": "string",
  "VendorListItemID": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|string|false|none|A comment that describes the expense entry. Maximum length: 500 characters|
|Custom1|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom10|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom11|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom12|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom13|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom14|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom15|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom16|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom17|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom18|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom19|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom2|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom20|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom21|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom22|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom23|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom24|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom25|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom26|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom27|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom28|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom29|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom3|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom30|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom31|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom32|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom33|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom34|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom35|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom36|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom37|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom38|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom39|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom4|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom40|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom5|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom6|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom7|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom8|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom9|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Description|string|false|none|The description of the expense. Maximum length: 64 characters|
|ExchangeRate|number(double)|false|none|The currency conversion rate that converts the transaction amount that is in the transaction currency into the posted amount that is in the report currency. This element is typically not provided. If this element is empty for transactions in a currency different than the user's reimbursement currency, Expense will use the company's configured exchange rates to determine the posted amount for the transaction. If the system is not able to determine the exchange rate, a value of 1.0 will be used.|
|ExpenseTypeCode|string|false|none|The code for the expense type. Use "GET /expense/expensegroupconfigurations" to learn the expense type code for expense types that are active for this report's policy.|
|IsBillable|boolean|false|none|Indicates whether the expense is billable. Format: true or false|
|IsPersonal|boolean|false|none|Indicates whether the expense is personal (that is, non-reimbursable). Format: true or false|
|Journey|[Journey](#schemajourney)|false|none|none|
|LocationID|string|false|none|The unique identifier for the location where the expense was incurred. Use the "GET /common/locations" function to get information for this location.|
|OrgUnit1|string|false|none|The details from the Org Unit fields. These fields may not have data, depending on the configuration.|
|OrgUnit2|string|false|none|The details from the Org Unit fields. These fields may not have data, depending on the configuration.|
|OrgUnit3|string|false|none|The details from the Org Unit fields. These fields may not have data, depending on the configuration.|
|OrgUnit4|string|false|none|The details from the Org Unit fields. These fields may not have data, depending on the configuration.|
|OrgUnit5|string|false|none|The details from the Org Unit fields. These fields may not have data, depending on the configuration.|
|OrgUnit6|string|false|none|The details from the Org Unit fields. These fields may not have data, depending on the configuration.|
|PaymentTypeID|string|false|none|The ID of the payment type for the entry. For mileage expenses, use the Cash payment type. For expense types with an expense code that uses a transaction amount instead of a distance, this element is required. This element should not be used for expense types with an expense code for Company Car or Personal Car, because these two expense codes always use the Cash payment type.|
|ReportID|string|false|none|The report ID of the report where the entry will be added.|
|TaxReceiptType|string|false|none|The receipt type for this entry. Supported values: T - tax receipt, R - regular receipt, N - no receipt|
|TransactionAmount|number(double)|false|none|The amount of the expense entry, in the transaction currency paid to the vendor.	For expense types with an expense code that uses a transaction amount instead of a distance, this element is required. This element should not be used for expense types with an expense code for Company Car or Personal Car, because these two expense codes use a distance instead of a transaction amount.|
|TransactionCurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the expense entry transaction amount. This is the currency in which the vendor was paid. For expense types with an expense code that uses a transaction amount instead of a distance, this element is required. This element should not be used for expense types with an expense code for Company Car or Personal Car, because for these two expense codes the currency is always the Report Currency.|
|TransactionDate|string(date-time)|false|none|The date when the good or service associated with this expense entry was provided. Format: YYYY-MM-DD|
|VendorDescription|string|false|none|The name of the vendor for the expense entry. Maximum length: 64 characters|
|VendorListItemID|string|false|none|The unique identifier for a vendor list item.|

<h2 id="tocS_EntryPut">EntryPut</h2>

<a id="schemaentryput"></a>
<a id="schema_EntryPut"></a>
<a id="tocSentryput"></a>
<a id="tocsentryput"></a>

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
  "ExchangeRate": 0,
  "ExpenseTypeCode": "string",
  "IsBillable": true,
  "IsPersonal": true,
  "Journey": {
    "BusinessDistance": 0,
    "EndLocation": "string",
    "NumberOfPassengers": 0,
    "OdometerEnd": 0,
    "OdometerStart": 0,
    "PersonalDistance": 0,
    "StartLocation": "string",
    "UnitOfMeasure": "string",
    "VehicleID": "string"
  },
  "LocationID": "string",
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "PaymentTypeID": "string",
  "ReportID": "string",
  "TaxReceiptType": "string",
  "TransactionAmount": 0,
  "TransactionCurrencyCode": "string",
  "TransactionDate": "2019-08-24T14:15:22Z",
  "VendorDescription": "string",
  "VendorListItemID": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|string|false|none|A comment that describes the expense entry. Maximum length: 500 characters|
|Custom1|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom10|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom11|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom12|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom13|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom14|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom15|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom16|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom17|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom18|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom19|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom2|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom20|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom21|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom22|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom23|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom24|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom25|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom26|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom27|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom28|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom29|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom3|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom30|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom31|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom32|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom33|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom34|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom35|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom36|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom37|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom38|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom39|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom4|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom40|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom5|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom6|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom7|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom8|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Custom9|string|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration.|
|Description|string|false|none|The description of the expense. Maximum length: 64 characters|
|ExchangeRate|number(double)|false|none|The currency conversion rate that converts the transaction amount that is in the transaction currency into the posted amount that is in the report currency. This element is typically not provided. If this element is empty for transactions in a currency different than the user's reimbursement currency, Expense will use the company's configured exchange rates to determine the posted amount for the transaction. If the system is not able to determine the exchange rate, a value of 1.0 will be used.|
|ExpenseTypeCode|string|false|none|The code for the expense type.|
|IsBillable|boolean|false|none|Indicates whether the expense is billable. Format: true or false|
|IsPersonal|boolean|false|none|Indicates whether the expense is personal (that is, non-reimbursable). Format: true or false|
|Journey|[Journey](#schemajourney)|false|none|none|
|LocationID|string|false|none|The unique identifier for the location where the expense was incurred.|
|OrgUnit1|string|false|none|The details from the Org Unit fields. These fields may not have data, depending on the configuration.|
|OrgUnit2|string|false|none|The details from the Org Unit fields. These fields may not have data, depending on the configuration.|
|OrgUnit3|string|false|none|The details from the Org Unit fields. These fields may not have data, depending on the configuration.|
|OrgUnit4|string|false|none|The details from the Org Unit fields. These fields may not have data, depending on the configuration.|
|OrgUnit5|string|false|none|The details from the Org Unit fields. These fields may not have data, depending on the configuration.|
|OrgUnit6|string|false|none|The details from the Org Unit fields. These fields may not have data, depending on the configuration.|
|PaymentTypeID|string|false|none|The ID of the payment type for the entry.  For mileage expenses, use the Cash payment type. For expense types with an expense code that uses a transaction amount instead of a distance, this element is required. This element should not be used for expense types with an expense code for Company Car or Personal Car, because these two expense codes always use the Cash payment type.|
|ReportID|string|false|none|The report ID of the report where the entry will be added.|
|TaxReceiptType|string|false|none|The receipt type for this entry. Supported values: T - tax receipt, R - regular receipt, N - no receipt|
|TransactionAmount|number(double)|false|none|The amount of the expense entry, in the transaction currency paid to the vendor. For expense types with an expense code that uses a transaction amount instead of a distance, this element is required. This element should not be used for expense types with an expense code for Company Car or Personal Car, because these two expense codes use a distance instead of a transaction amount.|
|TransactionCurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the expense entry transaction amount. This is the currency in which the vendor was paid. For expense types with an expense code that uses a transaction amount instead of a distance, this element is required. This element should not be used for expense types with an expense code for Company Car or Personal Car, because for these two expense codes the currency is always the Report Currency.|
|TransactionDate|string(date-time)|false|none|The date when the good or service associated with this expense entry was provided. Format: YYYY-MM-DD|
|VendorDescription|string|false|none|The name of the vendor for the expense entry. Maximum length: 64 characters|
|VendorListItemID|string|false|none|The unique identifier for a vendor list item.|

<h2 id="tocS_Journey">Journey</h2>

<a id="schemajourney"></a>
<a id="schema_Journey"></a>
<a id="tocSjourney"></a>
<a id="tocsjourney"></a>

```json
{
  "BusinessDistance": 0,
  "EndLocation": "string",
  "NumberOfPassengers": 0,
  "OdometerEnd": 0,
  "OdometerStart": 0,
  "PersonalDistance": 0,
  "StartLocation": "string",
  "UnitOfMeasure": "string",
  "VehicleID": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BusinessDistance|integer(int32)|false|none|The portion of the journey for business use, in the report owner's unit of measure for distances. This element is required in order to post a personal car mileage expense entry, or to post a company car mileage expense when there is no PersonalDistance value. When using the Odometer elements, the sum of PersonalDistance and BusinessDistance must equal the difference between OdometerEnd and OdometerStart.|
|EndLocation|string|false|none|Indicates where the journey ended. This is also known as the "To Location". Maximum length: 100 characters|
|NumberOfPassengers|integer(int32)|false|none|The number of people in the vehicle during the journey. Used with Variable-Rate, Personal or Company Car.|
|OdometerEnd|integer(int32)|false|none|The odometer reading at the end of the journey. The value must be greater than the OdometerStart value. This element is used with Variable-Rate and Company Car configuration types.|
|OdometerStart|integer(int32)|false|none|The odometer reading at the start of the journey. This element is used with Variable-Rate and Company Car configuration types.|
|PersonalDistance|integer(int32)|false|none|The portion of the journey for personal use. This element is required in order to post a company car mileage expense when there is no BusinessDistance value. Format: positive integer. When using the Odometer elements, the sum of PersonalDistance and BusinessDistance must equal the difference between OdometerEnd and OdometerStart. Used with Company Car configuration types.|
|StartLocation|string|false|none|Indicates where the journey started. This is also known as the "From Location". Maximum length: 100 characters|
|UnitOfMeasure|string|false|none|The unit of measure for distance and odometer values. Supported values: M - miles, K - kilometers|
|VehicleID|string|false|none|The unique identifier for the vehicle used for this journey. This element is used only with Company Car configuration types. Use the GET Vehicles function to learn the Vehicle ID.|

<h2 id="tocS_Void">Void</h2>

<a id="schemavoid"></a>
<a id="schema_Void"></a>
<a id="tocSvoid"></a>
<a id="tocsvoid"></a>

```json
{}

```

### Properties

*None*

