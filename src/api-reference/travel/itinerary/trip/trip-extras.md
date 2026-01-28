---
title: Trip Extras v5
layout: reference
---

{% include prerelease.html %}

The Trip Extras API allows you to append, manage, and cancel extra bookings from external partners.

## <a name="limitations"></a>Limitations

Access to this documentation does not provide access to the API.

## <a name="products-editions"></a>Products and Editions

- Concur Travel Professional Edition
- Concur Travel Standard Edition

## <a name="scope-usage"></a>Scope Usage

To use this API, the OAuth token must include the following scopes: `travel.trips.read`; `travel.trips.booking.write`

| Name                         | Description                                              | Endpoint                                                                           |
| ---------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `travel.trips.read`          | Read only access to trip information                     | Append Trip Extras Booking, Update Trip Extras Booking, Cancel Trip Extras Booking |
| `travel.trips.booking.write` | Read and write access to add, modify and cancel bookings | Append Trip Extras Booking, Update Trip Extras Booking, Cancel Trip Extras Booking |

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

| Name        | Type     | Format | Description                                                              |
| ----------- | -------- | ------ | ------------------------------------------------------------------------ |
| `region`    | `string` | -      | **Required**: Region of the trip. Supported values: `us2`, `eu2`, `apj1` |
| `trip_uuid` | `string` | -      | **Required** The trip ID.                                                |

### Payloads

