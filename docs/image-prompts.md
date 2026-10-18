# SIXSHEET Tech — Site Imagery

Where every image on the site comes from, and the prompts for the ones that
are still AI-generated. To swap an image, keep the **exact file name** and
replace the file; Claude will crop/compress it.

## Real photos (`src/assets/workshop/`, `src/assets/team/`)

From SIXSHEET training sessions. Participant faces and name badges are
blurred; images from PIR engagements are excluded.

| File | Used on |
|---|---|
| `workshop/hero-hall.jpg` | Home hero |
| `workshop/belief-founders.jpg` | Home — Core belief |
| `workshop/services-hero.jpg` | Services hero |
| `workshop/step-discover.jpg` · `step-design.jpg` · `step-build.jpg` · `step-adopt.jpg` | Process steps (Home teaser + Services) |
| `workshop/why-simple.jpg` · `why-reality.jpg` · `why-practitioners.jpg` · `why-beyond.jpg` | "Why SIXSHEET Tech" cards (Home + About) |
| `team/team-ter.jpg` · `team-kho.jpg` · `team-j.jpg` · `team-krit.jpg` | About — team, Contact — "Meet the team" |

## Real product screenshots (`src/assets/profile/`)

| File | Used on |
|---|---|
| `popcont-product.jpg` | Platforms + Home (popcont.ai, account header cropped out) |
| `captures-product.jpg` | Platforms + Home (captures.photo/booth) |

## AI-generated (Gemini) — `src/assets/profile/`

Replace with real photos when available.

**Shared style (prepend to every prompt):**

> Premium corporate photography, photorealistic, high detail, bright airy
> light, soft lavender-white haze, violet (#6A1BFA) and indigo (#4F46E5)
> accent light. No text, no letters, no logos, no watermark.

| File | Ratio | Used on | Prompt (after shared style) |
|---|---|---|---|
| `hero-city.jpg` | 4:5 | Industries hero | Low-angle view of a glass skyscraper and a modern glass office building at sunrise, wet reflective plaza, a large translucent violet diagonal glass panel overlapping the sky, modern Bangkok business district |
| `vision-mountain.jpg` | 4:5 | About — Vision | A person seen from behind at the end of a long glass walkway, facing a sunrise over layered purple and lavender mountain ranges |
| `cta-city.jpg` | 4:3 | CTA band (all pages) | A businessman seen from behind on a reflective glass rooftop overlooking a vast modern Asian city at sunrise, purple-pink sky |
| `pillar-business.jpg` | 3:2 | Pillar — Business | A cluster of modern glass skyscrapers at golden hour beside a calm river |
| `pillar-people.jpg` | 3:2 | Pillar — People | Silhouettes of five business people walking together toward a sunrise over a city skyline across a waterfront |
| `pillar-technology.jpg` | 3:2 | Pillar — Technology | Sweeping curved futuristic white and brushed-steel architecture against a clear blue sky, low angle |
| `pillar-ai.jpg` | 3:2 | Pillar — AI | Abstract violet and indigo light-speed streaks converging toward a bright white core, deep indigo background |
| `moment-scale.jpg` | 3:2 | Moment — Ready to scale | An Asian executive presenting a rising growth bar chart on a wall screen to a small team in a bright meeting room |
| `moment-execution.jpg` | 3:2 | Moment — Stuck in execution | A stressed Asian team at a meeting table in front of a kanban board covered in sticky notes |
| `moment-ai.jpg` | 3:2 | Moment — Ready for AI | An Asian team reviewing glowing AI opportunity dashboards (abstract graphics only) on large screens |
| `moment-growth.jpg` | 3:2 | Moment — Next growth engine | An Asian leadership team discussing strategy in front of a glowing world map dashboard |
| `exp-executive.jpg` | 3:2 | Expertise 01 | An Asian male speaker presenting AI strategy to executives, screen with abstract growth charts, audience from behind |
| `exp-marketing.jpg` | 3:2 | Expertise 02 | An Asian female trainer running an AI content workshop, screen with a grid of social media images |
| `exp-creative.jpg` | 3:2 | Expertise 03 | An instructor showing AI-generated cinematic images and a video timeline on a large screen to a class |
| `exp-productivity.jpg` | 3:2 | Expertise 04 | An Asian female trainer presenting AI tools for everyday work, screen with connected app icons |
| `ind-retail.jpg` | 3:2 | Industry — Retail/FMCG | A young Asian woman with a shopping bag in a bright modern mall with digital advertising screens |
| `ind-hospitality.jpg` | 3:2 | Industry — Hospitality | A woman in a sun hat relaxing by a luxury resort infinity pool at sunset over a tropical sea |
| `ind-financial.jpg` | 3:2 | Industry — Financial | An Asian businessman at a laptop with analytics dashboards, floor-to-ceiling window over a city at dusk |

Known nit: `ind-retail.jpg` and `moment-scale.jpg` contain small incidental
background text (shop signs / screen text).
