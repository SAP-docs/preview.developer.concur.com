## Schema

### Receipt

|Name|Type|Format| Description                                                                                       |
|---|---|---|---------------------------------------------------------------------------------------------------|
| `metadata`     | `object` |-| Receipt API schema for metadata, receipt-data, `enrichmentData` and document (& representations). |
| `receiptData`  | `object` |-| Receipt API schema for receipt data.                                                              |

### Metadata

|Name|Type|Format|Description|
|---|---|---|---|
| `userId`              | `string` |-| User's UUID.|
| `forwardId`           | `string` |-| Forward Id that clients provide.|
| `imageId`             | `string` |-| Imaging Id in Imaging Service.|
| `id`                  | `string` |-| Receipt Id.|
| `companyId`           | `string` |-| Company UUID.|
| `dateTimeReceived`    | `string` |-| Date time of receipt uploaded.|
| `origin`              | `string` |-| Origin of the request - supported origins listed below.|
| `captureMethod`       | `string` |-| Type of the receipt capture method.|
| `provider`            | `string` |-| Provider of the request - supported providers listed below.|
| `complianceCountryCode` | `string` |-| Compliance country code based on user group configuration.|
| `feature`             | `string` |-| Feature enrichment for the receipt.|
| `status`              | `string` |-| Receipt status.|
| `compliance`          | `object` |-| Compliance information for the receipt.|
| `entityId`            | `string` |-| Entity Code.|
| `category`            | `string` |-| eReceipt category.|

### ReceiptData

|Name|Type|Format|Description|
|---|---|---|---|
| `receiveDateTime`| `string` |-| Date/Time of the document received by customer.|
| `transactionDateTime` | `string` |-| Date/Time of the transaction.|
| `amount`| `object` |-| Transaction Amount - Total, Transaction Currency Code, Total Net Amount, Transaction Amount - Sub Total.|
| `vendor`| `object` |-| Vendor details: Name, Tax Id of the company/vendor, Address Line, City, State, Country, Postal Code, Phone.|
| `comments`| `string` |-| Comments can be added here for any receipt.|
| `paymentType`| object |-| Supported Payment types based on the data on the Receipt: Payment type method (enum: Cash, Credit Card, Digital Wallet), Credit card type if the payment method is credit card (Name of the card type ex: American Express, MasterCard, Discover, etc., Last 4 digits of credit card number if the payment method is credit card), if the payment method is digitalWallet, type of digital wallet (ex: ApplePay, PayTM, Rupay, GooglePay etc.). |
| `documentCompliance`  | `object` |-| Document Compliance information: UUID of the Document, Version of the document format, Additional identified for the document, Document Type (only code), Codes supported by the document, Verification or Certificate Code.|
| `lineItems` | `array`  |-| Array of LineItems: Line Identifier, Product Code of goods and services, Item Quantity, Item Unit Price, Item Tax Rate (optional), Item Sub Total (optional), Description, Date, Type, Amount, The taxes applied on this LineItem transaction, The discounts offered on this LineItem transaction, Additional Description, Indicates the charge category for the line item. Example: 'MOVIE', 'PARKING', 'OTHER' etc. |
| `expenseData`| `object` |-| Expense Data: Expense Type for Expense reimbursement, Payment type for Expense reimbursement.|
| `customData`  | `object` |-| Custom Data.|
| `referenceNumber` | `string` |-| The unique receipt provider or vendor identifier for this receipt. This value can also be referred to as transaction number, check number, order ID or similar. |
| `discounts` | `array`  |-| The discounts offered on this transaction.|
| `discountsTotal`| `string` |-| Total discounts.|
| `taxesTotal` | `string` |-| Total taxes.|
| `tripDetails`| `object` |-| Trip details, This includes all the trip/travel related information specific to an eReceipt category: Unique identifier of an itinerary (also know as a trip) in Concur Itinerary Service. An itinerary can contain one or more bookings from various sources, Unique identifier assigned by the ride company to a driver, Duration of the ride, Google Map url documenting the route taken, Trip starting Date/Time, Trip ending Date/Time, The class of the booking, Trip Distance (Total Distance, Unit of distance: km, mi), Source address which can be pickup location, departure etc., Destination address which can be drop location, arrival etc. |
| `programName`| `string` |-| Name of the program applied to the Receipt.|
| `networkTransactionId`| `string` |-| The network transaction id for the payment.|
| `taxes`| `array`  |-| The taxes applied on this transaction.|

