---
title: Deeplink Integration for Travel
layout: reference
---

# Deeplink Integration for Travel

The Deeplink Integration allows Concur Travel users to have direct access to the Shopping Results page (for a flight search), respectively the itinerary page (for an itinerary deeplink) in one click.

## Prerequisites

Users must have an account in Concur Travel and they need to authenticate (or be logged in). Authentication methods supported are username/password and SSO SAML2.

Company must be part of the Evolution of Travel (Concur Travel's new booking experience).

## Limitations

When using SAML2 IdP-Initiated flow there is the caveat that IdP must support setting `relayState` with the encoded Deeplink path. Example for SAP Cloud Identity Services (CIS):

```
{IdP_URI}?sp={concur_URI}&relayState=%2Ftravel%2Fdeeplink%2Fair-shop%2Fv1%3Fdeparturedate%3D2023-11-10%26departureLocation%3DJFK%26returndate%3D2023-11-15%26returnlocation%3DLAX
```

Deeplink Integration is not available for mobile and currently it only supports flight search and itinerary lookup.

## Integration Details

### Flight Search

Deeplink Integration allows users to perform a search in Concur Travel without having to manually fulfill the information in the UI. Departure/return date, airport and time are incorporated in the URL, as well as the cabin type.

Users can search for round-trip flights by informing a departure date, origin airport, a return date and a destination/return airport. If searching for a one-way flight, they must inform departure information and destination airport, however, they shouldn't provide a return date.

The users are able to **omit one** of the airports (departure or return) when they want to departure from or return to their home airport. For this, they need to have a preferred airport configured in their Travel Profile — under Air Travel Preferences, set **Preferred Departure Airport**.

In case of errors, the user is redirected to the OBT's home page. 

#### URI Template

```
https://www.concursolutions.com/travel/deeplink/air/v1/shop?departurelocation={departurelocation}&departuredate={departuredate}&departuretime={departuretime}&returnlocation={returnlocation}&returndate={returndate}&returntime={returntime}&cabintype={cabintype}
```

#### Example of Usage
```
https://www.concursolutions.com/travel/deeplink/air/v1/shop?departurelocation=POA&departuredate=2024-08-04&departuretime=13:00&returnlocation=SDU&returndate=2024-08-20&returntime=09:00&cabintype=ECONOMY
```

#### Query Parameters

| Name | Type| Format | Description                       |
| -------- |     -------- | -------- | -------- |
| `departurelocation`   | `string`   | [Location Format](/api-guides/travel/deeplink-integration.html#location-format) | **Required if `returnlocation` is not informed** <br>Airport where the departure flight will take place |
| `departuredate`       | `string`   | `YYYY-MM-DD`    | **Required** <br>Departure flight date  |
| `departuretime`       | `string`   | `hh:mm`         | Departure flight time in 24-hour format. Minutes are disregarded: `16:50` becomes `16:00` |
| `returnlocation`      | `string`   | [Location Format](/api-guides/travel/deeplink-integration.html#location-format) | **Required if `departurelocation` is not informed** <br>Airport where the return flight will take place <br> For one-way trips, this will be considered as the destination airport, see [Example: One-way trip](/api-guides/travel/deeplink-integration.html#example-one-way) |
| `returndate`          | `string`   | `YYYY-MM-DD`    | Return flight date |
| `returntime`          | `string`   | `hh:mm`         | Return flight time in 24-hour format. Minutes are disregarded: `16:50` becomes `16:00` |
| `cabintype`           | `string`   | [Cabin Types](/api-guides/travel/deeplink-integration.html#cabin-types)     | The section of the aircraft that the user wants to travel on |

##### <a name="location-type"></a>Location Format

The airport can be informed in different ways:
* **IATA Code**: a three-letter code that represents the airport, for example `LAX` for Los Angeles International Airport
* **Geographic Coordinates**: latitude and longitude for a geopoint  
Format: `{lat},{long}`, with no blank space inbetween. Example: `48.85694273527786,2.3501079080340315` for Paris. With this coordinates, a search for airports in a radius of 100 km is performed and the closest airport is used in the flight search

##### <a name="cabin-types"></a>Cabin Types
The supported cabin types are:
* `ECONOMY`
* `PREMIUM_ECONOMY`
* `BUSINESS`
* `FIRST`

#### Example: Round-Trip
```
https://www.concursolutions.com/travel/deeplink/air/v1/shop?departurelocation=OPO&departuredate=2024-06-01&departuretime=02:00&returnlocation=BER&returndate=2024-06-02&returntime=03:00&cabintype=BUSINESS
```

This deeplink will perform a search for a departure flight from OPO to BER airport, on June 1st, 2024, at 02:00AM ±2 and a return flight from BER to OPO, on June 2nd, 2024 at 03:00AM ±2. The search will bring Business class flights.

#### <a name="example-one-way"></a> Example: One-way Trip
```
https://www.concursolutions.com/travel/deeplink/air/v1/shop?departurelocation=48.85694273527786,2.3501079080340315&departuredate=2024-06-01&departuretime=02:00&returnlocation=SDU
```

This deeplink will perform a search for a flight from LBG (airport in Paris) to SDU, on June 1st, 2024 with departure time at 02:00AM ±2.

#### Example: Omitting Departure or Return location

In this example, we are considering that the user has defined **LAX** as their preferred airport.

On the deeplink below the user is omitting the desired **departure location**. Therefore, they will be taken to the search results page, showing departure flights from LAX (preferred airport) to BER. The next page will show return flights, from BER back to LAX.
```
https://www.concursolutions.com/travel/deeplink/air/v1/shop?departuredate=2024-06-01&returnlocation=BER&returndate=2024-06-02
```

In this next example the user omitted `returnlocation`. This will result on a search for a flight from LBG (airport in Paris) to LAX.

```
https://www.concursolutions.com/travel/deeplink/air/v1/shop?departurelocation=48.85694273527786,2.3501079080340315&departuredate=2024-06-01
```

### Itinerary

Deeplink Integration allows users to lookup an itinerary in Concur Travel without having to manually navigate on the UI, providing instant access to detailed trip data.

The Deeplink only allows redirection to users authorized to view the itinerary. Authorized users are the traveler, a travel arranger or an approver. An approver user will see the approvers view of an itinerary, while the traveler and the arranger will see the travelers view of an itinerary.

This integration streamlines the user experience, making trip management more efficient and user-friendly. In the event of any errors encountered during redirection, users will be seamlessly redirected to the Concur home page.

#### URI Template

```
https://{environment}.concursolutions.com/goto/trip/{tripID}
```

| Name | Type| Format | Description                       |
| -------- |     -------- | -------- | -------- |
| `environment`       | `string`   | `-`    | **Required** <br>Specifies the environment (e.g. 'US2' or 'EU2')|
| `tripID`       | `string`   | `-`    | **Required** <br>Unique identifier of the trip, formatted as a UUID.|

This deep link URL facilitates accessing detailed trip information in SAP Concur solutions through either SSO or username/password authentication when launched from third-party applications, seamlessly directing users to the corresponding itinerary.

#### Example:
```
https://eu2.concursolutions.com/goto/trip/779a324d-6e1d-4fe8-8f98-9362be994766
```
