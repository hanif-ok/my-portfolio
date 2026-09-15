---
lang: "id"
title: "Relation Blueprint"
summary: "Petakan siapa ada di mana dan telusuri bagaimana mereka terhubung, dari basis data yang sepenuhnya milikmu tanpa server di belakangnya."
year: 2026
order: 0
cover: "/images/sandbox/relation-blueprint.svg"
coverAlt: "Tiga simpul yang saling terhubung di atas pelat gelap, satu di antaranya berwarna amber — tanda Relation Blueprint."
liveHref: "https://relations.hanifok.com/"
repoHref: "https://github.com/hanif-ok/relation_blueprint"
stack: ["React", "TypeScript", "Vite", "Konva", "Cytoscape", "Dexie", "Google Drive API"]
---

Unggah denah, taruh orang di atasnya, lalu lihat siapa ada di mana. Tiap orang punya profil berisi foto dan field apa pun yang mau kamu tambahkan. Hubungkan dua orang dan koneksinya ikut bergerak bersama mereka di peta.

Ada juga tampilan graf, yang menyusun orang yang sama berdasarkan hubungan, bukan lokasi.

Tidak ada backend, tidak ada akun. Kamu menghubungkan Google Drive sendiri dan datanya ada di sana, dalam folder biasa yang bisa kamu buka atau hapus tanpa aplikasinya. Aplikasi ini cuma dapat akses ke berkas yang ia buat sendiri, bukan sisa isi Drive-mu.

Semuanya berjalan lokal dan tersinkron ke Drive saat kamu daring. Proses simpannya selesai dalam satu langkah, jadi tab yang tertutup atau koneksi yang putus tidak meninggalkan basis data setengah jadi.

Pencariannya bisa dibatasi per field, jadi kamu bisa mencari "smith" hanya di nama, bukan di semua tempat sekaligus.
