---
title: Allocations v3.0
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

<h1 id="allocations">Allocations v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Allocations divide the responsibility for an expense. Allocation entries consist of a percentage of the original expense, and the configured custom fields. Allocation entries are children of the expense entry. This API provides methods to view all allocations for a user or report, or view an allocation by ID.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

# Authentication

- oAuth2 authentication. To use this API, you need to get OAuth client credentials (client ID, secret, and geolocation) from SAP Concur, and be authorized to use the relevant scope. Refer to the <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">full authentication information</a> for more information.

    - Flow: clientCredentials

    - Token URL = [https://us.api.concursolutions.com/oauth2/v0](https://us.api.concursolutions.com/oauth2/v0)

<h1 id="allocations-resources">Resources</h1>

## get__expense_allocations

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/allocations \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/allocations HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/allocations',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/allocations',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/allocations', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/allocations', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/allocations");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/allocations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/allocations`

*Get allocations*

Gets all allocations per entry or report.

<h3 id="get__expense_allocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|The number of records to return. The default is 25 and the maximum is 100.|
|offset|query|string|false|The starting point of the next set of results, after the limit specified in the limit field has been reached.|
|reportID|query|string|false|The unique identifier for the report as it appears in Concur Expense. Format: A variable-length string. Maximum length: 32 characters.|
|entryID|query|string|false|The unique identifier for the expense entry.|
|itemizationID|query|string|false|The unique identifier for the expense itemization.|
|user|query|string|false|The login ID of the user who owns the allocation. The user must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "Items": {
    "AccountCode1": "string",
    "AccountCode2": "string",
    "Custom1": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom10": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom11": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom12": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom13": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom14": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom15": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom16": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom17": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom18": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom19": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom2": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom20": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom3": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom4": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom5": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom6": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom7": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom8": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom9": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "EntryID": "string",
    "ID": "string",
    "IsHidden": true,
    "IsPercentEdited": true,
    "Percentage": "string",
    "URI": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<AllocationCollection>
  <Items>
    <AccountCode1>string</AccountCode1>
    <AccountCode2>string</AccountCode2>
    <Custom1>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom1>
    <Custom10>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom10>
    <Custom11>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom11>
    <Custom12>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom12>
    <Custom13>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom13>
    <Custom14>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom14>
    <Custom15>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom15>
    <Custom16>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom16>
    <Custom17>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom17>
    <Custom18>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom18>
    <Custom19>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom19>
    <Custom2>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom2>
    <Custom20>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom20>
    <Custom3>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom3>
    <Custom4>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom4>
    <Custom5>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom5>
    <Custom6>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom6>
    <Custom7>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom7>
    <Custom8>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom8>
    <Custom9>
      <Code>string</Code>
      <Label>string</Label>
      <ListItemID>string</ListItemID>
      <Sequence>0</Sequence>
      <Type>string</Type>
      <Value>string</Value>
    </Custom9>
    <EntryID>string</EntryID>
    <ID>string</ID>
    <IsHidden>true</IsHidden>
    <IsPercentEdited>true</IsPercentEdited>
    <Percentage>string</Percentage>
    <URI>string</URI>
  </Items>
  <NextPage>string</NextPage>
</AllocationCollection>
```

<h3 id="get__expense_allocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[AllocationCollection](#schemaallocationcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## get__expense_allocations_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/allocations/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/allocations/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/allocations/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/allocations/{id}',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/allocations/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/allocations/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/allocations/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/allocations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/allocations/{id}`

*Get a single allocation*

Gets the allocation for the supplied ID.

<h3 id="get__expense_allocations_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the allocation.|
|user|query|string|false|The login ID of the user who owns the allocation. The user must have the Web Services Admin role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "AccountCode1": "string",
  "AccountCode2": "string",
  "Custom1": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom10": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom11": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom12": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom13": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom14": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom15": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom16": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom17": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom18": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom19": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom2": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom20": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom3": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom4": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom5": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom6": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom7": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom8": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom9": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "EntryID": "string",
  "ID": "string",
  "IsHidden": true,
  "IsPercentEdited": true,
  "Percentage": "string",
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<AllocationGet>
  <AccountCode1>string</AccountCode1>
  <AccountCode2>string</AccountCode2>
  <Custom1>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom1>
  <Custom10>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom10>
  <Custom11>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom11>
  <Custom12>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom12>
  <Custom13>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom13>
  <Custom14>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom14>
  <Custom15>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom15>
  <Custom16>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom16>
  <Custom17>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom17>
  <Custom18>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom18>
  <Custom19>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom19>
  <Custom2>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom2>
  <Custom20>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom20>
  <Custom3>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom3>
  <Custom4>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom4>
  <Custom5>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom5>
  <Custom6>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom6>
  <Custom7>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom7>
  <Custom8>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom8>
  <Custom9>
    <Code>string</Code>
    <Label>string</Label>
    <ListItemID>string</ListItemID>
    <Sequence>0</Sequence>
    <Type>string</Type>
    <Value>string</Value>
  </Custom9>
  <EntryID>string</EntryID>
  <ID>string</ID>
  <IsHidden>true</IsHidden>
  <IsPercentEdited>true</IsPercentEdited>
  <Percentage>string</Percentage>
  <URI>string</URI>
</AllocationGet>
```

<h3 id="get__expense_allocations_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[AllocationGet](#schemaallocationget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_AllocationCollection">AllocationCollection</h2>

<a id="schemaallocationcollection"></a>
<a id="schema_AllocationCollection"></a>
<a id="tocSallocationcollection"></a>
<a id="tocsallocationcollection"></a>

```json
{
  "Items": {
    "AccountCode1": "string",
    "AccountCode2": "string",
    "Custom1": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom10": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom11": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom12": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom13": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom14": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom15": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom16": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom17": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom18": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom19": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom2": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom20": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom3": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom4": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom5": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom6": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom7": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom8": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "Custom9": {
      "Code": "string",
      "Label": "string",
      "ListItemID": "string",
      "Sequence": 0,
      "Type": "string",
      "Value": "string"
    },
    "EntryID": "string",
    "ID": "string",
    "IsHidden": true,
    "IsPercentEdited": true,
    "Percentage": "string",
    "URI": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[AllocationGet](#schemaallocationget)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h2 id="tocS_AllocationGet">AllocationGet</h2>

<a id="schemaallocationget"></a>
<a id="schema_AllocationGet"></a>
<a id="tocSallocationget"></a>
<a id="tocsallocationget"></a>

```json
{
  "AccountCode1": "string",
  "AccountCode2": "string",
  "Custom1": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom10": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom11": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom12": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom13": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom14": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom15": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom16": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom17": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom18": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom19": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom2": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom20": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom3": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom4": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom5": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom6": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom7": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom8": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "Custom9": {
    "Code": "string",
    "Label": "string",
    "ListItemID": "string",
    "Sequence": 0,
    "Type": "string",
    "Value": "string"
  },
  "EntryID": "string",
  "ID": "string",
  "IsHidden": true,
  "IsPercentEdited": true,
  "Percentage": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountCode1|string|false|none|The primary accounting code assigned to the expense type associated with this allocation. Typically, expense types have only a primary account code.|
|AccountCode2|string|false|none|The secondary or alternative accounting code assigned to the expense type associated with this allocation.|
|Custom1|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom10|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom11|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom12|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom13|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom14|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom15|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom16|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom17|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom18|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom19|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom2|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom20|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom3|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom4|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom5|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom6|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom7|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom8|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|Custom9|[CustomFieldExtension](#schemacustomfieldextension)|false|none|none|
|EntryID|string|false|none|The unique identifier for the expense entry.|
|ID|string|false|none|The unique identifier of the resource.|
|IsHidden|boolean|false|none|Indicates whether the allocation is hidden. Format: true or false|
|IsPercentEdited|boolean|false|none|Indicates whether the allocation percentage has been edited. Format: true or false|
|Percentage|string|false|none|The percentage of the expense that is included in this allocation.|
|URI|string|false|none|The URI to the resource.|

<h2 id="tocS_CustomFieldExtension">CustomFieldExtension</h2>

<a id="schemacustomfieldextension"></a>
<a id="schema_CustomFieldExtension"></a>
<a id="tocScustomfieldextension"></a>
<a id="tocscustomfieldextension"></a>

```json
{
  "Code": "string",
  "Label": "string",
  "ListItemID": "string",
  "Sequence": 0,
  "Type": "string",
  "Value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|For list fields, this is the list item code.|
|Label|string|false|none|The label value for the custom field.|
|ListItemID|string|false|none|For list fields, this is the list item ID.|
|Sequence|integer(int32)|false|none|The order in which this field appears on the form.|
|Type|string|false|none|The custom field type. Possible values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text|
|Value|string|false|none|The value in the Org Unit or Custom field. For list fields, this is the name of the list item.  Maximum length: 48 characters|

