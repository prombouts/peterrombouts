---
name: static-html-pages
description: Build, edit, or review static websites and standalone pages using plain HTML, CSS, and JavaScript. Use when asked for a static HTML page, landing page, small multi-page site, or a frontend that must run without a framework or build step.
---

# Static HTML Pages

Create deployable static pages with semantic HTML, responsive CSS, and only the JavaScript needed for the requested interactions.

## Workflow

1. Inspect the existing files and preserve the project's conventions. Clarify the page purpose from the request; do not invent a framework or build pipeline.
2. Keep a single-page deliverable self-contained when that is useful or requested. For a multi-page site or maintainable project, use separate `.html`, `.css`, and `.js` files and shared assets as appropriate.
3. Use relative links and asset paths so the site works from a local folder or static host. Do not assume a server-side runtime, database, or API.
4. Build the page with semantic landmarks, a logical heading hierarchy, meaningful link and button labels, and accessible form labels. Add keyboard-visible focus styles and useful alternative text for informative images.
5. Make the layout responsive, ensure content remains usable at narrow widths, and respect `prefers-reduced-motion`. Use design choices that fit the brief rather than defaulting to generic templates.
6. Avoid dependencies, remote fonts, analytics, and third-party scripts unless requested or needed; explain any external runtime requirement.
7. Verify links, asset paths, and interactions. If browser testing is available, inspect the page at mobile and desktop widths and check the browser console. Otherwise, state what could not be visually verified.

## Constraints

- Prefer native HTML and CSS features before adding JavaScript.
- Keep behavior functional without JavaScript when practical; do not add decorative controls that do nothing.
- Do not put untrusted content into `innerHTML`; use text-safe DOM APIs or sanitize it with an established sanitizer when HTML rendering is required.
- Preserve existing content and behavior unless the request calls for changing them.
