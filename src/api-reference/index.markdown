---
title: Introduction
layout: reference
redirect_from:
  - /docs-and-resources/documentation/
  - /api-documentation/
---

# API Reference

SAP Concur APIs allow clients or partners to access data and functions within the SAP Concur product ecosystem. Through the use of these exposed endpoints and functions you can solve a vast array of different business issues and reporting needs such as:

* Pull data from SAP Concur for in-depth reporting services.
* Reconcile or validate your data by comparing SAP Concur data to what you have.
* Post new data into SAP Concur allowing for programmatic creation of information.
* Update existing information in SAP Concur to match your system data.

## How to Use the APIs

SAP Concur APIs are accessed via an endpoint or URL. For some of our APIs the endpoint will accept parameters that will help refine the results being returned or allow for the insertion or update of data in the SAP Concur system.

Most of the SAP Concur APIs support four different types of requests:

* GET – Used to query information within the SAP Concur system.
* POST – Used to insert data into the SAP Concur system.
* PUT – Used to update existing information in the SAP Concur system.
* DELETE – Used to delete or deactivate existing information in the SAP Concur system.

SAP Concur also supports an alternative type of API referred to as a Callout. The Callout is a pre-configured step or condition that triggers SAP Concur to make a call out to your app to facilitate some sort of business transaction.

Note, occasionally fields may be added to an API for a variety of reasons. Please ensure that your application's code is robust enough to handle non-breaking changes.

## Explore the APIs

For the basic information on the APIs and what they do, you can check out the Swagger docs in [API Explorer](/api-explorer/). Need more in-depth information? You can find information on each API using the links on the left side of the page. Finally, there are some [Integration Guides](/api-guides/) that describe specific workflows. Even if none of them maps to your use case, they’re a good way to learn how to work with the SAP Concur APIs.
