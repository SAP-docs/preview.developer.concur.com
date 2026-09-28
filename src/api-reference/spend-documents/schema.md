---
title: Spend Documents v4 - Schema
layout: reference
---

# Schema

## Receipt

|Name|Type|Format|Description|
|---|---|---|---|
| `metadata`     | `object` |-| Receipt API schema for metadata, receipt-data, `enrichmentData` and document (& representations). |
| `receiptData`  | `object` |-| Receipt API schema for receipt data.                                                              |

## Metadata

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

## ReceiptData

|Name|Type|Format|Description|
|---|---|---|---|
| `receiveDateTime`| `string` |-| Date/Time of the document received by customer.|
| `transactionDateTime` | `string` |-| Date/Time of the transaction.|
| `amount`| `object` |-| Transaction Amount - Total, Transaction Currency Code, Total Net Amount, Transaction Amount - Sub Total.|
| `vendor`| `object` |-| Vendor details: Name, Tax Id of the company/vendor, Address Line, City, State, Country, Postal Code, Phone.|
| `comments`| `string` |-| Comments can be added here for any receipt.|
| `paymentType`| object |-| Supported Payment types based on the data on the Receipt: Payment type method (enum: Cash, Credit Card, Digital Wallet), Credit card type if the payment method is credit card (Name of the card type ex: American Express, MasterCard, Discover, etc., Last 4 digits of credit card number if the payment method is credit card), if the payment method is digitalWallet, type of digital wallet (ex: ApplePay, PayTM, Rupay, GooglePay, etc.). |
| `documentCompliance`  | `object` |-| Document Compliance information: UUID of the Document, Version of the document format, Additional identified for the document, Document Type (only code), Codes supported by the document, Verification or Certificate Code.|
| `lineItems` | `array`  |-| Array of LineItems: Line Identifier, Product Code of goods and services, Item Quantity, Item Unit Price, Item Tax Rate (optional), Item Sub Total (optional), Description, Date, Type, Amount, The taxes applied on this LineItem transaction, The discounts offered on this LineItem transaction, Additional Description, Indicates the charge category for the line item. Example: 'MOVIE', 'PARKING', 'OTHER' etc. |
| `expenseData`| `object` |-| Expense Data: Expense Type for Expense reimbursement, Payment type for Expense reimbursement.|
| `customData`  | `object` |-| Custom Data.|
| `referenceNumber` | `string` |-| The unique receipt provider or vendor identifier for this receipt. This value can also be referred to as transaction number, check number, order ID or similar. |
| `discounts` | `array`  |-| The discounts offered on this transaction.|
| `discountsTotal`| `string` |-| Total discounts.|
| `taxesTotal` | `string` |-| Total taxes.|
| `tripDetails`| `object` |-| Trip details, This includes all the trip/travel related information specific to an eReceipt category: Unique identifier of an itinerary (also know as a trip) in Concur Itinerary Service. An itinerary can contain one or more bookings from various sources, Unique identifier assigned by the ride company to a driver, Duration of the ride, Google Map url documenting the route taken, Trip starting Date/Time, Trip ending Date/Time, The class of the booking, Trip Distance (Total Distance, Unit of distance: km, mi), Source address which can be pickup location, departure etc., Destination address which can be drop location, arrival, etc. |
| `programName`| `string` |-| Name of the program applied to the Receipt.|
| `networkTransactionId`| `string` |-| The network transaction id for the payment.|
| `taxes`| `array`  |-| The taxes applied on this transaction.|

## Amount

| Name          | Type     | Format | Description                                      |
|---------------|----------|--------|--------------------------------------------------|
| `total`       | `string` | -      | Transaction Amount - Total, required for EReceipt. |
| `currency`    | `string` | -      | Transaction Currency Code, required for EReceipt.  |
| `netAmount`   | `string` | -      | Total Net Amount.                                  |
| `subTotal`    | `string` | -      | Transaction Amount - Sub Total.                    |
| `taxesTotal`  | `string` | -      | Total tax amount.                                  |
| `discountsTotal` | `string` | -   | Total discount amount.                             |


## LineItems

