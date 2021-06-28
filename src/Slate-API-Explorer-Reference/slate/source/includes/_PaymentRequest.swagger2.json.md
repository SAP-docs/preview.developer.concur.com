

<h2 id="payment-request">Payment Request v3.0</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A payment request is a request for payment (partial or full) of an invoice. This API provides methods to create or update a payment request, or view a payment request by ID.

Base URLs:

* <a href="https://www.concursolutions.com/api/v3.0">https://www.concursolutions.com/api/v3.0</a>





    

    

<h3 id="payment-request-resources">Resources</h3>

#### get__invoice_paymentrequest_{id}

> Code samples

```shell
# You can also use wget
curl -X GET https://www.concursolutions.com/api/v3.0/invoice/paymentrequest/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://www.concursolutions.com/api/v3.0/invoice/paymentrequest/{id} HTTP/1.1
Host: www.concursolutions.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/paymentrequest/{id}',
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
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.concursolutions.com/api/v3.0/invoice/paymentrequest/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.concursolutions.com/api/v3.0/invoice/paymentrequest/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://www.concursolutions.com/api/v3.0/invoice/paymentrequest/{id}', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/paymentrequest/{id}");
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
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.concursolutions.com/api/v3.0/invoice/paymentrequest/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /invoice/paymentrequest/{id}`

*Gets all Payment Request information.*

Gets all relevant information (Payment Request Header, Payment Request Line Item and Payment Request Allocation) of a Payment Request.

<h3 id="get__invoice_paymentrequest_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Payment Request ID.|

> Example responses

> 200 Response

```json
{
  "AmountWithoutVat": "string",
  "ApprovalStatus": "string",
  "ApprovedByDelegate": "string",
  "AssignedByUsername": "string",
  "AssignedDate": "string",
  "BuyerCostCenter": "string",
  "CalculatedAmount": "string",
  "CheckNumber": "string",
  "CompanyBillToAddress": {
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "City": "string",
    "CountryCode": "string",
    "Name": "string",
    "PostalCode": "string",
    "State": "string"
  },
  "CompanyShipToAddress": {
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "City": "string",
    "CountryCode": "string",
    "Name": "string",
    "PostalCode": "string",
    "State": "string"
  },
  "CountryCode": "string",
  "CreatedByUsername": "string",
  "CurrencyCode": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "DataSource": "string",
  "DeletedDate": "string",
  "DeliverySlipNumber": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "EmployeeName": "string",
  "ExternalPolicyId": "string",
  "ExtractDate": "string",
  "FirstApprovalDate": "string",
  "FirstSubmitDate": "string",
  "ID": "string",
  "InvoiceAmount": "string",
  "InvoiceDate": "string",
  "InvoiceNumber": "string",
  "InvoiceReceivedDate": "string",
  "IsAssigned": "string",
  "IsInvoiceConfirmed": "string",
  "IsPaymentRequestDeleted": "string",
  "IsPaymentRequestDuplicate": "string",
  "IsTestTransaction": "string",
  "LastSubmitDate": "string",
  "LedgerCode": "string",
  "LineItems": {
    "LineItem": {
      "Allocations": {
        "Allocation": {
          "AllocationAccountCode": "string",
          "Custom1": "string",
          "Custom2": "string",
          "Custom3": "string",
          "Custom4": "string",
          "Custom5": "string",
          "Custom6": "string",
          "Custom7": "string",
          "Custom8": "string",
          "Custom9": "string",
          "Custom10": "string",
          "Custom11": "string",
          "Custom12": "string",
          "Custom13": "string",
          "Custom14": "string",
          "Custom15": "string",
          "Custom16": "string",
          "Custom17": "string",
          "Custom18": "string",
          "Custom19": "string",
          "Custom20": "string",
          "IsTestUser": "string",
          "Percentage": "string"
        }
      },
      "AllocationStatus": "string",
      "AmountWithoutVat": "string",
      "ApprovedLineItemAmount": "string",
      "Custom1": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom2": "string",
      "Custom20": "string",
      "Custom3": "string",
      "Custom4": "string",
      "Custom5": "string",
      "Custom6": "string",
      "Custom7": "string",
      "Custom8": "string",
      "Custom9": "string",
      "DeliverySlipNumber": "string",
      "Description": "string",
      "ExpenseTypeCode": "string",
      "IsMatched": "string",
      "LineItemId": "string",
      "LineItemIsTestUser": "string",
      "MatchedPurchaseOrderLineItemId": "string",
      "PurchaseOrderNumber": "string",
      "Quantity": "string",
      "RequestedLineItemAmount": "string",
      "RequestLineItemNumber": "string",
      "ShipFromPostalCode": "string",
      "ShipToPostalCode": "string",
      "SupplierPartId": "string",
      "Tax": "string",
      "TaxCode": "string",
      "TaxCode2": "string",
      "TaxCode3": "string",
      "TaxCode4": "string",
      "TotalPrice": "string",
      "UnitOfMeasure": "string",
      "UnitPrice": "string",
      "VatAmount": "string",
      "VatAmountFour": "string",
      "VatAmountThree": "string",
      "VatAmountTwo": "string",
      "VatRate": "string",
      "VatRateFour": "string",
      "VatRateThree": "string",
      "VatRateTwo": "string"
    }
  },
  "LineItemTotalAmount": "string",
  "LineItemVatAmount": "string",
  "Name": "string",
  "NotesToVendor": "string",
  "OB10BuyerId": "string",
  "OB10TransactionId": "string",
  "OrgUnit01": "string",
  "OrgUnit02": "string",
  "OrgUnit03": "string",
  "OrgUnit04": "string",
  "OrgUnit05": "string",
  "OrgUnit06": "string",
  "PaidAmount": "string",
  "PaidDate": "string",
  "PaymentAdjustmentNotes": "string",
  "PaymentDueDate": "string",
  "PaymentMethod": "string",
  "PaymentRequestCreatedByTestUser": "string",
  "PaymentRequestDeletedBy": "string",
  "PaymentStatus": "string",
  "PaymentTermsDays": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderNumber": "string",
  "ReceiptConfirmationType": "string",
  "ShippingAmount": "string",
  "SubmittedByDelegate": "string",
  "TaxAmount": "string",
  "TaxCode": "string",
  "TaxCode2": "string",
  "TaxCode3": "string",
  "TaxCode4": "string",
  "TotalApprovedAmount": "string",
  "URI": "string",
  "UserCreationDate": "string",
  "VatAmountFour": "string",
  "VatAmountOne": "string",
  "VatAmountThree": "string",
  "VatAmountTwo": "string",
  "VatRateFour": "string",
  "VatRateOne": "string",
  "VatRateThree": "string",
  "VatRateTwo": "string",
  "VendorRemitAddress": {
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "City": "string",
    "CountryCode": "string",
    "DiscountTerms": "string",
    "Name": "string",
    "PostalCode": "string",
    "State": "string"
  },
  "VendorShipFromAddress": {
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "City": "string",
    "CountryCode": "string",
    "DiscountTerms": "string",
    "Name": "string",
    "PostalCode": "string",
    "State": "string"
  },
  "VendorTaxId": "string",
  "WorkflowCompleteDate": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PaymentRequest>
  <AmountWithoutVat>string</AmountWithoutVat>
  <ApprovalStatus>string</ApprovalStatus>
  <ApprovedByDelegate>string</ApprovedByDelegate>
  <AssignedByUsername>string</AssignedByUsername>
  <AssignedDate>string</AssignedDate>
  <BuyerCostCenter>string</BuyerCostCenter>
  <CalculatedAmount>string</CalculatedAmount>
  <CheckNumber>string</CheckNumber>
  <CompanyBillToAddress>
    <Address1>string</Address1>
    <Address2>string</Address2>
    <Address3>string</Address3>
    <City>string</City>
    <CountryCode>string</CountryCode>
    <Name>string</Name>
    <PostalCode>string</PostalCode>
    <State>string</State>
  </CompanyBillToAddress>
  <CompanyShipToAddress>
    <Address1>string</Address1>
    <Address2>string</Address2>
    <Address3>string</Address3>
    <City>string</City>
    <CountryCode>string</CountryCode>
    <Name>string</Name>
    <PostalCode>string</PostalCode>
    <State>string</State>
  </CompanyShipToAddress>
  <CountryCode>string</CountryCode>
  <CreatedByUsername>string</CreatedByUsername>
  <CurrencyCode>string</CurrencyCode>
  <Custom1>string</Custom1>
  <Custom10>string</Custom10>
  <Custom11>string</Custom11>
  <Custom12>string</Custom12>
  <Custom13>string</Custom13>
  <Custom14>string</Custom14>
  <Custom15>string</Custom15>
  <Custom16>string</Custom16>
  <Custom17>string</Custom17>
  <Custom18>string</Custom18>
  <Custom19>string</Custom19>
  <Custom2>string</Custom2>
  <Custom20>string</Custom20>
  <Custom21>string</Custom21>
  <Custom22>string</Custom22>
  <Custom23>string</Custom23>
  <Custom24>string</Custom24>
  <Custom3>string</Custom3>
  <Custom4>string</Custom4>
  <Custom5>string</Custom5>
  <Custom6>string</Custom6>
  <Custom7>string</Custom7>
  <Custom8>string</Custom8>
  <Custom9>string</Custom9>
  <DataSource>string</DataSource>
  <DeletedDate>string</DeletedDate>
  <DeliverySlipNumber>string</DeliverySlipNumber>
  <Description>string</Description>
  <DiscountPercentage>string</DiscountPercentage>
  <DiscountTerms>string</DiscountTerms>
  <EmployeeName>string</EmployeeName>
  <ExternalPolicyId>string</ExternalPolicyId>
  <ExtractDate>string</ExtractDate>
  <FirstApprovalDate>string</FirstApprovalDate>
  <FirstSubmitDate>string</FirstSubmitDate>
  <ID>string</ID>
  <InvoiceAmount>string</InvoiceAmount>
  <InvoiceDate>string</InvoiceDate>
  <InvoiceNumber>string</InvoiceNumber>
  <InvoiceReceivedDate>string</InvoiceReceivedDate>
  <IsAssigned>string</IsAssigned>
  <IsInvoiceConfirmed>string</IsInvoiceConfirmed>
  <IsPaymentRequestDeleted>string</IsPaymentRequestDeleted>
  <IsPaymentRequestDuplicate>string</IsPaymentRequestDuplicate>
  <IsTestTransaction>string</IsTestTransaction>
  <LastSubmitDate>string</LastSubmitDate>
  <LedgerCode>string</LedgerCode>
  <LineItems>
    <LineItem>
      <Allocations>
        <Allocation>
          <AllocationAccountCode>string</AllocationAccountCode>
          <Custom1>string</Custom1>
          <Custom2>string</Custom2>
          <Custom3>string</Custom3>
          <Custom4>string</Custom4>
          <Custom5>string</Custom5>
          <Custom6>string</Custom6>
          <Custom7>string</Custom7>
          <Custom8>string</Custom8>
          <Custom9>string</Custom9>
          <Custom10>string</Custom10>
          <Custom11>string</Custom11>
          <Custom12>string</Custom12>
          <Custom13>string</Custom13>
          <Custom14>string</Custom14>
          <Custom15>string</Custom15>
          <Custom16>string</Custom16>
          <Custom17>string</Custom17>
          <Custom18>string</Custom18>
          <Custom19>string</Custom19>
          <Custom20>string</Custom20>
          <IsTestUser>string</IsTestUser>
          <Percentage>string</Percentage>
        </Allocation>
      </Allocations>
      <AllocationStatus>string</AllocationStatus>
      <AmountWithoutVat>string</AmountWithoutVat>
      <ApprovedLineItemAmount>string</ApprovedLineItemAmount>
      <Custom1>string</Custom1>
      <Custom10>string</Custom10>
      <Custom11>string</Custom11>
      <Custom12>string</Custom12>
      <Custom13>string</Custom13>
      <Custom14>string</Custom14>
      <Custom15>string</Custom15>
      <Custom16>string</Custom16>
      <Custom17>string</Custom17>
      <Custom18>string</Custom18>
      <Custom19>string</Custom19>
      <Custom2>string</Custom2>
      <Custom20>string</Custom20>
      <Custom3>string</Custom3>
      <Custom4>string</Custom4>
      <Custom5>string</Custom5>
      <Custom6>string</Custom6>
      <Custom7>string</Custom7>
      <Custom8>string</Custom8>
      <Custom9>string</Custom9>
      <DeliverySlipNumber>string</DeliverySlipNumber>
      <Description>string</Description>
      <ExpenseTypeCode>string</ExpenseTypeCode>
      <IsMatched>string</IsMatched>
      <LineItemId>string</LineItemId>
      <LineItemIsTestUser>string</LineItemIsTestUser>
      <MatchedPurchaseOrderLineItemId>string</MatchedPurchaseOrderLineItemId>
      <PurchaseOrderNumber>string</PurchaseOrderNumber>
      <Quantity>string</Quantity>
      <RequestedLineItemAmount>string</RequestedLineItemAmount>
      <RequestLineItemNumber>string</RequestLineItemNumber>
      <ShipFromPostalCode>string</ShipFromPostalCode>
      <ShipToPostalCode>string</ShipToPostalCode>
      <SupplierPartId>string</SupplierPartId>
      <Tax>string</Tax>
      <TaxCode>string</TaxCode>
      <TaxCode2>string</TaxCode2>
      <TaxCode3>string</TaxCode3>
      <TaxCode4>string</TaxCode4>
      <TotalPrice>string</TotalPrice>
      <UnitOfMeasure>string</UnitOfMeasure>
      <UnitPrice>string</UnitPrice>
      <VatAmount>string</VatAmount>
      <VatAmountFour>string</VatAmountFour>
      <VatAmountThree>string</VatAmountThree>
      <VatAmountTwo>string</VatAmountTwo>
      <VatRate>string</VatRate>
      <VatRateFour>string</VatRateFour>
      <VatRateThree>string</VatRateThree>
      <VatRateTwo>string</VatRateTwo>
    </LineItem>
  </LineItems>
  <LineItemTotalAmount>string</LineItemTotalAmount>
  <LineItemVatAmount>string</LineItemVatAmount>
  <Name>string</Name>
  <NotesToVendor>string</NotesToVendor>
  <OB10BuyerId>string</OB10BuyerId>
  <OB10TransactionId>string</OB10TransactionId>
  <OrgUnit01>string</OrgUnit01>
  <OrgUnit02>string</OrgUnit02>
  <OrgUnit03>string</OrgUnit03>
  <OrgUnit04>string</OrgUnit04>
  <OrgUnit05>string</OrgUnit05>
  <OrgUnit06>string</OrgUnit06>
  <PaidAmount>string</PaidAmount>
  <PaidDate>string</PaidDate>
  <PaymentAdjustmentNotes>string</PaymentAdjustmentNotes>
  <PaymentDueDate>string</PaymentDueDate>
  <PaymentMethod>string</PaymentMethod>
  <PaymentRequestCreatedByTestUser>string</PaymentRequestCreatedByTestUser>
  <PaymentRequestDeletedBy>string</PaymentRequestDeletedBy>
  <PaymentStatus>string</PaymentStatus>
  <PaymentTermsDays>string</PaymentTermsDays>
  <ProvincialTaxId>string</ProvincialTaxId>
  <PurchaseOrderNumber>string</PurchaseOrderNumber>
  <ReceiptConfirmationType>string</ReceiptConfirmationType>
  <ShippingAmount>string</ShippingAmount>
  <SubmittedByDelegate>string</SubmittedByDelegate>
  <TaxAmount>string</TaxAmount>
  <TaxCode>string</TaxCode>
  <TaxCode2>string</TaxCode2>
  <TaxCode3>string</TaxCode3>
  <TaxCode4>string</TaxCode4>
  <TotalApprovedAmount>string</TotalApprovedAmount>
  <URI>string</URI>
  <UserCreationDate>string</UserCreationDate>
  <VatAmountFour>string</VatAmountFour>
  <VatAmountOne>string</VatAmountOne>
  <VatAmountThree>string</VatAmountThree>
  <VatAmountTwo>string</VatAmountTwo>
  <VatRateFour>string</VatRateFour>
  <VatRateOne>string</VatRateOne>
  <VatRateThree>string</VatRateThree>
  <VatRateTwo>string</VatRateTwo>
  <VendorRemitAddress>
    <Address1>string</Address1>
    <Address2>string</Address2>
    <Address3>string</Address3>
    <City>string</City>
    <CountryCode>string</CountryCode>
    <DiscountTerms>string</DiscountTerms>
    <Name>string</Name>
    <PostalCode>string</PostalCode>
    <State>string</State>
  </VendorRemitAddress>
  <VendorShipFromAddress>
    <Address1>string</Address1>
    <Address2>string</Address2>
    <Address3>string</Address3>
    <City>string</City>
    <CountryCode>string</CountryCode>
    <DiscountTerms>string</DiscountTerms>
    <Name>string</Name>
    <PostalCode>string</PostalCode>
    <State>string</State>
  </VendorShipFromAddress>
  <VendorTaxId>string</VendorTaxId>
  <WorkflowCompleteDate>string</WorkflowCompleteDate>
</PaymentRequest>
```

