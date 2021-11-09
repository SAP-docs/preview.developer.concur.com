---
title: Company Request Token Self-Service Tool
layout: reference
---

# Company Request Token Self-Service Tool

The Company Request Token tool enables clients to generate a Company Request Token without assistance from SAP Concur support. A Company Request Token is required to request a JSON web token (JWT) when connecting to APIs in the SAP Concur platform. This tool also enables clients to generate a replacement Company Request Token without assistance from SAP Concur support if their Company Request Token expires or is lost.

## Limitations

This tool is currently only available in the US (North America) and EMEA data centers. All other data centers can contact Client Web Services for assistance.

## What the Admin Sees

Admins with the required permissions see a link to the **Company Request Token** page on the **Administration** > **Company** > **Authentication Administration** page.

After clicking **Company Request Token**, the admin sees the **Company Request Tokens** page.

![Product screen showing the Company Request Tokens page](./tool-images/company-refresh-tool-01.png)

On the **Company Request Tokens** page, the admin enters their **Client ID** in the **App ID** field, and then clicks **Submit**.

>**NOTE**: Clients can obtain a **Client ID** through one of the following methods:

* Clients with Client Web Services who have requested access to the self-service tool for application management can generate a Client ID using the self-service tool.
* Clients who do not have Client Web Services can contact SAP Concur support to obtain an App ID as needed.

The **Company Request Token Successfully Created** dialog appears.

![Product screen showing the Company Request Token Successfully Created dialog](./tool-images/company-refresh-tool-02.png)

This dialog contains the Company UUID and the Company Request Token. The admin must copy and save both the Company UUID and the Company Request Token before signing out or navigating away from this dialog.

The admin can use the Company Request Token to generate a Company JWT, using the Password Grant process. Instructions for the Password Grant process are on the Company Request Token page, as well as the [SAP Concur Developer Center](https://developer.concur.com/api-reference/authentication/apidoc.html#password_grant).

The Company Request Token has a token expiry lifetime of 24 hours. The admin must obtain the Company JWT within that 24-hour period. If the Company Request Token expires or is lost, the admin can access the Company Request Tokens page again, enter their Client ID into the App ID field, and then generate a replacement Company Request Token.

## Company Authentication Workflow

There are three steps for completing the company authentication workflow:

1. Obtain a Client ID and Client Secret via the OAuth 2.0 Application Management tool.
2. Obtain a Company Request Token via the Company Request Token tool.
3. Exchange the Company Request Token for Access and Refresh Tokens.

### OAuth 2.0 Application Management Tool

To generate a new Client ID (App ID) and Client Secret:

1. Click **Administration** > **Company** > **Authentication Admin**. The **Authentication Administration** page appears.
2. Click **OAuth 2.0 Application Management**. The **Application List** page appears.
3. Click **Create New App**.

![Product screen showing the Application List page](./tool-images/company-refresh-tool-03.png)

The **Create New App** page appears.

![Product screen showing the Create New App page](./tool-images/company-refresh-tool-04.png)

>**NOTE**: The App Type is read-only.

4. Populate the fields.

Field Name|	Definition|	Required|	Description
---|---|---|---
`App Name`|	String|	Y	|Name of the App. NOTE: Include Company, Partner, or Team Name
`App Type`|	NA|	NA|	This field defaults to Client and is read-only.
`Allowed Grants`|	Selected Grants|	Y	|In order to obtain a token, the client application needs to call the OAuth2 endpoint using various grants depending on the authentication scenarios required. NOTE: For more information, refer to Authorization Grants (https://developer.concur.com/api-reference/authentication/apidoc.html#auth_grant).
`Allowed Scopes`|	Selected Scopes|	Y	|Scopes limit access to the APIs required for your application. All scopes listed on the Developer Center are available in the tool. Scopes that are not listed can be requested. NOTE: For more information, refer to [Scopes](https://developer.concur.com/api-reference/authentication/scopes.html)
SAP Detokenizer|	SAP Integration Cloud Suite (ICS) Only|	N|	This checkbox is only enabled for SAP ICS client apps.

5. Click **Submit**. The **App Credentials** page appears. The **App Credentials** page displays the **Client ID** and **Client Secret**. Before clicking **OK**, record the **Client ID** and **Client Secret**. They will be required in subsequent steps of this procedure.

![Product screen showing the App Credentials page](./tool-images/company-refresh-tool-05.png)

6. Click **OK**. The new application appears in the list on the **Application List** page. You can confirm the details of the app, including the **Client ID** and **Client Secret** by clicking the **Client ID** in the list on the **Application List** page.

## Company Request Token UI

1. Click **Administration** > **Company** > **Authentication Admin. The **Authentication Administration** page appears.
2. Click **Company Request Token**. The admin **Company Request Tokens** page appears.

![Product screen showing the Company Request Tokens page](./tool-images/company-refresh-tool-01.png)

3. In the **App ID** field, type the **Client ID** you recorded in Step 5 of the preceding procedure.

![Product screen showing the Company Request dialog](./tool-images/company-refresh-tool-06.png)

4. Click **Submit**. The **Company Request Token Successfully Created** dialog appears. Before clicking **OK**, record the **Company UUID** and the **Company Request Token**.

![Product screen showing the Company Request Tokens page](./tool-images/company-refresh-tool-01.png)

>**NOTE**: The Company Request Token expires after 24 hours. If you cannot complete the workflow within 24 hours of generating the Company Request Token, you must regenerate the token before completing the workflow. You can regenerate the Company Request Token by reentering the Client ID in the App ID and clicking Submit again.

5. To obtain a Company JWT, follow the steps on the **Company Request Tokens** page:

*  To exchange the Request Token for a Refresh Token and an Access Token, replace the following values and run the Password Grant CURL command to obtain an Access Token and Refresh Token.

   * `client_id`
   * `client_secret`
   * `company_UUID`
   * `request_token`

  ```
  curl -X POST 'https://us.api.concursolutions.com/oauth2/v0/token' \ -H
  'Content-Type: application/x-www-form-urlencoded' \ --data-urlencode
  'client_id=<client_id>' \ --data-urlencode
  'client_secret=<client_secret>' \ --data-urlencode
  'grant_type=password' \ --data-urlencode
  'username=<company_UUID>' \ --data-urlencode
  'password=<request_token>' \ --data-urlencode
  'credtype=authtoken'
  ```

For more information, refer to the [Password Grants](https://developer.concur.com/api-reference/authentication/apidoc.html#password_grant).

* A successful response will be in the following form:

  ```
  CURL response
  HTTP/1.1 200 OK
  Content-Type: application/json
  Date: date-requested
  Content-Length: 3397
  Connection: Close
  {
    "expires_in": "3600",
    "scope": "<app scopes>",
    "token_type": "Bearer",
    "access_token": "<access_token>",
    "refresh_token": "<refresh_token>",
  "geolocation":"https://us.api.concursolutions.com/oauth2/v0/token"
  }
  ```
* The Company JWT or `access_token` has a token lifetime of 1 hour and can be used to call SAP Concur APIs. The Company JWT can be refreshed by calling the Refresh Grant. The application must store the `refresh_token` in order to be able to continue refreshing the Company JWT when it expires.
For more information on Refresh Grants, refer to [Refreshing a Token](https://developer.concur.com/api-reference/authentication/apidoc.html#refresh_token).
* If the `refresh_token` is lost, expires, or is revoked, a new request token must be obtained. For more information, refer to [Authentication](https://developer.concur.com/api-reference/authentication/apidoc.html). After you have completed the steps on the **Company Request Tokens** page, you have completed the process of obtaining the Company JWT and can start making calls to SAP Concur APIs.
