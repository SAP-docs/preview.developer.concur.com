
<h2 id="opportunities">Opportunities v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

<h3 id="opportunities-resources">Resources</h3>

#### get__insights_opportunities

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/insights/opportunities \
  -H 'Accept: application/json'

```

```http
GET https://www.concursolutions.com/api/v3.0/insights/opportunities HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/insights/opportunities',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/insights/opportunities',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/insights/opportunities', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/insights/opportunities', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/insights/opportunities");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/insights/opportunities", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /insights/opportunities`

*Gets a collection of opportunities for a specified trip or for all trips that fall within a date range*

Gets a collection of opportunities for a specified trip or for all trips that fall within a date range. Specify values for fromUtc and toUtc to get opportunities for a range of trips. Specify only tripId to get opportunities for a single trip. Specify OpportunityType to filter results by the specified opportunity types.

<h3 id="get__insights_opportunities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tripId|query|string|false|The trip id|
|opportunityType|query|string|false|Comma seperated list of opportunities (Hotel, Car, Air, Rail, Taxi and Service) to get. Do not specify any values to get all opportunities|
|fromUtc|query|string(date-time)|false|The From date in UTC for the date range|
|toUtc|query|string(date-time)|false|The To date in UTC for the date range|

> Example responses

> 200 Response

```json
{
  "Items": {
    "EndCityCode": "string",
    "EndDateLocal": "2019-08-24T14:15:22Z",
    "EndPostalCode": "string",
    "ID": "string",
    "IsActive": true,
    "StartCityCode": "string",
    "StartDateLocal": "2019-08-24T14:15:22Z",
    "StartPostalCode": "string",
    "TripId": "string",
    "Type": "string",
    "URI": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Opportunities>
  <Items>
    <EndCityCode>string</EndCityCode>
    <EndDateLocal>2019-08-24T14:15:22Z</EndDateLocal>
    <EndPostalCode>string</EndPostalCode>
    <ID>string</ID>
    <IsActive>true</IsActive>
    <StartCityCode>string</StartCityCode>
    <StartDateLocal>2019-08-24T14:15:22Z</StartDateLocal>
    <StartPostalCode>string</StartPostalCode>
    <TripId>string</TripId>
    <Type>string</Type>
    <URI>string</URI>
  </Items>
  <NextPage>string</NextPage>
</Opportunities>
```

<h3 id="get__insights_opportunities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Opportunities](#schemaopportunities)|

<aside class="success">
This operation does not require authentication
</aside>

### Schemas

<h3 id="tocS_Opportunities">Opportunities</h3>

<a id="schemaopportunities"></a>
<a id="schema_Opportunities"></a>
<a id="tocSopportunities"></a>
<a id="tocsopportunities"></a>

```json
{
  "Items": {
    "EndCityCode": "string",
    "EndDateLocal": "2019-08-24T14:15:22Z",
    "EndPostalCode": "string",
    "ID": "string",
    "IsActive": true,
    "StartCityCode": "string",
    "StartDateLocal": "2019-08-24T14:15:22Z",
    "StartPostalCode": "string",
    "TripId": "string",
    "Type": "string",
    "URI": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[Opportunity](#schemaopportunity)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h3 id="tocS_Opportunity">Opportunity</h3>

<a id="schemaopportunity"></a>
<a id="schema_Opportunity"></a>
<a id="tocSopportunity"></a>
<a id="tocsopportunity"></a>

```json
{
  "EndCityCode": "string",
  "EndDateLocal": "2019-08-24T14:15:22Z",
  "EndPostalCode": "string",
  "ID": "string",
  "IsActive": true,
  "StartCityCode": "string",
  "StartDateLocal": "2019-08-24T14:15:22Z",
  "StartPostalCode": "string",
  "TripId": "string",
  "Type": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndCityCode|string|false|none|The city code of the destination city where the opportunity is offered|
|EndDateLocal|string(date-time)|false|none|The local end date of the location where the opportunity is offered|
|EndPostalCode|string|false|none|The postal code of the destination location where the opportunity is offered|
|ID|string|false|none|The unique identifier of the resource.|
|IsActive|boolean|false|none|Indicates that the opportunity is currently active|
|StartCityCode|string|false|none|The city code of the originating city where the opportunity is offered|
|StartDateLocal|string(date-time)|false|none|The local start date of the location where the opportunity is offered|
|StartPostalCode|string|false|none|The postal code of the originating location where the opportunity is offered|
|TripId|string|false|none|The trip id of the associated itinerary|
|Type|string|false|none|The type of opportunity|
|URI|string|false|none|The URI to the resource.|