<h3 id="get__invoice_paymentrequest_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentRequest](#schemapaymentrequest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### post__invoice_paymentrequest

> Code samples

```shell
# You can also use wget
curl -X POST https://www.concursolutions.com/api/v3.0/invoice/paymentrequest \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://www.concursolutions.com/api/v3.0/invoice/paymentrequest HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "AmountWithoutVat": "string",
  "BuyerCostCenter": "string",
  "CheckNumber": "string",
  "CompanyBillToAddressCode": "string",
  "CompanyShipToAddressCode": "string",
  "CountryCode": "string",
  "CurrencyCode": "string",
  "Custom01": "string",
  "Custom02": "string",
  "Custom03": "string",
  "Custom04": "string",
  "Custom05": "string",
  "Custom06": "string",
  "Custom07": "string",
  "Custom08": "string",
  "Custom09": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "DataSource": "string",
  "DeliverySlipNumber": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "EmployeeEmailAddress": "string",
  "EmployeeId": "string",
  "EmployeeLoginId": "string",
  "ExternalPolicyId": "string",
  "InvoiceAmount": "string",
  "InvoiceDate": "string",
  "InvoiceNumber": "string",
  "InvoiceReceivedDate": "string",
  "IsEmergencyCheckRun": "string",
  "IsInvoiceConfirmed": "string",
  "LedgerCode": "string",
  "LineItems": {
    "Allocations": {
      "Custom01": "string",
      "Custom02": "string",
      "Custom03": "string",
      "Custom04": "string",
      "Custom05": "string",
      "Custom06": "string",
      "Custom07": "string",
      "Custom08": "string",
      "Custom09": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom20": "string",
      "Percentage": "string"
    },
    "AmountWithoutVat": "string",
    "Custom01": "string",
    "Custom02": "string",
    "Custom03": "string",
    "Custom04": "string",
    "Custom05": "string",
    "Custom06": "string",
    "Custom07": "string",
    "Custom08": "string",
    "Custom09": "string",
    "Custom10": "string",
    "Custom11": "string",
    "Custom12": "string",
    "Custom13": "string",
    "Custom14": "string",
    "Custom15": "string",
    "Custom16": "string",
    "Custom17": "string",
    "Custom18": "string",
    "Custom19": "string",
    "Custom20": "string",
    "Description": "string",
    "ExpenseTypeCode": "string",
    "ItemCode": "string",
    "PurchaseOrderNumber": "string",
    "Quantity": "string",
    "ShipFromPostalCode": "string",
    "ShipToPostalCode": "string",
    "SupplierPartId": "string",
    "Tax": "string",
    "TaxCode": "string",
    "TaxCode2": "string",
    "TaxCode3": "string",
    "TaxCode4": "string",
    "TotalPrice": "string",
    "UnitOfMeasure": "string",
    "UnitPrice": "string",
    "VatAmount": "string",
    "VatAmountFour": "string",
    "VatAmountThree": "string",
    "VatAmountTwo": "string",
    "VatRate": "string",
    "VatRateFour": "string",
    "VatRateThree": "string",
    "VatRateTwo": "string"
  },
  "Name": "string",
  "NotesToVendor": "string",
  "OB10BuyerId": "string",
  "OB10TransactionId": "string",
  "OrgUnit01": "string",
  "OrgUnit02": "string",
  "OrgUnit03": "string",
  "OrgUnit04": "string",
  "OrgUnit05": "string",
  "OrgUnit06": "string",
  "PaymentAdjustmentNotes": "string",
  "PaymentAmount": "string",
  "PaymentDueDate": "string",
  "PaymentTermsDays": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderId": "string",
  "ReceiptConfirmationType": "string",
  "ShippingAmount": "string",
  "TaxAmount": "string",
  "VatAmountFour": "string",
  "VatAmountOne": "string",
  "VatAmountThree": "string",
  "VatAmountTwo": "string",
  "VatRateFour": "string",
  "VatRateOne": "string",
  "VatRateThree": "string",
  "VatRateTwo": "string",
  "VendorRemitToIdentifier": {
    "Address1": "string",
    "AddressCode": "string",
    "Name": "string",
    "PostalCode": "string",
    "VendorCode": "string"
  },
  "VendorShipFromAddressCode": "string",
  "VendorTaxId": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/paymentrequest',
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
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.concursolutions.com/api/v3.0/invoice/paymentrequest',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.concursolutions.com/api/v3.0/invoice/paymentrequest', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://www.concursolutions.com/api/v3.0/invoice/paymentrequest', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/paymentrequest");
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
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.concursolutions.com/api/v3.0/invoice/paymentrequest", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /invoice/paymentrequest`

*Create a Payment Request.*

Creates a new Payment Request with all relevant details including line items and associated allocations.

> Body parameter

