
## Travel Profile v2


The Travel Profile service consists of a set of resources that provide travel profile functionality customized in specific ways for developers, travel suppliers, and travel management companies (TMCs).

#### [Profile v2](#travel-profile-v2-resource)

These web services can be used to retrieve travel profile information for a specified user, or a list of travel profile summaries.

Available to Developers, travel suppliers, and TMCs.

#### [Loyalty Program v1](#travel-profile-v1-loyalty-program)

This web service can be used to update loyalty information for the user as entered in Concur.

Available to Travel suppliers and TMCs.

#### [Company Notification v1](#travel-profile-v1-company-notification)

A subscription to a notification when any user in the Concur company changes the specified features of their Concur account or data. Currently supports notifications for the following events: Itinerary change (create or update), Travel Profile basic information change. To obtain notifications, the Concur users must grant access to their travel profile using the [Web authorization flow](#pre-2017-authorization-deprecated).

Available to Travel suppliers.

#### [User Notification v1](#travel-profile-v1-user-notification)

A subscription to a notification when the Concur user changes the specified features of their Concur account or data. Currently supports notifications for the following events: Itinerary change (create or update), or Travel Profile basic information change. This functionality is restricted to Travel Suppliers or TMCs (Travel Management Companies) who have registered with Concur. To obtain notifications, the Concur users must grant access to their travel profile using the [Web authorization flow](#pre-2017-authorization-deprecated).

Available to Travel suppliers.

####  Configuration

Travel supplier or TMC partner applications must complete the [Concur application review process](/manage-apps/app-certification.html) before they can access production user data. Suppliers can only update Loyalty Program information for the programs that they manage. TMCs can access all the user's Travel Profile data, regardless of vendor.
