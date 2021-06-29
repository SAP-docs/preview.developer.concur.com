---
title: Identity APIs v4
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

<h1 id="identity-apis">Identity APIs v4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Identity APIs

Base URLs:

* <a href="https://us.api.concursolutions.com/profile/identity/">https://us.api.concursolutions.com/profile/identity/</a>

<a href="http://us.api.concursolutions.com/terms">Terms of service</a>
Email: <a href="mailto:profile@concur.com">Support</a> 
License: <a href="https://developer.concur.com/Terms-of-Use.html">Concur</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **Authorization**, in: header. 

<h1 id="identity-apis-user">User</h1>

## get__v4_users_lookup_

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/profile/identity/v4/users/lookup/ \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://us.api.concursolutions.com/profile/identity/v4/users/lookup/ HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/profile/identity/v4/users/lookup/',
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
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://us.api.concursolutions.com/profile/identity/v4/users/lookup/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://us.api.concursolutions.com/profile/identity/v4/users/lookup/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://us.api.concursolutions.com/profile/identity/v4/users/lookup/', array(
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
URL obj = new URL("https://us.api.concursolutions.com/profile/identity/v4/users/lookup/");
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
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/profile/identity/v4/users/lookup/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v4/users/lookup/`

*Lookup User Identity*

<h3 id="get__v4_users_lookup_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userName|query|string|false|username to find|
|companyId|query|string|false|companyId that the user belongs to (used along with employeeNumber)|
|employeeNumber|query|string|false|user's employeeNumber (used along with companyId)|

> Example responses

> 200 Response

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "id": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string",
      "type": "Work"
    }
  ],
  "dateOfBirth": "string",
  "displayName": "string",
  "emails": [
    {
      "dateAdded": "string",
      "dateVerified": "string",
      "display": "string",
      "id": "string",
      "notifications": true,
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "emergencyContacts": [
    {
      "country": "string",
      "emails": [
        "string"
      ],
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "name": "string",
      "phones": [
        "string"
      ],
      "postalCode": "string",
      "region": "string",
      "relationship": "Spouse",
      "streetAddress": "string"
    }
  ],
  "externalClient": "Concur.Travel",
  "externalId": "string",
  "gender": "Male",
  "id": "string",
  "localeOverrides": {
    "preference24Hour": "h:mm AM/PM",
    "preferenceCurrencySymbolLocation": "BeforeAmount",
    "preferenceDateFormat": "mm/dd/yyyy",
    "preferenceDefaultCalView": "day",
    "preferenceDistance": "mile",
    "preferenceEndDayViewHour": 0,
    "preferenceFirstDayOfWeek": "Monday",
    "preferenceHourMinuteSeparator": ":",
    "preferenceNegativeCurrencyFormat": "-100",
    "preferenceNegativeNumberFormat": "-100",
    "preferenceNumberFormat": "1,000.00",
    "preferenceStartDayViewHour": 0
  },
  "meta": {},
  "name": {
    "familyName": "string",
    "formatted": "string",
    "givenName": "string",
    "hasNoMiddleName": true,
    "honorificPrefix": "Miss",
    "honorificSuffix": "Jr.",
    "legalName": "string",
    "middleInitial": "string",
    "middleName": "string"
  },
  "nickName": "string",
  "phoneNumbers": [
    {
      "countryCode": "string",
      "countryISDCode": "string",
      "display": "string",
      "extension": "string",
      "id": "string",
      "notifications": true,
      "operatingSystem": "Android Phone",
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "preferredLanguage": "string",
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User"
  ],
  "timezone": "string",
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "companyId": "string",
    "costCenter": "string",
    "dataRetention": {
      "isDoNotTouch": true,
      "policyIds": [
        "string"
      ]
    },
    "department": "string",
    "division": "string",
    "employeeNumber": "string",
    "entitlements": [
      "Expense"
    ],
    "jobTitle": "string",
    "manager": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "orgUnit": "string",
    "organization": "string",
    "self": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "startDate": "string",
    "terminationDate": "string"
  },
  "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
    "expense": {
      "enableExpenseAssistant": "Calendar",
      "enablePersonalCardAutoCreate": true
    },
    "identifiers": {
      "entityId": "string",
      "guuid": "string",
      "outtaskCompanyId": 0,
      "outtaskUserId": 0
    },
    "legacyRole": "User",
    "locateRoles": [
      "string"
    ],
    "privateData": {
      "expense": {},
      "expenseIt": {},
      "locate": {},
      "notifications": {},
      "travel": {}
    },
    "supplierSearchRoles": [
      "string"
    ],
    "travel": {
      "vacationBackupManagerId": "string"
    }
  },
  "userName": "string"
}
```

<h3 id="get__v4_users_lookup_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successfully fetched user identity|[User](#schemauser)|
|default|Default|Error fetching user identity|[error-response](#schemaerror-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## put__v4_users_{id}_

> Code samples

```shell
# You can also use wget
curl -X PUT https://us.api.concursolutions.com/profile/identity/v4/users/{id}/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
PUT https://us.api.concursolutions.com/profile/identity/v4/users/{id}/ HTTP/1.1
Host: us.api.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "id": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string",
      "type": "Work"
    }
  ],
  "dateOfBirth": "string",
  "displayName": "string",
  "emails": [
    {
      "dateAdded": "string",
      "dateVerified": "string",
      "display": "string",
      "id": "string",
      "notifications": true,
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "emergencyContacts": [
    {
      "country": "string",
      "emails": [
        "string"
      ],
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "name": "string",
      "phones": [
        "string"
      ],
      "postalCode": "string",
      "region": "string",
      "relationship": "Spouse",
      "streetAddress": "string"
    }
  ],
  "externalClient": "Concur.Travel",
  "externalId": "string",
  "gender": "Male",
  "id": "string",
  "localeOverrides": {
    "preference24Hour": "h:mm AM/PM",
    "preferenceCurrencySymbolLocation": "BeforeAmount",
    "preferenceDateFormat": "mm/dd/yyyy",
    "preferenceDefaultCalView": "day",
    "preferenceDistance": "mile",
    "preferenceEndDayViewHour": 0,
    "preferenceFirstDayOfWeek": "Monday",
    "preferenceHourMinuteSeparator": ":",
    "preferenceNegativeCurrencyFormat": "-100",
    "preferenceNegativeNumberFormat": "-100",
    "preferenceNumberFormat": "1,000.00",
    "preferenceStartDayViewHour": 0
  },
  "meta": {},
  "name": {
    "familyName": "string",
    "formatted": "string",
    "givenName": "string",
    "hasNoMiddleName": true,
    "honorificPrefix": "Miss",
    "honorificSuffix": "Jr.",
    "legalName": "string",
    "middleInitial": "string",
    "middleName": "string"
  },
  "nickName": "string",
  "phoneNumbers": [
    {
      "countryCode": "string",
      "countryISDCode": "string",
      "display": "string",
      "extension": "string",
      "id": "string",
      "notifications": true,
      "operatingSystem": "Android Phone",
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "preferredLanguage": "string",
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User"
  ],
  "timezone": "string",
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "companyId": "string",
    "costCenter": "string",
    "dataRetention": {
      "isDoNotTouch": true,
      "policyIds": [
        "string"
      ]
    },
    "department": "string",
    "division": "string",
    "employeeNumber": "string",
    "entitlements": [
      "Expense"
    ],
    "jobTitle": "string",
    "manager": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "orgUnit": "string",
    "organization": "string",
    "self": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "startDate": "string",
    "terminationDate": "string"
  },
  "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
    "expense": {
      "enableExpenseAssistant": "Calendar",
      "enablePersonalCardAutoCreate": true
    },
    "identifiers": {
      "entityId": "string",
      "guuid": "string",
      "outtaskCompanyId": 0,
      "outtaskUserId": 0
    },
    "legacyRole": "User",
    "locateRoles": [
      "string"
    ],
    "privateData": {
      "expense": {},
      "expenseIt": {},
      "locate": {},
      "notifications": {},
      "travel": {}
    },
    "supplierSearchRoles": [
      "string"
    ],
    "travel": {
      "vacationBackupManagerId": "string"
    }
  },
  "userName": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/profile/identity/v4/users/{id}/',
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
  'Authorization' => 'API_KEY'
}

result = RestClient.put 'https://us.api.concursolutions.com/profile/identity/v4/users/{id}/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.put('https://us.api.concursolutions.com/profile/identity/v4/users/{id}/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://us.api.concursolutions.com/profile/identity/v4/users/{id}/', array(
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
URL obj = new URL("https://us.api.concursolutions.com/profile/identity/v4/users/{id}/");
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
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://us.api.concursolutions.com/profile/identity/v4/users/{id}/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /v4/users/{id}/`

*Replace User Identity*

> Body parameter

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "id": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string",
      "type": "Work"
    }
  ],
  "dateOfBirth": "string",
  "displayName": "string",
  "emails": [
    {
      "dateAdded": "string",
      "dateVerified": "string",
      "display": "string",
      "id": "string",
      "notifications": true,
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "emergencyContacts": [
    {
      "country": "string",
      "emails": [
        "string"
      ],
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "name": "string",
      "phones": [
        "string"
      ],
      "postalCode": "string",
      "region": "string",
      "relationship": "Spouse",
      "streetAddress": "string"
    }
  ],
  "externalClient": "Concur.Travel",
  "externalId": "string",
  "gender": "Male",
  "id": "string",
  "localeOverrides": {
    "preference24Hour": "h:mm AM/PM",
    "preferenceCurrencySymbolLocation": "BeforeAmount",
    "preferenceDateFormat": "mm/dd/yyyy",
    "preferenceDefaultCalView": "day",
    "preferenceDistance": "mile",
    "preferenceEndDayViewHour": 0,
    "preferenceFirstDayOfWeek": "Monday",
    "preferenceHourMinuteSeparator": ":",
    "preferenceNegativeCurrencyFormat": "-100",
    "preferenceNegativeNumberFormat": "-100",
    "preferenceNumberFormat": "1,000.00",
    "preferenceStartDayViewHour": 0
  },
  "meta": {},
  "name": {
    "familyName": "string",
    "formatted": "string",
    "givenName": "string",
    "hasNoMiddleName": true,
    "honorificPrefix": "Miss",
    "honorificSuffix": "Jr.",
    "legalName": "string",
    "middleInitial": "string",
    "middleName": "string"
  },
  "nickName": "string",
  "phoneNumbers": [
    {
      "countryCode": "string",
      "countryISDCode": "string",
      "display": "string",
      "extension": "string",
      "id": "string",
      "notifications": true,
      "operatingSystem": "Android Phone",
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "preferredLanguage": "string",
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User"
  ],
  "timezone": "string",
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "companyId": "string",
    "costCenter": "string",
    "dataRetention": {
      "isDoNotTouch": true,
      "policyIds": [
        "string"
      ]
    },
    "department": "string",
    "division": "string",
    "employeeNumber": "string",
    "entitlements": [
      "Expense"
    ],
    "jobTitle": "string",
    "manager": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "orgUnit": "string",
    "organization": "string",
    "self": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "startDate": "string",
    "terminationDate": "string"
  },
  "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
    "expense": {
      "enableExpenseAssistant": "Calendar",
      "enablePersonalCardAutoCreate": true
    },
    "identifiers": {
      "entityId": "string",
      "guuid": "string",
      "outtaskCompanyId": 0,
      "outtaskUserId": 0
    },
    "legacyRole": "User",
    "locateRoles": [
      "string"
    ],
    "privateData": {
      "expense": {},
      "expenseIt": {},
      "locate": {},
      "notifications": {},
      "travel": {}
    },
    "supplierSearchRoles": [
      "string"
    ],
    "travel": {
      "vacationBackupManagerId": "string"
    }
  },
  "userName": "string"
}
```

<h3 id="put__v4_users_{id}_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|user's uuid|
|body|body|[User](#schemauser)|true|the user identity to update|

> Example responses

> 200 Response

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "id": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string",
      "type": "Work"
    }
  ],
  "dateOfBirth": "string",
  "displayName": "string",
  "emails": [
    {
      "dateAdded": "string",
      "dateVerified": "string",
      "display": "string",
      "id": "string",
      "notifications": true,
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "emergencyContacts": [
    {
      "country": "string",
      "emails": [
        "string"
      ],
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "name": "string",
      "phones": [
        "string"
      ],
      "postalCode": "string",
      "region": "string",
      "relationship": "Spouse",
      "streetAddress": "string"
    }
  ],
  "externalClient": "Concur.Travel",
  "externalId": "string",
  "gender": "Male",
  "id": "string",
  "localeOverrides": {
    "preference24Hour": "h:mm AM/PM",
    "preferenceCurrencySymbolLocation": "BeforeAmount",
    "preferenceDateFormat": "mm/dd/yyyy",
    "preferenceDefaultCalView": "day",
    "preferenceDistance": "mile",
    "preferenceEndDayViewHour": 0,
    "preferenceFirstDayOfWeek": "Monday",
    "preferenceHourMinuteSeparator": ":",
    "preferenceNegativeCurrencyFormat": "-100",
    "preferenceNegativeNumberFormat": "-100",
    "preferenceNumberFormat": "1,000.00",
    "preferenceStartDayViewHour": 0
  },
  "meta": {},
  "name": {
    "familyName": "string",
    "formatted": "string",
    "givenName": "string",
    "hasNoMiddleName": true,
    "honorificPrefix": "Miss",
    "honorificSuffix": "Jr.",
    "legalName": "string",
    "middleInitial": "string",
    "middleName": "string"
  },
  "nickName": "string",
  "phoneNumbers": [
    {
      "countryCode": "string",
      "countryISDCode": "string",
      "display": "string",
      "extension": "string",
      "id": "string",
      "notifications": true,
      "operatingSystem": "Android Phone",
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "preferredLanguage": "string",
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User"
  ],
  "timezone": "string",
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "companyId": "string",
    "costCenter": "string",
    "dataRetention": {
      "isDoNotTouch": true,
      "policyIds": [
        "string"
      ]
    },
    "department": "string",
    "division": "string",
    "employeeNumber": "string",
    "entitlements": [
      "Expense"
    ],
    "jobTitle": "string",
    "manager": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "orgUnit": "string",
    "organization": "string",
    "self": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "startDate": "string",
    "terminationDate": "string"
  },
  "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
    "expense": {
      "enableExpenseAssistant": "Calendar",
      "enablePersonalCardAutoCreate": true
    },
    "identifiers": {
      "entityId": "string",
      "guuid": "string",
      "outtaskCompanyId": 0,
      "outtaskUserId": 0
    },
    "legacyRole": "User",
    "locateRoles": [
      "string"
    ],
    "privateData": {
      "expense": {},
      "expenseIt": {},
      "locate": {},
      "notifications": {},
      "travel": {}
    },
    "supplierSearchRoles": [
      "string"
    ],
    "travel": {
      "vacationBackupManagerId": "string"
    }
  },
  "userName": "string"
}
```