|Name|Type|Format|Description|
|---|---|---|---|
| `itemId`                  | `string` | -      | Line Identifier.                                                             |
| `productCode`             | `string` | -      | Product Code of goods and services.                                          |
| `quantity`                | `string` | -      | Item Quantity.                                                               |
| `unitPrice`               | `string` | -      | Item Unit Price.                                                             |
| `taxRate`                 | `string` | -      | Item Tax Rate.                                                               |
| `subTotal`                | `string` | -      | Item Sub Total.                                                              |
| `description`             | `string` | -      | Description, required for EReceipt.                                          |
| `date`                    | `string` | -      | Date.                                                                        |
| `type`                    | `string` | -      | Type.                                                                        |
| `amount`                  | `string` | -      | Amount, required for EReceipt.                                               |
| `taxes`                   | `array`  | -      | The taxes applied on this LineItem transaction.                              |
| `discounts`               | `array`  | -      | The discounts offered on this LineItem transaction.                          |
| `additionalDescription`   | `string` | -      | Additional Description.                                                      |
| `semanticsCode`           | `string` | -      | Indicates the charge category for the line item. Example: 'MOVIE', 'PARKING', 'OTHER', etc. |

## Tax

|Name|Type|Format|Description|
|---|---|---|---|
| `name`              | `string` | -      | Tax Name                                                                    |
| `amount`            | `string` | -      | Amount, required for EReceipt.                                              |
| `rate`              | `number` | -      | Tax rate.                                                                   |
| `rateType`          | `string` | -      | The rate type for the tax charged. For value added tax this could be Zero, Standard, Reduced, etc. |
| `authority`         | `object` | -      | The country or subdivision that charged the tax as per ISO 3166-2:2013.     |
| `authority.addressCountry` | `string` | - | Tax authority country, required for EReceipt.                               |
| `authority.addressRegion`  | `string` | - | Tax authority region.                                                      |


## Document Compliance

| Name                | Type     | Format | Description                          |
|---------------------|----------|--------|--------------------------------------|
| `uuid`              | `string` | -      | UUID of the Document.                 |
| `formatVersion`     | `string` | -      | Version of the document format.      |
| `number`            | `string` | -      | Additional identifier for the document. |
| `typeCode`          | `string` | -      | Document Type (only code).           |
| `type`              | `string` | -      | Codes supported by the document.      |
| `verificationCode`  | `string` | -      | Verification or Certificate Code.    |

## Vendor

| Name          | Type     | Format | Description                      |
|---------------|----------|--------|----------------------------------|
| `name`        | `string` | -      | Name, required for EReceipt.      |
| `taxId`       | `string` | -      | Tax Id of the company/vendor.     |
| `addressLine` | `string` | -      | Address Line.                     |
| `city`        | `string` | -      | City.                             |
| `state`       | `string` | -      | State.                            |
| `country`     | `string` | -      | Country code, required for EReceipt. |
| `postalCode`  | `string` | -      | Postal Code.                      |
| `phone`       | `string` | -      | Phone.                            |

## PaymentType

|Name|Type|Format|Description|
|---|---|---|---|
| `method`                    | `string` | -      | Payment type method, required for EReceipt. Supported values: `Cash`, `Credit Card`, `Digital Wallet`, `Company Paid`, `Unused Ticket`, `Unknown`. |
| `amount`                    | `string` | -      | Amount paid with this payment method.                                        |
| `creditCard.type`           | `string` | -      | Name of the card type ex: American Express, MasterCard, Discover, etc.       |
| `creditCard.lastFour`       | `string` | -      | Last 4 digits of credit card number if the payment method is credit card.   |
| `creditCard.authorizationCode` | `string` | -   | Authorization code for the credit card transaction.                          |
| `digitalWallet`             | `string` | -      | If the payment method is digitalWallet, type of digital wallet. ex: ApplePay, PayTM, Rupay, GooglePay etc. |
| `companyPaid.source`        | `string` | -      | Source of the company-paid method, e.g. `LodgeCard`.                        |
| `companyPaid.creditCard`    | `object` | -      | Credit card details when company paid via card.                              |

For eReceipt submissions, `paymentTypes` is submitted as an **array** to support multiple payment methods for a single transaction.

## Document Data

|Name|Type|Format|Description|
|---|---|---|---|
| `representation` | `string` |-| For a given receipt document three representations can be stored in the system. Display -- a downsized image version to cater for web and mobile UI, compliance - reflects the signed or certified or verified document, original - original document that was submitted. |
| `type` | `string` |-| File type of the receipt document, e.g., PDF, JPEG, PNG, GIF, JPG.|
| `name`| `string` |-| File name of the receipt document.|
| `renderable`  | `boolean`| `true` / `false`|Boolean indicating whether the document can be rendered in UI.|
| `href`| `string` |-| Href to download the document.|

