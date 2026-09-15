---
title: Opportunities
layout: reference
---

<div class="alert alert-danger">
  <p><strong>This API has been deprecated.</strong></p>
  <p>Deprecation Date: September 14, 2026</p>
  <p>Partners and customers using a deprecated API should contact SAP Concur and discuss moving to the latest versions.</p>
  <p>Learn more in the <a href="/tools-support/deprecation-policy.html">API Lifecycle & Deprecation Policy.</a></p>
</div>

# Opportunities

Retrieves a collection of opportunities for a specified trip or for all trips that fall within a date range.

### Version
3.0

## Limitations

Access to this documentation does not provide access to the API. 

## Retrieve all connection requests that match the TripLink supplier ID <a name="get"></a>

    GET  https://www.concursolutions.com/api/v3.0/insights/opportunities


### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`tripId	`|	`string`	|	`query`	|	The trip id
`opportunityType`	|	`string`	|	`query`	|	Comma seperated list of opportunities (Hotel, Car, Air, Rail, Taxi and Service) to get. Do not specify any values to get all opportunities
`fromUtc`	|	`DateTime`	|	`query`	|	The From date in UTC for the date range
`toUtc`	|	`DateTime`	|	`query`	|	The To date in UTC for the date range


## Schema <a name="schema"></a>


### <a name="opportunities"></a>Opportunities

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	`Array`	|	[Opportunity](#opportunity)	|	The result collection.
`NextPage`	|	`string`	|	-	|	The URI of the next page of results, if any.


### <a name="opportunity"></a>Opportunity

Name | Type | Format | Description
-----|------|--------|------------
`EndCityCode`	|	`string`	|	-	|	The city code of the destination city where the opportunity is offered
`EndDateLocal`	|	`DateTime`	|	-	|	The local end date of the location where the opportunity is offered
`EndPostalCode`	|	`string`	|	-	|	The postal code of the destination location where the opportunity is offered
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`IsActive`	|	`boolean`	|	-	|	Indicates that the opportunity is currently active
`StartCityCode`	|	`string`	|	-	|	The city code of the originating city where the opportunity is offered
`StartDateLocal`	|	`DateTime`	|	-	|	The local start date of the location where the opportunity is offered
`StartPostalCode	`|	`string`	|	-	|	The postal code of the originating location where the opportunity is offered
`TripId	`|	`string`	|	-	|	The trip id of the associated itinerary
`Type`	|	`string`	|	-	|	The type of opportunity. Possible values: 'Hotel', 'Car', 'Air', 'Rail', 'Taxi' or 'Service'
`URI`	|	`string`	|	-	|	The URI to the resource.					
