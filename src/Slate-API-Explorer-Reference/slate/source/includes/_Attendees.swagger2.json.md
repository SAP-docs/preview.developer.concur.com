

<h2 id="attendees">Attendees v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Get the configured attendees for a user. You can also update attendees by providing some or all of the attendee fields, or create new attendees.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>





    

    

<h3 id="attendees-resources">Resources</h3>

#### get__expense_attendees

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/attendees \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/attendees HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/attendees',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/attendees',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/attendees', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/attendees', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/attendees");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/attendees", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/attendees`

*Get all attendees*

Gets all attendees owned by the specified user, or the user associated with the access token.

<h3 id="get__expense_attendees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalID|query|string|false|The external ID of an attendee. By entering a value for this parameter, you can limit the results to the attendees who match the specified external ID. Up to 10 comma-separated external IDs may be specified.|
|attendeeTypeID|query|string|false|The ID of an attendee type. By entering a value for this parameter, you can limit the results to the attendees who match the specified type.|
|offset|query|string|false|The starting point of the next set of results, after the limit specified in the limit field has been reached.|
|limit|query|integer(int32)|false|The number of records to return. Default value: 25|
|user|query|string|false|The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "Items": {
    "AttendeeTypeCode": "string",
    "AttendeeTypeID": "string",
    "Company": "string",
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
    "ExternalID": "string",
    "FirstName": "string",
    "HasExceptionsPrevYear": true,
    "HasExceptionsYTD": true,
    "ID": "string",
    "LastName": "string",
    "MiddleInitial": "string",
    "OwnerLoginID": "string",
    "OwnerName": "string",
    "Suffix": "string",
    "Title": "string",
    "TotalAmountPrevYear": 0,
    "TotalAmountYTD": 0,
    "URI": "string",
    "VersionNumber": 0
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<AttendeeCollection>
  <Items>
    <AttendeeTypeCode>string</AttendeeTypeCode>
    <AttendeeTypeID>string</AttendeeTypeID>
    <Company>string</Company>
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
    <ExternalID>string</ExternalID>
    <FirstName>string</FirstName>
    <HasExceptionsPrevYear>true</HasExceptionsPrevYear>
    <HasExceptionsYTD>true</HasExceptionsYTD>
    <ID>string</ID>
    <LastName>string</LastName>
    <MiddleInitial>string</MiddleInitial>
    <OwnerLoginID>string</OwnerLoginID>
    <OwnerName>string</OwnerName>
    <Suffix>string</Suffix>
    <Title>string</Title>
    <TotalAmountPrevYear>0</TotalAmountPrevYear>
    <TotalAmountYTD>0</TotalAmountYTD>
    <URI>string</URI>
    <VersionNumber>0</VersionNumber>
  </Items>
  <NextPage>string</NextPage>
</AttendeeCollection>
```

<h3 id="get__expense_attendees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[AttendeeCollection](#schemaattendeecollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### post__expense_attendees

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/expense/attendees \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://www.concursolutions.com/api/v3.0/expense/attendees HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "AttendeeTypeID": "string",
  "Company": "string",
  "CurrencyCode": "string",
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
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "ExternalID": "string",
  "FirstName": "string",
  "LastName": "string",
  "MiddleInitial": "string",
  "Suffix": "string",
  "Title": "string",
  "TotalAmountYTD": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/attendees',
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

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/expense/attendees',
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

r = requests.post('https://www.concursolutions.com/api/v3.0/expense/attendees', headers = headers)

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
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/expense/attendees', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/attendees");
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
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/expense/attendees", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /expense/attendees`

*Create attendee*

Creates a new attendee.

> Body parameter

```json
{
  "AttendeeTypeID": "string",
  "Company": "string",
  "CurrencyCode": "string",
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
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "ExternalID": "string",
  "FirstName": "string",
  "LastName": "string",
  "MiddleInitial": "string",
  "Suffix": "string",
  "Title": "string",
  "TotalAmountYTD": 0
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<AttendeePost>
  <AttendeeTypeID>string</AttendeeTypeID>
  <Company>string</Company>
  <CurrencyCode>string</CurrencyCode>
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
  <Custom3>string</Custom3>
  <Custom4>string</Custom4>
  <Custom5>string</Custom5>
  <Custom6>string</Custom6>
  <Custom7>string</Custom7>
  <Custom8>string</Custom8>
  <Custom9>string</Custom9>
  <ExternalID>string</ExternalID>
  <FirstName>string</FirstName>
  <LastName>string</LastName>
  <MiddleInitial>string</MiddleInitial>
  <Suffix>string</Suffix>
  <Title>string</Title>
  <TotalAmountYTD>0</TotalAmountYTD>
</AttendeePost>
```

