---
title: Latest Bookings v3.0
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

<h1 id="latest-bookings">Latest Bookings v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

<h1 id="latest-bookings-resources">Resources</h1>

## get__insights_latestbookings_

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/insights/latestbookings/ \
  -H 'Accept: application/json'

```

```http
GET https://www.concursolutions.com/api/v3.0/insights/latestbookings/ HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/insights/latestbookings/',
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

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/insights/latestbookings/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/insights/latestbookings/', headers = headers)

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
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/insights/latestbookings/', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/insights/latestbookings/");
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
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/insights/latestbookings/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /insights/latestbookings/`

*Get the latest hotel and air booking for a particular user.*

Get the latest hotel and air booking for a particular user.

<h3 id="get__insights_latestbookings_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|false|Optional. The login ID of the user. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.|

> Example responses

> 200 Response

```json
{
  "Airlines": {
    "BookingClass": "string",
    "Code": "string"
  },
  "Hotel": {
    "Location": "string",
    "StarRating": 0
  }
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<LatestBooking>
  <Airlines>
    <BookingClass>string</BookingClass>
    <Code>string</Code>
  </Airlines>
  <Hotel>
    <Location>string</Location>
    <StarRating>0</StarRating>
  </Hotel>
</LatestBooking>
```

<h3 id="get__insights_latestbookings_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[LatestBooking](#schemalatestbooking)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Airline">Airline</h2>

<a id="schemaairline"></a>
<a id="schema_Airline"></a>
<a id="tocSairline"></a>
<a id="tocsairline"></a>

```json
{
  "BookingClass": "string",
  "Code": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BookingClass|string|false|none|The booking class of the latest booked airline segment.|
|Code|string|false|none|The airline code of the latest booked airline segment.|

<h2 id="tocS_Hotel">Hotel</h2>

<a id="schemahotel"></a>
<a id="schema_Hotel"></a>
<a id="tocShotel"></a>
<a id="tocshotel"></a>

```json
{
  "Location": "string",
  "StarRating": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Location|string|false|none|The <a target="_blank" href=" http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> of the location of the latest booked hotel segment.|
|StarRating|integer(int32)|false|none|The star rating of the latest booked hotel segment. Possible values are from 0 - 5. Values 1 - 5 are mapped to the <a target="_blank" href="http://www.northstartravelmedia.com/">Northstar</a> standard. If the value is 0, the star rating could not be found.|

<h2 id="tocS_LatestBooking">LatestBooking</h2>

<a id="schemalatestbooking"></a>
<a id="schema_LatestBooking"></a>
<a id="tocSlatestbooking"></a>
<a id="tocslatestbooking"></a>

```json
{
  "Airlines": {
    "BookingClass": "string",
    "Code": "string"
  },
  "Hotel": {
    "Location": "string",
    "StarRating": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Airlines|[Airline](#schemaairline)|false|none|none|
|Hotel|[Hotel](#schemahotel)|false|none|none|

