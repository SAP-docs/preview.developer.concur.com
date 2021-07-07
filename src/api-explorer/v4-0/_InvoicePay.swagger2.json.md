---
title: Invoice Pay v4.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
generator: widdershins v4.0.1

---

<h1 id="invoice-pay">Invoice Pay v4.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

SAP Concur partners with external payment providers for processing invoice payments. These payment providers are listed on the App Center and can integrate with the Invoice product by using the Invoice Pay APIs. Payment providers can get a list of all the payments authorized to be processed by them, and send back status of those payments.

Base URLs:

* <a href="//www.concursolutions.com/">//www.concursolutions.com/</a>

<h1 id="invoice-pay-resources">Resources</h1>

 

## manyUsingGET

<a id="opIdmanyUsingGET"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /www.concursolutions.com/invoice/provider-payment/v4/payments \
  -H 'Accept: application/json'

```

```http
GET /www.concursolutions.com/invoice/provider-payment/v4/payments HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/invoice/provider-payment/v4/payments',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/www.concursolutions.com/invoice/provider-payment/v4/payments',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/www.concursolutions.com/invoice/provider-payment/v4/payments', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/www.concursolutions.com/invoice/provider-payment/v4/payments', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/www.concursolutions.com/invoice/provider-payment/v4/payments");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/www.concursolutions.com/invoice/provider-payment/v4/payments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /invoice/provider-payment/v4/payments`

*Payment Providers can use this API to get details of payments marked to be paid by them*

> Example responses

> 200 Response

```json
{
  "payments": [
    {
      "invoices": [
        {
          "invoiceAmount": {
            "amount": "string",
            "currency": "str"
          },
          "invoiceId": "string",
          "invoiceNumber": "string",
          "notesToSupplier": "string",
          "paymentAmount": {
            "amount": "string",
            "currency": "str"
          }
        }
      ],
      "paymentDueDate": "2019-08-24",
      "paymentId": "string",
      "paymentMethod": "string",
      "totalAmount": {
        "amount": "string",
        "currency": "str"
      },
      "vendor": {
        "addressLine1": "string",
        "addressLine2": "string",
        "addressLine3": "string",
        "buyerAccountNumber": "string",
        "city": "string",
        "countryCode": "string",
        "countryName": "string",
        "email": "string",
        "firstName": "string",
        "lastName": "string",
        "phoneNumber": "string",
        "postalCode": "string",
        "state": "string",
        "vendorAddrCode": "string",
        "vendorCode": "string",
        "vendorName": "string"
      }
    }
  ]
}
```

<h3 id="manyusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[readPaymentResult](#schemareadpaymentresult)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## oneUsingPOST

