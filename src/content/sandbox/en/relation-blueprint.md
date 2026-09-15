---
title: "Relation Blueprint"
summary: "Map who is where and trace how they connect, from a database you own outright with no server behind it."
year: 2026
order: 0
cover: "/images/sandbox/relation-blueprint.svg"
coverAlt: "Three linked nodes on a slate plate, one of them amber — the Relation Blueprint mark."
liveHref: "https://relations.hanifok.com/"
repoHref: "https://github.com/hanif-ok/relation_blueprint"
stack: ["React", "TypeScript", "Vite", "Konva", "Cytoscape", "Dexie", "Google Drive API"]
---

Upload a floor plan, place people on it, and see who is where. Every person gets a profile with photos and whatever fields you want to add. Link two people together and the connection follows them around the map.

There is also a graph view, which lays the same people out by relationship instead of location.

No backend, no account. You connect your own Google Drive and the data sits there, in a normal folder you can open or delete without the app. It only ever gets access to the files it created, not the rest of your Drive.

Everything runs locally and syncs to Drive when you are online. Writes commit in a single step, so a closed tab or a dropped connection will not leave you with a half-written database.

Search is scoped per field, so you can look for "smith" in names only rather than everywhere at once.
