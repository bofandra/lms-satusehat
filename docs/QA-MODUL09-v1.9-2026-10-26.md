# QA Modul 09 v1.9 — diagram FHIR, kasus, dan catatan fasilitator

**Tanggal:** 26 Oktober 2026  
**Keputusan rilis:** **NO-GO / Pra-UAT**. Versi kandidat tidak menggantikan ID deck di `site/modules.json`.

## Artefak kerja dan perlindungan rilis

- [Kandidat Modul 09 v1.9](https://docs.google.com/presentation/d/1lxHh1GkFWVvAPB0Zbrk_2NoggZqks8DBIG2ptol1Z4c/edit), salinan native Google Slides dari [v1.8](https://docs.google.com/presentation/d/1HDVlAuPO7IAN8fnhQ6jk_aYuPGZ2yIBmfNlKx6-QPME/edit).
- Deck v1.9 belum dipromosikan ke portal LMS.
- Validasi `site/validate.cjs` secara eksplisit menolak ID kandidat v1.9 pada manifest publik selama belum disetujui.

## Perubahan yang telah diterapkan dan diuji ulang melalui Google Slides API

| Slide fisik | Gambar lama | Gambar sesudah | Pengganti native yang dapat diedit |
| ---: | ---: | ---: | --- |
| 32 | 1 | **0** | `AuditEvent` dibanding `Provenance` dan batas distribusi jejak |
| 34 | 1 | **0** | Data minimum yang relevan vs membuka riwayat berlebihan |
| 36 | 1 | **0** | Status `preliminary`, `final`, dan `amended`, serta pengingat `corrected` dan `appended` |
| 38 | 1 | **0** | `MedicationRequest`, `MedicationDispense`, `MedicationAdministration` sebagai bukti berbeda |
| 41 | 1 | **0** | Metadata `ImagingStudy`, citra DICOM dan `DiagnosticReport` |
| 49 | 1 | **0** | Empat kategori dalam kasus sintetis P-001/E-001: lab, radiologi, obat, alergi |
| 53 | 1 | **0** | Fakta tersedia, hal yang belum pasti, dan langkah verifikasi |

Untuk ketujuh slide, gambar lama dan footer overlay dihapus dari **struktur slide** dan diganti bentuk/teks native. Setiap slide telah memiliki speaker notes spesifik yang dapat dibaca ulang. Total deck tetap **60** slide.

## Audit struktur seluruh dek (API readback)

- 60/60 slide memiliki catatan pembicara: tujuh halaman pengganti baru ditambahkan; 17 halaman visual lain yang sebelumnya tidak memiliki notes kini memiliki petunjuk fasilitator spesifik.
- 17 halaman masih memiliki gambar raster; turun dari 24 gambar pada v1.8.
- 17/17 gambar yang tertinggal masih mempunyai **alt text generik**, *bukan* deskripsi visual final.
- Penyaringan teks slide dan speaker notes tidak menemukan istilah infrastruktur internal terlarang yang ada dalam daftar pemeriksaan.  Ini bukan pengganti pemeriksaan teks tertanam dalam gambar raster.
- Catatan slide 49, 51 dan latihan lain konsisten memakai identitas sintetis; ini belum membuktikan semua piksel raster bebas data pribadi, yang memerlukan inspeksi visual.

## Register sisa 17 ilustrasi

Kolom status adalah *belum diverifikasi* untuk visual, lisensi, dan alt text. Urut sesuai nomor halaman asli:

| Slide | Pasangan teks | Materi yang harus diverifikasi | Visual | Lisensi | Alt text faktual |
| ---: | ---: | --- | --- | --- | --- |
| 3 | 2 | Fasyankes asal/tujuan, data tidak otomatis tersedia | Belum | Belum | Belum |
| 5 | 4 | Lima tujuan pembelajaran | Belum | Belum | Belum |
| 7 | 6 | Glosarium RME, FHIR, fasyankes | Belum | Belum | Belum |
| 9 | 8 | Pencatatan, interoperabilitas, akses sah | Belum | Belum | Belum |
| 11 | 10 | **Pengiriman RME vs hak akses ulang** | Belum | Belum | Belum |
| 13 | 12 | Catatan asli, data terstandar, ringkasan | Belum | Belum | Belum |
| 15 | 14 | Satu pasien beberapa Encounter | Belum | Belum | Belum |
| 17 | 16 | Enam contoh tipe resource klinis | Belum | Belum | Belum |
| 19 | 18 | Identitas, waktu, nilai, satuan, status | Belum | Belum | Belum |
| 22 | 21 | **Hb 12 tanpa konteks vs contoh data lengkap** | Belum | Belum | Belum |
| 24 | 23 | **Lima pemeriksaan hak akses** | Belum | Belum | Belum |
| 45 | 44 | **Pohon keputusan riwayat tidak sesuai** | Belum | Belum | Belum |
| 47 | 46 | Peran klinis, rekam medis, sistem, manajemen | Belum | Belum | Belum |
| 51 | 50 | **Kasus sintetik dengan informasi parsial** | Belum | Belum | Belum |
| 55 | 54 | Empat status informasi | Belum | Belum | Belum |
| 57 | 56 | Kuis mandiri enam keputusan | Belum | Belum | Belum |
| 59 | 58 | Kunci pembahasan dan alasan | Belum | Belum | Belum |

**Prioritas review tinggi**: halaman 11, 22, 24, 45, 51 karena memuat aturan akses atau keputusan klinis. Prioritas bukan hasil pemeriksaan visual yang sudah selesai.

## Referensi publik yang dipakai pada penjelasan native

- [FHIR R4 DiagnosticReport](https://hl7.org/fhir/R4/diagnosticreport.html) dan [daftar status laporan](https://hl7.org/fhir/R4/codesystem-diagnostic-report-status.xml.html).
- [FHIR R4 MedicationDispense](https://hl7.org/fhir/R4/medicationdispense.html) untuk batas semantik permintaan, dispensing, dan pemberian obat.
- [SATUSEHAT ImagingStudy](https://satusehat.kemkes.go.id/platform/docs/id/fhir/resources/imaging-study/) dan [SATUSEHAT DiagnosticReport](https://satusehat.kemkes.go.id/platform/docs/id/fhir/resources/diagnostic-report/).

## Batas pembuktian dan syarat keputusan GO

- [ ] Render dan telaah **60 slide utuh** secara visual pada desktop, kemudian pratinjau pada Android; cek crop, overlay lama, footer, keterbacaan dan warna.
- [ ] Konfirmasi 17 gambar raster yang tersisa benar secara makna, memiliki hak/lisensi, tidak memuat data nyata, dan alt text sesuai isi gambarnya.
- [ ] Validasi SME ketentuan consent, emergency access, status DiagnosticReport, pembuktian obat, serta kesimpulan radiologi.
- [ ] Uji akses 51 tautan katalog melalui incognito dan Android; lima asesmen QA-held tetap tidak boleh dipublikasi.
- [ ] Evaluasi soal dan rubrik asesmen serta tanda tangan pemilik konten sebelum mempromosikan deck.

**Status:** CI dan readback struktur adalah pemeriksaan teknis; keduanya tidak sama dengan kelulusan UAT manusia. **Jangan merge/publish sebagai rilis resmi.**
