# QA Modul 09 v1.7 — penggantian ilustrasi raster menjadi panel native

**Tanggal:** 25 Oktober 2026  
**Status:** KANDIDAT PRA-UAT / NO-GO — bukan materi yang ditautkan pada LMS peserta.

## Artefak
- **Kandidat baru:** [Modul 09 v1.7 — Panel Native Pra-UAT](https://docs.google.com/presentation/d/1LMoFw2eYslH7-Q2zQ62JV6Z1nc27_2Py63DT0i6oOzs/edit)
- **Basis:** [Modul 09 v1.6 — Koreksi Visual dan Akses](https://docs.google.com/presentation/d/1V1bsZRVGsG4H-2pIFp6LZROZj6MhRbmGpFuZhGR-Oqk/edit)
- **Riwayat QA:** [QA Modul 09 v1.6](QA-MODUL09-VISUAL-2026-10-25.md)

## Perubahan benar-benar diterapkan

Salinan Google Slides baru dibuat tanpa memodifikasi file v1.6, `main`, atau `site/modules.json`. Tiga halaman di bawah diubah dari gambar raster dengan overlay menjadi komponen native Google Slides:

| Halaman fisik | Elemen raster sebelum | Elemen raster setelah | Konten panel native |
| --- | ---: | ---: | --- |
| 20 | 1 | **0** | Periksa pasien/konteks, tujuan pelayanan, dan hak akses |
| 28 | 1 | **0** | Persetujuan melalui mekanisme resmi yang sesuai layanan; peran, tujuan, batas informasi dan audit |
| 40 | 1 | **0** | Bedakan metadata ImagingStudy, citra DICOM dan laporan DiagnosticReport; data kosong bukan bukti layanan tidak dilakukan |

Pada ketiga halaman, elemen gambar lama dan overlay lama telah **dihapus dari struktur slide**, bukan hanya disembunyikan. Judul, kartu, diagram, catatan keamanan, dan footer kini berupa bentuk dan teks yang dapat diedit langsung.

## Verifikasi aktual melalui Google Slides API

- **Jumlah slide:** tetap 60.
- **Slide 20:** 0 gambar raster; 11 objek berisi teks native.
- **Slide 28:** 0 gambar raster; 13 objek berisi teks native.
- **Slide 40:** 0 gambar raster; 11 objek berisi teks native.
- **Speaker notes:** 3 halaman diperbarui, dan isinya berhasil dibaca ulang setelah penulisan.
- **Nama istilah internal:** audit teks kandidat v1.6 sebelumnya tidak menemukan istilah terlarang; penggantian native tidak memasukkan nama komponen infrastruktur internal.
- **Pemisahan sumber:** tautan peserta Modul 09 di `site/modules.json` **tetap menunjuk materi yang sudah ada**, bukan kandidat v1.7.
- **Izin akses kandidat baru saat pemeriksaan:** pembaca dari domain `tau.ac.id` dan pemilik file; tidak ditemukan izin `anyone` dalam metadata yang dikembalikan. Jangan mengasumsikan UAT anonim berhasil.

## Pemeriksaan yang masih diperlukan

- [ ] Review visual resolusi penuh halaman 20, 28, 40 pada Chrome desktop dan Android; pastikan tidak ada teks terpotong atau ukuran huruf terlalu kecil.
- [ ] Validasi SME pernyataan consent, otorisasi, emergency access, dan status hasil menurut panduan resmi terkini.
- [ ] Periksa **27 halaman ilustrasi raster lain** (asal 30 halaman visual dikurangi 3 yang diganti), termasuk tulisan kecil, lisensi, hak cipta, dan alt text.
- [ ] Audit seluruh speaker notes dan metadata, bukan hanya tiga halaman baru.
- [ ] Uji izin akses 51 berkas katalog secara anonim; tanda akses Drive saja tidak cukup.
- [ ] Review ke-262 butir asesmen dan lima aset yang ditahan.
- [ ] Persetujuan tertulis pemilik materi sebelum mengganti ID deck pada manifest.

## Batas klaim

Pemeriksaan struktur membuktikan bahwa ketiga halaman **tidak lagi memiliki objek gambar raster**, tetapi **bukan** bukti bahwa seluruh desain telah lulus pemeriksaan visual atau konten sudah disetujui. Tiga halaman native ini juga bukan alasan mempromosikan kandidat ke versi peserta sebelum UAT.

**Keputusan:** NO-GO rilis resmi; gunakan sebagai bahan review.
