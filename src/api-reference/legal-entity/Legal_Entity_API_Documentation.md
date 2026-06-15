# Legal Entity API Documentation

## Overview

The Legal Entity API allows you to manage legal entity profiles within your company. Legal entities represent the distinct legal organizations or subsidiaries that operate within your company structure. This API is part of the Identity v4.1 APIs and follows SCIM (System for Cross-domain Identity Management) standards.

**Base URL:** `https://{region}.api.concursolutions.com/profile/identity/v4.1`

**API Version:** v4.1

**Products and Editions:** Professional, Standard

---

## Authentication

All Legal Entity API endpoints require authentication using an API key passed in the `Authorization` header:

```
Authorization: Bearer {access_token}
```

---

## Scopes

The Legal Entity API requires specific OAuth 2.0 scopes based on the operation:

| Scope | Endpoints | Operations |
|-------|-----------|------------|
| `company.legalentity.read` | GET `/LegalEntities/{id}`<br>POST `/LegalEntities/.search` | Read legal entity details<br>Search legal entities |
| `company.legalentity.writeonly` | POST `/LegalEntities`<br>PUT `/LegalEntities/{id}`<br>PATCH `/LegalEntities/{id}` | Create legal entities<br>Replace legal entities<br>Update legal entities |

---

## Company ID Context

Most Legal Entity endpoints require a Company ID to be provided through one of the following methods (in order of precedence):

1. **JWT token** (if your token includes company context)
2. **Query parameter** `companyId`
3. **Request body** (for POST operations only)

If you're using a JWT with company context, the `companyId` query parameter is optional. Otherwise, it must be explicitly provided.

---

## Endpoints

### 1. Create Legal Entity

**POST** `/LegalEntities`

Create a new Legal Entity Profile within a Company Resource.

#### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `companyId` | string | Optional* | Company's UUID (*required unless provided in JWT or request body) |

#### Request Body

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:LegalEntity"],
  "companyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "name": "Acme Corporation EMEA",
  "referenceId": "ACME-EMEA",
  "active": true,
  "registeringOrganization": "Companies House UK",
  "taxId": "GB999999999",
  "email": "legal@acme-emea.com",
  "phone": "+44-20-1234-5678",
  "address": {
    "streetAddress": "123 Business Street",
    "locality": "London",
    "region": "Greater London",
    "postalCode": "SW1A 1AA",
    "country": "GB"
  }
}
```

#### Required Fields

- `companyId` (string) - The company UUID
- `active` (boolean) - Whether the legal entity is active
- `id` (string) - Unique identifier (auto-generated on creation)

#### Optional Fields

- `name` (string, max 255 chars) - Name of the legal entity
- `referenceId` (string, max 255 chars) - A unique reference identifier for the legal entity
- `registeringOrganization` (string, max 255 chars) - The registering organization
- `taxId` (string, max 18 chars) - Tax identification number
- `email` (string, max 255 chars) - Contact email address
- `phone` (string, max 255 chars) - Contact phone number
- `address` (object) - Physical address of the legal entity

#### Response (200 OK)

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:LegalEntity"],
  "id": "le-550e8400-e29b-41d4-a716-446655440000",
  "companyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "name": "Acme Corporation EMEA",
  "referenceId": "ACME-EMEA",
  "active": true,
  "registeringOrganization": "Companies House UK",
  "taxId": "GB999999999",
  "email": "legal@acme-emea.com",
  "phone": "+44-20-1234-5678",
  "address": {
    "streetAddress": "123 Business Street",
    "locality": "London",
    "region": "Greater London",
    "postalCode": "SW1A 1AA",
    "country": "GB"
  },
  "meta": {
    "resourceType": "LegalEntity",
    "created": "2026-05-06T19:45:00Z",
    "lastModified": "2026-05-06T19:45:00Z",
    "location": "https://us.api.concursolutions.com/profile/identity/v4.1/LegalEntities/le-550e8400-e29b-41d4-a716-446655440000",
    "version": 1
  }
}
```

---

### 2. Fetch Legal Entity by ID

