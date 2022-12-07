---
title: Base URIs
layout: reference
---

# Base URIs

## <a name="base"></a>What Is the Base URI?

The Base URI (also known as the Instance URL) is the domain where the SAP Concur platform entity resides. You must specify which location you are trying to work with by making a change to the end point declaration before you make your API call.

There will be a different domain for each of the following locations:

* Production in the North America data center, EMEA data center, China data center, and PSCC data center.
* Implementation (copy of the production environment not available for all clients) in the North America data center and EMEA data center.

### <a name="production"></a>Production

Customer entities are hosted in various locations based on the client location, government regulations, and other special requirements. As a result, the correct Base URI must be used to reach a particular entity.

Data Center|Environment|Base URI|Description
-----------|-----------|--------|-----------
US|Production|https://us.api.concursolutions.com |Default for all API calls (Optionally request certs).
US|Production|https://www-us.api.concursolutions.com |Default for all API calls (Does not request certs).
US2|Production|https://us2.api.concursolutions.com |Default for all API calls (Optionally request certs).
US2|Production|https://www-us2.api.concursolutions.com |Default for all API calls (Does not request certs).
EMEA|Production|https://emea.api.concursolutions.com |Default for all API calls (Optionally request certs).
EMEA|Production|https://www-emea.api.concursolutions.com |Default for all API calls (Does not request certs).
EU|Production|https://eu.api.concursolutions.com |Default for all API calls (Optionally request certs). Same as “EMEA."
EU|Production|https://www-eu.api.concursolutions.com |Default for all API calls (Does not request certs). Same as “EMEA.”
EU2|Production|https://eu2.api.concursolutions.com |Default for all API calls (Optionally request certs).
EU2|Production|https://www-eu2.api.concursolutions.com |Default for all API calls (Does not request certs).
China|Production|https://cn.api.concurcdc.cn |Default for all API calls (Optionally request certs).
China|Production|https://www-cn.api.concurcdc.cn |Default for all API calls (Does not request certs).
PSCC|Production|https://usg.api.concursolutions.com |Default for all API calls (Optionally request certs).
PSCC|Production|https://www-usg.api.concursolutions.com |Default for all API calls (Does not request certs).

### <a name="implementation"></a>Implementation

The implementation base domains are used for implementation sites, also known as Production Sandbox Environments (PSE). A PSE is a copy of an SAP Concur platform entity made from a backup of a client’s production site. This feature is only available for the Professional edition of SAP Concur products. Prior to 2022, PSEs had been hosted on the implementation base domain which is separate from production though now PSEs are in the same environment as production. 

>**Important**: Please note that Base URI may differ based on whether PSE client was migrated from Implementation to production environment.

* For migrated clients: 
  * Because the API credential had been created in Implementation and not updated after migration, customers by default must use the below Implementation-specific links for API calls which will automatically be redirected to production. If migrated clients perform a direct API call using production URLs as listed above, it will fail with an error like “invalid client id.” 
  * The recommendation for migrated clients is for teams to create a new set of API credentials in the production environments so that the client can use those in their host name (base URI) rather than retain Implementation URLs as the plan is to deprecate these below Implementation links in future. 
* For net new clients: 
  * Net new PSE clients can use the same URLs as their production entities for their API calls as listed in table above.

Data Center|Environment|Base URI|Description
-----------|-----------|--------|-----------
US|Implementation|https://us-impl.api.concursolutions.com |Default for all API calls (Optionally request certs).
US|Implementation|https://www-us-impl.api.concursolutions.com |Default for all API calls (Does not request certs).
EMEA|Implementation|https://emea-impl.api.concursolutions.com |Default for all API calls (Optionally request certs).
EMEA|Implementation|https://www-emea-impl.api.concursolutions.com |Default for all API calls (Does not request certs).

### <a name="deprecated"></a>Pre-2017 Legacy URIs (Deprecated)

The following base URIs have been used for APIs that are authenticating using the legacy [authentication method](/api-reference/authentication/authorization-pre-2017.html). The new base URIs have been adapted to become backwards compatible with the legacy authentication methods. As such, these legacy base URIs should not be used unless necessary. JWT calls are not compatible with the legacy base URIs.

To migrate to the current authentication method, review these resources:

* https://developer.concur.com/api-reference/authentication/migrationguide.html
* https://developer.concur.com/api-reference/authentication/oauth2-migration-best-practices.html

These URIs support the current authentication and the previous authentication simultaneously.

Data Center|Environment|Base URI|Description
-----------|-----------|--------|-----------
US|Production|https://www.concursolutions.com |Legacy URI for API calls using pre-2017 authentication for production entities in North America.
EMEA|Production|https://eu1.concursolutions.com |Legacy URI for API calls using pre-2017 authentication for production entities in Europe.
US|Implementation|https://implementation.concursolutions.com |Legacy URI for API calls using pre-2017 authentication for implementation entities in North America.
EMEA|Implementation|https://eu1imp.concursolutions.com |Legacy URI for API calls using pre-2017 authentication for implementation entities in Europe.
