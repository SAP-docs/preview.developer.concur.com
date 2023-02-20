---
title: E-Receipts and Quick Expense User App Certification Guide
layout: reference
---

# E-Receipts and Quick Expense User App Certification Guide

## Certification Process Flow

Once partner signs the partnership agreement with SAP Concur BD manager, parnter needs to follow the steps below to complete the User App certifiation.

1. Partner receives the Welcome Letter from SAP Concur BD manager.

2. Once Partner technical team is ready to start the development project, Partner submits Readiness Form using the link provided in the Welcome Letter.

3. SAP Concur CPM (Certification Project Manager) on duty prepares the development environment and Development App for Partner.

4. CPM on duty sends the development environment details and certification requirements to Partner technical lead via email [PlatformCertification@sap.com](mailto:platformcertification@sap.com). 

5. Partner develops and tests the Development App in their development environment.

6. Partner sends Email to [PlatformCertification@sap.com](mailto:platformcertification@sap.com) to schedule the Development App certification one month before the certificaton week. CPM on duty will send the meeting invitation to Partner technical contact. Please find your certification date time based on the [certification calendar](user-app-certification-calender.pdf).

7. CPM on duty conducts the Development App certification walkthrough on the scheduled date. If parnter fails in the Development App certification walkthrough, Partner needs to fix the issues and goes back to step 6 to schedule next certification walkthrough. Please refer to [Certification Check List](#certification-check-list) for the certification requirements. 

8. CPM on duty prepares the Production App and sends App credentials to Partner via email [PlatformCertification@sap.com](mailto:platformcertification@sap.com). 

9. Partner deployes and tests the Production App in their production environment. 

10. Partner marketing team submits App listing documents and images to [Concur_AppcenterMarketing@sap.com](mailto:Concur_AppcenterMarketing@sap.com). This step could happen at anytime before step 9. Please refer to [App Center Listing](#creating-and-updating-an-app-center-listing) for more information.

11. App Center marketing team reviews and approves the listing documents and sends the confirmation to partner marketing team via email [Concur_AppcenterMarketing@sap.com](mailto:Concur_AppcenterMarketing@sap.com), and alsp copy CPM on duty ([PlatformCertification@sap.com](mailto:platformcertification@sap.com)). Partner needs to get the App Center marketing team's approval before step 12. 

12. Partner sends email to [PlatformCertification@sap.com](mailto:platformcertification@sap.com) to schedule the Production App certification one month before the certificaton week. CPM will send the meeting invitation to Partner technical contact. Please find your certification date time based on the [certification calendar](user-app-certification-calender.pdf).

13. CPM on duty conducts the Production App certification walkthrough on the scheduled date. If parnter fails in the Production App certification walkthrough, Partner needs to fix the issues and goes back to step 12 to schedule next certification walkthrough. Please refer to [Certification Check List](#certification-check-list) for the certification requirements. 

14. Once the certification project is complete, CPM on duty sends the Certification Notification to Partner via email [PlatformCertification@sap.com](mailto:platformcertification@sap.com). 

## Certification Check List

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
|Landing Page - Confirmation Pages |Partner should not obtain `access_token` until customer has completed all actions on the Landing Page.​ |

 **Token Management**

|Requirement | Description |
| --- | --- |
|Geolocation | Must securely store last received `geoLocation` to use on subsequent calls. |
|Refresh Token | Must securely store last received `refresh_token` to use on subsequent calls. |
|Token Expiration Date | Must securely store `refresh_token` expiry date. |

 **API Logging**

|Requirement | Description |
| --- | --- |
|Error Codes |Must log Error Code / Error Description. |
|Correlation ID|The API call's HTTP Response header contains a field "concur-correlationId" which is an unique id for each API call. Some legacy APIs do not. You must log this correlation id when provided.  |
|User ID |Should log `UserID` (User who clicked the Connect button). (Highly Recommended) |
|Response Headers |Should log Response Headers. (Highly Recommended) |

**Production Readiness**

|Requirement | Description |
| --- | --- |
|Business Informational Review Meeting |This mandatory meeting can be attended at any time after the analysis and design phase. Suggested attendees include Finance, Alliance Manager, and Business Development team members. Agenda includes post-certification marketing, LOA and DNF procedures, Invoicing, and how to contact Support. Navigate to Business Information Review for meeting details. |
|Documentation |You will produce a Technical Guide that includes: Solution’s architecture, functions, and schema. Detailed token management (obtaining, refreshing, and storing tokens). API scopes with corresponding parameters used.​ API Logging. |
|Register Authorized Support Contacts |You must have registered Authorized Support Contacts​. |
|Submit Support Case |You must submit at least one Support Case at Partner Support Portal. |

**Certified APIs**

|Requirement | Description |
| --- | --- |
|OAuth2 - US DC Client |You must demonstrate ability to authenticate clients in the US Data Center (default geolocation). |
|OAuth2 - EU DC Client |You must demonstrate ability to authenticate client in the EU Data Center (token geolocation). |
|OAuth2 - CN DC Client |(Optional) If your App supports the users hosted on China Data Cetner, you must demonstrate ability to authenticate client in China Data Center (default geolocation). |
|eReceipt or Quick Expense API - US DC Client |You must demonstrate ability to post eReceipt or Quick Expense data in US Data Center. |
|eReceipt or Quick Expense API - EU DC Client |You must demonstrate ability to post eReceipt or Quick Expense data in EU Data Center. |
|eReceipt or Quick Expense API - CN DC Client |(Optional) If your App supports the users hosted on China Data Cetner, you must demonstrate ability to post eReceipt or Quick Expense data in China Data Center. |
