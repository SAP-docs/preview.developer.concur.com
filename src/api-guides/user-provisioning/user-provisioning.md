---
title: User Provisioning Service Implementation Guide
layout: reference
---

# User Provisioning Service Implementation Guide

The System for Cross-Domain Identity Management (SCIM) user management API enables automatic provisioning of users between your system and the SAP Concur platform. This document describes how to build a SCIM endpoint and integrate with the SAP Concur provisioning service. The SCIM specification provides a common user schema for provisioning. When used in conjunction with federation standards, SCIM gives administrators an end-to-end, standards-based solution for access management.

## <a name="benefits"></a>Benefits Over the Flat File Process

* **Maintains consistency between SAP Concur solutions and the HCM or provisioning source.** UPS supports a close to real time experience vs. overnight processing with built in retry logic for outages. If there is an outage within the SAP Concur platform, HCM or the provisioning source can continue to provision new and updated user data. UPS will queue that data until services are operational and can process request. If there is a failure at the HCM and a large change set is created, once back on line - UPS is able to receive that large dataset and will process them in sequence and as quickly as services can process.  
* **Real-time integration.** Close to real time experience vs. overnight processing. Ability process changes throughout the day instead of waiting for the file-based interval to occur once per day.
* **Single API to support multiple SAP Concur products.** UPS allows clients and partners to provision user information to a single API that supports multiple SAP Concur products without the need to know different file types for provisioning user information dependent on specific products.

## <a name="process-flow"></a>API Process Flow

![Process flow diagram of the User Provisioning API](/api-reference/user-provisioning/v4-user-provisioning-process-flow-v3.png)

