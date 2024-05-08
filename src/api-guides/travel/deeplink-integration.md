---
title: Deeplink Integration for Travel
layout: reference
---

# Deeplink Integration for Travel

The Deeplink Integration allows Concur Travel users to have direct access to the Shopping Results page (for a flight / car / hotel / train search), respectively the itinerary page (for an itinerary deeplink) in one click.

## Prerequisites

Users must have an account in Concur Travel and they need to authenticate (or be logged in). Authentication methods supported are username / password and SSO SAML2.

Company must be part of the Evolution of Travel (Concur Travel's new booking experience).

## Limitations

When using SAML2 IdP-Initiated flow there is the caveat that IdP must support setting `relayState` with the encoded Deeplink path. Example for SAP Cloud Identity Services (CIS):

```
{IdP_URI}?sp={concur_URI}&relayState=%2Fgoto%2Fair-shop%3Fdeparturedate%3D2023-11-10%26departureLocation%3DJFK%26returndate%3D2023-11-15%26returnlocation%3DLAX
```

Whenever possible use the correct environment in your link, e.g. `eu2` or `us2`, instead of just `www`. This will avoid unnecessary logins.

Deeplink Integration is not available for mobile and currently it only supports flight / car / hotel / train search and itinerary lookup.

## Integration Details

### Search

Deeplink Integration allows users to perform a search in Concur Travel without having to manually fulfill the information in the UI. Search parameters like location and time are incorporated in the URL.

In case of errors, the user is shown an error page with an error message and a link to the Concur home page from which a regular search can be started. 

### Flight Search

Users can search for round-trip flights by informing a departure date, origin / departure airport, a return date and a destination / return airport. If searching for a one-way flight, they must inform departure information and destination airport, however, they shouldn't provide a return date.

The users are able to **omit one** of the airports (departure or return) when they want to departure from or return to their home airport. For this, they need to have a preferred airport configured in their Travel Profile — under Air Travel Preferences, set **Preferred Departure Airport**.

#### URI Template

```
https://{environment}.concursolutions.com/goto/air-shop?departurelocation={departurelocation}&departuredate={departuredate}&departuretime={departuretime}&returnlocation={returnlocation}&returndate={returndate}&returntime={returntime}&cabintype={cabintype}
```

#### Example of Usage
```
https://eu2.concursolutions.com/goto/air-shop?departurelocation=POA&departuredate=2024-08-04&departuretime=13:00&returnlocation=SDU&returndate=2024-08-20&returntime=09:00&cabintype=ECONOMY
```

#### Query Parameters

| Name | Type| Format | Description                       |
| -------- |     -------- | -------- | -------- |
| `departurelocation`   | `string`   | [Location Format](/api-guides/travel/deeplink-integration.html#location-format-air) | **Required if `returnlocation` is not informed** <br>Airport where the departure flight will take place |
| `departuredate`       | `string`   | `YYYY-MM-DD`    | **Required** <br>Departure flight date  |
| `departuretime`       | `string`   | `hh:mm`         | Departure flight time in 24-hour format. Minutes are disregarded: `16:50` becomes `16:00` |
| `returnlocation`      | `string`   | [Location Format](/api-guides/travel/deeplink-integration.html#location-format-air) | **Required if `departurelocation` is not informed** <br>Airport where the return flight will take place <br> For one-way trips, this will be considered as the destination airport, see [Example: One-way trip](/api-guides/travel/deeplink-integration.html#example-one-way) |
| `returndate`          | `string`   | `YYYY-MM-DD`    | Return flight date |
| `returntime`          | `string`   | `hh:mm`         | Return flight time in 24-hour format. Minutes are disregarded: `16:50` becomes `16:00` |
| `cabintype`           | `string`   | [Cabin Types](/api-guides/travel/deeplink-integration.html#cabin-types)     | The section of the aircraft that the user wants to travel on |

<a name="location-format-air"></a>**Location Format**

The airport can be informed in different ways:
* **IATA Code**: a three-letter code that represents the airport, for example `LAX` for Los Angeles International Airport
* **Geographic Coordinates**: latitude and longitude for a geopoint  
Format: `{lat},{long}`, with no blank space inbetween. Example: `48.85694273527786,2.3501079080340315` for Paris. With these coordinates a search for airports in a radius of 100 km is performed and the closest airport is used in the flight search

<a name="cabin-types"></a>**Cabin Types**

The supported cabin types are:
* `ECONOMY`
* `PREMIUM_ECONOMY`
* `BUSINESS`
* `FIRST`

#### Example: Round-Trip
```
https://eu2.concursolutions.com/goto/air-shop?departurelocation=OPO&departuredate=2024-06-01&departuretime=02:00&returnlocation=BER&returndate=2024-06-02&returntime=03:00&cabintype=BUSINESS
```

This deeplink will perform a search for a departure flight from OPO to BER airport, on June 1st, 2024, at 02:00AM ±2 and a return flight from BER to OPO, on June 2nd, 2024 at 03:00AM ±2. The search will bring Business class flights.

#### <a name="example-one-way"></a> Example: One-way Trip
```
https://eu2.concursolutions.com/goto/air-shop?departurelocation=48.85694273527786,2.3501079080340315&departuredate=2024-06-01&departuretime=02:00&returnlocation=SDU
```

This deeplink will perform a search for a flight from LBG (airport in Paris) to SDU, on June 1st, 2024 with departure time at 02:00AM ±2.

#### Example: Omitting Departure or Return location

In this example, we are considering that the user has defined **LAX** as their preferred airport.

On the deeplink below the user is omitting the desired **departure location**. Therefore, they will be taken to the search results page, showing departure flights from LAX (preferred airport) to BER. The next page will show return flights, from BER back to LAX.
```
https://eu2.concursolutions.com/goto/air-shop?departuredate=2024-06-01&returnlocation=BER&returndate=2024-06-02
```

In this next example the user omitted `returnlocation`. This will result on a search for a flight from LBG (airport in Paris) to LAX.

```
https://eu2.concursolutions.com/goto/air-shop?departurelocation=48.85694273527786,2.3501079080340315&departuredate=2024-06-01
```

### Car Search

Users can search for cars by informing a pickup date, time and location, a drop-off date, time and location. If pickup and drop-off location should be the same, the drop-off location can be omitted.

#### URI Template

```
https://{environment}.concursolutions.com/goto/car-shop?pickuplocation={pickuplocation}&pickupdate={pickupdate}&pickuptime={pickuptime}&dropofflocation={dropofflocation}&dropoffdate={dropoffdate}&dropofftime={dropofftime}
```

#### Example of Usage
```
https://eu2.concursolutions.com/goto/car-shop?pickuplocation=48.85694273527786,2.3501079080340315&pickupdate=2024-06-01&pickuptime=12:00&dropofflocation=50.035467,8.562884&dropoffdate=2024-06-02&dropofftime=18:00
```

#### Query Parameters

| Name               | Type       | Format         | Description                                               |
| ------------------ | ---------- | -------------- | --------------------------------------------------------- |
| `pickuplocation`   | `string`   | [Location Format](/api-guides/travel/deeplink-integration.html#location-format-car) | **Required** <br>Location where the car will be picked up |
| `pickupdate`       | `string`   | `YYYY-MM-DD`   | **Required** <br>Date when the car will be picked up  |
| `pickuptime`       | `string`   | `hh:mm`        | **Required** <br>Time when the car will be picked up <br> Utilizes 24-hour format|
| `dropofflocation`  | `string`   | [Location Format](/api-guides/travel/deeplink-integration.html#location-format-car) | Location where the car will be dropped off <br>If it is not provided it will default to `pickuplocation`  |
| `dropoffdate`      | `string`   | `YYYY-MM-DD`   | **Required** <br>Date when the car will be dropped off |
| `dropofftime`      | `string`   | `hh:mm`        | **Required** <br>Time when the car will be dropped off <br>Utilizes 24-hour format|

<a name="location-format-car"></a>**Location Format**

* **Geographic Coordinates**: latitude and longitude for a geopoint  
Format: `{lat},{long}`, with no blank space inbetween. Example: `50.038432519565845,8.562138820315441` for Frankfurt airport. With these coordinates, a search for a location in a radius of 10 km is performed and the closest location is used in the car search


### Hotel Search

Users can search for hotels in a certain distance around the location by informing a check-in and checkout date, search center location, a distance around the location and a unit for the distance.

The users are able to **omit** the unit or distance or both when they want to use default values. Omitting the distance will default to a distance of 5mi. Omitting the unit will default to the value set in their Travel Profile — under Profile Settings, System Settings, **mile/km**.

#### URI Template

```
https://{environment}.concursolutions.com/goto/hotel-shop?checkindate={checkindate}&checkoutdate={checkoutdate}&location={location}&distance={distance}&unit={unit}
```

#### Example of Usage
```
https://eu2.concursolutions.com/goto/hotel-shop?checkindate=2024-08-01&checkoutdate=2024-08-02&location=50.050686,8.565997&distance=15&unit=mi
```

#### Query Parameters

| Name               | Type       | Format         | Description                                               |
| ------------------ | ---------- | -------------- | --------------------------------------------------------- |
| `checkindate`      | `string`   | `YYYY-MM-DD`   | **Required** <br>Date when to check in to the hotel  |
| `checkoutdate`     | `string`   | `YYYY-MM-DD`   | **Required** <br>Date when to check out of the hotel |
| `location`         | `string`   | [Location Format](/api-guides/travel/deeplink-integration.html#location-format-hotel) | **Required** <br>Location of the search center |
| `distance`         | `string`   | integer - one of `{1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100}` | Distance around the `location` <br>If not set it will default to 5 mi `distance` and `radius` as search radius  |
| `unit`             | `string`   | `km` or `mi`   | Unit for the `distance` <br>If not set the value will be traken from users pofile - under Profile Settings, System Settings, **mile/km**|

<a name="location-format-hotel"></a>**Location Format**

The hotel location can be informed in different ways:
* **Geographic Coordinates**: latitude and longitude for a geopoint  
Format: `{lat},{long}`, with no blank space inbetween. Example: `48.85694273527786,2.3501079080340315` for Paris. With these coordinates, a search for hotels in a radius of `distance` `unit` is performed
* **Concur internal Hotel ID**: SAP Concur internal ID of a hotel  
Format: alpha-numeric string. Example: `1907825ad1f728ccafb22942d61a2715` for Econo Lodge Inn & Suites in Arkansas. With this Concur internal ID, a search for hotels is performed and the hotel corresponding to the ID is highlighted at top of the search results. <br>Concur internal hotel ID should only be used inside of Concur, e.g. for Concur MS Teams integration

### Train Search

Users can search for train round-trips by informing a departure date, time and location, a return date, time and destination/return location. If searching for a train one-way trip, they must inform departure information and destination location, however, they shouldn't provide a return date or time.

#### URI Template

```
https://{environment}.concursolutions.com/goto/rail-shop?departurelocation={departurelocation}&departuredate={departuredate}&departuretime={departuretime}&returnlocation={returnlocation}&returndate={returndate}&returntime={returntime}
```

#### Example of Usage
```
https://eu2.concursolutions.com/goto/rail-shop?departuredate=2024-06-12&departuretime=15:00&returndate=2024-06-13&returntime=07:00&departurelocation=41.378696,2.140457&returnlocation=41.380057,2.138956
```

#### Query Parameters

| Name               | Type       | Format         | Description                                               |
| ------------------ | ---------- | -------------- | --------------------------------------------------------- |
| `departurelocation`| `string`   | [Location Format](/api-guides/travel/deeplink-integration.html#location-format-rail) | **Required** <br>Location where the train will depart |
| `departuredate`    | `string`   | `YYYY-MM-DD`   | **Required** <br>Date when the train will depart  |
| `departuretime`    | `string`   | `hh:mm`        | **Required** <br>Time when the train will depart <br>Utilizes 24-hour format|
| `returnlocation`   | `string`   | [Location Format](/api-guides/travel/deeplink-integration.html#location-format-rail) | **Required** <br>Location where the train will return <br> For one-way trips, this will be considered as the destination location |
| `returndate`       | `string`   | `YYYY-MM-DD`   | Date when the train will return |
| `returntime`       | `string`   | `hh:mm`        | Time when the train will return <br>Utilizes 24-hour format|

<a name="location-format-rail"></a>**Location Format**

* **Geographic Coordinates**: latitude and longitude for a geopoint  
Format: `{lat},{long}`, with no blank space inbetween. Example: `41.37891483977241,2.1398877111090844` for Barcelona-Sants. With these coordinates a search for train stations in a radius of 25 km is performed and the closest station is used in the train search


### Itinerary

Deeplink Integration allows users to lookup an itinerary in Concur Travel without having to manually navigate on the UI, providing instant access to detailed trip data.

The Deeplink only allows redirection to users authorized to view the itinerary. Authorized users are the traveler, a travel arranger or an approver. An approver user will see the approvers view of an itinerary, while the traveler and the arranger will see the travelers view of an itinerary.

This integration streamlines the user experience, making trip management more efficient and user-friendly. In the event of any errors encountered during redirection, users will be seamlessly redirected to the Concur home page.

#### URI Template

```
https://{environment}.concursolutions.com/goto/trip/{tripID}
```

| Name          | Type     | Format | Description                                                         |
| ------------- | -------- | ------ | ------------------------------------------------------------------- |
| `environment` | `string` | `-`    | **Required** <br>Specifies the environment (e.g. 'US2' or 'EU2')    |
| `tripID`      | `string` | `-`    | **Required** <br>Unique identifier of the trip, formatted as a UUID.|

This deep link URL facilitates accessing detailed trip information in SAP Concur solutions through either SSO or username/password authentication when launched from third-party applications, seamlessly directing users to the corresponding itinerary.

#### Example:
```
https://eu2.concursolutions.com/goto/trip/779a324d-6e1d-4fe8-8f98-9362be994766
```