<h3 id="put__v4_users_{id}_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful updation of user identity|[User](#schemauser)|
|default|Default|error updating user identity|[error-response](#schemaerror-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## get__v4_users_{id}_

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/profile/identity/v4/users/{id}/ \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://us.api.concursolutions.com/profile/identity/v4/users/{id}/ HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/profile/identity/v4/users/{id}/',
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
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://us.api.concursolutions.com/profile/identity/v4/users/{id}/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://us.api.concursolutions.com/profile/identity/v4/users/{id}/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://us.api.concursolutions.com/profile/identity/v4/users/{id}/', array(
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
URL obj = new URL("https://us.api.concursolutions.com/profile/identity/v4/users/{id}/");
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
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/profile/identity/v4/users/{id}/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v4/users/{id}/`

*Fetch User Identity*

<h3 id="get__v4_users_{id}_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|user's uuid|

> Example responses

> 200 Response

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "id": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string",
      "type": "Work"
    }
  ],
  "dateOfBirth": "string",
  "displayName": "string",
  "emails": [
    {
      "dateAdded": "string",
      "dateVerified": "string",
      "display": "string",
      "id": "string",
      "notifications": true,
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "emergencyContacts": [
    {
      "country": "string",
      "emails": [
        "string"
      ],
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "name": "string",
      "phones": [
        "string"
      ],
      "postalCode": "string",
      "region": "string",
      "relationship": "Spouse",
      "streetAddress": "string"
    }
  ],
  "externalClient": "Concur.Travel",
  "externalId": "string",
  "gender": "Male",
  "id": "string",
  "localeOverrides": {
    "preference24Hour": "h:mm AM/PM",
    "preferenceCurrencySymbolLocation": "BeforeAmount",
    "preferenceDateFormat": "mm/dd/yyyy",
    "preferenceDefaultCalView": "day",
    "preferenceDistance": "mile",
    "preferenceEndDayViewHour": 0,
    "preferenceFirstDayOfWeek": "Monday",
    "preferenceHourMinuteSeparator": ":",
    "preferenceNegativeCurrencyFormat": "-100",
    "preferenceNegativeNumberFormat": "-100",
    "preferenceNumberFormat": "1,000.00",
    "preferenceStartDayViewHour": 0
  },
  "meta": {},
  "name": {
    "familyName": "string",
    "formatted": "string",
    "givenName": "string",
    "hasNoMiddleName": true,
    "honorificPrefix": "Miss",
    "honorificSuffix": "Jr.",
    "legalName": "string",
    "middleInitial": "string",
    "middleName": "string"
  },
  "nickName": "string",
  "phoneNumbers": [
    {
      "countryCode": "string",
      "countryISDCode": "string",
      "display": "string",
      "extension": "string",
      "id": "string",
      "notifications": true,
      "operatingSystem": "Android Phone",
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "preferredLanguage": "string",
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User"
  ],
  "timezone": "string",
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "companyId": "string",
    "costCenter": "string",
    "dataRetention": {
      "isDoNotTouch": true,
      "policyIds": [
        "string"
      ]
    },
    "department": "string",
    "division": "string",
    "employeeNumber": "string",
    "entitlements": [
      "Expense"
    ],
    "jobTitle": "string",
    "manager": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "orgUnit": "string",
    "organization": "string",
    "self": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "startDate": "string",
    "terminationDate": "string"
  },
  "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
    "expense": {
      "enableExpenseAssistant": "Calendar",
      "enablePersonalCardAutoCreate": true
    },
    "identifiers": {
      "entityId": "string",
      "guuid": "string",
      "outtaskCompanyId": 0,
      "outtaskUserId": 0
    },
    "legacyRole": "User",
    "locateRoles": [
      "string"
    ],
    "privateData": {
      "expense": {},
      "expenseIt": {},
      "locate": {},
      "notifications": {},
      "travel": {}
    },
    "supplierSearchRoles": [
      "string"
    ],
    "travel": {
      "vacationBackupManagerId": "string"
    }
  },
  "userName": "string"
}
```

<h3 id="get__v4_users_{id}_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successfully fetched User Identity|[User](#schemauser)|
|default|Default|error fetching user identity|[error-response](#schemaerror-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## patch__v4_users_{id}_

> Code samples

```shell
# You can also use wget
curl -X PATCH https://us.api.concursolutions.com/profile/identity/v4/users/{id}/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
PATCH https://us.api.concursolutions.com/profile/identity/v4/users/{id}/ HTTP/1.1
Host: us.api.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/profile/identity/v4/users/{id}/',
{
  method: 'PATCH',
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
  'Authorization' => 'API_KEY'
}

result = RestClient.patch 'https://us.api.concursolutions.com/profile/identity/v4/users/{id}/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.patch('https://us.api.concursolutions.com/profile/identity/v4/users/{id}/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PATCH','https://us.api.concursolutions.com/profile/identity/v4/users/{id}/', array(
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
URL obj = new URL("https://us.api.concursolutions.com/profile/identity/v4/users/{id}/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
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
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "https://us.api.concursolutions.com/profile/identity/v4/users/{id}/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /v4/users/{id}/`

*Patch User Identity*

> Body parameter

```json
{}
```

<h3 id="patch__v4_users_{id}_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|user's uuid|
|body|body|object|true|patch operations to apply on the user identity|

> Example responses

> 200 Response

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "id": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string",
      "type": "Work"
    }
  ],
  "dateOfBirth": "string",
  "displayName": "string",
  "emails": [
    {
      "dateAdded": "string",
      "dateVerified": "string",
      "display": "string",
      "id": "string",
      "notifications": true,
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "emergencyContacts": [
    {
      "country": "string",
      "emails": [
        "string"
      ],
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "name": "string",
      "phones": [
        "string"
      ],
      "postalCode": "string",
      "region": "string",
      "relationship": "Spouse",
      "streetAddress": "string"
    }
  ],
  "externalClient": "Concur.Travel",
  "externalId": "string",
  "gender": "Male",
  "id": "string",
  "localeOverrides": {
    "preference24Hour": "h:mm AM/PM",
    "preferenceCurrencySymbolLocation": "BeforeAmount",
    "preferenceDateFormat": "mm/dd/yyyy",
    "preferenceDefaultCalView": "day",
    "preferenceDistance": "mile",
    "preferenceEndDayViewHour": 0,
    "preferenceFirstDayOfWeek": "Monday",
    "preferenceHourMinuteSeparator": ":",
    "preferenceNegativeCurrencyFormat": "-100",
    "preferenceNegativeNumberFormat": "-100",
    "preferenceNumberFormat": "1,000.00",
    "preferenceStartDayViewHour": 0
  },
  "meta": {},
  "name": {
    "familyName": "string",
    "formatted": "string",
    "givenName": "string",
    "hasNoMiddleName": true,
    "honorificPrefix": "Miss",
    "honorificSuffix": "Jr.",
    "legalName": "string",
    "middleInitial": "string",
    "middleName": "string"
  },
  "nickName": "string",
  "phoneNumbers": [
    {
      "countryCode": "string",
      "countryISDCode": "string",
      "display": "string",
      "extension": "string",
      "id": "string",
      "notifications": true,
      "operatingSystem": "Android Phone",
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "preferredLanguage": "string",
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User"
  ],
  "timezone": "string",
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "companyId": "string",
    "costCenter": "string",
    "dataRetention": {
      "isDoNotTouch": true,
      "policyIds": [
        "string"
      ]
    },
    "department": "string",
    "division": "string",
    "employeeNumber": "string",
    "entitlements": [
      "Expense"
    ],
    "jobTitle": "string",
    "manager": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "orgUnit": "string",
    "organization": "string",
    "self": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "startDate": "string",
    "terminationDate": "string"
  },
  "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
    "expense": {
      "enableExpenseAssistant": "Calendar",
      "enablePersonalCardAutoCreate": true
    },
    "identifiers": {
      "entityId": "string",
      "guuid": "string",
      "outtaskCompanyId": 0,
      "outtaskUserId": 0
    },
    "legacyRole": "User",
    "locateRoles": [
      "string"
    ],
    "privateData": {
      "expense": {},
      "expenseIt": {},
      "locate": {},
      "notifications": {},
      "travel": {}
    },
    "supplierSearchRoles": [
      "string"
    ],
    "travel": {
      "vacationBackupManagerId": "string"
    }
  },
  "userName": "string"
}
```

<h3 id="patch__v4_users_{id}_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successfully patched User Identity|[User](#schemauser)|
|default|Default|Error patching user identity|[error-response](#schemaerror-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## post__v4_users

> Code samples

```shell
# You can also use wget
curl -X POST https://us.api.concursolutions.com/profile/identity/v4/users \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST https://us.api.concursolutions.com/profile/identity/v4/users HTTP/1.1
Host: us.api.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "id": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string",
      "type": "Work"
    }
  ],
  "dateOfBirth": "string",
  "displayName": "string",
  "emails": [
    {
      "dateAdded": "string",
      "dateVerified": "string",
      "display": "string",
      "id": "string",
      "notifications": true,
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "emergencyContacts": [
    {
      "country": "string",
      "emails": [
        "string"
      ],
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "name": "string",
      "phones": [
        "string"
      ],
      "postalCode": "string",
      "region": "string",
      "relationship": "Spouse",
      "streetAddress": "string"
    }
  ],
  "externalClient": "Concur.Travel",
  "externalId": "string",
  "gender": "Male",
  "id": "string",
  "localeOverrides": {
    "preference24Hour": "h:mm AM/PM",
    "preferenceCurrencySymbolLocation": "BeforeAmount",
    "preferenceDateFormat": "mm/dd/yyyy",
    "preferenceDefaultCalView": "day",
    "preferenceDistance": "mile",
    "preferenceEndDayViewHour": 0,
    "preferenceFirstDayOfWeek": "Monday",
    "preferenceHourMinuteSeparator": ":",
    "preferenceNegativeCurrencyFormat": "-100",
    "preferenceNegativeNumberFormat": "-100",
    "preferenceNumberFormat": "1,000.00",
    "preferenceStartDayViewHour": 0
  },
  "meta": {},
  "name": {
    "familyName": "string",
    "formatted": "string",
    "givenName": "string",
    "hasNoMiddleName": true,
    "honorificPrefix": "Miss",
    "honorificSuffix": "Jr.",
    "legalName": "string",
    "middleInitial": "string",
    "middleName": "string"
  },
  "nickName": "string",
  "phoneNumbers": [
    {
      "countryCode": "string",
      "countryISDCode": "string",
      "display": "string",
      "extension": "string",
      "id": "string",
      "notifications": true,
      "operatingSystem": "Android Phone",
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "preferredLanguage": "string",
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User"
  ],
  "timezone": "string",
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "companyId": "string",
    "costCenter": "string",
    "dataRetention": {
      "isDoNotTouch": true,
      "policyIds": [
        "string"
      ]
    },
    "department": "string",
    "division": "string",
    "employeeNumber": "string",
    "entitlements": [
      "Expense"
    ],
    "jobTitle": "string",
    "manager": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "orgUnit": "string",
    "organization": "string",
    "self": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "startDate": "string",
    "terminationDate": "string"
  },
  "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
    "expense": {
      "enableExpenseAssistant": "Calendar",
      "enablePersonalCardAutoCreate": true
    },
    "identifiers": {
      "entityId": "string",
      "guuid": "string",
      "outtaskCompanyId": 0,
      "outtaskUserId": 0
    },
    "legacyRole": "User",
    "locateRoles": [
      "string"
    ],
    "privateData": {
      "expense": {},
      "expenseIt": {},
      "locate": {},
      "notifications": {},
      "travel": {}
    },
    "supplierSearchRoles": [
      "string"
    ],
    "travel": {
      "vacationBackupManagerId": "string"
    }
  },
  "userName": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/profile/identity/v4/users',
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
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://us.api.concursolutions.com/profile/identity/v4/users',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('https://us.api.concursolutions.com/profile/identity/v4/users', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://us.api.concursolutions.com/profile/identity/v4/users', array(
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
URL obj = new URL("https://us.api.concursolutions.com/profile/identity/v4/users");
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
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://us.api.concursolutions.com/profile/identity/v4/users", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v4/users`

*Create User Identity*

> Body parameter

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "id": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string",
      "type": "Work"
    }
  ],
  "dateOfBirth": "string",
  "displayName": "string",
  "emails": [
    {
      "dateAdded": "string",
      "dateVerified": "string",
      "display": "string",
      "id": "string",
      "notifications": true,
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "emergencyContacts": [
    {
      "country": "string",
      "emails": [
        "string"
      ],
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "name": "string",
      "phones": [
        "string"
      ],
      "postalCode": "string",
      "region": "string",
      "relationship": "Spouse",
      "streetAddress": "string"
    }
  ],
  "externalClient": "Concur.Travel",
  "externalId": "string",
  "gender": "Male",
  "id": "string",
  "localeOverrides": {
    "preference24Hour": "h:mm AM/PM",
    "preferenceCurrencySymbolLocation": "BeforeAmount",
    "preferenceDateFormat": "mm/dd/yyyy",
    "preferenceDefaultCalView": "day",
    "preferenceDistance": "mile",
    "preferenceEndDayViewHour": 0,
    "preferenceFirstDayOfWeek": "Monday",
    "preferenceHourMinuteSeparator": ":",
    "preferenceNegativeCurrencyFormat": "-100",
    "preferenceNegativeNumberFormat": "-100",
    "preferenceNumberFormat": "1,000.00",
    "preferenceStartDayViewHour": 0
  },
  "meta": {},
  "name": {
    "familyName": "string",
    "formatted": "string",
    "givenName": "string",
    "hasNoMiddleName": true,
    "honorificPrefix": "Miss",
    "honorificSuffix": "Jr.",
    "legalName": "string",
    "middleInitial": "string",
    "middleName": "string"
  },
  "nickName": "string",
  "phoneNumbers": [
    {
      "countryCode": "string",
      "countryISDCode": "string",
      "display": "string",
      "extension": "string",
      "id": "string",
      "notifications": true,
      "operatingSystem": "Android Phone",
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "preferredLanguage": "string",
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User"
  ],
  "timezone": "string",
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "companyId": "string",
    "costCenter": "string",
    "dataRetention": {
      "isDoNotTouch": true,
      "policyIds": [
        "string"
      ]
    },
    "department": "string",
    "division": "string",
    "employeeNumber": "string",
    "entitlements": [
      "Expense"
    ],
    "jobTitle": "string",
    "manager": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "orgUnit": "string",
    "organization": "string",
    "self": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "startDate": "string",
    "terminationDate": "string"
  },
  "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
    "expense": {
      "enableExpenseAssistant": "Calendar",
      "enablePersonalCardAutoCreate": true
    },
    "identifiers": {
      "entityId": "string",
      "guuid": "string",
      "outtaskCompanyId": 0,
      "outtaskUserId": 0
    },
    "legacyRole": "User",
    "locateRoles": [
      "string"
    ],
    "privateData": {
      "expense": {},
      "expenseIt": {},
      "locate": {},
      "notifications": {},
      "travel": {}
    },
    "supplierSearchRoles": [
      "string"
    ],
    "travel": {
      "vacationBackupManagerId": "string"
    }
  },
  "userName": "string"
}
```

<h3 id="post__v4_users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[User](#schemauser)|true|the user identity to create|

> Example responses

> 200 Response

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "id": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string",
      "type": "Work"
    }
  ],
  "dateOfBirth": "string",
  "displayName": "string",
  "emails": [
    {
      "dateAdded": "string",
      "dateVerified": "string",
      "display": "string",
      "id": "string",
      "notifications": true,
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "emergencyContacts": [
    {
      "country": "string",
      "emails": [
        "string"
      ],
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "name": "string",
      "phones": [
        "string"
      ],
      "postalCode": "string",
      "region": "string",
      "relationship": "Spouse",
      "streetAddress": "string"
    }
  ],
  "externalClient": "Concur.Travel",
  "externalId": "string",
  "gender": "Male",
  "id": "string",
  "localeOverrides": {
    "preference24Hour": "h:mm AM/PM",
    "preferenceCurrencySymbolLocation": "BeforeAmount",
    "preferenceDateFormat": "mm/dd/yyyy",
    "preferenceDefaultCalView": "day",
    "preferenceDistance": "mile",
    "preferenceEndDayViewHour": 0,
    "preferenceFirstDayOfWeek": "Monday",
    "preferenceHourMinuteSeparator": ":",
    "preferenceNegativeCurrencyFormat": "-100",
    "preferenceNegativeNumberFormat": "-100",
    "preferenceNumberFormat": "1,000.00",
    "preferenceStartDayViewHour": 0
  },
  "meta": {},
  "name": {
    "familyName": "string",
    "formatted": "string",
    "givenName": "string",
    "hasNoMiddleName": true,
    "honorificPrefix": "Miss",
    "honorificSuffix": "Jr.",
    "legalName": "string",
    "middleInitial": "string",
    "middleName": "string"
  },
  "nickName": "string",
  "phoneNumbers": [
    {
      "countryCode": "string",
      "countryISDCode": "string",
      "display": "string",
      "extension": "string",
      "id": "string",
      "notifications": true,
      "operatingSystem": "Android Phone",
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "preferredLanguage": "string",
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User"
  ],
  "timezone": "string",
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "companyId": "string",
    "costCenter": "string",
    "dataRetention": {
      "isDoNotTouch": true,
      "policyIds": [
        "string"
      ]
    },
    "department": "string",
    "division": "string",
    "employeeNumber": "string",
    "entitlements": [
      "Expense"
    ],
    "jobTitle": "string",
    "manager": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "orgUnit": "string",
    "organization": "string",
    "self": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "startDate": "string",
    "terminationDate": "string"
  },
  "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
    "expense": {
      "enableExpenseAssistant": "Calendar",
      "enablePersonalCardAutoCreate": true
    },
    "identifiers": {
      "entityId": "string",
      "guuid": "string",
      "outtaskCompanyId": 0,
      "outtaskUserId": 0
    },
    "legacyRole": "User",
    "locateRoles": [
      "string"
    ],
    "privateData": {
      "expense": {},
      "expenseIt": {},
      "locate": {},
      "notifications": {},
      "travel": {}
    },
    "supplierSearchRoles": [
      "string"
    ],
    "travel": {
      "vacationBackupManagerId": "string"
    }
  },
  "userName": "string"
}
```

