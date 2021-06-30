
<h2 id="users">Users v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides details of all the client's SAP Concur users that meet the search parameters.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>





    

    

<h3 id="users-resources">Resources</h3>

#### get__common_users

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/common/users \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/common/users HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/common/users',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/common/users',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/common/users', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/common/users', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/users");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/common/users", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /common/users`

*Get all users.*

Retrieves all users based on the search criteria.

<h3 id="get__common_users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|The starting point of the next set of results, after the limit specified in the limit field has been reached.|
|limit|query|integer(int32)|false|The number of records to return. Default value: 25. Maximum: 100.|
|primaryEmail|query|string|false|The primary email of the user.|
|employeeID|query|string|false|The employee ID of the user.|
|user|query|string|false|The login ID of the user.|
|lastName|query|string|false|The last name of the user.|
|active|query|boolean|false|Indicates whether to return active or inactive users. FORMAT: true or false|

> Example responses

> 200 Response

```json
{
  "Items": {
    "Active": true,
    "CellPhoneNumber": "string",
    "EmployeeID": "string",
    "FirstName": "string",
    "ID": "string",
    "LastName": "string",
    "LoginID": "string",
    "MiddleName": "string",
    "OrganizationUnit": "string",
    "PrimaryEmail": "string",
    "URI": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<UserCollection>
  <Items>
    <Active>true</Active>
    <CellPhoneNumber>string</CellPhoneNumber>
    <EmployeeID>string</EmployeeID>
    <FirstName>string</FirstName>
    <ID>string</ID>
    <LastName>string</LastName>
    <LoginID>string</LoginID>
    <MiddleName>string</MiddleName>
    <OrganizationUnit>string</OrganizationUnit>
    <PrimaryEmail>string</PrimaryEmail>
    <URI>string</URI>
  </Items>
  <NextPage>string</NextPage>
</UserCollection>
```

<h3 id="get__common_users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[UserCollection](#schemausercollection)|

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
  "Active": true,
  "CellPhoneNumber": "string",
  "EmployeeID": "string",
  "FirstName": "string",
  "ID": "string",
  "LastName": "string",
  "LoginID": "string",
  "MiddleName": "string",
  "OrganizationUnit": "string",
  "PrimaryEmail": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|Indicates whether the user is currently active or not.|
|CellPhoneNumber|string|false|none|The cell phone number of the user.|
|EmployeeID|string|false|none|The employee ID of the user.|
|FirstName|string|false|none|The first name of the user.|
|ID|string|false|none|The unique identifier of the resource.|
|LastName|string|false|none|The last name of the user.|
|LoginID|string|false|none|The login ID of the user.|
|MiddleName|string|false|none|The middle name of the user.|
|OrganizationUnit|string|false|none|The organization unit of the user.|
|PrimaryEmail|string|false|none|The primary email of the user.|
|URI|string|false|none|The URI to the resource.|

<h3 id="tocS_UserCollection">UserCollection</h3>

<a id="schemausercollection"></a>
<a id="schema_UserCollection"></a>
<a id="tocSusercollection"></a>
<a id="tocsusercollection"></a>

```json
{
  "Items": {
    "Active": true,
    "CellPhoneNumber": "string",
    "EmployeeID": "string",
    "FirstName": "string",
    "ID": "string",
    "LastName": "string",
    "LoginID": "string",
    "MiddleName": "string",
    "OrganizationUnit": "string",
    "PrimaryEmail": "string",
    "URI": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[User](#schemauser)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

