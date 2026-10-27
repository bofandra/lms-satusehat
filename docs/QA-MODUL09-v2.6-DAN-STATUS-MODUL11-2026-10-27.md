# QA kandidat Modul 09 v2.6 dan status Modul 11 v2.2 — 27 Oktober 2026

**Keputusan:** PRA-UAT / NO-GO. Dokumen internal untuk peninjauan, bukan pengesahan ilmiah atau materi LMS peserta.

## A. Modul 09 — salinan kandidat v2.6

- **Sumber:** [Modul 09 v2.5](https://docs.google.com/presentation/d/13_jClxMBYmZl7xuXP6bQlFtE_jjw-JqBZT0QOxsxf1U/edit)
- **Hasil editable:** [Modul 09 v2.6](https://docs.google.com/presentation/d/1vlemdZVuS97qHIqQ3_5tw5dSLLkICdzOuqCyCnNRUE8/edit)
- Deck disalin, bukan menimpa sumber. 60 slide dengan ilustrasi berupa elemen native Google Slides, bukan raster.
- **Slide 54:** `A. Lab bertanggal` diganti menjadi `A. Hasil lab terlihat`. Status TERSEDIA kini bermakna hasil terlihat di tampilan, **bukan otomatis valid untuk keputusan klinis**; pasien, Encounter, waktu, nilai/satuan, status dan asal sumber tetap harus diperiksa.
- **Slide 56:** pertanyaan keenam diubah menjadi `Riwayat berbeda: verifikasi apa?` agar selaras dengan latihan slide 57 dan pembahasan slide 58.
- **Notes fasilitator** ditambahkan pada slide **21, 48, 50, 54, 56, 58**, membedakan ketersediaan informasi, bukti klinis, peristiwa obat, ketersediaan citra vs laporan, dan kewenangan akses. Notes tidak boleh dianggap SOP klinis.
- **24 text box latihan** dengan tipografi ±11,8 pt diseragamkan menjadi **12 pt**. Ukuran teks metadata/footer tidak dibesarkan; khusus keterangan non-naratif dibiarkan seperti sumber.
- Readback Slides API: penggantian teks masing-masing **1 occurrence**; keenam notes baru terbaca; konten slide asli di luar koreksi tersebut dipertahankan.

## B. Pemeriksaan struktural

| Pemeriksaan | Hasil | Batas |
|---|---|---|
| Slide pada v2.6 | 60 | Lolos secara API |
| Gambar raster dalam slide | 0 | Struktur native, bukan jaminan mutu visual |
| Speaker notes | 60/60 | Terisi; isi seluruh notes belum disahkan SME |
| Footer nomor slide | 02/60–60/60 sesuai nomor; cover berbeda | Lolos teks hasil ekstraksi |
| Edit redaksi | 54 dan 56 | Readback cocok |
| Perbaikan tipografi | 24 objek | API write sukses; belum seluruhnya diuji responsif di Android |
| Gambar/diagram resolusi penuh | Belum diaudit menyeluruh | **NO-GO** |
| Link Drive tanpa login | Belum diuji browser incognito | **NO-GO** |
| Seluruh asesmen 262 soal | Belum disahkan SME | **NO-GO** |
| Lisensi, hak cipta, metadata dan notes | Belum sign-off | **NO-GO** |

## C. Modul 11 — status yang diwarisi

Menurut [laporan QA kandidat v2.2](https://drive.google.com/file/d/1E1fEwALbL2JtpRxS7tbwPTe0c_9ugx0o/view), tersedia [PPTX Modul 11 v2.2](https://docs.google.com/presentation/d/1yNUsu7IMLR9YBkMdQG2odlpH-lbMsxmQ/edit), 65 slide, 29 ilustrasi dibuat editable, 0 raster, notes 65/65. Angka tersebut berasal dari laporan sebelumnya, **tidak diklaim sebagai inspeksi ulang di tahap ini**. Terdapat gate SME untuk denominator eligible/pending, `DiagnosticReport.status` dan alur rujukan, serta QA tampilan perangkat.

## D. Pengamanan publikasi

- Tambahkan ID kandidat Modul 09 v2.2–v2.6 dan Modul 11 v2.2 ke `site/validate.cjs` pada **branch draft PR #1**, tanpa perubahan `site/modules.json`, `main`, atau rilis LMS.
- CI validasi otomatis tidak membuktikan bahwa tautan 51/51 terbuka tanpa login dan tidak menggantikan UAT visual.
- Keputusan **GO** memerlukan bukti auditor visual/aksesibilitas, SME, kebijakan akses Drive, perangkat Android/desktop dan persetujuan pemilik konten.

**Acuan:** [SATUSEHAT Platform](https://satusehat.kemkes.go.id/platform/docs/id/); [HL7 FHIR R4 DiagnosticReport](https://hl7.org/fhir/R4/diagnosticreport.html); [HL7 FHIR R4 Observation](https://hl7.org/fhir/R4/observation.html).
