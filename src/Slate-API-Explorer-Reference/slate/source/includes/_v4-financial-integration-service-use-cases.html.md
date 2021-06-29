
## Use Cases-Financial Integration


* [Expense Posting Without Tax](#uepwt)
* [Simple Out-of-Pocket Cash Expense](#usopce)
 * [Simple Out-of-Pocket Cash Credit](#usopcc)
 * [Simple Personal Car Mileage Expense](#uspcme)
 * [Travel Allowances: Company Specific Rate Greater Than Government Rate](#utacprg)
* [VAT Handling](#uvath)
 * [Expense Posting With Single Tax Item](#uepsti)
* [Non-Deductible VAT](#undv)
 * [Expense Posting With Multiple Tax Items](#uepmti)
 * [Partially Deductible VAT](#updv)
 * [Foreign Expense Report Without VAT](#uferwv)
* [Itemization](#uitem)
 * [Itemized Expense Items](#uiei)
* [Cost Allocation](#ucosta)
 * [Expense With Multiple Cost Allocations](#uewmca)
* [Cash Advances](#ucasha)
 * [Issuance](#uissue)
   * [Paid Cash](#upaidc)
 * [Application](#uapp)
   * [Cash Advance Is Lower Than the Payout Amount](#ucaltp)
   * [Cash Advance Is Higher Than the Payout Amount](#ucahtp)
* [Credit Card Types](#ucct)
 * [Employee Paid Credit Card](#uepcc)
   * [Payment via Employee Vendor Account](#upeva)
   * [Payment via Credit Card Vendor Account (Split Payment)](#upccva)
   * [Credit Transaction via Credit Card Vendor Account (Split Payment)](#uctccva)
   * [Simple IBCP Corporate Card Charge With Itemization](#usiccc)
   * [IBCP With Personal Expense: No Out-of-Pocket](#uiwpen)
   * [IBCP (With Offsets) With Personal Expense: Out-of-Pocket Greater Than Personal Expense](#uiwpegt)
   * [IBCP (With Offsets) With Personal Expense: Out-of-Pocket Less Than Personal Expense](#uwpelt)
 * [Company Paid Credit Card](#ucpcc)
   * [CBCP Corporate Card Charge for Entirely Personal Expense (Net Due Company  With Consolidated or Verbose Extract)](#ucccepe)
   * [CBCP Corporate Card Charge with Itemization and Personal Expense (Net Due Employee With Consolidation)](#ucccwcons)
   * [CBCP Corporate Card Charge for Entirely Personal Expense (Net Due Company With Verbose Extract)](#ucccepev)
   * [CBCP Corporate Card Charge With Itemization and Personal Expense (Net Due Employee Without Offsets)](#ucccnoff)

### Overview

The use case examples below illustrate expense scenarios and the related posting records. Posting records will vary based on app design. The use case documentation is not meant to be a comprehensive list of all use cases and expense scenarios. However, the JSON from the Financial Integration Service will provide all the required data to support the all potential financial use cases.

#### <a name="uepwt"></a>Simple Expense Posting Without Tax

#### <a name="usopce"></a>Simple Out-of-Pocket Cash Expense

#### Description

Very simple expense report with only a few expense items without VAT, for example, US expense report.

#### Posting Example

Expense Report with one expense item: Taxi – USD 10

**Posting Record**

Account|Debit|Credit
---|---|---
Expense (Taxi)|USD 10|-
Employee Vendor|-|USD 10

[**Standard Accounting Extract Details**](./v4.financial-integration-use-cases-extract-information.html#esopce)

[**JSON Example**](json/FI-API-ReportID-B1041655B4CE4171BDAA-Example-1.1.json)

#### <a name="usopcc"></a>Simple Out-of-Pocket Cash Credit

#### Description

The user receives a USD 50 cash rebate for a hotel stay that was fully reimbursed on a previous expense report. Being a good corporate citizen the user enters a single USD 50 cash credit transaction and assigns it to the Expense Type "Hotel." The expense is a legitimate business expense, not a personal expense. It is not itemized.

#### Posting Example

**Posting Record**

Account|Debit|Credit
---|---|---
Expense (Hotel)|-|USD 50
Employee Vendor|USD 50|-

[**Standard Accounting Extract Details**](./v4.financial-integration-use-cases-extract-information.html#esopcc)

[**JSON Example**](json/FI-API-ReportID-6517F735E33A47B98D80-Example-1.2.json)

#### <a name="uspcme"></a>Simple Personal Car Mileage Expense

#### Description

The user enters a single personal car mileage transaction for a round trip to the airport of 60 miles. The expense is a legitimate business expense, not a personal expense. It is not itemized.

#### Posting Example

**Posting Record**

Account|Debit|Credit
---|---|---
Expense (Mileage)|USD 24.30|-
Employee Vendor|-|USD 24.30

[**Standard Accounting Extract Details**](./v4.financial-integration-use-cases-extract-information.html#espcme)

[**JSON Example**](json/FI-API-ReportID-473498AF26AE45A094A6-Example-1.3.json)

#### <a name="utacprg"></a>Travel Allowances – Company Specific Rate Greater Than Government Rate

#### Description

A German traveler receives meal per diems that are higher the legal rates. In this case he gets EUR 50 instead of the EUR 24 legal amount allowed for a full day. As a result the amount reimbursed to the employee over the legal daily rate is taxable to the employee.

#### Posting Example

**Posting Record**

Account|Debit|Credit
---|---|---
Expense (Meals)|EUR 50|-
Employee Vendor (non-taxable)|-|EUR 24
Employee Vendor (taxable)|-|EUR 26

[**Standard Accounting Extract Details**](./v4.financial-integration-use-cases-extract-information.html#etacsrg)

[**JSON Example**](json/FI-API-ReportID-AA45D472EC0D456D9D73-Example-1.4.json)

#### <a name="uvath"></a>VAT Handling

The SAP Concur system, when configured and applicable, will calculate the related VAT tax for a given transaction. This determination relies on the customer’s tax configuration and will vary by customer and country. The posting document will include all related VAT amounts that are calculated.

How the VAT is handled is determined based on the Tax Code customization in ERP and the related VAT use cases that the partner application supports.

#### <a name="uepsti"></a>Expense Posting With Single Tax Item

#### Description

Very simple expense report with only a few expense items with VAT, for example, German expense report.

#### Posting Example

The posting below is one example of how the expense gets recorded by the customer based on their ERP set up and requirements.

Expense Report with one expense item: Laundry – EUR 10 (including 16 % - EUR 1.60 VAT).

**Posting Record**

Account|Debit|Credit
---|---|---
Expense (amount net of tax)|EUR 8.40|-
VAT|EUR 1.60|-
Employee Vendor (gross amount)|-|EUR 10

[**JSON Example**](json/FI-API-ReportID-F071FADEA6B142DD884A-Example-2.1.json)

#### <a name="undv"></a>Non-Deductible VAT

The SAP Concur system, when configured and applicable, will calculate the related VAT tax for a given transaction. In some cases, this tax is deductible if it meets certain country-based requirements. In other cases, it is not deductible. This determination relies on the customer’s tax configuration and will vary by customer and country. The posting document will include all related VAT amounts that are calculated.

How the VAT is handled is determined based on the Tax Code customizing in ERP and the related VAT use cases that the partner application supports.

#### Description

Very simple expense report with only a few expense items with VAT, for example, German expense report.

#### Posting Example

The posting below is one example of how the expense gets recorded by the customer based on their ERP set up and requirements.

Expense Report with one expense item: Gas – EUR 100 (including 15.97% - EUR 15.97 VAT)

**Posting Record**

Account|Debit|Credit
---|---|---
Expense (amount net of tax)|EUR 84.03|-
Non-deductible VAT Expense|EUR 15.97|-
Employee Vendor (gross amount)|-|EUR 100

[**JSON Example**](json/FI-API-ReportID-641C4F998328438284A2-Example-2.2.json)

#### <a name="uepmti"></a>Expense Posting With Multiple Tax Items

#### Description

For a country like Canada, with multiple tax jurisdictions the entry may have multiple tax lines representing calculated VAT for each jurisdiction. The posting document will include all related tax lines and corresponding tax amounts.

#### Posting Example

The posting below is one example of how the expense gets recorded by the customer based on their ERP set up and requirements.

Expense Report with one expense item: Local Phone – CAD 100 with multiple tax jurisdictions (for example, tax type 1, tax type 2).

**Posting Record**

Account|Debit|Credit
---|---|---
Expense (amount net of tax)|88.50 CAD|-
Tax Type 1|CAD 4.42|-
Tax Type 2|CAD 7.08|-
Employee Vendor (gross amount)|-|CAD 100

[**JSON Example**](json/FI-API-ReportID-0EE74C75C9344DEA942F-Example-2.3.json)

####  <a name="updv"></a>Partially Deductible VAT

#### Description

In some cases it could be possible that the whole VAT amount is not deductible. This case has similar posting options as non-deductible VAT.

#### Posting Example

The posting below is one example of how the expense gets recorded by the customer based on their ERP set up and requirements.

For a hotel receipt of CAD 55 (including 11.5% - CAD 6.32 VAT) the VAT is only deductible by 50%.

**Posting Record**

Account|Debit|Credit
---|---|---
Expense (amount net of tax)|CAD 48.68|-
VAT|CAD 3.16|-
Non-deductible VAT|CAD 3.16|-
Employee Vendor (gross amount)|-|CAD 55

[**JSON Example**](json/FI-API-ReportID-FABA2A8599224AE5A6C8-Example-2.4.json)

#### <a name="uferwv"></a>Foreign Expense Report Without VAT

#### Description

The SAP Concur system, when configured and applicable, will calculate the related VAT tax for a given transaction. In some cases, this tax is deductible if it meets certain country-based requirements. In other cases, it is not deductible. This determination relies on the customer’s tax configuration and will vary by customer and country. The posting document will include all related VAT amounts that are calculated.

In case an employee from a country with VAT enters a foreign receipt and the included VAT is not claimable, the document has to be posted with a 0% VAT tax code. In SAP Concur this tax code is normally customized for the tax authority in the non-domestic code field. Again, this will vary based on the exact use case and customer’s tax configuration.

#### Posting Example

A UK employee submits an entry for a US-based training. In this case the posting document will include U.S tax included on the receipt and the posting will be handled in the ERP according to the desired posting record. It’s common that the posting record will include the tax amount as part of the overall expense (in this case Hotel) but a valid tax code with a 0% rate will also be included. This allows the customer to report on foreign taxes paid but which are not reclaimable.

The posting below is one example of how the expense gets recorded by the customer based on their ERP set up and requirements.

**Posting Record**

Account|Debit|Credit
---|---|---
Room Rate|GBP 60.24|-
Hotel Tax|GBP 20.08|-
Card Vendor|-|GBP 80.32

[**JSON Example**](json/FI-API-ReportID-2519BED4A22B43C4B8E7-Example-2.5.json)

#### <a name="uitem"></a>Itemization

#### <a name="uiei"></a>Itemized Expense Items

#### Description

John flew to New York to meet with a client and stayed one night at the Marriot. An original receipt is split into several parts, for example, lodging costs per night, room tax, and breakfast. All items should be processed separately in the Journal Section, SAE, and JSON.

#### Posting Example

For a hotel receipt of USD 325 where the costs per night and other expenses should be posted separately.

**Posting Record**

Account|Debit|Credit
---|---|---
Room Rate|USD 250|-
Room Tax|USD 50|-
Breakfast|25 USD|-
Employee Vendor|-|USD 325

[**Standard Accounting Extract Details**](./v4.financial-integration-use-cases-extract-information.html#eiei)

[**JSON Example**](json/FI-API-ReportID-0C45F960C3064ED88C39-Example-3.1.json)

#### <a name="ucosta"></a>Cost Allocation

What is cost allocation? Allocation is defined as a part of cross-charging is the ability to assign cost of an expense to multiple organizational units such as department, cost center, project code, etc.

When allocating the expense across multiple cost centers, the user needs to pick the correct code from the most granular level which may be from the Expense Entry, Journal Entry, and/or Allocation Entry depending on whether or not the customer is configured to use the allocation fields. Cost center codes should NEVER be picked up from the Employee Entry section because an employee may have to charge another department for a percentage of a transaction.

#### <a name="uewmca"></a>Expense With Multiple Cost Allocations

#### Description

Similar to the itemized expense example, however, the breakfast cost is allocated between two different cost centers.

#### Posting Example

For a hotel receipt of USD 325 where the costs per night and other expenses should be posted separately.

**Posting Record**

Account|Debit|Credit
---|---|---
Room Rate|USD 250|-
Room Tax|USD 50|-
Breakfast|25 USD|-
Employee Vendor|-|USD 325

#### Extract Details

[**Standard Accounting Extract Details**](./v4.financial-integration-use-cases-extract-information.html#eiei)

[**JSON Example**](json/FI-API-ReportID-460EFDDC98634EA9A0AD-Example-4.1.json)

> **NOTE**: The room rate and room tax is charged to the same cost center as in the itemized expense example. Only the breakfast cost is allocated 50% between two different cost centers: 0021-Bellevue1 and Top Management. The allocation section is towards the bottom of the JSON.

#### <a name="ucasha"></a>Cash Advances

#### <a name="uissue"></a>Issuance

#### <a name="upaidc"></a>Paid Cash

#### Description

An employee requests a cash advance to be paid in cash or via transfer.

#### Posting Example

Employee requests a cash advance of USD 7000 for trip to TechEd.

**Posting Record**

Account|Debit|Credit
---|---|---
Cash Advance Clearing Account|USD 7000|-
Employee Vendor|-|USD 7000

[**Standard Accounting Extract Details**](./v4.financial-integration-use-cases-extract-information.html#epc)

> **Note**: This extract example is the same as Itemized Expense Items.

[**JSON Example**](json/FI-API-CashAdvanceID-E2A086D30B88AE4683BC48ADE47B8116-Example-5.1.1.json)

#### <a name="uapp"></a>Application

#### <a name="ucaltp"></a>Cash Advance Is Lower Than the Payout Amount

#### Description

The employee enters an expense report and assigns a cash advance. This cash advance reduces the employee’s payout amount. Only the difference between the sum of the expense items paid by the employee and the cash advance will be paid to the employee.

#### Posting Example

The user has requested and received an GBP 300 cash advance. In the course of travel the user incurs the following cash expenses: GBP 245 for a rental car, GBP 60 for a business meal, and GBP 10 for parking. After returning from travel the user finds the GBP 300 cash advance has been issued via the corporate card import process. He assigns the GBP 300 cash advance to an expense report and enters the three cash expenses and submits. The expenses are not itemized. The expenses are legitimate business expenses.

**Posting Record**

Account|Debit|Credit
---|---|---
Car Rental|GBP 245|-
Meal|GBP 60|-
Parking|GBP 10|-
Cash Advance Clearing Account|GBP 300|-
Employee Vendor|-|GBP 15

#### Extract Details

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#ecailt)

[**JSON Example**](json/FI-API-CashAdvanceID-2E6DA12BB8B87D468BD666383E44033D-Example-5.2.1.json)

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#ecailtca)

[**JSON Example**](json/FI-API-ReportID-14A40453BED6493EB53F-Example-5.2.1.json)

#### <a name="ucahtp"></a>Cash Advance Is Higher Than the Payout Amount

#### Description

The employee enters an expense report and assigns a cash advance. If the cash advance is higher than the sum of the expense items paid by the employee the employee owes the difference to the company.

#### Posting Example

The user has requested and received a GBP 400 cash advance and during travel spends GBP245 on a rental car, GBP 60  on a business meal, and GBP 10 on parking. The user assigns the GBP 400 cash advance to the expense report and enters the three cash expenses and submits. The expenses are not itemized. The expenses are legitimate business expenses. Because the total of the cash advance exceeds the sum of the business expenses the net result of the expense report is that the employee owes the company the balance. The employee will write a check to the company for the balance (GBP 85) and enter a cash advance return transaction in that amount to net the expense report to zero.

**Posting Record**

Account|Debit|Credit
---|---|---
Car Rental|GBP 245|-
Meals|GBP 60|-
Parking|GBP 10|-
Cash Advance Clearing Account|-|GBP 400
Employee Vendor|GBP 85|-

#### Extract Details

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#ecaiht)

[**JSON Example**](json/FI-API-CashAdvanceID-30D6B657B6A50946AC6C2DAB537C8CD9-Example-5.2.2.json)

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#ecaihtca)

[**JSON Example**](json/FI-API-ReportID-52F40A7F26D74F1AAFFB-Example-5.2.2.json)

#### <a name="ucct"></a>Credit Card Types

* IBIP - Individual Bill – Individual payment paid by employee (employee liability).
* IBCP - Individual Bill – Company payment split payment (employee liability for personal use. Company liability for approved business expenses).
* CBCP - Company Bill – Company payment paid by company (company liability).

#### <a name="uepcc"></a>Employee Paid Credit Card

#### <a name="upeva"></a>Payment via Employee Vendor Account

#### Description

Credit card items with employee liability should be paid to the employee’s bank account like cash paid expenses. (IBIP)

#### Posting Example

Expense Report with one employee paid credit card item: Taxi - USD 10.

**Posting Record**

Account|Debit|Credit
---|---|---
Expense (Taxi)|USD 10 |-
Employee Vendor|-|USD 10

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#epveva)

[**JSON Example**](json/FI-API-ReportID-B1041655B4CE4171BDAA-Example-6.1.1.json)

#### <a name="upccva"></a>Payment via Credit Card Vendor Account (Split Payment)

#### Description

Approved business expenses should be paid to the credit card instead of the employee’s bank account. (IBCP)

#### Posting Example

Car rental was paid with IBIP card for USD 56.10.

**Posting Record**

Account|Debit|Credit
---|---|---
Expense (Car Rental)|USD 56.10|-
Credit Card Vendor|-|USD 56.10

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#epvccva)

[**JSON Example**](json/FI-API-ReportID-CDFDE0F4CACE4426A913-Example-6.1.2.json)

#### <a name="uctccva"></a>Credit Transaction via Credit Card Vendor Account (Split Payment)

#### Example

The user receives a USD 349 credit on the corporate card for an unused airline ticket. The credit transaction is displayed as a pre-populated corporate card transaction and the user selects it and submits an expense report. The expense is a legitimate business expense, not a personal expense. It is not itemized.

#### Posting

**Posting Record**

Account|Debit|Credit
---|---|---
Expense (Airfare)|-|USD 349
Credit Card Vendor|USD 349|-

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#ectvcc)

[**JSON Example**](json/FI-API-ReportID-57A29232093E4B7AADF7-Example-6.1.3.json)

#### <a name="usiccc"></a>Simple IBCP Corporate Card Charge With Itemization

#### Example

John flew to New York to meet with a client and stayed one night at the Marriot. An original receipt is split into several parts, for example, lodging costs per night, room tax, and breakfast. All items should be processed separately in the Journal Section, SAE, and JSON.

#### Posting Example

For a hotel receipt of USD 325 where the costs per night and other expenses should be posted separately.

**Posting Record**

Account|Debit|Credit
---|---|---
Room Rate|USD 250|-
Room Tax|USD 50|-|
Breakfast |USD 25|-
Employee Vendor|-|USD 325

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#esiccc)

[**JSON Example**](json/FI-API-ReportID-0C45F960C3064ED88C39-Example-6.1.4.json)

#### <a name="uiwpen"></a>IBCP With Personal Expense: No Out-of-Pocket

> **NOTE**: Personal expenses paid by an IBCP credit card will not be included in the JSON.

#### Example

John flew to New York to meet with a client and stayed one night at the Marriot. An original receipt is split into several parts, for example, lodging costs per night, room tax, and breakfast. All items should be processed separately in the Journal Section, SAE, and JSON. Since breakfast is a personal expense, it will be included in the extract but NOT in the JSON.

#### Posting Example

For a hotel receipt of USD 325 where the costs per night and other expenses should be posted separately.

**Posting Record**

Account|Debit|Credit
---|---|---
Room Rate|USD 250|-
Room Tax|USD 50|-
Breakfast (personal)|USD 25|-
Employee Vendor|-|USD 325

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#eiwpe)

[**JSON Example**](json/FI-API-ReportID-4B643D954FF64AF0B771-Example-6.1.5.json)

#### <a name="uiwpegt"></a>IBCP with Personal Expense Where Out-of-Pocket Exceeds the Personal Expense

> **NOTE**: Personal expenses paid by an IBCP credit card will not be included in the JSON when a non-offsetting payment is used because it’s not relevant to the company’s accounting record.

**Without Offsetting**

#### Example

The user assigns a pre-populated corporate card transaction to the expense report. The transaction is a Hotel expense in the amount of USD 284. The hotel expense consists of a two-night stay at USD 125 per night and the user had a USD 20 dinner after checking in and ordered an in-room movie for USD 14 that the company does not reimburse for. The expense is itemized. The expense is a legitimate business expense with the exception of the in-room movie that the user marks as a non-reimbursable expense on the expense report. The expense report also includes an out-of-pocket cash transaction for a taxi at USD 35.

#### Posting

**Posting Record**

Account|Debit|Credit
---|---|---
Room Rate|USD 125|-
Room Rate|USD 125|-
Dinner|USD 20|-
Taxi|USD 35|-
Credit Card Vendor|-|USD 270
Employee Vendor|-|USD 35

[**JSON Example**](json/FI-API-ReportID-1B25850DD8B94D5F8B2D-Example-6.1.6.json)

**With Offsetting**

When using **offsets** the amount due the employee for out-of-pocket expenses is netted (or offset) against the amount marked as personal, resulting in an entry reflecting either the final amount the employee owes the company (assumes personal exceeds out of pocket) or final amount company owes the employee (reduced by any personal amounts).

#### Posting

**Posting Record**

Account|Debit|Credit
---|---|---
Room Rate|USD 125|-
Room Rate|USD 125|-
Dinner|USD 20|-
Taxi|USD 14|-
Taxi|USD 21|-
Credit Card Vendor|-|USD 284
Employee Vendor|-|USD 21

#### Extract Details

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#eipewope)

[**JSON Example**](json/FI-API-ReportID-7E141428931340B990A3-Example-6.1.6-with-offsetting.json)

### <a name="uwpelt"></a>IBCP With Personal Expense Where Out-of-Pocket Is Less Than Personal Expense

> **NOTE**: Personal expenses paid by an IBCP credit card will not be included in the JSON when a non-offsetting payment is used because it’s not relevant to the company’s accounting record.

**Without Offsetting**

#### Example

The user assigns a pre-populated corporate card transaction to the expense report. The transaction is a Hotel expense in the amount of USD 284. The hotel expense consists of a two-night stay at USD 125 per night and the user had a USD 20 dinner after checking in and ordered an in-room movie for USD 14 that the company does not reimburse for. The expense is itemized. The expense is a legitimate business expense with the exception of the in-room movie that the user marks as a non-reimbursable expense on the expense report. The expense report also includes an out-of-pocket cash transaction for parking in the amount of USD 5.

#### Posting

**Posting Record**

Account|Debit|Credit
---|---|---
Hotel|USD 125|-
Hotel|USD 125|-
Dinner|USD 20|-
Parking|USD 5|-
**Credit Card Vendor** |-|USD 275

[**JSON Example**](json/FI-API-ReportID-EEBD898C643A40DEB4E9-Example-6.1.7.json)

**With Offsetting**

When using **offsets** the amount due the employee for out-of-pocket expenses is netted (or offset) against the amount marked as personal, resulting in an entry reflecting either the final amount the employee owes the company (assumes personal exceeds out of pocket) or final amount company owes the employee (reduced by any personal amounts).

#### Posting

**Posting Record**

Account|Debit|Credit
---|---|---
Hotel|USD 125|-
Hotel|USD 125|-
Dinner|USD 20 |-
Parking |USD 5|-
**Credit Card Vendor** |-|USD 275

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#eipewopl)

[**JSON Example**](json/FI-API-ReportID-9AAA32338A264AC1908E-Example-6.1.7-with-offsetting.json)

#### <a name="ucpcc"></a>Company Paid Credit Card

#### <a name="ucccepe"></a>CBCP Corporate Card Charge for Entirely Personal Expense (Net Due Company With Consolidated or Verbose Extract)

#### Example

The employee mistakenly uses the corporate card to pay for tolls (USD 32) and dues (USD 49) expense totaling USD 81. When the corporate card transaction feed populates the company card page the employee must deal with this transaction. The employee assigns the USD 81 corporate card transaction to an expense report, marks it as a non-reimbursable expense and submits the report for approval.

#### Posting

**Posting Record**

Account|Debit|Credit
---|---|---
**Employee Vendor** |USD 49|-
Credit Card Clearing|-|USD 49
Credit Card Clearing|USD 49|-
**Credit Card Vendor** |-|USD 49
**Employee Vendor** |USD 32|-
Credit Card Clearing|-|USD 32
Credit Card Clearing|USD 32|-
**Credit Card Vendor** |-|USD 32

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#eccccep)

[**JSON Example**](json/FI-API-ReportID-15298B27B5FC4EBC98B3-Example-6.2.1.json)

#### <a name="ucccwcons"></a>CBCP Corporate Card Charge with Itemization and Personal Expense (Net Due Employee With Consolidation)

#### Example

The user assigns a pre-populated corporate card transaction to the expense report. The transaction is a Hotel expense in the amount of USD 284. The hotel expense consists of a two-night stay at USD 125 per night and the user had a USD 20 dinner after checking in and ordered an in-room movie for USD 14 that the company does not reimburse for. The expense is itemized. The expense is a legitimate business expense with the exception of the in-room movie that the user marks as a non-reimbursable expense on the expense report. The expense report also includes an out-of-pocket cash transaction for a taxi at USD 35.

#### Posting

**Posting Record**

Expense Report:

Account|Debit|Credit
---|---|---
Room Rate|USD 125|-
Room Rate|USD 125|-
Dinner|USD 20|-
Taxi|USD 32|-
Employee Vendor (personal expense)|USD 14|-
Employee Vendor|-|USD 35
Credit Card Clearing|-|USD 284

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#eccccwc)

[**JSON Example**](json/FI-API-ReportID-815EF4FB5B4448A9B09E-Example-6.2.2.json)

#### <a name="ucccepev"></a>CBCP Corporate Card Charge for Entirely Personal Expense (Net Due Company With Verbose Extract)

#### Example

The employee mistakenly uses the corporate card to pay for a personal dinner expense of USD 300. When the corporate card transaction feed populates the company card page the employee must deal with this transaction. The employee assigns the USD 300 corporate card transaction to an expense report, marks it as a non-reimbursable expense and submits the report for approval.

#### Posting

**Posting Record**

Account|Debit|Credit
---|---|---
Employee Vendor|USD 300|-
Credit Card Clearing Account|-|USD 300
Credit Card Clearing Account|USD 300|-
Credit Card Vendor|-|USD 300

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#ecccceve)

[**JSON Example**](json/FI-API-ReportID-9616BC579E7246D8BDB9-Example-6.2.3.json)

#### <a name="ucccnoff"></a>CBCP Corporate Card Charge with Itemization and Personal Expense (Net Due Employee With No Offsets)

#### Example

The user assigns a pre-populated corporate card transaction to the expense report. The transaction is a Hotel expense in the amount of USD 284. The hotel expense consists of a two-night stay at USD 125 per night and the user had a USD 20 dinner after checking in and ordered an in-room movie for USD 14 that the company does not reimburse for. The expense is itemized. The expense is a legitimate business expense with the exception of the in-room movie that the user marks as a non-reimbursable expense on the expense report. The expense report also includes an out-of-pocket cash transaction for a taxi at USD 35.

#### Posting

**Posting Record**

Account|Debit|Credit
---|---|---
Room Rate|USD 125|-
Room Rate|USD 125|-
Dinner|USD 20|-
Taxi|USD 35|-
Employee Vendor (out of pocket)|-|USD 35
Employee Vendor (personal expense)|USD 14|-
Credit Card Vendor|-|USD 284

[**Standard Accounting Extract**](./v4.financial-integration-use-cases-extract-information.html#eccccepno)

[**JSON Example**](json/FI-API-ReportID-7F00502973D84DEFA49E-Example-6.2.4.json)