<h3 id="post__v4_users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|created User Identity|[User](#schemauser)|
|default|Default|error creating user identity|[error-response](#schemaerror-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="identity-apis-company">Company</h1>

## get__v4_companies_lookup_

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/profile/identity/v4/companies/lookup/ \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://us.api.concursolutions.com/profile/identity/v4/companies/lookup/ HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/profile/identity/v4/companies/lookup/',
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
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://us.api.concursolutions.com/profile/identity/v4/companies/lookup/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://us.api.concursolutions.com/profile/identity/v4/companies/lookup/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://us.api.concursolutions.com/profile/identity/v4/companies/lookup/', array(
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
URL obj = new URL("https://us.api.concursolutions.com/profile/identity/v4/companies/lookup/");
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
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/profile/identity/v4/companies/lookup/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v4/companies/lookup/`

*Lookup Company*

<h3 id="get__v4_companies_lookup_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outtaskCompanyId|query|string|false|company's outtaskCompanyId (one of outtaskCompanyId or entityId must be specified)|
|entityId|query|string|false|company's entityId (one of outtaskCompanyId or entityId must be specified)|

> Example responses

> 200 Response

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string"
    }
  ],
  "companyDomain": "string",
  "contact": {
    "country": "string",
    "emails": [
      "string"
    ],
    "formatted": "string",
    "latitude": "string",
    "locality": "string",
    "longitude": "string",
    "name": "string",
    "phones": [
      "string"
    ],
    "postalCode": "string",
    "region": "string",
    "streetAddress": "string"
  },
  "dataRetention": [
    {
      "id": "string",
      "name": "string",
      "scope": "dataretention.concur.expense",
      "unit": "day",
      "value": 0
    }
  ],
  "defaultLanguage": "string",
  "entitlements": [
    "Expense"
  ],
  "id": "string",
  "internetDomain": "string",
  "meta": {},
  "name": "string",
  "notifications": {
    "channels": [
      "Slack"
    ],
    "enabled": true
  },
  "schemas": [
    "string"
  ],
  "urn:ietf:params:scim:schemas:extension:authentication:2.0:Company": {
    "loginPolicy": {
      "hideForgotLoginIdLink": true,
      "loginFailureLockoutDuration": 0,
      "loginFailureWindowDuration": 0,
      "loginFailuresAllowed": 0,
      "loginIPRestriction": "string",
      "loginOneTimeLinkExpirationLength": 0,
      "loginViaSsoOnly": true
    },
    "passwordPolicy": {
      "daysUntilExpiration": 0,
      "expirePasswordOnUserCreation": true,
      "maxLength": 0,
      "minLength": 0,
      "mobileAuthenticationLifetime": 0,
      "mobileMinLength": 0,
      "mobileRequiresMixedCase": true,
      "mobileRequiresNonalphanum": true,
      "numGenerationsBeforeCanReuse": 0,
      "numSecurityQuestions": 0,
      "numSecurityQuestionsUsersPick": 0,
      "passwordResetEmailPolicy": "never",
      "passwordResetSupportEmail": "string",
      "requiresMixedCase": true,
      "requiresNonAlpha": true,
      "requiresNonAlphanum": true,
      "requiresNumber": true,
      "requiresSecurityQuestions": true,
      "restrictPasswordResetOncePerDay": true
    }
  },
  "urn:ietf:params:scim:schemas:extension:legacy:2.0:Company": {
    "identifiers": {
      "entityId": "string",
      "greatPlainsId": "string",
      "outtaskCompanyId": 0,
      "salesforceId": "string"
    },
    "mobile": {
      "isHighSecurityAccount": true
    }
  }
}
```

<h3 id="get__v4_companies_lookup_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Company|[Company](#schemacompany)|
|default|Default|Error fetching company|[error-response](#schemaerror-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## post__v4_companies_

> Code samples

```shell
# You can also use wget
curl -X POST https://us.api.concursolutions.com/profile/identity/v4/companies/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST https://us.api.concursolutions.com/profile/identity/v4/companies/ HTTP/1.1
Host: us.api.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string"
    }
  ],
  "companyDomain": "string",
  "contact": {
    "country": "string",
    "emails": [
      "string"
    ],
    "formatted": "string",
    "latitude": "string",
    "locality": "string",
    "longitude": "string",
    "name": "string",
    "phones": [
      "string"
    ],
    "postalCode": "string",
    "region": "string",
    "streetAddress": "string"
  },
  "dataRetention": [
    {
      "id": "string",
      "name": "string",
      "scope": "dataretention.concur.expense",
      "unit": "day",
      "value": 0
    }
  ],
  "defaultLanguage": "string",
  "entitlements": [
    "Expense"
  ],
  "id": "string",
  "internetDomain": "string",
  "meta": {},
  "name": "string",
  "notifications": {
    "channels": [
      "Slack"
    ],
    "enabled": true
  },
  "schemas": [
    "string"
  ],
  "urn:ietf:params:scim:schemas:extension:authentication:2.0:Company": {
    "loginPolicy": {
      "hideForgotLoginIdLink": true,
      "loginFailureLockoutDuration": 0,
      "loginFailureWindowDuration": 0,
      "loginFailuresAllowed": 0,
      "loginIPRestriction": "string",
      "loginOneTimeLinkExpirationLength": 0,
      "loginViaSsoOnly": true
    },
    "passwordPolicy": {
      "daysUntilExpiration": 0,
      "expirePasswordOnUserCreation": true,
      "maxLength": 0,
      "minLength": 0,
      "mobileAuthenticationLifetime": 0,
      "mobileMinLength": 0,
      "mobileRequiresMixedCase": true,
      "mobileRequiresNonalphanum": true,
      "numGenerationsBeforeCanReuse": 0,
      "numSecurityQuestions": 0,
      "numSecurityQuestionsUsersPick": 0,
      "passwordResetEmailPolicy": "never",
      "passwordResetSupportEmail": "string",
      "requiresMixedCase": true,
      "requiresNonAlpha": true,
      "requiresNonAlphanum": true,
      "requiresNumber": true,
      "requiresSecurityQuestions": true,
      "restrictPasswordResetOncePerDay": true
    }
  },
  "urn:ietf:params:scim:schemas:extension:legacy:2.0:Company": {
    "identifiers": {
      "entityId": "string",
      "greatPlainsId": "string",
      "outtaskCompanyId": 0,
      "salesforceId": "string"
    },
    "mobile": {
      "isHighSecurityAccount": true
    }
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/profile/identity/v4/companies/',
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
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://us.api.concursolutions.com/profile/identity/v4/companies/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('https://us.api.concursolutions.com/profile/identity/v4/companies/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://us.api.concursolutions.com/profile/identity/v4/companies/', array(
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
URL obj = new URL("https://us.api.concursolutions.com/profile/identity/v4/companies/");
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
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://us.api.concursolutions.com/profile/identity/v4/companies/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v4/companies/`

*Create Company*

> Body parameter

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string"
    }
  ],
  "companyDomain": "string",
  "contact": {
    "country": "string",
    "emails": [
      "string"
    ],
    "formatted": "string",
    "latitude": "string",
    "locality": "string",
    "longitude": "string",
    "name": "string",
    "phones": [
      "string"
    ],
    "postalCode": "string",
    "region": "string",
    "streetAddress": "string"
  },
  "dataRetention": [
    {
      "id": "string",
      "name": "string",
      "scope": "dataretention.concur.expense",
      "unit": "day",
      "value": 0
    }
  ],
  "defaultLanguage": "string",
  "entitlements": [
    "Expense"
  ],
  "id": "string",
  "internetDomain": "string",
  "meta": {},
  "name": "string",
  "notifications": {
    "channels": [
      "Slack"
    ],
    "enabled": true
  },
  "schemas": [
    "string"
  ],
  "urn:ietf:params:scim:schemas:extension:authentication:2.0:Company": {
    "loginPolicy": {
      "hideForgotLoginIdLink": true,
      "loginFailureLockoutDuration": 0,
      "loginFailureWindowDuration": 0,
      "loginFailuresAllowed": 0,
      "loginIPRestriction": "string",
      "loginOneTimeLinkExpirationLength": 0,
      "loginViaSsoOnly": true
    },
    "passwordPolicy": {
      "daysUntilExpiration": 0,
      "expirePasswordOnUserCreation": true,
      "maxLength": 0,
      "minLength": 0,
      "mobileAuthenticationLifetime": 0,
      "mobileMinLength": 0,
      "mobileRequiresMixedCase": true,
      "mobileRequiresNonalphanum": true,
      "numGenerationsBeforeCanReuse": 0,
      "numSecurityQuestions": 0,
      "numSecurityQuestionsUsersPick": 0,
      "passwordResetEmailPolicy": "never",
      "passwordResetSupportEmail": "string",
      "requiresMixedCase": true,
      "requiresNonAlpha": true,
      "requiresNonAlphanum": true,
      "requiresNumber": true,
      "requiresSecurityQuestions": true,
      "restrictPasswordResetOncePerDay": true
    }
  },
  "urn:ietf:params:scim:schemas:extension:legacy:2.0:Company": {
    "identifiers": {
      "entityId": "string",
      "greatPlainsId": "string",
      "outtaskCompanyId": 0,
      "salesforceId": "string"
    },
    "mobile": {
      "isHighSecurityAccount": true
    }
  }
}
```

<h3 id="post__v4_companies_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Company](#schemacompany)|true|the company to create|

> Example responses

> 200 Response

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string"
    }
  ],
  "companyDomain": "string",
  "contact": {
    "country": "string",
    "emails": [
      "string"
    ],
    "formatted": "string",
    "latitude": "string",
    "locality": "string",
    "longitude": "string",
    "name": "string",
    "phones": [
      "string"
    ],
    "postalCode": "string",
    "region": "string",
    "streetAddress": "string"
  },
  "dataRetention": [
    {
      "id": "string",
      "name": "string",
      "scope": "dataretention.concur.expense",
      "unit": "day",
      "value": 0
    }
  ],
  "defaultLanguage": "string",
  "entitlements": [
    "Expense"
  ],
  "id": "string",
  "internetDomain": "string",
  "meta": {},
  "name": "string",
  "notifications": {
    "channels": [
      "Slack"
    ],
    "enabled": true
  },
  "schemas": [
    "string"
  ],
  "urn:ietf:params:scim:schemas:extension:authentication:2.0:Company": {
    "loginPolicy": {
      "hideForgotLoginIdLink": true,
      "loginFailureLockoutDuration": 0,
      "loginFailureWindowDuration": 0,
      "loginFailuresAllowed": 0,
      "loginIPRestriction": "string",
      "loginOneTimeLinkExpirationLength": 0,
      "loginViaSsoOnly": true
    },
    "passwordPolicy": {
      "daysUntilExpiration": 0,
      "expirePasswordOnUserCreation": true,
      "maxLength": 0,
      "minLength": 0,
      "mobileAuthenticationLifetime": 0,
      "mobileMinLength": 0,
      "mobileRequiresMixedCase": true,
      "mobileRequiresNonalphanum": true,
      "numGenerationsBeforeCanReuse": 0,
      "numSecurityQuestions": 0,
      "numSecurityQuestionsUsersPick": 0,
      "passwordResetEmailPolicy": "never",
      "passwordResetSupportEmail": "string",
      "requiresMixedCase": true,
      "requiresNonAlpha": true,
      "requiresNonAlphanum": true,
      "requiresNumber": true,
      "requiresSecurityQuestions": true,
      "restrictPasswordResetOncePerDay": true
    }
  },
  "urn:ietf:params:scim:schemas:extension:legacy:2.0:Company": {
    "identifiers": {
      "entityId": "string",
      "greatPlainsId": "string",
      "outtaskCompanyId": 0,
      "salesforceId": "string"
    },
    "mobile": {
      "isHighSecurityAccount": true
    }
  }
}
```

