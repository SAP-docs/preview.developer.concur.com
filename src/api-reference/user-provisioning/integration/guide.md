# User Provisioning Service - Getting Started

As a client or partner of SAP Concur, you can use the System for Cross-Domain Identity Management (SCIM) user management API to enable automatic provisioning of users between your system and SAP Concur. This onboarding document describes how to build a SCIM endpoint and integrate with the SAP Concur provisioning service. The SCIM specification provides a common user schema for provisioning. When used in conjunction with federation standards, SCIM gives administrators an end-to-end, standards-based solution for access management.


## <a name="process-flow"></a> Process Flow

![A process flow diagram of the User Provisioning API](./v4-user-provisioning-process-flow-v3.png)
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

## Implementing the User Provisioning API's

### Steps to mapping attributes UPS for conversion from Flat File import or Users V1 API
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
300|Employee Import|300 Employee Import 
305|Employee Import|305 Employee Import
310 |User Primary Field Addendum|310 User Primary Field Addendum
320|Update ID Information Import|320 Update ID Information Import
350|File type Travel Addendum|350 File type Travel Addendum
370|Statement Employee Import|370 Statement Employee Import
400|Role Import|400 Role Import
500|Delegate Import|500 Delegate Import
550|Enhanced Delegate Import|550 Enhanced Delegate Import



