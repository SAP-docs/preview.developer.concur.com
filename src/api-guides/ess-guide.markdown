---
title: Event Subscription Service v4 Guide
layout: reference
---

# Event Subscription Service v4 Guide

This guide will help you develop applications using the Event Subscription Service (ESS). The audience is:

* SAP Concur App Center Partners
* SAP Concur Web Service Customers/Clients
* TMC Partners (using our Request V4 APIs)

It provides the detailed steps required to set up/create an Event Subscription for your App and other related processes, in order to begin receiving SAP Concur events of a Company/Customer/Client into your webhook or endpoint.

The following diagram gives a high-level overview of the steps involved for the different parties:

![High-level steps to set up an Event Subscription & begin receiving events](/api-guides/images/set-up-ess.png)

## Step 1 – Perform Checks

You may need to request access from your SAP Concur representative if you do not have the necessary permissions.
* Ensure your App (`client_id` + `client_secret`) has access to the following grant types:
  * Client Credentials
  * Password
* Ensure your App has access to the required scopes:

    App Scopes|Required For
    ---|---
    `document.tax.compliance.read`|Document Tax Compliance Event
    `events.topic.read`	|All Topics
    `expense.report.read` |Concur Expense Event
    `expense.report.readwrite` |Concur Expense Event
    `FISVC`|Ready for Integration Events
    `identity.user.event.read`|Identity Change Event
    `spend.user.event.read`|Spend Change Event
    `travel.itinerary.read`|Concur Itinerary Event
    `travelrequest.write`	|Concur Request Event
    `travel.user.event.read`|Travel Change Event
    `user.provision.read`	|Concur User Provisioning Event

  The SAP Concur products that ESS supports are constantly evolving. Please refer to [the main Event Topics page](/event-topics/index.html) for a list of current available Event Topics.

