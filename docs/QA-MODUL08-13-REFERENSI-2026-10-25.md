# Audit substansi pra-UAT — Modul 08 dan 13 (25 Oktober 2026)

**Status:** catatan reviewer, bukan persetujuan substansi dan **bukan** materi peserta.
**Aturan rilis:** kandidat tetap terpisah dari `site/modules.json`; tidak mengubah `main`.

## Artefak kandidat yang perlu dinilai secara visual

- [Modul 08 v1.8 — Jalur dan kebutuhan rujukan](https://docs.google.com/presentation/d/1dvPm2LcNblNfy0Yo6fzsWtG6yOdndFyQ/edit) (PPTX kandidat, bukan manifest peserta).
- [Modul 13 v2.0 — Alur MWL dan ImagingStudy](https://docs.google.com/presentation/d/1ajDnVtWpuO3LOj5W3jvRUk0j0VEKVvXr/edit) (PPTX kandidat, bukan manifest peserta).
- [Modul 09 v1.6 — akses informasi RME](https://docs.google.com/presentation/d/1V1bsZRVGsG4H-2pIFp6LZROZj6MhRbmGpFuZhGR-Oqk/edit) (Google Slides native; sudah ada laporan visual terpisah).

## Matriks pemeriksaan substansi

| Modul | Hal yang harus dibedakan | Risiko bila rancu | Bukti/aksi reviewer |
| --- | --- | --- | --- |
| 08 | Rujukan rawat jalan vs rawat inap/darurat | Semua jalur dianggap memakai proses dan kontrak yang sama | Cocokkan dengan playbook rujukan v6.1; tinjau masing-masing skenario, termasuk peran BPJS untuk rawat jalan |
| 08 | Kebutuhan terapi/diagnostik/tindakan di **tujuan** vs tindakan yang sudah dilakukan di **asal** | Salah makna jawaban kuesioner rujukan | Verifikasi judul kolom, gambar dan contoh kasus, bukan teks slide saja |
| 08 | Rujukan vs pengiriman data RME rutin | Menganggap permintaan rujukan menggantikan pengiriman Encounter/Condition | Pisahkan diagram alur dan definisi kedua tanggung jawab |
| 13 | Order dari SIMPUS/SIMRS vs layanan MWL | Menganggap MWL selalu membuat order klinis | Pastikan proses order dimulai sistem fasyankes; MWL membantu modality memperoleh daftar pemeriksaan |
| 13 | MWL internal Router vs MWL terpisah vs input manual | Mengajarkan hanya satu pola integrasi | Gunakan diagram skenario, sertakan catatan bahwa dukungan bergantung implementasi |
| 13 | `ServiceRequest` / Accession Number vs StudyInstanceUID | Menyamakan identitas permintaan dengan identitas studi DICOM | Beri label berbeda pada order, studi, dan relasinya |
| 13 | Pertukaran worklist (C-FIND) vs transfer citra (C-STORE) | Menganggap query worklist berarti citra terkirim | Audit panah dan keterangan protokol pada tiap ilustrasi |
| 13 | File DICOM vs `ImagingStudy` vs `DiagnosticReport` | Menganggap metadata studi berarti citra/laporan final sudah tersedia | Pisahkan bukti unggah file, registrasi studi dan laporan pembacaan |
| 13 | Urutan pengiriman pada diagram implementasi | Menganggap satu urutan teknis mutlak berlaku di semua arsitektur | Cocokkan dengan playbook terbaru dan diagram spesifik konfigurasi; hindari kalimat absolut |

## Sumber resmi untuk review

1. [Playbook Rujukan Pasien](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/rujukan/) — riwayat versi 6.1 pada 21 Agustus 2026.
2. [DICOM Router](https://satusehat.kemkes.go.id/platform/docs/id/dicom-system/dicom-router/) — terdapat pola MWL di dalam dan di luar Router.
3. [Arsitektur DICOM](https://satusehat.kemkes.go.id/platform/docs/id/dicom-system/architecture/) — order SIMPUS/SIMRS, `ServiceRequest`, Accession Number, citra dan `ImagingStudy`.
4. [Playbook IGD](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/igd/) — contoh alur radiologi termasuk skenario USG dan pemisahan data FHIR.

**Catatan pengendalian sumber:** penjelasan naratif dan diagram pada dokumentasi Router dapat berbeda urutan operasi menurut skenario. Hindari menjadikannya satu urutan universal tanpa memeriksa implementasi dan revisi rujukan yang berlaku. Materi pembelajaran tidak perlu menampilkan konfigurasi internal, kredensial, jaringan, URL privat, atau pengenal fasyankes nyata.

## Bukti yang belum tersedia

- Inspeksi visual individu setiap slide/komik pada kandidat Modul 08 dan 13, termasuk tulisan raster.
- Pembuktian sumber dan lisensi untuk setiap aset gambar.
- Validasi SME atas diagram dan butir evaluasi terkait.
- UAT peserta anonim dan Android setelah kandidat nantinya disetujui.

**Keputusan:** NO-GO untuk promosi kandidat; gunakan matriks ini sebagai daftar periksa saat memperbaiki sumber gambar/slide final.
