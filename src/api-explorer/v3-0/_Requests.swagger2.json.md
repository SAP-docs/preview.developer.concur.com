---
title: Requests v3.0
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

<h1 id="requests">Requests v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Requests allow travelers to submit travel plans, expected expenses, and expected cash advance needs prior to spending funds. This API provides methods to view, create, update, submit, or recall requests owned by

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

<h1 id="requests-resources">Resources</h1>

## get__travelrequest_requests_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id} \
  -H 'Accept: application/json'

```

```http
GET https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}", data)
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
  "AgencyOfficeName": "string",
  "AllocationFormID": "string",
  "ApprovalLimitDate": "2019-08-24T14:15:22Z",
  "ApprovalStatusCode": "string",
  "ApprovalStatusName": "string",
  "AuthorizedDate": "2019-08-24T14:15:22Z",
  "CashAdvances": {
    "AmountRequested": "string",
    "ApprovalStatusName": "string",
    "Comments": {
      "AuthorFirstName": "string",
      "AuthorLastName": "string",
      "CommentDateTime": "2019-08-24T14:15:22Z",
      "IsLatest": true,
      "Value": "string"
    },
    "CurrencyCode": "string",
    "CurrencyName": "string",
    "EmployeeCurrencyCode": "string",
    "EmployeeCurrencyName": "string",
    "ExchangeRate": "string",
    "IssueDate": "2019-08-24T14:15:22Z",
    "RequestDate": "2019-08-24T14:15:22Z",
    "StartingBalance": "string"
  },
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
  "Custom1": {
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
  "Custom2": {
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
  "EmployeeName": "string",
  "EndDate": "string",
  "EndTime": "string",
  "Entries": {
    "Allocations": {
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
      "Percentage": "string"
    },
    "ApprovedAmount": "string",
    "Comments": {
      "AuthorFirstName": "string",
      "AuthorLastName": "string",
      "CommentDateTime": "2019-08-24T14:15:22Z",
      "IsLatest": true,
      "Value": "string"
    },
    "Custom1": {
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
    "Custom2": {
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
    "Custom3": {
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
    "Custom4": {
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
    "EntryDescription": "string",
    "EntryFormID": "string",
    "Exceptions": {
      "Code": "string",
      "Level": 0,
      "Message": "string"
    },
    "ExchangeRate": "string",
    "ExpenseTypeName": "string",
    "ForeignAmount": "string",
    "ForeignCurrencyCode": "string",
    "ForeignCurrencyName": "string",
    "LastModifiedDate": "2019-08-24T14:15:22Z",
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
    "PostedAmount": "string",
    "RemainingAmount": "string",
    "Segments": {
      "ApprovedAmount": "string",
      "ArrivalDate": "string",
      "ArrivalTime": "string",
      "Class": {
        "Code": "string",
        "ListItemID": "string",
        "Value": "string"
      },
      "ClassOfServiceCode": "string",
      "Comments": {
        "AuthorFirstName": "string",
        "AuthorLastName": "string",
        "CommentDateTime": "2019-08-24T14:15:22Z",
        "IsLatest": true,
        "Value": "string"
      },
      "Custom1": {
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
      "Custom2": {
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
      "Custom3": {
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
      "Custom4": {
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
      "DepartureDate": "string",
      "DepartureTime": "string",
      "Exceptions": {
        "Code": "string",
        "Level": 0,
        "Message": "string"
      },
      "ExchangeRate": "string",
      "FlightNumber": "string",
      "ForeignAmount": "string",
      "ForeignCurrencyCode": "string",
      "ForeignCurrencyName": "string",
      "FormTypeCode": "string",
      "FromLocationAirportName": "string",
      "FromLocationCode": "string",
      "FromLocationCountryCode": "string",
      "FromLocationDetail": "string",
      "FromLocationIataCode": "string",
      "FromLocationID": "string",
      "FromLocationIsAirport": true,
      "FromLocationName": "string",
      "FromLocationSubCountryCode": "string",
      "FromLocationVendor": "string",
      "IsAgencyBooked": "string",
      "IsSelfBooked": "string",
      "LastModifiedDate": "2019-08-24T14:15:22Z",
      "OutboundSegmentID": "string",
      "PostedAmount": "string",
      "RecordLocator": "string",
      "RemainingAmount": "string",
      "SegmentFormID": "string",
      "SegmentLocator": "string",
      "SegmentType": "string",
      "SegmentTypeCode": "string",
      "ToLocationAirportName": "string",
      "ToLocationCode": "string",
      "ToLocationCountryCode": "string",
      "ToLocationDetail": "string",
      "ToLocationIataCode": "string",
      "ToLocationID": "string",
      "ToLocationIsAirport": true,
      "ToLocationName": "string",
      "ToLocationSubCountryCode": "string",
      "ToLocationVendor": "string",
      "TripLocator": "string",
      "VendorName": "string"
    },
    "TransactionDate": "2019-08-24T14:15:22Z",
    "TripType": null
  },
  "EverSentBack": "string",
  "Exceptions": {
    "Code": "string",
    "Level": 0,
    "Message": "string"
  },
  "ExtensionOf": "string",
  "HasException": "string",
  "HeaderFormID": "string",
  "LastModifiedDate": "2019-08-24T14:15:22Z",
  "LoginID": "string",
  "Name": "string",
  "PolicyID": "string",
  "PolicyName": "string",
  "Purpose": "string",
  "RequestID": "string",
  "StartDate": "string",
  "StartTime": "string",
  "SubmitDate": "2019-08-24T14:15:22Z",
  "TotalApprovedAmount": "string",
  "TotalPostedAmount": "string",
  "TotalRemainingAmount": "string",
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
<Request>
  <AgencyOfficeName>string</AgencyOfficeName>
  <AllocationFormID>string</AllocationFormID>
  <ApprovalLimitDate>2019-08-24T14:15:22Z</ApprovalLimitDate>
  <ApprovalStatusCode>string</ApprovalStatusCode>
  <ApprovalStatusName>string</ApprovalStatusName>
  <AuthorizedDate>2019-08-24T14:15:22Z</AuthorizedDate>
  <CashAdvances>
    <AmountRequested>string</AmountRequested>
    <ApprovalStatusName>string</ApprovalStatusName>
    <Comments>
      <AuthorFirstName>string</AuthorFirstName>
      <AuthorLastName>string</AuthorLastName>
      <CommentDateTime>2019-08-24T14:15:22Z</CommentDateTime>
      <IsLatest>true</IsLatest>
      <Value>string</Value>
    </Comments>
    <CurrencyCode>string</CurrencyCode>
    <CurrencyName>string</CurrencyName>
    <EmployeeCurrencyCode>string</EmployeeCurrencyCode>
    <EmployeeCurrencyName>string</EmployeeCurrencyName>
    <ExchangeRate>string</ExchangeRate>
    <IssueDate>2019-08-24T14:15:22Z</IssueDate>
    <RequestDate>2019-08-24T14:15:22Z</RequestDate>
    <StartingBalance>string</StartingBalance>
  </CashAdvances>
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
  <Custom1>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom1>
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
  <Custom2>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom2>
  <Custom20>
    <Code>string</Code>
    <ListItemID>string</ListItemID>
    <Type>string</Type>
    <Value>string</Value>
  </Custom20>
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
  <EmployeeName>string</EmployeeName>
  <EndDate>string</EndDate>
  <EndTime>string</EndTime>
  <Entries>
    <Allocations>
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
      <Percentage>string</Percentage>
    </Allocations>
    <ApprovedAmount>string</ApprovedAmount>
    <Comments>
      <AuthorFirstName>string</AuthorFirstName>
      <AuthorLastName>string</AuthorLastName>
      <CommentDateTime>2019-08-24T14:15:22Z</CommentDateTime>
      <IsLatest>true</IsLatest>
      <Value>string</Value>
    </Comments>
    <Custom1>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom1>
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
    <Custom2>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom2>
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
    <Custom3>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom3>
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
    <Custom4>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom4>
    <Custom40>
      <Code>string</Code>
      <ListItemID>string</ListItemID>
      <Type>string</Type>
      <Value>string</Value>
    </Custom40>
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
    <EntryDescription>string</EntryDescription>
    <EntryFormID>string</EntryFormID>
    <Exceptions>
      <Code>string</Code>
      <Level>0</Level>
      <Message>string</Message>
    </Exceptions>
    <ExchangeRate>string</ExchangeRate>
    <ExpenseTypeName>string</ExpenseTypeName>
    <ForeignAmount>string</ForeignAmount>
    <ForeignCurrencyCode>string</ForeignCurrencyCode>
    <ForeignCurrencyName>string</ForeignCurrencyName>
    <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
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
    <PostedAmount>string</PostedAmount>
    <RemainingAmount>string</RemainingAmount>
    <Segments>
      <ApprovedAmount>string</ApprovedAmount>
      <ArrivalDate>string</ArrivalDate>
      <ArrivalTime>string</ArrivalTime>
      <Class>
        <Code>string</Code>
        <ListItemID>string</ListItemID>
        <Value>string</Value>
      </Class>
      <ClassOfServiceCode>string</ClassOfServiceCode>
      <Comments>
        <AuthorFirstName>string</AuthorFirstName>
        <AuthorLastName>string</AuthorLastName>
        <CommentDateTime>2019-08-24T14:15:22Z</CommentDateTime>
        <IsLatest>true</IsLatest>
        <Value>string</Value>
      </Comments>
      <Custom1>
        <Code>string</Code>
        <ListItemID>string</ListItemID>
        <Type>string</Type>
        <Value>string</Value>
      </Custom1>
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
      <Custom2>
        <Code>string</Code>
        <ListItemID>string</ListItemID>
        <Type>string</Type>
        <Value>string</Value>
      </Custom2>
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
      <Custom3>
        <Code>string</Code>
        <ListItemID>string</ListItemID>
        <Type>string</Type>
        <Value>string</Value>
      </Custom3>
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
      <Custom4>
        <Code>string</Code>
        <ListItemID>string</ListItemID>
        <Type>string</Type>
        <Value>string</Value>
      </Custom4>
      <Custom40>
        <Code>string</Code>
        <ListItemID>string</ListItemID>
        <Type>string</Type>
        <Value>string</Value>
      </Custom40>
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
      <DepartureDate>string</DepartureDate>
      <DepartureTime>string</DepartureTime>
      <Exceptions>
        <Code>string</Code>
        <Level>0</Level>
        <Message>string</Message>
      </Exceptions>
      <ExchangeRate>string</ExchangeRate>
      <FlightNumber>string</FlightNumber>
      <ForeignAmount>string</ForeignAmount>
      <ForeignCurrencyCode>string</ForeignCurrencyCode>
      <ForeignCurrencyName>string</ForeignCurrencyName>
      <FormTypeCode>string</FormTypeCode>
      <FromLocationAirportName>string</FromLocationAirportName>
      <FromLocationCode>string</FromLocationCode>
      <FromLocationCountryCode>string</FromLocationCountryCode>
      <FromLocationDetail>string</FromLocationDetail>
      <FromLocationIataCode>string</FromLocationIataCode>
      <FromLocationID>string</FromLocationID>
      <FromLocationIsAirport>true</FromLocationIsAirport>
      <FromLocationName>string</FromLocationName>
      <FromLocationSubCountryCode>string</FromLocationSubCountryCode>
      <FromLocationVendor>string</FromLocationVendor>
      <IsAgencyBooked>string</IsAgencyBooked>
      <IsSelfBooked>string</IsSelfBooked>
      <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
      <OutboundSegmentID>string</OutboundSegmentID>
      <PostedAmount>string</PostedAmount>
      <RecordLocator>string</RecordLocator>
      <RemainingAmount>string</RemainingAmount>
      <SegmentFormID>string</SegmentFormID>
      <SegmentLocator>string</SegmentLocator>
      <SegmentType>string</SegmentType>
      <SegmentTypeCode>string</SegmentTypeCode>
      <ToLocationAirportName>string</ToLocationAirportName>
      <ToLocationCode>string</ToLocationCode>
      <ToLocationCountryCode>string</ToLocationCountryCode>
      <ToLocationDetail>string</ToLocationDetail>
      <ToLocationIataCode>string</ToLocationIataCode>
      <ToLocationID>string</ToLocationID>
      <ToLocationIsAirport>true</ToLocationIsAirport>
      <ToLocationName>string</ToLocationName>
      <ToLocationSubCountryCode>string</ToLocationSubCountryCode>
      <ToLocationVendor>string</ToLocationVendor>
      <TripLocator>string</TripLocator>
      <VendorName>string</VendorName>
    </Segments>
    <TransactionDate>2019-08-24T14:15:22Z</TransactionDate>
    <TripType/>
  </Entries>
  <EverSentBack>string</EverSentBack>
  <Exceptions>
    <Code>string</Code>
    <Level>0</Level>
    <Message>string</Message>
  </Exceptions>
  <ExtensionOf>string</ExtensionOf>
  <HasException>string</HasException>
  <HeaderFormID>string</HeaderFormID>
  <LastModifiedDate>2019-08-24T14:15:22Z</LastModifiedDate>
  <LoginID>string</LoginID>
  <Name>string</Name>
  <PolicyID>string</PolicyID>
  <PolicyName>string</PolicyName>
  <Purpose>string</Purpose>
  <RequestID>string</RequestID>
  <StartDate>string</StartDate>
  <StartTime>string</StartTime>
  <SubmitDate>2019-08-24T14:15:22Z</SubmitDate>
  <TotalApprovedAmount>string</TotalApprovedAmount>
  <TotalPostedAmount>string</TotalPostedAmount>
  <TotalRemainingAmount>string</TotalRemainingAmount>
  <UserPermissions>
    <Links>
      <Action>string</Action>
      <Method>string</Method>
      <Url>string</Url>
    </Links>
  </UserPermissions>
</Request>
```

<h3 id="get__travelrequest_requests_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Request](#schemarequest)|

<aside class="success">
This operation does not require authentication
</aside>

## get__travelrequest_requests

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/travelrequest/requests \
  -H 'Accept: application/json'

```

```http
GET https://www.concursolutions.com/api/v3.0/travelrequest/requests HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/travelrequest/requests',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/travelrequest/requests',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/travelrequest/requests', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/travelrequest/requests', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/travelrequest/requests");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/travelrequest/requests", data)
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
|status|query|string|false|The Status search term specifies which travel request or approval status to return. If no Status value is sent, the default Status of Active will be used.|
|modifiedAfter|query|string(date-time)|false|This returns travel requests in which the associated dependents (header, entries, segments, allocations, attendees, comments ) were modified after the specified date and time. This search term can be used along with other search terms to narrow the results. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss.|
|modifiedBefore|query|string(date-time)|false|This returns travel requests in which the associated dependents (header, entries, segments, allocations, attendees, comments ) were modified before the specified date and time.This search term can be used along with other search terms to narrow the results. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss.|
|withSegmentTypes|query|boolean|false|Pass true to populate the SegmentType field in the result.|

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
    "EndDate": "string",
    "HeaderFormID": "string",
    "ID": "string",
    "LastComment": "string",
    "Name": "string",
    "Purpose": "string",
    "RequestDetailsUrl": "string",
    "RequestID": "string",
    "SegmentTypes": "string",
    "StartDate": "string",
    "TotalApprovedAmount": "string",
    "TotalPostedAmount": "string",
    "URI": "string",
    "UserLoginID": "string"
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
    <EndDate>string</EndDate>
    <HeaderFormID>string</HeaderFormID>
    <ID>string</ID>
    <LastComment>string</LastComment>
    <Name>string</Name>
    <Purpose>string</Purpose>
    <RequestDetailsUrl>string</RequestDetailsUrl>
    <RequestID>string</RequestID>
    <SegmentTypes>string</SegmentTypes>
    <StartDate>string</StartDate>
    <TotalApprovedAmount>string</TotalApprovedAmount>
    <TotalPostedAmount>string</TotalPostedAmount>
    <URI>string</URI>
    <UserLoginID>string</UserLoginID>
  </Items>
  <NextPage>string</NextPage>
</RequestCollection>
```

<h3 id="get__travelrequest_requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[RequestCollection](#schemarequestcollection)|

<aside class="success">
This operation does not require authentication
</aside>

## post__travelrequest_requests_{id}_submit

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}/submit \
  -H 'Accept: application/json'

```

```http
POST https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}/submit HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}/submit',
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
  'Accept' => 'application/json'
}

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}/submit',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}/submit', headers = headers)

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
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}/submit', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}/submit");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/travelrequest/requests/{id}/submit", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /travelrequest/requests/{id}/submit`

*Submit a Request by ID*

Submit a Request by ID

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

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Allocation">Allocation</h2>

<a id="schemaallocation"></a>
<a id="schema_Allocation"></a>
<a id="tocSallocation"></a>
<a id="tocsallocation"></a>

```json
{
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
  "Percentage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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
|Percentage|string|false|none|The percentage of the expense that is included in this allocation.|

<h2 id="tocS_CashAdvance">CashAdvance</h2>

<a id="schemacashadvance"></a>
<a id="schema_CashAdvance"></a>
<a id="tocScashadvance"></a>
<a id="tocscashadvance"></a>

```json
{
  "AmountRequested": "string",
  "ApprovalStatusName": "string",
  "Comments": {
    "AuthorFirstName": "string",
    "AuthorLastName": "string",
    "CommentDateTime": "2019-08-24T14:15:22Z",
    "IsLatest": true,
    "Value": "string"
  },
  "CurrencyCode": "string",
  "CurrencyName": "string",
  "EmployeeCurrencyCode": "string",
  "EmployeeCurrencyName": "string",
  "ExchangeRate": "string",
  "IssueDate": "2019-08-24T14:15:22Z",
  "RequestDate": "2019-08-24T14:15:22Z",
  "StartingBalance": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmountRequested|string|false|none|The amount requested in the cash advance, in the currency specified in the CurrencyCode element.|
|ApprovalStatusName|string|false|none|The approval status of the cash advance.|
|Comments|[Comment](#schemacomment)|false|none|none|
|CurrencyCode|string|false|none|The <a target="_blank" href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the cash advance currency.|
|CurrencyName|string|false|none|The name of the currency for the cash advance.|
|EmployeeCurrencyCode|string|false|none|The <a target="_blank" href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code for the employee's currency, also known as the home currency.|
|EmployeeCurrencyName|string|false|none|The name of the employee's currency, also known as the home currency.|
|ExchangeRate|string|false|none|The exchange rate that applies to the cash advance.|
|IssueDate|string(date-time)|false|none|The issue date for the cash advance.|
|RequestDate|string(date-time)|false|none|The date of cash advance request, obtained from the detailed cash advance record.|
|StartingBalance|string|false|none|The initial balance for the cash advance.|

<h2 id="tocS_Comment">Comment</h2>

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
|Type|string|false|none|The custom field type. Possible values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text|
|Value|string|false|none|The value in the Org Unit or Custom field. For list fields, this is the name of the list item.  Maximum length: 48 characters|

<h2 id="tocS_Link">Link</h2>

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

<h2 id="tocS_ListField">ListField</h2>

<a id="schemalistfield"></a>
<a id="schema_ListField"></a>
<a id="tocSlistfield"></a>
<a id="tocslistfield"></a>

```json
{
  "Code": "string",
  "ListItemID": "string",
  "Value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|The code of the list item.|
|ListItemID|string|false|none|The list item ID.|
|Value|string|false|none|The name of the list item.|

<h2 id="tocS_Request">Request</h2>

<a id="schemarequest"></a>
<a id="schema_Request"></a>
<a id="tocSrequest"></a>
<a id="tocsrequest"></a>

```json
{
  "AgencyOfficeName": "string",
  "AllocationFormID": "string",
  "ApprovalLimitDate": "2019-08-24T14:15:22Z",
  "ApprovalStatusCode": "string",
  "ApprovalStatusName": "string",
  "AuthorizedDate": "2019-08-24T14:15:22Z",
  "CashAdvances": {
    "AmountRequested": "string",
    "ApprovalStatusName": "string",
    "Comments": {
      "AuthorFirstName": "string",
      "AuthorLastName": "string",
      "CommentDateTime": "2019-08-24T14:15:22Z",
      "IsLatest": true,
      "Value": "string"
    },
    "CurrencyCode": "string",
    "CurrencyName": "string",
    "EmployeeCurrencyCode": "string",
    "EmployeeCurrencyName": "string",
    "ExchangeRate": "string",
    "IssueDate": "2019-08-24T14:15:22Z",
    "RequestDate": "2019-08-24T14:15:22Z",
    "StartingBalance": "string"
  },
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
  "Custom1": {
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
  "Custom2": {
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
  "EmployeeName": "string",
  "EndDate": "string",
  "EndTime": "string",
  "Entries": {
    "Allocations": {
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
      "Percentage": "string"
    },
    "ApprovedAmount": "string",
    "Comments": {
      "AuthorFirstName": "string",
      "AuthorLastName": "string",
      "CommentDateTime": "2019-08-24T14:15:22Z",
      "IsLatest": true,
      "Value": "string"
    },
    "Custom1": {
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
    "Custom2": {
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
    "Custom3": {
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
    "Custom4": {
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
    "EntryDescription": "string",
    "EntryFormID": "string",
    "Exceptions": {
      "Code": "string",
      "Level": 0,
      "Message": "string"
    },
    "ExchangeRate": "string",
    "ExpenseTypeName": "string",
    "ForeignAmount": "string",
    "ForeignCurrencyCode": "string",
    "ForeignCurrencyName": "string",
    "LastModifiedDate": "2019-08-24T14:15:22Z",
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
    "PostedAmount": "string",
    "RemainingAmount": "string",
    "Segments": {
      "ApprovedAmount": "string",
      "ArrivalDate": "string",
      "ArrivalTime": "string",
      "Class": {
        "Code": "string",
        "ListItemID": "string",
        "Value": "string"
      },
      "ClassOfServiceCode": "string",
      "Comments": {
        "AuthorFirstName": "string",
        "AuthorLastName": "string",
        "CommentDateTime": "2019-08-24T14:15:22Z",
        "IsLatest": true,
        "Value": "string"
      },
      "Custom1": {
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
      "Custom2": {
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
      "Custom3": {
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
      "Custom4": {
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
      "DepartureDate": "string",
      "DepartureTime": "string",
      "Exceptions": {
        "Code": "string",
        "Level": 0,
        "Message": "string"
      },
      "ExchangeRate": "string",
      "FlightNumber": "string",
      "ForeignAmount": "string",
      "ForeignCurrencyCode": "string",
      "ForeignCurrencyName": "string",
      "FormTypeCode": "string",
      "FromLocationAirportName": "string",
      "FromLocationCode": "string",
      "FromLocationCountryCode": "string",
      "FromLocationDetail": "string",
      "FromLocationIataCode": "string",
      "FromLocationID": "string",
      "FromLocationIsAirport": true,
      "FromLocationName": "string",
      "FromLocationSubCountryCode": "string",
      "FromLocationVendor": "string",
      "IsAgencyBooked": "string",
      "IsSelfBooked": "string",
      "LastModifiedDate": "2019-08-24T14:15:22Z",
      "OutboundSegmentID": "string",
      "PostedAmount": "string",
      "RecordLocator": "string",
      "RemainingAmount": "string",
      "SegmentFormID": "string",
      "SegmentLocator": "string",
      "SegmentType": "string",
      "SegmentTypeCode": "string",
      "ToLocationAirportName": "string",
      "ToLocationCode": "string",
      "ToLocationCountryCode": "string",
      "ToLocationDetail": "string",
      "ToLocationIataCode": "string",
      "ToLocationID": "string",
      "ToLocationIsAirport": true,
      "ToLocationName": "string",
      "ToLocationSubCountryCode": "string",
      "ToLocationVendor": "string",
      "TripLocator": "string",
      "VendorName": "string"
    },
    "TransactionDate": "2019-08-24T14:15:22Z",
    "TripType": null
  },
  "EverSentBack": "string",
  "Exceptions": {
    "Code": "string",
    "Level": 0,
    "Message": "string"
  },
  "ExtensionOf": "string",
  "HasException": "string",
  "HeaderFormID": "string",
  "LastModifiedDate": "2019-08-24T14:15:22Z",
  "LoginID": "string",
  "Name": "string",
  "PolicyID": "string",
  "PolicyName": "string",
  "Purpose": "string",
  "RequestID": "string",
  "StartDate": "string",
  "StartTime": "string",
  "SubmitDate": "2019-08-24T14:15:22Z",
  "TotalApprovedAmount": "string",
  "TotalPostedAmount": "string",
  "TotalRemainingAmount": "string",
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
|AgencyOfficeName|string|false|none|The travel agency office name.|
|AllocationFormID|string|false|none|The unique identifier of the Segment Form resource (See. the "Forms" resource for more information).|
|ApprovalLimitDate|string(date-time)|false|none|The date by which the Request must be approved. This element appears only when integrated with Concur Travel.|
|ApprovalStatusCode|string|false|none|The code for the approval status the Request.|
|ApprovalStatusName|string|false|none|The approval status of the Request.|
|AuthorizedDate|string(date-time)|false|none|The date the Request was authorized. Format: YYYY-MM-DDThh:mm:ss.|
|CashAdvances|[CashAdvance](#schemacashadvance)|false|none|none|
|Comments|[Comment](#schemacomment)|false|none|none|
|CreationDate|string(date-time)|false|none|The date of the Request was created.|
|CurrencyCode|string|false|none|The <a target="_blank" href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the Request currency. The Request currency is defined as the Request creator's default reimbursement currency.|
|CurrencyName|string|false|none|The currency name for the Request currency. The Request currency is defined as the Request creator's default reimbursement currency.|
|Custom1|[CustomField](#schemacustomfield)|false|none|none|
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
|Custom2|[CustomField](#schemacustomfield)|false|none|none|
|Custom20|[CustomField](#schemacustomfield)|false|none|none|
|Custom3|[CustomField](#schemacustomfield)|false|none|none|
|Custom4|[CustomField](#schemacustomfield)|false|none|none|
|Custom5|[CustomField](#schemacustomfield)|false|none|none|
|Custom6|[CustomField](#schemacustomfield)|false|none|none|
|Custom7|[CustomField](#schemacustomfield)|false|none|none|
|Custom8|[CustomField](#schemacustomfield)|false|none|none|
|Custom9|[CustomField](#schemacustomfield)|false|none|none|
|EmployeeName|string|false|none|The first, middle (or middle initial), and last name of the employee who created the Request.|
|EndDate|string|false|none|The end date of the Request.|
|EndTime|string|false|none|The end time for the Request.|
|Entries|[RequestEntry](#schemarequestentry)|false|none|none|
|EverSentBack|string|false|none|Indicates whether the Request has ever been sent back to the employee. Format: Y/N|
|Exceptions|[TRException](#schematrexception)|false|none|none|
|ExtensionOf|string|false|none|The ID of the initial Request that this Request is an extension of or adendum to.|
|HasException|string|false|none|Indicates whether the Request has exceptions. Format: Y/N|
|HeaderFormID|string|false|none|The unique identifier of the Header Form resource (See. the "Forms" resource for more information).|
|LastModifiedDate|string(date-time)|false|none|The date the Request was last modified. Format: YYYY-MM-DDThh:mm:ss|
|LoginID|string|false|none|The Concur login ID of the Request owner.|
|Name|string|false|none|The name of the Request.|
|PolicyID|string|false|none|The unique identifier of the policy that applies to this Request. Maximum length 64 characters.|
|PolicyName|string|false|none|The name of the policy that applies to this Request.|
|Purpose|string|false|none|The purpose of the Request.|
|RequestID|string|false|none|The unique key for the Request.|
|StartDate|string|false|none|The start date of the Request.|
|StartTime|string|false|none|The start time for the Request.|
|SubmitDate|string(date-time)|false|none|The date the Request was submitted. Format: YYYY-MM-DDThh:mm:ss.|
|TotalApprovedAmount|string|false|none|The total amount of approved expenses in the Request.|
|TotalPostedAmount|string|false|none|The total amount of the Request.|
|TotalRemainingAmount|string|false|none|The total amount of expenses remaining in the Request.|
|UserPermissions|[UserPermissions](#schemauserpermissions)|false|none|none|

<h2 id="tocS_RequestCollection">RequestCollection</h2>

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
    "EndDate": "string",
    "HeaderFormID": "string",
    "ID": "string",
    "LastComment": "string",
    "Name": "string",
    "Purpose": "string",
    "RequestDetailsUrl": "string",
    "RequestID": "string",
    "SegmentTypes": "string",
    "StartDate": "string",
    "TotalApprovedAmount": "string",
    "TotalPostedAmount": "string",
    "URI": "string",
    "UserLoginID": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[TravelRequestHeader](#schematravelrequestheader)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h2 id="tocS_RequestEntry">RequestEntry</h2>

<a id="schemarequestentry"></a>
<a id="schema_RequestEntry"></a>
<a id="tocSrequestentry"></a>
<a id="tocsrequestentry"></a>

```json
{
  "Allocations": {
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
    "Percentage": "string"
  },
  "ApprovedAmount": "string",
  "Comments": {
    "AuthorFirstName": "string",
    "AuthorLastName": "string",
    "CommentDateTime": "2019-08-24T14:15:22Z",
    "IsLatest": true,
    "Value": "string"
  },
  "Custom1": {
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
  "Custom2": {
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
  "Custom3": {
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
  "Custom4": {
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
  "EntryDescription": "string",
  "EntryFormID": "string",
  "Exceptions": {
    "Code": "string",
    "Level": 0,
    "Message": "string"
  },
  "ExchangeRate": "string",
  "ExpenseTypeName": "string",
  "ForeignAmount": "string",
  "ForeignCurrencyCode": "string",
  "ForeignCurrencyName": "string",
  "LastModifiedDate": "2019-08-24T14:15:22Z",
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
  "PostedAmount": "string",
  "RemainingAmount": "string",
  "Segments": {
    "ApprovedAmount": "string",
    "ArrivalDate": "string",
    "ArrivalTime": "string",
    "Class": {
      "Code": "string",
      "ListItemID": "string",
      "Value": "string"
    },
    "ClassOfServiceCode": "string",
    "Comments": {
      "AuthorFirstName": "string",
      "AuthorLastName": "string",
      "CommentDateTime": "2019-08-24T14:15:22Z",
      "IsLatest": true,
      "Value": "string"
    },
    "Custom1": {
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
    "Custom2": {
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
    "Custom3": {
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
    "Custom4": {
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
    "DepartureDate": "string",
    "DepartureTime": "string",
    "Exceptions": {
      "Code": "string",
      "Level": 0,
      "Message": "string"
    },
    "ExchangeRate": "string",
    "FlightNumber": "string",
    "ForeignAmount": "string",
    "ForeignCurrencyCode": "string",
    "ForeignCurrencyName": "string",
    "FormTypeCode": "string",
    "FromLocationAirportName": "string",
    "FromLocationCode": "string",
    "FromLocationCountryCode": "string",
    "FromLocationDetail": "string",
    "FromLocationIataCode": "string",
    "FromLocationID": "string",
    "FromLocationIsAirport": true,
    "FromLocationName": "string",
    "FromLocationSubCountryCode": "string",
    "FromLocationVendor": "string",
    "IsAgencyBooked": "string",
    "IsSelfBooked": "string",
    "LastModifiedDate": "2019-08-24T14:15:22Z",
    "OutboundSegmentID": "string",
    "PostedAmount": "string",
    "RecordLocator": "string",
    "RemainingAmount": "string",
    "SegmentFormID": "string",
    "SegmentLocator": "string",
    "SegmentType": "string",
    "SegmentTypeCode": "string",
    "ToLocationAirportName": "string",
    "ToLocationCode": "string",
    "ToLocationCountryCode": "string",
    "ToLocationDetail": "string",
    "ToLocationIataCode": "string",
    "ToLocationID": "string",
    "ToLocationIsAirport": true,
    "ToLocationName": "string",
    "ToLocationSubCountryCode": "string",
    "ToLocationVendor": "string",
    "TripLocator": "string",
    "VendorName": "string"
  },
  "TransactionDate": "2019-08-24T14:15:22Z",
  "TripType": null
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Allocations|[Allocation](#schemaallocation)|false|none|none|
|ApprovedAmount|string|false|none|The approved amount of the Request entry in the Request currency.|
|Comments|[Comment](#schemacomment)|false|none|none|
|Custom1|[CustomField](#schemacustomfield)|false|none|none|
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
|Custom2|[CustomField](#schemacustomfield)|false|none|none|
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
|Custom3|[CustomField](#schemacustomfield)|false|none|none|
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
|Custom4|[CustomField](#schemacustomfield)|false|none|none|
|Custom40|[CustomField](#schemacustomfield)|false|none|none|
|Custom5|[CustomField](#schemacustomfield)|false|none|none|
|Custom6|[CustomField](#schemacustomfield)|false|none|none|
|Custom7|[CustomField](#schemacustomfield)|false|none|none|
|Custom8|[CustomField](#schemacustomfield)|false|none|none|
|Custom9|[CustomField](#schemacustomfield)|false|none|none|
|EntryDescription|string|false|none|The description of the Request entry.|
|EntryFormID|string|false|none|The unique identifier of the Entry Form resource (See. the "Forms" resource for more information).|
|Exceptions|[TRException](#schematrexception)|false|none|none|
|ExchangeRate|string|false|none|The exchange rate that applies to the entry.|
|ExpenseTypeName|string|false|none|The expense type name.|
|ForeignAmount|string|false|none|The foreign amount of the Request entry.|
|ForeignCurrencyCode|string|false|none|The <a target="_blank" href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the foreign currency amount of the Request entry.|
|ForeignCurrencyName|string|false|none|The name of the currency for the foreign amount.|
|LastModifiedDate|string(date-time)|false|none|The date the entry was last modified. Format: YYYY-MM-DDThh:mm:ss|
|OrgUnit1|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit2|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit3|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit4|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit5|[CustomField](#schemacustomfield)|false|none|none|
|OrgUnit6|[CustomField](#schemacustomfield)|false|none|none|
|PostedAmount|string|false|none|The posted amount of the Request entry in the Request currency.|
|RemainingAmount|string|false|none|The remaining amount of the Request entry in the Request currency.|
|Segments|[Segment](#schemasegment)|false|none|none|
|TransactionDate|string(date-time)|false|none|The date of the Request entry.|
|TripType|triptype|false|none|Trip type of the air or rail segment. Possible values are: ONE_WAY, ROUND_TRIP and MULTI_STOP.|

<h2 id="tocS_Segment">Segment</h2>

<a id="schemasegment"></a>
<a id="schema_Segment"></a>
<a id="tocSsegment"></a>
<a id="tocssegment"></a>

```json
{
  "ApprovedAmount": "string",
  "ArrivalDate": "string",
  "ArrivalTime": "string",
  "Class": {
    "Code": "string",
    "ListItemID": "string",
    "Value": "string"
  },
  "ClassOfServiceCode": "string",
  "Comments": {
    "AuthorFirstName": "string",
    "AuthorLastName": "string",
    "CommentDateTime": "2019-08-24T14:15:22Z",
    "IsLatest": true,
    "Value": "string"
  },
  "Custom1": {
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
  "Custom2": {
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
  "Custom3": {
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
  "Custom4": {
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
  "DepartureDate": "string",
  "DepartureTime": "string",
  "Exceptions": {
    "Code": "string",
    "Level": 0,
    "Message": "string"
  },
  "ExchangeRate": "string",
  "FlightNumber": "string",
  "ForeignAmount": "string",
  "ForeignCurrencyCode": "string",
  "ForeignCurrencyName": "string",
  "FormTypeCode": "string",
  "FromLocationAirportName": "string",
  "FromLocationCode": "string",
  "FromLocationCountryCode": "string",
  "FromLocationDetail": "string",
  "FromLocationIataCode": "string",
  "FromLocationID": "string",
  "FromLocationIsAirport": true,
  "FromLocationName": "string",
  "FromLocationSubCountryCode": "string",
  "FromLocationVendor": "string",
  "IsAgencyBooked": "string",
  "IsSelfBooked": "string",
  "LastModifiedDate": "2019-08-24T14:15:22Z",
  "OutboundSegmentID": "string",
  "PostedAmount": "string",
  "RecordLocator": "string",
  "RemainingAmount": "string",
  "SegmentFormID": "string",
  "SegmentLocator": "string",
  "SegmentType": "string",
  "SegmentTypeCode": "string",
  "ToLocationAirportName": "string",
  "ToLocationCode": "string",
  "ToLocationCountryCode": "string",
  "ToLocationDetail": "string",
  "ToLocationIataCode": "string",
  "ToLocationID": "string",
  "ToLocationIsAirport": true,
  "ToLocationName": "string",
  "ToLocationSubCountryCode": "string",
  "ToLocationVendor": "string",
  "TripLocator": "string",
  "VendorName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApprovedAmount|string|false|none|The approved amount of the segment in the Request currency.|
|ArrivalDate|string|false|none|The arrival date of the segment.|
|ArrivalTime|string|false|none|The arrival time of the segment.|
|Class|[ListField](#schemalistfield)|false|none|none|
|ClassOfServiceCode|string|false|none|The Class of Service Code from Concur Travel. Appears only when the Request is integrated with Concur Travel.|
|Comments|[Comment](#schemacomment)|false|none|none|
|Custom1|[CustomField](#schemacustomfield)|false|none|none|
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
|Custom2|[CustomField](#schemacustomfield)|false|none|none|
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
|Custom3|[CustomField](#schemacustomfield)|false|none|none|
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
|Custom4|[CustomField](#schemacustomfield)|false|none|none|
|Custom40|[CustomField](#schemacustomfield)|false|none|none|
|Custom5|[CustomField](#schemacustomfield)|false|none|none|
|Custom6|[CustomField](#schemacustomfield)|false|none|none|
|Custom7|[CustomField](#schemacustomfield)|false|none|none|
|Custom8|[CustomField](#schemacustomfield)|false|none|none|
|Custom9|[CustomField](#schemacustomfield)|false|none|none|
|DepartureDate|string|false|none|The departure date of the segment.|
|DepartureTime|string|false|none|The departure time of the segment.|
|Exceptions|[TRException](#schematrexception)|false|none|none|
|ExchangeRate|string|false|none|The exchange rate that applies to the segment.|
|FlightNumber|string|false|none|The flight number for air segments. Appears only when Request is integrated with Concur Travel.|
|ForeignAmount|string|false|none|The foreign currency amount of the segment.|
|ForeignCurrencyCode|string|false|none|The <a target="_blank" href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the foreign currency amount of the segment.|
|ForeignCurrencyName|string|false|none|The name of the currency for the foreign amount of the segment.|
|FormTypeCode|string|false|none|The code for form type of the segment type.|
|FromLocationAirportName|string|false|none|The code for form type of the segment type.|
|FromLocationCode|string|false|none|The code for form type of the segment type.|
|FromLocationCountryCode|string|false|none|The code for form type of the segment type.|
|FromLocationDetail|string|false|none|The code for the starting location.|
|FromLocationIataCode|string|false|none|The code for the starting location.|
|FromLocationID|string|false|none|The unique identifier of the departure location. (See. the "Locations" resource for more information).|
|FromLocationIsAirport|boolean|false|none|Indicates that the comment is the last one.|
|FromLocationName|string|false|none|The name of the starting location.|
|FromLocationSubCountryCode|string|false|none|The name of the starting location.|
|FromLocationVendor|string|false|none|The name of the starting location.|
|IsAgencyBooked|string|false|none|Indicates whether the air segment was agency booked. Format: Y/N.|
|IsSelfBooked|string|false|none|Indicates whether the air segment was self booked. Format: Y/N.|
|LastModifiedDate|string(date-time)|false|none|The date the segment was last modified. Format: YYYY-MM-DDThh:mm:ss|
|OutboundSegmentID|string|false|none|undefined:ConnectSwaggerDocs-REQ_SEGMENT_OUTBOUND_ID|
|PostedAmount|string|false|none|The posted amount of the segment in the Request currency.|
|RecordLocator|string|false|none|Appears only when the Request is integrated with Concur Travel.|
|RemainingAmount|string|false|none|The remaining amount of the segment in the Request currency.|
|SegmentFormID|string|false|none|The unique identifier of the Segment Form resource (See. the "Forms" resource for more information).|
|SegmentLocator|string|false|none|The unique identifier for the Concur Travel segment associated with this segment. Appears only when the Request is integrated with Concur Travel.|
|SegmentType|string|false|none|The type of itinerary segment. Format: air, car, hotel, rail, dining, event, ground, taxi, parking, other and so on|
|SegmentTypeCode|string|false|none|The code for the type of itinerary segment.|
|ToLocationAirportName|string|false|none|The code for the type of itinerary segment.|
|ToLocationCode|string|false|none|The code for the type of itinerary segment.|
|ToLocationCountryCode|string|false|none|The code for the type of itinerary segment.|
|ToLocationDetail|string|false|none|The code for the ending location.|
|ToLocationIataCode|string|false|none|The code for the ending location.|
|ToLocationID|string|false|none|The unique identifier of the arrival location. (See. the "Locations" resource for more information).|
|ToLocationIsAirport|boolean|false|none|Indicates that the comment is the last one.|
|ToLocationName|string|false|none|The name of the ending location.|
|ToLocationSubCountryCode|string|false|none|The name of the ending location.|
|ToLocationVendor|string|false|none|The name of the ending location.|
|TripLocator|string|false|none|The unique identifier for the Concur Travel trip associated with this segment. Appears only when the Request is integrated with Concur Travel.|
|VendorName|string|false|none|The name of the vendor of the segment.|

<h2 id="tocS_TravelRequestHeader">TravelRequestHeader</h2>

<a id="schematravelrequestheader"></a>
<a id="schema_TravelRequestHeader"></a>
<a id="tocStravelrequestheader"></a>
<a id="tocstravelrequestheader"></a>

```json
{
  "ApprovalStatusCode": "string",
  "ApprovalStatusName": "string",
  "ApproverLoginID": "string",
  "CreationDate": "2019-08-24T14:15:22Z",
  "CurrencyCode": "string",
  "EmployeeName": "string",
  "EndDate": "string",
  "HeaderFormID": "string",
  "ID": "string",
  "LastComment": "string",
  "Name": "string",
  "Purpose": "string",
  "RequestDetailsUrl": "string",
  "RequestID": "string",
  "SegmentTypes": "string",
  "StartDate": "string",
  "TotalApprovedAmount": "string",
  "TotalPostedAmount": "string",
  "URI": "string",
  "UserLoginID": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApprovalStatusCode|string|false|none|The code for the approval status the Request.|
|ApprovalStatusName|string|false|none|The Request's approval status, in the user's language.|
|ApproverLoginID|string|false|none|The login ID of the approver for the user's Request.|
|CreationDate|string(date-time)|false|none|The creation date of the Request.|
|CurrencyCode|string|false|none|The <a target="_blank" href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the Request currency.|
|EmployeeName|string|false|none|The name of the Request owner.|
|EndDate|string|false|none|The end date of the Request.|
|HeaderFormID|string|false|none|The unique identifier of the Header Form resource (See. the "Forms" resource for more information).|
|ID|string|false|none|The unique identifier of the resource.|
|LastComment|string|false|none|The text of the most recent comment on the Request.|
|Name|string|false|none|The name of the Request.|
|Purpose|string|false|none|The purpose of the Request.|
|RequestDetailsUrl|string|false|none|The URI to use when posting Request header details to this Request.|
|RequestID|string|false|none|The unique identifier for the Request, as it appears in the Concur UI.|
|SegmentTypes|string|false|none|A comma separated list of the segment type names that are present in this Request.|
|StartDate|string|false|none|The start date of the Request.|
|TotalApprovedAmount|string|false|none|The total amount of the Request.|
|TotalPostedAmount|string|false|none|The posted amount of the Request entry in the Request currency.|
|URI|string|false|none|The URI to the resource.|
|UserLoginID|string|false|none|The login ID of the user this Request belongs to.|

<h2 id="tocS_TRException">TRException</h2>

<a id="schematrexception"></a>
<a id="schema_TRException"></a>
<a id="tocStrexception"></a>
<a id="tocstrexception"></a>

```json
{
  "Code": "string",
  "Level": 0,
  "Message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|The system exception code defined for the exception. Example: BADCODE|
|Level|integer(int32)|false|none|The numeric level associated with the exception. Example: 99|
|Message|string|false|none|The user-facing message defined for the exception.|

<h2 id="tocS_UserPermissions">UserPermissions</h2>

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

<h2 id="tocS_Nullable_1">Nullable_1</h2>

<a id="schemanullable_1"></a>
<a id="schema_Nullable_1"></a>
<a id="tocSnullable_1"></a>
<a id="tocsnullable_1"></a>

```json
{
  "HasValue": true,
  "Value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HasValue|boolean|false|none|Indicates that the comment is the last one.|
|Value|string|false|none|The name of the list item.|

