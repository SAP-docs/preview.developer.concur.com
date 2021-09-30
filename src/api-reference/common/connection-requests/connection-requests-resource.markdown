---
title: Connection Requests v3.2
layout: reference
---
# Connection Requests v3.2

The Connection Requests resource is used to integrate TripLink partner applications with Concur. It can be used to create, update, and manage connections between a user's Concur account and a select travel loyalty program. With Connection Requests a TripLink partner application can retrieve new connection requests in order to match users who want to connect to the supplier with the user's account in the supplier system. After the request is retrieved, the supplier is expected to provide a status if the connection was successful or failed. When retrieving new connections, the results can be filtered by status, page offset, and a limit for the number of records to return.

In version 3.2, connection requests can also associate users to either loyalty programs, Concur verified e-mail addresses, or both of these factors. Concur verified emails are email addresses where a user has taken additional steps to confirm an email belongs to them by entering a verification code within the Concur UI after receiving this in their email. Verified emails have uniqueness across all user accounts in the Concur system.

The use of loyalty numbers and/or verified emails to identify users is based on the business agreement between Concur and the TripLink supplier and will be discussed during the TripLink integration kick-off process. Email or loyalty number will not be returned in the connection request if the supplier is not using these factors in their process to match a user in their system to a Concur user.

Our recommendation for suppliers is to match users requesting to connect utilizing last name and loyalty number only. Or in the case of suppliers without loyalty numbers to use verified email and the last name of the user only. The first name and middle name fields have proved to generate a high degree of failures when utilized due to issues like nicknames within the supplier systems.

* Connection Requests v3.0 is deprecated.
* Connection Requests v3.1 is deprecated.

## Retrieve all connection requests that match the TripLink supplier ID <a name="get"></a>

```
GET /api/v3.2/common/connectionrequests/
GET /api/v3.0/common/connectionrequests/  (deprecated)
GET /api/v3.1/common/connectionrequests/  (deprecated)
```


### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`offset`	|	``query``	|	``string``	|	The starting point of the next set of results, after the limit specified in the limit field has been reached. The default is the beginning of the page.
`limit`	|	``query``	|	``Int32``	|	The number of records to return. The default is 5 and the maximum is 10.
`status`	|	``query``	|	``string``	|	The status code representing the state of the connection request. The possible values are Pending, Processing, Connected, Failed, and Retry.



## Retrieve a connection request by ID <a name="getID"></a>

    GET  /api/v3.2/common/connectionrequests/{id}

    GET  /api/v3.0/common/connectionrequests/{id}  (deprecated)
    GET  /api/v3.1/common/connectionrequests/{id}  (deprecated)


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	``path``	|	``string``	|	**Required** The connection request ID.


## Create a connection request on behalf of a specific user <a name="post"></a>

    POST  /api/v3.2/common/connectionrequests/

    POST  /api/v3.0/common/connectionrequests/  (deprecated)
    POST  /api/v3.1/common/connectionrequests/  (deprecated)


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`user`	|	``query``	|	``string``	|	**Required** The login ID of the user for whom to create the connection request. The user must have the Web Services Admin role to use this parameter.


## Update a connection request <a name="put"></a>

    PUT  /api/v3.2/common/connectionrequests/{id}

    PUT  /api/v3.0/common/connectionrequests/{id}  (deprecated)
    PUT  /api/v3.1/common/connectionrequests/{id}  (deprecated)


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	``path``	|	``string``	|	**Required** The connection request ID.
`content`	|	``body``	|	-	|	**Required** The connection request object to update.

## Schema 3.2 <a name="schema32"></a>