<h3 id="post__v4_companies_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Created Company|[Company](#schemacompany)|
|default|Default|error creating company|[error-response](#schemaerror-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## put__v4_companies_{id}_

> Code samples

```shell
# You can also use wget
curl -X PUT https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
PUT https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/ HTTP/1.1
Host: us.api.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string"
    }
  ],
  "companyDomain": "string",
  "contact": {
    "country": "string",
    "emails": [
      "string"
    ],
    "formatted": "string",
    "latitude": "string",
    "locality": "string",
    "longitude": "string",
    "name": "string",
    "phones": [
      "string"
    ],
    "postalCode": "string",
    "region": "string",
    "streetAddress": "string"
  },
  "dataRetention": [
    {
      "id": "string",
      "name": "string",
      "scope": "dataretention.concur.expense",
      "unit": "day",
      "value": 0
    }
  ],
  "defaultLanguage": "string",
  "entitlements": [
    "Expense"
  ],
  "id": "string",
  "internetDomain": "string",
  "meta": {},
  "name": "string",
  "notifications": {
    "channels": [
      "Slack"
    ],
    "enabled": true
  },
  "schemas": [
    "string"
  ],
  "urn:ietf:params:scim:schemas:extension:authentication:2.0:Company": {
    "loginPolicy": {
      "hideForgotLoginIdLink": true,
      "loginFailureLockoutDuration": 0,
      "loginFailureWindowDuration": 0,
      "loginFailuresAllowed": 0,
      "loginIPRestriction": "string",
      "loginOneTimeLinkExpirationLength": 0,
      "loginViaSsoOnly": true
    },
    "passwordPolicy": {
      "daysUntilExpiration": 0,
      "expirePasswordOnUserCreation": true,
      "maxLength": 0,
      "minLength": 0,
      "mobileAuthenticationLifetime": 0,
      "mobileMinLength": 0,
      "mobileRequiresMixedCase": true,
      "mobileRequiresNonalphanum": true,
      "numGenerationsBeforeCanReuse": 0,
      "numSecurityQuestions": 0,
      "numSecurityQuestionsUsersPick": 0,
      "passwordResetEmailPolicy": "never",
      "passwordResetSupportEmail": "string",
      "requiresMixedCase": true,
      "requiresNonAlpha": true,
      "requiresNonAlphanum": true,
      "requiresNumber": true,
      "requiresSecurityQuestions": true,
      "restrictPasswordResetOncePerDay": true
    }
  },
  "urn:ietf:params:scim:schemas:extension:legacy:2.0:Company": {
    "identifiers": {
      "entityId": "string",
      "greatPlainsId": "string",
      "outtaskCompanyId": 0,
      "salesforceId": "string"
    },
    "mobile": {
      "isHighSecurityAccount": true
    }
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/',
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
  'Authorization' => 'API_KEY'
}

result = RestClient.put 'https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.put('https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/', array(
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
URL obj = new URL("https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/");
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
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /v4/companies/{id}/`

*Replace Company*

> Body parameter

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string"
    }
  ],
  "companyDomain": "string",
  "contact": {
    "country": "string",
    "emails": [
      "string"
    ],
    "formatted": "string",
    "latitude": "string",
    "locality": "string",
    "longitude": "string",
    "name": "string",
    "phones": [
      "string"
    ],
    "postalCode": "string",
    "region": "string",
    "streetAddress": "string"
  },
  "dataRetention": [
    {
      "id": "string",
      "name": "string",
      "scope": "dataretention.concur.expense",
      "unit": "day",
      "value": 0
    }
  ],
  "defaultLanguage": "string",
  "entitlements": [
    "Expense"
  ],
  "id": "string",
  "internetDomain": "string",
  "meta": {},
  "name": "string",
  "notifications": {
    "channels": [
      "Slack"
    ],
    "enabled": true
  },
  "schemas": [
    "string"
  ],
  "urn:ietf:params:scim:schemas:extension:authentication:2.0:Company": {
    "loginPolicy": {
      "hideForgotLoginIdLink": true,
      "loginFailureLockoutDuration": 0,
      "loginFailureWindowDuration": 0,
      "loginFailuresAllowed": 0,
      "loginIPRestriction": "string",
      "loginOneTimeLinkExpirationLength": 0,
      "loginViaSsoOnly": true
    },
    "passwordPolicy": {
      "daysUntilExpiration": 0,
      "expirePasswordOnUserCreation": true,
      "maxLength": 0,
      "minLength": 0,
      "mobileAuthenticationLifetime": 0,
      "mobileMinLength": 0,
      "mobileRequiresMixedCase": true,
      "mobileRequiresNonalphanum": true,
      "numGenerationsBeforeCanReuse": 0,
      "numSecurityQuestions": 0,
      "numSecurityQuestionsUsersPick": 0,
      "passwordResetEmailPolicy": "never",
      "passwordResetSupportEmail": "string",
      "requiresMixedCase": true,
      "requiresNonAlpha": true,
      "requiresNonAlphanum": true,
      "requiresNumber": true,
      "requiresSecurityQuestions": true,
      "restrictPasswordResetOncePerDay": true
    }
  },
  "urn:ietf:params:scim:schemas:extension:legacy:2.0:Company": {
    "identifiers": {
      "entityId": "string",
      "greatPlainsId": "string",
      "outtaskCompanyId": 0,
      "salesforceId": "string"
    },
    "mobile": {
      "isHighSecurityAccount": true
    }
  }
}
```

<h3 id="put__v4_companies_{id}_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|company's uuid|
|body|body|[Company](#schemacompany)|true|the company to update|

> Example responses

> 200 Response

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string"
    }
  ],
  "companyDomain": "string",
  "contact": {
    "country": "string",
    "emails": [
      "string"
    ],
    "formatted": "string",
    "latitude": "string",
    "locality": "string",
    "longitude": "string",
    "name": "string",
    "phones": [
      "string"
    ],
    "postalCode": "string",
    "region": "string",
    "streetAddress": "string"
  },
  "dataRetention": [
    {
      "id": "string",
      "name": "string",
      "scope": "dataretention.concur.expense",
      "unit": "day",
      "value": 0
    }
  ],
  "defaultLanguage": "string",
  "entitlements": [
    "Expense"
  ],
  "id": "string",
  "internetDomain": "string",
  "meta": {},
  "name": "string",
  "notifications": {
    "channels": [
      "Slack"
    ],
    "enabled": true
  },
  "schemas": [
    "string"
  ],
  "urn:ietf:params:scim:schemas:extension:authentication:2.0:Company": {
    "loginPolicy": {
      "hideForgotLoginIdLink": true,
      "loginFailureLockoutDuration": 0,
      "loginFailureWindowDuration": 0,
      "loginFailuresAllowed": 0,
      "loginIPRestriction": "string",
      "loginOneTimeLinkExpirationLength": 0,
      "loginViaSsoOnly": true
    },
    "passwordPolicy": {
      "daysUntilExpiration": 0,
      "expirePasswordOnUserCreation": true,
      "maxLength": 0,
      "minLength": 0,
      "mobileAuthenticationLifetime": 0,
      "mobileMinLength": 0,
      "mobileRequiresMixedCase": true,
      "mobileRequiresNonalphanum": true,
      "numGenerationsBeforeCanReuse": 0,
      "numSecurityQuestions": 0,
      "numSecurityQuestionsUsersPick": 0,
      "passwordResetEmailPolicy": "never",
      "passwordResetSupportEmail": "string",
      "requiresMixedCase": true,
      "requiresNonAlpha": true,
      "requiresNonAlphanum": true,
      "requiresNumber": true,
      "requiresSecurityQuestions": true,
      "restrictPasswordResetOncePerDay": true
    }
  },
  "urn:ietf:params:scim:schemas:extension:legacy:2.0:Company": {
    "identifiers": {
      "entityId": "string",
      "greatPlainsId": "string",
      "outtaskCompanyId": 0,
      "salesforceId": "string"
    },
    "mobile": {
      "isHighSecurityAccount": true
    }
  }
}
```

