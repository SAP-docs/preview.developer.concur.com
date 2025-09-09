---
title: Trip Extras
layout: reference
---

{% include prerelease.html %}

# Trip Extras

The Trip Extras API allows you to append, manage, and cancel extra bookings from external partners on a Concur trip.

### Version

1.0.0

## Limitations

Access to this documentation does not provide access to the API.

## URI

`/travel/v5/trips/{trip_uuid}/trip-extras`

## Scope

To use this API, the OAuth token must include the following scopes: `travel.trips.read`; `travel.trips.booking.write`

## Append Trip Extra Booking

Append extra booking content to an existing trip.

### Request

```
POST /travel/v5/trips/{trip_uuid}/trip-extras
Authorization: Bearer {access_token}
Content-Type: application/json
```

#### Parameters

| Name        | Type | Description              |
|-------------|------|--------------------------|
| `trip_uuid` | path | UUID of the trip         |

#### Body (JSON)

| Field      | Type     | Description                                                                 |
|------------|----------|-----------------------------------------------------------------------------|
| `extRef`   | `string` | **Required**. UUID for relating messages exchanged between Concur and Partner. The same value should be used on all incoming and outgoing requests for the same business process |
| `userId`   | `string` | **Required**. UUID of the user for whom the trip extra is being appended    |
| `booking`  | `object` | **Required**. Booking details (see below)                                  |

##### Booking

| Field      | Type     | Description                                                                 |
|------------|----------|-----------------------------------------------------------------------------|
| `type`     | `string` | **Required**. Type of partner reservation (e.g., `ground`)                 |
| `partner`  | `object` | **Required**. Partner details (see `Partner` below)                        |
| `vendor`   | `object` | Vendor details (see `Vendor` section)                                      |
| `details`  | `object` | **Required**. Booking details (see `GroundBooking Details` below)          |

##### Partner

A partner is an aggregator or intermediary that provides access to one or more vendors.

| Field   | Type     | Description                     |
|---------|----------|---------------------------------|
| `name`  | `string` | **Required**. Name of the partner |
| `logo`  | `string` | URL to the partner logo image   |

##### Vendor

Vendor is the actual service provider fulfilling the reservation.

| Field          | Type     | Description                 |
|----------------|----------|-----------------------------|
| `name`         | `string` | **Required**                |
| `phoneNumber`  | `string` | Phone number of the vendor  |
| `email`        | `string` | Email address of the vendor |

##### GroundBooking Details

| Field                | Type     | Description                                                                 |
|----------------------|----------|-----------------------------------------------------------------------------|
| `url`                | `string` | URL to redirect user to the booking on partner page                         |
| `termsAndConditions` | `string` | Terms and conditions for the booking                                        |
| `cancellationPolicy` | `string` | Cancellation policy information                                             |
| `vendorConfirmation` | `string` | Confirmation number from vendor                                             |
| `partnerConfirmation`| `string` | **Required**. Confirmation number from partner                              |
| `vehicle`            | `object` | **Required**. Vehicle information (see `Vehicle` section)                   |
| `pickup`             | `object` | **Required**. (see `Pickup` below)                                          |
| `dropoff`            | `object` | (see `Stop` section)                                                        |
| `stops`              | `array`  | A list of intermediate stops (see `Stop`)                                   |
| `price`              | `object` | Pricing details (see `Price` below)                                         |

##### Vehicle

Information about the vehicle assigned for the ground transportation.

| Field             | Type     | Description                                   |
|-------------------|----------|-----------------------------------------------|
| `model`           | `string` | **Required**. Vehicle model (e.g., "Toyota Camry") |
| `acrissCode`      | `string` | ACRISS code for the vehicle (e.g., "FDMR")    |
| `imageUrl`        | `string` | URL to an image of the vehicle                |
| `seatingCapacity` | `integer`| Number of passengers the vehicle can seat     |
| `luggageCapacity` | `integer`| Number of luggage pieces the vehicle can hold |

##### Pickup

| Field          | Type     | Description                                                                 |
|----------------|----------|-----------------------------------------------------------------------------|
| `datetime`     | `string` | **Required**. Local date and time of pickup according to RFC 3339          |
| `datetimeUtc`  | `string` | **Required**. UTC date and time of pickup according to RFC 3339            |
| `address`      | `object` | **Required if no `iataCode` is informed**. (see `Address` below)           |
| `iataCode`     | `string` | **Required if no `address` is informed**. Airport code of the pickup location (e.g., "JFK") |
| `locationName` | `string` | Name of the pickup location                                                |
| `geolocation`  | `object` | Geolocation coordinates of the pickup location (see `Geolocation` below)   |
| `instructions` | `string` | Special instructions for the pickup (e.g., "Meet at the hotel lobby")      |

