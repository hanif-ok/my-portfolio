---
title: "Long Edge, Short Edge"
summary: "Turn printed sheets over in 3D and see whether to flip on the long edge or the short edge, before you print a whole stack."
year: 2026
order: 1
cover: "/images/sandbox/long-edge-short-edge.svg"
coverAlt: "A sheet of paper turning over like a book page on a slate plate, with a curved arrow above it and an amber triangle on its back pointing up."
liveHref: "https://long-edge-short-edge.hanifok.com/"
repoHref: "https://github.com/hanif-ok/long-edge-short-edge"
stack: ["JavaScript", "CSS 3D transforms", "PDF.js", "GitHub Pages"]
---

Double-sided printing asks you to pick "Flip on long edge" or "Flip on short edge". Most people guess, and if they guess wrong, every back page comes out upside down. Booklets, posters and two pages per sheet make it even harder.

The page copies Adobe Reader's Print window, then shows the printed paper in 3D. Drag the top sheet sideways to turn it like a book, or up to turn it like a calendar. The text under the preview says which pages you are looking at and whether each one is upright. When one is not, it tells you which setting to change.

Booklets can be folded and read page by page, bound on the left or the right. You can also drop in your own PDF. It opens in the browser and is never uploaded.

It is one static page with no build step and no framework. The layout logic is plain JavaScript with its own Node tests, and the 3D is CSS transforms.
