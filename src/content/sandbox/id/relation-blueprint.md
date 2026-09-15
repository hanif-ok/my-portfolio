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

Sebuah denah dengan wajah-wajah di atasnya.

Itu saja idenya. Unggah peta tempat yang nyata — kantor, gedung acara, sebuah jalan — lalu taruh orang di atasnya. Sekarang kamu bisa melihat siapa ada di mana. Klik siapa pun untuk membaca profilnya. Tarik garis antara dua orang, dan peta menjaga garis itu tetap menempel saat kamu memindahkan mereka.

Kalau peta bukan lagi sudut pandang yang berguna, ada graf: orang yang sama, disusun berdasarkan hubungan, bukan lokasi. Ketuk seseorang dan semuanya menata ulang di sekelilingnya.

## Datamu tidak ke mana-mana

Ini bagian yang paling saya pedulikan.

Tidak ada server. Tidak ada pendaftaran, tidak ada akun, tidak ada basis data yang duduk di mesin orang lain sambil diam-diam mengumpulkan apa yang kamu ketik. Kamu menghubungkan Google Drive milikmu sendiri, dan di situlah semuanya tinggal — di folder biasa yang bisa kamu buka, salin, atau hapus tanpa perlu izin aplikasinya.

Aplikasinya cuma bisa melihat berkas yang ia buat sendiri, bukan sisa isi Drive-mu. Dan ia melupakan sesi loginmu begitu tab ditutup.

Itu penting karena aplikasi ini menyimpan orang sungguhan — nama mereka, wajah mereka, nomor telepon mereka. Rasanya salah kalau dibuat dengan cara lain.

## Dibuat untuk tahan diinterupsi

Peramban ditutup. Laptop tertidur. Wi-Fi putus di tengah proses menyimpan.

Jadi basis datanya ditulis sedemikian rupa sehingga langkah paling akhir adalah satu-satunya yang dihitung. Semua yang sebelumnya tidak terlihat. Kalau proses simpan mati di tengah jalan, kamu tidak dapat basis data setengah jadi — kamu dapat yang lama, utuh sepenuhnya, seolah tidak terjadi apa-apa.

Ia juga jalan tanpa internet sama sekali. Perubahan menunggu, lalu tersinkron saat kamu kembali daring.

## Pencarian yang paham maksudmu

Ketik "smith" dan yang kamu maksud kemungkinan nama belakang, bukan setiap pandai besi di catatanmu.

Jadi kamu yang memilih field mana yang dihitung. Centang satu kotak, dan pencariannya hanya melihat di situ. Ia juga menunjukkan field mana yang cocok, supaya kamu tahu kenapa sesuatu muncul.

## Posisinya sekarang

Sebagian besar sudah jadi dan berfungsi. Satu fitur yang direncanakan sengaja dicoret — opsi penyimpanan kedua yang bakal meminta kata sandi seluruh akunmu. Inti aplikasi ini adalah meminta sesedikit mungkin, jadi fitur itu tidak lolos.

Gratis dan sumber terbuka, dari atas sampai bawah.