### Amount
| Name          | Type     | Format | Description                                      |
|---------------|----------|--------|--------------------------------------------------|
| `total`       | `string` | -      | Transaction Amount - Total, required for EReceipt |
| `currency`    | `string` | -      | Transaction Currency Code, required for EReceipt  |
| `netAmount`   | `string` | -      | Total Net Amount                                  |
| `subTotal`    | `string` | -      | Transaction Amount - Sub Total                    |


### LineItems
| Name                      | Type     | Format | Description                                                                 |
|---------------------------|----------|--------|-----------------------------------------------------------------------------|
| `itemId`                  | `string` | -      | Line Identifier                                                             |
| `productCode`             | `string` | -      | Product Code of goods and services                                          |
| `quantity`                | `string` | -      | Item Quantity                                                               |
| `unitPrice`               | `string` | -      | Item Unit Price                                                             |
| `taxRate`                 | `string` | -      | Item Tax Rate                                                               |
| `subTotal`                | `string` | -      | Item Sub Total                                                              |
| `description`             | `string` | -      | Description, required for EReceipt                                          |
| `date`                    | `string` | -      | Date                                                                        |
| `type`                    | `string` | -      | Type                                                                        |
| `amount`                  | `string` | -      | Amount, required for EReceipt                                               |
| `taxes`                   | `array`  | -      | The taxes applied on this LineItem transaction                              |
| `discounts`               | `array`  | -      | The discounts offered on this LineItem transaction                          |
| `additionalDescription`   | `string` | -      | Additional Description                                                      |
| `semanticsCode`           | `string` | -      | Indicates the charge category for the line item. Example: 'MOVIE', 'PARKING', 'OTHER' etc. |

### Tax
| Name                | Type     | Format | Description                                                                 |
|---------------------|----------|--------|-----------------------------------------------------------------------------|
| `name`              | `string` | -      | Tax Name                                                                    |
| `amount`            | `string` | -      | Amount, required for EReceipt                                               |
| `rate`              | `number` | -      | Tax rate                                                                    |
| `rateType`          | `string` | -      | The rate type for the tax charged. For value added tax this could be Zero, Standard, Reduced, etc. |
| `authority`         | `object` | -      | The country or subdivision that charged the tax as per ISO 3166-2:2013.     |
| `authority.addressCountry` | `string` | - | Tax authority country, required for EReceipt                                |
| `authority.addressRegion`  | `string` | - | Tax authority region                                                        |


### Document Compliance

| Name                | Type     | Format | Description                          |
|---------------------|----------|--------|--------------------------------------|
| `uuid`              | `string` | -      | UUID of the Document                 |
| `formatVersion`     | `string` | -      | Version of the document format       |
| `number`            | `string` | -      | Additional identified for the document |
| `typeCode`          | `string` | -      | Document Type (only code)            |
| `type`              | `string` | -      | Codes supported by the document      |
| `verificationCode`  | `string` | -      | Verification or Certificate Code     |

### Vendor
| Name          | Type     | Format | Description                      |
|---------------|----------|--------|----------------------------------|
| `name`        | `string` | -      | Name, required for EReceipt      |
| `taxId`       | `string` | -      | Tax Id of the company/vendor     |
| `addressLine` | `string` | -      | Address Line                     |
| `city`        | `string` | -      | City                             |
| `state`       | `string` | -      | State                            |
| `country`     | `string` | -      | Country code, required for EReceipt |
| `postalCode`  | `string` | -      | Postal Code                      |
| `phone`       | `string` | -      | Phone                            |

### PaymentType
| Name                        | Type     | Format | Description                                                                 |
|-----------------------------|----------|--------|-----------------------------------------------------------------------------|
| `method`                    | `string` | -      | Payment type method, required for EReceipt                                  |
| `creditCard.type`           | `string` | -      | Name of the card type ex: American Express, MasterCard, Discover etc.       |
| `creditCard.lastFour`       | `string` | -      | Last 4 digits of credit card number if the payment method is credit card    |
| `digitalWallet`             | `string` | -      | If the payment method is digitalWallet, type of digital wallet. ex: ApplePay, PayTM, Rupay, GooglePay etc. |
### Document Data

|Name|Type|Format|Description|
|---|---|---|---|
| `representation` | `string` |-| For a given receipt document three representations can be stored in the system. Display -- a downsized image version to cater for web and mobile UI, compliance - reflects the signed or certified or verified document, original - original document that was submitted. |
| `type` | `string` |-| File type of the receipt document, e.g., PDF, JPEG, PNG, GIF, JPG.|
| `name`| `string` |-| File name of the receipt document.|
| `renderable`  | `boolean`| `true` / `false`|Boolean indicating whether the document can be rendered in UI.|
| `href`| `string` |-| Href to download the document.|