<a id="opIdoneUsingPOST"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /www.concursolutions.com/invoice/provider-payment/v4/payments/{PaymentId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /www.concursolutions.com/invoice/provider-payment/v4/payments/{PaymentId} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "paidAmount": {
    "amount": "string",
    "currency": "str"
  },
  "paymentAdjustmentNotes": "string",
  "paymentInitiationDate": "2019-08-24",
  "paymentMethod": "ACH",
  "paymentSettlementDate": "2019-08-24",
  "providerReference": "string",
  "status": "PAID",
  "statusDate": "2019-08-24",
  "statusMessage": "string",
  "thirdPartyPaymentIdentifier": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/www.concursolutions.com/invoice/provider-payment/v4/payments/{PaymentId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/www.concursolutions.com/invoice/provider-payment/v4/payments/{PaymentId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/www.concursolutions.com/invoice/provider-payment/v4/payments/{PaymentId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/www.concursolutions.com/invoice/provider-payment/v4/payments/{PaymentId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/www.concursolutions.com/invoice/provider-payment/v4/payments/{PaymentId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/www.concursolutions.com/invoice/provider-payment/v4/payments/{PaymentId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /invoice/provider-payment/v4/payments/{PaymentId}`

*Payment Providers can use this API to update the status of payments made by them*

> Body parameter

```json
{
  "paidAmount": {
    "amount": "string",
    "currency": "str"
  },
  "paymentAdjustmentNotes": "string",
  "paymentInitiationDate": "2019-08-24",
  "paymentMethod": "ACH",
  "paymentSettlementDate": "2019-08-24",
  "providerReference": "string",
  "status": "PAID",
  "statusDate": "2019-08-24",
  "statusMessage": "string",
  "thirdPartyPaymentIdentifier": "string"
}
```

<h3 id="oneusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PaymentId|path|string|true|PaymentId|
|body|body|[updatePayment](#schemaupdatepayment)|true|Payment|

> Example responses

> 200 Response

```json
{
  "createdDate": "2019-08-24T14:15:22Z",
  "lastModifiedDate": "2019-08-24T14:15:22Z",
  "paidAmount": {
    "amount": "string",
    "currency": "str"
  },
  "paymentAdjustmentNotes": "string",
  "paymentInitiationDate": "2019-08-24",
  "paymentMethod": "ACH",
  "paymentSettlementDate": "2019-08-24",
  "providerReference": "string",
  "status": "PAID",
  "statusDate": "2019-08-24",
  "statusMessage": "string",
  "thirdPartyPaymentIdentifier": "string"
}
```

<h3 id="oneusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[updatePaymentResult](#schemaupdatepaymentresult)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_amount">amount</h2>

<a id="schemaamount"></a>
<a id="schema_amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "amount": "string",
  "currency": "str"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|false|none|Amount. Maximum 20 characters.|
|currency|string|false|none|Currency Code. Maximum 3 characters.|

<h2 id="tocS_invoice">invoice</h2>

<a id="schemainvoice"></a>
<a id="schema_invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "invoiceAmount": {
    "amount": "string",
    "currency": "str"
  },
  "invoiceId": "string",
  "invoiceNumber": "string",
  "notesToSupplier": "string",
  "paymentAmount": {
    "amount": "string",
    "currency": "str"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoiceAmount|[amount](#schemaamount)|false|none|none|
|invoiceId|string|false|none|Unique identifier of the invoice in SAP Concur. This can be used to get additional invoice information from other APIs. This is the same as paymentRequestID in other Invoice APIs. Maximum 20 characters.|
|invoiceNumber|string|false|none|Invoice Number. Maximum 50 characters.|
|notesToSupplier|string|false|none|Notes to the supplier contain remittance information that the buyer wants to provide to the supplier. Maximum 500 characters.|
|paymentAmount|[amount](#schemaamount)|false|none|none|

<h2 id="tocS_payment">payment</h2>

<a id="schemapayment"></a>
<a id="schema_payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "invoices": [
    {
      "invoiceAmount": {
        "amount": "string",
        "currency": "str"
      },
      "invoiceId": "string",
      "invoiceNumber": "string",
      "notesToSupplier": "string",
      "paymentAmount": {
        "amount": "string",
        "currency": "str"
      }
    }
  ],
  "paymentDueDate": "2019-08-24",
  "paymentId": "string",
  "paymentMethod": "string",
  "totalAmount": {
    "amount": "string",
    "currency": "str"
  },
  "vendor": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "buyerAccountNumber": "string",
    "city": "string",
    "countryCode": "string",
    "countryName": "string",
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "phoneNumber": "string",
    "postalCode": "string",
    "state": "string",
    "vendorAddrCode": "string",
    "vendorCode": "string",
    "vendorName": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoices|[[invoice](#schemainvoice)]|false|none|none|
|paymentDueDate|string(date)|false|none|The date by which the payment should be made.|
|paymentId|string|false|none|Unique identifier of the payment in SAP Concur. Maximum 36 characters.|
|paymentMethod|string|false|none|The value is always PAYPVD which means that the client wants to pay using a payment provider. Maximum 15 characters.|
|totalAmount|[amount](#schemaamount)|false|none|none|
|vendor|[vendor](#schemavendor)|false|none|none|

<h2 id="tocS_readPaymentResult">readPaymentResult</h2>

<a id="schemareadpaymentresult"></a>
<a id="schema_readPaymentResult"></a>
<a id="tocSreadpaymentresult"></a>
<a id="tocsreadpaymentresult"></a>

```json
{
  "payments": [
    {
      "invoices": [
        {
          "invoiceAmount": {
            "amount": "string",
            "currency": "str"
          },
          "invoiceId": "string",
          "invoiceNumber": "string",
          "notesToSupplier": "string",
          "paymentAmount": {
            "amount": "string",
            "currency": "str"
          }
        }
      ],
      "paymentDueDate": "2019-08-24",
      "paymentId": "string",
      "paymentMethod": "string",
      "totalAmount": {
        "amount": "string",
        "currency": "str"
      },
      "vendor": {
        "addressLine1": "string",
        "addressLine2": "string",
        "addressLine3": "string",
        "buyerAccountNumber": "string",
        "city": "string",
        "countryCode": "string",
        "countryName": "string",
        "email": "string",
        "firstName": "string",
        "lastName": "string",
        "phoneNumber": "string",
        "postalCode": "string",
        "state": "string",
        "vendorAddrCode": "string",
        "vendorCode": "string",
        "vendorName": "string"
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payments|[[payment](#schemapayment)]|false|none|none|

<h2 id="tocS_updatePayment">updatePayment</h2>

<a id="schemaupdatepayment"></a>
<a id="schema_updatePayment"></a>
<a id="tocSupdatepayment"></a>
<a id="tocsupdatepayment"></a>

```json
{
  "paidAmount": {
    "amount": "string",
    "currency": "str"
  },
  "paymentAdjustmentNotes": "string",
  "paymentInitiationDate": "2019-08-24",
  "paymentMethod": "ACH",
  "paymentSettlementDate": "2019-08-24",
  "providerReference": "string",
  "status": "PAID",
  "statusDate": "2019-08-24",
  "statusMessage": "string",
  "thirdPartyPaymentIdentifier": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paidAmount|[amount](#schemaamount)|false|none|none|
|paymentAdjustmentNotes|string|false|none|Payment adjustment notes sent by the payment provider. Maximum 255 characters.|
|paymentInitiationDate|string(date)|false|none|The date the payment was initiated.|
|paymentMethod|string|false|none|Payment method used by the payment provider. Required if the status is PAID, CHECK_PROCESSED, or CARD_SETTLED.|
|paymentSettlementDate|string(date)|false|none|The date the payment will be in the payees account.|
|providerReference|string|false|none|Unique identifier of the payment in the payment provider's system. This will be used for internal troubleshooting. Maximum 100 characters.|
|status|string|true|none|Used to depict success, error or any other intermediate state, defined by SAP Concur.|
|statusDate|string(date)|true|none|The date that the payment provider recorded this status change.|
|statusMessage|string|false|none|Payment provider description of the status. Providers can supply any message. Maximum 255 characters.|
|thirdPartyPaymentIdentifier|string|false|none|Check number if the payment was done via check or trace number for ACH payments. Maximum 255 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentMethod|ACH|
|paymentMethod|CHECK|
|paymentMethod|WIRE|
|paymentMethod|CARD|
|paymentMethod|OTHER|
|status|PAID|
|status|CANCELED|
|status|CARD_AUTHORIZED|
|status|CARD_EMAIL_SENT|
|status|CARD_SETTLED|
|status|CHECK_MAILED|
|status|CHECK_PRINTED|
|status|CHECK_PROCESSED|
|status|CHECK_VOIDED|
|status|PENDING_RETRIEVAL|
|status|PROCESSING|
|status|REJECTED|
|status|RETRIEVED|
|status|RETURNED|

<h2 id="tocS_updatePaymentResult">updatePaymentResult</h2>

<a id="schemaupdatepaymentresult"></a>
<a id="schema_updatePaymentResult"></a>
<a id="tocSupdatepaymentresult"></a>
<a id="tocsupdatepaymentresult"></a>

```json
{
  "createdDate": "2019-08-24T14:15:22Z",
  "lastModifiedDate": "2019-08-24T14:15:22Z",
  "paidAmount": {
    "amount": "string",
    "currency": "str"
  },
  "paymentAdjustmentNotes": "string",
  "paymentInitiationDate": "2019-08-24",
  "paymentMethod": "ACH",
  "paymentSettlementDate": "2019-08-24",
  "providerReference": "string",
  "status": "PAID",
  "statusDate": "2019-08-24",
  "statusMessage": "string",
  "thirdPartyPaymentIdentifier": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdDate|string(date-time)|false|none|The date the payment was created.|
|lastModifiedDate|string(date-time)|false|none|The date the payment was last modified.|
|paidAmount|[amount](#schemaamount)|false|none|none|
|paymentAdjustmentNotes|string|false|none|Payment adjustment notes sent by the payment provider. Maximum 255 characters.|
|paymentInitiationDate|string(date)|false|none|The date the payment was initiated.|
|paymentMethod|string|false|none|Payment method used by the payment provider. Required if the status is PAID, CHECK_PROCESSED, or CARD_SETTLED.|
|paymentSettlementDate|string(date)|false|none|The date the payment will be in the payees account.|
|providerReference|string|false|none|Unique identifier of the payment in the payment provider's system. Maximum 100 characters.|
|status|string|true|none|Used to depict success, error or any other intermediate state, defined by SAP Concur.|
|statusDate|string(date)|true|none|The date that the payment provider recorded this status change.|
|statusMessage|string|false|none|Payment provider description of the status. Providers can supply any message. Maximum 255 characters.|
|thirdPartyPaymentIdentifier|string|false|none|Check number if the payment was done via check or trace number for ACH payments. Maximum 255 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentMethod|ACH|
|paymentMethod|CHECK|
|paymentMethod|WIRE|
|paymentMethod|CARD|
|paymentMethod|OTHER|
|status|PAID|
|status|CANCELED|
|status|CARD_AUTHORIZED|
|status|CARD_EMAIL_SENT|
|status|CARD_SETTLED|
|status|CHECK_MAILED|
|status|CHECK_PRINTED|
|status|CHECK_PROCESSED|
|status|CHECK_VOIDED|
|status|PENDING_RETRIEVAL|
|status|PROCESSING|
|status|REJECTED|
|status|RETRIEVED|
|status|RETURNED|

<h2 id="tocS_vendor">vendor</h2>

<a id="schemavendor"></a>
<a id="schema_vendor"></a>
<a id="tocSvendor"></a>
<a id="tocsvendor"></a>

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "addressLine3": "string",
  "buyerAccountNumber": "string",
  "city": "string",
  "countryCode": "string",
  "countryName": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "phoneNumber": "string",
  "postalCode": "string",
  "state": "string",
  "vendorAddrCode": "string",
  "vendorCode": "string",
  "vendorName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string|false|none|Vendor Address line 1. Maximum 255 characters.|
|addressLine2|string|false|none|Vendor Address line 2. Maximum 255 characters.|
|addressLine3|string|false|none|Vendor Address line 3. Maximum 255 characters.|
|buyerAccountNumber|string|false|none|Buyer Account Number. Maximum 50 characters.|
|city|string|false|none|Vendor Address City. Maximum 255 characters.|
|countryCode|string|false|none|Vendor Address Country Code. Maximum 2 characters.|
|countryName|string|false|none|Vendor Address Country Name. Maximum 64 characters.|
|email|string|false|none|Email Address. Maximum 255 characters.|
|firstName|string|false|none|First Name. Maximum 255 characters.|
|lastName|string|false|none|Last Name. Maximum 255 characters.|
|phoneNumber|string|false|none|Phone Number. Maximum 25 characters.|
|postalCode|string|false|none|Vendor Address Postal Code. Maximum 20 characters.|
|state|string|false|none|Vendor Address State. Maximum 10 characters.|
|vendorAddrCode|string|false|none|Vendor Address Code. Maximum 64 characters.|
|vendorCode|string|false|none|Vendor Code. Maximum 32 characters.|
|vendorName|string|false|none|Vendor Name. Maximum 255 characters.|

