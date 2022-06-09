---
title: Profile Search
layout: reference
---
# Profile Search

The Profile Search service is designed to allow clients to use search filters based on user attributes to help refine search results. This functionality  allows clients to use attributes, logical operators and grouping operators to improve search results to their specific requirements. 

## <a name="limitations"></a>Limitations

Only identity attritubes are searchable with filters at this time. This API is not available in the China Data Center. This API is only available to partners who have been granted access by SAP Concur. Access to this documentation does not provide access to the API. Filters are available for unique attributes only.

## <a name="products-editions"></a> Products and Editions

* Concur Expense Professional Edition
* Concur Expense Standard Edition
* Concur Travel Professional Edition
* Concur Travel Standard Edition
* Concur Invoice Professional Edition
* Concur Invoice Standard Edition
* Concur Request Professional Edition
* Concur Request Standard Edition

## <a name="scope-usage"></a> Scope Usage

Name|Description|Endpoint
---|---|---
`identity.user.ids.read`|Read user ID data.|GET
`identity.user.core.read`|Read user core data.|GET
`identity.user.coresensitive.read`|Read core sensitive data.|GET
`identity.user.enterprise.read`|Read user enterprise data.|GET

For more information on scope usage and mapping, please see the [Identity v4 Scope Mapping](./v4.scope-mapping.html) page.

## <a name="dependencies"></a> Dependencies

None.

## Access Token Usage <a name="access-token-usage"></a>

This API supports only company level access tokens.

## <a name="GET-user"></a>Retrieve Users

Retrieves users of a given company. The filter operations can be used to fetch a unique user or users identity information.

### Query Parameters
| Parameter | Description | Required | Value |
| --- | --- | --- | --- |
| `companyId` | Scope of search is within user's authorized boundary | Yes | UUID
| `filter`    | Narrow returned users matching expression | No | See #Filtering
| `count`     | Number of users to return | No | 1 - 1000
| `attributes`| Return only specified fields. Delimited by commas. | No | active,id,meta
| `excludedAttributes` | Return all other fields than specified. Delimited by commas.| No | active,meta
| `continuationToken` | Enable user to continue session to the next page | No | See #Pagination

### Filtering

Filters are comprised of Attribute Operators, Logical Operators, and Grouping Operators.

Examples:
- Filter by familyName: `filter=name.familyName co "Smith"`

- Filter by userName: `filter=urn:ietf:params:scim:schemas:sap:2.0:User:userName sw "J"`

### Attribute Operators
Conditional relationship between attribute and value stored in database. Multiple operators can be used with zero or more logical operators - see next section.

| Operator | Description | Example
|---|---|---|
| eq | equal | `active eq true`
| ne | not equal | `name.familyName ne "Smith"`
| co | contains | `name.givenName co "John"`
| sw | starts with | `name.givenName sw "J"`
| ew | ends with | `name.givenName ew "n"`
| pr | present (has value) | `name.givenName pr`
| gt | greater than | `meta.lastModified gt "2011-05-13T04:42:34Z"`
| ge | greater than or equal to | `meta.lastModified ge "2011-05-13T04:42:34Z"`
| lt | less than | `meta.lastModified lt "2011-05-13T04:42:34Z"`
| le | less than or equal to | `meta.lastModified le "2011-05-13T04:42:34Z"`


### Logical Operators
Separate attribute expressions. Filter can include zero or more logical operators. 

By default, logical operators are evaluated in the following order of operations - where "not" takes precedence over "and", which takes precedence over "or". 

This definition may be overwritten by grouping operators.

| Operator | Description | Example
|---|---|---|
| and | Match if both expressions evaluate to true | `name.givenName eq "John" and name.familyName eq "Smith"`
| or | Match if either expression evaluates to true| `name.givenName eq "John" or name.givenName eq "James"`
| not | Match if expression evaluates to false | `not(name.givenName eq "John")`

### Precedence Examples
The definition provided by the RFC states : `NOT > AND > OR`

For the examples below, capital letters (A, B, C) represent different attribute expressions.
| Expression | Default Evaluation 
| --- | ---
`A or B and C` | `A or (B and C)`
`A and B or C` | `(A and B) or C`
`A and B or C and D` | `(A and B) or (C and D)`
`A or B and C or D` | `A or (B and C) or D`
`not A or B and C` | `(not A) or (B and C)`

### Grouping Operators
Evaluate an expression in explicit order. 

| Operator | Description | Example
|---|---|---|
| ( ) | Precedence grouping, (evaluate first) and overrides precedence | `(name.givenName eq "John" or name.givenName eq "James") and name.familyName eq "Smith"`
| [ ] | Complex attribute filtering, used with multi-valued attributes | `emails[type eq "work" and value co "@example.com"]`

## Pagination
By default, a single query will return `100` users. To retrieve more than `100` users for a single query, SCIM defines the [count](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.4) query parameter. 

Note: The `startIndex` query parameter is *not supported* by Pv4 Search, due to the behavior of Deep Pagination. 

