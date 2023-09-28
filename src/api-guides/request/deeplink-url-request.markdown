---
title: Deeplink URL Integration - Concur Request
layout: reference
---

# Deeplink URL Integration - Concur Request

The Deeplink URL integration provides the ability for a user on a third-party website or portal to access the resource in Concur Request. This is useful when the user needs to navigate to the SAP Concur solutions website or the SAP Concur Mobile app to complete their operation on the resource, or requires more insights on the resource than that provided in the third-party website or portal.

## <a name="limitations"></a>Limitations

Users must purchase Concur Request in order to use this integration capability. This integration is only available to partners who have been granted access and to customers who either use username/password or SSO SAML2 implementation for authenticating. Access to this documentation does not provide access to the integration.

## <a name="pre-req"></a>Prerequisites

* The user must already exist as an active user in the SAP Concur solution with a Concur Request role such as Request User, Request Manager, or Request Administrator.
* If multiple identity providers (IdPs) are in use, the user may be required to select the correct IdP or provide the login credentials prior to the SSO process.
*

## <a name="integration-details"></a>Integration Details

### URI Template

```shell
https://www.concursolutions.com/goto/travel-request/{requestUuid}?companyUUID={companyUUID}&context={CONTEXT}
```
### Parameters

|Name|Type|Format|Description|
|---|---|---|---|
`requestUuid`|`string`|`path`|**Required** The 20-character unique identifier of the request that is being read.|
`companyUUID`|`string`|`query`|The unique identifier of the company, in UUID format, to which the request belongs to.|
`context`|`string`|`query`|The access level of the user, which determines the form fields they can view/modify. Supported values: `TRAVELER`, `MANAGER`, or `PROCESSOR`|

### Order of Precedence

The following order of precedence will be applied to determine the appropriate role to use in opening the report if the context is not defined in the URL, based on the applicable roles assigned to the user. Provision of context can narrow the roles considered in this evaluation to more accurately direct the UI to the appropriate role.

||Role|Context|
|---|---|---|
|1|Request User (Request owner)|TRAVELER|
|2|Delegate for Request owner|TRAVELER|
|3|Request Approver|MANAGER|
|4|Delegate for Request approver|MANAGER|
|5|Request Proxy for the Request owner’s group|TRAVELER|
|6|Request Administrator for the Request owner’s group|PROCESSOR|

When the deep link URL is generated without the company UUID, the user will be prompted with a sign in page to provide login ID in order to discover the company UUID. The user will be prompted with the identity provider (IdP) sign in page to provide the appropriate login ID, which is used for authentication purposes.

#### Example:

```shell
https://www.concursolutions.com/goto/travel-request/224AF3CDCC2A5244A37C72FA5770C6F2?companyUUID=ae4a796a-68da-4b80-b508-36022e2bacef
```

This deep link URL will support the feature to access SAP Concur solutions via SSO or username/password authentication when launched from third party applications. When clicked, this link will:

* **Web UI:** Enable the user to access the specific Request whose summary or link they were viewing in the third-party application.
* **Mobile UI:** Enable the user to access the specific Request whose summary they were viewing in the third-party application’s mobile app.
