
## Retrieve Invoice Digests v3



* [Retrieves All Invoice Digests Based On the Search Criteria](#retrieves-all-invoice-digests-based-on-the-search-criteria)
* [Retrieves an Invoice Digest Based On ID](#retrieves-an-invoice-digest-based-on-id)
* [Schema](#retrieve-invoice-digests-v3-schema)

### Version

3.0

#### <a name="get"></a>Retrieves All Invoice Digests Based On the Search Criteria

```
GET /api/v3.0/invoice/paymentrequestdigests
```

#### Parameters

Name|Type|Format|Description
---|---|---|---			
`offset`|`string`|`query`|The start of the page offset.
`limit`|`Int32`|`query`|The number of records to return. Default: 1,000
`approvalStatus`|`string`|`query`|A code representing an Invoice Approval Status. Use GET /invoice/localizeddata to get the available approval status codes.
`paymentStatus`|`string`|`query`|A code representing an Invoice Payment Status. Use GET /invoice/localizeddata to get the available payment status codes
`vendorInvoiceNumber`|`string`|`query`|Vendor invoice number tied to the invoice.
`createDateBefore`|`DateTime`|`YYYY-MM-DD`|The invoice create date is before this date.
`createDateAfter`|`DateTime`|`YYYY-MM-DD`|The invoice create date is after this date.
`userDefinedDateBefore`|`DateTime`|`YYYY-MM-DD`|The invoice user defined date is before this date.
`userDefinedDateAfter`|`DateTime`|`YYYY-MM-DD`|The invoice user defined date is after this date.
`submitDateBefore`|`DateTime`|`YYYY-MM-DD`|The invoice submit date is before this date.
`submitDateAfter`|`DateTime`|`YYYY-MM-DD`|The invoice submit date is after this date.
`paidDateBefore`|`DateTime`|`YYYY-MM-DD`|The invoice paid date is before this date.
`paidDateAfter`|`DateTime`|`YYYY-MM-DD`|The invoice paid date is after this date.
`payMethodType`|`string`|`query`|	Payment method type tied to an Invoice. Use GET /invoice/localizeddata to get the available Pay Method types.
`lastModifiedDateBefore`|`DateTime`|`YYYY-MM-DD`|The invoice last modified date is before this date.
`lastModifiedDateAfter`|`DateTime`|`YYYY-MM-DD`|The invoice last modified date is after this date.
`extractedDateBefore`|`DateTime`|`YYYY-MM-DD`|The invoice extracted date is before this date.
`extractedDateAfter`|`DateTime`|`YYYY-MM-DD`|The invoice extracted date is after this date.

#### <a name="getID"></a>Retrieves an Invoice Digest Based On ID

```
GET /api/v3.0/invoice/paymentrequestdigests/{id}
```

#### Parameters

Name|Type|Format|Description
---|---|---|---
`id`|`string`|`path`|**Required** The invoice ID

#### <a name="schema"></a>Retrieve Invoice Digests v3 - Schema

#### Payment Request Digests

Name|Type|Format|Description
---|---|---|---
`Items`|`Array`|[Payment Request Digest](#paymentrequestdigest)|The result collection.
`NextPage`|`string`|-|The URI of the next page of results, if any.
`PaymentRequestDigest`|`Array`|[Payment Request Digest](#paymentrequestdigest)|-
`TotalCount`|`Int32`|-|-

#### <a name="paymentrequestdigest"></a>Payment Request Digest

Name|Type|Format|Description
---|---|---|---
`ApprovalStatusCode`|`string`|-|**Required** A code indicating the invoice's approval status.
`CreateDate`|`string`|-|The date the invoice was created.
`CurrencyCode`|`string`|-|The 3-letter ISO 4217 currency code for the invoice currency. Examples: `USD` - US dollars; `BRL` - Brazilian real; `CAD` - Canadian dollar; `CHF` - Swiss franc; `EUR` - Euro; `GBO` - Pound sterling; `HKD` - Hong Kong dollar; `INR` - Indian rupee; `MXN` - Mexican peso; `NOK` - Norwegian krone; `SEK` - Swedish krona.
`ID`|`string`|-|The unique identifier of the resource.
`InvoiceNumber`|`string`|-|The invoice number of the Invoice.
`IsDeleted`|`boolean`|-|A true/false value which indicates whether the invoice has been deleted. (Deleted invoices are retained in the system for historical purposes.).
`OwnerLoginID`|`string`|-|The login ID of the Invoice owner.
`OwnerName`|`string`|-|The name of the Invoice owner.
`PaidDate`|`string`|-|The date when all journal entries in the invoice were integrated with or extracted to the financial system.
`PaymentRequestId`|`string`|-|**Required** The unique identifier of the Invoice summarized in this digest.
`PaymentRequestUri`|`string`|-|**Required** URI of the Invoice summarized in this digest.
`PaymentStatusCode`|`string`|-|**Required** A code indicating the invoice's payment status.
`Total`|`string`|-|The total amount of the invoice.
`URI`|`string`|-|The URI to the resource.
`UserDefinedDate`|`string`|-|The invoice date as assigned by the user.
`VendorName`|`string`|-|**Required** The name of the vendor.
`PaymentMethod`|`string`|-|Payment method type tied to an Invoice.
`LastModifiedDate`|`string`|-|The date the invoice was last modified.
`ExtractedDate`|`string`|-|The date the invoice was extracted.
