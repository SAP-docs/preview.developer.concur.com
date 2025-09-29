---
title: Trip Extras v5
layout: reference
---

{% include prerelease.html %}

## <a name="limitations"></a>Limitations

Access to this documentation does not provide access to the API.

## <a name="products-editions"></a>Products and Editions

Delete any unsupported products or editions.

* Concur Travel Professional Edition
* Concur Travel Standard Edition


## <a name="scope-usage"></a>Scope Usage

To use this API, the OAuth token must include the following scopes: `travel.trips.read`; `travel.trips.booking.write`

Name                         | Description                                              | Endpoint
-----------------------------|----------------------------------------------------------|-------------------------------------------------------
`travel.trips.read`          | Read only access to trip information                     | Append Trip Extras Booking, Cancel Trip Extras Booking
`travel.trips.booking.write` | Read and write access to add, modify and cancel bookings | Append Trip Extras Booking, Cancel Trip Extras Booking

## <a name="dependencies"></a>Dependencies

None.

## <a name="access-token-usage"></a>Access Token Usage

This API supports only company level access tokens.

## <a name="append-trip-extras-booking"></a>Append Trip Extras Booking

Append extras booking content to an existing trip.

### Scopes

`travel.trips.read`, `travel.trips.booking.write` - Refer to [Scope Usage](#scope-usage) for full details.

### URI

```shell
POST https://{region}.api.concursolutions.com/travel/v5/trips/{trip_uuid}/trip-extras
```

### Parameters

Name        | Type     | Format | Description
------------|----------|--------|-------------------------------------------------------------------------
`region`    | `string` | -      | **Required**: Region of the trip. Supported values: `us2`, `eu2`, `apj1`
`trip_uuid` | `string` | -      | **Required** The trip ID.

### Payloads

  * Request: [Append Trip Extras Booking Request](#append-trip-extras-booking-request-schema)
  * Response: [Append Trip Extras Booking Response](#append-trip-extras-booking-response-schema)

### Examples

#### Request

```shell
POST https://us.api.concursolutions.com/travel/v5/trips/26c9943d-5233-4a75-a0e5-5402e996113a/trip-extras
Authorization: Bearer {access_token}
Content-Type: application/json
```

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

#### Response

Trip Extras API responds with **202 Accepted** and a JSON object containing the UUID of the created trip extras booking; meanwhile, the booking is being processed.

```shell
HTTP/1.1 202 Accepted
Content-Type: application/json; charset=utf-8
Content-Length: 55
Date: Mon, 29 Sep 2025 19:46:57 GMT
```

```json
{
    "bookingUuid": "abcdef12-3456-7890-abcd-ef1234567890"
}
```

Check out [Error Responses](#error-reponses). 

## <a name="cancel-trip-extras-booking"></a>Cancel Trip Extras Booking

Cancel the extras booking.

### Scopes

`travel.trips.read`, `travel.trips.booking.write` - Refer to [Scope Usage](#scope-usage) for full details.

### URI

```shell
POST https://{region}.api.concursolutions.com/travel/v5/trips/{trip_uuid}/trip-extras/{booking_uuid}/cancel
```

### Parameters

Name           | Type     | Format | Description
---------------|----------|--------|-------------------------------------------------------------------------
`region`       | `string` | -      | **Required**: Region of the trip. Supported values: `us2`, `eu2`, `apj1`
`trip_uuid`    | `string` | GUID   | **Required** The trip ID.
`booking_uuid` | `string` | GUID   | **Required** The booking ID.

### Payloads

  * Request: [Cancel Trip Extras Booking Request](#cancel-trip-extras-booking-request-schema)
  * Response: None

### Examples

#### Request

```shell
POST https://us.api.concursolutions.com/travel/v5/trips/26c9943d-5233-4a75-a0e5-5402e996113a/trip-extras/86d4dd26-e032-4e02-982b-04032de329f6/cancel
Authorization: Bearer {access_token}
Content-Type: application/json
```

```json
{
  "extRef": "ea725b66-6256-4f78-abcb-1f34bcdaed0c",
  "userId": "5820764c-8a07-4da7-8eb0-5cac9a9ccb3b"
}
```

#### Response

The API responds with 204 No Content when the cancellation has been successful.

```shell
HTTP/1.1 204 No Content
```

## <a name="schema"></a> Schema

### <a name="append-trip-extras-booking-request-schema"></a>Append Trip Extras Booking Request

| Name       | Type     |Format| Description                                                                 |
|------------|----------|-|----------------------------------------------------------------------------|
| `extRef`   | `string` |GUID| **Required**. UUID for relating messages exchanged between Concur and Partner. The same value should be used on all incoming and outgoing requests for the same business process. |
| `userId`   | `string` |GUID| **Required**. UUID of the user to whom the trip extras is being appended.    |
| `booking`  | `object` |[Booking Schema](#booking-schema)| **Required**. Detailed information in [Booking](#booking-schema). |

### <a name="booking-schema"></a> Booking

| Name       | Type     |Format| Description                                                                 |
|------------|----------|-|----------------------------------------------------------------------------|
| `type`     | `string` |-|**Required**. Type of partner reservation (e.g., `ground`.)                 |
| `partner`  | `object` |[Partner Schema](#partner-schema)|**Required**. Detailed information in [Partner](#partner-schema).|
| `vendor`   | `object` |[Vendor Schema](#vendor-schema)|Detailed information in [Vendor](#vendor-schema).  |
| `details`  | `object` |[Details Schema](#groundbooking-details-schema)|**Required**. Detailed information in [GroundBooking Details](#groundbooking-details-schema).  |

### <a name="partner-schema"></a> Partner

A partner is an aggregator or intermediary that provides access to one or more vendors.

| Name   | Type     | Format | Description                        |
|--------|----------|--------|------------------------------------|
| `name` | `string` | -      | **Required**. Name of the partner. |
| `logo` | `string` | -      | URL to the partner logo image.     |

### <a name="vendor-schema"></a> Vendor

Vendor is the actual service provider fulfilling the reservation.

| Name          | Type     | Format | Description                  |
|---------------|----------|--------|------------------------------|
| `name`        | `string` | -      | **Required**                 |
| `phoneNumber` | `string` | -      | Phone number of the vendor.  |
| `email`       | `string` | -      | Email address of the vendor. |

### <a name="groundbooking-details-schema"></a> GroundBooking Details

| Name                  | Type     | Format                            | Description                                                       |
|-----------------------|----------|-----------------------------------|-------------------------------------------------------------------|
| `url`                 | `string` | -                                 | URL to redirect user to the booking on the partner's page.        |
| `termsAndConditions`  | `string` | -                                 | Terms and conditions for the booking.                             |
| `cancellationPolicy`  | `string` | -                                 | Cancellation policy information.                                  |
| `vendorConfirmation`  | `string` | -                                 | Confirmation number from vendor.                                  |
| `partnerConfirmation` | `string` | -                                 | **Required**. Confirmation number from partner.                   |
| `vehicle`             | `object` | [Vehicle Schema](#vehicle-schema) | **Required**. Detailed information in [Vehicle](#vehicle-schema). |
| `pickup`              | `object` | [Pickup Schema](#pickup-schema)   | **Required**. Detailed information in [Pickup](#pickup-schema).   |
| `dropoff`             | `object` | [Stop Schema](#stop-schema)       | Detailed information in [Stop](#stop-schema).                     |
| `stops`               | `array`  | [Stop Schema](#stop-schema)       | A list of intermediate stops.                                     |
| `price`               | `object` | [Price Schema](#price-schema)     | Detailed information in [Price](#price-schema).                   |

### <a name="vehicle-schema"></a> Vehicle

Information about the vehicle assigned for the ground transportation.

| Name              | Type      | Format | Description                                         |
|-------------------|-----------|--------|-----------------------------------------------------|
| `model`           | `string`  | -      | **Required**. Vehicle model (e.g., "Toyota Camry"). |
| `acrissCode`      | `string`  | -      | ACRISS code for the vehicle (e.g., "FDMR").         |
| `imageUrl`        | `string`  | -      | URL to an image of the vehicle.                     |
| `seatingCapacity` | `integer` | -      | Number of passengers the vehicle can seat.          |
| `luggageCapacity` | `integer` | -      | Number of luggage pieces the vehicle can hold.      |

### <a name="pickup-schema"></a> Pickup

| Name           | Type     | Format                            | Description                                                                                                 |
|----------------|----------|-----------------------------------|-------------------------------------------------------------------------------------------------------------|
| `datetime`     | `string` | -                                 | **Required**. Local date and time of pickup according to RFC 3339.                                          |
| `datetimeUtc`  | `string` | -                                 | **Required**. UTC date and time of pickup according to RFC 3339.                                            |
| `address`      | `object` | [Address Schema](#address-schema) | **Required if no `iataCode` is informed**. Detailed information in  [Address](#address-schema).             |
| `iataCode`     | `string` | -                                 | **Required if no `address` is informed**. Airport code of the pickup location (e.g., "JFK").                |
| `locationName` | `string` | -                                 | Name of the pickup location.                                                                                |
| `geolocation`  | `object` | [Geolocation Schema](#geolocation-schema)| Geolocation coordinates of the pickup location. Detailed information in [Geolocation](#geolocation-schema). |
| `instructions` | `string` | -                                 | Special instructions for the pickup (e.g., "Meet at the hotel lobby").                                      |

### <a name="stop-schema"></a> Stop

| Name           | Type     | Format | Description                                                                 |
|----------------|----------|-|-----------------------------------------------------------------------------|
| `datetime`     | `string` |-| Local date and time of pickup according to RFC 3339.                        |
| `datetimeUtc`  | `string` |-| UTC date and time of pickup according to RFC 3339.                          |
| `address`      | `object` |[Address Schema](#address-schema)| **Required if no `iataCode` is informed**. Detailed information in [Address](#address-schema).           |
| `iataCode`     | `string` |-| **Required if no `address` is informed**. Airport code of the pickup location (e.g., "JFK"). |
| `locationName` | `string` |-| Name of the pickup location.                                                |
| `geolocation`  | `object` |[Geolocation Schema](#geolocation-schema)| Geolocation coordinates of the pickup location. Detailed information in [Geolocation](#geolocation-schema).   |
| `instructions` | `string` |-| Special instructions for the pickup (e.g., "Meet at the hotel lobby").      |

### <a name="address-schema"></a> Address

| Name                     | Type     | Format | Description                                                                                                |
|--------------------------|----------|--------|------------------------------------------------------------------------------------------------------------|
| `address1`               | `string` | -      | **Required**. First line of the address. Also stands for thoroughfare name of the address - xNal standard. |
| `address2`               | `string` | -      | Stands for premise name of the address on xNal standard.                                                   |
| `localityName`           | `string` | -      | **Required**. City or locality name.                                                                       |
| `administrativeAreaName` | `string` | -      | State, province or region.                                                                                 |
| `postalCode`             | `string` | -      | **Required**                                                                                               |
| `country`                | `string` | -      | **Required**. Two-letter ISO 3166-1 alpha-2 country code.                                                  |

### <a name="geolocation-schema"></a> Geolocation

| Name        | Type     | Format | Description  |
|-------------|----------|--------|--------------|
| `latitude`  | `number` | -      | **Required** |
| `longitude` | `number` | -      | **Required** |

### <a name="price-schema"></a> Price

| Name                | Type     | Format | Description                                                            |
|---------------------|----------|--------|------------------------------------------------------------------------|
| `totalAmount`       | `number` | -      | **Required**. Cost of the vendor reservation including taxes and fees. |
| `currency`          | `string` | -      | **Required**. Currency in which the total amount is specified.         |
| `hourlyRate`        | `number` | -      | Hourly rate for the service, if applicable.                            |
| `estimatedDuration` | `string` | -      | Estimated duration of the service in ISO 8601 duration format.         |
| `minimumDuration`   | `string` | -      | Minimum duration of the service in ISO 8601 duration format.           |

### <a name="append-trip-extras-booking-response-schema"></a>Append Trip Extras Booking Response

| Name          | Type     | Format | Description                             |
|---------------|----------|--------|-----------------------------------------|
| `bookingUuid` | `string` | GUID   | UUID of the created trip extras booking.|


### <a name="cancel-trip-extras-booking-request-schema"></a> Cancel Trip Extras Booking Request

| Name      | Type     | Format | Description                                  |
|-----------|----------|-|---------------------------------------------|
| `extRef`  | `string` |-|UUID for relating messages exchanged between Concur and Partner. The same value should be used on all incoming and outgoing requests for the same business process. |
| `userId`  | `string` |-|**Required**. UUID of the user.               |

### <a name="error-schema"></a> Error Schema

Error responses include a JSON body with additional details about the error.

Name           | Type     | Format | Description
---------------|----------|--------|----------------------
`errorCode`    | `string` | -      | Code for the error
`errorMessage` | `string` | -      | Message for the error
