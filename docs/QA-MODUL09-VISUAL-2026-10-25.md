# QA visual Modul 09 v1.6 — 25 Oktober 2026

**Status:** PRA-UAT / NO-GO untuk promosi publik.  
**Artefak kandidat:** [Modul 09 v1.6 — Koreksi Visual dan Akses](https://docs.google.com/presentation/d/1V1bsZRVGsG4H-2pIFp6LZROZj6MhRbmGpFuZhGR-Oqk/edit)  
**Cakupan:** 60 slide; 30 slide teks; 28 ilustrasi raster tematik; 2 slide komik raster.  
**Dasar audit:** ekspor PDF dari kandidat native Google Slides; 5 contact sheet untuk seluruh 60 slide, pemeriksaan resolusi tinggi pada slide berisiko dan ekspor ulang sesudah perubahan.

## Hasil pekerjaan yang sudah diterapkan
1. **Perbaikan nomor halaman pada ilustrasi:** footer 28/28 slide ilustrasi (di luar dua slide komik) diselaraskan ke **nomor fisik slide / 60**. Contoh: slide 28 menjadi 28 / 60. Pengecekan pasca-ekspor PDF memverifikasi 28 teks footer tersebut.
2. **Slide 28 — persetujuan akses non-darurat:** ilustrasi lama memakai label "Kode 6 digit" dan narasi seolah kode merupakan jalur umum. Overlay teks native mengubah subjudul menjadi "Persetujuan pasien mengikuti mekanisme resmi sesuai jenis layanan" dan label menjadi "Mekanisme resmi" agar selaras dengan materi slide 27.
3. **Slide 20 — komik 1/2:** cuplikan pusat berupa screenshot identitas pasien diganti dengan kartu teks mengenai identitas, tujuan pelayanan, peran dan persetujuan. Cuplikan kanan yang masih menggambarkan kode enam digit sebagai jalur universal ditutupi kartu editorial "Akses sesuai kewenangan".
4. **Slide 40 — komik 2/2:** cuplikan pusat bertopik rujukan, yang kurang relevan dengan penanganan informasi kosong, diganti dengan kartu teks pengecekan pasien/kunjungan, waktu/status, sumber dan hak akses.
5. **Speaker notes:** slide teks ke-29 memiliki penjelasan akses darurat, kebutuhan minimum dan jejak audit. Catatan lain pada slide teks sudah tersedia.
6. **Aksesibilitas:** seluruh 30 ilustrasi/komik telah menerima alt text kontekstual yang menunjuk pokok materi terkait. Ini belum merupakan deskripsi visual rinci.
7. **Verifikasi teknis:** PDF hasil akhir tetap 60 halaman. Teks overlay pada slide 20, 28, 40 terbaca dalam hasil ekstraksi teks; nomor 28 ilustrasi terverifikasi otomatis; slide 20/28/40 dirender ulang dan diperiksa.

## Batas temuan / isu terbuka
- **Overlay bukan perbaikan sumber raster:** gambar dasar pada slide 20, 28, dan 40 masih menjadi aset raster semula. Koreksi native terlihat pada presentasi dan PDF, namun saat penerbitan permanen sumber gambar sebaiknya dirancang ulang agar metadata, source artwork, dan ekspor tidak lagi bergantung pada overlay.
- Slide komik 20 dan 40 masih memiliki inset lain dengan teks raster kecil/nomor lama dalam cuplikan gambar. Reviewer visual perlu memutuskan penggantian aset inset agar tidak ada pagination lama yang terbaca atau cuplikan berukuran terlalu kecil.
- Contact sheet mencakup seluruh 60 slide tetapi tidak menjamin semua detail mikro, komentar, lisensi visual, dan konten gambar lolos pemeriksaan mendalam. Pemeriksaan individual semua gambar/komik, hak cipta aset, dan UAT mobile masih diperlukan.
- Pernyataan proses persetujuan pasien dan akses darurat memerlukan review SME sesuai mekanisme operasional terkini; jangan menafsirkan diagram sebagai SOP tunggal.
- Konten belum mendapat persetujuan pemilik program, klinisi, privasi atau reviewer interoperabilitas. **Tetap NO-GO.**
- Katalog publik `site/modules.json` tetap menunjuk deck peserta lama; kandidat v1.6 tidak otomatis dipromosikan.

## Gerbang selanjutnya
1. Review visual resolusi penuh dan sumber raster slide 20, 28, 40 oleh editor; ganti kartu overlay dengan ilustrasi final native bila disetujui.
2. SME memverifikasi pemisahan pengiriman RME dan akses RME, persetujuan non-darurat, akses darurat, status laporan, hak petugas, dan makna "data kosong".
3. Periksa alt text seluruh 30 gambar dibanding isi visual aktual dan buat deskripsi nonteks yang betul-betul ekuivalen bila dipakai di kelas.
4. UAT tanpa login dan Android; audit 51 tautan materi peserta dan 262 butir soal secara terpisah.
5. Promosi ke manifest peserta dilakukan hanya setelah sign-off tertulis dan pengujian regresi LMS.

**Catatan versi:** berkas kandidat sebelumnya dinamai v1.5. Nama metadata Drive sekarang v1.6; ID Google Slides tidak berubah, sehingga riwayat review tetap terlacak.