```json
{
  "AmountWithoutVat": "string",
  "BuyerCostCenter": "string",
  "CheckNumber": "string",
  "CompanyBillToAddressCode": "string",
  "CompanyShipToAddressCode": "string",
  "CountryCode": "string",
  "CurrencyCode": "string",
  "Custom01": "string",
  "Custom02": "string",
  "Custom03": "string",
  "Custom04": "string",
  "Custom05": "string",
  "Custom06": "string",
  "Custom07": "string",
  "Custom08": "string",
  "Custom09": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "DataSource": "string",
  "DeliverySlipNumber": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "EmployeeEmailAddress": "string",
  "EmployeeId": "string",
  "EmployeeLoginId": "string",
  "ExternalPolicyId": "string",
  "InvoiceAmount": "string",
  "InvoiceDate": "string",
  "InvoiceNumber": "string",
  "InvoiceReceivedDate": "string",
  "IsEmergencyCheckRun": "string",
  "IsInvoiceConfirmed": "string",
  "LedgerCode": "string",
  "LineItems": {
    "Allocations": {
      "Custom01": "string",
      "Custom02": "string",
      "Custom03": "string",
      "Custom04": "string",
      "Custom05": "string",
      "Custom06": "string",
      "Custom07": "string",
      "Custom08": "string",
      "Custom09": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom20": "string",
      "Percentage": "string"
    },
    "AmountWithoutVat": "string",
    "Custom01": "string",
    "Custom02": "string",
    "Custom03": "string",
    "Custom04": "string",
    "Custom05": "string",
    "Custom06": "string",
    "Custom07": "string",
    "Custom08": "string",
    "Custom09": "string",
    "Custom10": "string",
    "Custom11": "string",
    "Custom12": "string",
    "Custom13": "string",
    "Custom14": "string",
    "Custom15": "string",
    "Custom16": "string",
    "Custom17": "string",
    "Custom18": "string",
    "Custom19": "string",
    "Custom20": "string",
    "Description": "string",
    "ExpenseTypeCode": "string",
    "ItemCode": "string",
    "PurchaseOrderNumber": "string",
    "Quantity": "string",
    "ShipFromPostalCode": "string",
    "ShipToPostalCode": "string",
    "SupplierPartId": "string",
    "Tax": "string",
    "TaxCode": "string",
    "TaxCode2": "string",
    "TaxCode3": "string",
    "TaxCode4": "string",
    "TotalPrice": "string",
    "UnitOfMeasure": "string",
    "UnitPrice": "string",
    "VatAmount": "string",
    "VatAmountFour": "string",
    "VatAmountThree": "string",
    "VatAmountTwo": "string",
    "VatRate": "string",
    "VatRateFour": "string",
    "VatRateThree": "string",
    "VatRateTwo": "string"
  },
  "Name": "string",
  "NotesToVendor": "string",
  "OB10BuyerId": "string",
  "OB10TransactionId": "string",
  "OrgUnit01": "string",
  "OrgUnit02": "string",
  "OrgUnit03": "string",
  "OrgUnit04": "string",
  "OrgUnit05": "string",
  "OrgUnit06": "string",
  "PaymentAdjustmentNotes": "string",
  "PaymentAmount": "string",
  "PaymentDueDate": "string",
  "PaymentTermsDays": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderId": "string",
  "ReceiptConfirmationType": "string",
  "ShippingAmount": "string",
  "TaxAmount": "string",
  "VatAmountFour": "string",
  "VatAmountOne": "string",
  "VatAmountThree": "string",
  "VatAmountTwo": "string",
  "VatRateFour": "string",
  "VatRateOne": "string",
  "VatRateThree": "string",
  "VatRateTwo": "string",
  "VendorRemitToIdentifier": {
    "Address1": "string",
    "AddressCode": "string",
    "Name": "string",
    "PostalCode": "string",
    "VendorCode": "string"
  },
  "VendorShipFromAddressCode": "string",
  "VendorTaxId": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PaymentRequestPost>
  <AmountWithoutVat>string</AmountWithoutVat>
  <BuyerCostCenter>string</BuyerCostCenter>
  <CheckNumber>string</CheckNumber>
  <CompanyBillToAddressCode>string</CompanyBillToAddressCode>
  <CompanyShipToAddressCode>string</CompanyShipToAddressCode>
  <CountryCode>string</CountryCode>
  <CurrencyCode>string</CurrencyCode>
  <Custom01>string</Custom01>
  <Custom02>string</Custom02>
  <Custom03>string</Custom03>
  <Custom04>string</Custom04>
  <Custom05>string</Custom05>
  <Custom06>string</Custom06>
  <Custom07>string</Custom07>
  <Custom08>string</Custom08>
  <Custom09>string</Custom09>
  <Custom10>string</Custom10>
  <Custom11>string</Custom11>
  <Custom12>string</Custom12>
  <Custom13>string</Custom13>
  <Custom14>string</Custom14>
  <Custom15>string</Custom15>
  <Custom16>string</Custom16>
  <Custom17>string</Custom17>
  <Custom18>string</Custom18>
  <Custom19>string</Custom19>
  <Custom20>string</Custom20>
  <Custom21>string</Custom21>
  <Custom22>string</Custom22>
  <Custom23>string</Custom23>
  <Custom24>string</Custom24>
  <DataSource>string</DataSource>
  <DeliverySlipNumber>string</DeliverySlipNumber>
  <Description>string</Description>
  <DiscountPercentage>string</DiscountPercentage>
  <DiscountTerms>string</DiscountTerms>
  <EmployeeEmailAddress>string</EmployeeEmailAddress>
  <EmployeeId>string</EmployeeId>
  <EmployeeLoginId>string</EmployeeLoginId>
  <ExternalPolicyId>string</ExternalPolicyId>
  <InvoiceAmount>string</InvoiceAmount>
  <InvoiceDate>string</InvoiceDate>
  <InvoiceNumber>string</InvoiceNumber>
  <InvoiceReceivedDate>string</InvoiceReceivedDate>
  <IsEmergencyCheckRun>string</IsEmergencyCheckRun>
  <IsInvoiceConfirmed>string</IsInvoiceConfirmed>
  <LedgerCode>string</LedgerCode>
  <LineItems>
    <Allocations>
      <Custom01>string</Custom01>
      <Custom02>string</Custom02>
      <Custom03>string</Custom03>
      <Custom04>string</Custom04>
      <Custom05>string</Custom05>
      <Custom06>string</Custom06>
      <Custom07>string</Custom07>
      <Custom08>string</Custom08>
      <Custom09>string</Custom09>
      <Custom10>string</Custom10>
      <Custom11>string</Custom11>
      <Custom12>string</Custom12>
      <Custom13>string</Custom13>
      <Custom14>string</Custom14>
      <Custom15>string</Custom15>
      <Custom16>string</Custom16>
      <Custom17>string</Custom17>
      <Custom18>string</Custom18>
      <Custom19>string</Custom19>
      <Custom20>string</Custom20>
      <Percentage>string</Percentage>
    </Allocations>
    <AmountWithoutVat>string</AmountWithoutVat>
    <Custom01>string</Custom01>
    <Custom02>string</Custom02>
    <Custom03>string</Custom03>
    <Custom04>string</Custom04>
    <Custom05>string</Custom05>
    <Custom06>string</Custom06>
    <Custom07>string</Custom07>
    <Custom08>string</Custom08>
    <Custom09>string</Custom09>
    <Custom10>string</Custom10>
    <Custom11>string</Custom11>
    <Custom12>string</Custom12>
    <Custom13>string</Custom13>
    <Custom14>string</Custom14>
    <Custom15>string</Custom15>
    <Custom16>string</Custom16>
    <Custom17>string</Custom17>
    <Custom18>string</Custom18>
    <Custom19>string</Custom19>
    <Custom20>string</Custom20>
    <Description>string</Description>
    <ExpenseTypeCode>string</ExpenseTypeCode>
    <ItemCode>string</ItemCode>
    <PurchaseOrderNumber>string</PurchaseOrderNumber>
    <Quantity>string</Quantity>
    <ShipFromPostalCode>string</ShipFromPostalCode>
    <ShipToPostalCode>string</ShipToPostalCode>
    <SupplierPartId>string</SupplierPartId>
    <Tax>string</Tax>
    <TaxCode>string</TaxCode>
    <TaxCode2>string</TaxCode2>
    <TaxCode3>string</TaxCode3>
    <TaxCode4>string</TaxCode4>
    <TotalPrice>string</TotalPrice>
    <UnitOfMeasure>string</UnitOfMeasure>
    <UnitPrice>string</UnitPrice>
    <VatAmount>string</VatAmount>
    <VatAmountFour>string</VatAmountFour>
    <VatAmountThree>string</VatAmountThree>
    <VatAmountTwo>string</VatAmountTwo>
    <VatRate>string</VatRate>
    <VatRateFour>string</VatRateFour>
    <VatRateThree>string</VatRateThree>
    <VatRateTwo>string</VatRateTwo>
  </LineItems>
  <Name>string</Name>
  <NotesToVendor>string</NotesToVendor>
  <OB10BuyerId>string</OB10BuyerId>
  <OB10TransactionId>string</OB10TransactionId>
  <OrgUnit01>string</OrgUnit01>
  <OrgUnit02>string</OrgUnit02>
  <OrgUnit03>string</OrgUnit03>
  <OrgUnit04>string</OrgUnit04>
  <OrgUnit05>string</OrgUnit05>
  <OrgUnit06>string</OrgUnit06>
  <PaymentAdjustmentNotes>string</PaymentAdjustmentNotes>
  <PaymentAmount>string</PaymentAmount>
  <PaymentDueDate>string</PaymentDueDate>
  <PaymentTermsDays>string</PaymentTermsDays>
  <ProvincialTaxId>string</ProvincialTaxId>
  <PurchaseOrderId>string</PurchaseOrderId>
  <ReceiptConfirmationType>string</ReceiptConfirmationType>
  <ShippingAmount>string</ShippingAmount>
  <TaxAmount>string</TaxAmount>
  <VatAmountFour>string</VatAmountFour>
  <VatAmountOne>string</VatAmountOne>
  <VatAmountThree>string</VatAmountThree>
  <VatAmountTwo>string</VatAmountTwo>
  <VatRateFour>string</VatRateFour>
  <VatRateOne>string</VatRateOne>
  <VatRateThree>string</VatRateThree>
  <VatRateTwo>string</VatRateTwo>
  <VendorRemitToIdentifier>
    <Address1>string</Address1>
    <AddressCode>string</AddressCode>
    <Name>string</Name>
    <PostalCode>string</PostalCode>
    <VendorCode>string</VendorCode>
  </VendorRemitToIdentifier>
  <VendorShipFromAddressCode>string</VendorShipFromAddressCode>
  <VendorTaxId>string</VendorTaxId>
</PaymentRequestPost>
```

<h3 id="post__invoice_paymentrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentRequestPost](#schemapaymentrequestpost)|true|An XML or JSON representation of a Payment Request.|

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

<h3 id="post__invoice_paymentrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreateResponse](#schemacreateresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

#### put__invoice_paymentrequest

> Code samples

```shell
# You can also use wget
curl -X PUT https://www.concursolutions.com/api/v3.0/invoice/paymentrequest \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://www.concursolutions.com/api/v3.0/invoice/paymentrequest HTTP/1.1
Host: www.concursolutions.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "AmountWithoutVat": "string",
  "BuyerCostCenter": "string",
  "CheckNumber": "string",
  "CompanyBillToAddressCode": "string",
  "CompanyShipToAddressCode": "string",
  "CountryCode": "string",
  "CurrencyCode": "string",
  "Custom01": "string",
  "Custom02": "string",
  "Custom03": "string",
  "Custom04": "string",
  "Custom05": "string",
  "Custom06": "string",
  "Custom07": "string",
  "Custom08": "string",
  "Custom09": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "DeliverySlipNumber": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "DoCopyDown": "string",
  "DoCopyDownFromPO": "string",
  "EmployeeEmailAddress": "string",
  "EmployeeId": "string",
  "EmployeeLoginId": "string",
  "InvoiceAmount": "string",
  "InvoiceDate": "string",
  "InvoiceNumber": "string",
  "InvoiceReceivedDate": "string",
  "IsEmergencyCheckRun": "string",
  "IsInvoiceConfirmed": "string",
  "LineItems": {
    "Action": "string",
    "Allocations": {
      "Custom01": "string",
      "Custom02": "string",
      "Custom03": "string",
      "Custom04": "string",
      "Custom05": "string",
      "Custom06": "string",
      "Custom07": "string",
      "Custom08": "string",
      "Custom09": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom20": "string",
      "Percentage": "string"
    },
    "AmountWithoutVat": "string",
    "Custom01": "string",
    "Custom02": "string",
    "Custom03": "string",
    "Custom04": "string",
    "Custom05": "string",
    "Custom06": "string",
    "Custom07": "string",
    "Custom08": "string",
    "Custom09": "string",
    "Custom10": "string",
    "Custom11": "string",
    "Custom12": "string",
    "Custom13": "string",
    "Custom14": "string",
    "Custom15": "string",
    "Custom16": "string",
    "Custom17": "string",
    "Custom18": "string",
    "Custom19": "string",
    "Custom20": "string",
    "Description": "string",
    "ExpenseTypeCode": "string",
    "ItemCode": "string",
    "LineItemID": "string",
    "PurchaseOrderNumber": "string",
    "Quantity": "string",
    "ShipFromPostalCode": "string",
    "ShipToPostalCode": "string",
    "SupplierPartId": "string",
    "Tax": "string",
    "TaxCode": "string",
    "TaxCode2": "string",
    "TaxCode3": "string",
    "TaxCode4": "string",
    "UnitOfMeasure": "string",
    "UnitPrice": "string",
    "VatAmount": "string",
    "VatAmountFour": "string",
    "VatAmountThree": "string",
    "VatAmountTwo": "string",
    "VatRate": "string",
    "VatRateFour": "string",
    "VatRateThree": "string",
    "VatRateTwo": "string"
  },
  "Name": "string",
  "NotesToVendor": "string",
  "OB10BuyerId": "string",
  "OB10TransactionId": "string",
  "OrgUnit01": "string",
  "OrgUnit02": "string",
  "OrgUnit03": "string",
  "OrgUnit04": "string",
  "OrgUnit05": "string",
  "OrgUnit06": "string",
  "PaymentAdjustmentNotes": "string",
  "PaymentAmount": "string",
  "PaymentDueDate": "string",
  "PaymentTermsDays": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderId": "string",
  "ReceiptConfirmationType": "string",
  "RequestID": "string",
  "ShippingAmount": "string",
  "TaxAmount": "string",
  "VatAmountFour": "string",
  "VatAmountOne": "string",
  "VatAmountThree": "string",
  "VatAmountTwo": "string",
  "VatRateFour": "string",
  "VatRateOne": "string",
  "VatRateThree": "string",
  "VatRateTwo": "string",
  "VendorRemitToIdentifier": {
    "Address1": "string",
    "AddressCode": "string",
    "Name": "string",
    "PostalCode": "string",
    "VendorCode": "string"
  },
  "VendorShipFromAddressCode": "string",
  "VendorTaxId": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://www.concursolutions.com/api/v3.0/invoice/paymentrequest',
{
  method: 'PUT',
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
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.put 'https://www.concursolutions.com/api/v3.0/invoice/paymentrequest',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.put('https://www.concursolutions.com/api/v3.0/invoice/paymentrequest', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://www.concursolutions.com/api/v3.0/invoice/paymentrequest', array(
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
URL obj = new URL("https://www.concursolutions.com/api/v3.0/invoice/paymentrequest");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://www.concursolutions.com/api/v3.0/invoice/paymentrequest", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /invoice/paymentrequest`

*Update a Payment Request.*

Updates a payment request with all relevant details including line items and associated allocations.

> Body parameter

