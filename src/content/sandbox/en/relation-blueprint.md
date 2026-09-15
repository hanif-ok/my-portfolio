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

Relation Blueprint answers three questions about a group of people: who is where, what are they like, and how do they connect.

You upload a floor plan — a building, a street, a venue — and place people on it as photo markers. Open anyone to read their profile. Draw links between them and the map grows connectors that follow the markers as you drag them around. There is a graph view for when spatial layout stops being the useful question.

## No server behind it

The whole thing is a static bundle. No backend, no accounts, and no database I control — you connect your own Google Drive, and that is where your data lives, in an ordinary folder you can open, copy or delete without the app.

It asks for the `drive.file` scope only, which means it can touch the files it created and nothing else in your Drive. The access token is held in memory and never persisted; there is no refresh token sitting in your browser.

This is the part I most wanted to get right. An app holding names, phone numbers and photographs of real people should not also ask you to trust a server I run.

## The commit point

It is offline-first, so IndexedDB is the runtime source of truth — changes queue locally and push when you reconnect.

Storage is sharded, and the interesting constraint is that a browser tab can die mid-write at any moment. So the database is written as a set of shards plus a manifest, and **the manifest overwrite is the sole commit point**: shards are written first and stay inert until a new manifest names them. An interrupted write leaves orphaned shards and a perfectly intact database. There is a failure-injection test that kills the write partway through and asserts exactly that.

## Two canvases

The map editor is Konva — layers you can lock and reorder, drawn shapes and zones for rooms, portal markers that jump to another map, and nested map-groups for floor → building → street. Marker coordinates are stored in image space rather than screen space, so re-fitting a background image keeps every person anchored to their actual physical spot. One person placed on six maps stays one record; edit them once and every placement follows.

The graph is Cytoscape. Tap a node and the layout re-forms around that person; tap another and it re-egos onto them; leave focus and your saved layout comes back. Dragging nodes is layout only — it never mutates data.

## The search I actually wanted

Fuzzy, prefix-tolerant, name-boosted — and scoped per attribute with checkboxes. That last part is the whole point: searching "smith" should be able to mean the surname and not every blacksmith in the dataset. Each hit shows which field produced it, and the index updates incrementally as you edit.

## Where it stands

Six of eight v1 phases are shipped and verified. The second storage provider was dropped on purpose rather than left dangling — a Mega.nz login is a full-account credential, and the whole premise here is least privilege, so the scoped Drive alternative won that argument.

Every dependency is free and open source. tldraw got rejected during research for requiring a paid production licence.
