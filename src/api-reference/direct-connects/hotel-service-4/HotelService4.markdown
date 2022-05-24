---
title: Direct Connect - Hotel v4
layout: reference
---

# Direct Connect - Hotel Service v4

{% include prerelease.html %}

Hotel Service v4 API provides a method for Custom Hotel Source suppliers to provide hotel inventory, rates, and booking related functionality to users of the SAP Concur Online Booking Tool (OBT).

This guide provides information on how the hotel supplier can make their content available for Concur Travel users. Once the interface has developed and certified their with SAP Concur, the inventory will begin appearing in hotel searches by opted-in Travel users.

This API has client/server architecture, where SAP Concur services act as client, pulling information from the hotel suppliers, who acts as server, responding to requests.

## Limitations

Access to this documentation does not provide access to the API. SAP Concur products are highly configurable, and not all clients will have access to all features.

## Process Flow

Basic scenario encompassing all the functionality provided by Hotel Service 4 incorporated into Concur Travel starting from a hotel search, through to confirmation of a booking, modification of booking and ending with a cancellation.

![A process flow diagram of the Hotel Service v4 API](./images/diagrams/hs4-sequence-diagram.png)

### Reservation and Read Requests

If a Read request does not arrive within 5 minutes for a given reservation, the supplier should treat that reservation as an orphan and should seek to cancel it.

## Supported Operations