```json
{
  "AmountWithoutVat": "string",
  "BuyerCostCenter": "string",
  "CheckNumber": "string",
  "CompanyBillToAddressCode": "string",
  "CompanyShipToAddressCode": "string",
  "CountryCode": "string",
  "CurrencyCode": "string",
  "Custom01": "string",
  "Custom02": "string",
  "Custom03": "string",
  "Custom04": "string",
  "Custom05": "string",
  "Custom06": "string",
  "Custom07": "string",
  "Custom08": "string",
  "Custom09": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "DeliverySlipNumber": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "DoCopyDown": "string",
  "DoCopyDownFromPO": "string",
  "EmployeeEmailAddress": "string",
  "EmployeeId": "string",
  "EmployeeLoginId": "string",
  "InvoiceAmount": "string",
  "InvoiceDate": "string",
  "InvoiceNumber": "string",
  "InvoiceReceivedDate": "string",
  "IsEmergencyCheckRun": "string",
  "IsInvoiceConfirmed": "string",
  "LineItems": {
    "Action": "string",
    "Allocations": {
      "Custom01": "string",
      "Custom02": "string",
      "Custom03": "string",
      "Custom04": "string",
      "Custom05": "string",
      "Custom06": "string",
      "Custom07": "string",
      "Custom08": "string",
      "Custom09": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom20": "string",
      "Percentage": "string"
    },
    "AmountWithoutVat": "string",
    "Custom01": "string",
    "Custom02": "string",
    "Custom03": "string",
    "Custom04": "string",
    "Custom05": "string",
    "Custom06": "string",
    "Custom07": "string",
    "Custom08": "string",
    "Custom09": "string",
    "Custom10": "string",
    "Custom11": "string",
    "Custom12": "string",
    "Custom13": "string",
    "Custom14": "string",
    "Custom15": "string",
    "Custom16": "string",
    "Custom17": "string",
    "Custom18": "string",
    "Custom19": "string",
    "Custom20": "string",
    "Description": "string",
    "ExpenseTypeCode": "string",
    "ItemCode": "string",
    "LineItemID": "string",
    "PurchaseOrderNumber": "string",
    "Quantity": "string",
    "ShipFromPostalCode": "string",
    "ShipToPostalCode": "string",
    "SupplierPartId": "string",
    "Tax": "string",
    "TaxCode": "string",
    "TaxCode2": "string",
    "TaxCode3": "string",
    "TaxCode4": "string",
    "UnitOfMeasure": "string",
    "UnitPrice": "string",
    "VatAmount": "string",
    "VatAmountFour": "string",
    "VatAmountThree": "string",
    "VatAmountTwo": "string",
    "VatRate": "string",
    "VatRateFour": "string",
    "VatRateThree": "string",
    "VatRateTwo": "string"
  },
  "Name": "string",
  "NotesToVendor": "string",
  "OB10BuyerId": "string",
  "OB10TransactionId": "string",
  "OrgUnit01": "string",
  "OrgUnit02": "string",
  "OrgUnit03": "string",
  "OrgUnit04": "string",
  "OrgUnit05": "string",
  "OrgUnit06": "string",
  "PaymentAdjustmentNotes": "string",
  "PaymentAmount": "string",
  "PaymentDueDate": "string",
  "PaymentTermsDays": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderId": "string",
  "ReceiptConfirmationType": "string",
  "RequestID": "string",
  "ShippingAmount": "string",
  "TaxAmount": "string",
  "VatAmountFour": "string",
  "VatAmountOne": "string",
  "VatAmountThree": "string",
  "VatAmountTwo": "string",
  "VatRateFour": "string",
  "VatRateOne": "string",
  "VatRateThree": "string",
  "VatRateTwo": "string",
  "VendorRemitToIdentifier": {
    "Address1": "string",
    "AddressCode": "string",
    "Name": "string",
    "PostalCode": "string",
    "VendorCode": "string"
  },
  "VendorShipFromAddressCode": "string",
  "VendorTaxId": "string"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PaymentRequestPut>
  <AmountWithoutVat>string</AmountWithoutVat>
  <BuyerCostCenter>string</BuyerCostCenter>
  <CheckNumber>string</CheckNumber>
  <CompanyBillToAddressCode>string</CompanyBillToAddressCode>
  <CompanyShipToAddressCode>string</CompanyShipToAddressCode>
  <CountryCode>string</CountryCode>
  <CurrencyCode>string</CurrencyCode>
  <Custom01>string</Custom01>
  <Custom02>string</Custom02>
  <Custom03>string</Custom03>
  <Custom04>string</Custom04>
  <Custom05>string</Custom05>
  <Custom06>string</Custom06>
  <Custom07>string</Custom07>
  <Custom08>string</Custom08>
  <Custom09>string</Custom09>
  <Custom10>string</Custom10>
  <Custom11>string</Custom11>
  <Custom12>string</Custom12>
  <Custom13>string</Custom13>
  <Custom14>string</Custom14>
  <Custom15>string</Custom15>
  <Custom16>string</Custom16>
  <Custom17>string</Custom17>
  <Custom18>string</Custom18>
  <Custom19>string</Custom19>
  <Custom20>string</Custom20>
  <Custom21>string</Custom21>
  <Custom22>string</Custom22>
  <Custom23>string</Custom23>
  <Custom24>string</Custom24>
  <DeliverySlipNumber>string</DeliverySlipNumber>
  <Description>string</Description>
  <DiscountPercentage>string</DiscountPercentage>
  <DiscountTerms>string</DiscountTerms>
  <DoCopyDown>string</DoCopyDown>
  <DoCopyDownFromPO>string</DoCopyDownFromPO>
  <EmployeeEmailAddress>string</EmployeeEmailAddress>
  <EmployeeId>string</EmployeeId>
  <EmployeeLoginId>string</EmployeeLoginId>
  <InvoiceAmount>string</InvoiceAmount>
  <InvoiceDate>string</InvoiceDate>
  <InvoiceNumber>string</InvoiceNumber>
  <InvoiceReceivedDate>string</InvoiceReceivedDate>
  <IsEmergencyCheckRun>string</IsEmergencyCheckRun>
  <IsInvoiceConfirmed>string</IsInvoiceConfirmed>
  <LineItems>
    <Action>string</Action>
    <Allocations>
      <Custom01>string</Custom01>
      <Custom02>string</Custom02>
      <Custom03>string</Custom03>
      <Custom04>string</Custom04>
      <Custom05>string</Custom05>
      <Custom06>string</Custom06>
      <Custom07>string</Custom07>
      <Custom08>string</Custom08>
      <Custom09>string</Custom09>
      <Custom10>string</Custom10>
      <Custom11>string</Custom11>
      <Custom12>string</Custom12>
      <Custom13>string</Custom13>
      <Custom14>string</Custom14>
      <Custom15>string</Custom15>
      <Custom16>string</Custom16>
      <Custom17>string</Custom17>
      <Custom18>string</Custom18>
      <Custom19>string</Custom19>
      <Custom20>string</Custom20>
      <Percentage>string</Percentage>
    </Allocations>
    <AmountWithoutVat>string</AmountWithoutVat>
    <Custom01>string</Custom01>
    <Custom02>string</Custom02>
    <Custom03>string</Custom03>
    <Custom04>string</Custom04>
    <Custom05>string</Custom05>
    <Custom06>string</Custom06>
    <Custom07>string</Custom07>
    <Custom08>string</Custom08>
    <Custom09>string</Custom09>
    <Custom10>string</Custom10>
    <Custom11>string</Custom11>
    <Custom12>string</Custom12>
    <Custom13>string</Custom13>
    <Custom14>string</Custom14>
    <Custom15>string</Custom15>
    <Custom16>string</Custom16>
    <Custom17>string</Custom17>
    <Custom18>string</Custom18>
    <Custom19>string</Custom19>
    <Custom20>string</Custom20>
    <Description>string</Description>
    <ExpenseTypeCode>string</ExpenseTypeCode>
    <ItemCode>string</ItemCode>
    <LineItemID>string</LineItemID>
    <PurchaseOrderNumber>string</PurchaseOrderNumber>
    <Quantity>string</Quantity>
    <ShipFromPostalCode>string</ShipFromPostalCode>
    <ShipToPostalCode>string</ShipToPostalCode>
    <SupplierPartId>string</SupplierPartId>
    <Tax>string</Tax>
    <TaxCode>string</TaxCode>
    <TaxCode2>string</TaxCode2>
    <TaxCode3>string</TaxCode3>
    <TaxCode4>string</TaxCode4>
    <UnitOfMeasure>string</UnitOfMeasure>
    <UnitPrice>string</UnitPrice>
    <VatAmount>string</VatAmount>
    <VatAmountFour>string</VatAmountFour>
    <VatAmountThree>string</VatAmountThree>
    <VatAmountTwo>string</VatAmountTwo>
    <VatRate>string</VatRate>
    <VatRateFour>string</VatRateFour>
    <VatRateThree>string</VatRateThree>
    <VatRateTwo>string</VatRateTwo>
  </LineItems>
  <Name>string</Name>
  <NotesToVendor>string</NotesToVendor>
  <OB10BuyerId>string</OB10BuyerId>
  <OB10TransactionId>string</OB10TransactionId>
  <OrgUnit01>string</OrgUnit01>
  <OrgUnit02>string</OrgUnit02>
  <OrgUnit03>string</OrgUnit03>
  <OrgUnit04>string</OrgUnit04>
  <OrgUnit05>string</OrgUnit05>
  <OrgUnit06>string</OrgUnit06>
  <PaymentAdjustmentNotes>string</PaymentAdjustmentNotes>
  <PaymentAmount>string</PaymentAmount>
  <PaymentDueDate>string</PaymentDueDate>
  <PaymentTermsDays>string</PaymentTermsDays>
  <ProvincialTaxId>string</ProvincialTaxId>
  <PurchaseOrderId>string</PurchaseOrderId>
  <ReceiptConfirmationType>string</ReceiptConfirmationType>
  <RequestID>string</RequestID>
  <ShippingAmount>string</ShippingAmount>
  <TaxAmount>string</TaxAmount>
  <VatAmountFour>string</VatAmountFour>
  <VatAmountOne>string</VatAmountOne>
  <VatAmountThree>string</VatAmountThree>
  <VatAmountTwo>string</VatAmountTwo>
  <VatRateFour>string</VatRateFour>
  <VatRateOne>string</VatRateOne>
  <VatRateThree>string</VatRateThree>
  <VatRateTwo>string</VatRateTwo>
  <VendorRemitToIdentifier>
    <Address1>string</Address1>
    <AddressCode>string</AddressCode>
    <Name>string</Name>
    <PostalCode>string</PostalCode>
    <VendorCode>string</VendorCode>
  </VendorRemitToIdentifier>
  <VendorShipFromAddressCode>string</VendorShipFromAddressCode>
  <VendorTaxId>string</VendorTaxId>
</PaymentRequestPut>
```

<h3 id="put__invoice_paymentrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentRequestPut](#schemapaymentrequestput)|true|An XML or JSON representation of a Payment Request.|

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

<h3 id="put__invoice_paymentrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreateResponse](#schemacreateresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[Void](#schemavoid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

### Schemas

<h3 id="tocS_Allocation">Allocation</h3>

<a id="schemaallocation"></a>
<a id="schema_Allocation"></a>
<a id="tocSallocation"></a>
<a id="tocsallocation"></a>

