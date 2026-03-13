---
title: Rotating Secrets for an App
layout: reference
---

{% include prerelease.html %}

# Managing App Secrets <a name="managing_app_secrets"></a>

Applications can use the `https://us.api.concursolutions.com/app-mgmt/v4/:appID/secrets`endpoint to manage app secrets, as follows. 

All methods require an App JWT for Authorization (Bearer {token}). To generrate your App JWT, follow the instructions in the [Authentication](https://developer.concur.com/api-reference/authentication/getting-started.html) section.  

### Retrieve a List of Secrets for a Given App ID

```shell
GET https://us.api.concursolutions.com/app-mgmt/v4/:appID/secrets
```

Authorization: Bearer {token}

#### Response

```shell
HTTP/1.1 200 OK
```

**Error HTTP Responses**

HTTP Status Code|Description
---|---
400|Bad Request `(invalid schemas, operation, path, or status value)`
401|Unauthorized `(invalid appId or invalid/missing JWT)`
404|Not Found `(app or secret not found)`
500|Server Error `(error updating app secret status)`

### Example

The IDs in this sample are dummy data, not part of the actual Concur App.

```shell
GET /app-mgmt/v4/0c5c13e9-c2e3-4dcd-8bcc-86d7da7fbf6d/secrets
```

#### Response

The response body contains all the secrets for the provided AppID: 

```json
[
      {
        "createdAt": "2026-02-17T00:34:02.735Z",
        "id": "3c955ea9-9b2c-4927-8465-08f5d2af53cd"
        "status": "Active",
        "updatedAt": "2026-02-17T00:34:02.735Z"
      },
      {
        "createdAt": "2026-02-18T00:48:02.456Z",
        "id": "9aaaede8-e2f2-4463-bd80-6af5a2307f8e"
        "status": "Inactive",
        "updatedAt": "2026-02-19T02:59:22.849Z"
      }
]
```

### Create a New Secret for a Given App ID

```shell
POST https://us.api.concursolutions.com/app-mgmt/v4/:appID/secrets
```

#### Request

Authorization: Bearer {token}
 
#### Response

```shell
HTTP/1.1 200 OK
```

**Error HTTP Responses**

HTTP Status Code|Description
---|---
400|Bad Request `(invalid schemas, operation, path, or status value)`
401|Unauthorized `(invalid appId or invalid/missing JWT)`
404|Not Found `(app or secret not found)`
500|Server Error `(error updating app secret status)`

### Update or Rotate Secret Status

PATCH: Update the status of secrets for a given App ID to active or inactive. Also use this method to rotate a secret.
 
```shell
PATCH https://us.api.concursolutions.com/app-mgmt/v4/:AppID/secrets/:secretID
```

#### Request

Authorization: Bearer {token}

Operation: SCIM/PATCH format

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [{
    "op": "replace",
    "path": "/status",
    "value": "active"
  }]
}
```

### Example
 
The IDs in this sample are dummy data, not part of the actual Concur App.

**Making a Newly Created App Secret Active**

```shell
PATCH /app-mgmt/v4/0c5c13e9-c2e3-4dcd-8bcc-86d7da7fbf6d/secrets/4b9e7205-08b1-48d1-aee8-8f5797d06475
```

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [{
    "op": "replace",
    "path": "/status",
    "value": "active"
  }]
}
``` 

#### Response

```shell
Success: HTTP 200 OK
```

**Error HTTP Responses**

HTTP Status Code|Description
---|---
400|Bad Request `(invalid schemas, operation, path, or status value)`
401|Unauthorized `(invalid appId or invalid/missing JWT)`
404|Not Found `(app or secret not found)`
500|Server Error `(error updating app secret status)` 
 
### Delete a Secret Associated with the App ID
 
```shell
DELETE https://us.api.concursolutions.com/app-mgmt/v4/:appID/secrets/:secret
``` 

#### Request
 
Authorization: Bearer {token}
 
#### Response

```shell
HTTP/1.1 204 OK
```

**Error HTTP Responses**

HTTP Status Code|Description
---|---
400|Bad Request `(appId and secretId are required, or secret is not inactive)`
401|Unauthorized `(invalid appId or invalid/missing JWT)`
404|Not Found `(app or secret not found)`
500|Server Error `(error deleting app secret)`
