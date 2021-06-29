

<h2 id="request-group-configurations">Request Group Configurations v3.1</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Requests allow travelers to submit travel plans, expected expenses, and expected cash advance needs prior to spending funds. Request policies define the required information and workflow for the requests. This API provides the details of the Request policies for the supplied user ID.

Base URLs:

* <a href="https://us.api.concursolutions.com/api/v3.1">https://us.api.concursolutions.com/api/v3.1</a>





    

    

<h3 id="request-group-configurations-resources">Resources</h3>

#### get__travelrequest_requestgroupconfigurations

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/api/v3.1/travelrequest/requestgroupconfigurations \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://us.api.concursolutions.com/api/v3.1/travelrequest/requestgroupconfigurations HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://us.api.concursolutions.com/api/v3.1/travelrequest/requestgroupconfigurations',
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

result = RestClient.get 'https://us.api.concursolutions.com/api/v3.1/travelrequest/requestgroupconfigurations',
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

r = requests.get('https://us.api.concursolutions.com/api/v3.1/travelrequest/requestgroupconfigurations', headers = headers)

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
    $response = $client->request('GET','https://us.api.concursolutions.com/api/v3.1/travelrequest/requestgroupconfigurations', array(
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
URL obj = new URL("https://us.api.concursolutions.com/api/v3.1/travelrequest/requestgroupconfigurations");
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
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/api/v3.1/travelrequest/requestgroupconfigurations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /travelrequest/requestgroupconfigurations`

*Get Request group configuration.*

Get the Request group configuration owned by the specified user, or all Request group configurations for the company.

<h3 id="get__travelrequest_requestgroupconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|false|The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.|
|offset|query|string|false|Starting page offset|
|limit|query|integer(int32)|false|Determines the number of records to return (default 10)|

> Example responses

> 200 Response

```json
{
  "Items": {
    "AgencyOffices": {
      "ID": "string",
      "Name": "string"
    },
    "DefaultPolicyID": "string",
    "ID": "string",
    "Name": "string",
    "Policies": {
      "HeaderFormID": "string",
      "ID": "string",
      "IsDefault": true,
      "Name": "string",
      "NoCreation": true,
      "SegmentTypes": {
        "DisplayOrder": 0,
        "IconCode": "string",
        "ID": "string",
        "Name": "string",
        "SegmentCustomFormID": "string",
        "SegmentFormID": "string",
        "SegmentTypeCode": "string"
      }
    },
    "RequestTypes": {
      "Code": "string",
      "Name": "string"
    },
    "URI": "string"
  },
  "NextPage": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<RequestGroupConfigurationCollection>
  <Items>
    <AgencyOffices>
      <ID>string</ID>
      <Name>string</Name>
    </AgencyOffices>
    <DefaultPolicyID>string</DefaultPolicyID>
    <ID>string</ID>
    <Name>string</Name>
    <Policies>
      <HeaderFormID>string</HeaderFormID>
      <ID>string</ID>
      <IsDefault>true</IsDefault>
      <Name>string</Name>
      <NoCreation>true</NoCreation>
      <SegmentTypes>
        <DisplayOrder>0</DisplayOrder>
        <IconCode>string</IconCode>
        <ID>string</ID>
        <Name>string</Name>
        <SegmentCustomFormID>string</SegmentCustomFormID>
        <SegmentFormID>string</SegmentFormID>
        <SegmentTypeCode>string</SegmentTypeCode>
      </SegmentTypes>
    </Policies>
    <RequestTypes>
      <Code>string</Code>
      <Name>string</Name>
    </RequestTypes>
    <URI>string</URI>
  </Items>
  <NextPage>string</NextPage>
</RequestGroupConfigurationCollection>
```

<h3 id="get__travelrequest_requestgroupconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[RequestGroupConfigurationCollection](#schemarequestgroupconfigurationcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

### Schemas

<h3 id="tocS_AgencyOffice">AgencyOffice</h3>

<a id="schemaagencyoffice"></a>
<a id="schema_AgencyOffice"></a>
<a id="tocSagencyoffice"></a>
<a id="tocsagencyoffice"></a>

```json
{
  "ID": "string",
  "Name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|The ID of the travel agency office.|
|Name|string|false|none|The travel agency office name.|

<h3 id="tocS_Policy">Policy</h3>

<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "HeaderFormID": "string",
  "ID": "string",
  "IsDefault": true,
  "Name": "string",
  "NoCreation": true,
  "SegmentTypes": {
    "DisplayOrder": 0,
    "IconCode": "string",
    "ID": "string",
    "Name": "string",
    "SegmentCustomFormID": "string",
    "SegmentFormID": "string",
    "SegmentTypeCode": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HeaderFormID|string|false|none|The unique identifier of the Header Form resource. See the "Forms" resource for more information.|
|ID|string|false|none|The unique identifier of the resource.|
|IsDefault|boolean|false|none|Indicates whether this policy is the default. Format: true or false|
|Name|string|false|none|The name of the policy.|
|NoCreation|boolean|false|none|Indicates whether this policy allows the creation of new Requests by the user. Format: true or false|
|SegmentTypes|[SegmentType](#schemasegmenttype)|false|none|none|

<h3 id="tocS_RequestGroupConfiguration">RequestGroupConfiguration</h3>

<a id="schemarequestgroupconfiguration"></a>
<a id="schema_RequestGroupConfiguration"></a>
<a id="tocSrequestgroupconfiguration"></a>
<a id="tocsrequestgroupconfiguration"></a>

```json
{
  "AgencyOffices": {
    "ID": "string",
    "Name": "string"
  },
  "DefaultPolicyID": "string",
  "ID": "string",
  "Name": "string",
  "Policies": {
    "HeaderFormID": "string",
    "ID": "string",
    "IsDefault": true,
    "Name": "string",
    "NoCreation": true,
    "SegmentTypes": {
      "DisplayOrder": 0,
      "IconCode": "string",
      "ID": "string",
      "Name": "string",
      "SegmentCustomFormID": "string",
      "SegmentFormID": "string",
      "SegmentTypeCode": "string"
    }
  },
  "RequestTypes": {
    "Code": "string",
    "Name": "string"
  },
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgencyOffices|[AgencyOffice](#schemaagencyoffice)|false|none|none|
|DefaultPolicyID|string|false|none|The unique identifier of the first policy which allows creation of new Request.|
|ID|string|false|none|The unique identifier of the resource.|
|Name|string|false|none|The name of the Request group Configuration.|
|Policies|[Policy](#schemapolicy)|false|none|none|
|RequestTypes|[RequestType](#schemarequesttype)|false|none|none|
|URI|string|false|none|The URI to the resource.|

<h3 id="tocS_RequestGroupConfigurationCollection">RequestGroupConfigurationCollection</h3>

<a id="schemarequestgroupconfigurationcollection"></a>
<a id="schema_RequestGroupConfigurationCollection"></a>
<a id="tocSrequestgroupconfigurationcollection"></a>
<a id="tocsrequestgroupconfigurationcollection"></a>

```json
{
  "Items": {
    "AgencyOffices": {
      "ID": "string",
      "Name": "string"
    },
    "DefaultPolicyID": "string",
    "ID": "string",
    "Name": "string",
    "Policies": {
      "HeaderFormID": "string",
      "ID": "string",
      "IsDefault": true,
      "Name": "string",
      "NoCreation": true,
      "SegmentTypes": {
        "DisplayOrder": 0,
        "IconCode": "string",
        "ID": "string",
        "Name": "string",
        "SegmentCustomFormID": "string",
        "SegmentFormID": "string",
        "SegmentTypeCode": "string"
      }
    },
    "RequestTypes": {
      "Code": "string",
      "Name": "string"
    },
    "URI": "string"
  },
  "NextPage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[RequestGroupConfiguration](#schemarequestgroupconfiguration)|false|none|none|
|NextPage|string|false|none|The URI of the next page of results, if any.|

<h3 id="tocS_RequestType">RequestType</h3>

<a id="schemarequesttype"></a>
<a id="schema_RequestType"></a>
<a id="tocSrequesttype"></a>
<a id="tocsrequesttype"></a>

```json
{
  "Code": "string",
  "Name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|The Request type code.|
|Name|string|false|none|The Request type name.|

<h3 id="tocS_SegmentType">SegmentType</h3>

<a id="schemasegmenttype"></a>
<a id="schema_SegmentType"></a>
<a id="tocSsegmenttype"></a>
<a id="tocssegmenttype"></a>

```json
{
  "DisplayOrder": 0,
  "IconCode": "string",
  "ID": "string",
  "Name": "string",
  "SegmentCustomFormID": "string",
  "SegmentFormID": "string",
  "SegmentTypeCode": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayOrder|integer(int32)|false|none|The display order of the icon associated with the segment type.|
|IconCode|string|false|none|The code for the icon associated with the segment type.|
|ID|string|false|none|The unique identifier of the resource.|
|Name|string|false|none|The name of the segment type.|
|SegmentCustomFormID|string|false|none|The unique identifier of the Segment Form resource which contains custom fields. See the "Forms" resource for more information.|
|SegmentFormID|string|false|none|The unique identifier of the Segment Form resource. See the "Forms" resource for more information.|
|SegmentTypeCode|string|false|none|The code for the type of itinerary segment.|


# Version 3.2
