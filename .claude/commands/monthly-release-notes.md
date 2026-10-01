---
description: Create or update the monthly API release notes for developer.concur.com
---

# Monthly Release Notes

Use this skill to create a new monthly RN file or add a mid-month update to an existing one.

## Files to update

| File | When |
|------|------|
| `src/tools-support/release-notes/api/YYYY-MM-DD.md` | Always |
| `src/tools-support/release-notes/index.markdown` | New month only |
| `src/_data/sidebars/tools-support.yml` | New month only |

## New month — step by step

0. **Sync fork with upstream** before creating any files:
   ```bash
   git checkout main
   git fetch upstream
   git merge upstream/main
   git push origin main
   git checkout -b docs/MONTH-YYYY-release-notes
   ```
   This ensures Previews and Ongoing items from the previous month are already in main before you copy them forward.

1. **Create the file** — copy previous month's `.md`, save with the new publication date (second Thursday of the month, unless something new needs to go out sooner)
2. **Clean up previous month's content:**
   - Delete all `### Now Available` sections
   - Move `### Preview` items to the **Previews table** — unless promoting to Now Available (then delete from table instead)
   - Move last month's new Deprecation/Decommission notices to **## Ongoing** (keep for at least 2 months so readers don't miss them)
   - Move last month's new cert updates to **## Ongoing**
3. **Add new content** to `## New This Month` (new items go at the top)
4. **Update indexes** (see below)
5. **Validate** the `.yml` with YAMLlint before committing

## Mid-month update

1. Add new RN at the **top** of `## New This Month` — returning readers see it immediately
2. If it's a Now Available: find and remove the matching entry from the Previews table

## Index updates (new month only)

**`src/tools-support/release-notes/index.markdown`** — add at top of "Developer Platform Release Notes" list:
```
* [Month YYYY](./api/YYYY-MM-DD.html)
```

**`src/_data/sidebars/tools-support.yml`** — add at top of "Developer Platform Release Notes" section:
```yaml
- title: Month YYYY
  url: /tools-support/release-notes/api/YYYY-MM-DD.html
```

## End of year archive (late December / early January)

- Move prior calendar year RNs to `src/tools-support/release-notes/api/archive/`
- Create archive index: `src/tools-support/release-notes/api/archive/YYYY-archive-dev.md`
- Update `index.markdown` and `tools-support.yml` with the archive link
- Update all Deprecations and Previews table links to the new archive paths

---

## Content rules

### Structure of each monthly file

```
## New This Month
### Now Available: [API Name]
### Preview: [API Name]
### Important! [Notice]

## Ongoing
(cert renewals, high-impact multi-month notices)

## Previews
(table: Date | API | Preview description)

## Deprecations and Decommissions
(table: Date | API | Details)
```

If `## New This Month` has nothing new, write `Not applicable.` — never leave it blank or remove the heading.

### Key capabilities bullets

Use **third person singular** — describes what the API *does*, not a command to the reader.
- ✅ `Creates, retrieves, and updates meetings`
- ❌ `Create, retrieve, and update meetings`

### Intro paragraphs

Use present tense for Now Available items ("adds", "enables", "includes").
Use future with "will" for Preview items ("The API will provide...").

---

## Brand voice rules

### SAP Concur — always needs a descriptor

`SAP Concur` is the sub-brand name, not a company or product on its own. It must be followed by a descriptor (lowercase).

| ✅ Correct | ❌ Incorrect |
|---|---|
| the SAP Concur platform | SAP Concur enables... |
| SAP Concur solutions | SAP Concur's... (no possessive) |
| SAP Concur data | SAP Concur is committed to... |
| the SAP Concur mobile app | SAP Concur announces... |

### "Concur" as actor — rephrase

Never use "Concur" or "SAP Concur" as the subject performing an action. Rephrase to remove it.
- ❌ `allows Concur to send the traveler's title`
- ✅ `allows the traveler's title to be sent`
- ✅ `enables sending the traveler's title`

### Product names — always full name

When listing multiple products, always use the full name.
- ✅ `Concur Travel, Concur Expense, and Concur Invoice`
- ❌ `Concur Travel, Expense, and Invoice`

### Avoid superlatives
best, fastest, easiest, only, effortless, top-rated, leading, world's best

### Avoid absolutes
all, every, always, never, ensures, exactly, 100%, seamless, safe, eliminate, anywhere, anytime

### Tone — C.I.A.O.
- **Clear** — active voice, no jargon, spell out acronyms
- **Insightful** — explain the benefit, put the change in context
- **Approachable** — use "you / your" to address readers directly; "we / our" to humanize
- **Optimistic** — focus on benefits, avoid overpromising
