

<h2 id="receipts">Receipts v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>

<h3 id="receipts-resources">Resources</h3>

#### post__common_receipts

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/common/receipts \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST https://www.concursolutions.com/api/v3.0/common/receipts HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "Amount": 0,
  "CurrencyCode": "string",
  "CustomFields": {
    "Name": "string",
    "Value": "string"
  },
  "FormofPaymentCode": "string",
  "GeneralDetail": {
    "LineItems": {
      "Amount": 0,
      "Date": "2019-08-24T14:15:22Z",
      "Description": "string",
      "Description2": "string",
      "Quantity": 0,
      "Rate": 0,
      "RateType": "string",
      "Reference": "string",
      "SequenceNumber": 0
    }
  },
  "HotelDetail": {
    "AverageDailyRoomRate": 0,
    "CheckinDateTime": "2019-08-24T14:15:22Z",
    "CheckoutDateTime": "2019-08-24T14:15:22Z",
    "ConfirmationNumber": "string",
    "GNR": "string",
    "LineItems": {
      "Amount": 0,
      "Date": "2019-08-24T14:15:22Z",
      "Description": "string",
      "Description2": "string",
      "Quantity": 0,
      "Rate": 0,
      "RateType": "string",
      "Reference": "string",
      "SequenceNumber": 0
    },
    "NumberInParty": 0,
    "RatePlanType": "string",
    "RoomNumber": "string",
    "RoomType": "string"
  },
  "ImageBase64": "string",
  "MatchingFact": {
    "Type": "string",
    "Value": "string"
  },
  "Merchant": {
    "Location": {
      "Address": "string",
      "Address2": "string",
      "City": "string",
      "CountryCode": "string",
      "CountrySubdivisionCode": "string",
      "EmailAddress": "string",
      "FaxNumber": "string",
      "InternetAddress": "string",
      "Name": "string",
      "PostalCode": "string",
      "TelephoneNumber": "string"
    },
    "Name": "string"
  },
  "PaymentCard": {
    "AuthorizationCode": "string",
    "MaskedNumber": "string",
    "Type": "string"
  },
  "RideDetail": {
    "DriverName": "string",
    "DropoffLatitude": 0,
    "DropoffLongitude": 0,
    "EndDateTime": "2019-08-24T14:15:22Z",
    "LineItems": {
      "Amount": 0,
      "Date": "2019-08-24T14:15:22Z",
      "Description": "string",
      "Description2": "string",
      "Quantity": 0,
      "Rate": 0,
      "RateType": "string",
      "Reference": "string",
      "SequenceNumber": 0
    },
    "StartDateTime": "2019-08-24T14:15:22Z",
    "VehicleNumber": "string"
  },
  "TransactionDateTime": "2019-08-24T14:15:22Z",
  "Type": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://www.concursolutions.com/api/v3.0/common/receipts',
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

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/common/receipts',
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

