# Nutrias in Prague

A small Astro landing page about nutrias (coypu) on the Vltava river, with content fully editable via Storyblok.

## Storyblok Space

| | |
|---|---|
| **Space name** | Nutrias in Prague |
| **Space ID** | `293511891329712` |
| **Region** | EU (`eu-central-1`) |
| **Space URL** | https://app.storyblok.com/#!/me/spaces/293511891329712/ |
| **Preview token** | `XvEHMsVBSmZJdWYSopIr5Qtt` |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy the env file and add your token
cp .env.example .env
# STORYBLOK_TOKEN is already set in .env — see below

# 3. Start the dev server
npm run dev
```

The site runs at `http://localhost:4321`. It fetches the `home` story in **draft** mode during development so edits in the Storyblok UI appear immediately.

## Environment Variables

| Variable | Value |
|---|---|
| `STORYBLOK_TOKEN` | `XvEHMsVBSmZJdWYSopIr5Qtt` (Preview token) |

## Content Model

Five components were created in the Storyblok space:

### `page` — Content Type
Top-level page shell. Contains a single **Body** Blocks field restricted to `hero`, `text_section` and `features_section`.

### `hero` — Nestable
Full-bleed hero section.

| Field | Type | Notes |
|---|---|---|
| `headline` | Text | Required |
| `subheadline` | Textarea | |
| `image` | Asset (images) | Optional background image |
| `cta_text` | Text | Button label |
| `cta_link` | Multilink | Button destination |

### `text_section` — Nestable
Rich text block with an optional background colour.

| Field | Type | Options |
|---|---|---|
| `title` | Text | |
| `content` | Rich text | |
| `background` | Option | `light` (default) · `white` · `dark` |

### `features_section` — Nestable
Responsive grid of feature cards.

| Field | Type | Notes |
|---|---|---|
| `title` | Text | |
| `subtitle` | Text | |
| `items` | Blocks | Restricted to `feature_item` |

### `feature_item` — Nestable
Individual feature card.

| Field | Type | Notes |
|---|---|---|
| `icon` | Text | Emoji, e.g. `🦫` |
| `title` | Text | Required |
| `description` | Textarea | |

## Home Story

The `home` story (slug: `home`) is pre-seeded and published with four sections:

1. **Hero** — "Where Land Meets Water"
2. **Text Section** — "What is a Nutria?" (light background)
3. **Features Section** — "Key Facts" (6 cards: size, habitat, diet, teeth, lifespan, range)
4. **Text Section** — "Nutrias in Prague" (white background)
5. **Text Section** — "Conservation & Management" (dark background)

## Project Structure

```
src/
├── components/storyblok/
│   ├── Page.astro           # Renders body blocks
│   ├── Hero.astro           # Full-bleed hero
│   ├── TextSection.astro    # Rich text + background variants
│   ├── FeaturesSection.astro
│   └── FeatureItem.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro          # Fetches 'home' story from Storyblok
└── styles/
    └── global.css
```

## Storyblok Visual Editor

To enable live preview in the Storyblok Visual Editor, set the preview URL to:

```
http://localhost:4321/
```

under **Settings → Visual Editor** in your space.

## Build & Deploy

```bash
npm run build    # Output goes to dist/
npm run preview  # Preview the production build locally
```

For production, swap the Preview token for a **Public** access token and the `version` query in `index.astro` will automatically switch to `published`.
