---
description: Decommission an API — adds banner, adds release notes entry, and tracks in subsequent RN tables
---

# Decommission API

> **Files are never deleted.** The `.markdown` and `.json` swagger files in `src/api-reference/` and `src/api-explorer/` must remain in the repository. They stay published with the decommission banner so existing links continue to work.

Use this command to fully process an API decommission. Provide the details when invoking:

```
/decommission-api
API name: <display name, e.g. "Launch External URL v1">
File path: <path to .markdown file, e.g. src/api-reference/callouts/launch-external-url.markdown>
Deprecation date: <date the API was deprecated, or "none" if going straight to decommission>
Decommission date: <e.g. June 23, 2026>
Replacement: <replacement API name + link, or "none">
```

## Files to update

| File | Change |
|------|--------|
| API `.markdown` file in `src/api-reference/` | Add or update decommission banner — **do not delete** |
| API `.markdown` file in `src/api-explorer/` | Add or update decommission banner (if file exists) — **do not delete** |
| `src/_data/sidebars/api-explorer.yml` | Remove entry (if not already removed during deprecation) |
| `src/tools-support/release-notes/api/YYYY-MM-DD.md` | Add `### Decommission of` under `## New This Month` |

---

## Step 1 — Add decommission banner

Replace any existing deprecation banner (or insert after front matter if none exists) with:

```html
<div class="alert alert-danger">
  <p><strong>This API has been decommissioned.</strong></p>
  <p>Deprecation Date: <DEPRECATION_DATE></p>
  <p>Decommission Date: <DECOMMISSION_DATE></p>
  <p>Partners and customers using a deprecated API should contact SAP Concur and discuss moving to the latest versions.</p>
  <p>Learn more in the <a href="/tools-support/deprecation-policy.html">API Lifecycle & Deprecation Policy.</a></p>
</div>
```

If going straight to decommission (no prior deprecation), omit the `Deprecation Date` line.

If a replacement exists, add before the closing `</div>`:
```html
  <p>This API has been replaced by <a href="<REPLACEMENT_URL>"><REPLACEMENT_NAME></a>.</p>
```

Apply to **both** the `src/api-reference/` file and the `src/api-explorer/` file if it exists.

---

## Step 2 — Add release notes entry

In the current month's RN file (`src/tools-support/release-notes/api/YYYY-MM-DD.md`), add under `## New This Month`:

```markdown
### Decommission of <API NAME>

Effective <DECOMMISSION_DATE>, the <API NAME> API has been decommissioned.
```

If there is a replacement, append: `This has been replaced by [<REPLACEMENT_NAME>](<REPLACEMENT_URL>).`

New entries go at the **top** of `## New This Month`.

---

## Step 3 — Verify cross-references

Search for links to this API in other pages (especially newer version pages, migration guides, and "see also" sections) and update them if needed:

```bash
grep -r "path/to/decommissioned-api" src/
```

Update any references found to point to the replacement API, or remove them if no replacement exists.

---

## Step 4 — Remove from api-explorer sidebar (if not already removed)

If the API was not removed from `src/_data/sidebars/api-explorer.yml` during deprecation, remove the entry now.

The `src/api-reference` left nav entry should already have been removed during deprecation. If not, remove it now.

---

## Next month — Deprecations and Decommissions table

Starting the month after the decommission is announced, add to the **Deprecations and Decommissions** table in every subsequent monthly RN file:

```
[MM/YYYY](/tools-support/release-notes/api/YYYY-MM-DD.html)|Decommission of <API NAME>|Effective <DECOMMISSION_DATE>, the <API NAME> API was decommissioned.
```

---

## Rules

- Date format: `Month DD, YYYY` (e.g. `June 23, 2026`) — never use numeric-only format in user-facing text
- **Never delete `.markdown` files** — they stay in the repo and remain published with the decommission banner
- Do NOT add the API to `src/api-reference/deprecated.markdown` — decommissioned APIs do not go on the deprecated list
- If the API was previously in `deprecated.markdown` (deprecated before decommission), **remove it** from that list
- Do NOT remove the API from the left nav if it was not already removed during deprecation — check first
