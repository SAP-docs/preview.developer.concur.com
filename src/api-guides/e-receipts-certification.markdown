---
title: User App Certification Flow
layout: reference
---

# User App Certification Flow

## Certification Process Flow

Once you sign the partnership agreement with the SAP Concur Business Development manager, you will receive a welcome letter. When you are ready to start the development project you'll need to follow the steps below to complete the User App certification.

1. You submit the Readiness Form using the link in the Welcome Letter.

2. SAP Concur Certification Project Manager (CPM) on duty prepares the development environment and Development App for you.
   
3. The CPM sends the development environment details and certification requirements to your technical lead via [PlatformCertification@sap.com](mailto:platformcertification@sap.com). **Note**: You'll use this email for all correspondence with the CPM.

4. You develop and test the Development App in your development environment.

5. You send an email to the CPM to schedule the Development App certification one month before the certification week. The CPM will send the meeting invitation to your technical contact. Please find your certification date on the [certification calendar](user-app-certification-calender.pdf).

6. The CPM conducts the Development App certification walkthrough on the scheduled date. If your app fails in the Development App certification walkthrough, you'll need to fix the issues and goes back to step 6 to reschedule the certification walkthrough. Please refer to the [Certification Check List](#certification-check-list) for the certification requirements. 

7. The CPM prepares the Production App and sends App credentials to you.

8. You deploy and test the Production App in your production environment. 

9.  Your marketing team submits App listing documents and images to [PlatformCertificaton@sap.com](mailto:PlatformCertificaton@sap.com). This step could happen at anytime before step 9. Please refer to [App Center Listing](/api-guides/e-receipts-new.html#creating-and-updating-an-app-center-listing) for more information.

10. The CPM and marketing team review and approve the listing documents and send the confirmation to your marketing team. You need the this approval before moving to step 12. 

11. You email the CPM to schedule the Production App certification one month before the certification week. The CPM will send the meeting invitation to your technical contact. Please find your certification date on the [certification calendar](user-app-certification-calender.pdf).

12. The CPM conducts the Production App certification walkthrough on the scheduled date. If your app fails in the Production App certification walkthrough, you'll need to fix the issues and goes back to step 12 to schedule the next certification walkthrough. Please refer to [Certification Check List](#certification-check-list) for the certification requirements. 

13. Once the certification project is complete, the CPM sends you the Certification Notification.

## <a name="certification-check-list"></a>Certification Check List

You must meet following certification requirements before proceeding to the certification walkthrough demo.

 **App Center Connection Flow**

|Requirement | Description |
| --- | --- |
|Landing Page - All Pages |Should include support and help options clearly throughout the process. |
|Landing Page - All Pages |Must include your company branding and specific application brand, if applicable​. |
|Landing Page - First Pages |Must clearly indicate this is an integration with the SAP Concur platform. |
|Landing Page - First Pages |Must include links to your terms and conditions and privacy policy. |
|Landing Page - First Pages |Must use one of the following calls to action: 1) Sign-In or Sign-Up (a prompt to login or create new account) 2) Verification (a prompt to enter a verification/access code)​ |
|Landing Page - Account Creation Pages |If your account creation process requires multiple steps, provide a progress indicator so the user knows what is required. |
|Landing Page - Confirmation Pages |Must have an indication that the connection was successful. |
|Landing Page - Confirmation Pages |Must provide next steps​: 1) Provide customer information on what will occur next such as expect email, etc. 2) User should be directed to close the window as the connection is complete. |
|Landing Page - Confirmation Pages |You should not obtain an `access_token` until customer has completed all actions on the Landing Page.​ |

 **Token Management**

|Requirement | Description |
| --- | --- |
|Geolocation | Must securely store last received `geoLocation` to use on subsequent calls. |
|Refresh Token | Must securely store last received `refresh_token` to use on subsequent calls. |
|Refresh Token Expiration Date | Must securely store `refresh_token` expiry date. Must provide scheduled job to refresh the token before the expiry date. |
|Revoke Token | Must revoke the tokens for the inactive users or disconnected users.  |

 **API Logging**

|Requirement | Description |
| --- | --- |
|Error Codes |Must log Error Code / Error Description. |
|Correlation ID|The API response header contains `concur-correlationid` field which is an unique id for each API call. Some legacy APIs do not. You must log this correlation id when provided.  |
|User UUID |Log user's UUID (extracted from user's access_token or id_token).|
|Request Body |Log the complete API request body raw data. |
|Response Header |For the eReceipt integration,log response header `link` and `location` data in addition to `concur-correlationid`. |
|Response Body |For the Quick Expense App,log the response body. |

**Production Readiness**

|Requirement | Description |
| --- | --- |
|Documentation |You need to create a technical document for SAP Concur internal archiving. This document should include your solution architecture, functions, and design. It should also cover API calls with specific parameters, ways users can connect to your App, token management (obtaining, refreshing, and storing tokens), and other technical integration aspects.|
|Register Authorized Support Contacts |You must have registered authorized support contacts​. Please provide the support contact list to [PlatformCertification@sap.com](mailto:platformcertification@sap.com) before your SAP Concur App Center launch.|
|Submit Support Case |You must submit at least one support case at partner support portal. Please refer to [How to Log a Support Case](https://developer.concur.com/tools-support/support.html#log-a-support-case).|

**Certified APIs**

|Requirement | Description |
| --- | --- |
|OAuth2 - US DC Client |You must demonstrate ability to authenticate clients in the US Data Center (default geolocation). |
|OAuth2 - EU DC Client |You must demonstrate ability to authenticate client in the EU Data Center (token geolocation). |
|eReceipt or Quick Expense API - US DC Client |You must demonstrate ability to post eReceipt or Quick Expense data in US Data Center. |
|eReceipt or Quick Expense API - EU DC Client |You must demonstrate ability to post eReceipt or Quick Expense data in EU Data Center. |

