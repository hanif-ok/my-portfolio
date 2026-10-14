---
lang: "id"
title: "Long Edge, Short Edge"
summary: "Balik kertas hasil cetakan dalam 3D dan lihat apakah kamu perlu flip on long edge atau short edge, sebelum mencetak setumpuk kertas."
year: 2026
order: 1
cover: "/images/sandbox/long-edge-short-edge.svg"
coverAlt: "Selembar kertas yang sedang dibalik seperti halaman buku di atas pelat gelap, dengan panah melengkung di atasnya dan segitiga amber di sisi belakangnya yang menunjuk ke atas."
liveHref: "https://long-edge-short-edge.hanifok.com/"
repoHref: "https://github.com/hanif-ok/long-edge-short-edge"
stack: ["JavaScript", "CSS 3D transforms", "PDF.js", "GitHub Pages"]
---

Saat mencetak bolak-balik, kamu harus memilih "Flip on long edge" atau "Flip on short edge". Kebanyakan orang cuma menebak, dan kalau tebakannya salah, semua halaman belakang keluar terbalik. Booklet, poster, dan dua halaman per lembar membuatnya makin membingungkan.

Halaman ini meniru jendela Print di Adobe Reader, lalu menampilkan kertas hasil cetakannya dalam 3D. Seret lembar paling atas ke samping untuk membaliknya seperti buku, atau ke atas untuk membaliknya seperti kalender. Teks di bawah pratinjau memberi tahu halaman mana yang sedang kamu lihat dan apakah posisinya tegak. Kalau ada yang tidak tegak, teks itu juga memberi tahu pengaturan mana yang perlu diganti.

Booklet bisa dilipat dan dibaca halaman demi halaman, dengan jilid di kiri atau di kanan. Kamu juga bisa memakai PDF sendiri. Berkasnya dibuka di browser dan tidak pernah diunggah.

Semuanya cuma satu halaman statis, tanpa langkah build dan tanpa framework. Logika tata letaknya ditulis dengan JavaScript biasa dan punya tes Node sendiri, sedangkan efek 3D-nya memakai CSS transform.
