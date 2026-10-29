# Project instructions

## Project overview

This repository is for a public, static personal portfolio website built for the portfolio assignment. The canonical site is a single scrolling page in `index.html` with Home, About Me, Projects, Skills, and Contact sections. Keep the owner's background, education, projects, skills, and contact details together on that page. Use genuine content supplied by the owner; do not invent personal facts or leave placeholder text in the finished site.

Keep the site usable by opening `index.html` directly and when published from the repository root with GitHub Pages. The individual section HTML files are compatibility pages; navigation from them should return visitors to the matching section in `index.html`.

## Design direction

Use a calm garden palette: light greens and sage for the environment, warm cream for content panels, and soft lilac or butter-yellow floral accents. Do not use red, pink, or rose tones. The single-page site should feel like a garden path as visitors scroll, with foliage framing raised, readable content sections. Keep text dark enough for strong contrast. Prefer system fonts and locally stored assets so the site remains lightweight and works offline.

## Technical rules

- Use plain HTML5, CSS, and browser JavaScript only. Do not add frameworks, libraries, package managers, build tools, or backend code.
- Keep pages as ordinary `.html` files, styles in an external stylesheet, scripts in external `.js` files, and reusable images in a clearly named assets directory.
- Use relative paths for local links, stylesheets, scripts, and images so the site works from both a local folder and a GitHub Pages project URL.
- Use semantic HTML, one `<h1>` per page, logical heading order, and meaningful page titles.
- Make every page responsive for phone and laptop widths without horizontal scrolling. Include a mobile navigation menu that can be used by keyboard and assistive technology.
- Meet accessibility basics: descriptive image alt text, visible focus states, labeled controls, sufficient contrast, and keyboard-operable interactions. Keep images below 500 KB where practical.
- Include at least one additional useful JavaScript interaction beyond the responsive menu. If a contact form is used, explain that it cannot send messages without a backend, validate its fields in JavaScript, and direct the visitor to email.
- Never add secrets, API keys, passwords, tokens, a phone number, or a home address. The repository and published site are public.
- Keep the browser console free of errors. Avoid unnecessary dependencies and generated files.

## Content and project requirements

- The primary navigation links to the five sections in `index.html` using in-page anchors. Navigation from any compatibility page must link to those same homepage anchors.
- Projects must include at least three real projects. Each should have a concise description and an image or screenshot with useful alt text; include a link when one is available.
- Do not publish personal details until the owner provides or approves them.
- Keep `README.md` current with a project description, live site link when known, local viewing instructions, and acknowledgments or notes as needed.
- Maintain `TESTING.md` with at least 12 test cases covering each homepage section at phone and laptop widths, every navigation link, all JavaScript features (including valid and invalid form input if applicable), keyboard navigation, and Lighthouse Accessibility. Record actual results and rerun failed cases after fixes. Run the final plan against the deployed GitHub Pages site.

## Working approach

- Work on one small, reviewable task at a time and follow these instructions for every task.
- Before editing, inspect the existing files and preserve working content. Do not replace owner-provided content or make up biography, education, project, or contact details.
- After each task, summarize the files changed and any manual checks still needed. Do not claim visual, accessibility, or deployment checks were run unless they were.
- Do not add or run automated tests unless the user asks. When the user asks to verify a task, use checks appropriate to the static site and report the results clearly.
- After each completed task, create a Git commit with a short, descriptive message. Push to GitHub only when the user has authorized pushing in the session; never force-push or rewrite history. If no push authorization is present, leave the commit ready for review and state that it needs pushing.
- Never use `git reset` or force push to undo work. Revert with a new commit when requested.
