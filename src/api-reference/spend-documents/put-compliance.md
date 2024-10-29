## Upload a Compliance Document

This endpoint facilitates the creation of a compliance document for an existing receipt. For vendors who have achieved compliance, this API allows them to upload the compliance document to the SAP Concur platform. The uploaded compliance document will be processed and associated with the receipt.

### Scopes

- `spenddocs.receipts.compliance.write`
- `spenddocs.receipts.compliance.writeonly`

Refer to [Scope Usage](#./getting-started.md#scope-usage) for full details.

### Request

**URI Template:** `/spend-documents/v4/receipts/{receiptId}`

**Method:** `PUT`

#### Parameters

|Name|Type|Format|Description|
|---|---|---|---|
| `receiptId` | `string` |-| **Required**. The unique identifier (UUID) of the receipt.     |
| `Type`      | `string` |-| **Required**. cfdi.                                       |


### Response
#### Success

|Name|Type|Format|Description|
|---|---|---|---|
| `id`  | `string` |-| UUID of the receipt.         |

### Error

|Name|Type|Format|Description|
|---|---|---|---|
| `timestamp`  | `string` |-| Date and time.          |
| `status`     | `string` |-| HTTP status code.       |
| `message`    | `string` |-| Error message content.  |

Refer to the [Receipt Schema](#schema) for the structure of the receipt object.

#### Status Codes

- [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
- [400 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400)
- [401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)
- [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403)
- [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)
- [500 Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500)
- [503 Internal Service Unavailable](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503)

### Example

#### Request

```bash
curl --location --request PUT 'https://us.api.concursolutions.com/spend-documents/v4/receipts/8d157fb6-b06b-4ea8-b632-c1f477b93745' \
--header 'Authorization: Bearer {access_token}' \
--header 'Concur-CorrelationId: dc673e9a-1297-499d-beb4-0419d750a034' \
--header 'Content-Type: application/json' \
-F 'image=@"compliance.xml"
```

#### Response

```json
{

    "id": "41545f0b-ebce-47b5-8233-1e6ef7f7b3c8"
}
```
