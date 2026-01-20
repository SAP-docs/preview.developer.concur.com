---
title: PARSS v4
layout: reference
---

{% include prerelease.html %}

The Policy And Rule Search Service (PARSS) provides APIs for searching policies and rules, managing metadata, and auditing user interactions. It allows client applications to query for policy information, retrieve related documents, and track user search history.

## <a name="limitations"></a>Limitations

Access to this documentation does not provide access to the API. This API is for internal SAP Concur use. Authentication is required for all endpoints, using either mTLS, JWT, or OAuth2 as specified for each endpoint.

### Data Center URIs

The `{datacenterURI}` placeholder in all endpoint URIs should be replaced with your specific data center endpoint:
* US2: `us2.api.concursolutions.com`
* EU2: `eu2.api.concursolutions.com`
* APJ1: `apj1.api.concursolutions.com`

## <a name="process-flow"></a>Process Flow

>![parss_flow.png](parss_flow.png)

## <a name="products-editions"></a>Products and Editions

* Concur Expense Professional Edition
* Concur Expense Standard Edition
* Concur Travel Professional Edition
* Concur Travel Standard Edition
* Concur Invoice Professional Edition
* Concur Invoice Standard Edition
* Concur Request Professional Edition
* Concur Request Standard Edition

## <a name="scope-usage"></a>Scope Usage

| Name                 | Description                  | Endpoint                                                                                                                 |
|----------------------|------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| `policy.search.read` | Read access to policy search | `/dg/v4/dg-pipeline/metadata`, <br/> `/dg/v4/documents/{fileName}/download`, <br/> `/dg/v4/documents/{fileName}/preview` |

## <a name="dependencies"></a>Dependencies

This API may interact with other internal services for policy data, document storage, and authentication, which are not detailed here.

## <a name="access-token-usage"></a>Access Token Usage

Endpoints secured with `JWT` require a user-specific bearer token. Endpoints secured with `ClientCredentialsAuth` use a company-level OAuth2 token. Endpoints secured with `x509` use mutual TLS for service-to-service authentication.

---


## PARSS Metadata

### <a name="getMetadata"></a>Retrieve Grounded Documents

Retrieve grounded documents from repositories with metadata tags.

### Scopes

