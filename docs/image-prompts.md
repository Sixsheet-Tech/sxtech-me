# SIXSHEET Tech — Image Prompt Pack (Oct 2026 redesign)

Generate each image, save it with the **exact file name**, and drop it into
`src/assets/profile/` (replacing the existing file). JPG or PNG is fine —
Claude will compress/optimize after you add them.

## Shared style (prepend to every prompt)

> Premium corporate photography, bright airy light, soft lavender-white haze,
> violet (#6A1BFA) and indigo (#4F46E5) accent light, subtle diagonal glass /
> light-ray shapes, modern Bangkok / Asian business setting, Asian people,
> photorealistic, high detail, no text, no logos, no watermark.

Negative (if supported): text, letters, logos, watermark, distorted hands,
extra fingers, cartoon, dark gloomy, oversaturated.

## Slots

| File | Size (min) | Ratio | Used on | Prompt (after shared style) |
|---|---|---|---|---|
| `hero-city.jpg` | 1600×2000 | 4:5 | Home hero | Low-angle view of a glass skyscraper and modern glass office building at sunrise, wet reflective plaza, large translucent violet diagonal glass panel overlapping the sky |
| `belief-people.jpg` | 1600×2000 | 4:5 | Home — Core belief | Side profile of a confident young Asian businessman and businesswoman looking upward together, a thin glowing violet light line flowing between them, soft city skyline behind |
| `vision-mountain.jpg` | 1600×2000 | 4:5 | About — Vision | A person standing at the end of a long glass walkway facing a sunrise over layered purple mountains, rays of light, sense of possibility |
| `cta-city.jpg` | 2000×1500 | 4:3 | CTA band (all pages) | Businessman seen from behind standing on a reflective rooftop overlooking a vast city at sunrise, purple-pink sky |
| `services-hero.jpg` | 2000×1500 | 4:3 | Services hero | Diverse Asian team around a table collaborating with holographic AI interface panels, glowing violet light, glass office with city view |
| `pillar-business.jpg` | 1200×800 | 3:2 | Pillar — Business | Cluster of modern skyscrapers at golden hour by a river |
| `pillar-people.jpg` | 1200×800 | 3:2 | Pillar — People | Silhouettes of five business people walking toward a sunrise city skyline |
| `pillar-technology.jpg` | 1200×800 | 3:2 | Pillar — Technology | Sweeping curved futuristic architecture, white and steel, blue sky |
| `pillar-ai.jpg` | 1200×800 | 3:2 | Pillar — AI | Abstract violet light-speed streaks converging to a bright core, deep indigo background |
| `moment-scale.jpg` | 1200×750 | 16:10 | Moment — Ready to scale | Executive presenting a rising growth chart on a large screen to a team in a bright meeting room |
| `moment-execution.jpg` | 1200×750 | 16:10 | Moment — Stuck in execution | Stressed team at a meeting table in front of a kanban board full of sticky notes |
| `moment-ai.jpg` | 1200×750 | 16:10 | Moment — Ready for AI | Team reviewing an "AI opportunities" dashboard on large screens (no readable text) |
| `moment-growth.jpg` | 1200×750 | 16:10 | Moment — Next growth engine | Leadership team discussing a world map dashboard on a large screen |
| `step-discover.jpg` | 1200×400 | 3:1 | Services — Discover | Close-up of hands analyzing data on a tablet with holographic charts |
| `step-design.jpg` | 1200×400 | 3:1 | Services — Design | Hand writing on sticky notes on a glass wall planning board |
| `step-build.jpg` | 1200×400 | 3:1 | Services — Learn & Build | Hands-on AI workshop, people with laptops facing a big screen glowing with an AI symbol |
| `step-adopt.jpg` | 1200×400 | 3:1 | Services — Adopt | Hands on a keyboard with floating workflow icons glowing violet |
| `exp-executive.jpg` | 1200×750 | 16:10 | Expertise 01 | Asian male speaker presenting AI strategy for business growth to executives, big screen with charts |
| `exp-marketing.jpg` | 1200×750 | 16:10 | Expertise 02 | Asian female speaker running an AI content creation workshop, screen with social media visuals |
| `exp-creative.jpg` | 1200×750 | 16:10 | Expertise 03 | Instructor showing AI-generated image and video creation on a large screen to a class |
| `exp-productivity.jpg` | 1200×750 | 16:10 | Expertise 04 | Asian female trainer presenting AI tools for everyday work, workflow icons on screen |
| `ind-retail.jpg` | 1600×1000 | 16:10 | Industry — Retail/FMCG | Young woman shopping in a bright modern mall with digital advertising screens |
| `ind-hospitality.jpg` | 1600×1000 | 16:10 | Industry — Hospitality | Woman in a sun hat relaxing at a luxury resort infinity pool at sunset overlooking the sea |
| `ind-financial.jpg` | 1600×1000 | 16:10 | Industry — Financial | Businessman at a laptop with analytics dashboards, floor-to-ceiling window over a city at dusk |
| `why-simple.jpg` | 1200×750 | 16:10 | Why 01 | Abstract glossy violet and indigo 3D cubes, one glowing |
| `why-reality.jpg` | 1200×750 | 16:10 | Why 02 | Interior of curved futuristic white architecture with a small person for scale |
| `why-practitioners.jpg` | 1200×750 | 16:10 | Why 03 | Team of business people seen from behind looking out of a glass office at a city |
| `why-beyond.jpg` | 1200×750 | 16:10 | Why 04 | Violet flag on a mountain summit above the clouds at sunrise |

## Not AI-generated — use real assets

| File | What to provide |
|---|---|
| `popcont-product.jpg` | Real screenshot/mockup of PopCont (laptop + phone), ≥1600px wide |
| `captures-product.jpg` | Real product photo of Captures booth hardware/app, ≥1600px wide |
| Team photos (`src/assets/founder-*.png`, `team-*.jpg`) | Original headshots, ≥800×800 square |
