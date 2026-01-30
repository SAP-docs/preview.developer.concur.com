---
title: Groundspan - Trip Extras v4
layout: reference
---

# Groundspan - Trip Extras
{% include prerelease.html %}

## Introduction 
This document provides detailed information regarding the APIs and scopes that are used for the  Groundspan -Trip Extras features.

## Data Scope

### Grants read and write access to Event Topics  
This toggle allows Groundspan to subscribe to booking events and read the details of the booking (air + hotel). Groundspan uses this data to return personalized offers based on the traveler’s trip details.

#### Reference Documentation
| Name    |Description     | Link  |
|---------|----------------|-------|
| Event Subscription Service v4 | The Event Subscription Service (ESS) v4 is a publish/subscribe API that enables event-driven integrations within the SAP Concur platform. It allows clients and partners to receive real-time notifications when specific business or system events occur by delivering event payloads to configured web service endpoints. | https://developer.concur.com/api-reference/ess/v4.event-subscription.html |
| Concur Travel Booking Events  | The Concur Travel Booking Events API provides event notifications related to travel booking activities within SAP Concur. Subscribers receive events when users create, update, or manage travel bookings, enabling downstream systems to react automatically to travel-related actions. | https://preview.developer.concur.com/event-topics/travel/v4.travel-book-events.html |



### travel.trips.booking.read  
This toggle allows partners to read the details of the booking completed event payload

#### Reference documentation
| Name    |Description     | Link  |
|---------|----------------|-------|
| Concur Travel Booking Events  | The Concur Travel Booking Events API provides event notifications related to travel booking activities within SAP Concur. Subscribers receive events when users create, update, or manage travel bookings, enabling downstream systems to react automatically to travel-related actions. | https://preview.developer.concur.com/event-topics/travel/v4.travel-book-events.html |


### identity.user.event.read 
Groundspan uses the customers profile data to create a traveler profile in Groundspan. Profiled users can create, view, edit and cancel ground bookings in Groundspan, Profile events notify Groundspan of profile changes allowing Groundspan profiles to remain in sync with the Conur traveler profile. 

#### Reference Documentation
| Name | Description | Link |
|------|-------------|------|
| Identity Change Event | The Identity Change Event API delivers event notifications when user identity data changes within the SAP Concur platform. It publishes events for user profile creation, updates, and deletions, allowing subscribed systems to stay synchronized with identity and profile changes in near real time. | https://developer.concur.com/event-topics/profile/v4.identity-events.html |

### User Profile Data  
Groundspan uses the identity v4 identity API to retrieve the user name, traveler’s name, phone numbers, email addresses, and standard profile fields. The traveler’s name, phone numbers and email addresses are used to create the booking. Standard profile fields are used for UDF mapping when required by the company. The travel config ID is used to ensure the correct Groundspan discount code is applied to the travelers booking if the company has multiple discount codes.  

### Read user core data 

#### Reference Documentation 

| Name                 | Description         | Link       |
|----------------------|---------------------|------------|
| Identity v4          | The Identity v4 API provides operations to create, update, and retrieve a user’s core identity profile within the SAP Concur platform. It also enables clients to look up a user’s SAP Concur UUID, which is required to access other v4 APIs for individual users. | https://developer.concur.com/api-reference/profile/v4.identity.html |
| Identity v4 Scope Mapping | The Identity v4 Scope Mapping API defines the available authorization scopes and their corresponding permissions for Identity v4. It helps clients understand which scopes are required to access specific identity-related operations and data. | https://developer.concur.com/api-reference/profile/v4.scope-mapping.html |

### Read core sensitive data

#### Reference Documentation
| Name                 | Description         | Link       |
|----------------------|---------------------|------------|
| Identity v4          | The Identity v4 API provides operations to create, update, and retrieve a user’s core identity profile within the SAP Concur platform. It also enables clients to look up a user’s SAP Concur UUID, which is required to access other v4 APIs for individual users. | https://developer.concur.com/api-reference/profile/v4.identity.html |


### Read core enterprise data	
Groundspan uses the v4.travel-extension API to retrieve the rule class, custom fields and org unit. The rule class is used to determine whether the user is allowed to receiver offers from Groundspan. Custom fields and org unit are used for UDF mapping when required.  

