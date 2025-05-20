---
title: Deeplink Integration for Travel
layout: reference
---

# Deeplink Integration for Travel

The Deeplink Integration allows Concur Travel users to have direct access to the Shopping Results page (for a flight, car, hotel, or train search), respectively the itinerary page (for an itinerary deeplink) in one click.

## Prerequisites

Users must have an account in Concur Travel and they need to authenticate or be logged in. Authentication methods supported are username, password, and SSO SAML2.

The company must be part of the new Concur Travel.

## Limitations

When using SAML2 IdP-Initiated flow there is the caveat that IdP must support setting `relayState` with the encoded deeplink path. Example for SAP Cloud Identity Services (CIS):

```
{IdP_URI}?sp={concur_URI}&relayState=%2Fgoto%2Fair-shop%3Fdeparturedate%3D2023-11-10%26departureLocation%3DJFK%26returndate%3D2023-11-15%26returnlocation%3DLAX
```

> Deeplink Integration currently only supports flight, car, hotel, train search, and itinerary lookup.

## Integration Details

### Search

Deeplink Integration allows users to perform a search in Concur Travel without having to manually fulfill the information in the UI. Search parameters like location and time are incorporated in the URL.

In case of errors, the user is redirected to an error message page with a link to the Concur Travel home page from which a regular search can be started. 

### Itinerary

Deeplink Integration allows users to lookup an itinerary in Concur Travel without having to manually navigate on the UI, providing instant access to detailed trip data.

The deeplink only allows redirection to users authorized to view the itinerary. Authorized users are the traveler, a travel arranger, or an approver. An approver user will see the approver's view of an itinerary, while the traveler and the arranger will see the traveler's view of an itinerary.

This integration streamlines the user experience, making trip management more efficient and user-friendly. In the event of any errors encountered during redirection, users will be seamlessly redirected to the Concur Travel home page.

### <a name="single-sign-on"></a> Single Sign-On (SSO)

When a deeplink is shared with users from one company, add the query parameter `companyuuid` to the deeplink. This way users are automatically guided to the appropriate identity provider for SSO (if configured). If the deeplink is shared with users from different companies or SSO is not configured for them, don't add the query parameter `companyuuid`.

#### URI Template

```
https://www.concursolutions.com{path}?companyuuid={companyuuid}
```

#### General Example of Usage

```
https://www.concursolutions.com?companyuuid=1abc2345-6789-123d-45e6-f7a8b91cd2ef
```

#### Example of Usage including Deeplink Path and Additional Query Parameters

```
https://www.concursolutions.com/goto/air-shop?companyuuid=1abc2345-6789-123d-45e6-f7a8b91cd2ef&departurelocation=POA&departuredate=2024-12-04&returnlocation=SDU
```

#### Query Parameters

|Name         |Type    |Format|Description|
|-------------|--------|------|-----------|
|`companyuuid`|`string`|`UUID`|(Optional) <br> The unique identifier of a company, to which the user belongs.|

## Flight Search

Users can search for round-trip flights by entering a departure date, origin/departure airport, a return date and a destination/return airport. If searching for a one-way flight, they must enter the departure information and destination airport; however, they shouldn't provide a return date.

Users are able to **omit one** of the airports (departure or return) when they want to departure from or return to their home airport. For this, they need to have a preferred departure airport configured in their Travel Profile — under Air Travel Preferences, set **Preferred Departure Airport**. Or, they can select an airport while following the deeplink. In case the departure airport is missing in the deeplink, they also have the option to save the selected airport to the profile.

#### URI Template

```
https://www.concursolutions.com/goto/air-shop?departurelocation={departurelocation}&departuredate={departuredate}&departuretime={departuretime}&returnlocation={returnlocation}&returndate={returndate}&returntime={returntime}&cabintype={cabintype}&companyuuid={companyuuid}
```