<h3 id="post__expense_attendees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|false|The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.|
|body|body|[AttendeePost](#schemaattendeepost)|true|The Attendee object to create.|

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

<h3 id="post__expense_attendees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreateResponse](#schemacreateresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### get__expense_attendees_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/expense/attendees/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/expense/attendees/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/attendees/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/expense/attendees/{id}',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/expense/attendees/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/expense/attendees/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/attendees/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/expense/attendees/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /expense/attendees/{id}`

*Get attendee*

Gets a single attendee by ID.

<h3 id="get__expense_attendees_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The attendee ID.|
|user|query|string|false|The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "AttendeeTypeCode": "string",
  "AttendeeTypeID": "string",
  "Company": "string",
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
  "ExternalID": "string",
  "FirstName": "string",
  "HasExceptionsPrevYear": true,
  "HasExceptionsYTD": true,
  "ID": "string",
  "LastName": "string",
  "MiddleInitial": "string",
  "OwnerLoginID": "string",
  "OwnerName": "string",
  "Suffix": "string",
  "Title": "string",
  "TotalAmountPrevYear": 0,
  "TotalAmountYTD": 0,
  "URI": "string",
  "VersionNumber": 0
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<AttendeeGet>
  <AttendeeTypeCode>string</AttendeeTypeCode>
  <AttendeeTypeID>string</AttendeeTypeID>
  <Company>string</Company>
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
  <ExternalID>string</ExternalID>
  <FirstName>string</FirstName>
  <HasExceptionsPrevYear>true</HasExceptionsPrevYear>
  <HasExceptionsYTD>true</HasExceptionsYTD>
  <ID>string</ID>
  <LastName>string</LastName>
  <MiddleInitial>string</MiddleInitial>
  <OwnerLoginID>string</OwnerLoginID>
  <OwnerName>string</OwnerName>
  <Suffix>string</Suffix>
  <Title>string</Title>
  <TotalAmountPrevYear>0</TotalAmountPrevYear>
  <TotalAmountYTD>0</TotalAmountYTD>
  <URI>string</URI>
  <VersionNumber>0</VersionNumber>
</AttendeeGet>
```

<h3 id="get__expense_attendees_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[AttendeeGet](#schemaattendeeget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### put__expense_attendees_{id}

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/expense/attendees/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://www.concursolutions.com/api/v3.0/expense/attendees/{id} HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "AttendeeTypeID": "string",
  "Company": "string",
  "CurrencyCode": "string",
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
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "ExternalID": "string",
  "FirstName": "string",
  "LastName": "string",
  "MiddleInitial": "string",
  "Suffix": "string",
  "Title": "string",
  "TotalAmountYTD": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/attendees/{id}',
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

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/expense/attendees/{id}',
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

r = requests.put('https://www.concursolutions.com/api/v3.0/expense/attendees/{id}', headers = headers)

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
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/expense/attendees/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/attendees/{id}");
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
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/expense/attendees/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /expense/attendees/{id}`

*Update attendee*

Updates the specified attendee. Only the fields provided in the supplied object are updated. Missing fields are not altered.

> Body parameter

```json
{
  "AttendeeTypeID": "string",
  "Company": "string",
  "CurrencyCode": "string",
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
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "ExternalID": "string",
  "FirstName": "string",
  "LastName": "string",
  "MiddleInitial": "string",
  "Suffix": "string",
  "Title": "string",
  "TotalAmountYTD": 0
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<AttendeePut>
  <AttendeeTypeID>string</AttendeeTypeID>
  <Company>string</Company>
  <CurrencyCode>string</CurrencyCode>
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
  <Custom3>string</Custom3>
  <Custom4>string</Custom4>
  <Custom5>string</Custom5>
  <Custom6>string</Custom6>
  <Custom7>string</Custom7>
  <Custom8>string</Custom8>
  <Custom9>string</Custom9>
  <ExternalID>string</ExternalID>
  <FirstName>string</FirstName>
  <LastName>string</LastName>
  <MiddleInitial>string</MiddleInitial>
  <Suffix>string</Suffix>
  <Title>string</Title>
  <TotalAmountYTD>0</TotalAmountYTD>
</AttendeePut>
```

<h3 id="put__expense_attendees_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The attendee ID.|
|user|query|string|false|The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.|
|body|body|[AttendeePut](#schemaattendeeput)|true|The partial or complete Attendee object to update.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="put__expense_attendees_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### delete__expense_attendees_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE https://www.concursolutions.com/api/v3.0/expense/attendees/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE https://www.concursolutions.com/api/v3.0/expense/attendees/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/expense/attendees/{id}',
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

result = RestClient.delete 'https://www.concursolutions.com/api/v3.0/expense/attendees/{id}',
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

r = requests.delete('https://www.concursolutions.com/api/v3.0/expense/attendees/{id}', headers = headers)

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
    $response = $client->request('DELETE','https://www.concursolutions.com/api/v3.0/expense/attendees/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/expense/attendees/{id}");
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
    req, err := http.NewRequest("DELETE", "https://www.concursolutions.com/api/v3.0/expense/attendees/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /expense/attendees/{id}`

*Delete an attendee by ID*

DEPRECATED: 05/19/2016 UNSUPPORTED: 11/19/2016 Deletes the specified attendee.

<h3 id="delete__expense_attendees_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the attendee to delete.|
|user|query|string|false|The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Void/>
```

<h3 id="delete__expense_attendees_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Void](#schemavoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

### Schemas

<h3 id="tocS_AttendeeCollection">AttendeeCollection</h3>

<a id="schemaattendeecollection"></a>
<a id="schema_AttendeeCollection"></a>
<a id="tocSattendeecollection"></a>
<a id="tocsattendeecollection"></a>

```json
{
  "Items": {
    "AttendeeTypeCode": "string",
    "AttendeeTypeID": "string",
    "Company": "string",
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
    "ExternalID": "string",
    "FirstName": "string",
    "HasExceptionsPrevYear": true,
    "HasExceptionsYTD": true,
    "ID": "string",
    "LastName": "string",
    "MiddleInitial": "string",
    "OwnerLoginID": "string",
    "OwnerName": "string",
    "Suffix": "string",
    "Title": "string",
    "TotalAmountPrevYear": 0,
    "TotalAmountYTD": 0,
    "URI": "string",
    "VersionNumber": 0
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[AttendeeGet](#schemaattendeeget)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h3 id="tocS_AttendeeGet">AttendeeGet</h3>

<a id="schemaattendeeget"></a>
<a id="schema_AttendeeGet"></a>
<a id="tocSattendeeget"></a>
<a id="tocsattendeeget"></a>

```json
{
  "AttendeeTypeCode": "string",
  "AttendeeTypeID": "string",
  "Company": "string",
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
  "ExternalID": "string",
  "FirstName": "string",
  "HasExceptionsPrevYear": true,
  "HasExceptionsYTD": true,
  "ID": "string",
  "LastName": "string",
  "MiddleInitial": "string",
  "OwnerLoginID": "string",
  "OwnerName": "string",
  "Suffix": "string",
  "Title": "string",
  "TotalAmountPrevYear": 0,
  "TotalAmountYTD": 0,
  "URI": "string",
  "VersionNumber": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttendeeTypeCode|string|false|none|A code that indicates the type of attendee. Examples: EMPLOYEE, SPOUSE, BUSGUEST. Maximum length: 40 characters|
|AttendeeTypeID|string|false|none|The ID of the attendee type. To obtain the attendee type ID value, use the "GET /expense/attendeetypes" endpoint. The value of the ID element in the response is the attendee type ID.|
|Company|string|false|none|The name of the attendee's company. Maximum length: 150 characters|
|CurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for monetary amounts related to an attendee.|
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
|ExternalID|string|false|none|A unique identifier for the attendee, assigned outside of Concur. Maximum length: 48 characters|
|FirstName|string|false|none|The attendee's first name. Maximum length: 50 characters|
|HasExceptionsPrevYear|boolean|false|none|Determines whether the attendee had exceptions in the previous year, based on yearly total limits for attendees. Format: true or false|
|HasExceptionsYTD|boolean|false|none|Determines whether the attendee has exceptions in the current year, based on yearly total limits for attendees. Format: true or false|
|ID|string|false|none|The unique identifier of the resource.|
|LastName|string|false|none|The attendee's last name. Maximum length: 132 characters|
|MiddleInitial|string|false|none|The attendee's middle initial. Maximum length: 1 character|
|OwnerLoginID|string|false|none|The login ID of the user who owns the attendee record.|
|OwnerName|string|false|none|The name of the user who owns the attendee record.|
|Suffix|string|false|none|The attendee's name suffix. Maximum length: 32 characters|
|Title|string|false|none|The attendee's title. Maximum length: 32 characters|
|TotalAmountPrevYear|number(double)|false|none|The total amount spent on the attendee in the previous calendar year.|
|TotalAmountYTD|number(double)|false|none|The total amount spent on the attendee in the current calendar year.|
|URI|string|false|none|The URI to the resource.|
|VersionNumber|integer(int32)|false|none|The attendee's version number.|

<h3 id="tocS_AttendeePost">AttendeePost</h3>

<a id="schemaattendeepost"></a>
<a id="schema_AttendeePost"></a>
<a id="tocSattendeepost"></a>
<a id="tocsattendeepost"></a>

```json
{
  "AttendeeTypeID": "string",
  "Company": "string",
  "CurrencyCode": "string",
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
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "ExternalID": "string",
  "FirstName": "string",
  "LastName": "string",
  "MiddleInitial": "string",
  "Suffix": "string",
  "Title": "string",
  "TotalAmountYTD": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttendeeTypeID|string|false|none|The ID of the attendee type. To obtain the attendee type ID value, use the "GET /expense/attendeetypes" endpoint. The value of the ID element in the response is the attendee type ID.|
|Company|string|false|none|The name of the attendee's company. Maximum length: 150 characters|
|CurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for monetary amounts related to an attendee.|
|Custom1|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom10|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom11|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom12|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom13|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom14|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom15|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom16|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom17|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom18|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom19|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom2|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom20|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom21|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom22|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom23|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom24|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom25|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom3|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom4|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom5|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom6|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom7|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom8|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom9|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|ExternalID|string|false|none|A unique identifier for the attendee, assigned outside of SAP Concur. Maximum length: 48 characters|
|FirstName|string|false|none|The attendee's first name. Maximum length: 50 characters|
|LastName|string|false|none|The attendee's last name. Maximum length: 132 characters|
|MiddleInitial|string|false|none|The attendee's middle initial. Maximum length: 1 character|
|Suffix|string|false|none|The attendee's name suffix. Maximum length: 32 characters|
|Title|string|false|none|The attendee's title. Maximum length: 32 characters|
|TotalAmountYTD|number(double)|false|none|The total amount spent on the attendee in the current calendar year.|

<h3 id="tocS_AttendeePut">AttendeePut</h3>

<a id="schemaattendeeput"></a>
<a id="schema_AttendeePut"></a>
<a id="tocSattendeeput"></a>
<a id="tocsattendeeput"></a>

```json
{
  "AttendeeTypeID": "string",
  "Company": "string",
  "CurrencyCode": "string",
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
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "ExternalID": "string",
  "FirstName": "string",
  "LastName": "string",
  "MiddleInitial": "string",
  "Suffix": "string",
  "Title": "string",
  "TotalAmountYTD": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttendeeTypeID|string|false|none|The ID of the attendee type. To obtain the attendee type ID value, use the "GET /expense/attendeetypes" endpoint. The value of the ID element in the response is the attendee type ID.|
|Company|string|false|none|The name of the attendee's company. Maximum length: 150 characters|
|CurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for monetary amounts related to an attendee.|
|Custom1|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom10|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom11|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom12|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom13|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom14|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom15|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom16|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom17|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom18|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom19|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom2|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom20|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom21|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom22|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom23|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom24|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom25|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom3|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom4|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom5|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom6|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom7|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom8|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|Custom9|string|false|none|A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.|
|ExternalID|string|false|none|A unique identifier for the attendee, assigned outside of Concur. Maximum length: 48 characters|
|FirstName|string|false|none|The attendee's first name. Maximum length: 50 characters|
|LastName|string|false|none|The attendee's last name. Maximum length: 132 characters|
|MiddleInitial|string|false|none|The attendee's middle initial. Maximum length: 1 character|
|Suffix|string|false|none|The attendee's name suffix. Maximum length: 32 characters|
|Title|string|false|none|The attendee's title. Maximum length: 32 characters|
|TotalAmountYTD|number(double)|false|none|The total amount spent on the attendee in the current calendar year.|

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
|ID|string|false|none|The attendee's title. Maximum length: 32 characters|
|URI|string|false|none|The attendee's title. Maximum length: 32 characters|

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

