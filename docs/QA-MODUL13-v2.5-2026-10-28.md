# QA Modul 13 v2.5 — Koreksi alur Router GET ServiceRequest (28 Oktober 2026)

**Status:** kandidat PPTX lokal untuk Pra-UAT; **NO-GO** publikasi resmi.  
**Basis:** Modul 13 v2.4 (37 slide) dari Google Drive, sumber tetap utuh.  
**File hasil:** `Modul_13_SATUSEHAT_v2.5_Koreksi_Router_GET_ServiceRequest_PraUAT_20261028.pptx` (dibuat pada sesi QA, **belum diunggah sebagai materi peserta atau ke Drive**).

## Temuan substansi yang diperbaiki

Pada kandidat v2.4, slide 09 menyebut SIMPUS menyediakan order langsung ke Router/MWL. Itu tidak mengikuti skenario Router SATUSEHAT yang ditetapkan untuk pembelajaran USG Puskesmas:

1. **SIMPUS → SATUSEHAT:** SIMPUS membentuk permintaan, Accession, dan POST `ServiceRequest`.
2. **USG → Router/MWL:** alat mengirim **DICOM C-FIND**, bukan HTTP GET FHIR.
3. **Router → SATUSEHAT:** untuk skenario MWL Router, Router melakukan **FHIR GET ServiceRequest untuk pemeriksaan hari itu** saat menangani C-FIND.
4. **Router/MWL → USG:** daftar worklist DICOM disajikan, operator memilih order yang cocok.
5. **USG → Router:** sesudah akuisisi, file DICOM dikirim memakai **C-STORE**, berbeda dari FHIR `ImagingStudy`.
6. **Router → SATUSEHAT/NIDR:** bukti metadata `ImagingStudy` dan citra DICOM diperiksa terpisah. Hasil klinis `DiagnosticReport` ditangani oleh klinisi/SIMPUS.

Alternatif MWL di luar Router hanya dipertahankan sebagai konfigurasi yang bergantung dukungan/persetujuan implementasi, **bukan** alur utama dengan push order langsung ke Router.

## Pembaruan slide

| Slide | Revisi |
|---:|---|
| 02 | Speaker notes mendefinisikan alur utama SIMPUS POST → Router GET saat C-FIND |
| 05 | Peta besar menunjukkan **SIMPUS → SATUSEHAT → Router/MWL** dan masing-masing transaksi FHIR/DICOM |
| 09 | Pola A menghapus push langsung SIMPUS→Router; menegaskan FHIR GET oleh Router |
| 12 | Diagram menyatakan Router GET ServiceRequest pemeriksaan hari ini; notes tidak lagi menyamakan Router GET dengan akses FHIR oleh alat USG |
| 17 | Langkah 08 mencantumkan GET ServiceRequest oleh Router, lalu pencocokan Accession |
| 18 | Diagram C-FIND membedakan POST FHIR, GET Router, dan DICOM request/response |
| 21 | Sumber worklist ditulis sebagai `ServiceRequest` SATUSEHAT, bukan push langsung ke MWL |
| 36 | Simulasi end-to-end mencantumkan Router GET order hari itu saat C-FIND |

Sumber PPTX tidak ditimpa. Perbaikan menggunakan objek dan text runs native yang tetap dapat diedit. Tidak ada diagram gambar yang dirasterisasi.

## Hasil QA teknis

- **37/37 slide** utuh; **37/37 speaker notes** berisi teks.
- **5 ilustrasi raster** kontekstual tetap ada (tidak bertambah dari v2.4).
- **14 penggantian teks utama**, **8 pembaruan label diagram tambahan**, dan **9 pembaruan speaker notes**.
- Integritas arsip PPTX/ZIP CRC: **lulus**; file berukuran ±15 MB.
- Konversi PDF melalui LibreOffice: **37 halaman**; slide revisi 05, 09, 12, 17, 18, 21, 36 diperiksa melalui contact sheet. Slide 05 dan 18 diperiksa ulang setelah label sumber order diperbaiki; tulisan terbaca dan tidak terlihat teks terpotong pada render tersebut.
- Tidak ditemukan pola alamat IP jaringan privat dalam teks/notes yang diperiksa.
- Semua contoh merupakan materi simulasi; tidak menyatakan pengujian end-to-end integrasi berhasil.

## Pekerjaan yang masih terbuka

- [ ] Sinkronkan kandidat PPTX v2.5 ke area review Google Drive dengan izin sesuai prinsip least privilege; konektor Drive tidak menerima unggahan berkas hasil lokal pada sesi ini.
- [ ] Validasi SME integrasi/FHIR bahwa implementasi Router aktif memang mengambil ServiceRequest pada trigger C-FIND dengan cakupan hari yang tepat, termasuk autentikasi, filter, paging, order ganda, cache, dan fallback.
- [ ] Audit visual dan lisensi lima ilustrasi raster, serta pengujian layout pada Android/iOS.
- [ ] Verifikasi izin folder review (metadata sebelumnya masih `domain: reader` untuk `tau.ac.id`).
- [ ] UAT peserta, validasi asesmen, dan persetujuan pemilik konten.

**Jangan** mengganti ID materi peserta di `site/modules.json`, membuka asesmen yang ditahan, merge PR untuk publikasi resmi, atau deploy kandidat sebelum gerbang GO selesai.
