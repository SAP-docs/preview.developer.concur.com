---
title: Provisioning v
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
generator: widdershins v4.0.1

---

<h2 id="">Provisioning v</h2>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://us.api.concursolutions.com/provisioning/v4">https://us.api.concursolutions.com/provisioning/v4</a>



* API Key (ApiKeyAuth)
    - Parameter Name: **Authorization**, in: header.

<h2 id="-bulk">Bulk</h2>

#### bulk.provision.create

<a id="opIdbulk.provision.create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://us.api.concursolutions.com/provisioning/v4/Bulk \
  -H 'Content-Type: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST https://us.api.concursolutions.com/provisioning/v4/Bulk HTTP/1.1
Host: us.api.concursolutions.com
Content-Type: application/json

```

```javascript
const inputBody = '{
  "Operations": [
    {
      "data": {
        "active": true,
        "addresses": [
          {
            "country": "string",
            "formatted": "string",
            "id": "string",
            "latitude": "string",
            "locality": "string",
            "longitude": "string",
            "postalCode": "string",
            "region": "string",
            "streetAddress": "string",
            "type": "Work"
          }
        ],
        "dateOfBirth": "string",
        "displayName": "string",
        "emails": [
          {
            "dateAdded": "string",
            "dateVerified": "string",
            "display": "string",
            "id": "string",
            "notifications": true,
            "primary": true,
            "type": "Work",
            "value": "string",
            "verified": true
          }
        ],
        "emergencyContacts": [
          {
            "country": "string",
            "emails": [
              "string"
            ],
            "formatted": "string",
            "latitude": "string",
            "locality": "string",
            "longitude": "string",
            "name": "string",
            "phones": [
              "string"
            ],
            "postalCode": "string",
            "region": "string",
            "relationship": "Spouse",
            "streetAddress": "string"
          }
        ],
        "externalClient": "Concur.Travel",
        "externalId": "string",
        "gender": "Male",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "localeOverrides": {
          "preference24Hour": "h:mm AM/PM",
          "preferenceCurrencySymbolLocation": "BeforeAmount",
          "preferenceDateFormat": "mm/dd/yyyy",
          "preferenceDefaultCalView": "day",
          "preferenceDistance": "mile",
          "preferenceEndDayViewHour": 0,
          "preferenceFirstDayOfWeek": "Monday",
          "preferenceHourMinuteSeparator": ":",
          "preferenceNegativeCurrencyFormat": "-100",
          "preferenceNegativeNumberFormat": "-100",
          "preferenceNumberFormat": "1,000.00",
          "preferenceStartDayViewHour": 0
        },
        "meta": {},
        "name": {
          "familyName": "string",
          "formatted": "string",
          "givenName": "string",
          "hasNoMiddleName": true,
          "honorificPrefix": "Miss",
          "honorificSuffix": "Jr.",
          "legalName": "string",
          "middleInitial": "string",
          "middleName": "string"
        },
        "nickName": "string",
        "phoneNumbers": [
          {
            "countryCode": "string",
            "countryISDCode": "string",
            "display": "string",
            "extension": "string",
            "id": "string",
            "notifications": true,
            "operatingSystem": "Android Phone",
            "primary": true,
            "type": "Work",
            "value": "string",
            "verified": true
          }
        ],
        "preferredLanguage": "string",
        "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:User"
        ],
        "timezone": "string",
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:Payroll": {
          "adp": {
            "companyCode": "string",
            "deductionCode": "string",
            "employeeFileNumber": "string"
          }
        },
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
          "companyId": "string",
          "costCenter": "string",
          "dataRetention": {
            "isDoNotTouch": true,
            "policyIds": [
              "string"
            ]
          },
          "department": "string",
          "division": "string",
          "employeeNumber": "string",
          "entitlements": [
            "Expense"
          ],
          "jobTitle": "string",
          "manager": {
            "$ref": "string",
            "displayName": "string",
            "employeeNumber": "string",
            "value": "string"
          },
          "orgUnit": "string",
          "organization": "string",
          "self": {
            "$ref": "string",
            "displayName": "string",
            "employeeNumber": "string",
            "value": "string"
          },
          "startDate": "string",
          "terminationDate": "string"
        },
        "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
          "expense": {
            "enableExpenseAssistant": "Calendar",
            "enablePersonalCardAutoCreate": true
          },
          "identifiers": {
            "entityId": "string",
            "guuid": "string",
            "outtaskCompanyId": 0,
            "outtaskUserId": 0
          },
          "legacyRole": "User",
          "locateRoles": [
            "string"
          ],
          "privateData": {
            "expense": {},
            "expenseIt": {},
            "locate": {},
            "notifications": {},
            "travel": {}
          },
          "supplierSearchRoles": [
            "string"
          ],
          "travel": {
            "vacationBackupManagerId": "string"
          }
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:Approver": {
          "property1": [
            {
              "approver": {
                "$ref": {
                  "absolute": true,
                  "authority": "string",
                  "fragment": "string",
                  "host": "string",
                  "opaque": true,
                  "path": "string",
                  "port": 0,
                  "query": "string",
                  "rawAuthority": "string",
                  "rawFragment": "string",
                  "rawPath": "string",
                  "rawQuery": "string",
                  "rawSchemeSpecificPart": "string",
                  "rawUserInfo": "string",
                  "scheme": "string",
                  "schemeSpecificPart": "string",
                  "userInfo": "string"
                },
                "displayName": "string",
                "employeeNumber": "string",
                "value": "a860a344-d7b2-406e-828e-8d442f23f344"
              },
              "primary": true
            }
          ],
          "property2": [
            {
              "approver": {
                "$ref": {
                  "absolute": true,
                  "authority": "string",
                  "fragment": "string",
                  "host": "string",
                  "opaque": true,
                  "path": "string",
                  "port": 0,
                  "query": "string",
                  "rawAuthority": "string",
                  "rawFragment": "string",
                  "rawPath": "string",
                  "rawQuery": "string",
                  "rawSchemeSpecificPart": "string",
                  "rawUserInfo": "string",
                  "scheme": "string",
                  "schemeSpecificPart": "string",
                  "userInfo": "string"
                },
                "displayName": "string",
                "employeeNumber": "string",
                "value": "a860a344-d7b2-406e-828e-8d442f23f344"
              },
              "primary": true
            }
          ]
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:Delegate": {
          "property1": [
            {
              "canApprove": true,
              "canPrepare": true,
              "canPrepareForApproval": true,
              "canReceiveApprovalEmail": true,
              "canReceiveEmail": true,
              "canSubmit": true,
              "canSubmitTravelRequest": true,
              "canUseBi": true,
              "canViewReceipt": true,
              "delegate": {
                "$ref": {
                  "absolute": true,
                  "authority": "string",
                  "fragment": "string",
                  "host": "string",
                  "opaque": true,
                  "path": "string",
                  "port": 0,
                  "query": "string",
                  "rawAuthority": "string",
                  "rawFragment": "string",
                  "rawPath": "string",
                  "rawQuery": "string",
                  "rawSchemeSpecificPart": "string",
                  "rawUserInfo": "string",
                  "scheme": "string",
                  "schemeSpecificPart": "string",
                  "userInfo": "string"
                },
                "displayName": "string",
                "employeeNumber": "string",
                "value": "a860a344-d7b2-406e-828e-8d442f23f344"
              },
              "temporaryDelegatation": {
                "temporaryDelegationFromDate": "string",
                "temporaryDelegationToDate": "string"
              }
            }
          ],
          "property2": [
            {
              "canApprove": true,
              "canPrepare": true,
              "canPrepareForApproval": true,
              "canReceiveApprovalEmail": true,
              "canReceiveEmail": true,
              "canSubmit": true,
              "canSubmitTravelRequest": true,
              "canUseBi": true,
              "canViewReceipt": true,
              "delegate": {
                "$ref": {
                  "absolute": true,
                  "authority": "string",
                  "fragment": "string",
                  "host": "string",
                  "opaque": true,
                  "path": "string",
                  "port": 0,
                  "query": "string",
                  "rawAuthority": "string",
                  "rawFragment": "string",
                  "rawPath": "string",
                  "rawQuery": "string",
                  "rawSchemeSpecificPart": "string",
                  "rawUserInfo": "string",
                  "scheme": "string",
                  "schemeSpecificPart": "string",
                  "userInfo": "string"
                },
                "displayName": "string",
                "employeeNumber": "string",
                "value": "a860a344-d7b2-406e-828e-8d442f23f344"
              },
              "temporaryDelegatation": {
                "temporaryDelegationFromDate": "string",
                "temporaryDelegationToDate": "string"
              }
            }
          ]
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:Role": {
          "roles": [
            {
              "roleGroups": [
                [
                  "string"
                ]
              ],
              "roleName": "EXP_FB_TAX_ADMIN"
            }
          ]
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:User": {},
        "urn:ietf:params:scim:schemas:extension:spend:2.0:UserPreference": {
          "allowAutoCreateTripReport": true,
          "allowCreditCardTransArrivalEmails": true,
          "allowReceiptImageAvailEmails": true,
          "autoAddTripCardTransOnReport": true,
          "defaultReportPrintFormat": "string",
          "expenseAuditRequired": "string",
          "processorReportAccess": "string",
          "promptForCardTransactionsOnReport": true,
          "promptForReportPrintFormat": true,
          "showExpenseOnReport": "string",
          "showImagingIntro": true,
          "showInstructHelpPanel": true,
          "showTotalOnReport": true,
          "useQuickItinAsDefault": true
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:WorkflowPreference": {
          "emailAwaitApprovalOnCashAdvance": true,
          "emailAwaitApprovalOnPayment": true,
          "emailAwaitApprovalOnReport": true,
          "emailAwaitApprovalOnTravelRequest": true,
          "emailStatusChangeOnCashAdvance": true,
          "emailStatusChangeOnPayment": true,
          "emailStatusChangeOnReport": true,
          "emailStatusChangeOnTravelRequest": true,
          "promptForApproverOnPaymentSubmit": true,
          "promptForApproverOnReportSubmit": true,
          "promptForApproverOnTravelRequestSubmit": true
        },
        "urn:ietf:params:scim:schemas:extension:travel:2.0:User": {
          "groups": [
            0
          ],
          "manager": {
            "employeeNumber": "string",
            "value": "a860a344-d7b2-406e-828e-8d442f23f344"
          },
          "ruleClass": {
            "id": 0,
            "name": "string"
          }
        },
        "userName": "string"
      },
      "method": "string",
      "path": "string"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/provisioning/v4/Bulk',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://us.api.concursolutions.com/provisioning/v4/Bulk',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('https://us.api.concursolutions.com/provisioning/v4/Bulk', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://us.api.concursolutions.com/provisioning/v4/Bulk', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://us.api.concursolutions.com/provisioning/v4/Bulk");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://us.api.concursolutions.com/provisioning/v4/Bulk", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /Bulk`

*Create a bulk provisioning request.*

> Body parameter

```json
{
  "Operations": [
    {
      "data": {
        "active": true,
        "addresses": [
          {
            "country": "string",
            "formatted": "string",
            "id": "string",
            "latitude": "string",
            "locality": "string",
            "longitude": "string",
            "postalCode": "string",
            "region": "string",
            "streetAddress": "string",
            "type": "Work"
          }
        ],
        "dateOfBirth": "string",
        "displayName": "string",
        "emails": [
          {
            "dateAdded": "string",
            "dateVerified": "string",
            "display": "string",
            "id": "string",
            "notifications": true,
            "primary": true,
            "type": "Work",
            "value": "string",
            "verified": true
          }
        ],
        "emergencyContacts": [
          {
            "country": "string",
            "emails": [
              "string"
            ],
            "formatted": "string",
            "latitude": "string",
            "locality": "string",
            "longitude": "string",
            "name": "string",
            "phones": [
              "string"
            ],
            "postalCode": "string",
            "region": "string",
            "relationship": "Spouse",
            "streetAddress": "string"
          }
        ],
        "externalClient": "Concur.Travel",
        "externalId": "string",
        "gender": "Male",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "localeOverrides": {
          "preference24Hour": "h:mm AM/PM",
          "preferenceCurrencySymbolLocation": "BeforeAmount",
          "preferenceDateFormat": "mm/dd/yyyy",
          "preferenceDefaultCalView": "day",
          "preferenceDistance": "mile",
          "preferenceEndDayViewHour": 0,
          "preferenceFirstDayOfWeek": "Monday",
          "preferenceHourMinuteSeparator": ":",
          "preferenceNegativeCurrencyFormat": "-100",
          "preferenceNegativeNumberFormat": "-100",
          "preferenceNumberFormat": "1,000.00",
          "preferenceStartDayViewHour": 0
        },
        "meta": {},
        "name": {
          "familyName": "string",
          "formatted": "string",
          "givenName": "string",
          "hasNoMiddleName": true,
          "honorificPrefix": "Miss",
          "honorificSuffix": "Jr.",
          "legalName": "string",
          "middleInitial": "string",
          "middleName": "string"
        },
        "nickName": "string",
        "phoneNumbers": [
          {
            "countryCode": "string",
            "countryISDCode": "string",
            "display": "string",
            "extension": "string",
            "id": "string",
            "notifications": true,
            "operatingSystem": "Android Phone",
            "primary": true,
            "type": "Work",
            "value": "string",
            "verified": true
          }
        ],
        "preferredLanguage": "string",
        "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:User"
        ],
        "timezone": "string",
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:Payroll": {
          "adp": {
            "companyCode": "string",
            "deductionCode": "string",
            "employeeFileNumber": "string"
          }
        },
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
          "companyId": "string",
          "costCenter": "string",
          "dataRetention": {
            "isDoNotTouch": true,
            "policyIds": [
              "string"
            ]
          },
          "department": "string",
          "division": "string",
          "employeeNumber": "string",
          "entitlements": [
            "Expense"
          ],
          "jobTitle": "string",
          "manager": {
            "$ref": "string",
            "displayName": "string",
            "employeeNumber": "string",
            "value": "string"
          },
          "orgUnit": "string",
          "organization": "string",
          "self": {
            "$ref": "string",
            "displayName": "string",
            "employeeNumber": "string",
            "value": "string"
          },
          "startDate": "string",
          "terminationDate": "string"
        },
        "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
          "expense": {
            "enableExpenseAssistant": "Calendar",
            "enablePersonalCardAutoCreate": true
          },
          "identifiers": {
            "entityId": "string",
            "guuid": "string",
            "outtaskCompanyId": 0,
            "outtaskUserId": 0
          },
          "legacyRole": "User",
          "locateRoles": [
            "string"
          ],
          "privateData": {
            "expense": {},
            "expenseIt": {},
            "locate": {},
            "notifications": {},
            "travel": {}
          },
          "supplierSearchRoles": [
            "string"
          ],
          "travel": {
            "vacationBackupManagerId": "string"
          }
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:Approver": {
          "property1": [
            {
              "approver": {
                "$ref": {
                  "absolute": true,
                  "authority": "string",
                  "fragment": "string",
                  "host": "string",
                  "opaque": true,
                  "path": "string",
                  "port": 0,
                  "query": "string",
                  "rawAuthority": "string",
                  "rawFragment": "string",
                  "rawPath": "string",
                  "rawQuery": "string",
                  "rawSchemeSpecificPart": "string",
                  "rawUserInfo": "string",
                  "scheme": "string",
                  "schemeSpecificPart": "string",
                  "userInfo": "string"
                },
                "displayName": "string",
                "employeeNumber": "string",
                "value": "a860a344-d7b2-406e-828e-8d442f23f344"
              },
              "primary": true
            }
          ],
          "property2": [
            {
              "approver": {
                "$ref": {
                  "absolute": true,
                  "authority": "string",
                  "fragment": "string",
                  "host": "string",
                  "opaque": true,
                  "path": "string",
                  "port": 0,
                  "query": "string",
                  "rawAuthority": "string",
                  "rawFragment": "string",
                  "rawPath": "string",
                  "rawQuery": "string",
                  "rawSchemeSpecificPart": "string",
                  "rawUserInfo": "string",
                  "scheme": "string",
                  "schemeSpecificPart": "string",
                  "userInfo": "string"
                },
                "displayName": "string",
                "employeeNumber": "string",
                "value": "a860a344-d7b2-406e-828e-8d442f23f344"
              },
              "primary": true
            }
          ]
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:Delegate": {
          "property1": [
            {
              "canApprove": true,
              "canPrepare": true,
              "canPrepareForApproval": true,
              "canReceiveApprovalEmail": true,
              "canReceiveEmail": true,
              "canSubmit": true,
              "canSubmitTravelRequest": true,
              "canUseBi": true,
              "canViewReceipt": true,
              "delegate": {
                "$ref": {
                  "absolute": true,
                  "authority": "string",
                  "fragment": "string",
                  "host": "string",
                  "opaque": true,
                  "path": "string",
                  "port": 0,
                  "query": "string",
                  "rawAuthority": "string",
                  "rawFragment": "string",
                  "rawPath": "string",
                  "rawQuery": "string",
                  "rawSchemeSpecificPart": "string",
                  "rawUserInfo": "string",
                  "scheme": "string",
                  "schemeSpecificPart": "string",
                  "userInfo": "string"
                },
                "displayName": "string",
                "employeeNumber": "string",
                "value": "a860a344-d7b2-406e-828e-8d442f23f344"
              },
              "temporaryDelegatation": {
                "temporaryDelegationFromDate": "string",
                "temporaryDelegationToDate": "string"
              }
            }
          ],
          "property2": [
            {
              "canApprove": true,
              "canPrepare": true,
              "canPrepareForApproval": true,
              "canReceiveApprovalEmail": true,
              "canReceiveEmail": true,
              "canSubmit": true,
              "canSubmitTravelRequest": true,
              "canUseBi": true,
              "canViewReceipt": true,
              "delegate": {
                "$ref": {
                  "absolute": true,
                  "authority": "string",
                  "fragment": "string",
                  "host": "string",
                  "opaque": true,
                  "path": "string",
                  "port": 0,
                  "query": "string",
                  "rawAuthority": "string",
                  "rawFragment": "string",
                  "rawPath": "string",
                  "rawQuery": "string",
                  "rawSchemeSpecificPart": "string",
                  "rawUserInfo": "string",
                  "scheme": "string",
                  "schemeSpecificPart": "string",
                  "userInfo": "string"
                },
                "displayName": "string",
                "employeeNumber": "string",
                "value": "a860a344-d7b2-406e-828e-8d442f23f344"
              },
              "temporaryDelegatation": {
                "temporaryDelegationFromDate": "string",
                "temporaryDelegationToDate": "string"
              }
            }
          ]
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:Role": {
          "roles": [
            {
              "roleGroups": [
                [
                  "string"
                ]
              ],
              "roleName": "EXP_FB_TAX_ADMIN"
            }
          ]
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:User": {},
        "urn:ietf:params:scim:schemas:extension:spend:2.0:UserPreference": {
          "allowAutoCreateTripReport": true,
          "allowCreditCardTransArrivalEmails": true,
          "allowReceiptImageAvailEmails": true,
          "autoAddTripCardTransOnReport": true,
          "defaultReportPrintFormat": "string",
          "expenseAuditRequired": "string",
          "processorReportAccess": "string",
          "promptForCardTransactionsOnReport": true,
          "promptForReportPrintFormat": true,
          "showExpenseOnReport": "string",
          "showImagingIntro": true,
          "showInstructHelpPanel": true,
          "showTotalOnReport": true,
          "useQuickItinAsDefault": true
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:WorkflowPreference": {
          "emailAwaitApprovalOnCashAdvance": true,
          "emailAwaitApprovalOnPayment": true,
          "emailAwaitApprovalOnReport": true,
          "emailAwaitApprovalOnTravelRequest": true,
          "emailStatusChangeOnCashAdvance": true,
          "emailStatusChangeOnPayment": true,
          "emailStatusChangeOnReport": true,
          "emailStatusChangeOnTravelRequest": true,
          "promptForApproverOnPaymentSubmit": true,
          "promptForApproverOnReportSubmit": true,
          "promptForApproverOnTravelRequestSubmit": true
        },
        "urn:ietf:params:scim:schemas:extension:travel:2.0:User": {
          "groups": [
            0
          ],
          "manager": {
            "employeeNumber": "string",
            "value": "a860a344-d7b2-406e-828e-8d442f23f344"
          },
          "ruleClass": {
            "id": 0,
            "name": "string"
          }
        },
        "userName": "string"
      },
      "method": "string",
      "path": "string"
    }
  ]
}
```

<h3 id="bulk.provision.create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Request](#schemarequest)|false|none|

<h3 id="bulk.provision.create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h2 id="-events">events</h2>

#### event.hook

<a id="opIdevent.hook"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://us.api.concursolutions.com/provisioning/v4/event/hook \
  -H 'Authorization: API_KEY'

```

```http
POST https://us.api.concursolutions.com/provisioning/v4/event/hook HTTP/1.1
Host: us.api.concursolutions.com

```

```javascript

const headers = {
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/provisioning/v4/event/hook',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://us.api.concursolutions.com/provisioning/v4/event/hook',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'API_KEY'
}

r = requests.post('https://us.api.concursolutions.com/provisioning/v4/event/hook', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://us.api.concursolutions.com/provisioning/v4/event/hook', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://us.api.concursolutions.com/provisioning/v4/event/hook");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://us.api.concursolutions.com/provisioning/v4/event/hook", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /event/hook`

*Event hook for the provisioning service.*

<h3 id="event.hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h2 id="-health">health</h2>

#### health

<a id="opIdhealth"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/provisioning/v4/health \
  -H 'Authorization: API_KEY'

```

```http
GET https://us.api.concursolutions.com/provisioning/v4/health HTTP/1.1
Host: us.api.concursolutions.com

```

```javascript

const headers = {
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/provisioning/v4/health',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://us.api.concursolutions.com/provisioning/v4/health',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'API_KEY'
}

r = requests.get('https://us.api.concursolutions.com/provisioning/v4/health', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://us.api.concursolutions.com/provisioning/v4/health', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://us.api.concursolutions.com/provisioning/v4/health");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/provisioning/v4/health", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /health`

*Service health check.*

<h3 id="health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h2 id="-provisions">provisions</h2>

#### provisions.id.get

<a id="opIdprovisions.id.get"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/provisioning/v4/provisions/{id} \
  -H 'Authorization: API_KEY'

```

```http
GET https://us.api.concursolutions.com/provisioning/v4/provisions/{id} HTTP/1.1
Host: us.api.concursolutions.com

```

```javascript

const headers = {
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/provisioning/v4/provisions/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://us.api.concursolutions.com/provisioning/v4/provisions/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'API_KEY'
}

r = requests.get('https://us.api.concursolutions.com/provisioning/v4/provisions/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://us.api.concursolutions.com/provisioning/v4/provisions/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://us.api.concursolutions.com/provisioning/v4/provisions/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/provisioning/v4/provisions/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /provisions/{id}`

*Get a provisioning request.*

<h3 id="provisions.id.get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="provisions.id.get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

#### provisions.id.status.get

<a id="opIdprovisions.id.status.get"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/status \
  -H 'Authorization: API_KEY'

```

```http
GET https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/status HTTP/1.1
Host: us.api.concursolutions.com

```

```javascript

const headers = {
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/status',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/status',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'API_KEY'
}

r = requests.get('https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/status', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/status', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/status");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/status", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /provisions/{id}/status`

*Get the status of a provisioning request.*

<h3 id="provisions.id.status.get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="provisions.id.status.get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h2 id="-operations">operations</h2>

#### provisions.id.operations.get

<a id="opIdprovisions.id.operations.get"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations \
  -H 'Authorization: API_KEY'

```

```http
GET https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations HTTP/1.1
Host: us.api.concursolutions.com

```

```javascript

const headers = {
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'API_KEY'
}

r = requests.get('https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /provisions/{id}/operations`

*Get the operations for a provisioning request.*

<h3 id="provisions.id.operations.get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="provisions.id.operations.get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

#### provisions.id.operations.operation-id.get

<a id="opIdprovisions.id.operations.operation-id.get"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id} \
  -H 'Authorization: API_KEY'

```

```http
GET https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id} HTTP/1.1
Host: us.api.concursolutions.com

```

```javascript

const headers = {
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'API_KEY'
}

r = requests.get('https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /provisions/{id}/operations/{operation-id}`

*Get a provisioning operation.*

<h3 id="provisions.id.operations.operation-id.get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|operation-id|path|string|true|none|

<h3 id="provisions.id.operations.operation-id.get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

#### provisions.id.operations.operation-id.status.get

<a id="opIdprovisions.id.operations.operation-id.status.get"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}/status \
  -H 'Authorization: API_KEY'

```

```http
GET https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}/status HTTP/1.1
Host: us.api.concursolutions.com

```

```javascript

const headers = {
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}/status',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}/status',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'API_KEY'
}

r = requests.get('https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}/status', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}/status', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}/status");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/provisioning/v4/provisions/{id}/operations/{operation-id}/status", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /provisions/{id}/operations/{operation-id}/status`

*Get the status of a provisioning operation.*

<h3 id="provisions.id.operations.operation-id.status.get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|operation-id|path|string|true|none|

<h3 id="provisions.id.operations.operation-id.status.get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h2 id="-schemas">schemas</h2>

#### schema.get

<a id="opIdschema.get"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/provisioning/v4/schemas \
  -H 'Authorization: API_KEY'

```

```http
GET https://us.api.concursolutions.com/provisioning/v4/schemas HTTP/1.1
Host: us.api.concursolutions.com

```

```javascript

const headers = {
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/provisioning/v4/schemas',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://us.api.concursolutions.com/provisioning/v4/schemas',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'API_KEY'
}

r = requests.get('https://us.api.concursolutions.com/provisioning/v4/schemas', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://us.api.concursolutions.com/provisioning/v4/schemas', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://us.api.concursolutions.com/provisioning/v4/schemas");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/provisioning/v4/schemas", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /schemas`

*Get all supported schemas.*

<h3 id="schema.get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

#### schema.id.get

<a id="opIdschema.id.get"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://us.api.concursolutions.com/provisioning/v4/schemas/{id} \
  -H 'Authorization: API_KEY'

```

```http
GET https://us.api.concursolutions.com/provisioning/v4/schemas/{id} HTTP/1.1
Host: us.api.concursolutions.com

```

```javascript

const headers = {
  'Authorization':'API_KEY'
};

fetch('https://us.api.concursolutions.com/provisioning/v4/schemas/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://us.api.concursolutions.com/provisioning/v4/schemas/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'API_KEY'
}

r = requests.get('https://us.api.concursolutions.com/provisioning/v4/schemas/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://us.api.concursolutions.com/provisioning/v4/schemas/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://us.api.concursolutions.com/provisioning/v4/schemas/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://us.api.concursolutions.com/provisioning/v4/schemas/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /schemas/{id}`

*Get a schema.*

<h3 id="schema.id.get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="schema.id.get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

### Schemas

<h3 id="tocS_Adp">Adp</h3>

<a id="schemaadp"></a>
<a id="schema_Adp"></a>
<a id="tocSadp"></a>
<a id="tocsadp"></a>

```json
{
  "companyCode": "string",
  "deductionCode": "string",
  "employeeFileNumber": "string"
}

```

Adp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyCode|string|false|none|none|
|deductionCode|string|false|none|none|
|employeeFileNumber|string|false|none|none|

<h3 id="tocS_AdpExtension">AdpExtension</h3>

<a id="schemaadpextension"></a>
<a id="schema_AdpExtension"></a>
<a id="tocSadpextension"></a>
<a id="tocsadpextension"></a>

```json
{
  "adp": {
    "companyCode": "string",
    "deductionCode": "string",
    "employeeFileNumber": "string"
  }
}

```

AdpExtension

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adp|[Adp](#schemaadp)|false|none|none|

<h3 id="tocS_AttributeDefinition">AttributeDefinition</h3>

<a id="schemaattributedefinition"></a>
<a id="schema_AttributeDefinition"></a>
<a id="tocSattributedefinition"></a>
<a id="tocsattributedefinition"></a>

```json
{
  "canonicalValues": [
    "string"
  ],
  "caseExact": true,
  "description": "string",
  "multiValued": true,
  "mutability": "readOnly",
  "name": "string",
  "referenceTypes": [
    "string"
  ],
  "required": true,
  "returned": "always",
  "subAttributes": [
    {
      "canonicalValues": [
        "string"
      ],
      "caseExact": true,
      "description": "string",
      "multiValued": true,
      "mutability": "readOnly",
      "name": "string",
      "referenceTypes": [
        "string"
      ],
      "required": true,
      "returned": "always",
      "subAttributes": [
        {
          "canonicalValues": [
            "string"
          ],
          "caseExact": true,
          "description": "string",
          "multiValued": true,
          "mutability": "readOnly",
          "name": "string",
          "referenceTypes": [
            "string"
          ],
          "required": true,
          "returned": "always",
          "subAttributes": [
            {}
          ],
          "type": "string",
          "uniqueness": "none"
        }
      ],
      "type": "string",
      "uniqueness": "none"
    }
  ],
  "type": "string",
  "uniqueness": "none"
}

```

AttributeDefinition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canonicalValues|[string]|false|none|none|
|caseExact|boolean|false|none|none|
|description|string|false|none|none|
|multiValued|boolean|true|none|none|
|mutability|string|true|none|none|
|name|string|true|none|none|
|referenceTypes|[string]|false|none|none|
|required|boolean|true|none|none|
|returned|string|true|none|none|
|subAttributes|[[AttributeDefinition](#schemaattributedefinition)]|false|none|none|
|type|string|true|none|none|
|uniqueness|string|false|none|none|

###### Enumerated Values

|Property|Value|
|---|---|
|mutability|readOnly|
|mutability|readWrite|
|mutability|immutable|
|mutability|writeOnly|
|returned|always|
|returned|never|
|returned|default|
|returned|request|
|type|string|
|type|boolean|
|type|decimal|
|type|integer|
|type|dateTime|
|type|binary|
|type|reference|
|type|complex|
|uniqueness|none|
|uniqueness|server|
|uniqueness|global|

<h3 id="tocS_Email">Email</h3>

<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
{
  "dateAdded": "string",
  "dateVerified": "string",
  "display": "string",
  "id": "string",
  "notifications": true,
  "primary": true,
  "type": "Work",
  "value": "string",
  "verified": true
}

```

Email

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateAdded|string|false|none|The date and time the email was added to the user's profile.|
|dateVerified|string|false|none|The date and time the email was verified.|
|display|string|false|none|Display name for an email address.|
|id|string|false|none|Unique identifier for the email.|
|notifications|boolean|false|none|Opt-in notifications for email.|
|primary|boolean|false|none|If true, this will be the preferred mailing address or primary email address. May not appear more than once.|
|type|string|false|none|A label indicating the attribute's function. Examples: Work, Home|
|value|string|true|none|Email address value.|
|verified|boolean|false|none|If true, the email has been verified by the user.|

###### Enumerated Values

|Property|Value|
|---|---|
|type|Work|
|type|Home|
|type|Other|
|type|Other2|
|type|Work2|
|type|SMS|

<h3 id="tocS_EnterpriseUser">EnterpriseUser</h3>

<a id="schemaenterpriseuser"></a>
<a id="schema_EnterpriseUser"></a>
<a id="tocSenterpriseuser"></a>
<a id="tocsenterpriseuser"></a>

```json
{
  "companyId": "string",
  "costCenter": "string",
  "dataRetention": {
    "isDoNotTouch": true,
    "policyIds": [
      "string"
    ]
  },
  "department": "string",
  "division": "string",
  "employeeNumber": "string",
  "entitlements": [
    "Expense"
  ],
  "jobTitle": "string",
  "manager": {
    "$ref": "string",
    "displayName": "string",
    "employeeNumber": "string",
    "value": "string"
  },
  "orgUnit": "string",
  "organization": "string",
  "self": {
    "$ref": "string",
    "displayName": "string",
    "employeeNumber": "string",
    "value": "string"
  },
  "startDate": "string",
  "terminationDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyId|string|true|none|SAP Concur ID of the company.|
|costCenter|string|false|none|Employee cost center for product.|
|dataRetention|object|false|none|none|
|» isDoNotTouch|boolean|false|none|If true, the user record will be deleted according to the user's data retention policies.|
|» policyIds|[string]|false|none|User's active data retention policy IDs.|
|department|string|false|none|Department name, as supplied by the user.|
|division|string|false|none|Division name, as supplied by the user.|
|employeeNumber|string|false|none|Unique employee number.|
|entitlements|[string]|false|none|The features enabled for the user.|
|jobTitle|string|false|none|User's job title.|
|manager|object|false|none|The manager of this user.|
|» $ref|string|false|none|The URI of the SCIM resource representing the referenced user.|
|» displayName|string|false|none|The referenced user's display name.|
|» employeeNumber|string|false|none|The referenced user's employee number, if it is an Enterprise user.|
|» value|string|false|none|The referenced user's UUID.|
|orgUnit|string|false|none|Organization unit name, as supplied by the user.|
|organization|string|false|none|Company name.|
|self|object|false|none|Reference to user.|
|» $ref|string|false|none|The URI of the SCIM resource representing the referenced user.|
|» displayName|string|false|none|The referenced user's display name.|
|» employeeNumber|string|false|none|The referenced user's employee number, if it is an Enterprise user.|
|» value|string|false|none|The referenced user's UUID.|
|startDate|string|false|none|Start date. Format: YYYY-MM-DD|
|terminationDate|string|false|none|Termination date. Format: YYYY-MM-DD|

<h3 id="tocS_Name">Name</h3>

<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "familyName": "string",
  "formatted": "string",
  "givenName": "string",
  "hasNoMiddleName": true,
  "honorificPrefix": "Miss",
  "honorificSuffix": "Jr.",
  "legalName": "string",
  "middleInitial": "string",
  "middleName": "string"
}

```

Name

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|familyName|string|true|none|The family name or last name of the user.|
|formatted|string|false|none|The full name, including all middle names, title, and suffixes as appropriate. Example: Ms. Barbara J Jensen, III.|
|givenName|string|true|none|The given or first name of the user.|
|hasNoMiddleName|boolean|false|none|If true, the user does not have a middle name.|
|honorificPrefix|string|false|none|The honorific prefix(es) of the user.|
|honorificSuffix|string|false|none|The honorific suffix(es) of the user.|
|legalName|string|false|none|The legal name of the user.|
|middleInitial|string|false|none|Middle initial, if the user has a middle name.|
|middleName|string|false|none|The middle name(s) of the user.|

###### Enumerated Values

|Property|Value|
|---|---|
|honorificPrefix|Miss|
|honorificPrefix|Mr|
|honorificPrefix|Mrs|
|honorificPrefix|Ms|
|honorificPrefix|Mx|
|honorificPrefix|B.A.|
|honorificPrefix|B.Sc.|
|honorificPrefix|CPA|
|honorificPrefix|D.D.|
|honorificPrefix|D.D.S.|
|honorificPrefix|D.P.S.|
|honorificPrefix|Dr|
|honorificPrefix|Dr Mr|
|honorificPrefix|Dr Mrs|
|honorificPrefix|Dr Ms|
|honorificPrefix|Eng.|
|honorificPrefix|Ing.|
|honorificPrefix|Lady|
|honorificPrefix|Lord|
|honorificPrefix|M.D.|
|honorificPrefix|MBA|
|honorificPrefix|P.Eng.|
|honorificPrefix|Ph.D|
|honorificPrefix|Ph.D.|
|honorificPrefix|Prof|
|honorificPrefix|Prof Dr|
|honorificPrefix|Prof Dr Mr|
|honorificPrefix|Prof Dr Mrs|
|honorificPrefix|Prof Dr Ms|
|honorificPrefix|Prof Mr|
|honorificPrefix|Prof Mrs|
|honorificPrefix|Prof Ms|
|honorificPrefix|Rev|
|honorificPrefix|Sir|
|honorificSuffix|Jr.|
|honorificSuffix|Sr.|
|honorificSuffix|I|
|honorificSuffix|II|
|honorificSuffix|III|
|honorificSuffix|IV|
|honorificSuffix|V|
|honorificSuffix|VI|

<h3 id="tocS_Request">Request</h3>

<a id="schemarequest"></a>
<a id="schema_Request"></a>
<a id="tocSrequest"></a>
<a id="tocsrequest"></a>

```json
{
  "Operations": [
    {
      "data": {
        "active": true,
        "addresses": [
          {
            "country": "string",
            "formatted": "string",
            "id": "string",
            "latitude": "string",
            "locality": "string",
            "longitude": "string",
            "postalCode": "string",
            "region": "string",
            "streetAddress": "string",
            "type": "Work"
          }
        ],
        "dateOfBirth": "string",
        "displayName": "string",
        "emails": [
          {
            "dateAdded": "string",
            "dateVerified": "string",
            "display": "string",
            "id": "string",
            "notifications": true,
            "primary": true,
            "type": "Work",
            "value": "string",
            "verified": true
          }
        ],
        "emergencyContacts": [
          {
            "country": "string",
            "emails": [
              "string"
            ],
            "formatted": "string",
            "latitude": "string",
            "locality": "string",
            "longitude": "string",
            "name": "string",
            "phones": [
              "string"
            ],
            "postalCode": "string",
            "region": "string",
            "relationship": "Spouse",
            "streetAddress": "string"
          }
        ],
        "externalClient": "Concur.Travel",
        "externalId": "string",
        "gender": "Male",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "localeOverrides": {
          "preference24Hour": "h:mm AM/PM",
          "preferenceCurrencySymbolLocation": "BeforeAmount",
          "preferenceDateFormat": "mm/dd/yyyy",
          "preferenceDefaultCalView": "day",
          "preferenceDistance": "mile",
          "preferenceEndDayViewHour": 0,
          "preferenceFirstDayOfWeek": "Monday",
          "preferenceHourMinuteSeparator": ":",
          "preferenceNegativeCurrencyFormat": "-100",
          "preferenceNegativeNumberFormat": "-100",
          "preferenceNumberFormat": "1,000.00",
          "preferenceStartDayViewHour": 0
        },
        "meta": {},
        "name": {
          "familyName": "string",
          "formatted": "string",
          "givenName": "string",
          "hasNoMiddleName": true,
          "honorificPrefix": "Miss",
          "honorificSuffix": "Jr.",
          "legalName": "string",
          "middleInitial": "string",
          "middleName": "string"
        },
        "nickName": "string",
        "phoneNumbers": [
          {
            "countryCode": "string",
            "countryISDCode": "string",
            "display": "string",
            "extension": "string",
            "id": "string",
            "notifications": true,
            "operatingSystem": "Android Phone",
            "primary": true,
            "type": "Work",
            "value": "string",
            "verified": true
          }
        ],
        "preferredLanguage": "string",
        "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:User"
        ],
        "timezone": "string",
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:Payroll": {
          "adp": {
            "companyCode": "string",
            "deductionCode": "string",
            "employeeFileNumber": "string"
          }
        },
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
          "companyId": "string",
          "costCenter": "string",
          "dataRetention": {
            "isDoNotTouch": true,
            "policyIds": [
              "string"
            ]
          },
          "department": "string",
          "division": "string",
          "employeeNumber": "string",
          "entitlements": [
            "Expense"
          ],
          "jobTitle": "string",
          "manager": {
            "$ref": "string",
            "displayName": "string",
            "employeeNumber": "string",
            "value": "string"
          },
          "orgUnit": "string",
          "organization": "string",
          "self": {
            "$ref": "string",
            "displayName": "string",
            "employeeNumber": "string",
            "value": "string"
          },
          "startDate": "string",
          "terminationDate": "string"
        },
        "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
          "expense": {
            "enableExpenseAssistant": "Calendar",
            "enablePersonalCardAutoCreate": true
          },
          "identifiers": {
            "entityId": "string",
            "guuid": "string",
            "outtaskCompanyId": 0,
            "outtaskUserId": 0
          },
          "legacyRole": "User",
          "locateRoles": [
            "string"
          ],
          "privateData": {
            "expense": {},
            "expenseIt": {},
            "locate": {},
            "notifications": {},
            "travel": {}
          },
          "supplierSearchRoles": [
            "string"
          ],
          "travel": {
            "vacationBackupManagerId": "string"
          }
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:Approver": {
          "property1": [
            {
              "approver": {
                "$ref": {
                  "absolute": true,
                  "authority": "string",
                  "fragment": "string",
                  "host": "string",
                  "opaque": true,
                  "path": "string",
                  "port": 0,
                  "query": "string",
                  "rawAuthority": "string",
                  "rawFragment": "string",
                  "rawPath": "string",
                  "rawQuery": "string",
                  "rawSchemeSpecificPart": "string",
                  "rawUserInfo": "string",
                  "scheme": "string",
                  "schemeSpecificPart": "string",
                  "userInfo": "string"
                },
                "displayName": "string",
                "employeeNumber": "string",
                "value": "a860a344-d7b2-406e-828e-8d442f23f344"
              },
              "primary": true
            }
          ],
          "property2": [
            {
              "approver": {
                "$ref": {
                  "absolute": true,
                  "authority": "string",
                  "fragment": "string",
                  "host": "string",
                  "opaque": true,
                  "path": "string",
                  "port": 0,
                  "query": "string",
                  "rawAuthority": "string",
                  "rawFragment": "string",
                  "rawPath": "string",
                  "rawQuery": "string",
                  "rawSchemeSpecificPart": "string",
                  "rawUserInfo": "string",
                  "scheme": "string",
                  "schemeSpecificPart": "string",
                  "userInfo": "string"
                },
                "displayName": "string",
                "employeeNumber": "string",
                "value": "a860a344-d7b2-406e-828e-8d442f23f344"
              },
              "primary": true
            }
          ]
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:Delegate": {
          "property1": [
            {
              "canApprove": true,
              "canPrepare": true,
              "canPrepareForApproval": true,
              "canReceiveApprovalEmail": true,
              "canReceiveEmail": true,
              "canSubmit": true,
              "canSubmitTravelRequest": true,
              "canUseBi": true,
              "canViewReceipt": true,
              "delegate": {
                "$ref": {
                  "absolute": true,
                  "authority": "string",
                  "fragment": "string",
                  "host": "string",
                  "opaque": true,
                  "path": "string",
                  "port": 0,
                  "query": "string",
                  "rawAuthority": "string",
                  "rawFragment": "string",
                  "rawPath": "string",
                  "rawQuery": "string",
                  "rawSchemeSpecificPart": "string",
                  "rawUserInfo": "string",
                  "scheme": "string",
                  "schemeSpecificPart": "string",
                  "userInfo": "string"
                },
                "displayName": "string",
                "employeeNumber": "string",
                "value": "a860a344-d7b2-406e-828e-8d442f23f344"
              },
              "temporaryDelegatation": {
                "temporaryDelegationFromDate": "string",
                "temporaryDelegationToDate": "string"
              }
            }
          ],
          "property2": [
            {
              "canApprove": true,
              "canPrepare": true,
              "canPrepareForApproval": true,
              "canReceiveApprovalEmail": true,
              "canReceiveEmail": true,
              "canSubmit": true,
              "canSubmitTravelRequest": true,
              "canUseBi": true,
              "canViewReceipt": true,
              "delegate": {
                "$ref": {
                  "absolute": true,
                  "authority": "string",
                  "fragment": "string",
                  "host": "string",
                  "opaque": true,
                  "path": "string",
                  "port": 0,
                  "query": "string",
                  "rawAuthority": "string",
                  "rawFragment": "string",
                  "rawPath": "string",
                  "rawQuery": "string",
                  "rawSchemeSpecificPart": "string",
                  "rawUserInfo": "string",
                  "scheme": "string",
                  "schemeSpecificPart": "string",
                  "userInfo": "string"
                },
                "displayName": "string",
                "employeeNumber": "string",
                "value": "a860a344-d7b2-406e-828e-8d442f23f344"
              },
              "temporaryDelegatation": {
                "temporaryDelegationFromDate": "string",
                "temporaryDelegationToDate": "string"
              }
            }
          ]
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:Role": {
          "roles": [
            {
              "roleGroups": [
                [
                  "string"
                ]
              ],
              "roleName": "EXP_FB_TAX_ADMIN"
            }
          ]
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:User": {},
        "urn:ietf:params:scim:schemas:extension:spend:2.0:UserPreference": {
          "allowAutoCreateTripReport": true,
          "allowCreditCardTransArrivalEmails": true,
          "allowReceiptImageAvailEmails": true,
          "autoAddTripCardTransOnReport": true,
          "defaultReportPrintFormat": "string",
          "expenseAuditRequired": "string",
          "processorReportAccess": "string",
          "promptForCardTransactionsOnReport": true,
          "promptForReportPrintFormat": true,
          "showExpenseOnReport": "string",
          "showImagingIntro": true,
          "showInstructHelpPanel": true,
          "showTotalOnReport": true,
          "useQuickItinAsDefault": true
        },
        "urn:ietf:params:scim:schemas:extension:spend:2.0:WorkflowPreference": {
          "emailAwaitApprovalOnCashAdvance": true,
          "emailAwaitApprovalOnPayment": true,
          "emailAwaitApprovalOnReport": true,
          "emailAwaitApprovalOnTravelRequest": true,
          "emailStatusChangeOnCashAdvance": true,
          "emailStatusChangeOnPayment": true,
          "emailStatusChangeOnReport": true,
          "emailStatusChangeOnTravelRequest": true,
          "promptForApproverOnPaymentSubmit": true,
          "promptForApproverOnReportSubmit": true,
          "promptForApproverOnTravelRequestSubmit": true
        },
        "urn:ietf:params:scim:schemas:extension:travel:2.0:User": {
          "groups": [
            0
          ],
          "manager": {
            "employeeNumber": "string",
            "value": "a860a344-d7b2-406e-828e-8d442f23f344"
          },
          "ruleClass": {
            "id": 0,
            "name": "string"
          }
        },
        "userName": "string"
      },
      "method": "string",
      "path": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Operations|[object]|false|none|none|
|» data|[User](#schemauser)|false|none|none|
|» method|string|false|none|none|
|» path|string|false|none|none|

<h3 id="tocS_Role">Role</h3>

<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "roleGroups": [
    [
      "string"
    ]
  ],
  "roleName": "EXP_FB_TAX_ADMIN"
}

```

Role

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleGroups|[array]|false|none|none|
|roleName|string|false|none|none|

###### Enumerated Values

|Property|Value|
|---|---|
|roleName|EXP_FB_TAX_ADMIN|
|roleName|EXP_USER|
|roleName|EXP_TRAVEL_AND_EXPENSE_USER|
|roleName|EXP_PROXY_USER|
|roleName|EXP_APPROVER|
|roleName|EXP_CONFIG_ADMIN|
|roleName|EXP_CONFIG_ADMIN_CLIENT|
|roleName|EXP_CONFIG_ADMIN_RO|
|roleName|EXP_EMPLOYEE_ADMIN|
|roleName|EXP_EXPENSETYPE_ADMIN|
|roleName|EXP_CARD_ADMIN|
|roleName|EXP_CASHADVANCE_ADMIN|
|roleName|EXP_EXTRACT_ADMIN|
|roleName|EXP_PROCESSOR|
|roleName|EXP_PROCESSOR_AUDIT|
|roleName|EXP_PROCESSOR_ADMIN|
|roleName|EXP_PROCESSOR_CR|
|roleName|EXP_ACCOUNTCODE_ADMIN|
|roleName|EXP_ATTENDEE_ADMIN|
|roleName|EXP_ATTENDEE_ADMIN_RO|
|roleName|EXP_CONCUR_AUDITOR|
|roleName|EXP_REIMBURSEMENT_AUDITOR|
|roleName|EXP_REIMBURSEMENT_APPROVER|
|roleName|EXP_FIND_ATTENDEES_USER|
|roleName|EXP_PCARD_ADMIN|
|roleName|EXP_RECEIPT_PROCESSOR|
|roleName|EXP_AUTH_REQUEST_ADMIN|
|roleName|EXP_AUTH_REQUEST_APPROVER|
|roleName|STATEMENT_PROCESSOR_AUDITOR|
|roleName|STATEMENT_PROCESSOR|
|roleName|STATEMENT_PROCESSOR_ADMIN|
|roleName|STATEMENT_APPROVER|
|roleName|STATEMENT_USER|
|roleName|TRAVEL_USER|
|roleName|INV_FULL_USER|
|roleName|INV_PILOT_USER|
|roleName|INV_PURCH_RECEIVER|
|roleName|INV_EMPLOYEE_ADMIN|
|roleName|INV_IMAGE_PROCESSOR|
|roleName|INV_RECEIPT_PROCESSOR|
|roleName|INV_PMT_MANAGER|
|roleName|INV_PURCH_USER|
|roleName|INV_APPROVER|
|roleName|INV_AP_USER|
|roleName|INV_PROCESSOR_AUDIT|
|roleName|INV_PMT_USER|
|roleName|INV_PROCESSOR|
|roleName|INV_PROCESSOR_MANAGER|
|roleName|INV_CONFIG_ADMIN|
|roleName|INV_CONFIG_ADMIN_RO|
|roleName|INV_IC_VERIFIER|
|roleName|INV_PROXY_USER|
|roleName|INV_TAX_ADMIN|
|roleName|INV_VENDOR_ADMIN|
|roleName|INV_PURCH_ORDER_PROCESSOR_AUDIT|
|roleName|INV_PURCH_ORDER_PROCESSOR|
|roleName|INV_PURCH_REQ_APPROVER|
|roleName|INV_PURCH_REQ_PROCESSOR_AUDIT|
|roleName|INV_PURCH_REQ_PROCESSOR|
|roleName|INV_PURCH_REQ_USER|
|roleName|INV_PURCH_REQ_PROXY_USER|
|roleName|INV_RECEIPT_USER|
|roleName|REQ_CONFIG_ADMIN|
|roleName|REQ_CONFIG_ADMIN_RO|
|roleName|REQ_EVENT_ADMIN|
|roleName|REQ_APPROVER|
|roleName|REQ_PROCESSOR|
|roleName|REQ_PROCESSOR_ADMIN|
|roleName|REQ_PROCESSOR_AUDIT|
|roleName|REQ_PROXY_USER|
|roleName|REQ_USER|
|roleName|REQ_RISK_ADMIN|
|roleName|BUDGET_REPORTING_USER|
|roleName|REPORTING_CONFIG_ADMIN|
|roleName|REPORTING_HIST_DATA_USER|
|roleName|REPORTING_DASHBOARD_USER|
|roleName|REPORTING_EMPLOYEE_ADMIN|
|roleName|REPORTING_CAS_ANALYST|
|roleName|REPORTING_BUSINESS_AUTHOR|
|roleName|REPORTING_CONSUMER|
|roleName|REPORTING_PRO_AUTHOR|
|roleName|SHD_APP_CENTER_ADMIN|
|roleName|SHD_AUTHORIZED_APPROVER|
|roleName|SHD_BUDGET_APPROVER|
|roleName|SHD_BILLING_ATTRIBUTES_USER|
|roleName|SHD_BUDGET_ADMIN|
|roleName|SHD_BUDGET_OWNER|
|roleName|SHD_BUDGET_VIEWER|
|roleName|SHD_COST_OBJECT_APPROVER|
|roleName|SHD_DATA_RETENTION_ADMIN|
|roleName|SHD_COMPANY_INFO_ADMIN|
|roleName|SHD_EMPLOYEE_ADMIN|
|roleName|SHD_EMPLOYEE_ADMIN_RO|
|roleName|SHD_IMPORT_EXTRACT_ADMIN|
|roleName|SHD_IMPORT_EXTRACT_ADMIN_RO|
|roleName|SHD_PASSWORD_ADMIN|
|roleName|SHD_ROLE_ADMIN|
|roleName|SHD_ROLE_BUILDER|
|roleName|SHD_CONFIG_ADMIN|
|roleName|SHD_CONFIG_ADMIN_RO|
|roleName|SHD_TAX_ADMIN|
|roleName|SHD_TAX_ADMIN_RO|
|roleName|SHD_TRAINING_ADMIN|
|roleName|SHD_WEB_SERVICES_ADMIN|

<h3 id="tocS_SpendApprover">SpendApprover</h3>

<a id="schemaspendapprover"></a>
<a id="schema_SpendApprover"></a>
<a id="tocSspendapprover"></a>
<a id="tocsspendapprover"></a>

```json
{
  "approver": {
    "$ref": {
      "absolute": true,
      "authority": "string",
      "fragment": "string",
      "host": "string",
      "opaque": true,
      "path": "string",
      "port": 0,
      "query": "string",
      "rawAuthority": "string",
      "rawFragment": "string",
      "rawPath": "string",
      "rawQuery": "string",
      "rawSchemeSpecificPart": "string",
      "rawUserInfo": "string",
      "scheme": "string",
      "schemeSpecificPart": "string",
      "userInfo": "string"
    },
    "displayName": "string",
    "employeeNumber": "string",
    "value": "a860a344-d7b2-406e-828e-8d442f23f344"
  },
  "primary": true
}

```

SpendApprover

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approver|[UserReference](#schemauserreference)|false|none|none|
|primary|boolean|false|none|none|

<h3 id="tocS_SpendDelegate">SpendDelegate</h3>

<a id="schemaspenddelegate"></a>
<a id="schema_SpendDelegate"></a>
<a id="tocSspenddelegate"></a>
<a id="tocsspenddelegate"></a>

```json
{
  "canApprove": true,
  "canPrepare": true,
  "canPrepareForApproval": true,
  "canReceiveApprovalEmail": true,
  "canReceiveEmail": true,
  "canSubmit": true,
  "canSubmitTravelRequest": true,
  "canUseBi": true,
  "canViewReceipt": true,
  "delegate": {
    "$ref": {
      "absolute": true,
      "authority": "string",
      "fragment": "string",
      "host": "string",
      "opaque": true,
      "path": "string",
      "port": 0,
      "query": "string",
      "rawAuthority": "string",
      "rawFragment": "string",
      "rawPath": "string",
      "rawQuery": "string",
      "rawSchemeSpecificPart": "string",
      "rawUserInfo": "string",
      "scheme": "string",
      "schemeSpecificPart": "string",
      "userInfo": "string"
    },
    "displayName": "string",
    "employeeNumber": "string",
    "value": "a860a344-d7b2-406e-828e-8d442f23f344"
  },
  "temporaryDelegatation": {
    "temporaryDelegationFromDate": "string",
    "temporaryDelegationToDate": "string"
  }
}

```

SpendDelegate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canApprove|boolean|false|none|none|
|canPrepare|boolean|false|none|none|
|canPrepareForApproval|boolean|false|none|none|
|canReceiveApprovalEmail|boolean|false|none|none|
|canReceiveEmail|boolean|false|none|none|
|canSubmit|boolean|false|none|none|
|canSubmitTravelRequest|boolean|false|none|none|
|canUseBi|boolean|false|none|none|
|canViewReceipt|boolean|false|none|none|
|delegate|[UserReference](#schemauserreference)|false|none|none|
|temporaryDelegatation|[TemporaryDelegate](#schematemporarydelegate)|false|none|none|

<h3 id="tocS_SpendRole">SpendRole</h3>

<a id="schemaspendrole"></a>
<a id="schema_SpendRole"></a>
<a id="tocSspendrole"></a>
<a id="tocsspendrole"></a>

```json
{
  "roles": [
    {
      "roleGroups": [
        [
          "string"
        ]
      ],
      "roleName": "EXP_FB_TAX_ADMIN"
    }
  ]
}

```

SpendRole

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[[Role](#schemarole)]|false|none|none|

<h3 id="tocS_SpendUser">SpendUser</h3>

<a id="schemaspenduser"></a>
<a id="schema_SpendUser"></a>
<a id="tocSspenduser"></a>
<a id="tocsspenduser"></a>

```json
{}

```

SpendUser

### Properties

*None*

<h3 id="tocS_TemporaryDelegate">TemporaryDelegate</h3>

<a id="schematemporarydelegate"></a>
<a id="schema_TemporaryDelegate"></a>
<a id="tocStemporarydelegate"></a>
<a id="tocstemporarydelegate"></a>

```json
{
  "temporaryDelegationFromDate": "string",
  "temporaryDelegationToDate": "string"
}

```

TemporaryDelegate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temporaryDelegationFromDate|string|false|none|none|
|temporaryDelegationToDate|string|false|none|none|

<h3 id="tocS_TravelUser">TravelUser</h3>

<a id="schematraveluser"></a>
<a id="schema_TravelUser"></a>
<a id="tocStraveluser"></a>
<a id="tocstraveluser"></a>

```json
{
  "groups": [
    0
  ],
  "manager": {
    "employeeNumber": "string",
    "value": "a860a344-d7b2-406e-828e-8d442f23f344"
  },
  "ruleClass": {
    "id": 0,
    "name": "string"
  }
}

```

TravelUser

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[integer]|false|none|none|
|manager|object|false|none|none|
|» employeeNumber|string|false|none|none|
|» value|string(uuid)|false|none|none|
|ruleClass|object|true|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|

<h3 id="tocS_URI">URI</h3>

<a id="schemauri"></a>
<a id="schema_URI"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
{
  "absolute": true,
  "authority": "string",
  "fragment": "string",
  "host": "string",
  "opaque": true,
  "path": "string",
  "port": 0,
  "query": "string",
  "rawAuthority": "string",
  "rawFragment": "string",
  "rawPath": "string",
  "rawQuery": "string",
  "rawSchemeSpecificPart": "string",
  "rawUserInfo": "string",
  "scheme": "string",
  "schemeSpecificPart": "string",
  "userInfo": "string"
}

```

URI

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absolute|boolean|false|none|none|
|authority|string|false|none|none|
|fragment|string|false|none|none|
|host|string|false|none|none|
|opaque|boolean|false|none|none|
|path|string|false|none|none|
|port|integer(int32)|false|none|none|
|query|string|false|none|none|
|rawAuthority|string|false|none|none|
|rawFragment|string|false|none|none|
|rawPath|string|false|none|none|
|rawQuery|string|false|none|none|
|rawSchemeSpecificPart|string|false|none|none|
|rawUserInfo|string|false|none|none|
|scheme|string|false|none|none|
|schemeSpecificPart|string|false|none|none|
|userInfo|string|false|none|none|

<h3 id="tocS_User">User</h3>

<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "active": true,
  "addresses": [
    {
      "country": "string",
      "formatted": "string",
      "id": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "postalCode": "string",
      "region": "string",
      "streetAddress": "string",
      "type": "Work"
    }
  ],
  "dateOfBirth": "string",
  "displayName": "string",
  "emails": [
    {
      "dateAdded": "string",
      "dateVerified": "string",
      "display": "string",
      "id": "string",
      "notifications": true,
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "emergencyContacts": [
    {
      "country": "string",
      "emails": [
        "string"
      ],
      "formatted": "string",
      "latitude": "string",
      "locality": "string",
      "longitude": "string",
      "name": "string",
      "phones": [
        "string"
      ],
      "postalCode": "string",
      "region": "string",
      "relationship": "Spouse",
      "streetAddress": "string"
    }
  ],
  "externalClient": "Concur.Travel",
  "externalId": "string",
  "gender": "Male",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "localeOverrides": {
    "preference24Hour": "h:mm AM/PM",
    "preferenceCurrencySymbolLocation": "BeforeAmount",
    "preferenceDateFormat": "mm/dd/yyyy",
    "preferenceDefaultCalView": "day",
    "preferenceDistance": "mile",
    "preferenceEndDayViewHour": 0,
    "preferenceFirstDayOfWeek": "Monday",
    "preferenceHourMinuteSeparator": ":",
    "preferenceNegativeCurrencyFormat": "-100",
    "preferenceNegativeNumberFormat": "-100",
    "preferenceNumberFormat": "1,000.00",
    "preferenceStartDayViewHour": 0
  },
  "meta": {},
  "name": {
    "familyName": "string",
    "formatted": "string",
    "givenName": "string",
    "hasNoMiddleName": true,
    "honorificPrefix": "Miss",
    "honorificSuffix": "Jr.",
    "legalName": "string",
    "middleInitial": "string",
    "middleName": "string"
  },
  "nickName": "string",
  "phoneNumbers": [
    {
      "countryCode": "string",
      "countryISDCode": "string",
      "display": "string",
      "extension": "string",
      "id": "string",
      "notifications": true,
      "operatingSystem": "Android Phone",
      "primary": true,
      "type": "Work",
      "value": "string",
      "verified": true
    }
  ],
  "preferredLanguage": "string",
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User"
  ],
  "timezone": "string",
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:Payroll": {
    "adp": {
      "companyCode": "string",
      "deductionCode": "string",
      "employeeFileNumber": "string"
    }
  },
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "companyId": "string",
    "costCenter": "string",
    "dataRetention": {
      "isDoNotTouch": true,
      "policyIds": [
        "string"
      ]
    },
    "department": "string",
    "division": "string",
    "employeeNumber": "string",
    "entitlements": [
      "Expense"
    ],
    "jobTitle": "string",
    "manager": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "orgUnit": "string",
    "organization": "string",
    "self": {
      "$ref": "string",
      "displayName": "string",
      "employeeNumber": "string",
      "value": "string"
    },
    "startDate": "string",
    "terminationDate": "string"
  },
  "urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User": {
    "expense": {
      "enableExpenseAssistant": "Calendar",
      "enablePersonalCardAutoCreate": true
    },
    "identifiers": {
      "entityId": "string",
      "guuid": "string",
      "outtaskCompanyId": 0,
      "outtaskUserId": 0
    },
    "legacyRole": "User",
    "locateRoles": [
      "string"
    ],
    "privateData": {
      "expense": {},
      "expenseIt": {},
      "locate": {},
      "notifications": {},
      "travel": {}
    },
    "supplierSearchRoles": [
      "string"
    ],
    "travel": {
      "vacationBackupManagerId": "string"
    }
  },
  "urn:ietf:params:scim:schemas:extension:spend:2.0:Approver": {
    "property1": [
      {
        "approver": {
          "$ref": {
            "absolute": true,
            "authority": "string",
            "fragment": "string",
            "host": "string",
            "opaque": true,
            "path": "string",
            "port": 0,
            "query": "string",
            "rawAuthority": "string",
            "rawFragment": "string",
            "rawPath": "string",
            "rawQuery": "string",
            "rawSchemeSpecificPart": "string",
            "rawUserInfo": "string",
            "scheme": "string",
            "schemeSpecificPart": "string",
            "userInfo": "string"
          },
          "displayName": "string",
          "employeeNumber": "string",
          "value": "a860a344-d7b2-406e-828e-8d442f23f344"
        },
        "primary": true
      }
    ],
    "property2": [
      {
        "approver": {
          "$ref": {
            "absolute": true,
            "authority": "string",
            "fragment": "string",
            "host": "string",
            "opaque": true,
            "path": "string",
            "port": 0,
            "query": "string",
            "rawAuthority": "string",
            "rawFragment": "string",
            "rawPath": "string",
            "rawQuery": "string",
            "rawSchemeSpecificPart": "string",
            "rawUserInfo": "string",
            "scheme": "string",
            "schemeSpecificPart": "string",
            "userInfo": "string"
          },
          "displayName": "string",
          "employeeNumber": "string",
          "value": "a860a344-d7b2-406e-828e-8d442f23f344"
        },
        "primary": true
      }
    ]
  },
  "urn:ietf:params:scim:schemas:extension:spend:2.0:Delegate": {
    "property1": [
      {
        "canApprove": true,
        "canPrepare": true,
        "canPrepareForApproval": true,
        "canReceiveApprovalEmail": true,
        "canReceiveEmail": true,
        "canSubmit": true,
        "canSubmitTravelRequest": true,
        "canUseBi": true,
        "canViewReceipt": true,
        "delegate": {
          "$ref": {
            "absolute": true,
            "authority": "string",
            "fragment": "string",
            "host": "string",
            "opaque": true,
            "path": "string",
            "port": 0,
            "query": "string",
            "rawAuthority": "string",
            "rawFragment": "string",
            "rawPath": "string",
            "rawQuery": "string",
            "rawSchemeSpecificPart": "string",
            "rawUserInfo": "string",
            "scheme": "string",
            "schemeSpecificPart": "string",
            "userInfo": "string"
          },
          "displayName": "string",
          "employeeNumber": "string",
          "value": "a860a344-d7b2-406e-828e-8d442f23f344"
        },
        "temporaryDelegatation": {
          "temporaryDelegationFromDate": "string",
          "temporaryDelegationToDate": "string"
        }
      }
    ],
    "property2": [
      {
        "canApprove": true,
        "canPrepare": true,
        "canPrepareForApproval": true,
        "canReceiveApprovalEmail": true,
        "canReceiveEmail": true,
        "canSubmit": true,
        "canSubmitTravelRequest": true,
        "canUseBi": true,
        "canViewReceipt": true,
        "delegate": {
          "$ref": {
            "absolute": true,
            "authority": "string",
            "fragment": "string",
            "host": "string",
            "opaque": true,
            "path": "string",
            "port": 0,
            "query": "string",
            "rawAuthority": "string",
            "rawFragment": "string",
            "rawPath": "string",
            "rawQuery": "string",
            "rawSchemeSpecificPart": "string",
            "rawUserInfo": "string",
            "scheme": "string",
            "schemeSpecificPart": "string",
            "userInfo": "string"
          },
          "displayName": "string",
          "employeeNumber": "string",
          "value": "a860a344-d7b2-406e-828e-8d442f23f344"
        },
        "temporaryDelegatation": {
          "temporaryDelegationFromDate": "string",
          "temporaryDelegationToDate": "string"
        }
      }
    ]
  },
  "urn:ietf:params:scim:schemas:extension:spend:2.0:Role": {
    "roles": [
      {
        "roleGroups": [
          [
            "string"
          ]
        ],
        "roleName": "EXP_FB_TAX_ADMIN"
      }
    ]
  },
  "urn:ietf:params:scim:schemas:extension:spend:2.0:User": {},
  "urn:ietf:params:scim:schemas:extension:spend:2.0:UserPreference": {
    "allowAutoCreateTripReport": true,
    "allowCreditCardTransArrivalEmails": true,
    "allowReceiptImageAvailEmails": true,
    "autoAddTripCardTransOnReport": true,
    "defaultReportPrintFormat": "string",
    "expenseAuditRequired": "string",
    "processorReportAccess": "string",
    "promptForCardTransactionsOnReport": true,
    "promptForReportPrintFormat": true,
    "showExpenseOnReport": "string",
    "showImagingIntro": true,
    "showInstructHelpPanel": true,
    "showTotalOnReport": true,
    "useQuickItinAsDefault": true
  },
  "urn:ietf:params:scim:schemas:extension:spend:2.0:WorkflowPreference": {
    "emailAwaitApprovalOnCashAdvance": true,
    "emailAwaitApprovalOnPayment": true,
    "emailAwaitApprovalOnReport": true,
    "emailAwaitApprovalOnTravelRequest": true,
    "emailStatusChangeOnCashAdvance": true,
    "emailStatusChangeOnPayment": true,
    "emailStatusChangeOnReport": true,
    "emailStatusChangeOnTravelRequest": true,
    "promptForApproverOnPaymentSubmit": true,
    "promptForApproverOnReportSubmit": true,
    "promptForApproverOnTravelRequestSubmit": true
  },
  "urn:ietf:params:scim:schemas:extension:travel:2.0:User": {
    "groups": [
      0
    ],
    "manager": {
      "employeeNumber": "string",
      "value": "a860a344-d7b2-406e-828e-8d442f23f344"
    },
    "ruleClass": {
      "id": 0,
      "name": "string"
    }
  },
  "userName": "string"
}

```

User

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|If true, the user is active.|
|addresses|[object]|false|none|A physical mailing address for the user.|
|» country|string|false|none|A two-letter country code defined in ISO 3166-1 Alpha-2.|
|» formatted|string|false|none|The full mailing address, formatted for display or use with a mailing label.|
|» id|string|false|none|Unique identifier for the user's physical addresses.|
|» latitude|string|false|none|none|
|» locality|string|false|none|The city or locality.|
|» longitude|string|false|none|none|
|» postalCode|string|false|none|The zip code or postal code.|
|» region|string|false|none|The state or region.|
|» streetAddress|string|false|none|The full street address component, which may include house number, street name, P.O. box, and multi-line extended street address information.|
|» type|string|false|none|A label indicating the function of the address. Example: Work, Home|
|dateOfBirth|string|false|none|The user's date of birth. Format: YYYY-MM-DD|
|displayName|string|false|none|The name of the user, suitable for display. This name should be the full name of the user.|
|emails|[[Email](#schemaemail)]|true|none|Email addresses for the user. The value should be canonicalized by the service provider.|
|emergencyContacts|[object]|false|none|Emergency contact information for the user.|
|» country|string|false|none|A two-letter country code defined in ISO 3166-1 Alpha-2.|
|» emails|[string]|false|none|Emails of the contact.|
|» formatted|string|false|none|The full mailing address, formatted for display or use with a mailing label.|
|» latitude|string|false|none|none|
|» locality|string|false|none|The city or locality.|
|» longitude|string|false|none|none|
|» name|string|false|none|Contact name.|
|» phones|[string]|false|none|Phone numbers of the contact.|
|» postalCode|string|false|none|The zip code or postal code.|
|» region|string|false|none|The state or region.|
|» relationship|string|true|none|Emergency contact relationship.|
|» streetAddress|string|false|none|The full street address component, which may include house number, street name, P.O. box, and multi-line extended street address information.|
|externalClient|string|false|none|The provisioning client that generates the externalID.|
|externalId|string|false|none|User identifilier from the provisioning client.|
|gender|string|false|none|The user's gender.|
|id|string(uuid)|true|none|Unique identifier for the user.|
|localeOverrides|object|false|none|Support for users who want to override locale settings.|
|» preference24Hour|string|false|none|Preferred 24 hour format for the user.|
|» preferenceCurrencySymbolLocation|string|false|none|Preferred currency symbol location for the user.|
|» preferenceDateFormat|string|false|none|Preferred date format for the user.|
|» preferenceDefaultCalView|string|false|none|Preferred default calendar view for the user.|
|» preferenceDistance|string|false|none|Preferred distance metric.|
|» preferenceEndDayViewHour|integer|false|none|Preferred hour setting for the end of day. Supported values: 0-23|
|» preferenceFirstDayOfWeek|string|false|none|Preferred first day of the week for the user.|
|» preferenceHourMinuteSeparator|string|false|none|Preferred separator between hour and minute.|
|» preferenceNegativeCurrencyFormat|string|false|none|Preferred negative currency format for the user.|
|» preferenceNegativeNumberFormat|string|false|none|Preferred negative number format for the user.|
|» preferenceNumberFormat|string|false|none|Preferred number format for the user.|
|» preferenceStartDayViewHour|integer|false|none|Preferred start of day for the user.|
|meta|object|false|none|none|
|name|[Name](#schemaname)|true|none|The user's name.|
|nickName|string|false|none|Preferred name for the user. This attribute  should not be used to represent a user's username.|
|phoneNumbers|[object]|false|none|Phone numbers for the user. The value should be canonicalized by the service provider according to the format specified in RFC 3966.|
|» countryCode|string|false|none|A two-letter code defined in ISO 3166-1 Alpha-2 denoting the country the phone number was issued in. e.g., US|
|» countryISDCode|string|false|none|E164 assigned country code.|
|» display|string|false|none|Phone number display.|
|» extension|string|false|none|Phone number extension.|
|» id|string|false|none|Unique identifier for phone numbers.|
|» notifications|boolean|false|none|LNA opt-in for mobile devices.|
|» operatingSystem|string|false|none|The OS of the device, if the phone is a cellphone type.|
|» primary|boolean|false|none|Primary device for mobile devices.|
|» type|string|false|none|A label indicating the attribute's function., Examples; Work, Home|
|» value|string|false|none|Phone number value.|
|» verified|boolean|false|none|Phone number verification status.|
|preferredLanguage|string|false|none|The user's preferred written or spoken language.|
|schemas|[string]|false|none|none|
|timezone|string|false|none|The user's time zone in the 'Olson' time zone database format. Example: America/Los_Angeles|
|urn:ietf:params:scim:schemas:extension:enterprise:2.0:Payroll|[AdpExtension](#schemaadpextension)|false|none|none|
|urn:ietf:params:scim:schemas:extension:enterprise:2.0:User|[EnterpriseUser](#schemaenterpriseuser)|true|none|none|
|urn:ietf:params:scim:schemas:extension:enterprise:legacy:2.0:User|object|false|none|none|
|» expense|object|false|none|none|
|»» enableExpenseAssistant|string|false|none|How the trip report should be created by Expense Assistant.|
|»» enablePersonalCardAutoCreate|boolean|false|none|none|
|» identifiers|object|false|none|none|
|»» entityId|string|false|none|entity_id for this CTE user.|
|»» guuid|string|false|none|OUM.guuid for this CTE.Expense user. Not set if this is not a CTE expense user.|
|»» outtaskCompanyId|integer|false|none|outtask_company.id for this CTE user. Not set if this is not a CTE user.|
|»» outtaskUserId|integer|false|none|outtask_user.user_id. Not set if this is not a CTE user.|
|» legacyRole|string|false|none|none|
|» locateRoles|[string]|false|none|External facing roles for the user for Locate.|
|» privateData|object|false|none|none|
|»» expense|object|false|none|Any private info expense wants to store.|
|»» expenseIt|object|false|none|Any private info ExpenseIt wants to store.|
|»» locate|object|false|none|Any private info Locate wants to store.|
|»» notifications|object|false|none|Any private info Notifications Platform wants to store.|
|»» travel|object|false|none|Any private info Travel wants to store.|
|» supplierSearchRoles|[string]|false|none|Roles for supplier search.|
|» travel|object|false|none|none|
|»» vacationBackupManagerId|string|false|none|Backup manager UUID.|
|urn:ietf:params:scim:schemas:extension:spend:2.0:Approver|object|false|none|none|
|» **additionalProperties**|[[SpendApprover](#schemaspendapprover)]|false|none|none|
|urn:ietf:params:scim:schemas:extension:spend:2.0:Delegate|object|false|none|none|
|» **additionalProperties**|[[SpendDelegate](#schemaspenddelegate)]|false|none|none|
|urn:ietf:params:scim:schemas:extension:spend:2.0:Role|[SpendRole](#schemaspendrole)|false|none|none|
|urn:ietf:params:scim:schemas:extension:spend:2.0:User|[SpendUser](#schemaspenduser)|false|none|none|
|urn:ietf:params:scim:schemas:extension:spend:2.0:UserPreference|[UserPreferenceExtension](#schemauserpreferenceextension)|false|none|none|
|urn:ietf:params:scim:schemas:extension:spend:2.0:WorkflowPreference|[WorkflowPreferenceExtension](#schemaworkflowpreferenceextension)|false|none|none|
|urn:ietf:params:scim:schemas:extension:travel:2.0:User|[TravelUser](#schematraveluser)|false|none|none|
|userName|string|true|none|The name that can be used to login to CTE.|

###### Enumerated Values

|Property|Value|
|---|---|
|type|Work|
|type|Home|
|type|Other|
|type|Billing|
|type|Bank|
|type|Shipping|
|relationship|Spouse|
|relationship|Brother|
|relationship|Parent|
|relationship|Sister|
|relationship|Life Partner|
|relationship|Other|
|externalClient|Concur.Travel|
|externalClient|Concur.ProvisioningService|
|externalClient|SAP.WBS|
|externalClient|Microsoft.AzureAD|
|externalClient|Okta|
|gender|Male|
|gender|Female|
|gender|Others|
|preference24Hour|h:mm AM/PM|
|preference24Hour|H:mm|
|preferenceCurrencySymbolLocation|BeforeAmount|
|preferenceCurrencySymbolLocation|AfterAmount|
|preferenceDateFormat|mm/dd/yyyy|
|preferenceDateFormat|mm.dd.yyyy|
|preferenceDateFormat|mm-dd-yyyy|
|preferenceDateFormat|dd/mm/yyyy|
|preferenceDateFormat|dd.mm.yyyy|
|preferenceDateFormat|dd-mm-yyyy|
|preferenceDateFormat|yyyy/mm/dd|
|preferenceDateFormat|yyyy.mm.dd|
|preferenceDateFormat|yyyy-mm-dd|
|preferenceDefaultCalView|day|
|preferenceDefaultCalView|week|
|preferenceDefaultCalView|month|
|preferenceDistance|mile|
|preferenceDistance|km|
|preferenceFirstDayOfWeek|Monday|
|preferenceFirstDayOfWeek|Tuesday|
|preferenceFirstDayOfWeek|Wednesday|
|preferenceFirstDayOfWeek|Thursday|
|preferenceFirstDayOfWeek|Friday|
|preferenceFirstDayOfWeek|Saturday|
|preferenceFirstDayOfWeek|Sunday|
|preferenceHourMinuteSeparator|:|
|preferenceHourMinuteSeparator|.|
|preferenceNegativeCurrencyFormat|-100|
|preferenceNegativeCurrencyFormat|(100)|
|preferenceNegativeNumberFormat|-100|
|preferenceNegativeNumberFormat|(100)|
|preferenceNumberFormat|1,000.00|
|preferenceNumberFormat|1.000,00|
|preferenceNumberFormat|1 000,00|
|preferenceNumberFormat|1'000.00|
|preferenceNumberFormat|1'000,00|
|operatingSystem|Android Phone|
|operatingSystem|Android Tablet|
|operatingSystem|Blackberry|
|operatingSystem|iOS Phone|
|operatingSystem|iOS Tablet|
|operatingSystem|Not a smartphone|
|operatingSystem|Other iOS device|
|operatingSystem|Other smartphone|
|operatingSystem|Unknown|
|operatingSystem|Window Mobile|
|type|Work|
|type|Home|
|type|Mobile|
|type|Fax|
|type|Pager|
|type|Other|
|type|Work2|
|enableExpenseAssistant|Calendar|
|enableExpenseAssistant|Trip|
|enableExpenseAssistant|None|
|legacyRole|User|
|legacyRole|Boardmember|
|legacyRole|Boardmember and user|
|legacyRole|Meeting user|
|legacyRole|Webservice user|
|legacyRole|System User|

<h3 id="tocS_UserPreferenceExtension">UserPreferenceExtension</h3>

<a id="schemauserpreferenceextension"></a>
<a id="schema_UserPreferenceExtension"></a>
<a id="tocSuserpreferenceextension"></a>
<a id="tocsuserpreferenceextension"></a>

```json
{
  "allowAutoCreateTripReport": true,
  "allowCreditCardTransArrivalEmails": true,
  "allowReceiptImageAvailEmails": true,
  "autoAddTripCardTransOnReport": true,
  "defaultReportPrintFormat": "string",
  "expenseAuditRequired": "string",
  "processorReportAccess": "string",
  "promptForCardTransactionsOnReport": true,
  "promptForReportPrintFormat": true,
  "showExpenseOnReport": "string",
  "showImagingIntro": true,
  "showInstructHelpPanel": true,
  "showTotalOnReport": true,
  "useQuickItinAsDefault": true
}

```

UserPreferenceExtension

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowAutoCreateTripReport|boolean|false|none|none|
|allowCreditCardTransArrivalEmails|boolean|false|none|none|
|allowReceiptImageAvailEmails|boolean|false|none|none|
|autoAddTripCardTransOnReport|boolean|false|none|none|
|defaultReportPrintFormat|string|false|none|none|
|expenseAuditRequired|string|false|none|none|
|processorReportAccess|string|false|none|none|
|promptForCardTransactionsOnReport|boolean|false|none|none|
|promptForReportPrintFormat|boolean|false|none|none|
|showExpenseOnReport|string|false|none|none|
|showImagingIntro|boolean|false|none|none|
|showInstructHelpPanel|boolean|false|none|none|
|showTotalOnReport|boolean|false|none|none|
|useQuickItinAsDefault|boolean|false|none|none|

<h3 id="tocS_UserReference">UserReference</h3>

<a id="schemauserreference"></a>
<a id="schema_UserReference"></a>
<a id="tocSuserreference"></a>
<a id="tocsuserreference"></a>

```json
{
  "$ref": {
    "absolute": true,
    "authority": "string",
    "fragment": "string",
    "host": "string",
    "opaque": true,
    "path": "string",
    "port": 0,
    "query": "string",
    "rawAuthority": "string",
    "rawFragment": "string",
    "rawPath": "string",
    "rawQuery": "string",
    "rawSchemeSpecificPart": "string",
    "rawUserInfo": "string",
    "scheme": "string",
    "schemeSpecificPart": "string",
    "userInfo": "string"
  },
  "displayName": "string",
  "employeeNumber": "string",
  "value": "a860a344-d7b2-406e-828e-8d442f23f344"
}

```

UserReference

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$ref|[URI](#schemauri)|false|none|none|
|displayName|string|false|none|none|
|employeeNumber|string|false|none|none|
|value|string(uuid)|false|none|none|

<h3 id="tocS_WorkflowPreferenceExtension">WorkflowPreferenceExtension</h3>

<a id="schemaworkflowpreferenceextension"></a>
<a id="schema_WorkflowPreferenceExtension"></a>
<a id="tocSworkflowpreferenceextension"></a>
<a id="tocsworkflowpreferenceextension"></a>

```json
{
  "emailAwaitApprovalOnCashAdvance": true,
  "emailAwaitApprovalOnPayment": true,
  "emailAwaitApprovalOnReport": true,
  "emailAwaitApprovalOnTravelRequest": true,
  "emailStatusChangeOnCashAdvance": true,
  "emailStatusChangeOnPayment": true,
  "emailStatusChangeOnReport": true,
  "emailStatusChangeOnTravelRequest": true,
  "promptForApproverOnPaymentSubmit": true,
  "promptForApproverOnReportSubmit": true,
  "promptForApproverOnTravelRequestSubmit": true
}

```

WorkflowPreferenceExtension

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailAwaitApprovalOnCashAdvance|boolean|false|none|none|
|emailAwaitApprovalOnPayment|boolean|false|none|none|
|emailAwaitApprovalOnReport|boolean|false|none|none|
|emailAwaitApprovalOnTravelRequest|boolean|false|none|none|
|emailStatusChangeOnCashAdvance|boolean|false|none|none|
|emailStatusChangeOnPayment|boolean|false|none|none|
|emailStatusChangeOnReport|boolean|false|none|none|
|emailStatusChangeOnTravelRequest|boolean|false|none|none|
|promptForApproverOnPaymentSubmit|boolean|false|none|none|
|promptForApproverOnReportSubmit|boolean|false|none|none|
|promptForApproverOnTravelRequestSubmit|boolean|false|none|none|