r = requests.post('https://www.concursolutions.com/api/v3.0/common/receipts', headers = headers)

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
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/common/receipts', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/common/receipts");
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
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/common/receipts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /common/receipts`

*Create a new receipt entry*

Creates a new receipt entry. This operation enables a provider company to post receipts to Concur.

> Body parameter

```json
{
  "Amount": 0,
  "CurrencyCode": "string",
  "CustomFields": {
    "Name": "string",
    "Value": "string"
  },
  "FormofPaymentCode": "string",
  "GeneralDetail": {
    "LineItems": {
      "Amount": 0,
      "Date": "2019-08-24T14:15:22Z",
      "Description": "string",
      "Description2": "string",
      "Quantity": 0,
      "Rate": 0,
      "RateType": "string",
      "Reference": "string",
      "SequenceNumber": 0
    }
  },
  "HotelDetail": {
    "AverageDailyRoomRate": 0,
    "CheckinDateTime": "2019-08-24T14:15:22Z",
    "CheckoutDateTime": "2019-08-24T14:15:22Z",
    "ConfirmationNumber": "string",
    "GNR": "string",
    "LineItems": {
      "Amount": 0,
      "Date": "2019-08-24T14:15:22Z",
      "Description": "string",
      "Description2": "string",
      "Quantity": 0,
      "Rate": 0,
      "RateType": "string",
      "Reference": "string",
      "SequenceNumber": 0
    },
    "NumberInParty": 0,
    "RatePlanType": "string",
    "RoomNumber": "string",
    "RoomType": "string"
  },
  "ImageBase64": "string",
  "MatchingFact": {
    "Type": "string",
    "Value": "string"
  },
  "Merchant": {
    "Location": {
      "Address": "string",
      "Address2": "string",
      "City": "string",
      "CountryCode": "string",
      "CountrySubdivisionCode": "string",
      "EmailAddress": "string",
      "FaxNumber": "string",
      "InternetAddress": "string",
      "Name": "string",
      "PostalCode": "string",
      "TelephoneNumber": "string"
    },
    "Name": "string"
  },
  "PaymentCard": {
    "AuthorizationCode": "string",
    "MaskedNumber": "string",
    "Type": "string"
  },
  "RideDetail": {
    "DriverName": "string",
    "DropoffLatitude": 0,
    "DropoffLongitude": 0,
    "EndDateTime": "2019-08-24T14:15:22Z",
    "LineItems": {
      "Amount": 0,
      "Date": "2019-08-24T14:15:22Z",
      "Description": "string",
      "Description2": "string",
      "Quantity": 0,
      "Rate": 0,
      "RateType": "string",
      "Reference": "string",
      "SequenceNumber": 0
    },
    "StartDateTime": "2019-08-24T14:15:22Z",
    "VehicleNumber": "string"
  },
  "TransactionDateTime": "2019-08-24T14:15:22Z",
  "Type": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ReceiptPost>
  <Amount>0</Amount>
  <CurrencyCode>string</CurrencyCode>
  <CustomFields>
    <Name>string</Name>
    <Value>string</Value>
  </CustomFields>
  <FormofPaymentCode>string</FormofPaymentCode>
  <GeneralDetail>
    <LineItems>
      <Amount>0</Amount>
      <Date>2019-08-24T14:15:22Z</Date>
      <Description>string</Description>
      <Description2>string</Description2>
      <Quantity>0</Quantity>
      <Rate>0</Rate>
      <RateType>string</RateType>
      <Reference>string</Reference>
      <SequenceNumber>0</SequenceNumber>
    </LineItems>
  </GeneralDetail>
  <HotelDetail>
    <AverageDailyRoomRate>0</AverageDailyRoomRate>
    <CheckinDateTime>2019-08-24T14:15:22Z</CheckinDateTime>
    <CheckoutDateTime>2019-08-24T14:15:22Z</CheckoutDateTime>
    <ConfirmationNumber>string</ConfirmationNumber>
    <GNR>string</GNR>
    <LineItems>
      <Amount>0</Amount>
      <Date>2019-08-24T14:15:22Z</Date>
      <Description>string</Description>
      <Description2>string</Description2>
      <Quantity>0</Quantity>
      <Rate>0</Rate>
      <RateType>string</RateType>
      <Reference>string</Reference>
      <SequenceNumber>0</SequenceNumber>
    </LineItems>
    <NumberInParty>0</NumberInParty>
    <RatePlanType>string</RatePlanType>
    <RoomNumber>string</RoomNumber>
    <RoomType>string</RoomType>
  </HotelDetail>
  <ImageBase64>string</ImageBase64>
  <MatchingFact>
    <Type>string</Type>
    <Value>string</Value>
  </MatchingFact>
  <Merchant>
    <Location>
      <Address>string</Address>
      <Address2>string</Address2>
      <City>string</City>
      <CountryCode>string</CountryCode>
      <CountrySubdivisionCode>string</CountrySubdivisionCode>
      <EmailAddress>string</EmailAddress>
      <FaxNumber>string</FaxNumber>
      <InternetAddress>string</InternetAddress>
      <Name>string</Name>
      <PostalCode>string</PostalCode>
      <TelephoneNumber>string</TelephoneNumber>
    </Location>
    <Name>string</Name>
  </Merchant>
  <PaymentCard>
    <AuthorizationCode>string</AuthorizationCode>
    <MaskedNumber>string</MaskedNumber>
    <Type>string</Type>
  </PaymentCard>
  <RideDetail>
    <DriverName>string</DriverName>
    <DropoffLatitude>0</DropoffLatitude>
    <DropoffLongitude>0</DropoffLongitude>
    <EndDateTime>2019-08-24T14:15:22Z</EndDateTime>
    <LineItems>
      <Amount>0</Amount>
      <Date>2019-08-24T14:15:22Z</Date>
      <Description>string</Description>
      <Description2>string</Description2>
      <Quantity>0</Quantity>
      <Rate>0</Rate>
      <RateType>string</RateType>
      <Reference>string</Reference>
      <SequenceNumber>0</SequenceNumber>
    </LineItems>
    <StartDateTime>2019-08-24T14:15:22Z</StartDateTime>
    <VehicleNumber>string</VehicleNumber>
  </RideDetail>
  <TransactionDateTime>2019-08-24T14:15:22Z</TransactionDateTime>
  <Type>string</Type>
</ReceiptPost>
```

<h3 id="post__common_receipts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReceiptPost](#schemareceiptpost)|true|The Receipt object to create.|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "URI": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<CreateResponse>
  <ID>string</ID>
  <URI>string</URI>
</CreateResponse>
```

<h3 id="post__common_receipts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreateResponse](#schemacreateresponse)|

<aside class="success">
This operation does not require authentication
</aside>

### Schemas

<h3 id="tocS_CreateResponse">CreateResponse</h3>

<a id="schemacreateresponse"></a>
<a id="schema_CreateResponse"></a>
<a id="tocScreateresponse"></a>
<a id="tocscreateresponse"></a>

```json
{
  "ID": "string",
  "URI": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|none|
|URI|string|false|none|none|

<h3 id="tocS_CustomField">CustomField</h3>

<a id="schemacustomfield"></a>
<a id="schema_CustomField"></a>
<a id="tocScustomfield"></a>
<a id="tocscustomfield"></a>

```json
{
  "Name": "string",
  "Value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|The name of the custom field. Maximum length: 128 characters|
|Value|string|false|none|The value of the custom field. Maximum length: 256 characters|

<h3 id="tocS_Decimal">Decimal</h3>

<a id="schemadecimal"></a>
<a id="schema_Decimal"></a>
<a id="tocSdecimal"></a>
<a id="tocsdecimal"></a>

```json
{}

```

### Properties

*None*

<h3 id="tocS_GeneralDetail">GeneralDetail</h3>

<a id="schemageneraldetail"></a>
<a id="schema_GeneralDetail"></a>
<a id="tocSgeneraldetail"></a>
<a id="tocsgeneraldetail"></a>

```json
{
  "LineItems": {
    "Amount": 0,
    "Date": "2019-08-24T14:15:22Z",
    "Description": "string",
    "Description2": "string",
    "Quantity": 0,
    "Rate": 0,
    "RateType": "string",
    "Reference": "string",
    "SequenceNumber": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LineItems|[LineItem](#schemalineitem)|false|none|none|

<h3 id="tocS_HotelDetail">HotelDetail</h3>

<a id="schemahoteldetail"></a>
<a id="schema_HotelDetail"></a>
<a id="tocShoteldetail"></a>
<a id="tocshoteldetail"></a>

```json
{
  "AverageDailyRoomRate": 0,
  "CheckinDateTime": "2019-08-24T14:15:22Z",
  "CheckoutDateTime": "2019-08-24T14:15:22Z",
  "ConfirmationNumber": "string",
  "GNR": "string",
  "LineItems": {
    "Amount": 0,
    "Date": "2019-08-24T14:15:22Z",
    "Description": "string",
    "Description2": "string",
    "Quantity": 0,
    "Rate": 0,
    "RateType": "string",
    "Reference": "string",
    "SequenceNumber": 0
  },
  "NumberInParty": 0,
  "RatePlanType": "string",
  "RoomNumber": "string",
  "RoomType": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AverageDailyRoomRate|number(double)|false|none|The sum of the room rate for each night stayed, divided by the number of nights stayed. Range: -922,337,203,685,477 to 922,337,203,685,477|
|CheckinDateTime|string(date-time)|false|none|The check-in date and time. Format: YYYY-MM-DDThh:mm|
|CheckoutDateTime|string(date-time)|false|none|The check-out date and time. Format: YYYY-MM-DDThh:mm|
|ConfirmationNumber|string|false|none|The confirmation number for the booking. Maximum length: 32 characters|
|GNR|string|false|none|The Guest Name Record (GNR) for the stay. Maximum length: 20 characters|
|LineItems|[LineItem](#schemalineitem)|false|none|none|
|NumberInParty|integer(int32)|false|none|The number of people for this stay.|
|RatePlanType|string|false|none|The rate plan type that is used to calculate the room rate. Possible values are rate plan types defined using hospitality industry standards. Maximum length: 50 characters|
|RoomNumber|string|false|none|The room number for the stay. Maximum length: 15 characters|
|RoomType|string|false|none|The type of room. Possible values are room types defined using hospitality industry standards, such as Single, Double, Suite, and so on. Maximum length: 50 characters|

<h3 id="tocS_LineItem">LineItem</h3>

<a id="schemalineitem"></a>
<a id="schema_LineItem"></a>
<a id="tocSlineitem"></a>
<a id="tocslineitem"></a>

```json
{
  "Amount": 0,
  "Date": "2019-08-24T14:15:22Z",
  "Description": "string",
  "Description2": "string",
  "Quantity": 0,
  "Rate": 0,
  "RateType": "string",
  "Reference": "string",
  "SequenceNumber": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|number(double)|false|none|The total charged amount for the line item. Range: -922,337,203,685,477 to 922,337,203,685,477|
|Date|string(date-time)|false|none|The date and time when the line item was charged. Format: YYYY-MM-DDThh:mm|
|Description|string|false|none|The item's description. Maximum length: 100 characters|
|Description2|string|false|none|Additional details about the item. In the receipt image, the secondary description appears on the line following the primary description. Maximum length: 32 characters|
|Quantity|integer(int32)|false|none|The quantity of units. Format: Any positive number|
|Rate|number(double)|false|none|The amount charged per unit. Range: -922,337,203,685,477 to 922,337,203,685,477|
|RateType|string|false|none|The unit of measure or rate type. Possible values: HOUR or PER HOUR, DAY or PER DAY, WEEK or PER WEEK, MONTH or PER MONTH. Maximum length: 10 characters|
|Reference|string|false|none|The item's SKU, identifier, or some other attribute the provider uses to reference the item. Maximum length: 32 characters|
|SequenceNumber|integer(int32)|false|none|The order in which the item appears in the sequence of line items.|

<h3 id="tocS_Location">Location</h3>

<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "Address": "string",
  "Address2": "string",
  "City": "string",
  "CountryCode": "string",
  "CountrySubdivisionCode": "string",
  "EmailAddress": "string",
  "FaxNumber": "string",
  "InternetAddress": "string",
  "Name": "string",
  "PostalCode": "string",
  "TelephoneNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|string|false|none|The provider's street address. Maximum length: 100 characters|
|Address2|string|false|none|The provider's secondary street address. Maximum length: 50 characters|
|City|string|false|none|The provider's city. Maximum length: 100 characters|
|CountryCode|string|false|none|The provider's country. Format: <a target="_blank" href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">2-letter ISO 3166-1 country code</a>|
|CountrySubdivisionCode|string|false|none|The provider's state, province, or other country subdivision. Format: <a target="_blank" href="http://en.wikipedia.org/wiki/ISO_3166-2">ISO 3166-2:2007 country subdivision</a> code YYY, where YYY is the one-to-three–character subdivision code|
|EmailAddress|string|false|none|The provider's email address. Maximum length: 255 characters|
|FaxNumber|string|false|none|The provider's fax number. Maximum length: 32 characters|
|InternetAddress|string|false|none|The provider's Web address. Maximum length: 255 characters|
|Name|string|false|none|The name of the provider's location, such as an airport, car rental agency, property, store, or other named location. Maximum length: 100 characters|
|PostalCode|string|false|none|The provider's postal code. Maximum length: 20 characters|
|TelephoneNumber|string|false|none|The provider's telephone number. Maximum length: 100 characters|

<h3 id="tocS_MatchingFact">MatchingFact</h3>

<a id="schemamatchingfact"></a>
<a id="schema_MatchingFact"></a>
<a id="tocSmatchingfact"></a>
<a id="tocsmatchingfact"></a>

```json
{
  "Type": "string",
  "Value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|string|false|none|The type of matching fact that is used to identify the Concur user who owns the receipt. Possible values: OAuth, Login|
|Value|string|false|none|The value of the matching fact. If the Type element is set to OAuth, this value must be the access token for the Concur user who owns the receipt. In this case, the access token must not be expired or revoked. If the Type element is set to Login, this value must be the login ID of the Concur user who owns the receipt.|

<h3 id="tocS_Merchant">Merchant</h3>

<a id="schemamerchant"></a>
<a id="schema_Merchant"></a>
<a id="tocSmerchant"></a>
<a id="tocsmerchant"></a>

```json
{
  "Location": {
    "Address": "string",
    "Address2": "string",
    "City": "string",
    "CountryCode": "string",
    "CountrySubdivisionCode": "string",
    "EmailAddress": "string",
    "FaxNumber": "string",
    "InternetAddress": "string",
    "Name": "string",
    "PostalCode": "string",
    "TelephoneNumber": "string"
  },
  "Name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Location|[Location](#schemalocation)|false|none|none|
|Name|string|false|none|The name of the provider (merchant). Maximum length: 64 characters|

<h3 id="tocS_PaymentCard">PaymentCard</h3>

<a id="schemapaymentcard"></a>
<a id="schema_PaymentCard"></a>
<a id="tocSpaymentcard"></a>
<a id="tocspaymentcard"></a>

```json
{
  "AuthorizationCode": "string",
  "MaskedNumber": "string",
  "Type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizationCode|string|false|none|The authorization code that the card interchange provided when it approved this purchase. Maximum length: 15 characters|
|MaskedNumber|string|false|none|The masked card number for the credit card. With the exception of the AX (American Express) card type, this is the last four digits of the card number. For American Express, the value can be one of these, in order of preference: a) The first six digits and the last four digits of the card number. b) The last five digits. c) The last four digits.|
|Type|string|false|none|The card interchange for the credit card. Possible values: AX (American Express), DC (Diner's Club), DS (Discover), CA (MasterCard), VI (Visa), CB (Carte Blanche), ER (Enroute), TP (Universal Air Travel), JC (JCB), EC (EuroCard), OTHER (other types)|

<h3 id="tocS_ReceiptPost">ReceiptPost</h3>

<a id="schemareceiptpost"></a>
<a id="schema_ReceiptPost"></a>
<a id="tocSreceiptpost"></a>
<a id="tocsreceiptpost"></a>

```json
{
  "Amount": 0,
  "CurrencyCode": "string",
  "CustomFields": {
    "Name": "string",
    "Value": "string"
  },
  "FormofPaymentCode": "string",
  "GeneralDetail": {
    "LineItems": {
      "Amount": 0,
      "Date": "2019-08-24T14:15:22Z",
      "Description": "string",
      "Description2": "string",
      "Quantity": 0,
      "Rate": 0,
      "RateType": "string",
      "Reference": "string",
      "SequenceNumber": 0
    }
  },
  "HotelDetail": {
    "AverageDailyRoomRate": 0,
    "CheckinDateTime": "2019-08-24T14:15:22Z",
    "CheckoutDateTime": "2019-08-24T14:15:22Z",
    "ConfirmationNumber": "string",
    "GNR": "string",
    "LineItems": {
      "Amount": 0,
      "Date": "2019-08-24T14:15:22Z",
      "Description": "string",
      "Description2": "string",
      "Quantity": 0,
      "Rate": 0,
      "RateType": "string",
      "Reference": "string",
      "SequenceNumber": 0
    },
    "NumberInParty": 0,
    "RatePlanType": "string",
    "RoomNumber": "string",
    "RoomType": "string"
  },
  "ImageBase64": "string",
  "MatchingFact": {
    "Type": "string",
    "Value": "string"
  },
  "Merchant": {
    "Location": {
      "Address": "string",
      "Address2": "string",
      "City": "string",
      "CountryCode": "string",
      "CountrySubdivisionCode": "string",
      "EmailAddress": "string",
      "FaxNumber": "string",
      "InternetAddress": "string",
      "Name": "string",
      "PostalCode": "string",
      "TelephoneNumber": "string"
    },
    "Name": "string"
  },
  "PaymentCard": {
    "AuthorizationCode": "string",
    "MaskedNumber": "string",
    "Type": "string"
  },
  "RideDetail": {
    "DriverName": "string",
    "DropoffLatitude": 0,
    "DropoffLongitude": 0,
    "EndDateTime": "2019-08-24T14:15:22Z",
    "LineItems": {
      "Amount": 0,
      "Date": "2019-08-24T14:15:22Z",
      "Description": "string",
      "Description2": "string",
      "Quantity": 0,
      "Rate": 0,
      "RateType": "string",
      "Reference": "string",
      "SequenceNumber": 0
    },
    "StartDateTime": "2019-08-24T14:15:22Z",
    "VehicleNumber": "string"
  },
  "TransactionDateTime": "2019-08-24T14:15:22Z",
  "Type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|number(double)|false|none|The net amount of the transaction. A positive number means a payment is due. A negative number means a refund is due. Zero means no payment or refund is due. Range: -922,337,203,685,477 to 922,337,203,685,477|
|CurrencyCode|string|false|none|The <a target="_blank" href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the currency paid to the provider.|
|CustomFields|[CustomField](#schemacustomfield)|false|none|none|
|FormofPaymentCode|string|false|none|The code for the form of payment. Possible values: CASH (Cash), CCARD (Credit Card), CPAID (Company Paid)|
|GeneralDetail|[GeneralDetail](#schemageneraldetail)|false|none|none|
|HotelDetail|[HotelDetail](#schemahoteldetail)|false|none|none|
|ImageBase64|string|false|none|The binary receipt image in Base64 encoding. This API supports PNG, JPEG, JPG, and PDF file formats.|
|MatchingFact|[MatchingFact](#schemamatchingfact)|false|none|none|
|Merchant|[Merchant](#schemamerchant)|false|none|none|
|PaymentCard|[PaymentCard](#schemapaymentcard)|false|none|none|
|RideDetail|[RideDetail](#schemaridedetail)|false|none|none|
|TransactionDateTime|string(date-time)|false|none|The date and time when the transaction happened. Format: YYYY-MM-DDThh:mm|
|Type|string|false|none|The type of receipt. Possible values: General, Ride, Hotel|

<h3 id="tocS_RideDetail">RideDetail</h3>

<a id="schemaridedetail"></a>
<a id="schema_RideDetail"></a>
<a id="tocSridedetail"></a>
<a id="tocsridedetail"></a>

```json
{
  "DriverName": "string",
  "DropoffLatitude": 0,
  "DropoffLongitude": 0,
  "EndDateTime": "2019-08-24T14:15:22Z",
  "LineItems": {
    "Amount": 0,
    "Date": "2019-08-24T14:15:22Z",
    "Description": "string",
    "Description2": "string",
    "Quantity": 0,
    "Rate": 0,
    "RateType": "string",
    "Reference": "string",
    "SequenceNumber": 0
  },
  "StartDateTime": "2019-08-24T14:15:22Z",
  "VehicleNumber": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DriverName|string|false|none|The name of the driver. Maximum length: 255 characters|
|DropoffLatitude|number(double)|false|none|The latitude of the ride end location. Range: -90 to 90|
|DropoffLongitude|number(double)|false|none|The longitude of the ride end location. Range: -180 to 180|
|EndDateTime|string(date-time)|false|none|The ending date and time for the ride. Format: YYYY-MM-DDThh:mm|
|LineItems|[LineItem](#schemalineitem)|false|none|none|
|StartDateTime|string(date-time)|false|none|The starting date and time for the ride. Format: YYYY-MM-DDThh:mm|
|VehicleNumber|string|false|none|The unique identifier for the vehicle. Maximum length: 50 characters|

<h3 id="tocS_Nullable_1">Nullable_1</h3>

<a id="schemanullable_1"></a>
<a id="schema_Nullable_1"></a>
<a id="tocSnullable_1"></a>
<a id="tocsnullable_1"></a>

```json
{
  "HasValue": true,
  "Value": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HasValue|boolean|false|none|none|
|Value|[Decimal](#schemadecimal)|false|none|none|

