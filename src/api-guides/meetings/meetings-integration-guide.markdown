---
title: Meetings - Third-Party Meetings Integration Guide
layout: reference
---


# Meetings - Third-Party Meetings Integration Guide

This guide describes how third-party meeting partners, such as event and meeting-management providers, integrate with the SAP Concur Meetings API to create and manage meetings and their attendees.

**Note:** You must have a registered application on App Center and a valid OAuth 2.0 bearer token.

## APIs Used in this Guide

`Base URL: https://us.api.concursolutions.com/meetings/v4` (US) / `https://emea.api.concursolutions.com/meetings/v4` (EMEA)

* `/meetings`
* `/meetings/{meetingId}`
* `/meetings/{meetingId}/attendees`
* `/meetings/{meetingId}/attendees/bulk`
* `/meetings/{meetingId}/attendees/{attendeeId}`

See the [Meetings API reference](https://developer.concur.com/api-reference/travel/meetings-v4/v4.meetings-get-started.html) for the full list of operations, request/response schemas, and error codes.

## Authentication and Scopes

All requests require an OAuth 2.0 bearer token in the `Authorization: Bearer <token>` header. Partners obtain the token via the OAuth password grant, consistent with other enterprise applications.

The API uses per-operation scopes:

* `meetings.read` — read meetings and attendees (GET operations)
* `meetings.write` — create, update, and delete meetings and attendees (POST, PATCH, DELETE operations)

## Tenant Scoping with `companyId`

Meeting-scoped operations accept an optional `companyId` query parameter. When omitted, the company is resolved from the token's company claim. When supplied, it must match the token's company; a mismatch returns `403`. Supplying a well-formed `companyId` that the token is entitled to is recommended for clarity.

## Workflow

### 1. Create a meeting

`POST /meetings`

Creates a meeting in the caller's company. The response includes the generated `meetingId` used for all subsequent operations.

### 2. Add attendees

Add attendees one at a time with `POST /meetings/{meetingId}/attendees`, or in a single call with the bulk endpoint:

`POST /meetings/{meetingId}/attendees/bulk`

The bulk endpoint accepts a JSON body of the form `{ "attendees": [ ... ] }` and returns **`207 Multi-Status`**, with a per-item status so you can tell which attendees succeeded and which failed. An empty or missing `attendees` array returns `400`.

### 3. Read and update

* `GET /meetings/{meetingId}` — retrieve a meeting
* `GET /meetings/{meetingId}/attendees` — list attendees
* `PATCH /meetings/{meetingId}` and `PATCH /meetings/{meetingId}/attendees/{attendeeId}` — apply partial updates using JSON Merge Patch (`application/merge-patch+json`)

### 4. Remove

* `DELETE /meetings/{meetingId}/attendees/{attendeeId}` — remove an attendee
* `DELETE /meetings/{meetingId}` — delete the meeting

## Error Handling

Errors are returned using the standard SAP Concur error envelope:

```json
{
  "errors": [
    { "errorCode": "ATTENDEE_NOT_FOUND", "errorMessage": "Attendee does not exist: <id>" }
  ]
}
```

Handle the `errorCode` field programmatically; `errorMessage` is intended for logging and diagnostics.