#### Example of Usage
```
https://www.concursolutions.com/goto/air-shop?departurelocation=POA&departuredate=2024-08-04&departuretime=13:00&returnlocation=SDU&returndate=2024-08-20&returntime=09:00&cabintype=ECONOMY
```

#### Query Parameters

|Name               |Type    |Format                                                                             |Description|
|-------------------|--------|-----------------------------------------------------------------------------------|-----------|
|`departurelocation`|`string`|[Location Format](/api-guides/travel/deeplink-integration.html#location-format-air)|**Required if `returnlocation` is not informed** <br>Airport where the departure flight will take place.|
|`departuredate`    |`string`|`YYYY-MM-DD`                                                                       |**Required** <br>Departure flight date.|
|`departuretime`    |`string`|`hh:mm`                                                                            |(Optional) <br> Departure flight time in 24-hour format. Minutes are disregarded: `16:50` becomes `16:00`.|
|`returnlocation`   |`string`|[Location Format](/api-guides/travel/deeplink-integration.html#location-format-air)|**Required if `departurelocation` is not informed** <br>Airport where the return flight will take place. <br> For one-way trips, this will be considered as the destination airport, see [Example: One-way trip](/api-guides/travel/deeplink-integration.html#example-one-way).|
|`returndate`       |`string`|`YYYY-MM-DD`                                                                       |(Optional) <br> Return flight date.|
|`returntime`       |`string`|`hh:mm`                                                                            |(Optional) <br> Return flight time in 24-hour format. Minutes are disregarded: `16:50` becomes `16:00`.|
|`cabintype`        |`string`|[Cabin Types](/api-guides/travel/deeplink-integration.html#cabin-types)            |(Optional) <br> The section of the aircraft that the user wants to travel in.|
|`companyuuid`      |`string`|`UUID`                                                                             |(Optional) <br> The unique identifier of a company, to which the user belongs. Used for SSO, see [Single Sing-On](/api-guides/travel/deeplink-integration.html#single-sign-on).|

<a name="location-format-air"></a>**Location Format**

The airport can be identified in different ways:
* **IATA Code**: a three-letter code that represents the airport, for example, `LAX` for Los Angeles International Airport.
* **Geographic Coordinates**: latitude and longitude for a geopoint.  
Format: `{lat},{long}`, with no blank space in between. Example: `48.85694273527786,2.3501079080340315` for Paris. With these coordinates a search for airports in a radius of 100 km is performed and the closest airport is used in the flight search.

<a name="cabin-types"></a>**Cabin Types**

The supported cabin types are:
* `ECONOMY`
* `PREMIUM_ECONOMY`
* `BUSINESS_OR_FIRST`

#### Example: Round-Trip
```
https://www.concursolutions.com/goto/air-shop?departurelocation=OPO&departuredate=2024-06-01&departuretime=02:00&returnlocation=BER&returndate=2024-06-02&returntime=03:00&cabintype=BUSINESS_OR_FIRST
```

This deeplink will perform a search for a departure flight from OPO to BER airport, on June 1st, 2024, at 02:00AM ±2 and a return flight from BER to OPO, on June 2nd, 2024 at 03:00AM ±2. The search will bring flight offers in Business or First class.

#### <a name="example-one-way"></a> Example: One-way Trip
```
https://www.concursolutions.com/goto/air-shop?departurelocation=48.85694273527786,2.3501079080340315&departuredate=2024-06-01&departuretime=02:00&returnlocation=SDU
```

This deeplink will perform a search for a flight from LBG (airport in Paris) to SDU, on June 1st, 2024 with departure time at 02:00AM ±2.

#### Example: Omitting Departure or Return location

In this example, we are considering that the user has defined **LAX** as their preferred airport.

On the deeplink below the user is omitting the desired **departure location**. Therefore, they will be taken to the search results page, showing departure flights from LAX (preferred airport) to BER. The next page will show return flights, from BER back to LAX.
```
https://www.concursolutions.com/goto/air-shop?departuredate=2024-06-01&returnlocation=BER&returndate=2024-06-02
```

In this next example the user omitted `returnlocation`. This will result in a search for a flight from LBG (airport in Paris) to LAX.

```
https://www.concursolutions.com/goto/air-shop?departurelocation=48.85694273527786,2.3501079080340315&departuredate=2024-06-01
```

## Car Search

Users can search for cars by requesting a pickup date, time and location, a drop-off date, time and location. If pickup and drop-off location should be the same, the drop-off location can be omitted.

#### URI Template

```
https://www.concursolutions.com/goto/car-shop?pickuplocation={pickuplocation}&pickupdate={pickupdate}&pickuptime={pickuptime}&dropofflocation={dropofflocation}&dropoffdate={dropoffdate}&dropofftime={dropofftime}&companyuuid={companyuuid}
```

#### Example of Usage
```
https://www.concursolutions.com/goto/car-shop?pickuplocation=48.85694273527786,2.3501079080340315&pickupdate=2024-06-01&pickuptime=12:00&dropofflocation=50.035467,8.562884&dropoffdate=2024-06-02&dropofftime=18:00
```

#### Query Parameters

|Name             |Type    |Format                                                                             |Description|
|-----------------|--------|-----------------------------------------------------------------------------------|-----------|
|`pickuplocation` |`string`|[Location Format](/api-guides/travel/deeplink-integration.html#location-format-car)|**Required** <br>Location where the car will be picked up.|
|`pickupdate`     |`string`|`YYYY-MM-DD`                                                                       |**Required** <br>Date when the car will be picked up.|
|`pickuptime`     |`string`|`hh:mm`                                                                            |**Required** <br>Time when the car will be picked up. <br> Uses the 24-hour format.|
|`dropofflocation`|`string`|[Location Format](/api-guides/travel/deeplink-integration.html#location-format-car)|(Optional) <br> Location where the car will be dropped off. <br>If it is not provided, it will default to `pickuplocation`.|
|`dropoffdate`    |`string`|`YYYY-MM-DD`                                                                       |**Required** <br>Date when the car will be dropped off.|
|`dropofftime`    |`string`|`hh:mm`                                                                            |**Required** <br>Time when the car will be dropped off. <br>Uses the 24-hour format.|
|`companyuuid`    |`string`|`UUID`                                                                             |(Optional) <br> The unique identifier of a company, to which the user belongs. Used for SSO, see [Single Sing-On](/api-guides/travel/deeplink-integration.html#single-sign-on).|

<a name="location-format-car"></a>**Location Format**

* **Geographic Coordinates**: latitude and longitude for a geopoint.  
Format: `{lat},{long}`, with no blank space in between. Example: `50.038432519565845,8.562138820315441` for Frankfurt airport. With these coordinates, a search for a location in a radius of 10 km is performed and the closest location is used in the car search.


## Hotel Search

Users can search for hotels in a certain distance around the location by informing a check-in and checkout date, search center location, a distance around the location and a unit for the distance.

Users are able to **omit** the unit or distance or both when they want to use default values. Omitting the distance will default to a distance of 5mi. Omitting the unit will default to the value set in their Travel Profile — under Profile Settings, System Settings, **mile/km**.

#### URI Template

```
https://www.concursolutions.com/goto/hotel-shop?checkindate={checkindate}&checkoutdate={checkoutdate}&location={location}&locationsource={locationsource}&distance={distance}&unit={unit}&companyuuid={companyuuid}
```

#### Example of Usage
```
https://www.concursolutions.com/goto/hotel-shop?checkindate=2024-08-01&checkoutdate=2024-08-02&location=50.050686,8.565997&distance=15&unit=mi
```

#### Query Parameters

|Name            |Type     |Format                                                                                                                                             |Description|
|----------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
|`checkindate`   |`string` |`YYYY-MM-DD`                                                                                                                                       |**Required** <br>Date when to check in to the hotel.|
|`checkoutdate`  |`string` |`YYYY-MM-DD`                                                                                                                                       |**Required** <br>Date when to check out of the hotel.|
|`location`      |`string` |[Location Format](/api-guides/travel/deeplink-integration.html#location-format-hotel)                                                              |**Required** <br>Location of the search center.|
|`locationsource`|`string` |one of {`northstar`, `giata`, `leonardo`, `amadeus`, `sabre`, `galileo`, `cwt`, `expedia`, `hrs`, `booking.com`, `omnibees`}                       |**Required if location is a Hotel Property ID**. <br>Source of the Hotel Property ID. For geo-coordinates and Concur Travel Internal Hotel ID, omit this query parameter.|
|`distance`      |`integer`|one of {`1`, `2`, `3`, `4`, `5`, `10`, `15`, `20`, `25`, `30`, `35`, `40`, `45`, `50`, `55`, `60`, `65`, `70`, `75`, `80`, `85`, `90`, `95`, `100`}|(Optional) <br> Distance around the `location`. <br>If not set, it will default to 5 mi `distance` and `radius` as search radius.|
|`unit`          |`string` |`km` or `mi`                                                                                                                                       |(Optional) <br> Unit for the `distance`. <br>If not set, the value will be taken from users profile - under Profile Settings, System Settings, **mile/km**.|
|`companyuuid`   |`string` |`UUID`                                                                                                                                             |(Optional) <br> The unique identifier of a company, to which the user belongs. Used for SSO, see [Single Sing-On](/api-guides/travel/deeplink-integration.html#single-sign-on).|

<a name="location-format-hotel"></a>**Location Format**

The hotel location can be informed in different ways:
* **Hotel Property ID**: Hotel property ID provided by one of the following sources: `northstar`, `giata`, `leonardo`, `amadeus`, `sabre`, `galileo`, `cwt`, `expedia`, `hrs`, `booking.com`, `omnibees`. See the documentation of [Direct Connect - Hotel Service](https://developer.concur.com/api-reference/direct-connects/hotel-service-4/v4.schemas.html#-hotelproperty). Format: alpha-numeric string. Example: `TLLAX308` from amadeus or `56521` from booking.com for Travelodge LAX South in El Segundo, CA. With this Hotel Property ID, a search for hotels is performed and the hotel corresponding to the ID is highlighted at top of the search results. The Hotel Property ID value is case sensitive and should be exactly as given by the source.
* **Geographic Coordinates**: latitude and longitude for a geopoint. 
Format: `{lat},{long}`, with no blank space in between. Example: `48.85694273527786,2.3501079080340315` for Paris. With these coordinates, a search for hotels in a radius of `distance` `unit` is performed.
* **Concur Travel Internal Hotel ID**: Concur Travel internal ID of a hotel.  
Format: alpha-numeric string. Example: `1907825ad1f728ccafb22942d61a2715` for Econo Lodge Inn & Suites in Arkansas. With this internal ID, a search for hotels is performed and the hotel corresponding to the ID is highlighted at top of the search results. <br>The internal hotel ID should only be used inside of Concur Travel, for example, Concur Travel MS Teams integration.

#### Example: Hotel Property ID location
```
https://www.concursolutions.com/goto/hotel-shop?checkindate=2024-11-02&checkoutdate=2024-11-03&location=708752&locationsource=hrs
```

This deeplink will perform a search for the hotel Travelodge LAX South in El Segundo (CA) and hotels nearby in the 5 mi default radius, with check-in date on November 2nd, 2024 and checkout date on November 3rd, 2024. It uses the Hotel Property ID from HRS as location.

#### Example: Concur Travel Internal Hotel ID location
```
https://www.concursolutions.com/goto/hotel-shop?checkindate=2024-11-02&checkoutdate=2024-11-03&location=1907825ad1f728ccafb22942d61a2715
```

This deeplink will perform a search for the hotel Econo Lodge Inn & Suites in Arkansas and hotels nearby in the 5 mi default radius, with check-in date on November 2nd, 2024 and checkout date on November 3rd, 2024. It uses a Concur Travel Internal Hotel ID as location.


## Add Hotel to Existing Trip

Users are able to provide a trip ID in a hotel deeplink and omit the check-in and check-out dates. Then the hotel search and subsequent hotel booking will be part of the specified trip, instead of a separate new trip.
If only a trip ID is provided without a specific location, the user will end up on the hotel search page with pre-filled search criteria based on the trip's bookings.

If in addition to the trip ID a specific location is provided, the user will directly get to the search results based on this location.

The check-in and check-out dates are taken over from the arrival of the first air booking and the departure of the last air booking of the specified trip. In case of a one-way flight the check-out date is taken over from the trip end date. If the trip contains no air booking then the trip start and end dates are used.


#### URI Template

```
https://www.concursolutions.com/goto/hotel-shop?tripid={tripid}&location={location}&locationsource={locationsource}&distance={distance}&unit={unit}&companyuuid={companyuuid}
```

#### Example of Usage
```
https://www.concursolutions.com/goto/hotel-shop?tripid=9be19dda-bf33-4110-ac48-bf840878cd3c&location=50.050686,8.565997&distance=15&unit=mi
```

#### Query Parameters

|Name            |Type     |Format                                                                                                                                             |Description|
|----------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
|`tripid`        |`string` |`UUID`                                                                                                                                             |**Required** <br>Unique identifier of the trip, formatted as a UUID.|
|`location`      |`string` |[Location Format](/api-guides/travel/deeplink-integration.html#location-format-hotel)                                                              |(Optional) <br>Location of the search center with default search radius of 5 mi.|
|`locationsource`|`string` |one of {`northstar`, `giata`, `leonardo`, `amadeus`, `sabre`, `galileo`, `cwt`, `expedia`, `hrs`, `booking.com`, `omnibees`}                       |**Required if location is provided and is a Hotel Property ID**. <br>Source of the Hotel Property ID. For geo-coordinates and Concur Travel Internal Hotel ID, omit this query parameter.|
|`distance`      |`integer`|one of {`1`, `2`, `3`, `4`, `5`, `10`, `15`, `20`, `25`, `30`, `35`, `40`, `45`, `50`, `55`, `60`, `65`, `70`, `75`, `80`, `85`, `90`, `95`, `100`}|(Optional) <br> Distance around the `location`. <br>If not set, it will default to 5 mi `distance` and `radius` as search radius.|
|`unit`          |`string` |`km` or `mi`                                                                                                                                       |(Optional) <br> Unit for the `distance`. <br>If not set, the value will be taken from users profile - under Profile Settings, System Settings, **mile/km**.|
|`companyuuid`   |`string`|`UUID`                                                                                                                                              |(Optional) <br> The unique identifier of a company, to which the user belongs. Used for SSO, see [Single Sing-On](/api-guides/travel/deeplink-integration.html#single-sign-on).|

#### <a name="example-add-to-trip"></a> Example: Only trip ID
```
https://www.concursolutions.com/goto/hotel-shop?tripid=a7f172cd-8587-48d5-8533-5ddb7ff5c26c
```

This deeplink will redirect the user to the hotel search form to add a booking to the trip with id `a7f172cd-8587-48d5-8533-5ddb7ff5c26c`. Search proposals based on the content of the trip are available in the search form.


#### <a name="example-add-to-trip-hotel-property-id"></a> Example: Hotel Property ID location
```
https://www.concursolutions.com/goto/hotel-shop?tripid=a7f172cd-8587-48d5-8533-5ddb7ff5c26c&location=708752&locationsource=hrs
```

This deeplink will perform a search for the hotel Travelodge LAX South in El Segundo (CA) and hotels nearby in the 5 mi default radius. It uses the Hotel Property ID from HRS as location. The check-in and check-out dates are taken from the corresponding trip with trip ID `a7f172cd-8587-48d5-8533-5ddb7ff5c26c`. Either the trip contains air bookings, then the arrival date of the first flight will be used as check-in date for the hotel search and the departure date of the last flight will be used as check-out date, or the trip start and end dates will be used as check-in and check-out dates, respectively. The user will get directly to the search results.

## Train Search

Users can search for train round-trips by informing a departure date, time and location, a return date, time and destination/return location. If searching for a train one-way trip, they must inform departure information and destination location; however, they shouldn't provide a return date or time.

#### URI Template

```
https://www.concursolutions.com/goto/rail-shop?departurelocation={departurelocation}&departuredate={departuredate}&departuretime={departuretime}&returnlocation={returnlocation}&returndate={returndate}&returntime={returntime}&companyuuid={companyuuid}
```

#### Example of Usage
```
https://www.concursolutions.com/goto/rail-shop?departuredate=2024-06-12&departuretime=15:00&returndate=2024-06-13&returntime=07:00&departurelocation=41.378696,2.140457&returnlocation=41.380057,2.138956
```

#### Query Parameters

|Name               |Type    |Format                                                                              |Description|
|-------------------|--------|------------------------------------------------------------------------------------|-----------|
|`departurelocation`|`string`|[Location Format](/api-guides/travel/deeplink-integration.html#location-format-rail)|**Required** <br>Location where the train will depart from.|
|`departuredate`    |`string`|`YYYY-MM-DD`                                                                        |**Required** <br>Date when the train will depart.|
|`departuretime`    |`string`|`hh:mm`                                                                             |**Required** <br>Time when the train will depart. <br>Uses the 24-hour format.|
|`returnlocation`   |`string`|[Location Format](/api-guides/travel/deeplink-integration.html#location-format-rail)|**Required** <br>Location where the train will return to. <br> For one-way trips, this will be considered as the destination location.|
|`returndate`       |`string`|`YYYY-MM-DD`                                                                        |(Optional) <br> Date when the train will return.|
|`returntime`       |`string`|`hh:mm`                                                                             |(Optional) <br> Time when the train will return. <br>Uses the 24-hour format.|
|`companyuuid`      |`string`|`UUID`                                                                              |(Optional) <br> The unique identifier of a company, to which the user belongs. Used for SSO, see [Single Sing-On](/api-guides/travel/deeplink-integration.html#single-sign-on).|

<a name="location-format-rail"></a>**Location Format**

* **Geographic Coordinates**: latitude and longitude for a geopoint.  
Format: `{lat},{long}`, with no blank space in between. Example: `41.37891483977241,2.1398877111090844` for Barcelona-Sants. With these coordinates a search for train stations in a radius of 25 km is performed and the closest station is used in the train search.

## Troubleshooting

Possible scenarios:

| # |Issue                                                                       |Error message                                                                   |Possible solution|
|---|----------------------------------------------------------------------------|--------------------------------------------------------------------------------|-----------------|
|1. |Single-Sign On (SSO) not working                                            | -                                                                              |Remove the query parameter [`companyuuid`](/api-guides/travel/deeplink-integration.html#single-sign-on) and it's value from your deeplink and set instead the query parameter `username`. As value use the SSO code of the company, to which the user belongs. The Concur internal SSO code ID for a company can be received by Concur Support from the Profile. <br> - URI Template: `https://www.concursolutions.com{path}?username={username}` <br> - General Example of Usage: `https://www.concursolutions.com?username=11A1AA` <br> - Example of Usage including Deeplink Path and Additional Query Parameters: `https://www.concursolutions.com/goto/air-shop?username=11A1AA&departurelocation=POA&departuredate=2025-02-04&returnlocation=SDU`|
|2. |User doesn't have access to Concur Travel                                   |*"Sorry, you don't have the right permissions to shop travel"*                  |Contact your company admin to enable Concur Travel for your user. This will only work if your company purchased Concur Travel.|
|3. |User is not setup for new Concur Travel or this specific segment type       |*"Sorry, you don't have the right permissions to use this feature"*             |Contact your company admin to enable new Concur Travel for the segment type, which is specified in the deeplink. For example, if a car deeplink isn't working, make sure to be eligible and enabled to use the new Concur Travel car. Deeplinks are not supported in the legacy experience of Concur Travel.|
|4. |Invalid search input                                                        |*"The link you followed to start your travel search was not properly formatted"*|Make sure there are no typos in your deeplink. Check that the query parameter values are properly formatted, all required parameters are set and the dates are in the future.|
|4.a.| Invalid search dates                                                      |- *"Sorry, the dates included in the request are in the past"* <br> - *"Sorry, your start date is after your end date"* <br> - *"Sorry, your hotel check-in and check-out dates cannot be the same date"*              |Double check the dates in your deeplink. They should be in the future, the start date should be before or the same as the end date, and in case of a hotel deeplink the start and end date need to be different from each other.|
|5. |Invalid Hotel Property ID                                                   |*"The property requested was not found"*                                        |In a hotel deeplink check that the Hotel Property ID belongs to the specified `locationsource` and that there are no typos in the values. The Hotel Property ID needs to be exactly the same as defined in the source.|
|6. |No search results                                                           |*"No offers found for your search criteria"*                                    |Depending on the segment type, try to extend the time intervals, date ranges or location radius of your search. If applicable, double check your geo-coordinates and choose them as close to the desired location as possible. Maybe the next airport is farther away from the specified geo-coordinates than the default 100km search radius in an air deeplink. Contact your travel admin to figure out if the required vendor is enabled for the route you are searching for. Maybe only a Spanish train vendor like Renfe is configured for your company, but the train deeplink is pointing to a connection in Germany e.g. Berlin to Munich. In case of a hotel deeplink with Hotel Property ID as location, make sure that the `locationsource` is set. Otherwise, the location will be treated as a Concur Travel Internal Hotel ID.|
|7. |General error following a deeplink                                          |*"Sorry, something went wrong while we were getting your travel options"*       |Try again later and make sure the deeplink is properly formatted as described in scenario 3 above and the dates are in the future.|

If the previous steps didn't solve the issue, go to the Concur Travel home page and start a search from there by entering the search criteria yourself.

## Itinerary

Deeplink Integration allows users to look up an itinerary in Concur Travel without having to manually navigate the UI, providing instant access to detailed trip data.

The deeplink only allows redirection to users authorized to view the itinerary. Authorized users are the traveler, a travel arranger, or an approver. An approver user will see the approver's view of an itinerary, while the traveler and the arranger will see the traveler's view of an itinerary.

This integration streamlines the user experience, making trip management more efficient and user-friendly. In the event of any errors encountered during redirection, users will be seamlessly redirected to the Concur Travel home page.

The deeplink requires the trip uuid, which will be soon available in the PNR.

#### URI Template

```
https://www.concursolutions.com/goto/trip/{tripid}?companyuuid={companyuuid}
```

|Name    |Type    |Format|Description|
|--------|--------|------|-----------|
|`tripid`|`string`|`UUID`|**Required** <br>Unique identifier of the trip, formatted as a UUID.|
|`companyuuid`|`string`|`UUID`|(Optional) <br> The unique identifier of a company, to which the user belongs. Used for SSO, see [Single Sing-On](/api-guides/travel/deeplink-integration.html#single-sign-on).|

This deeplink URL facilitates accessing detailed trip information in SAP Concur solutions through either SSO or username/password authentication when launched from third-party applications, seamlessly redirecting users to the corresponding itinerary.

#### Example:
```
https://www.concursolutions.com/goto/trip/779a324d-6e1d-4fe8-8f98-9362be994766
```
