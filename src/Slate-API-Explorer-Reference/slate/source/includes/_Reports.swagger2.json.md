

<h2 id="reports">Reports v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Get expense reports for a user or company, and update existing reports or create new reports.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>



- oAuth2 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication inFormation</a> for more inFormation.

    

    

<h3 id="reports-resources">Resources</h3>

#### get__expense_reports

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/reports \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/reports HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/reports',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/reports',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/reports', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/reports', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/reports");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/reports", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/reports`

*Gets all reports*

Returns all reports owned by the user based on the search criteria.

<h3 id="get__expense_reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|Starting page offset|
|limit|query|integer(int32)|false|Number of records to return (default 25)|
|user|query|string|false|Optional. The login ID of the report owner(s) to use when searching for reports. If the value is set to LoginID, reports for the report owner with this login ID value are returned. If the value is set to ALL, reports for all report owners are returned. If this parameter is not specified, reports for the OAuth Consumer are returned. The access token owner (OAuth Consumer) must have the Web Services Admin role to use this parameter.|
|approvalStatusCode|query|string|false|The status code for the Approval Status. The values can include Concur Expense standard codes or custom codes. The Concur Expense standard code values are: A_AAFH - Report submission triggered an anomaly and fraud check; A_ACCO - Report is pending reviews; A_APPR - Report has been approved; A_EXTV - Report is pending external validation; A_FILE - Report has been submitted; A_NOTF - Report has not been submitted; A_PBDG - Report approval is pending Budget approval; A_PECO - Report approval is pending Cost object approval; A_PEND - Report is pending manager approval; A_PVAL - Report is pending prepayment validation; A_RESU - Report needs to be resubmitted; A_RHLD - Report submission is pending receipt images; A_TEXP - Report expired in approval queue. For custom codes, contact Concur Developer Support.|
|paymentStatusCode|query|string|false|The payment status code for the report. The values can include Concur Expense standard codes or custom codes. The Concur Expense standard code values are: P_HOLD - Report payment is on hold; P_NOTP - Report has not been paid; P_PAID - Report has been paid; P_PAYC - Payment is confirmed. Some or all of the report expenses have been paid; P_PROC - Report is in process to be paid. For custom codes, contact Concur Developer Support.|
|currencyCode|query|string|false|The 3-letter ISO 4217 currency code for the report currency. Example: USD.|
|paymentType|query|string|false|The unique identifier for the payment type that is the payment type for at least one expense entry in the report. Use PaymentTypeID from the "GET Expense Group Configurations" function.|
|reimbursementMethod|query|string|false|The method the report owner will be reimbursed. VALUES: ADPPAYR - ADP Payroll; APCHECK - AP (Company Check); CNQRPAY - Expense Pay; PMTSERV - Other Payment Service. NOTE: PAY_PAL is NOT supported.|
|approverLoginID|query|string|false|The login ID for the report approver that is the current approver assigned to the report.|
|expenseTypeCode|query|string|false|The expense type code that is the expense type for at least one expense entry in the report. Use ExpenseTypeCode from the "GET Expense Group Configurations" function.|
|attendeeTypeCode|query|string|false|The report contains expense entries that have attendees of the specified type.|
|countryCode|query|string|false|The report country. Maximum 2 characters. Format: The ISO 3166-1 alpha-2 country code. Example: United States is US.|
|batchID|query|string|false|The unique identifier for a payment batch where there is at least one report payee within the report. Use the BatchID from the "GET Payment Batch List" function.|
|vendorName|query|string|false|The Vendor Description that is the vendor for at least one expense entry in the report.|
|hasVAT|query|boolean|false|Determines if the report has at least one expense entry with VAT details. Format: true or false.|
|hasImages|query|boolean|false|Determines if the report has at least one expense entry with an entry image or if there is a report image for this report. Format: true or false.|
|hasAttendees|query|boolean|false|Determines if the report has at least one expense entry with an attendee. Format: true or false.|
|hasBillableExpenses|query|boolean|false|The IsBillable flag for at least one expense entry in the report. Format: true or false.|
|isTestUser|query|boolean|false|The report owner is a test user using the report for testing purposes in a non-production envirnment. format: true or false.|
|expenseGroupConfigID|query|string|false|The unique identifier for the expense group configuration associated to the report's expense group. Use the ID from the "GET Expense Group Configurations" function.|
|entryTransactionDateBefore|query|string(date-time)|false|The entry transaction date for at least one expense entry in the report is before this date.Format: YYYY-MM-DD|
|entryTransactionDateAfter|query|string(date-time)|false|The entry transaction date for at least one expense entry in the report is after this date.Format: YYYY-MM-DD|
|createDateBefore|query|string(date-time)|false|The report create date is before this date.Format: YYYY-MM-DD|
|createDateAfter|query|string(date-time)|false|The report create date is after this date.Format: YYYY-MM-DD|
|userDefinedDateBefore|query|string(date-time)|false|The report user defined date is before this date.Format: YYYY-MM-DD|
|userDefinedDateAfter|query|string(date-time)|false|The report user defined date is after this date.Format: YYYY-MM-DD|
|submitDateBefore|query|string(date-time)|false|The report submit date is before this date.Format: YYYY-MM-DD|
|submitDateAfter|query|string(date-time)|false|The report submit date is after this date.Format: YYYY-MM-DD|
|processingPaymentDateBefore|query|string(date-time)|false|The report processing payment date is before this date.Format: YYYY-MM-DD|
|processingPaymentDateAfter|query|string(date-time)|false|The report processing payment date is after this date. Format: YYYY-MM-DD|
|paidDateBefore|query|string(date-time)|false|The report paid date is before this date.Format: YYYY-MM-DD|
|paidDateAfter|query|string(date-time)|false|The report paid date is after this date.Format: YYYY-MM-DD|
|modifiedDateBefore|query|string(date-time)|false|The report modified date is before this date.Format: YYYY-MM-DD|
|modifiedDateAfter|query|string(date-time)|false|The report modified date is after this date.Format: YYYY-MM-DD|

> Example responses

> 200 Response

```json
{
  "Items": {
    "AmountDueCompanyCard": 0,
    "AmountDueEmployee": 0,
    "ApprovalStatusCode": "string",
    "ApprovalStatusName": "string",
    "ApproverLoginID": "string",
    "ApproverName": "string",
    "Country": "string",
    "CountrySubdivision": "string",
    "CreateDate": "2019-08-24T14:15:22Z",
    "CurrencyCode": "string",
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
    "EverSentBack": true,
    "HasException": true,
    "ID": "string",
    "LastComment": "string",
    "LastModifiedDate": "2019-08-24T14:15:22Z",
    "LedgerName": "string",
    "Name": "string",
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
    "OwnerLoginID": "string",
    "OwnerName": "string",
    "PaidDate": "2019-08-24T14:15:22Z",
    "PaymentStatusCode": "string",
    "PaymentStatusName": "string",
    "PersonalAmount": 0,
    "PolicyID": "string",
    "ProcessingPaymentDate": "2019-08-24T14:15:22Z",
    "ReceiptsReceived": true,
    "SubmitDate": "2019-08-24T14:15:22Z",
    "Total": 0,
    "TotalApprovedAmount": 0,
    "TotalClaimedAmount": 0,
    "URI": "string",
    "UserDefinedDate": "2019-08-24T14:15:22Z",
    "WorkflowActionUrl": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ReportCollection>
  <Items>
    <AmountDueCompanyCard>0</AmountDueCompanyCard>
    <AmountDueEmployee>0</AmountDueEmployee>
    <ApprovalStatusCode>string</ApprovalStatusCode>
    <ApprovalStatusName>string</ApprovalStatusName>
    <ApproverLoginID>string</ApproverLoginID>
    <ApproverName>string</ApproverName>
    <Country>string</Country>
    <CountrySubdivision>string</CountrySubdivision>
    <CreateDate>2019-08-24T14:15:22Z</CreateDate>
    <CurrencyCode>string</CurrencyCode>
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
    <EverSentBack>true</EverSentBack>
    <HasException>true</HasException>
    <ID>string</ID>
    <LastComment>string</LastComment>
    <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
    <LedgerName>string</LedgerName>
    <Name>string</Name>
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
    <OwnerLoginID>string</OwnerLoginID>
    <OwnerName>string</OwnerName>
    <PaidDate>2019-08-24T14:15:22Z</PaidDate>
    <PaymentStatusCode>string</PaymentStatusCode>
    <PaymentStatusName>string</PaymentStatusName>
    <PersonalAmount>0</PersonalAmount>
    <PolicyID>string</PolicyID>
    <ProcessingPaymentDate>2019-08-24T14:15:22Z</ProcessingPaymentDate>
    <ReceiptsReceived>true</ReceiptsReceived>
    <SubmitDate>2019-08-24T14:15:22Z</SubmitDate>
    <Total>0</Total>
    <TotalApprovedAmount>0</TotalApprovedAmount>
    <TotalClaimedAmount>0</TotalClaimedAmount>
    <URI>string</URI>
    <UserDefinedDate>2019-08-24T14:15:22Z</UserDefinedDate>
    <WorkflowActionUrl>string</WorkflowActionUrl>
  </Items>
  <NextPage>string</NextPage>
</ReportCollection>
```

<h3 id="get__expense_reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ReportCollection](#schemareportcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### post__expense_reports

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/expense/reports \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://www.concursolutions.com/api/v3.0/expense/reports HTTP/1.1
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
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Name": "string",
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "PolicyID": "string",
  "Purpose": "string",
  "UserDefinedDate": "2019-08-24T14:15:22Z"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/reports',
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

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/expense/reports',
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

r = requests.post('https://www.concursolutions.com/api/v3.0/expense/reports', headers = headers)

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
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/expense/reports', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/reports");
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
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/expense/reports", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /expense/reports`

*Create a new report*

Create an expense report with the supplied data.

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
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Name": "string",
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "PolicyID": "string",
  "Purpose": "string",
  "UserDefinedDate": "2019-08-24T14:15:22Z"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ReportPost>
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
  <Custom3>string</Custom3>
  <Custom4>string</Custom4>
  <Custom5>string</Custom5>
  <Custom6>string</Custom6>
  <Custom7>string</Custom7>
  <Custom8>string</Custom8>
  <Custom9>string</Custom9>
  <Name>string</Name>
  <OrgUnit1>string</OrgUnit1>
  <OrgUnit2>string</OrgUnit2>
  <OrgUnit3>string</OrgUnit3>
  <OrgUnit4>string</OrgUnit4>
  <OrgUnit5>string</OrgUnit5>
  <OrgUnit6>string</OrgUnit6>
  <PolicyID>string</PolicyID>
  <Purpose>string</Purpose>
  <UserDefinedDate>2019-08-24T14:15:22Z</UserDefinedDate>
</ReportPost>
```

<h3 id="post__expense_reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|false|Optional. The login ID for the Report Owner.|
|body|body|[ReportPost](#schemareportpost)|true|Report object to create|

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

<h3 id="post__expense_reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreateResponse](#schemacreateresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### get__expense_reports_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/reports/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/reports/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/reports/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/reports/{id}',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/reports/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/reports/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/reports/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/reports/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/reports/{id}`

*Gets a single report*

Returns the specified report.

<h3 id="get__expense_reports_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Report ID|
|user|query|string|false|Optional. The login ID of the report owner(s) to use when searching for reports. If the value is set to LoginID, reports for the report owner with this login ID value are returned. If the value is set to ALL, reports for all report owners are returned. If this parameter is not specified, reports for the OAuth Consumer are returned. The access token owner (OAuth Consumer) must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "AmountDueCompanyCard": 0,
  "AmountDueEmployee": 0,
  "ApprovalStatusCode": "string",
  "ApprovalStatusName": "string",
  "ApproverLoginID": "string",
  "ApproverName": "string",
  "Country": "string",
  "CountrySubdivision": "string",
  "CreateDate": "2019-08-24T14:15:22Z",
  "CurrencyCode": "string",
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
  "EverSentBack": true,
  "HasException": true,
  "ID": "string",
  "LastComment": "string",
  "LastModifiedDate": "2019-08-24T14:15:22Z",
  "LedgerName": "string",
  "Name": "string",
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
  "OwnerLoginID": "string",
  "OwnerName": "string",
  "PaidDate": "2019-08-24T14:15:22Z",
  "PaymentStatusCode": "string",
  "PaymentStatusName": "string",
  "PersonalAmount": 0,
  "PolicyID": "string",
  "ProcessingPaymentDate": "2019-08-24T14:15:22Z",
  "ReceiptsReceived": true,
  "SubmitDate": "2019-08-24T14:15:22Z",
  "Total": 0,
  "TotalApprovedAmount": 0,
  "TotalClaimedAmount": 0,
  "URI": "string",
  "UserDefinedDate": "2019-08-24T14:15:22Z",
  "WorkflowActionUrl": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ReportGet>
  <AmountDueCompanyCard>0</AmountDueCompanyCard>
  <AmountDueEmployee>0</AmountDueEmployee>
  <ApprovalStatusCode>string</ApprovalStatusCode>
  <ApprovalStatusName>string</ApprovalStatusName>
  <ApproverLoginID>string</ApproverLoginID>
  <ApproverName>string</ApproverName>
  <Country>string</Country>
  <CountrySubdivision>string</CountrySubdivision>
  <CreateDate>2019-08-24T14:15:22Z</CreateDate>
  <CurrencyCode>string</CurrencyCode>
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
  <EverSentBack>true</EverSentBack>
  <HasException>true</HasException>
  <ID>string</ID>
  <LastComment>string</LastComment>
  <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
  <LedgerName>string</LedgerName>
  <Name>string</Name>
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
  <OwnerLoginID>string</OwnerLoginID>
  <OwnerName>string</OwnerName>
  <PaidDate>2019-08-24T14:15:22Z</PaidDate>
  <PaymentStatusCode>string</PaymentStatusCode>
  <PaymentStatusName>string</PaymentStatusName>
  <PersonalAmount>0</PersonalAmount>
  <PolicyID>string</PolicyID>
  <ProcessingPaymentDate>2019-08-24T14:15:22Z</ProcessingPaymentDate>
  <ReceiptsReceived>true</ReceiptsReceived>
  <SubmitDate>2019-08-24T14:15:22Z</SubmitDate>
  <Total>0</Total>
  <TotalApprovedAmount>0</TotalApprovedAmount>
  <TotalClaimedAmount>0</TotalClaimedAmount>
  <URI>string</URI>
  <UserDefinedDate>2019-08-24T14:15:22Z</UserDefinedDate>
  <WorkflowActionUrl>string</WorkflowActionUrl>
</ReportGet>
```

<h3 id="get__expense_reports_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ReportGet](#schemareportget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### put__expense_reports_{id}

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/expense/reports/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://www.concursolutions.com/api/v3.0/expense/reports/{id} HTTP/1.1
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
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Name": "string",
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "PolicyID": "string",
  "Purpose": "string",
  "UserDefinedDate": "2019-08-24T14:15:22Z"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/reports/{id}',
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

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/expense/reports/{id}',
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

r = requests.put('https://www.concursolutions.com/api/v3.0/expense/reports/{id}', headers = headers)

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
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/expense/reports/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/reports/{id}");
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
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/expense/reports/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /expense/reports/{id}`

*Update report*

Updates the report specified in the URL. Only the provided fields will be updated, missing fields will not be altered.

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
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Name": "string",
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "PolicyID": "string",
  "Purpose": "string",
  "UserDefinedDate": "2019-08-24T14:15:22Z"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ReportPut>
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
  <Custom3>string</Custom3>
  <Custom4>string</Custom4>
  <Custom5>string</Custom5>
  <Custom6>string</Custom6>
  <Custom7>string</Custom7>
  <Custom8>string</Custom8>
  <Custom9>string</Custom9>
  <Name>string</Name>
  <OrgUnit1>string</OrgUnit1>
  <OrgUnit2>string</OrgUnit2>
  <OrgUnit3>string</OrgUnit3>
  <OrgUnit4>string</OrgUnit4>
  <OrgUnit5>string</OrgUnit5>
  <OrgUnit6>string</OrgUnit6>
  <PolicyID>string</PolicyID>
  <Purpose>string</Purpose>
  <UserDefinedDate>2019-08-24T14:15:22Z</UserDefinedDate>
</ReportPut>
```

<h3 id="put__expense_reports_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the report.|
|user|query|string|false|Optional. The login ID for the Report Owner.|
|body|body|[ReportPut](#schemareportput)|true|The report object to update|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="put__expense_reports_{id}-responses">Responses</h3>

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
|Type|string|false|none|The custom field type. Supported values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text|
|Value|string|false|none|The value in the Org Unit or Custom field. For list fields, this is the name of the list item.  Maximum length: 48 characters|

<h3 id="tocS_ReportCollection">ReportCollection</h3>

<a id="schemareportcollection"></a>
<a id="schema_ReportCollection"></a>
<a id="tocSreportcollection"></a>
<a id="tocsreportcollection"></a>

```json
{
  "Items": {
    "AmountDueCompanyCard": 0,
    "AmountDueEmployee": 0,
    "ApprovalStatusCode": "string",
    "ApprovalStatusName": "string",
    "ApproverLoginID": "string",
    "ApproverName": "string",
    "Country": "string",
    "CountrySubdivision": "string",
    "CreateDate": "2019-08-24T14:15:22Z",
    "CurrencyCode": "string",
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
    "EverSentBack": true,
    "HasException": true,
    "ID": "string",
    "LastComment": "string",
    "LastModifiedDate": "2019-08-24T14:15:22Z",
    "LedgerName": "string",
    "Name": "string",
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
    "OwnerLoginID": "string",
    "OwnerName": "string",
    "PaidDate": "2019-08-24T14:15:22Z",
    "PaymentStatusCode": "string",
    "PaymentStatusName": "string",
    "PersonalAmount": 0,
    "PolicyID": "string",
    "ProcessingPaymentDate": "2019-08-24T14:15:22Z",
    "ReceiptsReceived": true,
    "SubmitDate": "2019-08-24T14:15:22Z",
    "Total": 0,
    "TotalApprovedAmount": 0,
    "TotalClaimedAmount": 0,
    "URI": "string",
    "UserDefinedDate": "2019-08-24T14:15:22Z",
    "WorkflowActionUrl": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[ReportGet](#schemareportget)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h3 id="tocS_ReportGet">ReportGet</h3>

<a id="schemareportget"></a>
<a id="schema_ReportGet"></a>
<a id="tocSreportget"></a>
<a id="tocsreportget"></a>

```json
{
  "AmountDueCompanyCard": 0,
  "AmountDueEmployee": 0,
  "ApprovalStatusCode": "string",
  "ApprovalStatusName": "string",
  "ApproverLoginID": "string",
  "ApproverName": "string",
  "Country": "string",
  "CountrySubdivision": "string",
  "CreateDate": "2019-08-24T14:15:22Z",
  "CurrencyCode": "string",
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
  "EverSentBack": true,
  "HasException": true,
  "ID": "string",
  "LastComment": "string",
  "LastModifiedDate": "2019-08-24T14:15:22Z",
  "LedgerName": "string",
  "Name": "string",
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
  "OwnerLoginID": "string",
  "OwnerName": "string",
  "PaidDate": "2019-08-24T14:15:22Z",
  "PaymentStatusCode": "string",
  "PaymentStatusName": "string",
  "PersonalAmount": 0,
  "PolicyID": "string",
  "ProcessingPaymentDate": "2019-08-24T14:15:22Z",
  "ReceiptsReceived": true,
  "SubmitDate": "2019-08-24T14:15:22Z",
  "Total": 0,
  "TotalApprovedAmount": 0,
  "TotalClaimedAmount": 0,
  "URI": "string",
  "UserDefinedDate": "2019-08-24T14:15:22Z",
  "WorkflowActionUrl": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmountDueCompanyCard|number(double)|false|none|The total amount due to the company card for the report. Maximum 23 characters.|
|AmountDueEmployee|number(double)|false|none|The total amount due to the employee for the report. Maximum 23 characters.|
|ApprovalStatusCode|string|false|none|The approval status code for the report.|
|ApprovalStatusName|string|false|none|The report's approval status, in the OAuth consumer's language.|
|ApproverLoginID|string|false|none|The Login ID of the report owner's expense approver.|
|ApproverName|string|false|none|The name of the report owner's expense approver.|
|Country|string|false|none|The report country. Maximum 2 characters. Format: The ISO 3166-1 alpha-2 country code. Example: United States is US.|
|CountrySubdivision|string|false|none|The report country subdivision.  Format: ISO 3166-2:2007 country subdivision.|
|CreateDate|string(date-time)|false|none|The date the report was created.|
|CurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the expense report currency. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona.|
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
|EverSentBack|boolean|false|none|Whether the report has ever been sent back to the employee. Format: Y/N|
|HasException|boolean|false|none|Whether the report has exceptions. Format: Y/N|
|ID|string|false|none|The unique identifier of the resource.|
|LastComment|string|false|none|The text of the most recent comment on the report.|
|LastModifiedDate|string(date-time)|false|none|The date the report header was last modified.|
|LedgerName|string|false|none|The name of the expense report ledger. Maximum 20 characters.|
|Name|string|false|none|The name of the report.|
|OrgUnit1|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit2|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit3|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit4|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit5|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit6|[CustomField](#schemacustomfield)|false|none|none|
|OwnerLoginID|string|false|none|The Login ID of the user this report belongs to.|
|OwnerName|string|false|none|The name of the expense report owner.|
|PaidDate|string(date-time)|false|none|The date when all journal entries in the report were integrated with or extracted to the financial system.|
|PaymentStatusCode|string|false|none|The code for the payment status of the report.|
|PaymentStatusName|string|false|none|The report's payment status, in the OAuth consumer's language.|
|PersonalAmount|number(double)|false|none|The total amount of expenses marked as personal. Maximum 23 characters.|
|PolicyID|string|false|none|The unique identifier of the policy that applies to this report. Maximum 64 characters.|
|ProcessingPaymentDate|string(date-time)|false|none|The date that the report completed all approvals and was ready to be extracted for payment.|
|ReceiptsReceived|boolean|false|none|If Y, then this report has its receipt receipt confirmed by the Expense Processor. Format: Y/N|
|SubmitDate|string(date-time)|false|none|The date the report was submitted.|
|Total|number(double)|false|none|The total amount of the report.|
|TotalApprovedAmount|number(double)|false|none|The total amount of approved expenses in the report. Maximum 23 characters.|
|TotalClaimedAmount|number(double)|false|none|The total amount of all non-personal expenses in the report. Maximum 23 characters.|
|URI|string|false|none|The URI to the resource.|
|UserDefinedDate|string(date-time)|false|none|The date of the report assigned by the user.|
|WorkflowActionUrl|string|false|none|The URL to post a workflow action to the report using the "Post Report Workflow Action" function.|

<h3 id="tocS_ReportPost">ReportPost</h3>

<a id="schemareportpost"></a>
<a id="schema_ReportPost"></a>
<a id="tocSreportpost"></a>
<a id="tocsreportpost"></a>

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
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Name": "string",
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "PolicyID": "string",
  "Purpose": "string",
  "UserDefinedDate": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|string|false|none|The report header comment. Maximum length: 500.|
|Custom1|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom10|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom11|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom12|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom13|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom14|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom15|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom16|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom17|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom18|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom19|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom2|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom20|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom3|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom4|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom5|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom6|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom7|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom8|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom9|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Name|string|false|none|The name of the report.|
|OrgUnit1|string|false|none|The details from the Org Unit fields. These may not have data, depending on configuration.|
|OrgUnit2|string|false|none|The details from the Org Unit fields. These may not have data, depending on configuration.|
|OrgUnit3|string|false|none|The details from the Org Unit fields. These may not have data, depending on configuration.|
|OrgUnit4|string|false|none|The details from the Org Unit fields. These may not have data, depending on configuration.|
|OrgUnit5|string|false|none|The details from the Org Unit fields. These may not have data, depending on configuration.|
|OrgUnit6|string|false|none|The details from the Org Unit fields. These may not have data, depending on configuration.|
|PolicyID|string|false|none|The unique identifier for the policy. This is the protected Policy Key|
|Purpose|string|false|none|The business purpose of the report. Maximum length: 500.|
|UserDefinedDate|string(date-time)|false|none|The date of the report assigned by the user.|

<h3 id="tocS_ReportPut">ReportPut</h3>

<a id="schemareportput"></a>
<a id="schema_ReportPut"></a>
<a id="tocSreportput"></a>
<a id="tocsreportput"></a>

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
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Name": "string",
  "OrgUnit1": "string",
  "OrgUnit2": "string",
  "OrgUnit3": "string",
  "OrgUnit4": "string",
  "OrgUnit5": "string",
  "OrgUnit6": "string",
  "PolicyID": "string",
  "Purpose": "string",
  "UserDefinedDate": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|string|false|none|The report header comment. Maximum length: 500.|
|Custom1|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom10|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom11|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom12|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom13|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom14|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom15|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom16|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom17|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom18|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom19|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom2|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom20|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom3|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom4|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom5|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom6|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom7|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom8|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom9|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Name|string|false|none|The name of the report.|
|OrgUnit1|string|false|none|The details from the Org Unit fields. These may not have data, depending on configuration.|
|OrgUnit2|string|false|none|The details from the Org Unit fields. These may not have data, depending on configuration.|
|OrgUnit3|string|false|none|The details from the Org Unit fields. These may not have data, depending on configuration.|
|OrgUnit4|string|false|none|The details from the Org Unit fields. These may not have data, depending on configuration.|
|OrgUnit5|string|false|none|The details from the Org Unit fields. These may not have data, depending on configuration.|
|OrgUnit6|string|false|none|The details from the Org Unit fields. These may not have data, depending on configuration.|
|PolicyID|string|false|none|The unique identifier for the policy. This is the protected Policy Key|
|Purpose|string|false|none|The business purpose of the report. Maximum length: 500.|
|UserDefinedDate|string(date-time)|false|none|The date of the report assigned by the user.|

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

