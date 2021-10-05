---
title: Fetch Attendee Version 2 Callout
layout: reference
---
# Fetch Attendee v2 Callout

The Concur Fetch Attendee version 2.0 callout allows clients to import attendee information from their internal system to the SAP Concur platform when a user is adding attendees to an entry. The service sends the attendee search fields to an application connector, created by the client, a third-party developer, or us. The connector is hosted by the client or third-party developer, and has access to the attendee system of record. The connector uses the attendee information sent from us to search for all matching attendee records in the client's system. Once the connector has the list of possible matches, it sends the attendee data to us. The user sees the list of matches and can select the appropriate attendee for the entry.

This callout differs from the standard SAP Concur web services in the following ways:

* It uses an **outbound message** where we call a public facing API endpoint provided by the application connector. Refer to **Callouts >** [Core Concepts](/api-reference/callouts/callouts-application-connectors.html) for more information.
* The client or third-party developers can configure and maintain the public web service interface (the application connector), or the connector can be maintained by us. This documentation specifies the request and response format required by the SAP Concur platform.
* Clients can either choose to create their own application connector using PHP, Java, .NET etc or can use one of SAP Concur Partner's Attendee Fetch applications.
* The client SAP Concur Administrator must select the attendee types that will use this functionality during application connector registration. Once the attendee types are selected, they will be automatically configured to not allow users to create new attendees manually.

## <a name="process-flow"></a>Process Flow

![A process flow diagram showing flow between the SAP Concur platform, an application connector, and client's data source](./fetch-attendee.png)

## <a name="products-editions"></a>Products and Editions

* Concur Expense Professional Edition
* Concur Expense Standard Edition
* Expense in the SAP Mobile App
* Concur Request Professional Edition

## <a name="product-restrictions"></a>Product Restrictions    

* SAP Concur products are highly configurable, and not all clients will have access to all features.
* Partner developers must determine which configurations are required for their solution prior to the review process.
* Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

## Callout Details <a name="concur-connect-callout-details"></a>

Information on how to download, install, and configure the application connector is included in **Callouts >** [Core Concepts](/api-reference/callouts/callouts-application-connectors.html).

## Fetch Attendee Process Overview <a name="fetch-attendee-process-overview"></a>

The configuration process has the following steps:

1. Client, third party developer, or we download, install, configure, and customize the application connector.
2. Optional for Professional / Premium Only: Client SAP Concur admin creates a new attendee type to use with the connector.
3. Client registers the application connector, selecting the attendee types that will use the connector.
Once the configuration is complete, the callout uses the following process:
	1. The user selects the appropriate attendee type in the **Search Attendees** window.
	2. The user enters information into an attendee field and clicks **Search**.
	3. SAP Concur sends the attendee search field information to the application connector. This request includes all attendee fields, with any blank values formatted as an empty string.
	4. The application connector queries the attendee system of record and returns a list of results to us.  
**NOTE**: The results list is limited to 100 records.  
	5. We display the results in the **Search Results** section of the **Search Attendees** window.  
**NOTE**: If the application connector does not respond or returns an error, the user is notified in a popup window within .
We will not resend the request unless the user manually initiates the search again.
	6. If the user adds the attendees to the entry, the attendee information is saved in the SAP Concur platform.

## <a name="security"></a>Security

SAP Concur will make calls to the application connector's endpoint using SSL. During configuration, we will connect to the application connector to validate that its hostname and access credentials are valid.

We will not be able to connect to the application connector until a certificate signed by a Certificate Authority (CA) is installed in the application connector. You will need to install the signed certificate before we can access the connector.

## <a name="authentication"></a>Authentication

Authentication between us and the application connector is performed using HTTP Basic Authentication. By default, these credentials are stored in the appropriate web configuration file for your platform, such as web.xml or web.config. These credentials are entered in SAP Concur on the **Register Application Connector** page in **Web Services** under **Administration**.

Refer to the **Installation Process** for more information.

## <a name="functions"></a>Functions

[Version 3.0: Post Attendee Search Request](/api-reference/callouts/post-fetch-attendee.html)

## Installation Process <a name="installation-process"></a>

The installation process includes installing the application connector, and registering it with us.

First, the client or third-party developer will create and install the application connector on their web site or a third party hosting site. The connector should be programmed to accept the requests from us and provide the documented responses.

During installation, the client or developer will select and configure an externally available endpoint on the host server for us to send the attendee search request to.

The client then registers the application connector with SAP Concur:  

1. Log in to the SAP Concur platform as an administrative user.  
2. Select Administration > Web Services.  
3. Click Manage Application Connectors.  
4. Click New.  
5. Fill out the fields according to the **Application Connector Fields** table shown below.
6. In the Services section, select Fetch Attendee.  
7. Click Configure. The Configure Service window appears.  
8. Enter the endpoint that  we will connect to on your server. Example: `/attendee/v2.0/fetch`. **Note:** The endpoint name should contain 'v2.0', otherwise the API defaults to v1.0 and returns a different set of fields.
9. Select the Active check box if the endpoint is ready for use. Usually you will do this after you have implemented and tested the endpoint in your application connector.  
10. Select the attendee types that will use the application connector. These attendee types will be automatically configured to not allow users to create new attendees manually.  
11. Click OK.
12. Click Test Connection. We will attempt to access the configured endpoint with the provided user credentials.
13. Click Save. The application connector is now registered with us and enabled.

**Application Connector Fields**

Field	|Description
------|------------
Name|Enter the name that should appear in the list of connectors.
Description|Enter the description of the function of the connector, such as what back-end system it might connect to.
Host Name|Enter the hostname for the connector. Example: `https://{servername}`
User Name|Enter the user name required to authenticate with the host. This must be the same as the user name specified in the configuration file for the application connector, using HTTP Basic Authentication.
Password|Enter the password required to authenticate with the host. This must be the same as the password specified in the configuration file for the application connector, using HTTP Basic Authentication 1.0.


## <a name="concur-config"></a>SAP Concur Configuration

The SAP Concur administrator can select which attendee types use the connector when registering the application connector. These attendee types will be automatically configured to not allow users to create new attendees manually.

**Professional/Premium Only:** If desired, the administrator can create a new attendee type specifically for use with the connector.

## <a name="responses-errors"></a>Responses and Errors

Refer to the [HTTP Status Codes](/api-reference/http-status-codes.html) for details of the common responses and errors.
