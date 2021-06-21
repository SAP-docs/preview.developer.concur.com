

<h2 id="sap-concur-internal-get-users-bulk-api">SAP Concur Internal Get Users Bulk API v3.1.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Returns the list of users at the company specified in the access token that match the search criteria.

Base URLs:

* <a href="https://sandbox.api.sap.com/concur/api/v3.1">https://sandbox.api.sap.com/concur/api/v3.1</a>





    

    

<h3 id="sap-concur-internal-get-users-bulk-api-resources">Resources</h3>

#### get__users_

> Code samples

```shell
# You can also use wget
curl -X GET https://sandbox.api.sap.com/concur/api/v3.1/users/ \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

```http
GET https://sandbox.api.sap.com/concur/api/v3.1/users/ HTTP/1.1
Host: sandbox.api.sap.com
Accept: */*
Authorization: string

```

```javascript

const headers = {
  'Accept':'*/*',
  'Authorization':'string'
};

fetch('https://sandbox.api.sap.com/concur/api/v3.1/users/',
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
  'Accept' => '*/*',
  'Authorization' => 'string'
}

result = RestClient.get 'https://sandbox.api.sap.com/concur/api/v3.1/users/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': '*/*',
  'Authorization': 'string'
}

r = requests.get('https://sandbox.api.sap.com/concur/api/v3.1/users/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => '*/*',
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://sandbox.api.sap.com/concur/api/v3.1/users/', array(
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
URL obj = new URL("https://sandbox.api.sap.com/concur/api/v3.1/users/");
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
        "Accept": []string{"*/*"},
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://sandbox.api.sap.com/concur/api/v3.1/users/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/`

<h3 id="get__users_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|Company level access bearer token.|
|offset|query|integer|false|The number of items to skip before returning result set.|
|limit|query|integer|false|The numbers of items to return.|
|isactive|query|string|false|Whether the user is active|
|loginid|query|string|false|login_id of the user.|
|lastname|query|string|false|Last name of the user.|
|employeeid|query|string|false|Employee Id of the user.|
|primaryemail|query|string|false|Primary email of the user.|
|countrycode|query|string|false|Country code of the user.|
|id|query|string|false|Id of the user.|

> Example responses

> 200 Response

<h3 id="get__users_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Response](#schemaresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authorization Required|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

### Schemas

<h3 id="tocS_User">User</h3>

<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "ID": "99BFFFC3-C0BE-44FF-A441-AE1FFFFFF75B8",
  "Active": true,
  "CountryCode": "US",
  "CellPhoneNumber": "425-555-1111",
  "PrimaryEmail": "johndoe@gmail.com",
  "EmployeeID": "johndoe@gmail.com",
  "OrganizationUnit": "IT",
  "FirstName": "Jane",
  "MiddleName": "",
  "LastName": "Doe",
  "LoginID": "janedoe@gmail.com",
  "Emails": [
    "johndoe@gmail.com"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|The unique identifier of the resource.|
|Active|boolean|false|none|Indicates whether the user is currently active or not.|
|CountryCode|string|false|none|The user's country code.|
|CellPhoneNumber|string|false|none|The cell phone number of the user.|
|PrimaryEmail|string|false|none|The primary email of the user.|
|EmployeeID|string|false|none|The employee ID of the user.|
|OrganizationUnit|string|false|none|The configured organization unit of the user.|
|FirstName|string|false|none|The first name of the user.|
|MiddleName|string|false|none|The middle name of the user.|
|LastName|string|false|none|The last name of the user.|
|LoginID|string|false|none|The login ID of the user.|
|Emails|[string]|false|none|none|

<h3 id="tocS_Response">Response</h3>

<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "total": 10,
  "offset": 1,
  "limit": 10,
  "company": {
    "name": "Company Name LLC",
    "address": "601 108th ave NE",
    "city": "Bellevue",
    "state": "WA",
    "zip": "98004",
    "country": "US"
  },
  "Items": [
    {
      "ID": "99BFFFC3-C0BE-44FF-A441-AE1FFFFFF75B8",
      "Active": true,
      "CountryCode": "US",
      "CellPhoneNumber": "425-555-1111",
      "PrimaryEmail": "johndoe@gmail.com",
      "EmployeeID": "johndoe@gmail.com",
      "OrganizationUnit": "IT",
      "FirstName": "Jane",
      "MiddleName": "",
      "LastName": "Doe",
      "LoginID": "janedoe@gmail.com",
      "Emails": [
        "johndoe@gmail.com"
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|The total number of users within the company.|
|offset|integer|false|none|The offset to begin returning the list of users.|
|limit|integer|false|none|The number of user records to return in that call. Maximum: 1000|
|company|object|false|none|none|
|» name|string|false|none|The company name.|
|» address|string|false|none|The company address|
|» city|string|false|none|The city of the company address.|
|» state|string|false|none|The state/province of the company address.|
|» zip|string|false|none|The zip code of the company address.|
|» country|string|false|none|The country code of the company address.|
|Items|[[User](#schemauser)]|false|none|none|

