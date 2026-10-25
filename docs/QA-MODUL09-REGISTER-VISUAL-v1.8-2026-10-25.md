# Register pemeriksaan visual tersisa — Modul 09 v1.8

**Status:** Pra-UAT / NO-GO. Semua kolom konfirmasi visual dan lisensi masih **belum diuji**. Ini register struktur berdasarkan Google Slides API, bukan klaim lolos visual QA.

- Deck kandidat: [Modul 09 v1.8](https://docs.google.com/presentation/d/1HDVlAuPO7IAN8fnhQ6jk_aYuPGZ2yIBmfNlKx6-QPME/edit)
- Baseline 60 slide, dengan enam slide ilustrasi yang telah diubah menjadi native (20, 26, 28, 30, 40, 43).
- 24 halaman lain masih memiliki gambar raster.
- Teks alternatif masih deskripsi topik generik yang **harus ditulis ulang berdasarkan isi visual aktual** setelah melihat ilustrasi resolusi penuh.

| Slide | Prioritas review* | ID gambar | Deskripsi topik yang tersedia | Audit isi visual | Lisensi/hak | Alt text final |
|---:|---|---|---|---|---|---|
| 3 | SEDANG | `mod9_img_002` | Kasus awal: pasien berpindah fasyankes | Belum | Belum | Belum |
| 5 | SEDANG | `mod9_img_003` | Lima kemampuan yang akan dikuasai | Belum | Belum | Belum |
| 7 | SEDANG | `mod9_img_004` | Glosarium cepat sebelum mulai | Belum | Belum | Belum |
| 9 | SEDANG | `mod9_img_005` | Dari pelayanan hingga informasi dapat dibaca ulang | Belum | Belum | Belum |
| 11 | SEDANG | `mod9_img_006` | Dua proses berbeda: pengiriman dan akses kembali | Belum | Belum | Belum |
| 13 | SEDANG | `mod9_img_007` | Catatan asli berbeda dari ringkasan informasi | Belum | Belum | Belum |
| 15 | SEDANG | `mod9_img_008` | Pasien yang sama bisa memiliki banyak kunjungan | Belum | Belum | Belum |
| 17 | SEDANG | `mod9_img_009` | Apa saja informasi yang mungkin bermanfaat? | Belum | Belum | Belum |
| 19 | TINGGI | `mod9_img_010` | Ringkasan yang aman mempertahankan konteks | Belum | Belum | Belum |
| 22 | SEDANG | `mod9_img_011` | Kartu hasil: lengkap konteks atau belum? | Belum | Belum | Belum |
| 24 | TINGGI | `mod9_img_012` | Lima pertanyaan sebelum menggunakan riwayat pasien | Belum | Belum | Belum |
| 32 | TINGGI | `mod9_img_016` | Jejak akses dan asal data mendukung akuntabilitas | Belum | Belum | Belum |
| 34 | TINGGI | `mod9_img_017` | Gunakan informasi sesuai kebutuhan minimum | Belum | Belum | Belum |
| 36 | TINGGI | `mod9_img_018` | Memahami status dan perubahan hasil | Belum | Belum | Belum |
| 38 | TINGGI | `mod9_img_019` | Resep, dispensing, dan pemberian berbeda | Belum | Belum | Belum |
| 41 | TINGGI | `mod9_img_020` | Citra radiologi berbeda dari laporan pembacaan | Belum | Belum | Belum |
| 45 | SEDANG | `mod9_img_022` | Pohon keputusan bila riwayat tidak sesuai | Belum | Belum | Belum |
| 47 | SEDANG | `mod9_img_023` | Peran masing-masing profesi saat memakai riwayat | Belum | Belum | Belum |
| 49 | TINGGI | `mod9_img_024` | Contoh ringkasan lintas fasyankes P-001 | Belum | Belum | Belum |
| 51 | TINGGI | `mod9_img_025` | Studi kasus terpadu: riwayat P-001 yang tidak lengkap | Belum | Belum | Belum |
| 53 | TINGGI | `mod9_img_026` | Pembahasan kasus: jangan menebak data kosong | Belum | Belum | Belum |
| 55 | TINGGI | `mod9_img_027` | Latihan mandiri: empat status informasi | Belum | Belum | Belum |
| 57 | TINGGI | `mod9_img_028` | Kuis mandiri: enam keputusan tanpa petunjuk | Belum | Belum | Belum |
| 59 | TINGGI | `mod9_img_029` | Pembahasan kuis: keputusan dan alasan | Belum | Belum | Belum |

\*Prioritas **TINGGI** menunjukkan pentingnya akurasi topik klinis, izin, data/konteks atau asesmen; bukan temuan konten berbahaya.

## Tata cara menuntaskan register

1. Render slide pada resolusi penuh dan cocokkan seluruh teks serta panah terhadap slide penjelasan pendamping.
2. Periksa ilustrasi berisi contoh pasien agar seluruh identitas memang sintetis/rekaan.
3. Periksa sumber dan lisensi masing-masing gambar sebelum rilis publik.
4. Tulis alt text yang menggambarkan makna visual aktual, bukan hanya 'ilustrasi tentang...'.
5. Catat reviewer, tanggal, bukti, perbaikan, dan keputusan satu per satu.
6. Jangan mengganti ID deck peserta pada `site/modules.json` sampai UAT dan sign-off SME lengkap.

## Pemeriksaan struktur yang benar-benar sudah diverifikasi

Ketiga halaman tambahan 26, 30, 43 telah diganti menjadi diagram native dan speaker notes diisi. Pembacaan balik API:
- `mod9_illust_013`: 0 gambar, 11 elemen teks native, catatan pengajar tersedia.
- `mod9_illust_015`: 0 gambar, 11 elemen teks native, catatan pengajar tersedia.
- `mod9_illust_021`: 0 gambar, 13 elemen teks native, catatan pengajar tersedia.

Belum diuji: visual desktop/Android, seluruh 24 raster, isi gambar tingkat mikro, serta persetujuan SME. **NO-GO.**

**Keputusan:** bahan audit internal; bukan dokumen yang dipublikasikan di portal peserta.