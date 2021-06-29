
## Receipt Image v3


* [Scope Usage](#receipt-image-v3-scope-usage)
* [Retrieve a list of all receipt images](#retrieve-a-list-of-all-receipt-images)
* [Retrieve a receipt image by ID](#retrieve-a-receipt-image-by-id)
* [Create a new receipt image](#create-a-new-receipt-image)
* [Append a receipt image](#append-a-receipt-image)
* [Delete a receipt image](#delete-a-receipt-image)
* [Schema](#receipt-image-v3-schema)

The SAP Concur Receipt Image API allows for the management of receipt images attached to expense reports, expense entries, and payment requests. You can retrieve existing images by Image ID, and upload new images to a User. This API allows you to upload images in a predefined format and size targeting a specific resource or user in SAP Concur. You can also pull images down from SAP Concur by either displaying them in the browser or downloading the image content to save locally.

> **Note**: This API is not designed to obtain the receipt images attached to an expense report. If you are an Enterprise Partner creating integrations that are intended to obtain final-approved Expense or Invoice data, and the accompanying receipt images that substantiate those transactions you will need to use [Image v1](https://developer.concur.com/api-reference/image/v1.image.html). These scenarios include, but are not limited to: ERP integrations for financial journal entry postings, VAT reclaim integrations that obtain transactions to calculate VAT reclaim, project billing integrations used to substantiate expenses billed back, etc.

#### <a name="scope-usage"></a>Receipt Image v3 - Scope Usage

Name|Description|Endpoint
---|---|---
`IMAGE`|Add or Retrieve Report and Line Item Images.|GET, POST, PUT, DELETE

#### <a name="get"></a>Retrieve a List of All Receipt Images

    GET  /api/v3.0/expense/receiptimages

#### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`offset`	|	`string`	|	`query`	|	Starting page offset
`limit`	|	`Int32`	|	`query`	|	Number of records to return (default 25)
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.

#### <a name="getID"></a>Retrieve a Receipt Image by ID

    GET  /api/v3.0/expense/receiptimages/{id}

#### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** ReceiptImage ID
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.

### Example

The above GET request produces this response:

```xml
<Image xmlns="http://www.concursolutions.com/api/image/2011/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Id>sample</Id>
  <Url>https://imagingupload.concursolutions.com/file/p00884704c6o/5A789811F139BC89D9C42DDE5FEE2A655BB7C2A375E9C481FA0BE92FFF690E298F119925A5C834385C8D62AE5FC4E65AC0F53E4C7273C14A4E71D4264F104882H142570AF84FBEEEC439486FE89E44D2F?id=51253775812C4750888F2e=p00884704c6o3t=AN</Url>
</Image>
```

Copy and paste the URL into a browser session to render the image.  This is a temporary URL.

#### <a name="post"></a>Create a New Receipt Image

    POST  /api/v3.0/expense/receiptimages

#### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.
`image`	|	`file`	|	`body`	|	**Required** Image data file

#### <a name="put"></a>Append a Receipt Image

    PUT  /api/v3.0/expense/receiptimages/{id}

#### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** ID of the receipt image to update
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.
`image`	|	`file`	|	`body`	|	**Required** Image data file

#### <a name="delete"></a>Delete a Receipt Image

    DELETE  /api/v3.0/expense/receiptimages/{id}

#### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** ID of the receipt image to delete
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.

#### <a name="schema"></a>Receipt Image v3 - Schema

### Receipt Images

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	Array	|	[Receipt Image](#receiptimage)	|	The result collection.
`NextPage`	|	string	|	-	|	The URI of the next page of results, if any.

#### <a name="receiptimage"></a>Receipt Image

Name | Type | Format | Description
-----|------|--------|------------
`ID`	|	string	|	-	|	The unique identifier of the resource.
`URI`	|	string	|	-	|	The URI to the resource.

# Request v4