## TripDetails

Used for eReceipt categories that involve travel. Contains category-specific sub-objects.

|Name|Type|Format|Description|
|---|---|---|---|
| `confirmationNumber` | `string` | - | Booking confirmation number. |
| `itineraryLocator`   | `string` | - | Unique identifier of an itinerary in Concur Itinerary Service. |
| `startDate`          | `string` | ISO 8601 | Trip start date/time. |
| `endDate`            | `string` | ISO 8601 | Trip end date/time. |
| `numberInParty`      | `integer` | - | Number of travelers in the party. |
| `guests`             | `array` | - | List of guest objects (see Guests below). |
| `source`             | `object` | - | Source/pickup address (see Address below). Required for `groundTransport`. |
| `destination`        | `object` | - | Destination/drop-off address (see Address below). |
| `rideDetails`        | `object` | - | Ground transport specific details. Present when `category` is `groundTransport`. |
| `lodgeDetails`       | `object` | - | Lodge specific details. Present when `category` is `lodge`. |
| `airDetails`         | `object` | - | Air travel specific details. Present when `category` is `air`. |
| `carRentalDetails`   | `object` | - | Car rental specific details. Present when `category` is `carRental`. |
| `railDetails`        | `object` | - | Rail travel specific details. Present when `category` is `rail`. |

## Address

Used within `TripDetails` for source and destination locations.

|Name|Type|Format|Description|
|---|---|---|---|
| `name`        | `string` | - | Location name (e.g. airport name, hotel name). |
| `addressLine` | `string` | - | Street address. |
| `city`        | `string` | - | City. |
| `state`       | `string` | - | State or province. |
| `country`     | `string` | ISO 3166 | Country code. Required for `groundTransport` source. |
| `postalCode`  | `string` | - | Postal code. |

## Guests

|Name|Type|Format|Description|
|---|---|---|---|
| `firstName`        | `string` | - | Guest first name. |
| `lastName`         | `string` | - | Guest last name. |
| `guestNameRecord`  | `string` | - | Loyalty or rewards program identifier. |

## RideDetails

Present in `tripDetails` when `category` is `groundTransport`.

|Name|Type|Format|Description|
|---|---|---|---|
| `driverNumber`   | `string` | - | Unique identifier assigned by the ride company to the driver. |
| `duration`       | `string` | ISO 8601 duration | Duration of the ride (e.g. `PT15M`). |
| `classOfService` | `string` | - | Class or tier of the ride service (e.g. `UberX`). |
| `distance`       | `object` | - | Trip distance (see Distance below). |

## LodgeDetails

Present in `tripDetails` when `category` is `lodge`.

|Name|Type|Format|Description|
|---|---|---|---|
| `hotelProperty`          | `object` | - | Hotel property address (see Address). |
| `nightsStayed`           | `string` | - | Number of nights stayed. |
| `room.roomNumber`        | `string` | - | Room number. |
| `room.roomType`          | `string` | - | Room type description (e.g. `Deluxe King`). |
| `room.ratePlanType`      | `string` | - | Rate plan type (e.g. `Corporate Rate`). |
| `room.averageDailyRoomRate` | `string` | - | Average nightly room rate. |

## AirDetails

Present in `tripDetails` when `category` is `air`.

|Name|Type|Format|Description|
|---|---|---|---|
| `bookingId`   | `string` | - | Booking identifier. |
| `airTickets`  | `array`  | - | Array of air ticket objects (see AirTicket below). |

## AirTicket

|Name|Type|Format|Description|
|---|---|---|---|
| `number`          | `string` | - | Ticket number. |
| `issueDateTime`   | `string` | ISO 8601 | Date and time ticket was issued. |
| `recordLocator`   | `string` | - | PNR record locator. |
| `pseudoCityCode`  | `string` | - | Agency pseudo city code. |
| `agencyName`      | `string` | - | Issuing agency name. |
| `passengerName`   | `string` | - | Passenger name as shown on ticket. |
| `comparisonFare`  | `string` | - | Comparison fare amount. |
| `airCoupons`      | `array`  | - | Array of flight coupon/segment objects (see AirCoupon below). |

## AirCoupon