#### Reference Documentation
| Name                 | Description         | Link       |
|----------------------|---------------------|------------|
| Identity v4          | The Identity v4 API provides operations to create, update, and retrieve a user’s core identity profile within the SAP Concur platform. It also enables clients to look up a user’s SAP Concur UUID, which is required to access other v4 APIs for individual users. | https://developer.concur.com/api-reference/profile/v4.identity.html |

### travel.user.general.read
Groundspan uses the v2.profile API to retrieve the configuration ID which is used to determine which Groundspan Discount Code is applicable (specifc for companies that have multiple discount codes).

#### Reference Documentation
| Name               | Description                | Link    |
|--------------------|----------------------------|---------|
| Travel Extension v4 | The Travel Extension v4 API provides access to Concur Travel–specific user attributes that are managed through User Provisioning v4. It allows clients and partners to retrieve and manage travel-related user data associated with a provisioned user within the SAP Concur platform. | https://developer.concur.com/api-reference/user-provisioning/travel/v4.travel-extension.html |


### Access Concur Travel Profile Information: 
Allows Groundspan to retrieve profile data for travel config Id which is needed to map travel config to the company‘s corporate discount code.

#### Reference Documentation
| Name                | Description         | Link          |
|---------------------|---------------------|---------------|
| Travel Profile v2 – Resource | The Travel Profile v2 API provides access to a user’s Concur Travel profile, which contains travel-related preferences and settings used during booking and travel management. It allows clients to retrieve and manage travel profile data associated with a user in the SAP Concur platform. | https://developer.concur.com/api-reference/travel-profile/v2.profile-resource.html |



#### TMC Specific Information 
Groundspan has access because of travel config Id but are not using any other information. 

#### Reference Documentation
| Name                | Description         | Link          |
|---------------------|---------------------|---------------|
| Travel Profile v2 – Resource | The Travel Profile v2 API provides access to a user’s Concur Travel profile, which contains travel-related preferences and settings used during booking and travel management. It allows clients to retrieve and manage travel profile data associated with a user in the SAP Concur platform. | https://developer.concur.com/api-reference/travel-profile/v2.profile-resource.html |

#### Post receipts on your behalf  
Not being used for early adoption, but will available for General Availability. 

#### Reference Documentation
| Name                 | Description                | Link                        |
|----------------------|----------------------------|-----------------------------|
| Receipts v4 – Get Started | The Receipts v4 API enables clients to upload and manage receipt information within the SAP Concur platform. It supports both data-rich electronic receipts (e-receipts) and image-only receipts, allowing receipt images, structured receipt data, or both to be stored and processed for expense reporting. | https://developer.concur.com/api-reference/receipts/get-started.html |



#### maestro.alerts.writeonly 
Allows Groundspan to return offers to Concur users. 

#### Reference Documentation
| Name             | Description            | Link               |
|------------------|------------------------|--------------------|
| Maestro v4 | The Maestro v4 API allows external partners to submit alert and notification payloads to SAP Concur products. These alerts are surfaced to users within the SAP Concur ecosystem, enabling timely in-app notifications driven by external systems. | https://preview.developer.concur.com/api-reference/common/maestro/v4.maestro.html |
| Maestro v4 – Ground Transportation | The Maestro v4 Ground Transportation API enables partners to deliver alerts related to ground transportation bookings. It supports sending booking confirmations, updates, and other transportation-related notifications to SAP Concur users. | https://preview.developer.concur.com/api-reference/common/maestro/ground-transportation.html |



#### Trip Extras booking 
Allows Groundspan to add, update or cancel a Groundspan booking in Concur Travel.  
travel.trips.read 

#### Reference Documentation
| Name             | Description            | Link               |
|------------------|------------------------|--------------------|
|Trip-extras|The Trip Extras API allows you to append, manage, and cancel extra bookings from external partners.|https://preview.developer.concur.com/api-reference/travel/itinerary/trip/trip-extras.html|

### travel.trips.booking.write 

#### Reference Documentation
| Name             | Description            | Link               |
|------------------|------------------------|--------------------|
|Trip-extras|The Trip Extras API allows you to append, manage, and cancel extra bookings from external partners.|https://preview.developer.concur.com/api-reference/travel/itinerary/trip/trip-extras.html|