##### Stop

| Field          | Type     | Description                                                                 |
|----------------|----------|-----------------------------------------------------------------------------|
| `datetime`     | `string` | Local date and time of pickup according to RFC 3339                        |
| `datetimeUtc`  | `string` | UTC date and time of pickup according to RFC 3339                          |
| `address`      | `object` | **Required if no `iataCode` is informed**. (see `Address` below)           |
| `iataCode`     | `string` | **Required if no `address` is informed**. Airport code of the pickup location (e.g., "JFK") |
| `locationName` | `string` | Name of the pickup location                                                |
| `geolocation`  | `object` | Geolocation coordinates of the pickup location (see `Geolocation` below)   |
| `instructions` | `string` | Special instructions for the pickup (e.g., "Meet at the hotel lobby")      |

##### Address

| Field                    | Type     | Description                                                                 |
|--------------------------|----------|-----------------------------------------------------------------------------|
| `address1`               | `string` | **Required**. First line of the address. Also stands for thoroughfare name of the address - xNal standard |
| `address2`               | `string` | Stands for premise name of the address on xNal standard                     |
| `localityName`           | `string` | **Required**. City or locality name                                         |
| `administrativeAreaName` | `string` | State, province or region                                                  |
| `postalCode`             | `string` | **Required**                                                               |
| `country`                | `string` | **Required**. Two-letter ISO 3166-1 alpha-2 country code                   |

##### Geolocation

| Field      | Type     | Description             |
|------------|----------|-------------------------|
| `latitude` | `number` | **Required**            |
| `longitude`| `number` | **Required**            |

##### Price

| Field                | Type     | Description                                                                 |
|----------------------|----------|-----------------------------------------------------------------------------|
| `totalAmount`        | `number` | **Required**. Cost of the vendor reservation including taxes and fees       |
| `currency`           | `string` | **Required**. Currency in which the total amount is specified               |
| `hourlyRate`         | `number` | Hourly rate for the service, if applicable                                  |
| `estimatedDuration`  | `string` | Estimated duration of the service in ISO 8601 duration format               |
| `minimumDuration`    | `string` | Minimum duration of the service in ISO 8601 duration format                 |

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
            "stops": [
                {
                    "iataCode": "LGA"
                }
            ],
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

Trip Extras API responds with **202 Accepted** and a JSON object containing the UUID of the created trip extra booking; meanwhile, the booking is being processed.

| Field         | Type     | Description                            |
|---------------|----------|----------------------------------------|
| `bookingUuid` | `string` | UUID of the created trip extra booking |

```json
{
    "bookingUuid": "abcdef12-3456-7890-abcd-ef1234567890"
}
```

For possible errors, see the Error Responses section.

---

## Cancel Trip Extra Booking

Cancel a trip extra booking by UUID.

### Request

```
POST /travel/v5/trips/{trip_uuid}/trip-extras/{booking_uuid}/cancel
Authorization: Bearer {access_token}
Content-Type: application/json
```

#### Parameters

| Name           | Type | Description                                  |
|----------------|------|----------------------------------------------|
| `trip_uuid`    | path | UUID of the trip                             |
| `booking_uuid` | path | UUID of the trip extra booking to cancel     |

#### Body (JSON)

| Field     | Type     | Description                                  |
|-----------|----------|----------------------------------------------|
| `extRef`  | `string` | UUID for relating messages exchanged between Concur and Partner. The same value should be used on all incoming and outgoing requests for the same business process |
| `userId`  | `string` | **Required**. UUID of the user               |

#### Example Payload

```json
{
    "extRef": "48fb4cd3-2ef6-4479-bea1-7c92721b988c",
    "userId": "12345678-1234-5678-1234-567812345678"
}
```

### Response

The API responds with 204 No Content when the cancellation has been successful.

For possible errors, see the Error Responses section below.

---

## Error Responses

Error responses include a JSON body with additional details about the error.

| Status Code | Description                       |
|-------------|-----------------------------------|
| 400         | Invalid request parameters        |
| 401         | Invalid authorization             |
| 500         | Internal Server Error             |

### Body (JSON)

Example:

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