UPS supports the SCIM core and enterprise user extensions for identity support. Identity information (name, address, username, etc.) is centralized and attributes are shared between spend and travel services. UPS supports [spend and travel](#supported-extensions) extensions for product specific information.

When provisioning users, the provisioning of the identity creates a UUID that spend and travel use for reference. The identity must be created prior to or at the same time as provisioning spend and travel profile information.

## <a name="system-design"></a>SCIM System Design

Following the SCIM standard, we have grouped the identity attributes of a user into the [core](https://datatracker.ietf.org/doc/html/rfc7643) and [enterprise](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4) extensions separate from spend and travel attributes. When a new user is provisioned, an immutable UUID is created for that user is required for spend and travel provisioning updates.

### How this Impacts New User Provisioning

Clients must provision the core and enterprise extensions prior to, or with spend and/or Travel extensions. The UUID of the user will be created and shared within the response body of the new user request.

## Recommended Steps for Adoption

### Map Existing Profile Data to UPS API Attributes

Clients and partners migrating from flat file import or Users V1 API must complete the steps in this section.

> **Note**: New clients and partners skip this step and move to the following section on Authentication.

1. List the attributes your application currently supports within the flat file import or users V1 API.
2. Map the attributes required to create a user's profile that meets the products used. It can be helpful to break down your requirements into the attributes needed for the minimum requirements to create:  
  * [Identity](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#schema) (name, username, email, company ID number, employee number and active flag) - Identity is required for any user.  
  * [Spend](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#schema) (cashAdvanceAccountCode, country, locale, reimbursementCurrency, etc.)  
  * [Travel](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#schema) (ruleClass, travelCrsName, etc.)  
3. Using mapping fields below, map your attributes to SAP Concur SCIM attributes within one of the Core, Enterprise, Spend and Travel extensions.  
   * If migrating from an existing flat file definition, map API attributes to your provisioned [flat file](#import-formats) format below.  
   * If migrating from an existing SAP Concur provisioning API, map API attributes to your provisioned [legacy API](#legacy-api) format below.   
4. Add additional profile information in the appropriate extension for your user.

### Authentication (Required)

To use UPS and supporting APIs, the appropriate [scopes](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#scope-usage) must be provisioned to the requesting authentication application. Contact your SAP Concur account representative to update your Company JWT scopes to access the provisioning endpoints. After scopes have been granted to your authentication application, please verify the scopes. If you have questions regarding granting scopes, please contact your SAP Concur account representative.

### Retrieve Users

[Retrieve](https://developer.concur.com/api-reference/profile/v4.identity.html#retrieve-users) using: (UUID, userName, or employeeNumber)

### Identity Creation

1. [Create new identity](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#create-a-new-user-with-users) with required fields in the core and enterprise extensions.  
  * Temporarily save the UUID the ID of user for user retrieval.  
  * Temporarily save the provisioning the ID of request for verifying provision status.  
2. [Verify response](#verify-response) SAP Concur data response is correct using the provisioning request ID from user creation.  
3. [Retrieve](https://developer.concur.com/api-reference/profile/v4.identity.html#retrieve-users) user data to verify data completion and correctness of request from above with the UUID of the newly created user.  
  * If there are errors in response, resolve errors and try again. If there are questions, please reach out to your SAP Concur support representative for assistance.

### Updating an Identity

1. [Update](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#update-a-user-with-users-endpoint) an attribute of the new identity using the UUID of the identity that was created.  
2. [Verify response](#verify-response) SAP Concur data response is correct using the provisioning request ID from user update.  
3. [Retrieve](https://developer.concur.com/api-reference/profile/v4.identity.html#retrieve-users) user data to verify data completion and correctness of request from above with the UUID of the created user.  
  * If there are errors in response, resolve errors and try again. If there are questions, please reach out to your SAP Concur support representative for assistance.

### Spend or Travel Extension Profile Update

1. [Add](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#update-a-user-with-users-endpoint) spend or travel attribute of the new identity using the UUID of the identity that was created.  
2. [Verify required](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#schema) fields for spend and travel.  
3. [Verify response](#verify-response) SAP Concur data response is correct using the provisioning request ID from user update.  
4. [Retrieve](https://developer.concur.com/api-reference/profile/v4.identity.html#retrieve-users) user data to verify data completion and correctness.
 request from above with the UUID of the created user.  
  * Continue to add attributes and extensions to complete the user profile.  
  * If there are errors in response, resolve errors and try again. If there are questions, please reach out to your SAP Concur support representative for assistance.

### <a name="verify-response"></a>Verifying Status of Provisioning Request

SAP Concur products use an asynchronous provisioning design for all extensions other than core and enterprise. Verifying the status of the request is required to determine success or failures and associated errors to resolve.  
  * Using the provisioningID of the request, query the status endpoint for results [Provisioning status](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#retrieve-a-detailed-provisioning-request-status):  
  * Status results are:  
    * success - No action necessary.  
    * no-op - No action necessary. The system responds with no-op to verify the listening service received the request with no work required.  
    * processing - No action necessary. The system is processing the provisioning request.  
    * error - Action necessary. Review the error message and take appropriate steps to resolve. If there are questions, please reach out to your SAP Concur support representative for assistance.  

### <a name="import-formats"></a> Import File Formats

File Type|File Name|Mapping
---|---|---
300|Employee Import|[300 Employee Import](https://developer.concur.com/api-reference/user-provisioning/mapping/300.html)
305|Employee Import|[305 Employee Import](https://developer.concur.com/api-reference/user-provisioning/mapping/305.html)
310 |User Primary Field Addendum|[310 User Primary Field Addendum](https://developer.concur.com/api-reference/user-provisioning/mapping/310.html)
320|Update ID Information Import|[320 Update ID Information Import](https://developer.concur.com/api-reference/user-provisioning/mapping/320.html)
350|File Type Travel Addendum|[350 File type Travel Addendum](https://developer.concur.com/api-reference/user-provisioning/mapping/350.html)
370|Statement Employee Import|[370 Statement Employee Import](https://developer.concur.com/api-reference/user-provisioning/mapping/370.html)
400|Role Import|[400 Role Import](https://developer.concur.com/api-reference/user-provisioning/mapping/400.html)
500|Delegate Import|[500 Delegate Import](https://developer.concur.com/api-reference/user-provisioning/mapping/500.html)
550|Enhanced Delegate Import|[550 Enhanced Delegate Import](https://developer.concur.com/api-reference/user-provisioning/mapping/550.html)

### <a name="legacy-api"></a> Legacy API Mapping

API|Mapping
---|---
Users V1|[Users V1](https://developer.concur.com/api-reference/user-provisioning/mapping/v1-mapping.html)
Bulk 3.0 or 3.1|[Bulk](https://developer.concur.com/api-reference/user-provisioning/mapping/3.0_3.1_mapping.html)

## <a name="supported-extensions"></a> Supported Extensions

> **Note**: All extensions are preceded by: urn:ietf:params:scim:

Name of Extension|Area of Coverage|Schemas Supported
|---|---|---|
|schemas:core:2.0:User|SCIM core user information.|api:messages:2.0:BulkRequest|
|schemas:core:2.0:User|SCIM core user information.|api:messages:2.0:BulkRequest|
|schemas:extension:spend:2.0:User|Supporting information for spend users.|schemas:extension:concur:2.0:Provision:Status|
|schemas:extension:spend:2.0:Approver|Supporting information for spend approvers.|schemas:extension:concur:2.0:Provision:Schema|
|schemas:extension:spend:2.0:Delegate|Supporting information for spend delegates.|schemas:extension:concur:2.0:Provision:ServiceProviderConfig|
|schemas:extension:spend:2.0:UserPreference|Supporting information for spend users user preferences.|-|	|schemas:extension:concur:2.0:Provision:ResourceType|-|-|
|schemas:extension:spend:2.0:WorkflowPreference|Supporting information for spend users workflow preferences.|-|
|schemas:extension:spend:2.0:Role|Supporting information for spend role provisioning.|-|
|schemas:extension:spend:2.0:Payroll|Supporting information for spend payroll provisioning.|-|
|schemas:extension:travel:2.0:User|Supporting information for travel users.|-|

## Helpful Hints

### Travel Extension Roles

Group and Rule Classes are set up in advance during company set up and desired Roles are assigned to each Group and Rule class at that time. Then users can be provisioned into Rule Class and Group(s) from which they inherit their Roles. Roles can be added to/removed from Groups, Rule Classes, (and individuals) by an Admin User in the UI at any time.

Groups are generally related to how the software behaves and what part of the application a user can access (for example, reporting). A user can be a member of one or more Groups, though this is not required in provisioning. Every user is assigned a default "All" Group by default. Rule Class generally relates to what travel options the user has (for example, what fares they are able to see, what travel policies are enforced). An individual MUST be in one and only one Rule Class. This is the only field required to provision a user within the travel extension.


### There Are Two Sets of Names for Each User

* **HR Name** fields (First, Last, etc.) are provisioned within the Core/Identity extension and come from the HR system or the identity provider. This is the name the user will see when using Concur Expense and is generally not editable by the user.
* **Travel Name** fields must match the user's travel documents and loyalty programs. They are part of the Travel Extension and generally SHOULD be editable by the user so that they match their travel documents. If a user's name on their passport, for example, is different than the name provided by Concur Travel for the reservation, the traveler may have problems getting through airport security or even renting a car. The name that users see on their My Profile - Personal Information page in the UI is the Travel Name.