* Search Hotels: [/hotels/search](#opIdsearch)
* Rates: [/hotels/rates](#opIdrates)
* Rate Details: [/hotels/ratedetails](#opIdratedetails)
* Hotel Details: [/hotels/details](#opIdhoteldetails)
* Reserve Hotel: [/hotels/reservation](#opIdreservation)
* Read Reservation: [/hotels/reservation/read](#opIdread)
* Modify Reservation: [/hotels/reservation/modify](#opIdmodify)
* Cancel Reservation: [/hotels/reservation/cancel](#opIdcancel)

## Non Functional Requirements

### Payload Limits

Please note that responses higher than below content-length may be dropped/truncated and result in error back to the user.

|Operation|Maximum Response (content-length)|
|---|---|
|`/hotels/search`|5 MB|
|`/hotels/rates`|5 MB|
|`/hotels/details`|5 MB|
|`/hotels/ratedetails`|5 MB|

### Recommended Response Times and Retries

All endpoints carry a timeout of 55 seconds. Some operations below support retries in case of 5xx errors as noted. No endpoints will attempt a retry in the event there is a timeout.

SAP Concur services have monitoring in place for each endpoint and will open a ticket with suppliers if a significant degradation or variance of service quality is detected.

| Operation| Recommended Response Times | Support Retries (for 5xx errors) |
|---|---|---|
| /hotels/search             | < 5 seconds                | Yes                              |
| /hotels/rates              | < 5 seconds                | Yes                              |
| /hotels/details            | < 1 second                 | Yes                              |
| /hotels/ratedetails        | < 1 second                 | Yes                              |
| /hotels/reservation        | < 5 seconds                | No                               |
| /hotels/reservation/read   | < 1 second                 | Yes                              |
| /hotels/reservation/modify | < 5 seconds                | No                               |
| /hotels/reservation/cancel | < 5 seconds                | No                               |

### <a id="response-times"></a> Recommended Throughput
Higher throughput allows system to scale and serve large number of travelers. SAP Concur recommends suppliers to provision for resources to support the following throughput.

| Operation                  | Recommended Throughput (Requests Per Minute) |
|----------------------------|----------------------------------------------|
| /hotels/search             | > 50                                         |
| /hotels/rates              | > 100                                        |
| /hotels/details            | > 100                                        |
| /hotels/ratedetails        | > 50                                         |
| /hotels/reservation        | > 20                                         |
| /hotels/reservation/read   | > 20                                         |
| /hotels/reservation/modify | > 10                                         |
| /hotels/reservation/cancel | > 10                                         |

**Note**: To prevent no show fees, duplicate bookings and other similar issues, SAP Concur requires the Hotel Supplier auto-cancel the reservation if a corresponding /hotels/reservations/read call is not made by SAP Concur within 5 minutes after the /hotels/reservation call was made.

### <a id="max-connections"></a>Maximum Connections and Throttling
SAP Concur is unable to share details regarding maximum connections and/or throttling questions due to their sensitivity in nature.

### <a id="emergency-tech-contact"></a>Emergency Technical Contact
The Hotel supplier needs to provide emergency technical contact email that will be used for communication in case of blocking technical issues.

### <a id="testing-enviro"></a>Testing Environment
To allow SAP Concur performing testing, the Hotel Supplier needs to provide testing URL or specify properties for testing in production URL. SAP Concur needs to be able to perform test bookings with testing credit cards.

### <a id="security"></a>Security
#### PCI DSS Compliance
As sensitive data and payment card details are transferred via API, the Hotel Suppliers need to comply with PCI DSS standard. SAP Concur is compliant with PCI DSS standard and undergoes regular security audits.

#### HTTPS
SAP Concur requires TLS 1.2 (Transport Layer Security) or higher SSL protocol for data transfers. The Hotel Supplier will provide SAP Concur HTTPS URL of its end-point. Standard HTTPS port 443 should be used.

### URLs
SAP Concur will receive a single URL for each environment (Test and PROD) from the Hotel Supplier. All requests will go to that URL.   


## search

<a id="opIdsearch"></a>

`POST /hotels/search`

*Perform the initial search for hotels.*

Perform the initial search for hotels.

> Body parameter

```json
{
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "numGuests": 1,
  "guestCountryCode": "CA",
  "locationSearch": {
    "location": {
      "geoLocation": {
        "latitude": 49.246292,
        "longitude": -123.116226
      },
      "locationType": "Hotel",
      "name": "Sheraton DFW Airport Hotel",
      "address": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      },
      "iataCode": "string"
    },
    "radius": {
      "value": 5,
      "unit": "MILE"
    },
    "maxRadius": {
      "value": 5,
      "unit": "MILE"
    }
  },
  "hotelPropertyRefs": [
    {
      "chainCode": "HH",
      "propertyCode": "HH498949"
    }
  ],
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "customFields": [
    {
      "name": "OrgUnit",
      "value": "Travel Agents"
    }
  ],
  "includeDepositRequired": true,
  "rateCategories": [
    {
      "otaCode": 1,
      "value": "AAA"
    }
  ],
  "maxSearchResults": 100
}
```

<h3 id="search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|concur-correlationid|header|string|true|none|
|body|body|[SearchCriteria](#schemasearchcriteria)|true|Hotel search criteria|

> Example responses

> 200 Response

```json
{
  "hotelProperties": [
    {
      "propertyCode": "HH498949",
      "altPropertyCode": {
        "catalogCode": "HH498949",
        "catalogName": "Northstar"
      },
      "chainCode": "HH",
      "superChainCode": "EM",
      "hotelName": "JW Marriott Parq",
      "contactInfo": {
        "phoneNumbers": [
          "+1-555-555-1234"
        ],
        "faxNumber": "+1-555-555-5678",
        "emails": [
          "user@example.com"
        ]
      },
      "position": {
        "latitude": 49.246292,
        "longitude": -123.116226
      },
      "address": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      },
      "leadRate": {
        "avgNightlyRate": {
          "amount": 190.95,
          "currencyCode": "USD"
        }
      },
      "availabilityStatus": "AVAILABLE_FOR_SALE",
      "preferenceRank": "PREFERRED",
      "amenities": [
        {
          "amenityCode": 0
        }
      ],
      "mediaItems": [
        {
          "url": "https://images.samplehost.com/samplepath/hotelEntrance.jpg",
          "category": 0,
          "description": "Hotel entrance",
          "type": "IMAGE"
        }
      ],
      "rating": {
        "value": 4,
        "source": "NORTHSTAR"
      },
      "sustainabilityAwards": [
        {
          "label": "LEED",
          "level": "Gold"
        }
      ]
    }
  ],
  "searchSessionToken": "b41168ba-7ee1-4b68-9934-47f5c55337d6"
}
```

<h3 id="search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Search results that meet criteria|[SearchResponse](#schemasearchresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid client request. Request shouldn't be retried without changing it.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error while processing the request. Request can be retried as is at a later time.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## rates

<a id="opIdrates"></a>

`POST /hotels/rates`

*Retrieve rates for specific hotel properties*

Retrieve hotel rates

> Body parameter

```json
{
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "hotelPropertyRefs": [
    {
      "chainCode": "HH",
      "propertyCode": "HH498949"
    }
  ],
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "rateCategories": [
    {
      "otaCode": 1,
      "value": "AAA"
    }
  ],
  "numGuests": 1,
  "guestCountryCode": "CA",
  "searchSessionToken": "b41168ba-7ee1-4b68-9934-47f5c55337d6"
}
```

<h3 id="rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|concur-correlationid|header|string|true|This unique code can be used during troubleshooting as it identifies the API call in the log files.|
|body|body|[RatesCriteria](#schemaratescriteria)|true|Hotel rates criteria|

> Example responses

> 200 Response

```json
{
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "hotelRates": [
    {
      "propertyCode": "HH498949",
      "rates": [
        {
          "bedding": [
            {
              "quantity": 1,
              "bedTypeCode": 3
            }
          ],
          "mealsIncluded": [
            19
          ],
          "roomDescription": [
            "1 bedroom luxury suite",
            "hearing accessible",
            "workspace",
            "garden facing balcony"
          ],
          "roomAmenities": [
            {
              "amenityCode": 0
            }
          ],
          "roomType": 82,
          "roomRate": {
            "rateDescription": [
              "Promotional Rate"
            ],
            "rateCategory": {
              "otaCode": 1,
              "value": "AAA"
            },
            "rateChangesOverStay": true,
            "roomId": "kVNU66KLxuggtu2H",
            "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
            "guarantee": {
              "guaranteeType": "DEPOSIT_REQUIRED",
              "acceptedPayments": [
                "VISA"
              ],
              "cvvRequired": true,
              "amountPercent": {
                "taxInclusive": true,
                "feesInclusive": true,
                "numberOfNights": 5,
                "basisType": "FULL_STAY",
                "applyAs": "FIRST_NIGHT_DEPOSIT",
                "percent": 10.05,
                "amount": {
                  "amount": 190.95,
                  "currencyCode": "USD"
                }
              }
            },
            "prepayRequired": true,
            "refundable": true,
            "totalPrice": {
              "totalBeforeTax": 170.95,
              "taxes": 10,
              "fees": 10,
              "totalAfterTax": 190.95,
              "currencyCode": "USD"
            },
            "nightlyPrices": [
              {
                "basePrice": 89.95,
                "taxes": {
                  "amount": 5.55,
                  "taxBreakdown": [
                    {}
                  ]
                },
                "fees": {
                  "amount": 10.95,
                  "feeBreakdown": [
                    {}
                  ]
                },
                "totalPrice": 100.05,
                "startDate": "2021-12-01",
                "endDate": "2021-12-31",
                "currencyCode": "USD"
              }
            ],
            "cancelPenalties": {
              "penalties": [
                {
                  "cancelDeadline": "2017-07-21T17:32:28Z",
                  "description": "Free cancellation up to 1 week before checkin",
                  "refundableStatus": "FULLY_REFUNDABLE",
                  "amountPercent": {
                    "taxInclusive": true,
                    "feesInclusive": true,
                    "numberOfNights": 5,
                    "basisType": "FULL_STAY",
                    "applyAs": "FIRST_NIGHT_DEPOSIT",
                    "percent": 10.05,
                    "amount": {}
                  }
                }
              ]
            }
          },
          "source": {
            "name": "Expedia",
            "logo": "https://images.samplehost.com/samplepath/sourceLogo.png",
            "suppress": true
          }
        }
      ]
    }
  ]
}
```

<h3 id="rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Hotel rates for requested properties|[RatesResponse](#schemaratesresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid client request. Request shouldn't be retried without changing it.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error while processing the request. Request can be retried as is at a later time.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## ratedetails

<a id="opIdratedetails"></a>

`POST /hotels/ratedetails`

*Retrieve hotel rate details*

Retrieve hotel rate details for rates of a property - used when rate details are missing from /rates call and/or during checkout process.

> Body parameter

```json
{
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "hotelPropertyRef": {
    "chainCode": "HH",
    "propertyCode": "HH498949"
  },
  "ratePlanIds": [
    "44SM3FAsfvgcZs9ehGlNOQ"
  ],
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "rateCategories": [
    {
      "otaCode": 1,
      "value": "AAA"
    }
  ],
  "numGuests": 1,
  "guestCountryCode": "CA",
  "searchSessionToken": "b41168ba-7ee1-4b68-9934-47f5c55337d6"
}
```

<h3 id="ratedetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|concur-correlationid|header|string|true|This unique code can be used during troubleshooting as it identifies the API call in the log files.|
|body|body|[RateDetailsCriteria](#schemaratedetailscriteria)|true|Hotel rates criteria|

> Example responses

> 200 Response

```json
{
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "roomRate": {
    "rateDescription": [
      "Promotional Rate"
    ],
    "rateCategory": {
      "otaCode": 1,
      "value": "AAA"
    },
    "rateChangesOverStay": true,
    "roomId": "kVNU66KLxuggtu2H",
    "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
    "guarantee": {
      "guaranteeType": "DEPOSIT_REQUIRED",
      "acceptedPayments": [
        "VISA"
      ],
      "cvvRequired": true,
      "amountPercent": {
        "taxInclusive": true,
        "feesInclusive": true,
        "numberOfNights": 5,
        "basisType": "FULL_STAY",
        "applyAs": "FIRST_NIGHT_DEPOSIT",
        "percent": 10.05,
        "amount": {
          "amount": 190.95,
          "currencyCode": "USD"
        }
      }
    },
    "prepayRequired": true,
    "refundable": true,
    "totalPrice": {
      "totalBeforeTax": 170.95,
      "taxes": 10,
      "fees": 10,
      "totalAfterTax": 190.95,
      "currencyCode": "USD"
    },
    "nightlyPrices": [
      {
        "basePrice": 89.95,
        "taxes": {
          "amount": 5.55,
          "taxBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "fees": {
          "amount": 10.95,
          "feeBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "totalPrice": 100.05,
        "startDate": "2021-12-01",
        "endDate": "2021-12-31",
        "currencyCode": "USD"
      }
    ],
    "cancelPenalties": {
      "penalties": [
        {
          "cancelDeadline": "2017-07-21T17:32:28Z",
          "description": "Free cancellation up to 1 week before checkin",
          "refundableStatus": "FULLY_REFUNDABLE",
          "amountPercent": {
            "taxInclusive": true,
            "feesInclusive": true,
            "numberOfNights": 5,
            "basisType": "FULL_STAY",
            "applyAs": "FIRST_NIGHT_DEPOSIT",
            "percent": 10.05,
            "amount": {
              "amount": 190.95,
              "currencyCode": "USD"
            }
          }
        }
      ]
    }
  }
}
```

<h3 id="ratedetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Hotel rates for requested properties|[RateDetailsResponse](#schemaratedetailsresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid client request. Request shouldn't be retried without changing it.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error while processing the request. Request can be retried as is at a later time.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## hoteldetails

<a id="opIdhoteldetails"></a>

`POST /hotels/details`

*Retrieve descriptive details about specified hotels.*

Retrieve hotel property information

> Body parameter

```json
{
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "hotelCodes": [
    {
      "chainCode": "HH",
      "propertyCode": "HH498949"
    }
  ],
  "searchSessionToken": "b41168ba-7ee1-4b68-9934-47f5c55337d6"
}
```

<h3 id="hoteldetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|concur-correlationid|header|string|true|This unique code can be used during troubleshooting as it identifies the API call in the log files.|
|body|body|[HotelDetailsCriteria](#schemahoteldetailscriteria)|true|Hotel details criteria|

> Example responses

> 200 Response

```json
{
  "hotelDetailsList": [
    {
      "propertyRef": {
        "chainCode": "HH",
        "propertyCode": "HH498949"
      },
      "hotelDescriptiveInfo": {
        "propertyDescription": "Offering a restaurant and a fitness centre, Hilton Garden Inn Long Island City is located in Long Island City. Free WiFi access is available. Each room here will provide you with a TV. Complete with a microwave, the dining area also has a refrigerator and a coffee machine. Guests will enjoy a full service restaurant and bar with evening room service. Other facilities offered at the property include a shared lounge and luggage storage. LaGuardia Airport is 8 km away. Guests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply. Due to Coronavirus (COVID-19), wearing a face mask is mandatory in all indoor common areas. In response to Coronavirus (COVID-19), additional safety and sanitation measures are currently in effect at this property. Food &amp; beverage services at this property may be limited or unavailable due to Coronavirus (COVID-19). Due to Coronavirus (COVID-19), this property is taking steps to help protect the safety of guests and staff. Certain services and amenities may be reduced or unavailable as a result. Please note that the Extra Bed / Crib is subject to availability. The property will be under renovations to the lobby bar and lounge area from 6 January 2020 until 30 March 2020.\n",
        "descriptiveInfos": [
          {
            "otaCode": 8,
            "contents": [
              "Check-in at 3:00PM",
              "Check-out at 11:00AM"
            ],
            "startDate": "2021-10-20",
            "endDate": "2021-11-20"
          }
        ]
      }
    }
  ]
}
```

<h3 id="hoteldetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Hotel descriptive info for requested properties|[HotelDetailsResponse](#schemahoteldetailsresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid client request. Request shouldn't be retried without changing it.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error while processing the request. Request can be retried as is at a later time.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## reservation

<a id="opIdreservation"></a>

`POST /hotels/reservation`

*Reserve the given hotel rate*

Reserve hotel rate

> Body parameter

```json
{
  "hotelPropertyRef": {
    "chainCode": "HH",
    "propertyCode": "HH498949"
  },
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
  "guests": [
    {
      "firstname": "Blake",
      "lastname": "Smith",
      "address": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      },
      "companyName": "SAP Concur",
      "contactInfo": {
        "phoneNumbers": [
          "+1-555-555-1234"
        ],
        "faxNumber": "+1-555-555-5678",
        "emails": [
          "user@example.com"
        ]
      },
      "birthdate": "1990-04-17"
    }
  ],
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ],
  "paymentModeIndicator": "PersonalCard",
  "guarantee": {
    "cardType": "VISA",
    "cardNumber": "4242-4242-4242-4242",
    "cvv": "369",
    "cardHolderName": "John Smith",
    "cardHolderAddress": {
      "addressLines": [
        "910 Mainland Street"
      ],
      "city": "Vancouver",
      "state": "BC",
      "countryCode": "CA",
      "postalCode": "V5K 0A1"
    }
  },
  "loyalty": {
    "programCode": "EM",
    "accountId": "209875030"
  },
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "comments": [
    "Accessible",
    "NonSmoking",
    "Upper floor away from elevator"
  ],
  "customFields": [
    {
      "name": "OrgUnit",
      "value": "Travel Agents"
    }
  ],
  "searchSessionToken": "b41168ba-7ee1-4b68-9934-47f5c55337d6",
  "legalEntity": {
    "name": "My Great Company",
    "taxId": "111-11-1111",
    "address": {
      "addressLines": [
        "910 Mainland Street"
      ],
      "city": "Vancouver",
      "state": "BC",
      "countryCode": "CA",
      "postalCode": "V5K 0A1"
    }
  },
  "threeDSecure": {
    "avv": "string",
    "cavvAlgorithm": "string",
    "messageVersion": "string",
    "transactionId": "string",
    "threeDSServerTransactionID": "string",
    "eci": "string",
    "exemptionCode": "string"
  }
}
```

<h3 id="reservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|concur-correlationid|header|string|true|This unique code can be used during troubleshooting as it identifies the API call in the log files.|
|body|body|[ReservationCriteria](#schemareservationcriteria)|true|Reservation criteria|

> Example responses

> 200 Response

```json
{
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ],
  "status": "PENDING_CONFIRMATION",
  "basicHotelProperty": {
    "propertyCode": "HH498949",
    "chainCode": "HH",
    "hotelName": "JW Marriott Parq",
    "contactInfo": {
      "phoneNumbers": [
        "+1-555-555-1234"
      ],
      "faxNumber": "+1-555-555-5678",
      "emails": [
        "user@example.com"
      ]
    },
    "position": {
      "latitude": 49.246292,
      "longitude": -123.116226
    },
    "address": {
      "addressLines": [
        "910 Mainland Street"
      ],
      "city": "Vancouver",
      "state": "BC",
      "countryCode": "CA",
      "postalCode": "V5K 0A1"
    },
    "cityCode": "DFW"
  },
  "roomRate": {
    "rateDescription": [
      "Promotional Rate"
    ],
    "rateCategory": {
      "otaCode": 1,
      "value": "AAA"
    },
    "rateChangesOverStay": true,
    "roomId": "kVNU66KLxuggtu2H",
    "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
    "guarantee": {
      "guaranteeType": "DEPOSIT_REQUIRED",
      "acceptedPayments": [
        "VISA"
      ],
      "cvvRequired": true,
      "amountPercent": {
        "taxInclusive": true,
        "feesInclusive": true,
        "numberOfNights": 5,
        "basisType": "FULL_STAY",
        "applyAs": "FIRST_NIGHT_DEPOSIT",
        "percent": 10.05,
        "amount": {
          "amount": 190.95,
          "currencyCode": "USD"
        }
      }
    },
    "prepayRequired": true,
    "refundable": true,
    "totalPrice": {
      "totalBeforeTax": 170.95,
      "taxes": 10,
      "fees": 10,
      "totalAfterTax": 190.95,
      "currencyCode": "USD"
    },
    "nightlyPrices": [
      {
        "basePrice": 89.95,
        "taxes": {
          "amount": 5.55,
          "taxBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "fees": {
          "amount": 10.95,
          "feeBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "totalPrice": 100.05,
        "startDate": "2021-12-01",
        "endDate": "2021-12-31",
        "currencyCode": "USD"
      }
    ],
    "cancelPenalties": {
      "penalties": [
        {
          "cancelDeadline": "2017-07-21T17:32:28Z",
          "description": "Free cancellation up to 1 week before checkin",
          "refundableStatus": "FULLY_REFUNDABLE",
          "amountPercent": {
            "taxInclusive": true,
            "feesInclusive": true,
            "numberOfNights": 5,
            "basisType": "FULL_STAY",
            "applyAs": "FIRST_NIGHT_DEPOSIT",
            "percent": 10.05,
            "amount": {
              "amount": 190.95,
              "currencyCode": "USD"
            }
          }
        }
      ]
    }
  },
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "guests": [
    {
      "firstname": "Blake",
      "lastname": "Smith",
      "address": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      },
      "companyName": "SAP Concur",
      "contactInfo": {
        "phoneNumbers": [
          "+1-555-555-1234"
        ],
        "faxNumber": "+1-555-555-5678",
        "emails": [
          "user@example.com"
        ]
      },
      "birthdate": "1990-04-17"
    }
  ],
  "roomDescription": [
    "1 bedroom luxury suite",
    "hearing accessible",
    "workspace",
    "garden facing balcony"
  ],
  "comments": [
    "Accessible",
    "NonSmoking",
    "Upper floor away from elevator"
  ]
}
```

<h3 id="reservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Hotel reservation successful|[ReservationDetails](#schemareservationdetails)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid client request. Request shouldn't be retried without changing it.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error while processing the request. Request can be retried as is at a later time.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## read

<a id="opIdread"></a>

`POST /hotels/reservation/read`

*Returns detailed information about a hotel reservation.*

Read reservation details. Used in a process of reserving a hotel to acknowledge receipt of booking confirmation as well as write information to Itinerary. Not invoked by user, but by automatic Concur process. Hotel Supplier should reply with the same response as provided for the book response.

> Body parameter

```json
{
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ]
}
```

<h3 id="read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|concur-correlationid|header|string|true|This unique code can be used during troubleshooting as it identifies the API call in the log files.|
|body|body|[ReadCriteria](#schemareadcriteria)|true|Read itinerary criteria|

> Example responses

> 200 Response

```json
{
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ],
  "status": "PENDING_CONFIRMATION",
  "basicHotelProperty": {
    "propertyCode": "HH498949",
    "chainCode": "HH",
    "hotelName": "JW Marriott Parq",
    "contactInfo": {
      "phoneNumbers": [
        "+1-555-555-1234"
      ],
      "faxNumber": "+1-555-555-5678",
      "emails": [
        "user@example.com"
      ]
    },
    "position": {
      "latitude": 49.246292,
      "longitude": -123.116226
    },
    "address": {
      "addressLines": [
        "910 Mainland Street"
      ],
      "city": "Vancouver",
      "state": "BC",
      "countryCode": "CA",
      "postalCode": "V5K 0A1"
    },
    "cityCode": "DFW"
  },
  "roomRate": {
    "rateDescription": [
      "Promotional Rate"
    ],
    "rateCategory": {
      "otaCode": 1,
      "value": "AAA"
    },
    "rateChangesOverStay": true,
    "roomId": "kVNU66KLxuggtu2H",
    "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
    "guarantee": {
      "guaranteeType": "DEPOSIT_REQUIRED",
      "acceptedPayments": [
        "VISA"
      ],
      "cvvRequired": true,
      "amountPercent": {
        "taxInclusive": true,
        "feesInclusive": true,
        "numberOfNights": 5,
        "basisType": "FULL_STAY",
        "applyAs": "FIRST_NIGHT_DEPOSIT",
        "percent": 10.05,
        "amount": {
          "amount": 190.95,
          "currencyCode": "USD"
        }
      }
    },
    "prepayRequired": true,
    "refundable": true,
    "totalPrice": {
      "totalBeforeTax": 170.95,
      "taxes": 10,
      "fees": 10,
      "totalAfterTax": 190.95,
      "currencyCode": "USD"
    },
    "nightlyPrices": [
      {
        "basePrice": 89.95,
        "taxes": {
          "amount": 5.55,
          "taxBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "fees": {
          "amount": 10.95,
          "feeBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "totalPrice": 100.05,
        "startDate": "2021-12-01",
        "endDate": "2021-12-31",
        "currencyCode": "USD"
      }
    ],
    "cancelPenalties": {
      "penalties": [
        {
          "cancelDeadline": "2017-07-21T17:32:28Z",
          "description": "Free cancellation up to 1 week before checkin",
          "refundableStatus": "FULLY_REFUNDABLE",
          "amountPercent": {
            "taxInclusive": true,
            "feesInclusive": true,
            "numberOfNights": 5,
            "basisType": "FULL_STAY",
            "applyAs": "FIRST_NIGHT_DEPOSIT",
            "percent": 10.05,
            "amount": {
              "amount": 190.95,
              "currencyCode": "USD"
            }
          }
        }
      ]
    }
  },
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "guests": [
    {
      "firstname": "Blake",
      "lastname": "Smith",
      "address": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      },
      "companyName": "SAP Concur",
      "contactInfo": {
        "phoneNumbers": [
          "+1-555-555-1234"
        ],
        "faxNumber": "+1-555-555-5678",
        "emails": [
          "user@example.com"
        ]
      },
      "birthdate": "1990-04-17"
    }
  ],
  "roomDescription": [
    "1 bedroom luxury suite",
    "hearing accessible",
    "workspace",
    "garden facing balcony"
  ],
  "comments": [
    "Accessible",
    "NonSmoking",
    "Upper floor away from elevator"
  ]
}
```

<h3 id="read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful read itinerary|[ReservationDetails](#schemareservationdetails)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid client request. Request shouldn't be retried without changing it.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Reservation record not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error while processing the request. Request can be retried as is at a later time.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## modify

<a id="opIdmodify"></a>

`POST /hotels/reservation/modify`

*Modify specific reservation*

Modify given reservation

> Body parameter

```json
{
  "reservationCriteria": {
    "hotelPropertyRef": {
      "chainCode": "HH",
      "propertyCode": "HH498949"
    },
    "requestorInfo": {
      "posRequestorId": "HTL:91369",
      "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
      "loginId": "abc@concur.com",
      "bookingForSelf": true
    },
    "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
    "guests": [
      {
        "firstname": "Blake",
        "lastname": "Smith",
        "address": {
          "addressLines": [
            "910 Mainland Street"
          ],
          "city": "Vancouver",
          "state": "BC",
          "countryCode": "CA",
          "postalCode": "V5K 0A1"
        },
        "companyName": "SAP Concur",
        "contactInfo": {
          "phoneNumbers": [
            "+1-555-555-1234"
          ],
          "faxNumber": "+1-555-555-5678",
          "emails": [
            "user@example.com"
          ]
        },
        "birthdate": "1990-04-17"
      }
    ],
    "confirmationCodes": [
      {
        "codeType": "RESERVATION",
        "code": "3704188022P5683"
      }
    ],
    "paymentModeIndicator": "PersonalCard",
    "guarantee": {
      "cardType": "VISA",
      "cardNumber": "4242-4242-4242-4242",
      "cvv": "369",
      "cardHolderName": "John Smith",
      "cardHolderAddress": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      }
    },
    "loyalty": {
      "programCode": "EM",
      "accountId": "209875030"
    },
    "checkin": "2021-10-20",
    "checkout": "2021-10-23",
    "comments": [
      "Accessible",
      "NonSmoking",
      "Upper floor away from elevator"
    ],
    "customFields": [
      {
        "name": "OrgUnit",
        "value": "Travel Agents"
      }
    ],
    "searchSessionToken": "b41168ba-7ee1-4b68-9934-47f5c55337d6",
    "legalEntity": {
      "name": "My Great Company",
      "taxId": "111-11-1111",
      "address": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      }
    },
    "threeDSecure": {
      "avv": "string",
      "cavvAlgorithm": "string",
      "messageVersion": "string",
      "transactionId": "string",
      "threeDSServerTransactionID": "string",
      "eci": "string",
      "exemptionCode": "string"
    }
  },
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ]
}
```

<h3 id="modify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|concur-correlationid|header|string|true|This unique code can be used during troubleshooting as it identifies the API call in the log files.|
|body|body|[ModifyCriteria](#schemamodifycriteria)|true|Modify reservation criteria|

> Example responses

> 200 Response

```json
{
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ],
  "status": "PENDING_CONFIRMATION",
  "basicHotelProperty": {
    "propertyCode": "HH498949",
    "chainCode": "HH",
    "hotelName": "JW Marriott Parq",
    "contactInfo": {
      "phoneNumbers": [
        "+1-555-555-1234"
      ],
      "faxNumber": "+1-555-555-5678",
      "emails": [
        "user@example.com"
      ]
    },
    "position": {
      "latitude": 49.246292,
      "longitude": -123.116226
    },
    "address": {
      "addressLines": [
        "910 Mainland Street"
      ],
      "city": "Vancouver",
      "state": "BC",
      "countryCode": "CA",
      "postalCode": "V5K 0A1"
    },
    "cityCode": "DFW"
  },
  "roomRate": {
    "rateDescription": [
      "Promotional Rate"
    ],
    "rateCategory": {
      "otaCode": 1,
      "value": "AAA"
    },
    "rateChangesOverStay": true,
    "roomId": "kVNU66KLxuggtu2H",
    "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
    "guarantee": {
      "guaranteeType": "DEPOSIT_REQUIRED",
      "acceptedPayments": [
        "VISA"
      ],
      "cvvRequired": true,
      "amountPercent": {
        "taxInclusive": true,
        "feesInclusive": true,
        "numberOfNights": 5,
        "basisType": "FULL_STAY",
        "applyAs": "FIRST_NIGHT_DEPOSIT",
        "percent": 10.05,
        "amount": {
          "amount": 190.95,
          "currencyCode": "USD"
        }
      }
    },
    "prepayRequired": true,
    "refundable": true,
    "totalPrice": {
      "totalBeforeTax": 170.95,
      "taxes": 10,
      "fees": 10,
      "totalAfterTax": 190.95,
      "currencyCode": "USD"
    },
    "nightlyPrices": [
      {
        "basePrice": 89.95,
        "taxes": {
          "amount": 5.55,
          "taxBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "fees": {
          "amount": 10.95,
          "feeBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "totalPrice": 100.05,
        "startDate": "2021-12-01",
        "endDate": "2021-12-31",
        "currencyCode": "USD"
      }
    ],
    "cancelPenalties": {
      "penalties": [
        {
          "cancelDeadline": "2017-07-21T17:32:28Z",
          "description": "Free cancellation up to 1 week before checkin",
          "refundableStatus": "FULLY_REFUNDABLE",
          "amountPercent": {
            "taxInclusive": true,
            "feesInclusive": true,
            "numberOfNights": 5,
            "basisType": "FULL_STAY",
            "applyAs": "FIRST_NIGHT_DEPOSIT",
            "percent": 10.05,
            "amount": {
              "amount": 190.95,
              "currencyCode": "USD"
            }
          }
        }
      ]
    }
  },
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "guests": [
    {
      "firstname": "Blake",
      "lastname": "Smith",
      "address": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      },
      "companyName": "SAP Concur",
      "contactInfo": {
        "phoneNumbers": [
          "+1-555-555-1234"
        ],
        "faxNumber": "+1-555-555-5678",
        "emails": [
          "user@example.com"
        ]
      },
      "birthdate": "1990-04-17"
    }
  ],
  "roomDescription": [
    "1 bedroom luxury suite",
    "hearing accessible",
    "workspace",
    "garden facing balcony"
  ],
  "comments": [
    "Accessible",
    "NonSmoking",
    "Upper floor away from elevator"
  ]
}
```

<h3 id="modify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Reservation succeessfully modified|[ReservationDetails](#schemareservationdetails)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid client request. Request shouldn't be retried without changing it.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Reservation record not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error while processing the request. Request can be retried as is at a later time.|[Error](#schemaerror)|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|Endpoint not implemented|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## cancel

<a id="opIdcancel"></a>

`POST /hotels/reservation/cancel`

*Cancel specified reservation*

Cancel specified reservation

> Body parameter

```json
{
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ]
}
```

<h3 id="cancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|concur-correlationid|header|string|true|This unique code can be used during troubleshooting as it identifies the API call in the log files.|
|body|body|[CancelCriteria](#schemacancelcriteria)|true|Cancel reservation criteria|

> Example responses

> 200 Response

```json
{
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ],
  "cancellationRemarks": "Reservation cancelled with no penalty"
}
```

<h3 id="cancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Reservation successfully cancelled|[CancelDetails](#schemacanceldetails)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid client request. Request shouldn't be retried without changing it.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Reservation record not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error while processing the request. Request can be retried as is at a later time.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

# Schemas

<h2 id="tocS_SearchCriteria">SearchCriteria</h2>
<!-- backwards compatibility -->
<a id="schemasearchcriteria"></a>
<a id="schema_SearchCriteria"></a>
<a id="tocSsearchcriteria"></a>
<a id="tocssearchcriteria"></a>

```json
{
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "numGuests": 1,
  "guestCountryCode": "CA",
  "locationSearch": {
    "location": {
      "geoLocation": {
        "latitude": 49.246292,
        "longitude": -123.116226
      },
      "locationType": "Hotel",
      "name": "Sheraton DFW Airport Hotel",
      "address": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      },
      "iataCode": "string"
    },
    "radius": {
      "value": 5,
      "unit": "MILE"
    },
    "maxRadius": {
      "value": 5,
      "unit": "MILE"
    }
  },
  "hotelPropertyRefs": [
    {
      "chainCode": "HH",
      "propertyCode": "HH498949"
    }
  ],
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "customFields": [
    {
      "name": "OrgUnit",
      "value": "Travel Agents"
    }
  ],
  "includeDepositRequired": true,
  "rateCategories": [
    {
      "otaCode": 1,
      "value": "AAA"
    }
  ],
  "maxSearchResults": 100
}

```

Search by either location or exact property reference if already available

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestorInfo|[RequestorInfo](#schemarequestorinfo)|true|none|Information about POS (Point Of Sale), traveler and user associated with this request|
|numGuests|integer(int32)|false|none|No. of guests for accomodation as entered by traveler|
|guestCountryCode|string|false|none|Two-character ISO code (ISO ALPHA-2) for country|
|locationSearch|[LocationSearch](#schemalocationsearch)|false|none|Reference to location details for search|
|hotelPropertyRefs|[[HotelPropertyRef](#schemahotelpropertyref)]|false|none|Reference Ids to hotel properties if we already have them. When provided 'locationSearch'  will not be used and may not be set.|
|checkin|string(date)|true|none|Check in date as entered by traveler|
|checkout|string(date)|true|none|Check out date as entered by traveler|
|customFields|[[CustomField](#schemacustomfield)]|false|none|Custom fields that are supported by vendor (e.g. CostCenter)|
|includeDepositRequired|boolean|true|none|Whether to include properties where deposit is required or not|
|rateCategories|[[RateCategory](#schemaratecategory)]|false|none|Special rate categories requested if applicable|
|maxSearchResults|integer|false|none|Maximum number of properties allowed to be included in search results|

<h2 id="tocS_LocationSearch">LocationSearch</h2>
<!-- backwards compatibility -->
<a id="schemalocationsearch"></a>
<a id="schema_LocationSearch"></a>
<a id="tocSlocationsearch"></a>
<a id="tocslocationsearch"></a>

```json
{
  "location": {
    "geoLocation": {
      "latitude": 49.246292,
      "longitude": -123.116226
    },
    "locationType": "Hotel",
    "name": "Sheraton DFW Airport Hotel",
    "address": {
      "addressLines": [
        "910 Mainland Street"
      ],
      "city": "Vancouver",
      "state": "BC",
      "countryCode": "CA",
      "postalCode": "V5K 0A1"
    },
    "iataCode": "string"
  },
  "radius": {
    "value": 5,
    "unit": "MILE"
  },
  "maxRadius": {
    "value": 5,
    "unit": "MILE"
  }
}

```

Reference to location details for search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[Location](#schemalocation)|true|none|Defines Geo Location for search|
|radius|[Radius](#schemaradius)|true|none|Radius to restrict the search for hotels. 'maxRadius' allows extending search radius for preferred hotel properties and can be more than radius defined by traveler|
|maxRadius|[Radius](#schemaradius)|true|none|Radius to restrict the search for hotels. 'maxRadius' allows extending search radius for preferred hotel properties and can be more than radius defined by traveler|

<h2 id="tocS_RatesCriteria">RatesCriteria</h2>
<!-- backwards compatibility -->
<a id="schemaratescriteria"></a>
<a id="schema_RatesCriteria"></a>
<a id="tocSratescriteria"></a>
<a id="tocsratescriteria"></a>

```json
{
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "hotelPropertyRefs": [
    {
      "chainCode": "HH",
      "propertyCode": "HH498949"
    }
  ],
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "rateCategories": [
    {
      "otaCode": 1,
      "value": "AAA"
    }
  ],
  "numGuests": 1,
  "guestCountryCode": "CA",
  "searchSessionToken": "b41168ba-7ee1-4b68-9934-47f5c55337d6"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestorInfo|[RequestorInfo](#schemarequestorinfo)|true|none|Information about POS (Point Of Sale), traveler and user associated with this request|
|hotelPropertyRefs|[[HotelPropertyRef](#schemahotelpropertyref)]|true|none|Reference Ids to hotel properties for which rate is requested|
|checkin|string(date)|true|none|Check in date as entered by traveler|
|checkout|string(date)|true|none|Check out date as entered by traveler|
|rateCategories|[[RateCategory](#schemaratecategory)]|false|none|Special rate categories requested if applicable|
|numGuests|integer(int32)|false|none|No. of guests for accomodation|
|guestCountryCode|string|false|none|Two-character ISO code (ISO ALPHA-2) for country|
|searchSessionToken|[SearchSessionToken](#schemasearchsessiontoken)|false|none|Session token to be generated and provided by server on initial "search" call that can be referenced back for future api calls on the same session.|

<h2 id="tocS_RateDetailsCriteria">RateDetailsCriteria</h2>
<!-- backwards compatibility -->
<a id="schemaratedetailscriteria"></a>
<a id="schema_RateDetailsCriteria"></a>
<a id="tocSratedetailscriteria"></a>
<a id="tocsratedetailscriteria"></a>

```json
{
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "hotelPropertyRef": {
    "chainCode": "HH",
    "propertyCode": "HH498949"
  },
  "ratePlanIds": [
    "44SM3FAsfvgcZs9ehGlNOQ"
  ],
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "rateCategories": [
    {
      "otaCode": 1,
      "value": "AAA"
    }
  ],
  "numGuests": 1,
  "guestCountryCode": "CA",
  "searchSessionToken": "b41168ba-7ee1-4b68-9934-47f5c55337d6"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestorInfo|[RequestorInfo](#schemarequestorinfo)|true|none|Information about POS (Point Of Sale), traveler and user associated with this request|
|hotelPropertyRef|[HotelPropertyRef](#schemahotelpropertyref)|true|none|Reference to hotel property using provider specific property code|
|ratePlanIds|[string]|true|none|Rate Product Ids for which detail rates are requested|
|checkin|string(date)|true|none|Check in date as entered by traveler|
|checkout|string(date)|true|none|Check out date as entered by traveler|
|rateCategories|[[RateCategory](#schemaratecategory)]|false|none|Special rate categories requested if applicable. Rate category is a value used to request a particular rate code if the guest qualifies for a special rate, such as AARP, AAA or a corporate rate. Uses RPT OTA code type.|
|numGuests|integer(int32)|false|none|No. of guests for accomodation as entered by traveler|
|guestCountryCode|string|false|none|Two-character ISO code (ISO ALPHA-2) for country|
|searchSessionToken|[SearchSessionToken](#schemasearchsessiontoken)|false|none|Session token to be generated and provided by server on initial "search" call that can be referenced back for future api calls on the same session.|

<h2 id="tocS_HotelDetailsCriteria">HotelDetailsCriteria</h2>
<!-- backwards compatibility -->
<a id="schemahoteldetailscriteria"></a>
<a id="schema_HotelDetailsCriteria"></a>
<a id="tocShoteldetailscriteria"></a>
<a id="tocshoteldetailscriteria"></a>

```json
{
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "hotelCodes": [
    {
      "chainCode": "HH",
      "propertyCode": "HH498949"
    }
  ],
  "searchSessionToken": "b41168ba-7ee1-4b68-9934-47f5c55337d6"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestorInfo|[RequestorInfo](#schemarequestorinfo)|true|none|Information about POS (Point Of Sale), traveler and user associated with this request|
|hotelCodes|[[HotelPropertyRef](#schemahotelpropertyref)]|true|none|Reference Ids to hotel properties for which rate is requested|
|searchSessionToken|[SearchSessionToken](#schemasearchsessiontoken)|false|none|Session token to be generated and provided by server on initial "search" call that can be referenced back for future api calls on the same session.|

<h2 id="tocS_CustomField">CustomField</h2>
<!-- backwards compatibility -->
<a id="schemacustomfield"></a>
<a id="schema_CustomField"></a>
<a id="tocScustomfield"></a>
<a id="tocscustomfield"></a>

```json
{
  "name": "OrgUnit",
  "value": "Travel Agents"
}

```

Vendor supported custom field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the custom field|
|value|string|true|none|Value of the custom field|

<h2 id="tocS_HotelPropertyRef">HotelPropertyRef</h2>
<!-- backwards compatibility -->
<a id="schemahotelpropertyref"></a>
<a id="schema_HotelPropertyRef"></a>
<a id="tocShotelpropertyref"></a>
<a id="tocshotelpropertyref"></a>

```json
{
  "chainCode": "HH",
  "propertyCode": "HH498949"
}

```

Reference to hotel property using provider specific property code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chainCode|string|false|none|Chain code associated with hotel if any|
|propertyCode|string|true|none|Provider's property code as given in search response|

<h2 id="tocS_HotelProperty">HotelProperty</h2>
<!-- backwards compatibility -->
<a id="schemahotelproperty"></a>
<a id="schema_HotelProperty"></a>
<a id="tocShotelproperty"></a>
<a id="tocshotelproperty"></a>

```json
{
  "propertyCode": "HH498949",
  "altPropertyCode": {
    "catalogCode": "HH498949",
    "catalogName": "Northstar"
  },
  "chainCode": "HH",
  "superChainCode": "EM",
  "hotelName": "JW Marriott Parq",
  "contactInfo": {
    "phoneNumbers": [
      "+1-555-555-1234"
    ],
    "faxNumber": "+1-555-555-5678",
    "emails": [
      "user@example.com"
    ]
  },
  "position": {
    "latitude": 49.246292,
    "longitude": -123.116226
  },
  "address": {
    "addressLines": [
      "910 Mainland Street"
    ],
    "city": "Vancouver",
    "state": "BC",
    "countryCode": "CA",
    "postalCode": "V5K 0A1"
  },
  "leadRate": {
    "avgNightlyRate": {
      "amount": 190.95,
      "currencyCode": "USD"
    }
  },
  "availabilityStatus": "AVAILABLE_FOR_SALE",
  "preferenceRank": "PREFERRED",
  "amenities": [
    {
      "amenityCode": 0
    }
  ],
  "mediaItems": [
    {
      "url": "https://images.samplehost.com/samplepath/hotelEntrance.jpg",
      "category": 0,
      "description": "Hotel entrance",
      "type": "IMAGE"
    }
  ],
  "rating": {
    "value": 4,
    "source": "NORTHSTAR"
  },
  "sustainabilityAwards": [
    {
      "label": "LEED",
      "level": "Gold"
    }
  ]
}

```

Hotel property object returned by hotel search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyCode|[PropertyCode](#schemapropertycode)|true|none|none|
|altPropertyCode|object|false|none|Alternate property code|
|» catalogCode|[PropertyCode](#schemapropertycode)|true|none|none|
|» catalogName|[CatalogName](#schemacatalogname)|true|none|Northstar, Giata and GDS (Sabre, Amadeus, Galileo) are preferred options at this time|
|chainCode|string|false|none|Chain code associated with hotel if any|
|superChainCode|string|false|none|none|
|hotelName|string|true|none|none|
|contactInfo|[ContactInfo](#schemacontactinfo)|true|none|none|
|position|[Geolocation](#schemageolocation)|false|none|none|
|address|[Address](#schemaaddress)|true|none|none|
|leadRate|[LeadRate](#schemaleadrate)|true|none|Lead rate is the lowest nightly rate averaged over the stay, before taxes and fees|
|availabilityStatus|[AvailabilityStatus](#schemaavailabilitystatus)|true|none|none|
|preferenceRank|[PreferenceRank](#schemapreferencerank)|false|none|none|
|amenities|[[HotelAmenity](#schemahotelamenity)]|true|none|[Hotel amenity containing code as described in OTA code list Hotel Amenity Code (HAC)]|
|mediaItems|[[HotelMedia](#schemahotelmedia)]|false|none|none|
|rating|[HotelRating](#schemahotelrating)|false|none|Hotel rating details along with source|
|sustainabilityAwards|[[SustainabilityAward](#schemasustainabilityaward)]|false|none|[Award/Certification related to sustainability awarded to the hotel]|

<h2 id="tocS_HotelRating">HotelRating</h2>
<!-- backwards compatibility -->
<a id="schemahotelrating"></a>
<a id="schema_HotelRating"></a>
<a id="tocShotelrating"></a>
<a id="tocshotelrating"></a>

```json
{
  "value": 4,
  "source": "NORTHSTAR"
}

```

Hotel rating details along with source

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer|true|none|Hotel rating value should be an integer number from 1 to 5, representing its star rating.|
|source|string|true|none|Source of rating|

#### Enumerated Values

|Property|Value|
|---|---|
|source|NORTHSTAR|
|source|AAA_DIAMONDS|
|source|HOTELSTAR|
|source|STAR_RATING_AUSTRALIA|

<h2 id="tocS_CatalogName">CatalogName</h2>
<!-- backwards compatibility -->
<a id="schemacatalogname"></a>
<a id="schema_CatalogName"></a>
<a id="tocScatalogname"></a>
<a id="tocscatalogname"></a>

```json
"Northstar"

```

Northstar, Giata and GDS (Sabre, Amadeus, Galileo) are preferred options at this time

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Northstar, Giata and GDS (Sabre, Amadeus, Galileo) are preferred options at this time|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Northstar|
|*anonymous*|Giata|
|*anonymous*|Leonardo|
|*anonymous*|Amadeus|
|*anonymous*|Sabre|
|*anonymous*|Galileo|
|*anonymous*|CWT|
|*anonymous*|Expedia|
|*anonymous*|HRS|
|*anonymous*|Booking.com|

<h2 id="tocS_BasicHotelProperty">BasicHotelProperty</h2>
<!-- backwards compatibility -->
<a id="schemabasichotelproperty"></a>
<a id="schema_BasicHotelProperty"></a>
<a id="tocSbasichotelproperty"></a>
<a id="tocsbasichotelproperty"></a>

```json
{
  "propertyCode": "HH498949",
  "chainCode": "HH",
  "hotelName": "JW Marriott Parq",
  "contactInfo": {
    "phoneNumbers": [
      "+1-555-555-1234"
    ],
    "faxNumber": "+1-555-555-5678",
    "emails": [
      "user@example.com"
    ]
  },
  "position": {
    "latitude": 49.246292,
    "longitude": -123.116226
  },
  "address": {
    "addressLines": [
      "910 Mainland Street"
    ],
    "city": "Vancouver",
    "state": "BC",
    "countryCode": "CA",
    "postalCode": "V5K 0A1"
  },
  "cityCode": "DFW"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyCode|[PropertyCode](#schemapropertycode)|true|none|none|
|chainCode|string|false|none|none|
|hotelName|string|true|none|none|
|contactInfo|[ContactInfo](#schemacontactinfo)|true|none|none|
|position|[Geolocation](#schemageolocation)|false|none|none|
|address|[Address](#schemaaddress)|false|none|none|
|cityCode|string|true|none|IATA 3 char city code for this property (required for adding passive segments)|

<h2 id="tocS_AvailabilityStatus">AvailabilityStatus</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilitystatus"></a>
<a id="schema_AvailabilityStatus"></a>
<a id="tocSavailabilitystatus"></a>
<a id="tocsavailabilitystatus"></a>

```json
"AVAILABLE_FOR_SALE"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|AVAILABLE_FOR_SALE|
|*anonymous*|CLOSED_OUT|

<h2 id="tocS_PreferenceRank">PreferenceRank</h2>
<!-- backwards compatibility -->
<a id="schemapreferencerank"></a>
<a id="schema_PreferenceRank"></a>
<a id="tocSpreferencerank"></a>
<a id="tocspreferencerank"></a>

```json
"PREFERRED"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|PREFERRED|
|*anonymous*|MORE_PREFERRED|
|*anonymous*|MOST_PREFERRED|

<h2 id="tocS_HotelMedia">HotelMedia</h2>
<!-- backwards compatibility -->
<a id="schemahotelmedia"></a>
<a id="schema_HotelMedia"></a>
<a id="tocShotelmedia"></a>
<a id="tocshotelmedia"></a>

```json
{
  "url": "https://images.samplehost.com/samplepath/hotelEntrance.jpg",
  "category": 0,
  "description": "Hotel entrance",
  "type": "IMAGE"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|none|
|category|integer(int32)|false|none|OTA code describing the image as defined in OTA Picture Category Code (PIC) list|
|description|string|false|none|none|
|type|[MediaType](#schemamediatype)|true|none|none|

<h2 id="tocS_MediaType">MediaType</h2>
<!-- backwards compatibility -->
<a id="schemamediatype"></a>
<a id="schema_MediaType"></a>
<a id="tocSmediatype"></a>
<a id="tocsmediatype"></a>

```json
"IMAGE"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|IMAGE|
|*anonymous*|VIDEO|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "geoLocation": {
    "latitude": 49.246292,
    "longitude": -123.116226
  },
  "locationType": "Hotel",
  "name": "Sheraton DFW Airport Hotel",
  "address": {
    "addressLines": [
      "910 Mainland Street"
    ],
    "city": "Vancouver",
    "state": "BC",
    "countryCode": "CA",
    "postalCode": "V5K 0A1"
  },
  "iataCode": "string"
}

```

Defines Geo Location for search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geoLocation|[Geolocation](#schemageolocation)|true|none|none|
|locationType|[LocationType](#schemalocationtype)|true|none|Type of location associated with this search|
|name|string|true|none|none|
|address|[Address](#schemaaddress)|false|none|none|
|iataCode|string|false|none|IATA code of airport if location searched is of type Airport|

<h2 id="tocS_LocationType">LocationType</h2>
<!-- backwards compatibility -->
<a id="schemalocationtype"></a>
<a id="schema_LocationType"></a>
<a id="tocSlocationtype"></a>
<a id="tocslocationtype"></a>

```json
"Hotel"

```

Type of location associated with this search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Type of location associated with this search|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|COMPANY_LOCATION|
|*anonymous*|HOTEL|
|*anonymous*|ADDRESS|
|*anonymous*|PLACE|
|*anonymous*|AIRPORT|

<h2 id="tocS_Geolocation">Geolocation</h2>
<!-- backwards compatibility -->
<a id="schemageolocation"></a>
<a id="schema_Geolocation"></a>
<a id="tocSgeolocation"></a>
<a id="tocsgeolocation"></a>

```json
{
  "latitude": 49.246292,
  "longitude": -123.116226
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number|true|none|none|
|longitude|number|true|none|none|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "addressLines": [
    "910 Mainland Street"
  ],
  "city": "Vancouver",
  "state": "BC",
  "countryCode": "CA",
  "postalCode": "V5K 0A1"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLines|[string]|true|none|none|
|city|string|true|none|City name|
|state|string|false|none|Two-character state code|
|countryCode|string|true|none|Two-character ISO code (ISO ALPHA-2) for country|
|postalCode|string|false|none|none|

<h2 id="tocS_HotelRates">HotelRates</h2>
<!-- backwards compatibility -->
<a id="schemahotelrates"></a>
<a id="schema_HotelRates"></a>
<a id="tocShotelrates"></a>
<a id="tocshotelrates"></a>

```json
{
  "propertyCode": "HH498949",
  "rates": [
    {
      "bedding": [
        {
          "quantity": 1,
          "bedTypeCode": 3
        }
      ],
      "mealsIncluded": [
        19
      ],
      "roomDescription": [
        "1 bedroom luxury suite",
        "hearing accessible",
        "workspace",
        "garden facing balcony"
      ],
      "roomAmenities": [
        {
          "amenityCode": 0
        }
      ],
      "roomType": 82,
      "roomRate": {
        "rateDescription": [
          "Promotional Rate"
        ],
        "rateCategory": {
          "otaCode": 1,
          "value": "AAA"
        },
        "rateChangesOverStay": true,
        "roomId": "kVNU66KLxuggtu2H",
        "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
        "guarantee": {
          "guaranteeType": "DEPOSIT_REQUIRED",
          "acceptedPayments": [
            "VISA"
          ],
          "cvvRequired": true,
          "amountPercent": {
            "taxInclusive": true,
            "feesInclusive": true,
            "numberOfNights": 5,
            "basisType": "FULL_STAY",
            "applyAs": "FIRST_NIGHT_DEPOSIT",
            "percent": 10.05,
            "amount": {
              "amount": 190.95,
              "currencyCode": "USD"
            }
          }
        },
        "prepayRequired": true,
        "refundable": true,
        "totalPrice": {
          "totalBeforeTax": 170.95,
          "taxes": 10,
          "fees": 10,
          "totalAfterTax": 190.95,
          "currencyCode": "USD"
        },
        "nightlyPrices": [
          {
            "basePrice": 89.95,
            "taxes": {
              "amount": 5.55,
              "taxBreakdown": [
                {
                  "amount": 8.05,
                  "fttCode": 15,
                  "inclusive": true
                }
              ]
            },
            "fees": {
              "amount": 10.95,
              "feeBreakdown": [
                {
                  "amount": 8.05,
                  "fttCode": 15,
                  "inclusive": true
                }
              ]
            },
            "totalPrice": 100.05,
            "startDate": "2021-12-01",
            "endDate": "2021-12-31",
            "currencyCode": "USD"
          }
        ],
        "cancelPenalties": {
          "penalties": [
            {
              "cancelDeadline": "2017-07-21T17:32:28Z",
              "description": "Free cancellation up to 1 week before checkin",
              "refundableStatus": "FULLY_REFUNDABLE",
              "amountPercent": {
                "taxInclusive": true,
                "feesInclusive": true,
                "numberOfNights": 5,
                "basisType": "FULL_STAY",
                "applyAs": "FIRST_NIGHT_DEPOSIT",
                "percent": 10.05,
                "amount": {
                  "amount": 190.95,
                  "currencyCode": "USD"
                }
              }
            }
          ]
        }
      },
      "source": {
        "name": "Expedia",
        "logo": "https://images.samplehost.com/samplepath/sourceLogo.png",
        "suppress": true
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyCode|[PropertyCode](#schemapropertycode)|true|none|none|
|rates|[[HotelRate](#schemahotelrate)]|true|none|none|

<h2 id="tocS_HotelRate">HotelRate</h2>
<!-- backwards compatibility -->
<a id="schemahotelrate"></a>
<a id="schema_HotelRate"></a>
<a id="tocShotelrate"></a>
<a id="tocshotelrate"></a>

```json
{
  "bedding": [
    {
      "quantity": 1,
      "bedTypeCode": 3
    }
  ],
  "mealsIncluded": [
    19
  ],
  "roomDescription": [
    "1 bedroom luxury suite",
    "hearing accessible",
    "workspace",
    "garden facing balcony"
  ],
  "roomAmenities": [
    {
      "amenityCode": 0
    }
  ],
  "roomType": 82,
  "roomRate": {
    "rateDescription": [
      "Promotional Rate"
    ],
    "rateCategory": {
      "otaCode": 1,
      "value": "AAA"
    },
    "rateChangesOverStay": true,
    "roomId": "kVNU66KLxuggtu2H",
    "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
    "guarantee": {
      "guaranteeType": "DEPOSIT_REQUIRED",
      "acceptedPayments": [
        "VISA"
      ],
      "cvvRequired": true,
      "amountPercent": {
        "taxInclusive": true,
        "feesInclusive": true,
        "numberOfNights": 5,
        "basisType": "FULL_STAY",
        "applyAs": "FIRST_NIGHT_DEPOSIT",
        "percent": 10.05,
        "amount": {
          "amount": 190.95,
          "currencyCode": "USD"
        }
      }
    },
    "prepayRequired": true,
    "refundable": true,
    "totalPrice": {
      "totalBeforeTax": 170.95,
      "taxes": 10,
      "fees": 10,
      "totalAfterTax": 190.95,
      "currencyCode": "USD"
    },
    "nightlyPrices": [
      {
        "basePrice": 89.95,
        "taxes": {
          "amount": 5.55,
          "taxBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "fees": {
          "amount": 10.95,
          "feeBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "totalPrice": 100.05,
        "startDate": "2021-12-01",
        "endDate": "2021-12-31",
        "currencyCode": "USD"
      }
    ],
    "cancelPenalties": {
      "penalties": [
        {
          "cancelDeadline": "2017-07-21T17:32:28Z",
          "description": "Free cancellation up to 1 week before checkin",
          "refundableStatus": "FULLY_REFUNDABLE",
          "amountPercent": {
            "taxInclusive": true,
            "feesInclusive": true,
            "numberOfNights": 5,
            "basisType": "FULL_STAY",
            "applyAs": "FIRST_NIGHT_DEPOSIT",
            "percent": 10.05,
            "amount": {
              "amount": 190.95,
              "currencyCode": "USD"
            }
          }
        }
      ]
    }
  },
  "source": {
    "name": "Expedia",
    "logo": "https://images.samplehost.com/samplepath/sourceLogo.png",
    "suppress": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bedding|[[Bedding](#schemabedding)]|false|none|[Details about bedding associated with the room]|
|mealsIncluded|[integer]|false|none|Code based on OTA Meal Plan Type (MPT) list (https://www.opentraveldevelopersnetwork.com/code-list)|
|roomDescription|[string]|true|none|none|
|roomAmenities|[[RoomAmenity](#schemaroomamenity)]|false|none|[Room amenity containing code as described in OTA code list Room Amenity Type (RMA)]|
|roomType|integer(int32)|false|none|OTA code of type GRI (Guest Room Info) providing guest room type details|
|roomRate|[RoomRate](#schemaroomrate)|true|none|none|
|source|object|false|none|Details about source attributed to this rate. Please note that logo is given preference to name and nothing is displayed as source if suppress is true|
|» name|string|false|none|Name of the supplier for this source that can be shown in UI (Logo is given higher preference)|
|» logo|string(uri)|false|none|Logo of the supplier for this source that can be shown in UI|
|» suppress|boolean|false|none|If true, will suppress all source attributions for this rate|

<h2 id="tocS_RateCategory">RateCategory</h2>
<!-- backwards compatibility -->
<a id="schemaratecategory"></a>
<a id="schema_RateCategory"></a>
<a id="tocSratecategory"></a>
<a id="tocsratecategory"></a>

```json
{
  "otaCode": 1,
  "value": "AAA"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|otaCode|integer(int32)|true|none|Code based on OTA Rate Plan Type (RPT) list (https://www.opentraveldevelopersnetwork.com/code-list)|
|value|string|false|none|Optional value for the given rate plan type code|

<h2 id="tocS_TotalPrice">TotalPrice</h2>
<!-- backwards compatibility -->
<a id="schematotalprice"></a>
<a id="schema_TotalPrice"></a>
<a id="tocStotalprice"></a>
<a id="tocstotalprice"></a>

```json
{
  "totalBeforeTax": 170.95,
  "taxes": 10,
  "fees": 10,
  "totalAfterTax": 190.95,
  "currencyCode": "USD"
}

```

Details about total pricing associated with the stay

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalBeforeTax|number|true|none|none|
|taxes|number|false|none|none|
|fees|number|false|none|none|
|totalAfterTax|number|false|none|none|
|currencyCode|[CurrencyCode](#schemacurrencycode)|true|none|ISO 4217 currency code|

<h2 id="tocS_Price">Price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
{
  "amount": 190.95,
  "currencyCode": "USD"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|none|
|currencyCode|[CurrencyCode](#schemacurrencycode)|true|none|ISO 4217 currency code|

<h2 id="tocS_RoomRate">RoomRate</h2>
<!-- backwards compatibility -->
<a id="schemaroomrate"></a>
<a id="schema_RoomRate"></a>
<a id="tocSroomrate"></a>
<a id="tocsroomrate"></a>

```json
{
  "rateDescription": [
    "Promotional Rate"
  ],
  "rateCategory": {
    "otaCode": 1,
    "value": "AAA"
  },
  "rateChangesOverStay": true,
  "roomId": "kVNU66KLxuggtu2H",
  "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
  "guarantee": {
    "guaranteeType": "DEPOSIT_REQUIRED",
    "acceptedPayments": [
      "VISA"
    ],
    "cvvRequired": true,
    "amountPercent": {
      "taxInclusive": true,
      "feesInclusive": true,
      "numberOfNights": 5,
      "basisType": "FULL_STAY",
      "applyAs": "FIRST_NIGHT_DEPOSIT",
      "percent": 10.05,
      "amount": {
        "amount": 190.95,
        "currencyCode": "USD"
      }
    }
  },
  "prepayRequired": true,
  "refundable": true,
  "totalPrice": {
    "totalBeforeTax": 170.95,
    "taxes": 10,
    "fees": 10,
    "totalAfterTax": 190.95,
    "currencyCode": "USD"
  },
  "nightlyPrices": [
    {
      "basePrice": 89.95,
      "taxes": {
        "amount": 5.55,
        "taxBreakdown": [
          {
            "amount": 8.05,
            "fttCode": 15,
            "inclusive": true
          }
        ]
      },
      "fees": {
        "amount": 10.95,
        "feeBreakdown": [
          {
            "amount": 8.05,
            "fttCode": 15,
            "inclusive": true
          }
        ]
      },
      "totalPrice": 100.05,
      "startDate": "2021-12-01",
      "endDate": "2021-12-31",
      "currencyCode": "USD"
    }
  ],
  "cancelPenalties": {
    "penalties": [
      {
        "cancelDeadline": "2017-07-21T17:32:28Z",
        "description": "Free cancellation up to 1 week before checkin",
        "refundableStatus": "FULLY_REFUNDABLE",
        "amountPercent": {
          "taxInclusive": true,
          "feesInclusive": true,
          "numberOfNights": 5,
          "basisType": "FULL_STAY",
          "applyAs": "FIRST_NIGHT_DEPOSIT",
          "percent": 10.05,
          "amount": {
            "amount": 190.95,
            "currencyCode": "USD"
          }
        }
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rateDescription|[string]|false|none|none|
|rateCategory|[RateCategory](#schemaratecategory)|false|none|none|
|rateChangesOverStay|boolean|true|none|none|
|roomId|string|false|none|none|
|ratePlanId|string|true|none|none|
|guarantee|object|false|none|none|
|» guaranteeType|[GuaranteeType](#schemaguaranteetype)|true|none|none|
|» acceptedPayments|[AcceptedPayments](#schemaacceptedpayments)|false|none|none|
|» cvvRequired|boolean|false|none|none|
|» amountPercent|[AmountPercent](#schemaamountpercent)|false|none|none|
|prepayRequired|boolean|false|none|Whether or not prepayment is required for booking this rate|
|refundable|boolean|false|none|Is this rate refundable or not (based on all cancel penalties)|
|totalPrice|[TotalPrice](#schematotalprice)|true|none|Details about total pricing associated with the stay|
|nightlyPrices|[[NightlyPrice](#schemanightlyprice)]|false|none|[Details about nightly price for a given date range]|
|cancelPenalties|[CancelPenalties](#schemacancelpenalties)|false|none|none|

<h2 id="tocS_CancelPenalties">CancelPenalties</h2>
<!-- backwards compatibility -->
<a id="schemacancelpenalties"></a>
<a id="schema_CancelPenalties"></a>
<a id="tocScancelpenalties"></a>
<a id="tocscancelpenalties"></a>

```json
{
  "penalties": [
    {
      "cancelDeadline": "2017-07-21T17:32:28Z",
      "description": "Free cancellation up to 1 week before checkin",
      "refundableStatus": "FULLY_REFUNDABLE",
      "amountPercent": {
        "taxInclusive": true,
        "feesInclusive": true,
        "numberOfNights": 5,
        "basisType": "FULL_STAY",
        "applyAs": "FIRST_NIGHT_DEPOSIT",
        "percent": 10.05,
        "amount": {
          "amount": 190.95,
          "currencyCode": "USD"
        }
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|penalties|[[CancelPenalty](#schemacancelpenalty)]|true|none|Cancel penalties associated with the rate|

<h2 id="tocS_RoomRateDetails">RoomRateDetails</h2>
<!-- backwards compatibility -->
<a id="schemaroomratedetails"></a>
<a id="schema_RoomRateDetails"></a>
<a id="tocSroomratedetails"></a>
<a id="tocsroomratedetails"></a>

```json
{
  "rateDescription": [
    "Promotional Rate"
  ],
  "rateCategory": {
    "otaCode": 1,
    "value": "AAA"
  },
  "rateChangesOverStay": true,
  "roomId": "kVNU66KLxuggtu2H",
  "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
  "guarantee": {
    "guaranteeType": "DEPOSIT_REQUIRED",
    "acceptedPayments": [
      "VISA"
    ],
    "cvvRequired": true,
    "amountPercent": {
      "taxInclusive": true,
      "feesInclusive": true,
      "numberOfNights": 5,
      "basisType": "FULL_STAY",
      "applyAs": "FIRST_NIGHT_DEPOSIT",
      "percent": 10.05,
      "amount": {
        "amount": 190.95,
        "currencyCode": "USD"
      }
    }
  },
  "prepayRequired": true,
  "refundable": true,
  "totalPrice": {
    "totalBeforeTax": 170.95,
    "taxes": 10,
    "fees": 10,
    "totalAfterTax": 190.95,
    "currencyCode": "USD"
  },
  "nightlyPrices": [
    {
      "basePrice": 89.95,
      "taxes": {
        "amount": 5.55,
        "taxBreakdown": [
          {
            "amount": 8.05,
            "fttCode": 15,
            "inclusive": true
          }
        ]
      },
      "fees": {
        "amount": 10.95,
        "feeBreakdown": [
          {
            "amount": 8.05,
            "fttCode": 15,
            "inclusive": true
          }
        ]
      },
      "totalPrice": 100.05,
      "startDate": "2021-12-01",
      "endDate": "2021-12-31",
      "currencyCode": "USD"
    }
  ],
  "cancelPenalties": {
    "penalties": [
      {
        "cancelDeadline": "2017-07-21T17:32:28Z",
        "description": "Free cancellation up to 1 week before checkin",
        "refundableStatus": "FULLY_REFUNDABLE",
        "amountPercent": {
          "taxInclusive": true,
          "feesInclusive": true,
          "numberOfNights": 5,
          "basisType": "FULL_STAY",
          "applyAs": "FIRST_NIGHT_DEPOSIT",
          "percent": 10.05,
          "amount": {
            "amount": 190.95,
            "currencyCode": "USD"
          }
        }
      }
    ]
  }
}

```

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[RoomRate](#schemaroomrate)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|

<h2 id="tocS_NightlyPrice">NightlyPrice</h2>
<!-- backwards compatibility -->
<a id="schemanightlyprice"></a>
<a id="schema_NightlyPrice"></a>
<a id="tocSnightlyprice"></a>
<a id="tocsnightlyprice"></a>

```json
{
  "basePrice": 89.95,
  "taxes": {
    "amount": 5.55,
    "taxBreakdown": [
      {
        "amount": 8.05,
        "fttCode": 15,
        "inclusive": true
      }
    ]
  },
  "fees": {
    "amount": 10.95,
    "feeBreakdown": [
      {
        "amount": 8.05,
        "fttCode": 15,
        "inclusive": true
      }
    ]
  },
  "totalPrice": 100.05,
  "startDate": "2021-12-01",
  "endDate": "2021-12-31",
  "currencyCode": "USD"
}

```

Details about nightly price for a given date range

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basePrice|number|true|none|none|
|taxes|[Taxes](#schemataxes)|true|none|Representation of nightly tax amount associated with a rate along with optional breakdown.|
|fees|[Fees](#schemafees)|true|none|Representation of nightly fees associated with a rate for given dates along with optional breakdown.|
|totalPrice|number|true|none|none|
|startDate|string(date)|true|none|none|
|endDate|string(date)|true|none|none|
|currencyCode|[CurrencyCode](#schemacurrencycode)|true|none|ISO 4217 currency code|

<h2 id="tocS_CurrencyCode">CurrencyCode</h2>
<!-- backwards compatibility -->
<a id="schemacurrencycode"></a>
<a id="schema_CurrencyCode"></a>
<a id="tocScurrencycode"></a>
<a id="tocscurrencycode"></a>

```json
"USD"

```

ISO 4217 currency code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|ISO 4217 currency code|

<h2 id="tocS_CancelPenalty">CancelPenalty</h2>
<!-- backwards compatibility -->
<a id="schemacancelpenalty"></a>
<a id="schema_CancelPenalty"></a>
<a id="tocScancelpenalty"></a>
<a id="tocscancelpenalty"></a>

```json
{
  "cancelDeadline": "2017-07-21T17:32:28Z",
  "description": "Free cancellation up to 1 week before checkin",
  "refundableStatus": "FULLY_REFUNDABLE",
  "amountPercent": {
    "taxInclusive": true,
    "feesInclusive": true,
    "numberOfNights": 5,
    "basisType": "FULL_STAY",
    "applyAs": "FIRST_NIGHT_DEPOSIT",
    "percent": 10.05,
    "amount": {
      "amount": 190.95,
      "currencyCode": "USD"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelDeadline|string|true|none|date string in the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|description|string|true|none|none|
|refundableStatus|[RefundableStatus](#schemarefundablestatus)|true|none|none|
|amountPercent|[AmountPercent](#schemaamountpercent)|false|none|none|

<h2 id="tocS_RefundableStatus">RefundableStatus</h2>
<!-- backwards compatibility -->
<a id="schemarefundablestatus"></a>
<a id="schema_RefundableStatus"></a>
<a id="tocSrefundablestatus"></a>
<a id="tocsrefundablestatus"></a>

```json
"FULLY_REFUNDABLE"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|FULLY_REFUNDABLE|
|*anonymous*|PARTIALLY_REFUNDABLE|
|*anonymous*|NON_REFUNDABLE|

<h2 id="tocS_AmountPercent">AmountPercent</h2>
<!-- backwards compatibility -->
<a id="schemaamountpercent"></a>
<a id="schema_AmountPercent"></a>
<a id="tocSamountpercent"></a>
<a id="tocsamountpercent"></a>

```json
{
  "taxInclusive": true,
  "feesInclusive": true,
  "numberOfNights": 5,
  "basisType": "FULL_STAY",
  "applyAs": "FIRST_NIGHT_DEPOSIT",
  "percent": 10.05,
  "amount": {
    "amount": 190.95,
    "currencyCode": "USD"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taxInclusive|boolean|false|none|If true, all taxes are included in the returned rate.|
|feesInclusive|boolean|false|none|If true, all fees are included in the returned rate.|
|numberOfNights|integer|false|none|The number of nights that are to be spent in the property.|
|basisType|[AmountPercentBasisType](#schemaamountpercentbasistype)|false|none|none|
|applyAs|[AmountPercentApplyAs](#schemaamountpercentapplyas)|false|none|none|
|percent|number|false|none|The percentage used to calculate the amount of the cancel fee.|
|amount|[Price](#schemaprice)|false|none|none|

<h2 id="tocS_AmountPercentBasisType">AmountPercentBasisType</h2>
<!-- backwards compatibility -->
<a id="schemaamountpercentbasistype"></a>
<a id="schema_AmountPercentBasisType"></a>
<a id="tocSamountpercentbasistype"></a>
<a id="tocsamountpercentbasistype"></a>

```json
"FULL_STAY"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|FULL_STAY|
|*anonymous*|NIGHTS|
|*anonymous*|FIRST_LAST|

<h2 id="tocS_AmountPercentApplyAs">AmountPercentApplyAs</h2>
<!-- backwards compatibility -->
<a id="schemaamountpercentapplyas"></a>
<a id="schema_AmountPercentApplyAs"></a>
<a id="tocSamountpercentapplyas"></a>
<a id="tocsamountpercentapplyas"></a>

```json
"FIRST_NIGHT_DEPOSIT"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|FIRST_NIGHT_DEPOSIT|
|*anonymous*|LAST_NIGHT_DEPOST|
|*anonymous*|FIRST_AND_LAST_NIGHT_DEPOSIT|
|*anonymous*|FIRST_NIGHT_PAYMENT|
|*anonymous*|LAST_NIGHT_PAYMENT|
|*anonymous*|FIRST_AND_LAST_NIGHT_PAYMENT|

<h2 id="tocS_GuaranteeType">GuaranteeType</h2>
<!-- backwards compatibility -->
<a id="schemaguaranteetype"></a>
<a id="schema_GuaranteeType"></a>
<a id="tocSguaranteetype"></a>
<a id="tocsguaranteetype"></a>

```json
"DEPOSIT_REQUIRED"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|DEPOSIT_REQUIRED|
|*anonymous*|GUARANTEE_REQUIRED|
|*anonymous*|VENDOR_PROVIDED|
|*anonymous*|NONE|

<h2 id="tocS_AcceptedPayments">AcceptedPayments</h2>
<!-- backwards compatibility -->
<a id="schemaacceptedpayments"></a>
<a id="schema_AcceptedPayments"></a>
<a id="tocSacceptedpayments"></a>
<a id="tocsacceptedpayments"></a>

```json
[
  "VISA"
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PaymentCardType](#schemapaymentcardtype)]|false|none|none|

<h2 id="tocS_PaymentModeIndicator">PaymentModeIndicator</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmodeindicator"></a>
<a id="schema_PaymentModeIndicator"></a>
<a id="tocSpaymentmodeindicator"></a>
<a id="tocspaymentmodeindicator"></a>

```json
"PersonalCard"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|PERSONAL_CARD|
|*anonymous*|CORPORATE_CARD|
|*anonymous*|CONCUR_VIRTUAL_CARD|
|*anonymous*|VENDOR_VIRTUAL_CARD|

<h2 id="tocS_PaymentCardType">PaymentCardType</h2>
<!-- backwards compatibility -->
<a id="schemapaymentcardtype"></a>
<a id="schema_PaymentCardType"></a>
<a id="tocSpaymentcardtype"></a>
<a id="tocspaymentcardtype"></a>

```json
"VISA"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|AMERICAN_AIRLINES|
|*anonymous*|ALASKA_BARTER|
|*anonymous*|AMEX|
|*anonymous*|AWARD_CREDIT|
|*anonymous*|CANADIAN|
|*anonymous*|CARTE_BLANCHE|
|*anonymous*|CHINA_UNION_PAY|
|*anonymous*|CONFERMA|
|*anonymous*|DELTA|
|*anonymous*|DINERS_CLUB|
|*anonymous*|DISCOVER|
|*anonymous*|ENROUTE|
|*anonymous*|EURO_CARD|
|*anonymous*|JCB|
|*anonymous*|MC|
|*anonymous*|NORTHWEST|
|*anonymous*|TWA|
|*anonymous*|UATP|
|*anonymous*|UNITED_TRAVEL|
|*anonymous*|UNITED_CREDIT|
|*anonymous*|VISA|

<h2 id="tocS_PropertyCode">PropertyCode</h2>
<!-- backwards compatibility -->
<a id="schemapropertycode"></a>
<a id="schema_PropertyCode"></a>
<a id="tocSpropertycode"></a>
<a id="tocspropertycode"></a>

```json
"HH498949"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

<h2 id="tocS_RequestorInfo">RequestorInfo</h2>
<!-- backwards compatibility -->
<a id="schemarequestorinfo"></a>
<a id="schema_RequestorInfo"></a>
<a id="tocSrequestorinfo"></a>
<a id="tocsrequestorinfo"></a>

```json
{
  "posRequestorId": "HTL:91369",
  "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
  "loginId": "abc@concur.com",
  "bookingForSelf": true
}

```

Information about POS (Point Of Sale), traveler and user associated with this request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|posRequestorId|string|true|none|An identifier of the entity making the request (e.g. ATA/IATA/ID number)|
|travelerUuid|string|true|none|UUID that identifies the traveler within Concur|
|loginId|string|false|none|Login ID of traveler within Concur. Only sent when available.|
|bookingForSelf|boolean|false|none|Is logged in person booking for self or on behalf of someone else|

<h2 id="tocS_Radius">Radius</h2>
<!-- backwards compatibility -->
<a id="schemaradius"></a>
<a id="schema_Radius"></a>
<a id="tocSradius"></a>
<a id="tocsradius"></a>

```json
{
  "value": 5,
  "unit": "MILE"
}

```

Radius to restrict the search for hotels. 'maxRadius' allows extending search radius for preferred hotel properties and can be more than radius defined by traveler

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer(int32)|true|none|none|
|unit|[DistanceUnit](#schemadistanceunit)|true|none|Unit of distance|

<h2 id="tocS_DistanceUnit">DistanceUnit</h2>
<!-- backwards compatibility -->
<a id="schemadistanceunit"></a>
<a id="schema_DistanceUnit"></a>
<a id="tocSdistanceunit"></a>
<a id="tocsdistanceunit"></a>

```json
"MILE"

```

Unit of distance

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Unit of distance|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|MILE|
|*anonymous*|KM|

<h2 id="tocS_SearchSessionToken">SearchSessionToken</h2>
<!-- backwards compatibility -->
<a id="schemasearchsessiontoken"></a>
<a id="schema_SearchSessionToken"></a>
<a id="tocSsearchsessiontoken"></a>
<a id="tocssearchsessiontoken"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"

```

Session token to be generated and provided by server on initial "search" call that can be referenced back for future api calls on the same session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(uuid)|false|none|Session token to be generated and provided by server on initial "search" call that can be referenced back for future api calls on the same session.|

<h2 id="tocS_HotelDetails">HotelDetails</h2>
<!-- backwards compatibility -->
<a id="schemahoteldetails"></a>
<a id="schema_HotelDetails"></a>
<a id="tocShoteldetails"></a>
<a id="tocshoteldetails"></a>

```json
{
  "propertyRef": {
    "chainCode": "HH",
    "propertyCode": "HH498949"
  },
  "hotelDescriptiveInfo": {
    "propertyDescription": "Offering a restaurant and a fitness centre, Hilton Garden Inn Long Island City is located in Long Island City. Free WiFi access is available. Each room here will provide you with a TV. Complete with a microwave, the dining area also has a refrigerator and a coffee machine. Guests will enjoy a full service restaurant and bar with evening room service. Other facilities offered at the property include a shared lounge and luggage storage. LaGuardia Airport is 8 km away. Guests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply. Due to Coronavirus (COVID-19), wearing a face mask is mandatory in all indoor common areas. In response to Coronavirus (COVID-19), additional safety and sanitation measures are currently in effect at this property. Food &amp; beverage services at this property may be limited or unavailable due to Coronavirus (COVID-19). Due to Coronavirus (COVID-19), this property is taking steps to help protect the safety of guests and staff. Certain services and amenities may be reduced or unavailable as a result. Please note that the Extra Bed / Crib is subject to availability. The property will be under renovations to the lobby bar and lounge area from 6 January 2020 until 30 March 2020.\n",
    "descriptiveInfos": [
      {
        "otaCode": 8,
        "contents": [
          "Check-in at 3:00PM",
          "Check-out at 11:00AM"
        ],
        "startDate": "2021-10-20",
        "endDate": "2021-11-20"
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyRef|[HotelPropertyRef](#schemahotelpropertyref)|true|none|Reference to hotel property using provider specific property code|
|hotelDescriptiveInfo|object|false|none|none|
|» propertyDescription|string|true|none|none|
|» descriptiveInfos|[[HotelDescriptiveInfo](#schemahoteldescriptiveinfo)]|true|none|none|

<h2 id="tocS_HotelDescriptiveInfo">HotelDescriptiveInfo</h2>
<!-- backwards compatibility -->
<a id="schemahoteldescriptiveinfo"></a>
<a id="schema_HotelDescriptiveInfo"></a>
<a id="tocShoteldescriptiveinfo"></a>
<a id="tocshoteldescriptiveinfo"></a>

```json
{
  "otaCode": 8,
  "contents": [
    "Check-in at 3:00PM",
    "Check-out at 11:00AM"
  ],
  "startDate": "2021-10-20",
  "endDate": "2021-11-20"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|otaCode|integer(int32)|true|none|Code based on OTA Additional Detail Type (ADT) list (https://www.opentraveldevelopersnetwork.com/code-list)|
|contents|[string]|true|none|none|
|startDate|string(date)|false|none|Start date for descriptive info if applicable only for specific dates (e.g. for alerts or special events)|
|endDate|string(date)|false|none|End date for descriptive info if applicable only for specific dates (e.g. for alerts or special events)|

<h2 id="tocS_ReservationCriteria">ReservationCriteria</h2>
<!-- backwards compatibility -->
<a id="schemareservationcriteria"></a>
<a id="schema_ReservationCriteria"></a>
<a id="tocSreservationcriteria"></a>
<a id="tocsreservationcriteria"></a>

```json
{
  "hotelPropertyRef": {
    "chainCode": "HH",
    "propertyCode": "HH498949"
  },
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
  "guests": [
    {
      "firstname": "Blake",
      "lastname": "Smith",
      "address": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      },
      "companyName": "SAP Concur",
      "contactInfo": {
        "phoneNumbers": [
          "+1-555-555-1234"
        ],
        "faxNumber": "+1-555-555-5678",
        "emails": [
          "user@example.com"
        ]
      },
      "birthdate": "1990-04-17"
    }
  ],
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ],
  "paymentModeIndicator": "PersonalCard",
  "guarantee": {
    "cardType": "VISA",
    "cardNumber": "4242-4242-4242-4242",
    "cvv": "369",
    "cardHolderName": "John Smith",
    "cardHolderAddress": {
      "addressLines": [
        "910 Mainland Street"
      ],
      "city": "Vancouver",
      "state": "BC",
      "countryCode": "CA",
      "postalCode": "V5K 0A1"
    }
  },
  "loyalty": {
    "programCode": "EM",
    "accountId": "209875030"
  },
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "comments": [
    "Accessible",
    "NonSmoking",
    "Upper floor away from elevator"
  ],
  "customFields": [
    {
      "name": "OrgUnit",
      "value": "Travel Agents"
    }
  ],
  "searchSessionToken": "b41168ba-7ee1-4b68-9934-47f5c55337d6",
  "legalEntity": {
    "name": "My Great Company",
    "taxId": "111-11-1111",
    "address": {
      "addressLines": [
        "910 Mainland Street"
      ],
      "city": "Vancouver",
      "state": "BC",
      "countryCode": "CA",
      "postalCode": "V5K 0A1"
    }
  },
  "threeDSecure": {
    "avv": "string",
    "cavvAlgorithm": "string",
    "messageVersion": "string",
    "transactionId": "string",
    "threeDSServerTransactionID": "string",
    "eci": "string",
    "exemptionCode": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hotelPropertyRef|[HotelPropertyRef](#schemahotelpropertyref)|true|none|Reference to hotel property using provider specific property code|
|requestorInfo|[RequestorInfo](#schemarequestorinfo)|true|none|Information about POS (Point Of Sale), traveler and user associated with this request|
|ratePlanId|string|true|none|none|
|guests|[[Guest](#schemaguest)]|true|none|none|
|confirmationCodes|[[ConfirmationCode](#schemaconfirmationcode)]|false|none|none|
|paymentModeIndicator|[PaymentModeIndicator](#schemapaymentmodeindicator)|false|none|none|
|guarantee|object|false|none|none|
|» cardType|[PaymentCardType](#schemapaymentcardtype)|true|none|none|
|» cardNumber|string|true|none|none|
|» cvv|string|false|none|Card Verification Value - three or four-digit number on credit card for security|
|» cardHolderName|string|false|none|none|
|» cardHolderAddress|[Address](#schemaaddress)|false|none|none|
|loyalty|object|false|none|none|
|» programCode|string|true|none|none|
|» accountId|string|true|none|none|
|checkin|string(date)|true|none|none|
|checkout|string(date)|true|none|none|
|comments|[string]|false|none|Comments about special requests for this booking|
|customFields|[[CustomField](#schemacustomfield)]|true|none|Vendor specific fields if setup for vendor integration|
|searchSessionToken|[SearchSessionToken](#schemasearchsessiontoken)|false|none|Session token to be generated and provided by server on initial "search" call that can be referenced back for future api calls on the same session.|
|legalEntity|[LegalEntity](#schemalegalentity)|false|none|Provides details about the legal entity associated with this booking if available|
|threeDSecure|[ThreeDSecure](#schemathreedsecure)|false|none|3D Secure Strong Customer Authentication payment verification parameters|

<h2 id="tocS_ReservationDetails">ReservationDetails</h2>
<!-- backwards compatibility -->
<a id="schemareservationdetails"></a>
<a id="schema_ReservationDetails"></a>
<a id="tocSreservationdetails"></a>
<a id="tocsreservationdetails"></a>

```json
{
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ],
  "status": "PENDING_CONFIRMATION",
  "basicHotelProperty": {
    "propertyCode": "HH498949",
    "chainCode": "HH",
    "hotelName": "JW Marriott Parq",
    "contactInfo": {
      "phoneNumbers": [
        "+1-555-555-1234"
      ],
      "faxNumber": "+1-555-555-5678",
      "emails": [
        "user@example.com"
      ]
    },
    "position": {
      "latitude": 49.246292,
      "longitude": -123.116226
    },
    "address": {
      "addressLines": [
        "910 Mainland Street"
      ],
      "city": "Vancouver",
      "state": "BC",
      "countryCode": "CA",
      "postalCode": "V5K 0A1"
    },
    "cityCode": "DFW"
  },
  "roomRate": {
    "rateDescription": [
      "Promotional Rate"
    ],
    "rateCategory": {
      "otaCode": 1,
      "value": "AAA"
    },
    "rateChangesOverStay": true,
    "roomId": "kVNU66KLxuggtu2H",
    "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
    "guarantee": {
      "guaranteeType": "DEPOSIT_REQUIRED",
      "acceptedPayments": [
        "VISA"
      ],
      "cvvRequired": true,
      "amountPercent": {
        "taxInclusive": true,
        "feesInclusive": true,
        "numberOfNights": 5,
        "basisType": "FULL_STAY",
        "applyAs": "FIRST_NIGHT_DEPOSIT",
        "percent": 10.05,
        "amount": {
          "amount": 190.95,
          "currencyCode": "USD"
        }
      }
    },
    "prepayRequired": true,
    "refundable": true,
    "totalPrice": {
      "totalBeforeTax": 170.95,
      "taxes": 10,
      "fees": 10,
      "totalAfterTax": 190.95,
      "currencyCode": "USD"
    },
    "nightlyPrices": [
      {
        "basePrice": 89.95,
        "taxes": {
          "amount": 5.55,
          "taxBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "fees": {
          "amount": 10.95,
          "feeBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "totalPrice": 100.05,
        "startDate": "2021-12-01",
        "endDate": "2021-12-31",
        "currencyCode": "USD"
      }
    ],
    "cancelPenalties": {
      "penalties": [
        {
          "cancelDeadline": "2017-07-21T17:32:28Z",
          "description": "Free cancellation up to 1 week before checkin",
          "refundableStatus": "FULLY_REFUNDABLE",
          "amountPercent": {
            "taxInclusive": true,
            "feesInclusive": true,
            "numberOfNights": 5,
            "basisType": "FULL_STAY",
            "applyAs": "FIRST_NIGHT_DEPOSIT",
            "percent": 10.05,
            "amount": {
              "amount": 190.95,
              "currencyCode": "USD"
            }
          }
        }
      ]
    }
  },
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "guests": [
    {
      "firstname": "Blake",
      "lastname": "Smith",
      "address": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      },
      "companyName": "SAP Concur",
      "contactInfo": {
        "phoneNumbers": [
          "+1-555-555-1234"
        ],
        "faxNumber": "+1-555-555-5678",
        "emails": [
          "user@example.com"
        ]
      },
      "birthdate": "1990-04-17"
    }
  ],
  "roomDescription": [
    "1 bedroom luxury suite",
    "hearing accessible",
    "workspace",
    "garden facing balcony"
  ],
  "comments": [
    "Accessible",
    "NonSmoking",
    "Upper floor away from elevator"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confirmationCodes|[[ConfirmationCode](#schemaconfirmationcode)]|true|none|none|
|status|[ReservationStatus](#schemareservationstatus)|true|none|none|
|basicHotelProperty|[BasicHotelProperty](#schemabasichotelproperty)|true|none|none|
|roomRate|[RoomRateDetails](#schemaroomratedetails)|true|none|none|
|checkin|string(date)|false|none|none|
|checkout|string(date)|false|none|none|
|guests|[[Guest](#schemaguest)]|false|none|none|
|roomDescription|[string]|true|none|none|
|comments|[string]|true|none|Comments about special requests for this booking|

<h2 id="tocS_ReservationStatus">ReservationStatus</h2>
<!-- backwards compatibility -->
<a id="schemareservationstatus"></a>
<a id="schema_ReservationStatus"></a>
<a id="tocSreservationstatus"></a>
<a id="tocsreservationstatus"></a>

```json
"PENDING_CONFIRMATION"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|PENDING_CONFIRMATION|
|*anonymous*|RESERVED|
|*anonymous*|CANCELLED|

<h2 id="tocS_ConfirmationCode">ConfirmationCode</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmationcode"></a>
<a id="schema_ConfirmationCode"></a>
<a id="tocSconfirmationcode"></a>
<a id="tocsconfirmationcode"></a>

```json
{
  "codeType": "RESERVATION",
  "code": "3704188022P5683"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codeType|[ConfirmationCodeType](#schemaconfirmationcodetype)|true|none|Confirmation Code Types that maps to OTA codes for Unique Id Types list RESERVATION(Record Locator)=14, SUPPLIER_CONFIRMATION=40, CANCELLATION=50, MODIFICATION=1000, HOTEL_CONFIRMATION(Property Confirmation No.)=10, CONCUR_GDS_REFERENCE -> Concur Booking Record Locator for Passives|
|code|string|true|none|none|

<h2 id="tocS_ConfirmationCodeType">ConfirmationCodeType</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmationcodetype"></a>
<a id="schema_ConfirmationCodeType"></a>
<a id="tocSconfirmationcodetype"></a>
<a id="tocsconfirmationcodetype"></a>

```json
"RESERVATION"

```

Confirmation Code Types that maps to OTA codes for Unique Id Types list RESERVATION(Record Locator)=14, SUPPLIER_CONFIRMATION=40, CANCELLATION=50, MODIFICATION=1000, HOTEL_CONFIRMATION(Property Confirmation No.)=10, CONCUR_GDS_REFERENCE -> Concur Booking Record Locator for Passives

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Confirmation Code Types that maps to OTA codes for Unique Id Types list RESERVATION(Record Locator)=14, SUPPLIER_CONFIRMATION=40, CANCELLATION=50, MODIFICATION=1000, HOTEL_CONFIRMATION(Property Confirmation No.)=10, CONCUR_GDS_REFERENCE -> Concur Booking Record Locator for Passives|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|RESERVATION|
|*anonymous*|SUPPLIER_CONFIRMATION|
|*anonymous*|CANCELLATION|
|*anonymous*|MODIFICATION|
|*anonymous*|HOTEL_CONFIRMATION|
|*anonymous*|CONCUR_GDS_REFERENCE|

<h2 id="tocS_Guest">Guest</h2>
<!-- backwards compatibility -->
<a id="schemaguest"></a>
<a id="schema_Guest"></a>
<a id="tocSguest"></a>
<a id="tocsguest"></a>

```json
{
  "firstname": "Blake",
  "lastname": "Smith",
  "address": {
    "addressLines": [
      "910 Mainland Street"
    ],
    "city": "Vancouver",
    "state": "BC",
    "countryCode": "CA",
    "postalCode": "V5K 0A1"
  },
  "companyName": "SAP Concur",
  "contactInfo": {
    "phoneNumbers": [
      "+1-555-555-1234"
    ],
    "faxNumber": "+1-555-555-5678",
    "emails": [
      "user@example.com"
    ]
  },
  "birthdate": "1990-04-17"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstname|string|true|none|none|
|lastname|string|true|none|none|
|address|[Address](#schemaaddress)|false|none|none|
|companyName|string|true|none|none|
|contactInfo|[ContactInfo](#schemacontactinfo)|true|none|none|
|birthdate|string(date)|false|none|none|

<h2 id="tocS_ReadCriteria">ReadCriteria</h2>
<!-- backwards compatibility -->
<a id="schemareadcriteria"></a>
<a id="schema_ReadCriteria"></a>
<a id="tocSreadcriteria"></a>
<a id="tocsreadcriteria"></a>

```json
{
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestorInfo|[RequestorInfo](#schemarequestorinfo)|true|none|Information about POS (Point Of Sale), traveler and user associated with this request|
|confirmationCodes|[[ConfirmationCode](#schemaconfirmationcode)]|true|none|none|

<h2 id="tocS_ModifyCriteria">ModifyCriteria</h2>
<!-- backwards compatibility -->
<a id="schemamodifycriteria"></a>
<a id="schema_ModifyCriteria"></a>
<a id="tocSmodifycriteria"></a>
<a id="tocsmodifycriteria"></a>

```json
{
  "reservationCriteria": {
    "hotelPropertyRef": {
      "chainCode": "HH",
      "propertyCode": "HH498949"
    },
    "requestorInfo": {
      "posRequestorId": "HTL:91369",
      "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
      "loginId": "abc@concur.com",
      "bookingForSelf": true
    },
    "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
    "guests": [
      {
        "firstname": "Blake",
        "lastname": "Smith",
        "address": {
          "addressLines": [
            "910 Mainland Street"
          ],
          "city": "Vancouver",
          "state": "BC",
          "countryCode": "CA",
          "postalCode": "V5K 0A1"
        },
        "companyName": "SAP Concur",
        "contactInfo": {
          "phoneNumbers": [
            "+1-555-555-1234"
          ],
          "faxNumber": "+1-555-555-5678",
          "emails": [
            "user@example.com"
          ]
        },
        "birthdate": "1990-04-17"
      }
    ],
    "confirmationCodes": [
      {
        "codeType": "RESERVATION",
        "code": "3704188022P5683"
      }
    ],
    "paymentModeIndicator": "PersonalCard",
    "guarantee": {
      "cardType": "VISA",
      "cardNumber": "4242-4242-4242-4242",
      "cvv": "369",
      "cardHolderName": "John Smith",
      "cardHolderAddress": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      }
    },
    "loyalty": {
      "programCode": "EM",
      "accountId": "209875030"
    },
    "checkin": "2021-10-20",
    "checkout": "2021-10-23",
    "comments": [
      "Accessible",
      "NonSmoking",
      "Upper floor away from elevator"
    ],
    "customFields": [
      {
        "name": "OrgUnit",
        "value": "Travel Agents"
      }
    ],
    "searchSessionToken": "b41168ba-7ee1-4b68-9934-47f5c55337d6",
    "legalEntity": {
      "name": "My Great Company",
      "taxId": "111-11-1111",
      "address": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      }
    },
    "threeDSecure": {
      "avv": "string",
      "cavvAlgorithm": "string",
      "messageVersion": "string",
      "transactionId": "string",
      "threeDSServerTransactionID": "string",
      "eci": "string",
      "exemptionCode": "string"
    }
  },
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationCriteria|[ReservationCriteria](#schemareservationcriteria)|true|none|none|
|confirmationCodes|[[ConfirmationCode](#schemaconfirmationcode)]|true|none|none|

<h2 id="tocS_CancelCriteria">CancelCriteria</h2>
<!-- backwards compatibility -->
<a id="schemacancelcriteria"></a>
<a id="schema_CancelCriteria"></a>
<a id="tocScancelcriteria"></a>
<a id="tocscancelcriteria"></a>

```json
{
  "requestorInfo": {
    "posRequestorId": "HTL:91369",
    "travelerUuid": "123e4567-e89b-12d3-a456-426614174000",
    "loginId": "abc@concur.com",
    "bookingForSelf": true
  },
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestorInfo|[RequestorInfo](#schemarequestorinfo)|true|none|Information about POS (Point Of Sale), traveler and user associated with this request|
|confirmationCodes|[[ConfirmationCode](#schemaconfirmationcode)]|true|none|none|

<h2 id="tocS_CancelDetails">CancelDetails</h2>
<!-- backwards compatibility -->
<a id="schemacanceldetails"></a>
<a id="schema_CancelDetails"></a>
<a id="tocScanceldetails"></a>
<a id="tocscanceldetails"></a>

```json
{
  "confirmationCodes": [
    {
      "codeType": "RESERVATION",
      "code": "3704188022P5683"
    }
  ],
  "cancellationRemarks": "Reservation cancelled with no penalty"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confirmationCodes|[[ConfirmationCode](#schemaconfirmationcode)]|true|none|none|
|cancellationRemarks|string|false|none|none|

<h2 id="tocS_ContactInfo">ContactInfo</h2>
<!-- backwards compatibility -->
<a id="schemacontactinfo"></a>
<a id="schema_ContactInfo"></a>
<a id="tocScontactinfo"></a>
<a id="tocscontactinfo"></a>

```json
{
  "phoneNumbers": [
    "+1-555-555-1234"
  ],
  "faxNumber": "+1-555-555-5678",
  "emails": [
    "user@example.com"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneNumbers|[string]|true|none|none|
|faxNumber|string|false|none|none|
|emails|[string]|true|none|none|

<h2 id="tocS_LeadRate">LeadRate</h2>
<!-- backwards compatibility -->
<a id="schemaleadrate"></a>
<a id="schema_LeadRate"></a>
<a id="tocSleadrate"></a>
<a id="tocsleadrate"></a>

```json
{
  "avgNightlyRate": {
    "amount": 190.95,
    "currencyCode": "USD"
  }
}

```

Lead rate is the lowest nightly rate averaged over the stay, before taxes and fees

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avgNightlyRate|[Price](#schemaprice)|true|none|none|

<h2 id="tocS_HotelAmenity">HotelAmenity</h2>
<!-- backwards compatibility -->
<a id="schemahotelamenity"></a>
<a id="schema_HotelAmenity"></a>
<a id="tocShotelamenity"></a>
<a id="tocshotelamenity"></a>

```json
{
  "amenityCode": 0
}

```

Hotel amenity containing code as described in OTA code list Hotel Amenity Code (HAC)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amenityCode|integer(int32)|true|none|none|

<h2 id="tocS_RoomAmenity">RoomAmenity</h2>
<!-- backwards compatibility -->
<a id="schemaroomamenity"></a>
<a id="schema_RoomAmenity"></a>
<a id="tocSroomamenity"></a>
<a id="tocsroomamenity"></a>

```json
{
  "amenityCode": 0
}

```

Room amenity containing code as described in OTA code list Room Amenity Type (RMA)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amenityCode|integer(int32)|true|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "otaCode": 0,
  "message": "string"
}

```

Error with OTA code and description

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|otaCode|integer(int32)|false|none|Code based on OTA Error Codes list (https://www.opentraveldevelopersnetwork.com/code-list)|
|message|string|true|none|none|

<h2 id="tocS_SearchResponse">SearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresponse"></a>
<a id="schema_SearchResponse"></a>
<a id="tocSsearchresponse"></a>
<a id="tocssearchresponse"></a>

```json
{
  "hotelProperties": [
    {
      "propertyCode": "HH498949",
      "altPropertyCode": {
        "catalogCode": "HH498949",
        "catalogName": "Northstar"
      },
      "chainCode": "HH",
      "superChainCode": "EM",
      "hotelName": "JW Marriott Parq",
      "contactInfo": {
        "phoneNumbers": [
          "+1-555-555-1234"
        ],
        "faxNumber": "+1-555-555-5678",
        "emails": [
          "user@example.com"
        ]
      },
      "position": {
        "latitude": 49.246292,
        "longitude": -123.116226
      },
      "address": {
        "addressLines": [
          "910 Mainland Street"
        ],
        "city": "Vancouver",
        "state": "BC",
        "countryCode": "CA",
        "postalCode": "V5K 0A1"
      },
      "leadRate": {
        "avgNightlyRate": {
          "amount": 190.95,
          "currencyCode": "USD"
        }
      },
      "availabilityStatus": "AVAILABLE_FOR_SALE",
      "preferenceRank": "PREFERRED",
      "amenities": [
        {
          "amenityCode": 0
        }
      ],
      "mediaItems": [
        {
          "url": "https://images.samplehost.com/samplepath/hotelEntrance.jpg",
          "category": 0,
          "description": "Hotel entrance",
          "type": "IMAGE"
        }
      ],
      "rating": {
        "value": 4,
        "source": "NORTHSTAR"
      },
      "sustainabilityAwards": [
        {
          "label": "LEED",
          "level": "Gold"
        }
      ]
    }
  ],
  "searchSessionToken": "b41168ba-7ee1-4b68-9934-47f5c55337d6"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hotelProperties|[[HotelProperty](#schemahotelproperty)]|true|none|[Hotel property object returned by hotel search]|
|searchSessionToken|[SearchSessionToken](#schemasearchsessiontoken)|false|none|Session token to be generated and provided by server on initial "search" call that can be referenced back for future api calls on the same session.|

<h2 id="tocS_RatesResponse">RatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaratesresponse"></a>
<a id="schema_RatesResponse"></a>
<a id="tocSratesresponse"></a>
<a id="tocsratesresponse"></a>

```json
{
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "hotelRates": [
    {
      "propertyCode": "HH498949",
      "rates": [
        {
          "bedding": [
            {
              "quantity": 1,
              "bedTypeCode": 3
            }
          ],
          "mealsIncluded": [
            19
          ],
          "roomDescription": [
            "1 bedroom luxury suite",
            "hearing accessible",
            "workspace",
            "garden facing balcony"
          ],
          "roomAmenities": [
            {
              "amenityCode": 0
            }
          ],
          "roomType": 82,
          "roomRate": {
            "rateDescription": [
              "Promotional Rate"
            ],
            "rateCategory": {
              "otaCode": 1,
              "value": "AAA"
            },
            "rateChangesOverStay": true,
            "roomId": "kVNU66KLxuggtu2H",
            "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
            "guarantee": {
              "guaranteeType": "DEPOSIT_REQUIRED",
              "acceptedPayments": [
                "VISA"
              ],
              "cvvRequired": true,
              "amountPercent": {
                "taxInclusive": true,
                "feesInclusive": true,
                "numberOfNights": 5,
                "basisType": "FULL_STAY",
                "applyAs": "FIRST_NIGHT_DEPOSIT",
                "percent": 10.05,
                "amount": {
                  "amount": 190.95,
                  "currencyCode": "USD"
                }
              }
            },
            "prepayRequired": true,
            "refundable": true,
            "totalPrice": {
              "totalBeforeTax": 170.95,
              "taxes": 10,
              "fees": 10,
              "totalAfterTax": 190.95,
              "currencyCode": "USD"
            },
            "nightlyPrices": [
              {
                "basePrice": 89.95,
                "taxes": {
                  "amount": 5.55,
                  "taxBreakdown": [
                    {}
                  ]
                },
                "fees": {
                  "amount": 10.95,
                  "feeBreakdown": [
                    {}
                  ]
                },
                "totalPrice": 100.05,
                "startDate": "2021-12-01",
                "endDate": "2021-12-31",
                "currencyCode": "USD"
              }
            ],
            "cancelPenalties": {
              "penalties": [
                {
                  "cancelDeadline": "2017-07-21T17:32:28Z",
                  "description": "Free cancellation up to 1 week before checkin",
                  "refundableStatus": "FULLY_REFUNDABLE",
                  "amountPercent": {
                    "taxInclusive": true,
                    "feesInclusive": true,
                    "numberOfNights": 5,
                    "basisType": "FULL_STAY",
                    "applyAs": "FIRST_NIGHT_DEPOSIT",
                    "percent": 10.05,
                    "amount": {}
                  }
                }
              ]
            }
          },
          "source": {
            "name": "Expedia",
            "logo": "https://images.samplehost.com/samplepath/sourceLogo.png",
            "suppress": true
          }
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkin|string(date)|true|none|none|
|checkout|string(date)|true|none|none|
|hotelRates|[[HotelRates](#schemahotelrates)]|true|none|none|

<h2 id="tocS_RateDetailsResponse">RateDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaratedetailsresponse"></a>
<a id="schema_RateDetailsResponse"></a>
<a id="tocSratedetailsresponse"></a>
<a id="tocsratedetailsresponse"></a>

```json
{
  "checkin": "2021-10-20",
  "checkout": "2021-10-23",
  "roomRate": {
    "rateDescription": [
      "Promotional Rate"
    ],
    "rateCategory": {
      "otaCode": 1,
      "value": "AAA"
    },
    "rateChangesOverStay": true,
    "roomId": "kVNU66KLxuggtu2H",
    "ratePlanId": "44SM3FAsfvgcZs9ehGlNOQ",
    "guarantee": {
      "guaranteeType": "DEPOSIT_REQUIRED",
      "acceptedPayments": [
        "VISA"
      ],
      "cvvRequired": true,
      "amountPercent": {
        "taxInclusive": true,
        "feesInclusive": true,
        "numberOfNights": 5,
        "basisType": "FULL_STAY",
        "applyAs": "FIRST_NIGHT_DEPOSIT",
        "percent": 10.05,
        "amount": {
          "amount": 190.95,
          "currencyCode": "USD"
        }
      }
    },
    "prepayRequired": true,
    "refundable": true,
    "totalPrice": {
      "totalBeforeTax": 170.95,
      "taxes": 10,
      "fees": 10,
      "totalAfterTax": 190.95,
      "currencyCode": "USD"
    },
    "nightlyPrices": [
      {
        "basePrice": 89.95,
        "taxes": {
          "amount": 5.55,
          "taxBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "fees": {
          "amount": 10.95,
          "feeBreakdown": [
            {
              "amount": 8.05,
              "fttCode": 15,
              "inclusive": true
            }
          ]
        },
        "totalPrice": 100.05,
        "startDate": "2021-12-01",
        "endDate": "2021-12-31",
        "currencyCode": "USD"
      }
    ],
    "cancelPenalties": {
      "penalties": [
        {
          "cancelDeadline": "2017-07-21T17:32:28Z",
          "description": "Free cancellation up to 1 week before checkin",
          "refundableStatus": "FULLY_REFUNDABLE",
          "amountPercent": {
            "taxInclusive": true,
            "feesInclusive": true,
            "numberOfNights": 5,
            "basisType": "FULL_STAY",
            "applyAs": "FIRST_NIGHT_DEPOSIT",
            "percent": 10.05,
            "amount": {
              "amount": 190.95,
              "currencyCode": "USD"
            }
          }
        }
      ]
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkin|string(date)|true|none|none|
|checkout|string(date)|true|none|none|
|roomRate|[RoomRateDetails](#schemaroomratedetails)|true|none|none|

<h2 id="tocS_HotelDetailsResponse">HotelDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemahoteldetailsresponse"></a>
<a id="schema_HotelDetailsResponse"></a>
<a id="tocShoteldetailsresponse"></a>
<a id="tocshoteldetailsresponse"></a>

```json
{
  "hotelDetailsList": [
    {
      "propertyRef": {
        "chainCode": "HH",
        "propertyCode": "HH498949"
      },
      "hotelDescriptiveInfo": {
        "propertyDescription": "Offering a restaurant and a fitness centre, Hilton Garden Inn Long Island City is located in Long Island City. Free WiFi access is available. Each room here will provide you with a TV. Complete with a microwave, the dining area also has a refrigerator and a coffee machine. Guests will enjoy a full service restaurant and bar with evening room service. Other facilities offered at the property include a shared lounge and luggage storage. LaGuardia Airport is 8 km away. Guests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply. Due to Coronavirus (COVID-19), wearing a face mask is mandatory in all indoor common areas. In response to Coronavirus (COVID-19), additional safety and sanitation measures are currently in effect at this property. Food &amp; beverage services at this property may be limited or unavailable due to Coronavirus (COVID-19). Due to Coronavirus (COVID-19), this property is taking steps to help protect the safety of guests and staff. Certain services and amenities may be reduced or unavailable as a result. Please note that the Extra Bed / Crib is subject to availability. The property will be under renovations to the lobby bar and lounge area from 6 January 2020 until 30 March 2020.\n",
        "descriptiveInfos": [
          {
            "otaCode": 8,
            "contents": [
              "Check-in at 3:00PM",
              "Check-out at 11:00AM"
            ],
            "startDate": "2021-10-20",
            "endDate": "2021-11-20"
          }
        ]
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hotelDetailsList|[[HotelDetails](#schemahoteldetails)]|true|none|none|

<h2 id="tocS_Bedding">Bedding</h2>
<!-- backwards compatibility -->
<a id="schemabedding"></a>
<a id="schema_Bedding"></a>
<a id="tocSbedding"></a>
<a id="tocsbedding"></a>

```json
{
  "quantity": 1,
  "bedTypeCode": 3
}

```

Details about bedding associated with the room

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quantity|integer|true|none|No. of beds|
|bedTypeCode|integer(int32)|true|none|Code based on OTA Bed Type (BED) list (https://www.opentraveldevelopersnetwork.com/code-list)|

<h2 id="tocS_Taxes">Taxes</h2>
<!-- backwards compatibility -->
<a id="schemataxes"></a>
<a id="schema_Taxes"></a>
<a id="tocStaxes"></a>
<a id="tocstaxes"></a>

```json
{
  "amount": 5.55,
  "taxBreakdown": [
    {
      "amount": 8.05,
      "fttCode": 15,
      "inclusive": true
    }
  ]
}

```

Representation of nightly tax amount associated with a rate along with optional breakdown.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|none|
|taxBreakdown|[[FeeTaxType](#schemafeetaxtype)]|false|none|[Fee or Tax associated with rate - can be either included or excluded from total rate as marked with 'inclusive' field.]|

<h2 id="tocS_Fees">Fees</h2>
<!-- backwards compatibility -->
<a id="schemafees"></a>
<a id="schema_Fees"></a>
<a id="tocSfees"></a>
<a id="tocsfees"></a>

```json
{
  "amount": 10.95,
  "feeBreakdown": [
    {
      "amount": 8.05,
      "fttCode": 15,
      "inclusive": true
    }
  ]
}

```

Representation of nightly fees associated with a rate for given dates along with optional breakdown.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|none|
|feeBreakdown|[[FeeTaxType](#schemafeetaxtype)]|false|none|[Fee or Tax associated with rate - can be either included or excluded from total rate as marked with 'inclusive' field.]|

<h2 id="tocS_FeeTaxType">FeeTaxType</h2>
<!-- backwards compatibility -->
<a id="schemafeetaxtype"></a>
<a id="schema_FeeTaxType"></a>
<a id="tocSfeetaxtype"></a>
<a id="tocsfeetaxtype"></a>

```json
{
  "amount": 8.05,
  "fttCode": 15,
  "inclusive": true
}

```

Fee or Tax associated with rate - can be either included or excluded from total rate as marked with 'inclusive' field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|none|
|fttCode|integer(int32)|true|none|Code based on OTA's Fee Tax Type (FTT) list (https://www.opentraveldevelopersnetwork.com/code-list)|
|inclusive|boolean|true|none|Whether or not this tax/fee is included in totalAmountAfterTax amount.|

<h2 id="tocS_SustainabilityAward">SustainabilityAward</h2>
<!-- backwards compatibility -->
<a id="schemasustainabilityaward"></a>
<a id="schema_SustainabilityAward"></a>
<a id="tocSsustainabilityaward"></a>
<a id="tocssustainabilityaward"></a>

```json
{
  "label": "LEED",
  "level": "Gold"
}

```

Award/Certification related to sustainability awarded to the hotel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|Name or label of the award/certification|
|level|string|false|none|Optional level of certification|

<h2 id="tocS_LegalEntity">LegalEntity</h2>
<!-- backwards compatibility -->
<a id="schemalegalentity"></a>
<a id="schema_LegalEntity"></a>
<a id="tocSlegalentity"></a>
<a id="tocslegalentity"></a>

```json
{
  "name": "My Great Company",
  "taxId": "111-11-1111",
  "address": {
    "addressLines": [
      "910 Mainland Street"
    ],
    "city": "Vancouver",
    "state": "BC",
    "countryCode": "CA",
    "postalCode": "V5K 0A1"
  }
}

```

Provides details about the legal entity associated with this booking if available

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the legal entity|
|taxId|string|true|none|Tax identity of the legal entity|
|address|[Address](#schemaaddress)|false|none|none|

<h2 id="tocS_ThreeDSecure">ThreeDSecure</h2>
<!-- backwards compatibility -->
<a id="schemathreedsecure"></a>
<a id="schema_ThreeDSecure"></a>
<a id="tocSthreedsecure"></a>
<a id="tocsthreedsecure"></a>

```json
{
  "avv": "string",
  "cavvAlgorithm": "string",
  "messageVersion": "string",
  "transactionId": "string",
  "threeDSServerTransactionID": "string",
  "eci": "string",
  "exemptionCode": "string"
}

```

3D Secure Strong Customer Authentication payment verification parameters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avv|string|true|none|For 3DS1, this is the CAVV. For 3DS2, this is the AVV.|
|cavvAlgorithm|string|false|none|Identifies the algorithm used to generate the CAVV for 3DS1.|
|messageVersion|string|true|none|3D Secure version|
|transactionId|string|false|none|Unique transaction identifier assigned by the 3DS Server to identify a single transaction.|
|threeDSServerTransactionID|string|false|none|For 3DS1, this identifies the XID. For 3DS2, this identifies the dsTransactionID.|
|eci|string|true|none|Electronic Commerce Indicator|
|exemptionCode|string|false|none|Identifies SCA exemption type|
