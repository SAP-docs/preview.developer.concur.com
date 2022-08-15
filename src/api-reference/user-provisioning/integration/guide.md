# User Provisioning Service - Getting Started

As a client or partner of SAP Concur, you can use the System for Cross-Domain Identity Management (SCIM) user management API to enable automatic provisioning of users between your system and SAP Concur. This onboarding document describes how to build a SCIM endpoint and integrate with the SAP Concur provisioning service. The SCIM specification provides a common user schema for provisioning. When used in conjunction with federation standards, SCIM gives administrators an end-to-end, standards-based solution for access management.


## <a name="process-flow"></a> Process Flow

![Process flow diagram of the User Provisioning API](/api-reference/user-provisioning/v4-user-provisioning-process-flow-v3.png)
SAP Concur User Provisioning services supports the SCIM core and enterprise user extensions for identity creation.

Identity information is centralized within Concur and attributes are shared between Spend and Travel services. Custom extensions have been created under Spend and Travel extension name space for provisioning service specific profile data. 

## Supported Extentions
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
 
All preceeded by: urn:ietf:params:scim:

## Implemention steps for the User Provisioning API's

1. ### Authentication and verification
    * Contact your Concur account representative to update your Company JWT [scopes](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#scope-usage) to access the provisioning endpoints. After scopes have been granted to your Authenticaion Application, please verify the scopes on your Authenticaion Application. 
2. ### Retrieve Users 
  * With a known users (UUID, logIn, or employeeNumber) perform a [GET](https://developer.concur.com/api-reference/profile/v4.identity.html#retrieve-users) operation for that user. 

    1. This will validate access to the Concur solution and give an example of data the response data from Concur.
      To retrieve 1 known user: [GET](https://developer.concur.com/api-reference/profile/v4.identity.html#retrieve-users)

      GET /profile/identity/v4/users/lookup/?userName={{Username}}

    2. To retrieve all users:Using [GET](https://developer.concur.com/api-reference/profile/v4.identity.html#retrieve-users) 
    

      GET /profile/identity/v4/users/

4. ### Identity Creation
  * Create new identity with required fields in the core and enterprise extensions. example: [User Creation](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#create-a-new-user-with-users)
  * Verify response response from SAP Concur is correct. example: [User Creation Response](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#create-a-new-user-with-users)
  * If there are errors in response, resolve errors and try again. If there are questions, please reach out to your Concur support representitive for assistance.
5. ### Updating an Identity
  * Using the UUID of the identity that was just created, update an attribute of that identity. example: [User Updating](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#update-a-user-with-users-endpoint)
  * Verify response response from SAP Concur is correct. example: [User Update Response](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#update-a-user-with-users-endpoint)
  * Verify that data provisioned is correct, by a [GET](https://developer.concur.com/api-reference/profile/v4.identity.html#retrieve-users)
 request from above with the UUID of the newly created user.  
  * If there are errors in response, resolve errors and try again. If there are questions, please reach out to your Concur support representitive for assistance.
6. ### Spend or Travel extension profile update
  * Using the UUID of the identity that was created, provision attributes to a spend or travel extension. example: [User Updating](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#update-a-user-with-users-endpoint)
  * Verify that data provisioned is correct, by a [GET](https://developer.concur.com/api-reference/profile/v4.identity.html#retrieve-users)
 request from above with the UUID of the newly created user.  
  * Continue to add attributes and extensions to complete the user profile.
  *  
7. ### Verifying status of provisoining request
Concur uses an asynchronous provisioning design for all extentions other then core & enterprise. Verifying the status of the request is required to determine success or failures and associated errors to resolve. 
  * Using the provisioningID of the request, query the status endpoint for results: [Provisioning status](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html#retrieve-a-detailed-provisioning-request-status)
  * Status results are: 
    1. success - no action necessary
    2. no-op - no action necessary. The system responds with no-op to verify the listenting service recieved the request with no work required.
    3. processing - no action necessary. The system is processing the provisioning request. 
    4. error - action necessary. Review the error message and take appropriate steps to resolve. If there are questions, please reach out to your Concur support representitive for assistance.


### Clients & Partners migrating from from Flat File import or Users V1 API
1. List the attributes your application currently supports within the flat file import or users V1 API. 
2. Map the attributes required to create a users profile that meet the products used.
    * It can be helpful to break down your requirements into the attributes needed for the minimum requirements to create an:
      1. Identity  (name, username, email, company ID number, employee number and active flag) - Identity is required for any user of Concur
      2. Spend (cashAdvanceAccountCode, country, locale, reimbursementCurrency, etc..)
      3. Travel (ruleClass, travelCrsName, etc..)
3. Using mapping fields below, map your attributes to Concur SCIM attributes within one of the Core, Enterprise, Spend and Travel extensions. 
4. Add additional profile information in the appropriate extension for your user. 

### Import File Formats
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

### Legacy API Mapping
--|--|--
Users V1||[Users V1](/api-reference/user-provisioning/mapping/v1-mapping.html)
Bulk 3.0 or 3.1||[Bulk](/api-reference/user-provisioning/mapping/3.0_3.1_mapping.md)



