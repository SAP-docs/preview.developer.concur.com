
## Use Cases Extract Information


* [Simple Expense Posting Without Tax](#esepwt)
  * [Simple Out-of-Pocket Cash Expense](#esopce)
  * [Simple Out-of-Pocket Cash Credit](#esopcc)
  * [Simple Personal Car Mileage Expense](#espcme)
  * [Travel Allowances: Company Specific Rate Greater Than Government Rate](#etacsrg)
* [VAT Handling](#evh)
  * [Expense Posting With Single Tax Item](#eepwst)
* [Itemization](#eitem)
  * [Itemized Expense Items](#eiei)
* [Cash Advances](#eca)
  * [Paid Cash](#epc)
  * [Cash Advance Is Lower Than the Payout Amount](#ecailt)
  * [Cash Advance Is Higher Than the Payout Amount](#ecaiht)
* [Credit Card Items](#ecct)
  * [Payment via Employee Vendor Account](#epveva)
  * [Payment via Credit Card Vendor Account (Split Payment)](#epvccva)
  * [Credit Transaction via Credit Card Vendor Account (Split Payment)](#ectvcc)
  * [Simple IBCP Corporate Card Charge With Itemization](#esiccc)
  * [IBCP With Personal Expense: No Out-of-Pocket](#eiwpe)
  * [IBCP with Personal Expense Where Out-of-Pocket Exceeds the Personal Expense](#eipewope)
  * [IBCP With Personal Expense Where Out-of-Pocket Less Than Personal Expense](#eipewopl)
  * [CBCP Corporate Card Charge for Entirely Personal Expense (Net Due Company With Consolidated or Verbose Extract)](#eccccep)
  * [CBCP Corporate Card Charge with Itemization and Personal Expense (Net Due Employee With Consolidation)](#eccccwc)
  * [CBCP Corporate Card Charge for Entirely Personal Expense (Net Due Company With Verbose Extract)](#ecccceve)
  * [CBCP Corporate Card Charge with Itemization and Personal Expense (Net Due Employee With No Offsets)](#eccccepno)

> **Note:** The extract file excerpts in this document are a reference point for those developers who have used those files for prior financial integrations. This excerpt is intended to help those developers transition from an extract file to the Financial Integration Service. This allows you to identify what you have been using from the extract file and to locate the same data in the new JSON response. If you have not used the extract file previously, the extract file excerpts can be skipped.

#### <a name="esepwt"></a>Simple Expense Posting Without Tax

#### <a name="esopce"></a>Simple Out-of-Pocket Cash Expense

The Payer in this instance is the company; the Payee is the employee. Since it is not an itemized expense the **Entry Transaction Type** is REG. Because it is a legitimate business expense the **‘Is Personal’** flag is set to ‘N’. The employee will be reimbursed for this transaction.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
8337|03/05/2016|-|Taxi|N|REG|COMPANY|EMPLOYEE|USD 10|DR|474230|-|-

#### <a name="esopcc"></a>Simple Out-of-Pocket Cash Credit

The Payer in this instance is the employee; the Payee is the company. Since it is not an itemized expense the **Entry Transaction Type** is REG. Because it is a legitimate business expense the ‘**Is Personal**’ flag is set to ‘N’. The company will be reimbursed for this transaction.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
4178|5/28/2019|Ritz Carlton|Booking Fees (Hotel)|N|REG|EMPLOYEE|COMPANY|USD -50|CR|5|-|-

#### <a name="espcme"></a>Simple Personal Car Mileage Expense

The Payer in this instance is the company; the Payee is the employee. Since it is not an itemized expense the **Entry Transaction Type** is REG. Because it is a legitimate business expense the ‘**Is Personal**’ flag is set to ‘N’. The employee will be reimbursed for this transaction.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
4173|5/23/2019|-|Mileage |N|REG|COMPANY|EMPLOYEE|USD 24.30|DR|54|-|-

#### <a name="etacsrg"></a>Travel Allowances: Company Specific Rate Greater Than Government Rate

The Payer in this instance is the company; the Payee is the employee. Since it is not an itemized expense the **Entry Transaction Type** is REG. Because it is a legitimate business expense the ‘**Is Personal**’ flag is set to ‘N’. The employee will be reimbursed for this transaction.

The report entry item will be split into 2 journal entry items: 1st item: amount up to the legal limit, 2nd item: amount above the legal limit.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
4196|5/28/2019|-|Fixed Meals|N|REG|COMPANY|EMPLOYEE|24 EUR|DR|474230|-|-
4197|5/28/2019|-|Fixed Meals|N|REG|COMPANY|EMPLOYEE|26 EUR|DR|474230|-|-

#### <a name="evh"></a>VAT Handling

#### <a name="eepwst"></a>Expense Posting With Single Tax Item

For the expense line: The Payer in this instance is the company; the Payee is the employee. Since it is not an itemized expense the **Entry Transaction Type** is REG. Because it is a legitimate business expense the ‘**Is Personal**’ flag is set to ‘N’. The employee will be reimbursed for this transaction. The **Tax Code** will also appear on this detail line along with the Tax Authority details (label and name).

**Tax data**: The appearance of the tax data in the extract is governed by the extract options to either include tax information in the same detail line as the entry on which tax is calculated, or to include it as a separate journal line. In this example tax is set to appear as a journal line. The payer is the notional tax authority with the payee as the company (as the reclaimed tax will eventually be paid by the tax authority to the company).

The **Journal Amount** on the tax detail line can be set to either list the amount eligible to reclaim on either the posted or adjusted (`reclaim_posted_amount` or `reclaim_adjusted_amount`). If ‘Adjusted’ the tax reclaim will be calculated on the approved amount (the approved amount may be lower than the claimed (posted) amount). The **Tax Source** identifies the source of the tax calculation.

The **Tax Code** can also be set to appear in the **Account Code** field on the tax detail line (instead of the account code), as shown in this example. The difference between the ‘reclaim’ fields (`reclaim_tax_amount`, `reclaim_posted_amount`, `reclaim_adjusted_amount`) and other tax amount fields (`tax_amount`, `tax_posted_amount`, etc.) is that ‘Reclaim’ indicates that these figures are subject to the reclaim percentage specified in the tax configuration.

[61] entry_id|[64] Entry Transaction Date|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[226] Tax Auth Label|[227] Tax Amount|[228] Tax Posted Amount|[229] Tax Source|[230] reclaim_tax_amount|[231] reclaim_posted_amount|[232] Tax Code|[233] reclaim_domestic
---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---
4282|6/5/2019|Laundry|N|REG|EMPLOYEE|COMPANY|8.40 EUR|DR|37|ILR|0|0|-|0|0|V1|-
4282|6/5/2019|Laundry|N|REG|ILR|COMPANY|1.60 EUR|CR|V1|ILR|1.60|1.60|SYST|1.60|1.60|V1|Y

#### <a name="eitem"></a>Itemization

#### <a name="eiei"></a>Itemized Expense Items

The Payer in this instance is the company; the Payee is the corporate card vendor. Since it is an itemized expense the **Entry Transaction Type** is CHD. Because it is a legitimate business expense the **‘Is Personal’** flag is set to ‘N’. Because this is an IBCP transaction and the payment will be made to the card vendor on behalf of the employee the employee will not receive reimbursement.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
4199|05/27/2019|All Suites International|Hotel Room Rate|N|CHD|COMPANY|IBCP CORP|USD 250|DR|474230|-|-
4200|05/27/2019|All Suites International|Hotel Tax|N|CHD|COMPANY|IBCP CORP|USD 50|DR|474230|-|-
4201|05/28/2019|All Suites International|Breakfast|N|CHD|COMPANY|IBCP CORP|USD 25|DR|474230|-|-

#### <a name="eca"></a>Cash Advances

####  <a name="epc"></a>Paid Cash

> *Issuance Extract (For reference only. Issuance is not included in the Expense Report FI Document)*

There will be one issuance record for each cash advance issued. The issuance record can be identified by the **Cash Advance Transaction Type** which will always be a ‘1’. The Payer is the Company and the Payee is the Employee. The **Journal Amount** is a DR transaction in the reimbursement currency. The **Cash Advance Amount** is the amount of the cash advance in the currency of issuance. The **Account Code** is the employee cash advance account code, which is an element of the employee profile.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
-|3/7/2019|-|-|N|-|COMPANY|EMPLOYEE|USD 7000 |DR|1009990|USD 7000|1

#### <a name="ecailt"></a>Cash Advance Is Lower Than the Payout Amount

> *Issuance Extract (For reference only. Issuance is not included in the Expense Report FI Document)*

There will be one issuance record for each cash advance issued. The issuance record can be identified by the **Cash Advance Transaction Type** which will always be a ‘1’. The Payer is the Company and the Payee is the Employee. The **Journal Amount** is a DR transaction in the reimbursement currency. The **Cash Advance Amount** is the amount of the cash advance in the currency of issuance. The **Account Code** is the employee cash advance account code, which is an element of the employee profile.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
-|6/22/2019|-|-|N|-|COMPANY|EMPLOYEE|GBP 300|DR|-|GBP 300|1

<a name="ecailtca"></a>*The application of the CA issuance*:

The application phase of this case will spawn five records in the standard extract file. Three of the records will cover the three cash out-of-pocket transactions. These three transactions are handled in the same way all cash, out-of-pocket transactions are handled (See the posting record above).

The two additional records are unique to an expense report containing a cash advance. The system will attempt to recover the cash advance amount from the employee by creating credit records against the cash transactions until the total of the cash advance is recovered. In this example, the first cash advance record (entry_id 61) credits the entire GBP 245 of its companion record (entry_id 58). That still leaves GBP 55 of the cash advance unrecovered. So another credit record (entry_id 62) in the amount of GBP 55 will be created against the next companion cash expense record (entry_id 59 and 60). At this point the GBP 300 cash advance has been recovered. The credit journal amounts have the effect of offsetting the total amount due the employee by the amount of the cash advance.

These offset records will have the following characteristics: the Payer is the employee; the Payee is the company. The debit/credit indicator will always be ‘CR’. The **Cash Advance Amount** field will always contain the total of the cash advances applied to the expense report. The **Cash Advance Transaction Type** will be a ‘2’. The employee will receive the net of the total cash expenses less the cash advance amount; in this example, GBP 15.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
58|6/21/2019|null|Rental Car|N|REG|COMPANY|EMPLOYEE|GBP 245|DR|109|-|-
59|6/21/2019|Qdoba |Dinner|N|REG|COMPANY|EMPLOYEE|GBP 60|DR|105|-|-
60|6/21/2019|Republic Parking|Parking|N|REG|COMPANY|EMPLOYEE|GBP 10|DR|130|-|-
61|6/21/2019|-|Rental Car|N|REG|EMPLOYEE|COMPANY|GBP -245|CR|1009990|GBP 300|2
62|6/21/2019|-|Dinner & Parking |N|REG|EMPLOYEE|COMPANY|GBP -55|CR|1009990|GBP 300|2

#### <a name="ecaiht"></a>Cash Advance Is Higher Than the Payout Amount

*Issuance Extract (For reference only. Issuance is not included in the Expense Report FI Document)*

There will be one issuance record for each cash advance issued. The issuance record can be identified by the **Cash Advance Transaction Type** which will always be a ‘1’. The Payer is the company and the Payee is the employee. The **Journal Amount** is a DR transaction in the reimbursement currency. The **Cash Advance Amount** is the amount of the cash advance in the currency of issuance. The **Account Code** is the employee cash advance account code, which is an element of the employee profile.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
-|6/22/2019|-|-|N|-|COMPANY|EMPLOYEE|GBP 400|DR|-|GBP 300|1

<a name="ecaihtca"></a>*The application of the CA issuance:*

The application phase of this case will spawn seven records in the standard extract file. Three of the records will cover the three cash out-of-pocket transactions. These three transactions are handled in the same way all cash, out-of-pocket transactions are handled (See the posting record above).

The four additional records are unique to an expense report containing a cash advance. The system will attempt to recover the cash advance amount from the employee by creating credit records against the cash transactions until the total of the cash advance is recovered. In this example, since the total of all expenses does not equal or exceed the cash advance amount, all three expense records have a corresponding offset credit. That still leaves the user GBP 85 short. The cash advance return record in the amount of a GBP 85 credit nets the cash advance amount to zero.

These offset records will have the following characteristics: the Payer is the employee; the Payee is the company. The debit/credit indicator will always be ‘CR’. The **Cash Advance Amount** field will always contain the total of the cash advances applied to the expense report. The **Cash Advance Transaction Type** will be a ‘2’. The employee will receive the net of the total cash expenses less the cash advance amount and in the case of a net due to company the employee will be required to submit a cash advance return to retire the balance owed; in this example, GBP 85.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
61|6/21/2019|AVIS|Rental Car|N|REG|COMPANY|EMPLOYEE|GBP 245|DR|109|-|-
62|6/21/2019|MORTONS|Business Meal|N|REG|COMPANY|EMPLOYEE|GBP 60|DR|105|-|-
63|6/21/2019|Republic Parking|Parking|N|REG|COMPANY|EMPLOYEE|GBP 10|DR|130|-|-
-|6/21/2019|AVIS|Rental Car|N|REG|EMPLOYEE|COMPANY|GBP -245|CR|1009990|GBP 400|2
-|6/21/2019|MORTONS|Business Meal|N|REG|EMPLOYEE|COMPANY|GBP -60|CR|1009990|GBP 400|2
-|6/21/2019|Republic Parking|Parking|N|REG|EMPLOYEE|COMPANY|GBP -10|CR|1009990|GBP 400|2
-|6/21/2019|-|Cash Advance Return|N|REG|EMPLOYEE|COMPANY|GBP -85|CR|1009990|GBP 400|2

#### <a name="ecct"></a>Credit Card Types

#### <a name="epveva"></a>Payment via Employee Vendor Account

The Payer in this instance is the company; the Payee is the employee. Since it is not an itemized expense the **Entry Transaction Type** is REG. Because it is a legitimate business expense the **‘Is Personal’** flag is set to ‘N’. The employee will be reimbursed for this transaction.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
8337|03/05/2016|-|Taxi|N|REG|COMPANY|EMPLOYEE|USD 10|DR|474230|-|-

#### <a name="epvccva"></a>Payment via Credit Card Vendor Account (Split Payment)

The Payer in this instance is the company; the Payee is the corporate card vendor. Since it is not an itemized expense the **Entry Transaction Type** is REG. Because it is a legitimate business expense the **‘Is Personal’** flag is set to ‘N’. Because this is an IBCP transaction and the payment will be made to the card vendor on behalf of the employee the employee will not receive reimbursement.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
36|4/7/2008|DOLLAR|Rental Car|N|REG|COMPANY|IBCP CORP|USD 56.10|DR|11|-|-

#### <a name="ectvcc"></a>Credit Transaction via Credit Card Vendor Account (Split Payment)

The Payer in this instance is the corporate card vendor; the Payee is the company. Since it is not an itemized expense the Entry Transaction Type is REG. Because it is a legitimate business expense the ‘**Is Personal**’ flag is set to ‘N’. Because this is an IBCP transaction and the payment/credit will be made to the card vendor on behalf of the employee the employee will not receive reimbursement (or be required to pay the balance).

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
4225|5/27/2019|ALASKA AIRLINE|Airfare|N|REG|COPD|COMPANY|USD -349|CR|474230|-|-

#### <a name="esiccc"></a>Simple IBCP Corporate Card Charge With Itemization

The Payer in this instance is the company; the Payee is the corporate card vendor. Since it is an itemized expense the **Entry Transaction Type** is ‘CHD’. Because it is a legitimate business expense the ‘**Is Personal**’ flag is set to ‘N’. Because this is an IBCP transaction and the payment will be made to the card vendor on behalf of the employee the employee will not receive reimbursement.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
4199|05/27/2019|All Suites International|Hotel Room Rate|N|CHD|COMPANY|IBCP CORP|USD 250|DR|474230|-|-
4200|05/27/2019|All Suites International|Hotel Tax|N|CHD|COMPANY|IBCP CORP|USD 50|DR|474230|-|-
4201|05/28/2019|All Suites International|Breakfast|N|CHD|COMPANY|IBCP CORP|USD 25|DR|474230|-|-

#### <a name="eiwpe"></a>IBCP With Personal Expense: No Out-of-Pocket

The Payer in this instance is the company; the Payee is the corporate card vendor. Since it is an itemized expense the **Entry Transaction Type** is CHD. Because this is an IBCP transaction and the payment will be made to the card vendor on behalf of the employee the employee will not receive reimbursement. Because the entry marked as personal is not a legitimate/approved business expense, payment to the card vendor is the responsibility of the employee. The amount is not reimbursable to the employee and the expense amount should not be posted with other business transactions. Therefore, the personal amount is not included in the financial posting JSON.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
4220|05/29/2019|All Suites International|Hotel Room Rate|N|CHD|COMPANY|IBCP|USD 250|DR|474230|-|-
4221|05/29/2019|All Suites International|Hotel Tax|N|CHD|COMPANY|IBCP|USD 50|DR|474230|-|-
4222|05/30/2019|All Suites International|Breakfast |Y|REG|EMPL|COMPANY|USD 25|DR|199999|-|-

#### <a name="eipewope"></a>IBCP with Personal Expense Where Out-of-Pocket Exceeds the Personal Expense

The Payer for both transactions is the company. The Payee is the corporate card vendor for the legitimate business expenses on the hotel transaction (the hotel expenses and the dinner expense). Because the reimbursement method is IBCP w/offsets, the card vendor will also be the payee for the personal expenses on the hotel transaction up to the total amount of out-of-pocket cash expense submitted on this expense report. Since the non-reimbursable in-room movie expense (USD 14) is less than the total out-of-pocket cash expenses (USD 35) owed to the employee, the company will pay the USD 14 personal expense to the card vendor and offset that amount against the USD 35 owed to the employee. Thus the employee will only receive USD 21 of the USD 35 taxi expense. In this case there were enough out-of-pocket cash expenses to offset the non-reimbursable expenses so there is a net due to the employee for this expense report.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
89|7/15/2019|MARRIOTT|Hotel|N|CHD|COMPANY|IBCP CORP|USD 125|DR|99999|-|-
90|7/16/2019|MARRIOTT|Hotel|N|CHD|COMPANY|IBCP CORP|USD 125|DR|99999|-|-
91|7/15/2019|MARRIOTT|Dinner|N|CHD|COMPANY|IBCP CORP|USD 20|DR|600|-|-
93|7/16/2019|Taxi|Local Trans|N|REG|COMPANY|EMPLOYEE|USD 21|DR|88888|-|-
93|7/16/2019|Taxi|Local Trans|N|REG|COMPANY|IBCP CORP|USD 14|DR|88888|-|-

#### <a name="eipewopl"></a>IBCP With Personal Expense Where Out-of-Pocket Is Less Than Personal Expense

The Payer for both transactions is the company. The Payee is the corporate card vendor for the legitimate business expenses on the Hotel transaction (the Hotel expenses and the Dinner expense). Because the reimbursement method is IBCP w/offsets, the card vendor will also be the payee for the personal expenses on the Hotel transaction up to the total amount of out-of-pocket cash expense submitted on this expense report. Since the non-reimbursable in-room movie expense (USD 14) is greater than the total out-of-pocket cash expenses (USD 5) owed to the employee, the company will pay only USD 5 of the USD 14 personal expense to the card vendor and offset that amount against the USD 5 owed to the employee. Thus the employee will not receive any reimbursement and will personally owe the card vendor for the difference between the USD 5 paid by the company on his behalf and the USD 14 charge, or USD 9. In this case there were not enough out-of-pocket cash expenses to offset the non-reimbursable expenses so the employee is responsible to make up the difference with the card vendor.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
95|7/15/2019|MARRIOTT|Hotel|N|CHD|COMPANY|IBCP CORP|USD 125|DR|99999|-|-
98|7/16/2019|MARRIOTT|Hotel|N|CHD|COMPANY|IBCP CORP|USD 125|DR|99999|-|-
96|7/16/2019|MARRIOTT|Dinner|N|CHD|COMPANY|IBCP CORP|USD 20|DR|600|-|-
99|7/16/2019|PARKING|Parking |N|REG|COMPANY|IBCP CORP|USD 5|DR|40|-|-

#### <a name="eccccep"></a>CBCP Corporate Card Charge for Entirely Personal Expense (Net Due Company With Consolidated or Verbose Extract)

The extract produces two records for this single transaction. One record addresses payment that must be made to the card vendor by the company. The Payer is the company. The Payee is the corporate card vendor. The amount is a debit of USD 49 to the clearing account. Since there are no employee out-of-pocket expenses on this expense report there is nothing to offset the amount that the employee owes the company. Therefore, a separate record is created to address the net due company condition. In this record the Payer is the employee and the Payee is the company. The amount is a credit of USD 49 to the clearing account. The company’s financial system must have a process for dealing with this employee receivable condition. The CT&E system will not “carry over” this net due company amount to subsequent expense reports.

The company will pay the credit card vendor for the full amount due the card and retain a corresponding employee receivable (most likely represented as a debit in the employee’s vendor account. This allows natural offsetting to occur if there are subsequent amounts due the employee posted to their vendor record in the future.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
-|6/1/2016|-|Dues|Y|REG|EMPLOYEE|COMPANY|USD -49|CR |cbcp180|-|-
-|6/1/2016|-|Dues|Y|REG|COMPANY|CBCP CORP|USD 49|DR|cbcp180|-|-
-|6/1/2016|-|Tolls|Y|REG|EMPLOYEE|COMPANY|USD -32|CR|compaid374|-|-
-|6/1/2016|-|Tolls|Y|REG|COMPANY|CBCP CORP|USD 32|DR|compaid374|-|-

#### <a name="eccccwc"></a>CBCP Corporate Card Charge with Itemization and Personal Expense (Net Due Employee With Consolidation)

The Payer for both transactions is the company. The Payee is the corporate card vendor for the full amount of the hotel transaction (the company owes the card vendor for the entire amount of the transaction, including the non-reimbursable in-room movie) and the employee for the balance of the taxi expense after the offset is taken for the in-room movie portion of the corporate card transaction. The employee would normally be reimbursed for the full USD 35 out-of-pocket taxi expense but, because a portion of the company paid corporate card transaction was not a legitimate business expense, the system reduces the amount due to the employee by the amount of the non-reimbursable expense. In this case there was enough out-of-pocket cash expenses to offset the non-reimbursable expenses so there is a net due to the employee for this expense report.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
4252|6/4/2019|MARRIOTT|Hotel|N|CHD|COMPANY|CBCP CORP|USD 125|DR|474230|-|-
4253|6/3/2019|MARRIOTT|Hotel|N|CHD|COMPANY|CBCP CORP|USD 125|DR|7271001|-|-
4254|6/3/2019|MARRIOTT|Dinner|N|CHD|COMPANY|CBCP CORP|USD 20|DR|474230|-|-
4291|5/29/2019|Taxi|Local Trans|N|REG|COMPANY|EMPLOYEE|USD 35|DR|474230|-|-
4255|6/5/2019|MARRIOTT|In-room movie|Y|REG|COMPANY|CBCP CORP|USD 14|DR|199999|-|-

#### <a name="ecccceve"></a>CBCP Corporate Card Charge for Entirely Personal Expense (Net Due Company With Verbose Extract)

The extract produces two records for this single transaction. One record addresses payment that must be made to the card vendor by the company. The Payer is the company. The Payee is the corporate card vendor. The amount is a debit of USD 300 to the clearing account. The second record is created to address the net due company condition. In this record the Payer is the employee and the Payee is the company. The amount is a credit of USD 300 to the clearing account. The company’s financial system must have a process for dealing with this employee receivable condition. The CT&E system will not “carry over” this net due company amount to subsequent expense reports.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
-|9/1/2016|Cheesecake Factory|Dinner|Y|REG|EMPLOYEE|COMPANY|USD -300|CR |-|-|-
-|9/1/2016|Cheesecake Factory|Dinner|Y|REG|COMPANY|CBCP CORP|USD 300|DR|-|-|-

#### <a name="eccccepno"></a>CBCP Corporate Card Charge with Itemization and Personal Expense (Net Due Employee With No Offsets)


The records are slightly different from the previous example where offsets are built into the extract. In this case, where there are no built-in offsets, each record is distinct and the offset will need to be calculated in the client’s bridge program. The Payer for both transactions is the company except for the personal portion of the Hotel expense. The personal amount of USD 14 is represented with two distinct records. One record addresses the amount due to the corporate card vendor to ensure that the full amount of the otel transaction (including the personal amount) is paid to the card vendor. A second offsetting record addresses the same personal amount that the employee owes back to the company. In the first record, the company is the Payer and the Payee is the corporate card vendor for the USD 14 non-reimbursable in-room movie). In the second record the employee is the Payer and the Payee is the company for the credit amount of the USD 14 non-reimbursable in-room movie. The full USD 35 out-of-pocket taxi expense is handled as a normal out-of-pocket cash expense with the company being the Payer and the employee being the Payee. The client’s bridge program will need to summarize the two records (+USD 35 taxi and -USD 14 in-room movie) to arrive at the USD 21 due to the employee.

[61] entry_id|[64] Entry Transaction Date|[70] Vendor Name|[63] Expense Type|[68] Is Personal|[62] Entry Transaction Type|[163] Payer Payment Type|[165] Payee Payment Type|[169] Journal Amount|[168] Debit Credit|[167] Account Code|[177] Cash Advance Amount|[185] Cash Advance Transaction Type
---|---|---|---|---|---|---|---|---|---|---|---|---
4336|6/6/2019|MARRIOTT|Hotel|N|CHD|COMPANY|CBCP CORP|USD 125|DR|474230|-|-
4337|6/7/2019|MARRIOTT|Hotel|N|CHD|COMPANY|CBCP CORP|USD 125|DR|474230|-|-
4338|6/8/2019|MARRIOTT|Dinner|N|CHD|COMPANY|CBCP CORP|USD 20 |DR|474230|-|-
4339|6/8/2019|MARRIOTT|In-Room Movie|Y|CHD|COMPANY|CBCP CORP|USD 14|DR|199999|-|-
4339|6/8/2019|MARRIOTT|In-Room Movie|Y|CHD|EMPLOYEE|COMPANY|USD 14|CR|199999|-|-
|4340|6/8/2019|Taxi|Local Trans|N|REG|COMPANY|EMPLOYEE|USD 35|DR|474230|-|-
