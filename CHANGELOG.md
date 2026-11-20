# Changelog

## [1.0.0] - 10/31/2026

Initial Build. It's Halloween.

Inspired by aero.zeplin (2022)

### Major Changes and Updates

- Statamic 6 min requirements
- Blueprints use `sections` 
- Globals are in `content/globas/default`
- Bard sets are all grouped
- Design framework is Makr.css and Vite 8
- Icon choices are Font Awesome 7 Free or Icon Scout Unicons 4
- Share buttons for the device share sheet, Bluesky, Threads, Mastodon, X, Facebook, LinkedIn, Reddit, WhatsApp, email and copy link
- Excerpts use the built-in `bard_text` modifier
- Posts moved from `/{slug}` to `/blog/{slug}`, so a page and a post can no longer claim the same URL
- Fixed header with a padding offset → sticky header
- highlight.js only loads on pages with code, with a curated set of languages

### Added

- Light, dark and auto themes with a toggle and no flash of the wrong theme
- `fediverse:creator`, `rel="me"`, `twitter:site`, `article:*` meta, canonical URLs, noindex, JSON-LD
- Atom feed (`/feed`) and XML sitemap (`/sitemap.xml`)
- SEO tab on pages and posts. Featured image on posts
- Video set (click-to-load, youtube-nocookie / Vimeo dnt) and social embed set
- Responsive `srcset` with WebP output, plus width/height attributes to prevent layout shift
- Reading time, older/newer navigation, author card, tag counts, a styled 404 page
- Skip link, labelled icon buttons, `aria-current` navigation, an accessible mobile menu