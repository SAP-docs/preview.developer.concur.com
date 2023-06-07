---
title: Mexico CFDI Integration Guide
layout: reference
---

# Mexico CFDI Integration Guide

## Getting Started

**New App Center Partners**: Your company must have entered into a commercial agreement with us. If you have not yet entered into an agreement, review the information on the [Build App Center Solutions](./solutions/app-center.html) page.

**Existing App Center Partners**: The SAP Concur Platform team will need to configure your existing sandbox, among other things to enable access. You can make that App expansion request by contacting your Alliance Manager.

## Products and Editions

Concur Expense Professional Edition

### Scope Usage

* [events.topic.read](./api-reference/ess/v4.event-subscription.html)
* [receipts.read](./api-reference/ess/v4.event-subscription.html)
* [receipts.write](./api-reference/ess/v4.event-subscription.html)
* [document.tax.compliance.read](./event-topics/expense/v4.document-compliance-events.html)

## Development Environment

SAP Concur Certification Project Manager will prepare the development environment for you and send the development environment details to you by email. The development environment includes:

### Sandboxes and Accounts

* You will have a sandbox on each of following SAP Concur data centers: US2 and EU2.
* You will have 3 test accounts on each of following SAP Concur data centers: US2 and EU2.

### Development App

A development app will be created for you by your assigned Certification Project Manager. They will send you a deep link (URL) to the development app along with the app `client_id` and `client_secret`. These are provided for development and testing purposes only.

## SAP Concur Expense Setup Guide

