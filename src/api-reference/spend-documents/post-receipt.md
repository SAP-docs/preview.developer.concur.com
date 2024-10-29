## Upload a New Receipt

This endpoint facilitates the creation of a new receipt for '_simpleReceipt_' .

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
