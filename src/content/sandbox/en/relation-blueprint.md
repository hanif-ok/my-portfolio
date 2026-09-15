---
title: "Relation Blueprint"
summary: "Map who is where and trace how they connect — from a database you own outright, with no server behind it."
year: 2026
order: 0
cover: "/images/sandbox/relation-blueprint.svg"
coverAlt: "Three linked nodes on a slate plate, one of them amber — the Relation Blueprint mark."
liveHref: "https://relations.hanifok.com/"
repoHref: "https://github.com/hanif-ok/relation_blueprint"
stack: ["React", "TypeScript", "Vite", "Konva", "Cytoscape", "Dexie", "Google Drive API"]
---

A floor plan with faces on it.

That is the whole idea. Upload a map of somewhere real — an office, a venue, a street — and drop people onto it. Now you can see who sits where. Click anyone to read who they are. Draw a line between two people and the map keeps that line attached as you move them around.

When the map stops being the useful view, there is a graph: the same people, arranged by relationship instead of geography. Tap someone and everything rearranges around them.

## Your data never leaves your hands

This is the part I care about most.

There is no server. No sign-up, no account, no database sitting on someone else's machine quietly collecting what you typed. You connect your own Google Drive, and that is where everything lives — in a normal folder you can open, copy or delete without ever asking the app's permission.

The app can only see files it made itself, never the rest of your Drive. It forgets your login the moment you close the tab.

That matters because this thing holds real people — their names, their faces, their phone numbers. It felt wrong to build it any other way.

## Built to survive being interrupted

Browsers get closed. Laptops go to sleep. Wi-Fi drops halfway through a save.

So the database is written so that the very last step is the only one that counts. Everything before it is invisible. If a save dies partway through, you do not get half a database — you get the old one, perfectly intact, as if nothing happened.

It also works with no internet at all. Changes wait, and sync when you come back.

## Search that knows what you meant

Type "smith" and you probably meant the surname, not every blacksmith in your notes.

So you get to choose which fields count. Tick a box and the search only looks there. It shows you which field matched, too, so you can see why something turned up.

## Where it is now

Most of it is built and working. One planned feature got cut on purpose — a second storage option that would have wanted the password to your entire account. The whole point was to ask for as little as possible, so it did not make it in.

Free and open source, top to bottom.
