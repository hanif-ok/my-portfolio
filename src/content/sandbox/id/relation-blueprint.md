---
lang: "id"
title: "Relation Blueprint"
summary: "Petakan siapa ada di mana dan telusuri bagaimana mereka terhubung — dari basis data yang sepenuhnya milikmu, tanpa server di belakangnya."
year: 2026
order: 0
cover: "/images/sandbox/relation-blueprint.svg"
coverAlt: "Tiga simpul yang saling terhubung di atas pelat gelap, satu di antaranya berwarna amber — tanda Relation Blueprint."
liveHref: "https://relations.hanifok.com/"
repoHref: "https://github.com/hanif-ok/relation_blueprint"
stack: ["React", "TypeScript", "Vite", "Konva", "Cytoscape", "Dexie", "Google Drive API"]
---

Relation Blueprint menjawab tiga pertanyaan tentang sekelompok orang: siapa ada di mana, mereka seperti apa, dan bagaimana mereka saling terhubung.

Kamu mengunggah denah — gedung, jalan, atau lokasi acara — lalu menempatkan orang di atasnya sebagai penanda berfoto. Buka siapa pun untuk membaca profilnya. Tarik hubungan antar orang, dan peta menumbuhkan konektor yang mengikuti penanda saat kamu menggesernya. Ada tampilan graf untuk saat tata letak spasial bukan lagi pertanyaan yang berguna.

## Tanpa server di belakangnya

Seluruhnya hanya bundel statis. Tidak ada backend, tidak ada akun, dan tidak ada basis data yang saya kendalikan — kamu menghubungkan Google Drive milikmu sendiri, dan di situlah datamu tinggal, dalam folder biasa yang bisa kamu buka, salin, atau hapus tanpa aplikasinya.

Aplikasi ini hanya meminta scope `drive.file`, artinya ia cuma bisa menyentuh berkas yang ia buat sendiri dan tidak ada yang lain di Drive-mu. Token akses disimpan di memori saja dan tidak pernah dipersistenkan; tidak ada refresh token yang mengendap di peramban.

Bagian inilah yang paling ingin saya benarkan. Aplikasi yang menyimpan nama, nomor telepon, dan foto orang sungguhan seharusnya tidak sekalian meminta kamu memercayai server yang saya jalankan.

## Titik komit

Aplikasinya offline-first, jadi IndexedDB adalah sumber kebenaran saat runtime — perubahan mengantre secara lokal dan terkirim saat kamu tersambung lagi.

Penyimpanannya dipecah menjadi shard, dan batasan yang menarik adalah tab peramban bisa mati di tengah penulisan kapan saja. Maka basis data ditulis sebagai sekumpulan shard plus satu manifest, dan **penimpaan manifest adalah satu-satunya titik komit**: shard ditulis lebih dulu dan tidak berarti apa-apa sampai manifest baru menyebutnya. Penulisan yang terputus meninggalkan shard yatim dan basis data yang utuh sempurna. Ada uji injeksi kegagalan yang mematikan penulisan di tengah jalan dan memastikan persis hal itu.

## Dua kanvas

Editor petanya memakai Konva — lapisan yang bisa dikunci dan diurutkan ulang, bentuk dan zona untuk ruangan, penanda portal yang melompat ke peta lain, dan grup peta bersarang untuk lantai → gedung → jalan. Koordinat penanda disimpan dalam ruang gambar, bukan ruang layar, sehingga menyetel ulang gambar latar tetap menambatkan setiap orang pada titik fisiknya. Satu orang yang ditempatkan di enam peta tetap satu catatan; sunting sekali, semua penempatannya ikut.

Grafnya memakai Cytoscape. Ketuk sebuah simpul dan tata letaknya membentuk ulang di sekitar orang itu; ketuk yang lain dan fokusnya berpindah; keluar dari fokus dan tata letak simpananmu kembali. Menggeser simpul hanya soal tata letak — tidak pernah mengubah data.

## Pencarian yang memang saya mau

Fuzzy, toleran terhadap awalan, dengan bobot lebih pada nama — dan dilingkupi per atribut lewat kotak centang. Bagian terakhir itu intinya: mencari "smith" seharusnya bisa berarti nama belakang, bukan setiap pandai besi dalam data. Setiap hasil menunjukkan field mana yang memunculkannya, dan indeksnya diperbarui bertahap sambil kamu menyunting.

## Posisinya sekarang

Enam dari delapan fase v1 sudah rampung dan terverifikasi. Penyedia penyimpanan kedua sengaja dibatalkan alih-alih dibiarkan menggantung — login Mega.nz adalah kredensial akun penuh, sedangkan seluruh premis di sini adalah hak akses seminimal mungkin, jadi alternatif Drive yang berlingkup memenangkan perdebatan itu.

Semua dependensinya gratis dan sumber terbuka. tldraw ditolak saat riset karena mensyaratkan lisensi produksi berbayar.