[SAP Concur Expense: Receipt Handling – Digital Tax Receipts for Mexico](http://www.concurtraining.com/customers/tech_pubs/Docs/_Current/SG_Exp/Exp_SG_Rec_Hand_Digital_Tax_Mexico.pdf)

### Production App

* Once you complete the development app certification walkthrough, you will be provided a production app `client_id` and `client_secret`.
* You need to send the production app’s connect URL (redirect URL) to your Certification Project Manager before starting the development and testing of the production app.
* The Certification Project Manager will provide you the deep link (URL) to the production app listing in the App Center. You will be able to access the app listing for development and testing purposes only. After your production app meets all the certification requirements and completes certification, the App Center marketing team will release it in the App Center and users in allowed regions/countries will have the access.

### App Center Flow - Connecting from SAP Concur App Center

A [company level authentication using password grant](./api-reference/authentication/company-auth.html) allows a company administrator to establish a connection from App Center. The user administrator needs to login via their SAP Concur credentials to access the app in the App Center. In the development and testing phase, you will be provided with the app listing solely for the purpose of development and testing. This app listing will be accessed via a deep link. This deep link will be provided to you before you start development. 

**Quick Connect** describes the process customers use to connect their SAP Concur site with an App Center Partner’s Enterprise application. See the [Quick Connect](./manage-apps/go-market-docs/guide-to-enabling-app-center-solutions-basic.html) scope document for details to guide you through the development of this required piece of your certified application.

## Integration Flow

Prior to connecting customers with the integration, you must create a subscription to the Event Subscription Service. 

For more information:

* [Event Subscription Service](./api-reference/ess/v4.event-subscription.html)
* [Document Compliance Gateway V4](./api-reference/document-compliance-gateway/V4.document-compliance-gateway.html)

### Prerequisite

You must provide an endpoint to receive Event Notifications.

**Step 1**:  Obtain an access token using the `client_credentials` grant.

**Request**

```
POST /oauth2/v0/token HTTP/1.1
Host: us2.api.concursolutions.com
Content-Type: application/x-www-form-urlencoded
```
```
client_id={your-app-client-id}
&client_secret={your-app-client-secret}
&grant_type=client_credentials
```

**Response**

```
{
    "expires_in": 3600,
    "scope": "receipts.read company.read document.tax.compliance.read 
              events.topic.read openid receipts.write",
    "token_type": "Bearer",
    "access_token":
"eyJraWQiOiIxNDU1NjE0MDIyIiwiYWxnIjoiUlMyNXYiLCJ0eXAiOiJKV1QifQ5eyJjb25jdXIuc2NvcGVzIjpbInJlY2VpcHRzLnJlYWQiLCJjb21wYW55LnJlYWQiLCJkb2N1bWVudC50YXguY29tcGxpYW5jZS5yZWFkIiwiZXZlbnRzLnRvcGljLnJlYWQiLCJvcGVuaWQiLCJyZWNlaXB0cy53cml0ZSJdLCJhdWQiOiIqIiwiY29uY3VyLmFwcElkIjoiYjJjZjQyNjItZTJiOS00MWIyLTlkMmYtNmZlMWI4ZDBmMTc2Iiwic3ViIjoiYjJjZjQyNjItZTJiOS00MWIyLTlkMmYtNmZlMWI4ZDBmMTc2IiwiaXNzIjoiaHR0cHM6Ly91czIuYXBpLmNvbmN1cnNvbHV0aW9ucy5jb20iLCJjb25jdXIucHJvZmlsZSI6Imh0dHBzOi8vdXMyLmFwaS5jb25jdXJzb2x1dGlvbnMuY29tL3Byb2ZpbGUvdjEvYXBwcy9iMmNmNDI2Mi1lMmI5LTQxYjItOWQyZi02ZmUxYjhkMGYxNzYiLCJleHAiOjE2ODU5OTE0MTcsImNvbmN1ci52ZXJzaW9uIjozLCJjb25jdXIudHlwZSI6ImFwcCIsImNvbmN1ci5hcHAiOiJodHRwczovL3VzMi5hcGkuY29uY3Vyc29sdXRpb25zLmNvbS9wcm9maWxlL3YxL2FwcHMvYjJjZjQyNjItZTJiOS00MWIyLTlkMmYtNmZlMWI4ZDBmMTc2IiwibmJmIjoxNjg1OTg3ODA3LCJpYXQiOjE2ODU5ODc4MTd95cBlRspwHq2oA1c89xo10KLHjcet9TmKBNmdBxJOWzNSvpCEnZMEoS8DrRjKDp8ZdsQ3mbwvDLXwtnUyTqgFUJ1wCKQ2IsY3rAn6pSjJYy9X83VrGmcy84HunoQqI-V3YGCNUzEnncluejiNj7UVX_UURuK8vKQ-rMFphDlmmy8HEnMUphEmb8ANLpYAROiS_CNvtilUwMLI891fzUeo-fnZ3KaeWpYmi3CT2pWcy9GMsi3o5f1F9-QT3ICgEoXJmoDWM5acrLrvLcz-AgZTrAv3eFLKdLGCDd5kfh-nLlVkoXqsNsqJsu7QtOomQzLTUSljOUCczFbzjCCT5mHCWg",
    "geolocation": "https://us2.api.concursolutions.com"
}
```
 
**Step 2**: GET a list of event topics.

[Verify that you have sufficient access to the topic](./event-topics/index.html#browse-available-topics).

**Request**

```
GET /events/v4/topics HTTP/1.1
Host: www-us2.api.concursolutions.com
Authorization: Bearer {access_token}
```

**Response**

```
[
    "public.concur.document.tax.compliance",
    "concur.travel.search",
    "public.test",
    "public.concur.travel.search"
]
```

**Step 3**: Create a subscription.

**Request**

```
PUT /v4/subscriptions/webhook HTTP/1.1
Host: www-us2.api.concursolutions.com
Authorization: Bearer {access_token}
Content-Type: application/json
```
```
{
  "id": "partner.dev.cfdi",
  "filter": "MX.compliance",
  "topic": "public.concur.document.tax.compliance",
  "webHookConfig": {
    "endpoint": "https://www.partner-url.com/cfdi-validation"
  }
}
```

**Response**

```
{"message":"Subscription 'partner.dev.cfdi' saved successfully"}
```
	
## Manage Subscriptions

### GET List of Subscriptions

**Request**

```
GET /events/v4/subscriptions HTTP/1.1
Host: www-us2.api.concursolutions.com
Authorization: Bearer {access_token}
```
**Response**

```
[
    {
        "allowPublicAccess": true,
        "startFromEarliest": false,
        "id": "partner.dev.cfdi",
        "topic": "public.concur.document.tax.compliance",
        "filter": ".*",
        "webHookConfig": {
            "endpoint": "https://ess-event-listener.herokuapp.com/eventlistener"
        },
        "applicationId": "646a2339-1632-4692-8be6-84534f5b41fc",
        "scope": "",
        "groups": [],
        "companyIds": [
            "d6a72a3f-fdee-450a-abb3-7bf5eb427440"
        ]
    }
]
```

### DELETE Subscription

**Request**

```
DELETE /v4/subscriptions/partner.dev.cfdi HTTP/1.1
Host: www-us2.api.concursolutions.com
Authorization: Bearer {access_token}
```

**Response**

```
{
    "message": "Subscription 'partner.dev.cfdi' marked for deletion"
}
```

**Step 4**: Repeat Step 1 for the EU2 data center using the host URL [https://www-eu2.api.concursolutions.com](https://www-eu2.api.concursolutions.com).

>NOTE: Customers that are connected will be listed under the `companyIds`. A subscription must be created prior to connecting customers; otherwise, customers will not be retroactively enabled on a subscription.

 
**Event Notification  Example**

```
{
    "id": "d274f3e2-85bf-4d3d-b7d1-4bff99001e6d",
    "correlationId": "b3b11838-f257-4298-b77f-14c7d6b11979-1676564382151",
    "eventType": "MX.compliance",
    "topic": "public.concur.document.tax.compliance",
    "timeStamp": "2023-02-16T16:19:47.039Z",
    "data": null,
    "facts": {
        "companyId": "88934848-c278-42d0-98e3-0a4b3b80ba99",
        "isDisplayVersionRequired": "true",
        "complianceCountryCode": "MX",
        "documentId": "13751af6-744a-4204-b007-0b9e51ba0805",
        "href": "https://us2.api.concursolutions.com/document-compliance-gateway/v4/tax-documents/13751af6-744a-4204-b007-0b9e51ba0805"
    },
    "groups": null,
    "scopes": null
}
```

### Validating XML Digital Tax Invoice

The event notification contains the URI to GET a digital tax invoice. 

**Request**

```
GET /document-compliance-gateway/v4/tax-documents/{cfdi-uuid} HTTP/1.1
Host: integration.api.concursolutions.com
Authorization: Bearer {access_token}
Content-Length: 38
Content-Type: multipart/form-data
```

### PUT XML Digital Tax Invoice Update

**Request**

```
PUT /document-compliance-gateway/v4/tax-documents/{cfdi-uuid} HTTP/1.1
Host: integration.api.concursolutions.com
Authorization: Bearer {access_token}
concur-correlationid: MendelTestPatnerAPI
Content-Length: 415
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="digitalTaxDocument"; filename="/DigitalTaxToken.json"
Content-Type: application/json

(data)
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="displayedVersion"; filename="/sample.pdf"
Content-Type: application/pdf

(data)
----WebKitFormBoundary7MA4YWxkTrZu0gW
```