**GET** `/LegalEntities/{id}`

Retrieve a specific Legal Entity Profile by its unique identifier.

#### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Legal entity's UUID |

#### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `companyId` | string | Optional* | Company's UUID (*required unless provided in JWT) |

#### Example Request

```http
GET /profile/identity/v4.1/LegalEntities/le-550e8400-e29b-41d4-a716-446655440000?companyId=a1b2c3d4-e5f6-7890-abcd-ef1234567890
Authorization: Bearer {access_token}
Accept: application/json
```

#### Response (200 OK)

Returns the Legal Entity resource (same structure as Create response above).

---

### 3. Update Legal Entity (PATCH)

**PATCH** `/LegalEntities/{id}`

Update an existing Legal Entity Profile using SCIM PATCH operations. This allows partial updates to specific fields.

#### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Legal entity's UUID |

#### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `companyId` | string | Optional* | Company's UUID (*required unless provided in JWT) |

#### Request Body

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [
    {
      "op": "replace",
      "path": "phone",
      "value": "+44-20-9876-5432"
    },
    {
      "op": "replace",
      "path": "address.streetAddress",
      "value": "456 New Business Park"
    }
  ]
}
```

#### Supported Operations

| Operation | Description | Example |
|-----------|-------------|---------|
| `replace` | Update an existing field | Replace phone number |
| `add` | Add a new field or value | Add email address |
| `remove` | Remove a field | Remove phone number |

#### Example: Deactivate Legal Entity

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [
    {
      "op": "replace",
      "path": "active",
      "value": false
    }
  ]
}
```

#### Response (200 OK)

Returns the updated Legal Entity resource.

---

### 4. Replace Legal Entity (PUT)

**PUT** `/LegalEntities/{id}`

Replace an existing Legal Entity Profile entirely. Unlike PATCH, this replaces the entire resource.

⚠️ **Warning:** PUT operations overwrite the entire legal entity. Use PATCH for partial updates.

#### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Legal entity's UUID |

#### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `companyId` | string | Optional* | Company's UUID (*required unless provided in JWT) |

#### Request Body

Provide the complete Legal Entity object (same structure as POST request).

#### Response (200 OK)

Returns the replaced Legal Entity resource.

---

### 5. Search Legal Entities

**POST** `/LegalEntities/.search`

Retrieve all matching legal entity profiles using SCIM search filters.

#### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `companyId` | string | Optional* | Company's UUID (*required unless provided in JWT) |

#### Request Body

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:SearchRequest"],
  "filter": "active eq true",
  "count": 50,
  "cursor": ""
}
```

#### Search Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `filter` | string | SCIM filter expression to narrow results |
| `attributes` | array | List of attributes to return (overrides default) |
| `excludedAttributes` | array | List of attributes to exclude from response |
| `count` | integer | Maximum number of results per page (default varies) |
| `cursor` | string | Pagination cursor from previous response |

#### Filter Examples

**Get all active legal entities:**
```json
{
  "filter": "active eq true"
}
```

**Get legal entities by country:**
```json
{
  "filter": "address.country eq \"GB\""
}
```

**Get legal entities by reference ID:**
```json
{
  "filter": "referenceId eq \"ACME-EMEA\""
}
```

**Get legal entities by name (partial match):**
```json
{
  "filter": "name co \"Acme\""
}
```

#### SCIM Filter Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `eq` | Equal | `active eq true` |
| `ne` | Not equal | `active ne false` |
| `co` | Contains | `name co "Corporation"` |
| `sw` | Starts with | `referenceId sw "ACME"` |
| `ew` | Ends with | `referenceId ew "EMEA"` |
| `pr` | Present (not null) | `taxId pr` |
| `gt` | Greater than | N/A for legal entities |
| `ge` | Greater than or equal | N/A for legal entities |
| `lt` | Less than | N/A for legal entities |
| `le` | Less than or equal | N/A for legal entities |

#### Response (200 OK)

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
  "totalResults": 3,
  "itemsPerPage": 50,
  "startIndex": 1,
  "Resources": [
    {
      "id": "le-550e8400-e29b-41d4-a716-446655440000",
      "companyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "name": "Acme Corporation EMEA",
      "referenceId": "ACME-EMEA",
      "active": true,
      "taxId": "GB999999999",
      "meta": {
        "created": "2026-05-06T19:45:00Z",
        "lastModified": "2026-05-06T19:45:00Z",
        "version": 1
      }
    },
    {
      "id": "le-660e8400-e29b-41d4-a716-446655440001",
      "companyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "name": "Acme Corporation APAC",
      "referenceId": "ACME-APAC",
      "active": true,
      "taxId": "SG123456789",
      "meta": {
        "created": "2026-04-15T10:30:00Z",
        "lastModified": "2026-04-15T10:30:00Z",
        "version": 1
      }
    }
  ],
  "nextCursor": "eyJpZCI6ImxlLTY2MGU4NDAwLWUyOWItNDFkNC1hNzE2LTQ0NjY1NTQ0MDAwMSJ9"
}
```

