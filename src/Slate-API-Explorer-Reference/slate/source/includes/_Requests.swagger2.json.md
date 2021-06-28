

<h2 id="requests">Requests v3.1</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Allows employees to submit travel plans, expected expenses, and expected cash advance needs prior to spending funds. This API provides methods to view, create, update, submit, or recall requests owned by the specified user.

Base URLs:

* <a href="https://us.api.concursolutions.com/api/v3.1">https://us.api.concursolutions.com/api/v3.1</a>





    

    

<h3 id="requests-resources">Resources</h3>

#### get__travelrequest_requests_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id} HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}',
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

result = RestClient.get 'https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}',
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

r = requests.get('https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}', headers = headers)

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
    $response = $client->request('GET','https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}', array(
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
URL obj = new URL("https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}");
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
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /travelrequest/requests/{id}`

*Get a Request by ID*

Returns a Request by ID.

<h3 id="get__travelrequest_requests_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Request ID|
|user|query|string|false|The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "AgencyOfficeID": "string",
  "AgencyOfficeName": "string",
  "ApprovalLimitDate": "2019-08-24T14:15:22Z",
  "ApprovalStatusCode": "string",
  "ApprovalStatusName": "string",
  "AuthorizedDate": "2019-08-24T14:15:22Z",
  "Comments": {
    "AuthorFirstName": "string",
    "AuthorLastName": "string",
    "CommentDateTime": "2019-08-24T14:15:22Z",
    "IsLatest": true,
    "Value": "string"
  },
  "CreationDate": "2019-08-24T14:15:22Z",
  "CurrencyCode": "string",
  "CurrencyName": "string",
  "EmployeeName": "string",
  "EndDate": "2019-08-24T14:15:22Z",
  "Exceptions": {
    "Code": "string",
    "Level": "string",
    "Message": "string"
  },
  "HeaderFormID": "string",
  "HighestExceptionLevel": [
    null
  ],
  "LastModifiedDate": "2019-08-24T14:15:22Z",
  "LoginID": "string",
  "MainDestinationID": "string",
  "MainDestinationName": "string",
  "Name": "string",
  "PolicyID": "string",
  "PolicyName": "string",
  "Purpose": "string",
  "RequestID": "string",
  "SegmentsEntries": {
    "Exceptions": {
      "Code": "string",
      "Level": "string",
      "Message": "string"
    },
    "ExchangeRate": 0,
    "ForeignAmount": 0,
    "ForeignCurrencyCode": "string",
    "ForeignCurrencyName": "string",
    "ID": "string",
    "LastModifiedDate": "2019-08-24T14:15:22Z",
    "SegmentFormID": "string",
    "SegmentFormTypeCode": "string",
    "Segments": {
      "ArrivalDate": "2019-08-24T14:15:22Z",
      "Comment": "string",
      "DepartureDate": "2019-08-24T14:15:22Z",
      "Exceptions": {
        "Code": "string",
        "Level": "string",
        "Message": "string"
      },
      "FlightNumber": "string",
      "FromLocationDetail": "string",
      "FromLocationID": "string",
      "FromLocationName": "string",
      "ID": "string",
      "IsAgencyBooked": true,
      "IsSelfBooked": true,
      "LastModifiedDate": "2019-08-24T14:15:22Z",
      "Order": 0,
      "ToLocationDetail": "string",
      "ToLocationID": "string",
      "ToLocationName": "string"
    },
    "SegmentTypeCode": "string",
    "SegmentTypeID": "string",
    "SegmentTypeName": "string",
    "TripType": [
      "string"
    ]
  },
  "StartDate": "2019-08-24T14:15:22Z",
  "SubmitDate": "2019-08-24T14:15:22Z",
  "TotalApprovedAmount": 0,
  "TotalPostedAmount": 0,
  "TotalRemainingAmount": 0,
  "UserPermissions": {
    "Links": {
      "Action": "string",
      "Method": "string",
      "Url": "string"
    }
  }
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<OutputRequest>
  <AgencyOfficeID>string</AgencyOfficeID>
  <AgencyOfficeName>string</AgencyOfficeName>
  <ApprovalLimitDate>2019-08-24T14:15:22Z</ApprovalLimitDate>
  <ApprovalStatusCode>string</ApprovalStatusCode>
  <ApprovalStatusName>string</ApprovalStatusName>
  <AuthorizedDate>2019-08-24T14:15:22Z</AuthorizedDate>
  <Comments>
    <AuthorFirstName>string</AuthorFirstName>
    <AuthorLastName>string</AuthorLastName>
    <CommentDateTime>2019-08-24T14:15:22Z</CommentDateTime>
    <IsLatest>true</IsLatest>
    <Value>string</Value>
  </Comments>
  <CreationDate>2019-08-24T14:15:22Z</CreationDate>
  <CurrencyCode>string</CurrencyCode>
  <CurrencyName>string</CurrencyName>
  <EmployeeName>string</EmployeeName>
  <EndDate>2019-08-24T14:15:22Z</EndDate>
  <Exceptions>
    <Code>string</Code>
    <Level>string</Level>
    <Message>string</Message>
  </Exceptions>
  <HeaderFormID>string</HeaderFormID>
  <HighestExceptionLevel/>
  <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
  <LoginID>string</LoginID>
  <MainDestinationID>string</MainDestinationID>
  <MainDestinationName>string</MainDestinationName>
  <Name>string</Name>
  <PolicyID>string</PolicyID>
  <PolicyName>string</PolicyName>
  <Purpose>string</Purpose>
  <RequestID>string</RequestID>
  <SegmentsEntries>
    <Exceptions>
      <Code>string</Code>
      <Level>string</Level>
      <Message>string</Message>
    </Exceptions>
    <ExchangeRate>0</ExchangeRate>
    <ForeignAmount>0</ForeignAmount>
    <ForeignCurrencyCode>string</ForeignCurrencyCode>
    <ForeignCurrencyName>string</ForeignCurrencyName>
    <ID>string</ID>
    <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
    <SegmentFormID>string</SegmentFormID>
    <SegmentFormTypeCode>string</SegmentFormTypeCode>
    <Segments>
      <ArrivalDate>2019-08-24T14:15:22Z</ArrivalDate>
      <Comment>string</Comment>
      <DepartureDate>2019-08-24T14:15:22Z</DepartureDate>
      <Exceptions>
        <Code>string</Code>
        <Level>string</Level>
        <Message>string</Message>
      </Exceptions>
      <FlightNumber>string</FlightNumber>
      <FromLocationDetail>string</FromLocationDetail>
      <FromLocationID>string</FromLocationID>
      <FromLocationName>string</FromLocationName>
      <ID>string</ID>
      <IsAgencyBooked>true</IsAgencyBooked>
      <IsSelfBooked>true</IsSelfBooked>
      <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
      <Order>0</Order>
      <ToLocationDetail>string</ToLocationDetail>
      <ToLocationID>string</ToLocationID>
      <ToLocationName>string</ToLocationName>
    </Segments>
    <SegmentTypeCode>string</SegmentTypeCode>
    <SegmentTypeID>string</SegmentTypeID>
    <SegmentTypeName>string</SegmentTypeName>
    <TripType>string</TripType>
  </SegmentsEntries>
  <StartDate>2019-08-24T14:15:22Z</StartDate>
  <SubmitDate>2019-08-24T14:15:22Z</SubmitDate>
  <TotalApprovedAmount>0</TotalApprovedAmount>
  <TotalPostedAmount>0</TotalPostedAmount>
  <TotalRemainingAmount>0</TotalRemainingAmount>
  <UserPermissions>
    <Links>
      <Action>string</Action>
      <Method>string</Method>
      <Url>string</Url>
    </Links>
  </UserPermissions>
</OutputRequest>
```

<h3 id="get__travelrequest_requests_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[OutputRequest](#schemaoutputrequest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### put__travelrequest_requests_{id}

> Code samples

```shell
# You can also use wget
curl -X PUT https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id} HTTP/1.1
Host: us.api.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "AgencyOfficeID": "string",
  "Comment": "string",
  "EndDate": "2019-08-24T14:15:22Z",
  "MainDestinationID": "string",
  "Name": "string",
  "Purpose": "string",
  "SegmentsEntries": {
    "ForeignAmount": 0,
    "ForeignCurrencyCode": "string",
    "ID": "string",
    "Segments": {
      "ArrivalDate": "2019-08-24T14:15:22Z",
      "Comment": "string",
      "DepartureDate": "2019-08-24T14:15:22Z",
      "FlightNumber": "string",
      "FromLocationDetail": "string",
      "FromLocationID": "string",
      "ID": "string",
      "ToLocationDetail": "string",
      "ToLocationID": "string"
    },
    "SegmentTypeID": "string",
    "TripType": [
      "string"
    ]
  },
  "StartDate": "2019-08-24T14:15:22Z"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}',
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

result = RestClient.put 'https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}',
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

r = requests.put('https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}', headers = headers)

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
    $response = $client->request('PUT','https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}', array(
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
URL obj = new URL("https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}");
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
    req, err := http.NewRequest("PUT", "https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /travelrequest/requests/{id}`

*Update a Request*

Updates all or partial request information.

> Body parameter

```json
{
  "AgencyOfficeID": "string",
  "Comment": "string",
  "EndDate": "2019-08-24T14:15:22Z",
  "MainDestinationID": "string",
  "Name": "string",
  "Purpose": "string",
  "SegmentsEntries": {
    "ForeignAmount": 0,
    "ForeignCurrencyCode": "string",
    "ID": "string",
    "Segments": {
      "ArrivalDate": "2019-08-24T14:15:22Z",
      "Comment": "string",
      "DepartureDate": "2019-08-24T14:15:22Z",
      "FlightNumber": "string",
      "FromLocationDetail": "string",
      "FromLocationID": "string",
      "ID": "string",
      "ToLocationDetail": "string",
      "ToLocationID": "string"
    },
    "SegmentTypeID": "string",
    "TripType": [
      "string"
    ]
  },
  "StartDate": "2019-08-24T14:15:22Z"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PutInputRequest>
  <AgencyOfficeID>string</AgencyOfficeID>
  <Comment>string</Comment>
  <EndDate>2019-08-24T14:15:22Z</EndDate>
  <MainDestinationID>string</MainDestinationID>
  <Name>string</Name>
  <Purpose>string</Purpose>
  <SegmentsEntries>
    <ForeignAmount>0</ForeignAmount>
    <ForeignCurrencyCode>string</ForeignCurrencyCode>
    <ID>string</ID>
    <Segments>
      <ArrivalDate>2019-08-24T14:15:22Z</ArrivalDate>
      <Comment>string</Comment>
      <DepartureDate>2019-08-24T14:15:22Z</DepartureDate>
      <FlightNumber>string</FlightNumber>
      <FromLocationDetail>string</FromLocationDetail>
      <FromLocationID>string</FromLocationID>
      <ID>string</ID>
      <ToLocationDetail>string</ToLocationDetail>
      <ToLocationID>string</ToLocationID>
    </Segments>
    <SegmentTypeID>string</SegmentTypeID>
    <TripType>string</TripType>
  </SegmentsEntries>
  <StartDate>2019-08-24T14:15:22Z</StartDate>
</PutInputRequest>
```

<h3 id="put__travelrequest_requests_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Request ID|
|user|query|string|false|The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.|
|doSubmit|query|boolean|false|Trigger a submit action upon a successful save operation|
|forceSubmit|query|boolean|false|Force the submit operation even if non-blocking functional exceptions were to be raised on request creation or update operation.|
|body|body|[PutInputRequest](#schemaputinputrequest)|true|Partial or complete Request object to save.|

> Example responses

> 200 Response

```json
{
  "Error": {
    "Code": "string",
    "Message": "string"
  },
  "ID": "string",
  "Request": {
    "AgencyOfficeID": "string",
    "AgencyOfficeName": "string",
    "ApprovalLimitDate": "2019-08-24T14:15:22Z",
    "ApprovalStatusCode": "string",
    "ApprovalStatusName": "string",
    "AuthorizedDate": "2019-08-24T14:15:22Z",
    "Comments": {
      "AuthorFirstName": "string",
      "AuthorLastName": "string",
      "CommentDateTime": "2019-08-24T14:15:22Z",
      "IsLatest": true,
      "Value": "string"
    },
    "CreationDate": "2019-08-24T14:15:22Z",
    "CurrencyCode": "string",
    "CurrencyName": "string",
    "EmployeeName": "string",
    "EndDate": "2019-08-24T14:15:22Z",
    "Exceptions": {
      "Code": "string",
      "Level": "string",
      "Message": "string"
    },
    "HeaderFormID": "string",
    "HighestExceptionLevel": [
      null
    ],
    "LastModifiedDate": "2019-08-24T14:15:22Z",
    "LoginID": "string",
    "MainDestinationID": "string",
    "MainDestinationName": "string",
    "Name": "string",
    "PolicyID": "string",
    "PolicyName": "string",
    "Purpose": "string",
    "RequestID": "string",
    "SegmentsEntries": {
      "Exceptions": {
        "Code": "string",
        "Level": "string",
        "Message": "string"
      },
      "ExchangeRate": 0,
      "ForeignAmount": 0,
      "ForeignCurrencyCode": "string",
      "ForeignCurrencyName": "string",
      "ID": "string",
      "LastModifiedDate": "2019-08-24T14:15:22Z",
      "SegmentFormID": "string",
      "SegmentFormTypeCode": "string",
      "Segments": {
        "ArrivalDate": "2019-08-24T14:15:22Z",
        "Comment": "string",
        "DepartureDate": "2019-08-24T14:15:22Z",
        "Exceptions": {
          "Code": "string",
          "Level": "string",
          "Message": "string"
        },
        "FlightNumber": "string",
        "FromLocationDetail": "string",
        "FromLocationID": "string",
        "FromLocationName": "string",
        "ID": "string",
        "IsAgencyBooked": true,
        "IsSelfBooked": true,
        "LastModifiedDate": "2019-08-24T14:15:22Z",
        "Order": 0,
        "ToLocationDetail": "string",
        "ToLocationID": "string",
        "ToLocationName": "string"
      },
      "SegmentTypeCode": "string",
      "SegmentTypeID": "string",
      "SegmentTypeName": "string",
      "TripType": [
        "string"
      ]
    },
    "StartDate": "2019-08-24T14:15:22Z",
    "SubmitDate": "2019-08-24T14:15:22Z",
    "TotalApprovedAmount": 0,
    "TotalPostedAmount": 0,
    "TotalRemainingAmount": 0,
    "UserPermissions": {
      "Links": {
        "Action": "string",
        "Method": "string",
        "Url": "string"
      }
    }
  },
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<RequestResponse>
  <Error>
    <Code>string</Code>
    <Message>string</Message>
  </Error>
  <ID>string</ID>
  <Request>
    <AgencyOfficeID>string</AgencyOfficeID>
    <AgencyOfficeName>string</AgencyOfficeName>
    <ApprovalLimitDate>2019-08-24T14:15:22Z</ApprovalLimitDate>
    <ApprovalStatusCode>string</ApprovalStatusCode>
    <ApprovalStatusName>string</ApprovalStatusName>
    <AuthorizedDate>2019-08-24T14:15:22Z</AuthorizedDate>
    <Comments>
      <AuthorFirstName>string</AuthorFirstName>
      <AuthorLastName>string</AuthorLastName>
      <CommentDateTime>2019-08-24T14:15:22Z</CommentDateTime>
      <IsLatest>true</IsLatest>
      <Value>string</Value>
    </Comments>
    <CreationDate>2019-08-24T14:15:22Z</CreationDate>
    <CurrencyCode>string</CurrencyCode>
    <CurrencyName>string</CurrencyName>
    <EmployeeName>string</EmployeeName>
    <EndDate>2019-08-24T14:15:22Z</EndDate>
    <Exceptions>
      <Code>string</Code>
      <Level>string</Level>
      <Message>string</Message>
    </Exceptions>
    <HeaderFormID>string</HeaderFormID>
    <HighestExceptionLevel/>
    <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
    <LoginID>string</LoginID>
    <MainDestinationID>string</MainDestinationID>
    <MainDestinationName>string</MainDestinationName>
    <Name>string</Name>
    <PolicyID>string</PolicyID>
    <PolicyName>string</PolicyName>
    <Purpose>string</Purpose>
    <RequestID>string</RequestID>
    <SegmentsEntries>
      <Exceptions>
        <Code>string</Code>
        <Level>string</Level>
        <Message>string</Message>
      </Exceptions>
      <ExchangeRate>0</ExchangeRate>
      <ForeignAmount>0</ForeignAmount>
      <ForeignCurrencyCode>string</ForeignCurrencyCode>
      <ForeignCurrencyName>string</ForeignCurrencyName>
      <ID>string</ID>
      <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
      <SegmentFormID>string</SegmentFormID>
      <SegmentFormTypeCode>string</SegmentFormTypeCode>
      <Segments>
        <ArrivalDate>2019-08-24T14:15:22Z</ArrivalDate>
        <Comment>string</Comment>
        <DepartureDate>2019-08-24T14:15:22Z</DepartureDate>
        <Exceptions>
          <Code>string</Code>
          <Level>string</Level>
          <Message>string</Message>
        </Exceptions>
        <FlightNumber>string</FlightNumber>
        <FromLocationDetail>string</FromLocationDetail>
        <FromLocationID>string</FromLocationID>
        <FromLocationName>string</FromLocationName>
        <ID>string</ID>
        <IsAgencyBooked>true</IsAgencyBooked>
        <IsSelfBooked>true</IsSelfBooked>
        <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
        <Order>0</Order>
        <ToLocationDetail>string</ToLocationDetail>
        <ToLocationID>string</ToLocationID>
        <ToLocationName>string</ToLocationName>
      </Segments>
      <SegmentTypeCode>string</SegmentTypeCode>
      <SegmentTypeID>string</SegmentTypeID>
      <SegmentTypeName>string</SegmentTypeName>
      <TripType>string</TripType>
    </SegmentsEntries>
    <StartDate>2019-08-24T14:15:22Z</StartDate>
    <SubmitDate>2019-08-24T14:15:22Z</SubmitDate>
    <TotalApprovedAmount>0</TotalApprovedAmount>
    <TotalPostedAmount>0</TotalPostedAmount>
    <TotalRemainingAmount>0</TotalRemainingAmount>
    <UserPermissions>
      <Links>
        <Action>string</Action>
        <Method>string</Method>
        <Url>string</Url>
      </Links>
    </UserPermissions>
  </Request>
  <URI>string</URI>
</RequestResponse>
```

<h3 id="put__travelrequest_requests_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[RequestResponse](#schemarequestresponse)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Failure|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### get__travelrequest_requests

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/api/v3.1/travelrequest/requests \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://us.api.concursolutions.com/api/v3.1/travelrequest/requests HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://us.api.concursolutions.com/api/v3.1/travelrequest/requests',
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

result = RestClient.get 'https://us.api.concursolutions.com/api/v3.1/travelrequest/requests',
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

r = requests.get('https://us.api.concursolutions.com/api/v3.1/travelrequest/requests', headers = headers)

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
    $response = $client->request('GET','https://us.api.concursolutions.com/api/v3.1/travelrequest/requests', array(
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
URL obj = new URL("https://us.api.concursolutions.com/api/v3.1/travelrequest/requests");
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
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/api/v3.1/travelrequest/requests", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /travelrequest/requests`

*Get all Requests*

Returns all Requests owned by the user.

<h3 id="get__travelrequest_requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|Starting page offset|
|limit|query|integer(int32)|false|Number of records to return (default 100)|
|user|query|string|false|The login ID of the user who owns this Request. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.|
|status|query|string|false|Specifies which request or approval status to return. If no Status value is sent, the default Status of Active will be used.|
|modifiedAfter|query|string(date-time)|false|Returns requests in which the associated dependents (header, entries, segments, allocations, attendees, comments) were modified after the specified date and time. This search term can be used along with other search terms to narrow the results. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss.|
|modifiedBefore|query|string(date-time)|false|Returns requests in which the associated dependents (header, entries, segments, allocations, attendees, comments ) were modified before the specified date and time.This search term can be used along with other search terms to narrow the results. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss.|
|withSegmentTypes|query|boolean|false|Pass true to populate the SegmentType field in the result.|
|withUserPermissions|query|boolean|false|Pass true to get the UserPermissions in the result.|

> Example responses

> 200 Response

```json
{
  "Items": {
    "ApprovalStatusCode": "string",
    "ApprovalStatusName": "string",
    "ApproverLoginID": "string",
    "CreationDate": "2019-08-24T14:15:22Z",
    "CurrencyCode": "string",
    "EmployeeName": "string",
    "EndDate": "2019-08-24T14:15:22Z",
    "HeaderFormID": "string",
    "HighestExceptionLevel": [
      null
    ],
    "ID": "string",
    "LastComment": "string",
    "MainDestinationID": "string",
    "MainDestinationName": "string",
    "Name": "string",
    "Purpose": "string",
    "RequestID": "string",
    "SegmentTypes": "string",
    "StartDate": "2019-08-24T14:15:22Z",
    "TotalApprovedAmount": 0,
    "TotalPostedAmount": 0,
    "URI": "string",
    "UserLoginID": "string",
    "UserPermissions": {
      "Links": {
        "Action": "string",
        "Method": "string",
        "Url": "string"
      }
    }
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<RequestCollection>
  <Items>
    <ApprovalStatusCode>string</ApprovalStatusCode>
    <ApprovalStatusName>string</ApprovalStatusName>
    <ApproverLoginID>string</ApproverLoginID>
    <CreationDate>2019-08-24T14:15:22Z</CreationDate>
    <CurrencyCode>string</CurrencyCode>
    <EmployeeName>string</EmployeeName>
    <EndDate>2019-08-24T14:15:22Z</EndDate>
    <HeaderFormID>string</HeaderFormID>
    <HighestExceptionLevel/>
    <ID>string</ID>
    <LastComment>string</LastComment>
    <MainDestinationID>string</MainDestinationID>
    <MainDestinationName>string</MainDestinationName>
    <Name>string</Name>
    <Purpose>string</Purpose>
    <RequestID>string</RequestID>
    <SegmentTypes>string</SegmentTypes>
    <StartDate>2019-08-24T14:15:22Z</StartDate>
    <TotalApprovedAmount>0</TotalApprovedAmount>
    <TotalPostedAmount>0</TotalPostedAmount>
    <URI>string</URI>
    <UserLoginID>string</UserLoginID>
    <UserPermissions>
      <Links>
        <Action>string</Action>
        <Method>string</Method>
        <Url>string</Url>
      </Links>
    </UserPermissions>
  </Items>
  <NextPage>string</NextPage>
</RequestCollection>
```

<h3 id="get__travelrequest_requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[RequestCollection](#schemarequestcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### post__travelrequest_requests

> Code samples

```shell
# You can also use wget
curl -X POST https://us.api.concursolutions.com/api/v3.1/travelrequest/requests \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://us.api.concursolutions.com/api/v3.1/travelrequest/requests HTTP/1.1
Host: us.api.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "AgencyOfficeID": "string",
  "Comment": "string",
  "CurrencyCode": "string",
  "EndDate": "2019-08-24T14:15:22Z",
  "MainDestinationID": "string",
  "Name": "string",
  "PolicyID": "string",
  "Purpose": "string",
  "SegmentsEntries": {
    "ForeignAmount": 0,
    "ForeignCurrencyCode": "string",
    "Segments": {
      "ArrivalDate": "2019-08-24T14:15:22Z",
      "Comment": "string",
      "DepartureDate": "2019-08-24T14:15:22Z",
      "FlightNumber": "string",
      "FromLocationDetail": "string",
      "FromLocationID": "string",
      "ToLocationDetail": "string",
      "ToLocationID": "string"
    },
    "SegmentTypeID": "string",
    "TripType": [
      "string"
    ]
  },
  "StartDate": "2019-08-24T14:15:22Z"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://us.api.concursolutions.com/api/v3.1/travelrequest/requests',
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

result = RestClient.post 'https://us.api.concursolutions.com/api/v3.1/travelrequest/requests',
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

r = requests.post('https://us.api.concursolutions.com/api/v3.1/travelrequest/requests', headers = headers)

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
    $response = $client->request('POST','https://us.api.concursolutions.com/api/v3.1/travelrequest/requests', array(
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
URL obj = new URL("https://us.api.concursolutions.com/api/v3.1/travelrequest/requests");
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
    req, err := http.NewRequest("POST", "https://us.api.concursolutions.com/api/v3.1/travelrequest/requests", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /travelrequest/requests`

*Create a Request*

Creates a new Request, with full or partial information.

> Body parameter

```json
{
  "AgencyOfficeID": "string",
  "Comment": "string",
  "CurrencyCode": "string",
  "EndDate": "2019-08-24T14:15:22Z",
  "MainDestinationID": "string",
  "Name": "string",
  "PolicyID": "string",
  "Purpose": "string",
  "SegmentsEntries": {
    "ForeignAmount": 0,
    "ForeignCurrencyCode": "string",
    "Segments": {
      "ArrivalDate": "2019-08-24T14:15:22Z",
      "Comment": "string",
      "DepartureDate": "2019-08-24T14:15:22Z",
      "FlightNumber": "string",
      "FromLocationDetail": "string",
      "FromLocationID": "string",
      "ToLocationDetail": "string",
      "ToLocationID": "string"
    },
    "SegmentTypeID": "string",
    "TripType": [
      "string"
    ]
  },
  "StartDate": "2019-08-24T14:15:22Z"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PostInputRequest>
  <AgencyOfficeID>string</AgencyOfficeID>
  <Comment>string</Comment>
  <CurrencyCode>string</CurrencyCode>
  <EndDate>2019-08-24T14:15:22Z</EndDate>
  <MainDestinationID>string</MainDestinationID>
  <Name>string</Name>
  <PolicyID>string</PolicyID>
  <Purpose>string</Purpose>
  <SegmentsEntries>
    <ForeignAmount>0</ForeignAmount>
    <ForeignCurrencyCode>string</ForeignCurrencyCode>
    <Segments>
      <ArrivalDate>2019-08-24T14:15:22Z</ArrivalDate>
      <Comment>string</Comment>
      <DepartureDate>2019-08-24T14:15:22Z</DepartureDate>
      <FlightNumber>string</FlightNumber>
      <FromLocationDetail>string</FromLocationDetail>
      <FromLocationID>string</FromLocationID>
      <ToLocationDetail>string</ToLocationDetail>
      <ToLocationID>string</ToLocationID>
    </Segments>
    <SegmentTypeID>string</SegmentTypeID>
    <TripType>string</TripType>
  </SegmentsEntries>
  <StartDate>2019-08-24T14:15:22Z</StartDate>
</PostInputRequest>
```

<h3 id="post__travelrequest_requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|false|The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.|
|doSubmit|query|boolean|false|Trigger a submit action upon a successful save operation|
|forceSubmit|query|boolean|false|Force the submit operation even if non-blocking functional exceptions were to be raised on request creation or update operation.|
|body|body|[PostInputRequest](#schemapostinputrequest)|true|Partial or complete Request object to save|

> Example responses

> 200 Response

```json
{
  "Error": {
    "Code": "string",
    "Message": "string"
  },
  "ID": "string",
  "Request": {
    "AgencyOfficeID": "string",
    "AgencyOfficeName": "string",
    "ApprovalLimitDate": "2019-08-24T14:15:22Z",
    "ApprovalStatusCode": "string",
    "ApprovalStatusName": "string",
    "AuthorizedDate": "2019-08-24T14:15:22Z",
    "Comments": {
      "AuthorFirstName": "string",
      "AuthorLastName": "string",
      "CommentDateTime": "2019-08-24T14:15:22Z",
      "IsLatest": true,
      "Value": "string"
    },
    "CreationDate": "2019-08-24T14:15:22Z",
    "CurrencyCode": "string",
    "CurrencyName": "string",
    "EmployeeName": "string",
    "EndDate": "2019-08-24T14:15:22Z",
    "Exceptions": {
      "Code": "string",
      "Level": "string",
      "Message": "string"
    },
    "HeaderFormID": "string",
    "HighestExceptionLevel": [
      null
    ],
    "LastModifiedDate": "2019-08-24T14:15:22Z",
    "LoginID": "string",
    "MainDestinationID": "string",
    "MainDestinationName": "string",
    "Name": "string",
    "PolicyID": "string",
    "PolicyName": "string",
    "Purpose": "string",
    "RequestID": "string",
    "SegmentsEntries": {
      "Exceptions": {
        "Code": "string",
        "Level": "string",
        "Message": "string"
      },
      "ExchangeRate": 0,
      "ForeignAmount": 0,
      "ForeignCurrencyCode": "string",
      "ForeignCurrencyName": "string",
      "ID": "string",
      "LastModifiedDate": "2019-08-24T14:15:22Z",
      "SegmentFormID": "string",
      "SegmentFormTypeCode": "string",
      "Segments": {
        "ArrivalDate": "2019-08-24T14:15:22Z",
        "Comment": "string",
        "DepartureDate": "2019-08-24T14:15:22Z",
        "Exceptions": {
          "Code": "string",
          "Level": "string",
          "Message": "string"
        },
        "FlightNumber": "string",
        "FromLocationDetail": "string",
        "FromLocationID": "string",
        "FromLocationName": "string",
        "ID": "string",
        "IsAgencyBooked": true,
        "IsSelfBooked": true,
        "LastModifiedDate": "2019-08-24T14:15:22Z",
        "Order": 0,
        "ToLocationDetail": "string",
        "ToLocationID": "string",
        "ToLocationName": "string"
      },
      "SegmentTypeCode": "string",
      "SegmentTypeID": "string",
      "SegmentTypeName": "string",
      "TripType": [
        "string"
      ]
    },
    "StartDate": "2019-08-24T14:15:22Z",
    "SubmitDate": "2019-08-24T14:15:22Z",
    "TotalApprovedAmount": 0,
    "TotalPostedAmount": 0,
    "TotalRemainingAmount": 0,
    "UserPermissions": {
      "Links": {
        "Action": "string",
        "Method": "string",
        "Url": "string"
      }
    }
  },
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<RequestResponse>
  <Error>
    <Code>string</Code>
    <Message>string</Message>
  </Error>
  <ID>string</ID>
  <Request>
    <AgencyOfficeID>string</AgencyOfficeID>
    <AgencyOfficeName>string</AgencyOfficeName>
    <ApprovalLimitDate>2019-08-24T14:15:22Z</ApprovalLimitDate>
    <ApprovalStatusCode>string</ApprovalStatusCode>
    <ApprovalStatusName>string</ApprovalStatusName>
    <AuthorizedDate>2019-08-24T14:15:22Z</AuthorizedDate>
    <Comments>
      <AuthorFirstName>string</AuthorFirstName>
      <AuthorLastName>string</AuthorLastName>
      <CommentDateTime>2019-08-24T14:15:22Z</CommentDateTime>
      <IsLatest>true</IsLatest>
      <Value>string</Value>
    </Comments>
    <CreationDate>2019-08-24T14:15:22Z</CreationDate>
    <CurrencyCode>string</CurrencyCode>
    <CurrencyName>string</CurrencyName>
    <EmployeeName>string</EmployeeName>
    <EndDate>2019-08-24T14:15:22Z</EndDate>
    <Exceptions>
      <Code>string</Code>
      <Level>string</Level>
      <Message>string</Message>
    </Exceptions>
    <HeaderFormID>string</HeaderFormID>
    <HighestExceptionLevel/>
    <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
    <LoginID>string</LoginID>
    <MainDestinationID>string</MainDestinationID>
    <MainDestinationName>string</MainDestinationName>
    <Name>string</Name>
    <PolicyID>string</PolicyID>
    <PolicyName>string</PolicyName>
    <Purpose>string</Purpose>
    <RequestID>string</RequestID>
    <SegmentsEntries>
      <Exceptions>
        <Code>string</Code>
        <Level>string</Level>
        <Message>string</Message>
      </Exceptions>
      <ExchangeRate>0</ExchangeRate>
      <ForeignAmount>0</ForeignAmount>
      <ForeignCurrencyCode>string</ForeignCurrencyCode>
      <ForeignCurrencyName>string</ForeignCurrencyName>
      <ID>string</ID>
      <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
      <SegmentFormID>string</SegmentFormID>
      <SegmentFormTypeCode>string</SegmentFormTypeCode>
      <Segments>
        <ArrivalDate>2019-08-24T14:15:22Z</ArrivalDate>
        <Comment>string</Comment>
        <DepartureDate>2019-08-24T14:15:22Z</DepartureDate>
        <Exceptions>
          <Code>string</Code>
          <Level>string</Level>
          <Message>string</Message>
        </Exceptions>
        <FlightNumber>string</FlightNumber>
        <FromLocationDetail>string</FromLocationDetail>
        <FromLocationID>string</FromLocationID>
        <FromLocationName>string</FromLocationName>
        <ID>string</ID>
        <IsAgencyBooked>true</IsAgencyBooked>
        <IsSelfBooked>true</IsSelfBooked>
        <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
        <Order>0</Order>
        <ToLocationDetail>string</ToLocationDetail>
        <ToLocationID>string</ToLocationID>
        <ToLocationName>string</ToLocationName>
      </Segments>
      <SegmentTypeCode>string</SegmentTypeCode>
      <SegmentTypeID>string</SegmentTypeID>
      <SegmentTypeName>string</SegmentTypeName>
      <TripType>string</TripType>
    </SegmentsEntries>
    <StartDate>2019-08-24T14:15:22Z</StartDate>
    <SubmitDate>2019-08-24T14:15:22Z</SubmitDate>
    <TotalApprovedAmount>0</TotalApprovedAmount>
    <TotalPostedAmount>0</TotalPostedAmount>
    <TotalRemainingAmount>0</TotalRemainingAmount>
    <UserPermissions>
      <Links>
        <Action>string</Action>
        <Method>string</Method>
        <Url>string</Url>
      </Links>
    </UserPermissions>
  </Request>
  <URI>string</URI>
</RequestResponse>
```

<h3 id="post__travelrequest_requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[RequestResponse](#schemarequestresponse)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Failure|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### post__travelrequest_requests_{id}_submit

> Code samples

```shell
# You can also use wget
curl -X POST https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/submit \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/submit HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/submit',
{
  method: 'POST',

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

result = RestClient.post 'https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/submit',
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

r = requests.post('https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/submit', headers = headers)

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
    $response = $client->request('POST','https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/submit', array(
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
URL obj = new URL("https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/submit");
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
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/submit", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /travelrequest/requests/{id}/submit`

*Submit a Request by ID*

Submits a Request to the approval workflow.

<h3 id="post__travelrequest_requests_{id}_submit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Request ID|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="post__travelrequest_requests_{id}_submit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Failure|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### post__travelrequest_requests_{id}_recall

> Code samples

```shell
# You can also use wget
curl -X POST https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/recall \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/recall HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/recall',
{
  method: 'POST',

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

result = RestClient.post 'https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/recall',
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

r = requests.post('https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/recall', headers = headers)

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
    $response = $client->request('POST','https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/recall', array(
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
URL obj = new URL("https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/recall");
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
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://us.api.concursolutions.com/api/v3.1/travelrequest/requests/{id}/recall", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /travelrequest/requests/{id}/recall`

*Recall a Request by ID*

Recalls the specified Request from the approval workflow.

<h3 id="post__travelrequest_requests_{id}_recall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Request ID|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="post__travelrequest_requests_{id}_recall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Failure|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

### Schemas

<h3 id="tocS_Comment">Comment</h3>

<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "AuthorFirstName": "string",
  "AuthorLastName": "string",
  "CommentDateTime": "2019-08-24T14:15:22Z",
  "IsLatest": true,
  "Value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorFirstName|string|false|none|The first name of the person who made the comment.|
|AuthorLastName|string|false|none|The last name of the person who made the comment.|
|CommentDateTime|string(date-time)|false|none|The time, in GMT, when the user made the comment.|
|IsLatest|boolean|false|none|Indicates that the comment is the last one.|
|Value|string|false|none|The text of the Request header comment.|

<h3 id="tocS_Error">Error</h3>

<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "Code": "string",
  "Message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|The text of the Request header comment.|
|Message|string|false|none|The text of the Request header comment.|

<h3 id="tocS_Link">Link</h3>

<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "Action": "string",
  "Method": "string",
  "Url": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|string|false|none|The action that the user is allowed to perform on the resource.|
|Method|string|false|none|The method of the request. Possible values: GET, POST, PUT and DELETE.|
|Url|string|false|none|The URL of the resource that the user can access.|

<h3 id="tocS_OutputRequest">OutputRequest</h3>

<a id="schemaoutputrequest"></a>
<a id="schema_OutputRequest"></a>
<a id="tocSoutputrequest"></a>
<a id="tocsoutputrequest"></a>

```json
{
  "AgencyOfficeID": "string",
  "AgencyOfficeName": "string",
  "ApprovalLimitDate": "2019-08-24T14:15:22Z",
  "ApprovalStatusCode": "string",
  "ApprovalStatusName": "string",
  "AuthorizedDate": "2019-08-24T14:15:22Z",
  "Comments": {
    "AuthorFirstName": "string",
    "AuthorLastName": "string",
    "CommentDateTime": "2019-08-24T14:15:22Z",
    "IsLatest": true,
    "Value": "string"
  },
  "CreationDate": "2019-08-24T14:15:22Z",
  "CurrencyCode": "string",
  "CurrencyName": "string",
  "EmployeeName": "string",
  "EndDate": "2019-08-24T14:15:22Z",
  "Exceptions": {
    "Code": "string",
    "Level": "string",
    "Message": "string"
  },
  "HeaderFormID": "string",
  "HighestExceptionLevel": [
    null
  ],
  "LastModifiedDate": "2019-08-24T14:15:22Z",
  "LoginID": "string",
  "MainDestinationID": "string",
  "MainDestinationName": "string",
  "Name": "string",
  "PolicyID": "string",
  "PolicyName": "string",
  "Purpose": "string",
  "RequestID": "string",
  "SegmentsEntries": {
    "Exceptions": {
      "Code": "string",
      "Level": "string",
      "Message": "string"
    },
    "ExchangeRate": 0,
    "ForeignAmount": 0,
    "ForeignCurrencyCode": "string",
    "ForeignCurrencyName": "string",
    "ID": "string",
    "LastModifiedDate": "2019-08-24T14:15:22Z",
    "SegmentFormID": "string",
    "SegmentFormTypeCode": "string",
    "Segments": {
      "ArrivalDate": "2019-08-24T14:15:22Z",
      "Comment": "string",
      "DepartureDate": "2019-08-24T14:15:22Z",
      "Exceptions": {
        "Code": "string",
        "Level": "string",
        "Message": "string"
      },
      "FlightNumber": "string",
      "FromLocationDetail": "string",
      "FromLocationID": "string",
      "FromLocationName": "string",
      "ID": "string",
      "IsAgencyBooked": true,
      "IsSelfBooked": true,
      "LastModifiedDate": "2019-08-24T14:15:22Z",
      "Order": 0,
      "ToLocationDetail": "string",
      "ToLocationID": "string",
      "ToLocationName": "string"
    },
    "SegmentTypeCode": "string",
    "SegmentTypeID": "string",
    "SegmentTypeName": "string",
    "TripType": [
      "string"
    ]
  },
  "StartDate": "2019-08-24T14:15:22Z",
  "SubmitDate": "2019-08-24T14:15:22Z",
  "TotalApprovedAmount": 0,
  "TotalPostedAmount": 0,
  "TotalRemainingAmount": 0,
  "UserPermissions": {
    "Links": {
      "Action": "string",
      "Method": "string",
      "Url": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgencyOfficeID|string|false|none|The ID of the travel agency office.|
|AgencyOfficeName|string|false|none|The travel agency office name.|
|ApprovalLimitDate|string(date-time)|false|none|The date by which the Request must be approved. This element appears only when integrated with Concur Travel.|
|ApprovalStatusCode|string|false|none|The code of the approval status of the Request.|
|ApprovalStatusName|string|false|none|The name of the approval status of the Request.|
|AuthorizedDate|string(date-time)|false|none|The date the Request was authorized. Format: YYYY-MM-DDThh:mm:ss.|
|Comments|[Comment](#schemacomment)|false|none|none|
|CreationDate|string(date-time)|false|none|The date of the Request was created.|
|CurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the Request currency. The Request currency is defined as the Request creator's default reimbursement currency.|
|CurrencyName|string|false|none|The currency name for the Request currency. The Request currency is defined as the Request creator's default reimbursement currency.|
|EmployeeName|string|false|none|The first, middle (or middle initial), and last name of the employee who created the Request.|
|EndDate|string(date-time)|false|none|The end date of the travel request. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss.|
|Exceptions|[TRException](#schematrexception)|false|none|none|
|HeaderFormID|string|false|none|The unique identifier of the Header Form resource. See the "Forms" resource for more information.|
|HighestExceptionLevel|[any]|false|none|Indicates the highest exception level of the Request. Possible value: NONE, NON_BLOCKING, BLOCKING|
|LastModifiedDate|string(date-time)|false|none|The date the Request was last modified. Format: YYYY-MM-DDThh:mm:ss|
|LoginID|string|false|none|The Concur login ID of the Request owner.|
|MainDestinationID|string|false|none|The main destination location ID|
|MainDestinationName|string|false|none|The main destination location name|
|Name|string|false|none|The name of the Request.|
|PolicyID|string|false|none|The unique identifier of the policy that applies to this Request. Maximum length 64 characters.|
|PolicyName|string|false|none|The name of the policy that applies to this Request.|
|Purpose|string|false|none|The purpose of the Request.|
|RequestID|string|false|none|The unique key for the Request.|
|SegmentsEntries|[SegmentsEntry](#schemasegmentsentry)|false|none|none|
|StartDate|string(date-time)|false|none|The start date of the travel request. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss.|
|SubmitDate|string(date-time)|false|none|The date the Request was submitted. Format: YYYY-MM-DDThh:mm:ss.|
|TotalApprovedAmount|number(double)|false|none|The total amount of approved expenses in the Request.|
|TotalPostedAmount|number(double)|false|none|The total amount of the Request.|
|TotalRemainingAmount|number(double)|false|none|The total amount of expenses remaining in the Request.|
|UserPermissions|[UserPermissions](#schemauserpermissions)|false|none|none|

<h3 id="tocS_PostInputRequest">PostInputRequest</h3>

<a id="schemapostinputrequest"></a>
<a id="schema_PostInputRequest"></a>
<a id="tocSpostinputrequest"></a>
<a id="tocspostinputrequest"></a>

```json
{
  "AgencyOfficeID": "string",
  "Comment": "string",
  "CurrencyCode": "string",
  "EndDate": "2019-08-24T14:15:22Z",
  "MainDestinationID": "string",
  "Name": "string",
  "PolicyID": "string",
  "Purpose": "string",
  "SegmentsEntries": {
    "ForeignAmount": 0,
    "ForeignCurrencyCode": "string",
    "Segments": {
      "ArrivalDate": "2019-08-24T14:15:22Z",
      "Comment": "string",
      "DepartureDate": "2019-08-24T14:15:22Z",
      "FlightNumber": "string",
      "FromLocationDetail": "string",
      "FromLocationID": "string",
      "ToLocationDetail": "string",
      "ToLocationID": "string"
    },
    "SegmentTypeID": "string",
    "TripType": [
      "string"
    ]
  },
  "StartDate": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgencyOfficeID|string|false|none|The ID of the travel agency office.|
|Comment|string|false|none|The text of the most recent comment on the Request.|
|CurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the Request currency.|
|EndDate|string(date-time)|false|none|The end date of the travel request. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss.|
|MainDestinationID|string|false|none|The main destination location ID|
|Name|string|false|none|The name of the Request.|
|PolicyID|string|false|none|The unique identifier of the policy that applies to this Request. Maximum length 64 characters.|
|Purpose|string|false|none|The purpose of the Request.|
|SegmentsEntries|[PostSegmentsEntry](#schemapostsegmentsentry)|false|none|none|
|StartDate|string(date-time)|false|none|The start date of the travel request. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss.|

<h3 id="tocS_PostSegment">PostSegment</h3>

<a id="schemapostsegment"></a>
<a id="schema_PostSegment"></a>
<a id="tocSpostsegment"></a>
<a id="tocspostsegment"></a>

```json
{
  "ArrivalDate": "2019-08-24T14:15:22Z",
  "Comment": "string",
  "DepartureDate": "2019-08-24T14:15:22Z",
  "FlightNumber": "string",
  "FromLocationDetail": "string",
  "FromLocationID": "string",
  "ToLocationDetail": "string",
  "ToLocationID": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArrivalDate|string(date-time)|false|none|The arrival date of the segment.|
|Comment|string|false|none|A comment added to this segment.|
|DepartureDate|string(date-time)|false|none|The departure date of the segment.|
|FlightNumber|string|false|none|The flight number for air segments. Appears only when Request is integrated with Concur Travel.|
|FromLocationDetail|string|false|none|The code for the starting location.|
|FromLocationID|string|false|none|The unique identifier of the departure location. See the "Locations" resource for more information.|
|ToLocationDetail|string|false|none|The code for the ending location.|
|ToLocationID|string|false|none|The unique identifier of the arrival location. See the "Locations" resource for more information.|

<h3 id="tocS_PostSegmentsEntry">PostSegmentsEntry</h3>

<a id="schemapostsegmentsentry"></a>
<a id="schema_PostSegmentsEntry"></a>
<a id="tocSpostsegmentsentry"></a>
<a id="tocspostsegmentsentry"></a>

```json
{
  "ForeignAmount": 0,
  "ForeignCurrencyCode": "string",
  "Segments": {
    "ArrivalDate": "2019-08-24T14:15:22Z",
    "Comment": "string",
    "DepartureDate": "2019-08-24T14:15:22Z",
    "FlightNumber": "string",
    "FromLocationDetail": "string",
    "FromLocationID": "string",
    "ToLocationDetail": "string",
    "ToLocationID": "string"
  },
  "SegmentTypeID": "string",
  "TripType": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForeignAmount|number(double)|false|none|The transaction amount of the travel Request entry.|
|ForeignCurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the foreign currency amount of the entry.|
|Segments|[PostSegment](#schemapostsegment)|false|none|none|
|SegmentTypeID|string|false|none|The unique identifier of the Segment Type resource used to define the type of the segment created. See the policies and associated data in the "RequestGroupConfigurations" resource for more information.|
|TripType|[string]|false|none|Trip type of the air or rail segment. Possible values are: ONE_WAY, ROUND_TRIP and MULTI_STOP.|

<h3 id="tocS_PutInputRequest">PutInputRequest</h3>

<a id="schemaputinputrequest"></a>
<a id="schema_PutInputRequest"></a>
<a id="tocSputinputrequest"></a>
<a id="tocsputinputrequest"></a>

```json
{
  "AgencyOfficeID": "string",
  "Comment": "string",
  "EndDate": "2019-08-24T14:15:22Z",
  "MainDestinationID": "string",
  "Name": "string",
  "Purpose": "string",
  "SegmentsEntries": {
    "ForeignAmount": 0,
    "ForeignCurrencyCode": "string",
    "ID": "string",
    "Segments": {
      "ArrivalDate": "2019-08-24T14:15:22Z",
      "Comment": "string",
      "DepartureDate": "2019-08-24T14:15:22Z",
      "FlightNumber": "string",
      "FromLocationDetail": "string",
      "FromLocationID": "string",
      "ID": "string",
      "ToLocationDetail": "string",
      "ToLocationID": "string"
    },
    "SegmentTypeID": "string",
    "TripType": [
      "string"
    ]
  },
  "StartDate": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgencyOfficeID|string|false|none|The ID of the travel agency office.|
|Comment|string|false|none|The text of the most recent comment on the Request.|
|EndDate|string(date-time)|false|none|The end date of the travel request. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss.|
|MainDestinationID|string|false|none|The main destination location ID|
|Name|string|false|none|The name of the Request.|
|Purpose|string|false|none|The purpose of the Request.|
|SegmentsEntries|[PutRequestSegmentsEntry](#schemaputrequestsegmentsentry)|false|none|none|
|StartDate|string(date-time)|false|none|The start date of the travel request. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss.|

<h3 id="tocS_PutRequestSegmentsEntry">PutRequestSegmentsEntry</h3>

<a id="schemaputrequestsegmentsentry"></a>
<a id="schema_PutRequestSegmentsEntry"></a>
<a id="tocSputrequestsegmentsentry"></a>
<a id="tocsputrequestsegmentsentry"></a>

```json
{
  "ForeignAmount": 0,
  "ForeignCurrencyCode": "string",
  "ID": "string",
  "Segments": {
    "ArrivalDate": "2019-08-24T14:15:22Z",
    "Comment": "string",
    "DepartureDate": "2019-08-24T14:15:22Z",
    "FlightNumber": "string",
    "FromLocationDetail": "string",
    "FromLocationID": "string",
    "ID": "string",
    "ToLocationDetail": "string",
    "ToLocationID": "string"
  },
  "SegmentTypeID": "string",
  "TripType": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForeignAmount|number(double)|false|none|The transaction amount of the travel Request entry.|
|ForeignCurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the foreign currency amount of the entry.|
|ID|string|false|none|The unique identifier of the Segment(s) Entry to update. If there is no ID, the Segment(s) Entry will be added to the Request.|
|Segments|[PutSegment](#schemaputsegment)|false|none|none|
|SegmentTypeID|string|false|none|The unique identifier of the Segment Type resource used to define the type of the segment created. See the policies and associated data in "RequestGroupConfigurations" resource for more information.|
|TripType|[string]|false|none|Trip type of the air or rail segment. Possible values are: ONE_WAY, ROUND_TRIP and MULTI_STOP.|

<h3 id="tocS_PutSegment">PutSegment</h3>

<a id="schemaputsegment"></a>
<a id="schema_PutSegment"></a>
<a id="tocSputsegment"></a>
<a id="tocsputsegment"></a>

```json
{
  "ArrivalDate": "2019-08-24T14:15:22Z",
  "Comment": "string",
  "DepartureDate": "2019-08-24T14:15:22Z",
  "FlightNumber": "string",
  "FromLocationDetail": "string",
  "FromLocationID": "string",
  "ID": "string",
  "ToLocationDetail": "string",
  "ToLocationID": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArrivalDate|string(date-time)|false|none|The arrival date of the segment.|
|Comment|string|false|none|A comment added to this segment.|
|DepartureDate|string(date-time)|false|none|The departure date of the segment.|
|FlightNumber|string|false|none|The flight number for air segments. Appears only when Request is integrated with Concur Travel.|
|FromLocationDetail|string|false|none|The code for the starting location.|
|FromLocationID|string|false|none|The unique identifier of the departure location. See the "Locations" resource for more information.|
|ID|string|false|none|The unique identifier of the segment to update. If there is no ID, the segment will be added to the Segment(s) Entry.|
|ToLocationDetail|string|false|none|The code for the ending location.|
|ToLocationID|string|false|none|The unique identifier of the arrival location. See the "Locations" resource for more information.|

<h3 id="tocS_RequestCollection">RequestCollection</h3>

<a id="schemarequestcollection"></a>
<a id="schema_RequestCollection"></a>
<a id="tocSrequestcollection"></a>
<a id="tocsrequestcollection"></a>

```json
{
  "Items": {
    "ApprovalStatusCode": "string",
    "ApprovalStatusName": "string",
    "ApproverLoginID": "string",
    "CreationDate": "2019-08-24T14:15:22Z",
    "CurrencyCode": "string",
    "EmployeeName": "string",
    "EndDate": "2019-08-24T14:15:22Z",
    "HeaderFormID": "string",
    "HighestExceptionLevel": [
      null
    ],
    "ID": "string",
    "LastComment": "string",
    "MainDestinationID": "string",
    "MainDestinationName": "string",
    "Name": "string",
    "Purpose": "string",
    "RequestID": "string",
    "SegmentTypes": "string",
    "StartDate": "2019-08-24T14:15:22Z",
    "TotalApprovedAmount": 0,
    "TotalPostedAmount": 0,
    "URI": "string",
    "UserLoginID": "string",
    "UserPermissions": {
      "Links": {
        "Action": "string",
        "Method": "string",
        "Url": "string"
      }
    }
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[RequestHeader](#schemarequestheader)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h3 id="tocS_RequestHeader">RequestHeader</h3>

<a id="schemarequestheader"></a>
<a id="schema_RequestHeader"></a>
<a id="tocSrequestheader"></a>
<a id="tocsrequestheader"></a>

```json
{
  "ApprovalStatusCode": "string",
  "ApprovalStatusName": "string",
  "ApproverLoginID": "string",
  "CreationDate": "2019-08-24T14:15:22Z",
  "CurrencyCode": "string",
  "EmployeeName": "string",
  "EndDate": "2019-08-24T14:15:22Z",
  "HeaderFormID": "string",
  "HighestExceptionLevel": [
    null
  ],
  "ID": "string",
  "LastComment": "string",
  "MainDestinationID": "string",
  "MainDestinationName": "string",
  "Name": "string",
  "Purpose": "string",
  "RequestID": "string",
  "SegmentTypes": "string",
  "StartDate": "2019-08-24T14:15:22Z",
  "TotalApprovedAmount": 0,
  "TotalPostedAmount": 0,
  "URI": "string",
  "UserLoginID": "string",
  "UserPermissions": {
    "Links": {
      "Action": "string",
      "Method": "string",
      "Url": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApprovalStatusCode|string|false|none|The code for the approval status the Request.|
|ApprovalStatusName|string|false|none|The Request's approval status, in the user's language.|
|ApproverLoginID|string|false|none|The login ID of the approver for the user's Request.|
|CreationDate|string(date-time)|false|none|The creation date of the Request.|
|CurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the Request currency.|
|EmployeeName|string|false|none|The name of the Request owner.|
|EndDate|string(date-time)|false|none|The end date of the Request.|
|HeaderFormID|string|false|none|The unique identifier of the Header Form resource. See the "Forms" resource for more information.|
|HighestExceptionLevel|[any]|false|none|Indicates the highest exception level of the Request. Possible value: NONE, NON_BLOCKING, BLOCKING|
|ID|string|false|none|The unique identifier of the resource.|
|LastComment|string|false|none|The text of the most recent comment on the Request.|
|MainDestinationID|string|false|none|The main destination location ID|
|MainDestinationName|string|false|none|The main destination location name|
|Name|string|false|none|The name of the Request.|
|Purpose|string|false|none|The purpose of the Request.|
|RequestID|string|false|none|The unique identifier for the Request, as it appears in the Concur UI.|
|SegmentTypes|string|false|none|A comma separated list of the segment type names that are present in this Request.|
|StartDate|string(date-time)|false|none|The start date of the Request.|
|TotalApprovedAmount|number(double)|false|none|The total amount of the Request.|
|TotalPostedAmount|number(double)|false|none|The posted amount of the Request entry in the Request currency.|
|URI|string|false|none|The URI to the resource.|
|UserLoginID|string|false|none|The login ID of the user this Request belongs to.|
|UserPermissions|[UserPermissions](#schemauserpermissions)|false|none|none|

<h3 id="tocS_RequestResponse">RequestResponse</h3>

<a id="schemarequestresponse"></a>
<a id="schema_RequestResponse"></a>
<a id="tocSrequestresponse"></a>
<a id="tocsrequestresponse"></a>

```json
{
  "Error": {
    "Code": "string",
    "Message": "string"
  },
  "ID": "string",
  "Request": {
    "AgencyOfficeID": "string",
    "AgencyOfficeName": "string",
    "ApprovalLimitDate": "2019-08-24T14:15:22Z",
    "ApprovalStatusCode": "string",
    "ApprovalStatusName": "string",
    "AuthorizedDate": "2019-08-24T14:15:22Z",
    "Comments": {
      "AuthorFirstName": "string",
      "AuthorLastName": "string",
      "CommentDateTime": "2019-08-24T14:15:22Z",
      "IsLatest": true,
      "Value": "string"
    },
    "CreationDate": "2019-08-24T14:15:22Z",
    "CurrencyCode": "string",
    "CurrencyName": "string",
    "EmployeeName": "string",
    "EndDate": "2019-08-24T14:15:22Z",
    "Exceptions": {
      "Code": "string",
      "Level": "string",
      "Message": "string"
    },
    "HeaderFormID": "string",
    "HighestExceptionLevel": [
      null
    ],
    "LastModifiedDate": "2019-08-24T14:15:22Z",
    "LoginID": "string",
    "MainDestinationID": "string",
    "MainDestinationName": "string",
    "Name": "string",
    "PolicyID": "string",
    "PolicyName": "string",
    "Purpose": "string",
    "RequestID": "string",
    "SegmentsEntries": {
      "Exceptions": {
        "Code": "string",
        "Level": "string",
        "Message": "string"
      },
      "ExchangeRate": 0,
      "ForeignAmount": 0,
      "ForeignCurrencyCode": "string",
      "ForeignCurrencyName": "string",
      "ID": "string",
      "LastModifiedDate": "2019-08-24T14:15:22Z",
      "SegmentFormID": "string",
      "SegmentFormTypeCode": "string",
      "Segments": {
        "ArrivalDate": "2019-08-24T14:15:22Z",
        "Comment": "string",
        "DepartureDate": "2019-08-24T14:15:22Z",
        "Exceptions": {
          "Code": "string",
          "Level": "string",
          "Message": "string"
        },
        "FlightNumber": "string",
        "FromLocationDetail": "string",
        "FromLocationID": "string",
        "FromLocationName": "string",
        "ID": "string",
        "IsAgencyBooked": true,
        "IsSelfBooked": true,
        "LastModifiedDate": "2019-08-24T14:15:22Z",
        "Order": 0,
        "ToLocationDetail": "string",
        "ToLocationID": "string",
        "ToLocationName": "string"
      },
      "SegmentTypeCode": "string",
      "SegmentTypeID": "string",
      "SegmentTypeName": "string",
      "TripType": [
        "string"
      ]
    },
    "StartDate": "2019-08-24T14:15:22Z",
    "SubmitDate": "2019-08-24T14:15:22Z",
    "TotalApprovedAmount": 0,
    "TotalPostedAmount": 0,
    "TotalRemainingAmount": 0,
    "UserPermissions": {
      "Links": {
        "Action": "string",
        "Method": "string",
        "Url": "string"
      }
    }
  },
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Error|[Error](#schemaerror)|false|none|none|
|ID|string|false|none|The login ID of the user this Request belongs to.|
|Request|[OutputRequest](#schemaoutputrequest)|false|none|none|
|URI|string|false|none|The login ID of the user this Request belongs to.|

<h3 id="tocS_Segment">Segment</h3>

<a id="schemasegment"></a>
<a id="schema_Segment"></a>
<a id="tocSsegment"></a>
<a id="tocssegment"></a>

```json
{
  "ArrivalDate": "2019-08-24T14:15:22Z",
  "Comment": "string",
  "DepartureDate": "2019-08-24T14:15:22Z",
  "Exceptions": {
    "Code": "string",
    "Level": "string",
    "Message": "string"
  },
  "FlightNumber": "string",
  "FromLocationDetail": "string",
  "FromLocationID": "string",
  "FromLocationName": "string",
  "ID": "string",
  "IsAgencyBooked": true,
  "IsSelfBooked": true,
  "LastModifiedDate": "2019-08-24T14:15:22Z",
  "Order": 0,
  "ToLocationDetail": "string",
  "ToLocationID": "string",
  "ToLocationName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArrivalDate|string(date-time)|false|none|The arrival date of the segment.|
|Comment|string|false|none|A comment added to this segment.|
|DepartureDate|string(date-time)|false|none|The departure date of the segment.|
|Exceptions|[TRException](#schematrexception)|false|none|none|
|FlightNumber|string|false|none|The flight number for air segments. Appears only when Request is integrated with Concur Travel.|
|FromLocationDetail|string|false|none|The code for the starting location.|
|FromLocationID|string|false|none|The unique identifier of the departure location. See the "Locations" resource for more information.|
|FromLocationName|string|false|none|The name of the starting location.|
|ID|string|false|none|The unique identifier of the segment.|
|IsAgencyBooked|boolean|false|none|Indicates whether the air segment was agency booked. Format: Y/N.|
|IsSelfBooked|boolean|false|none|Indicates whether the air segment was self booked. Format: Y/N.|
|LastModifiedDate|string(date-time)|false|none|The date the segment was last modified. Format: YYYY-MM-DDThh:mm:ss|
|Order|integer(int32)|false|none|The display order of the segment.|
|ToLocationDetail|string|false|none|The code for the ending location.|
|ToLocationID|string|false|none|The unique identifier of the arrival location. See the "Locations" resource for more information.|
|ToLocationName|string|false|none|The name of the ending location.|

<h3 id="tocS_SegmentsEntry">SegmentsEntry</h3>

<a id="schemasegmentsentry"></a>
<a id="schema_SegmentsEntry"></a>
<a id="tocSsegmentsentry"></a>
<a id="tocssegmentsentry"></a>

```json
{
  "Exceptions": {
    "Code": "string",
    "Level": "string",
    "Message": "string"
  },
  "ExchangeRate": 0,
  "ForeignAmount": 0,
  "ForeignCurrencyCode": "string",
  "ForeignCurrencyName": "string",
  "ID": "string",
  "LastModifiedDate": "2019-08-24T14:15:22Z",
  "SegmentFormID": "string",
  "SegmentFormTypeCode": "string",
  "Segments": {
    "ArrivalDate": "2019-08-24T14:15:22Z",
    "Comment": "string",
    "DepartureDate": "2019-08-24T14:15:22Z",
    "Exceptions": {
      "Code": "string",
      "Level": "string",
      "Message": "string"
    },
    "FlightNumber": "string",
    "FromLocationDetail": "string",
    "FromLocationID": "string",
    "FromLocationName": "string",
    "ID": "string",
    "IsAgencyBooked": true,
    "IsSelfBooked": true,
    "LastModifiedDate": "2019-08-24T14:15:22Z",
    "Order": 0,
    "ToLocationDetail": "string",
    "ToLocationID": "string",
    "ToLocationName": "string"
  },
  "SegmentTypeCode": "string",
  "SegmentTypeID": "string",
  "SegmentTypeName": "string",
  "TripType": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Exceptions|[TRException](#schematrexception)|false|none|none|
|ExchangeRate|number(double)|false|none|The exchange rate that applies to the entry.|
|ForeignAmount|number(double)|false|none|The foreign amount of the Request entry.|
|ForeignCurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the foreign currency amount of the Request entry.|
|ForeignCurrencyName|string|false|none|The name of the currency for the foreign amount.|
|ID|string|false|none|The unique identifier of the Segment(s) Entry resource. See the "SegmentsEntry" resource for more information.|
|LastModifiedDate|string(date-time)|false|none|The date the entry was last modified. Format: YYYY-MM-DDThh:mm:ss|
|SegmentFormID|string|false|none|The unique identifier of the Segment Form resource. See the "Forms" resource for more information.|
|SegmentFormTypeCode|string|false|none|The code for form type of the segment type.|
|Segments|[Segment](#schemasegment)|false|none|none|
|SegmentTypeCode|string|false|none|The code for the type of itinerary segment.|
|SegmentTypeID|string|false|none|The unique identifier of the Segment Type resource. See the policies and associated data in "RequestGroupConfigurations" resource for more information.|
|SegmentTypeName|string|false|none|The name for the type of itinerary segment.|
|TripType|[string]|false|none|Trip type of the air or rail segment. Possible values are: ONE_WAY, ROUND_TRIP and MULTI_STOP.|

<h3 id="tocS_TRException">TRException</h3>

<a id="schematrexception"></a>
<a id="schema_TRException"></a>
<a id="tocStrexception"></a>
<a id="tocstrexception"></a>

```json
{
  "Code": "string",
  "Level": "string",
  "Message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|The system exception code defined for the exception. Example: BADCODE|
|Level|string|false|none|The numeric level associated with the exception. Example: 99|
|Message|string|false|none|The user-facing message defined for the exception.|

<h3 id="tocS_UserPermissions">UserPermissions</h3>

<a id="schemauserpermissions"></a>
<a id="schema_UserPermissions"></a>
<a id="tocSuserpermissions"></a>
<a id="tocsuserpermissions"></a>

```json
{
  "Links": {
    "Action": "string",
    "Method": "string",
    "Url": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Links|[Link](#schemalink)|false|none|none|

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

