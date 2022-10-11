# User Provisioning Service - Getting Started

As a client or partner of SAP Concur, you can use the System for Cross-Domain Identity Management (SCIM) user management API to enable automatic provisioning of users between your system and SAP Concur. This onboarding document describes how to build a SCIM endpoint and integrate with the SAP Concur provisioning service. The SCIM specification provides a common user schema for provisioning. When used in conjunction with federation standards, SCIM gives administrators an end-to-end, standards-based solution for access management.


### User Provisioning Service benefits over the flat file process:
 Maintains consistency between SAP Concur solutions and the HCM or provisioning source:
* UPS supports close to real time experience vs. SAP Concur overnight processing with built in retry logic for outages. If there is an outage within Concur, HCM or provisioning source can continue to provision new and updated user data to Concur. UPS will queue that data until services are operational and can process request. If there is a failure at the HCM and a large change set is created, once back on line - UPS is able to receive that large dataset and will process them in sequence and as quickly as services can process.  
Real-time integration:
* Close to real time experience vs. SAP Concur overnight processing. Ability process changes throughout the day  instead of waiting for the file-based interval to occur once per day. 
Single API to support multiple SAP Concur products:
* UPS allows clients and partners to provision user information to a single API that supports multiple SAP Concur products without the need to know different file types for provisioning user information dependent on specific products. 

## <a name="limitations"></a>Limitations

This API is only available to clients and partners who have been granted access. Access to this documentation does not provide access to the API. This API is available in US and EMEA data centers.

## <a name="process-flow"></a>API Process Flow

