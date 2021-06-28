
<h2 id="locations">Locations v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The valid city location codes in SAP Concur. The location codes vary by client, and cannot be used across multiple clients. This API provides methods to get a list of valid locations for the supplied user, or get details of a location by ID.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>





    

    

<h3 id="locations-resources">Resources</h3>

#### get__common_locations

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/common/locations \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/common/locations HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/common/locations',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/common/locations',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/common/locations', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/common/locations', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/locations");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/common/locations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /common/locations`

*Retrieves all locations.*

Gets details of locations that are used by SAP Concur and that are valid at the user's company.

<h3 id="get__common_locations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|The starting point of the next set of results, after the limit specified in the limit field has been reached.|
|limit|query|integer(int32)|false|The number of records to return. Default value: 25.|
|name|query|string|false|A common name associated with the location. This name can be a location description such as a neighborhood (SoHo), a landmark (Statue of Liberty), or a city name (New York).|
|city|query|string|false|The city name of the location.|
|countrySubdivision|query|string|false|The ISO 3166-2:2007 country subdivision code for the location. Example: US-WA.|
|country|query|string|false|The 2-letter ISO 3166-1 country code for the location. Example: United States is US.|
|administrativeRegion|query|string|false|The administrative region of the location. An administrative region is a government unit, such as a county, that contains one or more cities.|

> Example responses

> 200 Response

```json
{
  "Items": {
    "AdministrativeRegion": "string",
    "Country": "string",
    "CountrySubdivision": "string",
    "IATACode": "string",
    "ID": "string",
    "IsAirport": true,
    "IsBookingTool": true,
    "Latitude": 0,
    "Longitude": 0,
    "Name": "string",
    "URI": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<LocationCollection>
  <Items>
    <AdministrativeRegion>string</AdministrativeRegion>
    <Country>string</Country>
    <CountrySubdivision>string</CountrySubdivision>
    <IATACode>string</IATACode>
    <ID>string</ID>
    <IsAirport>true</IsAirport>
    <IsBookingTool>true</IsBookingTool>
    <Latitude>0</Latitude>
    <Longitude>0</Longitude>
    <Name>string</Name>
    <URI>string</URI>
  </Items>
  <NextPage>string</NextPage>
</LocationCollection>
```

<h3 id="get__common_locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[LocationCollection](#schemalocationcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### get__common_locations_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/common/locations/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/common/locations/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/common/locations/{id}',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/common/locations/{id}',
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

r = requests.get('https://www.concursolutions.com/api/v3.0/common/locations/{id}', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/common/locations/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/locations/{id}");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/common/locations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /common/locations/{id}`

*Retrieves a location by ID.*

Gets details of the specified location.

<h3 id="get__common_locations_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the location.|

> Example responses

> 200 Response

```json
{
  "AdministrativeRegion": "string",
  "Country": "string",
  "CountrySubdivision": "string",
  "IATACode": "string",
  "ID": "string",
  "IsAirport": true,
  "IsBookingTool": true,
  "Latitude": 0,
  "Longitude": 0,
  "Name": "string",
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Location>
  <AdministrativeRegion>string</AdministrativeRegion>
  <Country>string</Country>
  <CountrySubdivision>string</CountrySubdivision>
  <IATACode>string</IATACode>
  <ID>string</ID>
  <IsAirport>true</IsAirport>
  <IsBookingTool>true</IsBookingTool>
  <Latitude>0</Latitude>
  <Longitude>0</Longitude>
  <Name>string</Name>
  <URI>string</URI>
</Location>
```

<h3 id="get__common_locations_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Location](#schemalocation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

### Schemas

<h3 id="tocS_Decimal">Decimal</h3>

<a id="schemadecimal"></a>
<a id="schema_Decimal"></a>
<a id="tocSdecimal"></a>
<a id="tocsdecimal"></a>

```json
{}

```

### Properties

*None*

<h3 id="tocS_Location">Location</h3>

<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "AdministrativeRegion": "string",
  "Country": "string",
  "CountrySubdivision": "string",
  "IATACode": "string",
  "ID": "string",
  "IsAirport": true,
  "IsBookingTool": true,
  "Latitude": 0,
  "Longitude": 0,
  "Name": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdministrativeRegion|string|false|none|The administrative region of the location.|
|Country|string|false|none|The 2-letter ISO 3166-1 country code for the location.|
|CountrySubdivision|string|false|none|The ISO 3166-2:2007 country subdivision code for the location. Example: US-WA.|
|IATACode|string|false|none|The International Air Transport Association (IATA) airport code of the location.|
|ID|string|false|none|The unique identifier of the resource.|
|IsAirport|boolean|false|none|Indicates whether the location is an airport. Format: true or false.|
|IsBookingTool|boolean|false|none|Indicates whether the location is used by the booking tool. Format: true or false.|
|Latitude|number(double)|false|none|The latitude of the geocode for the location.|
|Longitude|number(double)|false|none|The longitude of the geocode for the location.|
|Name|string|false|none|The location name. Maximum length: 64 characters.|
|URI|string|false|none|The URI to the resource.|

<h3 id="tocS_LocationCollection">LocationCollection</h3>

<a id="schemalocationcollection"></a>
<a id="schema_LocationCollection"></a>
<a id="tocSlocationcollection"></a>
<a id="tocslocationcollection"></a>

```json
{
  "Items": {
    "AdministrativeRegion": "string",
    "Country": "string",
    "CountrySubdivision": "string",
    "IATACode": "string",
    "ID": "string",
    "IsAirport": true,
    "IsBookingTool": true,
    "Latitude": 0,
    "Longitude": 0,
    "Name": "string",
    "URI": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[Location](#schemalocation)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h3 id="tocS_Nullable_1">Nullable_1</h3>

<a id="schemanullable_1"></a>
<a id="schema_Nullable_1"></a>
<a id="tocSnullable_1"></a>
<a id="tocsnullable_1"></a>

```json
{
  "HasValue": true,
  "Value": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HasValue|boolean|false|none|Indicates whether the location is used by the booking tool. Format: true or false|
|Value|[Decimal](#schemadecimal)|false|none|none|

