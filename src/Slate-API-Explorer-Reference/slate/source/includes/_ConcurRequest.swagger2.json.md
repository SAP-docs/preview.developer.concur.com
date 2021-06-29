

<h2 id="request">Request v4.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Request as a Service

Base URLs:

* <a href="//us.api.concursolutions.com/travelrequest/v4">//us.api.concursolutions.com/travelrequest/v4</a>

<h3 id="request-request-resource">Request Resource</h3>

Represents the starting point of pre-spend authorizations within Concur Request

#### getListUsingGET

<a id="opIdgetListUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /us.api.concursolutions.com/travelrequest/v4/requests \
  -H 'Accept: application/json'

```

```http
GET /us.api.concursolutions.com/travelrequest/v4/requests HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/requests',
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

result = RestClient.get '/us.api.concursolutions.com/travelrequest/v4/requests',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/us.api.concursolutions.com/travelrequest/v4/requests', headers = headers)

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
    $response = $client->request('GET','/us.api.concursolutions.com/travelrequest/v4/requests', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/requests");
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
    req, err := http.NewRequest("GET", "/us.api.concursolutions.com/travelrequest/v4/requests", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /requests`

*Get the list of existing Requests*

<h3 id="getlistusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|view|query|string|false|Name of the perimeter defining the Requests to get|
|userId|query|string|false|The unique identifier of the Request owner to use when searching for Requests|
|limit|query|string|false|Pagination : number of records to return per page - maximum limit is 100, if higher value or digit value is set, a 400 error code will be displayed|
|start|query|string|false|Pagination : index of the first record|
|modifiedAfter|query|string(date-time)|false|Lower bound of modification date. Format: yyyy-MM-ddTHH:mm:ss.SSSZ or yyyy-MM-dd|
|modifiedBefore|query|string(date-time)|false|Upper bound of modification date. Format: yyyy-MM-ddTHH:mm:ss.SSSZ or yyyy-MM-dd|
|sortField|query|string|false|The name of the field on which to sort|
|sortOrder|query|string|false|Sort order (ASC or DESC)|
|approvedAfter|query|string(date-time)|false|Lower bound of approval date. Format: yyyy-MM-ddTHH:mm:ss|
|approvedBefore|query|string(date-time)|false|Upper bound of approval date. Format: yyyy-MM-ddTHH:mm:ss|

###### Enumerated Values

|Parameter|Value|
|---|---|
|view|ALL|
|view|ACTIVE|
|view|UNSUBMITTED|
|view|PENDING|
|view|VALIDATED|
|view|APPROVED|
|view|CANCELED|
|view|CLOSED|
|view|SUBMITTED|
|view|TOAPPROVE|
|view|PENDINGPROPOSAL|
|view|PROPOSALAPPROVED|
|view|PROPOSALCANCELED|
|view|PENDINGEBOOKING|
|sortField|startDate|
|sortField|approvalStatus|
|sortField|requestId|
|sortOrder|ASC|
|sortOrder|DESC|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "approvalLimitDate": "string",
      "approvalStatus": {
        "code": "APPROVED",
        "name": "string"
      },
      "approved": true,
      "approver": {
        "firstName": "string",
        "middleInitial": "string",
        "href": "string",
        "id": "string",
        "lastName": "string",
        "template": "string"
      },
      "authorizedDate": "string",
      "businessPurpose": "string",
      "canceledPostApproval": true,
      "closed": false,
      "comment": "string",
      "comments": {
        "href": "string",
        "id": "string",
        "template": "string"
      },
      "creationDate": "string",
      "custom1": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom10": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom11": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom12": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom13": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom14": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom15": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom16": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom17": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom18": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom19": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom2": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom20": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom3": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom4": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom5": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom6": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom7": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom8": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom9": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "endDate": "string",
      "endTime": "string",
      "everSentBack": false,
      "expenses": [
        {
          "href": "string",
          "id": "string",
          "template": "string"
        }
      ],
      "extensionOf": {
        "requestId": "string"
      },
      "highestExceptionLevel": "NONE",
      "href": "string",
      "id": "string",
      "lastModified": "string",
      "mainDestination": {
        "city": "string",
        "countryCode": "string",
        "countrySubDivisionCode": "string",
        "iataCode": "string",
        "id": "string",
        "latitude": 0,
        "locationCode": "string",
        "locationType": "string",
        "longitude": 0,
        "name": "string"
      },
      "name": "string",
      "operations": [
        {
          "href": "string",
          "rel": "string"
        }
      ],
      "owner": {
        "firstName": "string",
        "middleInitial": "string",
        "href": "string",
        "id": "string",
        "lastName": "string",
        "template": "string"
      },
      "pendingApproval": true,
      "policy": {
        "href": "string",
        "id": "string",
        "template": "string"
      },
      "requestId": "string",
      "startDate": "string",
      "startTime": "string",
      "submitDate": "string",
      "totalApprovedAmount": {
        "currency": "string",
        "value": 1
      },
      "totalPostedAmount": {
        "currency": "string",
        "value": 1
      },
      "totalRemainingAmount": {
        "currency": "string",
        "value": 1
      },
      "travelAgency": {
        "href": "string",
        "id": "string",
        "template": "string"
      },
      "type": {
        "code": "string",
        "label": "string"
      }
    }
  ],
  "operations": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}
```

<h3 id="getlistusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PageResultOfResourceOfRequest](#schemapageresultofresourceofrequest)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad param(s) : the request is invalid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid or nonexistent authorization HTTP header|[ErrorResponse](#schemaerrorresponse)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Permission Denied|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|Time out|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

#### createUsingPOST_4

<a id="opIdcreateUsingPOST_4"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /us.api.concursolutions.com/travelrequest/v4/requests \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /us.api.concursolutions.com/travelrequest/v4/requests HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "approvalLimitDate": "string",
  "approvalStatus": {
    "code": "APPROVED",
    "name": "string"
  },
  "approved": true,
  "approver": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "authorizedDate": "string",
  "businessPurpose": "string",
  "canceledPostApproval": true,
  "closed": false,
  "comment": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "creationDate": "string",
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "endDate": "string",
  "endTime": "string",
  "everSentBack": false,
  "expenses": [
    {
      "href": "string",
      "id": "string",
      "template": "string"
    }
  ],
  "extensionOf": {
    "requestId": "string"
  },
  "highestExceptionLevel": "NONE",
  "href": "string",
  "id": "string",
  "lastModified": "string",
  "mainDestination": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "name": "string",
  "operations": [
    {
      "href": "string",
      "rel": "string"
    }
  ],
  "owner": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "pendingApproval": true,
  "policy": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "requestId": "string",
  "startDate": "string",
  "startTime": "string",
  "submitDate": "string",
  "totalApprovedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalPostedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalRemainingAmount": {
    "currency": "string",
    "value": 1
  },
  "travelAgency": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "type": {
    "code": "string",
    "label": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/requests',
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

result = RestClient.post '/us.api.concursolutions.com/travelrequest/v4/requests',
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

r = requests.post('/us.api.concursolutions.com/travelrequest/v4/requests', headers = headers)

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
    $response = $client->request('POST','/us.api.concursolutions.com/travelrequest/v4/requests', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/requests");
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
    req, err := http.NewRequest("POST", "/us.api.concursolutions.com/travelrequest/v4/requests", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /requests`

*Create a new Request*

> Body parameter

```json
{
  "approvalLimitDate": "string",
  "approvalStatus": {
    "code": "APPROVED",
    "name": "string"
  },
  "approved": true,
  "approver": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "authorizedDate": "string",
  "businessPurpose": "string",
  "canceledPostApproval": true,
  "closed": false,
  "comment": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "creationDate": "string",
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "endDate": "string",
  "endTime": "string",
  "everSentBack": false,
  "expenses": [
    {
      "href": "string",
      "id": "string",
      "template": "string"
    }
  ],
  "extensionOf": {
    "requestId": "string"
  },
  "highestExceptionLevel": "NONE",
  "href": "string",
  "id": "string",
  "lastModified": "string",
  "mainDestination": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "name": "string",
  "operations": [
    {
      "href": "string",
      "rel": "string"
    }
  ],
  "owner": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "pendingApproval": true,
  "policy": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "requestId": "string",
  "startDate": "string",
  "startTime": "string",
  "submitDate": "string",
  "totalApprovedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalPostedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalRemainingAmount": {
    "currency": "string",
    "value": 1
  },
  "travelAgency": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "type": {
    "code": "string",
    "label": "string"
  }
}
```

<h3 id="createusingpost_4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string|false|The unique identifier of the Request owner for whom the Request will be created|
|body|body|[Request](#schemarequest)|true|Request|

> Example responses

> 201 Response

```json
{
  "approvalLimitDate": "string",
  "approvalStatus": {
    "code": "APPROVED",
    "name": "string"
  },
  "approved": true,
  "approver": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "authorizedDate": "string",
  "businessPurpose": "string",
  "canceledPostApproval": true,
  "closed": false,
  "comment": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "creationDate": "string",
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "endDate": "string",
  "endTime": "string",
  "everSentBack": false,
  "expenses": [
    {
      "href": "string",
      "id": "string",
      "template": "string"
    }
  ],
  "extensionOf": {
    "requestId": "string"
  },
  "highestExceptionLevel": "NONE",
  "href": "string",
  "id": "string",
  "lastModified": "string",
  "mainDestination": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "name": "string",
  "operations": [
    {
      "href": "string",
      "rel": "string"
    }
  ],
  "owner": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "pendingApproval": true,
  "policy": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "requestId": "string",
  "startDate": "string",
  "startTime": "string",
  "submitDate": "string",
  "totalApprovedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalPostedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalRemainingAmount": {
    "currency": "string",
    "value": 1
  },
  "travelAgency": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "type": {
    "code": "string",
    "label": "string"
  }
}
```

<h3 id="createusingpost_4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|[Request](#schemarequest)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request body|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid or nonexistent authorization HTTP header|[ErrorResponse](#schemaerrorresponse)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Permission Denied|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|Time out|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

#### getUsingGET_6

<a id="opIdgetUsingGET_6"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid} \
  -H 'Accept: application/json'

```

```http
GET /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}',
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

result = RestClient.get '/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}', headers = headers)

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
    $response = $client->request('GET','/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}");
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
    req, err := http.NewRequest("GET", "/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /requests/{requestUuid}`

*Get the content of an existing Request*

<h3 id="getusingget_6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestUuid|path|string|true|The unique identifier of the Request|

> Example responses

> 200 Response

```json
{
  "approvalLimitDate": "string",
  "approvalStatus": {
    "code": "APPROVED",
    "name": "string"
  },
  "approved": true,
  "approver": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "authorizedDate": "string",
  "businessPurpose": "string",
  "canceledPostApproval": true,
  "cashAdvances": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "closed": false,
  "comment": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "creationDate": "string",
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "endDate": "string",
  "endTime": "string",
  "everSentBack": false,
  "exceptions": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "expenses": [
    {
      "href": "string",
      "id": "string",
      "template": "string"
    }
  ],
  "extensionOf": {
    "requestId": "string"
  },
  "highestExceptionLevel": "NONE",
  "href": "string",
  "id": "string",
  "lastModified": "string",
  "mainDestination": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "name": "string",
  "operations": [
    {
      "href": "string",
      "rel": "string"
    }
  ],
  "owner": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "pendingApproval": true,
  "policy": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "requestId": "string",
  "startDate": "string",
  "startTime": "string",
  "submitDate": "string",
  "totalApprovedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalPostedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalRemainingAmount": {
    "currency": "string",
    "value": 1
  },
  "travelAgency": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "type": {
    "code": "string",
    "label": "string"
  }
}
```

<h3 id="getusingget_6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RequestDetails](#schemarequestdetails)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad param: invalid Guid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid or nonexistent authorization HTTP header|[ErrorResponse](#schemaerrorresponse)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Permission Denied|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|Time out|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

#### updateUsingPUT_2

<a id="opIdupdateUsingPUT_2"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
PUT /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "approvalLimitDate": "string",
  "approvalStatus": {
    "code": "APPROVED",
    "name": "string"
  },
  "approved": true,
  "approver": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "authorizedDate": "string",
  "businessPurpose": "string",
  "canceledPostApproval": true,
  "closed": false,
  "comment": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "creationDate": "string",
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "endDate": "string",
  "endTime": "string",
  "everSentBack": false,
  "expenses": [
    {
      "href": "string",
      "id": "string",
      "template": "string"
    }
  ],
  "extensionOf": {
    "requestId": "string"
  },
  "highestExceptionLevel": "NONE",
  "href": "string",
  "id": "string",
  "lastModified": "string",
  "mainDestination": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "name": "string",
  "operations": [
    {
      "href": "string",
      "rel": "string"
    }
  ],
  "owner": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "pendingApproval": true,
  "policy": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "requestId": "string",
  "startDate": "string",
  "startTime": "string",
  "submitDate": "string",
  "totalApprovedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalPostedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalRemainingAmount": {
    "currency": "string",
    "value": 1
  },
  "travelAgency": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "type": {
    "code": "string",
    "label": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}',
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
  'Accept' => 'application/json'
}

result = RestClient.put '/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}',
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

r = requests.put('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}', headers = headers)

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
    $response = $client->request('PUT','/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /requests/{requestUuid}`

*Update the content of an existing Request*

> Body parameter

```json
{
  "approvalLimitDate": "string",
  "approvalStatus": {
    "code": "APPROVED",
    "name": "string"
  },
  "approved": true,
  "approver": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "authorizedDate": "string",
  "businessPurpose": "string",
  "canceledPostApproval": true,
  "closed": false,
  "comment": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "creationDate": "string",
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "endDate": "string",
  "endTime": "string",
  "everSentBack": false,
  "expenses": [
    {
      "href": "string",
      "id": "string",
      "template": "string"
    }
  ],
  "extensionOf": {
    "requestId": "string"
  },
  "highestExceptionLevel": "NONE",
  "href": "string",
  "id": "string",
  "lastModified": "string",
  "mainDestination": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "name": "string",
  "operations": [
    {
      "href": "string",
      "rel": "string"
    }
  ],
  "owner": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "pendingApproval": true,
  "policy": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "requestId": "string",
  "startDate": "string",
  "startTime": "string",
  "submitDate": "string",
  "totalApprovedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalPostedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalRemainingAmount": {
    "currency": "string",
    "value": 1
  },
  "travelAgency": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "type": {
    "code": "string",
    "label": "string"
  }
}
```

<h3 id="updateusingput_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestUuid|path|string|true|The unique identifier of the Request|
|userId|query|string|false|The unique identifier of the user|
|body|body|[Request](#schemarequest)|true|request|

> Example responses

> 200 Response

```json
{
  "approvalLimitDate": "string",
  "approvalStatus": {
    "code": "APPROVED",
    "name": "string"
  },
  "approved": true,
  "approver": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "authorizedDate": "string",
  "businessPurpose": "string",
  "canceledPostApproval": true,
  "closed": false,
  "comment": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "creationDate": "string",
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "endDate": "string",
  "endTime": "string",
  "everSentBack": false,
  "expenses": [
    {
      "href": "string",
      "id": "string",
      "template": "string"
    }
  ],
  "extensionOf": {
    "requestId": "string"
  },
  "highestExceptionLevel": "NONE",
  "href": "string",
  "id": "string",
  "lastModified": "string",
  "mainDestination": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "name": "string",
  "operations": [
    {
      "href": "string",
      "rel": "string"
    }
  ],
  "owner": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "pendingApproval": true,
  "policy": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "requestId": "string",
  "startDate": "string",
  "startTime": "string",
  "submitDate": "string",
  "totalApprovedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalPostedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalRemainingAmount": {
    "currency": "string",
    "value": 1
  },
  "travelAgency": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "type": {
    "code": "string",
    "label": "string"
  }
}
```

<h3 id="updateusingput_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Request](#schemarequest)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad param(s) : the request is invalid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid or nonexistent authorization HTTP header|[ErrorResponse](#schemaerrorresponse)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Permission Denied|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|Time out|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

#### deleteUsingDELETE_1

<a id="opIddeleteUsingDELETE_1"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid} \
  -H 'Accept: */*'

```

```http
DELETE /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid} HTTP/1.1

Accept: */*

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}',
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
  'Accept' => '*/*'
}

result = RestClient.delete '/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => '*/*',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}");
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
        "Accept": []string{"*/*"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /requests/{requestUuid}`

*Delete an existing Request*

<h3 id="deleteusingdelete_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestUuid|path|string|true|The unique identifier of the Request|
|userId|query|string|false|The unique identifier of the user|

> Example responses

> 200 Response

<h3 id="deleteusingdelete_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|boolean|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad param: invalid Guid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid or nonexistent authorization HTTP header|[ErrorResponse](#schemaerrorresponse)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Permission Denied|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|Time out|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

#### getCommentsByRequestUsingGET

<a id="opIdgetCommentsByRequestUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/comments \
  -H 'Accept: application/json'

```

```http
GET /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/comments HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/comments',
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

result = RestClient.get '/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/comments',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/comments', headers = headers)

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
    $response = $client->request('GET','/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/comments', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/comments");
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
    req, err := http.NewRequest("GET", "/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/comments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /requests/{requestUuid}/comments`

*Get the list of comments for an existing Request*

<h3 id="getcommentsbyrequestusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestUuid|path|string|true|The unique identifier of the Request|

> Example responses

> 200 Response

```json
[
  {
    "author": {
      "firstName": "string",
      "middleInitial": "string",
      "href": "string",
      "id": "string",
      "lastName": "string",
      "template": "string"
    },
    "creationDateTime": "string",
    "isLatest": false,
    "value": "string"
  }
]
```

<h3 id="getcommentsbyrequestusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad param: invalid Guid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid or nonexistent authorization HTTP header|[ErrorResponse](#schemaerrorresponse)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Permission Denied|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|Time out|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<h3 id="getcommentsbyrequestusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Comment](#schemacomment)]|false|none|none|
|» author|[Employee](#schemaemployee)|false|none|none|
|»» firstName|string|false|none|The first name of the employee|
|»» middleInitial|string|false|none|The middle initial of the employee|
|»» href|string|false|none|Hyperlink to the resource|
|»» id|string|false|none|Unique identifier of the related object|
|»» lastName|string|false|none|The last name of the employee|
|»» template|string|false|none|Hyperlink template to the resource|
|» creationDateTime|string|false|none|Creation date of the comment (in the format YYYY-MM-DD HH:mm:ss.SSS)|
|» isLatest|boolean|false|none|True when the comment has been edited since the last workflow transition|
|» value|string|false|none|Comment value|

<aside class="success">
This operation does not require authentication
</aside>

#### getCashAdvancesByRequestUsingGET

<a id="opIdgetCashAdvancesByRequestUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/cashadvances \
  -H 'Accept: application/json'

```

```http
GET /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/cashadvances HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/cashadvances',
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

result = RestClient.get '/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/cashadvances',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/cashadvances', headers = headers)

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
    $response = $client->request('GET','/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/cashadvances', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/cashadvances");
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
    req, err := http.NewRequest("GET", "/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/cashadvances", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /requests/{requestUuid}/cashadvances`

*Get the list of cash advances assigned to an existing Request*

<h3 id="getcashadvancesbyrequestusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestUuid|path|string|true|The unique identifier of the Request|

> Example responses

> 200 Response

```json
[
  {
    "href": "string",
    "id": "string",
    "template": "string"
  }
]
```

<h3 id="getcashadvancesbyrequestusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad param: invalid Guid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid or nonexistent authorization HTTP header|[ErrorResponse](#schemaerrorresponse)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|You do not have permission to perform this operation|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|Time out|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|An unexpected error has prevented the operation|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<h3 id="getcashadvancesbyrequestusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ResourceLink](#schemaresourcelink)]|false|none|none|
|» href|string|false|none|Hyperlink to the resource|
|» id|string|false|none|Unique identifier of the related object|
|» template|string|false|none|Hyperlink template to the resource|

<aside class="success">
This operation does not require authentication
</aside>

#### getExceptionsByRequestUsingGET

<a id="opIdgetExceptionsByRequestUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/exceptions \
  -H 'Accept: application/json'

```

```http
GET /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/exceptions HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/exceptions',
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

result = RestClient.get '/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/exceptions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/exceptions', headers = headers)

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
    $response = $client->request('GET','/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/exceptions', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/exceptions");
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
    req, err := http.NewRequest("GET", "/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/exceptions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /requests/{requestUuid}/exceptions`

*Get the list of exceptions linked to an existing Request*

<h3 id="getexceptionsbyrequestusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestUuid|path|string|true|The unique identifier of the Request|

> Example responses

> 200 Response

```json
[
  {
    "code": "string",
    "isBlocking": false,
    "level": 0,
    "message": "string",
    "parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "source": {
      "href": "string",
      "id": "string",
      "type": "ALLOCATION"
    }
  }
]
```

<h3 id="getexceptionsbyrequestusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad param: invalid Guid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid or nonexistent authorization HTTP header|[ErrorResponse](#schemaerrorresponse)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|You do not have permission to perform this operation|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|Time out|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|An unexpected error has prevented the operation|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<h3 id="getexceptionsbyrequestusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RequestException](#schemarequestexception)]|false|none|none|
|» code|string|false|none|The system exception code defined for the exception. Example: BADCODE|
|» isBlocking|boolean|false|none|Defines whether the exception will prevent the Request from being submitted|
|» level|integer(int64)|false|none|The numeric level associated with the exception. Example: 99|
|» message|string|false|none|The user-facing message defined for the exception|
|» parameters|object|false|none|Parameters for the messages of the exception|
|»» **additionalProperties**|[string]|false|none|none|
|» source|[ExceptionSource](#schemaexceptionsource)|false|none|none|
|»» href|string|false|none|The link to the unique identifier of source. Will be empty if source is ALLOCATION or CASH_ADVANCE.|
|»» id|string|false|none|The unique identifier of the source|
|»» type|string|false|none|Defines the type of the source which can be one of "ALLOCATION", "CASH_ADVANCE", "EXPENSE", "HEADER"|

###### Enumerated Values

|Property|Value|
|---|---|
|type|ALLOCATION|
|type|CASH_ADVANCE|
|type|EXPENSE|
|type|HEADER|

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="request-workflow-resource">Workflow Resource</h3>

Manage workflow transitions for a Request

#### workflowActionUsingPOST

<a id="opIdworkflowActionUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/{action} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/{action} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/{action}',
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

result = RestClient.post '/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/{action}',
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

r = requests.post('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/{action}', headers = headers)

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
    $response = $client->request('POST','/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/{action}', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/{action}");
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
    req, err := http.NewRequest("POST", "/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/{action}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /requests/{requestUuid}/{action}`

*Move an existing Request in the approval workflow*

> Body parameter

```json
"string"
```

<h3 id="workflowactionusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestUuid|path|string|true|The unique identifier of the Request|
|action|path|string|true|The workflow state transition to be executed|
|companyId|query|string|false|The unique identifier of the company|
|userId|query|string|false|The unique identifier of the user performing the status transition|
|body|body|[WorkflowAction](#schemaworkflowaction)|false|Only usable when the workflow action is set to ‘sendback’.|

###### Enumerated Values

|Parameter|Value|
|---|---|
|action|submit|
|action|approve|
|action|recall|
|action|sendback|
|action|cancel|
|action|close|
|action|reopen|

> Example responses

> 200 Response

```json
{
  "approvalLimitDate": "string",
  "approvalStatus": {
    "code": "APPROVED",
    "name": "string"
  },
  "approved": true,
  "approver": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "authorizedDate": "string",
  "businessPurpose": "string",
  "canceledPostApproval": true,
  "closed": false,
  "comment": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "creationDate": "string",
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "endDate": "string",
  "endTime": "string",
  "everSentBack": false,
  "expenses": [
    {
      "href": "string",
      "id": "string",
      "template": "string"
    }
  ],
  "extensionOf": {
    "requestId": "string"
  },
  "highestExceptionLevel": "NONE",
  "href": "string",
  "id": "string",
  "lastModified": "string",
  "mainDestination": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "name": "string",
  "operations": [
    {
      "href": "string",
      "rel": "string"
    }
  ],
  "owner": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "pendingApproval": true,
  "policy": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "requestId": "string",
  "startDate": "string",
  "startTime": "string",
  "submitDate": "string",
  "totalApprovedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalPostedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalRemainingAmount": {
    "currency": "string",
    "value": 1
  },
  "travelAgency": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "type": {
    "code": "string",
    "label": "string"
  }
}
```

<h3 id="workflowactionusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Request](#schemarequest)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request is invalid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request is not authenticated|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|You do not have permission to perform this operation|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|An unexpected error has prevented the operation|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="request-travel-agency-resource">Travel Agency Resource</h3>

Get details of travel agencies integrated with Concur Request

#### getUsingGET_7

<a id="opIdgetUsingGET_7"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /us.api.concursolutions.com/travelrequest/v4/travelagencies/{agencyUuid} \
  -H 'Accept: application/json'

```

```http
GET /us.api.concursolutions.com/travelrequest/v4/travelagencies/{agencyUuid} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/travelagencies/{agencyUuid}',
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

result = RestClient.get '/us.api.concursolutions.com/travelrequest/v4/travelagencies/{agencyUuid}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/us.api.concursolutions.com/travelrequest/v4/travelagencies/{agencyUuid}', headers = headers)

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
    $response = $client->request('GET','/us.api.concursolutions.com/travelrequest/v4/travelagencies/{agencyUuid}', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/travelagencies/{agencyUuid}");
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
    req, err := http.NewRequest("GET", "/us.api.concursolutions.com/travelrequest/v4/travelagencies/{agencyUuid}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /travelagencies/{agencyUuid}`

*Get the description of a Travel Agency office*

<h3 id="getusingget_7-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agencyUuid|path|string|true|The unique identifier of the Travel Agency|

> Example responses

> 200 Response

```json
{
  "emailAddress": "string",
  "id": "string",
  "name": "string",
  "proposalType": "CWTF"
}
```

<h3 id="getusingget_7-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResourceOfTravelAgency](#schemaresourceoftravelagency)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request is invalid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request is not authenticated|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|You do not have permission to perform this operation|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|An unexpected error has prevented the operation|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="request-policy-resource">Policy Resource</h3>

Get available Request Policies

#### getListForUserUsingGET

<a id="opIdgetListForUserUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /us.api.concursolutions.com/travelrequest/v4/userpolicies \
  -H 'Accept: application/json'

```

```http
GET /us.api.concursolutions.com/travelrequest/v4/userpolicies HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/userpolicies',
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

result = RestClient.get '/us.api.concursolutions.com/travelrequest/v4/userpolicies',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/us.api.concursolutions.com/travelrequest/v4/userpolicies', headers = headers)

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
    $response = $client->request('GET','/us.api.concursolutions.com/travelrequest/v4/userpolicies', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/userpolicies");
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
    req, err := http.NewRequest("GET", "/us.api.concursolutions.com/travelrequest/v4/userpolicies", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /userpolicies`

*Get the list of existing Request Policies for a given user*

<h3 id="getlistforuserusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string|false|The unique identifier of the user for whom the list of Request policies will be retrieved|

> Example responses

> 200 Response

```json
[
  {
    "href": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="getlistforuserusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request is invalid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request is not authenticated|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|You do not have permission to perform this operation|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|An unexpected error has prevented the operation|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<h3 id="getlistforuserusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ResourceOfPolicy](#schemaresourceofpolicy)]|false|none|none|
|» href|string|false|none|Hyperlink to the resource for this Request policy|
|» id|string|false|none|Unique identifier of the Request policy|
|» name|string|false|none|Name of the Request policy|

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="request-expected-expense-resource">Expected Expense Resource</h3>

Manage expected expenses attached to a Request

#### listUsingGET

<a id="opIdlistUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses \
  -H 'Accept: application/json'

```

```http
GET /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses',
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

result = RestClient.get '/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses', headers = headers)

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
    $response = $client->request('GET','/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses");
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
    req, err := http.NewRequest("GET", "/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /requests/{requestUuid}/expenses`

*Get the list of expected expenses attached to a Request*

<h3 id="listusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestUuid|path|string|true|The unique identifier of the Request|
|userId|query|string|false|The unique identifier of the user viewing the expected expenses attached to a Request|

> Example responses

> 200 Response

```json
[
  {
    "allocations": [
      {
        "allocationAmount": {
          "currency": "string",
          "value": 1
        },
        "allocationId": "string",
        "approvedAmount": {
          "currency": "string",
          "value": 1
        },
        "custom1": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom10": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom11": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom12": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom13": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom14": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom15": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom16": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom17": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom18": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom19": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom2": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom20": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom3": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom4": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom5": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom6": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom7": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom8": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom9": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "expenseId": "string",
        "percentEdited": false,
        "percentage": 0,
        "postedAmount": {
          "currency": "string",
          "value": 1
        },
        "systemAllocation": false
      }
    ],
    "approvedAmount": {
      "currency": "string",
      "value": 1
    },
    "budgetAccrualDate": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
    "businessPurpose": "string",
    "comments": {
      "href": "string",
      "id": "string",
      "template": "string"
    },
    "custom1": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom10": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom11": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom12": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom13": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom14": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom15": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom16": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom17": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom18": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom19": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom2": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom20": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom21": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom22": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom23": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom24": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom25": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom26": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom27": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom28": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom29": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom3": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom30": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom31": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom32": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom33": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom34": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom35": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom36": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom37": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom38": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom39": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom4": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom40": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom5": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom6": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom7": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom8": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "custom9": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "exchangeRate": {
      "operation": "MULTIPLY",
      "value": 0
    },
    "expenseType": {
      "href": "string",
      "id": "string",
      "name": "string"
    },
    "href": "string",
    "id": "string",
    "lastComment": "string",
    "lastModifiedDate": "string",
    "location": {
      "city": "string",
      "countryCode": "string",
      "countrySubDivisionCode": "string",
      "iataCode": "string",
      "id": "string",
      "latitude": 0,
      "locationCode": "string",
      "locationType": "string",
      "longitude": 0,
      "name": "string"
    },
    "orgUnit1": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "orgUnit2": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "orgUnit3": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "orgUnit4": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "orgUnit5": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "orgUnit6": {
      "code": "string",
      "href": "string",
      "value": "string"
    },
    "parentRequest": {
      "href": "string",
      "id": "string",
      "template": "string"
    },
    "postedAmount": {
      "currency": "string",
      "value": 1
    },
    "remainingAmount": {
      "currency": "string",
      "value": 1
    },
    "source": "CASH_ADVANCE",
    "transactionAmount": {
      "currency": "string",
      "value": 1
    },
    "transactionDate": "string",
    "travelAllowance": {
      "dailyTravelAllowanceId": "string"
    },
    "tripData": {
      "agencyBooked": false,
      "legs": [
        {
          "class": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "classOfService": "string",
          "comment": "string",
          "custom1": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom10": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom11": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom12": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom13": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom14": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom15": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom16": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom17": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom18": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom19": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom2": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom20": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom21": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom22": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom23": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom24": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom25": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom26": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom27": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom28": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom29": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom3": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom30": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom31": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom32": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom33": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom34": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom35": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom36": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom37": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom38": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom39": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom4": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom40": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom5": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom6": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom7": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom8": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "custom9": {
            "code": "string",
            "href": "string",
            "value": "string"
          },
          "endDate": "string",
          "endLocation": {
            "city": "string",
            "countryCode": "string",
            "countrySubDivisionCode": "string",
            "iataCode": "string",
            "id": "string",
            "latitude": 0,
            "locationCode": "string",
            "locationType": "string",
            "longitude": 0,
            "name": "string"
          },
          "endLocationDetail": "string",
          "endTime": "string",
          "id": "string",
          "returnLeg": false,
          "segmentLocator": "string",
          "startDate": "string",
          "startLocation": {
            "city": "string",
            "countryCode": "string",
            "countrySubDivisionCode": "string",
            "iataCode": "string",
            "id": "string",
            "latitude": 0,
            "locationCode": "string",
            "locationType": "string",
            "longitude": 0,
            "name": "string"
          },
          "startLocationDetail": "string",
          "startTime": "string",
          "vendorName": "string"
        }
      ],
      "segmentType": {
        "category": "REQ_SEG_AIRFR",
        "code": "string"
      },
      "selfBooked": false,
      "tripType": "ONE_WAY"
    },
    "vendor": {
      "id": "string",
      "name": "string"
    }
  }
]
```

<h3 id="listusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request is invalid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request is not authenticated|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|You do not have permission to perform this operation|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|An unexpected error has prevented the operation|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<h3 id="listusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Expense](#schemaexpense)]|false|none|none|
|» allocations|[[Allocation](#schemaallocation)]|false|none|List of the allocations composing this segment|
|»» allocationAmount|[Amount](#schemaamount)|false|none|none|
|»»» currency|string|true|none|The 3-letter ISO 4217 code of the currency in which the amount is expressed|
|»»» value|number|true|none|The amount in the defined currency|
|»» allocationId|string|false|none|The unique allocation identifier.|
|»» approvedAmount|[Amount](#schemaamount)|false|none|none|
|»» custom1|[CustomField](#schemacustomfield)|false|none|none|
|»»» code|string|false|none|The short code of the list item. For non-list fields, this value will be blank|
|»»» href|string|false|none|The link to get this list item on the list service.|
|»»» value|string|false|none|The value of the custom field or the value of the list item id for list fields|
|»» custom10|[CustomField](#schemacustomfield)|false|none|none|
|»» custom11|[CustomField](#schemacustomfield)|false|none|none|
|»» custom12|[CustomField](#schemacustomfield)|false|none|none|
|»» custom13|[CustomField](#schemacustomfield)|false|none|none|
|»» custom14|[CustomField](#schemacustomfield)|false|none|none|
|»» custom15|[CustomField](#schemacustomfield)|false|none|none|
|»» custom16|[CustomField](#schemacustomfield)|false|none|none|
|»» custom17|[CustomField](#schemacustomfield)|false|none|none|
|»» custom18|[CustomField](#schemacustomfield)|false|none|none|
|»» custom19|[CustomField](#schemacustomfield)|false|none|none|
|»» custom2|[CustomField](#schemacustomfield)|false|none|none|
|»» custom20|[CustomField](#schemacustomfield)|false|none|none|
|»» custom3|[CustomField](#schemacustomfield)|false|none|none|
|»» custom4|[CustomField](#schemacustomfield)|false|none|none|
|»» custom5|[CustomField](#schemacustomfield)|false|none|none|
|»» custom6|[CustomField](#schemacustomfield)|false|none|none|
|»» custom7|[CustomField](#schemacustomfield)|false|none|none|
|»» custom8|[CustomField](#schemacustomfield)|false|none|none|
|»» custom9|[CustomField](#schemacustomfield)|false|none|none|
|»» expenseId|string|false|none|The unique identifier of the expense associated with the allocation|
|»» percentEdited|boolean|false|none|Whether the allocation percent has been edited|
|»» percentage|number|false|none|The percentage of the total expense that this allocation represents|
|»» postedAmount|[Amount](#schemaamount)|false|none|none|
|»» systemAllocation|boolean|false|none|Whether the allocation is a system allocation. It is usually hidden or read only for Request users|
|» approvedAmount|[Amount](#schemaamount)|false|none|none|
|» budgetAccrualDate|string|false|none|The date to determine which budgets are affected (in the format yyyy-MM-dd’T’HH:mm:ss.SSS’Z’)|
|» businessPurpose|string|false|none|The purpose of the expected expense|
|» comments|[ResourceLink](#schemaresourcelink)|false|none|none|
|»» href|string|false|none|Hyperlink to the resource|
|»» id|string|false|none|Unique identifier of the related object|
|»» template|string|false|none|Hyperlink template to the resource|
|» custom1|[CustomField](#schemacustomfield)|false|none|none|
|» custom10|[CustomField](#schemacustomfield)|false|none|none|
|» custom11|[CustomField](#schemacustomfield)|false|none|none|
|» custom12|[CustomField](#schemacustomfield)|false|none|none|
|» custom13|[CustomField](#schemacustomfield)|false|none|none|
|» custom14|[CustomField](#schemacustomfield)|false|none|none|
|» custom15|[CustomField](#schemacustomfield)|false|none|none|
|» custom16|[CustomField](#schemacustomfield)|false|none|none|
|» custom17|[CustomField](#schemacustomfield)|false|none|none|
|» custom18|[CustomField](#schemacustomfield)|false|none|none|
|» custom19|[CustomField](#schemacustomfield)|false|none|none|
|» custom2|[CustomField](#schemacustomfield)|false|none|none|
|» custom20|[CustomField](#schemacustomfield)|false|none|none|
|» custom21|[CustomField](#schemacustomfield)|false|none|none|
|» custom22|[CustomField](#schemacustomfield)|false|none|none|
|» custom23|[CustomField](#schemacustomfield)|false|none|none|
|» custom24|[CustomField](#schemacustomfield)|false|none|none|
|» custom25|[CustomField](#schemacustomfield)|false|none|none|
|» custom26|[CustomField](#schemacustomfield)|false|none|none|
|» custom27|[CustomField](#schemacustomfield)|false|none|none|
|» custom28|[CustomField](#schemacustomfield)|false|none|none|
|» custom29|[CustomField](#schemacustomfield)|false|none|none|
|» custom3|[CustomField](#schemacustomfield)|false|none|none|
|» custom30|[CustomField](#schemacustomfield)|false|none|none|
|» custom31|[CustomField](#schemacustomfield)|false|none|none|
|» custom32|[CustomField](#schemacustomfield)|false|none|none|
|» custom33|[CustomField](#schemacustomfield)|false|none|none|
|» custom34|[CustomField](#schemacustomfield)|false|none|none|
|» custom35|[CustomField](#schemacustomfield)|false|none|none|
|» custom36|[CustomField](#schemacustomfield)|false|none|none|
|» custom37|[CustomField](#schemacustomfield)|false|none|none|
|» custom38|[CustomField](#schemacustomfield)|false|none|none|
|» custom39|[CustomField](#schemacustomfield)|false|none|none|
|» custom4|[CustomField](#schemacustomfield)|false|none|none|
|» custom40|[CustomField](#schemacustomfield)|false|none|none|
|» custom5|[CustomField](#schemacustomfield)|false|none|none|
|» custom6|[CustomField](#schemacustomfield)|false|none|none|
|» custom7|[CustomField](#schemacustomfield)|false|none|none|
|» custom8|[CustomField](#schemacustomfield)|false|none|none|
|» custom9|[CustomField](#schemacustomfield)|false|none|none|
|» exchangeRate|[ExchangeRate](#schemaexchangerate)|false|none|none|
|»» operation|string|true|none|Exchange rate operation. Possible values: 'MULTIPLY' or 'DIVIDE'|
|»» value|number|true|none|Exchange rate value|
|» expenseType|[ExpenseType](#schemaexpensetype)|false|none|none|
|»» href|string|false|none|Hyperlink to the resource for the expense type definition|
|»» id|string|true|none|Unique identifier of the expense type|
|»» name|string|false|none|Name of the expense type|
|» href|string|false|none|none|
|» id|string|false|none|The unique identifier of the expected expense|
|» lastComment|string|false|none|The last comment of the expected expense|
|» lastModifiedDate|string|false|none|The date when this expense was last modified|
|» location|[Location](#schemalocation)|false|none|none|
|»» city|string|false|none|The city name of the location|
|»» countryCode|string|false|none|The ISO 3166-1 country code|
|»» countrySubDivisionCode|string|false|none|The ISO 3166-2 country sub code|
|»» iataCode|string|false|none|The IATA code for the location|
|»» id|string|false|none|The id of the location|
|»» latitude|number|false|none|The latitude of the location|
|»» locationCode|string|false|none|The code of the location|
|»» locationType|string|false|none|The type of the location|
|»» longitude|number|false|none|The longitude of the location|
|»» name|string|false|none|The name of the location|
|» orgUnit1|[CustomField](#schemacustomfield)|false|none|none|
|» orgUnit2|[CustomField](#schemacustomfield)|false|none|none|
|» orgUnit3|[CustomField](#schemacustomfield)|false|none|none|
|» orgUnit4|[CustomField](#schemacustomfield)|false|none|none|
|» orgUnit5|[CustomField](#schemacustomfield)|false|none|none|
|» orgUnit6|[CustomField](#schemacustomfield)|false|none|none|
|» parentRequest|[ResourceLink](#schemaresourcelink)|false|none|none|
|» postedAmount|[Amount](#schemaamount)|false|none|none|
|» remainingAmount|[Amount](#schemaamount)|false|none|none|
|» source|string|false|none|The source that created the expected expense. It can be CASH_ADVANCE or TRAVEL_ALLOWANCE. This field will be empty in any other case.|
|» transactionAmount|[Amount](#schemaamount)|false|none|none|
|» transactionDate|string|true|none|The date of the transaction|
|» travelAllowance|[TravelAllowance](#schematravelallowance)|false|none|none|
|»» dailyTravelAllowanceId|string|false|none|The fixed daily travel allowance id associated with the expected expense|
|» tripData|[TripData](#schematripdata)|false|none|none|
|»» agencyBooked|boolean|false|none|Indicates whether this trip has been booked by a Travel Agency or not. True if this trip is (or has to be) handled by a Travel Agency.|
|»» legs|[[SegmentLeg](#schemasegmentleg)]|false|none|List of the legs composing this segment|
|»»» class|[ListItemField](#schemalistitemfield)|false|none|none|
|»»»» code|string|false|none|The short code of the list item.|
|»»»» href|string|false|none|Hyperlink to the resource for the list item.|
|»»»» value|string|false|none|The value of the list item id.|
|»»» classOfService|string|false|none|The class of service of the segment leg. For example, in the case of an air segment, this field would contain the one-letter booking code: Y for economy class, or F for first class...|
|»»» comment|string|false|none|A comment for this segment leg|
|»»» custom1|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom10|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom11|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom12|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom13|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom14|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom15|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom16|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom17|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom18|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom19|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom2|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom20|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom21|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom22|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom23|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom24|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom25|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom26|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom27|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom28|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom29|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom3|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom30|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom31|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom32|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom33|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom34|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom35|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom36|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom37|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom38|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom39|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom4|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom40|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom5|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom6|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom7|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom8|[CustomField](#schemacustomfield)|false|none|none|
|»»» custom9|[CustomField](#schemacustomfield)|false|none|none|
|»»» endDate|string|false|none|The end date of the segment leg (in the format YYYY-MM-DD).It represents the arrival date of AIRFR and TRAIN segments, check out date for HOTEL or drop off for CARRT|
|»»» endLocation|[Location](#schemalocation)|false|none|none|
|»»» endLocationDetail|string|false|none|Additional details about the end location. It is used for HOTEL and CARRT segments.|
|»»» endTime|string|false|none|The end time of the segment leg (in the format HH:MM). It is expressed in the local time of the end location|
|»»» id|string|false|none|The unique identifier of the segment leg|
|»»» returnLeg|boolean|false|none|This value indicates if the leg is a return leg or not.|
|»»» segmentLocator|string|false|none|The identifier for Concur Travel segments|
|»»» startDate|string|false|none|The start date of the segment leg (in the format YYYY-MM-DD). It represents the departure date of AIRFR and TRAIN segments, check in date for HOTEL or pickup for CARRT|
|»»» startLocation|[Location](#schemalocation)|false|none|none|
|»»» startLocationDetail|string|false|none|Additional details about the start location. It is used for HOTEL and CARRT segments.|
|»»» startTime|string|false|none|The start time of the segment leg (in the format HH:MM). It is expressed in the local time of the start location|
|»»» vendorName|string|false|none|The name of the vendor of this segment leg.|
|»» segmentType|[SegmentType](#schemasegmenttype)|true|none|none|
|»»» category|string|false|none|The category of the segment type|
|»»» code|string|false|none|The code of the segment type. This will most frequently be a String, but could also be an integer in the case of a custom expense typeFor example, would be category = REQ_SEG_AIRFR and code = AIRFR for a regular air segment, but category = REQ_SEG_AIRFR and code = 10325 for a custom air segment.|
|»» selfBooked|boolean|false|none|True if this trip has been reserved by Concur Travel, or if Concur Travel has retrieved the trip information in the GDS|
|»» tripType|string|false|none|Indicates the type of this trip. Possible values are: ONE_WAY, ROUND_TRIP, MULTI_STOPS|
|» vendor|[Vendor](#schemavendor)|false|none|none|
|»» id|string|false|none|The vendor identifier of the expected expense|
|»» name|string|false|none|The vendor description of the expected expense|

###### Enumerated Values

|Property|Value|
|---|---|
|operation|MULTIPLY|
|operation|DIVIDE|
|source|CASH_ADVANCE|
|source|TRAVEL_ALLOWANCE|
|source|AGENCY_FEE|
|category|REQ_SEG_AIRFR|
|category|REQ_SEG_CARRT|
|category|REQ_SEG_HOTEL|
|category|REQ_SEG_LIMOF|
|category|REQ_SEG_RAILF|
|category|REQ_SEG_TAXIF|
|category|REQ_SEG_MISC|
|category|REQ_SEG_PARKG|
|category|REQ_SEG_DININ|
|category|REQ_SEG_EVENT|
|tripType|ONE_WAY|
|tripType|ROUND_TRIP|
|tripType|MULTI_STOPS|

<aside class="success">
This operation does not require authentication
</aside>

#### createUsingPOST_2

<a id="opIdcreateUsingPOST_2"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "allocations": [
    {
      "allocationAmount": {
        "currency": "string",
        "value": 1
      },
      "allocationId": "string",
      "approvedAmount": {
        "currency": "string",
        "value": 1
      },
      "custom1": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom10": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom11": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom12": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom13": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom14": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom15": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom16": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom17": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom18": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom19": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom2": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom20": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom3": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom4": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom5": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom6": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom7": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom8": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom9": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "expenseId": "string",
      "percentEdited": false,
      "percentage": 0,
      "postedAmount": {
        "currency": "string",
        "value": 1
      },
      "systemAllocation": false
    }
  ],
  "approvedAmount": {
    "currency": "string",
    "value": 1
  },
  "budgetAccrualDate": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
  "businessPurpose": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom21": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom22": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom23": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom24": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom25": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom26": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom27": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom28": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom29": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom30": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom31": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom32": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom33": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom34": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom35": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom36": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom37": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom38": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom39": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom40": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "exchangeRate": {
    "operation": "MULTIPLY",
    "value": 0
  },
  "expenseType": {
    "href": "string",
    "id": "string",
    "name": "string"
  },
  "href": "string",
  "id": "string",
  "lastComment": "string",
  "lastModifiedDate": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "orgUnit1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "parentRequest": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "postedAmount": {
    "currency": "string",
    "value": 1
  },
  "remainingAmount": {
    "currency": "string",
    "value": 1
  },
  "source": "CASH_ADVANCE",
  "transactionAmount": {
    "currency": "string",
    "value": 1
  },
  "transactionDate": "string",
  "travelAllowance": {
    "dailyTravelAllowanceId": "string"
  },
  "tripData": {
    "agencyBooked": false,
    "legs": [
      {
        "class": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "classOfService": "string",
        "comment": "string",
        "custom1": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom10": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom11": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom12": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom13": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom14": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom15": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom16": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom17": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom18": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom19": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom2": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom20": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom21": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom22": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom23": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom24": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom25": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom26": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom27": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom28": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom29": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom3": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom30": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom31": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom32": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom33": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom34": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom35": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom36": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom37": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom38": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom39": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom4": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom40": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom5": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom6": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom7": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom8": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom9": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "endDate": "string",
        "endLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "endLocationDetail": "string",
        "endTime": "string",
        "id": "string",
        "returnLeg": false,
        "segmentLocator": "string",
        "startDate": "string",
        "startLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "startLocationDetail": "string",
        "startTime": "string",
        "vendorName": "string"
      }
    ],
    "segmentType": {
      "category": "REQ_SEG_AIRFR",
      "code": "string"
    },
    "selfBooked": false,
    "tripType": "ONE_WAY"
  },
  "vendor": {
    "id": "string",
    "name": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses',
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

result = RestClient.post '/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses',
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

r = requests.post('/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses', headers = headers)

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
    $response = $client->request('POST','/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses");
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
    req, err := http.NewRequest("POST", "/us.api.concursolutions.com/travelrequest/v4/requests/{requestUuid}/expenses", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /requests/{requestUuid}/expenses`

*Create a new expected expense*

> Body parameter

```json
{
  "allocations": [
    {
      "allocationAmount": {
        "currency": "string",
        "value": 1
      },
      "allocationId": "string",
      "approvedAmount": {
        "currency": "string",
        "value": 1
      },
      "custom1": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom10": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom11": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom12": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom13": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom14": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom15": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom16": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom17": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom18": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom19": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom2": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom20": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom3": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom4": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom5": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom6": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom7": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom8": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom9": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "expenseId": "string",
      "percentEdited": false,
      "percentage": 0,
      "postedAmount": {
        "currency": "string",
        "value": 1
      },
      "systemAllocation": false
    }
  ],
  "approvedAmount": {
    "currency": "string",
    "value": 1
  },
  "budgetAccrualDate": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
  "businessPurpose": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom21": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom22": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom23": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom24": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom25": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom26": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom27": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom28": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom29": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom30": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom31": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom32": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom33": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom34": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom35": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom36": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom37": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom38": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom39": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom40": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "exchangeRate": {
    "operation": "MULTIPLY",
    "value": 0
  },
  "expenseType": {
    "href": "string",
    "id": "string",
    "name": "string"
  },
  "href": "string",
  "id": "string",
  "lastComment": "string",
  "lastModifiedDate": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "orgUnit1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "parentRequest": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "postedAmount": {
    "currency": "string",
    "value": 1
  },
  "remainingAmount": {
    "currency": "string",
    "value": 1
  },
  "source": "CASH_ADVANCE",
  "transactionAmount": {
    "currency": "string",
    "value": 1
  },
  "transactionDate": "string",
  "travelAllowance": {
    "dailyTravelAllowanceId": "string"
  },
  "tripData": {
    "agencyBooked": false,
    "legs": [
      {
        "class": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "classOfService": "string",
        "comment": "string",
        "custom1": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom10": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom11": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom12": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom13": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom14": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom15": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom16": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom17": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom18": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom19": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom2": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom20": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom21": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom22": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom23": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom24": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom25": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom26": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom27": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom28": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom29": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom3": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom30": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom31": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom32": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom33": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom34": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom35": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom36": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom37": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom38": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom39": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom4": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom40": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom5": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom6": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom7": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom8": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom9": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "endDate": "string",
        "endLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "endLocationDetail": "string",
        "endTime": "string",
        "id": "string",
        "returnLeg": false,
        "segmentLocator": "string",
        "startDate": "string",
        "startLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "startLocationDetail": "string",
        "startTime": "string",
        "vendorName": "string"
      }
    ],
    "segmentType": {
      "category": "REQ_SEG_AIRFR",
      "code": "string"
    },
    "selfBooked": false,
    "tripType": "ONE_WAY"
  },
  "vendor": {
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="createusingpost_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestUuid|path|string|true|The unique identifier of the Request to which the expected expense is attached|
|userId|query|string|false|The unique identifier of the user performing the expected expense creation|
|body|body|[Expense](#schemaexpense)|true|expense|

> Example responses

> 201 Response

```json
{
  "allocations": [
    {
      "allocationAmount": {
        "currency": "string",
        "value": 1
      },
      "allocationId": "string",
      "approvedAmount": {
        "currency": "string",
        "value": 1
      },
      "custom1": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom10": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom11": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom12": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom13": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom14": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom15": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom16": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom17": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom18": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom19": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom2": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom20": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom3": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom4": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom5": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom6": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom7": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom8": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom9": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "expenseId": "string",
      "percentEdited": false,
      "percentage": 0,
      "postedAmount": {
        "currency": "string",
        "value": 1
      },
      "systemAllocation": false
    }
  ],
  "approvedAmount": {
    "currency": "string",
    "value": 1
  },
  "budgetAccrualDate": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
  "businessPurpose": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom21": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom22": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom23": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom24": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom25": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom26": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom27": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom28": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom29": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom30": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom31": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom32": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom33": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom34": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom35": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom36": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom37": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom38": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom39": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom40": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "exchangeRate": {
    "operation": "MULTIPLY",
    "value": 0
  },
  "expenseType": {
    "href": "string",
    "id": "string",
    "name": "string"
  },
  "href": "string",
  "id": "string",
  "lastComment": "string",
  "lastModifiedDate": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "orgUnit1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "parentRequest": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "postedAmount": {
    "currency": "string",
    "value": 1
  },
  "remainingAmount": {
    "currency": "string",
    "value": 1
  },
  "source": "CASH_ADVANCE",
  "transactionAmount": {
    "currency": "string",
    "value": 1
  },
  "transactionDate": "string",
  "travelAllowance": {
    "dailyTravelAllowanceId": "string"
  },
  "tripData": {
    "agencyBooked": false,
    "legs": [
      {
        "class": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "classOfService": "string",
        "comment": "string",
        "custom1": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom10": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom11": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom12": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom13": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom14": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom15": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom16": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom17": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom18": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom19": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom2": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom20": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom21": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom22": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom23": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom24": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom25": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom26": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom27": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom28": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom29": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom3": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom30": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom31": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom32": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom33": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom34": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom35": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom36": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom37": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom38": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom39": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom4": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom40": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom5": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom6": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom7": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom8": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom9": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "endDate": "string",
        "endLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "endLocationDetail": "string",
        "endTime": "string",
        "id": "string",
        "returnLeg": false,
        "segmentLocator": "string",
        "startDate": "string",
        "startLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "startLocationDetail": "string",
        "startTime": "string",
        "vendorName": "string"
      }
    ],
    "segmentType": {
      "category": "REQ_SEG_AIRFR",
      "code": "string"
    },
    "selfBooked": false,
    "tripType": "ONE_WAY"
  },
  "vendor": {
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="createusingpost_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|[Expense](#schemaexpense)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request is invalid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request is not authenticated|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|You do not have permission to perform this operation|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|An unexpected error has prevented the operation|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

#### getUsingGET_2

<a id="opIdgetUsingGET_2"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid} \
  -H 'Accept: application/json'

```

```http
GET /us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}',
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

result = RestClient.get '/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}', headers = headers)

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
    $response = $client->request('GET','/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}");
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
    req, err := http.NewRequest("GET", "/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expenses/{expenseUuid}`

*Get the content of an expected expense*

<h3 id="getusingget_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expenseUuid|path|string|true|The unique identifier of the expected expense|
|userId|query|string|false|The unique identifier of the user viewing the expected expense|

> Example responses

> 200 Response

```json
{
  "allocations": [
    {
      "allocationAmount": {
        "currency": "string",
        "value": 1
      },
      "allocationId": "string",
      "approvedAmount": {
        "currency": "string",
        "value": 1
      },
      "custom1": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom10": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom11": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom12": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom13": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom14": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom15": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom16": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom17": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom18": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom19": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom2": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom20": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom3": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom4": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom5": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom6": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom7": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom8": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom9": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "expenseId": "string",
      "percentEdited": false,
      "percentage": 0,
      "postedAmount": {
        "currency": "string",
        "value": 1
      },
      "systemAllocation": false
    }
  ],
  "approvedAmount": {
    "currency": "string",
    "value": 1
  },
  "budgetAccrualDate": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
  "businessPurpose": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom21": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom22": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom23": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom24": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom25": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom26": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom27": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom28": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom29": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom30": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom31": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom32": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom33": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom34": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom35": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom36": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom37": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom38": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom39": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom40": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "exchangeRate": {
    "operation": "MULTIPLY",
    "value": 0
  },
  "expenseType": {
    "href": "string",
    "id": "string",
    "name": "string"
  },
  "href": "string",
  "id": "string",
  "lastComment": "string",
  "lastModifiedDate": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "orgUnit1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "parentRequest": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "postedAmount": {
    "currency": "string",
    "value": 1
  },
  "remainingAmount": {
    "currency": "string",
    "value": 1
  },
  "source": "CASH_ADVANCE",
  "transactionAmount": {
    "currency": "string",
    "value": 1
  },
  "transactionDate": "string",
  "travelAllowance": {
    "dailyTravelAllowanceId": "string"
  },
  "tripData": {
    "agencyBooked": false,
    "legs": [
      {
        "class": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "classOfService": "string",
        "comment": "string",
        "custom1": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom10": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom11": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom12": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom13": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom14": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom15": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom16": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom17": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom18": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom19": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom2": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom20": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom21": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom22": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom23": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom24": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom25": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom26": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom27": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom28": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom29": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom3": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom30": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom31": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom32": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom33": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom34": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom35": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom36": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom37": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom38": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom39": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom4": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom40": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom5": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom6": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom7": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom8": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom9": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "endDate": "string",
        "endLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "endLocationDetail": "string",
        "endTime": "string",
        "id": "string",
        "returnLeg": false,
        "segmentLocator": "string",
        "startDate": "string",
        "startLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "startLocationDetail": "string",
        "startTime": "string",
        "vendorName": "string"
      }
    ],
    "segmentType": {
      "category": "REQ_SEG_AIRFR",
      "code": "string"
    },
    "selfBooked": false,
    "tripType": "ONE_WAY"
  },
  "vendor": {
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="getusingget_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Expense](#schemaexpense)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request is invalid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request is not authenticated|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|You do not have permission to perform this operation|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|An unexpected error has prevented the operation|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

#### updateUsingPUT

<a id="opIdupdateUsingPUT"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
PUT /us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "allocations": [
    {
      "allocationAmount": {
        "currency": "string",
        "value": 1
      },
      "allocationId": "string",
      "approvedAmount": {
        "currency": "string",
        "value": 1
      },
      "custom1": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom10": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom11": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom12": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom13": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom14": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom15": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom16": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom17": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom18": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom19": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom2": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom20": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom3": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom4": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom5": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom6": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom7": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom8": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom9": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "expenseId": "string",
      "percentEdited": false,
      "percentage": 0,
      "postedAmount": {
        "currency": "string",
        "value": 1
      },
      "systemAllocation": false
    }
  ],
  "approvedAmount": {
    "currency": "string",
    "value": 1
  },
  "budgetAccrualDate": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
  "businessPurpose": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom21": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom22": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom23": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom24": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom25": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom26": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom27": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom28": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom29": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom30": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom31": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom32": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom33": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom34": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom35": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom36": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom37": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom38": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom39": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom40": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "exchangeRate": {
    "operation": "MULTIPLY",
    "value": 0
  },
  "expenseType": {
    "href": "string",
    "id": "string",
    "name": "string"
  },
  "href": "string",
  "id": "string",
  "lastComment": "string",
  "lastModifiedDate": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "orgUnit1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "parentRequest": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "postedAmount": {
    "currency": "string",
    "value": 1
  },
  "remainingAmount": {
    "currency": "string",
    "value": 1
  },
  "source": "CASH_ADVANCE",
  "transactionAmount": {
    "currency": "string",
    "value": 1
  },
  "transactionDate": "string",
  "travelAllowance": {
    "dailyTravelAllowanceId": "string"
  },
  "tripData": {
    "agencyBooked": false,
    "legs": [
      {
        "class": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "classOfService": "string",
        "comment": "string",
        "custom1": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom10": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom11": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom12": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom13": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom14": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom15": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom16": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom17": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom18": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom19": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom2": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom20": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom21": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom22": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom23": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom24": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom25": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom26": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom27": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom28": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom29": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom3": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom30": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom31": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom32": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom33": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom34": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom35": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom36": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom37": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom38": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom39": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom4": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom40": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom5": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom6": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom7": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom8": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom9": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "endDate": "string",
        "endLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "endLocationDetail": "string",
        "endTime": "string",
        "id": "string",
        "returnLeg": false,
        "segmentLocator": "string",
        "startDate": "string",
        "startLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "startLocationDetail": "string",
        "startTime": "string",
        "vendorName": "string"
      }
    ],
    "segmentType": {
      "category": "REQ_SEG_AIRFR",
      "code": "string"
    },
    "selfBooked": false,
    "tripType": "ONE_WAY"
  },
  "vendor": {
    "id": "string",
    "name": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}',
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
  'Accept' => 'application/json'
}

result = RestClient.put '/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}',
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

r = requests.put('/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}', headers = headers)

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
    $response = $client->request('PUT','/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /expenses/{expenseUuid}`

*Update the content of an expected expense*

> Body parameter

```json
{
  "allocations": [
    {
      "allocationAmount": {
        "currency": "string",
        "value": 1
      },
      "allocationId": "string",
      "approvedAmount": {
        "currency": "string",
        "value": 1
      },
      "custom1": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom10": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom11": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom12": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom13": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom14": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom15": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom16": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom17": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom18": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom19": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom2": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom20": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom3": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom4": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom5": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom6": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom7": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom8": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom9": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "expenseId": "string",
      "percentEdited": false,
      "percentage": 0,
      "postedAmount": {
        "currency": "string",
        "value": 1
      },
      "systemAllocation": false
    }
  ],
  "approvedAmount": {
    "currency": "string",
    "value": 1
  },
  "budgetAccrualDate": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
  "businessPurpose": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom21": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom22": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom23": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom24": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom25": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom26": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom27": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom28": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom29": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom30": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom31": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom32": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom33": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom34": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom35": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom36": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom37": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom38": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom39": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom40": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "exchangeRate": {
    "operation": "MULTIPLY",
    "value": 0
  },
  "expenseType": {
    "href": "string",
    "id": "string",
    "name": "string"
  },
  "href": "string",
  "id": "string",
  "lastComment": "string",
  "lastModifiedDate": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "orgUnit1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "parentRequest": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "postedAmount": {
    "currency": "string",
    "value": 1
  },
  "remainingAmount": {
    "currency": "string",
    "value": 1
  },
  "source": "CASH_ADVANCE",
  "transactionAmount": {
    "currency": "string",
    "value": 1
  },
  "transactionDate": "string",
  "travelAllowance": {
    "dailyTravelAllowanceId": "string"
  },
  "tripData": {
    "agencyBooked": false,
    "legs": [
      {
        "class": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "classOfService": "string",
        "comment": "string",
        "custom1": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom10": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom11": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom12": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom13": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom14": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom15": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom16": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom17": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom18": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom19": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom2": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom20": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom21": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom22": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom23": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom24": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom25": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom26": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom27": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom28": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom29": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom3": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom30": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom31": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom32": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom33": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom34": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom35": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom36": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom37": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom38": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom39": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom4": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom40": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom5": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom6": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom7": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom8": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom9": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "endDate": "string",
        "endLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "endLocationDetail": "string",
        "endTime": "string",
        "id": "string",
        "returnLeg": false,
        "segmentLocator": "string",
        "startDate": "string",
        "startLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "startLocationDetail": "string",
        "startTime": "string",
        "vendorName": "string"
      }
    ],
    "segmentType": {
      "category": "REQ_SEG_AIRFR",
      "code": "string"
    },
    "selfBooked": false,
    "tripType": "ONE_WAY"
  },
  "vendor": {
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="updateusingput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expenseUuid|path|string|true|The unique identifier of the expected expense to update|
|userId|query|string|false|The unique identifier of the user performing the expected expense update|
|body|body|[Expense](#schemaexpense)|true|expense|

> Example responses

> 200 Response

```json
{
  "allocations": [
    {
      "allocationAmount": {
        "currency": "string",
        "value": 1
      },
      "allocationId": "string",
      "approvedAmount": {
        "currency": "string",
        "value": 1
      },
      "custom1": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom10": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom11": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom12": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom13": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom14": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom15": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom16": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom17": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom18": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom19": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom2": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom20": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom3": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom4": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom5": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom6": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom7": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom8": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom9": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "expenseId": "string",
      "percentEdited": false,
      "percentage": 0,
      "postedAmount": {
        "currency": "string",
        "value": 1
      },
      "systemAllocation": false
    }
  ],
  "approvedAmount": {
    "currency": "string",
    "value": 1
  },
  "budgetAccrualDate": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
  "businessPurpose": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom21": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom22": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom23": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom24": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom25": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom26": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom27": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom28": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom29": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom30": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom31": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom32": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom33": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom34": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom35": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom36": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom37": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom38": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom39": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom40": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "exchangeRate": {
    "operation": "MULTIPLY",
    "value": 0
  },
  "expenseType": {
    "href": "string",
    "id": "string",
    "name": "string"
  },
  "href": "string",
  "id": "string",
  "lastComment": "string",
  "lastModifiedDate": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "orgUnit1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "parentRequest": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "postedAmount": {
    "currency": "string",
    "value": 1
  },
  "remainingAmount": {
    "currency": "string",
    "value": 1
  },
  "source": "CASH_ADVANCE",
  "transactionAmount": {
    "currency": "string",
    "value": 1
  },
  "transactionDate": "string",
  "travelAllowance": {
    "dailyTravelAllowanceId": "string"
  },
  "tripData": {
    "agencyBooked": false,
    "legs": [
      {
        "class": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "classOfService": "string",
        "comment": "string",
        "custom1": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom10": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom11": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom12": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom13": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom14": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom15": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom16": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom17": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom18": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom19": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom2": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom20": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom21": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom22": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom23": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom24": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom25": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom26": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom27": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom28": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom29": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom3": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom30": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom31": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom32": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom33": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom34": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom35": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom36": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom37": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom38": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom39": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom4": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom40": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom5": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom6": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom7": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom8": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom9": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "endDate": "string",
        "endLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "endLocationDetail": "string",
        "endTime": "string",
        "id": "string",
        "returnLeg": false,
        "segmentLocator": "string",
        "startDate": "string",
        "startLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "startLocationDetail": "string",
        "startTime": "string",
        "vendorName": "string"
      }
    ],
    "segmentType": {
      "category": "REQ_SEG_AIRFR",
      "code": "string"
    },
    "selfBooked": false,
    "tripType": "ONE_WAY"
  },
  "vendor": {
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="updateusingput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Expense](#schemaexpense)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request is invalid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request is not authenticated|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|You do not have permission to perform this operation|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|An unexpected error has prevented the operation|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

#### deleteUsingDELETE

<a id="opIddeleteUsingDELETE"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid} \
  -H 'Accept: */*'

```

```http
DELETE /us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid} HTTP/1.1

Accept: */*

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}',
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
  'Accept' => '*/*'
}

result = RestClient.delete '/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => '*/*',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}");
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
        "Accept": []string{"*/*"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /expenses/{expenseUuid}`

*Delete an expected expense from the Request*

<h3 id="deleteusingdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expenseUuid|path|string|true|The unique identifier of the expected expense to delete|
|userId|query|string|false|The unique identifier of the user performing the deletion of the expected expense|

> Example responses

> 200 Response

<h3 id="deleteusingdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|boolean|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request is invalid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request is not authenticated|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|You do not have permission to perform this operation|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|An unexpected error has prevented the operation|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

#### getCommentsByExpenseUsingGET

<a id="opIdgetCommentsByExpenseUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}/comments \
  -H 'Accept: application/json'

```

```http
GET /us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}/comments HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}/comments',
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

result = RestClient.get '/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}/comments',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}/comments', headers = headers)

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
    $response = $client->request('GET','/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}/comments', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}/comments");
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
    req, err := http.NewRequest("GET", "/us.api.concursolutions.com/travelrequest/v4/expenses/{expenseUuid}/comments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expenses/{expenseUuid}/comments`

*Get the list of comments for an existing expected expense*

<h3 id="getcommentsbyexpenseusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expenseUuid|path|string|true|The unique identifier of the expected expense|
|userId|query|string|false|The unique identifier of the user getting the content of the comments|

> Example responses

> 200 Response

```json
[
  {
    "author": {
      "firstName": "string",
      "middleInitial": "string",
      "href": "string",
      "id": "string",
      "lastName": "string",
      "template": "string"
    },
    "creationDateTime": "string",
    "isLatest": false,
    "value": "string"
  }
]
```

<h3 id="getcommentsbyexpenseusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request is invalid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Request is not authenticated|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|You do not have permission to perform this operation|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|An unexpected error has prevented the operation|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<h3 id="getcommentsbyexpenseusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Comment](#schemacomment)]|false|none|none|
|» author|[Employee](#schemaemployee)|false|none|none|
|»» firstName|string|false|none|The first name of the employee|
|»» middleInitial|string|false|none|The middle initial of the employee|
|»» href|string|false|none|Hyperlink to the resource|
|»» id|string|false|none|Unique identifier of the related object|
|»» lastName|string|false|none|The last name of the employee|
|»» template|string|false|none|Hyperlink template to the resource|
|» creationDateTime|string|false|none|Creation date of the comment (in the format YYYY-MM-DD HH:mm:ss.SSS)|
|» isLatest|boolean|false|none|True when the comment has been edited since the last workflow transition|
|» value|string|false|none|Comment value|

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="request-cash-advance-resource">Cash Advance Resource</h3>

Retrieve cash advance for Concur Request

#### getUsingGET_1

<a id="opIdgetUsingGET_1"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /us.api.concursolutions.com/travelrequest/v4/cashadvances/{cashAdvanceUuid} \
  -H 'Accept: application/json'

```

```http
GET /us.api.concursolutions.com/travelrequest/v4/cashadvances/{cashAdvanceUuid} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/us.api.concursolutions.com/travelrequest/v4/cashadvances/{cashAdvanceUuid}',
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

result = RestClient.get '/us.api.concursolutions.com/travelrequest/v4/cashadvances/{cashAdvanceUuid}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/us.api.concursolutions.com/travelrequest/v4/cashadvances/{cashAdvanceUuid}', headers = headers)

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
    $response = $client->request('GET','/us.api.concursolutions.com/travelrequest/v4/cashadvances/{cashAdvanceUuid}', array(
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
URL obj = new URL("/us.api.concursolutions.com/travelrequest/v4/cashadvances/{cashAdvanceUuid}");
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
    req, err := http.NewRequest("GET", "/us.api.concursolutions.com/travelrequest/v4/cashadvances/{cashAdvanceUuid}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /cashadvances/{cashAdvanceUuid}`

*Get the content of an existing cash advance*

<h3 id="getusingget_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cashAdvanceUuid|path|string|true|The unique identifier of the cash advance|

> Example responses

> 200 Response

```json
{
  "amountRequested": {
    "currency": "string",
    "value": 1
  },
  "approvalStatus": {
    "code": "C_APPR",
    "name": "string"
  },
  "cashAdvanceId": "string",
  "comment": "string",
  "exchangeRate": {
    "operation": "MULTIPLY",
    "value": 0
  },
  "issueDate": "string",
  "requestDate": "string"
}
```

<h3 id="getusingget_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[CashAdvance](#schemacashadvance)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad param: invalid Guid|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid or nonexistent authorization HTTP header|[ErrorResponse](#schemaerrorresponse)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Principal is not allowed to perform operation|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|Time out|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|An unexpected error has prevented the operation|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|The service is currently unavailable|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

### Schemas

<h3 id="tocS_Allocation">Allocation</h3>

<a id="schemaallocation"></a>
<a id="schema_Allocation"></a>
<a id="tocSallocation"></a>
<a id="tocsallocation"></a>

```json
{
  "allocationAmount": {
    "currency": "string",
    "value": 1
  },
  "allocationId": "string",
  "approvedAmount": {
    "currency": "string",
    "value": 1
  },
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "expenseId": "string",
  "percentEdited": false,
  "percentage": 0,
  "postedAmount": {
    "currency": "string",
    "value": 1
  },
  "systemAllocation": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocationAmount|[Amount](#schemaamount)|false|none|The amount of the allocation calculated with the percentage value multiplied by the transaction amount on the expense. This amount is given in the transaction's currency|
|allocationId|string|false|none|The unique allocation identifier.|
|approvedAmount|[Amount](#schemaamount)|false|none|The amount of the allocation calculated with the percentage value multiplied by the approved amount on the expense. This amount is given in the user's currency|
|custom1|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom10|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom11|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom12|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom13|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom14|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom15|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom16|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom17|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom18|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom19|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom2|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom20|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom3|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom4|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom5|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom6|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom7|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom8|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom9|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|expenseId|string|false|none|The unique identifier of the expense associated with the allocation|
|percentEdited|boolean|false|none|Whether the allocation percent has been edited|
|percentage|number|false|none|The percentage of the total expense that this allocation represents|
|postedAmount|[Amount](#schemaamount)|false|none|The amount of the allocation calculated with the percentage value multiplied by the posted amount on the expense. This amount is given in the user's currency|
|systemAllocation|boolean|false|none|Whether the allocation is a system allocation. It is usually hidden or read only for Request users|

<h3 id="tocS_Amount">Amount</h3>

<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "currency": "string",
  "value": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The 3-letter ISO 4217 code of the currency in which the amount is expressed|
|value|number|true|none|The amount in the defined currency|

<h3 id="tocS_ApprovalStatus">ApprovalStatus</h3>

<a id="schemaapprovalstatus"></a>
<a id="schema_ApprovalStatus"></a>
<a id="tocSapprovalstatus"></a>
<a id="tocsapprovalstatus"></a>

```json
{
  "code": "APPROVED",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The code of the approval status of the Request|
|name|string|false|none|The approval status of the Request in the current user's language|

###### Enumerated Values

|Property|Value|
|---|---|
|code|APPROVED|
|code|CANCELED|
|code|NOT_SUBMITTED|
|code|PENDING_BOOKING|
|code|SENTBACK|
|code|SUBMITTED|

<h3 id="tocS_CashAdvance">CashAdvance</h3>

<a id="schemacashadvance"></a>
<a id="schema_CashAdvance"></a>
<a id="tocScashadvance"></a>
<a id="tocscashadvance"></a>

```json
{
  "amountRequested": {
    "currency": "string",
    "value": 1
  },
  "approvalStatus": {
    "code": "C_APPR",
    "name": "string"
  },
  "cashAdvanceId": "string",
  "comment": "string",
  "exchangeRate": {
    "operation": "MULTIPLY",
    "value": 0
  },
  "issueDate": "string",
  "requestDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountRequested|[Amount](#schemaamount)|false|none|The amount of the cash advance in the Request, expressed in the reimbursement currency of the employee at the time they created the cash advance|
|approvalStatus|[CashAdvanceApprovalStatus](#schemacashadvanceapprovalstatus)|false|none|The approval status of the cash advance|
|cashAdvanceId|string|false|none|The unique identifier of the cash advance|
|comment|string|false|none|The last comment related to this cash advance|
|exchangeRate|[ExchangeRate](#schemaexchangerate)|false|none|The exchange rate that applies to the cash advance|
|issueDate|string|false|none|The date the cash advance was issued|
|requestDate|string|false|none|The date the cash advance was submitted (last submit date in case of recall)|

<h3 id="tocS_CashAdvanceApprovalStatus">CashAdvanceApprovalStatus</h3>

<a id="schemacashadvanceapprovalstatus"></a>
<a id="schema_CashAdvanceApprovalStatus"></a>
<a id="tocScashadvanceapprovalstatus"></a>
<a id="tocscashadvanceapprovalstatus"></a>

```json
{
  "code": "C_APPR",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The code of the approval status of the cash advance|
|name|string|false|none|The approval status of the Cash Advance|

###### Enumerated Values

|Property|Value|
|---|---|
|code|C_APPR|
|code|C_COMP|
|code|C_FILE|
|code|C_ISSU|
|code|C_NISU|
|code|C_NOTF|
|code|C_PECA|
|code|C_PEND|
|code|C_REJE|

<h3 id="tocS_Comment">Comment</h3>

<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "author": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "creationDateTime": "string",
  "isLatest": false,
  "value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|[Employee](#schemaemployee)|false|none|Author of the comment|
|creationDateTime|string|false|none|Creation date of the comment (in the format YYYY-MM-DD HH:mm:ss.SSS)|
|isLatest|boolean|false|none|True when the comment has been edited since the last workflow transition|
|value|string|false|none|Comment value|

<h3 id="tocS_CustomField">CustomField</h3>

<a id="schemacustomfield"></a>
<a id="schema_CustomField"></a>
<a id="tocScustomfield"></a>
<a id="tocscustomfield"></a>

```json
{
  "code": "string",
  "href": "string",
  "value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The short code of the list item. For non-list fields, this value will be blank|
|href|string|false|none|The link to get this list item on the list service.|
|value|string|false|none|The value of the custom field or the value of the list item id for list fields|

<h3 id="tocS_Employee">Employee</h3>

<a id="schemaemployee"></a>
<a id="schema_Employee"></a>
<a id="tocSemployee"></a>
<a id="tocsemployee"></a>

```json
{
  "firstName": "string",
  "middleInitial": "string",
  "href": "string",
  "id": "string",
  "lastName": "string",
  "template": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|The first name of the employee|
|middleInitial|string|false|none|The middle initial of the employee|
|href|string|false|none|Hyperlink to the resource|
|id|string|false|none|Unique identifier of the related object|
|lastName|string|false|none|The last name of the employee|
|template|string|false|none|Hyperlink template to the resource|

<h3 id="tocS_Expense">Expense</h3>

<a id="schemaexpense"></a>
<a id="schema_Expense"></a>
<a id="tocSexpense"></a>
<a id="tocsexpense"></a>

```json
{
  "allocations": [
    {
      "allocationAmount": {
        "currency": "string",
        "value": 1
      },
      "allocationId": "string",
      "approvedAmount": {
        "currency": "string",
        "value": 1
      },
      "custom1": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom10": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom11": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom12": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom13": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom14": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom15": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom16": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom17": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom18": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom19": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom2": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom20": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom3": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom4": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom5": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom6": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom7": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom8": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom9": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "expenseId": "string",
      "percentEdited": false,
      "percentage": 0,
      "postedAmount": {
        "currency": "string",
        "value": 1
      },
      "systemAllocation": false
    }
  ],
  "approvedAmount": {
    "currency": "string",
    "value": 1
  },
  "budgetAccrualDate": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
  "businessPurpose": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom21": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom22": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom23": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom24": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom25": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom26": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom27": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom28": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom29": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom30": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom31": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom32": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom33": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom34": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom35": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom36": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom37": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom38": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom39": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom40": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "exchangeRate": {
    "operation": "MULTIPLY",
    "value": 0
  },
  "expenseType": {
    "href": "string",
    "id": "string",
    "name": "string"
  },
  "href": "string",
  "id": "string",
  "lastComment": "string",
  "lastModifiedDate": "string",
  "location": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "orgUnit1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "orgUnit6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "parentRequest": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "postedAmount": {
    "currency": "string",
    "value": 1
  },
  "remainingAmount": {
    "currency": "string",
    "value": 1
  },
  "source": "CASH_ADVANCE",
  "transactionAmount": {
    "currency": "string",
    "value": 1
  },
  "transactionDate": "string",
  "travelAllowance": {
    "dailyTravelAllowanceId": "string"
  },
  "tripData": {
    "agencyBooked": false,
    "legs": [
      {
        "class": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "classOfService": "string",
        "comment": "string",
        "custom1": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom10": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom11": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom12": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom13": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom14": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom15": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom16": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom17": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom18": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom19": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom2": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom20": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom21": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom22": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom23": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom24": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom25": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom26": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom27": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom28": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom29": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom3": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom30": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom31": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom32": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom33": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom34": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom35": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom36": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom37": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom38": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom39": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom4": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom40": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom5": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom6": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom7": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom8": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "custom9": {
          "code": "string",
          "href": "string",
          "value": "string"
        },
        "endDate": "string",
        "endLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "endLocationDetail": "string",
        "endTime": "string",
        "id": "string",
        "returnLeg": false,
        "segmentLocator": "string",
        "startDate": "string",
        "startLocation": {
          "city": "string",
          "countryCode": "string",
          "countrySubDivisionCode": "string",
          "iataCode": "string",
          "id": "string",
          "latitude": 0,
          "locationCode": "string",
          "locationType": "string",
          "longitude": 0,
          "name": "string"
        },
        "startLocationDetail": "string",
        "startTime": "string",
        "vendorName": "string"
      }
    ],
    "segmentType": {
      "category": "REQ_SEG_AIRFR",
      "code": "string"
    },
    "selfBooked": false,
    "tripType": "ONE_WAY"
  },
  "vendor": {
    "id": "string",
    "name": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocations|[[Allocation](#schemaallocation)]|false|none|List of the allocations composing this segment|
|approvedAmount|[Amount](#schemaamount)|false|none|The approved amount of the expected expense|
|budgetAccrualDate|string|false|none|The date to determine which budgets are affected (in the format yyyy-MM-dd’T’HH:mm:ss.SSS’Z’)|
|businessPurpose|string|false|none|The purpose of the expected expense|
|comments|[ResourceLink](#schemaresourcelink)|false|none|Comment history of the expected expense|
|custom1|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom10|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom11|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom12|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom13|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom14|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom15|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom16|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom17|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom18|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom19|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom2|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom20|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom21|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom22|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom23|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom24|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom25|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom26|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom27|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom28|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom29|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom3|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom30|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom31|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom32|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom33|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom34|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom35|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom36|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom37|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom38|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom39|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom4|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom40|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom5|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom6|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom7|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom8|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom9|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|exchangeRate|[ExchangeRate](#schemaexchangerate)|false|none|The exchange rate that applies to the expected expense|
|expenseType|[ExpenseType](#schemaexpensetype)|false|none|The expense type of the expected expense|
|href|string|false|none|none|
|id|string|false|none|The unique identifier of the expected expense|
|lastComment|string|false|none|The last comment of the expected expense|
|lastModifiedDate|string|false|none|The date when this expense was last modified|
|location|[Location](#schemalocation)|false|none|The location of the expected expense|
|orgUnit1|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|orgUnit2|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|orgUnit3|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|orgUnit4|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|orgUnit5|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|orgUnit6|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|parentRequest|[ResourceLink](#schemaresourcelink)|false|none|The parent Request of the expected expense|
|postedAmount|[Amount](#schemaamount)|false|none|The posted amount of the expected expense|
|remainingAmount|[Amount](#schemaamount)|false|none|The remaining amount of the expected expense|
|source|string|false|none|The source that created the expected expense. It can be CASH_ADVANCE or TRAVEL_ALLOWANCE. This field will be empty in any other case.|
|transactionAmount|[Amount](#schemaamount)|false|none|The amount of the expected expense, in the transaction currency paid to the vendor|
|transactionDate|string|true|none|The date of the transaction|
|travelAllowance|[TravelAllowance](#schematravelallowance)|false|none|The travel allowance|
|tripData|[TripData](#schematripdata)|false|none|This property is non empty if this expected expense represents a travel Segment (AIR, CAR, HOTEL, ...)|
|vendor|[Vendor](#schemavendor)|false|none|The vendor of the expected expense|

###### Enumerated Values

|Property|Value|
|---|---|
|source|CASH_ADVANCE|
|source|TRAVEL_ALLOWANCE|
|source|AGENCY_FEE|

<h3 id="tocS_ExceptionSource">ExceptionSource</h3>

<a id="schemaexceptionsource"></a>
<a id="schema_ExceptionSource"></a>
<a id="tocSexceptionsource"></a>
<a id="tocsexceptionsource"></a>

```json
{
  "href": "string",
  "id": "string",
  "type": "ALLOCATION"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The link to the unique identifier of source. Will be empty if source is ALLOCATION or CASH_ADVANCE.|
|id|string|false|none|The unique identifier of the source|
|type|string|false|none|Defines the type of the source which can be one of "ALLOCATION", "CASH_ADVANCE", "EXPENSE", "HEADER"|

###### Enumerated Values

|Property|Value|
|---|---|
|type|ALLOCATION|
|type|CASH_ADVANCE|
|type|EXPENSE|
|type|HEADER|

<h3 id="tocS_ExchangeRate">ExchangeRate</h3>

<a id="schemaexchangerate"></a>
<a id="schema_ExchangeRate"></a>
<a id="tocSexchangerate"></a>
<a id="tocsexchangerate"></a>

```json
{
  "operation": "MULTIPLY",
  "value": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Exchange rate operation. Possible values: 'MULTIPLY' or 'DIVIDE'|
|value|number|true|none|Exchange rate value|

###### Enumerated Values

|Property|Value|
|---|---|
|operation|MULTIPLY|
|operation|DIVIDE|

<h3 id="tocS_ExpenseType">ExpenseType</h3>

<a id="schemaexpensetype"></a>
<a id="schema_ExpenseType"></a>
<a id="tocSexpensetype"></a>
<a id="tocsexpensetype"></a>

```json
{
  "href": "string",
  "id": "string",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|Hyperlink to the resource for the expense type definition|
|id|string|true|none|Unique identifier of the expense type|
|name|string|false|none|Name of the expense type|

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
|exception|string|false|none|none|
|message|string|false|none|none|
|path|string|false|none|none|
|timestamp|integer(int64)|false|none|none|

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
|href|string|false|none|Hyperlink to the resource.|
|rel|string|false|none|Relation type as defined by the server.|

<h3 id="tocS_ListItemField">ListItemField</h3>

<a id="schemalistitemfield"></a>
<a id="schema_ListItemField"></a>
<a id="tocSlistitemfield"></a>
<a id="tocslistitemfield"></a>

```json
{
  "code": "string",
  "href": "string",
  "value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The short code of the list item.|
|href|string|false|none|Hyperlink to the resource for the list item.|
|value|string|false|none|The value of the list item id.|

<h3 id="tocS_Location">Location</h3>

<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "city": "string",
  "countryCode": "string",
  "countrySubDivisionCode": "string",
  "iataCode": "string",
  "id": "string",
  "latitude": 0,
  "locationCode": "string",
  "locationType": "string",
  "longitude": 0,
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city name of the location|
|countryCode|string|false|none|The ISO 3166-1 country code|
|countrySubDivisionCode|string|false|none|The ISO 3166-2 country sub code|
|iataCode|string|false|none|The IATA code for the location|
|id|string|false|none|The id of the location|
|latitude|number|false|none|The latitude of the location|
|locationCode|string|false|none|The code of the location|
|locationType|string|false|none|The type of the location|
|longitude|number|false|none|The longitude of the location|
|name|string|false|none|The name of the location|

<h3 id="tocS_PageResultOfResourceOfRequest">PageResultOfResourceOfRequest</h3>

<a id="schemapageresultofresourceofrequest"></a>
<a id="schema_PageResultOfResourceOfRequest"></a>
<a id="tocSpageresultofresourceofrequest"></a>
<a id="tocspageresultofresourceofrequest"></a>

```json
{
  "data": [
    {
      "approvalLimitDate": "string",
      "approvalStatus": {
        "code": "APPROVED",
        "name": "string"
      },
      "approved": true,
      "approver": {
        "firstName": "string",
        "middleInitial": "string",
        "href": "string",
        "id": "string",
        "lastName": "string",
        "template": "string"
      },
      "authorizedDate": "string",
      "businessPurpose": "string",
      "canceledPostApproval": true,
      "closed": false,
      "comment": "string",
      "comments": {
        "href": "string",
        "id": "string",
        "template": "string"
      },
      "creationDate": "string",
      "custom1": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom10": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom11": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom12": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom13": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom14": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom15": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom16": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom17": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom18": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom19": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom2": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom20": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom3": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom4": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom5": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom6": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom7": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom8": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom9": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "endDate": "string",
      "endTime": "string",
      "everSentBack": false,
      "expenses": [
        {
          "href": "string",
          "id": "string",
          "template": "string"
        }
      ],
      "extensionOf": {
        "requestId": "string"
      },
      "highestExceptionLevel": "NONE",
      "href": "string",
      "id": "string",
      "lastModified": "string",
      "mainDestination": {
        "city": "string",
        "countryCode": "string",
        "countrySubDivisionCode": "string",
        "iataCode": "string",
        "id": "string",
        "latitude": 0,
        "locationCode": "string",
        "locationType": "string",
        "longitude": 0,
        "name": "string"
      },
      "name": "string",
      "operations": [
        {
          "href": "string",
          "rel": "string"
        }
      ],
      "owner": {
        "firstName": "string",
        "middleInitial": "string",
        "href": "string",
        "id": "string",
        "lastName": "string",
        "template": "string"
      },
      "pendingApproval": true,
      "policy": {
        "href": "string",
        "id": "string",
        "template": "string"
      },
      "requestId": "string",
      "startDate": "string",
      "startTime": "string",
      "submitDate": "string",
      "totalApprovedAmount": {
        "currency": "string",
        "value": 1
      },
      "totalPostedAmount": {
        "currency": "string",
        "value": 1
      },
      "totalRemainingAmount": {
        "currency": "string",
        "value": 1
      },
      "travelAgency": {
        "href": "string",
        "id": "string",
        "template": "string"
      },
      "type": {
        "code": "string",
        "label": "string"
      }
    }
  ],
  "operations": [
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
|data|[[Request](#schemarequest)]|false|none|none|
|operations|[[Link](#schemalink)]|false|none|none|

<h3 id="tocS_Request">Request</h3>

<a id="schemarequest"></a>
<a id="schema_Request"></a>
<a id="tocSrequest"></a>
<a id="tocsrequest"></a>

```json
{
  "approvalLimitDate": "string",
  "approvalStatus": {
    "code": "APPROVED",
    "name": "string"
  },
  "approved": true,
  "approver": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "authorizedDate": "string",
  "businessPurpose": "string",
  "canceledPostApproval": true,
  "closed": false,
  "comment": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "creationDate": "string",
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "endDate": "string",
  "endTime": "string",
  "everSentBack": false,
  "expenses": [
    {
      "href": "string",
      "id": "string",
      "template": "string"
    }
  ],
  "extensionOf": {
    "requestId": "string"
  },
  "highestExceptionLevel": "NONE",
  "href": "string",
  "id": "string",
  "lastModified": "string",
  "mainDestination": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "name": "string",
  "operations": [
    {
      "href": "string",
      "rel": "string"
    }
  ],
  "owner": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "pendingApproval": true,
  "policy": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "requestId": "string",
  "startDate": "string",
  "startTime": "string",
  "submitDate": "string",
  "totalApprovedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalPostedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalRemainingAmount": {
    "currency": "string",
    "value": 1
  },
  "travelAgency": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "type": {
    "code": "string",
    "label": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalLimitDate|string|false|none|The date by which the Request must be approved. This element appears only when integrated with Concur Travel|
|approvalStatus|[ApprovalStatus](#schemaapprovalstatus)|false|none|The approval status of the Request|
|approved|boolean|false|none|Indicates whether this Request is approved|
|approver|[Employee](#schemaemployee)|false|none|The approver of this Request. Null when Request is in an approval status different from SUBMITTED|
|authorizedDate|string|false|none|For an approved Request, the date the approval process was completed|
|businessPurpose|string|false|none|The business purpose of the Request|
|canceledPostApproval|boolean|false|none|Indicates whether this Request was canceled post approval|
|closed|boolean|false|none|Indicates whether the Request is closed|
|comment|string|false|none|The last comment attached to this Request|
|comments|[ResourceLink](#schemaresourcelink)|false|none|Comment history of this Request|
|creationDate|string|false|none|The date when the Request was created (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')|
|custom1|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom10|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom11|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom12|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom13|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom14|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom15|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom16|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom17|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom18|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom19|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom2|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom20|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom3|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom4|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom5|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom6|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom7|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom8|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom9|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|endDate|string|false|none|The end date of the Request (in the format YYYY-MM-DD)|
|endTime|string|false|none|The end time of the Request (in the format HH:MM)|
|everSentBack|boolean|false|none|Indicates whether the Request has ever been sent back to the employee|
|expenses|[[ResourceLink](#schemaresourcelink)]|false|none|Expected expenses attached to this Request|
|extensionOf|[RequestLink](#schemarequestlink)|false|none|The Request that this Request is an extension of, or addendum to|
|highestExceptionLevel|string|false|none|The highest level of exception contained in this Request. One of { NONE, WARNING, ERROR }|
|href|string|false|none|Hyperlink to the resource for this Request|
|id|string|false|none|The unique identifier of the Request|
|lastModified|string|false|none|The date when the Request was last modified|
|mainDestination|[Location](#schemalocation)|false|none|The main destination of the Request|
|name|string|false|none|The name of the Request|
|operations|[[Link](#schemalink)]|false|none|none|
|owner|[Employee](#schemaemployee)|false|none|The employee who owns the Request|
|pendingApproval|boolean|false|none|Indicates whether this Request is pending approval|
|policy|[ResourceLink](#schemaresourcelink)|false|none|The policy that applies to the Request|
|requestId|string|false|none|The public key of the Request (unique per customer)|
|startDate|string|false|none|The start date of the Request (in the format YYYY-MM-DD)|
|startTime|string|false|none|The start time of the Request (in the format HH:MM)|
|submitDate|string|false|none|The date when the Request was submitted (last submit date in case of recall)|
|totalApprovedAmount|[Amount](#schemaamount)|false|none|The total amount of approved expenses in the Request, expressed in the reimbursement currency of the employee at the time they created the Request|
|totalPostedAmount|[Amount](#schemaamount)|false|none|The total amount of the Request, expressed in the reimbursement currency of the employee at the time he created the Request|
|totalRemainingAmount|[Amount](#schemaamount)|false|none|The total amount not included in an Expense report, expressed in the reimbursement currency of the employee at the time he created the Request|
|travelAgency|[ResourceLink](#schemaresourcelink)|false|none|The travel agency office that is managing the trip associated to this Request|
|type|[RequestType](#schemarequesttype)|false|none|The type of the Request, inherited from the Request policy type|

###### Enumerated Values

|Property|Value|
|---|---|
|highestExceptionLevel|NONE|
|highestExceptionLevel|WARNING|
|highestExceptionLevel|ERROR|

<h3 id="tocS_RequestDetails">RequestDetails</h3>

<a id="schemarequestdetails"></a>
<a id="schema_RequestDetails"></a>
<a id="tocSrequestdetails"></a>
<a id="tocsrequestdetails"></a>

```json
{
  "approvalLimitDate": "string",
  "approvalStatus": {
    "code": "APPROVED",
    "name": "string"
  },
  "approved": true,
  "approver": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "authorizedDate": "string",
  "businessPurpose": "string",
  "canceledPostApproval": true,
  "cashAdvances": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "closed": false,
  "comment": "string",
  "comments": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "creationDate": "string",
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "endDate": "string",
  "endTime": "string",
  "everSentBack": false,
  "exceptions": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "expenses": [
    {
      "href": "string",
      "id": "string",
      "template": "string"
    }
  ],
  "extensionOf": {
    "requestId": "string"
  },
  "highestExceptionLevel": "NONE",
  "href": "string",
  "id": "string",
  "lastModified": "string",
  "mainDestination": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "name": "string",
  "operations": [
    {
      "href": "string",
      "rel": "string"
    }
  ],
  "owner": {
    "firstName": "string",
    "middleInitial": "string",
    "href": "string",
    "id": "string",
    "lastName": "string",
    "template": "string"
  },
  "pendingApproval": true,
  "policy": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "requestId": "string",
  "startDate": "string",
  "startTime": "string",
  "submitDate": "string",
  "totalApprovedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalPostedAmount": {
    "currency": "string",
    "value": 1
  },
  "totalRemainingAmount": {
    "currency": "string",
    "value": 1
  },
  "travelAgency": {
    "href": "string",
    "id": "string",
    "template": "string"
  },
  "type": {
    "code": "string",
    "label": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalLimitDate|string|false|none|The date by which the Request must be approved. This element appears only when integrated with Concur Travel|
|approvalStatus|[ApprovalStatus](#schemaapprovalstatus)|false|none|The approval status of the Request|
|approved|boolean|false|none|Indicates whether this Request is approved|
|approver|[Employee](#schemaemployee)|false|none|The approver of this Request. Null when Request is in an approval status different from SUBMITTED|
|authorizedDate|string|false|none|For an approved Request, the date the approval process was completed|
|businessPurpose|string|false|none|The business purpose of the Request|
|canceledPostApproval|boolean|false|none|Indicates whether this Request was canceled post approval|
|cashAdvances|[ResourceLink](#schemaresourcelink)|false|none|The cash advances attached to this Request|
|closed|boolean|false|none|Indicates whether the Request is closed|
|comment|string|false|none|The last comment attached to this Request|
|comments|[ResourceLink](#schemaresourcelink)|false|none|Comment history of this Request|
|creationDate|string|false|none|The date when the Request was created (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')|
|custom1|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom10|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom11|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom12|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom13|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom14|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom15|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom16|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom17|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom18|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom19|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom2|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom20|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom3|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom4|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom5|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom6|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom7|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom8|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom9|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|endDate|string|false|none|The end date of the Request (in the format YYYY-MM-DD)|
|endTime|string|false|none|The end time of the Request (in the format HH:MM)|
|everSentBack|boolean|false|none|Indicates whether the Request has ever been sent back to the employee|
|exceptions|[ResourceLink](#schemaresourcelink)|false|none|List of exceptions of this Request|
|expenses|[[ResourceLink](#schemaresourcelink)]|false|none|Expected expenses attached to this Request|
|extensionOf|[RequestLink](#schemarequestlink)|false|none|The Request that this Request is an extension of, or addendum to|
|highestExceptionLevel|string|false|none|The highest level of exception contained in this Request. One of { NONE, WARNING, ERROR }|
|href|string|false|none|Hyperlink to the resource for this Request|
|id|string|false|none|The unique identifier of the Request|
|lastModified|string|false|none|The date when the Request was last modified|
|mainDestination|[Location](#schemalocation)|false|none|The main destination of the Request|
|name|string|false|none|The name of the Request|
|operations|[[Link](#schemalink)]|false|none|none|
|owner|[Employee](#schemaemployee)|false|none|The employee who owns the Request|
|pendingApproval|boolean|false|none|Indicates whether this Request is pending approval|
|policy|[ResourceLink](#schemaresourcelink)|false|none|The policy that applies to the Request|
|requestId|string|false|none|The public key of the Request (unique per customer)|
|startDate|string|false|none|The start date of the Request (in the format YYYY-MM-DD)|
|startTime|string|false|none|The start time of the Request (in the format HH:MM)|
|submitDate|string|false|none|The date when the Request was submitted (last submit date in case of recall)|
|totalApprovedAmount|[Amount](#schemaamount)|false|none|The total amount of approved expenses in the Request, expressed in the reimbursement currency of the employee at the time they created the Request|
|totalPostedAmount|[Amount](#schemaamount)|false|none|The total amount of the Request, expressed in the reimbursement currency of the employee at the time he created the Request|
|totalRemainingAmount|[Amount](#schemaamount)|false|none|The total amount not included in an Expense report, expressed in the reimbursement currency of the employee at the time he created the Request|
|travelAgency|[ResourceLink](#schemaresourcelink)|false|none|The travel agency office that is managing the trip associated to this Request|
|type|[RequestType](#schemarequesttype)|false|none|The type of the Request, inherited from the Request policy type|

###### Enumerated Values

|Property|Value|
|---|---|
|highestExceptionLevel|NONE|
|highestExceptionLevel|WARNING|
|highestExceptionLevel|ERROR|

<h3 id="tocS_RequestException">RequestException</h3>

<a id="schemarequestexception"></a>
<a id="schema_RequestException"></a>
<a id="tocSrequestexception"></a>
<a id="tocsrequestexception"></a>

```json
{
  "code": "string",
  "isBlocking": false,
  "level": 0,
  "message": "string",
  "parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "source": {
    "href": "string",
    "id": "string",
    "type": "ALLOCATION"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The system exception code defined for the exception. Example: BADCODE|
|isBlocking|boolean|false|none|Defines whether the exception will prevent the Request from being submitted|
|level|integer(int64)|false|none|The numeric level associated with the exception. Example: 99|
|message|string|false|none|The user-facing message defined for the exception|
|parameters|object|false|none|Parameters for the messages of the exception|
|» **additionalProperties**|[string]|false|none|none|
|source|[ExceptionSource](#schemaexceptionsource)|false|none|The source of the exception|

<h3 id="tocS_RequestLink">RequestLink</h3>

<a id="schemarequestlink"></a>
<a id="schema_RequestLink"></a>
<a id="tocSrequestlink"></a>
<a id="tocsrequestlink"></a>

```json
{
  "requestId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|The public id of the Request|

<h3 id="tocS_ResourceLink">ResourceLink</h3>

<a id="schemaresourcelink"></a>
<a id="schema_ResourceLink"></a>
<a id="tocSresourcelink"></a>
<a id="tocsresourcelink"></a>

```json
{
  "href": "string",
  "id": "string",
  "template": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|Hyperlink to the resource|
|id|string|false|none|Unique identifier of the related object|
|template|string|false|none|Hyperlink template to the resource|

<h3 id="tocS_RequestType">RequestType</h3>

<a id="schemarequesttype"></a>
<a id="schema_RequestType"></a>
<a id="tocSrequesttype"></a>
<a id="tocsrequesttype"></a>

```json
{
  "code": "string",
  "label": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The code of the type inherited from the Request policy type|
|label|string|false|none|The label of the type inherited from the Request policy type|

<h3 id="tocS_ResourceOfPolicy">ResourceOfPolicy</h3>

<a id="schemaresourceofpolicy"></a>
<a id="schema_ResourceOfPolicy"></a>
<a id="tocSresourceofpolicy"></a>
<a id="tocsresourceofpolicy"></a>

```json
{
  "href": "string",
  "id": "string",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|Hyperlink to the resource for this Request policy|
|id|string|false|none|Unique identifier of the Request policy|
|name|string|false|none|Name of the Request policy|

<h3 id="tocS_ResourceOfTravelAgency">ResourceOfTravelAgency</h3>

<a id="schemaresourceoftravelagency"></a>
<a id="schema_ResourceOfTravelAgency"></a>
<a id="tocSresourceoftravelagency"></a>
<a id="tocsresourceoftravelagency"></a>

```json
{
  "emailAddress": "string",
  "id": "string",
  "name": "string",
  "proposalType": "CWTF"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailAddress|string|false|none|The travel agency email address|
|id|string|false|none|The travel agency unique identifier|
|name|string|false|none|The travel agency office name|
|proposalType|string|false|none|The travel agency proposal type|

###### Enumerated Values

|Property|Value|
|---|---|
|proposalType|CWTF|
|proposalType|AEBT|
|proposalType|API|
|proposalType|NONE|

<h3 id="tocS_SegmentLeg">SegmentLeg</h3>

<a id="schemasegmentleg"></a>
<a id="schema_SegmentLeg"></a>
<a id="tocSsegmentleg"></a>
<a id="tocssegmentleg"></a>

```json
{
  "class": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "classOfService": "string",
  "comment": "string",
  "custom1": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom10": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom11": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom12": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom13": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom14": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom15": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom16": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom17": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom18": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom19": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom2": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom20": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom21": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom22": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom23": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom24": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom25": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom26": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom27": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom28": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom29": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom3": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom30": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom31": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom32": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom33": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom34": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom35": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom36": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom37": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom38": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom39": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom4": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom40": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom5": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom6": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom7": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom8": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "custom9": {
    "code": "string",
    "href": "string",
    "value": "string"
  },
  "endDate": "string",
  "endLocation": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "endLocationDetail": "string",
  "endTime": "string",
  "id": "string",
  "returnLeg": false,
  "segmentLocator": "string",
  "startDate": "string",
  "startLocation": {
    "city": "string",
    "countryCode": "string",
    "countrySubDivisionCode": "string",
    "iataCode": "string",
    "id": "string",
    "latitude": 0,
    "locationCode": "string",
    "locationType": "string",
    "longitude": 0,
    "name": "string"
  },
  "startLocationDetail": "string",
  "startTime": "string",
  "vendorName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|[ListItemField](#schemalistitemfield)|false|none|The class of the segment leg.|
|classOfService|string|false|none|The class of service of the segment leg. For example, in the case of an air segment, this field would contain the one-letter booking code: Y for economy class, or F for first class...|
|comment|string|false|none|A comment for this segment leg|
|custom1|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom10|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom11|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom12|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom13|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom14|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom15|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom16|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom17|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom18|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom19|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom2|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom20|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom21|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom22|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom23|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom24|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom25|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom26|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom27|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom28|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom29|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom3|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom30|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom31|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom32|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom33|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom34|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom35|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom36|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom37|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom38|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom39|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom4|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom40|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom5|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom6|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom7|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom8|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|custom9|[CustomField](#schemacustomfield)|false|none|The details from the Custom fields. These fields may not have data, depending on the configuration|
|endDate|string|false|none|The end date of the segment leg (in the format YYYY-MM-DD).It represents the arrival date of AIRFR and TRAIN segments, check out date for HOTEL or drop off for CARRT|
|endLocation|[Location](#schemalocation)|false|none|The end location of the segment leg|
|endLocationDetail|string|false|none|Additional details about the end location. It is used for HOTEL and CARRT segments.|
|endTime|string|false|none|The end time of the segment leg (in the format HH:MM). It is expressed in the local time of the end location|
|id|string|false|none|The unique identifier of the segment leg|
|returnLeg|boolean|false|none|This value indicates if the leg is a return leg or not.|
|segmentLocator|string|false|none|The identifier for Concur Travel segments|
|startDate|string|false|none|The start date of the segment leg (in the format YYYY-MM-DD). It represents the departure date of AIRFR and TRAIN segments, check in date for HOTEL or pickup for CARRT|
|startLocation|[Location](#schemalocation)|false|none|The start location of the segment leg (for HOTEL, this is empty)|
|startLocationDetail|string|false|none|Additional details about the start location. It is used for HOTEL and CARRT segments.|
|startTime|string|false|none|The start time of the segment leg (in the format HH:MM). It is expressed in the local time of the start location|
|vendorName|string|false|none|The name of the vendor of this segment leg.|

<h3 id="tocS_SegmentType">SegmentType</h3>

<a id="schemasegmenttype"></a>
<a id="schema_SegmentType"></a>
<a id="tocSsegmenttype"></a>
<a id="tocssegmenttype"></a>

```json
{
  "category": "REQ_SEG_AIRFR",
  "code": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The category of the segment type|
|code|string|false|none|The code of the segment type. This will most frequently be a String, but could also be an integer in the case of a custom expense typeFor example, would be category = REQ_SEG_AIRFR and code = AIRFR for a regular air segment, but category = REQ_SEG_AIRFR and code = 10325 for a custom air segment.|

###### Enumerated Values

|Property|Value|
|---|---|
|category|REQ_SEG_AIRFR|
|category|REQ_SEG_CARRT|
|category|REQ_SEG_HOTEL|
|category|REQ_SEG_LIMOF|
|category|REQ_SEG_RAILF|
|category|REQ_SEG_TAXIF|
|category|REQ_SEG_MISC|
|category|REQ_SEG_PARKG|
|category|REQ_SEG_DININ|
|category|REQ_SEG_EVENT|

<h3 id="tocS_TravelAllowance">TravelAllowance</h3>

<a id="schematravelallowance"></a>
<a id="schema_TravelAllowance"></a>
<a id="tocStravelallowance"></a>
<a id="tocstravelallowance"></a>

```json
{
  "dailyTravelAllowanceId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyTravelAllowanceId|string|false|none|The fixed daily travel allowance id associated with the expected expense|

<h3 id="tocS_TripData">TripData</h3>

<a id="schematripdata"></a>
<a id="schema_TripData"></a>
<a id="tocStripdata"></a>
<a id="tocstripdata"></a>

```json
{
  "agencyBooked": false,
  "legs": [
    {
      "class": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "classOfService": "string",
      "comment": "string",
      "custom1": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom10": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom11": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom12": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom13": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom14": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom15": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom16": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom17": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom18": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom19": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom2": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom20": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom21": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom22": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom23": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom24": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom25": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom26": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom27": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom28": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom29": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom3": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom30": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom31": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom32": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom33": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom34": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom35": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom36": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom37": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom38": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom39": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom4": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom40": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom5": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom6": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom7": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom8": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "custom9": {
        "code": "string",
        "href": "string",
        "value": "string"
      },
      "endDate": "string",
      "endLocation": {
        "city": "string",
        "countryCode": "string",
        "countrySubDivisionCode": "string",
        "iataCode": "string",
        "id": "string",
        "latitude": 0,
        "locationCode": "string",
        "locationType": "string",
        "longitude": 0,
        "name": "string"
      },
      "endLocationDetail": "string",
      "endTime": "string",
      "id": "string",
      "returnLeg": false,
      "segmentLocator": "string",
      "startDate": "string",
      "startLocation": {
        "city": "string",
        "countryCode": "string",
        "countrySubDivisionCode": "string",
        "iataCode": "string",
        "id": "string",
        "latitude": 0,
        "locationCode": "string",
        "locationType": "string",
        "longitude": 0,
        "name": "string"
      },
      "startLocationDetail": "string",
      "startTime": "string",
      "vendorName": "string"
    }
  ],
  "segmentType": {
    "category": "REQ_SEG_AIRFR",
    "code": "string"
  },
  "selfBooked": false,
  "tripType": "ONE_WAY"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agencyBooked|boolean|false|none|Indicates whether this trip has been booked by a Travel Agency or not. True if this trip is (or has to be) handled by a Travel Agency.|
|legs|[[SegmentLeg](#schemasegmentleg)]|false|none|List of the legs composing this segment|
|segmentType|[SegmentType](#schemasegmenttype)|true|none|The type of the segment|
|selfBooked|boolean|false|none|True if this trip has been reserved by Concur Travel, or if Concur Travel has retrieved the trip information in the GDS|
|tripType|string|false|none|Indicates the type of this trip. Possible values are: ONE_WAY, ROUND_TRIP, MULTI_STOPS|

###### Enumerated Values

|Property|Value|
|---|---|
|tripType|ONE_WAY|
|tripType|ROUND_TRIP|
|tripType|MULTI_STOPS|

<h3 id="tocS_Vendor">Vendor</h3>

<a id="schemavendor"></a>
<a id="schema_Vendor"></a>
<a id="tocSvendor"></a>
<a id="tocsvendor"></a>

```json
{
  "id": "string",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The vendor identifier of the expected expense|
|name|string|false|none|The vendor description of the expected expense|

<h3 id="tocS_WorkflowAction">WorkflowAction</h3>

<a id="schemaworkflowaction"></a>
<a id="schema_WorkflowAction"></a>
<a id="tocSworkflowaction"></a>
<a id="tocsworkflowaction"></a>

```json
"string"

```

Comment when the workflow action is ‘sendback’.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Comment when the workflow action is ‘sendback’.|