<h3 id="put__v4_companies_{id}_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successfully replaced company|[Company](#schemacompany)|
|default|Default|error updating company|[error-response](#schemaerror-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## patch__v4_companies_{id}_

> Code samples

```shell
# You can also use wget
curl -X PATCH https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
PATCH https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/ HTTP/1.1
Host: us.api.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/',
{
  method: 'PATCH',
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
  'Authorization' => 'API_KEY'
}

result = RestClient.patch 'https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.patch('https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PATCH','https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/', array(
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
URL obj = new URL("https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
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
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /v4/companies/{id}/`

*Patch Company*

> Body parameter

```json
{}
```

<h3 id="patch__v4_companies_{id}_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Company's uuid|
|body|body|object|true|the company to update|

> Example responses

> 200 Response

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string"
    }
  ],
  "companyDomain": "string",
  "contact": {
    "country": "string",
    "emails": [
      "string"
    ],
    "formatted": "string",
    "latitude": "string",
    "locality": "string",
    "longitude": "string",
    "name": "string",
    "phones": [
      "string"
    ],
    "postalCode": "string",
    "region": "string",
    "streetAddress": "string"
  },
  "dataRetention": [
    {
      "id": "string",
      "name": "string",
      "scope": "dataretention.concur.expense",
      "unit": "day",
      "value": 0
    }
  ],
  "defaultLanguage": "string",
  "entitlements": [
    "Expense"
  ],
  "id": "string",
  "internetDomain": "string",
  "meta": {},
  "name": "string",
  "notifications": {
    "channels": [
      "Slack"
    ],
    "enabled": true
  },
  "schemas": [
    "string"
  ],
  "urn:ietf:params:scim:schemas:extension:authentication:2.0:Company": {
    "loginPolicy": {
      "hideForgotLoginIdLink": true,
      "loginFailureLockoutDuration": 0,
      "loginFailureWindowDuration": 0,
      "loginFailuresAllowed": 0,
      "loginIPRestriction": "string",
      "loginOneTimeLinkExpirationLength": 0,
      "loginViaSsoOnly": true
    },
    "passwordPolicy": {
      "daysUntilExpiration": 0,
      "expirePasswordOnUserCreation": true,
      "maxLength": 0,
      "minLength": 0,
      "mobileAuthenticationLifetime": 0,
      "mobileMinLength": 0,
      "mobileRequiresMixedCase": true,
      "mobileRequiresNonalphanum": true,
      "numGenerationsBeforeCanReuse": 0,
      "numSecurityQuestions": 0,
      "numSecurityQuestionsUsersPick": 0,
      "passwordResetEmailPolicy": "never",
      "passwordResetSupportEmail": "string",
      "requiresMixedCase": true,
      "requiresNonAlpha": true,
      "requiresNonAlphanum": true,
      "requiresNumber": true,
      "requiresSecurityQuestions": true,
      "restrictPasswordResetOncePerDay": true
    }
  },
  "urn:ietf:params:scim:schemas:extension:legacy:2.0:Company": {
    "identifiers": {
      "entityId": "string",
      "greatPlainsId": "string",
      "outtaskCompanyId": 0,
      "salesforceId": "string"
    },
    "mobile": {
      "isHighSecurityAccount": true
    }
  }
}
```

<h3 id="patch__v4_companies_{id}_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Updated Company|[Company](#schemacompany)|
|default|Default|error patching company|[error-response](#schemaerror-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## get__v4_companies_{id}_

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/ \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/ HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/',
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
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/', array(
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
URL obj = new URL("https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/");
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
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/profile/identity/v4/companies/{id}/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v4/companies/{id}/`

