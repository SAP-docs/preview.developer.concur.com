---
title: Maestro v4 - Groundspan Integration
layout: reference
---

{% include prerelease.html %}

# Maestro v4 - Groundspan Integration

This document provides specific implementation details for Groundspan's integration with the Maestro API. Groundspan uses Maestro to deliver travel booking alerts and compliance notifications to SAP Concur users.

For general Maestro API information, see the [Maestro API Overview](index.markdown).

## Scope Usage <a name="scope-usage"></a>

|Name|Description|Endpoints|
|---|---|---|
|`maestro.alerts.writeonly`|Write-only access to submit and edit partner alerts.|POST, PUT|

## Dependencies <a name="dependencies"></a>

Partners must have:
- Valid Company JWT tokens with appropriate scopes
- Configured templates for alert rendering
- Proper application registration in the SAP Concur ecosystem

## Access Token Usage <a name="access-token-usage"></a>

This API requires Company JWT tokens for partner submissions.

## Submit Partner Alert <a name="submit-partner-alert"></a>

Accepts alert payloads from external partners, validates and transforms the data, then persists the alert and triggers downstream processes.

### Scopes

`maestro.alerts.writeonly` - Refer to [Scope Usage](#scope-usage) for full details.

### Request

#### URI

##### Template

```shell
POST /maestro/v4/alerts
```

##### Parameters

|Name|Type|Description|
|---|---|---|
|`Content-Type`|`string`|**Required** Must be `application/json`|
|`Authorization`|`string`|**Required** Bearer Company JWT Token|

#### Headers

* [RFC 7230 Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2)
* [RFC 7231 Accept](https://tools.ietf.org/html/rfc7231#section-5.3.2)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)

#### Payload

* [Alert Request](#schema-alert-request)

### Response

#### Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) - Alert processed successfully
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) - Malformed JSON or missing required fields
* [401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) - Missing or invalid JWT
* [403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) - Valid JWT but insufficient scope
* [404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) - Resource doesn't exist or is not associated with your company
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)
* [503 Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4) - Service is temporarily down or overloaded
* [504 Gateway Timeout](https://tools.ietf.org/html/rfc7231#section-6.6.5) - Server did not receive a timely response from an upstream service

#### Headers

* `concur-correlationid` is a Concur specific custom header used for technical support in the form of a [RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace](https://tools.ietf.org/html/rfc4122)
* [RFC 7230 Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7231 Date](https://tools.ietf.org/html/rfc7231#section-7.1.1.2)
* [RFC 7234 Cache-Control](https://tools.ietf.org/html/rfc7234#section-5.2)

#### Payload

* [Alert Response](#schema-alert-response)
* [Error Message](#schema-error-message)

### Example

#### Request

```shell
POST https://us.api.concursolutions.com/maestro/v4/alerts
Accept: application/json
Content-Type: application/json
Authorization: Bearer {company-jwt-token}
```

```json
{
  "extRef": "b2fd900a-5935-46fc-8d29-599de9864e21",
  "userId": "b7d12989-0489-471a-81cd-175f8b78afa5",
  "companyId": "b7d12989-0489-471a-81cd-175f8b78afa5",
  "createdAt": "2025-08-19T10:00:00Z",
  "metadata": {
    "partnerProvider": "groundspan",
    "partnerLogoUrl": "https://groundspan.com/logo.png",
    "partnerAccessibilityTextPrompt": "Groundspan logo",
    "packages": [
      {
        "packageId": "flight-20250801-sfo-cdg",
        "packageTitle": "SFO to CDG  Aug 1",
        "travelDate": "2025-08-01",
        "location": {
          "origin": "SFO",
          "destination": "CDG"
        },
        "variants": [
          {
            "variantId": "ua57-econ-L",
            "variantTitle": "United UA57  Economy (L)",
            "variantDesc": "Nonstop 10h55m  1 checked bag  Changeable (fee)",
            "variantProvider": "United Airlines",
            "variantLogoUrl": "https://concur.com/img/ua.png",
            "variantAccessibilityTextPrompt": "United Airlines logo",
            "variantStartDate": "2025-08-01T10:00:00Z",
            "variantEndDate": "2025-08-01T12:00:00Z",
            "price": {
              "amount": 450.0,
              "currency": "USD"
            },
            "userActions": {
              "label": "Book Economy",
              "href": "https://concur.com/book/eco"
            }
          },
          {
            "variantId": "ua57-premW",
            "variantTitle": "United UA57  Premium Economy (W)",
            "variantDesc": "Extra legroom Priority boarding  Changeable (fee)",
            "variantProvider": "United Airlines",
            "variantLogoUrl": "https://concur.com/img/ua.png",
            "variantAccessibilityTextPrompt": "United Airlines logo",
            "variantStartDate": "2025-08-01T10:00:00Z",
            "variantEndDate": "2025-08-01T12:00:00Z",
            "price": {
              "amount": 680.0,
              "currency": "USD"
            },
            "userActions": {
              "label": "Book Premium Economy",
              "href": "https://concur.com/book/premium-eco"
            }
          }
        ]
      },
      {
        "packageId": "car-20250801-downtown",
        "packageTitle": "Downtown pickup Aug 17",
        "travelDate": "2025-08-01",
        "location": {
          "origin": "Downtown Garage",
          "destination": ""
        },
        "variants": [
          {
            "variantId": "b4c3d2e1",
            "variantTitle": "Enterprise  SUV",
            "variantDesc": "Unlimited miles Standard SUV",
            "variantProvider": "Enterprise",
            "variantLogoUrl": "https://concur.com/img/enterprise.png",
            "variantAccessibilityTextPrompt": "Enterprise logo",
            "variantStartDate": "2025-08-01T10:00:00Z",
            "variantEndDate": "2025-08-07T10:00:00Z",
            "price": {
              "amount": 300.0,
              "currency": "USD"
            },
            "userActions": {
              "label": "Reserve SUV",
              "href": "https://concur.com/reserve/suv"
            }
          }
        ]
      },
      {
        "packageId": "gs-20250920-generic-slot-01",
        "packageTitle": "Ground Booking Offer",
        "travelDate": "2025-09-20",
        "location": {
          "origin": "",
          "destination": ""
        },
        "variants": [
          {
            "variantTitle": "Ground Booking Offer - CarRental offer",
            "variantId": "11519e89-2c1d-47ec-bd93-7c4ace9c57e6",
            "variantDesc": "Ground Transportation Offer",
            "variantStartDate": "",
            "variantEndDate": "",
            "variantProvider": "",
            "variantLogoUrl": "",
            "variantAccessibilityTextPrompt": "",
            "price": {},
            "userActions": {
              "label": "Book Ground",
              "href": "https://www.groundspan.com/bookingTool?offer=37JFKCoqa1VPzPWKecEmsFpXBmuQJgveDAqgR2LPxMb4iblJCyy10b2N6/1cWKlAb5GkpfmJSCsBwqWe1Km4Ng%3D%3D"
            }
          }
        ]
      }
    ]
  },
  "templateId": "NOTIFY_TEMPLATE_ID",
  "msgType": "",
  "expiresAt": "2025-12-31T23:59:59Z"
}
```

#### Response

```shell
HTTP/1.1 200
concur-correlationid: 5512c7be-3fab-4d65-ae69-8a74a04a0c7f
content-length: 89
content-type: application/json;charset=UTF-8
date: Wed, 08 Jul 2020 03:00:42 GMT
cache-control: no-cache, private
```

```json
{
  "alertId": "A123456",
  "status": "received",
  "message": "Alert created successfully"
}
```

## Update Partner Alert <a name="edit-partner-alert"></a>

Updates an existing alert with new payload data. Uses the same payload structure as the POST endpoint. The alert must exist and be associated with the requesting partner's company.

### Scopes

`maestro.alerts.writeonly` - Refer to [Scope Usage](#scope-usage) for full details.

### Request

#### URI

##### Template

```shell
PUT /maestro/v4/alerts/{alertId}
```

##### Parameters

|Name|Type|Description|
|---|---|---|
|`alertId`|`string`|**Required** The unique identifier of the alert to update|
|`Content-Type`|`string`|**Required** Must be `application/json`|
|`Authorization`|`string`|**Required** Bearer Company JWT Token|

#### Headers

* [RFC 7230 Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2)
* [RFC 7231 Accept](https://tools.ietf.org/html/rfc7231#section-5.3.2)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)

#### Payload

* [Alert Request](#schema-alert-request) - Same payload structure as POST endpoint

### Response

#### Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) - Alert updated successfully
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) - Malformed JSON or missing required fields
* [401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) - Missing or invalid JWT
* [403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) - Valid JWT but insufficient scope
* [404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) - Alert doesn't exist or is not associated with your company
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)
* [503 Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4) - Service is temporarily down or overloaded
* [504 Gateway Timeout](https://tools.ietf.org/html/rfc7231#section-6.6.5) - Server did not receive a timely response from an upstream service

#### Headers

* `concur-correlationid` is a Concur specific custom header used for technical support in the form of a [RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace](https://tools.ietf.org/html/rfc4122)
* [RFC 7230 Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7231 Date](https://tools.ietf.org/html/rfc7231#section-7.1.1.2)
* [RFC 7234 Cache-Control](https://tools.ietf.org/html/rfc7234#section-5.2)

#### Payload

* [Alert Response](#schema-alert-response)
* [Error Message](#schema-error-message)

### Example

#### Request

```shell
PUT https://us.api.concursolutions.com/maestro/v4/alerts/A123456
Accept: application/json
Content-Type: application/json
Authorization: Bearer {company-jwt-token}
```

```json
{
  "extRef": "b2fd900a-5935-46fc-8d29-599de9864e21",
  "userId": "b7d12989-0489-471a-81cd-175f8b78afa5",
  "companyId": "b7d12989-0489-471a-81cd-175f8b78afa5",
  "createdAt": "2025-08-19T10:00:00Z",
  "metadata": {
    "partnerProvider": "groundspan",
    "partnerLogoUrl": "https://groundspan.com/logo.png",
    "partnerAccessibilityTextPrompt": "Groundspan logo",
    "packages": [
      {
        "packageId": "flight-20250801-sfo-cdg",
        "packageTitle": "SFO to CDG  Aug 1",
        "travelDate": "2025-08-01",
        "location": {
          "origin": "SFO",
          "destination": "CDG"
        },
        "variants": [
          {
            "variantId": "ua57-econ-L",
            "variantTitle": "United UA57  Economy (L)",
            "variantDesc": "Nonstop 10h55m  1 checked bag  Changeable (fee)",
            "variantProvider": "United Airlines",
            "variantLogoUrl": "https://concur.com/img/ua.png",
            "variantAccessibilityTextPrompt": "United Airlines logo",
            "variantStartDate": "2025-08-01T10:00:00Z",
            "variantEndDate": "2025-08-01T12:00:00Z",
            "price": {
              "amount": 425.0,
              "currency": "USD"
            },
            "userActions": {
              "label": "Book Economy",
              "href": "https://concur.com/book/eco"
            }
          }
        ]
      }
    ]
  },
  "templateId": "NOTIFY_TEMPLATE_ID",
  "msgType": "",
  "expiresAt": "2025-12-31T23:59:59Z"
}
```

#### Response

```shell
HTTP/1.1 200
concur-correlationid: 5512c7be-3fab-4d65-ae69-8a74a04a0c7f
content-length: 89
content-type: application/json;charset=UTF-8
date: Wed, 08 Jul 2020 03:00:42 GMT
cache-control: no-cache, private
```

```json
{
  "alertId": "A123456",
  "status": "updated",
  "message": "Alert updated successfully"
}
```

## Schema <a name="schema"></a>

### <a name="schema-alert-request"></a>Alert Request

|Name|Type|Format|Description|
|---|---|---|---|
|`extRef`|`string`|-|**Required** External reference ID for session tracking|
|`userId`|`string`|-|**Required** Identifier for the target user|
|`companyId`|`string`|-|**Required** Identifier for the user's company (only if company ID is not part of JWT)|
|`createdAt`|`string`|`date-time`|**Required** Creation timestamp|
|`metadata`|`object`|-|**Required** Alert content and context data|
|`templateId`|`string`|-|**Required** Template identifier for rendering|
|`msgType`|`string`|-|**Required** Message type (empty string for Groundspan)|
|`expiresAt`|`string`|`date-time`|**Required** Expiration timestamp|

### <a name="schema-alert-response"></a>Alert Response

|Name|Type|Format|Description|
|---|---|---|---|
|`alertId`|`string`|-|Unique identifier of the created alert|
|`status`|`string`|-|Processing status (e.g., "received")|
|`message`|`string`|-|Success message|

### <a name="schema-metadata-groundspan"></a>Metadata - Groundspan

|Name|Type|Format|Description|
|---|---|---|---|
|`partnerProvider`|`string`|-|Partner name (should be "groundspan")|
|`partnerLogoUrl`|`string`|-|URL to partner logo|
|`partnerAccessibilityTextPrompt`|`string`|-|Accessibility text for partner logo|
|`packages`|`array`|[`Package`](#schema-package)|-|Array of travel packages|

### <a name="schema-package"></a>Package

|Name|Type|Format|Description|
|---|---|---|---|
|`packageId`|`string`|-|Unique identifier for the package|
|`packageTitle`|`string`|-|Package title/description|
|`travelDate`|`string`|`date`|Travel date (YYYY-MM-DD format)|
|`location`|[`Location`](#schema-location)|-|Travel location information|
|`variants`|`array`|[`Variant`](#schema-variant)|-|Array of booking variants|

### <a name="schema-variant"></a>Variant

|Name|Type|Format|Description|
|---|---|---|---|
|`variantId`|`string`|-|Unique identifier for the variant|
|`variantTitle`|`string`|-|Variant title|
|`variantDesc`|`string`|-|Variant description|
|`variantProvider`|`string`|-|Provider name (optional for some variants)|
|`variantLogoUrl`|`string`|-|URL to provider logo (optional for some variants)|
|`variantAccessibilityTextPrompt`|`string`|-|Accessibility text for logo (optional for some variants)|
|`variantStartDate`|`string`|`date-time`|Start date/time (optional for some variants)|
|`variantEndDate`|`string`|`date-time`|End date/time (optional for some variants)|
|`price`|[`Price`](#schema-price)|-|Pricing information (optional for some variants)|
|`userActions`|[`UserAction`](#schema-user-action)|-|Booking action|

### <a name="schema-location"></a>Location

|Name|Type|Format|Description|
|---|---|---|---|
|`origin`|`string`|-|Origin location code|
|`destination`|`string`|-|Destination location code|

### <a name="schema-price"></a>Price

|Name|Type|Format|Description|
|---|---|---|---|
|`amount`|`number`|-|Price amount|
|`currency`|`string`|-|Currency code (e.g., "USD")|

### <a name="schema-user-action"></a>User Action

|Name|Type|Format|Description|
|---|---|---|---|
|`label`|`string`|-|Action button label|
|`href`|`string`|-|Action URL|

### <a name="schema-error-message"></a>Error Message

|Name|Type|Format|Description|
|---|---|---|---|
|`errors`|`array`|[`Error`](#schema-error)|-|

### <a name="schema-error"></a>Error

|Name|Type|Format|Description|
|---|---|---|---|
|`errorCode`|`string`|-|Error code identifier|
|`errorMessage`|`string`|-|Detailed error message|
|`details`|`object`|-|Optional field-specific information|
