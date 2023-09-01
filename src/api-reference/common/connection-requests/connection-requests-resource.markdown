---
title: Connection Requests v3.2
layout: reference
---

A Connection Request is an object representing the willingness of an SAP Concur user to connect with a specific TripLink partner. Connection Requests are created by users, while TripLink partners should poll for them. Connection Requests contain the following information, which can be used by the TripLink partner to link users to their loyalty program:

* Information identifying the user, which partners will use to match with their loyalty programs.
* A **request token** that partners should use as credentials to exchange for an **access token**, which in turn grants them access to post bookings on behalf of the user.

## Limitations

Access to this documentation does not provide access to the API.

## <a name="connection-request-lifecycle"></a>Connection Request Lifecycle

After retrieving Connection Requests as part of a polling process, the partner is expected to match the user information with that of their own database. Upon a successful match, the partner is expected to exchange each request token contained in each Connection Request for an access token. The partner is also expected to put back a status indicating if the connection could be established, for each Connection Request. In case a failure state is put back, the Connection Request will be returned in future polls for retrial (see the diagram below for details).

![Supplier flow](./supplier-flow.png)

## Retrieve Connection Requests

This method returns a page of Connection Requests to the partner app, limited by the `limit` request parameter and the beginning of the page defined by the `offset` request parameter. The response also includes an URL containing the `offset` to the next page of Connection Requests.

The polling process can be viewed as peeking `limit` elements from the queue of available CRs, starting at position `offset` from the queue, while the subsequent processing of these elements (the PUT request) can be viewed as popping them from the queue. Notice that because of the paginated nature of the request, if GET and PUT requests are interleaved, then subsequent GET requests should account for the fact that the Connection Requests that have been PUT back are no longer part of the set of available Connection Requests, affecting the `offset` value. In other words, PUT can be seen as popping from the left of the queue. See examples, below, for more detail.

### Request

```
GET /api/v3.2/common/connectionrequests/
```

### Parameters


Name|Type|Format|Description
---|---|---|---
`limit`|`query`|`integer`|The number of records to return. The default is 5 and the maximum is 10.
`offset`|`query`|`integer`|The starting point of the set of results. The default is the first page, which is equivalent to the value 0.

### Response

The response format is controlled by the request Accept header. Available formats are XML and JSON. If no Accept header is supplied, XML is returned for backward compatibility. We recommend working with JSON if possible.

The `NextPage` attribute returns the URI of the next page results, if any. In case there are no more Connection Requests available at the moment, the value of this attribute will be `NULL`. Using this URI to make a new request, the return value will be the next page results. In this URI, the `limit` parameter will be the same of the previous request and the `offset` parameter will define the starting point of the next page.

