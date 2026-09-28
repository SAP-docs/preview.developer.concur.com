---
title: Spend Documents v4 - Post Receipt
layout: reference
---

## Upload a New Receipt

This endpoint supports two receipt submission workflows:

* **Simple Receipt**: Upload a receipt image with basic metadata.
* **eReceipt**: Submit structured electronic receipt data from a partner/vendor system.

### Scopes
`spenddocs.receipts.write` `spenddocs.receipts.writeOnly` - Refer to [Scope Usage](/api-reference/spend-documents/v4.spend-documents.html#scope-usage) for full details.

When submitting a `complianceDocument` part, the token must additionally include `spenddocs.receipts.compliance.write`.

**URI Template:**  `/spend-documents/v4/receipts`

**Method:** `POST`

### Request

The endpoint accepts `multipart/form-data` with the following named parts:

|Name|Type|Format|Description|
|---|---|---|---|
| `receipt` | `object` | `application/json` | **Required**. The receipt data in JSON format. Refer to the [Receipt Schema](/api-reference/spend-documents/schema.html). |
| `document` | binary | PDF, JPEG, JPG, PNG, GIF | The receipt image file. Required for simple receipts and eReceipts. |
| `complianceDocument` | binary | XML | Optional compliance document (e.g. XML e-invoice). Requires `spenddocs.receipts.compliance.write` scope. |

#### eReceipt Metadata Fields

For eReceipt submissions, the `metadata` object in the `receipt` part must include:

|Name|Type|Required|Description|
|---|---|---|---|
| `userId` | `string` (UUID) | **Required** | Concur user identifier. |
| `companyId` | `string` (UUID) | **Required** | Concur company identifier. |
| `feature` | `string` | **Required** | Must be `"eReceipt"` for eReceipt submissions. |
| `provider` | `string` | **Required** | Must be `"vendor"` for partner/vendor submissions. |
| `origin` | `string` | **Required** | Receipt source channel: `web`, `mobile`, `email`, or `vendor`. |
| `category` | `string` | **Required** | Receipt category: `general`, `groundTransport`, `lodge`, `air`, `carRental`, or `rail`. |
| `entityId` | `string` | Optional | Entity code for multi-entity companies. |

### Response
#### Success

|Name|Type|Format|Description|
|---|---|---|---|
| `id`      | `string` |-| UUID of the receipt.        |
| `imageId` | `string` |-| Identifier for the image.    |
| `href`    | `string` |-| URI to retrieve the receipt. |

A `Location` header is included in the response pointing to the receipt resource URI:

```
Location: /spend-documents/v4/receipts/{id}
```

#### Error

|Name|Type|Format|Description|
|---|---|---|---|
| `timestamp`  | `string` |-| Date and time.          |
| `status`     | `string` |-| HTTP status code.      |
| `message`    | `string` |-| Error message content.  |

#### Status Codes

- [202 Accepted](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202)
- [400 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400)
- [401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)
- [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403)
- [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)
- [500 Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500)
- [503 Internal Service Unavailable](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503)


### Examples

#### Simple Receipt

##### Request

```bash
curl -L -X POST 'https://us.api.concursolutions.com/spend-documents/v4/receipts' \
--header 'Authorization: Bearer {access_token}' \
--header 'Concur-CorrelationId: dc673e9a-1297-499d-beb4-0419d750a034' \
-F 'document=@"receipt.jpg"' \
-F 'receipt="{
    \"metadata\": {
      \"userId\": \"a9abaa60-38a0-46be-9736-bc9c1e317e41\",
      \"companyId\": \"fb7c8157-16d6-4dfd-b970-8c2a39d81790\",
      \"origin\": \"mobile\",
      \"provider\": \"user\",
      \"feature\": \"simpleReceipt\"
    }
}"'
```

##### Response

202 Accepted
```json
{
    "imageId": "341D9EFCDC4E3833B76F75CFC53FF2E9",
    "href": "https://us.api.concursolutions.com/spend-documents/v4/receipts/3602e892-f463-497a-8654-8b2e802f4d65",
    "id": "3602e892-f463-497a-8654-8b2e802f4d65"
}
```

#### eReceipt (Ground Transportation)

##### Request

```bash
curl -X POST 'https://us.api.concursolutions.com/spend-documents/v4/receipts' \
--header 'Authorization: Bearer {access_token}' \
--header 'Concur-CorrelationId: dc673e9a-1297-499d-beb4-0419d750a034' \
-F 'document=@"receipt.pdf"' \
-F 'receipt="{
    \"metadata\": {
      \"userId\": \"a9abaa60-38a0-46be-9736-bc9c1e317e41\",
      \"companyId\": \"fb7c8157-16d6-4dfd-b970-8c2a39d81790\",
      \"origin\": \"vendor\",
      \"provider\": \"vendor\",
      \"feature\": \"eReceipt\",
      \"category\": \"groundTransport\"
    },
    \"receiptData\": {
      \"transactionDateTime\": \"2026-05-12T16:30:00Z\",
      \"referenceNumber\": \"RIDE-ABC123XYZ\",
      \"amount\": {
        \"total\": \"32.50\",
        \"currency\": \"USD\"
      },
      \"vendor\": {
        \"name\": \"Uber\",
        \"country\": \"US\"
      },
      \"paymentTypes\": [
        {
          \"method\": \"Credit Card\",
          \"creditCard\": {
            \"type\": \"Visa\",
            \"lastFour\": \"1234\"
          }
        }
      ]
    }
}"'
```

##### Response

202 Accepted
```json
{
    "imageId": "img-550e8400-e29b-41d4-a716-446655440000",
    "href": "https://us.api.concursolutions.com/spend-documents/v4/receipts/550e8400-e29b-41d4-a716-446655440000",
    "id": "550e8400-e29b-41d4-a716-446655440000"
}
```
