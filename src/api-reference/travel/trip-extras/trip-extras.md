---
title: Trip Extras API
layout: reference
---

# Trip Extras API

The Trip Extras API allows you to append, manage, and cancel extra booking content on a Concur trip from external partners. This documentation describes the endpoints, request/response payloads, and error handling for integrating with Trip Extras.

## Version

1.0.0

## Limitations

- Access to this documentation does not provide access to the API.
- API access requires appropriate OAuth scopes and user roles.

---

# Endpoints Overview

- [Append Trip Extra Booking](#append-trip-extra-booking)
- [Cancel Trip Extra Booking](#cancel-trip-extra-booking)
- [Get Cancel Conditions](#get-cancel-conditions)
- [Punchout Session](#punchout-session)
- [Health Check](#health-check)

---

## Append Trip Extra Booking

Append extra booking content to an existing trip.

### Endpoint

- **POST** `/trips/{trip_uuid}/trip-extras`

### Path Parameters

| Name         | Type   | Description                      |
|--------------|--------|----------------------------------|
| `trip_uuid`  | string | UUID of the trip                 |

### Request Body

#### TripExtrasRequestObject

| Field                | Type     | Description                                                                                   |
|----------------------|----------|-----------------------------------------------------------------------------------------------|
| `extRef`             | string   | External reference UUID for the business process                                              |
| `userId`             | string   | UUID of the user for whom the trip extra is being appended                                    |
| `booking`            | object   | Booking details (see below)                                                                   |

#### Booking Object

| Field                | Type     | Description                                                                                   |
|----------------------|----------|-----------------------------------------------------------------------------------------------|
| `type`               | string   | Type of partner reservation (e.g., `ground`)                                                  |
| `partner`            | object   | Partner details (name, logo)                                                                  |
| `vendor`             | object   | Vendor details (name, phoneNumber, email)                                                     |
| `details`            | object   | Booking details (see GroundBooking below)                                                     |

#### GroundBooking Details

| Field                | Type     | Description                                                                                   |
|----------------------|----------|-----------------------------------------------------------------------------------------------|
| `url`                | string   | URL to redirect user to the booking on partner page                                           |
| `termsAndConditions` | string   | Terms and conditions for the booking                                                          |
| `cancellationPolicy` | string   | Cancellation policy details                                                                   |
| `vendorConfirmation` | string   | Confirmation number from vendor                                                               |
| `partnerConfirmation`| string   | Confirmation number from partner                                                              |
| `vehicle`            | object   | Vehicle details (model, acrissCode, imageUrl, seatingCapacity, luggageCapacity)               |
| `pickup`             | object   | Pickup stop details                                                                           |
| `dropoff`            | object   | Dropoff stop details                                                                          |
| `stops`              | array    | Optional intermediate stops                                                                   |
| `price`              | object   | Pricing details (totalAmount, currency, hourlyRate, estimatedDuration, minimumDuration)       |

#### Example Payload

```json
{
  "extRef": "48fb4cd3-2ef6-4479-bea1-7c92721b988c",
  "userId": "12345678-1234-5678-1234-567812345678",
  "booking": {
    "type": "ground",
    "partner": {
      "name": "Partner Name",
      "logo": "https://example.com/partner-logo.jpg"
    },
    "vendor": {
      "name": "Vendor Name",
      "phoneNumber": "1-800-555-1212",
      "email": "foo@bar.com"
    },
    "details": {
      "url": "https://partner-url.com",
      "termsAndConditions": "Terms and conditions apply.",
      "cancellationPolicy": "Free cancellation up to 24 hours before pickup.",
      "vendorConfirmation": "ABC123456",
      "partnerConfirmation": "XYZ789012",
      "vehicle": {
        "model": "Luxury Sedan",
        "acrissCode": "FDMR",
        "imageUrl": "https://example.com/vehicle-image.jpg",
        "seatingCapacity": 4,
        "luggageCapacity": 2
      },
      "pickup": {
        "datetime": "2025-07-25T16:30:00",
        "datetimeUtc": "2025-07-25T20:30:00Z",
        "locationName": "Marriott Hotel",
        "address": {
          "address1": "123 Main St",
          "localityName": "New York",
          "postalCode": "10017",
          "country": "US"
        },
        "geolocation": {
          "latitude": 40.7128,
          "longitude": -74.006
        }
      },
      "dropoff": {
        "datetime": "2025-07-25T18:00:00",
        "datetimeUtc": "2025-07-25T22:00:00Z",
        "locationName": "JFK Airport",
        "iataCode": "JFK"
      },
      "price": {
        "totalAmount": 135.96,
        "currency": "USD",
        "hourlyRate": 45.00,
        "estimatedDuration": "PT3H30M",
        "minimumDuration": "PT45M"
      }
    }
  }
}
```

### Response

| Field         | Type   | Description                                  |
|---------------|--------|----------------------------------------------|
| `bookingUuid` | string | UUID of the created trip extra booking       |

---

## Cancel Trip Extra Booking

Cancel a trip extra booking by UUID.

### Endpoint

- **POST** `/trips/{trip_uuid}/trip-extras/{booking_uuid}/cancel`

### Path Parameters

| Name           | Type   | Description                                  |
|----------------|--------|----------------------------------------------|
| `trip_uuid`    | string | UUID of the trip                             |
| `booking_uuid` | string | UUID of the trip extra booking to cancel     |

### Request Body

#### CancelRequest

| Field     | Type   | Description                                  |
|-----------|--------|----------------------------------------------|
| `extRef`  | string | External reference UUID                      |
| `userId`  | string | UUID of the user                             |

#### Example Payload

```json
{
  "extRef": "48fb4cd3-2ef6-4479-bea1-7c92721b988c",
  "userId": "12345678-1234-5678-1234-567812345678"
}
```

### Response

204 No Content (successful cancellation)

---

## Get Cancel Conditions

Retrieve cancel conditions for bookings.

### Endpoint

- **POST** `/trips/{trip_uuid}/cancel-conditions`

### Path Parameters

| Name         | Type   | Description                      |
|--------------|--------|----------------------------------|
| `trip_uuid`  | string | UUID of the trip                 |

### Request Body

#### CancelConditionsRequest

| Field     | Type   | Description                                  |
|-----------|--------|----------------------------------------------|
| `bookings`| array  | List of booking UUIDs                        |

#### Example Payload

```json
{
  "bookings": [
    "a7d2c274-e56b-4b83-9686-aef8e8b155af"
  ]
}
```

### Response

| Field                    | Type   | Description                                  |
|--------------------------|--------|----------------------------------------------|
| `bookingCancelConditions`| array  | List of cancel conditions for bookings       |

#### Example Response

```json
{
  "bookingCancelConditions": [
    {
      "bookingId": "a7d2c274-e56b-4b83-9686-aef8e8b155af",
      "isCancelAllowed": {
        "canCancel": "no",
        "cannotCancelReason": "PUNCHOUT_REQUIRED"
      }
    }
  ]
}
```

---

## Punchout Session

### Create Cancel Punchout Session

- **POST** `/punchout-sessions/cancel`

#### CancelPunchoutSessionRequestObject

| Field      | Type   | Description                                  |
|------------|--------|----------------------------------------------|
| `bookingId`| string | Booking UUID to be cancelled                 |
| `returnUrl`| string | URL to redirect after cancellation           |
| `tripId`   | string | Trip UUID containing the booking             |

#### Example Payload

```json
{
  "bookingId": "48fb4cd3-2ef6-4479-bea1-7c92721b988c",
  "returnUrl": "https://example.com/return-url",
  "tripId": "123e4567-e89b-12d3-a456-426614174000"
}
```

#### Response

| Field             | Type   | Description                                  |
|-------------------|--------|----------------------------------------------|
| `punchoutUrl`     | string | URL to redirect user to partner for cancel   |
| `punchoutSessionId`| string| UUID of the punchout session                 |

---

### Get Punchout Session

- **GET** `/punchout-sessions/{punchout_session_id}`

#### Response

| Field             | Type   | Description                                  |
|-------------------|--------|----------------------------------------------|
| `id`              | string | Punchout session UUID                        |
| `punchoutUrl`     | string | URL to redirect user to partner              |
| `meta`            | object | Metadata (createdTime, lastModifiedTime)     |
| `tripId`          | string | Trip UUID                                    |
| `bookingId`       | string | Booking UUID                                 |
| `returnUrl`       | string | URL to redirect after punchout               |
| `sessionState`    | string | State of the punchout session                |

---

## Health Check

- **GET** `/health`

Returns service status.

---

# Error Responses

| HTTP Status | Schema                       | Description                       |
|-------------|-----------------------------|-----------------------------------|
| 400         | BadRequestResponse           | Malformed request                 |
| 401         | UnauthorizedResponse         | Authorization failure             |
| 404         | NotFoundResponse             | Resource not found                |
| 500         | InternalServerErrorResponse  | Internal server error             |

#### Example Error Response

```json
{
  "errors": [
    {
      "errorCode": "badRequest",
      "errorMessage": "The request is malformed, check the input."
    }
  ]
}
```

---

# Authentication

All endpoints require an OAuth 2.0 access token in the `Authorization` header:

```
Authorization: OAuth {access_token}
```

---