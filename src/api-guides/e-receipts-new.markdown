---
title: E-Receipts and Quick Expense Integration Guide For User Apps
layout: reference
---

# E-Receipts and Quick Expense User App Integration Guide

E-receipts are digital representations of receipts with both a receipt image and structured data. The e-receipts come from pre-authorized and trusted merchants and are transmitted to the SAP Concur platform using our **Receipt** API (not email) on behalf of individual users who have connected their accounts/profiles between us and the merchant in advance.

Merchants can also use the **Quick Expense** API to create an expense with basic information such as date, amount, and expense type, with or without a receipt image. The eReceipt or Quick Expense can be added to an expense report within Concur Expense, allowing the user to provide additional details such as attendees, itemizations, etc.

This integration guide helps SAP Concur App Center E-Receipt and Quick Expense user app integration partners to develop and list their apps for the App Center.

## Getting Started

**New App Center Partners:** Your company must have entered into a commercial agreement with us. If you have not yet entered into an agreement review the information on the [Build App Center Solutions](https://developer.concur.com/solutions/app-center.html) page.

**Existing App Center Partners:** The SAP Concur Platform team will need to configure your existing sandbox, among other things to enable access. You can make that request by contacting your [Alliance Manager](mailto:concur_AppCenterAlliance@sap.com?subject=Receipts%20v4%20Migration%20Request).

## Development Environment

### Sandboxes and Accounts

* You will have a shared sandbox on each of following SAP Concur data centers: US2, EU2, and China (by request).
* You will have 3 test accounts on each of following SAP Concur data centers: US2, EU2, and China (by request).

### Development App

* A development app will be created for you and the app `client_id` and `client_secret` will be provided for development and testing purposes.
* You need to provide the development app’s connect URL (redirect URL) while submitting the partner technical readiness form.

### Production App

* Once you complete the development app certification walkthrough, you will be provided a production app `client_id` and `client_secret`.
* You need to provide the production app’s connect URL (redirect URL) while submitting the partner technical readiness form.

## User Connections / Authentication

Depending on the connection flow, a grant will be selected for authentication. The authentication methods below are available to obtain an `access_token`. Password grant, authorization grant, or one-time password grant is required for certification:

* [Password Grant](/api-reference/authentication/apidoc.html#password-grant) - Connect from the SAP Concur App Center.
* [Authorization Grant](/api-reference/authentication/apidoc.html#auth-grant) - Connect from the partner app.
* [One-Time Password Grant](/api-reference/authentication/apidoc.html#otp-grant) - Connect from the partner app using email.

## App Center Flow  - Connecting from SAP Concur App Center

[Password grant](https://developer.concur.com/api-reference/authentication/apidoc.html#password-grant) allows the user to establish a connection from App Center. The user needs to login via their SAP Concur credentials to access the app in the App Center. In the development and testing phase, you would be provided with the app listing solely for the purpose of development and testing. This app listing will be accessed via a deep link. This deep link will be provided to you before you start development. The instructions to connect/authenticate via password grant are:

1. A logged in user clicks the connect button on the app listing in the App Center and authorizes your app to post data. App Listing Example: ![Example of App Center Listing Page](/assets/img/api-guides/e-receipts/app-listing-sample.png)

2. After the user clicks the "Connect" button, the user will see a prompt with the terms & conditions. User agrees the terms and conditions and clicks the "I Agree" button. ![Screenshot of App Listing Terms and Conditions](/assets/img/api-guides/e-receipts/app-listing-terms-conditions.png)

3. The authorization service will redirect the user to your app’s [landing page](https://developer.concur.com/manage-apps/go-market-docs/app-center-partner-marketing-toolkit.html#landing-pages). Please follow the [App Center Design Guidelines](https://developer.concur.com/manage-apps/go-market-docs/app-center-ux-guidelines-consumer.html) to create a web page that listens for an HTTP GET request. The [Guideline Checklist](https://developer.concur.com/manage-apps/go-market-docs/app-center-ux-guidelines-consumer.html#guideline-checklist) provides a list of required and recommended components of your landing page design. Please make sure all the required options are checked before scheduling the certification walkthrough. You must prepare separate landing pages for the development environment and the production environment. You must send the landing page redirect URIs to [PlatformCertification@sap.com](mailto:PlatformCertification@sap.com) before starting  development.

4. Your landing page should allow the user to log in with an existing account or create a new account. ![Sample of Partner App Validate User Identity](/assets/img/api-guides/e-receipts/app-center-partner-user-validation.png)

5. The redirect URI will contain `id` and `requestToken` parameters. Example: `https://{partner-redirect-URI}?id=8568a4cd-8ffc-49d6-9417-be2d69aa075f&requestToken=5l85ae5a-426f-4d6f-8af4-08648c4b696b`

6. When your application receives the redirect call, strip the `id` and `requestToken` values from the URI.

7. Use `id` as the `username` parameter value and `requestToken` as the `password` parameter value on a post request to the SAP Concur authorization service to obtain the official OAuth2 `access_token` and `refresh_token` for the user using the [password grant](https://developer.concur.com/api-reference/authentication/apidoc.html#password-grant) while [being geo aware](https://developer.concur.com/api-guides/e-receipts.html#being-geo-aware).

   * There are two credential types allowed with password grant, `password` and `authtoken`. For the App Center partner, please use the `authtoken` credential type for the connections from the App Center.
   * Do not post the request to the authorization service before confirming user identification in their App.
   * Please refer [password grant](https://developer.concur.com/api-reference/authentication/apidoc.html#password-grant-) for the post body description.

   **Example : Password Grant**

   **Request**

   ```http
   POST /oauth2/v0/token HTTP/1.1
   Content-Type: application/x-www-form-urlencoded
   Host: us2.api.concursolutions.com

   POST BODY
   client_id={partner app client_id}
   &client_secret={partner app client_secret}
   &grant_type=password
   &username ={‘id’ from the redirect URL}
   &password ={‘requestToken’ from the redirect URL}
   &credtype= authtoken
   ```

   **Response**

   ```json
   HTTP/1.1 200 OK
   Content-Type: application/json
   {
   "expires_in": "3600",
   "scope": "{app-scopes}",
   "token_type": "Bearer",
   "access_token": "{access_token}",
   "refresh_token": "{refresh_token}",
   "refresh_expires_in": "{expiration time}",
   "id_token": "{id_token}",
   "geolocation": "https://us2.api.concursolutions.com"
   }
   ```

8. Decode the `id_token` to obtain the sub value and store this value as the user `id` (see [https://jwt.io](https://jwt.io/)).
9. An `access_token` is valid only for **one hour**. The `access_token` should be cached in memory and discarded after use.
10. After the user has successfully completed the login/enrollment process, store the following with the user’s profile in your database.

    * `refresh_token`: (36 characters including dashes) valid for six months from the day and time issued.
    * `refresh_expires_in`: Epoch time format, convert to UTC.
    * `geolocation`: to be used when making API calls on behalf of the user.
    * `sub`: (36 characters including dashes) user id value provided on the redirect URI. The user id will be used to post receipts to the user’s SAP Concur account.

11. Confirm visually to the user that their partner app account has been successfully linked with their SAP Concur account.

12. You now can use the `access_token` for making API calls.

## Web Flow  - Connecting from the Partner Web or Mobile App

[Authorization Grant](/api-reference/authentication/apidoc.html#authorization-grant-) allows the user to connect directly from your website or the mobile app.

1. User clicks **Link to Concur** button within your website or mobile App. Partner Web or Mobile Connection Example:

   ![Sample of a Partner Web App UI](/assets/img/api-guides/e-receipts/auth-connect-from-partner-app.png)

2. Your app will make a call to the authorization service.

   Example: `GET /oauth2/v0/authorize?client_id={your-app-clientId}&redirect_uri={partner_redirect_URI}&response_type=code`

3. The authorization service will prompt the user with two options: **Username** or **Send a link to my email**

   ![Screenshot of Sign In Options](/assets/img/api-guides/e-receipts/auth-options.png)

4. Handling the **username/password** option:

   * When users choose the **username/password** option, the authorization service will prompt the user to enter their SAP Concur credentials.

     ![Screenshot of the Sign In Form](/assets/img/api-guides/e-receipts/auth-sign-in-password.png)

   * After successfully logging in, the user will be redirected to the partner’s redirect URI with a query parameter containing a one time use code and user’s geolocation, which will be used to obtain an official OAuth2 `access_token` and `refresh_token`.

     Example: `<https://{partner_redirect_URI}?geolocation={geolocation}&code={code}>`

5. Handling the **email** option:

   * The email option is designed for users who do not want to use passwords or those that do not have passwords such as single sign-on (SSO) users.
   * Email is sent IF the user provides their **primary** SAP Concur email address (email1).

     ![Sample of Primary Email/Email1 Setting](/assets/img/api-guides/e-receipts/email1-setting.png)

   * After the user clicks the “Sign in with Concur” link within the email, the user will be redirected to your redirect URI with a query parameter containing a one-time use code and user’s geolocation, which will be used to obtain an official OAuth2 `access_token` and `refresh_token`.

     Example: `<https://{partner_redirect_URI}?geolocation={geolocation}&code={code}>`

     ![Sample of Auth Email](/assets/img/api-guides/e-receipts/auth-email-options.png)

6. When your application receives the redirect call with the code and user’s geolocation, strip the `code` value and user’s `geolocation` from the redirect URI to use on a post request to the authorization service to obtain an official OAuth2 `access_token` and `refresh_token` using the [authorization grant](https://developer.concur.com/api-reference/authentication/apidoc.html#auth-grant). Refer to authentication grant documentation for the post body description.

   **Example: Authorization Grant – Request An Access Token**

   **Request**

   ```http
   POST /oauth2/v0/token HTTP/1.1
   Content-Type: application/x-www-form-urlencoded
   Host: us2.api.concursolutions.com
   POST BODY:
   client_id={client_id}
   &client_secret={client_secret}
   &grant_type=authorization_code
   &redirect_uri={redirect_uri}&code={code}
   ```

   **Response**

   ```json
   HTTP/1.1 200 OK
   Content-Type: application
   {
   "expires_in": "3600",
   "scope": "{app-scopes}",
   "token_type": "Bearer",
   "access_token": "{access_token}",
   "refresh_token": "{refresh_token}",
   "refresh_expires_in": "{expiration time}",
   "id_token": "{id_token}",
   "geolocation": "https://us2.api.concursolutions.com"
   }
   ```

7. Decode the `id_token` to obtain the `sub` value and store this value as the user `id` (see [https://jwt.io](https://jwt.io/)).

8. An `access_token` is valid only for **one hour**. The `access_token` should be cached in memory and discarded after use.

9. Store the following with the user’s profile in your database.

   * `refresh_token`: (36 characters including dashes) valid for six months from the day and time issued.
   * `refresh_expires_in`: Epoch time format, convert to UTC.
   * `geolocation`: to be used when making API calls on behalf of the user.
   * `sub`: (36 characters including dashes) user id value provided on the redirect URI. The user id will be used to post receipts to the user’s SAP Concur account.

10. Confirm visually to the user that their partner app account has been successfully linked with their SAP Concur account, and that the receipts will be posted to the user’s SAP Concur account after payment.

## Connect from the Partner App Using Email

The [one-time password grant](/api-reference/authentication/apidoc.html#otp-grant) leverages email to provide per user access tokens to client applications. This grant type requires the following steps:

* The calling application calls the OAuth2 service specifying the otp grant type along with required parameters.
*	The OAuth2 service generates a one-time token that it sends through the messaging mechanism chosen by the application.
*	The user retrieves the token and presents it to the application. The method of presenting the token to the application is the responsibility of the application.
* The application presents this one-time token to the OAuth2 service via the token endpoint.

1. User enters their email address associated with the SAP Concur profile within the partner’s website or mobile app. Partner one-time password (OTP) Connection Example below:

   ![Example of what an App Center partner might display on their own site to allow their users to connect their user account at the partner with their SAP Concur account, using the one-time password flow.](/assets/img/api-guides/e-receipts/otp-send-email.png)

2. User clicks the Link/Connect button. **Note**: User may have more than one email associated with their SAP Concur profile.The email address used for this method should be the email address listed as Email1 on the user’s SAP Concur profile.

   ![Example of Primary Email Setting](/assets/img/api-guides/e-receipts/email1-setting.png)

3. Your app will make a call to the authorization service to trigger the OTP email using [OTP grant](https://developer.concur.com/api-reference/authentication/apidoc.html#otp-grant) while [being geo aware](https://developer.concur.com/api-guides/e-receipts.html#being-geo-aware). Refer [Request a one-time token](https://developer.concur.com/api-reference/authentication/apidoc.html#one-time-password-grant-) for the post body descriptions. The following are reserved words and cannot be used as client application defined parameters for `/otp` API: `client_id`,`client_secret`,`channel_type`,`channel_handle`

   **Example**

   **Request**

   ```http
   POST /oauth2/v0/otp HTTP/1.1
   Content-Type: application/x-www-form-urlencoded
   Host: us2.api.concursolutions.com

   POST BODY:
   client_id={client_id}
   &client_secret={client_secret}
   &channel_type=email
   &channel_handle={email_address}
   &name={user_name_in_email}
   &company={company_name_in_email}
   &link={callback_url}
   ```

   **Response**

   ```json
   HTTP/1.1 200 OK
   Content-Type: application/json
   {
       "message": "opt sent"
   }
   ```

4. User will receive the email with ‘Sign in with Concur’ button. ![Sample OTP Email User Received](/assets/img/api-guides/e-receipts/otp-email-sample.png)

5. After user clicks the “Sign in with Concur” link within the email, they will be redirected to the partner’s redirect URI with a query parameter containing a one-time token **`otl`** that will be used to obtain an official OAuth2 `access_token` and `refresh_token`. Example: `<https://{partner_redirect_URI}&otl=7add4621f00b47e1aa2d8a61739c97e6>`

6. When your application receives the redirect call with the one-time token, strip the token value from the redirect URI and use that token on a Post request to the authorization service to obtain an official OAuth2 `access_token` and `refresh_token` using the [OTP grant](https://developer.concur.com/api-reference/authentication/apidoc.html#otp-grant) while [being geo aware](https://developer.concur.com/api-guides/e-receipts.html#being-geo-aware). The following are reserved words and cannot be used as client application defined parameters for `/token` API: `"client_id","client_secret","channel_type","channel_handle","scope","grant_type","otp"`

   **Example:**

   **Request**

   ```http
   POST /oauth2/v0/token HTTP/1.1
   Content-Type: application/x-www-form-urlencoded
   Host: us2.api.concursolutions.com

   POST BODY:
   client_id={client_id}
   &client_secret={client_secret}
   &channel_type=email
   &channel_handle={email_address}
   &grant_type=otp
   &otp={one_time_token}
   ```

   **Response**

   ```json
   HTTP/1.1 200 OK
   Content-Type: application/json
   {
   "expires_in": "3600",
   "scope": "{app-scopes}",
   "token_type": "Bearer",
   "access_token": "{access_token}",
   "refresh_token": "{refresh_token}",
   "refresh_expires_in": "{expiration time}",
   "id_token": "{id_token}",
   "geolocation": "https://us2.api.concursolutions.com"
   }
   ```

7. Decode the `id_token` to obtain the `sub` value and store this value as the user `id` (see [https://jwt.io](https://jwt.io/)).

8. An `access_token` is valid only for **one hour**. The access token should be cached in memory and discarded after use.

9. Store the following with the users profile in your database.

   * `refresh_token`: (36 characters including dashes) valid for six months from the day and time issued.
   * `refresh_expires_in`: Epoch time format, convert to UTC.
   * `geolocation`: to be used when making API calls on behalf of the user.
   * `sub`: (36 characters including dashes) user id value provided on the redirect URI. The user id will be used to post receipts to the user’s SAP Concur account.

10. Confirm visually to the user that their partner app account has been successfully linked with their SAP Concur account, and that the receipts will be posted to the user’s SAP Concur account after payment.

## Token Management

### Refreshing Token

1. You will obtain a fresh `access_token` before making API calls on behalf of your users using the [Refreshing A Token](https://developer.concur.com/api-reference/authentication/apidoc.html#refreshing-a-token-) API call.

2. A `refresh_token` is valid for **six months**. Calling the API to refresh the `access_token` will also get the expiration time of `refresh_token` updated. And schedule a process to run that will refresh a `refresh_token` prior to the expiration date if necessary.

3. The below elements are returned with the new `access_token`, replace previously stored values for the user in your database:

   * `refresh_token` (replace)
   * `refresh_expires_in` (replace)
   * `geolocation` (replace)

4. If the user does not log in for **six months** the `refresh_token` will expire and the user’s partner account and SAP Concur account will be **de-linked**. To prevent this from happening, build a scheduled job that scans your database for expiration dates and refreshes tokens X days prior to expiration. Refer [Refreshing A Token API](https://developer.concur.com/api-reference/authentication/apidoc.html#refreshing-a-token-) for the post body description and example.

### Revoke Token

You need to revoke a user’s `access_token` if the user terminates their account from your application. To revoke a user’s `access_token` call the /app-mgmt/v0/connections endpoint with a **DELETE** action. Refer to [revoking a token](https://developer.concur.com/api-reference/authentication/apidoc.html#revoking-a-token-) for more details and the post example.

## <a name="being-geo-aware"></a>Being Geo Aware

A client’s SAP Concur account may reside one of our many data centers. During the client onboarding process, determine in which datacenter the client's instance resides. When your application is created, you will be provided with a `client_id`, `client_secret`, and `geolocation`. When obtaining a token, your application should use the base URI for the geolocation in which your application exists.

You will need to be aware of the geolocation where the user exists and make the call to the APIs correctly. If there is a case where you will not or do not know the user's geolocation, then you should make the API call using the **default** US Base URI https://us.api.concursolutions.com and expect a geolocation error that will return the correct geoLocation for the user.

If you receive the following error while calling the authentication service, for example, /otp Auth API, please retry with the endpoint based on geolocation in the returned message.

```json
HTTP 400 Bad Request

{
   "error": "invalid_request",
   "concur-correlationid": "{correlation_id}",
   "error_description": "user lives elsewhere",
   "code": 16,
   "geolocation": "https://us.api.concursolutions.com"
}
```

> **Note**: When obtaining the `access_token` via an authentication API call, the geolocation data will be included in the response. The geolocation should be stored along with the `access_token`. Your app will then be able to make subsequent calls using the token and the correct end points based on the geolocation.

### Base URI

When making API calls, the appropriate base URI should be used. There are three different scenarios:

* Obtaining a token for a user.
* Refreshing a token.
* Calling other APIs.

The base URI for obtaining a token will use your application’s geolocation. The base URI for refreshing tokens and all other API calls will use the token’s geolocation.

* US Production = <https://us.api.concursolutions.com>
* EU Production = <https://eu.api.concursolutions.com>
* China Production = <https://cn.api.concurcdc.cn>

The full list of available token geolocations is available on the [Base URIs](https://developer.concur.com/platform/base-uris.html) page.

## Posting eReceipts

For information on getting started with [Receipts v4](https://developer.concur.com/api-reference/receipts/get-started.html).

* You should select General eReceipt type or Grand Transportation eReceipt type from the [Supported Receipt type](https://developer.concur.com/api-reference/receipts/supported-receipt-types.html) list and retrieve the list [schemas](https://developer.concur.com/api-reference/receipts/get-started.html) for the selected receipt types.
* To ensure that you are using the correct endpoint URLs, the safest practice is to check the service index before every request. [Get service Index](https://developer.concur.com/api-reference/receipts/endpoints.html#endpoint-service-index)
* We generate a standard receipt if you do not provide a receipt image.
* We will display your app logo in standard generated receipts (size 100x100 px).
* If your app currently generates a receipt image, (.png, .jpg, .tif, .pdf, or other image file), you can include it in your post. Follow the requirement of [supported image formats](https://developer.concur.com/api-reference/receipts/endpoints.html#definitions-of-resources) if you are posting the eReceipts with images.

### Post a General eReceipt

1. Obtain a fresh `access_token` for the user using [refresh grant](https://developer.concur.com/api-reference/authentication/apidoc.html#refresh_token).
2. You will need the user **id** previously stored in the user’s profile to post receipts on their behalf.
3. Post receipt using the [Post Receipt](https://developer.concur.com/api-reference/receipts/endpoints.html#endpoint-post-a-receipt) endpoint.
4. You should store the `concur-correlationid` and the **Location** link from the response headers even for successful responses, this will facilitate support efforts in case of a missing receipt from a user’s SAP Concur account.

The general eReceipt schema includes all receipt core definitions.

   **Example: Posting a General e-Receipt**

   **Request**

   ````json
   POST /receipts/v4/users/{UUID} HTTP/1.1
   Host: {HOST}
   Authorization: Bearer {ACCESS_TOKEN}
   Link: <http://schema.concursolutions.com/general-receipt.schema.json>; rel="describedBy"
   Content-Type: application/json
   {
      "dateTime": "2022-10-22T13:00:00+0800",
      "reference": "91310000",
      "seller": {
      "taxId": "MA1FL0TJ7J",
      "name": "ABC Corporation",
      "description": ",",
      "location": {
         "address": {
               "streetAddress": "225 32nd Ave",
               "addressLocality": "Seattle",
               "addressRegion": "WA",
               "addressCountry": "US"
               }
         }
      },
      "total": "180.0",
      "taxesTotal": "20.0",
      "subtotal": "160.0",
      "payments": [
         {
               "amount": "180.0"
         }
      ],
      "currencyCode": "USD"
   }

   **Response**

   ```http
      HTTP/1.1 201 OK
   ````

**Example: Posting a General e-Receipt with Image**

**Request**

```json
POST /receipts/v4/users/{UUID} HTTP/1.1
Host: {HOST}
Authorization: Bearer {ACCESS_TOKEN}
Link: <http://schema.concursolutions.com/general-receipt.schema.json>; rel="describedBy"
Content-Type: multipart/form-data;
Content-Disposition: form-data; name="image"; filename="receipt_image.pdf"
Content-Type: application/pdf
Content-Disposition: form-data; name="receipt"
{
      "dateTime": "2022-10-22T13:00:00+0800",
      "reference": "91310000",
      "seller": {
      "taxId": "MA1FL0TJ7J",
      "name": "ABC Corporation",
      "description": ",",
      "location": {
         "address": {
               "streetAddress": "225 32nd Ave",
               "addressLocality": "Seattle",
               "addressRegion": "WA",
               "addressCountry": "US"
               }
         }
      },
      "total": "180.0",
      "taxesTotal": "20.0",
      "subtotal": "160.0",
      "payments": [
         {
               "amount": "180.0"
         }
      ],
      "currencyCode": "USD"
}

```

**Response**

```http
   HTTP/1.1 201 OK
```

### Post a Ground Transportation eReceipt

1. Obtain a fresh `access_token` for the user using [refresh grant](https://developer.concur.com/api-reference/authentication/apidoc.html#refresh_token).
2. You will need the user **id** previously stored in the user’s profile to post receipts on their behalf.
3. Post receipt using the [Post Receipt](https://developer.concur.com/api-reference/receipts/endpoints.html#endpoint-post-a-receipt) endpoint.
4. You should store the `concur-correlationid` and the **Location** link from the response headers even for successful responses, this will facilitate support efforts in case of a missing receipt from the user’s SAP Concur account.
5. The [Ground Transportation eReceipt Schema](https://developer.concur.com/api-reference/receipts/supported-receipt-types.html#ground-transport-receipt) includes all forms of non-aerial transportation and all [Receipt Core Definition](https://developer.concur.com/api-reference/receipts/supported-receipt-types.html#receipt-core-definitions).

Refer to the [Grand Transportation eReceipt](https://developer.concur.com/api-reference/receipts/sample-receipts.html#ground-transport) post example.

### Response Codes

Response Codes (Success/Failure) Can be found at:

<https://developer.concur.com/api-reference/receipts/response-codes.html>

## Posting Quick Expenses

The Quick Expense API can be used to create an expense with basic information such as date, amount, and expense type, with or without a receipt image. This expense can be added to an expense report within Concur Expense, allowing the user to provide additional details such as attendees, itemizations, etc.

### Creating a Quick Expense

1. Obtain a fresh `access_token` for the user using [refresh grant](https://developer.concur.com/api-reference/authentication/apidoc.html#refresh_token).
2. You will need the user **id** previously stored in the user’s profile to post receipts on their behalf.
3. Post the quick expense using the [Quick Expense](https://developer.concur.com/api-reference/expense/quick-expense/v4.quick-expense.html#create-a-quick-expense-) endpoint.
4. You should store the `concur-correlationid` from the response headers and the `quickExpenseIdUri` from the response body. This will facilitate support efforts in case of a missing quick expense from user’s SAP Concur account.
5. The [Quick Expense Schema](https://developer.concur.com/api-reference/expense/quick-expense/v4.quick-expense.html#schema-) includes required fields of `expenseTypeId`, `transactionAmount`, and `transactionDate`.
6. The supported `expenseTypeId` value can be retrieved from [Expense Group Configurations v3.0](https://developer.concur.com/api-reference/expense/expense-report/expense-group-configurations.html). The frequently used `expenseTypeId` values are listed  below:

| expenseTypeId | Description                      |
| ------------- | -------------------------------- |
| AIRFR         | Airfare                          |
| AWRDS         | Gifts - Clients                  |
| BANKF         | Bank Fees                        |
| BRKFT         | Breakfast                        |
| BUSML         | Entertainment - Clients          |
| CARRT         | Car Rental                       |
| CELPH         | Mobile/Cellular Phone            |
| DINNR         | Dinner                           |
| DUESX         | Professional Subscriptions/Dues  |
| GASXX         | Fuel                             |
| GIFTS         | Gifts - Staff                    |
| LNDRY         | Laundry                          |
| LOCPH         | Telephone/Fax                    |
| LODNG         | Hotel                            |
| LUNCH         | Lunch                            |
| MILEG         | Personal Car Mileage             |
| MISCL         | Miscellaneous                    |
| OFCSP         | Office Equipment/Hardware        |
| ONLIN         | Internet/Online Fees             |
| PARKG         | Parking                          |
| POSTG         | Postage                          |
| SEMNR         | Seminar/Course fees              |
| TAXIX         | Taxi                             |
| TOLLS         | Tolls/Road Charges               |
| TRAIN         | Public Transport                 |
| TRDSH         | Marketing/Promotional Costs      |
| 01004         | Entertainment - Staff            |
| 01005         | Courier/Shipping/Freight         |
| 01006         | Printing/Photocopying/Stationery |
| 01007         | Office Supplies/Software         |
| 01009         | Tips/Gratuities                  |
| 01012         | Tuition/Training Reimbursement   |
| 01025         | Train                            |
| 01027         | Business Meals (Attendees)       |
| 01028         | Individual Meals                 |

**Example: Posting a Quick Expense**

**Request**

```json

POST /quickexpense/v4/users/{UUID}/context/TRAVELER/quickexpenses HTTP/1.1
Host: {HOST}
Authorization: Bearer {ACCESS_TOKEN}
Content-Type: application/json
{
   "Comment":"Meal Expenses",
   "expenseTypeId":"MEALS",
   "location":{
      "city":"SHANGHAI",
      "countryCode":"CN",
      "countrySubDivisionCode":"CN-31",
      "name":"Shanghai Restaurant"
   },
   "paymentTypeId":"CASHX",
   "transactionAmount":{
      "currencyCode":"CNY",
      "value":160.00
   },
   "transactionDate":"2022-08-08",
   "Vendor": "Shanghai Restaurant"
}
```

**Response**

```json
HTTP/1.1 201 OK
{
   "mobileEntryKeyUri": "https://us2.api.concursolutions.com/quickexpense/v4/users/{UUID}/context/TRAVELER/quickexpenses/1234157338",
   "quickExpenseIdUri": "https://us2.api.concursolutions.com/quickexpense/v4/users/{UUID}/context/TRAVELER/quickexpenses/506CF67C85BA436097F434F39CAE7DD8"
}
```

## Creating and Updating an App Center Listing

You need to send the complete landing page content to [concur_appcentermarketing@sap.com](mailto:concur_appcentermarketing@sap.com) for review prior to scheduling the certification call with [PlatformCertification@sap.com](mailto:PlatformCertification@sap.com). This includes:

* App Center Listing Form ([Download](https://developer.concur.com/manage-apps/go-market-docs/app-center-partner-listing-form.docx))
* Listing Images (Please follow the image specification in the App Center Listing Form.)

The App Center Marketing team will review your content for clarity, ease of reading, and consistency with the SAP Concur brand guidelines. The App Center Marketing team will return it with any comments or suggestions. Please plan for a 10 to 14-day turnaround window for the review process.

Once your content is finalized, your listing will be queued for launch on an agreed upon date. Your app must be certified prior to launch.

User Connection apps are launched on the following [release dates](https://developer.concur.com/manage-apps/go-market-docs/apps-for-me-release-schedule.html).

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
|`Geolocation` | Must securely store last received GeoLocation to use on subsequent calls. |
|`refresh_token` | Must securely store last received `refresh_token` to use on subsequent calls. |
|Token Expiration Date | Must securely store `refresh_token` expiry date. |

 **API Logging**

|Requirement | Description |
| --- | --- |
|Error Codes |Must log Error Code / Error Description. |
|`correlation_id` |Must log when provided. Some legacy APIs do not. |
|`UserID` |Should log `UserID` (User who clicked the Connect button). (Highly Recommended) |
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
|OAuth2 - CN DC Client |You must demonstrate ability to authenticate client in China Data Center (default geolocation). |
|eReceipt or Quick Expense API - US DC Client |You must demonstrate ability to post eReceipt or Quick Expense data in US Data Center. |
|eReceipt or Quick Expense API - EU DC Client |You must demonstrate ability to post eReceipt or Quick Expense data in EU Data Center. |
|eReceipt or Quick Expense API - CN DC Client |You must demonstrate ability to post eReceipt or Quick Expense data in China Data Center. |

## Error Handling

### Retry Logic for Timeouts

Your app should have the retry logic for any API call timeout. For example, retry for every 30 seconds if you get the API call timeout and retry 5 ~ 10 times.

### Error 500/503

Error 500 is an internal server error. If you receive an error 500 while posting an eReceipt, you should retry the API for at least 3 time. If you still encounter an error 500 after retrying, please log a support ticket.

### Error 403

Error 403 is authentication related error. A 403 will be returned if there is no JWT in the authorization header of the request, or if the JWT is invalid or expired. This response is also for cases where the JWT does not include the scope required to fulfill the request.

### Error 404

The receipt(s) you requested could not be found. Check that the receipt and/or user ID that you used are correct.

### Error Logging

If you receive an error while calling an API, please save the error code, error message, error responses body. You must save the `concur-correlationId` from the API response header, which is required to log the support ticket.

## FAQ

### How to Log a Support Case

You should be provide the contact detail to your SAP Concur BD/Alliance manager for creating an account on the partner support portal.

To log a support case, please login and open a partner support case from [partner support portal](https://sapconcur.my.salesforce.com/secur/login_portal.jsp?orgId=00D600000007Dq3&portalId=06060000000PrEi). You should provide the [required information](https://developer.concur.com/tools-support/support.html#how-to-log-a-support-case) when logging a support case.

### Where Can I Find the Concur API or Product Update Information

The SAP Concur API monthly updates can be found in the [Developer Platform Release Notes](https://developer.concur.com/tools-support/release-notes/index.html).

The SAP Concur product related update can be found in the [Client Shared Release Notes](http://www.concurtraining.com/customers/tech_pubs/RN_shared_planned/_client_shared_RN_all.htm).