#### Pagination

Use the `nextCursor` value from the response in your next request to retrieve the next page:

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:SearchRequest"],
  "filter": "active eq true",
  "count": 50,
  "cursor": "eyJpZCI6ImxlLTY2MGU4NDAwLWUyOWItNDFkNC1hNzE2LTQ0NjY1NTQ0MDAwMSJ9"
}
```

---

## Legal Entity Schema

### Complete Schema Definition

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:LegalEntity"],
  "id": "string (UUID, auto-generated)",
  "companyId": "string (UUID, required)",
  "active": "boolean (required)",
  "name": "string (max 255 chars, optional)",
  "referenceId": "string (max 255 chars, optional)",
  "registeringOrganization": "string (max 255 chars, optional)",
  "taxId": "string (max 18 chars, optional)",
  "email": "string (max 255 chars, optional)",
  "phone": "string (max 255 chars, optional)",
  "address": {
    "streetAddress": "string (optional)",
    "locality": "string (max 30 chars, optional)",
    "region": "string (max 30 chars, optional)",
    "postalCode": "string (max 20 chars, optional)",
    "country": "string (ISO 3166-1 alpha-2, optional)"
  },
  "meta": {
    "resourceType": "string (read-only)",
    "created": "string (ISO 8601 timestamp, read-only)",
    "lastModified": "string (ISO 8601 timestamp, read-only)",
    "location": "string (URL, read-only)",
    "version": "integer (read-only)"
  }
}
```

### Field Descriptions

#### Core Fields

| Field | Type | Max Length | Required | Description |
|-------|------|------------|----------|-------------|
| `id` | string (UUID) | - | Yes* | Unique identifier (*auto-generated on creation) |
| `companyId` | string (UUID) | - | Yes | The company this legal entity belongs to |
| `active` | boolean | - | Yes | Whether the legal entity is active |
| `name` | string | 255 | No | Name of the legal entity |
| `referenceId` | string | 255 | No | Unique reference identifier for the legal entity |

#### Registration Fields

| Field | Type | Max Length | Required | Description |
|-------|------|------------|----------|-------------|
| `registeringOrganization` | string | 255 | No | Organization that issued registration |
| `taxId` | string | 18 | No | Tax identification number |

#### Contact Fields

| Field | Type | Max Length | Required | Description |
|-------|------|------------|----------|-------------|
| `email` | string | 255 | No | Contact email address |
| `phone` | string | 255 | No | Contact phone number |

#### Address Fields

| Field | Type | Max Length | Required | Description |
|-------|------|------------|----------|-------------|
| `address.streetAddress` | string | - | No | Full street address (may include newlines) |
| `address.locality` | string | 30 | No | City or locality |
| `address.region` | string | 30 | No | State, province, or region |
| `address.postalCode` | string | 20 | No | ZIP or postal code |
| `address.country` | string | 2 | No | Two-letter country code (ISO 3166-1 alpha-2) |

#### Metadata Fields (Read-Only)