![Process flow diagram of the User Provisioning API](./v4-user-provisioning-process-flow-v3.png)
UPS supports the SCIM core and enterprise user extensions for identity support. Identity information (Name, address, username, etc) is centralized within Concur and attributes are shared between Spend and Travel services.  For Concur spend and travel services, UPS supports [spend and travel](#supported_extentions) extensions for product specific information. 
When provisioning users into Concur, the provisioning of the identity creates a Concur UUID that spend and travel use for reference. The identity must be created prior to or the same time as provisioning spend and travel profile information.

## <a name="system-design"></a>SCIM System Design
Following the SCIM standard, Concur has grouped the identity attritubes of a user into the [core](https://datatracker.ietf.org/doc/html/rfc7643) and [enterprise](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4) extentions seperate from spend and travel attritubes. When a new user is provisioned into Concur, an immutable UUID is created for that user is required for spend and travel provisioning updates. 

### How this impacts new user provisioning
Clients must provision the core and enterpise extentions prior or with spend and/or Travel extentions. The UUID of the user will be created and shared within the response body of the new user request. 

## Recommended steps for adoption
### 1. Map existing profile data to UPS API attributes for Clients & Partners migrating from from Flat File import or Users V1 API
* New clients and partners move to step 2.
1. List the attributes your application currently supports within the flat file import or users V1 API. 
2. Map the attributes required to create a users profile that meet the products used.
    * It can be helpful to break down your requirements into the attributes needed for the minimum requirements to create an:
      1. [Identity](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#schema) (name, username, email, company ID number, employee number and active flag) - Identity is required for any user of Concur
      2. [Spend](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#schema) (cashAdvanceAccountCode, country, locale, reimbursementCurrency, etc..)
      3. [Travel](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#schema) (ruleClass, travelCrsName, etc..)
3. Using mapping fields below, map your attributes to Concur SCIM attributes within one of the Core, Enterprise, Spend and Travel extensions. 
   * If migrating from an existing flat file definition, map API attributes to your provisioned [flat file](#import_formats) format below. 
   * If migrating from an existing SAP Concur provisioning API, map API attributes to your provisioned [legacy API](#legacy_API) format below.  
4. Add additional profile information in the appropriate extension for your user. 
  
### 2.  Authentication (Required)
To use UPS and supporting API's, the appropriate [scopes](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#scope-usage) must be provisioned to the requesting authentication application. Contact your Concur account representative to update your Company JWT [scopes](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#scope-usage) to access the provisioning endpoints. After scopes have been granted to your Authentication Application, please verify the scopes on your Authentication Application. If you have questions regarding granting scopes, please contact your Concur account representative. 
### 3. Retrieve User(s) 
  * [Retrieve](https://developer.concur.com/api-reference/profile/v4.identity.html#retrieve-users) using using: (Concur UUID, userName, or employeeNumber) 
### 4. Identity Creation
  1. [Create new identity](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#create-a-new-user-with-users) with required fields in the core and enterprise extensions.
  * Temporarily save the Concur UUID the ID of user for user retrieval.
  * Temporarily save the provisioning the ID of request for verifying provision status.
  2. [Verify response](#verify_response) response from SAP Concur is correct using the provisioning request ID from user creation. 
  3. [Retrieve](https://developer.concur.com/api-reference/profile/v4.identity.html#retrieve-users) user data to verify data completion and correctness.
 request from above with the Concur UUID of the newly created user.
  * If there are errors in response, resolve errors and try again. If there are questions, please reach out to your Concur support representative for assistance.
### 5. Updating an Identity
  1. [Update](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#update-a-user-with-users-endpoint) an attribute of the new identity using the Concur UUID of the identity that was created.
 2. [Verify response](#verify_response) response from SAP Concur is correct using the provisioning request ID from user update. 
  3. [Retrieve](https://developer.concur.com/api-reference/profile/v4.identity.html#retrieve-users) user data to verify data completion and correctness.
 request from above with the Concur UUID of the created user. 
  * If there are errors in response, resolve errors and try again. If there are questions, please reach out to your Concur support representative for assistance.
 ### 6. Spend or Travel extension profile update
  1. [Add](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#update-a-user-with-users-endpoint) spend or travel attribute of the new identity using the Concur UUID of the identity that was created.
  * Verify [required](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#schema) fields for spend and travel.
 2. [Verify response](#verify_response) response from SAP Concur is correct using the provisioning request ID from user update. 
  3. [Retrieve](https://developer.concur.com/api-reference/profile/v4.identity.html#retrieve-users) user data to verify data completion and correctness.
 request from above with the Concur UUID of the created user. 
   * Continue to add attributes and extensions to complete the user profile.
  * If there are errors in response, resolve errors and try again. If there are questions, please reach out to your Concur support representative for assistance.

  ### <a name="verify_response"></a>Verifying status of provisioning request
Concur uses an asynchronous provisioning design for all extensions other then core & enterprise. Verifying the status of the request is required to determine success or failures and associated errors to resolve. 
  * Using the provisioningID of the request, query the status endpoint for results: [Provisioning status](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#retrieve-a-detailed-provisioning-request-status)
  * Status results are: 
    1. success - no action necessary
    2. no-op - no action necessary. The system responds with no-op to verify the listening service received the request with no work required.
    3. processing - no action necessary. The system is processing the provisioning request. 
    4. error - action necessary. Review the error message and take appropriate steps to resolve. If there are questions, please reach out to your Concur support representative for assistance.

### <a name="import_formats"></a> Import File Formats
File Type|File Name|Mapping
--|--|--
300|Employee Import|[300 Employee Import](/api-reference/user-provisioning/mapping/300.html)
305|Employee Import|[305 Employee Import](/api-reference/user-provisioning/mapping/305.html)
310 |User Primary Field Addendum|[310 User Primary Field Addendum](/api-reference/user-provisioning/mapping/310.html)
320|Update ID Information Import|[320 Update ID Information Import](/api-reference/user-provisioning/mapping/320.html)
350|File type Travel Addendum|[350 File type Travel Addendum](/api-reference/user-provisioning/mapping/350.html)
370|Statement Employee Import|[370 Statement Employee Import](/api-reference/user-provisioning/mapping/370.html)
400|Role Import|[400 Role Import](/api-reference/user-provisioning/mapping/400.html)
500|Delegate Import|[500 Delegate Import](/api-reference/user-provisioning/mapping/500.html)
550|Enhanced Delegate Import|[550 Enhanced Delegate Import](/api-reference/user-provisioning/mapping/550.html)

### <a name="legacy_API"></a> Legacy API Mapping
API|Mapping
--|--
Users V1|[Users V1](/api-reference/user-provisioning/mapping/v1-mapping.html)
Bulk 3.0 or 3.1|[Bulk](/api-reference/user-provisioning/mapping/3.0_3.1_mapping.md)

## <a name="supported_extentions"></a> Supported Extensions

Name of extension|Area of Coverage|Schemas Supported|Support
--|--|--|--
schemas:core:2.0:User|SCIM core user information|api:messages:2.0:BulkRequest|Supported 
schemas:core:2.0:User|SCIM core user information|api:messages:2.0:BulkRequest|Supported
schemas:extension:enterprise:2.0:User|SCIM extension support|schemas:core:2.0:User|Supported
schemas:extension:spend:2.0:User|Supporting information for spend users|schemas:extension:concur:2.0:Provision:Status	Supported
schemas:extension:spend:2.0:Approver|Supporting information for spend approvers	|schemas:extension:concur:2.0:Provision:Schema	Supported
schemas:extension:spend:2.0:Delegate|Supporting information for spend delegates	|schemas:extension:concur:2.0:Provision:ServiceProviderConfig|Supported
|schemas:extension:spend:2.0:UserPreference|Supporting information for spend users user preferences	|schemas:extension:concur:2.0:Provision:ResourceType|Supported
|schemas:extension:spend:2.0:WorkflowPreference|Supporting information for spend users workflow preferences	
schemas:extension:spend:2.0:Role|Supporting information for spend role provisioning
|schemas:extension:spend:2.0:Payroll|Supporting information for spend payroll provisioning
|schemas:extension:travel:2.0:User|Supporting information for travel users
 
All proceeded by: urn:ietf:params:scim:

## Helpful Hints
### Travel Extension Roles

Group and Rule Classes are set up in advance during company set up and desired Roles are assigned to each Group and Rule class at that time. Then users can be provisioned into their Rule Class and Group(s) from which they inherit their Roles. Roles can be added to/removed from Groups, Rule Classes (and individuals) by an Admin User in the UI at any time. 

Groups are generally related to how the software behaves and what part of the application a user has access (e.g. reporting). A user can be a member of one or more Groups, though this is not required in provisioning. Every user is assigned a default "All" Group by default. 
Rule Class generally relates to what travel options the user has (e.g. what fares they are able to see, what travel policies are enforced). An individual MUST be in one and only one Rule Class. This is the only field required to provision a user within the Travel extension. 
Travel Names vs HR Names

### Within Concur there are two sets of names for each user:

HR Name fields (First, Last, etc.) are provisioned within the Core/Identity extension and come from the HR system or the identity provider. This is the name the user will see when using Expense and is generally not editable by the user.
Travel Name fields must match the user's travel documents and loyalty programs. They are part of the Travel Extension and generally SHOULD be editable by the user so that they match their travel documents. If a user's name on their passport, for example, is different than the name provided by SAP Concur for the reservation, the traveler may have problems getting through airport security or even renting a car. The name that users see on their My Profile - Personal Information page in the SAP Concur UI is the Travel Name.
