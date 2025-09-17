---
title: Maestro v4 - Ground Transportation
layout: reference
---

{% include prerelease.html %}

# Maestro v4 - Ground Transportation

This document provides specific implementation details for ground transportation alerts using the Maestro API. Partners can use Maestro to deliver ground transportation booking alerts and notifications to SAP Concur users.

For general Maestro API information, see the [Maestro API Overview](v4.maestro.markdown).

## Important Notes

- All URLs (`partnerLogoUrl`, `variantLogoUrl`, `userActions.href`) must be from allowed domain: `groundspan.com`
- Date fields should be in ISO 8601 format (e.g., `"2025-08-19T10:00:00Z"`)
- The `msgType` field can be an empty string for ground transportation alerts
- HTTPS is recommended for all URLs

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
    "partnerProvider": "Partner Name",
    "partnerLogoUrl": "https://groundspan.com/img/logo.png",
    "partnerAccessibilityTextPrompt": "Groundspan logo",
    "packages": [
      {
        "packageId": "gs-package-001",
        "packageTitle": "Downtown Car Rental - Aug 1",
        "travelDate": "2025-08-01",
        "location": {
          "origin": "Downtown Garage",
          "destination": ""
        },
        "variants": [
          {
            "variantId": "enterprise-suv-001",
            "variantTitle": "Enterprise SUV",
            "variantDesc": "Unlimited miles Standard SUV",
            "variantProvider": "Enterprise",
            "variantLogoUrl": "https://groundspan.com/img/enterprise.png",
            "variantAccessibilityTextPrompt": "Enterprise logo",
            "variantStartDate": "2025-08-01T10:00:00Z",
            "variantEndDate": "2025-08-07T10:00:00Z",
            "price": {
              "amount": 300.0,
              "currency": "USD"
            },
            "userActions": {
              "label": "Reserve SUV",
              "href": "https://groundspan.com/reserve/suv"
            }
          },
          {
            "variantId": "hertz-compact-001",
            "variantTitle": "Hertz Compact",
            "variantDesc": "Economy car with good fuel efficiency",
            "variantProvider": "Hertz",
            "variantLogoUrl": "https://groundspan.com/img/hertz.png",
            "variantAccessibilityTextPrompt": "Hertz logo",
            "variantStartDate": "2025-08-01T10:00:00Z",
            "variantEndDate": "2025-08-07T10:00:00Z",
            "price": {
              "amount": 180.0,
              "currency": "USD"
            },
            "userActions": {
              "label": "Reserve Compact",
              "href": "https://groundspan.com/reserve/compact"
            }
          }
        ]
      },
      {
        "packageId": "ground-transport-20250920",
        "packageTitle": "Ground Transportation Options",
        "travelDate": "2025-09-20",
        "location": {
          "origin": "Airport",
          "destination": "Downtown"
        },
        "variants": [
          {
            "variantTitle": "Shuttle Service",
            "variantId": "shuttle-001",
            "variantDesc": "Shared shuttle service to downtown",
            "variantStartDate": "2025-09-20T14:00:00Z",
            "variantEndDate": "2025-09-20T15:00:00Z",
            "variantProvider": "Groundspan",
            "variantLogoUrl": "https://groundspan.com/img/shuttle.png",
            "variantAccessibilityTextPrompt": "Shuttle service logo",
            "price": {
              "amount": 25.0,
              "currency": "USD"
            },
            "userActions": {
              "label": "Book Shuttle",
              "href": "https://groundspan.com/book/shuttle"
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
    "partnerProvider": "Groundspan",
    "partnerLogoUrl": "https://groundspan.com/img/logo.png",
    "partnerAccessibilityTextPrompt": "Groundspan logo",
    "packages": [
      {
        "packageId": "gs-package-001",
        "packageTitle": "Updated: Downtown Car Rental - Aug 1",
        "travelDate": "2025-08-01",
        "location": {
          "origin": "Downtown Garage",
          "destination": ""
        },
        "variants": [
          {
            "variantId": "enterprise-suv-001",
            "variantTitle": "Enterprise SUV",
            "variantDesc": "Unlimited miles Standard SUV - Updated pricing",
            "variantProvider": "Enterprise",
            "variantLogoUrl": "https://concur.com/img/enterprise.png",
            "variantAccessibilityTextPrompt": "Enterprise logo",
            "variantStartDate": "2025-08-01T10:00:00Z",
            "variantEndDate": "2025-08-07T10:00:00Z",
            "price": {
              "amount": 275.0,
              "currency": "USD"
            },
            "userActions": {
              "label": "Reserve SUV",
              "href": "https://groundspan.com/reserve/suv"
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
|`companyId`|`string`|-|Optional - Identifier for the user's company (only if company ID is not part of JWT)|
|`createdAt`|`string`|`date-time`|**Required** Creation timestamp in ISO 8601 format|
|`metadata`|`object`|-|**Required** Alert content and context data|
|`templateId`|`string`|-|**Required** Template identifier for rendering|
|`msgType`|`string`|-|**Required** Message type (can be empty string for ground transportation)|
|`expiresAt`|`string`|`date-time`|**Required** Expiration timestamp in ISO 8601 format|

### <a name="schema-alert-response"></a>Alert Response

|Name|Type|Format|Description|
|---|---|---|---|
|`alertId`|`string`|-|Unique identifier of the created alert|
|`status`|`string`|-|Processing status (e.g., "received")|
|`message`|`string`|-|Success message|

### <a name="schema-metadata-ground-transportation"></a>Metadata - Ground Transportation

|Name|Type|Format|Description|
|---|---|---|---|
|`partnerProvider`|`string`|-|**Required** Partner provider name (e.g., "Groundspan")|
|`partnerLogoUrl`|`string`|-|**Required** Partner logo URL (must be from groundspan.com or concur.com domain)|
|`partnerAccessibilityTextPrompt`|`string`|-|**Required** Accessibility text for the partner logo|
|`packages`|`array`|[`Package`](#schema-package)|**Required** Array of ground transportation packages|

### <a name="schema-package"></a>Package

|Name|Type|Format|Description|
|---|---|---|---|
|`packageId`|`string`|-|**Required** Unique package identifier|
|`packageTitle`|`string`|-|Optional - Package title/description|
|`travelDate`|`string`|`date`|Optional - Travel date in ISO format|
|`location`|[`Location`](#schema-location)|-|Optional - Location object with origin and destination|
|`variants`|`array`|[`Variant`](#schema-variant)|Optional - Array of variant objects|
|`offerData`|`array`|-|Optional - Array of offer data|

### <a name="schema-variant"></a>Variant

|Name|Type|Format|Description|
|---|---|---|---|
|`variantTitle`|`string`|-|**Required** Variant title|
|`variantId`|`string`|-|**Required** Unique variant identifier|
|`variantDesc`|`string`|-|**Required** Variant description|
|`variantProvider`|`string`|-|**Required** Variant provider name|
|`variantLogoUrl`|`string`|-|**Required** Variant logo URL (must be from groundspan.com or concur.com domain)|
|`variantAccessibilityTextPrompt`|`string`|-|**Required** Accessibility text for the variant logo|
|`variantStartDate`|`string`|`date-time`|Optional - Variant start date in ISO format|
|`variantEndDate`|`string`|`date-time`|Optional - Variant end date in ISO format|
|`price`|[`Price`](#schema-price)|-|Optional - Price object|
|`userActions`|[`UserAction`](#schema-user-action)|-|**Required** User actions object|

### <a name="schema-location"></a>Location

|Name|Type|Format|Description|
|---|---|---|---|
|`origin`|`string`|-|**Required** Origin location (can be empty string)|
|`destination`|`string`|-|**Required** Destination location (can be empty string)|

### <a name="schema-price"></a>Price

|Name|Type|Format|Description|
|---|---|---|---|
|`amount`|`number`|-|**Required** Price amount|
|`currency`|`string`|-|**Required** Currency code (can be empty string)|

### <a name="schema-user-action"></a>User Action

|Name|Type|Format|Description|
|---|---|---|---|
|`label`|`string`|-|**Required** Action button label|
|`href`|`string`|-|**Required** Action URL (must be from groundspan.com or concur.com domain)|

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