`policy.search.read` - Refer to [Scope Usage](#scope-usage) for full details.

### URI

```shell
https://{datacenterURI}/dg/v4/dg-pipeline/metadata
```

### Pagination

This endpoint supports pagination using `$top` and `$skip` parameters. The maximum value for `$top` is 100. Use `$count=true` to include the total number of available records in the response.


### Parameters

| Name                   | Type      | Format  | Description                                                               |
|------------------------|-----------|---------|---------------------------------------------------------------------------|
| `$top`                 | `integer` | `int32` | Maximum number of items to return. Default: 20.                           |
| `$skip`                | `integer` | `int32` | Number of items to skip for pagination. Default: 0.                       |
| `$count`               | `boolean` | -       | Include total count in the response. Default: false.                      |
| `concur-correlationid` | `string`  | `uuid`  | (Header) Client generated request identifier passed through all requests. |
| `concur-route`         | `string`  | -       | (Header) Forwarded requested concur route identifier.                     |

### Payloads


* Request: None
* Response: [MetadataAPIResponse](#schema-MetadataAPIResponse) or [ErrorResponse](#schema-errorresponse)

### Response Codes

| Status Code                 | Description                                                       |
|-----------------------------|-------------------------------------------------------------------|
| `200 OK`                    | Successfully retrieved document metadata                          |
| `400 Bad Request`           | Invalid query parameters (e.g., invalid `$top` or `$skip` values) |
| `401 Unauthorized`          | Missing or invalid authentication token                           |
| `403 Forbidden`             | Insufficient permissions to access the resource                   |
| `500 Internal Server Error` | Server error occurred while processing the request                |

### Examples
#### Request

```shell
GET https://{datacenterURI}/dg/v4/dg-pipeline/metadata?$top=10&$skip=0&$count=true
Authorization: Bearer {access_token}
concur-correlationid: 123e4567-e89b-12d3-a456-426614174000
concur-route: route-identifier
``` 
#### Response

```json
{
  "documentsCount": 1,
  "value": [
    {
      "documents": [
        {
          "downloadLocation": "/download/policy",
          "id": "64b2c088-13e4-41ae-8a2f-34c3d7e389e2",
          "lastUpdatedTimestamp": "2024-11-25T00:00:00Z",
          "contentType": "application/json",
          "metadata": [
            {
              "key": "userGroup",
              "matchMode": "ANY",
              "value": [
                "<uuid1>",
                "<uuid2>"
              ]
            },
            {
              "key": "product",
              "matchMode": "ALL",
              "value": [
                "concur"
              ]
            }
          ],
          "viewLocation": "https://sap.sharepoint.com/sites/210295/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2F210295%2FShared%20Documents%2Fassess02%201%2Ehtml&parent=%2Fsites%2F210295%2FShared%20Document"
        }
      ],
      "metadata": [
        {
          "key": "userGroup",
          "matchMode": "ANY",
          "value": [
            "<uuid1>"
          ]
        },
        {
          "key": "product",
          "matchMode": "ALL",
          "value": [
            "concur"
          ]
        }
      ]
    }
  ]
}
```

#### Error Response

```shell
HTTP/1.1 401 Unauthorized
Content-Type: application/json
Date: Wed, 15 Jan 2025 10:30:00 GMT
```
```json
{
  "error": {
    "code": "Unauthorized",
    "message": "Missing or invalid authentication token."
  }
}
```

## <a name="getDocumentFromS3"></a>Download Document

Download a document from the document grounding service.

#### Scopes
`policy.search.read` - Refer to [Scope Usage](#scope-usage) for full details.

### URI
```shell
https://{datacenterURI}/dg/v4/documents/{fileName}/download
```
### Parameters
| Name                   | Type     | Format | Description                                                                                                        |
|------------------------|----------|--------|--------------------------------------------------------------------------------------------------------------------|
| `fileName`             | `string` | -      | **Required** Name of the document file including extension. Must be URL-encoded if it contains special characters. |
| `concur-correlationid` | `string` | `uuid` | (Header) Client generated request identifier passed through all requests.                                          |
| `concur-route`         | `string` | -      | (Header) Forwarded requested concur route identifier.                                                              |

### File Name Encoding

File names containing special characters must be URL-encoded. Examples:
* `policy document.pdf` → `policy%20document.pdf`


### Response Codes

| Status Code                 | Description                                                            |
|-----------------------------|------------------------------------------------------------------------|
| `200 OK`                    | Successfully retrieved the document binary content                     |
| `400 Bad Request`           | Invalid file name format or special characters not properly encoded    |
| `401 Unauthorized`          | Missing or invalid authentication token                                |
| `403 Forbidden`             | Insufficient permissions to download the document                      |
| `404 Not Found`             | Document with specified file name does not exist                       |
| `500 Internal Server Error` | Server error occurred while retrieving the document                    |


### Payloads


* Request: None
* Response: `binary` or [ErrorResponse](#schema-errorresponse)

### Examples
#### Request

```shell
GET https://{datacenterURI}/dg/v4/documents/policy.pdf/download
Authorization: Bearer {access_token}
concur-correlationid: 123e4567-e89b-12d3-a456-426614174000
concur-route: route-identifier
``` 
#### Response
#### Success Response

```shell
HTTP/1.1 200 OK
Content-Type: application/pdf
Content-Disposition: attachment; filename="policy.pdf"
Content-Length: 2048576
Date: Wed, 15 Jan 2025 10:35:00 GMT
```

[Binary PDF content]


#### Response

The response will be the binary content of the requested document. The response includes:
* `Content-Type` header indicating the document's MIME type (e.g., `application/pdf`, `application/json`, `text/plain`)
* `Content-Disposition` header set to `attachment` to trigger download
* `Content-Length` header indicating file size in bytes
* No file size limits are enforced, but large files may experience longer download times

#### Error Response - File Not Found

```shell
HTTP/1.1 404 Not Found
Content-Type: application/json
Date: Wed, 15 Jan 2025 10:35:00 GMT
```
```json
{
  "error": {
    "code": "NotFound",
    "message": "Document with specified file name does not exist."
  }
}
```

#### Error Response - Invalid Encoding
```shell
HTTP/1.1 400 Bad Request
Content-Type: application/json
Date: Wed, 15 Jan 2025 10:35:00 GMT
```
```json
{
  "error": {
    "code": "INVALID_FILE_NAME",
    "message": "File name contains unencoded special characters. Please URL-encode the file name."
  }
}
```

## <a name="viewDocumentFromS3"></a>Preview Document

Preview a document for reference or citation purposes.

### Scopes

`policy.search.read` - Refer to [Scope Usage](#scope-usage) for full details.

### URI

```shell
https://{datacenterURI}/dg/v4/documents/{fileName}/preview
```
### Parameters

| Name                   | Type     | Format | Description                                                                                                        |
|------------------------|----------|--------|--------------------------------------------------------------------------------------------------------------------|
| `fileName`             | `string` | -      | **Required** Name of the document file including extension. Must be URL-encoded if it contains special characters. |
| `concur-correlationid` | `string` | `uuid` | (Header) Client generated request identifier passed through all requests.                                          |
| `concur-route`         | `string` | -      | (Header) Forwarded requested concur route identifier.                                                              |

### Response Codes

| Status Code                 | Description                                                            |
|-----------------------------|------------------------------------------------------------------------|
| `200 OK`                    | Successfully retrieved the document preview                            |
| `400 Bad Request`           | Invalid file name format or special characters not properly encoded    |
| `401 Unauthorized`          | Missing or invalid authentication token                                |
| `403 Forbidden`             | Insufficient permissions to preview the document                       |
| `404 Not Found`             | Document with specified file name does not exist                       |
| `500 Internal Server Error` | Server error occurred while retrieving the document preview            |

### File Name Encoding

File names containing special characters must be URL-encoded. Examples:
* `policy document.pdf` → `policy%20document.pdf`

### Payloads

* Request: None
* Response: `binary` or [ErrorResponse](#schema-errorresponse)

### Examples
#### Request

```shell
GET https://{datacenterURI}/dg/v4/documents/policy.pdf/preview
Authorization: Bearer {access_token}
concur-correlationid: 123e4567-e89b-12d3-a456-426614174000
concur-route: route-identifier
``` 
### Response

The response will be the binary content of the requested document for preview purposes. The response includes:
* `Content-Type` header indicating the document's MIME type (e.g., `application/pdf`, `image/png`, `text/html`)
* `Content-Disposition` header set to `inline` to display in browser instead of downloading
* `Content-Length` header indicating file size in bytes
* Supports common previewable formats: PDF
* File size limits is ~50 MB for optimal preview performance

#### Example Response

```shell
HTTP/1.1 200 OK
Content-Type: application/pdf
Content-Disposition: inline; filename="policy.pdf"
Content-Length: 1048576
Date: Wed, 15 Jan 2025 10:40:00 GMT
Cache-Control: private, max-age=3600
```
[Binary PDF content - actual file bytes]
### Error Response - File Not Found

```shell
HTTP/1.1 404 Not Found
Content-Type: application/json
Date: Wed, 15 Jan 2025 10:40:00 GMT
```
```json     
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Document with file name 'policy.pdf' does not exist"
  }
}
```

### Error Response - Unsupported Format
```shell
HTTP/1.1 400 Bad Request
Content-Type: application/json
Date: Wed, 15 Jan 2025 10:40:00 GMT
```
```json
{
  "error": {
    "code": "UNSUPPORTED_FORMAT",
    "message": "Document format is not supported for preview."
  }
}
```
### Error Response - Insufficient Permissions
```shell
HTTP/1.1 403 Forbidden
Content-Type: application/json
Date: Wed, 15 Jan 2025 10:40:00 GMT
```
```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "Insufficient permissions to preview the document."
  }
}
```


## <a name="schema"></a>Schema

### <a name="schema-MetadataAPIResponse"></a>MetadataAPIResponse

| Name             | Type      | Format                                       | Description                                                |
|------------------|-----------|----------------------------------------------|------------------------------------------------------------|
| `documentsCount` | `integer` | `int32`                                      | **Required** Total number of documents matching the query. |
| `value`          | `array`   | [DocumentMetadata](#schema-DocumentMetadata) | **Required** List of document metadata objects.            |

### <a name="schema-DocumentMetadata"></a>DocumentMetadata

| Name        | Type    | Format                               | Description                                                  |
|-------------|---------|--------------------------------------|--------------------------------------------------------------|
| `documents` | `array` | [DocumentInfo](#schema-DocumentInfo) | **Required** List of documents associated with the metadata. |
| `metadata`  | `array` | [MetadataTag](#schema-MetadataTag)   | **Required** Metadata tags associated with the documents.    |

### <a name="schema-DocumentInfo"></a>DocumentInfo

| Name                   | Type     | Format                             | Description                                                |
|------------------------|----------|------------------------------------|------------------------------------------------------------|
| `downloadLocation`     | `string` | -                                  | **Required** URL to download the document.                 |
| `id`                   | `string` | `uuid`                             | **Required** Unique identifier for the document.           |
| `lastUpdatedTimestamp` | `string` | `date-time`                        | **Required** Timestamp of the last update to the document. |
| `contentType`          | `string` | -                                  | **Required** MIME type of the document.                    |
| `metadata`             | `array`  | [MetadataTag](#schema-MetadataTag) | **Required** Metadata tags associated with the document.   |
| `viewLocation`         | `string` | -                                  | **Required** URL to preview the document.                  |

### <a name="schema-MetadataTag"></a>MetadataTag

| Name        | Type     | Format   | Description                                                    |
|-------------|----------|----------|----------------------------------------------------------------|
| `key`       | `string` | -        | **Required** Metadata key.                                     |
| `matchMode` | `string` | -        | **Required** Match mode for the metadata key (e.g., ANY, ALL). |
| `value`     | `array`  | `string` | **Required** Values associated with the metadata key.          |

### <a name="schema-ErrorResponse"></a>ErrorResponse

 Name    | Type     | Format                 | Description                        
---------|----------|------------------------|------------------------------------
 `error` | `object` | [Error](#schema-Error) | **Required** Error details object. 

### <a name="schema-Error"></a>Error

| Name      | Type     | Format | Description                 |
|-----------|----------|--------|-----------------------------|
| `code`    | `string` | -      | **Required** Error code.    |
| `message` | `string` | -      | **Required** Error message. |