*Find Company by Id*

<h3 id="get__v4_companies_{id}_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|company's uuid|

> Example responses

> 200 Response

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string"
    }
  ],
  "companyDomain": "string",
  "contact": {
    "country": "string",
    "emails": [
      "string"
    ],
    "formatted": "string",
    "latitude": "string",
    "locality": "string",
    "longitude": "string",
    "name": "string",
    "phones": [
      "string"
    ],
    "postalCode": "string",
    "region": "string",
    "streetAddress": "string"
  },
  "dataRetention": [
    {
      "id": "string",
      "name": "string",
      "scope": "dataretention.concur.expense",
      "unit": "day",
      "value": 0
    }
  ],
  "defaultLanguage": "string",
  "entitlements": [
    "Expense"
  ],
  "id": "string",
  "internetDomain": "string",
  "meta": {},
  "name": "string",
  "notifications": {
    "channels": [
      "Slack"
    ],
    "enabled": true
  },
  "schemas": [
    "string"
  ],
  "urn:ietf:params:scim:schemas:extension:authentication:2.0:Company": {
    "loginPolicy": {
      "hideForgotLoginIdLink": true,
      "loginFailureLockoutDuration": 0,
      "loginFailureWindowDuration": 0,
      "loginFailuresAllowed": 0,
      "loginIPRestriction": "string",
      "loginOneTimeLinkExpirationLength": 0,
      "loginViaSsoOnly": true
    },
    "passwordPolicy": {
      "daysUntilExpiration": 0,
      "expirePasswordOnUserCreation": true,
      "maxLength": 0,
      "minLength": 0,
      "mobileAuthenticationLifetime": 0,
      "mobileMinLength": 0,
      "mobileRequiresMixedCase": true,
      "mobileRequiresNonalphanum": true,
      "numGenerationsBeforeCanReuse": 0,
      "numSecurityQuestions": 0,
      "numSecurityQuestionsUsersPick": 0,
      "passwordResetEmailPolicy": "never",
      "passwordResetSupportEmail": "string",
      "requiresMixedCase": true,
      "requiresNonAlpha": true,
      "requiresNonAlphanum": true,
      "requiresNumber": true,
      "requiresSecurityQuestions": true,
      "restrictPasswordResetOncePerDay": true
    }
  },
  "urn:ietf:params:scim:schemas:extension:legacy:2.0:Company": {
    "identifiers": {
      "entityId": "string",
      "greatPlainsId": "string",
      "outtaskCompanyId": 0,
      "salesforceId": "string"
    },
    "mobile": {
      "isHighSecurityAccount": true
    }
  }
}
```

<h3 id="get__v4_companies_{id}_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Company|[Company](#schemacompany)|
|default|Default|error fetching company|[error-response](#schemaerror-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="identity-apis-schema">Schema</h1>

## get__v4_schemas_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/profile/identity/v4/schemas/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://us.api.concursolutions.com/profile/identity/v4/schemas/{id} HTTP/1.1
Host: us.api.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/profile/identity/v4/schemas/{id}',
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
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://us.api.concursolutions.com/profile/identity/v4/schemas/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://us.api.concursolutions.com/profile/identity/v4/schemas/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://us.api.concursolutions.com/profile/identity/v4/schemas/{id}', array(
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
URL obj = new URL("https://us.api.concursolutions.com/profile/identity/v4/schemas/{id}");
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
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/profile/identity/v4/schemas/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v4/schemas/{id}`

*Get Schema*

<h3 id="get__v4_schemas_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|schema id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|id|com:concur:cte:user:2.0|
|id|com:concur:cte:company:2.0|

> Example responses

> default Response

```json
{
  "status": "string",
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:Error"
  ]
}
```

