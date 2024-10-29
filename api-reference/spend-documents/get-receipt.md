## Get Receipt

There are two endpoints to retrieve the details of a specific receipt.

### By ReceiptId

This endpoint retrieves the details of a specific receipt using the receipt's unique identifier (UUID).

### By ImageId and CompanyId

This endpoint retrieves the details of a specific receipt using the `companyId` and `imageId`.

### Scopes

`spenddocs.receipts.read` - Refer to [Scope Usage](#./getting-started.md#scope-usage) for full details.

#### Request

URI Template:

- By Receipt Id:  `/spend-documents/v4/receipts/{receiptId}`
- By Image Id and Company Id: `/spend-documents/v4/receipts?imageId={imageId}&companyId={companyId}`

Method: `GET`

#### Parameters

|Name|Type|Format|Description|
|---|---|---|---|
| `receiptId` or `companyId` + `imageId` | string |-| **Required**. The unique identifier (UUID) of the receipt OR the unique identifier (UUID) of the company and identifier for the `imageId`. |


### Response
#### Success

[Receipt Schema](#schema)

#### Error

|Name|Type|Format|Description|
|---|---|---|---|
| `timestamp`  | `string` |-| Date and time.          |
| `status`     | `string` |-| HTTP status code.       |
| `message`    | `string` |-| Error message content.  |

#### Status Codes

- [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
- [400 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400)
- [401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)
- [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403)
- [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)
- [500 Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500)
- [503 Internal Service Unavailable](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503)

#### Headers

`concur-correlationid` is a SAP Concur specific custom header used for technical support in the form of a RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace.

#### Payload

Receipt Response

### Example

#### Request

```bash
curl --location --request GET 'https://us.api.concursolutions.com/spend-documents/v4/receipts/8d157fb6-b06b-4ea8-b632-c1f477b93745' \
--header 'Authorization: Bearer {access_token}' \
--header 'Concur-CorrelationId: dc673e9a-1297-499d-beb4-0419d750a034' \
--header 'Content-Type: application/json'
```

Or

```bash
curl --location --request GET 'https://us.api.concursolutions.com/spend-documents/v4/receipts?imageId=2AB8D2C8078C4E38A5E7F18A6DE5558D&companyId=71f74b81-bb57-4c54-8985-5d7c42f6feb1' \
--header 'Authorization: Bearer {access_token}' \
--header 'Concur-CorrelationId: dc673e9a-1297-499d-beb4-0419d750a034' \
--header 'Content-Type: application/json'
```

#### Response

200 OK

```json
{
  "metadata": {
    "userId": "3e2c1b7e-0969-41b1-b5a6-590eb6a5f885",
    "imageId": "F66F323EAC704DA3B3AA85F66D7E1663",
    "id": "4d3a8d80-0f93-4b0b-bed1-2724a354858c",
    "companyId": "8f8fd1d8-bbc6-4611-861d-af714a02275f",
    "dateTimeReceived": "2024-04-26T18:37:41.930Z",
    "origin": "mobile",
    "captureMethod": "cameraCapture",
    "provider": "user",
    "feature": "expenseit",
    "status": "processed",
    "compliance": {
      "status": "processed"
    }
  },
  "receiptData": {
    "transactionDateTime": "2023-12-30T11:30:00",
    "amount": {
      "total": "30.0",
      "currency": "USD"
    },
    "vendor": {
      "name": "KIRKLAND PERFORMANCE CENTER",
      "city": "KIRKLAND",
      "state": "WASHINGTON",
      "country": "US"
    },
    "paymentType": {
      "creditCard": {
        "type": "$$",
        "lastFour": "1006"
      }
    },
    "expenseData": {
      "expenseType": "PARKG"
    }
  },
  "documents": [
    {
      "representation": "display",
      "type": "application/pdf",
      "name": "fr_expenseit.pdf",
      "renderable": true,
      "href": "https://us.api.concursolutions.com/spend-documents/v4/receipts/4d3a8d80-0f93-4b0b-bed1-2724a354858c/representations?type=display"
    },
    {
      "representation": "compliance",
      "type": "application/pdf",
      "name": "4d3a8d80-0f93-4b0b-bed1-2724a354858c.pdf",
      "renderable": true,
      "href": "https://us.api.concursolutions.com/spend-documents/v4/receipts/4d3a8d80-0f93-4b0b-bed1-2724a354858c/representations?type=compliance"
    }
  ]
}
```

## Get Receipt Representation

There are two endpoints to retrieve the receipt document (display or compliance) of a specific receipt.

### By ReceiptId

Retrieves the receipt using the receipt's unique identifier (UUID).

### By ImageId and CompanyId

Retrieves the receipt using the `companyId` and `imageId`.

### Scopes

`spenddocs.receipts.read, spenddocs.compliance.read`  
Refer to [Scope Usage](#./getting-started.md#scope-usage) for full details.

### Request

**URI Template:**

* By Receipt Id: `/spend-documents/v4/receipts/{receiptId}/representations?type={display or compliance}`
* By Image Id and Company Id: `/spend-documents/v4/receipts?imageId={imageId}&companyId={companyId}&type={display or compliance}`

**Method:** `GET`

#### Parameters

|Name|Type|Format|Description|
|---|---|---|---|
| `receiptId` or `companyId` + `imageId` | `string` | **Required**. The unique identifier (UUID) of the receipt OR the unique identifier (UUID) of the company and identifier for the `imageId`. |
| Type | string | Required display or compliance |

### Response
#### Success

Returns the image byte stream.

#### Error

|Name|Type|Format|Description|
|---|---|---|---|
| `timestamp`  | `string` |-| Date and time.          |
| `status`     | `string` |-| HTTP status code.       |
| `message`    | `string` |-| Error message content.  |

#### Status Codes

- [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
- [400 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400)
- [401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)
- [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403)
- [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)
- [500 Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500)
- [503 Internal Service Unavailable](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503)


#### Payload

Receipt Response

### Example

#### Request

```bash
curl --location --request GET 'https://us.api.concursolutions.com/spend-documents/v4/receipts/8d157fb6-b06b-4ea8-b632-c1f477b93745/representations?type=display' \
--header 'Authorization: Bearer {access_token}' \
--header 'Concur-CorrelationId: dc673e9a-1297-499d-beb4-0419d750a034' \
--header 'Content-Type: application/json'
```
Or
```bash
curl --location --request GET 'https://us.api.concursolutions.com/spend-documents/v4/receipts?imageId=2AB8D2C8078C4E38A5E7F18A6DE5558D&companyId=71f74b81-bb57-4c54-8985-5d7c42f6feb1&/representations?type=compliance \
--header 'Authorization: Bearer {access_token}' \
--header 'Concur-CorrelationId: dc673e9a-1297-499d-beb4-0419d750a034' \
--header 'Content-Type: application/json'
```

#### Response

```http
HTTP/1.1 200 ok
Content-Type: image/png
Content-Length: 108842
```

Returns the image byte stream.