The upper limit of `count` is `1,000` users for a single query. To go *beyond* the first `1,000` users, Pv4 Search returns a `continuationToken`. When passed, the continuationToken is used to return the next page of matching records for a single, unique query. 


### Request

#### URI

##### Template

```
GET https://us.api.concursolutions.com/profile/identity/v4/Users
```

```
GET https://us.api.concursolutions.com/profile/identity/v4/Users?count=20
```

```
GET https://us.api.concursolutions.com/profile/identity/v4/Users/<Concur UUID>
```

```
GET https://us.api.concursolutions.com/profile/identity/v4/Users?filter=attributes eq "value"
```
### Example

```
GET https://us.api.concursolutions.com/profile/identity/v4/Users?filter=employeeNumber eq "123456789_1"
```

#### Headers

* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)

#### Payload

None.

### Response

#### Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)
* [401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)
* [404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)
* [501 Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)
* [502 Bad Gateway](https://tools.ietf.org/html/rfc7231#section-6.6.3)
* [503 Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)
* [504 Gateway Timeout](https://tools.ietf.org/html/rfc7231#section-6.6.5)

#### Headers

* `concur-correlationid` is a SAP Concur specific custom header used for technical support in the form of a [RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace](https://tools.ietf.org/html/rfc4122)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)

#### Payload

[User Schema](#schema-user)

### Example

#### Request

```
GET https://us.api.concursolutions.com/profile/identity/v4/Users/
Accept: application/json
Authorization: BEARER {token}
```

#### Response

```
200 OK
Content-Type: application/json
```

```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:ListResponse"
  ],
  "totalResults": 107705,
  "startIndex": 1,
  "itemsPerPage": 20,
  "Resources": [
    {User 1 …},
    {User 2…},…
    {User 20…}
  ]
}
```

## Retrieve a User's Identity Profile <a name="GET-user-identity"></a>

Retrieves a unique user based on the user’s UUID.

### Request

#### URI

##### Template

```
GET https://us.api.concursolutions.com/profile/identity/v4/Users/
```
##### Parameters

Name|Type|Format|Description
---|---|---|---
`id`|`string`|-|Requested user's UUID.


#### Headers

* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)

#### Payload

None.

### Response

#### Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)
* [401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)
* [404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)
* [501 Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)
* [502 Bad Gateway](https://tools.ietf.org/html/rfc7231#section-6.6.3)
* [503 Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)
* [504 Gateway Timeout](https://tools.ietf.org/html/rfc7231#section-6.6.5)

#### Headers

* `concur-correlationid` is a SAP Concur specific custom header used for technical support in the form of a [RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace](https://tools.ietf.org/html/rfc4122)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)

#### Payload

[User Schema](#schema-user)

### Example

#### Request

```
GET https://us.api.concursolutions.com/profile/identity/v4/Users/
Accept: application/json
Authorization: BEARER {token}
```

#### Response

```
200 OK
Content-Type: application/json
```

```json
{
    "localeOverrides": {
        "preferenceEndDayViewHour": 20,
        "preferenceFirstDayOfWeek": "Sunday",
        "preferenceDateFormat": "mm/dd/yyyy",
        "preferenceCurrencySymbolLocation": "BeforeAmount",
        "preferenceHourMinuteSeparator": ":",
        "preferenceDistance": "mile",
        "preferenceDefaultCalView": "month",
        "preference24Hour": "H:mm AM/PM",
        "preferenceNumberFormat": "1,000.00",
        "preferenceStartDayViewHour": 8,
        "preferenceNegativeCurrencyFormat": null,
        "preferenceNegativeNumberFormat": null
    },
    "addresses": [],
    "timezone": "America/New_York",
    "meta": {
        "resourceType": "User",
        "created": "2021-11-17T22:44:09.000164Z",
        "lastModified": "2021-11-17T22:48:31.000891Z",
        "version": 4,
        "location": "https://us.api.concursolutions.com/profile/identity/v4/Users/3df11695-e8bb-40ff-8e98-c85913ab2789"
    },
    "displayName": "John",
    "name": {
        "familyName": "Doe",
        "givenName": "John",
        "honorificSuffix": "VI",
        "familyNamePrefix": null
    },
    "phoneNumbers": [],
    "emergencyContacts": null,
    "preferredLanguage": "en-US",
    "title": null,
    "dateOfBirth": null,
    "nickName": null,
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
        "urn:ietf:params:scim:schemas:extension:sap:2.0:User"
    ],
    "externalId": "1234_externalId",
    "active": true,
    "id": "3df11695-e8bb-40ff-8e98-c85913ab2789",
    "emails": [
        {
            "verified": false,
            "type": "work",
            "value": "John11_17_1@sap.com",
            "notifications": true
        }
    ],
    "userName": "John11_17_1@sap.com",
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
        "terminationDate": null,
        "companyId": "aa076ada-80a9-4f57-8e98-9300b1c3171d",
        "manager": null,
        "costCenter": null,
        "startDate": "2021-11-17T00:00:00.000",
        "employeeNumber": "1234_employeeNumber"
    }
}
```

