## Upload a New Receipt

This endpoint facilitates the creation of a new receipt. There are 2 features that can be used to create a receipt: '_simpleReceipt_' and '_cfdi_'.

### Scopes
`spenddocs.receipts.write` `spenddocs.receipts.writeOnly`  - Refer to [Scope Usage](#./getting-started.md#scope-usage) for full details.

**URI Template:**  `/spend-documents/v4/receipts`

**Method:** `POST`

### Request

Name|Type|Format|Description
---|---|---|---
`receipt` | `object` |-|**Required**. The receipt data in JSON format.
`document` |`string` |-| The receipt document to be uploaded. Compatible formats are: PDF, JPEG, PNG, GIF, JPG.

Refer to the [Receipt Schema](#./schema) for the structure of the receipt object.

### Response
#### Success

|Name|Type|Format|Description|
|---|---|---|---|
| `id`      | `string` |-| UUID of the receipt.        |
| `imageId` | `string` |-| Identifier for the image.    |
| `href`    | `string` |-| URI to retrieve the receipt. |

#### Error

|Name|Type|Format|Description|
|---|---|---|---|
| `timestamp`  | `string` |-| Date and time.          |
| `status`     | `string` |-| HTTP status code.      |
| `message`    | `string` |-| Error message content.  |

#### Status Codes

- [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
- [400 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400)
- [401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)
- [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403)
- [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)
- [500 Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500)
- [503 Internal Service Unavailable](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503)


### Example

#### Simple Receipt

##### Request

```bash
curl -L -X POST 'https://us.api.concursolutions.com/spend-documents/v4/receipts' \ 
--header 'Authorization: Bearer {access_token}' \
--header 'Concur-CorrelationId: dc673e9a-1297-499d-beb4-0419d750a034' \
--header 'Content-Type: application/json' \
-F 'image=@"1.jpg"' \
--F 'receipt="{
    "metadata": {
      "userId": "a9abaa60-38a0-46be-9736-bc9c1e317e41",
      "companyId": "fb7c8157-16d6-4dfd-b970-8c2a39d81790",
      "origin": "vendor",
      "provider": "vendor"
      "feature": "simplereceipt"
    }
}"
' 
```

#### Response

202 Accepted
```json
{
    "imageId": "341D9EFCDC4E3833B76F75CFC53FF2E9",
    "href": "https://us.api.concursolutions.com/spend-documents/v4/receipts/3602e892-f463-497a-8654-8b2e802f4d65",
    "id": "3602e892-f463-497a-8654-8b2e802f4d65"
}
```
#### CFDI

##### Request

```bash
curl -L -X POST 'https://us.api.concursolutions.com/spend-documents/v4/receipts' \ 
--header 'Authorization: Bearer {access_token}' \
--header 'Concur-CorrelationId: dc673e9a-1297-499d-beb4-0419d750a034' \
--header 'Content-Type: application/json' \
-F 'image=@"1.jpg"' \
--F 'receipt="{
  "metadata": {
    "userId": "a9abaa60-38a0-46be-9736-bc9c1e317e41",
    "companyId": "fb7c8157-16d6-4dfd-b970-8c2a39d81790",
    "origin": "vendor",
    "provider": "vendor",
    "feature": "cfdi",
    "category": "general"
  },
  "receiptData": {
    "transactionDateTime": "08/08/2022 3:30 PM",
    "amount": {
      "total": "18.47",
      "currency": "GBP",
      "subTotal": "15.05"
    },
    "vendor": {
      "name": "Amazon",
      "addressLine": "1234, Test street",
      "city": "seattle",
      "state": "washington",
      "country": "US",
      "postalCode": "98050",
      "taxId": "12ADAqweq",
      "phone": "4252322323"
    },
    "paymentType": {
      "method": "Credit Card",
      "creditCard": {
        "type": "MasterCard",
        "lastFour": "6170"
      }
    },
    "referenceNumber": "203-6291668-6997137",
    "lineItems": [
      {
        "title": "testTitle",
        "description": "KetoPlastics 1 ® 110 Litre Black Bin/Refuse Bin With Lockable Lid (Made In The UK)",
        "date": "2022-08-08T15:30:12-0500",
        "folioType": "00",
        "amount": "18.47",
        "quantity": "5",
        "unitPrice": "17.07",
        "subTotal": "15.05",
        "discounts": [
          {
            "discountAmount": "-2.02",
            "discountName": "Discount lineitem level"
          }
        ],
        "taxes": [
          {
            "amount": "3.42",
            "name": "Tax",
            "rate": 0.9
          }
        ],
        "additionalDescription": "Seller: Ketoplastics Limited",
        "semanticsCode": "OTHERS"
      }
    ],
    "discounts": [
      {
        "discountAmount": "-2.02",
        "discountName": "Discount receipt level"
      }
    ],
    "discountsTotal": "-2.33",
    "taxesTotal": "3.42",
    "tripDetails": {
      "itineraryLocator": "12345",
      "driverNumber": "ss-343",
      "travelDuration": "test",
      "mapUrl": "https://test.com",
      "startDate": "2014-11-10T15:08:24-0700",
      "endDate": "2014-11-10T15:39:46-0700",
      "classOfService": "Taxi Cab",
      "distance": {
        "totalDistance": 15.6,
        "unit": "mi"
      },
      "source": {
        "name": "start",
        "addressLine": "601 108th Ave NE",
        "city": "Bellevue",
        "country": "US",
        "postalCode": "98004"
      },
      "destination": {
        "name": "end",
        "addressLine": "1218 3rd Ave",
        "city": "Seattle",
        "country": "US",
        "postalCode": "98104"
      }
    }
  }
}"
' 
```

#### Response

202 Accepted
```json
{
    "imageId": "581D9EFCDC4E3833B76F75CFC53FF2E9",
    "href": "https://us.api.concursolutions.com/spend-documents/v4/receipts/3602e892-f463-497a-8654-8b2e802f4d65",
    "id": "6502e892-f463-497a-8654-8b2e802f4d65"
}
```
