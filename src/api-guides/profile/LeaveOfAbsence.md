---
title: Leave of Absence Guide
layout: reference
---

# Leave of Absence Guide

The leave of absence(LOA) guide is designed to support clients & partners as they adopt the use of leave of absence dates.
This guide presents a set of detailed requirements, examples of functionality of LOA.

### Requirements

* A user can go on a leave of absence (LOA)
* Each LOA has a start date
* Current LOA may or may not have an end date
* Past LOAs must have an end date
* LOAs can be voluntary or mandatory (not a required field)
* LOAs are independent of active flag and start/termination date

### Implementation

* added a field `leavesOfAbsence` to the user profile (under the enterprise extension)
  * multi-valued of type `leaveOfAbsence`
* type `leaveOfAbsence` has fields:
  * `startDate` (start of leave)
  * `endDate` (end of leave)
  * `type` (string with canonical values `"voluntary"`, `"mandatory"`)
* added some validations:
  * for each LOA, `startDate` must be before `endDate`
  * LOAs cannot overlap

### Example patches

#### creating or replacing the list of LOAs for a user:

```
{
  "Operations": [
    {
      "op": "replace",
      "path": "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:leavesOfAbsence",
      "value": [
        {
          "startDate": "2022-09-13",
          "endDate": 2022-10-13",
          "type": "voluntary"
        },
        {
          "startDate": "2023-07-01",
          "endDate": null,
          "type": "mandatory"
        }
      ]
    }
  ]
}
```

#### adding an LOA to the end of an existing list:

```
{
  "Operations": [
    {
      "op": "add",
      "path": "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:leavesOfAbsence",
      "value": [{"startDate": "2017-03-01", "endDate": "2017-06-15", "type": "voluntary"}]
    }
  ]
}
```

#### replacing a particular LOA:

```
{
  "Operations": [
    {
      "op": "replace",
      "path": "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:leavesOfAbsence[startDate eq \"2020-06-01\"]",
      "value": {"startDate": "2020-06-01", "endDate": "2020-06-02"}
    }
  ]
}
```

#### removing a particular LOA:

```
{
  "Operations": [
    {
      "op": "remove",
      "path": "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:leavesOfAbsence[startDate eq \"2015-03-01\"]"
    }
  ]
}
```