Name|Type|Format|Description
---|---|---|---
`Connection Requests`|`body`|[Connection Requests](#connection-requests)|The Connection Requests page.

### Example

```
curl \
  -X GET \
  -H "Authorization: Bearer $JWT" \
  "https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/?limit=2"

<ConnectionRequests xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><Items><ConnectionRequest><ID>444f5142-2e5a-4ab9-9aad-da916af6fcd7</ID><URI>https://us.concursolutions.com/api/v3.2/common/connectionrequests/44f5142-2e5a-4ab9-9aad-da916af6fcd7</URI><firstName>First</firstName><middleName xsi:nil="true" /><lastName>Last</lastName><loyaltyNumber>1234</loyaltyNumber><status>Pending</status><requestToken>token-string</requestToken><lastModified>2022-11-02T09:39:21</lastModified><emailAddresses><email1>example1@example.com</email1><email2>example2@example.com</email2><email3>example3@example.com</email3><email4 xsi:nil="true" /><email5 xsi:nil="true" /></emailAddresses><userId>b244a439-a082-4405-b0d7-2e61ebf9e29c</userId></ConnectionRequest><ConnectionRequest><ID>5d2804fb-111b-44a8-98bb-56e387875aed</ID><URI>https://us.concursolutions.com/api/v3.2/common/connectionrequests/5d2804fb-111b-44a8-98bb-56e387875aed</URI><firstName>First2</firstName><middleName xsi:nil="true" /><lastName>Last2</lastName><loyaltyNumber>4321</loyaltyNumber><status>Pending</status><requestToken>token-string</requestToken><lastModified>2022-11-09T05:57:29</lastModified><emailAddresses><email1>example@example.com</email1><email2 xsi:nil="true" /><email3 xsi:nil="true" /><email4 xsi:nil="true" /><email5 xsi:nil="true" /></emailAddresses><userId>eb3f9170-0fb8-47b4-9c4c-8fd19dfddb8f</userId></ConnectionRequest></Items><NextPage>https://us.concursolutions.com/api/v3.2/common/connectionrequests/?limit=2&offset=2</NextPage></ConnectionRequests>

curl \
  -X GET \
  -H "Authorization: Bearer $JWT" \
  -H 'Accept: application/json' \
  "https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/?limit=2&offset=2"

{"Items":[{"firstName":"FirstName","middleName":null,"lastName":"LastName","loyaltyNumber":"0123","status":"Pending","requestToken":"token-string","lastModified":"2022-11-09T05:57:29","emailAddresses":{"email1":null,"email2":null,"email3":null,"email4":null,"email5":null},"userId":"71ff9cf8-0593-4620-ba6c-145509164ba0","ID":"e8a3c057-bb9b-421e-85fb-06777bce54d3","URI":"https://integration.concursolutions.com/api/v3.2/common/connectionrequests/e8a3c057-bb9b-421e-85fb-06777bce54d3"},{"firstName":"Example","middleName":null,"lastName":"Example","loyaltyNumber":"54321","status":"Pending","requestToken":"token-string","lastModified":"2022-11-09T05:57:29","emailAddresses":{"email1":null,"email2":null,"email3":null,"email4":null,"email5":null},"userId":"7dcd5a6e-1f26-49b3-a7a6-7374618ac519","ID":"3357c50d-2cac-4123-9f7e-9ad41166484e","URI":"https://integration.concursolutions.com/api/v3.2/common/connectionrequests/3357c50d-2cac-4123-9f7e-9ad41166484e"}],"NextPage":"https://integration.concursolutions.com/api/v3.2/common/connectionrequests/?limit=2&offset=4"}
```

Below some example scenarios are provided.

#### Scenario 1: GET everything then PUT

Given 35 Connection Requests initially available:

1. GET with `limit=10` returns 10 elements and `NextPage` containing `offset=10`
1. GET with `limit=10&offset=10` returns 10 elements and `NextPage` containing `offset=20`
1. GET with `limit=10&offset=20` returns 10 elements and `NextPage` containing `offset=30`
1. GET with `limit=10&offset=30` returns 5 elements and null `NextPage`
1. PUT is issued for all 35 elements that have been retrieved
1. Subsequent GETs return no Connection Requests until a new one becomes available.

Notice that in this scenario the initial GET request does not include an `offset` paramter (which is equivalent to including `offset=0`), while subsequent GET requests use the `NextPage` URL which includes the `offset` to the next page. Finally, all returned elements receive a PUT.

#### Scenario 2: Interleaving GET and PUT

Given 35 Connection Requests initially available:

1. GET with `limit=10` returns 10 elements and `NextPage` containing `offset=10`
1. PUT is issued for all 10 elements
1. GET with `limit=10` returns 10 elements and `NextPage` containing `offset=10`
1. PUT is issued for all 10 elements
1. GET with `limit=10` returns 10 elements and `NextPage` containing `offset=10`
1. PUT is issued for all 10 elements
1. GET with `limit=10` returns 5 elements and null `NextPage`
1. PUT is issued for all 5 elements
1. Subsequent GETs return no Connection Requests until a new one becomes available.

Notice that in this scenario `offset` is never supplied as a parameter for the GET request becausse the previous PUT already popped the returned elements from the left of the queue (supplying an offset of 10 as returned in `NextPage` would skip the new 10 elements that were shifted left by the PUT).

## Update a Connection Request

This method updates the status of a connection request.

### Request

```
PUT  /api/v3.2/common/connectionrequests/{id}
```

### Parameters

Name|Type|Format|Description
---|---|---|---
`id`|`path`|`string`|**Required** The connection request ID.
`status`|`body`|[Connection Status](#connection-status)|**Required** The connection status to be set.

### Response

No content.

### Example

```
curl \
  -X PUT \
  -H "Authorization: Bearer $JWT" \
  -H 'Content-Type: application/json' \
  --data '{"status": "CRSUC"}' \
  "https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/$ID"
< HTTP/1.1 204 No Content
```

## Schema

### <a name="connection-status"></a>Connection Status

The status of the connection as indicated by the partner. Both the successful (`CRSUC`) and error statuses (`CREU1`, `CREU2`, `CREU3`) generate email notifications to the user when PUT back by the partner. This lets the user know they can already book with the partner in case of success, or, in case of error, that they need to check the loyalty account information they supplied. In case of error, the Connection Request is requeued (returned in future GETs) after 24 hours. This can be done 4 times, after that the Connection Request is set with an error status and is not returned in future GETs. Finally, the `CRRET` status does not generate an email notification to the user, it's intended purpose is to requeue a Connection Request (after 1 hour) for another processing attempt by the supplier to retry the connection. This can be done at most 48 times, after that the Connection Request is set with an error status and is not returned in future GETs.


Name|Type|Format|Description
---|---|---|---
`CRSUC`|`string`|-|Successful connection.
`CRRET`|`string`|-|Retry connection.
`CREU1`|`string`|-|Loyalty account not found.
`CREU2`|`string`|-|Loyalty account does not match.
`CREU3`|`string`|-|Loyalty account needs attention.

### <a name="connection-requests"></a>Connection Requests

Name|Type|Format|Description
---|---|---|---
`Items`|`array`|[Connection Request](#connection-request)|The result collection.
`NextPage`|`string`|-|The URI of the next page of results, if any. (deprecated in v3.2)

### <a name="connection-request"></a>Connection Request

Name|Type|Format|Description
---|---|---|---
`firstName`|`string`|-|The user’s first name.
`ID`|`string`|-|The unique identifier of the resource.
`lastModified`|`string`|-|The date and time when the connection request was last modified. Format: UTC
`lastName`|`string`|-|The user’s last name.
`loyaltyNumber`|`string`|-|The user’s loyalty number from the TripLink partner’s travel loyalty program.
`middleName`|`string`|-|The user’s middle name.
`requestToken`|`string`|-|The request token.
`status`|`string`|-|The state of the connection request. It is always "Pending" when you GET.
`URI`|`string`|-|The URI to the resource.
`userId`|`string`|-|The unique identifier of the user.
`emailAddresses`|`object`|[User Email Addresses](#user-email-addresses)|Email addresses associated with the user.

### <a name="user-email-addresses"></a>User Email Addresses

Name|Type|Format|Description
---|---|---|---
`email1`|`string`|-|The user’s verified email address.
`email2`|`string`|-|The user’s verified email address.
`email3`|`string`|-|The user’s verified email address.
`email4`|`string`|-|The user’s verified email address.
`email5`|`string`|-|The user’s verified email address.

## Testing and Partner Certification

This section describes API methods useful for testing purposes only. These can be used during partner certification, but have no production usage.

## Retrieve a Connection Request by ID

This method returns the specified connection request. This is useful for testing purposes only. The partner is not expected to put back a status in this case, and should poll using the method described in previous sections.

```
GET  /api/v3.2/common/connectionrequests/{id}
```

### Parameters

Name|Type|Format|Description
---|---|---|---
`id`|`path`|`string`|**Required** The connection request ID.

### Response

The response format is controlled by the request Accept header. Available formats are XML (default) and JSON.

Name|Type|Format|Description
---|---|---|---
`Connection Request`|`body`|[Connection Request](#connection-request) The Connection Request

### Example

```
curl \
  -X GET \
  -H "Authorization: Bearer $JWT" \
  "https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/b65b5215-dd36-43d0-a178-39356630320e"

<ConnectionRequest xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><ID>b65b5215-dd36-43d0-a178-39356630320e</ID><URI>https://us.concursolutions.com/api/v3.2/common/connectionrequests/b65b5215-dd36-43d0-a178-39356630320e</URI><firstName>First</firstName><middleName xsi:nil="true" /><lastName>Last</lastName><loyaltyNumber>1234</loyaltyNumber><status>Pending</status><requestToken>token-string</requestToken><lastModified>2022-11-17T09:00:25</lastModified><emailAddresses><email1>example@example.com</email1><email2 xsi:nil="true" /><email3 xsi:nil="true" /><email4 xsi:nil="true" /><email5 xsi:nil="true" /></emailAddresses><userId>4c816ce0-ea35-4664-8937-0c2952dfc742</userId></ConnectionRequest>
curl \
  -X GET \
  -H "Authorization: Bearer $JWT" \
  -H 'Accept: application/json' \
  "https://us.api.concursolutions.com/api/v3.2/common/connectionrequests/b65b5215-dd36-43d0-a178-39356630320e"

{"firstName":"First","middleName":null,"lastName":"Last","loyaltyNumber":"1234","status":"Pending","requestToken":"token-string","lastModified":"2022-11-17T09:00:25","emailAddresses":{"email1":"example@example.com","email2":null,"email3":null,"email4":null,"email5":null},"userId":"4c816ce0-ea35-4664-8937-0c2952dfc742","ID":"b65b5215-dd36-43d0-a178-39356630320e","URI":"https://us.concursolutions.com/api/v3.2/common/connectionrequests/b65b5215-dd36-43d0-a178-39356630320e"}
```

## Create a Connection Request on Behalf of a Specific User

This method is only available during partner certification, and is intended for testing purposes. In production, the user is the one who creates connection requests, not the partner app.

```
POST  /api/v3.2/common/connectionrequests/
```

### Parameters

Name|Type|Format|Description
---|---|---|---
`user`|`query`|`string`|**Required** The login ID of the user for whom to create the connection request.

### Response

The response body is deprecated in 3.2, the partner should poll for the recently created connection request.

### Example

```
curl \
  -X POST \
  -H "Authorization: Bearer $JWT" \
  -H 'Content-Length: 0' \
  "https://integration.concursolutions.com/api/v3.2/common/connectionrequests/?user=example@example.com"
< HTTP/1.1 200 OK
< Content-Type: application/xml; charset=utf-8
< Content-Length: 266
```
