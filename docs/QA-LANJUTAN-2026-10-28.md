# Kelanjutan QA Kurikulum SATUSEHAT — 28 Oktober 2026

**Status:** PRA-UAT / NO-GO. Dokumen ini merupakan bukti pemeriksaan terbatas, **bukan** sign-off substansi atau izin untuk menayangkan materi kandidat. Tidak ada perubahan pada `site/modules.json`, lima asesmen tertahan, materi peserta Google Drive, maupun deployment publik.

## 1. Inventaris versi terakhir yang ditemukan

| Area | Kandidat terbaru yang diperiksa/diidentifikasi | Pemeriksaan saat ini |
|---|---|---|
| Modul 09 | [Google Slides v2.6](https://docs.google.com/presentation/d/1vlemdZVuS97qHIqQ3_5tw5dSLLkICdzOuqCyCnNRUE8/edit) — 27 Okt 2026 | Readback struktur, teks dan notes API Google Slides, 28 Okt |
| Modul 11 | [PPTX v2.7](https://docs.google.com/presentation/d/1xQOUi-2dU9-62dPuSSWjySWSjEDb30tI/edit) — 27 Okt 2026 | [Laporan QA v2.7](https://drive.google.com/file/d/1CQ0F_daKzbstOOwPjQRpymbfwy1gAuF7/view) telah dibaca; belum mengulang render/UAT di sesi ini |
| Modul 13 | [PPTX v2.4](https://docs.google.com/presentation/d/1fQgBupKqT0Zh4_zzK93bxsldeF2iaS0R/edit) — 27 Okt 2026 | [Laporan QA v2.4](https://drive.google.com/file/d/1SHMAUIkF72C1rMW35lpJyVjaJnN0bTGa/view) telah dibaca; belum mengulang render/UAT di sesi ini |

## 2. Audit struktur terbaru Modul 09 v2.6

Pemeriksaan menggunakan respons lengkap native Google Slides API, bukan inferensi dari judul berkas lama:

- **60/60 slide** ditemukan; objek `image` dari `pageElements`: **0** untuk seluruh deck. Artinya **tidak ada objek gambar raster yang tersisa pada kandidat v2.6**; laporan v1.9 yang masih menyebut 17 gambar raster tidak berlaku untuk versi ini.
- **60/60 speaker notes** mempunyai isi teks, dengan rentang **245–793 karakter** per slide. Speaker notes perlu review substansi dan tidak menggantikan UAT.
- Penomoran footer **2–60** yang terdeteksi konsisten dengan urutan fisik; slide 1 merupakan halaman pembuka tanpa footer bernomor. Tidak ditemukan footer salah nomor.
- Rujukan halaman pada slide **18 → 21; 50 → 52; 54 → 52; 56 → 58; 57 → 58** berada dalam rentang 1–60. Ini pemeriksaan kewajaran referensi, bukan bukti visual penempatan/keakuratan petunjuk.
- Pemindaian teks dan notes untuk indikator seperti `staging`, `localhost`, IP privat berbentuk URL, `API_KEY`, dan `PRIVATE KEY` tidak menghasilkan kecocokan. Pemindaian terbatas pada teks yang dapat dibaca dari API.
- Teks yang relatif padat muncul pada slide **56 (111 kata), 58 (106 kata), 59 (97 kata)**; prioritas cek baca mobile dan keterbacaan visual.
- Semua halaman memiliki bentuk/teks native. **Belum dilakukan render ulang 60 halaman dan inspeksi setiap piksel/diagram di sesi ini**, sehingga pernyataan '0 raster' tidak berarti diagram, ejaan, ikon, atau geometri sudah lulus QA penuh.

**Temuan yang masih terbuka:** QC visual 60 slide pada resolusi penuh; keterbacaan mobile; fakta medis/klinis dan consent oleh SME; lisensi sumber aset lama; link anonim. Tidak boleh mengubah status dari NO-GO berdasarkan audit struktur saja.

## 3. Penguatan gerbang CI di branch PR

- `site/validate.cjs`: daftar kandidat yang belum disetujui diperbarui untuk **Modul 11 v2.6/v2.7** dan **Modul 13 v2.1/v2.2/v2.4**. Guard fingerprint aset yang sudah ada tetap memblokir perubahan ke **ID kandidat yang tidak dikenal**.
- `site/test-qa-gates.cjs`: uji mutasi manifest dalam folder temporer terisolasi: baseline valid, penggantian deck Modul 09 v2.6 / 11 v2.7 / 13 v2.4 harus ditolak, serta penggantian ID asesmen aktif/ditahan harus ditolak.
- `.github/workflows/pages.yml`: menambahkan eksekusi tes negatif tersebut ke job validate. Job package/deploy tetap **tidak berjalan pada PR**.
- Verifikasi status CI wajib melihat hasil run GitHub Actions sesudah commit terbaru; menambahkan skrip tidak sama dengan menyatakan CI sudah lulus.

## 4. Temuan P0 — akses domain pada berkas kandidat internal (28 Oktober)

Pemeriksaan `get_file_metadata` Google Drive mengembalikan izin `domain: reader` untuk **tau.ac.id** pada folder [LMS_SATUSEHAT_INTERNAL_REVIEW_2026-10-16](https://drive.google.com/drive/folders/1P9JYkeTYKBSDTlzoqaJKcmAsgtlxo_x_) serta ketiga kandidat berikut: Modul 09 v2.6, Modul 11 v2.7, dan Modul 13 v2.4. Semua juga menunjukkan izin `user: owner`. **Artinya berkas review belum dapat dinyatakan Restricted; akses baca di tingkat domain masih ada.**

**Tindakan korektif P0:** pemilik/pengelola izin harus menghapus izin `tau.ac.id — Reader` pada folder review dan tiap berkas yang mempunyai izin langsung; setelah itu lakukan verifikasi metadata ulang dan uji akses akun yang tidak berhak. Connector yang tersedia pada sesi ini tidak menyediakan aksi pencabutan permission, sehingga **izin belum diubah**. Jangan menganggap memindahkan file ke folder arsip otomatis mencabut izin domain atau izin langsung.

## 5. Tindakan yang masih perlu bukti manusia

1. Validasi **262 soal** (kunci, distraktor, rubrik) oleh SME. Lima asesmen yang tertahan tetap tanpa URL publik.
2. QA semua ilustrasi/diagram dari seluruh 13 modul, berikut atribusi/lisensi dan ketepatan makna, dengan screenshot resolusi penuh.
3. UAT Chrome anonim dan Android, termasuk **51 tautan** aktif sesuai register `site/uat-links.cjs`.
4. Konfirmasi izin berbagi Google Drive (terutama folder review, bukan hanya file peserta), speaker notes, komentar, metadata, serta sumber visual.
5. Persetujuan tertulis konten dan keputusan GO/NO-GO dari pemilik sebelum promosi manifest.

**Keputusan saat pencatatan: tetap NO-GO.** Draft PR tidak di-merge, materi peserta dan ID manifest tidak diubah.
