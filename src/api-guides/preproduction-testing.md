---
title: Testing App Center Partner Applications
layout: reference
---

# Testing App Center Partner Applications

Many App Center partner applications do not need to be validated in a test environment because they are obtaining data directly from the customer's site and processing it on the partner's side. In other words, the presence of the partner's application has no impact on the normal use of the SAP Concur site as a result of obtaining data. However, some Enterprise Applications send data to the customer's SAP Concur site, which the customer may want to test before deploying. This page includes instructions for both the Partner and Customer to follow in order to test via 2 options: Test User and Production Sandbox Environment. 

## Test User Functionality

In most cases, customers can test App Center partner applications using the Test User functionality. This feature is available within their Professional Edition SAP Concur site.

>**Important**: The Test User functionality only applies to Professional Edition customers. Standard Edition customers need to deploy the app in their production site.

This functionality completely separates the data between test and production, while allowing the customer to be confident their testing is being done within a production infrastructure (that is, the performance of the app is being tested in the normal environment where it will be used). In addition, the Test User functionality uses the same production configuration settings, which avoids issues related to inconsistent settings manually configured in a separate site. The test user data does not impact production analytics or extracts. Your SAP Concur contact can provide you with a copy of the *Shared: Test User Setup Guide*, which explains this feature in detail. If you’ve already used the Test User functionality only a subset of the steps below may be required.

At the customer’s request SAP Concur will configure the following:

* Copy the Expense, Invoice, or Request Policy that is to be used in conjunction with the App Center partner integration. The name of the new Policy must include "Test User" in the Policy name along with any other descriptive terms the customer provides.
* Create a Test User Group and apply it to the Test Policy.
* Add necessary Test User records and assign them to the Test Group. (*client-configured*)

![Expense and Invoice settings showing the Test User text box is checked.](./isatestuser.png)

> **Important**: The checkbox field, "Is a Test User" in the employee profile must be checked for each test profile used in the testing before clicking **Save**. Once selected, that checkbox is permanent and there is no way to change the profile. When a user profile is set up as a test user, that profile will always be in test mode. The converse is also true – a production profile will never have this checkbox checked. This ensures that test and production data is kept separate.

> **Tip**: Include "Test" in the login ID to emphasize the correct use of each profile. For example, Jane.Doe.Test@<company domain>.com.

* Adjust any other configuration within the Test User Policy and the Test User Group that is relevant to the app deployment. For example, Attendee Types can be set up for Test User Group access only.
* If desired, request a test user extract file be created.
* Deploy the App Center partner application, limited to the test users and complete the desired tests. The user profiles marked as "Is a Test User" must be used. (*client or SAP Concur*)

## Test in Production Sandbox Environment

If a customer has purchased a Production Sandbox Environment (PSE), then this is another testing option for customers. A PSE is hosted in the production environment but is a separate site from the customer’s production entity so that any changes made in a PSE are kept distinct from and will not affect production. Limitations are that PSEs are Professional edition only; Spend apps can be tested but not Travel.  

A snapshot of most production data (configuration + transactional) is copied over to a PSE; however, there may need to be some manual reconfiguration and reimplementation to ensure that the app functions properly in a PSE. Billable hours can be purchased for SAP assistance.  

Only a few easy steps are needed before a customer can test App Center in a PSE:  

* In Concur Module Management, SAP Concur must update the App Center module “Property value” to true. This makes the App Center tab available in the site.  
  
  <Need to Add ModuleMgmt.png>
    
* Users can navigate to the App Center tab and click on the Connect button within the desired App Center listing. 
    * Note that Admin role is only required to connect to Enterprise application listings. User Connections do not require Admin role.  
    * Listings will be displayed based on the customer’s configuration such as product and geographic location among others; however, customer can remove the filters to see other apps as desired.  
  
  <Need to Add PSE_AppCenter.png>

**Guidance for Partners:**
  
With customers now using partner apps in production and PSE (for testing purposes), partners should distinguish between a testing vs production site connection on their side. This is imperative to keep reporting distinct for accounting purposes. Below is the guidance from SAP Concur to assist partners with this delineation.  

A customer will experience one of 2 types of a Partner “Landing Page” during the connection flow:  
  
**Verification Code Landing Page option:**
* The Partner should manage two sets of verification codes for their Landing page: test vs prod. The Partner can provide the applicable code to the customer prior to their connection. 
* It is important the partner remains organized between the Production vs. Testing verification codes to ensure reporting is accurate since a single customer can have more than one connection (PSE connection + Production site connection). 
 
**Sign In/Sign Up Landing Page option:**
* The Partner should manage two sets of login accounts for their customers: test vs prod. 
* The Partner will need to recognize logins with a .uat at the end of each login-related to the PSE connection  
* It is important the partner remains organized between the Production vs. Testing Log-in ID values to ensure reporting is accurate since a single customer can have more than one connection (PSE connection + Production site connection). 
