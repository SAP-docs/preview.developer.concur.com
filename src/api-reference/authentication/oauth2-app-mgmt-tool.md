---
title: OAuth 2.0 Application Management Tool
layout: reference
---

# OAuth 2.0 Application Management Tool

The OAuth 2.0 Application Management tool enables clients who have Client Web Services to generate Client IDs (App IDs) and Client Secrets without contacting SAP Concur support. It also enables clients to create OAuth 2.0 compliant applications. In order to complete the workflow, you must first contact Client Web Services to request that the OAuth 2.0 Application Management tool be enabled for your entity.

Once the tool is enabled, an admin with the Web Services Administrator role will have a link to the OAuth 2.0 Application Management tool on the Authentication Administration page.

>**NOTE**: For admins working with Standard entities, a user with the **Can Administer** permission has the Web Services Administrator role.

The OAuth 2.0 Application Management tool enables clients to do the following:

* Create new OAuth 2.0 apps.
* Edit previously created OAuth 2.0 apps.
* Generate Client IDs (App IDs) and Client Secrets.
*	Generate new Client Secrets for previously created apps.
*	Search for and sort OAuth 2.0 applications.
*	View information about previously created apps such as Client ID, App Name, App Description, Date Created, and Last Modified.

## Data Center Availability

This tool is currently available in the US2, EU2, and APJ1 data centers. Please contact Client Web Services for any assistance needed.

## Using the Tool

When the tool is enabled, the Web Services Admin has a link to the OAuth 2.0 Application Management tool when they navigate to the **Administration** > **Company** > **Authentication Admin** page.

![Product screen showing the Authentication Administration page](./tool-images/1-Oauth-admin.png)

Clicking OAuth 2.0 Application Management opens the **Application List** page.

![Product screen showing the Application List page](./tool-images/2-Application-List.png)

On the **Application List** page, is a list of previously created applications. Clicking the **Client ID** for an application opens the **App Details** page for that app.

### To Create a New App

Click **Create New App**.

![Product screen showing the Create New App page](./tool-images/3-Create-New-app.png)

Populate the fields as indicated below.

Field Name|	Definition|	Required|	Description
---|---|---|---
`App Name`|	String|	Y	|Name of the App. NOTE: Include Company, Partner, or Team Name
`App Description`|	String|	Y |Provide the purpose of the App. This entitles to how you are intending to use the app.
`App Stage`|	Drop-down list|	Y |Specify the current phase of the App - Development or Test or Production.
`Application Type`|	Drop-down list|	Y |Specify the configuration of the App - Web Services (WS) Client or Integration with Concur Solutions (ICS) Client.
`Allowed Grants`|	Selected Grants|	Y	|In order to obtain a token, the client application needs to call the OAuth2 endpoint using various grants depending on the authentication scenarios required. NOTE: For more information, refer to [Authorization Grants](https://developer.concur.com/api-reference/authentication/apidoc.html#auth_grant).
`Allowed Scopes`|	Selected Scopes|	Y	|Scopes limit access to the APIs required for your application. All scopes listed on the Developer Center are available in the tool. Scopes that are not listed can be requested. NOTE: For more information, refer to [Scopes](https://developer.concur.com/api-reference/authentication/scopes.html)

Click **Submit**. The **App Credentials** page appears.

![Product screen showing the Create New App page](./tool-images/4-Client-id-secret.png)

The **App Credentials** page displays the **Client ID** and **Client Secret**. Before clicking **OK**, record the **Client ID** and **Client Secret**. They will be required to obtain a **Company Request Token**.

Once you click **OK** the new application appears in the list on the **Application List** page. You can confirm the details of the app, including the **Client ID** and **Client Secret** by clicking the **Client ID** in the list on the **Application List** page.