### <a name="connectionrequests32"></a>Connection Requests

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	``array``	|	[Connection Request](#connectionrequest32)	|	The result collection.
`NextPage`	|	``string``	|		|	The URI of the next page of results, if any.


### <a name="connectionrequest32"></a>Connection Request

Name | Type | Format | Description
-----|------|--------|------------
`firstName`	|	``string``	|	-	|	The user's first name.
`ID`	|	``string``	|	-	|	The unique identifier of the resource.
`lastModified`	|	``string``	|	-	|	The date and time when the connection request was last modified. Format: UTC
`lastName`	|	``string``	|	-	|	The user's last name.
`loyaltyNumber`	|	``string``	|	-	|	The user's travel loyalty number.
`middleName`	|	``string``	|	-	|	The user's middle name.
`requestToken`	|	``string``	|	-	|	The request token.
`status`	|	``string``	|	-	|	The status code representing the state of the connection request.
`URI`	|	``string``	|	-	|	The URI to the resource.
`userId`	|	``string``	|	-	|	The unique identifier of the user.
`emailAddresses`	|	``UserEmailAddresses``	|	[User Email Addresses](#useremailaddresses32)	|	Email addresses associated with the user.


### <a name="useremailaddresses32"></a>User Email Addresses

Name | Type | Format | Description
-----|------|--------|------------
`email1`	|	``string``	|	-	|	The user's verified email address.
`email2`	|	``string``	|	-	|	The user's verified email address.
`email3`	|	``string``	|	-	|	The user's verified email address.
`email4`	|	``string``	|	-	|	The user's verified email address.
`email5`	|	``string``	|	-	|	The user's verified email address.


## Schema 3.0 (Deprecated) <a name="schema"></a>


### <a name="connectionrequests"></a>Connection Requests

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	``array``	|	[Connection Request](#connectionrequest)	|	The result collection.
`NextPage`	|	``string``	|		|	The URI of the next page of results, if any.


### <a name="connectionrequest"></a>Connection Request

Name | Type | Format | Description
-----|------|--------|------------
`FirstName`	|	``string``	|	-	|	The user's first name.
`ID`	|	``string``	|	-	|	The unique identifier of the resource.
`LastModified`	|	``string``	|	-	|	The date and time when the connection request was last modified. Format: UTC
`LastName`	|	``string``	|	-	|	The user's last name.
`LoyaltyNumber`	|	``string``	|	-	|	The user's travel loyalty number.
`MiddleName`	|	``string``	|	-	|	The user's middle name.
`RequestToken`	|	``string``	|	-	|	The request token.
`Status`	|	``string``	|	-	|	The status code representing the state of the connection request.
`URI`	|	``string``	|	-	|	The URI to the resource.

## Schema 3.1 (Deprecated) <a name="schema31"></a>


### <a name="connectionrequests31"></a>Connection Requests

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	``array``	|	[Connection Request](#connectionrequest31)	|	The result collection.
`NextPage`	|	``string``	|		|	The URI of the next page of results, if any.


### <a name="connectionrequest31"></a>Connection Request

Name | Type | Format | Description
-----|------|--------|------------
`FirstName`	|	``string``	|	-	|	The user's first name.
`ID`	|	``string``	|	-	|	The unique identifier of the resource.
`LastModified`	|	``string``	|	-	|	The date and time when the connection request was last modified. Format: UTC
`LastName`	|	``string``	|	-	|	The user's last name.
`LoyaltyNumber`	|	``string``	|	-	|	The user's travel loyalty number.
`MiddleName`	|	``string``	|	-	|	The user's middle name.
`RequestToken`	|	``string``	|	-	|	The request token.
`Status`	|	``string``	|	-	|	The status code representing the state of the connection request.
`URI`	|	``string``	|	-	|	The URI to the resource.
`EmailAddresses`	|	``UserEmailAddresses``	|	[User Email Addresses](#useremailaddresses)	|	Email addresses associated with the user.


### <a name="useremailaddresses"></a>User Email Addresses

Name | Type | Format | Description
-----|------|--------|------------
`Email1`	|	``string``	|	-	|	The user's verified email address.
`Email2`	|	``string``	|	-	|	The user's verified email address.
`Email3`	|	``string``	|	-	|	The user's verified email address.
`Email4`	|	``string``	|	-	|	The user's verified email address.
`Email5`	|	``string``	|	-	|	The user's verified email address.
