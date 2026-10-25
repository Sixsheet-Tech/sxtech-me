# Blog posts

One folder per article, one file per language:

```
content/blog/<slug>/en.md   → https://sxtech.me/blog/<slug>
content/blog/<slug>/th.md   → https://sxtech.me/th/blog/<slug>
```

The slug is shared by both languages, so the EN and TH versions link to each other (hreflang).

## Frontmatter

```md
---
title: Question-style title readers would search for
description: One or two sentences — used for Google, social cards and AI answers.
date: 2026-10-25
updated: 2026-11-02        # optional
author: ter                # ter | kho | j | krit  (see TEAM in src/lib/site-content.ts)
tags: AI Adoption, Strategy
cover: workshop/step-design.jpg   # optional, path under src/assets/
status: draft              # remove this line to publish
---
```

`status: draft` posts show only on the local dev server (with a "Draft" badge), are `noindex`, and are left out of the sitemap. Delete the line once the author has approved the text.

## Writing for search and AI answers

- Open with a **Short answer** paragraph (2–3 sentences) that answers the title directly.
- Use `##` headings for each step or idea; tables are welcome.
- End with `## FAQ` (or `## คำถามที่พบบ่อย`) and `###` questions — these become FAQPage structured data.
- Include at least one first-hand observation from real work. No invented numbers or client names.