```json
{
  "AllocationAccountCode": "string",
  "Custom1": "string",
  "Custom2": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom20": "string",
  "IsTestUser": "string",
  "Percentage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllocationAccountCode|string|false|none|The Account Code that the allocation will be assigned to.|
|Custom1|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom2|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom3|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom4|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom5|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom6|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom7|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom8|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom9|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom10|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom11|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom12|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom13|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom14|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom15|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom16|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom17|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom18|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom19|string|false|none|A value that can be applied to a custom field 8 that is part of the allocation form.|
|Custom20|string|false|none|A value that can be applied to a custom field 9 that is part of the allocation form.|
|IsTestUser|string|false|none|Indication that the Allocation record was created by a test user. Format: true/false.|
|Percentage|string|false|none|The percentage of the request line item that the individual allocation records. All allocations associated to a given line item should add up to 100.|

<h3 id="tocS_AllocationsCollection">AllocationsCollection</h3>

<a id="schemaallocationscollection"></a>
<a id="schema_AllocationsCollection"></a>
<a id="tocSallocationscollection"></a>
<a id="tocsallocationscollection"></a>

```json
{
  "Allocation": {
    "AllocationAccountCode": "string",
    "Custom1": "string",
    "Custom2": "string",
    "Custom3": "string",
    "Custom4": "string",
    "Custom5": "string",
    "Custom6": "string",
    "Custom7": "string",
    "Custom8": "string",
    "Custom9": "string",
    "Custom10": "string",
    "Custom11": "string",
    "Custom12": "string",
    "Custom13": "string",
    "Custom14": "string",
    "Custom15": "string",
    "Custom16": "string",
    "Custom17": "string",
    "Custom18": "string",
    "Custom19": "string",
    "Custom20": "string",
    "IsTestUser": "string",
    "Percentage": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Allocation|[Allocation](#schemaallocation)|false|none|none|

<h3 id="tocS_CompanyAddress">CompanyAddress</h3>

<a id="schemacompanyaddress"></a>
<a id="schema_CompanyAddress"></a>
<a id="tocScompanyaddress"></a>
<a id="tocscompanyaddress"></a>

```json
{
  "Address1": "string",
  "Address2": "string",
  "Address3": "string",
  "City": "string",
  "CountryCode": "string",
  "Name": "string",
  "PostalCode": "string",
  "State": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address1|string|false|none|Line 1 of the street address.|
|Address2|string|false|none|Line 2 of the street address|
|Address3|string|false|none|Line 3 of the street address|
|City|string|false|none|The name of the city.|
|CountryCode|string|false|none|The country code.|
|Name|string|false|none|The name given to the company location.|
|PostalCode|string|false|none|The postal / zip code.|
|State|string|false|none|The state code.|

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
|ID|string|false|none|The ID of the resource.|
|URI|string|false|none|The URI to the resource.|

<h3 id="tocS_LineItem">LineItem</h3>

<a id="schemalineitem"></a>
<a id="schema_LineItem"></a>
<a id="tocSlineitem"></a>
<a id="tocslineitem"></a>

```json
{
  "Allocations": {
    "Allocation": {
      "AllocationAccountCode": "string",
      "Custom1": "string",
      "Custom2": "string",
      "Custom3": "string",
      "Custom4": "string",
      "Custom5": "string",
      "Custom6": "string",
      "Custom7": "string",
      "Custom8": "string",
      "Custom9": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom20": "string",
      "IsTestUser": "string",
      "Percentage": "string"
    }
  },
  "AllocationStatus": "string",
  "AmountWithoutVat": "string",
  "ApprovedLineItemAmount": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "DeliverySlipNumber": "string",
  "Description": "string",
  "ExpenseTypeCode": "string",
  "IsMatched": "string",
  "LineItemId": "string",
  "LineItemIsTestUser": "string",
  "MatchedPurchaseOrderLineItemId": "string",
  "PurchaseOrderNumber": "string",
  "Quantity": "string",
  "RequestedLineItemAmount": "string",
  "RequestLineItemNumber": "string",
  "ShipFromPostalCode": "string",
  "ShipToPostalCode": "string",
  "SupplierPartId": "string",
  "Tax": "string",
  "TaxCode": "string",
  "TaxCode2": "string",
  "TaxCode3": "string",
  "TaxCode4": "string",
  "TotalPrice": "string",
  "UnitOfMeasure": "string",
  "UnitPrice": "string",
  "VatAmount": "string",
  "VatAmountFour": "string",
  "VatAmountThree": "string",
  "VatAmountTwo": "string",
  "VatRate": "string",
  "VatRateFour": "string",
  "VatRateThree": "string",
  "VatRateTwo": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Allocations|[AllocationsCollection](#schemaallocationscollection)|false|none|none|
|AllocationStatus|string|false|none|Current amount of allocation performed on the Request line item Supported values: None, Partial, Full.|
|AmountWithoutVat|string|false|none|The net amount of the line item, excluding VAT.|
|ApprovedLineItemAmount|string|false|none|The approved amount of the line item.|
|Custom1|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom10|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom11|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom12|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom13|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom14|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom15|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom16|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom17|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom18|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom19|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom2|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom20|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom3|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom4|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom5|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom6|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom7|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom8|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom9|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|DeliverySlipNumber|string|false|none|The delivery slip number associated with receiving receipt.|
|Description|string|false|none|Brief overview of the good or service ordered.|
|ExpenseTypeCode|string|false|none|A code which indicates the expense type for the line item.|
|IsMatched|string|false|none|Indication that the payment request line item is associated to a purchase order line item. Format: true/false.|
|LineItemId|string|false|none|The identifier of the payment request line item. The ID is only guaranteed to be unique for a given payment request.|
|LineItemIsTestUser|string|false|none|Indication that the allocation record was created by a test user. Format: true/false.|
|MatchedPurchaseOrderLineItemId|string|false|none|The identifier of the purchase order line item to which the payment request line item is matched (if any).|
|PurchaseOrderNumber|string|false|none|The identifier of the purchase order containing the line item to which the payment request line item is matched (if any).|
|Quantity|string|false|none|Total number of goods or services ordered.|
|RequestedLineItemAmount|string|false|none|The requested amount of the line item.|
|RequestLineItemNumber|string|false|none|The relative location of the line item in relation to other line items in the payment request.|
|ShipFromPostalCode|string|false|none|The postal code the good or service was shipped from.|
|ShipToPostalCode|string|false|none|The postal code the good or service will be shipped to.|
|SupplierPartId|string|false|none|The unique identifier provided by the supplier that is associated with the good or service.|
|Tax|string|false|none|The tax associated with the line item.|
|TaxCode|string|false|none|The tax code assigned for the line item, based on the tax setting.|
|TaxCode2|string|false|none|The tax code 2 assigned for the line item, based on the tax setting.|
|TaxCode3|string|false|none|The tax code 3 assigned for the line item, based on the tax setting.|
|TaxCode4|string|false|none|The tax code 4 assigned for the line item, based on the tax setting.|
|TotalPrice|string|false|none|The total amount of the line item.|
|UnitOfMeasure|string|false|none|The code for the measurement unit used to quantify the good or service. Use "GET /invoice/localizeddata" to look up codes and descriptions.|
|UnitPrice|string|false|none|The cost for a single unit of the line item good or service.|
|VatAmount|string|false|none|The amount of VAT 1 included in the line item total.|
|VatAmountFour|string|false|none|The amount of VAT 4 included in the line item total.|
|VatAmountThree|string|false|none|The amount of VAT 3 included in the line item total.|
|VatAmountTwo|string|false|none|The amount of VAT 2 included in the line item total.|
|VatRate|string|false|none|The VAT rate 1 applied to the net line item total.|
|VatRateFour|string|false|none|The VAT rate 4 applied to the net line item total.|
|VatRateThree|string|false|none|The VAT rate 3 applied to the net line item total.|
|VatRateTwo|string|false|none|The VAT rate 2 applied to the net line item total.|

<h3 id="tocS_LineItemsCollection">LineItemsCollection</h3>

<a id="schemalineitemscollection"></a>
<a id="schema_LineItemsCollection"></a>
<a id="tocSlineitemscollection"></a>
<a id="tocslineitemscollection"></a>

```json
{
  "LineItem": {
    "Allocations": {
      "Allocation": {
        "AllocationAccountCode": "string",
        "Custom1": "string",
        "Custom2": "string",
        "Custom3": "string",
        "Custom4": "string",
        "Custom5": "string",
        "Custom6": "string",
        "Custom7": "string",
        "Custom8": "string",
        "Custom9": "string",
        "Custom10": "string",
        "Custom11": "string",
        "Custom12": "string",
        "Custom13": "string",
        "Custom14": "string",
        "Custom15": "string",
        "Custom16": "string",
        "Custom17": "string",
        "Custom18": "string",
        "Custom19": "string",
        "Custom20": "string",
        "IsTestUser": "string",
        "Percentage": "string"
      }
    },
    "AllocationStatus": "string",
    "AmountWithoutVat": "string",
    "ApprovedLineItemAmount": "string",
    "Custom1": "string",
    "Custom10": "string",
    "Custom11": "string",
    "Custom12": "string",
    "Custom13": "string",
    "Custom14": "string",
    "Custom15": "string",
    "Custom16": "string",
    "Custom17": "string",
    "Custom18": "string",
    "Custom19": "string",
    "Custom2": "string",
    "Custom20": "string",
    "Custom3": "string",
    "Custom4": "string",
    "Custom5": "string",
    "Custom6": "string",
    "Custom7": "string",
    "Custom8": "string",
    "Custom9": "string",
    "DeliverySlipNumber": "string",
    "Description": "string",
    "ExpenseTypeCode": "string",
    "IsMatched": "string",
    "LineItemId": "string",
    "LineItemIsTestUser": "string",
    "MatchedPurchaseOrderLineItemId": "string",
    "PurchaseOrderNumber": "string",
    "Quantity": "string",
    "RequestedLineItemAmount": "string",
    "RequestLineItemNumber": "string",
    "ShipFromPostalCode": "string",
    "ShipToPostalCode": "string",
    "SupplierPartId": "string",
    "Tax": "string",
    "TaxCode": "string",
    "TaxCode2": "string",
    "TaxCode3": "string",
    "TaxCode4": "string",
    "TotalPrice": "string",
    "UnitOfMeasure": "string",
    "UnitPrice": "string",
    "VatAmount": "string",
    "VatAmountFour": "string",
    "VatAmountThree": "string",
    "VatAmountTwo": "string",
    "VatRate": "string",
    "VatRateFour": "string",
    "VatRateThree": "string",
    "VatRateTwo": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LineItem|[LineItem](#schemalineitem)|false|none|none|

<h3 id="tocS_PaymentRequest">PaymentRequest</h3>

<a id="schemapaymentrequest"></a>
<a id="schema_PaymentRequest"></a>
<a id="tocSpaymentrequest"></a>
<a id="tocspaymentrequest"></a>

```json
{
  "AmountWithoutVat": "string",
  "ApprovalStatus": "string",
  "ApprovedByDelegate": "string",
  "AssignedByUsername": "string",
  "AssignedDate": "string",
  "BuyerCostCenter": "string",
  "CalculatedAmount": "string",
  "CheckNumber": "string",
  "CompanyBillToAddress": {
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "City": "string",
    "CountryCode": "string",
    "Name": "string",
    "PostalCode": "string",
    "State": "string"
  },
  "CompanyShipToAddress": {
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "City": "string",
    "CountryCode": "string",
    "Name": "string",
    "PostalCode": "string",
    "State": "string"
  },
  "CountryCode": "string",
  "CreatedByUsername": "string",
  "CurrencyCode": "string",
  "Custom1": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom2": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "Custom3": "string",
  "Custom4": "string",
  "Custom5": "string",
  "Custom6": "string",
  "Custom7": "string",
  "Custom8": "string",
  "Custom9": "string",
  "DataSource": "string",
  "DeletedDate": "string",
  "DeliverySlipNumber": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "EmployeeName": "string",
  "ExternalPolicyId": "string",
  "ExtractDate": "string",
  "FirstApprovalDate": "string",
  "FirstSubmitDate": "string",
  "ID": "string",
  "InvoiceAmount": "string",
  "InvoiceDate": "string",
  "InvoiceNumber": "string",
  "InvoiceReceivedDate": "string",
  "IsAssigned": "string",
  "IsInvoiceConfirmed": "string",
  "IsPaymentRequestDeleted": "string",
  "IsPaymentRequestDuplicate": "string",
  "IsTestTransaction": "string",
  "LastSubmitDate": "string",
  "LedgerCode": "string",
  "LineItems": {
    "LineItem": {
      "Allocations": {
        "Allocation": {
          "AllocationAccountCode": "string",
          "Custom1": "string",
          "Custom2": "string",
          "Custom3": "string",
          "Custom4": "string",
          "Custom5": "string",
          "Custom6": "string",
          "Custom7": "string",
          "Custom8": "string",
          "Custom9": "string",
          "Custom10": "string",
          "Custom11": "string",
          "Custom12": "string",
          "Custom13": "string",
          "Custom14": "string",
          "Custom15": "string",
          "Custom16": "string",
          "Custom17": "string",
          "Custom18": "string",
          "Custom19": "string",
          "Custom20": "string",
          "IsTestUser": "string",
          "Percentage": "string"
        }
      },
      "AllocationStatus": "string",
      "AmountWithoutVat": "string",
      "ApprovedLineItemAmount": "string",
      "Custom1": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom2": "string",
      "Custom20": "string",
      "Custom3": "string",
      "Custom4": "string",
      "Custom5": "string",
      "Custom6": "string",
      "Custom7": "string",
      "Custom8": "string",
      "Custom9": "string",
      "DeliverySlipNumber": "string",
      "Description": "string",
      "ExpenseTypeCode": "string",
      "IsMatched": "string",
      "LineItemId": "string",
      "LineItemIsTestUser": "string",
      "MatchedPurchaseOrderLineItemId": "string",
      "PurchaseOrderNumber": "string",
      "Quantity": "string",
      "RequestedLineItemAmount": "string",
      "RequestLineItemNumber": "string",
      "ShipFromPostalCode": "string",
      "ShipToPostalCode": "string",
      "SupplierPartId": "string",
      "Tax": "string",
      "TaxCode": "string",
      "TaxCode2": "string",
      "TaxCode3": "string",
      "TaxCode4": "string",
      "TotalPrice": "string",
      "UnitOfMeasure": "string",
      "UnitPrice": "string",
      "VatAmount": "string",
      "VatAmountFour": "string",
      "VatAmountThree": "string",
      "VatAmountTwo": "string",
      "VatRate": "string",
      "VatRateFour": "string",
      "VatRateThree": "string",
      "VatRateTwo": "string"
    }
  },
  "LineItemTotalAmount": "string",
  "LineItemVatAmount": "string",
  "Name": "string",
  "NotesToVendor": "string",
  "OB10BuyerId": "string",
  "OB10TransactionId": "string",
  "OrgUnit01": "string",
  "OrgUnit02": "string",
  "OrgUnit03": "string",
  "OrgUnit04": "string",
  "OrgUnit05": "string",
  "OrgUnit06": "string",
  "PaidAmount": "string",
  "PaidDate": "string",
  "PaymentAdjustmentNotes": "string",
  "PaymentDueDate": "string",
  "PaymentMethod": "string",
  "PaymentRequestCreatedByTestUser": "string",
  "PaymentRequestDeletedBy": "string",
  "PaymentStatus": "string",
  "PaymentTermsDays": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderNumber": "string",
  "ReceiptConfirmationType": "string",
  "ShippingAmount": "string",
  "SubmittedByDelegate": "string",
  "TaxAmount": "string",
  "TaxCode": "string",
  "TaxCode2": "string",
  "TaxCode3": "string",
  "TaxCode4": "string",
  "TotalApprovedAmount": "string",
  "URI": "string",
  "UserCreationDate": "string",
  "VatAmountFour": "string",
  "VatAmountOne": "string",
  "VatAmountThree": "string",
  "VatAmountTwo": "string",
  "VatRateFour": "string",
  "VatRateOne": "string",
  "VatRateThree": "string",
  "VatRateTwo": "string",
  "VendorRemitAddress": {
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "City": "string",
    "CountryCode": "string",
    "DiscountTerms": "string",
    "Name": "string",
    "PostalCode": "string",
    "State": "string"
  },
  "VendorShipFromAddress": {
    "Address1": "string",
    "Address2": "string",
    "Address3": "string",
    "City": "string",
    "CountryCode": "string",
    "DiscountTerms": "string",
    "Name": "string",
    "PostalCode": "string",
    "State": "string"
  },
  "VendorTaxId": "string",
  "WorkflowCompleteDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmountWithoutVat|string|false|none|The net amount of the invoice, excluding VAT.|
|ApprovalStatus|string|false|none|A code which indicates the approval status of the payment request.|
|ApprovedByDelegate|string|false|none|Was the Payment Request approved by a delegate. Format: true/false.|
|AssignedByUsername|string|false|none|Username of the assigning employee.|
|AssignedDate|string|false|none|The date the payment request was assigned to the current owner.|
|BuyerCostCenter|string|false|none|The company defined center responsible for the payment request.|
|CalculatedAmount|string|false|none|The sum of all line item amounts plus shipping amount and tax amount for the payment request.|
|CheckNumber|string|false|none|Check number of the payment made to the vendor.|
|CompanyBillToAddress|[CompanyAddress](#schemacompanyaddress)|false|none|none|
|CompanyShipToAddress|[CompanyAddress](#schemacompanyaddress)|false|none|none|
|CountryCode|string|false|none|The country code.|
|CreatedByUsername|string|false|none|Username of the payment request creator.|
|CurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the expense report currency. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona.|
|Custom1|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom10|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom11|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom12|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom13|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom14|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom15|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom16|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom17|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom18|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom19|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom2|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom20|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom21|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom22|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom23|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom24|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom3|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom4|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom5|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom6|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom7|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom8|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom9|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|DataSource|string|false|none|A code which indicates the method used to created the Payment Request. Use "GET /invoice/localizeddata" to translate the code into text.|
|DeletedDate|string|false|none|The date the user deleted the payment request.|
|DeliverySlipNumber|string|false|none|The delivery slip number associated with receiving receipt.|
|Description|string|false|none|User entered description of the Payment Request.|
|DiscountPercentage|string|false|none|The discount from the supplier if the discount terms are met.|
|DiscountTerms|string|false|none|The NET discount terms with a supplier when discounts apply.|
|EmployeeName|string|false|none|The owner of the Payment Request.|
|ExternalPolicyId|string|false|none|The external policy ID.|
|ExtractDate|string|false|none|The date the payment request was extracted, in order to import it into an accounts payable system and generate a payment.|
|FirstApprovalDate|string|false|none|The date the payment request received its first approval in its approval workflow.|
|FirstSubmitDate|string|false|none|The date the payment request was first submitted.|
|ID|string|false|none|The unique identifier of the resource.|
|InvoiceAmount|string|false|none|User-entered value representing the total invoice amount, used to calculate amount remaining on the line item page.|
|InvoiceDate|string|false|none|The date the vendor issued the invoice.|
|InvoiceNumber|string|false|none|The invoice Number from the vendor for the payment request.|
|InvoiceReceivedDate|string|false|none|The date on which the invoice was received.|
|IsAssigned|string|false|none|Whether the payment request is assigned. Format: true/false.|
|IsInvoiceConfirmed|string|false|none|Indicates if the payment request invoice is confirmed or in a different status. Format: true/false.|
|IsPaymentRequestDeleted|string|false|none|Whether the payment request is deleted. Format: true/false.|
|IsPaymentRequestDuplicate|string|false|none|Whether the payment request identified as a duplicate of another existing request. Format:true/false.|
|IsTestTransaction|string|false|none|Is the payment request a test transaction (true/false).|
|LastSubmitDate|string|false|none|The date the payment request was last submitted.|
|LedgerCode|string|false|none|A code which indicates which company journal the payment request is assigned to. Use "GET /invoice/localizeddata" to translate the code into text.|
|LineItems|[LineItemsCollection](#schemalineitemscollection)|false|none|none|
|LineItemTotalAmount|string|false|none|The sum of all line item amounts.|
|LineItemVatAmount|string|false|none|The sum amount of VAT from all line items in the request.|
|Name|string|false|none|The payment request name.|
|NotesToVendor|string|false|none|Information from the customer to the vendor for special requests or handling for the ordered good or service.|
|OB10BuyerId|string|false|none|A unique buyer account on the OB10 network.|
|OB10TransactionId|string|false|none|Unique identifier for the PR transaction (generated by OB10).|
|OrgUnit01|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit02|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit03|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit04|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit05|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit06|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|PaidAmount|string|false|none|Represents the amount of the payment that will be/has been made for the invoice.|
|PaidDate|string|false|none|The date payment was made to the vendor.|
|PaymentAdjustmentNotes|string|false|none|Notes to the vendor regarding the amount paid (underpayment due to damages, for example).|
|PaymentDueDate|string|false|none|The date the vendor needs to be paid by.|
|PaymentMethod|string|false|none|A code which indicates the method used to reimburse the vendor for the Payment Request. Use "GET /invoice/localizeddata" to translate the code into text.|
|PaymentRequestCreatedByTestUser|string|false|none|Was the Payment Request created by a Test User. Format: true/false.|
|PaymentRequestDeletedBy|string|false|none|The user who deleted the payment request.|
|PaymentStatus|string|false|none|A code which indicates the payment status of the payment request.|
|PaymentTermsDays|string|false|none|This number, along with type of payment terms (example: NET), determine when the invoice is expected to be paid.|
|ProvincialTaxId|string|false|none|The vendor provincial tax ID.|
|PurchaseOrderNumber|string|false|none|The purchase order number for the purchase order associated with the invoice.|
|ReceiptConfirmationType|string|false|none|A code which indicates the receipt confirmation type for this payment request (Invoice Confirmation, for example). Use "GET /invoice/localizeddata" to translate the code into text.|
|ShippingAmount|string|false|none|The value for the shipping amount header field.|
|SubmittedByDelegate|string|false|none|Whether the payment request was created by a delegate. Format: true/false.|
|TaxAmount|string|false|none|The value for the tax amount header field.|
|TaxCode|string|false|none|The tax code assigned for the Request, based on the tax setting.|
|TaxCode2|string|false|none|The tax code 2 assigned for the request, based on the tax setting.|
|TaxCode3|string|false|none|The tax code 3 assigned for the request, based on the tax setting.|
|TaxCode4|string|false|none|The tax code 4 assigned for the request, based on the tax setting.|
|TotalApprovedAmount|string|false|none|The total amount that has been approved.|
|URI|string|false|none|The URI to the resource.|
|UserCreationDate|string|false|none|The date the Concur Invoice user first saved the payment request.|
|VatAmountFour|string|false|none|The amount of VAT included in the invoice total. Fourth of four VAT amount fields available.|
|VatAmountOne|string|false|none|The amount of VAT included in the invoice total. First of four VAT amount fields available.|
|VatAmountThree|string|false|none|The amount of VAT included in the invoice total. Third of four VAT amount fields available.|
|VatAmountTwo|string|false|none|The amount of VAT included in the invoice total. Second of four VAT amount fields available.|
|VatRateFour|string|false|none|The VAT rate applied to the net invoice total. Should relate to the fourth VAT amount field.|
|VatRateOne|string|false|none|The VAT rate applied to the net invoice total. Should relate to the first VAT amount field.|
|VatRateThree|string|false|none|The VAT rate applied to the net invoice total. Should relate to the third VAT amount field.|
|VatRateTwo|string|false|none|The VAT rate applied to the net invoice total. Should relate to the second VAT amount field.|
|VendorRemitAddress|[VendorAddress](#schemavendoraddress)|false|none|none|
|VendorShipFromAddress|[VendorAddress](#schemavendoraddress)|false|none|none|
|VendorTaxId|string|false|none|The vendor tax ID.|
|WorkflowCompleteDate|string|false|none|The date the last step in the workflow process completed.|

<h3 id="tocS_PaymentRequestAllocationPostPut">PaymentRequestAllocationPostPut</h3>

<a id="schemapaymentrequestallocationpostput"></a>
<a id="schema_PaymentRequestAllocationPostPut"></a>
<a id="tocSpaymentrequestallocationpostput"></a>
<a id="tocspaymentrequestallocationpostput"></a>

```json
{
  "Custom01": "string",
  "Custom02": "string",
  "Custom03": "string",
  "Custom04": "string",
  "Custom05": "string",
  "Custom06": "string",
  "Custom07": "string",
  "Custom08": "string",
  "Custom09": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom20": "string",
  "Percentage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Custom01|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom02|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom03|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom04|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom05|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom06|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom07|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom08|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom09|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom10|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom11|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom12|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom13|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom14|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom15|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom16|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom17|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom18|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom19|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Custom20|string|false|none|The details from the Custom fields. These may not have data, depending on configuration.|
|Percentage|string|false|none|The percentage of the request line item that the individual allocation records. All allocations associated to a given line item should add up to 100.|

<h3 id="tocS_PaymentRequestLineItemPost">PaymentRequestLineItemPost</h3>

<a id="schemapaymentrequestlineitempost"></a>
<a id="schema_PaymentRequestLineItemPost"></a>
<a id="tocSpaymentrequestlineitempost"></a>
<a id="tocspaymentrequestlineitempost"></a>

```json
{
  "Allocations": {
    "Custom01": "string",
    "Custom02": "string",
    "Custom03": "string",
    "Custom04": "string",
    "Custom05": "string",
    "Custom06": "string",
    "Custom07": "string",
    "Custom08": "string",
    "Custom09": "string",
    "Custom10": "string",
    "Custom11": "string",
    "Custom12": "string",
    "Custom13": "string",
    "Custom14": "string",
    "Custom15": "string",
    "Custom16": "string",
    "Custom17": "string",
    "Custom18": "string",
    "Custom19": "string",
    "Custom20": "string",
    "Percentage": "string"
  },
  "AmountWithoutVat": "string",
  "Custom01": "string",
  "Custom02": "string",
  "Custom03": "string",
  "Custom04": "string",
  "Custom05": "string",
  "Custom06": "string",
  "Custom07": "string",
  "Custom08": "string",
  "Custom09": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom20": "string",
  "Description": "string",
  "ExpenseTypeCode": "string",
  "ItemCode": "string",
  "PurchaseOrderNumber": "string",
  "Quantity": "string",
  "ShipFromPostalCode": "string",
  "ShipToPostalCode": "string",
  "SupplierPartId": "string",
  "Tax": "string",
  "TaxCode": "string",
  "TaxCode2": "string",
  "TaxCode3": "string",
  "TaxCode4": "string",
  "TotalPrice": "string",
  "UnitOfMeasure": "string",
  "UnitPrice": "string",
  "VatAmount": "string",
  "VatAmountFour": "string",
  "VatAmountThree": "string",
  "VatAmountTwo": "string",
  "VatRate": "string",
  "VatRateFour": "string",
  "VatRateThree": "string",
  "VatRateTwo": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Allocations|[PaymentRequestAllocationPostPut](#schemapaymentrequestallocationpostput)|false|none|none|
|AmountWithoutVat|string|false|none|The net amount of the line item, excluding VAT.|
|Custom01|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom02|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom03|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom04|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom05|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom06|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom07|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom08|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom09|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom10|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom11|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom12|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom13|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom14|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom15|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom16|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom17|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom18|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom19|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom20|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Description|string|false|none|Brief overview of the good or service ordered.|
|ExpenseTypeCode|string|false|none|A code which indicates the expense type for the line item.|
|ItemCode|string|false|none|Represents the item code (the unique code a vendor assigns to a good or code a vendor assigns to a good or service to identify it).|
|PurchaseOrderNumber|string|false|none|Purchase order that is associated to the line item .|
|Quantity|string|false|none|Total number of goods or services ordered.|
|ShipFromPostalCode|string|false|none|The postal code the good or service was shipped from.|
|ShipToPostalCode|string|false|none|The postal code the good or service will be shipped to.|
|SupplierPartId|string|false|none|The unique identifier provided by the supplier that is associated with the good or service.|
|Tax|string|false|none|The tax associated with the line item.|
|TaxCode|string|false|none|The tax code assigned for the line item, based on the tax setting.|
|TaxCode2|string|false|none|The tax code 2 assigned for the line item, based on the tax setting.|
|TaxCode3|string|false|none|The tax code 3 assigned for the line item, based on the tax setting.|
|TaxCode4|string|false|none|The tax code 4 assigned for the line item, based on the tax setting.|
|TotalPrice|string|false|none|The total amount of the line item.|
|UnitOfMeasure|string|false|none|The code for the measurement unit used to quantify the good or service. Use "GET /invoice/localizeddata" to look up codes and descriptions.|
|UnitPrice|string|false|none|The cost for a single unit of the line item good or service.|
|VatAmount|string|false|none|The amount of VAT 1 included in the line item total.|
|VatAmountFour|string|false|none|The amount of VAT 4 included in the line item total.|
|VatAmountThree|string|false|none|The amount of VAT 3 included in the line item total.|
|VatAmountTwo|string|false|none|The amount of VAT 2 included in the line item total.|
|VatRate|string|false|none|The VAT rate 1 applied to the net line item total.|
|VatRateFour|string|false|none|The VAT rate 4 applied to the net line item total.|
|VatRateThree|string|false|none|The VAT rate 3 applied to the net line item total.|
|VatRateTwo|string|false|none|The VAT rate 2 applied to the net line item total.|

<h3 id="tocS_PaymentRequestLineItemPut">PaymentRequestLineItemPut</h3>

<a id="schemapaymentrequestlineitemput"></a>
<a id="schema_PaymentRequestLineItemPut"></a>
<a id="tocSpaymentrequestlineitemput"></a>
<a id="tocspaymentrequestlineitemput"></a>

```json
{
  "Action": "string",
  "Allocations": {
    "Custom01": "string",
    "Custom02": "string",
    "Custom03": "string",
    "Custom04": "string",
    "Custom05": "string",
    "Custom06": "string",
    "Custom07": "string",
    "Custom08": "string",
    "Custom09": "string",
    "Custom10": "string",
    "Custom11": "string",
    "Custom12": "string",
    "Custom13": "string",
    "Custom14": "string",
    "Custom15": "string",
    "Custom16": "string",
    "Custom17": "string",
    "Custom18": "string",
    "Custom19": "string",
    "Custom20": "string",
    "Percentage": "string"
  },
  "AmountWithoutVat": "string",
  "Custom01": "string",
  "Custom02": "string",
  "Custom03": "string",
  "Custom04": "string",
  "Custom05": "string",
  "Custom06": "string",
  "Custom07": "string",
  "Custom08": "string",
  "Custom09": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom20": "string",
  "Description": "string",
  "ExpenseTypeCode": "string",
  "ItemCode": "string",
  "LineItemID": "string",
  "PurchaseOrderNumber": "string",
  "Quantity": "string",
  "ShipFromPostalCode": "string",
  "ShipToPostalCode": "string",
  "SupplierPartId": "string",
  "Tax": "string",
  "TaxCode": "string",
  "TaxCode2": "string",
  "TaxCode3": "string",
  "TaxCode4": "string",
  "UnitOfMeasure": "string",
  "UnitPrice": "string",
  "VatAmount": "string",
  "VatAmountFour": "string",
  "VatAmountThree": "string",
  "VatAmountTwo": "string",
  "VatRate": "string",
  "VatRateFour": "string",
  "VatRateThree": "string",
  "VatRateTwo": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|string|false|none|The operation(INSERT/UPDATE/DELETE) to be performed on the line item.|
|Allocations|[PaymentRequestAllocationPostPut](#schemapaymentrequestallocationpostput)|false|none|none|
|AmountWithoutVat|string|false|none|The net amount of the line item, excluding VAT.|
|Custom01|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom02|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom03|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom04|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom05|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom06|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom07|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom08|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom09|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom10|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom11|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom12|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom13|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom14|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom15|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom16|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom17|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom18|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom19|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom20|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Description|string|false|none|Brief overview of the good or service ordered.|
|ExpenseTypeCode|string|false|none|A code which indicates the expense type for the line item.|
|ItemCode|string|false|none|Represents the item code (the unique code a vendor assigns to a good or code a vendor assigns to a good or service to identify it).|
|LineItemID|string|false|none|Line item ID of the payment request.|
|PurchaseOrderNumber|string|false|none|Purchase order that is associated to the line item .|
|Quantity|string|false|none|Total number of goods or services ordered.|
|ShipFromPostalCode|string|false|none|The postal code the good or service was shipped from.|
|ShipToPostalCode|string|false|none|The postal code the good or service will be shipped to.|
|SupplierPartId|string|false|none|The unique identifier provided by the supplier that is associated with the good or service.|
|Tax|string|false|none|The tax associated with the line item.|
|TaxCode|string|false|none|The tax code 1 assigned for the line item, based on the tax setting.|
|TaxCode2|string|false|none|The tax code 2 assigned for the line item, based on the tax setting.|
|TaxCode3|string|false|none|The tax code 3 assigned for the line item, based on the tax setting.|
|TaxCode4|string|false|none|The tax code 4 assigned for the line item, based on the tax setting.|
|UnitOfMeasure|string|false|none|The code for the measurement unit used to quantify the good or service. Use "GET /invoice/localizeddata" to look up codes and descriptions.|
|UnitPrice|string|false|none|The cost for a single unit of the line item good or service.|
|VatAmount|string|false|none|The amount of VAT 1 included in the line item total.|
|VatAmountFour|string|false|none|The amount of VAT 4 included in the line item total.|
|VatAmountThree|string|false|none|The amount of VAT 3 included in the line item total.|
|VatAmountTwo|string|false|none|The amount of VAT 2 included in the line item total.|
|VatRate|string|false|none|The VAT rate 1 applied to the net line item total.|
|VatRateFour|string|false|none|The VAT rate 4 applied to the net line item total.|
|VatRateThree|string|false|none|The VAT rate 3 applied to the net line item total.|
|VatRateTwo|string|false|none|The VAT rate 2 applied to the net line item total.|

<h3 id="tocS_PaymentRequestPost">PaymentRequestPost</h3>

<a id="schemapaymentrequestpost"></a>
<a id="schema_PaymentRequestPost"></a>
<a id="tocSpaymentrequestpost"></a>
<a id="tocspaymentrequestpost"></a>

```json
{
  "AmountWithoutVat": "string",
  "BuyerCostCenter": "string",
  "CheckNumber": "string",
  "CompanyBillToAddressCode": "string",
  "CompanyShipToAddressCode": "string",
  "CountryCode": "string",
  "CurrencyCode": "string",
  "Custom01": "string",
  "Custom02": "string",
  "Custom03": "string",
  "Custom04": "string",
  "Custom05": "string",
  "Custom06": "string",
  "Custom07": "string",
  "Custom08": "string",
  "Custom09": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "DataSource": "string",
  "DeliverySlipNumber": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "EmployeeEmailAddress": "string",
  "EmployeeId": "string",
  "EmployeeLoginId": "string",
  "ExternalPolicyId": "string",
  "InvoiceAmount": "string",
  "InvoiceDate": "string",
  "InvoiceNumber": "string",
  "InvoiceReceivedDate": "string",
  "IsEmergencyCheckRun": "string",
  "IsInvoiceConfirmed": "string",
  "LedgerCode": "string",
  "LineItems": {
    "Allocations": {
      "Custom01": "string",
      "Custom02": "string",
      "Custom03": "string",
      "Custom04": "string",
      "Custom05": "string",
      "Custom06": "string",
      "Custom07": "string",
      "Custom08": "string",
      "Custom09": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom20": "string",
      "Percentage": "string"
    },
    "AmountWithoutVat": "string",
    "Custom01": "string",
    "Custom02": "string",
    "Custom03": "string",
    "Custom04": "string",
    "Custom05": "string",
    "Custom06": "string",
    "Custom07": "string",
    "Custom08": "string",
    "Custom09": "string",
    "Custom10": "string",
    "Custom11": "string",
    "Custom12": "string",
    "Custom13": "string",
    "Custom14": "string",
    "Custom15": "string",
    "Custom16": "string",
    "Custom17": "string",
    "Custom18": "string",
    "Custom19": "string",
    "Custom20": "string",
    "Description": "string",
    "ExpenseTypeCode": "string",
    "ItemCode": "string",
    "PurchaseOrderNumber": "string",
    "Quantity": "string",
    "ShipFromPostalCode": "string",
    "ShipToPostalCode": "string",
    "SupplierPartId": "string",
    "Tax": "string",
    "TaxCode": "string",
    "TaxCode2": "string",
    "TaxCode3": "string",
    "TaxCode4": "string",
    "TotalPrice": "string",
    "UnitOfMeasure": "string",
    "UnitPrice": "string",
    "VatAmount": "string",
    "VatAmountFour": "string",
    "VatAmountThree": "string",
    "VatAmountTwo": "string",
    "VatRate": "string",
    "VatRateFour": "string",
    "VatRateThree": "string",
    "VatRateTwo": "string"
  },
  "Name": "string",
  "NotesToVendor": "string",
  "OB10BuyerId": "string",
  "OB10TransactionId": "string",
  "OrgUnit01": "string",
  "OrgUnit02": "string",
  "OrgUnit03": "string",
  "OrgUnit04": "string",
  "OrgUnit05": "string",
  "OrgUnit06": "string",
  "PaymentAdjustmentNotes": "string",
  "PaymentAmount": "string",
  "PaymentDueDate": "string",
  "PaymentTermsDays": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderId": "string",
  "ReceiptConfirmationType": "string",
  "ShippingAmount": "string",
  "TaxAmount": "string",
  "VatAmountFour": "string",
  "VatAmountOne": "string",
  "VatAmountThree": "string",
  "VatAmountTwo": "string",
  "VatRateFour": "string",
  "VatRateOne": "string",
  "VatRateThree": "string",
  "VatRateTwo": "string",
  "VendorRemitToIdentifier": {
    "Address1": "string",
    "AddressCode": "string",
    "Name": "string",
    "PostalCode": "string",
    "VendorCode": "string"
  },
  "VendorShipFromAddressCode": "string",
  "VendorTaxId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmountWithoutVat|string|false|none|The net amount of the invoice, excluding VAT.|
|BuyerCostCenter|string|false|none|The company defined center responsible for the payment request.|
|CheckNumber|string|false|none|Check number of the payment made to the vendor.|
|CompanyBillToAddressCode|string|false|none|The code which identifies the company location to which the vendor billed the invoice.|
|CompanyShipToAddressCode|string|false|none|The code which identifies the company location to which the vendor shipped items listed in the invoice.|
|CountryCode|string|false|none|The country code.|
|CurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the expense report currency. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona.|
|Custom01|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom02|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom03|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom04|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom05|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom06|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom07|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom08|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom09|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom10|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom11|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom12|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom13|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom14|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom15|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom16|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom17|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom18|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom19|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom20|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom21|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom22|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom23|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom24|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|DataSource|string|false|none|A code which indicates the method used to created the payment request. Use "GET /invoice/localizeddata" to translate the code into text.|
|DeliverySlipNumber|string|false|none|The delivery slip number associated with receiving receipt.|
|Description|string|false|none|User entered description of the payment request.|
|DiscountPercentage|string|false|none|The discount from the supplier if the discount terms are met.|
|DiscountTerms|string|false|none|The NET discount terms with a supplier when discounts apply.|
|EmployeeEmailAddress|string|false|none|The email address of the employee to whom the request should be assigned. Not evaluated if EmployeeLoginId or EmployeeId match an employee. This value is <strong>required</strong> if none of the following are provided: LedgerCode, EmployeeLoginId, EmployeeId; PurchaseOrderNumber; ExternalPolicyId.|
|EmployeeId|string|false|none|The company ID of the employee to whom the request should be assigned. Has precedence over EmployeeEmail; not evaluated if EmployeeLoginId matches an employee. This value is <strong>required</strong> if none of the following are provided: LedgerCode, EmployeeLoginId; EmployeeEmail; PurchaseOrderNumber; ExternalPolicyId.|
|EmployeeLoginId|string|false|none|The login ID of the employee to whom the request should be assigned. Has precedence over EmployeeId and EmployeeEmail. This value is <strong>required</strong> if none of the following are provided: LedgerCode, EmployeeId; EmployeeEmail; PurchaseOrderNumber; ExternalPolicyId.|
|ExternalPolicyId|string|false|none|The external policy ID of the Payment Request. This value is <strong>required</strong> if none of the following are provided: LedgerCode, EmployeeLoginId, EmployeeId; EmployeeEmail; PurchaseOrderNumber.|
|InvoiceAmount|string|false|none|User-entered value representing the total invoice amount, used to calculate amount remaining on the line item page.|
|InvoiceDate|string|false|none|The date the vendor issued the invoice.|
|InvoiceNumber|string|false|none|The invoice number from the vendor for the payment request.|
|InvoiceReceivedDate|string|false|none|The date on which the invoice was received.|
|IsEmergencyCheckRun|string|false|none|Is an emergency check run required. Format: Y/N|
|IsInvoiceConfirmed|string|false|none|Indicates if the Payment Request Invoice is confirmed or in a different status. Format: true/false.|
|LedgerCode|string|false|none|A code which indicates which company journal the Payment Request is assigned to. Use "GET /invoice/localizeddata" to obtain valid codes. This value is <strong>required</strong> if none of the following are provided: EmployeeLoginId; EmployeeId; EmployeeEmail; PurchaseOrderNumber; ExternalPolicyId.|
|LineItems|[PaymentRequestLineItemPost](#schemapaymentrequestlineitempost)|false|none|none|
|Name|string|false|none|The Payment Request Name.|
|NotesToVendor|string|false|none|Information from the customer to the vendor for special requests or handling for the ordered good or service.|
|OB10BuyerId|string|false|none|A unique buyer account on the OB10 network.|
|OB10TransactionId|string|false|none|Unique Identifier for the PR transaction (generated by OB10).|
|OrgUnit01|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit02|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit03|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit04|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit05|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit06|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|PaymentAdjustmentNotes|string|false|none|Notes to the vendor regarding the amount paid (underpayment due to damages, for example).|
|PaymentAmount|string|false|none|Represents the amount of the payment that will be/has been made for the invoice.|
|PaymentDueDate|string|false|none|The date the vendor needs to be paid by.|
|PaymentTermsDays|string|false|none|This number, along with type of payment terms (example: NET), determine when the invoice is expected to be paid.|
|ProvincialTaxId|string|false|none|The vendor provincial tax ID.|
|PurchaseOrderId|string|false|none|The ID of the Purchase Order to which the Payment Request should be matched. This value is <strong>required</strong> if none of the following are provided: LedgerCode, EmployeeLoginId, EmployeeId; EmployeeEmail; ExternalPolicyId.|
|ReceiptConfirmationType|string|false|none|A code which indicates the receipt confirmation type for this Payment Request (Invoice Confirmation, for example). Use "GET /invoice/localizeddata" to translate the code into text.|
|ShippingAmount|string|false|none|The value for the Shipping Amount header field.|
|TaxAmount|string|false|none|The value for the Tax Amount header field.|
|VatAmountFour|string|false|none|The amount of VAT included in the invoice total. Fourth of four VAT amount fields available.|
|VatAmountOne|string|false|none|The amount of VAT included in the invoice total. First of four VAT amount fields available.|
|VatAmountThree|string|false|none|The amount of VAT included in the invoice total. Third of four VAT amount fields available.|
|VatAmountTwo|string|false|none|The amount of VAT included in the invoice total. Second of four VAT amount fields available.|
|VatRateFour|string|false|none|The VAT rate applied to the net invoice total. Should relate to the fourth VAT amount field.|
|VatRateOne|string|false|none|The VAT rate applied to the net invoice total. Should relate to the first VAT amount field.|
|VatRateThree|string|false|none|The VAT rate applied to the net invoice total. Should relate to the third VAT amount field.|
|VatRateTwo|string|false|none|The VAT rate applied to the net invoice total. Should relate to the second VAT amount field.|
|VendorRemitToIdentifier|[VendorIdentifier](#schemavendoridentifier)|false|none|none|
|VendorShipFromAddressCode|string|false|none|The code which identifies the location from which the vendor shipped items listed in the invoice.|
|VendorTaxId|string|false|none|The vendor tax ID.|

<h3 id="tocS_PaymentRequestPut">PaymentRequestPut</h3>

<a id="schemapaymentrequestput"></a>
<a id="schema_PaymentRequestPut"></a>
<a id="tocSpaymentrequestput"></a>
<a id="tocspaymentrequestput"></a>

```json
{
  "AmountWithoutVat": "string",
  "BuyerCostCenter": "string",
  "CheckNumber": "string",
  "CompanyBillToAddressCode": "string",
  "CompanyShipToAddressCode": "string",
  "CountryCode": "string",
  "CurrencyCode": "string",
  "Custom01": "string",
  "Custom02": "string",
  "Custom03": "string",
  "Custom04": "string",
  "Custom05": "string",
  "Custom06": "string",
  "Custom07": "string",
  "Custom08": "string",
  "Custom09": "string",
  "Custom10": "string",
  "Custom11": "string",
  "Custom12": "string",
  "Custom13": "string",
  "Custom14": "string",
  "Custom15": "string",
  "Custom16": "string",
  "Custom17": "string",
  "Custom18": "string",
  "Custom19": "string",
  "Custom20": "string",
  "Custom21": "string",
  "Custom22": "string",
  "Custom23": "string",
  "Custom24": "string",
  "DeliverySlipNumber": "string",
  "Description": "string",
  "DiscountPercentage": "string",
  "DiscountTerms": "string",
  "DoCopyDown": "string",
  "DoCopyDownFromPO": "string",
  "EmployeeEmailAddress": "string",
  "EmployeeId": "string",
  "EmployeeLoginId": "string",
  "InvoiceAmount": "string",
  "InvoiceDate": "string",
  "InvoiceNumber": "string",
  "InvoiceReceivedDate": "string",
  "IsEmergencyCheckRun": "string",
  "IsInvoiceConfirmed": "string",
  "LineItems": {
    "Action": "string",
    "Allocations": {
      "Custom01": "string",
      "Custom02": "string",
      "Custom03": "string",
      "Custom04": "string",
      "Custom05": "string",
      "Custom06": "string",
      "Custom07": "string",
      "Custom08": "string",
      "Custom09": "string",
      "Custom10": "string",
      "Custom11": "string",
      "Custom12": "string",
      "Custom13": "string",
      "Custom14": "string",
      "Custom15": "string",
      "Custom16": "string",
      "Custom17": "string",
      "Custom18": "string",
      "Custom19": "string",
      "Custom20": "string",
      "Percentage": "string"
    },
    "AmountWithoutVat": "string",
    "Custom01": "string",
    "Custom02": "string",
    "Custom03": "string",
    "Custom04": "string",
    "Custom05": "string",
    "Custom06": "string",
    "Custom07": "string",
    "Custom08": "string",
    "Custom09": "string",
    "Custom10": "string",
    "Custom11": "string",
    "Custom12": "string",
    "Custom13": "string",
    "Custom14": "string",
    "Custom15": "string",
    "Custom16": "string",
    "Custom17": "string",
    "Custom18": "string",
    "Custom19": "string",
    "Custom20": "string",
    "Description": "string",
    "ExpenseTypeCode": "string",
    "ItemCode": "string",
    "LineItemID": "string",
    "PurchaseOrderNumber": "string",
    "Quantity": "string",
    "ShipFromPostalCode": "string",
    "ShipToPostalCode": "string",
    "SupplierPartId": "string",
    "Tax": "string",
    "TaxCode": "string",
    "TaxCode2": "string",
    "TaxCode3": "string",
    "TaxCode4": "string",
    "UnitOfMeasure": "string",
    "UnitPrice": "string",
    "VatAmount": "string",
    "VatAmountFour": "string",
    "VatAmountThree": "string",
    "VatAmountTwo": "string",
    "VatRate": "string",
    "VatRateFour": "string",
    "VatRateThree": "string",
    "VatRateTwo": "string"
  },
  "Name": "string",
  "NotesToVendor": "string",
  "OB10BuyerId": "string",
  "OB10TransactionId": "string",
  "OrgUnit01": "string",
  "OrgUnit02": "string",
  "OrgUnit03": "string",
  "OrgUnit04": "string",
  "OrgUnit05": "string",
  "OrgUnit06": "string",
  "PaymentAdjustmentNotes": "string",
  "PaymentAmount": "string",
  "PaymentDueDate": "string",
  "PaymentTermsDays": "string",
  "ProvincialTaxId": "string",
  "PurchaseOrderId": "string",
  "ReceiptConfirmationType": "string",
  "RequestID": "string",
  "ShippingAmount": "string",
  "TaxAmount": "string",
  "VatAmountFour": "string",
  "VatAmountOne": "string",
  "VatAmountThree": "string",
  "VatAmountTwo": "string",
  "VatRateFour": "string",
  "VatRateOne": "string",
  "VatRateThree": "string",
  "VatRateTwo": "string",
  "VendorRemitToIdentifier": {
    "Address1": "string",
    "AddressCode": "string",
    "Name": "string",
    "PostalCode": "string",
    "VendorCode": "string"
  },
  "VendorShipFromAddressCode": "string",
  "VendorTaxId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmountWithoutVat|string|false|none|The net amount of the invoice, excluding VAT.|
|BuyerCostCenter|string|false|none|The company defined center responsible for the payment request.|
|CheckNumber|string|false|none|Check number of the payment made to the vendor.|
|CompanyBillToAddressCode|string|false|none|The code which identifies the company location to which the vendor billed the invoice.|
|CompanyShipToAddressCode|string|false|none|The code which identifies the company location to which the vendor shipped items listed in the invoice.|
|CountryCode|string|false|none|The country code.|
|CurrencyCode|string|false|none|The 3-letter ISO 4217 currency code for the expense report currency. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona.|
|Custom01|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom02|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom03|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom04|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom05|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom06|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom07|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom08|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom09|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom10|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom11|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom12|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom13|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom14|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom15|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom16|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom17|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom18|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom19|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom20|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom21|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom22|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom23|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|Custom24|string|false|none|The details from the custom fields. These may not have data, depending on configuration.|
|DeliverySlipNumber|string|false|none|The delivery slip number associated with receiving receipt.|
|Description|string|false|none|User entered description of the payment request.|
|DiscountPercentage|string|false|none|The discount from the supplier if the discount terms are met.|
|DiscountTerms|string|false|none|The NET discount terms with a supplier when discounts apply.|
|DoCopyDown|string|false|none|Use new request owner's employee copydown values in this request|
|DoCopyDownFromPO|string|false|none|Use purchase order copydown values in this request|
|EmployeeEmailAddress|string|false|none|The email address of the employee to whom the request should be assigned. Not evaluated if EmployeeLoginId or EmployeeId match an employee.|
|EmployeeId|string|false|none|The company ID of the employee to whom the request should be assigned. Has precedence over EmployeeEmail; not evaluated if EmployeeLoginId matches an employee.|
|EmployeeLoginId|string|false|none|The login ID of the employee to whom the request should be assigned. Has precedence over EmployeeId and EmployeeEmail.|
|InvoiceAmount|string|false|none|User-entered value representing the total invoice amount, used to calculate amount remaining on the line item page.|
|InvoiceDate|string|false|none|The date the vendor issued the invoice.|
|InvoiceNumber|string|false|none|The invoice number from the vendor for the payment request.|
|InvoiceReceivedDate|string|false|none|The date on which the invoice was received.|
|IsEmergencyCheckRun|string|false|none|Is an emergency check run required. Format: Y/N.|
|IsInvoiceConfirmed|string|false|none|Indicates if the payment request invoice is confirmed or in a different status. Format: true/false.|
|LineItems|[PaymentRequestLineItemPut](#schemapaymentrequestlineitemput)|false|none|none|
|Name|string|false|none|The payment request name.|
|NotesToVendor|string|false|none|Information from the customer to the vendor for special requests or handling for the ordered good or service.|
|OB10BuyerId|string|false|none|A unique buyer account on the OB10 network.|
|OB10TransactionId|string|false|none|Unique identifier for the PR transaction (generated by OB10).|
|OrgUnit01|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit02|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit03|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit04|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit05|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|OrgUnit06|string|false|none|The details from the organization unit fields. These may not have data, depending on configuration.|
|PaymentAdjustmentNotes|string|false|none|Notes to the vendor regarding the amount paid (underpayment due to damages, for example).|
|PaymentAmount|string|false|none|Represents the amount of the payment that will be/has been made for the Invoice.|
|PaymentDueDate|string|false|none|The date the vendor needs to be paid by.|
|PaymentTermsDays|string|false|none|This number, along with type of payment terms (example: NET), determine when the invoice is expected to be paid.|
|ProvincialTaxId|string|false|none|The vendor provincial tax ID.|
|PurchaseOrderId|string|false|none|The ID of the purchase order to which the payment request should be matched.|
|ReceiptConfirmationType|string|false|none|A code which indicates the receipt confirmation type for this payment request (Invoice Confirmation, for example). Use "GET /invoice/localizeddata" to translate the code into text.|
|RequestID|string|false|none|The request ID of the payment request|
|ShippingAmount|string|false|none|The value for the shipping s amount header field.|
|TaxAmount|string|false|none|The value for the tax amount header field.|
|VatAmountFour|string|false|none|The amount of VAT included in the invoice total. Fourth of four VAT amount fields available.|
|VatAmountOne|string|false|none|The amount of VAT included in the invoice total. First of four VAT amount fields available.|
|VatAmountThree|string|false|none|The amount of VAT included in the invoice total. Third of four VAT amount fields available.|
|VatAmountTwo|string|false|none|The amount of VAT included in the invoice total. Second of four VAT amount fields available.|
|VatRateFour|string|false|none|The VAT rate applied to the net invoice total. Should relate to the fourth VAT amount field.|
|VatRateOne|string|false|none|The VAT rate applied to the net invoice total. Should relate to the first VAT amount field.|
|VatRateThree|string|false|none|The VAT rate applied to the net invoice total. Should relate to the third VAT amount field.|
|VatRateTwo|string|false|none|The VAT rate applied to the net invoice total. Should relate to the second VAT amount field.|
|VendorRemitToIdentifier|[VendorIdentifier](#schemavendoridentifier)|false|none|none|
|VendorShipFromAddressCode|string|false|none|The code which identifies the location from which the vendor shipped items listed in the invoice.|
|VendorTaxId|string|false|none|The vendor tax ID.|

<h3 id="tocS_VendorAddress">VendorAddress</h3>

<a id="schemavendoraddress"></a>
<a id="schema_VendorAddress"></a>
<a id="tocSvendoraddress"></a>
<a id="tocsvendoraddress"></a>

```json
{
  "Address1": "string",
  "Address2": "string",
  "Address3": "string",
  "City": "string",
  "CountryCode": "string",
  "DiscountTerms": "string",
  "Name": "string",
  "PostalCode": "string",
  "State": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address1|string|false|none|Line 1 of the street address.|
|Address2|string|false|none|Line 2 of the street address|
|Address3|string|false|none|Line 3 of the street address|
|City|string|false|none|The name of the city.|
|CountryCode|string|false|none|The country code.|
|DiscountTerms|string|false|none|The NET discount terms with a supplier when discounts apply.|
|Name|string|false|none|The name of the vendor.|
|PostalCode|string|false|none|The postal / zip code.|
|State|string|false|none|The state code.|

<h3 id="tocS_VendorIdentifier">VendorIdentifier</h3>

<a id="schemavendoridentifier"></a>
<a id="schema_VendorIdentifier"></a>
<a id="tocSvendoridentifier"></a>
<a id="tocsvendoridentifier"></a>

```json
{
  "Address1": "string",
  "AddressCode": "string",
  "Name": "string",
  "PostalCode": "string",
  "VendorCode": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address1|string|false|none|Line 1 of the street address.|
|AddressCode|string|false|none|The code which identifies a particular vendor location.|
|Name|string|false|none|The name of the vendor.|
|PostalCode|string|false|none|The postal / zip code.|
|VendorCode|string|false|none|The code which identifies a particular vendor.|

<h3 id="tocS_Void">Void</h3>

<a id="schemavoid"></a>
<a id="schema_Void"></a>
<a id="tocSvoid"></a>
<a id="tocsvoid"></a>

```json
{}

```

### Properties

*None*