<h3 id="get__v4_schemas_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successfully fetched schema|None|
|default|Default|error fetching schema|[error-response](#schemaerror-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_User">User</h2>

<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "id": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string",
      "type": "Work"
    }
  ],
  "dateOfBirth": "string",
  "displayName": "string",
  "emails": [
    {
      "dateAdded": "string",
      "dateVerified": "string",
      "display": "string",
      "id": "string",
      "notifications": true,
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "emergencyContacts": [
    {
      "country": "string",
      "emails": [
        "string"
      ],
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "name": "string",
      "phones": [
        "string"
      ],
      "postalCode": "string",
      "region": "string",
      "relationship": "Spouse",
      "streetAddress": "string"
    }
  ],
  "externalClient": "Concur.Travel",
  "externalId": "string",
  "gender": "Male",
  "id": "string",
  "localeOverrides": {
    "preference24Hour": "h:mm AM/PM",
    "preferenceCurrencySymbolLocation": "BeforeAmount",
    "preferenceDateFormat": "mm/dd/yyyy",
    "preferenceDefaultCalView": "day",
    "preferenceDistance": "mile",
    "preferenceEndDayViewHour": 0,
    "preferenceFirstDayOfWeek": "Monday",
    "preferenceHourMinuteSeparator": ":",
    "preferenceNegativeCurrencyFormat": "-100",
    "preferenceNegativeNumberFormat": "-100",
    "preferenceNumberFormat": "1,000.00",
    "preferenceStartDayViewHour": 0
  },
  "meta": {},
  "name": {
    "familyName": "string",
    "formatted": "string",
    "givenName": "string",
    "hasNoMiddleName": true,
    "honorificPrefix": "Miss",
    "honorificSuffix": "Jr.",
    "legalName": "string",
    "middleInitial": "string",
    "middleName": "string"
  },
  "nickName": "string",
  "phoneNumbers": [
    {
      "countryCode": "string",
      "countryISDCode": "string",
      "display": "string",
      "extension": "string",
      "id": "string",
      "notifications": true,
      "operatingSystem": "Android Phone",
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "preferredLanguage": "string",
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User"
  ],
  "timezone": "string",
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "companyId": "string",
    "costCenter": "string",
    "dataRetention": {
      "isDoNotTouch": true,
      "policyIds": [
        "string"
      ]
    },
    "department": "string",
    "division": "string",
    "employeeNumber": "string",
    "entitlements": [
      "Expense"
    ],
    "jobTitle": "string",
    "manager": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "orgUnit": "string",
    "organization": "string",
    "self": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "startDate": "string",
    "terminationDate": "string"
  },
  "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
    "expense": {
      "enableExpenseAssistant": "Calendar",
      "enablePersonalCardAutoCreate": true
    },
    "identifiers": {
      "entityId": "string",
      "guuid": "string",
      "outtaskCompanyId": 0,
      "outtaskUserId": 0
    },
    "legacyRole": "User",
    "locateRoles": [
      "string"
    ],
    "privateData": {
      "expense": {},
      "expenseIt": {},
      "locate": {},
      "notifications": {},
      "travel": {}
    },
    "supplierSearchRoles": [
      "string"
    ],
    "travel": {
      "vacationBackupManagerId": "string"
    }
  },
  "userName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A Boolean value indicating whether the User is active.|
|addresses|[object]|false|none|A physical mailing address for this User. Canonical type values of 'work', 'home', and 'other'. This attribute is a complex type with the following sub-attributes.|
|» country|string|false|none|A two-letter country code defined in ISO 3166-1 alpha-2|
|» formatted|string|false|none|The full mailing address, formatted for display or use with a mailing label. This attribute MAY contain  newlines.|
|» id|string|false|none|Unique identifier for the User's physical addresses.|
|» latitude|string|false|none|none|
|» locality|string|false|none|The city or locality.|
|» longitude|string|false|none|none|
|» postalCode|string|false|none|The zip code or postal code.|
|» region|string|false|none|The state or region.|
|» streetAddress|string|false|none|The full street address component, which may include house number, street name, P.O. box, and multi-line extended street address information.  This attribute MAY contain newlines.|
|» type|string|false|none|A label indicating the function of the address, e.g., 'work' or 'home'.|
|dateOfBirth|string|false|none|The user's date of birth , in YYYY-MM-DD format|
|displayName|string|false|none|The name of the User, suitable for display  to end-users.  The name SHOULD be the full name of the User being  described, if known.|
|emails|[object]|true|none|Email addresses for the user. The value SHOULD be canonicalized by the service provider, e.g., 'bjensen@example.com' instead of 'bjensen@EXAMPLE.COM'. Canonical type values of 'work', 'home', and 'other'.|
|» dateAdded|string|false|none|The date and time the email was added to the user's profile.|
|» dateVerified|string|false|none|The date and time the email was verified|
|» display|string|false|none|A human-readable email address.|
|» id|string|false|none|Unique identifier for the emails.|
|» notifications|boolean|false|none|Notifications opt-in for emails|
|» primary|boolean|false|none|A Boolean value indicating the 'primary' or preferred attribute value for this attribute, e.g., the preferred mailing address or primary email address.  The primary attribute value 'true' MUST appear no more than once.|
|» type|string|false|none|A label indicating the attribute's function, e.g., 'Work' or 'Home'.|
|» value|string|true|none|Email address value|
|» verified|boolean|false|none|flag to note which email has been verified by the user.|
|emergencyContacts|[object]|false|none|Emergency Contact information for the User.|
|» country|string|false|none|A two-letter country code defined in ISO 3166-1 alpha-2|
|» emails|[string]|false|none|Emails of the contact|
|» formatted|string|false|none|The full mailing address, formatted for display or use with a mailing label. This attribute MAY contain  newlines.|
|» latitude|string|false|none|none|
|» locality|string|false|none|The city or locality.|
|» longitude|string|false|none|none|
|» name|string|false|none|Contact name.|
|» phones|[string]|false|none|Phone numbers of the contact|
|» postalCode|string|false|none|The zip code or postal code.|
|» region|string|false|none|The state or region.|
|» relationship|string|true|none|Emergency contact relationship.|
|» streetAddress|string|false|none|The full street address component, which may include house number, street name, P.O. box, and multi-line extended street address information.  This attribute MAY contain newlines.|
|externalClient|string|false|none|The provisioning Client that generates the externalId|
|externalId|string|false|none|User identifilier from the provisioning client|
|gender|string|false|none|The user's gender|
|id|string|true|none|Unique identifier for the user - a uuid|
|localeOverrides|object|false|none|Support for users who want to override locale settings|
|» preference24Hour|string|false|none|preferred 24 hour format for the user|
|» preferenceCurrencySymbolLocation|string|false|none|preferred currency symbol location for the user|
|» preferenceDateFormat|string|false|none|preferred date format for the user|
|» preferenceDefaultCalView|string|false|none|preferred default calendar view for the user|
|» preferenceDistance|string|false|none|preferred distance metric|
|» preferenceEndDayViewHour|integer|false|none|preferred hour setting for the end of day, 0-23|
|» preferenceFirstDayOfWeek|string|false|none|preferred first day of the week for the user|
|» preferenceHourMinuteSeparator|string|false|none|preferred separator between hour and minute|
|» preferenceNegativeCurrencyFormat|string|false|none|preferred negative currency format for the user|
|» preferenceNegativeNumberFormat|string|false|none|preferred negative number format for the user|
|» preferenceNumberFormat|string|false|none|preferred number format for the user|
|» preferenceStartDayViewHour|integer|false|none|preferred start of day for the user, from 1|
|meta|object|false|none|none|
|name|object|true|none|The user's name|
|» familyName|string|true|none|The family name of the User, or last name in most Western languages (e.g., 'Jensen' given the full name 'Ms. Barbara J Jensen, III').|
|» formatted|string|false|none|The full name, including all middle names, title, and suffixes as appropriate, formatted for display (e.g., 'Ms. Barbara J Jensen, III').|
|» givenName|string|true|none|The given name of the User, or first name in most Western languages (e.g., 'Barbara' given the full name 'Ms. Barbara J Jensen, III').|
|» hasNoMiddleName|boolean|false|none|A boolean indicating that the user does not have a middle name|
|» honorificPrefix|string|false|none|The honorific prefix(es) of the User, or title in most Western languages (e.g., 'Ms.' given the full name 'Ms. Barbara J Jensen, III').|
|» honorificSuffix|string|false|none|The honorific suffix(es) of the User, or  suffix in most Western languages (e.g., 'III' given the full name  'Ms. Barbara J Jensen, III').|
|» legalName|string|false|none|The legal name of the User (e.g., 'Jane' given the full name 'Ms. Barbara J Jensen, III').|
|» middleInitial|string|false|none|middle initial, if the user has a middle name|
|» middleName|string|false|none|The middle name(s) of the User (e.g., 'Jane' given the full name 'Ms. Barbara J Jensen, III').|
|nickName|string|false|none|The casual way to address the user in real  life, e.g., 'Bob' or 'Bobby' instead of 'Robert'.  This attribute  SHOULD NOT be used to represent a User's username (e.g., 'bjensen' or  'mpepperidge').|
|phoneNumbers|[object]|false|none|Phone numbers for the User.  The value SHOULD be canonicalized by the service provider according to the format specified in RFC 3966, e.g., 'tel:+1-201-555-0123'. Canonical type values of 'work', 'home', 'mobile', 'fax', 'pager', and 'other'.|
|» countryCode|string|false|none|A two-letter code defined in ISO 3166-1 alpha-2 denoting the country the phone number was issued in. e.g., US|
|» countryISDCode|string|false|none|E164 assigned country code|
|» display|string|false|none|A human-readable phone number for display|
|» extension|string|false|none|phone number extension|
|» id|string|false|none|Unique identifier for phone numbers.|
|» notifications|boolean|false|none|LNA Opt-in for mobile devices (type=Mobile)|
|» operatingSystem|string|false|none|The OS of the  device, when the phone is a cellphone type|
|» primary|boolean|false|none|Primary device for mobile devices (type=Mobile)|
|» type|string|false|none|A label indicating the attribute's function, e.g., 'Work', 'Home'.|
|» value|string|false|none|Phone number value|
|» verified|boolean|false|none|Phone number verification status|
|preferredLanguage|string|false|none|Indicates the User's preferred written or spoken language.  Generally used for selecting a localized user interface|
|schemas|[string]|false|none|none|
|timezone|string|false|none|The User's time zone in the 'Olson' time zone database format, e.g., 'America/Los_Angeles'.|
|urn:ietf:params:scim:schemas:extension:enterprise:2.0:User|object|true|none|none|
|» companyId|string|true|none|Concur ID of the company|
|» costCenter|string|false|none|employee cost center for product|
|» dataRetention|object|false|none|none|
|»» isDoNotTouch|boolean|false|none|Whether we should delete user record or not, according to the user's data retention policies.|
|»» policyIds|[string]|false|none|User's active data retention policy Ids.|
|» department|string|false|none|Client supplied department name|
|» division|string|false|none|Client supplied division name|
|» employeeNumber|string|false|none|Client supplied employee's number within the company, unique for the company|
|» entitlements|[string]|false|none|The features enabled for the user|
|» jobTitle|string|false|none|user's job title in the company|
|» manager|object|false|none|The manager of this user|
|»» $ref|string|false|none|The URI of the SCIM resource representing the referenced user.|
|»» displayName|string|false|none|The referenced user's display name|
|»» employeeNumber|string|false|none|The referenced user's employee number, if it is an Enterprise user|
|»» value|string|false|none|The referenced user's UUID|
|» orgUnit|string|false|none|Client supplied org unit name|
|» organization|string|false|none|Company name|
|» self|object|false|none|A reference to this user|
|»» $ref|string|false|none|The URI of the SCIM resource representing the referenced user.|
|»» displayName|string|false|none|The referenced user's display name|
|»» employeeNumber|string|false|none|The referenced user's employee number, if it is an Enterprise user|
|»» value|string|false|none|The referenced user's UUID|
|» startDate|string|false|none|Start Date, in YYYY-MM-DD format|
|» terminationDate|string|false|none|Termination Date, in YYYY-MM-DD format, if the employee is terminated, this can also be used to calculate the data retention period|
|urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User|object|false|none|none|
|» expense|object|false|none|none|
|»» enableExpenseAssistant|string|false|none|How trip report should be created by Expense Assistant|
|»» enablePersonalCardAutoCreate|boolean|false|none|none|
|» identifiers|object|false|none|none|
|»» entityId|string|false|none|entity_id for this CTE user|
|»» guuid|string|false|none|OUM.guuid for this CTE.Expense user. Not set if this is not a CTE expense user|
|»» outtaskCompanyId|integer|false|none|outtask_company.id for this CTE user. Not set if this is not a CTE user|
|»» outtaskUserId|integer|false|none|outtask_user.user_id. Not set if this is not a CTE user|
|» legacyRole|string|false|none|none|
|» locateRoles|[string]|false|none|external facing roles for the User for Locate|
|» privateData|object|false|none|none|
|»» expense|object|false|none|Any private info expense wants to store|
|»» expenseIt|object|false|none|Any private info ExpenseIt wants to store|
|»» locate|object|false|none|Any private info Locate wants to store|
|»» notifications|object|false|none|Any private info Notifications Platform wants to store|
|»» travel|object|false|none|Any private info travel wants to store|
|» supplierSearchRoles|[string]|false|none|roles for supplier search|
|» travel|object|false|none|none|
|»» vacationBackupManagerId|string|false|none|backup manager (UUID)|
|userName|string|true|none|The name that can be used to login to CTE|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Work|
|type|Home|
|type|Other|
|type|Billing|
|type|Bank|
|type|Shipping|
|type|Work|
|type|Home|
|type|Other|
|type|Other2|
|type|Work2|
|type|SMS|
|relationship|Spouse|
|relationship|Brother|
|relationship|Parent|
|relationship|Sister|
|relationship|Life Partner|
|relationship|Other|
|externalClient|Concur.Travel|
|externalClient|Concur.ProvisioningService|
|externalClient|SAP.WBS|
|externalClient|Microsoft.AzureAD|
|externalClient|Okta|
|gender|Male|
|gender|Female|
|gender|Others|
|preference24Hour|h:mm AM/PM|
|preference24Hour|H:mm|
|preferenceCurrencySymbolLocation|BeforeAmount|
|preferenceCurrencySymbolLocation|AfterAmount|
|preferenceDateFormat|mm/dd/yyyy|
|preferenceDateFormat|mm.dd.yyyy|
|preferenceDateFormat|mm-dd-yyyy|
|preferenceDateFormat|dd/mm/yyyy|
|preferenceDateFormat|dd.mm.yyyy|
|preferenceDateFormat|dd-mm-yyyy|
|preferenceDateFormat|yyyy/mm/dd|
|preferenceDateFormat|yyyy.mm.dd|
|preferenceDateFormat|yyyy-mm-dd|
|preferenceDefaultCalView|day|
|preferenceDefaultCalView|week|
|preferenceDefaultCalView|month|
|preferenceDistance|mile|
|preferenceDistance|km|
|preferenceFirstDayOfWeek|Monday|
|preferenceFirstDayOfWeek|Tuesday|
|preferenceFirstDayOfWeek|Wednesday|
|preferenceFirstDayOfWeek|Thursday|
|preferenceFirstDayOfWeek|Friday|
|preferenceFirstDayOfWeek|Saturday|
|preferenceFirstDayOfWeek|Sunday|
|preferenceHourMinuteSeparator|:|
|preferenceHourMinuteSeparator|.|
|preferenceNegativeCurrencyFormat|-100|
|preferenceNegativeCurrencyFormat|(100)|
|preferenceNegativeNumberFormat|-100|
|preferenceNegativeNumberFormat|(100)|
|preferenceNumberFormat|1,000.00|
|preferenceNumberFormat|1.000,00|
|preferenceNumberFormat|1 000,00|
|preferenceNumberFormat|1'000.00|
|preferenceNumberFormat|1'000,00|
|honorificPrefix|Miss|
|honorificPrefix|Mr|
|honorificPrefix|Mrs|
|honorificPrefix|Ms|
|honorificPrefix|Mx|
|honorificPrefix|B.A.|
|honorificPrefix|B.Sc.|
|honorificPrefix|CPA|
|honorificPrefix|D.D.|
|honorificPrefix|D.D.S.|
|honorificPrefix|D.P.S.|
|honorificPrefix|Dr|
|honorificPrefix|Dr Mr|
|honorificPrefix|Dr Mrs|
|honorificPrefix|Dr Ms|
|honorificPrefix|Eng.|
|honorificPrefix|Ing.|
|honorificPrefix|Lady|
|honorificPrefix|Lord|
|honorificPrefix|M.D.|
|honorificPrefix|MBA|
|honorificPrefix|P.Eng.|
|honorificPrefix|Ph.D|
|honorificPrefix|Ph.D.|
|honorificPrefix|Prof|
|honorificPrefix|Prof Dr|
|honorificPrefix|Prof Dr Mr|
|honorificPrefix|Prof Dr Mrs|
|honorificPrefix|Prof Dr Ms|
|honorificPrefix|Prof Mr|
|honorificPrefix|Prof Mrs|
|honorificPrefix|Prof Ms|
|honorificPrefix|Rev|
|honorificPrefix|Sir|
|honorificSuffix|Jr.|
|honorificSuffix|Sr.|
|honorificSuffix|I|
|honorificSuffix|II|
|honorificSuffix|III|
|honorificSuffix|IV|
|honorificSuffix|V|
|honorificSuffix|VI|
|operatingSystem|Android Phone|
|operatingSystem|Android Tablet|
|operatingSystem|Blackberry|
|operatingSystem|iOS Phone|
|operatingSystem|iOS Tablet|
|operatingSystem|Not a smartphone|
|operatingSystem|Other iOS device|
|operatingSystem|Other smartphone|
|operatingSystem|Unknown|
|operatingSystem|Window Mobile|
|type|Work|
|type|Home|
|type|Mobile|
|type|Fax|
|type|Pager|
|type|Other|
|type|Work2|
|enableExpenseAssistant|Calendar|
|enableExpenseAssistant|Trip|
|enableExpenseAssistant|None|
|legacyRole|User|
|legacyRole|Boardmember|
|legacyRole|Boardmember and user|
|legacyRole|Meeting user|
|legacyRole|Webservice user|
|legacyRole|System User|

<h2 id="tocS_Company">Company</h2>

<a id="schemacompany"></a>
<a id="schema_Company"></a>
<a id="tocScompany"></a>
<a id="tocscompany"></a>

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string"
    }
  ],
  "companyDomain": "string",
  "contact": {
    "country": "string",
    "emails": [
      "string"
    ],
    "formatted": "string",
    "latitude": "string",
    "locality": "string",
    "longitude": "string",
    "name": "string",
    "phones": [
      "string"
    ],
    "postalCode": "string",
    "region": "string",
    "streetAddress": "string"
  },
  "dataRetention": [
    {
      "id": "string",
      "name": "string",
      "scope": "dataretention.concur.expense",
      "unit": "day",
      "value": 0
    }
  ],
  "defaultLanguage": "string",
  "entitlements": [
    "Expense"
  ],
  "id": "string",
  "internetDomain": "string",
  "meta": {},
  "name": "string",
  "notifications": {
    "channels": [
      "Slack"
    ],
    "enabled": true
  },
  "schemas": [
    "string"
  ],
  "urn:ietf:params:scim:schemas:extension:authentication:2.0:Company": {
    "loginPolicy": {
      "hideForgotLoginIdLink": true,
      "loginFailureLockoutDuration": 0,
      "loginFailureWindowDuration": 0,
      "loginFailuresAllowed": 0,
      "loginIPRestriction": "string",
      "loginOneTimeLinkExpirationLength": 0,
      "loginViaSsoOnly": true
    },
    "passwordPolicy": {
      "daysUntilExpiration": 0,
      "expirePasswordOnUserCreation": true,
      "maxLength": 0,
      "minLength": 0,
      "mobileAuthenticationLifetime": 0,
      "mobileMinLength": 0,
      "mobileRequiresMixedCase": true,
      "mobileRequiresNonalphanum": true,
      "numGenerationsBeforeCanReuse": 0,
      "numSecurityQuestions": 0,
      "numSecurityQuestionsUsersPick": 0,
      "passwordResetEmailPolicy": "never",
      "passwordResetSupportEmail": "string",
      "requiresMixedCase": true,
      "requiresNonAlpha": true,
      "requiresNonAlphanum": true,
      "requiresNumber": true,
      "requiresSecurityQuestions": true,
      "restrictPasswordResetOncePerDay": true
    }
  },
  "urn:ietf:params:scim:schemas:extension:legacy:2.0:Company": {
    "identifiers": {
      "entityId": "string",
      "greatPlainsId": "string",
      "outtaskCompanyId": 0,
      "salesforceId": "string"
    },
    "mobile": {
      "isHighSecurityAccount": true
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A Boolean value indicating whether the company is active.|
|addresses|[object]|false|none|A physical mailing address for this company.|
|» country|string|false|none|A two-letter country code defined in ISO 3166-1 alpha-2|
|» formatted|string|false|none|The full mailing address, formatted for display or use with a mailing label. This attribute MAY contain  newlines.|
|» latitude|string|false|none|none|
|» locality|string|false|none|The city or locality.|
|» longitude|string|false|none|none|
|» postalCode|string|false|none|The zip code or postal code.|
|» region|string|false|none|The state or region.|
|» streetAddress|string|false|none|The full street address component, which may include house number, street name, P.O. box, and multi-line extended street address information.  This attribute MAY contain newlines.|
|companyDomain|string|false|none|The company's company domain name|
|contact|object|false|none|Contact information for the company.|
|» country|string|false|none|A two-letter country code defined in ISO 3166-1 alpha-2|
|» emails|[string]|false|none|Emails of the contact|
|» formatted|string|false|none|The full mailing address, formatted for display or use with a mailing label. This attribute MAY contain  newlines.|
|» latitude|string|false|none|none|
|» locality|string|false|none|The city or locality.|
|» longitude|string|false|none|none|
|» name|string|true|none|Contact name.|
|» phones|[string]|false|none|Phone numbers of the contact|
|» postalCode|string|false|none|The zip code or postal code.|
|» region|string|false|none|The state or region.|
|» streetAddress|string|false|none|The full street address component, which may include house number, street name, P.O. box, and multi-line extended street address information.  This attribute MAY contain newlines.|
|dataRetention|[object]|false|none|none|
|» id|string|false|none|Unique identifier for the data retention policy|
|» name|string|false|none|Name of the company data retention policy|
|» scope|string|false|none|none|
|» unit|string|false|none|Period of the data retention policy|
|» value|integer|false|none|Period of the data retention policy|
|defaultLanguage|string|false|none|Indicates the default language for the company.|
|entitlements|[string]|false|none|The features enabled for the company|
|id|string|true|none|Unique identifier for the company - a uuid|
|internetDomain|string|false|none|The company's internet domain name|
|meta|object|false|none|none|
|name|string|false|none|The name of the company|
|notifications|object|false|none|none|
|» channels|[string]|false|none|none|
|» enabled|boolean|false|none|none|
|schemas|[string]|false|none|none|
|urn:ietf:params:scim:schemas:extension:authentication:2.0:Company|object|false|none|none|
|» loginPolicy|object|false|none|none|
|»» hideForgotLoginIdLink|boolean|false|none|Hide Forgot LoginId Link|
|»» loginFailureLockoutDuration|integer|false|none|Login Failure Lockout Duration|
|»» loginFailureWindowDuration|integer|false|none|Login Failure Window Duration|
|»» loginFailuresAllowed|integer|false|none|Login Failures Allowed|
|»» loginIPRestriction|string|false|none|login IP Restriction|
|»» loginOneTimeLinkExpirationLength|integer|false|none|Login One Time Link Expiration Length|
|»» loginViaSsoOnly|boolean|false|none|login Via SSO Only|
|» passwordPolicy|object|false|none|none|
|»» daysUntilExpiration|integer|false|none|Number of days Until expiration|
|»» expirePasswordOnUserCreation|boolean|false|none|Expire Password On User Creation|
|»» maxLength|integer|false|none|Maximum length|
|»» minLength|integer|false|none|Minimum length|
|»» mobileAuthenticationLifetime|integer|false|none|Mobile session timeout in seconds|
|»» mobileMinLength|integer|false|none|Min Length for Mobile|
|»» mobileRequiresMixedCase|boolean|false|none|Require mixed cases for Mobile|
|»» mobileRequiresNonalphanum|boolean|false|none|Require None alpha numberic for Mobile|
|»» numGenerationsBeforeCanReuse|integer|false|none|Number of Generations Before the password can be reused|
|»» numSecurityQuestions|integer|false|none|Number of security questions|
|»» numSecurityQuestionsUsersPick|integer|false|none|Number of security questions users can pick|
|»» passwordResetEmailPolicy|string|false|none|When should password reset password email shall be sent|
|»» passwordResetSupportEmail|string|false|none|The FROM address of the password or PIN reset email|
|»» requiresMixedCase|boolean|false|none|Require mixed cases|
|»» requiresNonAlpha|boolean|false|none|Requires NonAlpha|
|»» requiresNonAlphanum|boolean|false|none|Requires NonAlphaNum|
|»» requiresNumber|boolean|false|none|Require numbers|
|»» requiresSecurityQuestions|boolean|false|none|Require security questions|
|»» restrictPasswordResetOncePerDay|boolean|false|none|restrict Password Reset Once Per Day|
|urn:ietf:params:scim:schemas:extension:legacy:2.0:Company|object|false|none|none|
|» identifiers|object|false|none|none|
|»» entityId|string|false|none|entity_id for the company|
|»» greatPlainsId|string|false|none|GreatPlains Id for the company|
|»» outtaskCompanyId|integer|false|none|outtask_company ID for the company|
|»» salesforceId|string|false|none|Salesforce Id for the company|
|» mobile|object|false|none|none|
|»» isHighSecurityAccount|boolean|false|none|Whether the company is a high security account|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|dataretention.concur.expense|
|scope|dataretention.concur.expense.default|
|scope|dataretention.concur.invoice|
|scope|dataretention.concur.invoice.default|
|scope|dataretention.concur.locate|
|scope|dataretention.concur.locate.default|
|scope|dataretention.concur.request|
|scope|dataretention.concur.request.default|
|scope|dataretention.concur.travel|
|scope|dataretention.concur.travel.default|
|scope|dataretention.data.sensitive|
|unit|day|
|unit|month|
|unit|year|
|passwordResetEmailPolicy|never|
|passwordResetEmailPolicy|anyTime|
|passwordResetEmailPolicy|afterFirstLogin|

<h2 id="tocS_error-response">error-response</h2>

<a id="schemaerror-response"></a>
<a id="schema_error-response"></a>
<a id="tocSerror-response"></a>
<a id="tocserror-response"></a>

```json
{
  "status": "string",
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:Error"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|same as HTTP status code, e.g. 400, 401, etc.|
|schemas|[string]|false|none|none|

