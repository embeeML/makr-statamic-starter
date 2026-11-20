# makr statamic starter kit

A sleek and minimalistic, writing first starter kit for personal and professional blogs, built with makr.css 

## Features

- **Statamic 6**: tabbed blueprints, the new globals storage, Bard set groups.
- **makr.css** a layered stylesheet with tokens, fluid type, a grid and components. You don't need to configure or learn utility classes.
- **Light / dark / auto themes**, with a visitor toggle that remembers the choice and applies it before the page paints.
- **Font Awesome or IconScout Unicons** icons. Choose the set in the control panel. Icons are inlined SVGs through one partial.
- **Social profiles** for Bluesky, Threads, Mastodon, X, Instagram, Facebook, LinkedIn, YouTube, TikTok, Pinterest, GitHub, CodePen, Dribbble, Behance, Discord, Twitch, Reddit, Medium, Spotify, Vimeo, Telegram, WhatsApp, Snapchat, email and RSS. Each profile can add Fediverse `rel="me"` verification.
- **Share buttons**: device share sheet (Web Share API), Bluesky, Threads, Mastodon (asks for the visitor's server once), X, Facebook, LinkedIn, Reddit, WhatsApp, email and copy link.
- **Link previews & SEO**: Open Graph, `article:*` tags, `twitter:site`, `fediverse:creator`, canonical URLs, per-entry SEO overrides, a noindex toggle, and JSON-LD (`BlogPosting` and `WebSite` with `sameAs`).
- **Atom feed** at `/feed` and an **XML sitemap** at `/sitemap.xml`.
- **Bard sets**: an image set (narrow/default/wide, responsive `srcset`, WebP), a privacy-friendly video set (YouTube/Vimeo load only after a click), and a social embed set.
- Reading time, older/newer post links, an optional author card, and a tag index with post counts.
- **Vite** with Alpine.js. highlight.js loads only on pages that contain code.
- Accessibility: skip link, visible focus states, labelled icon buttons, `aria-current` navigation, and an Escape key that closes the mobile menu.

## Requirements

- Statamic 6 (PHP 8.3+, Laravel 12+)
- Node 20+ (only if you change CSS/JS. Compiled assets are included.)

## Install

New site:

```bash
statamic new mysite embeemedialab/makr-statamic-starter
```

Existing site:

```bash
php please starter-kit:install embeemedialab/makr-statamic-starter
```

Then create a user (`php please make:user`) and build the assets once:

```bash
npm install
npm run build      # or: npm run dev
```

> The kit replaces `routes/web.php`, `package.json` and `vite.config.js`. If you're installing into an existing site, merge your own routes back in.

## Customising

### Colors, fonts, spacing

Everything is a makr.css variable. Change them at the bottom of `resources/css/site.css`:

```css
:root {
  --color-primary: #0f766e;
  --font-heading: "Fraunces", Georgia, serif;
  --type-ratio-max: 1.333;
}
```

The framework lives in a cascade layer, so your CSS always wins and you never need `!important`. The full token list is in `resources/css/makr/makr.css` under `makr.tokens`.

**My personal themed styles:** uncomment `@import "./makr/presets/mbm.css";` in `site.css`. Then set the default theme to Dark and add the Urbanist font link to `layout.antlers.html`.

**Updating makr.css:** replace `resources/css/makr/makr.css` with a newer `dist/makr.css` (or a pinned `releases/vX.Y.Z/makr.css`) and run `npm run build`.

### Icons

```antlers
{{ partial:partials/icon name="bluesky" }}
{{ partial:partials/icon name="arrow-right" class="icon-lg" }}
{{ partial:partials/icon name="github" set="uil" }}
```

Icons live in `resources/svg/icons/fa/` (Font Awesome Free 7) and `resources/svg/icons/uil/` (IconScout Unicons 4, line). To swap or add one, save an SVG from fontawesome.com or iconscout.com with the name you want, then reference that name.

Unicons doesn't include Bluesky, Threads, Mastodon, TikTok, Pinterest, Twitch, Spotify, CodePen, Vimeo or the X logo. For those, the `uil/` folder uses the Font Awesome versions. Replace them with your own IconScout downloads if you have them.

### Social & sharing

Control panel → **Globals → Social**:

- **Profiles**: footer icons. Turn on `rel="me"` for Mastodon, then add your site URL to your Mastodon profile to get the verified check.
- **Sharing**: which share buttons appear under posts.
- **Meta & Verification**: `twitter:site` handle, `fediverse:creator`, and whether profiles are added to structured data.

### Site settings

Control panel → **Globals → Publication**: name, description, logos (light and dark), default theme, theme toggle, icon set, posts per page, reading time, author display, Tags link, RSS link, default share image, title separator.

## File map

| Path | What |
|---|---|
| `resources/css/site.css` | Entry stylesheet: imports makr.css and components, holds your theme variables |
| `resources/css/makr/` | Vendored makr.css (+ MBM preset, license) |
| `resources/css/components/` | Header, footer, posts, content, share, media, code |
| `resources/js/site.js` | Alpine setup; modules in `resources/js/modules/` |
| `resources/svg/icons/` | Icon sets |
| `resources/views/partials/seo.antlers.html` | All meta tags and JSON-LD |
| `resources/views/partials/share.antlers.html` | Share buttons |
| `resources/views/sets/` | Bard set templates |
| `resources/views/feed.antlers.xml`, `sitemap.antlers.xml` | Feed and sitemap |
| `routes/web.php` | `/feed` and `/sitemap.xml` routes |

## Credits & licenses

- Layout inspired by [aero.zeppelin](https://github.com/ivymayhem/aero-zeppelin) from Andreas Schantl.
- [makr.css](https://github.com/embeeML/makr.css) by Matthew Boyles, MIT.
- [Font Awesome Free](https://fontawesome.com/license/free) icons, CC BY 4.0 (attribution kept in each SVG).
- [Unicons](https://iconscout.com/unicons) by IconScout, under the IconScout Simple License (the icons may not be redistributed as a standalone icon pack).
- Demo photos from [Unsplash](https://unsplash.com).
