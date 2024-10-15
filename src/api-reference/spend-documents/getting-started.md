## Prior Versions

The Spend Documents v4 API coexists with another set of Receipts V4 APIs. The latter is currently used for facilitating the submission of electronic receipts (eReceipts) to the SAP Concur platform.

## Limitations

This API is only available to partners who have been granted access by SAP Concur. Access to this documentation does not provide access to the API. To submit electronic receipts (eReceipts) please use the [Receipts v4 APIs](https://developer.concur.com/api-reference/receipts/endpoints.html).

## Products and Editions

* Concur Expense Professional Edition
* Concur Expense Standard Edition
* 

## <a name="prerequisites"></a>Prerequisites

Read the [Getting Started](https://developer.concur.com/api-reference/authentication/getting-started.html) section of [Authentication API](https://developer.concur.com/api-reference/authentication/apidoc.html). Once you have registered your application, you must [obtain an access token from the Authentication API](https://developer.concur.com/api-reference/authentication/getting-started.html)

## Scope Usage

| Name | Description | Endpoint |
| --- | --- | --- |
| `spenddocs.receipts.write` <br> `spenddocs.receipts.writeonly` | Post receipt for the user | POST |
| `spenddocs.receipts.read` | Retrieve Receipt and its representations either by Receipt Id or Image Id and company Id | GET |
| `spenddocs.receipts.compliance.read` | Retrieve compliance representation of the receipt | GET |
