---
title: Refresh Token Management Automation
layout: reference
---

# Tutorial 2: Refresh Token Management Automation

Uses timestamps and a json file to automatically manage refresh token expiration.

## Prerequisites

* You have created a Refresh Token from an API call using the previous [concur-get-refresh-token tutorial](/api-guides/authentication/concur-get-refresh-token/concur-get-refresh-token.html).
* SAP Concur instance credentials
* [Node.js](https://nodejs.org/)
* [GitHub account](https://github.com/)
* IDE or text editor

## You will learn

How to manage refresh token expiration using timestamps and a json file.

## Regenerate Your Company Request Token

1. Go to the [**Company Request Token**](https://www.concursolutions.com/nui/authadmin/companytokens) screen.
2. Enter your **App ID** in the required field and click **Submit** to regenerate your company request token.
3. Copy/paste the Company UUID and company request token fields to a text file.
![Confirmation screen showing the Company UUID and company request token successfully created.](./img/company-request-token-created.png)
1. Click **OK** after you have saved this information to a text file.

## Setup the NodeJs App

1. Get the [`NodeJs sample code`](https://github.com/SAP-samples/concur-api-samplecode).
2. Open `SampleCode/Tutorial_2/RefreshTokenManagement.js` in your IDE or text editor.

## Regenerate Your Credentials File

1. Type `node RefreshTokenManagement.js` in terminal to run the app to generate your `credentials.json` file. This generates messages in the terminal that show the credentials object.
![Terminal showing the node RefreshTokenManagement.js command.](./img/run-refresh-token-management-app.png)
![Credentials object messages.](./img/run-refresh-token-management-app-generate-file.png)
1. Fill in the empty fields in this file with the information in the credential object. You can use all of the information from your `credentials.json` file in the previous [concur-get-refresh-token tutorial](/api-guides/authentication/concur-get-refresh-token/concur-get-refresh-token.html) except for the company request token.
![Empty fields that need to be populated with credentials.](./img/credentials-json.png)

## Regenerate and Store Your Refresh Token in a JSON File

1. Run the app again. Since the app does not have a stored valid refresh token, the app will not find a valid refresh token in `refreshTokenObjectFile.json`.
![Terminal showing node RefreshTokenManagement.js.](./img/run-refresh-token-management-app.png)
![Response showing no valid refresh token.](./img/no-stored-refresh-token-found.png)
1. The app will call the Oauth2 /token endpoint using your credentials and regenerate your refresh token.
![Response showing refresh token, private information grayed out.](./img/regenerate-refresh-token.png)
1. If the API call is successful, the refresh token data is converted from JSON format into a refresh token object and stored in the file `refreshTokenObjectFile.json`.
![Refresh token received and written to file.](./img/stored-refresh-token.png)
![RefreshTokenObjectFile.json added.](./img/refresh-token-object-file.png)

## Load Your Stored Refresh Token from a JSON File

1. Run the app again. Since the app now has a valid refresh token, the app will successfully load and check the validity of the file `refreshTokenObjectFile.json`.
![Terminal showing node RefreshTokenManagement.js.](./img/run-refresh-token-management-app.png)
1. Check for a successful validity check on the refresh token object loaded from `refreshTokenObjectFile.json`. If the refresh token object validity check is successful, the refresh token object will be stored in the app for use with future API calls.
![Message that refresh token is valid, and will be used to make API calls.](./img/loaded-refresh-token-valid.png)