| Field | Type | Description |
|-------|------|-------------|
| `meta.resourceType` | string | Always "LegalEntity" |
| `meta.created` | string | ISO 8601 timestamp of creation |
| `meta.lastModified` | string | ISO 8601 timestamp of last update |
| `meta.location` | string | Full URL to this resource |
| `meta.version` | integer | Number of times the resource has been modified |

---

## Error Responses

### Common Error Codes

| Status Code | Description | Cause |
|-------------|-------------|-------|
| 400 | Bad Request | Invalid request format or validation error |
| 401 | Unauthorized | Missing or invalid authentication token |
| 403 | Forbidden | Valid token but insufficient permissions |
| 404 | Not Found | Legal entity ID does not exist |
| 500 | Internal Server Error | Server-side error occurred |

### Error Response Format

```json
{
  "status": "400",
  "scimType": "invalidValue",
  "detail": "The request is invalid",
  "urn:ietf:params:scim:api:messages:concur:2.0:Error": {
    "messages": [
      {
        "code": "INVALID_FIELD",
        "type": "error",
        "message": "taxId exceeds maximum length of 18 characters",
        "schemaPath": "taxId"
      }
    ]
  }
}
```

### SCIM Error Types

| scimType | Description |
|----------|-------------|
| `invalidValue` | A required field is missing or a field has an invalid value |
| `tooMany` | Too many results would be returned |
| `uniqueness` | A unique constraint was violated |
| `mutability` | Attempted to modify a read-only field |
| `invalidSyntax` | Request body is not valid JSON or SCIM format |
| `invalidFilter` | The filter syntax is invalid |

---

## Use Cases

### Use Case 1: Multi-Entity Corporate Structure

**Scenario:** A global company operates through multiple legal entities across different countries.

**Solution:** Create separate legal entity profiles for each subsidiary:

```bash
# Create UK entity
POST /LegalEntities
{
  "companyId": "parent-company-uuid",
  "name": "Acme UK Limited",
  "referenceId": "ACME-UK",
  "active": true,
  "taxId": "GB999999999",
  "address": { "country": "GB" }
}

# Create Singapore entity
POST /LegalEntities
{
  "companyId": "parent-company-uuid",
  "name": "Acme Singapore Pte Ltd",
  "referenceId": "ACME-SG",
  "active": true,
  "taxId": "SG123456789",
  "address": { "country": "SG" }
}
```

### Use Case 2: User Assignment to Legal Entity

**Scenario:** Assign employees to their respective legal entities for compliance and reporting.

**Solution:** Reference the legal entity in the User's enterprise extension:

```bash
# When creating/updating a user via Identity v4.1 User API
PATCH /Users/{userId}
{
  "Operations": [
    {
      "op": "replace",
      "path": "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:legalEntity",
      "value": "le-550e8400-e29b-41d4-a716-446655440000"
    }
  ]
}
```

### Use Case 3: Reporting by Legal Entity

**Scenario:** Generate expense reports grouped by legal entity.

**Solution:** Use the search endpoint to find all active legal entities, then query users by legal entity:

```bash
# Step 1: Get all active legal entities
POST /LegalEntities/.search
{
  "filter": "active eq true"
}

# Step 2: For each legal entity, query users (via Users API)
POST /Users/.search
{
  "filter": "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:legalEntity eq \"le-550e8400-e29b-41d4-a716-446655440000\""
}
```

### Use Case 4: Merger & Acquisition - Deactivate Legal Entity

**Scenario:** A subsidiary is sold or merged, and its legal entity needs to be deactivated.

**Solution:** Update the legal entity status to inactive:

```bash
PATCH /LegalEntities/{id}
{
  "Operations": [
    {
      "op": "replace",
      "path": "active",
      "value": false
    }
  ]
}
```

---

## Related APIs

- **[User Provisioning API (v4)](https://developer.concur.com/api-reference/user-provisioning/v4.user-provisioning.html)** - Assign users to legal entities
- **[Identity v4.1 Users API](https://developer.concur.com/api-reference/profile/v4.1.identity.html)** - Manage user identity profiles with legal entity references
- **[Company API](https://developer.concur.com/api-reference/profile/v4.company.html)** - Manage company-level settings