|Name|Type|Format|Description|
|---|---|---|---|
| `couponNumber`                  | `string` | - | Coupon number. **Required**. |
| `originationAirportIATACode`    | `string` | - | IATA code of the departure airport. |
| `originationDateTime`           | `string` | ISO 8601 | Scheduled departure date/time. |
| `destinationAirportIATACode`    | `string` | - | IATA code of the arrival airport. |
| `destinationDateTime`           | `string` | ISO 8601 | Scheduled arrival date/time. |
| `flightNumber`                  | `string` | - | Flight number. |
| `operatingAirlineCode`          | `string` | - | IATA code of the operating airline. |
| `marketingCarrier`              | `string` | - | Marketing carrier code. |
| `operatingCarrier`              | `string` | - | Operating carrier code. |
| `classOfServiceCode`            | `string` | - | Booking class code (e.g. `Y`). |
| `fareBasisCode`                 | `string` | - | Fare basis code. |
| `fare`                          | `object` | - | Fare amount and currency (see Fare below). |
| `taxes`                         | `array`  | - | Taxes applied to this coupon. |
| `lineItems`                     | `array`  | - | Additional charges for this segment (e.g. baggage fees). |

## CarRentalDetails

Present in `tripDetails` when `category` is `carRental`.

|Name|Type|Format|Description|
|---|---|---|---|
| `rentalDays`              | `string` | - | Number of rental days. |
| `rentalAgreementNumber`   | `string` | - | Rental agreement number. |
| `averageDailyRate`        | `string` | - | Average daily rental rate. |
| `fuelServiceCharge`       | `string` | - | Fuel service charge amount. |
| `driverName`              | `string` | - | Primary driver name. |
| `additionalDriver`        | `boolean` | `true` / `false` | Whether an additional driver was included. |
| `odometerReadingOut`      | `number` | - | Odometer reading at pickup. |
| `odometerReadingIn`       | `number` | - | Odometer reading at return. |
| `vehicle.description`     | `string` | - | Vehicle description (e.g. `2026 Toyota Camry`). |
| `vehicle.registrationNumber` | `string` | - | Vehicle registration/license plate. |
| `vehicle.classReservedCode`  | `string` | - | ACRISS class code of the reserved vehicle. |
| `vehicle.classRentedCode`    | `string` | - | ACRISS class code of the rented vehicle. |
| `vehicle.classChargedCode`   | `string` | - | ACRISS class code used for billing. |
| `distance`                | `object` | - | Total distance driven (see Distance below). |

## RailDetails

Present in `tripDetails` when `category` is `rail`.

|Name|Type|Format|Description|
|---|---|---|---|
| `railTickets` | `array` | - | Array of rail ticket objects (see RailTicket below). |

## RailTicket

|Name|Type|Format|Description|
|---|---|---|---|
| `ticketNumber`   | `string` | - | Ticket number. |
| `recordLocator`  | `string` | - | Booking record locator. |
| `issueDateTime`  | `string` | ISO 8601 | Date and time ticket was issued. |
| `passengerName`  | `string` | - | Passenger name. |
| `fare`           | `object` | - | Fare amount and currency (see Fare below). |
| `segments`       | `array`  | - | Array of rail segment objects (see RailSegment below). |

## RailSegment

|Name|Type|Format|Description|
|---|---|---|---|
| `departureStation`   | `string` | - | Name of the departure station. |
| `departureDateTime`  | `string` | ISO 8601 | Scheduled departure date/time. |
| `arrivalStation`     | `string` | - | Name of the arrival station. |
| `arrivalDateTime`    | `string` | ISO 8601 | Scheduled arrival date/time. |
| `trainNumber`        | `string` | - | Train number. |
| `trainType`          | `string` | - | Train type (e.g. `ICE`, `TGV`). |
| `classOfServiceCode` | `string` | - | Class of service code. |
| `fare`               | `object` | - | Fare amount and currency (see Fare below). |
| `taxes`              | `array`  | - | Taxes applied to this segment. |

## Fare

Used within air and rail schemas.

|Name|Type|Format|Description|
|---|---|---|---|
| `amount`   | `string` | - | Fare amount. **Required** when fare object is present. |
| `currency` | `string` | ISO 4217 | Currency code. **Required** when fare object is present. |

## Distance

Used within ground transport and car rental schemas.

|Name|Type|Format|Description|
|---|---|---|---|
| `totalDistance` | `number` | - | Total distance. **Required** when distance object is present. |
| `unit`          | `string` | `km` or `mi` | Unit of distance. **Required** when distance object is present. |
