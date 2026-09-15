---
description: Deprecate an API — adds banner, removes from nav, updates deprecated list, and adds release notes entry
---

# Deprecate API

> **Files are never deleted.** The `.markdown` files in `src/api-reference/` and `src/api-explorer/` must remain in the repository. They stay published with the deprecation banner so existing links continue to work.

Use this command to fully process an API deprecation. Provide the details when invoking:

```
/deprecate-api
API name: <display name, e.g. "Latest Bookings">
File path: <path to .markdown file, e.g. src/api-reference/insights/latest-bookings-resource.markdown>
Deprecation date: <e.g. September 14, 2026>
Replacement: <replacement API name + link, or "none">
```

## Files to update

| File | Change |
|------|--------|
| API `.markdown` file in `src/api-reference/` | Add deprecation banner — **do not delete** |
| API `.markdown` file in `src/api-explorer/` | Add deprecation banner (if file exists) — **do not delete** |
| `src/_data/sidebars/api-reference.yml` | Remove entry (and parent group if now empty) |
| `src/_data/sidebars/api-explorer.yml` | Remove entry (if present) |
| `src/api-reference/deprecated.markdown` | Add entry under correct alphabetical section |
| `src/tools-support/release-notes/api/YYYY-MM-DD.md` | Add `### Deprecation of` under `## New This Month` |

---

## Step 1 — Add deprecation banner

Insert immediately after the front matter (before the `# Title` heading or swagger include):

```html
<div class="alert alert-danger">
  <p><strong>This API has been deprecated.</strong></p>
  <p>Deprecation Date: <DEPRECATION_DATE></p>
  <p>Partners and customers using a deprecated API should contact SAP Concur and discuss moving to the latest versions.</p>
  <p>Learn more in the <a href="/tools-support/deprecation-policy.html">API Lifecycle & Deprecation Policy.</a></p>
</div>
```

If a replacement exists, add before the closing `</div>`:
```html
  <p>This API has been replaced by <a href="<REPLACEMENT_URL>"><REPLACEMENT_NAME></a>.</p>
```

Apply to **both** the `src/api-reference/` file and the `src/api-explorer/` file if it exists. Check `src/api-explorer/v3-0/` (and other version folders) for a matching `.markdown` file.

---

## Step 2 — Remove from left nav

In `src/_data/sidebars/api-reference.yml`, remove the `- title / url` entry for this API.

If the parent group becomes empty (no children left), remove the parent group too.

If the API has an entry in `src/_data/sidebars/api-explorer.yml`, remove it there as well.

---

## Step 3 — Add to deprecated list

In `src/api-reference/deprecated.markdown`, add a link to the API under the correct alphabetical section.

- If the API belongs to a group (e.g. Insights, Callouts), use a sub-list:
  ```markdown
  * Group Name
    * [API Name](/api-reference/path/to/file.html)
  ```
- If standalone, add as a top-level list item in alphabetical order.

---

## Step 4 — Add release notes entry

In the current month's RN file (`src/tools-support/release-notes/api/YYYY-MM-DD.md`), add under `## New This Month`:

```markdown
### Deprecation of <API NAME>

Effective <DEPRECATION_DATE>, the <API NAME> API is deprecated. Decommission will follow.
```

If there is a replacement, append: `This has been replaced by [<REPLACEMENT_NAME>](<REPLACEMENT_URL>).`

New entries go at the **top** of `## New This Month`.

---

## Next month — Deprecations and Decommissions table

Starting the month after the deprecation is announced, add to the **Deprecations and Decommissions** table in every subsequent monthly RN file until decommission:

```
[MM/YYYY](/tools-support/release-notes/api/YYYY-MM-DD.html)|Deprecation of <API NAME>|Effective <DEPRECATION_DATE>, the <API NAME> API was deprecated. Decommission will follow.
```

---

## Rules

- Deprecation date format: `Month DD, YYYY` (e.g. `September 14, 2026`) — never use numeric-only format in user-facing text
- Never remove the `.markdown` file — it stays published with the banner
- Never remove the API from `src/api-reference/deprecated.markdown` after adding it
- Do not modify the API's content — only add the banner
