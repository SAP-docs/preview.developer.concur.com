---
title: Travel Trips API v5 with Business Events
layout: reference
---

{% include prerelease.html %}

# Travel Trips API v5 with Business Events

## <a name="introduction"></a>Introduction

The event-driven Trips v5 API provides a scalable way for partners to retrieve near real-time updates for trips that are created, updated, deleted, or anonymized. When a trip event is received, use the trip identifier and the event `href` to retrieve the current trip record with `GET /v5/trips/{tripID}`.

Trips v5 is available in the US2, EU2, and APJ1 data centers.

## <a name="data-scope"></a>Data Scope

Events can be raised for trips saved to the trip data store. This includes trips booked in Concur Travel, offline with a travel management company, directly with a TripLink supplier, or provided by other supported travel sources.

The response from the Trips v5 API is filtered by the scopes assigned to the calling application. A response can contain booking, location, pricing, or public trip data depending on the scopes granted. Fields that are empty or outside the caller's scopes are omitted. Design consumers to tolerate incomplete records and to process each response according to its granted scopes.

Some travel sources can represent traveler intent rather than a completed reservation. For example, a trip can contain a destination without a confirmed flight number. Consumers should interpret and handle incomplete data according to their use case.

## <a name="event-details"></a>Event Details

The Event Subscription Service (ESS) enables a partner to create a subscription for a webhook. Configure the subscription with the trip event topic and the event filters appropriate for the integration. The available filters and event payload details are provided by SAP Concur during the Trips v5 preview and onboarding process.

Use the following resources to set up and manage an event subscription:

* [ESS (Getting Started)](/api-reference/ess/v4.event-subscription.html)
* [Event Subscription Management](/event-topics/index.html)

Trips v5 event notifications identify the affected trip and include an `href` for events for which a trip record can be retrieved. Treat the event as a notification that data changed, then retrieve the current record rather than relying on the event to contain the complete trip.

For deleted or anonymized trips, an `href` might not be available. Do not call the API when the event does not provide a retrievable trip link; remove or anonymize the corresponding record in the partner system as required by the event.

## <a name="retrieve-trip"></a>Retrieve a Trip from an Event

After receiving an event with an `href`, use the URL to call the Trips v5 API. The `href` identifies the region and trip resource to retrieve. Use a Company-level access token with the appropriate Trips v5 scope in the `Authorization` header.

1. Receive a trip event at the configured webhook.
2. Read the trip identifier and `href` from the event payload.
3. Select the access token that has the scope needed for the data your application uses.
4. Send a `GET` request to the event `href`, or construct the request with the regional base URL and trip identifier.
5. Process the returned fields that are present and persist the event identifier for traceability and idempotent processing.

Example request:

```http
GET https://us2.api.concursolutions.com/v5/trips/{tripID}
Accept: application/json
Authorization: Bearer <JWT Token>
```

For the endpoint, parameters, status codes, response examples, and scope-specific schemas, see the [Trips v5 API reference](/api-reference/travel/trips-v5/v5.trips.html).

## <a name="scope-usage"></a>Scope Usage

The Trips v5 response is data-minimized by scope. A partner can be granted one or more named scopes. The broad `travel.trip.read` scope returns the full public trip view; named scopes return the corresponding filtered data.

Scope|Data returned
---|---
`travel.trip.booking.read`|Booking data, such as air, hotel, car, rail, and ground bookings.
`travel.trip.location.read`|Location data used by the trip and its bookings.
`travel.trip.pricing.read`|Pricing, amounts, currencies, taxes, fees, and related payment data.
`travel.trip.read`|The broad public trip view.

The same endpoint is used for every scope. Do not assume that a field is present solely because it appears in another application's response. Check the scope-specific field descriptions in the API reference.

## <a name="references"></a>References for Enumeration Types

The following values commonly appear in Trips v5 records. The API reference is the source of truth for the values and the fields where each value is valid.

#### Trip Sources

Source|Description
---|---
`master`, `amadeus`, `fema`, `apollo`, `galileo`, `sabre`, `worldspan`|Global distribution system or aggregated trip sources.
`air_connector`|Air connector source.
`amex`, `bene`, `capita`, `cds`, `cwt`, `egencia`, `tripsource`|Supported corporate or agency sources.
`airbnb`, `bookingcom`, `cartrawler`, `giata`, `hotelservice`, `hrs`, `northstar`|Supported lodging or ground supplier sources.
`amtrak`, `deutschebahn`, `renfe`, `trainline`, `travelfusion`|Supported rail or multimodal sources.
`_unsupported_`|A source that could not be mapped to a supported value.

#### Car Reservation Status Values

Status|Description
---|---
`CANCELED`|The car booking is canceled.
`CONFIRMED`|The car booking is confirmed.
`FAILED`|The car booking failed.
`ON_REQUEST`|The car booking is on request.

#### Hotel Reservation Status Values

Status|Description
---|---
`RESERVED`|The hotel booking is reserved.
`CANCELLED`|The hotel booking is cancelled.
`PENDING_CONFIRMATION`|The hotel booking is pending confirmation.

#### Rail Booking State Values

State|Description
---|---
`TICKETED`|The booking has been ticketed.
`CANCELED`|The booking is canceled.
`INITIATED`|The booking process has been initiated.
`PAID`|The booking has been paid.
`FAILED`|The booking failed.
`CANCEL_REQUESTED`|Cancellation was requested.
`ON_HOLD`|The booking is on hold.

> **Note:** Status values are field-specific. Use the enumeration documented for the individual field instead of applying one table to every status field.

#### Hotel Adjustment Types

Code|Description
---|---
`REFUND`|The adjustment credits the amount of the refund.
`FEE`|The adjustment debits the amount of the fee.

#### Car Charge Types

Code|Description
---|---
`INSURANCE`|Insurance charge.
`SPECIAL_EQUIPMENT`|Special equipment charge.
`SURCHARGE`|Surcharge.
`TAX`|Tax.

#### Rail Cost Types

Code|Description
---|---
`fee`|Fee.
`tax`|Tax.
`baseAmount`|Base amount.
`ancillary`|Ancillary cost.
`group`|Group cost.
`refund`|Refund.
`penalty`|Penalty.
`section`|Section.

> **Note:** Rail cancellation adjustment `type` is a free-form string in the V5 reference; its description gives `refund` and `fee` as examples rather than defining an enum.

## <a name="related-resources"></a>Related Resources

* [Trips v5 API reference](/api-reference/travel/trips-v5/v5.trips.html)
* [Event Topics](/event-topics/index.html)
* [Event Subscription Service v4 Guide](/api-guides/ess-guide.html)
