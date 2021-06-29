
## Sales Tax Validation v3


> **Limitations**: This API is only available to partners who have been granted access by SAP Concur. Access to this documentation does not provide access to the API. This API is not available in Implementation environments.

* [Products and Editions](#sales-tax-validation-v3-products-and-editions)
* [Scope Usage](#sales-tax-validation-v3-scope-usage)
* [Dependencies](#sales-tax-validation-v3-dependencies)
* [Get Invoices for Calculating Tax](#get-invoices-for-calculating-tax)
* [Update Invoices with the Calculated Tax Amount and Tax Rate](#update-invoices-with-a-calculated-tax-amount-and-tax-rate)
* [Schema](#invoices-schema)
  * [Invoice](#sales-tax-validation-v3-invoice)
  * [Bill To Address](#sales-tax-validation-v3-billtoaddress)
  * [Line Item](#sales-tax-validation-v3-lineitem)
  * [Allocation](#sales-tax-validation-v3-allocation)
  * [Vendor](#sales-tax-validation-v3-vendor)
  * [Ship To Address](#ship-to-address)
* [Status Schema](#schema-status)

#### <a name="products-editions"></a>Sales Tax Validation v3 - Products and Editions

* Concur Invoice Professional Edition

#### <a name="scope-usage"></a>Sales Tax Validation v3 - Scope Usage

Name|Description|Endpoint
---|---|---
`INVTV`|Invoice - Tax Validation|GET, PUT

#### <a name="dependencies"></a>Sales Tax Validation v3 - Dependencies

None.

#### <a name="get"></a>Get Invoices for Calculating Tax

Retrieves invoices for calculating tax.

### Scopes

`INVTV` - Refer to [Scope Usage](#scope-usage) for full details.

### Request

#### URI

##### Template
```shell
https://{datacenterURI}/api/v3.0/invoice/salestaxvalidationrequest
```
#### Parameters  

|Name | Type | Format | Description
|-----|------|--------|------------
|`offset`|`string`|`query`|The starting point of the next set of results, after the limit specified in the limit field has been reached.
|`limit`|`Int32`|`query`|The number of invoices to retrieve. Maximum value: `1,000`
|`modifiedafter`|`string`|`query`|A parameter that can be used to limit the results to invoices modified after the specified date.

#### Payload

* None.

### Response  

#### Payload

* [Schema](#schema)

### Example

#### Request
```shell
https://us.api.concursolutions.com/api/v3.0/invoice/salestaxvalidationrequest
```
#### Response
```json
{
    "TotalCount": 1,
    "Items": [
        {
            "RequestID": "3E6969DD15D64A349188",
            "TaxReferenceID": "9B8888FA54CA47E598081F4527A2BC50",
            "CountryCode": "US",
            "Title": "Test Request - 15 Feb",
            "PurchaseOrderNumber": null,
            "InvoiceDate": "2019-03-01 00:00:00.0",
            "StatusCode": null,
            "Status": null,
            "InvoiceAmount": "480.00000000",
            "Total": "500.00000000",
            "ShippingAmount": "0.00000000",
            "Tax": "20.00000000",
            "CalculatedTaxAmount": null,
            "CalculatedTaxRate": null,
            "CurrencyCode": "USD",
            "VendorInvoiceNumber": "99999",
            "OrgUnit1": "1",
            "OrgUnit1Value": "Best Buy",
            "OrgUnit2": "100",
            "OrgUnit2Value": "Geek Squad",
            "OrgUnit3": null,
            "OrgUnit3Value": null,
            "OrgUnit4": null,
            "OrgUnit4Value": null,
            "OrgUnit5": null,
            "OrgUnit5Value": null,
            "OrgUnit6": null,
            "OrgUnit6Value": null,
            "Custom1": null,
            "Custom1Value": null,
            "Custom2": null,
            "Custom2Value": null,
            "Custom3": null,
            "Custom3Value": null,
            "Custom4": null,
            "Custom4Value": null,
            "Custom5": null,
            "Custom5Value": null,
            "Custom6": null,
            "Custom6Value": null,
            "Custom7": null,
            "Custom7Value": null,
            "Custom8": null,
            "Custom8Value": null,
            "Custom9": null,
            "Custom9Value": null,
            "Custom10": null,
            "Custom10Value": null,
            "Custom11": null,
            "Custom11Value": null,
            "Custom12": null,
            "Custom12Value": null,
            "Custom13": null,
            "Custom13Value": null,
            "Custom14": null,
            "Custom14Value": null,
            "Custom15": null,
            "Custom15Value": null,
            "Custom16": null,
            "Custom16Value": null,
            "Custom17": null,
            "Custom17Value": null,
            "Custom18": null,
            "Custom18Value": null,
            "Custom19": null,
            "Custom19Value": null,
            "Custom20": null,
            "Custom20Value": null,
            "Custom21": null,
            "Custom21Value": null,
            "Custom22": "Default",
            "Custom22Value": "Default-Change to Client",
            "Custom23": null,
            "Custom23Value": null,
            "Custom24": null,
            "Custom24Value": null,
            "BillToAddress": {
                "ExternalID": null,
                "Name": null,
                "Address1": null,
                "Address2": null,
                "Address3": null,
                "City": null,
                "StateProvince": null,
                "State": null,
                "PostalCode": null,
                "CountryCode": null
            },
            "ShipToAddress": {
                "ExternalID": null,
                "Name": null,
                "Address1": "BTP",
                "Address2": null,
                "Address3": null,
                "City": "Bengaluru South",
                "StateProvince": null,
                "State": null,
                "PostalCode": "560093",
                "CountryCode": "IN"
            },
            "LineItem": [
                {
                    "CommodityCode": "95121513",
                    "Quantity": "1.00000000",
                    "LineItemKey": "gWo0fa6rk0zJkpaD3ZXHL8DbNaw",
                    "UnitPrice": "200.00000000",
                    "Total": "200.00000000",
                    "CountryCode": "US",
                    "CalculatedTaxAmount": null,
                    "CalculatedTaxRate": null,
                    "CurrencyCode": "USD",
                    "Allocations": {
                        "Allocation": [
                            {
                                "Custom1": "1",
                                "Custom1Value": null,
                                "Custom2": "100",
                                "Custom2Value": null,
                                "Custom3": null,
                                "Custom3Value": null,
                                "Custom4": null,
                                "Custom4Value": null,
                                "Custom5": null,
                                "Custom5Value": null,
                                "Custom6": null,
                                "Custom6Value": null,
                                "Custom7": null,
                                "Custom7Value": null,
                                "Custom8": null,
                                "Custom8Value": null,
                                "Custom9": null,
                                "Custom9Value": null,
                                "Custom10": null,
                                "Custom10Value": null,
                                "Custom11": null,
                                "Custom11Value": null,
                                "Custom12": null,
                                "Custom12Value": null,
                                "Custom13": null,
                                "Custom13Value": null,
                                "Custom14": null,
                                "Custom14Value": null,
                                "Custom15": null,
                                "Custom15Value": null,
                                "Custom16": null,
                                "Custom16Value": null,
                                "Custom17": null,
                                "Custom17Value": null,
                                "Custom18": null,
                                "Custom18Value": null,
                                "Custom19": null,
                                "Custom19Value": null,
                                "Custom20": null,
                                "Custom20Value": null,
                                "AllocationAmount": "200.00000000"
                            }
                        ]
                    },
                    "Vendor": {
                        "VendorCode": null,
                        "VendorName": "Holiday Inn",
                        "VendorAddressName": null,
                        "AddressCode": null,
                        "Address1": null,
                        "Address2": null,
                        "Address3": null,
                        "City": null,
                        "State": null,
                        "PostalCode": null,
                        "CountryCode": null
                    }
                },
                {
                    "CommodityCode": "90111501",
                    "Quantity": "1.00000000",
                    "LineItemKey": "gWo0c5$sMJswx4W0tK$pw2bwBTFtQ",
                    "UnitPrice": "280.00000000",
                    "Total": "280.00000000",
                    "CountryCode": "US",
                    "CalculatedTaxAmount": null,
                    "CalculatedTaxRate": null,
                    "CurrencyCode": "USD",
                    "Allocations": {
                        "Allocation": [
                            {
                                "Custom1": "1",
                                "Custom1Value": null,
                                "Custom2": "100",
                                "Custom2Value": null,
                                "Custom3": null,
                                "Custom3Value": null,
                                "Custom4": null,
                                "Custom4Value": null,
                                "Custom5": null,
                                "Custom5Value": null,
                                "Custom6": null,
                                "Custom6Value": null,
                                "Custom7": null,
                                "Custom7Value": null,
                                "Custom8": null,
                                "Custom8Value": null,
                                "Custom9": null,
                                "Custom9Value": null,
                                "Custom10": null,
                                "Custom10Value": null,
                                "Custom11": null,
                                "Custom11Value": null,
                                "Custom12": null,
                                "Custom12Value": null,
                                "Custom13": null,
                                "Custom13Value": null,
                                "Custom14": null,
                                "Custom14Value": null,
                                "Custom15": null,
                                "Custom15Value": null,
                                "Custom16": null,
                                "Custom16Value": null,
                                "Custom17": null,
                                "Custom17Value": null,
                                "Custom18": null,
                                "Custom18Value": null,
                                "Custom19": null,
                                "Custom19Value": null,
                                "Custom20": null,
                                "Custom20Value": null,
                                "AllocationAmount": "280.00000000"
                            }
                        ]
                    },
                    "Vendor": {
                        "VendorCode": null,
                        "VendorName": "Holiday Inn",
                        "VendorAddressName": null,
                        "AddressCode": null,
                        "Address1": null,
                        "Address2": null,
                        "Address3": null,
                        "City": null,
                        "State": null,
                        "PostalCode": null,
                        "CountryCode": null
                    }
                }
            ],
            "ID": null,
            "URI": null
        }
    ],
    "NextPage": null
}
```

#### JSON Example of an Unsuccessful Response
```json

{
    "Error": {
        "Message": "Forbidden Request",
        "Server-Time": "2019-03-12T07:56:32",
        "Id": "65F68719-3FF5-459E-8B94-5FC93A5CD045"
    }
}
```
#### <a name="put"></a>Update Invoices with a Calculated Tax Amount and Tax Rate  

Updates invoices with calculated tax amount and tax rate.

### Scopes

`INVTV` - Refer to [Scope Usage](#scope-usage) for full details.

### Request

#### URI

##### Template

```shell
https://{datacenterURI}//api/v3.0/invoice/salestaxvalidationrequest
```

#### Parameters  

|Name | Type | Format | Description
|-----|------|--------|------------
|`invoice`|-|`body`|The tax information for the invoice that is to be updated.

#### Payload

[Invoice](#invoice)

### Response

#### Payload

[Status Schema](#schema-status)

### Example

#### Request
```json
{
  "CalculatedTaxAmount": "150.00",
  "CalculatedTaxRate": "0.40",
  "Comments": "Updating Calculated Tax",
  "LineItem": [
    {
      "CalculatedTaxAmount": "50.00",
      "CalculatedTaxRate": "0.05",
      "LineItemKey": "gWo0b$sLeIU2W18zqlQiELsE7TvQ"

    }
  ],

  "StatusCode": "CMPLT",
  "TaxReferenceID": "9A0F8C3EDF4040BBA94394A1A0CA6DCB"

}
```

#### Response
```json
{
    "TaxReferenceID": "9A0F8C3EDF4040BBA94394A1A0CA6DCB",
    "Comments": null,
    "Status": "SUCCESS",
    "Type": null,
    "Code": 0,
    "Message": null,
    "Parameters": null,
    "RecordNumber": 0
}
```

#### JSON Example of an Unsuccessful Response
```json
{
    "Message": " Status code is a required field. ERROR,CMPLT are valid values."
}
```

#### <a name="schema"></a>Invoices Schema

### Sales Tax Validation v3 - Invoices

| Name | Type | Format | Description|
|-----|------|--------|------------|
| `Items`|`array`|[`Invoice`](#invoice)|The result collection.
| `NextPage`|`string`|-|The URI of the next page of results, if any.
| `TotalCount`|`Int32`|-|The amount of items returned.

#### <a name="invoice"></a>Invoice

|Name | Type | Format | Description
|-----|------|--------|------------
|`BillToAddress`|`object`|[`BillToAddress`](#bill-to-address)|The billing address associated with the invoice.
|`CalculatedTaxAmount`|`string`|-|The calculated tax amount for the invoice.
|`CalculatedTaxRate`|`string`|-|The calculated tax rate for the invoice.
|`Comments`|`string`|-|Comments for the invoice.
|`CountryCode`|`string`|-|The country code for the line item.
|`CurrencyCode`|`string`|-|The 3-letter ISO 4217 currency code for the invoice currency. Example: `USD`, `CAD`
|`ID`|`string`|-|The unique identifier of the resource.
|`InvoiceAmount`|`string`|-|The invoice amount (the cost of the purchased items).
|`InvoiceDate`|`string`|-|The date of the invoice.
|`LineItem`|`array`|[`LineItem`](#line-item)|The line items associated with the invoice.
|`OrgUnit1 through OrgUnit6`|`string`|-|**Not available for PUT.** The code from the OrgUnit fields. These fields may not have data, depending on the configuration.
|`OrgUnit1Value though OrgUnit6Value`|`string`|-|**Not available for PUT.** The value from the OrgUnit fields. These fields may not have data, depending on the configuration.
|`Custom1 through Custom24`|`string`|-|**Not available for PUT.** The code from the Custom fields. These fields may not have data, depending on the configuration.
|`Custom1Value through Custom24Value`|`string`|-|**Not available for PUT.** The value from the Custom fields. These fields may not have data, depending on the configuration.
|`PurchaseOrderNumber`|`string`|-|The purchase order number associated to the invoice.
|`RequestID`|`string`|-|The ID of the invoice.
|`ShippingAmount`|`string`|-|The shipping amount for the invoice.
|`ShipToAddress`|`object`|[`ShipToAddress`](#ship-to-address)|The shipping address associated with the invoice.
|`Status`|`string`|-|The status of the invoice.
|`StatusCode`|`string`|-| **Required** The status code for the invoice. Supported values: `ERROR`, `CMPLT`
|`Tax`|`string`|-|The tax, as shown on the invoice. This is the tax applied by the vendor.
|`TaxReferenceID`|`string`|-|**Required** The tax reference ID of the invoice.
|`Title`|`string`|-|The title of the invoice.
|`Total`|`string`|-|The total amount of the invoice.
|`URI`|`string`|-|The URI to the resource.
|`VendorInvoiceNumber`|`string`|-|The vendor invoice number that is associated with the invoice.

#### <a name="bill-to-address"></a>Sales Tax Validation v3 - BillToAddress  

|Name | Type | Format | Description
|-----|------|--------|------------
|`Address1`|`string`|-|**Required** Address line 1 of the billing address.
|`Address2`|`string`|-|Address line 2 of the billing address.
|`Address3`|`string`|-|Address line 3 of the billing address.
|`City`|`string`|-|**Required** The city of the billing address.
|`CountryCode`|`string`|-|**Required** The code of the country for the billing address.
|`ExternalID`|`string`|-|**Required** A unique value supplied by the customer to identify a particular billing address.
|`Name`|`string`|-|An optional name that can be given to the billing address.
|`PostalCode`|`string`|-|**Required** The postal code of the billing address.
|`State`|`string`|-|**Required** The state of the billing address.
|`StateProvince`|`string`|-|**Required** The province of the billing address.

#### <a name="line-item"></a>Sales Tax Validation v3 - LineItem  

|Name | Type | Format | Description
|-----|------|--------|------------
|`Allocations`|`object`|[`Allocation`](#allocation)|The allocations associated with a line item.
|`CalculatedTaxAmount`|`string`|-|The calculated tax amount for the individual line item.
|`CalculatedTaxRate`|`string`|-|The calculated tax rate for the individual line item.
|`CommodityCode`|`string`|-|The commodity code that is tied to the expense type associated with the line item.
|`CountryCode`|`string`|-|The country code for the line item.
|`CurrencyCode`|`string`|-|The currency code for the individual line item.
|`LineItemKey`|`string`|-|**Required** A value that uniquely identifies the line item.
|`Quantity`|`string`|-|The quantity for the line item.
|`Total`|`string`|-|The total amount for the line item.
|`UnitPrice`|`string`|-|The unit price for the line item.
|`Vendor`|`object`|[`InvoiceVendor`](#Vendor)|Details about the vendor for each line item.

#### <a name="allocation"></a>Sales Tax Validation v3 - Allocation  

|Name | Type | Format | Description
|-----|------|--------|------------
|`AllocationAmount`|`string`|-|The allocation amount associated with the line item.
|`Custom1 through Custom20`|`string`|-|**Not available for PUT.** The code from the Custom fields. These fields may not have data, depending on the configuration.
|`Custom1Value through Custom20Value`|`string`|-|**Not available for PUT.** The value from the Custom fields. These fields may not have data, depending on the configuration.

#### <a name="vendor"></a>Sales Tax Validation v3 - Vendor  

|Name | Type | Format | Description
|-----|------|--------|------------
|`Address1`|`string`|-|**Required** Address line 1 of the vendor address.
|`Address2`|`string`|-|Address line 2 of the vendor address.
|`Address3`|`string`|-|Address line 3 of the vendor address.
|`City`|`string`|-|**Required** The city of the vendor address.
|`CountryCode`|`string`|-|**Required** The code of the country for the vendor address.
|`PostalCode`|`string`|-|**Required** The postal code of the vendor address.
|`State`|`string`|-|**Required** The state of the vendor address.
|`VendorAddressName`|`string`|-|**Required** The name for the vendor address.
|`VendorName`|`string`|-|**Required** The name of the vendor.
|`VendorCode`|`string`|-|**Required** The code associated with the vendor.

#### <a name="ship-to-address"></a>Sales Tax Validation v3 - ShipToAddress  

|Name | Type | Format | Description
|-----|------|--------|------------
|`Address1`|`string`|-|**Required** Address line 1 of the shipping address.
|`Address2`|`string`|-|Address line 2 of the shipping address.
|`Address3`|`string`|-|Address line 3 of the shipping address.
|`City`|`string`|-|**Required** The city of the shipping address.
|`CountryCode`|`string`|-|**Required** The code of the country for the shipping address.
|`ExternalID`|`string`|-|**Required** A unique value supplied by the customer to identify a particular shipping address.
|`Name`|`string`|-|An optional name that can be given to the shipping address.
|`PostalCode`|`string`|-|**Required** The postal code of the shipping address.
|`State`|`string`|-|**Required** The state of the shipping address.
|`StateProvince`|`string`|-|**Required** The province of the shipping address.

#### <a name="schema-status"></a>Status Schema  

|Name | Type | Format | Description
|-----|------|--------|------------
|`Code`|`int`|-|Code of request result.
|`Comments`|`string`|-|Comments that are returned for the update request.
|`Message`|`string`|-|Message of request result.
|`RecordNumber`|`int`|-|Record number for the create/update request.
|`Status`|`string`|-|The status of the update. Supported values: `SUCCESS`, `FAILURE`
|`TaxReferenceID`|`string`|-|The tax reference ID of the updated invoice.
|`Type`|`string`|-|Type request result.