- Request: [Update or Append Trip Extras Booking Request](#update-append-trip-extras-booking-request-schema)
- Response: [Update or Append Trip Extras Booking Response](#update-append-trip-extras-booking-response-schema)

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
    "initiator": "agent",
    "booking": {
        "type": "ground",
        "metadata": {
            "version": 2,
            "timestamp": "2025-07-25 18:00:00.000",
        },
        "partner": {
            "name": "Partner Name",
            "logo": "https://example.com/partner-logo.jpg"
        },
        "vendor": {
            "name": "Vendor Name",
            "phoneNumber": "1-800-555-1212",
            "email": "foo@bar.com",
            "code": "VEND123"
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
                "luggageCapacity": 2,
                "category": "F"
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
                "minimumDuration": "PT45M",
                "costToCustomer": 150.00,
                "breakdowns": [
                    {
                        "amount": 120.00,
                        "currency": "USD",
                        "type": "FEE"
                    }
                ],
                "penalties": [
                    {
                        "amount": 120.00,
                        "currency": "USD",
                        "type": "FEE"
                    }
                ],
                "refunds": [
                    {
                        "amount": 120.00,
                        "currency": "USD",
                        "type": "FEE"
                    }
                ]
            }
            "rateType": {
                "code": "CORPORATE",
                "name": "Corporate rate"
            },
            "rulesAndRegulations": [
                "No smoking in the vehicle."
            ],
            "payment": {
                "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
                "amount": {
                    "value": 150.00,
                    "currency": "USD"
                },
                "fopType": "unsupportedExternal",
                "partnerType": "ON_ACCOUNT",
                "accountBillingType": "AGENCY_INVOICE",
                "virtualType": "CONFERMA",
                "externalType": "Corporate Card",
                "last4digits": "1234"
            },
            "passengers": [
                {
                    "firstName": "John",
                    "lastName": "Doe",
                    "id": 1,
                    "preferredLanguage": "en"
                }
            ],
            "status": {
                "bookingDateTime": "2025-07-20T14:00:00Z",
                "bookingStatus": "BOOKED",
                "cancellationDateTime": "2025-07-20T14:00:00Z"
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

Check out [Error Responses](#error-schema).

## <a name="update-trip-extras-booking"></a>Update Trip Extras Booking

Update an existing extras booking content to an existing trip.

### Scopes

`travel.trips.read`, `travel.trips.booking.write` - Refer to [Scope Usage](#scope-usage) for full details.

### URI

```shell
PUT https://{region}.api.concursolutions.com/travel/v5/trips/{trip_uuid}/trip-extras/{booking_uuid}
```

### Parameters

| Name           | Type     | Format | Description                                                              |
| -------------- | -------- | ------ | ------------------------------------------------------------------------ |
| `region`       | `string` | -      | **Required**: Region of the trip. Supported values: `us2`, `eu2`, `apj1` |
| `trip_uuid`    | `string` | -      | **Required**: The trip ID.                                               |
| `booking_uuid` | `string` | -      | **Required**: The booking ID.                                            |

### Payloads

- Request: [Update or Append Trip Extras Booking Request](#update-append-trip-extras-booking-request-schema)
- Response: [Update or Append Trip Extras Booking Response](#update-append-trip-extras-booking-response-schema)

### Examples

#### Request

```shell
PUT https://us.api.concursolutions.com/travel/v5/trips/26c9943d-5233-4a75-a0e5-5402e996113a/trip-extras/abcdef12-3456-7890-abcd-ef1234567890
Authorization: Bearer {access_token}
Content-Type: application/json
```

```json
{
    "extRef": "48fb4cd3-2ef6-4479-bea1-7c92721b988c",
    "userId": "12345678-1234-5678-1234-567812345678",
    "initiator": "agent",
    "booking": {
        "type": "ground",
        "metadata": {
            "version": 2,
            "timestamp": "2025-07-25 18:00:00.000",
        },
        "partner": {
            "name": "Partner Name",
            "logo": "https://example.com/partner-logo.jpg"
        },
        "vendor": {
            "name": "Vendor Name",
            "phoneNumber": "1-800-555-1212",
            "email": "foo@bar.com",
            "code": "VEND123"
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
                "luggageCapacity": 2,
                "category": "F"
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
                "minimumDuration": "PT45M",
                "costToCustomer": 150.00,
                "breakdowns": [
                    {
                        "amount": 120.00,
                        "currency": "USD",
                        "type": "FEE"
                    }
                ],
                "penalties": [
                    {
                        "amount": 120.00,
                        "currency": "USD",
                        "type": "FEE"
                    }
                ],
                "refunds": [
                    {
                        "amount": 120.00,
                        "currency": "USD",
                        "type": "FEE"
                    }
                ]
            }
            "rateType": {
                "code": "CORPORATE",
                "name": "Corporate rate"
            },
            "rulesAndRegulations": [
                "No smoking in the vehicle."
            ],
            "payment": {
                "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
                "amount": {
                    "value": 150.00,
                    "currency": "USD"
                },
                "fopType": "unsupportedExternal",
                "partnerType": "ON_ACCOUNT",
                "accountBillingType": "AGENCY_INVOICE",
                "virtualType": "CONFERMA",
                "externalType": "Corporate Card",
                "last4digits": "1234"
            },
            "passengers": [
                {
                    "firstName": "John",
                    "lastName": "Doe",
                    "id": 1,
                    "preferredLanguage": "en"
                }
            ],
            "status": {
                "bookingDateTime": "2025-07-20T14:00:00Z",
                "bookingStatus": "BOOKED",
                "cancellationDateTime": "2025-07-20T14:00:00Z"
            }
        }
    }
}
```

#### Response

Trip Extras API responds with **202 Accepted** and a JSON object containing the UUID of the updated trip extras booking; meanwhile, the booking is being processed.

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

Check out [Error Responses](#error-schema).

## <a name="cancel-trip-extras-booking"></a>Cancel Trip Extras Booking

Cancel the extras booking.

### Scopes

`travel.trips.read`, `travel.trips.booking.write` - Refer to [Scope Usage](#scope-usage) for full details.

### URI

```shell
POST https://{region}.api.concursolutions.com/travel/v5/trips/{trip_uuid}/trip-extras/{booking_uuid}/cancel
```

### Parameters

| Name           | Type     | Format | Description                                                              |
| -------------- | -------- | ------ | ------------------------------------------------------------------------ |
| `region`       | `string` | -      | **Required**: Region of the trip. Supported values: `us2`, `eu2`, `apj1` |
| `trip_uuid`    | `string` | GUID   | **Required** The trip ID.                                                |
| `booking_uuid` | `string` | GUID   | **Required** The booking ID.                                             |

### Payloads

- Request: [Cancel Trip Extras Booking Request](#cancel-trip-extras-booking-request-schema)
- Response: None

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

### <a name="update-append-trip-extras-booking-request-schema"></a>Update or Append Trip Extras Booking Request

| Name        | Type     | Format                                | Description                                                                                                                                                                       |
| ----------- | -------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extRef`    | `string` | GUID                                  | **Required**. UUID for relating messages exchanged between Concur and Partner. The same value should be used on all incoming and outgoing requests for the same business process. |
| `userId`    | `string` | GUID                                  | **Required**. UUID of the user to whom the trip extras is being appended.                                                                                                         |
| `initiator` | `string` | Enum: `"user"` `"agent"` `"supplier"` | **Required**. Type of initiator. Indicates who initiated the booking request.                                                                                                     |
| `booking`   | `object` | [Booking Schema](#booking-schema)     | **Required**. Detailed information in [Booking](#booking-schema).                                                                                                                 |

### <a name="booking-schema"></a> Booking

| Name       | Type     | Format                                          | Description                                                                                   |
| ---------- | -------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`     | `string` | -                                               | **Required**. Type of partner reservation (e.g., `ground`.)                                   |
| `metadata` | `object` | [Metadata Schema](#metadata-schema)             | **Required**. Detailed information in [Metadata](#metadata-schema).                           |
| `partner`  | `object` | [Partner Schema](#partner-schema)               | **Required**. Detailed information in [Partner](#partner-schema).                             |
| `vendor`   | `object` | [Vendor Schema](#vendor-schema)                 | Detailed information in [Vendor](#vendor-schema).                                             |
| `details`  | `object` | [Details Schema](#groundbooking-details-schema) | **Required**. Detailed information in [GroundBooking Details](#groundbooking-details-schema). |

### <a name="metadata-schema"></a> Ground Metadata

Additional ground metadata related to the booking.

| Name        | Type                | Format | Description                                                                                                     |
| ----------- | ------------------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| `version`   | `int`               | -      | **Required**. Version of the booking. Changes with an older version are stale. Must be greater than or equal 1. |
| `timestamp` | `string<date-time>` | -      | Timestamp of the changes in ISO 8601 format.                                                                    |

### <a name="partner-schema"></a> Partner

A partner is an aggregator or intermediary that provides access to one or more vendors.

| Name   | Type     | Format | Description                        |
| ------ | -------- | ------ | ---------------------------------- |
| `name` | `string` | -      | **Required**. Name of the partner. |
| `logo` | `string` | -      | URL to the partner logo image.     |

### <a name="vendor-schema"></a> Vendor

Vendor is the actual service provider fulfilling the reservation.

| Name          | Type     | Format | Description                  |
| ------------- | -------- | ------ | ---------------------------- |
| `name`        | `string` | -      | **Required**                 |
| `phoneNumber` | `string` | -      | Phone number of the vendor.  |
| `email`       | `string` | -      | Email address of the vendor. |
| `code`        | `string` | -      | Code of the vendor company.  |

### <a name="groundbooking-details-schema"></a> GroundBooking Details

| Name                  | Type     | Format                                | Description                                                                                           |
| --------------------- | -------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `url`                 | `string` | -                                     | **Required**. URL to redirect user to the booking on the partner's page.                              |
| `termsAndConditions`  | `string` | -                                     | Terms and conditions for the booking.                                                                 |
| `cancellationPolicy`  | `string` | -                                     | Cancellation policy information.                                                                      |
| `vendorConfirmation`  | `string` | -                                     | Confirmation number from vendor.                                                                      |
| `partnerConfirmation` | `string` | -                                     | **Required**. Confirmation number from partner.                                                       |
| `vehicle`             | `object` | [Vehicle Schema](#vehicle-schema)     | **Required**. Detailed information in [Vehicle](#vehicle-schema).                                     |
| `pickup`              | `object` | [Pickup Schema](#pickup-schema)       | **Required**. Detailed information in [Pickup](#pickup-schema).                                       |
| `dropoff`             | `object` | [Stop Schema](#stop-schema)           | Detailed information in [Stop](#stop-schema).                                                         |
| `stops`               | `array`  | [Stop Schema](#stop-schema)           | A list of intermediate stops.                                                                         |
| `price`               | `object` | [Price Schema](#price-schema)         | **Required**. Detailed information in [Price](#price-schema).                                         |
| `rateType`            | `object` | [Rate Type Schema](#rate-type-schema) | Rate type associated with the ground booking. Detailed information in [Rate Type](#rate-type-schema). |
| `rulesAndRegulations` | `array`  | `string`                              | List of raw text describing provider rules and regulations.                                           |
| `payment`             | `object` | [Payment Schema](#payment-schema)     | Monetary payment made toward a booking. Detailed information in [Payment](#payment-schema).           |
| `passengers`          | `array`  | [Passenger Schema](#passenger-schema) | Passengers who are part of this reservation. Detailed information in [Passenger](#passenger-schema).  |
| `status`              | `object` | [Status Schema](#status-schema)       | Status information for the booking. Detailed information in [Status](#status-schema).                 |

### <a name="vehicle-schema"></a> Vehicle

Information about the vehicle assigned for the ground transportation.

| Name              | Type      | Format          | Description                                         |
| ----------------- | --------- | --------------- | --------------------------------------------------- |
| `model`           | `string`  | -               | **Required**. Vehicle model (e.g., "Toyota Camry"). |
| `acrissCode`      | `string`  | `^[A-Z0-9]{4}$` | ACRISS code for the vehicle (e.g., "FDMR").         |
| `imageUrl`        | `string`  | -               | URL to an image of the vehicle.                     |
| `seatingCapacity` | `integer` | -               | Number of passengers the vehicle can seat.          |
| `luggageCapacity` | `integer` | -               | Number of luggage pieces the vehicle can hold.      |
| `category`        | `string`  | -               | First letter from ACRISS code (e.g., "F").          |

### <a name="pickup-schema"></a> Pickup

| Name           | Type     | Format                                    | Description                                                                                                 |
| -------------- | -------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `datetime`     | `string` | `string<date-time>`                       | **Required**. Local date and time of pickup according to RFC 3339.                                          |
| `datetimeUtc`  | `string` | `string<date-time>`                       | **Required**. UTC date and time of pickup according to RFC 3339.                                            |
| `address`      | `object` | [Address Schema](#address-schema)         | **Required if no `iataCode` is informed**. Detailed information in [Address](#address-schema).              |
| `iataCode`     | `string` | `^[A-Z]{3}$`                              | **Required if no `address` is informed**. Airport code of the pickup location (e.g., "JFK").                |
| `locationName` | `string` | -                                         | Name of the pickup location.                                                                                |
| `geolocation`  | `object` | [Geolocation Schema](#geolocation-schema) | Geolocation coordinates of the pickup location. Detailed information in [Geolocation](#geolocation-schema). |
| `instructions` | `string` | -                                         | Special instructions for the pickup (e.g., "Meet at the hotel lobby").                                      |

### <a name="stop-schema"></a> Stop

| Name           | Type     | Format                                    | Description                                                                                                 |
| -------------- | -------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `datetime`     | `string` | `string<date-time>`                       | Local date and time of pickup according to RFC 3339.                                                        |
| `datetimeUtc`  | `string` | `string<date-time>`                       | UTC date and time of pickup according to RFC 3339.                                                          |
| `address`      | `object` | [Address Schema](#address-schema)         | **Required if no `iataCode` is informed**. Detailed information in [Address](#address-schema).              |
| `iataCode`     | `string` | `^[A-Z]{3}$`                              | **Required if no `address` is informed**. Airport code of the pickup location (e.g., "JFK").                |
| `locationName` | `string` | -                                         | Name of the pickup location.                                                                                |
| `geolocation`  | `object` | [Geolocation Schema](#geolocation-schema) | Geolocation coordinates of the pickup location. Detailed information in [Geolocation](#geolocation-schema). |
| `instructions` | `string` | -                                         | Special instructions for the pickup (e.g., "Meet at the hotel lobby").                                      |

### <a name="address-schema"></a> Address

| Name                     | Type     | Format       | Description                                                                                                |
| ------------------------ | -------- | ------------ | ---------------------------------------------------------------------------------------------------------- |
| `address1`               | `string` | -            | **Required**. First line of the address. Also stands for thoroughfare name of the address - xNal standard. |
| `address2`               | `string` | -            | Stands for premise name of the address on xNal standard.                                                   |
| `localityName`           | `string` | -            | **Required**. City or locality name.                                                                       |
| `administrativeAreaName` | `string` | -            | State, province or region.                                                                                 |
| `postalCode`             | `string` | -            | **Required**. Postal Code                                                                                  |
| `country`                | `string` | `^[A-Z]{2}$` | **Required**. Two-letter ISO 3166-1 alpha-2 country code.                                                  |

### <a name="geolocation-schema"></a> Geolocation

| Name        | Type     | Format | Description  |
| ----------- | -------- | ------ | ------------ |
| `latitude`  | `number` | -      | **Required** |
| `longitude` | `number` | -      | **Required** |

### <a name="price-schema"></a> Price

| Name                | Type     | Format                                            | Description                                                                                                                                                   |
| ------------------- | -------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `totalAmount`       | `number` | -                                                 | **Required**. Cost of the vendor reservation including taxes and fees.                                                                                        |
| `currency`          | `string` | -                                                 | **Required**. Currency in which the total amount is specified.                                                                                                |
| `hourlyRate`        | `number` | -                                                 | Hourly rate for the service, if applicable.                                                                                                                   |
| `estimatedDuration` | `string` | -                                                 | Estimated duration of the service in ISO 8601 duration format.                                                                                                |
| `minimumDuration`   | `string` | -                                                 | Minimum duration of the service in ISO 8601 duration format.                                                                                                  |
| `costToCustomer`    | `number` | -                                                 | The total cost incurred by the customer.                                                                                                                      |
| `breakdowns`        | `array`  | [Price Breakdown Schema](#price-breakdown-schema) | Breakdown of the price amount describing booked product amount, fee amount, taxes amount. Detailed information in [Price Breakdown](#price-breakdown-schema). |
| `penalties`         | `array`  | [Price Breakdown Schema](#price-breakdown-schema) | Breakdown of penalties. Detailed information in [Price Breakdown](#price-breakdown-schema).                                                                   |
| `refunds`           | `array`  | [Price Breakdown Schema](#price-breakdown-schema) | Breakdown of refunds. Detailed information in [Price Breakdown](#price-breakdown-schema).                                                                     |

### <a name="price-breakdown-schema"></a> Price Breakdown

| Name       | Type     | Format | Description                                       |
| ---------- | -------- | ------ | ------------------------------------------------- |
| `amount`   | `number` | -      | **Required**. Monetary amount for this component. |
| `currency` | `string` | -      | **Required**. ISO 4217 currency code.             |
| `type`     | `string` | -      | **Required**. Type of the breakdown item.         |

### <a name="rate-type-schema"></a> Rate Type

| Name   | Type     | Format | Description                   |
| ------ | -------- | ------ | ----------------------------- |
| `code` | `string` | -      | **Required**. Rate type code. |
| `name` | `string` | -      | **Required**. Rate type name. |

### <a name="payment-schema"></a> Payment

| Name                 | Type     | Format                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------- | -------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                 | `string` | GUID                                                                                            | **Required**. Payment identifier.                                                                                                                                                                                                                                                                                                                                                             |
| `amount`             | `object` | [Amount Schema](#amount-schema)                                                                 | **Required**. Monetary amount with currency code (ISO 4217). Detailed information in [Amount](#amount-schema).                                                                                                                                                                                                                                                                                |
| `fopType`            | `string` | Enum: `"ghost"` `"personal"` `"virtual"` `"partner"` `"accountbilling"` `"unsupportedExternal"` | **Required**. Form of payment type. Use one of the enumerated internal types when the booking's form of payment is supported and mapped. Use 'unsupportedExternal' ONLY when the booking originated externally with an unsupported / unmapped payment type; when 'unsupportedExternal' is used, the original external payment label MUST be provided in 'externalType'.                       |
| `partnerType`        | `string` | Enum: `"ON_ACCOUNT"`                                                                            | Type of partner form of payment used.                                                                                                                                                                                                                                                                                                                                                         |
| `accountBillingType` | `string` | Enum: `"AGENCY_INVOICE"` `"DIRECTBILL_ACCOUNT"` `"DIRECTBILL_EVOUCHER"`                         | Account billing form of payment type.                                                                                                                                                                                                                                                                                                                                                         |
| `virtualType`        | `string` | `"CONFERMA"` `"MASTERCARD"` `"UNKNOWN"`                                                         | Virtual card type used.                                                                                                                                                                                                                                                                                                                                                                       |
| `externalType`       | `string` | -                                                                                               | **Required if fopType='unsupportedExternal'** Original external form of payment type label as received from an external booking source. Required when fopType='unsupportedExternal'. Optional for other fopType values when the booking originated externally and the external value could be mapped to an internal supported type (in those cases both fopType and externalType may appear). |
| `last4digits`        | `string` | `^[0-9]{4}$`                                                                                    | Last four digits of card used (if applicable).                                                                                                                                                                                                                                                                                                                                                |

### <a name="amount-schema"></a> Amount

| Name       | Type     | Format | Description                             |
| ---------- | -------- | ------ | --------------------------------------- |
| `value`    | `number` | -      | **Required**. Numeric amount value.     |
| `currency` | `string` | -      | **Required**. Currency code (ISO 4217). |

### <a name="passenger-schema"></a> Passenger

| Name                | Type      | Format | Description                                |
| ------------------- | --------- | ------ | ------------------------------------------ |
| `firstName`         | `string`  | -      | **Required**. First name of the passenger. |
| `lastName`          | `string`  | -      | **Required**. Last name of the passenger.  |
| `id`                | `integer` | -      | Person ID                                  |
| `preferredLanguage` | `string`  | -      | The preferred language of the person.      |

### <a name="status-schema"></a> Status

| Name                   | Type     | Format                         | Description                                             |
| ---------------------- | -------- | ------------------------------ | ------------------------------------------------------- |
| `bookingDateTime`      | `string` | `string<date-time>`            | The date and time the booking occurred on an itinerary. |
| `bookingStatus`        | `string` | Enum: `"BOOKED"` `"CANCELLED"` | **Required**. Current status of the booking.            |
| `cancellationDateTime` | `string` | `string<date-time>`            | The date and time the booking was last cancelled.       |

### <a name="update-append-trip-extras-booking-response-schema"></a>Update or Append Trip Extras Booking Response

| Name          | Type     | Format | Description                                         |
| ------------- | -------- | ------ | --------------------------------------------------- |
| `bookingUuid` | `string` | GUID   | UUID of the created or updated trip extras booking. |

### <a name="cancel-trip-extras-booking-request-schema"></a> Cancel Trip Extras Booking Request

| Name     | Type     | Format | Description                                                                                                                                                         |
| -------- | -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extRef` | `string` | -      | UUID for relating messages exchanged between Concur and Partner. The same value should be used on all incoming and outgoing requests for the same business process. |
| `userId` | `string` | -      | **Required**. UUID of the user.                                                                                                                                     |

### <a name="error-schema"></a> Error Schema

Error responses include a JSON body with additional details about the error.

| Name           | Type     | Format | Description           |
| -------------- | -------- | ------ | --------------------- |
| `errorCode`    | `string` | -      | Code for the error    |
| `errorMessage` | `string` | -      | Message for the error |