* Ensure your webhook or endpoint meets these [requirements](/api-reference/ess/v4.event-subscription.html#endpoint-requirements-). Endpoint need not be safelisted.

For the above checks on your App, you need to ask your SAP Concur representative to make sure that access has been provided for the required grant types and scopes. You may also verify this yourself via Step 2. If the Auth API gives you a 200 OK, the API response will list all included scopes. If required scopes are missing or if the API fails, please reach out to your SAP Concur representative.

## Step 2 – Obtain App Token(s)

* Using your App credentials (`client_id` & `client_secret`) and our Authentication API,  make a call using the [`client_credentials`](/api-reference/authentication/apidoc.html#client-credentials-grant-) grant type.
* The token generated in the API response is your App token and will need to be used only for making ESS API calls (details in upcoming steps).
* This Auth call needs to be made separately for both our US and EMEA data centers. In other words, 2 separate tokens are required for creating event subscriptions in the two data centers.

  ![Sample screenshot of Auth request call in US data center](/api-guides/images/ess-us-auth.png)

  ![Sample screenshot of Auth request call in EMEA data center](/api-guides/images/ess-emea-auth.png)

## Step 3 – Create Event Subscription(s)

* Using the App token(s) from Step 2, make the following PUT API call(s) to [create new Event Subscriptions](/event-topics/index.html#create-a-subscription) in both US and EMEA data centers.

  ![Sample screenshot of ESS PUT request call in US data center](/api-guides/images/ess-us-put.png)

  ![Sample screenshot of ESS PUT request call in EMEA data center](/api-guides/images/ess-emea-put.png)

**Request body explained**:

* “id” – You can provide any unique name for your Subscription. Suggestion would be to include integration name, Concur product name, dev/prod environment, data center, etc. for easy identification and troubleshooting.
*	“filter” – This can be later used to specify eventTypes to filter out events of your choice.
*	“topic” – Use the one that applies to your integration:
    * `public.concur.travel.itinerary`
    * `public.concur.expense.report`
    * `public.concur.request`
    * `public.concur.user.profile.identity`
    * `public.concur.user.provisioning`
* “endpoint” – Webhook where Concur Events are required to be delivered.

>Note : Please refer to this [page](/event-topics/index.html) for a list of all our current available Event Topics.

On receiving a success message for the PUT API call, the Event Subscription(s) is successfully created.

## Step 4 – View the Newly Created Subscription (Optional)

Use the App token of the correct data center (from Step 2) to perform a [GET call](/event-topics/index.html#browse-existing-subscriptions). A new event subscription will look like the following:

![Sample screenshot of ESS PUT request call in US data center](/api-guides/images/step-4.png)    

**Important Notes**

* Steps 1, 2, and 3 in combination, is a one-time process based on the nature of your integration or the requirements of the event topic.
* The above steps must be performed before moving forward with the steps below.
* In addition to using the App token (from Step 2) for the PUT ESS API call, this token can also be used for other ESS calls like verifying (GET) the created subscription, deleting (DELETE) the subscription, etc. Details available [here](/event-topics/index.html#verify-your-subscription).
* If you need to update an existing event subscription, PUT ESS API call must be used with the correct subscription “id”. If the “id” is different, a new subscription will be created.
* The App token is used only for ESS API endpoints.

Now, to begin receiving Concur Events of a Company/Concur entity, the Company ID/UUID of this entity must be related or connected to your App (by obtaining a Company JWT/token), which will then ensure that this UUID is automatically added to the Event Subscription you just created.

![Connecting your ESS subscription](/api-guides/images/ess-subscription.png)

Please refer to the section applicable to you in the step below on how to obtain a Company JWT/Token.

## Step 5 – Obtain Company JWT/Token (Connecting a Company to Your App)

### Web Service Customers

You need to connect your SAP Concur company/entity to your own app, which will automatically then update your newly created event subscription with your SAP Concur Company UUID.

This connection is achieved via the Authentication Admin tool within your entity and then making an API request to exchange the Request token for an Access Token that is valid only for your entity (i.e., company-level token/JWT).

1. Company Admin navigates to the **Administration > Company > Authentication Admin** page.
2. Select the **Company Request Token** link and on this page, enter your `client_id` in the App ID field and submit.
3. A dialog box appears displaying the Company UUID and the Company Request Token (Username and Password).
4. Use these info to obtain a Company JWT/token with the help of our Auth API (Password grant type). The API steps to obtain this JWT are detailed on the Company Request Token page.

   More information on the [Company Request Tool](/api-reference/authentication/company-refresh-tool.html) page. 

   ![Screenshot of the Company Request Tokens page](/api-guides/images/ess-company-request-token.png)

5. After you have obtained a Company JWT successfully, proceed to Step 6.

### App Center Partners

When a Customer/Company Admin clicks the **Connect** button from the App Center and successfully establishes a connection to your App, this will automatically update the event subscription, that you created, with the Company UUID.

Successful connection implies you successfully obtained a Company JWT/token for this Customer.

1. Company Admin navigates to the App Center and clicks the **Connect** button from your App listing page.
2. The admin is redirected to your landing page.
3. From the URL of the landing page, you are able to get the the Company UUID and the Company Request Token (Username and Password).
4. Use these info to obtain a Company JWT/token with the help of our Company Auth API ([Password grant type](/api-reference/authentication/company-auth.html)), after the admin submits required info on the landing page.

    ![Screenshot of App Center connection](/api-guides/images/ess-app-center.png)

5. After you have obtained a Company JWT successfully, proceed to Step 6.

### TMC Partners (using Request V4 APIs)

There is one more important step that SAP Concur Admins working with TMCs or TMCs having access to an SAP Concur site should take care of, before obtaining a Company JWT/token.

Since a Client can have different Travel Agency Offices, it is necessary to ensure that only those Concur Request events that belong to specific Travel Agency Offices (identified using Agency UUIDs) are delivered to the TMC App.

Within the Event Subscription, there is a ‘Groups’ field that should contain only such Agency UUIDs. This is achieved by performing the following steps, which will then later ensure that the Agency UUID(s) is automatically added to the event subscription once a Company JWT is generated:

1. Within a Client's SAP Concur entity, a Request Admin to navigate to **Administration → Request → Travel Agency Offices**
2. Select the required Travel Agency Office (the Agency UUID of which needs to be included within the 'groups' in the Event subscription) from the list. And double-click or click **Modify**.
3. In the `appId` field, enter the TMC's App ID/UUID (`client_id`) and click **Done**.
4. Repeat, if there are more Agency UUIDs that need to be included.

   ![Screenshot showing adding TMCs](/api-guides/images/ess-tmc.png)

5. After the above steps, Admin may navigate to **Administration > Company > Authentication Admin** page and select the Company Request Token link on this page in order to generate a Request Token. Or can request the SAP Concur representative to help generate a Request Token on your behalf.
6. Detailed steps on how to use the Request token and Company UUID to obtain a [Company JWT/token](/api-reference/authentication/company-refresh-tool.html).
7. After you have obtained a Company JWT successfully, proceed to Step 6.

## Step 6 – Verification of the Event Subscription

If a Company JWT has been successfully obtained, this implies that the Company UUID (and Agency UUID for TMCs) have been automatically added to the Event Subscription. And only if these UUIDs exist in the Event Subscription, will we begin delivering events to your endpoint.

Hence, this last step can be used to verify the existence of these UUIDs in the Subscription. The [GET ESS API](/event-topics/index.html#browse-existing-subscriptions) call must be used with the App Token (from Step 2). Perform this separately for US and EMEA data centers.

Verify that:

* Company UUID is listed in the **companyIds** array of the subscription.
* Agency UUID is listed in the **groups** array of the subscription (only for TMCs).

  ![Screenshot of GET call](/api-guides/images/step-6.png)

Based on SAP Concur product activity, you should now begin to see events coming through to your webhook! Sample Event payloads can be found within the respective [Topic](/event-topics/).

Click the button below to download the ESS API collection in Postman.

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/31374415-d70ee8d6-46cb-40db-b3b9-fc54524f8b45?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D31374415-d70ee8d6-46cb-40db-b3b9-fc54524f8b45%26entityType%3Dcollection%26workspaceId%3D2a9e2e42-656a-474c-b78a-1b6be9959a2e)

Or you may download the [JSON collection](/api-guides/postman/ESS%20API%20endpoints.postman_collection.zip).
