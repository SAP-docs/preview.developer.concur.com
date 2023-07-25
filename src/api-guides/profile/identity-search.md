---
title: Identity v4.1 Search Guide
layout: reference
---

# Identity v4.1 Search Guide

The Identity v4.1 Search API is built to enable clients to filter based on User Identity attributes.
This guide presents a set of detailed examples, advanced functionalities, and limitations of v4.1 Search.
Search is an endpoint that enables callers to retrieve a subset of users matching conditions as [parameters](#schema-search-parameters).

## Popular Searches

This section outlines popular use cases and assumes the caller has been authenticated within a company resource via Company JWT.
The following examples use all available parameters to demonstrate the functionality of this API.

### Authentication (Required)

To use Identity v4.1 APIs, the appropriate [scopes](https://developer.concur.com/api-reference/profile/v4.1.identity.html#filter-for-users-) must be assigned to the requesting authentication application. Contact your SAP Concur account representative to update your Company JWT scopes to access the identity endpoints. After scopes have been granted to your authentication application, please verify the scopes. If you have questions regarding granting scopes, please contact your SAP Concur account representative.

### Search for a user by email address

Retrieve the UUID of a User Identity Profile based on email address.

```
POST https://us.api.concursolutions.com/profile/identity/v4.1/Users/.search
Accept: application/json
Authorization: BEARER {token}
```

```json
{
  "schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ],
  "filter": "emails.value eq \"John.Doe@sap.com\"",
  "attributes": [ "emails" ]
}
```

#### Response
```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:ListResponse"
  ],
  "totalResults": 1,
  "startIndex": 1,
  "itemsPerPage": 1,
  "Resources": [
    {
      "emails": [
        {
          "verified": false,
          "type": "work",
          "value": "john.doe@sap.com",
          "notifications": false
        }
      ],
      "id": "f3a49682-5d15-4ed0-9fa1-d834f87ea16e"
    }
  ]
}
```

### Search for active user(s) who have an email address that ends with company domain

Retrieve one or more users who are active and have an @sap email address.

```
POST https://us.api.concursolutions.com/profile/identity/v4.1/Users/.search
Accept: application/json
Authorization: BEARER {token}
```

```json
{
  "schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ],
  "filter": "active eq true and emails.value ew \"sap.com\"",
  "attributes": [ "active", "emails" ]
}
```

#### Response
```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:ListResponse"
  ],
  "totalResults": 2,
  "startIndex": 1,
  "itemsPerPage": 2,
  "Resources": [
    {
      "active": true,
      "emails": [
        {
          "verified": false,
          "type": "work",
          "value": "john.doe@sap.com",
          "notifications": false
        }
      ],
      "id": "f3a49682-5d15-4ed0-9fa1-d834f87ea16e"
    },
    {
      "active": true,
      "emails": [
        {
          "verified": true,
          "type": "work",
          "value": "johnny.appleseed@sap.com",
          "notifications": false
        }
      ],
      "id": "58d72127-d0af-44ab-957d-ca7b87499f27"
    }
  ]
}
```

### Search for active users(s) who have access to an entitlement

Retrieve one or more users who are active and contain an "Invoice" entitlement.

```
POST https://us.api.concursolutions.com/profile/identity/v4.1/Users/.search
Accept: application/json
Authorization: BEARER {token}
```

```json
{
  "schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ],
  "filter": "active eq true and entitlements eq \"invoice\"",
  "attributes": [ "active", "entitlements" ]
}
```

#### Response
```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:ListResponse"
  ],
  "totalResults": 2,
  "startIndex": 1,
  "itemsPerPage": 2,
  "Resources": [
    {
      "active": true,
      "entitlements": [
        "Travel",
        "Invoice"
      ],
      "id": "f3a49682-5d15-4ed0-9fa1-d834f87ea16e"
    },
    {
      "active": true,
      "entitlements": [
        "Invoice"
      ],
      "id": "58d72127-d0af-44ab-957d-ca7b87499f27"
    }
  ]
}
```

### Search for user(s) who work in Bellevue

Retrieve the UUIDs of users who work in Bellevue.

```
POST https://us.api.concursolutions.com/profile/identity/v4.1/Users/.search
Accept: application/json
Authorization: BEARER {token}
```

```json
{
  "schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ],
  "filter": "addresses[type eq \"work\" and locality eq \"Bellevue\"]",
  "attributes": [ "id" ]
}
```

#### Response
```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:ListResponse"
  ],
  "totalResults": 5,
  "startIndex": 1,
  "itemsPerPage": 5,
  "Resources": [
    {
      "id": "f3a49682-5d15-4ed0-9fa1-d834f87ea16e"
    },
    {
      "id": "58d72127-d0af-44ab-957d-ca7b87499f27"
    },
    {
      "id": "2a09b1ba-125f-4e4c-a8ef-f48a018583cc"
    },
    {
      "id": "b49497ca-9152-475b-8acf-f57b8e2a796d"
    },
    {
      "id": "1077e0e4-a883-4bd1-9dbb-0a54a58ab344"
    }
  ]
}
```

### Search for active user(s) and have been with the company for at least 10 years

Retrieve user(s) who are currently active and have a start date before 2013.

```
POST https://us.api.concursolutions.com/profile/identity/v4.1/Users/.search
Accept: application/json
Authorization: BEARER {token}
```

```json
{
  "schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ],
  "filter": "active eq true and urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:startDate le 2013-12-31",
  "attributes": [ "active", "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:startDate" ]
}
```

#### Response
```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:ListResponse"
  ],
  "totalResults": 2,
  "startIndex": 1,
  "itemsPerPage": 2,
  "Resources": [
    {
      "id": "f3a49682-5d15-4ed0-9fa1-d834f87ea16e",
      "active": true,
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
        "startDate": "2012-08-01"
      }
    },
    {
      "id": "58d72127-d0af-44ab-957d-ca7b87499f27",
      "active": true,
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
        "startDate": "2013-01-01"
      }
    }
  ]
}
```

## Search Parameters <a name="schema-search-parameters"></a>
This API implements the functionality defined in [RFC 7644 § 3.4.3](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.3). 

| Parameter| Description| Required | Value
| --- | --- | --- | ---
| `schemas`| Validate request against schema object.| Yes | List of Strings <br> [Schemas](#schemas)
| `filter` | Narrow returned users matching expression.| No | Query String <br> [Filtering](#filtering)
| `count`| Number of users to return.| No | 1 - 1000 <br> [Pagination](#pagination)
| `attributes`| Return only specified fields.| No | List of Strings <br> [Example](#param-example-attributes) 
| `excludedAttributes` | Return all other fields than specified. | No | List of Strings <br> [Example](#param-example-excluded-attributes) 
| `cursor` | Enable user to continue to the next page. | No | Encoded String <br> [Pagination](#pagination)

## Schemas <a name="schemas"></a>
The `schemas` parameter is required and may not be empty. The required format:

```json
"schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ]
```

## Attributes / ExcludedAttributes <a name="param-attributes-exclude"></a>
Adding `attributes` and/or `excludedAttributes` to a query remove attributes from each user-object in the response. The `attributes` parameter returns *only what is requested* while the `excludedAttributes` parameter returns *everything except what is requested*.

### Attribute Notation <a name="attribute-notation"></a>

Standard Attribute Notation, [RFC-7644](https://datatracker.ietf.org/doc/html/rfc7644#section-3.10), dictates schema extensions and attributes are delimited by colons, and attributes to sub-attributes delimited by periods. All other attributes remain unchanged.
> {urn:schema:extension}:{Attribute}.{Sub-Attribute}

> {Attribute}.{Sub-Attribute}

A fully qualified path example: 
> urn:ietf:params:scim:schemas:core:2.0:User:name.givenName

> name.givenName

The correct format of a multiple values, a list of strings, for key `attributes`:
```json
{
  "schemas": [ "urn:ietf:params:scim:api:messages:2.0:ListResponse" ],
  "attributes": ["id", "meta", "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:companyId" ]
}
```

#### Request <a name="param-example-attributes"></a>

Parameter `attributes` will return a subset of attributes for each user with `active` and `id` (always) in the user list response.
Every attributes must [follow](#attribute-notation) attribute-notation.
```
POST https://us.api.concursolutions.com/profile/identity/v4.1/Users/.search
Accept: application/json
Authorization: BEARER {token}
```

```json
{
  "schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ],
  "attributes": [ "active" ]
}
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
  "totalResults": 1234,
  "startIndex": 1,
  "itemsPerPage": 100,
  "Resources": [
    {
      "id": "uuid-v4-user-1",
      "active": "true"
    },
    {
      "id": "uuid-v4-user-2",
      "active": "false"
    },
    ...
    {
      "id": "uuid-v4-user-100",
      "active": "true"
    }
  ]
}
```

#### Request <a name="param-example-excluded-attributes"></a>

Parameter `excludedAttributes` will return all other default attributes in user list response. Every attribute must [follow](#attribute-notation) attribute notation.

```
POST https://us.api.concursolutions.com/profile/identity/v4.1/Users/.search
Accept: application/json
Authorization: BEARER {token}
```

```json
{
  "schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ],
  "excludedAttributes": [ "localeOverrides", "name.familyNamePrefix", "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User" ]
}
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
  "totalResults": 1234,
  "startIndex": 1,
  "itemsPerPage": 1,
  "Resources": [
    {
      "addresses": [],
      "timezone": "America/New_York",
      "meta": {
          "resourceType": "User",
          "created": "2021-11-17T22:44:09.000164Z",
          "lastModified": "2021-11-17T22:48:31.000891Z",
          "version": 4,
          "location": "https://us.api.concursolutions.com/profile/identity/v4.1/Users/3df11695-e8bb-40ff-8e98-c85913ab2789"
      },
      "displayName": "John Doe",
      "name": {
          "familyName": "Doe",
          "givenName": "John",
          "honorificSuffix": "VI"
      },
      "phoneNumbers": [],
      "emergencyContacts": null,
      "preferredLanguage": "en-US",
      "title": null,
      "dateOfBirth": null,
      "nickName": null,
      "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:User",
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
      "userName": "John11_17_1@sap.com"
    }
  ]
}
```

## Pagination <a name="pagination"></a>

By default, a single query will return `100` users. To retrieve more than `100` users for a single query, SCIM defines the [count](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.4) query parameter.

**NOTE:** The `startIndex` query parameter is **not supported** due to the behavior of Deep Pagination.

The upper limit of `count` is `1,000` users for a single query. To go *beyond* the first `1,000` users, v4.1 Search returns a `nextCursor`. When passed on the next query, the `cursor` may be used to return the next page of matching records for a single, unique query. The token will *not* be returned on the last-page.

### Cursor

The cursor/nextCursor SCIM-Based pagination defines a model used to fetch the subsequent 'pages' of resources. `cursor` is a request query-parameter or within the JSON payload, while `nextCursor` is expected to be in the response.

#### Usage

```
POST https://us.api.concursolutions.com/profile/identity/v4.1/Users/.search
Accept: application/json
Authorization: BEARER {token}
```
```json
{
  "schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ],
  "count": 100,
  "cursor": "eyJjcmVhdGVkLWlkIjoiMTYxMzc2MTkxNF9hYTA0NzQ1MS04MTBkLTQ5MDMtYWE0OS1lYzhjODZlZjUwNTMiLCJzdGFydEluZGV4IjoxMDF9"
}
```
Response:
```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:ListResponse" 
  ],
  "totalResults": 123456,
  "startIndex": 101,
  "itemsPerPage": 100,
  "Resources": [
    {},
    {},
  ],
  "nextCursor": "eyJjcmVhdGVkLWlkIjoiMTYxMzgwNjU4NF85YjQyNTI1NC04ZDE1LTRjM2QtYmE2ZS03MzZkMmJkMTEzN2IiLCJzdGFydEluZGV4IjoyMDF9"
}
```

#### May not be always be returned

When `totalResults` is equal to `itemsPerPage`, there will not be a `nextCursor` in the response. 

```json
{
  "totalResults": 2,
  "startIndex": 1,
  "itemsPerPage": 2,
  "Resources": [
    {},
    {},
  ]
}
```

When the caller reaches the last page, there will be no `nextCursor` in the response

```json
{
  "totalResults": 1000,
  "startIndex": 900,
  "itemsPerPage": 100,
  "Resources": [
    {},
    {},
  ]
}
```

## Filtering <a name="filtering"></a>

A filter is an expression to return a subset of records matching the predicate. Filters are comprised of Attribute Operators, Logical Operators, and Grouping Operators. [Examples](#example-filtering) are listed below.

| Parameter | Description|
| --- | --- |
| [Allowed Attributes](#allowed-attributes) | Term, the subject, eligible for filtering. |
| [Attribute Operators](#op-attributes) | Action, a verb, on comparator, a value.|
| [Logical Operators](#op-logical)| Multiple expressions are conjoined by logical operators. |
| [Grouping Operators](#op-grouping)| Filtering for sub-attributes. May be used with single-valued or multi-valued attributes.|

### Allowed Attributes <a name="allowed-attributes"></a>

| Attribute| Sub-Attributes| Data Type |
| --- | --- | --- |
| `active` | - | `boolean` |
| `addresses`| `country` | `string`|
|| `locality`| `string`|
|| `region`| `string`|
|| `type`| `string`|
| `emails` | `value` | `string`|
|| `type`| `string`|
|| `verified`| `boolean` |
| `entitlements` | - | `string`|
| `externalId` | - | `string`|
| `id` | - | `string`|
| `meta` | `created` | `data`|
|| `lastModified`| `date`|
| `name` | `familyName`| `string`|
|| `givenName` | `string`|
| `nickName` | - | `string`|
| `userName` | - | `string`|
| urn:ietf:params:scim:schemas:extension: <br> `enterprise:2.0:User` | `costCenter`| `string`|
|| `department`| `string`|
|| `division`| `string`|
|| `employeeNumber`| `string`|
|| `startDate` | `date`|
|| `terminationDate` | `date`|
| urn:ietf:params:scim:schemas:extension: <br> `enterprise:2.0:User:manager` | `employeeNumber`| `string`|
|| `value` | `string`|
| urn:ietf:params:scim:schemas:extension: <br> `sap:2.0:User`| `userUuid`| `string`|

### Attribute Operators <a name="op-attributes"></a>

Conditional relationship between attribute and value stored in database. Multiple operators can be used with zero or more logical operators.

| Operator | Description| Example |
| --- | --- | --- |
| eq | equal| `active eq true`|
| ne | not equal| `name.familyName ne "Smith"`|
| co | contains | `name.givenName co "John"`|
| sw | starts with| `name.givenName sw "J"` |
| ew | ends with| `name.givenName ew "n"` |
| pr | present (has value)| `name.givenName pr` |
| gt | greater than | `meta.lastModified gt "2011-05-13T04:42:34Z"` |
| ge | greater than or equal to | `meta.lastModified ge "2011-05-13T04:42:34Z"` |
| lt | less than| `meta.lastModified lt "2011-05-13T04:42:34Z"` |
| le | less than or equal to| `meta.lastModified le "2011-05-13T04:42:34Z"` |

### Logical Operators <a name="op-logical"></a>

Separate attribute expressions. Filters can include zero or more logical operators. By default, logical operators are evaluated in the following order of operations: `NOT > AND > OR`

This definition may be overwritten by grouping operators.

| Operator | Description| Example |
| --- | --- | --- |
| not| Match, if expression evaluates to `false`. | `not(name.givenName eq "John")` |
| and| Match, if both expressions evaluate to `true`. | `name.givenName eq "John" and name.familyName eq "Smith"` |
| or | Match, if either expression evaluates to `true`. | `name.givenName eq "John" or name.givenName eq "James"` |

### Grouping Operators <a name="op-grouping"></a>

Evaluate an expression in explicit order.

| Operator | Description | Example |
| --- | --- | --- |
| () | [Precedence](#example-precedence) grouping, (evaluate first) and overrides precedence. | `(name.givenName eq "John" or name.givenName eq "James") and name.familyName eq "Smith"` |
| [] | Complex attribute filtering, used with multi-valued attributes. | `emails[type eq "work" and value co "@example.com"`|

### Precedence Examples <a name="example-precedence"></a>

The definition provided states: `NOT > AND > OR`

For the examples below, capital letters (A, B, C) represent different attribute expressions.

| Expression | Default Evaluation |
| --- | --- |
| `A or B and C` | `A or (B and C)` |
| `A and B or C` | `(A and B) or C` |
| `A and B or C and D` | `(A and B) or (C and D)` |
| `A or B and C or D`| `A or (B and C) or D`|
| `not A or B and C` | `(not A) or (B and C)` |

## Filtering Examples <a name="example-filtering"></a>

The `filter` parameter implemented all the functionality described in [Filtering](#filtering) as a string.
This section contributes a set of more detailed examples, limitations, and variations of expressions.

### Filter is Optional
Company JWT contains companyId, and used to retrieve all users within Company.

#### Request
```
POST https://us.api.concursolutions.com/profile/identity/v4.1/Users/.search
Accept: application/json
Authorization: BEARER {token}
```

```json
{
  "schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ],
  "attributes": [ "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:companyId" ]
}
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
  "totalResults": 3,
  "startIndex": 1,
  "itemsPerPage": 3,
  "Resources": [
    {
      "id": "ac2527c5-14c8-433e-8394-6894ec11462c",
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
        "companyId": "6eed4eb2-95bb-4edf-86aa-36aec1263321"
      }
    },
    {
      "id": "4f341a2b-6a0a-4ace-b9cd-4a9a0c96e789",
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
        "companyId": "6eed4eb2-95bb-4edf-86aa-36aec1263321"
      }
    },
    {
      "id": "8bce6823-6858-4c92-a019-f1900299c59f",
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
        "companyId": "6eed4eb2-95bb-4edf-86aa-36aec1263321"
      }
    },
  ]
}
```

### Filter By UUID <a name="filter_by_uuid"></a>

UUIDs may optionally include the `\"` quotes.

#### Request
```
POST https://us.api.concursolutions.com/v4.1/Users/.search
Accept: application/json
Authorization: BEARER {token}
```

```json
{
    "schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ],
    "filter": "id eq c7e128ed-a8a6-4627-bd5d-42f7f89cdeb4"
}
```
OR
```json
{
    "schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ],
    "filter": "id eq \"c7e128ed-a8a6-4627-bd5d-42f7f89cdeb4\""
}
```
Both of these payloads are valid and will return the same user profile.

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
  "totalResults": 1,
  "startIndex": 1,
  "itemsPerPage": 1,
  "Resources": [
    {
      "id": "c7e128ed-a8a6-4627-bd5d-42f7f89cdeb4"
    }
  ]
}
```

### Filter By Multi-Valued Attributes

`emails` and `addresses` are multi-valued attributes. 

Applying a [Complex Grouping](#grouping-operators) within a filter will match one and only one record to the condition. Filters that use multi-valued, complex groupings support the following comparison operators: `eq` / `sw` / `ew` / `co` / `pr`


**Request**
```
POST https://us.api.concursolutions.com/v4.1/Users/.search
Accept: application/json
Authorization: BEARER {token}
```
```json
{
  "schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ],
  "filter": "emails[type eq \"work\" and value ew \"@example.com\"]"
}
```

**Response**
```
200 OK
Content-Type: application/json
```

``` json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:ListResponse" 
  ],
  "totalResults": 1000,
  "startIndex": 1,
  "itemsPerPage": 100,
  "Resources": [
    {
      "id": "user-id-match-1",
      "emails": [
        {
          "verified": true,
          "type": "work",
          "value": "John@example.com",
          "notifications": true
        }
      ]
    },
    {
      "id": "user-id-match-2",
      "emails": [
        {
          "verified": true,
          "type": "work",
          "value": "Appleseed@example.com",
          "notifications": true
        }
      ]
    }
  ]
}
```

#### Limitations

Filters may not contain `not` and `ne` within Complex Groupings. 
```json
"filter": "emails[not(type eq \"work\")]"
```
```json
"filter": "addresses[type ne \"work\"]"
```

Filters may not nest `or` inside parentheses within Complex Groupings.

```json
"filter": "emails[value ew \"@sap.com\" and (type eq \"home\" or type eq \"work\")]"
```

Duplicate attributes may not be conjoined with `and` inside of Complex Grouping.

```json
"filter": "emails[value ew \"@concur.com\" and value ew \"@sap.com\"]"
```
```json
"filter": "emails[value sw \"C\" and value ew \"S\"]"
```

#### Complex Grouping: AND

Multi-valued, complex grouping with logical 'and' operators cannot conjoin duplicate attributes, or fields, as the intention of this query is to return one and only one match across many users.

Returns users who have a `work` emails equal to `admin@SAP.com`
```json
"filter": "emails[type eq \"work\" and value eq \"admin@SAP.com\"]"
```

Returns users who work at `Concur`, as an entry in address
```json
"filter": "addresses[type eq \"work\" and locality eq \"Bellevue\" and region eq \"WA\"]"
```

#### Complex Grouping: OR

Multi-valued, complex grouping with logical 'or' operators can only be present at the root-level and cannot be nested within parentheses. The intention of this query is to return one or more matches within a set of records, within a single user, across many users.

Note: Results may include users with all three attributes in a single entry

Return users with `work` emails, have `admin` in their email, or have not `verified` their email
```json
"filter": "emails[type eq \"work\" or value sw \"admin\" or verified eq false]"
```

Return users with `work` or `home` addresses in user object
```json
"filter": "addresses[type eq \"work\" or type eq \"home\"]"
```

#### Combined Logical queries

Returns user's that either have `work` emails that end with `@SAP.com` or have `home` emails that end with `.com`
```json
"filter": "emails[type eq \"work\" and value ew \"@SAP.com\" or type eq \"home\" and value ew \".com\"]"
```

#### Filter Across Values

Multi-valued attributes may also be queried like single-valued attributes. The key difference is that for every and condition, every entry in the list must satisfy the condition.

Return users who have multiple emails that must either end with `@concur.com` and `@sap.com`
```json
"filter": "emails.value ew \"@concur.com\" and emails.value ew \"@sap.com\""
```

Return users who have a `home` and `work` address in their user profile
```json
"filter": "addresses.type eq \"home\" and addresses.type eq \"work\""
```

### Filter By Name Field

Single-valued attributes with sub-attributes MAY also be grouped with Complex Grouping. Limitations only apply to Complex Grouping of multi-valued attributes, single-valued attributes support all operators.

```
POST https://us.api.concursolutions.com/profile/identity/v4.1/Users/.search
Accept: application/json
Authorization: BEARER {token}
```

```json
{
  "schemas": [ "urn:ietf:params:scim:api:messages:concur:2.0:SearchRequest" ],
  "filter": "name.givenName eq \"John\"",
  "count": 100
}
```

#### Logical AND queries

Return users by Full Name (combination of given and family)
```json
"filter": "name.givenName eq \"John\" and name.familyName eq \"Smith\"",
"filter": "name[givenName eq \"John\" and familyName eq \"Smith\"]"
```

Return users who have the first name John and do not have last name Bob

Note: When using `ne`, results can include `null` values
```json
"filter": "name.givenName ne \"John\" and not(name.givenName eq \"Bob\")",
"filter": "name[givenName ne \"John\" and not(givenName eq \"Bob\")]"
```

Return users who must start with and ending with characters. Case insensitive
```json
"filter": "name.givenName sw \"J\" and name.givenName ew \"n\"",
"filter": "name[givenName sw \"J\" and givenName ew \"n\"]"
```

Return users by "contains" query and check if field, `name.givenName` has a value
```json
"filter": "not(name.givenName co \"admin\") and name.givenName pr",
"filter": "name[not(givenName co \"admin\") and givenName pr]"
```

#### Combined Logical queries

```json
"filter": "name.givenName eq \"John\" and name.familyName eq \"Smith\" or name.givenName eq \"Bob\" and name.familyName eq \"Joe\"",
"filter": "name[givenName eq \"John\" and familyName eq \"Smith\"] or name[givenName eq \"Bob\" and familyName eq \"Joe\"]"
```
