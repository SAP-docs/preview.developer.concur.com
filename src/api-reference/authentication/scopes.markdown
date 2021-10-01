---
title: List of Scopes for all SAP Concur APIs
layout: reference
---
# Scopes

Scope is a parameter as defined in the OAuth 2.0 standards (RFC6749) to enable a client to specify the scope of the access request. The value of the scope parameter is expressed as a list of space-delimited, case-sensitive strings although some implementations of scope uses a comma-delimited format. Scopes limit access for OAuth2 tokens and do not grant any additional permission beyond that which the client already has.

Scopes apply to applications only. Scopes play a crucial part in defining the ultimate access to a resource by a User.

User’s Roles / Permissions + Claims + Application Scopes

## Naming Conventions <a name="conventions"></a>

Concur services follow these standard naming conventions for scopes.

```
Template: {resource}.{optional subresource}.{action}
Examples: mileage.rate.read
          receipts.read
```

## List of v4 Actions <a name="actions"></a>

`{actions}` are common authorizations across resources.

Action|Description|Examples
---|---|---
`read`|Read only access (GET)|`receipts.read`, `budgetitem.read`
`write`|Read AND Write access (GET, POST, UPDATE etc)|`company.write`, `travel.receipts.write`
`writeonly`|Write only access|`mileage.journey.writeonly`, `receipts.writeonly`
`delete`|Delete access|N/A

## List of API Scopes <a name="v4apiscopes"></a>

A list of the various scopes and the APIs that use them is available [here](/api-reference/authentication/app-center-learn-more.html).
